const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/mansion3D.js", "../jsx-runtime.js"]))) => i.map(i => d[i]);
import {n as e, s as t, t as n} from "../jsx-runtime.js";
import {t as r} from "./box.js";
import {t as i} from "./compass.js";
import {t as a} from "./hammer.js";
import {t as o} from "./layers.js";
import {t as s} from "./ruler.js";
import {i as c, l, n as u, t as d} from "../index.js";
import {t as f} from "./reveal.js";
var p = l(`Move3d`, [[`path`, {
    d: `M5 3v16h16`,
    key: `1mqmf9`
}], [`path`, {
    d: `m5 19 6-6`,
    key: `jh6hbb`
}], [`path`, {
    d: `m2 6 3-3 3 3`,
    key: `tkyvxa`
}], [`path`, {
    d: `m18 16 3 3-3 3`,
    key: `1d4glt`
}]])
  , m = t(e(), 1)
  , h = n();
function g() {
    let e = `#7dd3fc`
      , t = `#38bdf8`
      , n = `#c69859`
      , r = `#64748b`;
    return (0,
    h.jsx)(f, {
        children: (0,
        h.jsxs)(`div`, {
            className: `relative w-full max-w-3xl mx-auto rounded-2xl border border-border/70 bg-card/40 p-4 sm:p-6`,
            children: [(0,
            h.jsxs)(`svg`, {
                viewBox: `0 0 460 360`,
                className: `w-full h-auto`,
                style: {
                    fontFamily: `var(--font-mono)`
                },
                children: [(0,
                h.jsx)(`defs`, {
                    children: (0,
                    h.jsx)(`pattern`, {
                        id: `bpgrid`,
                        width: `20`,
                        height: `20`,
                        patternUnits: `userSpaceOnUse`,
                        children: (0,
                        h.jsx)(`path`, {
                            d: `M20 0H0V20`,
                            fill: `none`,
                            stroke: `#1e3a5f`,
                            strokeWidth: `0.5`
                        })
                    })
                }), (0,
                h.jsx)(`rect`, {
                    x: `0`,
                    y: `0`,
                    width: `460`,
                    height: `360`,
                    fill: `url(#bpgrid)`,
                    opacity: `0.5`
                }), (0,
                h.jsx)(`rect`, {
                    x: `28`,
                    y: `28`,
                    width: `404`,
                    height: `304`,
                    fill: `none`,
                    stroke: r,
                    strokeWidth: `1`,
                    strokeDasharray: `6 4`,
                    opacity: `0.5`
                }), (0,
                h.jsx)(`text`, {
                    x: `36`,
                    y: `44`,
                    fill: r,
                    fontSize: `8`,
                    opacity: `0.7`,
                    children: `PAV. SUPERIOR (balanço)`
                }), (0,
                h.jsx)(`rect`, {
                    x: `40`,
                    y: `40`,
                    width: `380`,
                    height: `280`,
                    fill: `none`,
                    stroke: e,
                    strokeWidth: `6`
                }), (0,
                h.jsx)(`rect`, {
                    x: `40`,
                    y: `40`,
                    width: `8`,
                    height: `280`,
                    fill: n,
                    fillOpacity: `0.18`,
                    stroke: n,
                    strokeWidth: `1`
                }), (0,
                h.jsx)(`rect`, {
                    x: `48`,
                    y: `266`,
                    width: `56`,
                    height: `54`,
                    fill: n,
                    fillOpacity: `0.22`,
                    stroke: n,
                    strokeWidth: `1.5`
                }), (0,
                h.jsx)(`line`, {
                    x1: `220`,
                    y1: `40`,
                    x2: `220`,
                    y2: `180`,
                    stroke: e,
                    strokeWidth: `4`
                }), (0,
                h.jsx)(`line`, {
                    x1: `40`,
                    y1: `180`,
                    x2: `260`,
                    y2: `180`,
                    stroke: e,
                    strokeWidth: `4`
                }), (0,
                h.jsx)(`line`, {
                    x1: `300`,
                    y1: `180`,
                    x2: `420`,
                    y2: `180`,
                    stroke: e,
                    strokeWidth: `4`
                }), (0,
                h.jsx)(`line`, {
                    x1: `300`,
                    y1: `180`,
                    x2: `300`,
                    y2: `320`,
                    stroke: e,
                    strokeWidth: `4`
                }), (0,
                h.jsx)(`rect`, {
                    x: `260`,
                    y: `37`,
                    width: `160`,
                    height: `6`,
                    fill: t,
                    fillOpacity: `0.35`,
                    stroke: t,
                    strokeWidth: `1`
                }), (0,
                h.jsx)(`line`, {
                    x1: `260`,
                    y1: `37`,
                    x2: `260`,
                    y2: `43`,
                    stroke: t,
                    strokeWidth: `2`
                }), (0,
                h.jsx)(`line`, {
                    x1: `420`,
                    y1: `37`,
                    x2: `420`,
                    y2: `43`,
                    stroke: t,
                    strokeWidth: `2`
                }), [300, 340, 380].map(e => (0,
                h.jsx)(`line`, {
                    x1: e,
                    y1: `36`,
                    x2: e,
                    y2: `44`,
                    stroke: t,
                    strokeWidth: `1.5`
                }, e)), (0,
                h.jsx)(`line`, {
                    x1: `417`,
                    y1: `90`,
                    x2: `417`,
                    y2: `150`,
                    stroke: t,
                    strokeWidth: `2`
                }), (0,
                h.jsx)(`line`, {
                    x1: `423`,
                    y1: `90`,
                    x2: `423`,
                    y2: `150`,
                    stroke: t,
                    strokeWidth: `2`
                }), (0,
                h.jsx)(`line`, {
                    x1: `414`,
                    y1: `120`,
                    x2: `426`,
                    y2: `120`,
                    stroke: t,
                    strokeWidth: `1`
                }), (0,
                h.jsxs)(`g`, {
                    stroke: e,
                    strokeWidth: `1.5`,
                    fill: `none`,
                    children: [(0,
                    h.jsx)(`path`, {
                        d: `M220 180 A 24 24 0 0 1 244 204`
                    }), (0,
                    h.jsx)(`line`, {
                        x1: `220`,
                        y1: `180`,
                        x2: `244`,
                        y2: `180`,
                        stroke: `#1e3a5f`,
                        strokeWidth: `2`
                    }), (0,
                    h.jsx)(`path`, {
                        d: `M150 180 A 22 22 0 0 0 128 202`
                    }), (0,
                    h.jsx)(`line`, {
                        x1: `150`,
                        y1: `180`,
                        x2: `150`,
                        y2: `202`,
                        stroke: `#1e3a5f`,
                        strokeWidth: `2`
                    })]
                }), (0,
                h.jsxs)(`g`, {
                    fill: `#bae6fd`,
                    fontSize: `11`,
                    textAnchor: `middle`,
                    children: [(0,
                    h.jsx)(`text`, {
                        x: `150`,
                        y: `120`,
                        children: `SALA DE ESTAR`
                    }), (0,
                    h.jsx)(`text`, {
                        x: `150`,
                        y: `134`,
                        fontSize: `8`,
                        fill: `#94a3b8`,
                        children: `canto envidraçado`
                    }), (0,
                    h.jsx)(`text`, {
                        x: `360`,
                        y: `120`,
                        children: `COZINHA GOURMET`
                    }), (0,
                    h.jsx)(`text`, {
                        x: `150`,
                        y: `250`,
                        children: `SUÍTE MASTER`
                    }), (0,
                    h.jsx)(`text`, {
                        x: `360`,
                        y: `250`,
                        children: `DORMITÓRIO`
                    }), (0,
                    h.jsx)(`text`, {
                        x: `170`,
                        y: `200`,
                        fontSize: `9`,
                        children: `HALL`
                    }), (0,
                    h.jsx)(`text`, {
                        x: `360`,
                        y: `200`,
                        fontSize: `9`,
                        children: `LAVABO`
                    }), (0,
                    h.jsx)(`text`, {
                        x: `76`,
                        y: `298`,
                        fontSize: `8`,
                        fill: n,
                        children: `ENTRADA`
                    })]
                }), (0,
                h.jsxs)(`g`, {
                    stroke: `#64748b`,
                    strokeWidth: `0.75`,
                    fill: `#94a3b8`,
                    fontSize: `9`,
                    children: [(0,
                    h.jsx)(`line`, {
                        x1: `40`,
                        y1: `28`,
                        x2: `420`,
                        y2: `28`
                    }), (0,
                    h.jsx)(`line`, {
                        x1: `40`,
                        y1: `24`,
                        x2: `40`,
                        y2: `32`
                    }), (0,
                    h.jsx)(`line`, {
                        x1: `420`,
                        y1: `24`,
                        x2: `420`,
                        y2: `32`
                    }), (0,
                    h.jsx)(`text`, {
                        x: `230`,
                        y: `22`,
                        textAnchor: `middle`,
                        children: `12,60 m`
                    }), (0,
                    h.jsx)(`line`, {
                        x1: `28`,
                        y1: `40`,
                        x2: `28`,
                        y2: `320`
                    }), (0,
                    h.jsx)(`line`, {
                        x1: `24`,
                        y1: `40`,
                        x2: `32`,
                        y2: `40`
                    }), (0,
                    h.jsx)(`line`, {
                        x1: `24`,
                        y1: `320`,
                        x2: `32`,
                        y2: `320`
                    }), (0,
                    h.jsx)(`text`, {
                        x: `20`,
                        y: `180`,
                        textAnchor: `middle`,
                        transform: `rotate(-90 20 180)`,
                        children: `9,30 m`
                    })]
                }), (0,
                h.jsxs)(`g`, {
                    transform: `translate(426 300)`,
                    children: [(0,
                    h.jsx)(`circle`, {
                        r: `16`,
                        fill: `none`,
                        stroke: `#64748b`,
                        strokeWidth: `0.75`
                    }), (0,
                    h.jsx)(`path`, {
                        d: `M0 -12 L4 6 L0 2 L-4 6 Z`,
                        fill: `#7dd3fc`
                    }), (0,
                    h.jsx)(`text`, {
                        y: `-18`,
                        textAnchor: `middle`,
                        fill: `#94a3b8`,
                        fontSize: `9`,
                        children: `N`
                    })]
                })]
            }), (0,
            h.jsxs)(`div`, {
                className: `mt-3 flex items-center justify-between text-xs text-muted-foreground`,
                children: [(0,
                h.jsx)(`span`, {
                    children: `Residência alto padrão · Térreo · 117 m² (pav. superior em balanço)`
                }), (0,
                h.jsxs)(`span`, {
                    className: `flex items-center gap-1.5`,
                    children: [(0,
                    h.jsx)(i, {
                        size: 13,
                        className: `text-primary`
                    }), ` Planta baixa · Esc. 1:100`]
                })]
            })]
        })
    })
}
var _ = [{
    n: `01`,
    label: `Terreno & Fundação`,
    color: `#94a3b8`,
    desc: `Locação, escavação e radier/sapatas que sustentam toda a edificação.`
}, {
    n: `02`,
    label: `Térreo · Estrutura`,
    color: `#cbd5e1`,
    desc: `Pilares, vigas e laje do térreo. Fachada envidraçada no canto frontal.`
}, {
    n: `03`,
    label: `Pav. Superior · Balanço`,
    color: `#c69859`,
    desc: `Volume em balanço revestido em madeira, com janelas de fita (ribbon).`
}, {
    n: `04`,
    label: `Cobertura`,
    color: `#0ea5e9`,
    desc: `Laje plana, platibanda e sistema de impermeabilização.`
}, {
    n: `05`,
    label: `Paisagismo`,
    color: `#22c55e`,
    desc: `Piscina, deck, jardim e iluminação externa que integram obra e terreno.`
}, {
    n: `06`,
    label: `Acabamento & Entrega`,
    color: `#f59e0b`,
    desc: `Revestimentos, pintura, instalações e entrega das chaves.`
}];
function v() {
    let[e,t] = (0,
    m.useState)(0);
    (0,
    m.useEffect)( () => {
        let e = setInterval( () => {
            t(e => e >= _.length ? 0 : e + 1)
        }
        , 1300);
        return () => clearInterval(e)
    }
    , []);
    let n = _[e - 1];
    return (0,
    h.jsxs)(`div`, {
        className: `w-full max-w-3xl mx-auto`,
        children: [(0,
        h.jsxs)(`div`, {
            className: `relative rounded-2xl border border-border/70 bg-card/40 p-4 sm:p-6`,
            children: [(0,
            h.jsxs)(`svg`, {
                viewBox: `0 0 460 320`,
                className: `w-full h-auto`,
                children: [(0,
                h.jsx)(`line`, {
                    x1: `20`,
                    y1: `280`,
                    x2: `440`,
                    y2: `280`,
                    stroke: `#334155`,
                    strokeWidth: `1.5`,
                    strokeDasharray: `4 4`
                }), e >= 1 && (0,
                h.jsxs)(u.g, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .5
                    },
                    children: [(0,
                    h.jsx)(`rect`, {
                        x: `120`,
                        y: `262`,
                        width: `220`,
                        height: `18`,
                        fill: `#1e293b`,
                        stroke: `#94a3b8`,
                        strokeWidth: `1.5`
                    }), (0,
                    h.jsx)(`line`, {
                        x1: `120`,
                        y1: `280`,
                        x2: `120`,
                        y2: `288`,
                        stroke: `#94a3b8`
                    }), (0,
                    h.jsx)(`line`, {
                        x1: `340`,
                        y1: `280`,
                        x2: `340`,
                        y2: `288`,
                        stroke: `#94a3b8`
                    })]
                }), e >= 2 && (0,
                h.jsxs)(u.g, {
                    initial: {
                        opacity: 0,
                        scaleY: 0
                    },
                    animate: {
                        opacity: 1,
                        scaleY: 1
                    },
                    style: {
                        originY: 262
                    },
                    transition: {
                        duration: .6
                    },
                    children: [(0,
                    h.jsx)(`rect`, {
                        x: `120`,
                        y: `180`,
                        width: `14`,
                        height: `82`,
                        fill: `#0f172a`,
                        stroke: `#cbd5e1`,
                        strokeWidth: `1.5`
                    }), (0,
                    h.jsx)(`rect`, {
                        x: `326`,
                        y: `180`,
                        width: `14`,
                        height: `82`,
                        fill: `#0f172a`,
                        stroke: `#cbd5e1`,
                        strokeWidth: `1.5`
                    }), (0,
                    h.jsx)(`rect`, {
                        x: `110`,
                        y: `174`,
                        width: `240`,
                        height: `8`,
                        fill: `#0f172a`,
                        stroke: `#cbd5e1`,
                        strokeWidth: `1.2`
                    }), (0,
                    h.jsx)(`rect`, {
                        x: `134`,
                        y: `190`,
                        width: `192`,
                        height: `72`,
                        fill: `#38bdf8`,
                        fillOpacity: `0.14`,
                        stroke: `#38bdf8`,
                        strokeWidth: `1.5`
                    }), (0,
                    h.jsx)(`line`, {
                        x1: `198`,
                        y1: `190`,
                        x2: `198`,
                        y2: `262`,
                        stroke: `#38bdf8`,
                        strokeWidth: `1`
                    }), (0,
                    h.jsx)(`line`, {
                        x1: `262`,
                        y1: `190`,
                        x2: `262`,
                        y2: `262`,
                        stroke: `#38bdf8`,
                        strokeWidth: `1`
                    }), (0,
                    h.jsx)(`line`, {
                        x1: `134`,
                        y1: `226`,
                        x2: `326`,
                        y2: `226`,
                        stroke: `#38bdf8`,
                        strokeWidth: `1`
                    }), (0,
                    h.jsx)(`rect`, {
                        x: `134`,
                        y: `244`,
                        width: `40`,
                        height: `18`,
                        fill: `#c69859`,
                        fillOpacity: `0.3`,
                        stroke: `#c69859`,
                        strokeWidth: `1`
                    })]
                }), e >= 3 && (0,
                h.jsxs)(u.g, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6
                    },
                    children: [(0,
                    h.jsx)(`rect`, {
                        x: `96`,
                        y: `138`,
                        width: `268`,
                        height: `12`,
                        fill: `#0f172a`,
                        stroke: `#c69859`,
                        strokeWidth: `1.5`
                    }), (0,
                    h.jsx)(`rect`, {
                        x: `96`,
                        y: `92`,
                        width: `268`,
                        height: `46`,
                        fill: `#c69859`,
                        fillOpacity: `0.18`,
                        stroke: `#c69859`,
                        strokeWidth: `1.5`
                    }), (0,
                    h.jsx)(`rect`, {
                        x: `106`,
                        y: `108`,
                        width: `248`,
                        height: `14`,
                        fill: `#38bdf8`,
                        fillOpacity: `0.2`,
                        stroke: `#38bdf8`,
                        strokeWidth: `1`
                    }), (0,
                    h.jsx)(`line`, {
                        x1: `170`,
                        y1: `108`,
                        x2: `170`,
                        y2: `122`,
                        stroke: `#38bdf8`,
                        strokeWidth: `0.8`
                    }), (0,
                    h.jsx)(`line`, {
                        x1: `230`,
                        y1: `108`,
                        x2: `230`,
                        y2: `122`,
                        stroke: `#38bdf8`,
                        strokeWidth: `0.8`
                    }), (0,
                    h.jsx)(`line`, {
                        x1: `290`,
                        y1: `108`,
                        x2: `290`,
                        y2: `122`,
                        stroke: `#38bdf8`,
                        strokeWidth: `0.8`
                    })]
                }), e >= 4 && (0,
                h.jsxs)(u.g, {
                    initial: {
                        opacity: 0,
                        y: -16
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6
                    },
                    children: [(0,
                    h.jsx)(`rect`, {
                        x: `90`,
                        y: `78`,
                        width: `280`,
                        height: `14`,
                        fill: `#0f172a`,
                        stroke: `#0ea5e9`,
                        strokeWidth: `1.5`
                    }), (0,
                    h.jsx)(`rect`, {
                        x: `90`,
                        y: `78`,
                        width: `280`,
                        height: `4`,
                        fill: `#0ea5e9`,
                        fillOpacity: `0.4`
                    }), (0,
                    h.jsx)(`rect`, {
                        x: `90`,
                        y: `74`,
                        width: `280`,
                        height: `4`,
                        fill: `#0ea5e9`,
                        fillOpacity: `0.5`
                    })]
                }), e >= 5 && (0,
                h.jsxs)(u.g, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .6
                    },
                    children: [(0,
                    h.jsx)(`rect`, {
                        x: `150`,
                        y: `294`,
                        width: `120`,
                        height: `14`,
                        rx: `2`,
                        fill: `#22c55e`,
                        fillOpacity: `0.15`,
                        stroke: `#22c55e`,
                        strokeWidth: `1`
                    }), (0,
                    h.jsx)(`rect`, {
                        x: `156`,
                        y: `298`,
                        width: `108`,
                        height: `6`,
                        fill: `#38bdf8`,
                        fillOpacity: `0.3`
                    }), (0,
                    h.jsx)(`line`, {
                        x1: `120`,
                        y1: `294`,
                        x2: `140`,
                        y2: `294`,
                        stroke: `#22c55e`,
                        strokeWidth: `1.5`
                    }), (0,
                    h.jsx)(`line`, {
                        x1: `280`,
                        y1: `294`,
                        x2: `300`,
                        y2: `294`,
                        stroke: `#22c55e`,
                        strokeWidth: `1.5`
                    }), (0,
                    h.jsx)(`circle`, {
                        cx: `80`,
                        cy: `288`,
                        r: `6`,
                        fill: `#22c55e`,
                        fillOpacity: `0.3`,
                        stroke: `#22c55e`,
                        strokeWidth: `1`
                    }), (0,
                    h.jsx)(`circle`, {
                        cx: `380`,
                        cy: `288`,
                        r: `6`,
                        fill: `#22c55e`,
                        fillOpacity: `0.3`,
                        stroke: `#22c55e`,
                        strokeWidth: `1`
                    })]
                }), e >= 6 && (0,
                h.jsxs)(u.g, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .6
                    },
                    children: [(0,
                    h.jsx)(`rect`, {
                        x: `134`,
                        y: `200`,
                        width: `60`,
                        height: `40`,
                        fill: `#f59e0b`,
                        fillOpacity: `0.15`
                    }), (0,
                    h.jsx)(`rect`, {
                        x: `220`,
                        y: `108`,
                        width: `60`,
                        height: `14`,
                        fill: `#f59e0b`,
                        fillOpacity: `0.15`
                    }), (0,
                    h.jsx)(`circle`, {
                        cx: `110`,
                        cy: `284`,
                        r: `2`,
                        fill: `#f59e0b`
                    }), (0,
                    h.jsx)(`circle`, {
                        cx: `350`,
                        cy: `284`,
                        r: `2`,
                        fill: `#f59e0b`
                    })]
                }), n && e > 0 && (0,
                h.jsx)(u.line, {
                    x1: `80`,
                    x2: `380`,
                    y1: `40`,
                    y2: `40`,
                    stroke: n.color,
                    strokeWidth: `1.5`,
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: [0, 1, 0]
                    },
                    transition: {
                        duration: 1
                    }
                })]
            }), (0,
            h.jsx)(`div`, {
                className: `mt-4 flex items-center gap-2`,
                children: _.map( (t, n) => (0,
                h.jsx)(`div`, {
                    className: `h-1.5 flex-1 rounded-full overflow-hidden bg-border`,
                    children: (0,
                    h.jsx)(u.div, {
                        className: `h-full bg-primary`,
                        initial: {
                            width: `0%`
                        },
                        animate: {
                            width: n < e ? `100%` : `0%`
                        },
                        transition: {
                            duration: .4
                        }
                    })
                }, t.n))
            })]
        }), (0,
        h.jsx)(`div`, {
            className: `mt-3 h-16 flex items-center justify-center px-2`,
            children: (0,
            h.jsx)(c, {
                mode: `wait`,
                children: n && (0,
                h.jsxs)(u.div, {
                    initial: {
                        opacity: 0,
                        y: 6
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -6
                    },
                    className: `text-center`,
                    children: [(0,
                    h.jsxs)(`p`, {
                        className: `text-sm`,
                        children: [(0,
                        h.jsx)(`span`, {
                            className: `font-display font-semibold text-primary`,
                            children: n.n
                        }), ` `, (0,
                        h.jsx)(`span`, {
                            className: `text-foreground/90 font-medium`,
                            children: n.label
                        })]
                    }), (0,
                    h.jsx)(`p`, {
                        className: `mt-1 text-xs text-muted-foreground max-w-md mx-auto leading-snug`,
                        children: n.desc
                    })]
                }, n.n)
            })
        })]
    })
}
var y = (0,
m.lazy)( () => d( () => import(`./mansion3D.js`), __vite__mapDeps([0, 1])))
  , b = [{
    id: `real`,
    label: `3D Real`,
    icon: r
}, {
    id: `camadas`,
    label: `Camadas`,
    icon: o
}, {
    id: `planta`,
    label: `Planta`,
    icon: s
}, {
    id: `montagem`,
    label: `Montagem`,
    icon: a
}]
  , x = [{
    n: `01`,
    label: `Fundação`,
    desc: `Radier/sapatas e infra — a base de tudo.`
}, {
    n: `02`,
    label: `Térreo`,
    desc: `Fachada envidraçada, acesso e pérgula.`
}, {
    n: `03`,
    label: `Pav. Superior`,
    desc: `Volume em balanço com madeira.`
}, {
    n: `04`,
    label: `Cobertura`,
    desc: `Laje plana, platibanda e impermeabilização.`
}, {
    n: `05`,
    label: `Paisagismo`,
    desc: `Piscina, deck, jardim e iluminação.`
}]
  , S = () => (0,
h.jsx)(`div`, {
    className: `absolute inset-0 flex items-center justify-center`,
    children: (0,
    h.jsx)(`div`, {
        className: `w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin`
    })
});
function C() {
    let[e,t] = (0,
    m.useState)(`real`)
      , [n,r] = (0,
    m.useState)(null);
    return (0,
    h.jsx)(`section`, {
        id: `estrutura`,
        className: `relative py-24 sm:py-32`,
        children: (0,
        h.jsxs)(`div`, {
            className: `mx-auto max-w-7xl px-5 sm:px-8`,
            children: [(0,
            h.jsxs)(f, {
                children: [(0,
                h.jsxs)(`div`, {
                    className: `flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary`,
                    children: [(0,
                    h.jsx)(o, {
                        size: 14
                    }), ` Anatomia de uma obra`]
                }), (0,
                h.jsx)(`h2`, {
                    className: `mt-3 font-display font-bold text-3xl sm:text-5xl tracking-tight max-w-3xl text-balance`,
                    children: `Uma edificação, quatro maneiras de enxergar.`
                }), (0,
                h.jsx)(`p`, {
                    className: `mt-4 max-w-2xl text-muted-foreground text-balance`,
                    children: `Alterne entre a visão realista, a explosão em camadas, a planta técnica e a montagem animada — tudo do mesmo projeto.`
                })]
            }), (0,
            h.jsx)(`div`, {
                className: `mt-8 flex flex-wrap justify-center gap-2`,
                children: b.map(n => (0,
                h.jsxs)(`button`, {
                    onClick: () => t(n.id),
                    className: `inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition ${e === n.id ? `bg-primary text-primary-foreground shadow-lg shadow-primary/25` : `border border-border text-muted-foreground hover:bg-secondary/60`}`,
                    children: [(0,
                    h.jsx)(n.icon, {
                        size: 16
                    }), ` `, n.label]
                }, n.id))
            }), (0,
            h.jsx)(`div`, {
                className: `mt-6 relative rounded-2xl border border-border/70 bg-card/20 overflow-hidden h-[62vh] min-h-[460px]`,
                children: (0,
                h.jsx)(c, {
                    mode: `wait`,
                    children: (0,
                    h.jsxs)(u.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: .25
                        },
                        className: `absolute inset-0`,
                        children: [e === `real` && (0,
                        h.jsx)(m.Suspense, {
                            fallback: (0,
                            h.jsx)(S, {}),
                            children: (0,
                            h.jsx)(y, {
                                exploded: !1
                            })
                        }), e === `camadas` && (0,
                        h.jsx)(m.Suspense, {
                            fallback: (0,
                            h.jsx)(S, {}),
                            children: (0,
                            h.jsx)(y, {
                                exploded: !0,
                                activeLayer: n
                            })
                        }), (e === `planta` || e === `montagem`) && (0,
                        h.jsx)(`div`, {
                            className: `absolute inset-0 flex items-center justify-center p-4 sm:p-8 overflow-auto`,
                            children: e === `planta` ? (0,
                            h.jsx)(g, {}) : (0,
                            h.jsx)(v, {})
                        }), e === `camadas` && (0,
                        h.jsxs)(`div`, {
                            className: `absolute left-3 top-3 sm:left-4 sm:top-4 w-[200px] sm:w-[224px] rounded-xl border border-border/60 glass p-3.5 text-xs`,
                            children: [(0,
                            h.jsx)(`p`, {
                                className: `font-mono uppercase tracking-[0.18em] text-foreground/50 text-[10px]`,
                                children: `Camadas · clique para destacar`
                            }), (0,
                            h.jsx)(`ul`, {
                                className: `mt-2.5 space-y-1`,
                                children: x.map( (e, t) => (0,
                                h.jsx)(`li`, {
                                    children: (0,
                                    h.jsxs)(`button`, {
                                        onClick: () => r(n === t ? null : t),
                                        className: `w-full flex items-start gap-2.5 rounded-lg p-1.5 text-left transition ${n === t ? `bg-primary/15 ring-1 ring-primary/40` : `hover:bg-secondary/40`}`,
                                        children: [(0,
                                        h.jsx)(`span`, {
                                            className: `mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[10px] font-mono transition ${n === t ? `bg-primary text-primary-foreground` : `bg-primary/15 text-primary`}`,
                                            children: e.n
                                        }), (0,
                                        h.jsxs)(`span`, {
                                            children: [(0,
                                            h.jsx)(`span`, {
                                                className: `block font-medium text-foreground/90 leading-tight`,
                                                children: e.label
                                            }), (0,
                                            h.jsx)(`span`, {
                                                className: `block text-foreground/55 leading-snug mt-0.5`,
                                                children: e.desc
                                            })]
                                        })]
                                    })
                                }, e.n))
                            })]
                        })]
                    }, e)
                })
            }), (0,
            h.jsxs)(`div`, {
                className: `mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs`,
                children: [(0,
                h.jsxs)(`div`, {
                    className: `flex flex-wrap items-center gap-x-5 gap-y-1.5 font-mono uppercase tracking-wider text-foreground/60`,
                    children: [(0,
                    h.jsx)(`span`, {
                        className: `text-primary`,
                        children: `Residência alto padrão`
                    }), (0,
                    h.jsx)(`span`, {
                        children: `2 pavimentos`
                    }), (0,
                    h.jsx)(`span`, {
                        children: `Fachada envidraçada`
                    }), (0,
                    h.jsx)(`span`, {
                        children: `Balanço em madeira`
                    }), (0,
                    h.jsx)(`span`, {
                        children: `Concreto armado`
                    })]
                }), (0,
                h.jsxs)(`p`, {
                    className: `flex items-center gap-1.5 text-muted-foreground`,
                    children: [(0,
                    h.jsx)(p, {
                        size: 13,
                        className: `text-primary`
                    }), e === `real` || e === `camadas` ? `Arraste para girar · role para aproximar` : `Visualização técnica 2D`]
                })]
            })]
        })
    })
}
function w() {
    return (0,
    h.jsx)(C, {})
}
export {w as default};
