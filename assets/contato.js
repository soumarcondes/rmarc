import {n as e, s as t, t as n} from "../jsx-runtime.js";
import {t as r} from "./building.js";
import {t as i} from "./map-pin.js";
import {t as a} from "./phone.js";
import {t as o} from "./ruler.js";
import {t as s} from "./user.js";
import {c, l} from "../index.js";
import {t as u} from "./reveal.js";
var d = l(`Instagram`, [[`rect`, {
    width: `20`,
    height: `20`,
    x: `2`,
    y: `2`,
    rx: `5`,
    ry: `5`,
    key: `2e1cvw`
}], [`path`, {
    d: `M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z`,
    key: `9exkf1`
}], [`line`, {
    x1: `17.5`,
    x2: `17.51`,
    y1: `6.5`,
    y2: `6.5`,
    key: `r4j83e`
}]])
  , f = l(`Mail`, [[`rect`, {
    width: `20`,
    height: `16`,
    x: `2`,
    y: `4`,
    rx: `2`,
    key: `18n3k1`
}], [`path`, {
    d: `m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7`,
    key: `1ocrg3`
}]])
  , p = l(`Send`, [[`path`, {
    d: `M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,
    key: `1ffxy3`
}], [`path`, {
    d: `m21.854 2.147-10.94 10.939`,
    key: `12cjpa`
}]])
  , m = n();
function h() {
    return (0,
    m.jsxs)(`section`, {
        id: `contato`,
        className: `relative py-24 sm:py-32 overflow-hidden`,
        children: [(0,
        m.jsx)(`div`, {
            className: `pointer-events-none absolute inset-0`,
            children: (0,
            m.jsx)(`div`, {
                className: `absolute top-1/3 left-1/4 h-80 w-80 rounded-full bg-primary/15 blur-[120px]`
            })
        }), (0,
        m.jsxs)(`div`, {
            className: `relative mx-auto max-w-7xl px-5 sm:px-8`,
            children: [(0,
            m.jsxs)(u, {
                children: [(0,
                m.jsxs)(`div`, {
                    className: `flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary`,
                    children: [(0,
                    m.jsx)(f, {
                        size: 14
                    }), `Contato`]
                }), (0,
                m.jsx)(`h2`, {
                    className: `mt-3 font-display font-bold text-3xl sm:text-5xl tracking-tight max-w-3xl text-balance`,
                    children: `Vamos construir o seu próximo projeto?`
                }), (0,
                m.jsx)(`p`, {
                    className: `mt-4 max-w-xl text-muted-foreground text-balance`,
                    children: `Atendimento autônomo pela RMARC Engenharia Ltda, em Curitiba e Região Metropolitana. Conte sua ideia — o resto a gente planeja junto.`
                })]
            }), (0,
            m.jsx)(u, {
                delay: .1,
                children: (0,
                m.jsxs)(`div`, {
                    className: `mt-9 flex flex-wrap gap-3`,
                    children: [(0,
                    m.jsxs)(`a`, {
                        href: `https://wa.me/5541997484460`,
                        target: `_blank`,
                        rel: `noreferrer`,
                        className: `inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-medium text-primary-foreground hover:brightness-110 transition shadow-lg shadow-primary/20`,
                        children: [(0,
                        m.jsx)(a, {
                            size: 18
                        }), `WhatsApp`]
                    }), (0,
                    m.jsxs)(`a`, {
                        href: `https://br.linkedin.com/in/rafael-marcondes-55a34b1bb`,
                        target: `_blank`,
                        rel: `noreferrer`,
                        className: `inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3.5 font-medium hover:bg-secondary/60 transition`,
                        children: [(0,
                        m.jsx)(c, {
                            size: 18
                        }), `LinkedIn`]
                    })]
                })
            }), (0,
            m.jsx)(`div`, {
                className: `mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4`,
                children: [{
                    icon: i,
                    label: `Atuação`,
                    value: `Curitiba e Região Metropolitana`
                }, {
                    icon: r,
                    label: `Empresa`,
                    value: `RMARC Engenharia Ltda · Pinhais/PR`
                }, {
                    icon: c,
                    label: `LinkedIn`,
                    value: `/in/rafael-marcondes-55a34b1bb`
                }, {
                    icon: d,
                    label: `Instagram`,
                    value: `@__rafa.souza`
                }].map( (e, t) => (0,
                m.jsx)(u, {
                    delay: t * .06,
                    children: (0,
                    m.jsxs)(`div`, {
                        className: `h-full rounded-2xl border border-border/70 bg-card/40 p-5`,
                        children: [(0,
                        m.jsx)(`div`, {
                            className: `flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary`,
                            children: (0,
                            m.jsx)(e.icon, {
                                size: 18
                            })
                        }), (0,
                        m.jsx)(`p`, {
                            className: `mt-4 text-xs uppercase tracking-wider text-muted-foreground`,
                            children: e.label
                        }), (0,
                        m.jsx)(`p`, {
                            className: `mt-1 font-medium break-words`,
                            children: e.value
                        })]
                    })
                }, e.label))
            })]
        })]
    })
}
var g = t(e(), 1)
  , _ = [`Residencial`, `Comercial`, `Industrial`, `Reforma`, `Outro`]
  , v = `5541997484460`;
