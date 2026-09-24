import {n as e, s as t, t as n} from "../jsx-runtime.js";
import {i as r, n as i, t as a} from "./projects.js";
import {t as o} from "./box.js";
import {t as s} from "./building.js";
import {t as c} from "./hammer.js";
import {t as l} from "./map-pin.js";
import {t as u} from "./phone.js";
import {a as d, l as f, n as p, r as m} from "../index.js";
import {t as h} from "./reveal.js";
import {t as g} from "./image.js";
var _ = f(`ArrowDown`, [[`path`, {
    d: `M12 5v14`,
    key: `s699le`
}], [`path`, {
    d: `m19 12-7 7-7-7`,
    key: `1idqje`
}]])
  , v = f(`ArrowRight`, [[`path`, {
    d: `M5 12h14`,
    key: `1ays0h`
}], [`path`, {
    d: `m12 5 7 7-7 7`,
    key: `xquz4c`
}]])
  , y = {
    some: 0,
    all: 1
};
function b(e, t, {root: n, margin: r, amount: i=`some`}={}) {
    let a = m(e)
      , o = new WeakMap
      , s = new IntersectionObserver(e => {
        e.forEach(e => {
            let n = o.get(e.target);
            if (e.isIntersecting !== !!n)
                if (e.isIntersecting) {
                    let n = t(e);
                    typeof n == `function` ? o.set(e.target, n) : s.unobserve(e.target)
                } else
                    typeof n == `function` && (n(e),
                    o.delete(e.target))
        }
        )
    }
    ,{
        root: n,
        rootMargin: r,
        threshold: typeof i == `number` ? i : y[i]
    });
    return a.forEach(e => s.observe(e)),
    () => s.disconnect()
}
var x = t(e(), 1);
function S(e, {root: t, margin: n, amount: r, once: i=!1}={}) {
    let[a,o] = (0,
    x.useState)(!1);
    return (0,
    x.useEffect)( () => {
        if (!e.current || i && a)
            return;
        let s = () => (o(!0),
        i ? void 0 : () => o(!1))
          , c = {
            root: t && t.current || void 0,
            margin: n,
            amount: r
        };
        return b(e.current, s, c)
    }
    , [t, e, n, i, r]),
    a
}
var C = n()
  , w = `https://media.base44.com/images/public/6aa2b4e48a6d301320179bea/83ff6d964_Semttulo.png`;
