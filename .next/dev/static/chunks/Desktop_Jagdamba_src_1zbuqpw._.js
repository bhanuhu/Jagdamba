(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Jagdamba/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Navbar() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setScrolled(window.scrollY > 50);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const menuItems = [
        {
            name: 'Home',
            to: '/'
        },
        {
            name: 'Products',
            to: '/products'
        },
        {
            name: 'Our Doors',
            to: '/#jagdamba-doors'
        },
        {
            name: 'Brands',
            to: '/brands'
        },
        {
            name: 'Projects',
            to: '/projects'
        },
        {
            name: 'About',
            to: '/about'
        },
        {
            name: 'Knowledge',
            to: '/blog'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "font-serif-display text-lg md:text-xl tracking-wider text-amber-100 flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/favicon.png",
                                    alt: "Jagdamba Logo",
                                    className: "h-11 md:h-14 w-auto object-contain rounded border border-amber-200/10 shadow-lg shadow-amber-950/20 bg-neutral-950/40 p-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Navbar.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex flex-col md:flex-row md:items-center",
                                    children: [
                                        "Jagdamba",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-amber-200/60 text-[10px] md:ml-2 tracking-[0.3em] font-sans font-light uppercase",
                                            children: "TIMBER WORKS & PLYWOOD"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Jagdamba/src/components/Navbar.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Navbar.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Navbar.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center gap-8",
                            children: menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.to,
                                    className: "text-[10px] tracking-[0.25em] uppercase text-white/60 hover:text-amber-200 transition-colors font-medium",
                                    children: item.name
                                }, item.name, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Navbar.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Navbar.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/#contact",
                                    className: "hidden md:inline-flex items-center gap-2 text-[10px] tracking-[0.2em] font-semibold uppercase px-5 py-2.5 rounded-full bg-amber-200 text-black hover:bg-amber-100 transition-colors",
                                    children: "Get Quote"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Navbar.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsOpen(!isOpen),
                                    className: "lg:hidden w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-amber-200/40 text-white/70",
                                    "aria-label": "Toggle menu",
                                    children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/Navbar.tsx",
                                        lineNumber: 82,
                                        columnNumber: 25
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Jagdamba/src/components/Navbar.tsx",
                                        lineNumber: 82,
                                        columnNumber: 53
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Jagdamba/src/components/Navbar.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Navbar.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/Navbar.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Jagdamba/src/components/Navbar.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col justify-center items-center transition-all duration-500 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-8",
                    children: [
                        menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.to,
                                onClick: ()=>setIsOpen(false),
                                className: "text-lg tracking-[0.3em] uppercase text-white/80 hover:text-amber-200 transition-colors font-serif-display",
                                children: item.name
                            }, item.name, false, {
                                fileName: "[project]/Desktop/Jagdamba/src/components/Navbar.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/#contact",
                            onClick: ()=>setIsOpen(false),
                            className: "inline-flex items-center gap-2 text-xs tracking-[0.25em] font-semibold uppercase px-6 py-3 rounded-full bg-amber-200 text-black hover:bg-amber-100 transition-colors mt-4",
                            children: "Get Quote"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Jagdamba/src/components/Navbar.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/Navbar.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Jagdamba/src/components/Navbar.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Navbar, "E9hQXvWoSqP64D0yGnqXyHKCBFc=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Jagdamba/src/utils/audioSynth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ambientSynth",
    ()=>ambientSynth
]);
// Web Audio API ambient pad synthesizer for a premium spatial luxury soundscape.
// Uses custom oscillators, low-pass filter modulation, and chord progressions.
class AmbientSynth {
    ctx = null;
    masterGain = null;
    oscillators = [];
    filter = null;
    lfo = null;
    chordInterval = null;
    isRunning = false;
    // Luxury chord progression frequencies (hz)
    // 1. Amaj9: A1(55), E2(82.4), C#3(138.6), G#3(207.7), B3(246.9)
    // 2. C#m9: C#2(65.4), G#2(103.8), E3(164.8), B3(246.9), D#4(311.1)
    // 3. F#m11: F#1(46.2), C#2(65.4), A2(110), E3(164.8), B3(246.9)
    // 4. Bsus9: B1(61.7), F#2(92.5), A2(110), C#3(138.6), E3(164.8)
    chords = [
        [
            55.00,
            82.41,
            138.59,
            207.65,
            246.94
        ],
        [
            65.41,
            103.83,
            164.81,
            246.94,
            311.13
        ],
        [
            46.25,
            65.41,
            110.00,
            164.81,
            246.94
        ],
        [
            61.74,
            92.50,
            110.00,
            138.59,
            164.81
        ] // Bsus9
    ];
    currentChordIndex = 0;
    start() {
        if (this.isRunning) return;
        // Initialize AudioContext
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        this.ctx = new AudioContextClass();
        // Master gain
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
        // Filter
        this.filter = this.ctx.createBiquadFilter();
        this.filter.type = 'lowpass';
        this.filter.frequency.setValueAtTime(300, this.ctx.currentTime);
        this.filter.Q.setValueAtTime(3, this.ctx.currentTime);
        this.filter.connect(this.masterGain);
        // LFO for filter cutoff sweep (creates breathing sound)
        this.lfo = this.ctx.createOscillator();
        this.lfo.type = 'sine';
        this.lfo.frequency.setValueAtTime(0.08, this.ctx.currentTime); // very slow sweep (12 seconds)
        const lfoGain = this.ctx.createGain();
        lfoGain.gain.setValueAtTime(150, this.ctx.currentTime); // sweep bounds: 150hz to 450hz
        this.lfo.connect(lfoGain);
        if (this.filter) {
            lfoGain.connect(this.filter.frequency);
        }
        this.lfo.start();
        // Spawn oscillators
        const chord = this.chords[this.currentChordIndex];
        this.oscillators = chord.map((freq, index)=>{
            if (!this.ctx || !this.filter) throw new Error();
            const osc = this.ctx.createOscillator();
            // Alternate waveform styles for rich harmonics
            osc.type = index % 2 === 0 ? 'sawtooth' : 'triangle';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            const oGain = this.ctx.createGain();
            // Low volumes so it is a subtle backdrop hum, not blasting noise
            const volume = index === 0 ? 0.08 : 0.04;
            oGain.gain.setValueAtTime(volume, this.ctx.currentTime);
            osc.connect(oGain);
            oGain.connect(this.filter);
            osc.start();
            return {
                osc,
                gain: oGain
            };
        });
        // Fade in master gain smoothly (2 seconds)
        this.masterGain.gain.linearRampToValueAtTime(0.25, this.ctx.currentTime + 2.0);
        this.isRunning = true;
        // Start chord cycle
        this.chordInterval = setInterval(()=>{
            this.transitionToNextChord();
        }, 10000); // Transition chords every 10 seconds
    }
    transitionToNextChord() {
        if (!this.ctx || !this.isRunning) return;
        this.currentChordIndex = (this.currentChordIndex + 1) % this.chords.length;
        const nextChord = this.chords[this.currentChordIndex];
        const transitionTime = 5.0; // 5 seconds long portamento fade
        const now = this.ctx.currentTime;
        this.oscillators.forEach(({ osc }, index)=>{
            const targetFreq = nextChord[index % nextChord.length];
            osc.frequency.exponentialRampToValueAtTime(targetFreq, now + transitionTime);
        });
    }
    playHammerHit() {
        if (!this.ctx) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (!AudioContextClass) return;
            this.ctx = new AudioContextClass();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
        const now = this.ctx.currentTime;
        // Low wood thump (wood block tone)
        const osc1 = this.ctx.createOscillator();
        const gain1 = this.ctx.createGain();
        osc1.type = 'triangle';
        osc1.frequency.setValueAtTime(180, now);
        osc1.frequency.exponentialRampToValueAtTime(75, now + 0.1);
        gain1.gain.setValueAtTime(0.2, now);
        gain1.gain.linearRampToValueAtTime(0, now + 0.1);
        osc1.connect(gain1);
        gain1.connect(this.ctx.destination);
        // High metal tap (nail stroke)
        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(950, now);
        osc2.frequency.exponentialRampToValueAtTime(300, now + 0.04);
        gain2.gain.setValueAtTime(0.12, now);
        gain2.gain.linearRampToValueAtTime(0, now + 0.05);
        osc2.connect(gain2);
        gain2.connect(this.ctx.destination);
        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.12);
        osc2.stop(now + 0.06);
    }
    stop() {
        if (!this.isRunning || !this.ctx || !this.masterGain) return;
        clearInterval(this.chordInterval);
        const now = this.ctx.currentTime;
        // Fade out smoothly (0.5 seconds)
        this.masterGain.gain.cancelScheduledValues(now);
        this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
        this.masterGain.gain.linearRampToValueAtTime(0, now + 0.5);
        setTimeout(()=>{
            if (this.ctx && !this.isRunning) {
                this.oscillators.forEach(({ osc })=>{
                    try {
                        osc.stop();
                    } catch (e) {}
                });
                if (this.lfo) {
                    try {
                        this.lfo.stop();
                    } catch (e) {}
                }
                this.ctx.close();
                this.ctx = null;
                this.oscillators = [];
                this.masterGain = null;
                this.filter = null;
                this.lfo = null;
            }
        }, 600);
        this.isRunning = false;
    }
}
const ambientSynth = new AmbientSynth();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Jagdamba/src/components/CustomCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$src$2f$utils$2f$audioSynth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jagdamba/src/utils/audioSynth.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CustomCursor() {
    _s();
    const [coords, setCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: -100,
        y: -100
    });
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isClicking, setIsClicking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            // Show custom cursor only when mouse moves inside window
            const handleMouseMove = {
                "CustomCursor.useEffect.handleMouseMove": (e)=>{
                    setCoords({
                        x: e.clientX,
                        y: e.clientY
                    });
                    if (!isVisible) setIsVisible(true);
                    // Check if mouse is over an interactive element
                    const target = e.target;
                    if (target) {
                        const isInteractive = target.closest('a, button, select, [role="button"], input, textarea, .cursor-pointer') !== null;
                        setIsHovering(isInteractive);
                    }
                }
            }["CustomCursor.useEffect.handleMouseMove"];
            const handleMouseDown = {
                "CustomCursor.useEffect.handleMouseDown": (e)=>{
                    const target = e.target;
                    const isInteractive = target && target.closest('a, button, select, [role="button"], input, textarea, .cursor-pointer') !== null;
                    setIsClicking(true);
                    // Play a short premium wood-tap/hammer click sound when hitting an interactive button
                    if (isInteractive) {
                        try {
                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$src$2f$utils$2f$audioSynth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ambientSynth"].playHammerHit();
                        } catch (err) {
                            console.warn('AudioContext hit sound failed:', err);
                        }
                    }
                }
            }["CustomCursor.useEffect.handleMouseDown"];
            const handleMouseUp = {
                "CustomCursor.useEffect.handleMouseUp": ()=>{
                    setIsClicking(false);
                }
            }["CustomCursor.useEffect.handleMouseUp"];
            const handleMouseLeave = {
                "CustomCursor.useEffect.handleMouseLeave": ()=>{
                    setIsVisible(false);
                }
            }["CustomCursor.useEffect.handleMouseLeave"];
            const handleMouseEnter = {
                "CustomCursor.useEffect.handleMouseEnter": ()=>{
                    setIsVisible(true);
                }
            }["CustomCursor.useEffect.handleMouseEnter"];
            window.addEventListener('mousemove', handleMouseMove, {
                passive: true
            });
            window.addEventListener('mousedown', handleMouseDown);
            window.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('mouseleave', handleMouseLeave);
            document.addEventListener('mouseenter', handleMouseEnter);
            return ({
                "CustomCursor.useEffect": ()=>{
                    window.removeEventListener('mousemove', handleMouseMove);
                    window.removeEventListener('mousedown', handleMouseDown);
                    window.removeEventListener('mouseup', handleMouseUp);
                    document.removeEventListener('mouseleave', handleMouseLeave);
                    document.removeEventListener('mouseenter', handleMouseEnter);
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], [
        isVisible
    ]);
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed pointer-events-none z-[9999] hidden md:block",
        style: {
            left: `${coords.x}px`,
            top: `${coords.y}px`,
            // Anchor the tip of the nail (bottom-left corner of the nail image)
            // Offset by 2px on X and -34px on Y so the sharp tip aligns with the mouse hotspot
            transform: 'translate3d(2px, -34px, 0)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-16 h-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/nail_3d.png",
                    alt: "3D Gold Nail Cursor",
                    className: "absolute left-0 top-0 w-9 h-9 object-contain drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/CustomCursor.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute origin-[40px_40px] transition-all duration-75 ease-out",
                    style: {
                        left: '20px',
                        top: '-26px',
                        opacity: isHovering ? 1 : 0,
                        transform: isClicking ? 'translate3d(-14px, 14px, 0) rotate(-22deg)' // swing down to strike nail head
                         : isHovering ? 'translate3d(0, 0, 0) rotate(15deg)' // ready stance
                         : 'translate3d(20px, -20px, 0) rotate(45deg)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jagdamba$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/hammer_3d.png",
                        alt: "3D Hammer Strike",
                        className: "w-14 h-14 object-contain drop-shadow-[0_6px_8px_rgba(0,0,0,0.6)]"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Jagdamba/src/components/CustomCursor.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Jagdamba/src/components/CustomCursor.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Jagdamba/src/components/CustomCursor.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Jagdamba/src/components/CustomCursor.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(CustomCursor, "Yf+Y9xgZzO1dD0qhbWJCTgXmiEQ=");
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Jagdamba_src_1zbuqpw._.js.map