function y() {
    let[e,t] = (0,
    g.useState)({
        nome: ``,
        telefone: ``,
        tipo: _[0],
        area: ``,
        mensagem: ``
    })
      , [n,i] = (0,
    g.useState)(!1)
      , c = e => n => t(t => ({
        ...t,
        [e]: n.target.value
    }));
    return n ? (0,
    m.jsx)(u, {
        children: (0,
        m.jsxs)(`div`, {
            className: `rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/10 to-accent/5 p-8 text-center`,
            children: [(0,
            m.jsx)(`div`, {
                className: `mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary`,
                children: (0,
                m.jsx)(p, {
                    size: 24
                })
            }), (0,
            m.jsx)(`h3`, {
                className: `mt-4 font-display text-xl font-semibold`,
                children: `Abrindo o WhatsApp…`
            }), (0,
            m.jsx)(`p`, {
                className: `mt-2 text-sm text-muted-foreground`,
                children: `Sua mensagem foi montada. Se o WhatsApp não abriu automaticamente, toque no botão abaixo.`
            }), (0,
            m.jsxs)(`a`, {
                href: `https://wa.me/${v}`,
                target: `_blank`,
                rel: `noreferrer`,
                className: `mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-medium text-primary-foreground hover:brightness-110 transition`,
                children: [(0,
                m.jsx)(a, {
                    size: 18
                }), ` Abrir WhatsApp`]
            }), (0,
            m.jsx)(`button`, {
                onClick: () => i(!1),
                className: `mt-3 block mx-auto text-sm text-muted-foreground hover:text-foreground transition`,
                children: `Enviar outra mensagem`
            })]
        })
    }) : (0,
    m.jsx)(u, {
        children: (0,
        m.jsxs)(`form`, {
            onSubmit: t => {
                t.preventDefault();
                let n = encodeURIComponent(`Olá Rafael! Vim pelo portfólio.\n\nNome: ${e.nome}\nTelefone: ${e.telefone}\nTipo de obra: ${e.tipo}\nÁrea estimada: ${e.area || `—`} m²\n\nMensagem: ${e.mensagem}`);
                window.open(`https://wa.me/${v}?text=${n}`, `_blank`),
                i(!0)
            }
            ,
            className: `rounded-2xl border border-border/70 bg-card/40 p-6 sm:p-8 space-y-5`,
            children: [(0,
            m.jsxs)(`div`, {
                className: `grid sm:grid-cols-2 gap-5`,
                children: [(0,
                m.jsxs)(`div`, {
                    children: [(0,
                    m.jsxs)(`label`, {
                        className: `text-sm font-medium text-muted-foreground flex items-center gap-1.5`,
                        children: [(0,
                        m.jsx)(s, {
                            size: 14
                        }), ` Nome`]
                    }), (0,
                    m.jsx)(`input`, {
                        required: !0,
                        value: e.nome,
                        onChange: c(`nome`),
                        className: `mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm focus:border-primary focus:outline-none transition`,
                        placeholder: `Seu nome`
                    })]
                }), (0,
                m.jsxs)(`div`, {
                    children: [(0,
                    m.jsxs)(`label`, {
                        className: `text-sm font-medium text-muted-foreground flex items-center gap-1.5`,
                        children: [(0,
                        m.jsx)(a, {
                            size: 14
                        }), ` Telefone / WhatsApp`]
                    }), (0,
                    m.jsx)(`input`, {
                        required: !0,
                        value: e.telefone,
                        onChange: c(`telefone`),
                        className: `mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm focus:border-primary focus:outline-none transition`,
                        placeholder: `(41) 99999-9999`
                    })]
                })]
            }), (0,
            m.jsxs)(`div`, {
                className: `grid sm:grid-cols-2 gap-5`,
                children: [(0,
                m.jsxs)(`div`, {
                    children: [(0,
                    m.jsxs)(`label`, {
                        className: `text-sm font-medium text-muted-foreground flex items-center gap-1.5`,
                        children: [(0,
                        m.jsx)(r, {
                            size: 14
                        }), ` Tipo de obra`]
                    }), (0,
                    m.jsx)(`div`, {
                        className: `mt-2 flex flex-wrap gap-2`,
                        children: _.map(n => (0,
                        m.jsx)(`button`, {
                            type: `button`,
                            onClick: () => t(e => ({
                                ...e,
                                tipo: n
                            })),
                            className: `rounded-lg border px-3.5 py-2 text-sm font-medium transition ${e.tipo === n ? `border-primary bg-primary/15 text-primary` : `border-border hover:bg-secondary/60`}`,
                            children: n
                        }, n))
                    })]
                }), (0,
                m.jsxs)(`div`, {
                    children: [(0,
                    m.jsxs)(`label`, {
                        className: `text-sm font-medium text-muted-foreground flex items-center gap-1.5`,
                        children: [(0,
                        m.jsx)(o, {
                            size: 14
                        }), ` Área estimada (m²)`]
                    }), (0,
                    m.jsx)(`input`, {
                        type: `number`,
                        min: `0`,
                        value: e.area,
                        onChange: c(`area`),
                        className: `mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm focus:border-primary focus:outline-none transition`,
                        placeholder: `ex: 200`
                    })]
                })]
            }), (0,
            m.jsxs)(`div`, {
                children: [(0,
                m.jsx)(`label`, {
                    className: `text-sm font-medium text-muted-foreground`,
                    children: `Conte sobre o projeto`
                }), (0,
                m.jsx)(`textarea`, {
                    required: !0,
                    value: e.mensagem,
                    onChange: c(`mensagem`),
                    rows: 4,
                    className: `mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm focus:border-primary focus:outline-none transition resize-none`,
                    placeholder: `Localização, prazos, o que você precisa…`
                })]
            }), (0,
            m.jsxs)(`button`, {
                type: `submit`,
                className: `w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-medium text-primary-foreground hover:brightness-110 transition shadow-lg shadow-primary/20`,
                children: [(0,
                m.jsx)(p, {
                    size: 18
                }), ` Enviar pelo WhatsApp`]
            }), (0,
            m.jsx)(`p`, {
                className: `text-center text-xs text-muted-foreground`,
                children: `Sua mensagem é montada e aberta no WhatsApp — sem dados armazenados.`
            })]
        })
    })
}
function b() {
    return (0,
    m.jsxs)(m.Fragment, {
        children: [(0,
        m.jsx)(`section`, {
            className: `relative py-24 sm:py-32`,
            children: (0,
            m.jsxs)(`div`, {
                className: `mx-auto max-w-3xl px-5 sm:px-8`,
                children: [(0,
                m.jsxs)(u, {
                    children: [(0,
                    m.jsxs)(`div`, {
                        className: `flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary`,
                        children: [(0,
                        m.jsx)(`span`, {
                            className: `h-px w-8 bg-primary`
                        }), ` Solicitar orçamento`]
                    }), (0,
                    m.jsx)(`h2`, {
                        className: `mt-4 font-display font-bold text-3xl sm:text-5xl tracking-tight text-balance`,
                        children: `Conte sobre o seu projeto.`
                    }), (0,
                    m.jsx)(`p`, {
                        className: `mt-4 max-w-xl text-muted-foreground text-balance`,
                        children: `Preencha os campos abaixo — a mensagem é montada e aberta diretamente no WhatsApp, sem dados armazenados.`
                    })]
                }), (0,
                m.jsx)(`div`, {
                    className: `mt-10`,
                    children: (0,
                    m.jsx)(y, {})
                })]
            })
        }), (0,
        m.jsx)(h, {})]
    })
}
export {b as default};
