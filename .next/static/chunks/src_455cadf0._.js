(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/legal/LegalPageLayout.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LegalPageLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const LEGAL_LINKS = [
    {
        label: 'Official PCS Policies (New Document)',
        labelAr: 'وثيقة سياسات بريستيج الرسمية',
        href: '/policies'
    },
    {
        label: 'Warranty & Guarantee',
        labelAr: 'الضمان والخدمات المعتمدة',
        href: '/warranty'
    },
    {
        label: 'Refund & Returns',
        labelAr: 'سياسة الإرجاع واسترداد الأموال',
        href: '/refund-policy'
    },
    {
        label: 'Terms & Conditions',
        labelAr: 'الشروط والأحكام العامة',
        href: '/terms'
    },
    {
        label: 'Privacy Policy',
        labelAr: 'سياسة حماية البيانات والخصوصية',
        href: '/privacy'
    },
    {
        label: 'Shipping & Delivery',
        labelAr: 'الشحن والتوصيل في قطر',
        href: '/shipping-policy'
    }
];
function LegalPageLayout(param) {
    let { title, titleAr, subtitle, subtitleAr, lastUpdated = 'Updated November 2026', badge = 'Official Store Policy', badgeAr = 'وثيقة معتمدة رسمياً', children } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { language, setLanguage, isRtl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const currentTitle = isRtl && titleAr ? titleAr : title;
    const currentSubtitle = isRtl && subtitleAr ? subtitleAr : subtitle;
    const currentBadge = isRtl && badgeAr ? badgeAr : badge;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-[#f8fafc] min-h-screen pb-16 text-[#111827] ".concat(isRtl ? 'font-arabic' : ''),
        dir: isRtl ? 'rtl' : 'ltr',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1380px] mx-auto px-4 lg:px-6 pt-4 sm:pt-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    "aria-label": "Breadcrumb",
                    className: "mb-4 text-[13px] text-[#6b7280]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "hover:text-[#dc1414] transition-colors",
                                    children: isRtl ? 'الرئيسية' : 'Home'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#6b7280]",
                                    children: isRtl ? 'السياسات والوثائق القانونية' : 'Legal & Policies'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "font-semibold text-[#111827]",
                                children: currentTitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-3xl border border-[#e5e7eb] p-6 sm:p-10 shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5 mb-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-3 py-1 rounded-full text-xs font-bold bg-[#fee2e2] text-[#dc1414]",
                                            children: currentBadge
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-[#6b7280] font-medium",
                                            children: isRtl ? 'آخر تحديث: نوفمبر 2026' : lastUpdated
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200",
                                            children: "ISO Certified • Qatar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl sm:text-4xl font-extrabold tracking-tight text-[#111827]",
                                    children: currentTitle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-xs sm:text-sm text-[#4b5563] max-w-2xl leading-relaxed",
                                    children: currentSubtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-2.5 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center rounded-xl bg-[#f1f5f9] p-1 border border-[#e2e8f0] shadow-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setLanguage('en'),
                                            className: "px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ".concat(language === 'en' ? 'bg-white text-[#dc1414] shadow-xs' : 'text-[#4b5563] hover:text-[#111827]'),
                                            children: "English"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setLanguage('ar'),
                                            className: "px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer font-arabic ".concat(language === 'ar' ? 'bg-[#dc1414] text-white shadow-xs' : 'text-[#4b5563] hover:text-[#111827]'),
                                            children: "العربية"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>window.print(),
                                    className: "px-4 py-2 border border-[#d1d5db] hover:bg-[#f3f4f6] text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: "w-3.5 h-3.5 text-[#374151]",
                                            "aria-hidden": "true",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "6 9 6 2 18 2 18 9"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                                    lineNumber: 108,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                                    lineNumber: 109,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "12",
                                                    height: "8",
                                                    x: "6",
                                                    y: "14"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                                    lineNumber: 110,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: isRtl ? 'طباعة الوثيقة' : 'Print Policy'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "px-4 py-2 bg-[#111827] hover:bg-[#1f2937] text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isRtl ? 'المكتب القانوني' : 'Legal Desk'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "lg:col-span-3 space-y-4 lg:sticky lg:top-24",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-2xl border border-[#e5e7eb] p-4 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xs font-bold uppercase tracking-wider text-[#9ca3af] px-3 mb-2",
                                            children: isRtl ? 'جميع وثائق السياسات المعتمدة' : 'All Legal Documents'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                            className: "space-y-1",
                                            children: LEGAL_LINKS.map((link)=>{
                                                const isActive = pathname === link.href;
                                                const label = isRtl && link.labelAr ? link.labelAr : link.label;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    className: "block px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ".concat(isActive ? 'bg-[#dc1414] text-white shadow-[0_2px_10px_rgba(220,20,20,0.3)]' : 'text-[#4b5563] hover:bg-[#f3f4f6] hover:text-[#111827]'),
                                                    children: label
                                                }, link.href, false, {
                                                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                                    lineNumber: 137,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-[#111827] to-[#1f2937] rounded-2xl p-5 text-white shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white mb-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2.2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "w-4 h-4 text-white",
                                                "aria-hidden": "true",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                                        lineNumber: 157,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M7 21h10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 3v18"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                                        lineNumber: 160,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                                        lineNumber: 161,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-bold mt-1.5",
                                            children: isRtl ? 'مراقبة الجودة والشكاوى' : 'Quality Control & Claims'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-[#cbd5e1] mt-1 leading-snug",
                                            children: isRtl ? 'لمطالبات الضمان وعمليات الاستبدال، يرجى التواصل مع قسم مراقبة الجودة من الأحد إلى الخميس، 10:00 صباحاً حتى 5:00 مساءً.' : 'For warranty claims, inspection, and return enquiries, contact our Quality Control & Claims desk.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 pt-3 border-t border-white/10 text-xs space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "QC Claims: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "mailto:qc@pcsdoha.net",
                                                            className: "text-[#fca5a5] hover:underline font-bold",
                                                            children: "qc@pcsdoha.net"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                                            lineNumber: 171,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                                    lineNumber: 171,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "General: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "mailto:info@pcsdoha.net",
                                                            className: "text-[#fca5a5] hover:underline",
                                                            children: "info@pcsdoha.net"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                                            lineNumber: 172,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                                    lineNumber: 172,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Phone: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "tel:+97441453868",
                                                            className: "text-[#fca5a5] hover:underline",
                                                            children: "+974 4145 3868"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                                            lineNumber: 173,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                                    lineNumber: 173,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "WhatsApp: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "https://wa.me/97466919155",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "text-[#fca5a5] hover:underline",
                                                            children: "+974 6691 9155"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                                            lineNumber: 174,
                                                            columnNumber: 30
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                                    lineNumber: 174,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            className: "lg:col-span-9 bg-white rounded-3xl border border-[#e5e7eb] p-6 sm:p-10 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "prose prose-sm sm:prose-base max-w-none text-[#374151] leading-relaxed [&>h2]:text-lg sm:[&>h2]:text-xl [&>h2]:font-extrabold [&>h2]:text-[#111827] [&>h2]:mt-8 [&>h2]:mb-3 [&>h2]:pb-2 [&>h2]:border-b [&>h2]:border-[#f3f4f6] [&>h3]:text-base [&>h3]:font-bold [&>h3]:text-[#111827] [&>h3]:mt-6 [&>h3]:mb-2 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1.5 [&>ul]:mb-4 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-1.5 [&>ol]:mb-4 ".concat(isRtl ? 'text-right' : ''),
                                    children: children
                                }, void 0, false, {
                                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-10 pt-6 border-t border-[#f3f4f6] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6b7280]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Prestige Computer Services (PCS Doha) • ISO-Certified • Incorporated 2020 • Doha, Qatar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/policies",
                                                    className: "hover:text-[#dc1414] hover:underline",
                                                    children: "Policies"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                                    lineNumber: 189,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/warranty",
                                                    className: "hover:text-[#dc1414] hover:underline",
                                                    children: "Warranty"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                                    lineNumber: 190,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/refund-policy",
                                                    className: "hover:text-[#dc1414] hover:underline",
                                                    children: "Refunds"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                                    lineNumber: 191,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/terms",
                                                    className: "hover:text-[#dc1414] hover:underline",
                                                    children: "Terms"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                                    lineNumber: 192,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                            lineNumber: 188,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/legal/LegalPageLayout.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(LegalPageLayout, "2wxL+zHz23FJmhDcC1DjPzSDWi4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = LegalPageLayout;
var _c;
__turbopack_context__.k.register(_c, "LegalPageLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/pcsPolicies.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Authoritative Policies and Terms
 * Source: New PCS Policies Document Updated.pdf
 * Bilingual: English and Arabic (العربية)
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "pcsPolicies",
    ()=>pcsPolicies
]);
const pcsPolicies = {
    aboutUs: {
        en: {
            title: 'About Us',
            subtitle: 'Prestige Computer Services (PCS Doha)',
            content: 'Prestige Computer Services (PCS) is an ISO-certified company, locally incorporated in Qatar since 2020, and a leading reseller of brand-new and pre-owned IT products. We work with top global brands including Dell, HP, Lenovo, MSI, Acer, ASUS, and Apple. With a ready inventory of 1,200+ computers, PCS is your ultimate value shopping destination for laptops, desktops, all-in-one systems, and peripherals—all 100% backed by the Prestige Guarantee.',
            highlights: [
                {
                    label: 'ISO-Certified',
                    desc: 'Officially certified technology reseller in Qatar'
                },
                {
                    label: 'Incorporated 2020',
                    desc: 'Showroom & service centre at Al-Mirqab Mall, Doha'
                },
                {
                    label: '1,200+ Computers',
                    desc: 'Ready inventory of brand-new and pre-owned devices'
                },
                {
                    label: 'Global Brands',
                    desc: 'Dell, HP, Lenovo, MSI, Acer, ASUS, and Apple'
                }
            ]
        },
        ar: {
            title: 'نبذة عنا',
            subtitle: 'شركة خدمات بريستيج للكمبيوتر (PCS الدوحة)',
            content: 'شركة Prestige Computer Services (PCS) هي شركة حاصلة على شهادة ISO، تأسست محليًا في قطر منذ عام 2020، وتُعد من أبرز موزعي منتجات تكنولوجيا المعلومات الجديدة والمستعملة. نتعامل مع كبرى العلامات التجارية العالمية، بما في ذلك Dell و HP و Lenovo و MSI و Acer و ASUS و Apple. ومع مخزون جاهز يضم أكثر من 1,200 جهاز كمبيوتر، تُعد PCS وجهتك المثالية للتسوق بأفضل قيمة لشراء أجهزة الكمبيوتر المحمولة، وأجهزة الكمبيوتر المكتبية، وأجهزة All-in-One، والملحقات والأجهزة الطرفية—وجميعها مدعومة بنسبة 100% بضمان Prestige.',
            highlights: [
                {
                    label: 'معتمدة بشهادة ISO',
                    desc: 'موزع تكنولوجيا معتمد رسميًا في دولة قطر'
                },
                {
                    label: 'تأسست عام 2020',
                    desc: 'صالة عرض ومركز خدمة معتمد في مول المرقاب، الدوحة'
                },
                {
                    label: '+1,200 جهاز كمبيوتر',
                    desc: 'مخزون جاهز ومتنوع من الأجهزة الجديدة والمستعملة'
                },
                {
                    label: 'علامات عالمية كبرى',
                    desc: 'Dell، HP، Lenovo، MSI، Acer، ASUS، و Apple'
                }
            ]
        }
    },
    brandNew: {
        en: {
            title: 'Prestige Guarantee – Brand-New Devices',
            badge: 'Brand-New Coverage',
            warranty: {
                title: 'Manufacturer Warranty',
                text: 'Brand-new devices carry the manufacturer’s official warranty, typically 12 months as stated on the invoice. PCS assists with claims through authorized service centres. Delivery and collection to/from the PCS Service Centre, Al Mirqab Mall, are the customer’s responsibility.'
            },
            returns: {
                title: 'Returns & Exchanges (7 Days Sealed)',
                text: 'Sealed, unused products may be returned or exchanged within 7 days with the original receipt and unopened packaging. Opened or powered-on products are non-returnable and remain subject to the manufacturer’s warranty terms.'
            },
            refunds: {
                title: 'Refund Processing',
                text: 'Approved refunds are processed by bank transfer within 2 working days of HQ approval (Sunday–Thursday). POS/credit card payments are subject to a 2% processing fee. Enquiries: qc@pcsdoha.net.'
            }
        },
        ar: {
            title: 'ضمان بريستيج – الأجهزة الجديدة كليًا',
            badge: 'ضمان الأجهزة الجديدة',
            warranty: {
                title: 'الضمان الرسمي',
                text: 'تخضع الأجهزة الجديدة لضمان الشركة المصنّعة الرسمي، وعادةً ما يكون 12 شهرًا كما هو مذكور في الفاتورة. تساعد PCS في تقديم المطالبات من خلال مراكز الخدمة المعتمدة. يتحمّل العميل مسؤولية التوصيل والاستلام من وإلى مركز خدمة PCS، مول المرقاب.'
            },
            returns: {
                title: 'الإرجاع والاستبدال (7 أيام للمنتجات المختومة)',
                text: 'يمكن إرجاع أو استبدال المنتجات المختومة وغير المستخدمة خلال 7 أيام مع الإيصال الأصلي والعبوة غير المفتوحة. المنتجات المفتوحة أو التي تم تشغيلها غير قابلة للإرجاع وتخضع لشروط ضمان الشركة المصنّعة.'
            },
            refunds: {
                title: 'استرداد الأموال',
                text: 'تتم معالجة عمليات الاسترداد المعتمدة عبر التحويل البنكي خلال يومي عمل من موافقة الإدارة العامة (من الأحد إلى الخميس). تخضع المدفوعات عبر نقاط البيع/البطاقات الائتمانية لرسوم معالجة بنسبة 2%. للاستفسارات: qc@pcsdoha.net.'
            }
        }
    },
    preOwned: {
        en: {
            title: 'Prestige Guarantee – Pre-Owned Devices',
            badge: 'Certified Pre-Owned',
            warranty: {
                title: '6–12 Month Limited Warranty & 2-Hour Battery Guarantee',
                text: 'Pre-owned devices carry a 6–12 month limited warranty, as stated on the invoice. Laptop batteries are covered for a minimum 2-hour backup at the time of sale, under normal operating conditions. Warranty excludes physical/liquid/electrical damage, normal battery degradation, misuse, unauthorized repair/modification. Delivery and collection to/from the PCS Service Centre, Al Mirqab Mall, are the customer’s responsibility.'
            },
            returns: {
                title: 'Returns within 3 Days & Exchanges within 15 Days',
                text: 'Returns within 3 days and exchanges within 15 days apply only to qualifying technical/warranty defects, subject to PCS inspection and approval. Products must be returned in their original condition with all accessories and the original invoice.'
            },
            nonQualifying: {
                title: 'Non-Qualifying Returns',
                text: 'Change of mind, upgrades, or compatibility issues are not product defects and are non-returnable, including issues with customer-supplied SSD, RAM, accessories, or software.'
            },
            refunds: {
                title: 'Refund Terms (Within 3 Days)',
                text: 'Approved refunds under the above conditions are processed within 3 days of purchase, subject to inspection, approval, and the original receipt. Requests: qc@pcsdoha.net. POS/credit card payments are subject to a 2% processing fee.'
            }
        },
        ar: {
            title: 'ضمان بريستيج – الأجهزة المستعملة',
            badge: 'الأجهزة المستعملة المعتمدة',
            warranty: {
                title: 'ضمان محدود 6–12 شهرًا وضمان ساعتين للبطارية',
                text: 'تشمل الأجهزة المستعملة ضمانًا محدودًا لمدة 6 إلى 12 شهرًا، وفقًا لما هو مذكور في الفاتورة. ويشمل ضمان بطارية الكمبيوتر المحمول توفير مدة تشغيل لا تقل عن ساعتين وقت البيع، وذلك في ظروف التشغيل العادية. لا يشمل الضمان الأضرار المادية، أو التلف الناتج عن السوائل أو الكهرباء، أو التدهور الطبيعي لأداء البطارية، أو سوء الاستخدام، أو أي إصلاح أو تعديل غير مصرح به. يتحمل العميل مسؤولية توصيل الجهاز واستلامه من وإلى مركز خدمة PCS في المرقاب مول.'
            },
            returns: {
                title: 'الإرجاع خلال 3 أيام والاستبدال خلال 15 يومًا',
                text: 'ينطبق الإرجاع خلال 3 أيام والاستبدال خلال 15 يومًا فقط على العيوب الفنية/المشمولة بالضمان المؤهلة، وذلك بعد الفحص والموافقة من قبل PCS. يجب إعادة المنتجات بحالتها الأصلية مع جميع الملحقات والفاتورة الأصلية.'
            },
            nonQualifying: {
                title: 'الحالات غير المؤهلة للإرجاع',
                text: 'لا يُعد تغيير الرأي، أو الترقية، أو مشاكل التوافق عيوبًا في المنتج، وبالتالي فهي غير قابلة للإرجاع، بما في ذلك المشاكل المتعلقة بأقراص SSD أو ذاكرة RAM أو الملحقات أو البرامج التي يوفرها العميل.'
            },
            refunds: {
                title: 'شروط استرداد الأموال (خلال 3 أيام)',
                text: 'تتم معالجة عمليات الاسترداد المعتمدة وفقًا للشروط أعلاه خلال 3 أيام من تاريخ الشراء، وذلك بعد الفحص والموافقة وتقديم الإيصال الأصلي. للطلبات: qc@pcsdoha.net. تخضع المدفوعات عبر نقاط البيع/البطاقات الائتمانية لرسوم معالجة بنسبة 2%.'
            }
        }
    },
    additionalTerms: {
        en: {
            title: 'Additional Terms – All Devices',
            items: [
                {
                    label: 'Accessories Excluded',
                    text: 'Accessories (chargers, cables, bags, etc.) are non-returnable and excluded from warranty, unless stated otherwise on the invoice.'
                },
                {
                    label: 'Original Condition & Barcode Required',
                    text: 'No return/exchange for damaged, modified, incomplete items, missing accessories/documents/invoice, or altered/removed PCS barcode/serial identification.'
                },
                {
                    label: 'Damage Voids Warranty',
                    text: 'Warranty is void for post-purchase damage or unauthorized repair/modification.'
                },
                {
                    label: 'Screen & Display Exclusion',
                    text: 'Screen damage, flickering, or other display issues are excluded from warranty, including mishandling-related issues without visible physical damage.'
                },
                {
                    label: 'Data Loss Disclaimer',
                    text: 'PCS is not responsible for data loss under any circumstances. Customers are strongly advised to back up all personal data.'
                },
                {
                    label: 'Software & OS Exclusion',
                    text: 'NOTE: No warranty coverage for software, operating system (OS) issues, virus/malware infections, software crashes, or errors caused by third-party applications.'
                },
                {
                    label: 'Service Hours',
                    text: 'SERVICE HOURS: Warranty claims and replacements are handled Sunday–Thursday, 10:00 AM–5:00 PM only.'
                },
                {
                    label: 'Repair Timeline',
                    text: 'Warranty repairs may take 21–42 business days, subject to parts availability and service procedures.'
                },
                {
                    label: 'Out-of-Warranty Repairs',
                    text: 'Out-of-warranty repairs may incur additional charges for parts and certified technician labor.'
                }
            ],
            departmentContact: {
                label: 'Quality Control & Claims Department',
                email: 'qc@pcsdoha.net',
                phone: '+974 4145 3868',
                whatsapp: '+974 6691 9155',
                hours: 'Sunday – Thursday: 10:00 AM – 5:00 PM',
                location: 'PCS Service Centre, Tower I, 2nd Floor, Office 201, Al-Mirqab Mall, Doha, Qatar'
            }
        },
        ar: {
            title: 'شروط إضافية – جميع الأجهزة',
            items: [
                {
                    label: 'الملحقات مستثناة من الضمان',
                    text: 'الملحقات مثل الشواحن والكابلات والحقائب وغيرها غير قابلة للإرجاع ولا يشملها الضمان، ما لم يُذكر خلاف ذلك في الفاتورة.'
                },
                {
                    label: 'سلامة الحالة والباركود شرط أساسي',
                    text: 'لا يُسمح بالإرجاع أو الاستبدال في حال كانت المنتجات تالفة، أو معدلة، أو غير مكتملة، أو في حال فقدان أي من الملحقات أو المستندات أو الفاتورة، أو إذا تم تغيير أو إزالة الباركود أو الرقم التسلسلي الخاص بـ PCS.'
                },
                {
                    label: 'الأضرار بعد الشراء تُبطل الضمان',
                    text: 'يُلغى الضمان في حال حدوث أي ضرر بعد الشراء أو إجراء أي إصلاح أو تعديل غير مصرح به.'
                },
                {
                    label: 'استثناء تلف الشاشة والعرض',
                    text: 'الشاشة / العرض: لا يشمل الضمان تلف الشاشة أو الوميض أو أي مشاكل أخرى متعلقة بالشاشة أو العرض، بما في ذلك المشاكل الناتجة عن سوء الاستخدام أو التعامل، حتى في حال عدم وجود تلف مادي ظاهر.'
                },
                {
                    label: 'إخلاء مسؤولية فقدان البيانات',
                    text: 'فقدان البيانات: لا تتحمل PCS أي مسؤولية عن فقدان البيانات تحت أي ظرف من الظروف. نوصي العملاء بعمل نسخ احتياطي لبياناتهم بشكل دوري.'
                },
                {
                    label: 'استثناء البرامج وأنظمة التشغيل',
                    text: 'ملاحظة: لا يشمل الضمان البرامج، أو مشاكل نظام التشغيل (OS)، أو الإصابة بالفيروسات / البرامج الضارة، أو تعطل البرامج، أو الأخطاء الناتجة عن تطبيقات الطرف الثالث.'
                },
                {
                    label: 'ساعات العمل لمركز الخدمة',
                    text: 'ساعات الخدمة: يتم التعامل مع مطالبات الضمان وعمليات الاستبدال من الأحد إلى الخميس، من الساعة 10:00 صباحًا حتى 5:00 مساءً فقط.'
                },
                {
                    label: 'الجدول الزمني للإصلاحات',
                    text: 'قد تستغرق إصلاحات الضمان من 21 إلى 42 يوم عمل، وذلك حسب توفر قطع الغيار وإجراءات مركز الخدمة.'
                },
                {
                    label: 'الإصلاحات خارج الضمان',
                    text: 'قد تخضع الإصلاحات التي لا يشملها الضمان إلى رسوم إضافية لقطع الغيار وجهود الفنيين.'
                }
            ],
            departmentContact: {
                label: 'قسم مراقبة الجودة ومطالبات الضمان',
                email: 'qc@pcsdoha.net',
                phone: '+974 4145 3868',
                whatsapp: '+974 6691 9155',
                hours: 'من الأحد إلى الخميس: 10:00 صباحًا – 5:00 مساءً',
                location: 'مركز خدمة PCS، البرج 1، الطابق الثاني، مكتب 201، مول المرقاب، الدوحة، قطر'
            }
        }
    }
};
const __TURBOPACK__default__export__ = pcsPolicies;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/policyApi.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_URL",
    ()=>API_URL,
    "getAllPolicies",
    ()=>getAllPolicies,
    "getPolicyBySlug",
    ()=>getPolicyBySlug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_URL = ("TURBOPACK compile-time value", "http://localhost:5000/api/v1") || 'http://localhost:5000/api/v1';
async function getAllPolicies() {
    try {
        const res = await fetch("".concat(API_URL, "/policies"), {
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
        console.warn('Failed to fetch policies:', err.message);
        return [];
    }
}
async function getPolicyBySlug(slug) {
    try {
        const cleanSlug = encodeURIComponent(String(slug).toLowerCase().trim());
        const res = await fetch("".concat(API_URL, "/policies/").concat(cleanSlug), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            cache: 'no-store'
        });
        const json = await res.json().catch(()=>({}));
        if (!res.ok) return null;
        return json.data || null;
    } catch (err) {
        console.warn("Failed to fetch policy '".concat(slug, "':"), err.message);
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/refund-policy/RefundPolicyClientView.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RefundPolicyClientView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$legal$2f$LegalPageLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/legal/LegalPageLayout.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pcsPolicies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/pcsPolicies.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$policyApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/policyApi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function RefundPolicyClientView() {
    _s();
    const { language, isRtl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [policy, setPolicy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RefundPolicyClientView.useEffect": ()=>{
            let isMounted = true;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$policyApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPolicyBySlug"])('refund-policy').then({
                "RefundPolicyClientView.useEffect": (data)=>{
                    if (isMounted && data) setPolicy(data);
                }
            }["RefundPolicyClientView.useEffect"]).catch({
                "RefundPolicyClientView.useEffect": ()=>{}
            }["RefundPolicyClientView.useEffect"]);
            return ({
                "RefundPolicyClientView.useEffect": ()=>{
                    isMounted = false;
                }
            })["RefundPolicyClientView.useEffect"];
        }
    }["RefundPolicyClientView.useEffect"], []);
    const { brandNew, preOwned, additionalTerms } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pcsPolicies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pcsPolicies"];
    const bn = language === 'ar' ? brandNew.ar : brandNew.en;
    const po = language === 'ar' ? preOwned.ar : preOwned.en;
    const add = language === 'ar' ? additionalTerms.ar : additionalTerms.en;
    const title = (policy === null || policy === void 0 ? void 0 : policy.title) || 'Refund & Cancellation Policy';
    const titleAr = (policy === null || policy === void 0 ? void 0 : policy.titleAr) || 'سياسة الإرجاع والاستبدال واسترداد الأموال';
    const subtitle = (policy === null || policy === void 0 ? void 0 : policy.subtitle) || 'Clear and authoritative return windows, technical defect qualification, bank transfer refund timelines, and payment fee structures under the Prestige Guarantee.';
    const subtitleAr = (policy === null || policy === void 0 ? void 0 : policy.subtitleAr) || 'الشروط الرسمية المعتمدة لمهلات الإرجاع، فحص العيوب الفنية، مواعيد استرداد الأموال عبر التحويل البنكي، ورسوم معالجة نقاط البيع والبطاقات.';
    const badge = (policy === null || policy === void 0 ? void 0 : policy.badge) || 'Prestige Customer Protection';
    const badgeAr = (policy === null || policy === void 0 ? void 0 : policy.badgeAr) || 'حماية عملاء بريستيج المعتمدة';
    const lastUpdated = (policy === null || policy === void 0 ? void 0 : policy.lastUpdated) || 'Official PCS Policy 2026';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$legal$2f$LegalPageLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: title,
        titleAr: titleAr,
        subtitle: subtitle,
        subtitleAr: subtitleAr,
        lastUpdated: lastUpdated,
        badge: badge,
        badgeAr: badgeAr,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "not-prose mb-8 p-4 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl bg-[#dc1414] text-white flex items-center justify-center shrink-0 shadow-xs",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    className: "w-5 h-5",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m9 12 2 2 4-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-bold text-gray-900",
                                        children: isRtl ? 'وثيقة السياسات الرسمية الصادرة عن الإدارة' : 'Official Authorized PCS Policy Terms'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-600",
                                        children: isRtl ? 'وفقاً للوثيقة الرسمية الصادرة عن شركة خدمات بريستيج للكمبيوتر (PCS الدوحة) والمطبقة في صالة عرض مول المرقاب.' : 'Formally codified per the ISO-certified policy document for Prestige Computer Services (PCS Doha).'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/policies",
                        className: "inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#dc1414] hover:bg-[#b80808] text-white text-xs font-bold transition-colors shrink-0 shadow-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isRtl ? 'عرض الوثيقة الكاملة ثنائية اللغة' : 'View Full Bilingual Document'
                            }, void 0, false, {
                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                className: "w-3.5 h-3.5 ".concat(isRtl ? 'rotate-180' : ''),
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M5 12h14M12 5l7 7-7 7"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "not-prose mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2.5 h-6 bg-[#dc1414] rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl sm:text-2xl font-extrabold text-gray-900",
                                children: isRtl ? '1. سياسة إرجاع الأجهزة الجديدة كلياً (7 أيام للمنتجات المختومة)' : '1. Brand-New Devices Return Policy (7 Days Sealed)'
                            }, void 0, false, {
                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-white border border-gray-200 shadow-xs flex flex-col justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 inline-block mb-2",
                                                children: isRtl ? 'الإرجاع والاستبدال' : 'Returns & Exchanges'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-bold text-gray-900",
                                                children: bn.returns.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                lineNumber: 96,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm text-gray-700 leading-relaxed",
                                                children: bn.returns.text
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: isRtl ? 'تنبيه هام:' : 'Strict Condition:'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, this),
                                            ' ',
                                            isRtl ? 'المنتجات المفتوحة أو التي تم تشغيلها غير قابلة للإرجاع نهائياً وتخضع لشروط ضمان الشركة المصنّعة.' : 'Opened or powered-on products are non-returnable and remain subject strictly to manufacturer warranty.'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-white border border-gray-200 shadow-xs flex flex-col justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2.5 py-0.5 rounded text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200 inline-block mb-2",
                                                children: isRtl ? 'معالجة استرداد الأموال' : 'Refund Processing'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-bold text-gray-900",
                                                children: bn.refunds.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm text-gray-700 leading-relaxed",
                                                children: bn.refunds.text
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 grid grid-cols-2 gap-2 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 rounded-lg bg-gray-50 border border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-gray-900",
                                                        children: isRtl ? 'طريقة الاسترداد' : 'Method'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                        lineNumber: 117,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 mt-0.5",
                                                        children: isRtl ? 'تحويل بنكي خلال يومي عمل' : 'Bank Transfer in 2 working days'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                        lineNumber: 118,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2.5 rounded-lg bg-gray-50 border border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-gray-900",
                                                        children: isRtl ? 'رسوم نقاط البيع' : 'Card Fee'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                        lineNumber: 121,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 mt-0.5",
                                                        children: isRtl ? 'خصم 2% لرسوم البطاقات' : '2% POS/Card processing fee'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                        lineNumber: 122,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "not-prose mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2.5 h-6 bg-[#dc1414] rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl sm:text-2xl font-extrabold text-gray-900",
                                children: isRtl ? '2. سياسة الأجهزة المستعملة المعتمدة (إرجاع 3 أيام / استبدال 15 يومًا)' : '2. Pre-Owned Devices (3-Day Return / 15-Day Exchange)'
                            }, void 0, false, {
                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 rounded-2xl bg-white border border-gray-200 shadow-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: "w-4 h-4",
                                            "aria-hidden": "true",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "23 4 23 10 17 10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 142,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold text-gray-900",
                                        children: po.returns.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-xs text-gray-600 leading-relaxed",
                                        children: po.returns.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 rounded-2xl bg-white border border-gray-200 shadow-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg bg-red-50 text-[#dc1414] flex items-center justify-center shrink-0 mb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: "w-4 h-4",
                                            "aria-hidden": "true",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 153,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "4.93",
                                                    y1: "4.93",
                                                    x2: "19.07",
                                                    y2: "19.07"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 154,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold text-gray-900",
                                        children: po.nonQualifying.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-xs text-gray-600 leading-relaxed",
                                        children: po.nonQualifying.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 rounded-2xl bg-white border border-gray-200 shadow-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: "w-4 h-4",
                                            "aria-hidden": "true",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "2",
                                                    y: "5",
                                                    width: "20",
                                                    height: "14",
                                                    rx: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 164,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "2",
                                                    y1: "10",
                                                    x2: "22",
                                                    y2: "10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 165,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold text-gray-900",
                                        children: po.refunds.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-xs text-gray-600 leading-relaxed",
                                        children: po.refunds.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "not-prose mb-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-gray-50 border-b border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-bold text-gray-900",
                            children: isRtl ? 'جدول مقارنة سياسات الإرجاع والاستبدال' : 'Quick Reference: Returns & Exchanges Criteria'
                        }, void 0, false, {
                            fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-gray-100/70 text-gray-700 font-bold border-b border-gray-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-3.5",
                                                children: isRtl ? 'الفئة' : 'Category'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-3.5",
                                                children: isRtl ? 'مهلة الإرجاع' : 'Return Window'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-3.5",
                                                children: isRtl ? 'مهلة الاستبدال' : 'Exchange Window'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-3.5",
                                                children: isRtl ? 'الشروط المؤهلة' : 'Qualifying Condition'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                lineNumber: 188,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-3.5",
                                                children: isRtl ? 'رسوم الدفع بالبطاقة' : 'Card Fee'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                lineNumber: 189,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-gray-200 text-gray-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3.5 font-bold text-gray-900",
                                                    children: isRtl ? 'أجهزة جديدة كلياً' : 'Brand-New Devices'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 194,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3.5 text-emerald-600 font-bold",
                                                    children: isRtl ? '7 أيام' : '7 Days'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 195,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3.5 text-emerald-600 font-bold",
                                                    children: isRtl ? '7 أيام' : '7 Days'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 196,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3.5",
                                                    children: isRtl ? 'مختومة بالكرتونة الأصلية وغير مشغلة نهائياً' : 'Sealed & unopened with original receipt'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 197,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3.5 font-semibold text-gray-900",
                                                    children: "2% POS Fee"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 198,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3.5 font-bold text-gray-900",
                                                    children: isRtl ? 'أجهزة مستعملة معتمدة' : 'Pre-Owned Devices'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 201,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3.5 text-emerald-600 font-bold",
                                                    children: isRtl ? '3 أيام' : '3 Days'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 202,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3.5 text-emerald-600 font-bold",
                                                    children: isRtl ? '15 يوماً' : '15 Days'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 203,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3.5",
                                                    children: isRtl ? 'عيوب فنية مشمولة بالضمان ومثبتة بفحص PCS' : 'Qualifying technical/warranty defects only'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 204,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3.5 font-semibold text-gray-900",
                                                    children: "2% POS Fee"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 205,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                            lineNumber: 200,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3.5 font-bold text-gray-900",
                                                    children: isRtl ? 'تغيير الرأي / ترقية' : 'Change of Mind / Upgrades'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 208,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3.5 text-red-600 font-bold",
                                                    children: isRtl ? 'غير قابل للإرجاع' : 'Non-Returnable'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 209,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3.5 text-red-600 font-bold",
                                                    children: isRtl ? 'غير قابل للاستبدال' : 'Non-Exchangeable'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 210,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3.5",
                                                    children: isRtl ? 'لا تُعد عيوبًا في المنتج' : 'Not considered product defects'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 211,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3.5",
                                                    children: "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 212,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3.5 font-bold text-gray-900",
                                                    children: isRtl ? 'الملحقات والكابلات والشواحن' : 'Accessories & Chargers'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 215,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3.5 text-red-600 font-bold",
                                                    children: isRtl ? 'غير قابلة للإرجاع' : 'Non-Returnable'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 216,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3.5 text-red-600 font-bold",
                                                    children: isRtl ? 'مستثناة' : 'Excluded'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 217,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3.5",
                                                    children: isRtl ? 'مستثناة من الضمان ما لم ينص خلاف ذلك' : 'Excluded from warranty unless on invoice'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 218,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3.5",
                                                    children: "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 219,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "not-prose p-6 sm:p-8 rounded-3xl bg-gray-900 text-white shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white inline-block mb-3",
                            children: isRtl ? 'إدارة الجودة والاسترجاع' : 'QC & Refund Department'
                        }, void 0, false, {
                            fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl sm:text-2xl font-extrabold text-white",
                            children: isRtl ? 'بدء طلب استرجاع أو استبدال' : 'Initiate a Return or Refund Request'
                        }, void 0, false, {
                            fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed",
                            children: isRtl ? 'تتم معالجة كافة طلبات الإرجاع والاسترداد بعد موافقة الإدارة العامة وقسم الجودة. يرجى مراسلة البريد أدناه مصحوباً برقم الفاتورة.' : 'All return and refund requests require HQ approval and technical QC inspection. Please submit your request directly to our Quality Control desk.'
                        }, void 0, false, {
                            fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex flex-wrap items-center gap-3 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:qc@pcsdoha.net",
                                    className: "px-5 py-3 rounded-xl bg-[#dc1414] hover:bg-[#b80808] text-white font-bold transition-colors inline-flex items-center gap-2 shadow-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: "w-4 h-4",
                                            "aria-hidden": "true",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "20",
                                                    height: "16",
                                                    x: "2",
                                                    y: "4",
                                                    rx: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 247,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                    lineNumber: 248,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                            lineNumber: 246,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: isRtl ? 'مراسلة قسم الجودة (qc@pcsdoha.net)' : 'Email QC (qc@pcsdoha.net)'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                            lineNumber: 250,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                    lineNumber: 242,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://wa.me/97466919155",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold transition-colors inline-flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            className: "w-4 h-4 text-emerald-400",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                                lineNumber: 260,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                            lineNumber: 259,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: isRtl ? 'محادثة واتساب' : 'WhatsApp Support'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                            lineNumber: 262,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
                lineNumber: 227,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/refund-policy/RefundPolicyClientView.jsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(RefundPolicyClientView, "xmQXxgQ8FyGaA80JropbYm3Q8z4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = RefundPolicyClientView;
var _c;
__turbopack_context__.k.register(_c, "RefundPolicyClientView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_455cadf0._.js.map