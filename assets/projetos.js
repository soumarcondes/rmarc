const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/servicemap.js", "../jsx-runtime.js", "assets/map-pin.js", "../index.js", "../style.css", "assets/reveal.js", "assets/servicemap.css"]))) => i.map(i => d[i]);
import {n as e, s as t, t as n} from "../jsx-runtime.js";
import {i as r, n as i, r as a} from "./projects.js";
import {t as o} from "./hammer.js";
import {t as s} from "./layers.js";
import {t as c} from "./map-pin.js";
import {t as l} from "./ruler.js";
import {i as u, n as d, s as f, t as p} from "../index.js";
import {t as m} from "./reveal.js";
import {t as h} from "./image.js";
var g = t(e(), 1)
  , _ = n();
function v() {
    let[e,t] = (0,
    g.useState)(null)
      , [n,...p] = i;
    return (0,
    g.useEffect)( () => {
        if (e)
            return document.body.style.overflow = `hidden`,
            () => {
                document.body.style.overflow = ``
            }
    }
    , [e]),
    (0,
    _.jsxs)(`section`, {
        id: `projetos`,
        className: `relative py-24 sm:py-32`,
        children: [(0,
        _.jsxs)(`div`, {
            className: `mx-auto max-w-7xl px-5 sm:px-8`,
            children: [(0,
            _.jsxs)(m, {
                children: [(0,
                _.jsxs)(`div`, {
                    className: `flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary`,
                    children: [(0,
                    _.jsx)(o, {
                        size: 14
                    }), ` Portfólio de obras`]
                }), (0,
                _.jsx)(`h2`, {
                    className: `mt-3 font-display font-bold text-3xl sm:text-5xl tracking-tight max-w-3xl text-balance`,
                    children: `Obras reais. Resultado que se mede.`
                }), (0,
                _.jsx)(`p`, {
                    className: `mt-4 max-w-2xl text-muted-foreground text-balance`,
                    children: `Galeria de obras com participação técnica — residenciais, comerciais e verticais em Curitiba e região. Clique para ver detalhes.`
                })]
            }), (0,
            _.jsx)(m, {
                delay: .05,
                children: (0,
                _.jsxs)(`button`, {
                    onClick: () => t(n),
                    className: `group mt-12 grid lg:grid-cols-2 gap-6 text-left w-full`,
                    children: [(0,
                    _.jsxs)(`div`, {
                        className: `relative aspect-[16/10] overflow-hidden rounded-2xl border border-border/70`,
                        children: [(0,
                        _.jsx)(h, {
                            src: n.img,
                            alt: n.name,
                            fittingType: `fill`,
                            className: `h-full w-full transition-transform duration-700 group-hover:scale-105`
                        }), (0,
                        _.jsx)(`div`, {
                            className: `absolute inset-0 bg-gradient-to-t from-background/70 to-transparent`
                        }), (0,
                        _.jsx)(`span`, {
                            className: `absolute top-3 left-3 rounded-full glass border border-border/60 px-2.5 py-1 text-[11px] font-medium`,
                            children: `Destaque`
                        })]
                    }), (0,
                    _.jsxs)(`div`, {
                        className: `flex flex-col justify-center`,
                        children: [(0,
                        _.jsx)(`span`, {
                            className: `text-xs uppercase tracking-wider text-primary`,
                            children: n.type
                        }), (0,
                        _.jsx)(`h3`, {
                            className: `mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight`,
                            children: n.name
                        }), (0,
                        _.jsxs)(`p`, {
                            className: `mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground`,
                            children: [(0,
                            _.jsx)(c, {
                                size: 13,
                                className: `text-primary`
                            }), n.loc]
                        }), (0,
                        _.jsx)(`p`, {
                            className: `mt-4 text-muted-foreground leading-relaxed`,
                            children: n.desc
                        }), (0,
                        _.jsx)(`div`, {
                            className: `mt-4 flex flex-wrap gap-2`,
                            children: n.tags.map(e => (0,
                            _.jsx)(`span`, {
                                className: `rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-xs text-muted-foreground`,
                                children: e
                            }, e))
                        }), (0,
                        _.jsxs)(`p`, {
                            className: `mt-5 text-[11px] uppercase tracking-wider text-primary/80`,
                            children: [n.role, ` · Rafael S. Marcondes`]
                        })]
                    })]
                })
            }), (0,
            _.jsx)(`div`, {
                className: `mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5`,
                children: p.map( (e, n) => (0,
                _.jsx)(m, {
                    delay: n % 3 * .06,
                    children: (0,
                    _.jsxs)(`button`, {
                        onClick: () => t(e),
                        className: `group h-full w-full text-left overflow-hidden rounded-2xl border border-border/70 bg-card/40 transition-all hover:border-primary/50 hover:-translate-y-1`,
                        children: [(0,
                        _.jsxs)(`div`, {
                            className: `relative aspect-[4/3] overflow-hidden`,
                            children: [(0,
                            _.jsx)(h, {
                                src: e.img,
                                alt: e.name,
                                fittingType: `fill`,
                                className: `h-full w-full transition-transform duration-700 group-hover:scale-105`
                            }), (0,
                            _.jsx)(`div`, {
                                className: `absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent`
                            }), (0,
                            _.jsx)(`span`, {
                                className: `absolute top-3 left-3 rounded-full glass border border-border/60 px-2.5 py-1 text-[11px] font-medium text-foreground/90`,
                                children: e.type
                            }), (0,
                            _.jsx)(r, {
                                size: 18,
                                className: `absolute top-3 right-3 text-foreground/70 opacity-0 group-hover:opacity-100 transition`
                            })]
                        }), (0,
                        _.jsxs)(`div`, {
                            className: `p-5`,
                            children: [(0,
                            _.jsx)(`h3`, {
                                className: `font-display text-lg font-semibold leading-tight`,
                                children: e.name
                            }), (0,
                            _.jsxs)(`p`, {
                                className: `mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground`,
                                children: [(0,
                                _.jsx)(c, {
                                    size: 12,
                                    className: `text-primary`
                                }), e.loc]
                            }), (0,
                            _.jsx)(`p`, {
                                className: `mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2`,
                                children: e.desc
                            }), (0,
                            _.jsxs)(`p`, {
                                className: `mt-3 text-[11px] uppercase tracking-wider text-primary/80`,
                                children: [e.role, ` · Rafael S. Marcondes`]
                            })]
                        })]
                    })
                }, e.name))
            }), (0,
            _.jsx)(m, {
                delay: .1,
                children: (0,
                _.jsxs)(`div`, {
                    className: `mt-14 rounded-2xl border border-border/70 bg-card/30 p-6 sm:p-8`,
                    children: [(0,
                    _.jsxs)(`div`, {
                        className: `flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary`,
                        children: [(0,
                        _.jsx)(s, {
                            size: 14
                        }), ` Outras obras com participação técnica`]
                    }), (0,
                    _.jsx)(`p`, {
                        className: `mt-3 text-sm text-muted-foreground`,
                        children: `O histórico inclui séries de empreendimentos em Curitiba e região, executados com o mesmo rigor técnico.`
                    }), (0,
                    _.jsx)(`div`, {
                        className: `mt-5 flex flex-wrap gap-2`,
                        children: a.map(e => (0,
                        _.jsxs)(`span`, {
                            className: `inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-3.5 py-1.5 text-sm text-muted-foreground`,
                            children: [(0,
                            _.jsx)(c, {
                                size: 12,
                                className: `text-primary`
                            }), e]
                        }, e))
                    })]
                })
            })]
        }), (0,
        _.jsx)(u, {
            children: e && (0,
            _.jsx)(d.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                className: `fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8 bg-background/80 backdrop-blur`,
                onClick: () => t(null),
                children: (0,
                _.jsxs)(d.div, {
                    initial: {
                        opacity: 0,
                        scale: .96,
                        y: 12
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: .96,
                        y: 12
                    },
                    transition: {
                        duration: .25
                    },
                    className: `relative w-full max-w-4xl max-h-[88vh] overflow-auto rounded-2xl border border-border bg-card`,
                    onClick: e => e.stopPropagation(),
                    children: [(0,
                    _.jsx)(`button`, {
                        onClick: () => t(null),
                        className: `absolute top-3 right-3 z-10 rounded-full glass border border-border/60 p-2 hover:bg-secondary`,
                        "aria-label": `Fechar`,
                        children: (0,
                        _.jsx)(f, {
                            size: 18
                        })
                    }), (0,
                    _.jsxs)(`div`, {
                        className: `relative aspect-[16/9]`,
                        children: [(0,
                        _.jsx)(h, {
                            src: e.img,
                            alt: e.name,
                            fittingType: `fill`,
                            className: `h-full w-full`
                        }), (0,
                        _.jsx)(`div`, {
                            className: `absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent`
                        })]
                    }), (0,
                    _.jsxs)(`div`, {
                        className: `p-6 sm:p-8`,
                        children: [(0,
                        _.jsx)(`span`, {
                            className: `text-xs uppercase tracking-wider text-primary`,
                            children: e.type
                        }), (0,
                        _.jsx)(`h3`, {
                            className: `mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight`,
                            children: e.name
                        }), (0,
                        _.jsxs)(`p`, {
                            className: `mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground`,
                            children: [(0,
                            _.jsx)(c, {
                                size: 13,
                                className: `text-primary`
                            }), e.loc]
                        }), (0,
                        _.jsx)(`p`, {
                            className: `mt-4 text-muted-foreground leading-relaxed`,
                            children: e.desc
                        }), (0,
                        _.jsx)(`div`, {
                            className: `mt-5 flex flex-wrap gap-2`,
                            children: e.tags.map(e => (0,
                            _.jsx)(`span`, {
                                className: `rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-xs text-muted-foreground`,
                                children: e
                            }, e))
                        }), (0,
                        _.jsxs)(`div`, {
                            className: `mt-6 flex items-center gap-2 text-xs text-muted-foreground`,
                            children: [(0,
                            _.jsx)(l, {
                                size: 14,
                                className: `text-primary`
                            }), ` `, e.role, ` · Rafael S. Marcondes · CREA-PR PR-2023-01428`]
                        })]
                    })]
                })
            })
        })]
    })
}
var y = (0,
g.lazy)( () => p( () => import(`./servicemap.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])))
  , b = () => (0,
_.jsx)(`div`, {
    className: `h-[460px] flex items-center justify-center`,
    children: (0,
    _.jsx)(`div`, {
        className: `w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin`
    })
});
function x() {
    return (0,
    _.jsxs)(_.Fragment, {
        children: [(0,
        _.jsx)(v, {}), (0,
        _.jsx)(g.Suspense, {
            fallback: (0,
            _.jsx)(b, {}),
            children: (0,
            _.jsx)(y, {})
        })]
    })
}
export {x as default};
