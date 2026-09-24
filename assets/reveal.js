import {t as e} from "../jsx-runtime.js";
import {n as t} from "../index.js";
var n = e();
function r({children: e, delay: r=0, y: i=28, className: a=``}) {
    return (0,
    n.jsx)(t.div, {
        className: a,
        initial: {
            opacity: 0,
            y: i
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: !0,
            margin: `-80px`
        },
        transition: {
            duration: .7,
            delay: r,
            ease: [.22, 1, .36, 1]
        },
        children: e
    })
}
export {r as t};
