(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Jagdamba/src/hooks/useScrollProgress.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollProgress",
    ()=>useScrollProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useScrollProgress(ref) {
    _s();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollProgress.useEffect": ()=>{
            const handleScroll = {
                "useScrollProgress.useEffect.handleScroll": ()=>{
                    if (!ref.current) return;
                    const element = ref.current;
                    const rect = element.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    // Calculate how much of the element has scrolled past
                    // 0 means element is just entering from the bottom
                    // 1 means element has fully scrolled out of the top
                    const totalScrollHeight = element.offsetHeight + windowHeight;
                    const scrolled = windowHeight - rect.top;
                    const currentProgress = Math.max(0, Math.min(1, scrolled / totalScrollHeight));
                    setProgress(currentProgress);
                }
            }["useScrollProgress.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            window.addEventListener('resize', handleScroll);
            handleScroll();
            return ({
                "useScrollProgress.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                    window.removeEventListener('resize', handleScroll);
                }
            })["useScrollProgress.useEffect"];
        }
    }["useScrollProgress.useEffect"], [
        ref
    ]);
    return progress;
}
_s(useScrollProgress, "ZVQpwjU6Dz5R8VBOzPsnxGRmMVo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Jagdamba/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$src$2f$hooks$2f$useScrollProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/src/hooks/useScrollProgress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Hero() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$src$2f$hooks$2f$useScrollProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollProgress"])(containerRef);
    // Mouse cursor glow position
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: -1000,
        y: -1000
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const handleMouseMove = {
                "Hero.useEffect.handleMouseMove": (e)=>{
                    setMousePos({
                        x: e.clientX,
                        y: e.clientY
                    });
                }
            }["Hero.useEffect.handleMouseMove"];
            window.addEventListener('mousemove', handleMouseMove);
            return ({
                "Hero.useEffect": ()=>window.removeEventListener('mousemove', handleMouseMove)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    // Generate dust particle configurations
    const [dustParticles, setDustParticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const particles = Array.from({
                length: 30
            }).map({
                "Hero.useEffect.particles": ()=>({
                        left: `${Math.random() * 100}%`,
                        dx: `${(Math.random() - 0.5) * 80}px`,
                        dur: `${15 + Math.random() * 15}s`,
                        delay: `${Math.random() * 15}s`
                    })
            }["Hero.useEffect.particles"]);
            setDustParticles(particles);
        }
    }["Hero.useEffect"], []);
    // Interpolations based on scroll progress (0 to 1)
    const blackOverlayOpacity = Math.max(0, 1 - scrollProgress * 3.5);
    // Title (JAGDAMBA) opacity and scale
    let titleOpacity = 0;
    let titleScale = 1.0;
    if (scrollProgress < 0.35) {
        titleOpacity = Math.min(1, scrollProgress * 3.5);
    } else if (scrollProgress < 0.6) {
        titleOpacity = Math.max(0, 1 - (scrollProgress - 0.35) * 4);
        titleScale = 1.0 + (scrollProgress - 0.35) * 0.4;
    }
    // Backdrop 2 (Living space overview) opacity and scale
    let backdropOpacity = 0;
    let backdropScale = 1.35;
    if (scrollProgress >= 0.3 && scrollProgress < 0.6) {
        backdropOpacity = (scrollProgress - 0.3) * 3.3;
        backdropScale = 1.35 - (scrollProgress - 0.3) * 0.5;
    } else if (scrollProgress >= 0.6) {
        backdropOpacity = Math.max(0, 1 - (scrollProgress - 0.8) * 5);
        backdropScale = 1.0;
    }
    // Content (From Timber to Timeless...) opacity
    let contentOpacity = 0;
    let contentTranslate = 40; // translateY (px)
    if (scrollProgress >= 0.5 && scrollProgress < 0.95) {
        contentOpacity = Math.min(1, (scrollProgress - 0.5) * 5);
        contentTranslate = Math.max(0, 40 - (scrollProgress - 0.5) * 150);
    } else if (scrollProgress >= 0.95) {
        contentOpacity = Math.max(0, 1 - (scrollProgress - 0.95) * 20);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        id: "top",
        className: "relative h-[300vh]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cursor-glow hidden md:block",
                style: {
                    transform: `translate3d(${mousePos.x - 300}px, ${mousePos.y - 300}px, 0)`,
                    left: 0,
                    top: 0
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 h-screen w-full overflow-hidden bg-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black z-30 pointer-events-none",
                        style: {
                            opacity: blackOverlayOpacity
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-10 pointer-events-none transition-opacity duration-1000",
                        style: {
                            opacity: scrollProgress > 0.1 ? 1 : 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sunbeam"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sunbeam",
                                style: {
                                    left: '46%',
                                    width: '220px',
                                    filter: 'blur(50px)',
                                    opacity: 0.6
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 overflow-hidden pointer-events-none",
                                children: dustParticles.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "dust",
                                        style: {
                                            left: p.left,
                                            '--dx': p.dx,
                                            '--dur': p.dur,
                                            '--delay': p.delay
                                        }
                                    }, idx, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-20 wood-grain flex items-center justify-center pointer-events-none",
                        style: {
                            opacity: titleOpacity
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/luxury-hero-bg.jpg",
                                alt: "Jagdamba Wood Grain",
                                fill: true,
                                priority: true,
                                className: "object-cover opacity-70 filter brightness-[0.35] contrast-[1.15] saturate-[0.7] pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 text-center px-6",
                                style: {
                                    transform: `scale(${titleScale})`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] md:text-xs tracking-[0.5em] text-amber-200/60 mb-8 uppercase font-medium",
                                        children: "Est. Craftsmanship · Rishikesh"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-serif-display text-6xl md:text-9xl font-light leading-[0.9] engraved",
                                        children: "JAGDAMBA"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 text-xs md:text-sm tracking-[0.35em] text-amber-200/80 uppercase font-light",
                                        children: "Timber Works & Plywood · Rishikesh"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-[15] pointer-events-none",
                        style: {
                            opacity: backdropOpacity,
                            transform: `scale(${backdropScale})`,
                            transition: 'transform 0.1s ease-out'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/showroom-facade-jagdamba.jpg",
                                alt: "Jagdamba Showroom Facade",
                                fill: true,
                                className: "object-cover filter brightness-[0.65] contrast-[1.1] pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/90"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-40 flex flex-col items-center justify-end pb-24 px-6 text-center",
                        style: {
                            opacity: contentOpacity,
                            transform: `translate3d(0, ${contentTranslate}px, 0)`,
                            pointerEvents: contentOpacity > 0.5 ? 'auto' : 'none'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] tracking-[0.5em] text-amber-200/70 mb-6 uppercase font-medium",
                                children: "A House. A Feeling. A Legacy."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif-display text-5xl md:text-8xl font-light leading-[0.95] max-w-5xl text-white",
                                children: [
                                    "From Timber",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                                        lineNumber: 167,
                                        columnNumber: 24
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "italic text-amber-200/90 font-light",
                                        children: "to Timeless"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this),
                                    " Interiors"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-10 left-1/2 -translate-x-1/2 z-50 text-amber-200/60 text-xs tracking-[0.3em] uppercase flex flex-col items-center gap-3 pointer-events-none transition-opacity duration-500",
                        style: {
                            opacity: scrollProgress < 0.8 ? 1 : 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Scroll to enter"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "w-4 h-4 animate-bounce text-amber-200/60"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Jagdamba/src/components/Hero.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(Hero, "DMBlmcc1/7FXX0QPV/p0J0t3zHk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$src$2f$hooks$2f$useScrollProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollProgress"]
    ];
});
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Jagdamba/src/components/Entrance.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Entrance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$src$2f$hooks$2f$useScrollProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/src/hooks/useScrollProgress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Entrance() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$src$2f$hooks$2f$useScrollProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollProgress"])(containerRef);
    // Parent container is 200vh.
    // Sticky active window is from progress ~0.33 (pin top) to ~0.66 (unpin bottom)
    // We open the door from 0.33 to 0.55, and keep it fully open from 0.55 to 0.66+
    let doorRotation = 0;
    let roomScale = 1.15;
    let roomOpacity = 0.4;
    if (scrollProgress < 0.33) {
        doorRotation = 0;
        roomScale = 1.15;
        roomOpacity = 0.4;
    } else if (scrollProgress >= 0.33 && scrollProgress <= 0.56) {
        const factor = (scrollProgress - 0.33) / 0.23; // 0 to 1
        doorRotation = -95 * factor;
        roomScale = 1.15 - factor * 0.15; // smooth zoom
        roomOpacity = 0.4 + factor * 0.6; // smooth fade-in
    } else {
        doorRotation = -95;
        roomScale = 1.0;
        roomOpacity = 1.0;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        id: "entrance",
        className: "relative h-[200vh] bg-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8 z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-4 font-medium",
                            children: "01 · Entrance"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-serif-display text-5xl md:text-7xl font-light text-white",
                            children: "Welcome home."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full aspect-[3/4] max-w-lg rounded-lg overflow-hidden shadow-[0_60px_120px_-30px_rgba(255,180,90,0.15)] bg-neutral-950 z-10",
                    style: {
                        perspective: '1800px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 transition-all duration-100 ease-out",
                            style: {
                                transform: `scale(${roomScale})`,
                                opacity: roomOpacity
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/livingroom-luxury-lounge.jpg",
                                alt: "Living Room Lounge",
                                fill: true,
                                className: "object-cover pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-black/50"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "door-panel absolute inset-0 origin-left",
                            style: {
                                transform: `rotateY(${doorRotation}deg)`,
                                backfaceVisibility: 'hidden',
                                transition: 'transform 0.1s ease-out'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/jagdamba-doors-timber.jpg",
                                        alt: "Jagdamba Wood Entry",
                                        fill: true,
                                        className: "object-cover pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-black/70"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute right-6 top-1/2 -translate-y-1/2 w-1.5 h-16 bg-amber-200/80 rounded-full shadow-[0_0_15px_rgba(253,230,138,0.5)] border border-amber-100/30"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-8 border border-amber-100/10 rounded pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-8 left-8 text-[9px] tracking-[0.3em] text-amber-200/60 uppercase font-medium",
                                    children: "Handcrafted · Jagdamba Doors"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-4xl mt-12 border-t border-white/5 pt-8 z-10 hidden md:grid grid-cols-2 gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-left space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-serif-display text-3xl text-amber-200 font-light",
                                    children: "40+ Years"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[9px] tracking-[0.25em] uppercase text-white/40 font-semibold",
                                    children: "Of Woodworking & Material Expertise"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-white/50 font-light leading-relaxed",
                                    children: "Four decades of deep industry mastery, shaping select timbers with technical precision and design excellence."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-left space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-serif-display text-3xl text-amber-200 font-light",
                                    children: "20+ Years"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[9px] tracking-[0.25em] uppercase text-white/40 font-semibold",
                                    children: "Of Studio Workshop Heritage"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-white/50 font-light leading-relaxed",
                                    children: "Two decades serving as a trusted local studio, delivering premium boards, hinges, and custom doors to generations of homes."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-white/40 text-xs mt-8 tracking-[0.15em] font-light z-10 md:hidden",
                    children: "Scroll to open the door and step inside."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Jagdamba/src/components/Entrance.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(Entrance, "Ovp+LBa5tmiVf13HTVP2oKoDGsA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$src$2f$hooks$2f$useScrollProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollProgress"]
    ];
});
_c = Entrance;
var _c;
__turbopack_context__.k.register(_c, "Entrance");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Jagdamba/src/components/LivingRoom.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LivingRoom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function LivingRoom() {
    _s();
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const hotspots = [
        {
            id: 'tv-unit',
            name: 'TV Unit',
            desc: 'Sleek floating console with concealed cable runs.',
            material: 'Century HDMR + Walnut Veneer',
            top: '55%',
            left: '30%'
        },
        {
            id: 'wall-panel',
            name: 'Wall Panel',
            desc: 'Seamless textured wall cladding with accent lighting.',
            material: 'Charcoal Fluted Louvers',
            top: '38%',
            left: '68%'
        },
        {
            id: 'coffee-table',
            name: 'Coffee Table',
            desc: 'Low-profile minimalist table with grain matching.',
            material: 'Solid Teak + Saptam Laminate',
            top: '78%',
            left: '50%'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "living",
        className: "relative min-h-screen bg-black py-32 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 w-full flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center max-w-3xl mx-auto mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-6 font-medium",
                            children: "02 · Living Room"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/LivingRoom.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-serif-display text-5xl md:text-7xl font-light leading-[1.05] mb-6 text-white",
                            children: "Where the house breathes."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/LivingRoom.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/60 text-base md:text-lg font-light leading-relaxed",
                            children: "Every surface tells a story. Every object earns its place."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/LivingRoom.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/LivingRoom.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full rounded-2xl overflow-hidden aspect-[16/10] border border-white/5 shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/livingroom-luxury-lounge.jpg",
                            alt: "Living Room",
                            className: "absolute inset-0 w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/LivingRoom.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/LivingRoom.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        hotspots.map((spot)=>{
                            const isActive = activeId === spot.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -translate-x-1/2 -translate-y-1/2 z-20 group",
                                style: {
                                    top: spot.top,
                                    left: spot.left
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onMouseEnter: ()=>setActiveId(spot.id),
                                        onMouseLeave: ()=>setActiveId(null),
                                        onClick: ()=>setActiveId(activeId === spot.id ? null : spot.id),
                                        className: "relative flex items-center justify-center w-12 h-12 cursor-pointer focus:outline-none",
                                        "aria-label": spot.name,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute inset-0 rounded-full bg-amber-200/25 animate-ping pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jagdamba/src/components/LivingRoom.tsx",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative w-3.5 h-3.5 rounded-full bg-amber-200 shadow-[0_0_20px_rgba(255,200,120,0.9)] transition-transform duration-300 group-hover:scale-125 border border-white/30"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jagdamba/src/components/LivingRoom.tsx",
                                                lineNumber: 88,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/LivingRoom.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute left-1/2 -translate-x-1/2 top-full mt-3 whitespace-normal w-60 p-4 rounded-xl pin-badge text-left transition-all duration-300 shadow-2xl ${isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-amber-200 text-xs tracking-wider font-semibold uppercase mb-1",
                                                children: spot.name
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jagdamba/src/components/LivingRoom.tsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-white text-xs font-light mb-2 leading-relaxed",
                                                children: spot.desc
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jagdamba/src/components/LivingRoom.tsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-t border-white/5 pt-2 flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] tracking-[0.1em] uppercase text-white/40",
                                                        children: "Material"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jagdamba/src/components/LivingRoom.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-amber-100 font-medium truncate max-w-[140px]",
                                                        children: spot.material
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jagdamba/src/components/LivingRoom.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Jagdamba/src/components/LivingRoom.tsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/LivingRoom.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, spot.id, true, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/LivingRoom.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/LivingRoom.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 text-center text-white/40 text-xs tracking-wide",
                    children: "Hover over or tap the glowing points to inspect materials."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/LivingRoom.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Jagdamba/src/components/LivingRoom.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Jagdamba/src/components/LivingRoom.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(LivingRoom, "rNhBSDzMaHbVUX4Eik4A5qiLMlg=");
_c = LivingRoom;
var _c;
__turbopack_context__.k.register(_c, "LivingRoom");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Jagdamba/src/components/Kitchen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Kitchen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Kitchen() {
    _s();
    const brands = [
        {
            id: 'century',
            name: 'Century HDMR',
            slogan: 'Legendary strength and high moisture resistance.',
            color: '#8a5a2b',
            image: '/images/modular-kitchen-island.jpg',
            density: '850 kg/m³',
            thickness: '6mm, 8mm, 12mm, 18mm',
            warranty: '10 Years'
        },
        {
            id: 'tesa',
            name: 'Action TESA',
            slogan: 'Precision engineered core for heavy loads and modular fit.',
            color: '#c9a06b',
            image: '/images/kitchen-cozy-layout.jpg',
            density: '850 kg/m³',
            thickness: '6mm, 8mm, 12mm, 18mm',
            warranty: '10 Years'
        },
        {
            id: 'saptam',
            name: 'Saptam Boards',
            slogan: 'Contemporary craft with high density fiberboard core.',
            color: '#6b4520',
            image: '/images/kitchen-dark-laminate.jpg',
            density: '820 kg/m³',
            thickness: '6mm, 8mm, 12mm, 18mm',
            warranty: '10 Years'
        },
        {
            id: 'novopan',
            name: 'Novopan',
            slogan: 'European finish panels with high load-bearing capacity.',
            color: '#a37b45',
            image: '/images/kitchen-showcase-glass.jpg',
            density: '780 kg/m³',
            thickness: '18mm',
            warranty: '10 Years'
        }
    ];
    const [activeBrand, setActiveBrand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(brands[0]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "kitchen",
        className: "relative min-h-screen bg-neutral-950 py-32 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 w-full flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center max-w-3xl mx-auto mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-6 font-medium",
                            children: "03 · Kitchen"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-serif-display text-5xl md:text-7xl font-light leading-[1.05] mb-6 text-white",
                            children: "The heart, engineered."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/60 text-base md:text-lg font-light leading-relaxed",
                            children: "Choose the HDMR core. Watch the room become itself."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-5 gap-12 items-center w-full mt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-3 relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/5 shadow-2xl bg-neutral-900 group",
                            children: [
                                brands.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: b.image,
                                        alt: b.name,
                                        className: `absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${activeBrand.id === b.id ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`
                                    }, b.id, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-6 left-6 pin-badge rounded-full px-5 py-2 text-xs tracking-widest uppercase text-white flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: activeBrand.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full",
                                            style: {
                                                backgroundColor: activeBrand.color
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2 flex flex-col justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-4 font-semibold",
                                    children: "HDMR Boards"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 mb-8",
                                    children: brands.map((b)=>{
                                        const isActive = activeBrand.id === b.id;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveBrand(b),
                                            className: `w-full text-left flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer ${isActive ? 'border-amber-200/50 bg-amber-200/5 shadow-[0_4px_20px_rgba(255,200,120,0.05)]' : 'border-white/10 hover:border-white/20 bg-transparent'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-serif-display text-2xl text-white font-light",
                                                            children: b.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[11px] text-white/50 tracking-wide mt-0.5",
                                                            children: [
                                                                b.slogan.slice(0, 30),
                                                                "..."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-8 rounded-full border border-white/20 shadow-inner flex items-center justify-center transition-transform",
                                                    style: {
                                                        backgroundColor: b.color
                                                    },
                                                    children: isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2 h-2 rounded-full bg-white animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 36
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, b.id, true, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                            lineNumber: 113,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-white/10 pt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-4 font-semibold",
                                            children: "Technical details"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-4 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 rounded-lg border border-white/5 bg-white/2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[9px] tracking-[0.1em] uppercase text-white/40 mb-1",
                                                            children: "Density"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-semibold text-amber-100",
                                                            children: activeBrand.density
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 rounded-lg border border-white/5 bg-white/2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[9px] tracking-[0.1em] uppercase text-white/40 mb-1",
                                                            children: "Thickness"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-semibold text-amber-100",
                                                            children: activeBrand.thickness
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 rounded-lg border border-white/5 bg-white/2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[9px] tracking-[0.1em] uppercase text-white/40 mb-1",
                                                            children: "Warranty"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-semibold text-amber-100",
                                                            children: activeBrand.warranty
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3",
                                            children: [
                                                'ISI-certified premium hardwood core',
                                                'Zero-warp and termite resistant guarantee',
                                                'High moisture resistant formulation (HMR)'
                                            ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-3 text-xs md:text-sm text-white/80",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "w-4 h-4 text-amber-200 mt-0.5 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: item
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Jagdamba/src/components/Kitchen.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(Kitchen, "de2DKaIzX/x5Dm5ikDoi6cD9S1k=");
_c = Kitchen;
var _c;
__turbopack_context__.k.register(_c, "Kitchen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Jagdamba/src/components/Dining.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dining
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$src$2f$hooks$2f$useScrollProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/src/hooks/useScrollProgress.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Dining() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$src$2f$hooks$2f$useScrollProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollProgress"])(containerRef);
    // Parallax translation calculation:
    // Move the background image slightly slower/faster than scroll
    const backgroundTranslateY = -15 + scrollProgress * 30; // ranges from -15% to 15%
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "relative min-h-[90vh] overflow-hidden bg-black flex items-center justify-center py-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 w-full h-[130%]",
                style: {
                    transform: `translateY(${backgroundTranslateY}%)`,
                    transition: 'transform 0.1s ease-out'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 w-full h-full",
                        style: {
                            backgroundImage: 'url(/images/dining-parallax-view.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'brightness(0.55)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Jagdamba/src/components/Dining.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Jagdamba/src/components/Dining.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Jagdamba/src/components/Dining.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-4xl mx-auto px-6 text-center z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-6 font-medium",
                        children: "04 · Dining"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Jagdamba/src/components/Dining.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-serif-display text-5xl md:text-7xl font-light mb-8 text-white leading-tight",
                        children: "Gather in warm light."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Jagdamba/src/components/Dining.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/60 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed",
                        children: "Wood ceilings hush the room. Pendant light pools on our laminates. Every meal becomes an occasion."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Jagdamba/src/components/Dining.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Jagdamba/src/components/Dining.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Jagdamba/src/components/Dining.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(Dining, "Ovp+LBa5tmiVf13HTVP2oKoDGsA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$src$2f$hooks$2f$useScrollProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollProgress"]
    ];
});
_c = Dining;
var _c;
__turbopack_context__.k.register(_c, "Dining");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Jagdamba/src/components/Bedroom.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Bedroom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$src$2f$hooks$2f$useScrollProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/src/hooks/useScrollProgress.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Bedroom() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$src$2f$hooks$2f$useScrollProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollProgress"])(containerRef);
    // Parent container is h-[280vh].
    // Sticky viewport tracks scroll progress from 0.0 to 1.0.
    //
    // 1. Bedroom background image transitions
    // Starts at scale 1.4, zooms out to 1.0 as we scroll
    const bgScale = Math.max(1.0, 1.4 - scrollProgress * 0.8);
    // Fades in from 0.2 to 1.0 as the central card fades out (0.45 -> 0.7)
    let bgOpacity = 0.25;
    if (scrollProgress < 0.45) {
        bgOpacity = 0.25;
    } else if (scrollProgress >= 0.45 && scrollProgress <= 0.7) {
        const factor = (scrollProgress - 0.45) / 0.25; // 0 to 1
        bgOpacity = 0.25 + factor * 0.75;
    } else {
        bgOpacity = 1.0;
    }
    // 2. Door card container transitions
    // Starts fully visible (opacity 1, scale 1.0), and fades out later
    let cardOpacity = 1.0;
    let cardScale = 1.0;
    if (scrollProgress < 0.45) {
        cardOpacity = 1.0;
        cardScale = 1.0;
    } else if (scrollProgress >= 0.45 && scrollProgress <= 0.7) {
        const factor = (scrollProgress - 0.45) / 0.25; // 0 to 1
        cardOpacity = 1.0 - factor;
        cardScale = 1.0 - factor * 0.1; // slight scale down as it fades
    } else {
        cardOpacity = 0;
        cardScale = 0.9;
    }
    // 3. Door swing inside the card (Phase 3)
    // Starts closed, opens between 0.15 and 0.45
    let doorRotation = 0;
    if (scrollProgress < 0.15) {
        doorRotation = 0;
    } else if (scrollProgress >= 0.15 && scrollProgress <= 0.45) {
        const factor = (scrollProgress - 0.15) / 0.3; // 0 to 1
        doorRotation = -95 * factor;
    } else {
        doorRotation = -95;
    }
    // 4. Large narrative text details (fades in as card fades out)
    let textOpacity = 0;
    let textTranslateY = 40;
    if (scrollProgress >= 0.4 && scrollProgress < 0.65) {
        const factor = (scrollProgress - 0.4) / 0.25; // 0 to 1
        textOpacity = Math.min(1, factor);
        textTranslateY = Math.max(0, 40 - factor * 40);
    } else if (scrollProgress >= 0.65 && scrollProgress < 0.9) {
        textOpacity = 1.0;
        textTranslateY = 0;
    } else if (scrollProgress >= 0.9) {
        const factor = (scrollProgress - 0.9) / 0.1; // 0 to 1
        textOpacity = Math.max(0, 1 - factor);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        id: "bedroom",
        className: "relative h-[280vh] bg-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 w-full h-full pointer-events-none",
                    style: {
                        transform: `scale(${bgScale})`,
                        opacity: bgOpacity,
                        transition: 'transform 0.1s ease-out'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/master-bedroom-design.jpg",
                            alt: "Master Bedroom",
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Bedroom.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Bedroom.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/Bedroom.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute z-20 flex items-center justify-center",
                    style: {
                        opacity: cardOpacity,
                        transform: `scale(${cardScale})`,
                        transition: 'transform 0.1s ease-out',
                        pointerEvents: cardOpacity > 0.5 ? 'auto' : 'none'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-[min(80vw,520px)] aspect-[3/5] rounded-lg overflow-hidden shadow-[0_60px_120px_-20px_rgba(255,180,90,0.4)] bg-neutral-900 border border-white/10",
                        style: {
                            perspective: '1500px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/Bedroom.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "door-panel absolute inset-0 origin-left",
                                style: {
                                    transform: `rotateY(${doorRotation}deg)`,
                                    backfaceVisibility: 'hidden',
                                    transition: 'transform 0.1s ease-out'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/doors-bedroom-inside.jpg",
                                        alt: "Jagdamba Door Veneer",
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/Bedroom.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/60 pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/Bedroom.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-5 top-1/2 -translate-y-1/2 w-1.5 h-16 bg-amber-200/80 rounded-full shadow-[0_0_15px_rgba(253,230,138,0.5)] border border-amber-100/30"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/Bedroom.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-5 border border-amber-100/10 rounded pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/Bedroom.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/Bedroom.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-10 pointer-events-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] tracking-[0.5em] text-amber-200/70 uppercase mb-2",
                                        children: "Flagship"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/Bedroom.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-serif-display text-2xl text-white font-light",
                                        children: "Jagdamba Doors"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/Bedroom.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/Bedroom.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-4 border border-amber-100/10 rounded pointer-events-none z-10"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/Bedroom.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Jagdamba/src/components/Bedroom.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/Bedroom.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-6 pointer-events-none",
                    style: {
                        opacity: textOpacity,
                        transform: `translate3d(0, ${textTranslateY}px, 0)`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] tracking-[0.5em] text-amber-200/80 uppercase mb-6 font-semibold",
                            children: "Crafted by"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Bedroom.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-serif-display text-6xl md:text-9xl font-light leading-[0.95] text-white",
                            children: [
                                "Jagdamba",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Bedroom.tsx",
                                    lineNumber: 172,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "italic text-amber-200/90 font-light",
                                    children: "Doors"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Bedroom.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Bedroom.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "max-w-xl text-white/70 mt-8 leading-relaxed font-light text-xs md:text-sm",
                            children: "Our flagship. Solid engineered cores. Hand-finished veneers. Silent-close mechanisms. A door that greets you every day for decades."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Bedroom.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/Bedroom.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Jagdamba/src/components/Bedroom.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Jagdamba/src/components/Bedroom.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(Bedroom, "Ovp+LBa5tmiVf13HTVP2oKoDGsA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$src$2f$hooks$2f$useScrollProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollProgress"]
    ];
});
_c = Bedroom;
var _c;
__turbopack_context__.k.register(_c, "Bedroom");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JagdambaDoors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
// Door catalogue data
const DOORS = [
    // ── MEMBRANE ──────────────────────────────────────
    {
        id: 1,
        name: 'Royal Walnut',
        category: 'membrane',
        image: '/images/membrane-door-walnut.webp',
        finish: 'Membrane Door',
        material: 'High-Density MDF Core with PVC Membrane',
        bestUse: 'Bedroom, Study, Pooja Room',
        features: [
            'Vacuum-pressed seamless finish',
            'Solid 30 mm wooden core',
            'Durable and low maintenance',
            'Scratch and stain resistance',
            'Wide design options'
        ],
        sizes: [
            '7×3 ft',
            '7×3.5 ft',
            '8×3 ft',
            'Custom'
        ],
        colors: [
            'Walnut Brown',
            'Dark Espresso',
            'Natural Oak'
        ],
        description: 'Premium PVC Membrane Doors feature a seamless PVC membrane vacuum-pressed over a solid 30 mm wooden core, ensuring a flawless finish with exceptional durability. Designed for modern interiors, they resist everyday wear, are easy to maintain, and are available in a wide range of wood textures, solid colours, and contemporary designs.',
        priceTag: 'Premium'
    },
    {
        id: 2,
        name: 'Golden Diamond',
        category: 'membrane',
        image: '/images/membrane-door-diamond.png',
        finish: 'Membrane Door',
        material: 'HDF Core with Glossy PVC Membrane',
        bestUse: 'Kitchen, Bathroom, Utility',
        features: [
            'Vacuum-pressed seamless finish',
            'Solid 30 mm wooden core',
            'Durable and low maintenance',
            'Scratch and stain resistance',
            'Wide design options'
        ],
        sizes: [
            '7×3 ft',
            '7×3.5 ft',
            'Custom'
        ],
        colors: [
            'Pure White',
            'Off-White',
            'Pearl Grey'
        ],
        description: 'Premium PVC Membrane Doors feature a seamless PVC membrane vacuum-pressed over a solid 30 mm wooden core, ensuring a flawless finish with exceptional durability. Designed for modern interiors, they resist everyday wear, are easy to maintain, and are available in a wide range of wood textures, solid colours, and contemporary designs.',
        priceTag: 'Standard'
    },
    // ── MICA ──────────────────────────────────────────
    {
        id: 3,
        name: 'Heritage Mica',
        category: 'mica',
        image: '/images/mica-door-heritage.jpg',
        finish: 'Mica Door',
        material: 'Solid Flush Core + High-Pressure Mica Laminate',
        bestUse: 'Main Entry, Drawing Room, Office',
        features: [
            'Premium Laminates',
            'Elegant Finish',
            'Superior Durability',
            'Modern Designs',
            'Textured Surfaces',
            'Designer Laminates'
        ],
        sizes: [
            '7×3 ft',
            '7×3.5 ft',
            '8×3 ft',
            '8×3.5 ft',
            'Custom'
        ],
        colors: [
            'Teak Wood',
            'Rosewood',
            'Wenge',
            'Light Maple'
        ],
        description: 'Mica Doors are crafted by bonding premium decorative laminates (mica) onto a solid 30 mm engineered wooden door, offering a durable and elegant finish. Resistant to everyday scratches, stains, and wear, they are easy to maintain and available in a wide range of wood grains, solid colours, matte, glossy, and textured finishes.',
        priceTag: 'Standard'
    },
    {
        id: 4,
        name: 'Obsidian Mica',
        category: 'mica',
        image: '/images/mica-door-classic.png',
        finish: 'Mica Door',
        material: 'Engineered Wood Core + Matte Mica',
        bestUse: 'Bedroom, Study, Commercial Space',
        features: [
            'Premium Laminates',
            'Elegant Finish',
            'Superior Durability',
            'Modern Designs',
            'Textured Surfaces',
            'Designer Laminates'
        ],
        sizes: [
            '7×3 ft',
            '7×3.5 ft',
            '8×3 ft'
        ],
        colors: [
            'Midnight Black',
            'Charcoal Grey',
            'Stone Beige'
        ],
        description: 'Mica Doors are crafted by bonding premium decorative laminates (mica) onto a solid 30 mm engineered wooden door, offering a durable and elegant finish. Resistant to everyday scratches, stains, and wear, they are easy to maintain and available in a wide range of wood grains, solid colours, matte, glossy, and textured finishes.',
        priceTag: 'Standard'
    },
    // ── WPC ───────────────────────────────────────────
    {
        id: 5,
        name: 'WPC Marine',
        category: 'wpc',
        image: '/images/wpc-door-marine.png',
        finish: 'WPC Door',
        material: 'Wood-Plastic Composite (WPC)',
        bestUse: 'Bathroom, Balcony, Outdoor-Facing',
        features: [
            'Water Resistant',
            'Termite Proof',
            'Moisture Resistant',
            'Long Lasting'
        ],
        sizes: [
            '7×3 ft',
            '7×3.5 ft',
            '8×3 ft',
            'Custom'
        ],
        colors: [
            'Natural Teak',
            'Walnut',
            'Ivory White',
            'Grey'
        ],
        description: 'Premium WPC Doors combine the strength of Wood Plastic Composite with contemporary design, delivering doors that are moisture-resistant, termite-proof, and highly durable. Ideal for high-humidity spaces, they offer lasting performance with minimal maintenance.',
        priceTag: 'Premium'
    },
    {
        id: 6,
        name: 'WPC Luxe',
        category: 'wpc',
        image: '/images/wpc-door-luxe.png',
        finish: 'WPC Door',
        material: 'Premium WPC with Textured Surface',
        bestUse: 'Master Bathroom, Kitchen, Service Areas',
        features: [
            'Water Resistant',
            'Termite Proof',
            'Moisture Resistant',
            'Long Lasting'
        ],
        sizes: [
            '7×3 ft',
            '7×3.5 ft',
            '8×3 ft',
            'Custom'
        ],
        colors: [
            'Dark Walnut',
            'Sand Beige',
            'Charcoal'
        ],
        description: 'Premium WPC Doors combine the strength of Wood Plastic Composite with contemporary design, delivering doors that are moisture-resistant, termite-proof, and highly durable. Ideal for high-humidity spaces, they offer lasting performance with minimal maintenance.',
        priceTag: 'Premium'
    }
];
const FILTERS = [
    {
        id: 'all',
        label: 'All'
    },
    {
        id: 'membrane',
        label: 'Membrane'
    },
    {
        id: 'mica',
        label: 'Mica'
    },
    {
        id: 'wpc',
        label: 'WPC'
    }
];
const PRICE_COLORS = {
    Standard: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    Premium: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    Luxury: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
    Bespoke: 'text-rose-400 bg-rose-400/10 border-rose-400/20'
};
function JagdambaDoors() {
    _s();
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [selectedDoor, setSelectedDoor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredCard, setHoveredCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [clickedCard, setClickedCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0.5,
        y: 0.5
    });
    const handleCardMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "JagdambaDoors.useCallback[handleCardMouseMove]": (e)=>{
            const rect = e.currentTarget.getBoundingClientRect();
            setMousePos({
                x: (e.clientX - rect.left) / rect.width,
                y: (e.clientY - rect.top) / rect.height
            });
        }
    }["JagdambaDoors.useCallback[handleCardMouseMove]"], []);
    const handleCardClick = (door)=>{
        setClickedCard(door.id);
        setTimeout(()=>setClickedCard(null), 400);
        setTimeout(()=>setSelectedDoor(door), 100);
    };
    const filteredDoors = DOORS.filter((d)=>{
        if (activeFilter === 'all') return true;
        return d.category === activeFilter;
    });
    const scroll = (dir)=>{
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: dir === 'right' ? 380 : -380,
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "jagdamba-doors",
                className: "relative bg-neutral-950 pt-12 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-amber-500/5 blur-3xl rounded-full pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-amber-400/60 tracking-[0.4em] text-xs uppercase font-light mb-4",
                                        children: "The Collection"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-4xl md:text-5xl font-thin text-white mb-4",
                                        children: [
                                            "Door ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-amber-300",
                                                children: "Showcase"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                lineNumber: 161,
                                                columnNumber: 20
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/40 max-w-xl mx-auto",
                                        children: "Every door is engineered to perfection. Crafted from premium materials, finished to last."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap justify-center gap-2 mb-12",
                                children: FILTERS.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveFilter(f.id),
                                        className: `px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${activeFilter === f.id ? 'bg-amber-400 text-black border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.3)]' : 'bg-white/5 text-white/60 border-white/10 hover:border-amber-400/40 hover:text-white'}`,
                                        children: f.label
                                    }, f.id, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scroll('left'),
                                        className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-black/80 border border-white/10 text-white/60 hover:text-amber-400 hover:border-amber-400/40 flex items-center justify-center transition-all duration-300 shadow-xl backdrop-blur-sm",
                                        "aria-label": "Scroll left",
                                        children: "←"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: sliderRef,
                                        className: "flex gap-6 overflow-x-auto pb-6 px-2 scroll-smooth",
                                        style: {
                                            scrollbarWidth: 'none',
                                            msOverflowStyle: 'none'
                                        },
                                        children: filteredDoors.map((door)=>{
                                            const isHovered = hoveredCard === door.id;
                                            const isClicked = clickedCard === door.id;
                                            const tiltX = isHovered ? (mousePos.y - 0.5) * -10 : 0;
                                            const tiltY = isHovered ? (mousePos.x - 0.5) * 10 : 0;
                                            const lightX = isHovered ? mousePos.x * 100 : 50;
                                            const lightY = isHovered ? mousePos.y * 100 : 30;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-none w-[320px] group",
                                                style: {
                                                    perspective: '800px'
                                                },
                                                onMouseEnter: ()=>setHoveredCard(door.id),
                                                onMouseLeave: ()=>setHoveredCard(null),
                                                onMouseMove: handleCardMouseMove,
                                                onClick: ()=>handleCardClick(door),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-neutral-900 transition-all duration-300",
                                                    style: {
                                                        transform: `rotateX(${tiltX}deg) rotateY(${isClicked ? tiltY + 6 : tiltY}deg) scale(${isClicked ? 1.02 : isHovered ? 1.03 : 1})`,
                                                        transition: isClicked ? 'transform 0.15s ease-out' : 'transform 0.3s ease-out',
                                                        boxShadow: isHovered ? '0 30px 60px -10px rgba(0,0,0,0.8), 0 0 40px rgba(251,191,36,0.08)' : '0 10px 30px -10px rgba(0,0,0,0.6)'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative h-72 overflow-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: door.image,
                                                                    alt: door.name,
                                                                    className: "w-full h-full object-cover transition-transform duration-700",
                                                                    style: {
                                                                        transform: isHovered ? 'scale(1.08)' : 'scale(1)'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                    lineNumber: 232,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-0 pointer-events-none transition-opacity duration-300",
                                                                    style: {
                                                                        opacity: isHovered ? 1 : 0,
                                                                        background: `radial-gradient(circle at ${lightX}% ${lightY}%, rgba(255,235,180,0.18) 0%, transparent 55%)`
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                    lineNumber: 240,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                    lineNumber: 249,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border ${PRICE_COLORS[door.priceTag]}`,
                                                                    children: door.priceTag
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                    lineNumber: 252,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-white/70 backdrop-blur-sm border border-white/10",
                                                                    children: door.finish
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                    lineNumber: 257,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-xl font-semibold text-white mb-1 group-hover:text-amber-300 transition-colors duration-300",
                                                                    children: door.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                    lineNumber: 264,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-amber-400/70 text-sm mb-3",
                                                                    children: door.finish
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                    lineNumber: 267,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-1.5 mb-5",
                                                                    children: door.features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2 text-sm text-white/60",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-amber-400 text-xs",
                                                                                    children: "✓"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                                    lineNumber: 272,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                f
                                                                            ]
                                                                        }, f, true, {
                                                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                            lineNumber: 271,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                    lineNumber: 269,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between pt-4 border-t border-white/5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-white/40 text-xs",
                                                                            children: [
                                                                                "Best for: ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-white/60",
                                                                                    children: door.bestUse
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                                    lineNumber: 280,
                                                                                    columnNumber: 39
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                            lineNumber: 279,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "text-xs font-medium text-amber-400 hover:text-amber-300 transition-colors border border-amber-400/30 hover:border-amber-300/60 px-3 py-1.5 rounded-lg",
                                                                            onClick: (e)=>{
                                                                                e.stopPropagation();
                                                                                setSelectedDoor(door);
                                                                            },
                                                                            children: "View Details"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                            lineNumber: 282,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                    lineNumber: 278,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 rounded-2xl border border-amber-400/0 transition-all duration-500 pointer-events-none",
                                                            style: {
                                                                borderColor: isHovered ? 'rgba(251,191,36,0.2)' : 'transparent'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 21
                                                }, this)
                                            }, door.id, false, {
                                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                lineNumber: 211,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scroll('right'),
                                        className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-black/80 border border-white/10 text-white/60 hover:text-amber-400 hover:border-amber-400/40 flex items-center justify-center transition-all duration-300 shadow-xl backdrop-blur-sm",
                                        "aria-label": "Scroll right",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 mb-16 px-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/40 text-sm",
                                        children: "Explore our complete range of door designs, finishes & sizes."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/jd doors.pdf",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "group flex items-center gap-3 px-7 py-3 rounded-full bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300 transition-all duration-300 shadow-[0_0_30px_rgba(251,191,36,0.25)] hover:shadow-[0_0_40px_rgba(251,191,36,0.45)] whitespace-nowrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "📄"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                lineNumber: 323,
                                                columnNumber: 15
                                            }, this),
                                            "View Catalogue",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "group-hover:translate-x-1 transition-transform duration-300",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                lineNumber: 325,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                        lineNumber: 317,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-24 mb-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-amber-400/60 tracking-[0.35em] text-xs uppercase mb-3",
                                                children: "Why Choose Us"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                lineNumber: 332,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-3xl font-thin text-white",
                                                children: [
                                                    "The ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-amber-300",
                                                        children: "Jagdamba Advantage"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                lineNumber: 333,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                        lineNumber: 331,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-2xl mx-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 bg-amber-400/10 border-b border-white/10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-6 py-4 text-white/60 text-sm font-medium",
                                                            children: "Feature"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-6 py-4 text-amber-300 text-sm font-semibold text-center",
                                                            children: "Jagdamba Doors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 17
                                                }, this),
                                                [
                                                    'Custom Sizes Available',
                                                    'Designer Finish Options',
                                                    'Premium Hardware Available',
                                                    'Moisture Resistant Options',
                                                    'Expert Installation Guidance',
                                                    'In-House Brand (No Middleman)'
                                                ].map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `grid grid-cols-2 border-b border-white/5 transition-colors hover:bg-white/[0.02] ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "px-6 py-4 text-white/70 text-sm",
                                                                children: feature
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                lineNumber: 356,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "px-6 py-4 flex justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-emerald-400 text-lg font-bold",
                                                                    children: "✅"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                    lineNumber: 358,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, feature, true, {
                                                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                            lineNumber: 338,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                        lineNumber: 337,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                lineNumber: 330,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative rounded-3xl overflow-hidden border border-amber-400/15",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/images/jagdamba-door-walnut.jpg",
                                                alt: "Custom Door Background",
                                                className: "w-full h-full object-cover opacity-20"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                lineNumber: 369,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                lineNumber: 374,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                        lineNumber: 368,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 px-8 md:px-16 py-16 grid md:grid-cols-2 gap-12 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-amber-400/60 tracking-widest text-xs uppercase mb-4",
                                                        children: "Made For You"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-3xl md:text-4xl font-thin text-white mb-4",
                                                        children: [
                                                            "Can't Find Your",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                lineNumber: 381,
                                                                columnNumber: 34
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-amber-300",
                                                                children: "Perfect Door?"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                lineNumber: 382,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/50 mb-8 leading-relaxed",
                                                        children: "Design one with us. Our master craftsmen will build a door to your exact vision — sizes, finishes, hardware, and style."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-3 mb-8",
                                                        children: [
                                                            'Custom Sizes',
                                                            'Custom Colors',
                                                            'Premium Hardware',
                                                            'Expert Craftsmanship'
                                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 text-white/70 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-amber-400",
                                                                        children: "✔"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                        lineNumber: 390,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    " ",
                                                                    item
                                                                ]
                                                            }, item, true, {
                                                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                lineNumber: 389,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#contact",
                                                        className: "inline-flex items-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-black font-semibold rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] hover:scale-105",
                                                        children: [
                                                            "Request Custom Door",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                lineNumber: 399,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                lineNumber: 378,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden md:flex flex-col gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative rounded-2xl overflow-hidden h-48",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "/images/jagdamba-door-designer.jpg",
                                                                alt: "Custom Designer Door",
                                                                className: "w-full h-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                lineNumber: 405,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                lineNumber: 406,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute bottom-4 left-4 text-white/80 text-sm font-medium",
                                                                children: "Bespoke Arc · Designer Series"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                lineNumber: 407,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                        lineNumber: 404,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative rounded-2xl overflow-hidden h-36",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "/images/jagdamba-door-teak.jpg",
                                                                alt: "Heritage Teak Door",
                                                                className: "w-full h-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                lineNumber: 410,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                lineNumber: 411,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute bottom-3 left-4 text-white/80 text-sm font-medium",
                                                                children: "Heritage Teak · Luxury Series"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                lineNumber: 412,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                        lineNumber: 409,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                lineNumber: 403,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                        lineNumber: 377,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                lineNumber: 367,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            selectedDoor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg",
                onClick: ()=>setSelectedDoor(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative max-w-4xl w-full bg-neutral-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl",
                    onClick: (e)=>e.stopPropagation(),
                    style: {
                        maxHeight: '90vh',
                        overflowY: 'auto'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedDoor(null),
                            className: "absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all text-lg",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                            lineNumber: 432,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-80 md:h-full min-h-[300px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: selectedDoor.image,
                                            alt: selectedDoor.name,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                            lineNumber: 442,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-r from-transparent to-neutral-900/40"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                            lineNumber: 447,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold border ${PRICE_COLORS[selectedDoor.priceTag]}`,
                                            children: selectedDoor.priceTag
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                            lineNumber: 448,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                    lineNumber: 441,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-amber-400/60 text-xs tracking-widest uppercase mb-2",
                                            children: selectedDoor.finish
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                            lineNumber: 455,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-3xl font-semibold text-white mb-2",
                                            children: selectedDoor.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                            lineNumber: 456,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/50 text-sm mb-6 leading-relaxed",
                                            children: selectedDoor.description
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                            lineNumber: 457,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-5 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white/40 text-xs uppercase tracking-wider mb-1.5",
                                                            children: "Material"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                            lineNumber: 462,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white/80 text-sm",
                                                            children: selectedDoor.material
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                            lineNumber: 463,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                    lineNumber: 461,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white/40 text-xs uppercase tracking-wider mb-1.5",
                                                            children: "Features"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                            lineNumber: 468,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: selectedDoor.features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20",
                                                                    children: [
                                                                        "✓ ",
                                                                        f
                                                                    ]
                                                                }, f, true, {
                                                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                    lineNumber: 471,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white/40 text-xs uppercase tracking-wider mb-1.5",
                                                            children: "Available Sizes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                            lineNumber: 480,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: selectedDoor.sizes.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10 hover:border-amber-400/30 cursor-pointer transition-colors",
                                                                    children: s
                                                                }, s, false, {
                                                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                    lineNumber: 483,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                            lineNumber: 481,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                    lineNumber: 479,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white/40 text-xs uppercase tracking-wider mb-1.5",
                                                            children: "Color Options"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                            lineNumber: 492,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: selectedDoor.colors.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10",
                                                                    children: c
                                                                }, c, false, {
                                                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                                    lineNumber: 495,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                            lineNumber: 493,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white/40 text-xs uppercase tracking-wider mb-1.5",
                                                            children: "Best Use"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                            lineNumber: 504,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white/70 text-sm",
                                                            children: selectedDoor.bestUse
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                            lineNumber: 505,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                    lineNumber: 503,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                            lineNumber: 459,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3 pt-4 border-t border-white/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#contact",
                                                    onClick: ()=>setSelectedDoor(null),
                                                    className: "flex-1 text-center px-6 py-3 bg-amber-400 hover:bg-amber-300 text-black font-semibold rounded-xl transition-all duration-300 text-sm hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]",
                                                    children: "Request This Door"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                    lineNumber: 510,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedDoor(null),
                                                    className: "px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all duration-300 text-sm border border-white/10",
                                                    children: "Close"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                                    lineNumber: 517,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                            lineNumber: 509,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                                    lineNumber: 454,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                            lineNumber: 439,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                    lineNumber: 426,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Jagdamba/src/components/JagdambaDoors.tsx",
                lineNumber: 422,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(JagdambaDoors, "yOoyQhLh930/xFvb89VOj2/bk4o=");
_c = JagdambaDoors;
var _c;
__turbopack_context__.k.register(_c, "JagdambaDoors");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Wardrobe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Wardrobe() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeHingeId, setActiveHingeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('mazix');
    const hardware = [
        {
            id: 'mazix',
            name: 'Mazix',
            slogan: 'Silent luxury',
            cycles: '80,000 cycles tested',
            desc: 'Every Mazix hinge is torque-tested for 80,000 open-close cycles. That\'s roughly 20 open-closes a day for 15 years — silent, precise, uncompromising luxury.'
        },
        {
            id: 'hepo',
            name: 'Hepo',
            slogan: 'German precision',
            cycles: '120,000 cycles tested',
            desc: 'Hepo hinges are built with premium German engineering standards, certified for 120,000 cycles. Perfect for heavy doors requiring robust performance and zero sag.'
        }
    ];
    const activeHardware = hardware.find((h)=>h.id === activeHingeId) || hardware[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen bg-neutral-950 py-32 overflow-hidden flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 w-full flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center max-w-3xl mx-auto mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-6 font-medium",
                            children: "05 · Wardrobe"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-serif-display text-5xl md:text-7xl font-light leading-[1.05] mb-6 text-white",
                            children: "Silence is the finest hardware."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/60 text-base md:text-lg font-light leading-relaxed",
                            children: "Inspect our hinges. Feel the softness of a well-engineered close."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-16 items-center w-full mt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl flex flex-col justify-between p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 w-full h-full pointer-events-none",
                                    style: {
                                        perspective: '1500px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 w-full h-full",
                                            style: {
                                                backgroundImage: 'url(/images/wardrobe-interior-design.jpg)',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                filter: 'brightness(0.5)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-0 top-[10%] w-[45%] h-[80%] rounded-l-lg overflow-hidden border-r border-black/35 shadow-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full",
                                                style: {
                                                    backgroundImage: 'url(/images/wardrobe-exterior-veneer.jpg)',
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    filter: 'brightness(0.85) contrast(1.05)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute right-[5%] top-[10%] w-[45%] h-[80%] rounded-r-lg overflow-hidden shadow-2xl origin-left",
                                            style: {
                                                transform: `rotateY(${isOpen ? '115deg' : '0deg'})`,
                                                transition: 'transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)',
                                                backfaceVisibility: 'hidden',
                                                transformStyle: 'preserve-3d'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-full",
                                                    style: {
                                                        backgroundImage: 'url(/images/wardrobe-exterior-veneer.jpg)',
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                        filter: 'brightness(0.95)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/60"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-16 bg-amber-200/60 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsOpen(!isOpen),
                                    className: "relative z-20 self-center pin-badge text-white px-6 py-3 rounded-full text-[10px] tracking-[0.25em] font-semibold uppercase hover:bg-amber-200 hover:text-black transition-colors cursor-pointer",
                                    children: isOpen ? 'Close Wardrobe' : 'Open Wardrobe'
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-6 font-semibold",
                                    children: "Hardware"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4 mb-8",
                                    children: hardware.map((h)=>{
                                        const isActive = activeHingeId === h.id;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveHingeId(h.id),
                                            className: `p-6 rounded-2xl border text-left transition-all cursor-pointer ${isActive ? 'border-amber-200/60 bg-amber-200/5' : 'border-white/10 hover:border-white/20 bg-transparent'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-serif-display text-3xl mb-1 text-white font-light",
                                                    children: h.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-white/50 tracking-wider",
                                                    children: h.slogan
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[9px] text-amber-200/70 mt-4 tracking-widest uppercase font-semibold",
                                                    children: h.cycles
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, h.id, true, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                                            lineNumber: 133,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 rounded-2xl border border-white/5 bg-white/2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/70 leading-relaxed font-light text-sm md:text-base",
                                        children: activeHardware.desc
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Jagdamba/src/components/Wardrobe.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(Wardrobe, "C1E8NraEhP5vjGGG1fcQd9fRD7Q=");
_c = Wardrobe;
var _c;
__turbopack_context__.k.register(_c, "Wardrobe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Jagdamba/src/components/MaterialStudio.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MaterialStudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
// 3D Tilt Card Component for a premium spatial interaction
function TiltCard({ item }) {
    _s();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [transform, setTransform] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('rotateX(0deg) rotateY(0deg)');
    const handleMouseMove = (e)=>{
        const card = cardRef.current;
        if (!card) return;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;
        // Limit rotation to max 12 degrees
        const rotateY = x / (width / 2) * 12;
        const rotateX = -(y / (height / 2)) * 12;
        setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`);
    };
    const handleMouseLeave = ()=>{
        setTransform('rotateX(0deg) rotateY(0deg) scale(1)');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group cursor-pointer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cardRef,
                onMouseMove: handleMouseMove,
                onMouseLeave: handleMouseLeave,
                className: "aspect-square relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 shadow-2xl transition-all duration-200",
                style: {
                    perspective: '1000px',
                    transformStyle: 'preserve-3d'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out",
                        style: {
                            transform,
                            transformStyle: 'preserve-3d'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-3/4 aspect-square rounded-xl overflow-hidden shadow-2xl transition-shadow group-hover:shadow-[0_20px_50px_rgba(255,200,120,0.15)] border border-white/10",
                            style: {
                                transform: 'translateZ(40px)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: item.image,
                                    alt: item.name,
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/MaterialStudio.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/MaterialStudio.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/MaterialStudio.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Jagdamba/src/components/MaterialStudio.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Jagdamba/src/components/MaterialStudio.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 right-4 text-[9px] tracking-[0.3em] text-amber-200/70 uppercase pin-badge px-3 py-1.5 rounded-full font-semibold",
                        children: item.category
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Jagdamba/src/components/MaterialStudio.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Jagdamba/src/components/MaterialStudio.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 px-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-serif-display text-lg text-white font-light group-hover:text-amber-200 transition-colors",
                    children: item.name
                }, void 0, false, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/MaterialStudio.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Jagdamba/src/components/MaterialStudio.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Jagdamba/src/components/MaterialStudio.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(TiltCard, "8ETL+9eZSBF+nqUMZc/BF8A+oEk=");
_c = TiltCard;
function MaterialStudio() {
    _s1();
    const categories = [
        {
            id: 'all',
            name: 'All'
        },
        {
            id: 'board',
            name: 'Board'
        },
        {
            id: 'laminate',
            name: 'Laminate'
        },
        {
            id: 'plywood',
            name: 'Plywood'
        },
        {
            id: 'doors',
            name: 'Doors'
        }
    ];
    const items = [
        {
            id: 'century-hdmr',
            name: 'Century HDMR',
            category: 'board',
            image: '/images/century-hdmr-kitchen.png'
        },
        {
            id: 'tesa-board',
            name: 'Action TESA',
            category: 'board',
            image: '/images/action-tesa-kitchen.png'
        },
        {
            id: 'saptam-board',
            name: 'Saptam Board',
            category: 'board',
            image: '/images/saptam-board.jpg'
        },
        {
            id: 'novopan-board',
            name: 'Novopan Board',
            category: 'board',
            image: '/images/novopan-kitchen.png'
        },
        {
            id: 'black-cobra',
            name: 'Black Cobra',
            category: 'laminate',
            image: '/images/black-cobra-laminate.jpg'
        },
        {
            id: 'vidyalam',
            name: 'Vidyalam Laminate',
            category: 'laminate',
            image: '/images/vidyalam-bedroom.png'
        },
        {
            id: 'virgo',
            name: 'Virgo Laminate',
            category: 'laminate',
            image: '/images/virgo-laminate.jpg'
        },
        {
            id: 'assam-plywood',
            name: 'Assam Plywood',
            category: 'plywood',
            image: '/images/assam-plywood-wardrobe.png'
        },
        {
            id: 'jagdamba-doors',
            name: 'Jagdamba Doors',
            category: 'doors',
            image: '/images/jagdamba-doors-luxury.png'
        }
    ];
    const [activeCat, setActiveCat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const filteredItems = activeCat === 'all' ? items : items.filter((item)=>item.category === activeCat);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "studio",
        className: "relative min-h-screen bg-neutral-950 py-32 overflow-hidden flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 w-full flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center max-w-3xl mx-auto mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-6 font-medium",
                            children: "07 · Material Studio"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/MaterialStudio.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-serif-display text-5xl md:text-7xl font-light leading-[1.05] mb-6 text-white",
                            children: "Every surface, catalogued."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/MaterialStudio.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/60 text-base md:text-lg font-light leading-relaxed",
                            children: "Rotate. Inspect. Compare. Our library, laid out for the discerning eye."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/MaterialStudio.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/MaterialStudio.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center gap-3 flex-wrap mb-16 max-w-xl",
                    children: categories.map((cat)=>{
                        const isActive = activeCat === cat.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveCat(cat.id),
                            className: `px-6 py-2.5 rounded-full text-xs tracking-widest uppercase transition-all font-semibold cursor-pointer ${isActive ? 'bg-amber-200 text-black shadow-lg shadow-amber-200/20' : 'border border-white/10 text-white/70 hover:border-amber-200/40 hover:text-white bg-transparent'}`,
                            children: cat.name
                        }, cat.id, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/MaterialStudio.tsx",
                            lineNumber: 184,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/MaterialStudio.tsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full mt-4",
                    children: filteredItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TiltCard, {
                            item: item
                        }, item.id, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/MaterialStudio.tsx",
                            lineNumber: 202,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/MaterialStudio.tsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Jagdamba/src/components/MaterialStudio.tsx",
            lineNumber: 164,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Jagdamba/src/components/MaterialStudio.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
_s1(MaterialStudio, "R8nOrJUdQ46bZIzxyQdoik4dqzU=");
_c1 = MaterialStudio;
var _c, _c1;
__turbopack_context__.k.register(_c, "TiltCard");
__turbopack_context__.k.register(_c1, "MaterialStudio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Jagdamba/src/components/Configurator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Configurator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/lucide-react/dist/esm/icons/save.mjs [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Configurator() {
    _s();
    const boards = [
        {
            id: 'century',
            name: 'Century HDMR',
            desc: 'Legendary strength',
            filter: 'contrast(1.15) brightness(0.9)'
        },
        {
            id: 'tesa',
            name: 'Action TESA',
            desc: 'Precision engineered',
            filter: 'contrast(1.0) brightness(1.05)'
        },
        {
            id: 'saptam',
            name: 'Saptam',
            desc: 'Contemporary craft',
            filter: 'contrast(1.1) brightness(0.85) sepia(0.2)'
        },
        {
            id: 'novopan',
            name: 'Novopan',
            desc: 'European finish',
            filter: 'contrast(0.95) brightness(1.1) saturate(0.8)'
        }
    ];
    const laminates = [
        {
            id: 'black-cobra',
            name: 'Black Cobra',
            desc: 'Deep charcoal',
            color: '#1a1410',
            filter: 'hue-rotate(-10deg) brightness(0.8) saturate(0.9)'
        },
        {
            id: 'vidyalam',
            name: 'Vidyalam',
            desc: 'Rich espresso',
            color: '#3d2a18',
            filter: 'hue-rotate(10deg) brightness(0.9) saturate(1.1)'
        },
        {
            id: 'virgo',
            name: 'Virgo',
            desc: 'Golden honey oak',
            color: '#c9a878',
            filter: 'hue-rotate(25deg) brightness(1.15) saturate(1.0)'
        }
    ];
    const hinges = [
        {
            id: 'mazix',
            name: 'Mazix',
            desc: '80,000 cycles tested',
            filter: ''
        },
        {
            id: 'hepo',
            name: 'Hepo',
            desc: '120,000 cycles tested',
            filter: ''
        }
    ];
    const doors = [
        {
            id: 'jagdamba',
            name: 'Jagdamba Doors',
            desc: 'Flagship wood core',
            filter: ''
        },
        {
            id: 'oak-veneer',
            name: 'Oak Veneer Door',
            desc: 'Light structural core',
            filter: ''
        }
    ];
    const [selectedBoard, setSelectedBoard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(boards[0]);
    const [selectedLaminate, setSelectedLaminate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(laminates[0]);
    const [selectedHinge, setSelectedHinge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(hinges[0]);
    const [selectedDoor, setSelectedDoor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(doors[0]);
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Combine filters for preview style
    const combinedFilter = `${selectedBoard.filter} ${selectedLaminate.filter}`;
    const handleSave = ()=>{
        setSaved(true);
        setTimeout(()=>setSaved(false), 4000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "configurator",
        className: "relative min-h-screen bg-black py-32 overflow-hidden flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 w-full flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center max-w-3xl mx-auto mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-6 font-medium",
                            children: "08 · Configurator"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-serif-display text-5xl md:text-7xl font-light leading-[1.05] mb-6 text-white",
                            children: "Design your room."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/60 text-base md:text-lg font-light leading-relaxed",
                            children: "Choose the elements. Watch it come alive. Save the design and we'll craft you a quote."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-5 gap-12 w-full mt-8 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-3 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 shadow-2xl bg-neutral-900",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/configurator-base-room.jpg",
                                            alt: "Room Customization Preview",
                                            className: "absolute inset-0 w-full h-full object-cover transition-all duration-1000",
                                            style: {
                                                filter: combinedFilter
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 mix-blend-overlay opacity-30 transition-all duration-1000",
                                            style: {
                                                background: `linear-gradient(135deg, ${selectedLaminate.color} 0%, transparent 50%, #8a5a2b 100%)`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-6 left-6 pin-badge rounded-full px-4 py-1.5 text-[9px] tracking-widest uppercase text-amber-200/80 font-semibold animate-pulse",
                                            children: "Live Preview"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pin-badge rounded-2xl p-3 sm:p-4 w-full sm:flex-1 backdrop-blur-md",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[9px] tracking-[0.25em] text-amber-200/70 uppercase mb-1 font-semibold",
                                                            children: "Current Selection"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs sm:text-sm font-serif-display text-white font-light truncate",
                                                            children: [
                                                                selectedBoard.name,
                                                                " · ",
                                                                selectedLaminate.name
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[9px] sm:text-[10px] text-white/50 mt-0.5 truncate",
                                                            children: [
                                                                "Hardware: ",
                                                                selectedHinge.name,
                                                                " · Door: ",
                                                                selectedDoor.name
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2 justify-end",
                                                    children: laminates.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setSelectedLaminate(l),
                                                            className: `w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 transition-all cursor-pointer ${selectedLaminate.id === l.id ? 'border-amber-200 scale-110 shadow-lg' : 'border-white/20'}`,
                                                            style: {
                                                                backgroundColor: l.color
                                                            },
                                                            title: l.name
                                                        }, l.id, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                saved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 p-4 rounded-xl border border-amber-200/20 bg-amber-200/5 text-amber-200 text-sm animate-fade-in",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                            className: "w-5 h-5 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Design saved successfully! Our engineering team will review and contact you with a customized quote."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-3 font-semibold",
                                            children: "HDMR Board"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2",
                                            children: boards.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedBoard(b),
                                                    className: `text-left p-3 rounded-xl border transition-all cursor-pointer ${selectedBoard.id === b.id ? 'border-amber-200/60 bg-amber-200/5' : 'border-white/10 hover:border-white/20'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs font-semibold text-white",
                                                            children: b.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[9px] text-white/40 tracking-wider truncate mt-0.5",
                                                            children: b.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, b.id, true, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-3 font-semibold",
                                            children: "Laminate"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 gap-2",
                                            children: laminates.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedLaminate(l),
                                                    className: `text-left p-3 rounded-xl border transition-all flex items-center gap-3 cursor-pointer ${selectedLaminate.id === l.id ? 'border-amber-200/60 bg-amber-200/5' : 'border-white/10 hover:border-white/20'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-6 h-6 rounded-full border border-white/10 flex-shrink-0",
                                                            style: {
                                                                backgroundColor: l.color
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs font-semibold text-white",
                                                                    children: l.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                                                    lineNumber: 182,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[9px] text-white/40 tracking-wider mt-0.5",
                                                                    children: l.desc
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                                                    lineNumber: 183,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, l.id, true, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-3 font-semibold",
                                            children: "Cabinet Hinges"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2",
                                            children: hinges.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedHinge(h),
                                                    className: `text-left p-3 rounded-xl border transition-all cursor-pointer ${selectedHinge.id === h.id ? 'border-amber-200/60 bg-amber-200/5' : 'border-white/10 hover:border-white/20'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs font-semibold text-white",
                                                            children: h.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[9px] text-white/40 tracking-wider truncate mt-0.5",
                                                            children: h.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, h.id, true, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-3 font-semibold",
                                            children: "Doors"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                            lineNumber: 215,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2",
                                            children: doors.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedDoor(d),
                                                    className: `text-left p-3 rounded-xl border transition-all cursor-pointer ${selectedDoor.id === d.id ? 'border-amber-200/60 bg-amber-200/5' : 'border-white/10 hover:border-white/20'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs font-semibold text-white",
                                                            children: d.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[9px] text-white/40 tracking-wider truncate mt-0.5",
                                                            children: d.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, d.id, true, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSave,
                                    className: "w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-amber-200 hover:bg-amber-100 text-black font-semibold text-xs tracking-wider uppercase transition-colors shadow-lg shadow-amber-200/10 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                            lineNumber: 241,
                                            columnNumber: 15
                                        }, this),
                                        " Save & Request Quote"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Jagdamba/src/components/Configurator.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(Configurator, "c5y7E4hehm7Tm+eGH72KXSFab5g=");
_c = Configurator;
var _c;
__turbopack_context__.k.register(_c, "Configurator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Jagdamba/src/components/Gallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Gallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Gallery() {
    _s();
    const categories = [
        {
            id: 'all',
            name: 'All'
        },
        {
            id: 'living',
            name: 'Living'
        },
        {
            id: 'kitchen',
            name: 'Kitchen'
        },
        {
            id: 'bedroom',
            name: 'Bedroom'
        },
        {
            id: 'wardrobe',
            name: 'Wardrobe'
        },
        {
            id: 'dining',
            name: 'Dining'
        },
        {
            id: 'study',
            name: 'Study'
        }
    ];
    const items = [
        {
            id: 'gal-1',
            title: 'Minimalist Walnut Living Space',
            category: 'living',
            image: '/images/livingroom-luxury-lounge.jpg'
        },
        {
            id: 'gal-2a',
            title: 'High-Gloss Black & White Kitchen',
            category: 'kitchen',
            image: '/images/kitchen-black-white.png'
        },
        {
            id: 'gal-2b',
            title: 'Modern Grey Marble Kitchen',
            category: 'kitchen',
            image: '/images/kitchen-marble-grey.png'
        },
        {
            id: 'gal-3',
            title: 'Master Bedroom Cladded Wardrobes',
            category: 'bedroom',
            image: '/images/master-bedroom-design.jpg'
        },
        {
            id: 'gal-4a',
            title: 'Luxury Walk-in Glass Wardrobe',
            category: 'wardrobe',
            image: '/images/wardrobe-luxury-glass.png'
        },
        {
            id: 'gal-4b',
            title: 'Modern Grey Sliding Wardrobe',
            category: 'wardrobe',
            image: '/images/wardrobe-sliding-grey.png'
        },
        {
            id: 'gal-5',
            title: 'Warm Oak Dining Space',
            category: 'dining',
            image: '/images/dining-parallax-view.jpg'
        },
        {
            id: 'gal-6',
            title: 'Clean Minimal Floating Office',
            category: 'study',
            image: '/images/study-workspace-cabinet.jpg'
        },
        {
            id: 'gal-7',
            title: 'Premium Olive Green & Grey Kitchen',
            category: 'kitchen',
            image: '/images/kitchen-olive-grey.png'
        },
        {
            id: 'gal-8',
            title: 'Veneered Dining Ceiling details',
            category: 'dining',
            image: '/images/projects-interior-workspace.jpg'
        },
        {
            id: 'gal-9',
            title: 'Warm Charcoal Bedroom Inlays',
            category: 'bedroom',
            image: '/images/kitchen-cozy-layout.jpg'
        }
    ];
    const [activeCat, setActiveCat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const filteredItems = activeCat === 'all' ? items : items.filter((item)=>item.category === activeCat);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "gallery",
        className: "relative min-h-screen bg-neutral-950 py-32 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 w-full flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center max-w-3xl mx-auto mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-6 font-medium",
                            children: "09 · Showcase"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Gallery.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-serif-display text-5xl md:text-7xl font-light leading-[1.05] mb-6 text-white",
                            children: "Homes we've helped shape."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Gallery.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/Gallery.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center gap-2 flex-wrap mb-12 max-w-2xl",
                    children: categories.map((cat)=>{
                        const isActive = activeCat === cat.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveCat(cat.id),
                            className: `px-5 py-2 rounded-full text-xs tracking-widest uppercase transition-all font-semibold cursor-pointer ${isActive ? 'bg-amber-200 text-black shadow-lg shadow-amber-200/10' : 'border border-white/10 text-white/60 hover:border-amber-200/40 hover:text-white bg-transparent'}`,
                            children: cat.name
                        }, cat.id, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Gallery.tsx",
                            lineNumber: 117,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/Gallery.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mt-4",
                    children: filteredItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group relative aspect-square rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 shadow-xl transition-all duration-300 hover:shadow-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: item.image,
                                    alt: item.title,
                                    className: "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:filter brightness-90 group-hover:brightness-75"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Gallery.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left pointer-events-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[9px] tracking-[0.2em] uppercase text-amber-200/80 mb-2 font-semibold",
                                            children: item.category
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Gallery.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-serif-display text-xl text-white font-light",
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Gallery.tsx",
                                            lineNumber: 151,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Gallery.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Gallery.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/Gallery.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Jagdamba/src/components/Gallery.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Jagdamba/src/components/Gallery.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_s(Gallery, "R8nOrJUdQ46bZIzxyQdoik4dqzU=");
_c = Gallery;
var _c;
__turbopack_context__.k.register(_c, "Gallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Jagdamba/src/components/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/lucide-react/dist/esm/icons/send.mjs [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/lucide-react/dist/esm/icons/award.mjs [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/lucide-react/dist/esm/icons/circle-check-big.mjs [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/lucide-react/dist/esm/icons/package.mjs [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/lucide-react/dist/esm/icons/truck.mjs [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/lucide-react/dist/esm/icons/compass.mjs [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/lucide-react/dist/esm/icons/coins.mjs [app-client] (ecmascript) <export default as Coins>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("Desktop/Jagdamba/src/components/Contact.tsx")}`;
    },
    get turbopackHot () {
        return __turbopack_context__.m.hot;
    }
};
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Contact() {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [project, setProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('residential');
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeFaq, setActiveFaq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!name) return;
        if (!email.trim() && !phone.trim()) {
            alert("Please enter either an Email Address or a Mobile Number.");
            return;
        }
        setSubmitting(true);
        try {
            const formData = new FormData();
            formData.append("access_key", __TURBOPACK__import$2e$meta__.env.VITE_WEB3FORMS_ACCESS_KEY);
            formData.append("name", name);
            if (email.trim()) formData.append("email", email);
            if (phone.trim()) formData.append("phone", phone);
            formData.append("project", project);
            if (message.trim()) formData.append("message", message);
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const result = await response.json();
            if (result.success) {
                setSubmitted(true);
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
                setTimeout(()=>setSubmitted(false), 5000);
            } else {
                alert("Submission failed: " + (result.message || "Unknown error"));
            }
        } catch (error) {
            alert("Submission error. Please verify your internet connection.");
        } finally{
            setSubmitting(false);
        }
    };
    const faqs = [
        {
            q: "Which HDMR board is best for modular kitchens in Rishikesh?",
            a: "We highly recommend Century Prowud or Action TESA HDMR boards for modular kitchens in Rishikesh's climate. They offer maximum density and moisture resistance, preventing swelling and warping over decades of use."
        },
        {
            q: "What is the difference between HDMR and normal commercial plywood?",
            a: "HDMR (High-Density Moisture Resistant) boards are made by compressing fine wood fibers under high pressure, providing absolute water resistance and density. Commercial plywood consists of layered veneers which can split or swell in wet zones. HDMR is superior for kitchens, vanities, and bathroom units."
        },
        {
            q: "Do you manufacture custom wooden doors and almirah cabinets in Rishikesh?",
            a: "Yes! At Jagdamba Timber Works, we design and manufacture bespoke veneered doors, membranic entries, and custom wardrobe panels at our local studio workshop, tailored to your site measurements and styling choice."
        },
        {
            q: "Do you supply premium laminates and cabinet hardware to Haridwar & Dehradun?",
            a: "Yes. In addition to serving Rishikesh, we regularly distribute premium decorative laminates (Virgo, Black Cobra) and silent-close cabinet fittings (Mazix, HEPO) to building projects and carpenters across Haridwar, Dehradun, and Uttarakhand."
        },
        {
            q: "Which plywood grade should be used for bedroom wardrobes and TV units?",
            a: "For bedroom wardrobes and TV units, we recommend MR (Moisture Resistant) or BWP (Boiling Water Proof) grade plywood, combined with premium wood veneers or structural laminates to resist temperature changes."
        }
    ];
    const trustSignals = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                className: "w-5 h-5 text-amber-200"
            }, void 0, false, {
                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                lineNumber: 85,
                columnNumber: 13
            }, this),
            title: "Retail & Wholesale",
            desc: "Direct volume pricing for major commercial builders, architects, carpenters, and residential homeowners."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                className: "w-5 h-5 text-amber-200"
            }, void 0, false, {
                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                lineNumber: 90,
                columnNumber: 13
            }, this),
            title: "Genuine Products",
            desc: "Authorized partner channels with verified manufacturer warranties and official batch certifications."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                className: "w-5 h-5 text-amber-200"
            }, void 0, false, {
                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, this),
            title: "Jagdamba Doors Manufacturer",
            desc: "Custom sizing, engineered solid cores, and bespoke veneers designed and manufactured in our local workshop."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                className: "w-5 h-5 text-amber-200"
            }, void 0, false, {
                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                lineNumber: 100,
                columnNumber: 13
            }, this),
            title: "Trusted Brands",
            desc: "Authorized dealership status with Century Ply, Action TESA, Virgo Laminates, Black Cobra, and HEPO fittings."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"], {
                className: "w-5 h-5 text-amber-200"
            }, void 0, false, {
                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                lineNumber: 105,
                columnNumber: 13
            }, this),
            title: "Competitive Pricing",
            desc: "Highly competitive sourcing prices on premium wood panels and hardware fittings."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                className: "w-5 h-5 text-amber-200"
            }, void 0, false, {
                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                lineNumber: 110,
                columnNumber: 13
            }, this),
            title: "Expert Guidance",
            desc: "Over 40 years of combined master woodworking and design engineering expertise to guide your project."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                className: "w-5 h-5 text-amber-200"
            }, void 0, false, {
                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                lineNumber: 115,
                columnNumber: 13
            }, this),
            title: "Fast Delivery",
            desc: "Prompt logistics and direct transport networks delivering directly to building sites."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                className: "w-5 h-5 text-amber-200"
            }, void 0, false, {
                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                lineNumber: 120,
                columnNumber: 13
            }, this),
            title: "Serving Rishikesh & Nearby",
            desc: "Prompt supply routes serving Gumaniwala, Tapovan, Haridwar, Dehradun, and surrounding Uttarakhand zones."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative bg-black py-40 border-t border-white/5 flex items-center justify-center text-center overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none opacity-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sunbeam",
                                style: {
                                    left: '10%',
                                    transform: 'skewX(-15deg)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sunbeam",
                                style: {
                                    left: '70%',
                                    transform: 'skewX(-15deg)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-4xl mx-auto px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-serif-display text-4xl md:text-6xl font-light text-white/90 leading-tight",
                            children: [
                                "\"We don't sell materials.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                    lineNumber: 136,
                                    columnNumber: 38
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "italic text-amber-200/90 font-light",
                                    children: "We help you build a home."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this),
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "faq",
                className: "relative bg-black py-32 border-t border-white/5 flex flex-col items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-6 w-full text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-4 font-medium",
                                    children: "09 · Frequently Asked Questions"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-serif-display text-4xl md:text-5xl font-light text-white",
                                    children: "Interior design insights & queries."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 text-left",
                            children: faqs.map((faq, idx)=>{
                                const isOpen = activeFaq === idx;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-white/5 bg-white/2 overflow-hidden transition-all duration-300 hover:border-amber-200/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveFaq(isOpen ? null : idx),
                                            className: "w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-white/90 pr-4",
                                                    children: faq.q
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: `w-4 h-4 text-amber-200/60 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-amber-200' : 'rotate-0'}`
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                            lineNumber: 163,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] border-t border-white/5 opacity-100 py-5 px-6' : 'max-h-0 opacity-0 pointer-events-none'} overflow-hidden`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/60 leading-relaxed font-light",
                                                children: faq.a
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                lineNumber: 179,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                            lineNumber: 175,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                    lineNumber: 159,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative bg-neutral-950 py-32 border-t border-white/5 flex flex-col items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-6 w-full text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-4 font-medium font-sans",
                                    children: "Quality Assurance & Trust"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-serif-display text-4xl md:text-5xl font-light text-white leading-tight",
                                    children: [
                                        "Why builders, architects & homeowners",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                            lineNumber: 200,
                                            columnNumber: 52
                                        }, this),
                                        "choose Jagdamba."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left",
                            children: trustSignals.map((signal, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 rounded-2xl border border-white/5 bg-white/2 hover:border-amber-200/25 hover:bg-white/5 transition-all duration-500 flex flex-col gap-4 shadow-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-full bg-amber-200/10 flex items-center justify-center border border-amber-200/20",
                                            children: signal.icon
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-serif-display text-lg text-white font-light mb-2",
                                                    children: signal.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-white/50 leading-relaxed font-light font-sans",
                                                    children: signal.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "contact",
                className: "relative bg-neutral-950 py-32 flex items-center justify-center border-t border-white/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-6 w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-16 items-start w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-10 text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] tracking-[0.4em] text-amber-200/70 uppercase mb-6 font-medium",
                                                children: "10 · Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-serif-display text-5xl md:text-6xl font-light leading-[1.05] text-white",
                                                children: [
                                                    "Let's build",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 30
                                                    }, this),
                                                    "something quiet",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 51
                                                    }, this),
                                                    "together."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6 pt-6 border-t border-white/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        className: "w-5 h-5 text-amber-200 mt-1 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[9px] tracking-[0.2em] uppercase text-white/40 mb-1",
                                                                children: "Corporate Showroom"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                                lineNumber: 245,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-light text-white/80",
                                                                children: "Devendra Vihar Gali No. 11, Gumaniwala, Rishikesh (Near DSB School), Uttarakhand, India"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                lineNumber: 242,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        className: "w-5 h-5 text-amber-200 mt-1 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[9px] tracking-[0.2em] uppercase text-white/40 mb-1",
                                                                children: "General Inquiries"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                                lineNumber: 255,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-light text-white/80",
                                                                children: "+91 94126 78698 / +91 97600 30333"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                lineNumber: 252,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl overflow-hidden border border-white/5 bg-neutral-900/60 aspect-video shadow-lg relative mt-6 h-48 w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                    title: "Jagdamba Timber Works Location Map",
                                                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.4988451151614!2d78.25531397637706!3d30.058379474917904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093e89e26bdfbb%3A0x873197bcc38fc5d3!2sJagdamba%20Timber!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
                                                    width: "100%",
                                                    height: "100%",
                                                    style: {
                                                        border: 0,
                                                        filter: 'grayscale(1) invert(0.9) contrast(1.2)'
                                                    },
                                                    allowFullScreen: false,
                                                    loading: "lazy",
                                                    referrerPolicy: "no-referrer-when-downgrade"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8 pt-6 border-t border-white/5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[9px] tracking-[0.2em] uppercase text-white/40 mb-3 font-semibold font-sans",
                                                        children: "Areas We Serve & Supply"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2",
                                                        children: [
                                                            'Rishikesh',
                                                            'Gumaniwala',
                                                            'Tapovan',
                                                            'Haridwar',
                                                            'Dehradun',
                                                            'Roorkee',
                                                            'Narendra Nagar',
                                                            'Jolly Grant'
                                                        ].map((area)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] tracking-wider text-amber-200/60 bg-amber-200/5 border border-amber-200/10 px-3 py-1.5 rounded-full hover:border-amber-200/30 hover:text-amber-200 transition-all duration-300 cursor-default",
                                                                children: area
                                                            }, area, false, {
                                                                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                                lineNumber: 283,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                lineNumber: 279,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                lineNumber: 231,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-white/5 bg-white/2 p-8 shadow-2xl relative",
                                children: submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center justify-center py-12 text-center space-y-4 animate-fade-in",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 rounded-full bg-amber-200/10 flex items-center justify-center text-amber-200 border border-amber-200/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                className: "w-8 h-8"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                lineNumber: 300,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                            lineNumber: 299,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-serif-display text-2xl text-white font-light",
                                            children: "Inquiry Sent."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                            lineNumber: 302,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-white/60 max-w-sm",
                                            children: "Thank you for reaching out. A studio representative will contact you in the next 24 hours to schedule a consultation."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                            lineNumber: 303,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                    lineNumber: 298,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    className: "space-y-6 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "form-name",
                                                    className: "text-[9px] tracking-[0.2em] uppercase text-white/40 font-semibold",
                                                    children: "Full Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "form-name",
                                                    type: "text",
                                                    required: true,
                                                    value: name,
                                                    onChange: (e)=>setName(e.target.value),
                                                    placeholder: "E.g. Alexander Wright",
                                                    className: "w-full bg-neutral-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-200/60 transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                            lineNumber: 311,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "form-email",
                                                    className: "text-[9px] tracking-[0.2em] uppercase text-white/40 font-semibold flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Email Address"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                            lineNumber: 329,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[8px] text-amber-200/50 normal-case font-light font-sans",
                                                            children: "(Or Mobile Number)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "form-email",
                                                    type: "email",
                                                    value: email,
                                                    onChange: (e)=>setEmail(e.target.value),
                                                    placeholder: "alex@example.com",
                                                    className: "w-full bg-neutral-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-200/60 transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                            lineNumber: 327,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "form-phone",
                                                    className: "text-[9px] tracking-[0.2em] uppercase text-white/40 font-semibold flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Mobile Number"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                            lineNumber: 345,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[8px] text-amber-200/50 normal-case font-light font-sans",
                                                            children: "(Or Email Address)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "form-phone",
                                                    type: "tel",
                                                    value: phone,
                                                    onChange: (e)=>setPhone(e.target.value),
                                                    placeholder: "E.g. 9412678698",
                                                    className: "w-full bg-neutral-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-200/60 transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                            lineNumber: 343,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "form-project",
                                                    className: "text-[9px] tracking-[0.2em] uppercase text-white/40 font-semibold",
                                                    children: "Project Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    id: "form-project",
                                                    value: project,
                                                    onChange: (e)=>setProject(e.target.value),
                                                    className: "w-full bg-neutral-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-200/60 transition-colors cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "residential",
                                                            children: "Residential Interiors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                            lineNumber: 369,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "commercial",
                                                            children: "Commercial Space"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                            lineNumber: 370,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "custom",
                                                            children: "Bespoke Doors / Wardrobes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                            lineNumber: 371,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "wholesale",
                                                            children: "Wholesale Plywood / Panels"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                            lineNumber: 372,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                            lineNumber: 359,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "form-message",
                                                    className: "text-[9px] tracking-[0.2em] uppercase text-white/40 font-semibold",
                                                    children: "Brief Message (Optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    id: "form-message",
                                                    rows: 4,
                                                    value: message,
                                                    onChange: (e)=>setMessage(e.target.value),
                                                    placeholder: "Describe your design vision, timelines, and material requirements...",
                                                    className: "w-full bg-neutral-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-200/60 transition-colors resize-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                            lineNumber: 377,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: submitting,
                                            className: "w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-amber-200 hover:bg-amber-100 text-black font-semibold text-xs tracking-wider uppercase transition-colors shadow-lg shadow-amber-200/10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                submitting ? "Sending..." : "Request Consultation"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                            lineNumber: 392,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                    lineNumber: 308,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                                lineNumber: 296,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                    lineNumber: 226,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Jagdamba/src/components/Contact.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Contact, "4+3EfNcyirIe9QjKyibmiVglSWo=");
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Jagdamba_src_07yxeye._.js.map