function T() {
    return (0,
    C.jsxs)(`section`, {
        id: `inicio`,
        className: `relative min-h-screen overflow-hidden bg-background`,
        children: [(0,
        C.jsxs)(`div`, {
            className: `absolute inset-0`,
            children: [(0,
            C.jsx)(g, {
                src: w,
                alt: `Residência alto padrão ao pôr do sol`,
                fittingType: `fill`,
                className: `h-full w-full`
            }), (0,
            C.jsx)(`div`, {
                className: `absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/35`
            }), (0,
            C.jsx)(`div`, {
                className: `absolute inset-0 bg-background/25`
            }), (0,
            C.jsx)(`div`, {
                className: `absolute inset-0 blueprint-grid opacity-40`
            })]
        }), (0,
        C.jsx)(`div`, {
            className: `absolute top-20 left-5 sm:left-8 z-10 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/55 leading-relaxed`,
            children: (0,
            C.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [(0,
                C.jsx)(`span`, {
                    className: `h-2 w-2 border border-foreground/50`
                }), `Portfólio · Rafael Souza Marcondes`]
            })
        }), (0,
        C.jsxs)(`div`, {
            className: `relative z-10 mx-auto max-w-7xl px-5 sm:px-8 w-full min-h-screen flex flex-col justify-center pt-28 pb-28`,
            children: [(0,
            C.jsxs)(p.div, {
                initial: {
                    opacity: 0,
                    y: 18
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .7,
                    delay: .1
                },
                className: `inline-flex self-start items-center gap-2 rounded-full border border-border bg-secondary/50 backdrop-blur px-3.5 py-1.5 text-xs text-muted-foreground`,
                children: [(0,
                C.jsxs)(`span`, {
                    className: `relative flex h-2 w-2`,
                    children: [(0,
                    C.jsx)(`span`, {
                        className: `absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping`
                    }), (0,
                    C.jsx)(`span`, {
                        className: `relative inline-flex h-2 w-2 rounded-full bg-primary`
                    })]
                }), `Disponível para novos projetos · 2026`]
            }), (0,
            C.jsxs)(p.h1, {
                initial: {
                    opacity: 0,
                    y: 26
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .85,
                    delay: .2
                },
                className: `mt-6 font-display font-bold tracking-[-0.02em] text-[clamp(2.8rem,8vw,6.5rem)] leading-[0.92] text-balance`,
                children: [`Construo com`, (0,
                C.jsx)(`br`, {}), (0,
                C.jsx)(`span`, {
                    className: `gradient-text`,
                    children: `precisão`
                }), ` o que`, (0,
                C.jsx)(`br`, {}), `outros só desenham.`]
            }), (0,
            C.jsx)(p.p, {
                initial: {
                    opacity: 0,
                    y: 22
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8,
                    delay: .35
                },
                className: `mt-7 max-w-xl text-lg text-foreground/75 leading-relaxed text-balance`,
                children: `Engenheiro civil dedicado ao ciclo completo de uma obra — da fundação ao acabamento. Transformo cálculo, gestão e detalhe em estruturas que duram e encantam.`
            }), (0,
            C.jsxs)(p.div, {
                initial: {
                    opacity: 0,
                    y: 22
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8,
                    delay: .5
                },
                className: `mt-9 flex flex-wrap items-center gap-4`,
                children: [(0,
                C.jsxs)(d, {
                    to: `/projetos.html`,
                    className: `group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-medium text-primary-foreground hover:brightness-110 transition shadow-lg shadow-primary/30`,
                    children: [`Ver projetos`, (0,
                    C.jsx)(_, {
                        size: 18,
                        className: `group-hover:translate-y-0.5 transition-transform`
                    })]
                }), (0,
                C.jsx)(d, {
                    to: `/estrutura.html`,
                    className: `inline-flex items-center gap-2 rounded-lg border border-foreground/25 bg-background/30 backdrop-blur px-6 py-3.5 font-medium hover:bg-secondary/60 transition`,
                    children: `Explorar a estrutura`
                })]
            }), (0,
            C.jsxs)(p.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: .8,
                    delay: .7
                },
                className: `mt-12 flex flex-wrap gap-8 text-sm`,
                children: [(0,
                C.jsxs)(`div`, {
                    className: `flex items-center gap-2.5 text-foreground/70`,
                    children: [(0,
                    C.jsx)(l, {
                        size: 16,
                        className: `text-primary`
                    }), ` Curitiba, PR`]
                }), (0,
                C.jsxs)(`div`, {
                    className: `flex items-center gap-2.5 text-foreground/70`,
                    children: [(0,
                    C.jsx)(s, {
                        size: 16,
                        className: `text-primary`
                    }), ` Residencial · Comercial · Industrial`]
                })]
            })]
        }), (0,
        C.jsx)(`div`, {
            className: `absolute bottom-0 inset-x-0 z-10 border-t border-foreground/15 bg-background/50 backdrop-blur`,
            children: (0,
            C.jsxs)(`div`, {
                className: `mx-auto max-w-7xl px-5 sm:px-8 py-3 flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/55`,
                children: [(0,
                C.jsx)(`span`, {
                    children: `Rafael Souza Marcondes`
                }), (0,
                C.jsx)(`span`, {
                    className: `hidden sm:block`,
                    children: `Eng. Civil · CREA-PR PR-2023-01428`
                }), (0,
                C.jsx)(`span`, {
                    children: `RMARC Engenharia Ltda`
                })]
            })
        })]
    })
}
var E = [{
    to: 3,
    suffix: `+`,
    label: `Anos de registro ativo`
}, {
    to: 9,
    suffix: ``,
    label: `Obras como responsável técnico`
}, {
    to: 30,
    suffix: ` km`,
    label: `Raio de atuação`
}, {
    to: 100,
    suffix: `%`,
    label: `Compromisso com o prazo`
}];
function D({to: e, duration: t=1600}) {
    let n = (0,
    x.useRef)(null)
      , r = S(n, {
        once: !0,
        margin: `-60px`
    })
      , [i,a] = (0,
    x.useState)(0);
    return (0,
    x.useEffect)( () => {
        if (!r)
            return;
        let n, i = performance.now(), o = r => {
            let s = Math.min(1, (r - i) / t)
              , c = 1 - (1 - s) ** 3;
            a(Math.round(e * c)),
            s < 1 && (n = requestAnimationFrame(o))
        }
        ;
        return n = requestAnimationFrame(o),
        () => cancelAnimationFrame(n)
    }
    , [r, e, t]),
    (0,
    C.jsx)(`span`, {
        ref: n,
        children: i
    })
}
function O() {
    return (0,
    C.jsx)(`section`, {
        className: `relative border-y border-border/60 bg-card/40`,
        children: (0,
        C.jsx)(`div`, {
            className: `mx-auto max-w-7xl px-5 sm:px-8 py-12`,
            children: (0,
            C.jsx)(h, {
                children: (0,
                C.jsx)(`div`, {
                    className: `grid grid-cols-2 lg:grid-cols-4 gap-8`,
                    children: E.map(e => (0,
                    C.jsxs)(`div`, {
                        className: `text-center sm:text-left`,
                        children: [(0,
                        C.jsxs)(`p`, {
                            className: `font-display text-4xl sm:text-5xl font-bold gradient-text leading-none`,
                            children: [(0,
                            C.jsx)(D, {
                                to: e.to
                            }), e.suffix]
                        }), (0,
                        C.jsx)(`p`, {
                            className: `mt-2 text-xs sm:text-sm text-muted-foreground uppercase tracking-wider`,
                            children: e.label
                        })]
                    }, e.label))
                })
            })
        })
    })
}
function k() {
    return (0,
    C.jsx)(`section`, {
        className: `relative py-24 sm:py-32`,
        children: (0,
        C.jsxs)(`div`, {
            className: `mx-auto max-w-7xl px-5 sm:px-8`,
            children: [(0,
            C.jsxs)(h, {
                children: [(0,
                C.jsxs)(`div`, {
                    className: `flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary`,
                    children: [(0,
                    C.jsx)(c, {
                        size: 14
                    }), ` Projetos e obras com participação técnica`]
                }), (0,
                C.jsxs)(`div`, {
                    className: `flex items-end justify-between gap-4 flex-wrap`,
                    children: [(0,
                    C.jsx)(`h2`, {
                        className: `mt-3 font-display font-bold text-3xl sm:text-5xl tracking-tight max-w-2xl text-balance`,
                        children: `Projetos que saíram do papel.`
                    }), (0,
                    C.jsxs)(d, {
                        to: `/projetos.html`,
                        className: `inline-flex items-center gap-1.5 text-sm text-primary hover:underline whitespace-nowrap`,
                        children: [`Ver todos `, (0,
                        C.jsx)(r, {
                            size: 16
                        })]
                    })]
                })]
            }), (0,
            C.jsx)(`div`, {
                className: `mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5`,
                children: i.slice(0, 3).map( (e, t) => (0,
                C.jsx)(h, {
                    delay: t % 3 * .06,
                    children: (0,
                    C.jsxs)(`article`, {
                        className: `group h-full overflow-hidden rounded-2xl border border-border/70 bg-card/40 transition-all hover:border-primary/50 hover:-translate-y-1`,
                        children: [(0,
                        C.jsxs)(`div`, {
                            className: `relative aspect-[4/3] overflow-hidden`,
                            children: [(0,
                            C.jsx)(g, {
                                src: e.img,
                                alt: e.name,
                                fittingType: `fill`,
                                className: `h-full w-full transition-transform duration-700 group-hover:scale-105`
                            }), (0,
                            C.jsx)(`div`, {
                                className: `absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent`
                            }), (0,
                            C.jsx)(`span`, {
                                className: `absolute top-3 left-3 rounded-full glass border border-border/60 px-2.5 py-1 text-[11px] font-medium text-foreground/90`,
                                children: e.type
                            })]
                        }), (0,
                        C.jsxs)(`div`, {
                            className: `p-5`,
                            children: [(0,
                            C.jsx)(`h3`, {
                                className: `font-display text-lg font-semibold leading-tight`,
                                children: e.name
                            }), (0,
                            C.jsxs)(`p`, {
                                className: `mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground`,
                                children: [(0,
                                C.jsx)(l, {
                                    size: 12,
                                    className: `text-primary`
                                }), e.loc]
                            }), (0,
                            C.jsx)(`p`, {
                                className: `mt-3 text-sm text-muted-foreground leading-relaxed`,
                                children: e.desc
                            }), (0,
                            C.jsxs)(`p`, {
                                className: `mt-3 text-[11px] uppercase tracking-wider text-primary/80`,
                                children: [e.role, ` · RMARC Engenharia`]
                            })]
                        })]
                    })
                }, e.name))
            })]
        })
    })
}
function A() {
    return (0,
    C.jsx)(`section`, {
        className: `relative py-24 sm:py-32 border-y border-border/50 bg-card/30`,
        children: (0,
        C.jsxs)(`div`, {
            className: `mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10 items-center`,
            children: [(0,
            C.jsxs)(h, {
                children: [(0,
                C.jsxs)(`div`, {
                    className: `flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary`,
                    children: [(0,
                    C.jsx)(o, {
                        size: 14
                    }), ` Anatomia de uma obra`]
                }), (0,
                C.jsx)(`h2`, {
                    className: `mt-3 font-display font-bold text-3xl sm:text-5xl tracking-tight text-balance`,
                    children: `Uma edificação, quatro maneiras de enxergar.`
                }), (0,
                C.jsx)(`p`, {
                    className: `mt-4 max-w-xl text-muted-foreground text-balance`,
                    children: `Alterne entre a visão realista, a explosão em camadas, a planta técnica e a montagem animada — tudo do mesmo projeto.`
                }), (0,
                C.jsxs)(d, {
                    to: `/estrutura.html`,
                    className: `mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-medium text-primary-foreground hover:brightness-110 transition shadow-lg shadow-primary/20`,
                    children: [`Explorar a estrutura `, (0,
                    C.jsx)(v, {
                        size: 18
                    })]
                })]
            }), (0,
            C.jsx)(h, {
                delay: .1,
                children: (0,
                C.jsxs)(`div`, {
                    className: `relative aspect-[4/3] rounded-2xl border border-border/70 overflow-hidden`,
                    children: [(0,
                    C.jsx)(g, {
                        src: a.mansion,
                        alt: `Visualização 3D do projeto`,
                        fittingType: `fill`,
                        className: `h-full w-full`
                    }), (0,
                    C.jsx)(`div`, {
                        className: `absolute inset-0 bg-gradient-to-t from-background/70 to-transparent`
                    }), (0,
                    C.jsx)(`div`, {
                        className: `absolute bottom-4 left-4 right-4 flex flex-wrap gap-2`,
                        children: [`3D Real`, `Camadas`, `Planta`, `Montagem`].map(e => (0,
                        C.jsx)(`span`, {
                            className: `rounded-full glass border border-border/60 px-3 py-1 text-[11px] font-medium`,
                            children: e
                        }, e))
                    })]
                })
            })]
        })
    })
}
function j() {
    return (0,
    C.jsx)(`section`, {
        className: `relative py-24 sm:py-32`,
        children: (0,
        C.jsx)(`div`, {
            className: `mx-auto max-w-5xl px-5 sm:px-8`,
            children: (0,
            C.jsx)(h, {
                children: (0,
                C.jsxs)(`div`, {
                    className: `relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-primary/15 to-accent/10 p-10 sm:p-14 text-center`,
                    children: [(0,
                    C.jsx)(`h2`, {
                        className: `font-display font-bold text-3xl sm:text-4xl tracking-tight text-balance`,
                        children: `Vamos construir o seu próximo projeto?`
                    }), (0,
                    C.jsx)(`p`, {
                        className: `mt-4 max-w-xl mx-auto text-muted-foreground text-balance`,
                        children: `Atendimento autônomo pela RMARC Engenharia Ltda, em Curitiba e Região Metropolitana. Conte sua ideia — o resto a gente planeja junto.`
                    }), (0,
                    C.jsxs)(d, {
                        to: `/contato.html`,
                        className: `mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-medium text-primary-foreground hover:brightness-110 transition shadow-lg shadow-primary/20`,
                        children: [(0,
                        C.jsx)(u, {
                            size: 18
                        }), ` Falar com Rafael`]
                    })]
                })
            })
        })
    })
}
function M() {
    return (0,
    C.jsxs)(C.Fragment, {
        children: [(0,
        C.jsx)(T, {}), (0,
        C.jsx)(O, {}), (0,
        C.jsx)(A, {}), (0,
        C.jsx)(k, {}), (0,
        C.jsx)(j, {})]
    })
}
export {M as default};
