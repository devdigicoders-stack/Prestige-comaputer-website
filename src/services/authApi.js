export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

export function getToken() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('pcs_token') || localStorage.getItem('token');
}

export function setToken(token) {
  if (typeof window === 'undefined') return;
  if (token) {
    localStorage.setItem('pcs_token', token);
  } else {
    localStorage.removeItem('pcs_token');
    localStorage.removeItem('token');
  }
}

export function removeToken() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('pcs_token');
  localStorage.removeItem('token');
}

/**
 * Register a new user in MongoDB database
 */
export async function registerUser({ name, email, password, phone, mobile, userType }) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
      phone: phone || mobile || '',
      userType: userType || 'individual',
    }),
  });

  const json = await res.json().catch(() => ({}));

  if (!res.ok) {
    const errorMsg = json.message || json.error || 'Registration failed. Please check your details.';
    throw new Error(errorMsg);
  }

  const { user, token } = json.data || {};
  if (token) {
    setToken(token);
  }

  return { user, token };
}

/**
 * Log in an existing registered user
 */
export async function loginUser({ identifier, email, password }) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      identifier: identifier || email,
      password,
    }),
  });

  const json = await res.json().catch(() => ({}));

  if (!res.ok) {
    const errorMsg = json.message || json.error || 'Login failed. Please check your credentials.';
    throw new Error(errorMsg);
  }

  const { user, token } = json.data || {};
  if (token) {
    setToken(token);
  }

  return { user, token };
}

/**
 * Get current logged in user details
 */
export async function getMe() {
  const token = getToken();
  if (!token) return null;

  const res = await fetch(`${API_URL}/auth/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    removeToken();
    return null;
  }

  const json = await res.json().catch(() => ({}));
  return json.data || null;
}

/**
 * Log out user
 */
export async function logoutUser() {
  removeToken();
  try {
    await fetch(`${API_URL}/auth/logout`, {
      method: 'POST',
    });
  } catch {
    // ignore
  }
}

/**
 * Fetch user addresses directly from MongoDB database via API
 */
export async function getUserAddresses() {
  const token = getToken();
  if (!token) return [];

  const res = await fetch(`${API_URL}/auth/addresses`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });

  if (!res.ok) return [];
  const json = await res.json().catch(() => ({}));
  return json.data || [];
}

/**
 * Add a new address to user document in MongoDB database via API
 */
export async function addUserAddress(addressData) {
  const token = getToken();
  if (!token) throw new Error('You must be signed in to add an address');

  const res = await fetch(`${API_URL}/auth/addresses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(addressData),
  });

  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(json.message || 'Failed to add address in database');
  }

  return json.data;
}

/**
 * Update an existing address in MongoDB database via API
 */
export async function updateUserAddress(addressId, addressData) {
  const token = getToken();
  if (!token) throw new Error('You must be signed in to update an address');

  const res = await fetch(`${API_URL}/auth/addresses/${addressId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(addressData),
  });

  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(json.message || 'Failed to update address in database');
  }

  return json.data;
}

/**
 * Delete an address from MongoDB database via API
 */
export async function deleteUserAddress(addressId) {
  const token = getToken();
  if (!token) throw new Error('You must be signed in to delete an address');

  const res = await fetch(`${API_URL}/auth/addresses/${addressId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(json.message || 'Failed to delete address from database');
  }

  return json.data;
}

/**
 * Update user profile details in MongoDB database via API
 */
export async function updateUserProfile(profileData) {
  const token = getToken();
  if (!token) throw new Error('You must be signed in to update your profile');

  const res = await fetch(`${API_URL}/auth/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(profileData),
  });

  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(json.message || 'Failed to update profile details');
  }

  return json.data;
}

/**
 * Change user password in MongoDB database via API
 */
export async function changePassword(passwordData) {
  const token = getToken();
  if (!token) throw new Error('You must be signed in to change your password');

  const res = await fetch(`${API_URL}/auth/change-password`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(passwordData),
  });

  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(json.message || 'Failed to update password');
  }

  return json.data;
}

/**
 * Get user saved payment methods
 */
export async function getPaymentMethods() {
  const token = getToken();
  if (!token) return [];

  const res = await fetch(`${API_URL}/auth/payment-methods`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });

  if (!res.ok) return [];
  const json = await res.json().catch(() => ({}));
  return json.data || [];
}

/**
 * Add a payment method (UPI or Card)
 */
export async function addPaymentMethod(paymentData) {
  const token = getToken();
  if (!token) throw new Error('You must be signed in to save a payment method');

  const res = await fetch(`${API_URL}/auth/payment-methods`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(paymentData),
  });

  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(json.message || 'Failed to save payment method');
  }

  return json.data;
}

/**
 * Delete a payment method
 */
export async function deletePaymentMethod(id) {
  const token = getToken();
  if (!token) throw new Error('You must be signed in to remove a payment method');

  const res = await fetch(`${API_URL}/auth/payment-methods/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(json.message || 'Failed to remove payment method');
  }

  return json.data;
}

/**
 * Fetch wishlist from MongoDB database
 */
export async function getWishlist() {
  const token = getToken();
  if (!token) return [];
  const res = await fetch(`${API_URL}/auth/wishlist`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: 'no-store',
  });
  if (!res.ok) return [];
  const json = await res.json().catch(() => ({}));
  return json.data || [];
}

