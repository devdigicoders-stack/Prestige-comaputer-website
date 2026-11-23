module.exports = [
"[project]/src/services/policyApi.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_URL",
    ()=>API_URL,
    "getAllPolicies",
    ()=>getAllPolicies,
    "getPolicyBySlug",
    ()=>getPolicyBySlug
]);
const API_URL = ("TURBOPACK compile-time value", "http://localhost:5000/api/v1") || 'http://localhost:5000/api/v1';
async function getAllPolicies() {
    try {
        const res = await fetch(`${API_URL}/policies`, {
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
        const res = await fetch(`${API_URL}/policies/${cleanSlug}`, {
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
        console.warn(`Failed to fetch policy '${slug}':`, err.message);
        return null;
    }
}
}),
"[project]/src/components/faq/FaqView.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FaqView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$policyApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/policyApi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const FAQ_DATA = [
    // 1. Ordering & Delivery
    {
        category: 'Ordering & Delivery',
        categoryAr: 'الطلب والتوصيل',
        question: 'How long does delivery take for laptops and custom PCs?',
        questionAr: 'كم من الوقت يستغرق توصيل الحواسيب المحمولة وأجهزة الكمبيوتر المخصصة؟',
        answer: 'Standard delivery across Doha and Qatar takes 24 to 48 hours, with same-day pickup available directly at our Al-Mirqab Mall showroom. Custom PC builds require an additional 24-48 hours for rigorous hardware stress testing and QA before dispatch.',
        answerAr: 'يستغرق التوصيل العادي في جميع أنحاء الدوحة وقطر من 24 إلى 48 ساعة، مع إمكانية الاستلام في نفس اليوم مباشرة من معرضنا في المرقاب مول. تتطلب أجهزة الكمبيوتر المخصصة 24-48 ساعة إضافية لاختبارات الإجهاد وضمان الجودة قبل الإرسال.'
    },
    {
        category: 'Ordering & Delivery',
        categoryAr: 'الطلب والتوصيل',
        question: 'Can I track my shipment in real-time?',
        questionAr: 'هل يمكنني تتبع شحنتي في الوقت الفعلي؟',
        answer: 'Yes! As soon as your order is dispatched, you receive a real-time tracking number via SMS and WhatsApp. You can also visit our Track Order page (/track-order) and enter your Order ID to see exact live milestones from packing to doorstep delivery.',
        answerAr: 'نعم! بمجرد إرسال طلبك، تتلقى رقم تتبع مباشر عبر الرسائل النصية القصيرة وواتساب. يمكنك أيضاً زيارة صفحة تتبع الطلب وإدخال رقم طلبك لمعرفة المراحل الدقيقة وصولاً إلى باب منزلك.'
    },
    {
        category: 'Ordering & Delivery',
        categoryAr: 'الطلب والتوصيل',
        question: 'Do you offer Cash on Delivery (COD)?',
        questionAr: 'هل توفرون خدمة الدفع عند الاستلام؟',
        answer: 'Yes, Cash on Delivery is available on accessories, components, and select laptops up to QAR 2,500 across Doha. High-end custom gaming rigs and rental bookings require prepaid verification for insurance and transit safety.',
        answerAr: 'نعم، يتوفر الدفع عند الاستلام على الملحقات والمكونات ومجموعة مختارة من أجهزة الكمبيوتر المحمولة حتى 2,500 ر.ق في الدوحة. تتطلب أجهزة الألعاب المتطورة وحجوزات التأجير دفعاً مسبقاً للتأمين وسلامة الشحن.'
    },
    // 2. Computer & Laptop Rentals
    {
        category: 'Computer & Laptop Rentals',
        categoryAr: 'تأجير الحواسيب واللابتوبات',
        question: 'How does the "Rent On" computer rental service work?',
        questionAr: 'كيف تعمل خدمة تأجير أجهزة الكمبيوتر "Rent On"؟',
        answer: 'Our rental service allows individuals, startups, students, and businesses to rent high-performance laptops and workstations on flexible daily, weekly, and monthly plans. Simply choose your machine, select your rental duration, submit basic verification, pay a refundable security deposit, and receive your machine at your doorstep or pick it up from our Al-Mirqab Mall Showroom in Doha.',
        answerAr: 'تتيح خدمة التأجير لدينا للأفراد والشركات الناشئة والطلاب والشركات استئجار حواسيب محمولة ومحطات عمل عالية الأداء بخطط مرنة يومية وأسبوعية وشهرية. ما عليك سوى اختيار جهازك وتحديد مدة الإيجار وتقديم التحقق الأساسي ودفع تأمين مسترد واستلام جهازك.'
    },
    {
        category: 'Computer & Laptop Rentals',
        categoryAr: 'تأجير الحواسيب واللابتوبات',
        question: 'When is my rental security deposit refunded?',
        questionAr: 'متى يتم استرداد مبلغ التأمين للإيجار؟',
        answer: 'Your security deposit is 100% refundable. Once your rental tenure concludes and our technician inspects the machine for normal operational condition, your deposit is credited back to your original bank account within 24 to 48 hours.',
        answerAr: 'مبلغ التأمين مسترد بنسبة 100%. بمجرد انتهاء فترة الإيجار وفحص الفني للجهاز للتأكد من حالته التشغيلية الطبيعية، يتم إرجاع التأمين لحسابك المصرفي خلال 24 إلى 48 ساعة.'
    },
    {
        category: 'Computer & Laptop Rentals',
        categoryAr: 'تأجير الحواسيب واللابتوبات',
        question: 'Can I extend my rental tenure or buy the laptop later?',
        questionAr: 'هل يمكنني تمديد مدة الإيجار أو شراء الجهاز لاحقاً؟',
        answer: 'Absolutely! You can extend your rental tenure at any time with discounted long-term renewal rates. We also offer a "Rent-to-Own" program where a significant portion of your paid rent is deducted from the purchase price if you decide to buy the machine permanently.',
        answerAr: 'بالتأكيد! يمكنك تمديد فترة الإيجار في أي وقت بأسعار تجديد مخفضة طويلة الأجل. كما نوفر برنامج "الإيجار المنتهي بالتمليك" حيث يُخصم جزء كبير من الإيجار المدفوع من سعر الشراء.'
    },
    // 3. Custom PC Assembly & Build
    {
        category: 'Custom PC Assembly',
        categoryAr: 'تجميع الحواسيب المخصصة',
        question: 'Can I customize hardware specifications for my PC?',
        questionAr: 'هل يمكنني تخصيص مواصفات العتاد لجهاز الكمبيوتر الخاص بي؟',
        answer: 'Yes! Prestige Computers is famous for custom PC rigs. You can choose your processor (Intel Core or AMD Ryzen), graphics card (NVIDIA RTX 4060 through RTX 4090), DDR5 RAM, NVMe Gen4 storage, liquid AIO coolers, and ARGB cabinets. Our certified engineers assemble and wire-manage your build with surgical precision.',
        answerAr: 'نعم! تشتهر بريستيج كمبيوترز بأجهزة الكمبيوتر المخصصة. يمكنك اختيار المعالج وبطاقة الرسومات وذاكرة RAM ومساحة التخزين والتبريد السائل. يقوم مهندسونا المعتمدون بتجميع الجهاز وإدارة الأسلاك بدقة متناهية.'
    },
    {
        category: 'Custom PC Assembly',
        categoryAr: 'تجميع الحواسيب المخصصة',
        question: 'Do custom PC builds include thermal stress testing?',
        questionAr: 'هل تتضمن أجهزة الكمبيوتر المخصصة اختبارات الإجهاد الحراري؟',
        answer: 'Every single custom rig built at our Doha tech lab undergoes a compulsory 48-hour benchmark burn-in test (Cinebench, 3DMark TimeSpy, FurMark) to guarantee zero thermal throttling, optimal fan curves, and 100% hardware stability before leaving our premises.',
        answerAr: 'يخضع كل جهاز مخصص يتم بناؤه في مختبرنا الفني بالدوحة لاختبار تشغيل معياري إلزامي لمدة 48 ساعة لضمان استقرار العتاد والأداء بنسبة 100% قبل التسليم.'
    },
    // 4. Payment, EMI & Invoicing
    {
        category: 'Payments & EMI',
        categoryAr: 'الدفع والأقساط',
        question: 'What payment methods do you accept?',
        questionAr: 'ما هي طرق الدفع التي تقبلونها؟',
        answer: 'We accept all major payment methods: Credit and Debit Cards (Visa, MasterCard), QPay, Apple Pay, Net Banking, EMI installment plans, and corporate bank wire transfers.',
        answerAr: 'نقبل جميع وسائل الدفع الرئيسية: بطاقات الائتمان والخصم (Visa وMasterCard)، وQPay، وApple Pay، والتحويلات المصرفية المباشرة، وخيارات التقسيط الميسرة.'
    },
    {
        category: 'Payments & EMI',
        categoryAr: 'الدفع والأقساط',
        question: 'Is Installment EMI available on laptops and gaming PCs?',
        questionAr: 'هل يتوفر تقسيط بدون فوائد على الحواسيب المحمولة وأجهزة الألعاب؟',
        answer: 'Yes! We offer 3, 6, 9, and 12-month installment options in partnership with leading local banks in Qatar. You can select your preferred bank and installment tenure directly on the Checkout page.',
        answerAr: 'نعم! نقدم خيارات تقسيط لمدة 3 و6 و9 و12 شهراً بالتعاون مع البنوك الرائدة في دولة قطر. يمكنك اختيار البنك المفضل وخطة التقسيط مباشرة عند الدفع.'
    },
    {
        category: 'Payments & EMI',
        categoryAr: 'الدفع والأقساط',
        question: 'Can I claim corporate tax invoicing on business purchases?',
        questionAr: 'هل يمكنني الحصول على فواتير ضريبية للمشتريات التجارية والشركات؟',
        answer: 'Yes! At checkout, simply select "Business / Institution" and provide your registered company name and CR / Tax Registration number. We will issue an official B2B Tax Invoice with itemized breakdown.',
        answerAr: 'نعم! عند الدفع، ما عليك سوى اختيار "شركة / مؤسسة" وتزويدنا باسم شركتك ورقم السجل التجاري وسنصدر فاتورة ضريبية رسمية للشركات B2B.'
    },
    // 5. Returns, Refunds & Warranty
    {
        category: 'Returns & Warranty',
        categoryAr: 'الإرجاع والضمان',
        question: 'What is your return and replacement policy?',
        questionAr: 'ما هي سياسة الإرجاع والاستبدال لديكم؟',
        answer: 'We offer a 7-day hassle-free return or replacement policy for any manufacturing defect, transit damage, or specification mismatch. Our technical team will inspect the issue and initiate an instant replacement or full refund.',
        answerAr: 'نقدم سياسة استبدال أو إرجاع ميسرة لمدة 7 أيام لأي عيب تصنيع أو تلف أثناء النقل أو عدم تطابق في المواصفات، مع استبدال فوري أو استرداد كامل للمبلغ وفقاً للوائح حماية المستهلك بدولة قطر.'
    },
    {
        category: 'Returns & Warranty',
        categoryAr: 'الإرجاع والضمان',
        question: 'What warranty is included with my purchase?',
        questionAr: 'ما هو الضمان المشمول مع مشترياتي؟',
        answer: 'All laptops and pre-built PCs come with 1 to 3 Years official brand warranty (Dell, HP, Lenovo, ASUS, Apple) plus complimentary 1-Year Prestige Computers Care assistance. In addition, you get lifetime technical support and labor-free cleaning diagnostics at our service hubs.',
        answerAr: 'تأتي جميع أجهزة الكمبيوتر واللابتوبات مع ضمان رسمي من العلامة التجارية من سنة إلى 3 سنوات (Dell وHP وLenovo وASUS وApple) بالإضافة إلى دعم بريستيج كمبيوترز كير المجاني ودعم فني مستمر في مراكز خدمتنا.'
    }
];
const CATEGORIES_MAP = [
    {
        en: 'All',
        ar: 'جميع الأسئلة'
    },
    {
        en: 'Ordering & Delivery',
        ar: 'الطلب والتوصيل'
    },
    {
        en: 'Computer & Laptop Rentals',
        ar: 'تأجير الحواسيب واللابتوبات'
    },
    {
        en: 'Custom PC Assembly',
        ar: 'تجميع الحواسيب المخصصة'
    },
    {
        en: 'Payments & EMI',
        ar: 'الدفع والأقساط'
    },
    {
        en: 'Returns & Warranty',
        ar: 'الإرجاع والضمان'
    }
];
function FaqView() {
    const { isArabic } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [dynamicFaqs, setDynamicFaqs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All');
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [openIndexes, setOpenIndexes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        0,
        1
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isMounted = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$policyApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPolicyBySlug"])('faq').then((data)=>{
            if (isMounted && data?.faqs?.length) {
                setDynamicFaqs(data.faqs);
            }
        }).catch(()=>{});
        return ()=>{
            isMounted = false;
        };
    }, []);
    const activeFaqs = dynamicFaqs.length > 0 ? dynamicFaqs : FAQ_DATA;
    const toggleAccordion = (idx)=>{
        setOpenIndexes((prev)=>prev.includes(idx) ? prev.filter((i)=>i !== idx) : [
                ...prev,
                idx
            ]);
    };
    const filteredFaqs = activeFaqs.filter((faq)=>{
        const matchCategory = selectedCategory === 'All' || faq.category === selectedCategory;
        const qText = isArabic ? faq.questionAr || faq.question : faq.question;
        const aText = isArabic ? faq.answerAr || faq.answer : faq.answer;
        const matchQuery = !searchQuery || qText.toLowerCase().includes(searchQuery.toLowerCase()) || aText.toLowerCase().includes(searchQuery.toLowerCase());
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
                                    children: isArabic ? 'الرئيسية' : 'Home'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/faq/FaqView.jsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/src/components/faq/FaqView.jsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "font-semibold text-[#111827]",
                                children: isArabic ? 'مركز المساعدة والأسئلة الشائعة' : 'Help Center & FAQ'
                            }, void 0, false, {
                                fileName: "[project]/src/components/faq/FaqView.jsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/faq/FaqView.jsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/faq/FaqView.jsx",
                    lineNumber: 204,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center max-w-2xl mx-auto mb-8 sm:mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-bold bg-[#fee2e2] text-[#dc1414] mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2.2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    className: "w-3.5 h-3.5",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/faq/FaqView.jsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M9 18h6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/faq/FaqView.jsx",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M10 22h4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/faq/FaqView.jsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this),
                                isArabic ? 'قاعدة المعرفة والإجابات الفورية' : 'Knowledge Base & Answers'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/faq/FaqView.jsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl sm:text-4xl font-extrabold tracking-tight text-[#111827]",
                            children: isArabic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "الأسئلة ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#dc1414]",
                                        children: "الشائعة والمساعدة"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/faq/FaqView.jsx",
                                        lineNumber: 231,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Frequently Asked ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#dc1414]",
                                        children: "Questions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/faq/FaqView.jsx",
                                        lineNumber: 235,
                                        columnNumber: 34
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/faq/FaqView.jsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-sm sm:text-base text-[#6b7280]",
                            children: isArabic ? 'كل ما تحتاج لمعرفته حول شراء أجهزة الكمبيوتر، الإيجار المرن، مواعيد التوصيل، تغطية الضمان، وخيارات الدفع الميسرة في قطر.' : 'Everything you need to know about buying computers, flexible rentals, delivery timelines, warranty coverage, and payment options.'
                        }, void 0, false, {
                            fileName: "[project]/src/components/faq/FaqView.jsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 relative max-w-xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    placeholder: isArabic ? 'ابحث في مواضيع المساعدة (مثل الإيجار، الضمان، التوصيل، الأقساط)...' : 'Search help topics (e.g., rentals, warranty, delivery, EMI)...',
                                    className: "w-full pl-11 pr-4 rtl:pl-4 rtl:pr-11 py-3.5 rounded-2xl border border-[#d1d5db] bg-white text-sm shadow-[0_4px_20px_rgba(0,0,0,0.05)] focus:border-[#dc1414] focus:ring-2 focus:ring-[#dc1414]/20 outline-none text-[#111827]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    className: "w-5 h-5 text-[#9ca3af] absolute left-4 rtl:left-auto rtl:right-4 top-1/2 -translate-y-1/2 pointer-events-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "11",
                                            cy: "11",
                                            r: "8"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/faq/FaqView.jsx",
                                            lineNumber: 265,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "21",
                                            y1: "21",
                                            x2: "16.65",
                                            y2: "16.65"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/faq/FaqView.jsx",
                                            lineNumber: 266,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/faq/FaqView.jsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/faq/FaqView.jsx",
                    lineNumber: 219,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar",
                    children: CATEGORIES_MAP.map((catObj)=>{
                        const isSelected = selectedCategory === catObj.en;
                        const label = isArabic ? catObj.en === 'All' ? `جميع الأسئلة (${FAQ_DATA.length})` : catObj.ar : catObj.en === 'All' ? `All Questions (${FAQ_DATA.length})` : catObj.en;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setSelectedCategory(catObj.en),
                            className: `px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${isSelected ? 'bg-[#dc1414] text-white shadow-[0_2px_10px_rgba(220,20,20,0.3)]' : 'bg-white border border-[#e5e7eb] text-[#4b5563] hover:bg-[#f3f4f6]'}`,
                            children: label
                        }, catObj.en, false, {
                            fileName: "[project]/src/components/faq/FaqView.jsx",
                            lineNumber: 284,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/faq/FaqView.jsx",
                    lineNumber: 272,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3.5 mb-12",
                    children: filteredFaqs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl border border-[#e5e7eb] p-10 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-[#6b7280]",
                                children: isArabic ? `لم يتم العثور على أي إجابات تطابق "${searchQuery}".` : `No answers found matching "${searchQuery}".`
                            }, void 0, false, {
                                fileName: "[project]/src/components/faq/FaqView.jsx",
                                lineNumber: 304,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setSelectedCategory('All');
                                    setSearchQuery('');
                                },
                                className: "mt-3 text-xs text-[#dc1414] font-bold hover:underline",
                                children: isArabic ? 'إعادة ضبط البحث وعرض الكل' : 'Clear search and view all'
                            }, void 0, false, {
                                fileName: "[project]/src/components/faq/FaqView.jsx",
                                lineNumber: 309,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/faq/FaqView.jsx",
                        lineNumber: 303,
                        columnNumber: 13
                    }, this) : filteredFaqs.map((faq, idx)=>{
                        const isOpen = openIndexes.includes(idx);
                        const qText = isArabic ? faq.questionAr || faq.question : faq.question;
                        const aText = isArabic ? faq.answerAr || faq.answer : faq.answer;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden transition-all shadow-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>toggleAccordion(idx),
                                    className: "w-full px-5 sm:px-6 py-4 sm:py-4.5 text-left rtl:text-right flex items-center justify-between gap-4 cursor-pointer hover:bg-[#fcfcfd]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm sm:text-base font-bold text-[#111827]",
                                            children: qText
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/faq/FaqView.jsx",
                                            lineNumber: 336,
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
                                                    lineNumber: 347,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/faq/FaqView.jsx",
                                                lineNumber: 346,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/faq/FaqView.jsx",
                                            lineNumber: 339,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                    lineNumber: 331,
                                    columnNumber: 19
                                }, this),
                                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#4b5563] leading-relaxed border-t border-[#f3f4f6] text-left rtl:text-right",
                                    children: aText
                                }, void 0, false, {
                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                    lineNumber: 353,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/src/components/faq/FaqView.jsx",
                            lineNumber: 327,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/faq/FaqView.jsx",
                    lineNumber: 301,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-br from-[#111827] to-[#1f2937] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-left rtl:text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-3 py-1 rounded-full text-xs font-bold bg-[#dc1414] text-white",
                                    children: isArabic ? 'دعم فني متاح 24/7' : '24/7 Support Available'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                    lineNumber: 366,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl sm:text-2xl font-black mt-2",
                                    children: isArabic ? 'هل ما زالت لديك استفسارات أو تحتاج لعرض أسعار مخصص؟' : 'Still have questions or need a custom quotation?'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                    lineNumber: 369,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs sm:text-sm text-[#cbd5e1] mt-1 max-w-lg",
                                    children: isArabic ? 'مهندسو الأجهزة وخبراء التأجير لدينا في الدوحة، قطر متواجدون لمساعدتك في المواصفات والتوريد للشركات واستفسارات التأجير.' : 'Our hardware engineers and rental specialists in Doha, Qatar are here to assist you with specifications, B2B procurement, and rental queries.'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                    lineNumber: 374,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/faq/FaqView.jsx",
                            lineNumber: 365,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap sm:flex-nowrap gap-3 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "tel:+97441453868",
                                    className: "px-5 py-3 bg-[#dc1414] hover:bg-[#b91c1c] active:scale-[0.99] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-[0_4px_14px_rgba(220,20,20,0.35)] flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: "w-4 h-4",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/faq/FaqView.jsx",
                                                lineNumber: 387,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/faq/FaqView.jsx",
                                            lineNumber: 386,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                isArabic ? 'اتصل بنا: ' : 'Call ',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("bdi", {
                                                    dir: "ltr",
                                                    children: "+974 4145 3868"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                                    lineNumber: 391,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/faq/FaqView.jsx",
                                            lineNumber: 389,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                    lineNumber: 382,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: "w-4 h-4",
                                            "aria-hidden": "true",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "20",
                                                    height: "16",
                                                    x: "2",
                                                    y: "4",
                                                    rx: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                                    lineNumber: 399,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                                    lineNumber: 400,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/faq/FaqView.jsx",
                                            lineNumber: 398,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: isArabic ? 'تواصل معنا' : 'Contact Us'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/faq/FaqView.jsx",
                                            lineNumber: 402,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/faq/FaqView.jsx",
                                    lineNumber: 394,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/faq/FaqView.jsx",
                            lineNumber: 381,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/faq/FaqView.jsx",
                    lineNumber: 364,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/faq/FaqView.jsx",
            lineNumber: 202,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/faq/FaqView.jsx",
        lineNumber: 201,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_a5d555d3._.js.map