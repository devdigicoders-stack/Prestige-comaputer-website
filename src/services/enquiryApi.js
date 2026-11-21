export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

/**
 * Submit customer contact inquiry to backend
 * @param {Object} formData { fullName, email, phone, inquiryType, subject, message }
 */
export async function submitEnquiry(formData) {
  const res = await fetch(`${API_URL}/enquiries`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const json = await res.json().catch(() => ({}));

  if (!res.ok) {
    const errorMsg =
      json.message ||
      json.error ||
      `Failed to submit inquiry (status code: ${res.status})`;
    throw new Error(errorMsg);
  }

  return json.data;
}
