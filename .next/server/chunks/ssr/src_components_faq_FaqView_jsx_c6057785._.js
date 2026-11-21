module.exports = [
"[project]/src/components/faq/FaqView.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FaqView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const FAQ_DATA = [
    // 1. Ordering & Delivery
    {
        category: 'Ordering & Delivery',
        question: 'How long does delivery take for laptops and custom PCs?',
        answer: 'Standard delivery across Kanpur, Lucknow, and major metropolitan cities takes 2 to 4 business days. Express Delivery (available for ₹199 or select PIN codes) delivers within 24 to 48 hours. Custom PC builds require an additional 24-48 hours for rigorous 48-hour hardware stress testing and QA before dispatch.'
    },
    {
        category: 'Ordering & Delivery',
        question: 'Can I track my shipment in real-time?',
        answer: 'Yes! As soon as your order is dispatched, you receive a real-time tracking number via SMS and WhatsApp. You can also visit our Track Order page (/track-order) and enter your Order ID to see exact live milestones from packing to doorstep delivery.'
    },
    {
        category: 'Ordering & Delivery',
        question: 'Do you offer Cash on Delivery (COD)?',
        answer: 'Yes, Cash on Delivery is available on accessories, components, and select laptops up to ₹50,000 across serviceable Indian pincodes. High-end custom gaming rigs (above ₹50,000) and rental bookings require prepaid verification for insurance and transit safety.'
    },
    // 2. Computer & Laptop Rentals
    {
        category: 'Computer & Laptop Rentals',
        question: 'How does the "Rent On" computer rental service work?',
        answer: 'Our rental service allows individuals, startups, students, and businesses to rent high-performance laptops and workstations on flexible daily, weekly, and monthly plans. Simply choose your machine, select your rental duration, submit basic KYC (Aadhaar or Company GST), pay a refundable security deposit, and receive your machine at your doorstep or pick it up from our Kakadeo Hub.'
    },
    {
        category: 'Computer & Laptop Rentals',
        question: 'When is my rental security deposit refunded?',
        answer: 'Your security deposit is 100% refundable. Once your rental tenure concludes and our technician inspects the machine for normal operational condition, your deposit is credited back to your original bank account/UPI within 24 to 48 hours.'
    },
    {
        category: 'Computer & Laptop Rentals',
        question: 'Can I extend my rental tenure or buy the laptop later?',
        answer: 'Absolutely! You can extend your rental tenure at any time with discounted long-term renewal rates. We also offer a "Rent-to-Own" program where a significant portion of your paid rent is deducted from the purchase price if you decide to buy the machine permanently.'
    },
    // 3. Custom PC Assembly & Build
    {
        category: 'Custom PC Assembly',
        question: 'Can I customize hardware specifications for my PC?',
        answer: 'Yes! Prestige Computers is famous for custom PC rigs. You can choose your processor (Intel Core or AMD Ryzen), graphics card (NVIDIA RTX 4060 through RTX 4090), DDR5 RAM, NVMe Gen4 storage, liquid AIO coolers, and ARGB cabinets. Our certified engineers assemble and wire-manage your build with surgical precision.'
    },
    {
        category: 'Custom PC Assembly',
        question: 'Do custom PC builds include thermal stress testing?',
        answer: 'Every single custom rig built at our Kakadeo lab undergoes a compulsory 48-hour benchmark burn-in test (Cinebench, 3DMark TimeSpy, FurMark) to guarantee zero thermal throttling, optimal fan curves, and 100% hardware stability before leaving our premises.'
    },
    // 4. Payment, EMI & GST Invoicing
    {
        category: 'Payments & EMI',
        question: 'What payment methods do you accept?',
        answer: 'We accept all major payment methods: UPI (Google Pay, PhonePe, Paytm, BHIM), Credit and Debit Cards (Visa, MasterCard, RuPay), Net Banking (over 50+ Indian banks), EMI, and corporate NEFT/RTGS bank transfers.'
    },
    {
        category: 'Payments & EMI',
        question: 'Is No Cost EMI available on laptops and gaming PCs?',
        answer: 'Yes! We offer 3, 6, 9, and 12-month No Cost EMI options in partnership with HDFC Bank, ICICI Bank, SBI, Axis Bank, and Bajaj Finserv. You can select your preferred bank and EMI tenure directly on the Checkout page.'
    },
    {
        category: 'Payments & EMI',
        question: 'Can I claim GST input tax credit on business purchases?',
        answer: 'Yes! At checkout, simply select "Business / Institution" and provide your registered company name and GSTIN number. We will issue an official B2B Tax Invoice with eligible GST input tax credit (up to 18% savings for registered businesses).'
    },
    // 5. Returns, Refunds & Warranty
    {
        category: 'Returns & Warranty',
        question: 'What is your return and replacement policy?',
        answer: 'We offer a 7-day hassle-free return or replacement policy for any manufacturing defect, transit damage, or specification mismatch. Our technical team will inspect the issue and initiate an instant doorstep replacement or full refund.'
    },
    {
        category: 'Returns & Warranty',
        question: 'What warranty is included with my purchase?',
        answer: 'All laptops and pre-built PCs come with 1 to 3 Years official brand warranty (Dell, HP, Lenovo, ASUS, Apple) plus complimentary 1-Year Prestige Computers Care assistance. In addition, you get lifetime technical support and labor-free cleaning diagnostics at our service hubs.'
    }
];
function FaqView() {
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All');
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [openIndexes, setOpenIndexes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        0,
        1
    ]) // first two open by default
    ;
    const categories = [
        'All',
        'Ordering & Delivery',
        'Computer & Laptop Rentals',
        'Custom PC Assembly',
        'Payments & EMI',
        'Returns & Warranty'
    ];
    const toggleAccordion = (idx)=>{
        setOpenIndexes((prev)=>prev.includes(idx) ? prev.filter((i)=>i !== idx) : [
                ...prev,
                idx
            ]);
    };
    const filteredFaqs = FAQ_DATA.filter((faq)=>{
        const matchCategory = selectedCategory === 'All' || faq.category === selectedCategory;
        const matchQuery = !searchQuery || faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchQuery;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-[#f8fafc] min-h-screen pb-16 text-[#111827]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1100px] mx-auto px-4 lg:px-6 pt-4 sm:pt-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    "aria-label": "Breadcrumb",
                    className: "mb-4 text-[13px] text-[#6b7280]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "hover:text-[#dc1414] transition-colors",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/faq/FaqView.jsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/src/components/faq/FaqView.jsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "font-semibold text-[#111827]",
                                children: "Help Center & FAQ"
                            }, void 0, false, {
                                fileName: "[project]/src/components/faq/FaqView.jsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/faq/FaqView.jsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/faq/FaqView.jsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center max-w-2xl mx-auto mb-8 sm:mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-bold bg-[#fee2e2] text-[#dc1414] mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "💡"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                "Knowledge Base & Answers"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/faq/FaqView.jsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl sm:text-4xl font-extrabold tracking-tight text-[#111827]",
                            children: [
                                "Frequently Asked ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#dc1414]",
                                    children: "Questions"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                    lineNumber: 149,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/faq/FaqView.jsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-sm sm:text-base text-[#6b7280]",
                            children: "Everything you need to know about buying computers, flexible rentals, delivery timelines, warranty coverage, and payment options."
                        }, void 0, false, {
                            fileName: "[project]/src/components/faq/FaqView.jsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 relative max-w-xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    placeholder: "Search help topics (e.g., rentals, warranty, delivery, EMI)...",
                                    className: "w-full pl-11 pr-4 py-3.5 rounded-2xl border border-[#d1d5db] bg-white text-sm shadow-[0_4px_20px_rgba(0,0,0,0.05)] focus:border-[#dc1414] focus:ring-2 focus:ring-[#dc1414]/20 outline-none text-[#111827]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    className: "w-5 h-5 text-[#9ca3af] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "11",
                                            cy: "11",
                                            r: "8"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/faq/FaqView.jsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "21",
                                            y1: "21",
                                            x2: "16.65",
                                            y2: "16.65"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/faq/FaqView.jsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/faq/FaqView.jsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/faq/FaqView.jsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar",
                    children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setSelectedCategory(cat),
                            className: `px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${selectedCategory === cat ? 'bg-[#dc1414] text-white shadow-[0_2px_10px_rgba(220,20,20,0.3)]' : 'bg-white border border-[#e5e7eb] text-[#4b5563] hover:bg-[#f3f4f6]'}`,
                            children: cat === 'All' ? `All Questions (${FAQ_DATA.length})` : cat
                        }, cat, false, {
                            fileName: "[project]/src/components/faq/FaqView.jsx",
                            lineNumber: 180,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/faq/FaqView.jsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3.5 mb-12",
                    children: filteredFaqs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-[#e5e7eb] p-10 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-[#6b7280]",
                                children: [
                                    "No answers found matching “",
                                    searchQuery,
                                    "”."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/faq/FaqView.jsx",
                                lineNumber: 199,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setSelectedCategory('All');
                                    setSearchQuery('');
                                },
                                className: "mt-3 text-xs text-[#dc1414] font-bold hover:underline",
                                children: "Clear search and view all"
                            }, void 0, false, {
                                fileName: "[project]/src/components/faq/FaqView.jsx",
                                lineNumber: 202,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/faq/FaqView.jsx",
                        lineNumber: 198,
                        columnNumber: 13
                    }, this) : filteredFaqs.map((faq, idx)=>{
                        const isOpen = openIndexes.includes(idx);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden transition-all shadow-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>toggleAccordion(idx),
                                    className: "w-full px-5 sm:px-6 py-4 sm:py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#fcfcfd]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm sm:text-base font-bold text-[#111827]",
                                            children: faq.question
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/faq/FaqView.jsx",
                                            lineNumber: 226,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'bg-[#fee2e2] text-[#dc1414] rotate-180' : 'bg-[#f3f4f6] text-[#6b7280]'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2.5",
                                                className: "w-3.5 h-3.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "6 9 12 15 18 9"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                                    lineNumber: 237,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/faq/FaqView.jsx",
                                                lineNumber: 236,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/faq/FaqView.jsx",
                                            lineNumber: 229,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                    lineNumber: 221,
                                    columnNumber: 19
                                }, this),
                                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#4b5563] leading-relaxed border-t border-[#f3f4f6]",
                                    children: faq.answer
                                }, void 0, false, {
                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                    lineNumber: 243,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/src/components/faq/FaqView.jsx",
                            lineNumber: 217,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/faq/FaqView.jsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-br from-[#111827] to-[#1f2937] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-3 py-1 rounded-full text-xs font-bold bg-[#dc1414] text-white",
                                    children: "24/7 Support Available"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                    lineNumber: 256,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl sm:text-2xl font-black mt-2",
                                    children: "Still have questions or need a custom quotation?"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs sm:text-sm text-[#cbd5e1] mt-1 max-w-lg",
                                    children: "Our hardware engineers and rental specialists in Kanpur are here to assist you with specifications, B2B invoicing, and rental queries."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/faq/FaqView.jsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap sm:flex-nowrap gap-3 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "tel:+919876543210",
                                    className: "px-5 py-3 bg-[#dc1414] hover:bg-[#b91c1c] active:scale-[0.99] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-[0_4px_14px_rgba(220,20,20,0.35)] flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "📞"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/faq/FaqView.jsx",
                                            lineNumber: 272,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Call +91 98765 43210"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/faq/FaqView.jsx",
                                            lineNumber: 273,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                    lineNumber: 268,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "✉️"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/faq/FaqView.jsx",
                                            lineNumber: 279,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Contact Us"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/faq/FaqView.jsx",
                                            lineNumber: 280,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/faq/FaqView.jsx",
                            lineNumber: 267,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/faq/FaqView.jsx",
                    lineNumber: 254,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/faq/FaqView.jsx",
            lineNumber: 128,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/faq/FaqView.jsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_components_faq_FaqView_jsx_c6057785._.js.map