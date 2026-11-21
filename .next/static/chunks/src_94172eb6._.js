(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/services/blogApi.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_URL",
    ()=>API_URL,
    "getBlogBySlug",
    ()=>getBlogBySlug,
    "getBlogs",
    ()=>getBlogs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_URL = ("TURBOPACK compile-time value", "http://localhost:5000/api/v1") || 'http://localhost:5000/api/v1';
async function getBlogs() {
    let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    try {
        const q = new URLSearchParams();
        Object.entries(params).forEach((param)=>{
            let [k, v] = param;
            if (v !== undefined && v !== '') q.append(k, v);
        });
        const res = await fetch("".concat(API_URL, "/blogs?").concat(q), {
            cache: 'no-store'
        });
        if (!res.ok) throw new Error("HTTP ".concat(res.status));
        const json = await res.json();
        return json.data || {
            blogs: [],
            total: 0,
            categories: []
        };
    } catch (e) {
        return {
            blogs: [],
            total: 0,
            categories: []
        };
    }
}
async function getBlogBySlug(slug) {
    try {
        const res = await fetch("".concat(API_URL, "/blogs/").concat(slug), {
            cache: 'no-store'
        });
        if (!res.ok) return null;
        const json = await res.json();
        return json.data || null;
    } catch (e) {
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/blog/BlogListView.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogListView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blogApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/blogApi.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const FALLBACK_IMG = 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80';
function SearchIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "w-4 h-4 text-[#9ca3af] shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "11",
                cy: "11",
                r: "8"
            }, void 0, false, {
                fileName: "[project]/src/components/blog/BlogListView.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m21 21-4.35-4.35"
            }, void 0, false, {
                fileName: "[project]/src/components/blog/BlogListView.jsx",
                lineNumber: 12,
                columnNumber: 39
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/blog/BlogListView.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = SearchIcon;
function CalendarIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        className: "w-3.5 h-3.5 shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "3",
                width: "12",
                height: "11",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/blog/BlogListView.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 1.8v2.4M11 1.8v2.4M2 6.5h12"
            }, void 0, false, {
                fileName: "[project]/src/components/blog/BlogListView.jsx",
                lineNumber: 20,
                columnNumber: 57
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/blog/BlogListView.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = CalendarIcon;
function ClockIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "w-3.5 h-3.5 shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8",
                cy: "8",
                r: "6"
            }, void 0, false, {
                fileName: "[project]/src/components/blog/BlogListView.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 4.8v3.4l2.2 1.3"
            }, void 0, false, {
                fileName: "[project]/src/components/blog/BlogListView.jsx",
                lineNumber: 28,
                columnNumber: 37
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/blog/BlogListView.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = ClockIcon;
function StarIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 16 16",
        fill: "currentColor",
        className: "w-3 h-3 shrink-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4L8 10.4l-3.6 1.9.7-4L2.2 5.7l4-.6L8 1.5z"
        }, void 0, false, {
            fileName: "[project]/src/components/blog/BlogListView.jsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/blog/BlogListView.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c3 = StarIcon;
function ArrowRightIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 8h10M9 4l4 4-4 4"
        }, void 0, false, {
            fileName: "[project]/src/components/blog/BlogListView.jsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/blog/BlogListView.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c4 = ArrowRightIcon;
function ChevronLeftIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "w-4 h-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M10 4L6 8l4 4"
        }, void 0, false, {
            fileName: "[project]/src/components/blog/BlogListView.jsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/blog/BlogListView.jsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c5 = ChevronLeftIcon;
function ChevronRightIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "w-4 h-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6 4l4 4-4 4"
        }, void 0, false, {
            fileName: "[project]/src/components/blog/BlogListView.jsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/blog/BlogListView.jsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c6 = ChevronRightIcon;
function ArticleIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "w-12 h-12 text-[#d1d5db]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "8",
                y: "6",
                width: "32",
                height: "36",
                rx: "3"
            }, void 0, false, {
                fileName: "[project]/src/components/blog/BlogListView.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 16h18M15 22h18M15 28h12"
            }, void 0, false, {
                fileName: "[project]/src/components/blog/BlogListView.jsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/blog/BlogListView.jsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_c7 = ArticleIcon;
function BlogCard(param) {
    let { post } = param;
    var _post_author, _post_author1, _post_author2;
    const img = post.coverImage || FALLBACK_IMG;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden shadow-[0_2px_12px_rgba(16,24,40,0.04)] hover:shadow-[0_10px_28px_rgba(16,24,40,0.09)] hover:-translate-y-1 hover:border-[#dc1414]/20 transition-all duration-200 flex flex-col group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-48 sm:h-52 overflow-hidden bg-[#f1f5f9]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: img,
                        alt: post.title,
                        className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                        loading: "lazy"
                    }, void 0, false, {
                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-black/55 backdrop-blur-sm text-white leading-none",
                        children: post.category
                    }, void 0, false, {
                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    post.isFeatured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#dc1414] text-white leading-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StarIcon, {}, void 0, false, {
                                fileName: "[project]/src/components/blog/BlogListView.jsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            " Featured"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/blog/BlogListView.jsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 flex flex-col flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 text-[11.5px] text-[#6b7280] mb-2.5 font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CalendarIcon, {}, void 0, false, {
                                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                                        lineNumber: 91,
                                        columnNumber: 62
                                    }, this),
                                    new Date(post.createdAt).toLocaleDateString('en-IN', {
                                        day: '2-digit',
                                        month: 'short',
                                        year: 'numeric'
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/blog/BlogListView.jsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#d1d5db]",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/src/components/blog/BlogListView.jsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClockIcon, {}, void 0, false, {
                                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                                        lineNumber: 93,
                                        columnNumber: 62
                                    }, this),
                                    post.readTime
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/blog/BlogListView.jsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[15px] font-bold text-[#111827] leading-snug group-hover:text-[#dc1414] transition-colors line-clamp-2 flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/blog/".concat(post.slug),
                            children: post.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/blog/BlogListView.jsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    post.excerpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[12.5px] text-[#4b5563] mt-2 line-clamp-2 leading-relaxed",
                        children: post.excerpt
                    }, void 0, false, {
                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 pt-3.5 border-t border-[#f3f4f6] flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    ((_post_author = post.author) === null || _post_author === void 0 ? void 0 : _post_author.avatar) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: post.author.avatar,
                                        alt: post.author.name,
                                        className: "w-7 h-7 rounded-full object-cover border border-[#e5e7eb]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-7 h-7 rounded-full bg-[#fee2e2] flex items-center justify-center text-[#dc1414] text-[11px] font-bold",
                                        children: (((_post_author1 = post.author) === null || _post_author1 === void 0 ? void 0 : _post_author1.name) || 'P')[0]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                                        lineNumber: 105,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[12px] font-semibold text-[#374151]",
                                        children: ((_post_author2 = post.author) === null || _post_author2 === void 0 ? void 0 : _post_author2.name) || 'Prestige Computers'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/blog/BlogListView.jsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/blog/".concat(post.slug),
                                className: "inline-flex items-center gap-1 text-[12px] font-bold text-[#dc1414] hover:text-[#b91c1c] group",
                                children: [
                                    "Read ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRightIcon, {}, void 0, false, {
                                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                                        lineNumber: 110,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/blog/BlogListView.jsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/blog/BlogListView.jsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/blog/BlogListView.jsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_c8 = BlogCard;
function SkeletonCard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden animate-pulse",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-48 bg-[#f3f4f6]"
            }, void 0, false, {
                fileName: "[project]/src/components/blog/BlogListView.jsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 bg-[#f3f4f6] rounded w-1/3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 bg-[#f3f4f6] rounded w-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 bg-[#f3f4f6] rounded w-3/4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 bg-[#f3f4f6] rounded w-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 bg-[#f3f4f6] rounded w-2/3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/blog/BlogListView.jsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/blog/BlogListView.jsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
_c9 = SkeletonCard;
function BlogListView() {
    var _featuredPost_author, _featuredPost_author1, _featuredPost_author2, _featuredPost_author3;
    _s();
    const [blogs, setBlogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [total, setTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [pages, setPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlogListView.useEffect": ()=>{
            let cancelled = false;
            setLoading(true);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blogApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlogs"])({
                category: selectedCategory === 'All' ? '' : selectedCategory,
                search,
                page,
                limit: 9
            }).then({
                "BlogListView.useEffect": (data)=>{
                    if (cancelled) return;
                    setBlogs(data.blogs || []);
                    setTotal(data.total || 0);
                    setPages(data.pages || 1);
                    setCategories([
                        'All',
                        ...data.categories || []
                    ]);
                }
            }["BlogListView.useEffect"]).finally({
                "BlogListView.useEffect": ()=>{
                    if (!cancelled) setLoading(false);
                }
            }["BlogListView.useEffect"]);
            return ({
                "BlogListView.useEffect": ()=>{
                    cancelled = true;
                }
            })["BlogListView.useEffect"];
        }
    }["BlogListView.useEffect"], [
        selectedCategory,
        search,
        page
    ]);
    const featuredPost = blogs.find((b)=>b.isFeatured) || blogs[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-[#f8fafc] min-h-screen pb-16 text-[#111827]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1380px] mx-auto px-4 lg:px-6 pt-4 sm:pt-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "mb-5 text-[13px] text-[#6b7280]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "hover:text-[#dc1414] transition-colors",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blog/BlogListView.jsx",
                                    lineNumber: 167,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/blog/BlogListView.jsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "text-[#d1d5db]",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/src/components/blog/BlogListView.jsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "font-semibold text-[#111827]",
                                children: "Tech Guides & Blog"
                            }, void 0, false, {
                                fileName: "[project]/src/components/blog/BlogListView.jsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/blog/BlogListView.jsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center max-w-2xl mx-auto mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-bold bg-[#fee2e2] text-[#dc1414] mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 16 16",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "1.8",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    className: "w-3.5 h-3.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "2",
                                            y: "2",
                                            width: "12",
                                            height: "12",
                                            rx: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/blog/BlogListView.jsx",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5 6h6M5 9h4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/blog/BlogListView.jsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/blog/BlogListView.jsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                "Prestige Tech Journal"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/blog/BlogListView.jsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl sm:text-[36px] font-extrabold tracking-tight leading-tight",
                            children: [
                                "Computer Hardware ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#dc1414]",
                                    children: "Guides & Insights"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blog/BlogListView.jsx",
                                    lineNumber: 183,
                                    columnNumber: 31
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/blog/BlogListView.jsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2.5 text-[13.5px] sm:text-sm text-[#6b7280] leading-relaxed",
                            children: "Expert buying advice, benchmark comparisons, custom PC builds, and rental strategies."
                        }, void 0, false, {
                            fileName: "[project]/src/components/blog/BlogListView.jsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 relative max-w-md mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchIcon, {}, void 0, false, {
                                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blog/BlogListView.jsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: search,
                                    onChange: (e)=>{
                                        setSearch(e.target.value);
                                        setPage(1);
                                    },
                                    placeholder: "Search guides, GPUs, benchmarks...",
                                    className: "w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#d1d5db] bg-white text-[13.5px] shadow-[0_1px_3px_rgba(16,24,40,0.04)] focus:border-[#dc1414] focus:ring-2 focus:ring-[#dc1414]/20 outline-none transition-all"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blog/BlogListView.jsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/blog/BlogListView.jsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/blog/BlogListView.jsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this),
                categories.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar",
                    children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                setSelectedCategory(cat);
                                setPage(1);
                            },
                            className: "px-4 py-2 rounded-xl text-[12.5px] font-semibold transition-all whitespace-nowrap cursor-pointer ".concat(selectedCategory === cat ? 'bg-[#dc1414] text-white shadow-[0_4px_12px_rgba(220,20,20,0.3)]' : 'bg-white border border-[#e5e7eb] text-[#4b5563] hover:border-[#dc1414]/40 hover:text-[#dc1414]'),
                            children: cat
                        }, cat, false, {
                            fileName: "[project]/src/components/blog/BlogListView.jsx",
                            lineNumber: 207,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/blog/BlogListView.jsx",
                    lineNumber: 205,
                    columnNumber: 11
                }, this),
                !loading && featuredPost && selectedCategory === 'All' && !search && page === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12 bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden shadow-[0_2px_16px_rgba(16,24,40,0.06)] hover:shadow-[0_8px_32px_rgba(16,24,40,0.1)] transition-shadow",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 items-stretch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-7 h-64 sm:h-80 lg:h-auto relative overflow-hidden min-h-[280px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: featuredPost.coverImage || FALLBACK_IMG,
                                        alt: featuredPost.title,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                                        lineNumber: 224,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11.5px] font-bold bg-[#dc1414] text-white shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StarIcon, {}, void 0, false, {
                                                fileName: "[project]/src/components/blog/BlogListView.jsx",
                                                lineNumber: 226,
                                                columnNumber: 19
                                            }, this),
                                            " Featured Article"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                                        lineNumber: 225,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/blog/BlogListView.jsx",
                                lineNumber: 223,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2.5 text-[12px] text-[#6b7280] mb-3 font-medium flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2.5 py-1 rounded-md bg-[#f1f5f9] text-[#374151] font-semibold text-[11.5px]",
                                                        children: featuredPost.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                                                        lineNumber: 232,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClockIcon, {}, void 0, false, {
                                                                fileName: "[project]/src/components/blog/BlogListView.jsx",
                                                                lineNumber: 233,
                                                                columnNumber: 72
                                                            }, this),
                                                            featuredPost.readTime
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                                                        lineNumber: 233,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#d1d5db]",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                                                        lineNumber: 234,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CalendarIcon, {}, void 0, false, {
                                                                fileName: "[project]/src/components/blog/BlogListView.jsx",
                                                                lineNumber: 235,
                                                                columnNumber: 72
                                                            }, this),
                                                            new Date(featuredPost.createdAt).toLocaleDateString('en-IN', {
                                                                day: '2-digit',
                                                                month: 'short',
                                                                year: 'numeric'
                                                            })
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                                                        lineNumber: 235,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/blog/BlogListView.jsx",
                                                lineNumber: 231,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl sm:text-2xl font-extrabold text-[#111827] leading-tight hover:text-[#dc1414] transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/blog/".concat(featuredPost.slug),
                                                    children: featuredPost.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/blog/BlogListView.jsx",
                                                    lineNumber: 238,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/blog/BlogListView.jsx",
                                                lineNumber: 237,
                                                columnNumber: 19
                                            }, this),
                                            featuredPost.excerpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-[13.5px] text-[#4b5563] leading-relaxed line-clamp-3",
                                                children: featuredPost.excerpt
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/blog/BlogListView.jsx",
                                                lineNumber: 241,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                                        lineNumber: 230,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 pt-5 border-t border-[#f3f4f6] flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2.5",
                                                children: [
                                                    ((_featuredPost_author = featuredPost.author) === null || _featuredPost_author === void 0 ? void 0 : _featuredPost_author.avatar) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: featuredPost.author.avatar,
                                                        alt: featuredPost.author.name,
                                                        className: "w-9 h-9 rounded-full object-cover border border-[#e5e7eb]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                                                        lineNumber: 247,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-9 h-9 rounded-full bg-[#fee2e2] flex items-center justify-center text-[#dc1414] text-sm font-bold",
                                                        children: (((_featuredPost_author1 = featuredPost.author) === null || _featuredPost_author1 === void 0 ? void 0 : _featuredPost_author1.name) || 'P')[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                                                        lineNumber: 248,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[13px] font-bold text-[#111827]",
                                                                children: ((_featuredPost_author2 = featuredPost.author) === null || _featuredPost_author2 === void 0 ? void 0 : _featuredPost_author2.name) || 'Prestige Computers'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/blog/BlogListView.jsx",
                                                                lineNumber: 251,
                                                                columnNumber: 23
                                                            }, this),
                                                            ((_featuredPost_author3 = featuredPost.author) === null || _featuredPost_author3 === void 0 ? void 0 : _featuredPost_author3.role) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] text-[#6b7280]",
                                                                children: featuredPost.author.role
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/blog/BlogListView.jsx",
                                                                lineNumber: 252,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                                                        lineNumber: 250,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/blog/BlogListView.jsx",
                                                lineNumber: 245,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/blog/".concat(featuredPost.slug),
                                                className: "inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#dc1414] hover:text-[#b91c1c] group",
                                                children: [
                                                    "Read Article ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRightIcon, {}, void 0, false, {
                                                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                                                        lineNumber: 256,
                                                        columnNumber: 34
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/blog/BlogListView.jsx",
                                                lineNumber: 255,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                                        lineNumber: 244,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/blog/BlogListView.jsx",
                                lineNumber: 229,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/blog/BlogListView.jsx",
                        lineNumber: 222,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/blog/BlogListView.jsx",
                    lineNumber: 221,
                    columnNumber: 11
                }, this),
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: [
                        ...Array(6)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonCard, {}, i, false, {
                            fileName: "[project]/src/components/blog/BlogListView.jsx",
                            lineNumber: 267,
                            columnNumber: 42
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/blog/BlogListView.jsx",
                    lineNumber: 266,
                    columnNumber: 11
                }, this) : blogs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl border border-[#e5e7eb] py-20 text-center shadow-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-4 text-[#d1d5db]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArticleIcon, {}, void 0, false, {
                                fileName: "[project]/src/components/blog/BlogListView.jsx",
                                lineNumber: 271,
                                columnNumber: 70
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/blog/BlogListView.jsx",
                            lineNumber: 271,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[16px] font-bold text-[#374151]",
                            children: "No articles found"
                        }, void 0, false, {
                            fileName: "[project]/src/components/blog/BlogListView.jsx",
                            lineNumber: 272,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[13px] text-[#6b7280] mt-1",
                            children: "Try a different category or search term."
                        }, void 0, false, {
                            fileName: "[project]/src/components/blog/BlogListView.jsx",
                            lineNumber: 273,
                            columnNumber: 13
                        }, this),
                        (search || selectedCategory !== 'All') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                setSearch('');
                                setSelectedCategory('All');
                                setPage(1);
                            },
                            className: "mt-4 px-4 py-2 bg-[#dc1414] text-white text-[13px] font-semibold rounded-lg hover:bg-[#b91c1c] transition-colors cursor-pointer",
                            children: "Clear Filters"
                        }, void 0, false, {
                            fileName: "[project]/src/components/blog/BlogListView.jsx",
                            lineNumber: 275,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/blog/BlogListView.jsx",
                    lineNumber: 270,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7",
                    children: blogs.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlogCard, {
                            post: post
                        }, post._id, false, {
                            fileName: "[project]/src/components/blog/BlogListView.jsx",
                            lineNumber: 283,
                            columnNumber: 34
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/blog/BlogListView.jsx",
                    lineNumber: 282,
                    columnNumber: 11
                }, this),
                pages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-2 mt-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            disabled: page === 1,
                            onClick: ()=>setPage((p)=>p - 1),
                            className: "inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold border border-[#e5e7eb] rounded-xl bg-white hover:border-[#dc1414] hover:text-[#dc1414] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronLeftIcon, {}, void 0, false, {
                                    fileName: "[project]/src/components/blog/BlogListView.jsx",
                                    lineNumber: 292,
                                    columnNumber: 15
                                }, this),
                                " Prev"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/blog/BlogListView.jsx",
                            lineNumber: 290,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1",
                            children: Array.from({
                                length: pages
                            }, (_, i)=>i + 1).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setPage(p),
                                    className: "w-9 h-9 rounded-xl text-[13px] font-bold transition-all cursor-pointer ".concat(page === p ? 'bg-[#dc1414] text-white shadow-xs' : 'bg-white border border-[#e5e7eb] text-[#4b5563] hover:border-[#dc1414]/40'),
                                    children: p
                                }, p, false, {
                                    fileName: "[project]/src/components/blog/BlogListView.jsx",
                                    lineNumber: 296,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/blog/BlogListView.jsx",
                            lineNumber: 294,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            disabled: page === pages,
                            onClick: ()=>setPage((p)=>p + 1),
                            className: "inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold border border-[#e5e7eb] rounded-xl bg-white hover:border-[#dc1414] hover:text-[#dc1414] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors",
                            children: [
                                "Next ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronRightIcon, {}, void 0, false, {
                                    fileName: "[project]/src/components/blog/BlogListView.jsx",
                                    lineNumber: 306,
                                    columnNumber: 20
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/blog/BlogListView.jsx",
                            lineNumber: 304,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/blog/BlogListView.jsx",
                    lineNumber: 289,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/blog/BlogListView.jsx",
            lineNumber: 162,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/blog/BlogListView.jsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_s(BlogListView, "KO/0gFVi/ibRklMwfRJfnAZeEiE=");
_c10 = BlogListView;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "SearchIcon");
__turbopack_context__.k.register(_c1, "CalendarIcon");
__turbopack_context__.k.register(_c2, "ClockIcon");
__turbopack_context__.k.register(_c3, "StarIcon");
__turbopack_context__.k.register(_c4, "ArrowRightIcon");
__turbopack_context__.k.register(_c5, "ChevronLeftIcon");
__turbopack_context__.k.register(_c6, "ChevronRightIcon");
__turbopack_context__.k.register(_c7, "ArticleIcon");
__turbopack_context__.k.register(_c8, "BlogCard");
__turbopack_context__.k.register(_c9, "SkeletonCard");
__turbopack_context__.k.register(_c10, "BlogListView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_94172eb6._.js.map