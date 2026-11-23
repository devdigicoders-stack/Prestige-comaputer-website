module.exports = [
"[project]/src/constants/navigation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELIVERY_COUNTRIES",
    ()=>DELIVERY_COUNTRIES,
    "MAIN_NAV_LINKS",
    ()=>MAIN_NAV_LINKS
]);
const DELIVERY_COUNTRIES = [
    'Qatar',
    'United Arab Emirates',
    'Saudi Arabia',
    'Kuwait',
    'Oman',
    'Bahrain'
];
const MAIN_NAV_LINKS = [
    {
        id: 'home',
        label: 'Home',
        labelAr: 'الرئيسية',
        href: '/',
        hasDropdown: false
    },
    {
        id: 'gaming',
        label: 'Gaming',
        labelAr: 'أجهزة الألعاب',
        href: '/products?category=gaming',
        badge: 'HOT',
        badgeAr: 'مميز',
        hasDropdown: false
    },
    {
        id: 'business',
        label: 'Business',
        labelAr: 'أجهزة الأعمال',
        href: '/products?category=business',
        hasDropdown: false
    },
    {
        id: 'pre-owned',
        label: 'Genuine Pre-Owned',
        labelAr: 'أجهزة مستعملة مضمونة',
        href: '/products?category=pre-owned',
        badge: 'DEALS',
        badgeAr: 'عروض',
        hasDropdown: false
    },
    {
        id: 'products',
        label: 'All Products',
        labelAr: 'جميع المنتجات',
        href: '/products',
        hasDropdown: false
    },
    {
        id: 'deals',
        label: 'Hot Deals',
        labelAr: 'أقوى العروض',
        href: '/products?tag=Top Deals',
        hasDropdown: false
    },
    {
        id: 'rentals',
        label: 'IT Rentals',
        labelAr: 'خدمة التأجير',
        href: '/rentals',
        badge: 'LEASING',
        badgeAr: 'تأجير',
        hasDropdown: false
    },
    {
        id: 'contact',
        label: 'Contact Us',
        labelAr: 'اتصل بنا',
        href: '/contact',
        hasDropdown: false
    }
];
}),
"[project]/src/services/authApi.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_URL",
    ()=>API_URL,
    "addPaymentMethod",
    ()=>addPaymentMethod,
    "addUserAddress",
    ()=>addUserAddress,
    "changePassword",
    ()=>changePassword,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deletePaymentMethod",
    ()=>deletePaymentMethod,
    "deleteUserAddress",
    ()=>deleteUserAddress,
    "forgotPasswordApi",
    ()=>forgotPasswordApi,
    "getMe",
    ()=>getMe,
    "getPaymentMethods",
    ()=>getPaymentMethods,
    "getToken",
    ()=>getToken,
    "getUserAddresses",
    ()=>getUserAddresses,
    "getWishlist",
    ()=>getWishlist,
    "loginUser",
    ()=>loginUser,
    "logoutUser",
    ()=>logoutUser,
    "registerUser",
    ()=>registerUser,
    "removeToken",
    ()=>removeToken,
    "resetPasswordApi",
    ()=>resetPasswordApi,
    "setToken",
    ()=>setToken,
    "syncWishlistToDb",
    ()=>syncWishlistToDb,
    "toggleWishlistItemApi",
    ()=>toggleWishlistItemApi,
    "updateNotificationPreferences",
    ()=>updateNotificationPreferences,
    "updateUserAddress",
    ()=>updateUserAddress,
    "updateUserProfile",
    ()=>updateUserProfile,
    "verifyResetCodeApi",
    ()=>verifyResetCodeApi
]);
const API_URL = ("TURBOPACK compile-time value", "http://localhost:5000/api/v1") || 'http://localhost:5000/api/v1';
function getToken() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function setToken(token) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function removeToken() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
async function registerUser({ name, email, password, phone, mobile, userType }) {
    const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password,
            phone: phone || mobile || '',
            userType: userType || 'individual'
        })
    });
    const json = await res.json().catch(()=>({}));
    if (!res.ok) {
        const errorMsg = json.message || json.error || 'Registration failed. Please check your details.';
        throw new Error(errorMsg);
    }
    const { user, token } = json.data || {};
    if (token) {
        setToken(token);
    }
    return {
        user,
        token
    };
}
async function loginUser({ identifier, email, password }) {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            identifier: identifier || email,
            password
        })
    });
    const json = await res.json().catch(()=>({}));
    if (!res.ok) {
        const errorMsg = json.message || json.error || 'Login failed. Please check your credentials.';
        throw new Error(errorMsg);
    }
    const { user, token } = json.data || {};
    if (token) {
        setToken(token);
    }
    return {
        user,
        token
    };
}
async function getMe() {
    const token = getToken();
    if (!token) return null;
    const res = await fetch(`${API_URL}/auth/me`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    if (!res.ok) {
        removeToken();
        return null;
    }
    const json = await res.json().catch(()=>({}));
    return json.data || null;
}
async function logoutUser() {
    removeToken();
    try {
        await fetch(`${API_URL}/auth/logout`, {
            method: 'POST'
        });
    } catch  {
    // ignore
    }
}
async function getUserAddresses() {
    const token = getToken();
    if (!token) return [];
    const res = await fetch(`${API_URL}/auth/addresses`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        },
        cache: 'no-store'
    });
    if (!res.ok) return [];
    const json = await res.json().catch(()=>({}));
    return json.data || [];
}
async function addUserAddress(addressData) {
    const token = getToken();
    if (!token) throw new Error('You must be signed in to add an address');
    const res = await fetch(`${API_URL}/auth/addresses`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(addressData)
    });
    const json = await res.json().catch(()=>({}));
    if (!res.ok) {
        throw new Error(json.message || 'Failed to add address in database');
    }
    return json.data;
}
async function updateUserAddress(addressId, addressData) {
    const token = getToken();
    if (!token) throw new Error('You must be signed in to update an address');
    const res = await fetch(`${API_URL}/auth/addresses/${addressId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(addressData)
    });
    const json = await res.json().catch(()=>({}));
    if (!res.ok) {
        throw new Error(json.message || 'Failed to update address in database');
    }
    return json.data;
}
async function deleteUserAddress(addressId) {
    const token = getToken();
    if (!token) throw new Error('You must be signed in to delete an address');
    const res = await fetch(`${API_URL}/auth/addresses/${addressId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const json = await res.json().catch(()=>({}));
    if (!res.ok) {
        throw new Error(json.message || 'Failed to delete address from database');
    }
    return json.data;
}
async function updateUserProfile(profileData) {
    const token = getToken();
    if (!token) throw new Error('You must be signed in to update your profile');
    const res = await fetch(`${API_URL}/auth/profile`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(profileData)
    });
    const json = await res.json().catch(()=>({}));
    if (!res.ok) {
        throw new Error(json.message || 'Failed to update profile details');
    }
    return json.data;
}
async function changePassword(passwordData) {
    const token = getToken();
    if (!token) throw new Error('You must be signed in to change your password');
    const res = await fetch(`${API_URL}/auth/change-password`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(passwordData)
    });
    const json = await res.json().catch(()=>({}));
    if (!res.ok) {
        throw new Error(json.message || 'Failed to update password');
    }
    return json.data;
}
async function getPaymentMethods() {
    const token = getToken();
    if (!token) return [];
    const res = await fetch(`${API_URL}/auth/payment-methods`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        },
        cache: 'no-store'
    });
    if (!res.ok) return [];
    const json = await res.json().catch(()=>({}));
    return json.data || [];
}
async function addPaymentMethod(paymentData) {
    const token = getToken();
    if (!token) throw new Error('You must be signed in to save a payment method');
    const res = await fetch(`${API_URL}/auth/payment-methods`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(paymentData)
    });
    const json = await res.json().catch(()=>({}));
    if (!res.ok) {
        throw new Error(json.message || 'Failed to save payment method');
    }
    return json.data;
}
async function deletePaymentMethod(id) {
    const token = getToken();
    if (!token) throw new Error('You must be signed in to remove a payment method');
    const res = await fetch(`${API_URL}/auth/payment-methods/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const json = await res.json().catch(()=>({}));
    if (!res.ok) {
        throw new Error(json.message || 'Failed to remove payment method');
    }
    return json.data;
}
async function getWishlist() {
    const token = getToken();
    if (!token) return [];
    const res = await fetch(`${API_URL}/auth/wishlist`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        cache: 'no-store'
    });
    if (!res.ok) return [];
    const json = await res.json().catch(()=>({}));
    return json.data || [];
}
async function syncWishlistToDb(wishlist) {
    const token = getToken();
    if (!token) return;
    await fetch(`${API_URL}/auth/wishlist`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            wishlist
        })
    });
}
async function toggleWishlistItemApi(productId) {
    const token = getToken();
    if (!token) throw new Error('Not authenticated');
    const res = await fetch(`${API_URL}/auth/wishlist/toggle`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            productId
        })
    });
    const json = await res.json().catch(()=>({}));
    if (!res.ok) throw new Error(json.message || 'Failed to toggle wishlist');
    return json.data;
}
async function updateNotificationPreferences(prefs) {
    const token = getToken();
    if (!token) throw new Error('You must be signed in to update notifications');
    const res = await fetch(`${API_URL}/auth/notifications`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(prefs)
    });
    const json = await res.json().catch(()=>({}));
    if (!res.ok) {
        throw new Error(json.message || 'Failed to update preferences');
    }
    return json.data;
}
async function forgotPasswordApi(email) {
    const res = await fetch(`${API_URL}/auth/forgot-password`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: String(email).trim().toLowerCase()
        })
    });
    const json = await res.json().catch(()=>({}));
    if (!res.ok) {
        const errorMsg = json.message || json.error || 'Failed to request password reset code. Please check your email.';
        throw new Error(errorMsg);
    }
    return json.data || {};
}
async function verifyResetCodeApi({ email, code }) {
    const res = await fetch(`${API_URL}/auth/verify-reset-code`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: String(email).trim().toLowerCase(),
            code: String(code).trim()
        })
    });
    const json = await res.json().catch(()=>({}));
    if (!res.ok) {
        const errorMsg = json.message || json.error || 'Invalid or expired verification code.';
        throw new Error(errorMsg);
    }
    return json.data || {
        valid: true
    };
}
async function resetPasswordApi({ email, code, newPassword }) {
    const res = await fetch(`${API_URL}/auth/reset-password`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: String(email).trim().toLowerCase(),
            code: String(code).trim(),
            newPassword
        })
    });
    const json = await res.json().catch(()=>({}));
    if (!res.ok) {
        const errorMsg = json.message || json.error || 'Failed to reset password. Please try again.';
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
    removeToken
};
const __TURBOPACK__default__export__ = authApi;
}),
"[project]/src/services/categoryApi.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_URL",
    ()=>API_URL,
    "BACKEND_URL",
    ()=>BACKEND_URL,
    "getActiveCategories",
    ()=>getActiveCategories,
    "getCategoryImageUrl",
    ()=>getCategoryImageUrl
]);
const BACKEND_URL = ("TURBOPACK compile-time value", "http://localhost:5000") || 'http://localhost:5000';
const API_URL = ("TURBOPACK compile-time value", "http://localhost:5000/api/v1") || 'http://localhost:5000/api/v1';
function getCategoryImageUrl(imagePath) {
    if (!imagePath) return '';
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('data:')) {
        return imagePath;
    }
    return `${BACKEND_URL}${imagePath}`;
}
async function getActiveCategories() {
    try {
        const res = await fetch(`${API_URL}/categories`, {
            cache: 'no-store'
        });
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const result = await res.json();
        return result.data || [];
    } catch (err) {
        console.warn('⚠️ Category API fetch note:', err.message);
        return null;
    }
}
}),
"[project]/src/services/productApi.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_URL",
    ()=>API_URL,
    "BACKEND_URL",
    ()=>BACKEND_URL,
    "default",
    ()=>__TURBOPACK__default__export__,
    "getFeaturedProducts",
    ()=>getFeaturedProducts,
    "getProductByIdOrSlug",
    ()=>getProductByIdOrSlug,
    "getProductImageUrl",
    ()=>getProductImageUrl,
    "getProducts",
    ()=>getProducts
]);
const BACKEND_URL = ("TURBOPACK compile-time value", "http://localhost:5000") || 'http://localhost:5000';
const API_URL = ("TURBOPACK compile-time value", "http://localhost:5000/api/v1") || 'http://localhost:5000/api/v1';
function getProductImageUrl(imagePath) {
    if (!imagePath) return '';
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('data:')) {
        return imagePath;
    }
    const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    // If the path is an uploaded asset in /uploads/, return /uploads/filename directly
    // so Next.js static asset serving on port 3000 serves it reliably!
    if (cleanPath.startsWith('/uploads/')) {
        return cleanPath;
    }
    return `${BACKEND_URL}${cleanPath}`;
}
async function getProducts(params = {}) {
    try {
        const searchParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value])=>{
            if (value !== undefined && value !== null && value !== '') {
                searchParams.append(key, String(value));
            }
        });
        const res = await fetch(`${API_URL}/products?${searchParams.toString()}`, {
            cache: 'no-store'
        });
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const result = await res.json();
        return result.data || {
            products: [],
            pagination: {
                total: 0
            }
        };
    } catch (err) {
        console.warn('⚠️ Product API fetch note:', err.message);
        return {
            products: [],
            pagination: {
                total: 0
            }
        };
    }
}
async function getFeaturedProducts() {
    try {
        const res = await fetch(`${API_URL}/products/featured`, {
            cache: 'no-store'
        });
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const result = await res.json();
        return result.data || [];
    } catch (err) {
        console.warn('⚠️ Featured products API fetch note:', err.message);
        return [];
    }
}
async function getProductByIdOrSlug(idOrSlug) {
    try {
        const res = await fetch(`${API_URL}/products/${encodeURIComponent(idOrSlug)}`, {
            cache: 'no-store'
        });
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const result = await res.json();
        return result.data || {
            product: null,
            relatedProducts: []
        };
    } catch (err) {
        console.warn('⚠️ Product details API fetch note:', err.message);
        return {
            product: null,
            relatedProducts: []
        };
    }
}
const productApi = {
    getProducts,
    getFeaturedProducts,
    getProductByIdOrSlug,
    getProductImageUrl,
    BACKEND_URL,
    API_URL
};
const __TURBOPACK__default__export__ = productApi;
}),
"[project]/src/services/rentalApi.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_URL",
    ()=>API_URL,
    "getMyRentals",
    ()=>getMyRentals,
    "getRentalById",
    ()=>getRentalById,
    "getRentalPlans",
    ()=>getRentalPlans,
    "submitRentalRequest",
    ()=>submitRentalRequest
]);
const API_URL = ("TURBOPACK compile-time value", "http://localhost:5000/api/v1") || 'http://localhost:5000/api/v1';
function getAuthHeaders() {
    const token = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
    const headers = {
        'Content-Type': 'application/json'
    };
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return headers;
}
async function submitRentalRequest(rentalData) {
    const headers = getAuthHeaders();
    const res = await fetch(`${API_URL}/rentals`, {
        method: 'POST',
        headers,
        body: JSON.stringify(rentalData)
    });
    const json = await res.json().catch(()=>({}));
    if (!res.ok) {
        const errorMsg = json.message || json.error || `Failed to submit rental request (${res.status})`;
        throw new Error(errorMsg);
    }
    return json.data;
}
async function getMyRentals() {
    const headers = getAuthHeaders();
    const res = await fetch(`${API_URL}/rentals/my-rentals`, {
        headers,
        cache: 'no-store'
    });
    const json = await res.json().catch(()=>({}));
    if (!res.ok) {
        const errorMsg = json.message || json.error || `Failed to fetch rentals (${res.status})`;
        throw new Error(errorMsg);
    }
    return json.data || [];
}
async function getRentalById(id) {
    const headers = getAuthHeaders();
    const res = await fetch(`${API_URL}/rentals/${id}`, {
        headers,
        cache: 'no-store'
    });
    const json = await res.json().catch(()=>({}));
    if (!res.ok) {
        const errorMsg = json.message || json.error || `Failed to fetch rental details (${res.status})`;
        throw new Error(errorMsg);
    }
    return json.data;
}
async function getRentalPlans() {
    try {
        const res = await fetch(`${API_URL}/rentals/plans`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            cache: 'no-store'
        });
        const json = await res.json().catch(()=>({}));
        if (!res.ok) return [];
        return json.data || [];
    } catch (err) {
        console.warn('Could not fetch rental plans:', err.message);
        return [];
    }
}
}),
"[project]/src/context/StoreContext.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoreProvider",
    ()=>StoreProvider,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$authApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/authApi.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const DEFAULT_WISHLIST = [];
const DEFAULT_CART_ITEMS = [];
const StoreContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    wishlistIds: DEFAULT_WISHLIST,
    cartCount: 0,
    cartItems: DEFAULT_CART_ITEMS,
    isRegisterOpen: false,
    isLoginOpen: false,
    currentUser: null,
    authPromptMessage: '',
    setAuthPromptMessage: ()=>{},
    cartToast: {
        show: false,
        product: null,
        message: ''
    },
    showCartToast: ()=>{},
    hideCartToast: ()=>{},
    toggleWishlist: ()=>{},
    removeFromWishlist: ()=>{},
    clearWishlist: ()=>{},
    addToCart: ()=>{},
    updateCartItemQuantity: ()=>{},
    removeFromCart: ()=>{},
    clearCart: ()=>{},
    toggleCartItemSelection: ()=>{},
    selectAllCartItems: ()=>{},
    moveAllToWishlist: ()=>{},
    openRegisterModal: ()=>{},
    closeRegisterModal: ()=>{},
    openLoginModal: ()=>{},
    closeLoginModal: ()=>{},
    rentalModal: {
        open: false,
        product: null
    },
    openRentalModal: ()=>{},
    closeRentalModal: ()=>{},
    setCurrentUser: ()=>{},
    logout: ()=>{}
});
function StoreProvider({ children }) {
    const [wishlistIds, setWishlistIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_WISHLIST);
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_CART_ITEMS);
    const [cartCount, setCartCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isRegisterOpen, setIsRegisterOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoginOpen, setIsLoginOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rentalModal, setRentalModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        open: false,
        product: null
    });
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [authPromptMessage, setAuthPromptMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [cartToast, setCartToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        product: null,
        message: ''
    });
    const openRentalModal = (product)=>{
        setRentalModal({
            open: true,
            product
        });
    };
    const closeRentalModal = ()=>{
        setRentalModal({
            open: false,
            product: null
        });
    };
    const hideCartToast = ()=>{
        setCartToast((prev)=>({
                ...prev,
                show: false
            }));
    };
    const showCartToast = (product, message = 'Product added to your cart!')=>{
        setCartToast({
            show: true,
            product,
            message
        });
    };
    // Load persisted user and session cart/wishlist on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const init = async ()=>{
            try {
                const savedUserStr = localStorage.getItem('pcs_website_user');
                const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$authApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getToken"])();
                if (savedUserStr && token) {
                    try {
                        const parsedUser = JSON.parse(savedUserStr);
                        setCurrentUser(parsedUser);
                        // Load wishlist from MongoDB database (source of truth)
                        try {
                            const dbWishlist = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$authApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWishlist"])();
                            if (Array.isArray(dbWishlist) && dbWishlist.length > 0) {
                                setWishlistIds(dbWishlist.map(String));
                                localStorage.setItem('pcs_website_wishlist', JSON.stringify(dbWishlist.map(String)));
                            } else {
                                // Fallback to localStorage if DB returns empty
                                const savedWishlist = localStorage.getItem('pcs_website_wishlist');
                                if (savedWishlist) {
                                    const parsed = JSON.parse(savedWishlist);
                                    if (Array.isArray(parsed) && parsed.length > 0) {
                                        setWishlistIds(parsed);
                                        // Sync localStorage wishlist up to DB
                                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$authApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syncWishlistToDb"])(parsed);
                                    }
                                }
                            }
                        } catch  {
                            // DB fetch failed, use localStorage
                            const savedWishlist = localStorage.getItem('pcs_website_wishlist');
                            if (savedWishlist) {
                                const parsed = JSON.parse(savedWishlist);
                                if (Array.isArray(parsed)) setWishlistIds(parsed);
                            }
                        }
                        // Load user's saved cart
                        const savedCartItems = localStorage.getItem('pcs_website_cart_items');
                        if (savedCartItems) {
                            const parsed = JSON.parse(savedCartItems);
                            if (Array.isArray(parsed)) {
                                setCartItems(parsed);
                                const total = parsed.reduce((acc, it)=>acc + (it.quantity || 1), 0);
                                setCartCount(total);
                            }
                        }
                    } catch  {
                    // ignore
                    }
                } else {
                    // Unauthenticated visitor: start with clean empty cart and wishlist
                    setWishlistIds([]);
                    setCartItems([]);
                    setCartCount(0);
                }
            } catch  {
            // ignore
            }
        };
        init();
    }, []);
    // Lock body scroll when auth modal is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isRegisterOpen || isLoginOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return ()=>{
            document.body.style.overflow = '';
        };
    }, [
        isRegisterOpen,
        isLoginOpen
    ]);
    // ================= WISHLIST =================
    const toggleWishlist = async (productId)=>{
        if (!currentUser) {
            setAuthPromptMessage('Please sign in or create an account to save items to your wishlist.');
            openLoginModal();
            return false;
        }
        // Optimistic update locally first
        let nextIds;
        setWishlistIds((prev)=>{
            nextIds = prev.includes(String(productId)) ? prev.filter((id)=>id !== String(productId)) : [
                ...prev,
                String(productId)
            ];
            try {
                localStorage.setItem('pcs_website_wishlist', JSON.stringify(nextIds));
            } catch  {}
            return nextIds;
        });
        // Sync to MongoDB in background
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$authApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleWishlistItemApi"])(productId);
        } catch  {
            // If DB fails, revert optimistic update
            setWishlistIds((prev)=>{
                const reverted = prev.includes(String(productId)) ? prev.filter((id)=>id !== String(productId)) : [
                    ...prev,
                    String(productId)
                ];
                try {
                    localStorage.setItem('pcs_website_wishlist', JSON.stringify(reverted));
                } catch  {}
                return reverted;
            });
        }
        return true;
    };
    const removeFromWishlist = (productId)=>{
        const idStr = String(productId);
        setWishlistIds((prev)=>{
            const next = prev.filter((id)=>String(id) !== idStr);
            try {
                localStorage.setItem('pcs_website_wishlist', JSON.stringify(next));
            } catch  {}
            // Sync to DB in background
            if (currentUser) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$authApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syncWishlistToDb"])(next).catch(()=>{});
            return next;
        });
    };
    const clearWishlist = ()=>{
        setWishlistIds([]);
        try {
            localStorage.setItem('pcs_website_wishlist', JSON.stringify([]));
        } catch  {}
        // Sync to DB in background
        if (currentUser) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$authApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syncWishlistToDb"])([]).catch(()=>{});
    };
    // ================= CART =================
    const syncCart = (nextItems)=>{
        setCartItems(nextItems);
        const count = nextItems.reduce((acc, it)=>acc + (it.quantity || 1), 0);
        setCartCount(count);
        try {
            localStorage.setItem('pcs_website_cart_items', JSON.stringify(nextItems));
            localStorage.setItem('pcs_website_cart_count', String(count));
        } catch  {
        // ignore
        }
    };
    const addToCart = (productOrId)=>{
        // AUTH GATE: User must be registered & logged in to add to cart!
        if (!currentUser) {
            setAuthPromptMessage('Please sign in or create an account to add items to your cart.');
            openLoginModal();
            return false;
        }
        if (!productOrId) return false;
        const isObj = typeof productOrId === 'object' && productOrId !== null;
        const id = isObj ? productOrId.id || productOrId.slug || productOrId._id || `item-${Date.now()}` : productOrId;
        const currentList = Array.isArray(cartItems) ? cartItems : [];
        const existingIndex = currentList.findIndex((it)=>it.id === id);
        let next;
        if (existingIndex > -1) {
            next = currentList.map((it, idx)=>idx === existingIndex ? {
                    ...it,
                    ...isObj ? productOrId : {},
                    id,
                    quantity: (it.quantity || 1) + (isObj && productOrId.quantity ? productOrId.quantity : 1)
                } : it);
        } else {
            const newObj = isObj ? {
                ...productOrId,
                id,
                quantity: productOrId.quantity || 1,
                selected: true
            } : {
                id,
                quantity: 1,
                selected: true
            };
            next = [
                ...currentList,
                newObj
            ];
        }
        syncCart(next);
        // Trigger feedback notification
        const toastProduct = isObj ? {
            id,
            name: productOrId.name || productOrId.title || 'Product',
            price: productOrId.price,
            image: productOrId.image || (Array.isArray(productOrId.images) ? productOrId.images[0] : '')
        } : {
            id,
            name: 'Product'
        };
        setCartToast({
            show: true,
            product: toastProduct,
            message: 'Product added to your cart successfully!'
        });
        return true;
    };
    const updateCartItemQuantity = (productId, newQty)=>{
        if (newQty <= 0) {
            removeFromCart(productId);
            return;
        }
        const next = cartItems.map((it)=>it.id === productId ? {
                ...it,
                quantity: newQty
            } : it);
        syncCart(next);
    };
    const removeFromCart = (productId)=>{
        const next = cartItems.filter((it)=>it.id !== productId && it._id !== productId && it.slug !== productId);
        syncCart(next);
    };
    const clearCart = ()=>{
        syncCart([]);
    };
    const toggleCartItemSelection = (productId)=>{
        const next = cartItems.map((it)=>it.id === productId ? {
                ...it,
                selected: !it.selected
            } : it);
        syncCart(next);
    };
    const selectAllCartItems = (selected = true)=>{
        const next = cartItems.map((it)=>({
                ...it,
                selected
            }));
        syncCart(next);
    };
    const moveAllToWishlist = ()=>{
        if (!currentUser) {
            setAuthPromptMessage('Please sign in or create an account to save items to your wishlist.');
            openLoginModal();
            return;
        }
        const newIds = cartItems.map((it)=>String(it.id)).filter((id)=>!wishlistIds.includes(id));
        if (newIds.length > 0) {
            setWishlistIds((prev)=>{
                const next = [
                    ...prev,
                    ...newIds
                ];
                try {
                    localStorage.setItem('pcs_website_wishlist', JSON.stringify(next));
                } catch  {}
                // Sync to DB
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$authApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syncWishlistToDb"])(next).catch(()=>{});
                return next;
            });
        }
        clearCart();
    };
    // ================= MODALS & AUTH =================
    const openRegisterModal = ()=>{
        setIsLoginOpen(false);
        setIsRegisterOpen(true);
    };
    const closeRegisterModal = ()=>{
        setIsRegisterOpen(false);
        setAuthPromptMessage('');
    };
    const openLoginModal = ()=>{
        setIsRegisterOpen(false);
        setIsLoginOpen(true);
    };
    const closeLoginModal = ()=>{
        setIsLoginOpen(false);
        setAuthPromptMessage('');
    };
    const handleSetCurrentUser = (user)=>{
        setCurrentUser(user);
        try {
            if (user) {
                localStorage.setItem('pcs_website_user', JSON.stringify(user));
                // Load wishlist from DB after login
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$authApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWishlist"])().then((dbWishlist)=>{
                    if (Array.isArray(dbWishlist)) {
                        const ids = dbWishlist.map(String);
                        setWishlistIds(ids);
                        localStorage.setItem('pcs_website_wishlist', JSON.stringify(ids));
                    }
                }).catch(()=>{});
            } else {
                localStorage.removeItem('pcs_website_user');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$authApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeToken"])();
            }
        } catch  {
        // ignore
        }
    };
    const logout = ()=>{
        setCurrentUser(null);
        setCartItems([]);
        setCartCount(0);
        setWishlistIds([]);
        try {
            localStorage.removeItem('pcs_website_user');
            localStorage.removeItem('pcs_website_cart_items');
            localStorage.removeItem('pcs_website_cart_count');
            localStorage.removeItem('pcs_website_wishlist');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$authApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeToken"])();
        } catch  {
        // ignore
        }
    };
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            wishlistIds,
            cartCount,
            cartItems,
            isRegisterOpen,
            isLoginOpen,
            currentUser,
            authPromptMessage,
            setAuthPromptMessage,
            cartToast,
            showCartToast,
            hideCartToast,
            toggleWishlist,
            removeFromWishlist,
            clearWishlist,
            addToCart,
            updateCartItemQuantity,
            removeFromCart,
            clearCart,
            toggleCartItemSelection,
            selectAllCartItems,
            moveAllToWishlist,
            openRegisterModal,
            closeRegisterModal,
            openLoginModal,
            closeLoginModal,
            rentalModal,
            openRentalModal,
            closeRentalModal,
            setCurrentUser: handleSetCurrentUser,
            logout
        }), // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        wishlistIds,
        cartCount,
        cartItems,
        isRegisterOpen,
        isLoginOpen,
        rentalModal,
        currentUser,
        authPromptMessage,
        cartToast
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StoreContext.Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/StoreContext.jsx",
        lineNumber: 452,
        columnNumber: 5
    }, this);
}
function useStore() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(StoreContext);
    if (!context) {
        throw new Error('useStore must be used within a StoreProvider');
    }
    return context;
}
}),
"[project]/src/context/LanguageContext.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORY_TRANSLATIONS",
    ()=>CATEGORY_TRANSLATIONS,
    "LanguageProvider",
    ()=>LanguageProvider,
    "TRANSLATIONS",
    ()=>TRANSLATIONS,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    language: 'en',
    setLanguage: ()=>{},
    isRtl: false,
    isArabic: false,
    t: (key, fallback)=>fallback || key
});
const CATEGORY_TRANSLATIONS = {
    all: 'جميع المنتجات',
    laptops: 'أجهزة لابتوب',
    laptop: 'أجهزة لابتوب',
    desktops: 'أجهزة مكتبية',
    desktop: 'أجهزة مكتبية',
    workstations: 'محطات عمل',
    workstation: 'محطات عمل',
    'gaming-pcs': 'تجميعات ألعاب',
    gaming: 'قسم الألعاب (جيمنج)',
    business: 'أجهزة الأعمال والشركات',
    'pre-owned': 'مستعمل مضمون (فحص كامل)',
    'genuine-pre-owned': 'مستعمل مضمون (فحص كامل)',
    components: 'قطع غيار',
    monitors: 'شاشات عرض',
    monitor: 'شاشات عرض',
    accessories: 'ملحقات وإكسسوارات',
    networking: 'أجهزة شبكات',
    software: 'برمجيات',
    'all-in-one': 'الكل في واحد'
};
const TRANSLATIONS = {
    en: {
        // Topbar
        callUs: 'Call Us',
        whatsapp: 'WhatsApp',
        trackOrder: 'Track Order',
        needHelp: 'Need Help?',
        storeLocator: 'Store Locator',
        language: 'Language',
        english: 'English',
        arabic: 'العربية',
        // Header & Search
        searchPlaceholder: 'Search for laptops, desktops, gaming PCs, accessories...',
        searchButton: 'Search',
        loginRegister: 'Login / Register',
        myAccount: 'My Account',
        signUpFree: 'Sign Up Free',
        signedInAs: 'Signed in as',
        myProfile: 'My Profile',
        myRentals: 'My Rentals',
        myOrders: 'My Orders',
        signOut: 'Sign Out',
        wishlist: 'Wishlist',
        cart: 'Cart',
        items: 'items',
        emptyWishlist: 'Your wishlist is empty',
        emptyCart: 'Your cart is empty',
        // Main Navigation
        allCategories: 'All Categories',
        loadingCategories: 'Loading categories...',
        noCategoriesFound: 'No categories found',
        home: 'Home',
        products: 'Products',
        aboutUs: 'About Us',
        rentOn: 'Rent On',
        contactUs: 'Contact Us',
        newBadge: 'New',
        // Common Buttons & Badges
        shopNow: 'Shop Now',
        shopDeals: 'Shop Deals',
        exploreShowroom: 'Explore Our Showroom',
        viewOnGoogleMaps: 'View On Google Maps',
        viewDetails: 'View Details',
        addToCart: 'Add to Cart',
        rentNow: 'Rent Now',
        exploreRentalPlans: 'Explore Rental Plans',
        learnMore: 'Learn More',
        filterBy: 'Filter By',
        sortBy: 'Sort By',
        price: 'Price',
        qar: 'QAR',
        inStock: 'In Stock',
        outOfStock: 'Out of Stock',
        leftInStock: 'Left',
        buyNow: 'Buy Now',
        addToCart: 'Add to Cart',
        added: 'Added!',
        rentFrom: 'Rent from',
        perMonth: '/mo',
        freeDelivery: 'Free Delivery',
        freeShipping: 'Free Delivery in Qatar',
        isoCertifiedBadge: 'ISO-Certified in Qatar',
        readyInventoryBadge: '1,200+ Computers Ready',
        openDaily: 'Open Daily',
        latestBlogsTitle: 'Latest Blogs & Buying Guides',
        viewAllArticles: 'View All Articles',
        topBrandsTitle: 'Authorized Global Brands',
        topBrandsSubtitle: 'Official partners and authorized resellers in Qatar',
        // Home Sections
        featuredCategories: 'Featured Categories',
        dealsOfTheWeek: 'Deals of the Week',
        exclusiveOffers: 'Exclusive Offers on Top Computers',
        offerEndsIn: 'Offer Ends In:',
        days: 'Days',
        hours: 'Hours',
        mins: 'Mins',
        secs: 'Secs',
        featuredProducts: 'Featured Products',
        featuredProductsSubtitle: 'Discover top-rated computers, laptops, and custom builds',
        tabAllProducts: 'All Products',
        tabBestSellers: 'Best Sellers',
        tabNewArrivals: 'New Arrivals',
        tabTopDeals: 'Top Deals',
        tabRentals: 'Rentals',
        viewAllProducts: 'View All Products',
        // Promo Cards
        rentCardTitle: 'Rent a Computer',
        rentCardSubtitle: 'Flexible, Affordable & Hassle-Free',
        rentBullet1: 'Short & Long Term Plans',
        rentBullet2: 'Ideal for Businesses & Events',
        rentBullet3: 'Latest Configurations',
        offerCardBadge: 'Limited Time Offer',
        saveUpTo: 'Save Up to',
        saveUpToDesc: 'On Selected Laptops & Accessories',
        // Trust Strip
        trustShippingTitle: 'Free Shipping in Qatar',
        trustShippingSubtitle: 'Fast 1-2 day delivery across Doha & municipalities',
        trustReturnsTitle: 'Prestige Guarantee Returns',
        trustReturnsSubtitle: 'Official return & replacement warranty terms',
        trustWarrantyTitle: '100% Genuine Warranty',
        trustWarrantySubtitle: 'Official manufacturer & PCS warranty included',
        trustPaymentsTitle: 'Secure Payments',
        trustPaymentsSubtitle: 'Cards, Bank Transfer & Showroom POS',
        trustSupportTitle: 'Dedicated Hardware Desk',
        trustSupportSubtitle: 'Phone & WhatsApp technical support',
        // Newsletter
        newsletterTitle: 'Stay Updated with Prestige Computers',
        newsletterSubtitle: 'Get the latest deals, new arrivals, rental offers and tech tips straight to your inbox.',
        subscribe: 'Subscribe',
        enterEmail: 'Enter your email address',
        subscribedSuccess: "You're subscribed! Watch your inbox for tech deals.",
        // Footer
        footerAbout: 'Prestige Computer Services (PCS Doha) is an ISO-certified leading reseller of brand-new and certified pre-owned computers, laptops, gaming rigs, and IT solutions in Qatar since 2020.',
        showroomLocation: 'Tower I, 2nd Floor, Office 201, Al-Mirqab Mall, Al Mirqab Al Jadeed St, Doha, Qatar',
        workingHours: 'Sat–Thu: 10:00 AM – 10:00 PM | Fri: 2:30 PM – 10:30 PM',
        allRightsReserved: 'All rights reserved. Prestige Computers.',
        shopColumn: 'Shop',
        serviceColumn: 'Services',
        supportColumn: 'Support',
        companyColumn: 'Company',
        // Policy & Terms
        customerAgreement: 'I have read and understood the above conditions and agree to them.',
        serviceHoursNote: 'Warranty claims and replacements: Sunday–Thursday, 10:00 AM–5:00 PM only.',
        printPolicy: 'Print Policy',
        legalDesk: 'Legal Desk',
        allDocuments: 'All Legal Documents',
        complianceGrievance: 'Compliance & Grievance'
    },
    ar: {
        // Topbar
        callUs: 'اتصل بنا',
        whatsapp: 'واتساب',
        trackOrder: 'تتبع طلبك',
        needHelp: 'هل تحتاج مساعدة؟',
        storeLocator: 'مواقع المتاجر',
        language: 'اللغة',
        english: 'English',
        arabic: 'العربية',
        // Header & Search
        searchPlaceholder: 'ابحث عن أجهزة الكمبيوتر المحمولة، التجميعات، المعالجات، الملحقات...',
        searchButton: 'بحث',
        loginRegister: 'تسجيل الدخول / إنشاء حساب',
        myAccount: 'حسابي',
        signUpFree: 'سجل مجاناً',
        signedInAs: 'تم تسجيل الدخول باسم',
        myProfile: 'ملفي الشخصي',
        myRentals: 'إيجاراتي',
        myOrders: 'طلباتي',
        signOut: 'تسجيل الخروج',
        wishlist: 'المفضلة',
        cart: 'السلة',
        items: 'منتجات',
        emptyWishlist: 'قائمة المفضلة فارغة',
        emptyCart: 'سلة المشتريات فارغة',
        // Main Navigation
        allCategories: 'جميع التصنيفات',
        loadingCategories: 'جاري تحميل التصنيفات...',
        noCategoriesFound: 'لم يتم العثور على تصنيفات',
        home: 'الرئيسية',
        products: 'المنتجات',
        aboutUs: 'من نحن',
        rentOn: 'خدمة الإيجار',
        contactUs: 'اتصل بنا',
        newBadge: 'جديد',
        // Common Buttons & Badges
        shopNow: 'تسوق الآن',
        shopDeals: 'تسوق العروض',
        exploreShowroom: 'استكشف صالة العرض',
        viewOnGoogleMaps: 'عرض على خرائط Google',
        viewDetails: 'عرض التفاصيل',
        addToCart: 'أضف إلى السلة',
        rentNow: 'استأجر الآن',
        exploreRentalPlans: 'استكشف خطط الإيجار',
        learnMore: 'اعرف المزيد',
        filterBy: 'تصفية حسب',
        sortBy: 'ترتيب حسب',
        price: 'السعر',
        qar: 'ر.ق',
        inStock: 'متوفر بالمخزون',
        outOfStock: 'نفدت الكمية',
        leftInStock: 'متبقي',
        buyNow: 'اشتري الآن',
        addToCart: 'أضف للسلة',
        added: 'تمت الإضافة!',
        rentFrom: 'إيجار من',
        perMonth: '/شهرياً',
        freeDelivery: 'توصيل مجاني',
        freeShipping: 'توصيل مجاني في قطر',
        isoCertifiedBadge: 'معتمد بشهادة ISO في قطر',
        readyInventoryBadge: '+1,200 جهاز كمبيوتر جاهز',
        openDaily: 'مفتوح يومياً',
        latestBlogsTitle: 'أحدث المقالات ودليل الشراء',
        viewAllArticles: 'عرض جميع المقالات',
        topBrandsTitle: 'كبرى العلامات التجارية العالمية',
        topBrandsSubtitle: 'موزع ووكيل معتمد وموثوق في دولة قطر',
        // Home Sections
        featuredCategories: 'التصنيفات المميزة',
        dealsOfTheWeek: 'عروض الأسبوع الحصرية',
        exclusiveOffers: 'تخفيضات استثنائية على أجهزة الكمبيوتر',
        offerEndsIn: 'ينتهي العرض خلال:',
        days: 'أيام',
        hours: 'ساعات',
        mins: 'دقائق',
        secs: 'ثواني',
        featuredProducts: 'المنتجات المميزة',
        featuredProductsSubtitle: 'استكشف أفضل أجهزة الكمبيوتر المحمولة والمكتبية والتجميعات المعتمدة في قطر',
        tabAllProducts: 'جميع المنتجات',
        tabBestSellers: 'الأكثر مبيعاً',
        tabNewArrivals: 'وصل حديثاً',
        tabTopDeals: 'أقوى العروض',
        tabRentals: 'أجهزة للإيجار',
        viewAllProducts: 'عرض جميع المنتجات',
        // Promo Cards
        rentCardTitle: 'استئجار كمبيوتر',
        rentCardSubtitle: 'مرن، بأسعار مناسبة وبدون متاعب',
        rentBullet1: 'خطط قصيرة وطويلة الأجل',
        rentBullet2: 'مثالي للشركات والمؤتمرات',
        rentBullet3: 'أحدث المواصفات والأجهزة',
        offerCardBadge: 'عرض لفترة محدودة',
        saveUpTo: 'وفر حتى',
        saveUpToDesc: 'على أجهزة لابتوب وملحقات مختارة',
        // Trust Strip
        trustShippingTitle: 'توصيل مجاني في قطر',
        trustShippingSubtitle: 'توصيل سريع خلال 1-2 يوم لجميع البلديات',
        trustReturnsTitle: 'ضمان الإرجاع المعتمد',
        trustReturnsSubtitle: 'وفق الشروط الرسمية لضمان بريستيج',
        trustWarrantyTitle: 'ضمان أصلي 100%',
        trustWarrantySubtitle: 'ضمان الشركة المصنعة الرسمي ومركز PCS',
        trustPaymentsTitle: 'دفع آمن 100%',
        trustPaymentsSubtitle: 'بطاقات بنكية، تحويل ونقاط بيع في المعرض',
        trustSupportTitle: 'مكتب الدعم الفني المتخصص',
        trustSupportSubtitle: 'دعم فني واستشارات عبر الهاتف والواتساب',
        // Newsletter
        newsletterTitle: 'ابقَ على اطلاع مع بريستيج للكمبيوتر',
        newsletterSubtitle: 'احصل على أحدث العروض والأسعار الخاصة واستئجار الأجهزة في قطر مباشرة عبر بريدك.',
        subscribe: 'اشتراك',
        enterEmail: 'أدخل بريدك الإلكتروني',
        subscribedSuccess: 'تم اشتراكك بنجاح! تفقد بريدك الإلكتروني للعروض الحصرية.',
        // Footer
        footerAbout: 'شركة Prestige Computer Services (PCS الدوحة) هي شركة معتمدة بشهادة ISO وأبرز موزع لأجهزة الكمبيوتر الجديدة والمستعملة المعتمدة، التجميعات الاحترافية، وحلول تكنولوجيا المعلومات في قطر منذ عام 2020.',
        showroomLocation: 'البرج 1، الطابق الثاني، مكتب 201، مول المرقاب، شارع المرقاب الجديد، الدوحة، قطر',
        workingHours: 'السبت – الخميس: 10:00 ص – 10:00 م | الجمعة: 2:30 م – 10:30 م',
        allRightsReserved: 'جميع الحقوق محفوظة. بريستيج للكمبيوتر.',
        shopColumn: 'المتجر',
        serviceColumn: 'الخدمات',
        supportColumn: 'الدعم والمساعدة',
        companyColumn: 'عن بريستيج',
        // Policy & Terms
        customerAgreement: 'لقد قرأت وفهمت الشروط المذكورة أعلاه وأوافق عليها.',
        serviceHoursNote: 'ساعات الخدمة: يتم التعامل مع مطالبات الضمان والاستبدال من الأحد إلى الخميس، من 10:00 صباحًا حتى 5:00 مساءً فقط.',
        printPolicy: 'طباعة الوثيقة',
        legalDesk: 'المكتب القانوني',
        allDocuments: 'جميع الوثائق القانونية',
        complianceGrievance: 'الامتثال والشكاوى'
    }
};
function LanguageProvider({ children }) {
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('en');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const saved = localStorage.getItem('pcs_language');
            if (saved === 'ar' || saved === 'en') {
                setLanguageState(saved);
            }
        } catch  {}
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (typeof document !== 'undefined') {
            document.documentElement.lang = language;
            document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        }
    }, [
        language
    ]);
    const setLanguage = (lang)=>{
        if (lang !== 'en' && lang !== 'ar') return;
        setLanguageState(lang);
        try {
            localStorage.setItem('pcs_language', lang);
        } catch  {}
    };
    const isRtl = language === 'ar';
    const isArabic = language === 'ar';
    const t = (key, fallback)=>{
        return TRANSLATIONS[language]?.[key] || fallback || TRANSLATIONS.en[key] || key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            isRtl,
            isArabic,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/LanguageContext.jsx",
        lineNumber: 345,
        columnNumber: 5
    }, this);
}
const useLanguage = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
const __TURBOPACK__default__export__ = LanguageContext;
}),
"[project]/src/utils/formatCurrency.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Format currency in Qatari Riyal (QAR / ر.ق)
 * English: "QAR 2,499"
 * Arabic: "2,499 ر.ق"
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "formatCurrency",
    ()=>formatCurrency
]);
function formatCurrency(amount, isArabic = false) {
    if (amount === null || amount === undefined || isNaN(amount)) {
        return isArabic ? '0 ر.ق' : 'QAR 0';
    }
    const formatted = Number(amount).toLocaleString('en-US', {
        maximumFractionDigits: 0
    });
    return isArabic ? `${formatted} ر.ق` : `QAR ${formatted}`;
}
const __TURBOPACK__default__export__ = formatCurrency;
}),
];

//# sourceMappingURL=src_545afa31._.js.map