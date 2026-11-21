module.exports = [
"[project]/.next-internal/server/app/categories/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/layout.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.jsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/loading.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/loading.jsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/not-found.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/not-found.jsx [app-rsc] (ecmascript)"));
}),
"[project]/src/services/categoryApi.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/app/categories/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoriesPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$categoryApi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/categoryApi.js [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    title: 'All Computer Categories | Laptops, Desktops, Gaming PCs & Hardware',
    description: 'Explore all computer categories at Prestige Computers. From high-performance gaming rigs and workstations to business laptops and computer rentals with UK warranty.',
    keywords: [
        'computer categories',
        'laptops',
        'desktops',
        'gaming pcs',
        'monitors',
        'workstations',
        'prestige computers categories'
    ],
    alternates: {
        canonical: '/categories'
    }
};
const DEFAULT_CATEGORIES = [
    {
        slug: 'laptops',
        name: 'Laptops & Ultrabooks',
        productCount: 124,
        startPrice: 'From ₹29,999',
        rentPrice: 'Rent from ₹499/day',
        description: 'Lightweight ultrabooks, student laptops, business workhorses, and Apple MacBooks.',
        features: [
            'Intel Core & AMD Ryzen',
            'Apple M2/M3 Silicon',
            '13" to 17" Displays',
            'Up to 20h Battery'
        ],
        badge: 'Popular'
    },
    {
        slug: 'gaming-pcs',
        name: 'Gaming PCs & Rigs',
        productCount: 68,
        startPrice: 'From ₹59,999',
        rentPrice: 'Rent from ₹1,299/day',
        description: 'High-FPS custom gaming towers powered by NVIDIA GeForce RTX 40-Series & liquid cooling.',
        features: [
            'RTX 4060 to RTX 4090',
            'ARGB Liquid Cooling',
            'DDR5 32GB/64GB RAM',
            'Overclocked CPUs'
        ],
        badge: 'Hot Deal'
    },
    {
        slug: 'desktops',
        name: 'Desktop Computers',
        productCount: 54,
        startPrice: 'From ₹24,999',
        rentPrice: 'Rent from ₹399/day',
        description: 'Reliable office desktops, small form factor PCs, and tower configurations for daily productivity.',
        features: [
            'Intel Core i5/i7/i9',
            'Fast NVMe SSD Storage',
            'Multi-Monitor Support',
            '3-Yr Warranty'
        ],
        badge: null
    },
    {
        slug: 'workstations',
        name: 'Pro Workstations',
        productCount: 28,
        startPrice: 'From ₹1,19,999',
        rentPrice: 'Rent from ₹2,499/day',
        description: 'Heavy-duty workstation rigs engineered for 3D animation, CAD, rendering, and AI model workflows.',
        features: [
            'NVIDIA RTX Ada / Quadro',
            'Intel Xeon & Threadripper',
            'ECC Memory Support',
            'Certified ISV Drivers'
        ],
        badge: 'Enterprise'
    },
    {
        slug: 'all-in-one',
        name: 'All-in-One PCs',
        productCount: 24,
        startPrice: 'From ₹34,999',
        rentPrice: 'Rent from ₹699/day',
        description: 'Sleek all-in-one desktop displays with integrated computing power and wireless accessories.',
        features: [
            '24" to 27" 4K IPS Screens',
            'Built-in FHD Webcams',
            'Clean Cable Setup',
            'Integrated Audio'
        ],
        badge: null
    },
    {
        slug: 'monitors',
        name: 'Monitors & Displays',
        productCount: 42,
        startPrice: 'From ₹8,999',
        rentPrice: 'Rent from ₹199/day',
        description: 'High-refresh rate gaming monitors, curved ultra-wides, and color-accurate 4K creative displays.',
        features: [
            '144Hz to 360Hz Refresh',
            'IPS & OLED Panels',
            'G-Sync / FreeSync',
            'USB-C Hub Delivery'
        ],
        badge: null
    },
    {
        slug: 'accessories',
        name: 'Computer Accessories',
        productCount: 96,
        startPrice: 'From ₹999',
        rentPrice: 'Add-on available',
        description: 'Mechanical RGB keyboards, precision gaming mice, studio headsets, docking stations, and webcams.',
        features: [
            'Hot-swap Switches',
            'Ultra-low Latency 2.4G',
            'Spatial 7.1 Audio',
            'Thunderbolt 4 Docks'
        ],
        badge: null
    },
    {
        slug: 'components',
        name: 'PC Components',
        productCount: 85,
        startPrice: 'From ₹1,499',
        rentPrice: 'Upgrade service',
        description: 'Graphics cards, processors, motherboards, DDR4/DDR5 RAM kits, NVMe SSDs, and modular PSUs.',
        features: [
            'NVIDIA & AMD GPUs',
            'Intel Core & AMD AM5',
            'Gen4/Gen5 M.2 SSDs',
            '80+ Gold/Platinum PSUs'
        ],
        badge: null
    },
    {
        slug: 'networking',
        name: 'Networking & WiFi',
        productCount: 31,
        startPrice: 'From ₹1,999',
        rentPrice: 'Event rental',
        description: 'WiFi 6/6E and WiFi 7 routers, mesh systems, Gigabit switches, and network security appliances.',
        features: [
            'Tri-Band WiFi 6E/7',
            'Mesh Whole-home Coverage',
            'Multi-Gig 2.5G/10G Ports',
            'Advanced Firewall'
        ],
        badge: null
    },
    {
        slug: 'software',
        name: 'Software & Licenses',
        productCount: 18,
        startPrice: 'From ₹1,299',
        rentPrice: 'Instant key delivery',
        description: 'Genuine Windows 11, Office 365, antivirus security packages, and specialized creator suites.',
        features: [
            'Lifetime Keys',
            'Official Microsoft Partner',
            'Instant Digital Delivery',
            '24/7 Tech Activation'
        ],
        badge: null
    }
];
async function CategoriesPage() {
    // Fetch dynamic categories from backend API
    const liveCategories = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$categoryApi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActiveCategories"])();
    const categories = liveCategories && liveCategories.length > 0 ? liveCategories : DEFAULT_CATEGORIES;
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Computer & Hardware Categories',
        description: 'Explore computer categories including Laptops, Desktops, Gaming PCs, Monitors, and Accessories available to buy and rent.',
        url: 'https://prestigecomputers.co.uk/categories',
        mainEntity: {
            '@type': 'ItemList',
            itemListElement: categories.map((cat, idx)=>({
                    '@type': 'ListItem',
                    position: idx + 1,
                    name: cat.name,
                    url: `https://prestigecomputers.co.uk/products?category=${cat.slug}`
                }))
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(jsonLd)
                }
            }, void 0, false, {
                fileName: "[project]/src/app/categories/page.jsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#f8f9fa] min-h-screen py-8 lg:py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1380px] mx-auto px-4 lg:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            "aria-label": "Breadcrumb",
                            className: "mb-4 text-[12.5px] text-[#6b7280]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "hover:text-[#dc1414] transition-colors",
                                            children: "Home"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/categories/page.jsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/categories/page.jsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/categories/page.jsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "font-semibold text-[#111827]",
                                        children: "Categories"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/categories/page.jsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/categories/page.jsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/categories/page.jsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0d0406] via-[#1a0508] to-[#0f0406] text-white p-7 sm:p-10 mb-8 border border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.25)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 max-w-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dc1414]/20 border border-[#dc1414]/40 text-[#ff5c5c] text-[11.5px] font-semibold uppercase tracking-wider mb-3",
                                            children: "Prestige Computers Catalog"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/categories/page.jsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-[28px] sm:text-[38px] font-bold italic tracking-[-0.02em] leading-tight",
                                            children: [
                                                "Explore All Computer ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#ff3b3b]",
                                                    children: "Categories"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/categories/page.jsx",
                                                    lineNumber: 179,
                                                    columnNumber: 38
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/categories/page.jsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2.5 text-[14px] sm:text-[15px] text-[#d1d5db] leading-relaxed",
                                            children: "Find the perfect system tailored to your budget and workflow. Whether you want to buy brand new, rent flexibly, or upgrade your current setup, we provide certified genuine hardware with full UK warranty."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/categories/page.jsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/categories/page.jsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute right-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(225,20,20,0.35),transparent_70%)] pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/categories/page.jsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/categories/page.jsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            "aria-label": "All Categories Grid",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
                                children: categories.map((cat)=>{
                                    const id = cat.slug || cat._id;
                                    const title = cat.name || cat.title;
                                    const count = cat.productCount ? `${cat.productCount} Products` : cat.count || 'Available';
                                    const startPrice = cat.startPrice || 'From ₹999';
                                    const rentPrice = cat.rentPrice || 'Rent Available';
                                    const desc = cat.description || cat.desc;
                                    const features = cat.features?.length ? cat.features : [
                                        'Certified Hardware',
                                        'Official Warranty',
                                        'Fast Delivery'
                                    ];
                                    const badge = cat.badge;
                                    const imageUrl = cat.image ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$categoryApi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCategoryImageUrl"])(cat.image) : '';
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl border border-[#e7eaf0] p-6 shadow-[0_2px_12px_rgba(16,24,40,0.04)] hover:shadow-[0_12px_28px_rgba(16,24,40,0.09)] hover:border-[#dc1414]/35 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between gap-2 mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[12px] font-semibold text-[#6b7280]",
                                                                children: count
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/categories/page.jsx",
                                                                lineNumber: 210,
                                                                columnNumber: 25
                                                            }, this),
                                                            badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-2.5 py-0.5 rounded-full bg-[#e11212] text-white text-[10.5px] font-semibold leading-none shadow-xs",
                                                                children: badge
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/categories/page.jsx",
                                                                lineNumber: 214,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/categories/page.jsx",
                                                        lineNumber: 209,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-[19px] font-bold text-[#111827] group-hover:text-[#dc1414] transition-colors leading-tight",
                                                                children: title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/categories/page.jsx",
                                                                lineNumber: 222,
                                                                columnNumber: 25
                                                            }, this),
                                                            imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-12 h-12 rounded-lg bg-[#f8f9fb] border border-[#e5e7eb] overflow-hidden shrink-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: imageUrl,
                                                                    alt: title,
                                                                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/categories/page.jsx",
                                                                    lineNumber: 227,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/categories/page.jsx",
                                                                lineNumber: 226,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/categories/page.jsx",
                                                        lineNumber: 221,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-[13px] text-[#4b5563] leading-relaxed",
                                                        children: desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/categories/page.jsx",
                                                        lineNumber: 236,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "mt-4 space-y-1.5 text-[12px] text-[#374151]",
                                                        children: features.map((feat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-1.5 h-1.5 rounded-full bg-[#dc1414] shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/categories/page.jsx",
                                                                        lineNumber: 244,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "truncate",
                                                                        children: feat
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/categories/page.jsx",
                                                                        lineNumber: 245,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, feat, true, {
                                                                fileName: "[project]/src/app/categories/page.jsx",
                                                                lineNumber: 243,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/categories/page.jsx",
                                                        lineNumber: 241,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/categories/page.jsx",
                                                lineNumber: 207,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 pt-4 border-t border-[#f0f2f5] flex items-center justify-between gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[14px] font-bold text-[#111827]",
                                                                children: startPrice
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/categories/page.jsx",
                                                                lineNumber: 254,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11.5px] text-[#dc1414] font-medium",
                                                                children: rentPrice
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/categories/page.jsx",
                                                                lineNumber: 257,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/categories/page.jsx",
                                                        lineNumber: 253,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/products?category=${id}`,
                                                        className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-b from-[#e11414] to-[#b80808] hover:from-[#ed1a1a] hover:to-[#a30707] active:scale-[0.98] text-white text-[12.5px] font-semibold shadow-[0_4px_12px_rgba(220,16,16,0.25)] transition-all cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Explore"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/categories/page.jsx",
                                                                lineNumber: 266,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-3.5 h-3.5",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2.4",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                "aria-hidden": "true",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M5 12h14M13 6l6 6-6 6"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/categories/page.jsx",
                                                                    lineNumber: 268,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/categories/page.jsx",
                                                                lineNumber: 267,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/categories/page.jsx",
                                                        lineNumber: 262,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/categories/page.jsx",
                                                lineNumber: 252,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, id, true, {
                                        fileName: "[project]/src/app/categories/page.jsx",
                                        lineNumber: 203,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/categories/page.jsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/categories/page.jsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 rounded-2xl bg-[#111216] border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-5 text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-[20px] sm:text-[23px] font-bold",
                                            children: "Need a computer for a temporary project or event?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/categories/page.jsx",
                                            lineNumber: 281,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[13.5px] text-[#9ca3af] max-w-xl",
                                            children: "Rent top-tier laptops, Macs, and gaming PCs with zero lock-in. Flexible daily, weekly, and monthly rates with instant delivery in London & nationwide."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/categories/page.jsx",
                                            lineNumber: 284,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/categories/page.jsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/rentals",
                                    className: "shrink-0 px-6 py-3 rounded-xl bg-white hover:bg-[#f3f4f6] text-[#111827] font-bold text-[13.5px] shadow-lg transition-all cursor-pointer",
                                    children: "View Rental Plans"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/categories/page.jsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/categories/page.jsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/categories/page.jsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/categories/page.jsx",
                lineNumber: 157,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/categories/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/categories/page.jsx [app-rsc] (ecmascript)"));
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__48e80aca._.js.map