/**
 * Sync full wishlist array to MongoDB
 */
export async function syncWishlistToDb(wishlist) {
  const token = getToken();
  if (!token) return;
  await fetch(`${API_URL}/auth/wishlist`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ wishlist }),
  });
}

/**
 * Toggle a product in wishlist on MongoDB
 */
export async function toggleWishlistItemApi(productId) {
  const token = getToken();
  if (!token) throw new Error('Not authenticated');
  const res = await fetch(`${API_URL}/auth/wishlist/toggle`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ productId }),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.message || 'Failed to toggle wishlist');
  return json.data;
}

/**
 * Update notification preferences
 */
export async function updateNotificationPreferences(prefs) {
  const token = getToken();
  if (!token) throw new Error('You must be signed in to update notifications');

  const res = await fetch(`${API_URL}/auth/notifications`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(prefs),
  });

  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(json.message || 'Failed to update preferences');
  }

  return json.data;
}

/**
 * Request password reset code via email
 */
export async function forgotPasswordApi(email) {
  const res = await fetch(`${API_URL}/auth/forgot-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: String(email).trim().toLowerCase() }),
  });

  const json = await res.json().catch(() => ({}));

  if (!res.ok) {
    const errorMsg =
      json.message ||
      json.error ||
      'Failed to request password reset code. Please check your email.';
    throw new Error(errorMsg);
  }

  return json.data || {};
}

/**
 * Verify 6-digit reset code
 */
export async function verifyResetCodeApi({ email, code }) {
  const res = await fetch(`${API_URL}/auth/verify-reset-code`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: String(email).trim().toLowerCase(),
      code: String(code).trim(),
    }),
  });

  const json = await res.json().catch(() => ({}));

  if (!res.ok) {
    const errorMsg =
      json.message ||
      json.error ||
      'Invalid or expired verification code.';
    throw new Error(errorMsg);
  }

  return json.data || { valid: true };
}

/**
 * Reset password using verified code
 */
export async function resetPasswordApi({ email, code, newPassword }) {
  const res = await fetch(`${API_URL}/auth/reset-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: String(email).trim().toLowerCase(),
      code: String(code).trim(),
      newPassword,
    }),
  });

  const json = await res.json().catch(() => ({}));

  if (!res.ok) {
    const errorMsg =
      json.message ||
      json.error ||
      'Failed to reset password. Please try again.';
    throw new Error(errorMsg);
  }

  return json.data || {};
}

const authApi = {
  registerUser,
  loginUser,
  forgotPasswordApi,
  verifyResetCodeApi,
  resetPasswordApi,
  getMe,
  updateProfile: updateUserProfile,
  updateUserProfile,
  changePassword,
  getUserAddresses,
  addUserAddress,
  updateUserAddress,
  deleteUserAddress,
  getPaymentMethods,
  addPaymentMethod,
  deletePaymentMethod,
  updateNotificationPreferences,
  getWishlist,
  syncWishlistToDb,
  toggleWishlistItemApi,
  logoutUser,
  getToken,
  setToken,
  removeToken,
};

export default authApi;
