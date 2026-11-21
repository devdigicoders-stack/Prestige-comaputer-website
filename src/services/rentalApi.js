export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

function getAuthHeaders() {
  const token =
    typeof window !== 'undefined'
      ? localStorage.getItem('pcs_token') || localStorage.getItem('token')
      : null;

  const headers = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
}

/**
 * Submit a new computer rental application
 */
export async function submitRentalRequest(rentalData) {
  const headers = getAuthHeaders();

  const res = await fetch(`${API_URL}/rentals`, {
    method: 'POST',
    headers,
    body: JSON.stringify(rentalData),
  });

  const json = await res.json().catch(() => ({}));

  if (!res.ok) {
    const errorMsg = json.message || json.error || `Failed to submit rental request (${res.status})`;
    throw new Error(errorMsg);
  }

  return json.data;
}

/**
 * Get logged-in user's active & past rentals
 */
export async function getMyRentals() {
  const headers = getAuthHeaders();

  const res = await fetch(`${API_URL}/rentals/my-rentals`, {
    headers,
    cache: 'no-store',
  });

  const json = await res.json().catch(() => ({}));

  if (!res.ok) {
    const errorMsg = json.message || json.error || `Failed to fetch rentals (${res.status})`;
    throw new Error(errorMsg);
  }

  return json.data || [];
}

/**
 * Get single rental agreement details
 */
export async function getRentalById(id) {
  const headers = getAuthHeaders();

  const res = await fetch(`${API_URL}/rentals/${id}`, {
    headers,
    cache: 'no-store',
  });

  const json = await res.json().catch(() => ({}));

  if (!res.ok) {
    const errorMsg = json.message || json.error || `Failed to fetch rental details (${res.status})`;
    throw new Error(errorMsg);
  }

  return json.data;
}

/**
 * Get dynamic rental tenure duration plans configured by Admin
 */
export async function getRentalPlans() {
  try {
    const res = await fetch(`${API_URL}/rentals/plans`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    const json = await res.json().catch(() => ({}));
    if (!res.ok) return [];
    return json.data || [];
  } catch (err) {
    console.warn('Could not fetch rental plans:', err.message);
    return [];
  }
}
