const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/home.js",
      "jsx-runtime.js",
      "assets/projects.js",
      "assets/box.js",
      "assets/building.js",
      "assets/hammer.js",
      "assets/map-pin.js",
      "assets/phone.js",
      "assets/reveal.js",
      "assets/image.js",
      "assets/estrutura.js",
      "assets/compass.js",
      "assets/layers.js",
      "assets/ruler.js",
      "assets/projetos.js",
      "assets/sobre.js",
      "assets/user.js",
      "assets/contato.js",
    ]),
) => i.map((i) => d[i]);
import {
  a as e,
  i as t,
  n,
  o as r,
  r as i,
  s as a,
  t as o,
} from "./jsx-runtime.js";
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      (t.credentials =
        e.crossOrigin === `use-credentials`
          ? `include`
          : e.crossOrigin === `anonymous`
            ? `omit`
            : `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var s = i((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      typeof performance == `object` &&
      typeof performance.now == `function`
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = typeof setTimeout == `function` ? setTimeout : null,
      _ = typeof clearTimeout == `function` ? clearTimeout : null,
      v = typeof setImmediate < `u` ? setImmediate : null;
    typeof navigator < `u` &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(e) {
      for (var i = n(l); i !== null; ) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e)
          (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function b(e) {
      if (((h = !1), y(e), !m))
        if (n(c) !== null) ((m = !0), O(x));
        else {
          var t = n(l);
          t !== null && ie(b, t.startTime - e);
        }
    }
    function x(t, i) {
      ((m = !1), h && ((h = !1), _(w), (w = -1)), (p = !0));
      var a = f;
      try {
        for (
          y(i), d = n(c);
          d !== null && (!(d.expirationTime > i) || (t && !E()));
        ) {
          var o = d.callback;
          if (typeof o == `function`) {
            ((d.callback = null), (f = d.priorityLevel));
            var s = o(d.expirationTime <= i);
            ((i = e.unstable_now()),
              typeof s == `function` ? (d.callback = s) : d === n(c) && r(c),
              y(i));
          } else r(c);
          d = n(c);
        }
        if (d !== null) var u = !0;
        else {
          var g = n(l);
          (g !== null && ie(b, g.startTime - i), (u = !1));
        }
        return u;
      } finally {
        ((d = null), (f = a), (p = !1));
      }
    }
    var S = !1,
      C = null,
      w = -1,
      T = 5,
      ee = -1;
    function E() {
      return !(e.unstable_now() - ee < T);
    }
    function te() {
      if (C !== null) {
        var t = e.unstable_now();
        ee = t;
        var n = !0;
        try {
          n = C(!0, t);
        } finally {
          n ? ne() : ((S = !1), (C = null));
        }
      } else S = !1;
    }
    var ne;
    if (typeof v == `function`)
      ne = function () {
        v(te);
      };
    else if (typeof MessageChannel < `u`) {
      var re = new MessageChannel(),
        D = re.port2;
      ((re.port1.onmessage = te),
        (ne = function () {
          D.postMessage(null);
        }));
    } else
      ne = function () {
        g(te, 0);
      };
    function O(e) {
      ((C = e), S || ((S = !0), ne()));
    }
    function ie(t, n) {
      w = g(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        m || p || ((m = !0), O(x));
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (T = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(c);
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (_(w), (w = -1)) : (h = !0), ie(b, a - o)))
            : ((r.sortIndex = s), t(c, r), m || p || ((m = !0), O(x))),
          r
        );
      }),
      (e.unstable_shouldYield = E),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  c = i((e, t) => {
    t.exports = s();
  }),
  l = i((e) => {
    var t = n(),
      r = c();
    function i(e) {
      for (
        var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e,
          n = 1;
        n < arguments.length;
        n++
      )
        t += `&args[]=` + encodeURIComponent(arguments[n]);
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    var a = new Set(),
      o = {};
    function s(e, t) {
      (l(e, t), l(e + `Capture`, t));
    }
    function l(e, t) {
      for (o[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
    }
    var u = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      d = Object.prototype.hasOwnProperty,
      f =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      p = {},
      m = {};
    function h(e) {
      return d.call(m, e)
        ? !0
        : d.call(p, e)
          ? !1
          : f.test(e)
            ? (m[e] = !0)
            : ((p[e] = !0), !1);
    }
    function g(e, t, n, r) {
      if (n !== null && n.type === 0) return !1;
      switch (typeof t) {
        case `function`:
        case `symbol`:
          return !0;
        case `boolean`:
          return r
            ? !1
            : n === null
              ? ((e = e.toLowerCase().slice(0, 5)),
                e !== `data-` && e !== `aria-`)
              : !n.acceptsBooleans;
        default:
          return !1;
      }
    }
    function _(e, t, n, r) {
      if (t == null || g(e, t, n, r)) return !0;
      if (r) return !1;
      if (n !== null)
        switch (n.type) {
          case 3:
            return !t;
          case 4:
            return !1 === t;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t;
        }
      return !1;
    }
    function v(e, t, n, r, i, a, o) {
      ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = a),
        (this.removeEmptyString = o));
    }
    var y = {};
    (`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`
      .split(` `)
      .forEach(function (e) {
        y[e] = new v(e, 0, !1, e, null, !1, !1);
      }),
      [
        [`acceptCharset`, `accept-charset`],
        [`className`, `class`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
      ].forEach(function (e) {
        var t = e[0];
        y[t] = new v(t, 1, !1, e[1], null, !1, !1);
      }),
      [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(
        function (e) {
          y[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
        },
      ),
      [
        `autoReverse`,
        `externalResourcesRequired`,
        `focusable`,
        `preserveAlpha`,
      ].forEach(function (e) {
        y[e] = new v(e, 2, !1, e, null, !1, !1);
      }),
      `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`
        .split(` `)
        .forEach(function (e) {
          y[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
        y[e] = new v(e, 3, !0, e, null, !1, !1);
      }),
      [`capture`, `download`].forEach(function (e) {
        y[e] = new v(e, 4, !1, e, null, !1, !1);
      }),
      [`cols`, `rows`, `size`, `span`].forEach(function (e) {
        y[e] = new v(e, 6, !1, e, null, !1, !1);
      }),
      [`rowSpan`, `start`].forEach(function (e) {
        y[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }));
    var b = /[\-:]([a-z])/g;
    function x(e) {
      return e[1].toUpperCase();
    }
    (`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
      .split(` `)
      .forEach(function (e) {
        var t = e.replace(b, x);
        y[t] = new v(t, 1, !1, e, null, !1, !1);
      }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(b, x);
          y[t] = new v(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(b, x);
        y[t] = new v(
          t,
          1,
          !1,
          e,
          `http://www.w3.org/XML/1998/namespace`,
          !1,
          !1,
        );
      }),
      [`tabIndex`, `crossOrigin`].forEach(function (e) {
        y[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (y.xlinkHref = new v(
        `xlinkHref`,
        1,
        !1,
        `xlink:href`,
        `http://www.w3.org/1999/xlink`,
        !0,
        !1,
      )),
      [`src`, `href`, `action`, `formAction`].forEach(function (e) {
        y[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }));
    function S(e, t, n, r) {
      var i = y.hasOwnProperty(t) ? y[t] : null;
      (i === null
        ? r ||
          !(2 < t.length) ||
          (t[0] !== `o` && t[0] !== `O`) ||
          (t[1] !== `n` && t[1] !== `N`)
        : i.type !== 0) &&
        (_(t, n, i, r) && (n = null),
        r || i === null
          ? h(t) &&
            (n === null ? e.removeAttribute(t) : e.setAttribute(t, `` + n))
          : i.mustUseProperty
            ? (e[i.propertyName] = n === null ? i.type !== 3 && `` : n)
            : ((t = i.attributeName),
              (r = i.attributeNamespace),
              n === null
                ? e.removeAttribute(t)
                : ((i = i.type),
                  (n = i === 3 || (i === 4 && !0 === n) ? `` : `` + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      w = Symbol.for(`react.element`),
      T = Symbol.for(`react.portal`),
      ee = Symbol.for(`react.fragment`),
      E = Symbol.for(`react.strict_mode`),
      te = Symbol.for(`react.profiler`),
      ne = Symbol.for(`react.provider`),
      re = Symbol.for(`react.context`),
      D = Symbol.for(`react.forward_ref`),
      O = Symbol.for(`react.suspense`),
      ie = Symbol.for(`react.suspense_list`),
      ae = Symbol.for(`react.memo`),
      oe = Symbol.for(`react.lazy`),
      k = Symbol.for(`react.offscreen`),
      se = Symbol.iterator;
    function ce(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (se && e[se]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var A = Object.assign,
      le;
    function j(e) {
      if (le === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          le = (t && t[1]) || ``;
        }
      return (
        `
` +
        le +
        e
      );
    }
    var ue = !1;
    function de(e, t) {
      if (!e || ue) return ``;
      ue = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t)
          if (
            ((t = function () {
              throw Error();
            }),
            Object.defineProperty(t.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect == `object` && Reflect.construct)
          ) {
            try {
              Reflect.construct(t, []);
            } catch (e) {
              var r = e;
            }
            Reflect.construct(e, [], t);
          } else {
            try {
              t.call();
            } catch (e) {
              r = e;
            }
            e.call(t.prototype);
          }
        else {
          try {
            throw Error();
          } catch (e) {
            r = e;
          }
          e();
        }
      } catch (t) {
        if (t && r && typeof t.stack == `string`) {
          for (
            var i = t.stack.split(`
`),
              a = r.stack.split(`
`),
              o = i.length - 1,
              s = a.length - 1;
            1 <= o && 0 <= s && i[o] !== a[s];
          )
            s--;
          for (; 1 <= o && 0 <= s; o--, s--)
            if (i[o] !== a[s]) {
              if (o !== 1 || s !== 1)
                do
                  if ((o--, s--, 0 > s || i[o] !== a[s])) {
                    var c =
                      `
` + i[o].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        c.includes(`<anonymous>`) &&
                        (c = c.replace(`<anonymous>`, e.displayName)),
                      c
                    );
                  }
                while (1 <= o && 0 <= s);
              break;
            }
        }
      } finally {
        ((ue = !1), (Error.prepareStackTrace = n));
      }
      return (e = e ? e.displayName || e.name : ``) ? j(e) : ``;
    }
    function fe(e) {
      switch (e.tag) {
        case 5:
          return j(e.type);
        case 16:
          return j(`Lazy`);
        case 13:
          return j(`Suspense`);
        case 19:
          return j(`SuspenseList`);
        case 0:
        case 2:
        case 15:
          return ((e = de(e.type, !1)), e);
        case 11:
          return ((e = de(e.type.render, !1)), e);
        case 1:
          return ((e = de(e.type, !0)), e);
        default:
          return ``;
      }
    }
    function pe(e) {
      if (e == null) return null;
      if (typeof e == `function`) return e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case ee:
          return `Fragment`;
        case T:
          return `Portal`;
        case te:
          return `Profiler`;
        case E:
          return `StrictMode`;
        case O:
          return `Suspense`;
        case ie:
          return `SuspenseList`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case re:
            return (e.displayName || `Context`) + `.Consumer`;
          case ne:
            return (e._context.displayName || `Context`) + `.Provider`;
          case D:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case ae:
            return (
              (t = e.displayName || null),
              t === null ? pe(e.type) || `Memo` : t
            );
          case oe:
            ((t = e._payload), (e = e._init));
            try {
              return pe(e(t));
            } catch {}
        }
      return null;
    }
    function me(e) {
      var t = e.type;
      switch (e.tag) {
        case 24:
          return `Cache`;
        case 9:
          return (t.displayName || `Context`) + `.Consumer`;
        case 10:
          return (t._context.displayName || `Context`) + `.Provider`;
        case 18:
          return `DehydratedFragment`;
        case 11:
          return (
            (e = t.render),
            (e = e.displayName || e.name || ``),
            t.displayName || (e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)
          );
        case 7:
          return `Fragment`;
        case 5:
          return t;
        case 4:
          return `Portal`;
        case 3:
          return `Root`;
        case 6:
          return `Text`;
        case 16:
          return pe(t);
        case 8:
          return t === E ? `StrictMode` : `Mode`;
        case 22:
          return `Offscreen`;
        case 12:
          return `Profiler`;
        case 21:
          return `Scope`;
        case 13:
          return `Suspense`;
        case 19:
          return `SuspenseList`;
        case 25:
          return `TracingMarker`;
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof t == `function`) return t.displayName || t.name || null;
          if (typeof t == `string`) return t;
      }
      return null;
    }
    function he(e) {
      switch (typeof e) {
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function ge(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      );
    }
    function _e(e) {
      var t = ge(e) ? `checked` : `value`,
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = `` + e[t];
      if (
        !e.hasOwnProperty(t) &&
        n !== void 0 &&
        typeof n.get == `function` &&
        typeof n.set == `function`
      ) {
        var i = n.get,
          a = n.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((r = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, {
            enumerable: n.enumerable,
          }),
          {
            getValue: function () {
              return r;
            },
            setValue: function (e) {
              r = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function ve(e) {
      e._valueTracker ||= _e(e);
    }
    function ye(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = ge(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e !== n && (t.setValue(e), !0)
      );
    }
    function be(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function xe(e, t) {
      var n = t.checked;
      return A({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
      });
    }
    function Se(e, t) {
      var n = t.defaultValue == null ? `` : t.defaultValue,
        r = t.checked == null ? t.defaultChecked : t.checked;
      ((n = he(t.value == null ? n : t.value)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled:
            t.type === `checkbox` || t.type === `radio`
              ? t.checked != null
              : t.value != null,
        }));
    }
    function Ce(e, t) {
      ((t = t.checked), t != null && S(e, `checked`, t, !1));
    }
    function we(e, t) {
      Ce(e, t);
      var n = he(t.value),
        r = t.type;
      if (n != null)
        r === `number`
          ? ((n === 0 && e.value === ``) || e.value != n) && (e.value = `` + n)
          : e.value !== `` + n && (e.value = `` + n);
      else if (r === `submit` || r === `reset`) {
        e.removeAttribute(`value`);
        return;
      }
      (t.hasOwnProperty(`value`)
        ? Ee(e, t.type, n)
        : t.hasOwnProperty(`defaultValue`) && Ee(e, t.type, he(t.defaultValue)),
        t.checked == null &&
          t.defaultChecked != null &&
          (e.defaultChecked = !!t.defaultChecked));
    }
    function Te(e, t, n) {
      if (t.hasOwnProperty(`value`) || t.hasOwnProperty(`defaultValue`)) {
        var r = t.type;
        if (
          !(
            (r !== `submit` && r !== `reset`) ||
            (t.value !== void 0 && t.value !== null)
          )
        )
          return;
        ((t = `` + e._wrapperState.initialValue),
          n || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((n = e.name),
        n !== `` && (e.name = ``),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== `` && (e.name = n));
    }
    function Ee(e, t, n) {
      (t !== `number` || be(e.ownerDocument) !== e) &&
        (n == null
          ? (e.defaultValue = `` + e._wrapperState.initialValue)
          : e.defaultValue !== `` + n && (e.defaultValue = `` + n));
    }
    var De = Array.isArray;
    function Oe(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + he(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function ke(e, t) {
      if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
      return A({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: `` + e._wrapperState.initialValue,
      });
    }
    function Ae(e, t) {
      var n = t.value;
      if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
          if (t != null) throw Error(i(92));
          if (De(n)) {
            if (1 < n.length) throw Error(i(93));
            n = n[0];
          }
          t = n;
        }
        ((t ??= ``), (n = t));
      }
      e._wrapperState = {
        initialValue: he(n),
      };
    }
    function je(e, t) {
      var n = he(t.value),
        r = he(t.defaultValue);
      (n != null &&
        ((n = `` + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = `` + r));
    }
    function Me(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue &&
        t !== `` &&
        t !== null &&
        (e.value = t);
    }
    function Ne(e) {
      switch (e) {
        case `svg`:
          return `http://www.w3.org/2000/svg`;
        case `math`:
          return `http://www.w3.org/1998/Math/MathML`;
        default:
          return `http://www.w3.org/1999/xhtml`;
      }
    }
    function Pe(e, t) {
      return e == null || e === `http://www.w3.org/1999/xhtml`
        ? Ne(t)
        : e === `http://www.w3.org/2000/svg` && t === `foreignObject`
          ? `http://www.w3.org/1999/xhtml`
          : e;
    }
    var Fe,
      Ie = (function (e) {
        return typeof MSApp < `u` && MSApp.execUnsafeLocalFunction
          ? function (t, n, r, i) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(t, n, r, i);
              });
            }
          : e;
      })(function (e, t) {
        if (e.namespaceURI !== `http://www.w3.org/2000/svg` || `innerHTML` in e)
          e.innerHTML = t;
        else {
          for (
            Fe ||= document.createElement(`div`),
              Fe.innerHTML = `<svg>` + t.valueOf().toString() + `</svg>`,
              t = Fe.firstChild;
            e.firstChild;
          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      });
    function Le(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var Re = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      ze = [`Webkit`, `ms`, `Moz`, `O`];
    Object.keys(Re).forEach(function (e) {
      ze.forEach(function (t) {
        ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Re[t] = Re[e]));
      });
    });
    function Be(e, t, n) {
      return t == null || typeof t == `boolean` || t === ``
        ? ``
        : n ||
            typeof t != `number` ||
            t === 0 ||
            (Re.hasOwnProperty(e) && Re[e])
          ? (`` + t).trim()
          : t + `px`;
    }
    function Ve(e, t) {
      for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
          var r = n.indexOf(`--`) === 0,
            i = Be(n, t[n], r);
          (n === `float` && (n = `cssFloat`),
            r ? e.setProperty(n, i) : (e[n] = i));
        }
    }
    var He = A(
      {
        menuitem: !0,
      },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      },
    );
    function Ue(e, t) {
      if (t) {
        if (He[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw Error(i(137, e));
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) throw Error(i(60));
          if (
            typeof t.dangerouslySetInnerHTML != `object` ||
            !(`__html` in t.dangerouslySetInnerHTML)
          )
            throw Error(i(61));
        }
        if (t.style != null && typeof t.style != `object`) throw Error(i(62));
      }
    }
    function We(e, t) {
      if (e.indexOf(`-`) === -1) return typeof t.is == `string`;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var Ge = null;
    function Ke(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var qe = null,
      Je = null,
      Ye = null;
    function Xe(e) {
      if ((e = Ki(e))) {
        if (typeof qe != `function`) throw Error(i(280));
        var t = e.stateNode;
        t && ((t = Ji(t)), qe(e.stateNode, e.type, t));
      }
    }
    function Ze(e) {
      Je ? (Ye ? Ye.push(e) : (Ye = [e])) : (Je = e);
    }
    function Qe() {
      if (Je) {
        var e = Je,
          t = Ye;
        if (((Ye = Je = null), Xe(e), t))
          for (e = 0; e < t.length; e++) Xe(t[e]);
      }
    }
    function $e(e, t) {
      return e(t);
    }
    function et() {}
    var tt = !1;
    function nt(e, t, n) {
      if (tt) return e(t, n);
      tt = !0;
      try {
        return $e(e, t, n);
      } finally {
        ((tt = !1), (Je !== null || Ye !== null) && (et(), Qe()));
      }
    }
    function rt(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = Ji(n);
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((r = !r.disabled) ||
            ((e = e.type),
            (r =
              e !== `button` &&
              e !== `input` &&
              e !== `select` &&
              e !== `textarea`)),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
      return n;
    }
    var it = !1;
    if (u)
      try {
        var at = {};
        (Object.defineProperty(at, "passive", {
          get: function () {
            it = !0;
          },
        }),
          window.addEventListener(`test`, at, at),
          window.removeEventListener(`test`, at, at));
      } catch {
        it = !1;
      }
    function ot(e, t, n, r, i, a, o, s, c) {
      var l = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, l);
      } catch (e) {
        this.onError(e);
      }
    }
    var st = !1,
      ct = null,
      lt = !1,
      ut = null,
      dt = {
        onError: function (e) {
          ((st = !0), (ct = e));
        },
      };
    function ft(e, t, n, r, i, a, o, s, c) {
      ((st = !1), (ct = null), ot.apply(dt, arguments));
    }
    function pt(e, t, n, r, a, o, s, c, l) {
      if ((ft.apply(this, arguments), st)) {
        if (st) {
          var u = ct;
          ((st = !1), (ct = null));
        } else throw Error(i(198));
        lt || ((lt = !0), (ut = u));
      }
    }
    function mt(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function ht(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function gt(e) {
      if (mt(e) !== e) throw Error(i(188));
    }
    function _t(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = mt(e)), t === null)) throw Error(i(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ; ) {
        var a = n.return;
        if (a === null) break;
        var o = a.alternate;
        if (o === null) {
          if (((r = a.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === o.child) {
          for (o = a.child; o; ) {
            if (o === n) return (gt(a), e);
            if (o === r) return (gt(a), t);
            o = o.sibling;
          }
          throw Error(i(188));
        }
        if (n.return !== r.return) ((n = a), (r = o));
        else {
          for (var s = !1, c = a.child; c; ) {
            if (c === n) {
              ((s = !0), (n = a), (r = o));
              break;
            }
            if (c === r) {
              ((s = !0), (r = a), (n = o));
              break;
            }
            c = c.sibling;
          }
          if (!s) {
            for (c = o.child; c; ) {
              if (c === n) {
                ((s = !0), (n = o), (r = a));
                break;
              }
              if (c === r) {
                ((s = !0), (r = o), (n = a));
                break;
              }
              c = c.sibling;
            }
            if (!s) throw Error(i(189));
          }
        }
        if (n.alternate !== r) throw Error(i(190));
      }
      if (n.tag !== 3) throw Error(i(188));
      return n.stateNode.current === n ? e : t;
    }
    function vt(e) {
      return ((e = _t(e)), e === null ? null : yt(e));
    }
    function yt(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (e = e.child; e !== null; ) {
        var t = yt(e);
        if (t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    var bt = r.unstable_scheduleCallback,
      xt = r.unstable_cancelCallback,
      St = r.unstable_shouldYield,
      Ct = r.unstable_requestPaint,
      wt = r.unstable_now,
      Tt = r.unstable_getCurrentPriorityLevel,
      Et = r.unstable_ImmediatePriority,
      Dt = r.unstable_UserBlockingPriority,
      Ot = r.unstable_NormalPriority,
      kt = r.unstable_LowPriority,
      At = r.unstable_IdlePriority,
      jt = null,
      Mt = null;
    function Nt(e) {
      if (Mt && typeof Mt.onCommitFiberRoot == `function`)
        try {
          Mt.onCommitFiberRoot(jt, e, void 0, (e.current.flags & 128) == 128);
        } catch {}
    }
    var Pt = Math.clz32 ? Math.clz32 : Lt,
      Ft = Math.log,
      It = Math.LN2;
    function Lt(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ft(e) / It) | 0)) | 0);
    }
    var Rt = 64,
      zt = 4194304;
    function Bt(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return e & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e;
      }
    }
    function Vt(e, t) {
      var n = e.pendingLanes;
      if (n === 0) return 0;
      var r = 0,
        i = e.suspendedLanes,
        a = e.pingedLanes,
        o = n & 268435455;
      if (o !== 0) {
        var s = o & ~i;
        s === 0 ? ((a &= o), a !== 0 && (r = Bt(a))) : (r = Bt(s));
      } else ((o = n & ~i), o === 0 ? a !== 0 && (r = Bt(a)) : (r = Bt(o)));
      if (r === 0) return 0;
      if (
        t !== 0 &&
        t !== r &&
        (t & i) === 0 &&
        ((i = r & -r), (a = t & -t), i >= a || (i === 16 && a & 4194240))
      )
        return t;
      if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
          ((n = 31 - Pt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
      return r;
    }
    function Ht(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Ut(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes;
        0 < a;
      ) {
        var o = 31 - Pt(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Ht(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
    }
    function Wt(e) {
      return (
        (e = e.pendingLanes & -1073741825),
        e === 0 ? (e & 1073741824 ? 1073741824 : 0) : e
      );
    }
    function Gt() {
      var e = Rt;
      return ((Rt <<= 1), !(Rt & 4194240) && (Rt = 64), e);
    }
    function Kt(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function qt(e, t, n) {
      ((e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Pt(t)),
        (e[t] = n));
    }
    function Jt(e, t) {
      var n = e.pendingLanes & ~t;
      ((e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements));
      var r = e.eventTimes;
      for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Pt(n),
          a = 1 << i;
        ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a));
      }
    }
    function Yt(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - Pt(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    var M = 0;
    function Xt(e) {
      return (
        (e &= -e),
        1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
      );
    }
    var Zt,
      Qt,
      $t,
      en,
      tn,
      nn = !1,
      rn = [],
      an = null,
      on = null,
      sn = null,
      cn = new Map(),
      ln = new Map(),
      un = [],
      dn =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(
          ` `,
        );
    function fn(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          an = null;
          break;
        case `dragenter`:
        case `dragleave`:
          on = null;
          break;
        case `mouseover`:
        case `mouseout`:
          sn = null;
          break;
        case `pointerover`:
        case `pointerout`:
          cn.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          ln.delete(t.pointerId);
      }
    }
    function pn(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = Ki(t)), t !== null && Qt(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function mn(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((an = pn(an, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((on = pn(on, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((sn = pn(sn, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (cn.set(a, pn(cn.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            ln.set(a, pn(ln.get(a) || null, e, t, n, r, i)),
            !0
          );
      }
      return !1;
    }
    function hn(e) {
      var t = Gi(e.target);
      if (t !== null) {
        var n = mt(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = ht(n)), t !== null)) {
              ((e.blockedOn = t),
                tn(e.priority, function () {
                  $t(n);
                }));
              return;
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function gn(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Dn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((Ge = r), n.target.dispatchEvent(r), (Ge = null));
        } else return ((t = Ki(n)), t !== null && Qt(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function _n(e, t, n) {
      gn(e) && n.delete(t);
    }
    function vn() {
      ((nn = !1),
        an !== null && gn(an) && (an = null),
        on !== null && gn(on) && (on = null),
        sn !== null && gn(sn) && (sn = null),
        cn.forEach(_n),
        ln.forEach(_n));
    }
    function yn(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        nn ||
          ((nn = !0),
          r.unstable_scheduleCallback(r.unstable_NormalPriority, vn)));
    }
    function bn(e) {
      function t(t) {
        return yn(t, e);
      }
      if (0 < rn.length) {
        yn(rn[0], e);
        for (var n = 1; n < rn.length; n++) {
          var r = rn[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        an !== null && yn(an, e),
          on !== null && yn(on, e),
          sn !== null && yn(sn, e),
          cn.forEach(t),
          ln.forEach(t),
          n = 0;
        n < un.length;
        n++
      )
        ((r = un[n]), r.blockedOn === e && (r.blockedOn = null));
      for (; 0 < un.length && ((n = un[0]), n.blockedOn === null); )
        (hn(n), n.blockedOn === null && un.shift());
    }
    var xn = C.ReactCurrentBatchConfig,
      Sn = !0;
    function Cn(e, t, n, r) {
      var i = M,
        a = xn.transition;
      xn.transition = null;
      try {
        ((M = 1), Tn(e, t, n, r));
      } finally {
        ((M = i), (xn.transition = a));
      }
    }
    function wn(e, t, n, r) {
      var i = M,
        a = xn.transition;
      xn.transition = null;
      try {
        ((M = 4), Tn(e, t, n, r));
      } finally {
        ((M = i), (xn.transition = a));
      }
    }
    function Tn(e, t, n, r) {
      if (Sn) {
        var i = Dn(e, t, n, r);
        if (i === null) (_i(e, t, r, En, n), fn(e, r));
        else if (mn(i, e, t, n, r)) r.stopPropagation();
        else if ((fn(e, r), t & 4 && -1 < dn.indexOf(e))) {
          for (; i !== null; ) {
            var a = Ki(i);
            if (
              (a !== null && Zt(a),
              (a = Dn(e, t, n, r)),
              a === null && _i(e, t, r, En, n),
              a === i)
            )
              break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else _i(e, t, r, null, n);
      }
    }
    var En = null;
    function Dn(e, t, n, r) {
      if (((En = null), (e = Ke(r)), (e = Gi(e)), e !== null))
        if (((t = mt(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
          if (((e = ht(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      return ((En = e), null);
    }
    function On(e) {
      switch (e) {
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 1;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `toggle`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 4;
        case `message`:
          switch (Tt()) {
            case Et:
              return 1;
            case Dt:
              return 4;
            case Ot:
            case kt:
              return 16;
            case At:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var kn = null,
      An = null,
      jn = null;
    function Mn() {
      if (jn) return jn;
      var e,
        t = An,
        n = t.length,
        r,
        i = `value` in kn ? kn.value : kn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (jn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function Nn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Pn() {
      return !0;
    }
    function Fn() {
      return !1;
    }
    function In(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? Pn
            : Fn),
          (this.isPropagationStopped = Fn),
          this
        );
      }
      return (
        A(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = Pn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = Pn));
          },
          persist: function () {},
          isPersistent: Pn,
        }),
        t
      );
    }
    var Ln = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Rn = In(Ln),
      zn = A({}, Ln, {
        view: 0,
        detail: 0,
      }),
      Bn = In(zn),
      Vn,
      Hn,
      Un,
      Wn = A({}, zn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: er,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== Un &&
                (Un && e.type === `mousemove`
                  ? ((Vn = e.screenX - Un.screenX),
                    (Hn = e.screenY - Un.screenY))
                  : (Hn = Vn = 0),
                (Un = e)),
              Vn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : Hn;
        },
      }),
      N = In(Wn),
      Gn = In(
        A({}, Wn, {
          dataTransfer: 0,
        }),
      ),
      Kn = In(
        A({}, zn, {
          relatedTarget: 0,
        }),
      ),
      qn = In(
        A({}, Ln, {
          animationName: 0,
          elapsedTime: 0,
          pseudoElement: 0,
        }),
      ),
      Jn = In(
        A({}, Ln, {
          clipboardData: function (e) {
            return `clipboardData` in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
      ),
      Yn = In(
        A({}, Ln, {
          data: 0,
        }),
      ),
      Xn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      Zn = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      Qn = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      };
    function $n(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = Qn[e])
          ? !!t[e]
          : !1;
    }
    function er() {
      return $n;
    }
    var P = In(
        A({}, zn, {
          key: function (e) {
            if (e.key) {
              var t = Xn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = Nn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Zn[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: er,
          charCode: function (e) {
            return e.type === `keypress` ? Nn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? Nn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      tr = In(
        A({}, Wn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      nr = In(
        A({}, zn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: er,
        }),
      ),
      rr = In(
        A({}, Ln, {
          propertyName: 0,
          elapsedTime: 0,
          pseudoElement: 0,
        }),
      ),
      ir = In(
        A({}, Wn, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
                ? -e.wheelDeltaX
                : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      ar = [9, 13, 27, 32],
      or = u && `CompositionEvent` in window,
      sr = null;
    u && `documentMode` in document && (sr = document.documentMode);
    var F = u && `TextEvent` in window && !sr,
      cr = u && (!or || (sr && 8 < sr && 11 >= sr)),
      lr = ` `,
      ur = !1;
    function dr(e, t) {
      switch (e) {
        case `keyup`:
          return ar.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function fr(e) {
      return (
        (e = e.detail),
        typeof e == `object` && `data` in e ? e.data : null
      );
    }
    var pr = !1;
    function mr(e, t) {
      switch (e) {
        case `compositionend`:
          return fr(t);
        case `keypress`:
          return t.which === 32 ? ((ur = !0), lr) : null;
        case `textInput`:
          return ((e = t.data), e === lr && ur ? null : e);
        default:
          return null;
      }
    }
    function hr(e, t) {
      if (pr)
        return e === `compositionend` || (!or && dr(e, t))
          ? ((e = Mn()), (jn = An = kn = null), (pr = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return cr && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var gr = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function _r(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!gr[e.type] : t === `textarea`;
    }
    function vr(e, t, n, r) {
      (Ze(r),
        (t = yi(t, `onChange`)),
        0 < t.length &&
          ((n = new Rn(`onChange`, `change`, null, n, r)),
          e.push({
            event: n,
            listeners: t,
          })));
    }
    var yr = null,
      br = null;
    function xr(e) {
      fi(e, 0);
    }
    function Sr(e) {
      if (ye(qi(e))) return e;
    }
    function Cr(e, t) {
      if (e === `change`) return t;
    }
    var wr = !1;
    if (u) {
      var Tr;
      if (u) {
        var Er = `oninput` in document;
        if (!Er) {
          var Dr = document.createElement(`div`);
          (Dr.setAttribute(`oninput`, `return;`),
            (Er = typeof Dr.oninput == `function`));
        }
        Tr = Er;
      } else Tr = !1;
      wr = Tr && (!document.documentMode || 9 < document.documentMode);
    }
    function Or() {
      yr && (yr.detachEvent(`onpropertychange`, kr), (br = yr = null));
    }
    function kr(e) {
      if (e.propertyName === `value` && Sr(br)) {
        var t = [];
        (vr(t, br, e, Ke(e)), nt(xr, t));
      }
    }
    function Ar(e, t, n) {
      e === `focusin`
        ? (Or(), (yr = t), (br = n), yr.attachEvent(`onpropertychange`, kr))
        : e === `focusout` && Or();
    }
    function jr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return Sr(br);
    }
    function Mr(e, t) {
      if (e === `click`) return Sr(t);
    }
    function Nr(e, t) {
      if (e === `input` || e === `change`) return Sr(t);
    }
    function Pr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var Fr = typeof Object.is == `function` ? Object.is : Pr;
    function Ir(e, t) {
      if (Fr(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!d.call(t, i) || !Fr(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Lr(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Rr(e, t) {
      var n = Lr(e);
      e = 0;
      for (var r; n; ) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return {
              node: n,
              offset: t - e,
            };
          e = r;
        }
        a: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Lr(n);
      }
    }
    function zr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? zr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Br() {
      for (var e = window, t = be(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = be(e.document);
      }
      return t;
    }
    function Vr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    function Hr(e) {
      var t = Br(),
        n = e.focusedElem,
        r = e.selectionRange;
      if (
        t !== n &&
        n &&
        n.ownerDocument &&
        zr(n.ownerDocument.documentElement, n)
      ) {
        if (r !== null && Vr(n)) {
          if (
            ((t = r.start),
            (e = r.end),
            e === void 0 && (e = t),
            `selectionStart` in n)
          )
            ((n.selectionStart = t),
              (n.selectionEnd = Math.min(e, n.value.length)));
          else if (
            ((e =
              ((t = n.ownerDocument || document) && t.defaultView) || window),
            e.getSelection)
          ) {
            e = e.getSelection();
            var i = n.textContent.length,
              a = Math.min(r.start, i);
            ((r = r.end === void 0 ? a : Math.min(r.end, i)),
              !e.extend && a > r && ((i = r), (r = a), (a = i)),
              (i = Rr(n, a)));
            var o = Rr(n, r);
            i &&
              o &&
              (e.rangeCount !== 1 ||
                e.anchorNode !== i.node ||
                e.anchorOffset !== i.offset ||
                e.focusNode !== o.node ||
                e.focusOffset !== o.offset) &&
              ((t = t.createRange()),
              t.setStart(i.node, i.offset),
              e.removeAllRanges(),
              a > r
                ? (e.addRange(t), e.extend(o.node, o.offset))
                : (t.setEnd(o.node, o.offset), e.addRange(t)));
          }
        }
        for (t = [], e = n; (e = e.parentNode); )
          e.nodeType === 1 &&
            t.push({
              element: e,
              left: e.scrollLeft,
              top: e.scrollTop,
            });
        for (
          typeof n.focus == `function` && n.focus(), n = 0;
          n < t.length;
          n++
        )
          ((e = t[n]),
            (e.element.scrollLeft = e.left),
            (e.element.scrollTop = e.top));
      }
    }
    var Ur = u && `documentMode` in document && 11 >= document.documentMode,
      Wr = null,
      Gr = null,
      Kr = null,
      qr = !1;
    function Jr(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      qr ||
        Wr == null ||
        Wr !== be(r) ||
        ((r = Wr),
        `selectionStart` in r && Vr(r)
          ? (r = {
              start: r.selectionStart,
              end: r.selectionEnd,
            })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Kr && Ir(Kr, r)) ||
          ((Kr = r),
          (r = yi(Gr, `onSelect`)),
          0 < r.length &&
            ((t = new Rn(`onSelect`, `select`, null, t, n)),
            e.push({
              event: t,
              listeners: r,
            }),
            (t.target = Wr))));
    }
    function Yr(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var Xr = {
        animationend: Yr(`Animation`, `AnimationEnd`),
        animationiteration: Yr(`Animation`, `AnimationIteration`),
        animationstart: Yr(`Animation`, `AnimationStart`),
        transitionend: Yr(`Transition`, `TransitionEnd`),
      },
      Zr = {},
      Qr = {};
    u &&
      ((Qr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Xr.animationend.animation,
        delete Xr.animationiteration.animation,
        delete Xr.animationstart.animation),
      `TransitionEvent` in window || delete Xr.transitionend.transition);
    function $r(e) {
      if (Zr[e]) return Zr[e];
      if (!Xr[e]) return e;
      var t = Xr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in Qr) return (Zr[e] = t[n]);
      return e;
    }
    var ei = $r(`animationend`),
      ti = $r(`animationiteration`),
      ni = $r(`animationstart`),
      ri = $r(`transitionend`),
      ii = new Map(),
      ai =
        `abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    function oi(e, t) {
      (ii.set(e, t), s(t, [e]));
    }
    for (var si = 0; si < ai.length; si++) {
      var ci = ai[si];
      oi(ci.toLowerCase(), `on` + (ci[0].toUpperCase() + ci.slice(1)));
    }
    (oi(ei, `onAnimationEnd`),
      oi(ti, `onAnimationIteration`),
      oi(ni, `onAnimationStart`),
      oi(`dblclick`, `onDoubleClick`),
      oi(`focusin`, `onFocus`),
      oi(`focusout`, `onBlur`),
      oi(ri, `onTransitionEnd`),
      l(`onMouseEnter`, [`mouseout`, `mouseover`]),
      l(`onMouseLeave`, [`mouseout`, `mouseover`]),
      l(`onPointerEnter`, [`pointerout`, `pointerover`]),
      l(`onPointerLeave`, [`pointerout`, `pointerover`]),
      s(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `,
        ),
      ),
      s(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      s(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      s(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `),
      ),
      s(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      s(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(
          ` `,
        ),
      ));
    var li =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      ui = new Set(
        `cancel close invalid load scroll toggle`.split(` `).concat(li),
      );
    function di(e, t, n) {
      var r = e.type || `unknown-event`;
      ((e.currentTarget = n), pt(r, t, void 0, e), (e.currentTarget = null));
    }
    function fi(e, t) {
      t = !!(t & 4);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a;
              (di(i, s, l), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              (di(i, s, l), (a = c));
            }
        }
      }
      if (lt) throw ((e = ut), (lt = !1), (ut = null), e);
    }
    function I(e, t) {
      var n = t[Hi];
      n === void 0 && (n = t[Hi] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (gi(t, e, 2, !1), n.add(r));
    }
    function pi(e, t, n) {
      var r = 0;
      (t && (r |= 4), gi(n, e, r, t));
    }
    var mi = `_reactListening` + Math.random().toString(36).slice(2);
    function hi(e) {
      if (!e[mi]) {
        ((e[mi] = !0),
          a.forEach(function (t) {
            t !== `selectionchange` &&
              (ui.has(t) || pi(t, !1, e), pi(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[mi] || ((t[mi] = !0), pi(`selectionchange`, !1, t));
      }
    }
    function gi(e, t, n, r) {
      switch (On(t)) {
        case 1:
          var i = Cn;
          break;
        case 4:
          i = wn;
          break;
        default:
          i = Tn;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !it ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, {
                capture: !0,
                passive: i,
              })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, {
                passive: i,
              }));
    }
    function _i(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var o = r.tag;
          if (o === 3 || o === 4) {
            var s = r.stateNode.containerInfo;
            if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
            if (o === 4)
              for (o = r.return; o !== null; ) {
                var c = o.tag;
                if (
                  (c === 3 || c === 4) &&
                  ((c = o.stateNode.containerInfo),
                  c === i || (c.nodeType === 8 && c.parentNode === i))
                )
                  return;
                o = o.return;
              }
            for (; s !== null; ) {
              if (((o = Gi(s)), o === null)) return;
              if (((c = o.tag), c === 5 || c === 6)) {
                r = a = o;
                continue a;
              }
              s = s.parentNode;
            }
          }
          r = r.return;
        }
      nt(function () {
        var r = a,
          i = Ke(n),
          o = [];
        a: {
          var s = ii.get(e);
          if (s !== void 0) {
            var c = Rn,
              l = e;
            switch (e) {
              case `keypress`:
                if (Nn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                c = P;
                break;
              case `focusin`:
                ((l = `focus`), (c = Kn));
                break;
              case `focusout`:
                ((l = `blur`), (c = Kn));
                break;
              case `beforeblur`:
              case `afterblur`:
                c = Kn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                c = N;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                c = Gn;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                c = nr;
                break;
              case ei:
              case ti:
              case ni:
                c = qn;
                break;
              case ri:
                c = rr;
                break;
              case `scroll`:
                c = Bn;
                break;
              case `wheel`:
                c = ir;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                c = Jn;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                c = tr;
            }
            var u = !!(t & 4),
              d = !u && e === `scroll`,
              f = u ? (s === null ? null : s + `Capture`) : s;
            u = [];
            for (var p = r, m; p !== null; ) {
              m = p;
              var h = m.stateNode;
              if (
                (m.tag === 5 &&
                  h !== null &&
                  ((m = h),
                  f !== null &&
                    ((h = rt(p, f)), h != null && u.push(vi(p, h, m)))),
                d)
              )
                break;
              p = p.return;
            }
            0 < u.length &&
              ((s = new c(s, l, null, n, i)),
              o.push({
                event: s,
                listeners: u,
              }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((s = e === `mouseover` || e === `pointerover`),
              (c = e === `mouseout` || e === `pointerout`),
              s &&
                n !== Ge &&
                (l = n.relatedTarget || n.fromElement) &&
                (Gi(l) || l[Vi]))
            )
              break a;
            if (
              (c || s) &&
              ((s =
                i.window === i
                  ? i
                  : (s = i.ownerDocument)
                    ? s.defaultView || s.parentWindow
                    : window),
              c
                ? ((l = n.relatedTarget || n.toElement),
                  (c = r),
                  (l = l ? Gi(l) : null),
                  l !== null &&
                    ((d = mt(l)), l !== d || (l.tag !== 5 && l.tag !== 6)) &&
                    (l = null))
                : ((c = null), (l = r)),
              c !== l)
            ) {
              if (
                ((u = N),
                (h = `onMouseLeave`),
                (f = `onMouseEnter`),
                (p = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((u = tr),
                  (h = `onPointerLeave`),
                  (f = `onPointerEnter`),
                  (p = `pointer`)),
                (d = c == null ? s : qi(c)),
                (m = l == null ? s : qi(l)),
                (s = new u(h, p + `leave`, c, n, i)),
                (s.target = d),
                (s.relatedTarget = m),
                (h = null),
                Gi(i) === r &&
                  ((u = new u(f, p + `enter`, l, n, i)),
                  (u.target = m),
                  (u.relatedTarget = d),
                  (h = u)),
                (d = h),
                c && l)
              )
                b: {
                  for (u = c, f = l, p = 0, m = u; m; m = bi(m)) p++;
                  for (m = 0, h = f; h; h = bi(h)) m++;
                  for (; 0 < p - m; ) ((u = bi(u)), p--);
                  for (; 0 < m - p; ) ((f = bi(f)), m--);
                  for (; p--; ) {
                    if (u === f || (f !== null && u === f.alternate)) break b;
                    ((u = bi(u)), (f = bi(f)));
                  }
                  u = null;
                }
              else u = null;
              (c !== null && xi(o, s, c, u, !1),
                l !== null && d !== null && xi(o, d, l, u, !0));
            }
          }
          a: {
            if (
              ((s = r ? qi(r) : window),
              (c = s.nodeName && s.nodeName.toLowerCase()),
              c === `select` || (c === `input` && s.type === `file`))
            )
              var g = Cr;
            else if (_r(s))
              if (wr) g = Nr;
              else {
                g = jr;
                var _ = Ar;
              }
            else
              (c = s.nodeName) &&
                c.toLowerCase() === `input` &&
                (s.type === `checkbox` || s.type === `radio`) &&
                (g = Mr);
            if ((g &&= g(e, r))) {
              vr(o, g, n, i);
              break a;
            }
            (_ && _(e, s, r),
              e === `focusout` &&
                (_ = s._wrapperState) &&
                _.controlled &&
                s.type === `number` &&
                Ee(s, `number`, s.value));
          }
          switch (((_ = r ? qi(r) : window), e)) {
            case `focusin`:
              (_r(_) || _.contentEditable === `true`) &&
                ((Wr = _), (Gr = r), (Kr = null));
              break;
            case `focusout`:
              Kr = Gr = Wr = null;
              break;
            case `mousedown`:
              qr = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((qr = !1), Jr(o, n, i));
              break;
            case `selectionchange`:
              if (Ur) break;
            case `keydown`:
            case `keyup`:
              Jr(o, n, i);
          }
          var v;
          if (or)
            b: {
              switch (e) {
                case `compositionstart`:
                  var y = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  y = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  y = `onCompositionUpdate`;
                  break b;
              }
              y = void 0;
            }
          else
            pr
              ? dr(e, n) && (y = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (y = `onCompositionStart`);
          (y &&
            (cr &&
              n.locale !== `ko` &&
              (pr || y !== `onCompositionStart`
                ? y === `onCompositionEnd` && pr && (v = Mn())
                : ((kn = i),
                  (An = `value` in kn ? kn.value : kn.textContent),
                  (pr = !0))),
            (_ = yi(r, y)),
            0 < _.length &&
              ((y = new Yn(y, e, null, n, i)),
              o.push({
                event: y,
                listeners: _,
              }),
              v ? (y.data = v) : ((v = fr(n)), v !== null && (y.data = v)))),
            (v = F ? mr(e, n) : hr(e, n)) &&
              ((r = yi(r, `onBeforeInput`)),
              0 < r.length &&
                ((i = new Yn(`onBeforeInput`, `beforeinput`, null, n, i)),
                o.push({
                  event: i,
                  listeners: r,
                }),
                (i.data = v))));
        }
        fi(o, t);
      });
    }
    function vi(e, t, n) {
      return {
        instance: e,
        listener: t,
        currentTarget: n,
      };
    }
    function yi(e, t) {
      for (var n = t + `Capture`, r = []; e !== null; ) {
        var i = e,
          a = i.stateNode;
        (i.tag === 5 &&
          a !== null &&
          ((i = a),
          (a = rt(e, n)),
          a != null && r.unshift(vi(e, a, i)),
          (a = rt(e, t)),
          a != null && r.push(vi(e, a, i))),
          (e = e.return));
      }
      return r;
    }
    function bi(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5);
      return e || null;
    }
    function xi(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r; ) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (c !== null && c === r) break;
        (s.tag === 5 &&
          l !== null &&
          ((s = l),
          i
            ? ((c = rt(n, a)), c != null && o.unshift(vi(n, c, s)))
            : i || ((c = rt(n, a)), c != null && o.push(vi(n, c, s)))),
          (n = n.return));
      }
      o.length !== 0 &&
        e.push({
          event: t,
          listeners: o,
        });
    }
    var Si = /\r\n?/g,
      Ci = /\u0000|\uFFFD/g;
    function wi(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          Si,
          `
`,
        )
        .replace(Ci, ``);
    }
    function Ti(e, t, n) {
      if (((t = wi(t)), wi(e) !== t && n)) throw Error(i(425));
    }
    function Ei() {}
    var Di = null,
      Oi = null;
    function ki(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Ai = typeof setTimeout == `function` ? setTimeout : void 0,
      ji = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Mi = typeof Promise == `function` ? Promise : void 0,
      Ni =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Mi === void 0
            ? Ai
            : function (e) {
                return Mi.resolve(null).then(e).catch(Pi);
              };
    function Pi(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Fi(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
          if (((n = i.data), n === `/$`)) {
            if (r === 0) {
              (e.removeChild(i), bn(t));
              return;
            }
            r--;
          } else (n !== `$` && n !== `$?` && n !== `$!`) || r++;
        n = i;
      } while (n);
      bn(t);
    }
    function Ii(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (((t = e.data), t === `$` || t === `$!` || t === `$?`)) break;
          if (t === `/$`) return null;
        }
      }
      return e;
    }
    function Li(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `$` || n === `$!` || n === `$?`) {
            if (t === 0) return e;
            t--;
          } else n === `/$` && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var Ri = Math.random().toString(36).slice(2),
      zi = `__reactFiber$` + Ri,
      Bi = `__reactProps$` + Ri,
      Vi = `__reactContainer$` + Ri,
      Hi = `__reactEvents$` + Ri,
      Ui = `__reactListeners$` + Ri,
      Wi = `__reactHandles$` + Ri;
    function Gi(e) {
      var t = e[zi];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[Vi] || n[zi])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = Li(e); e !== null; ) {
              if ((n = e[zi])) return n;
              e = Li(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function Ki(e) {
      return (
        (e = e[zi] || e[Vi]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
          ? null
          : e
      );
    }
    function qi(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw Error(i(33));
    }
    function Ji(e) {
      return e[Bi] || null;
    }
    var Yi = [],
      Xi = -1;
    function Zi(e) {
      return {
        current: e,
      };
    }
    function L(e) {
      0 > Xi || ((e.current = Yi[Xi]), (Yi[Xi] = null), Xi--);
    }
    function R(e, t) {
      (Xi++, (Yi[Xi] = e.current), (e.current = t));
    }
    var Qi = {},
      $i = Zi(Qi),
      ea = Zi(!1),
      ta = Qi;
    function na(e, t) {
      var n = e.type.contextTypes;
      if (!n) return Qi;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
      var i = {},
        a;
      for (a in n) i[a] = t[a];
      return (
        r &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
      );
    }
    function ra(e) {
      return ((e = e.childContextTypes), e != null);
    }
    function ia() {
      (L(ea), L($i));
    }
    function aa(e, t, n) {
      if ($i.current !== Qi) throw Error(i(168));
      (R($i, t), R(ea, n));
    }
    function oa(e, t, n) {
      var r = e.stateNode;
      if (((t = t.childContextTypes), typeof r.getChildContext != `function`))
        return n;
      for (var a in ((r = r.getChildContext()), r))
        if (!(a in t)) throw Error(i(108, me(e) || `Unknown`, a));
      return A({}, n, r);
    }
    function sa(e) {
      return (
        (e =
          ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
          Qi),
        (ta = $i.current),
        R($i, e),
        R(ea, ea.current),
        !0
      );
    }
    function z(e, t, n) {
      var r = e.stateNode;
      if (!r) throw Error(i(169));
      (n
        ? ((e = oa(e, t, ta)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          L(ea),
          L($i),
          R($i, e))
        : L(ea),
        R(ea, n));
    }
    var ca = null,
      la = !1,
      ua = !1;
    function da(e) {
      ca === null ? (ca = [e]) : ca.push(e);
    }
    function fa(e) {
      ((la = !0), da(e));
    }
    function pa() {
      if (!ua && ca !== null) {
        ua = !0;
        var e = 0,
          t = M;
        try {
          var n = ca;
          for (M = 1; e < n.length; e++) {
            var r = n[e];
            do r = r(!0);
            while (r !== null);
          }
          ((ca = null), (la = !1));
        } catch (t) {
          throw (ca !== null && (ca = ca.slice(e + 1)), bt(Et, pa), t);
        } finally {
          ((M = t), (ua = !1));
        }
      }
      return null;
    }
    var ma = [],
      ha = 0,
      ga = null,
      _a = 0,
      va = [],
      ya = 0,
      ba = null,
      xa = 1,
      Sa = ``;
    function Ca(e, t) {
      ((ma[ha++] = _a), (ma[ha++] = ga), (ga = e), (_a = t));
    }
    function wa(e, t, n) {
      ((va[ya++] = xa), (va[ya++] = Sa), (va[ya++] = ba), (ba = e));
      var r = xa;
      e = Sa;
      var i = 32 - Pt(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - Pt(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (xa = (1 << (32 - Pt(t) + i)) | (n << i) | r),
          (Sa = a + e));
      } else ((xa = (1 << a) | (n << i) | r), (Sa = e));
    }
    function Ta(e) {
      e.return !== null && (Ca(e, 1), wa(e, 1, 0));
    }
    function Ea(e) {
      for (; e === ga; )
        ((ga = ma[--ha]), (ma[ha] = null), (_a = ma[--ha]), (ma[ha] = null));
      for (; e === ba; )
        ((ba = va[--ya]),
          (va[ya] = null),
          (Sa = va[--ya]),
          (va[ya] = null),
          (xa = va[--ya]),
          (va[ya] = null));
    }
    var Da = null,
      Oa = null,
      B = !1,
      ka = null;
    function Aa(e, t) {
      var n = Zl(5, null, null, 0);
      ((n.elementType = `DELETED`),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
    }
    function ja(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return (
            (t =
              t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
                ? null
                : t),
            t !== null &&
              ((e.stateNode = t), (Da = e), (Oa = Ii(t.firstChild)), !0)
          );
        case 6:
          return (
            (t = e.pendingProps === `` || t.nodeType !== 3 ? null : t),
            t !== null && ((e.stateNode = t), (Da = e), (Oa = null), !0)
          );
        case 13:
          return (
            (t = t.nodeType === 8 ? t : null),
            t !== null &&
              ((n =
                ba === null
                  ? null
                  : {
                      id: xa,
                      overflow: Sa,
                    }),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Zl(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Da = e),
              (Oa = null),
              !0)
          );
        default:
          return !1;
      }
    }
    function Ma(e) {
      return !!(e.mode & 1) && !(e.flags & 128);
    }
    function Na(e) {
      if (B) {
        var t = Oa;
        if (t) {
          var n = t;
          if (!ja(e, t)) {
            if (Ma(e)) throw Error(i(418));
            t = Ii(n.nextSibling);
            var r = Da;
            t && ja(e, t)
              ? Aa(r, n)
              : ((e.flags = (e.flags & -4097) | 2), (B = !1), (Da = e));
          }
        } else {
          if (Ma(e)) throw Error(i(418));
          ((e.flags = (e.flags & -4097) | 2), (B = !1), (Da = e));
        }
      }
    }
    function Pa(e) {
      for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
      )
        e = e.return;
      Da = e;
    }
    function Fa(e) {
      if (e !== Da) return !1;
      if (!B) return (Pa(e), (B = !0), !1);
      var t;
      if (
        ((t = e.tag !== 3) &&
          !(t = e.tag !== 5) &&
          ((t = e.type),
          (t = t !== `head` && t !== `body` && !ki(e.type, e.memoizedProps))),
        (t &&= Oa))
      ) {
        if (Ma(e)) throw (Ia(), Error(i(418)));
        for (; t; ) (Aa(e, t), (t = Ii(t.nextSibling)));
      }
      if ((Pa(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        a: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (e.nodeType === 8) {
              var n = e.data;
              if (n === `/$`) {
                if (t === 0) {
                  Oa = Ii(e.nextSibling);
                  break a;
                }
                t--;
              } else (n !== `$` && n !== `$!` && n !== `$?`) || t++;
            }
            e = e.nextSibling;
          }
          Oa = null;
        }
      } else Oa = Da ? Ii(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Ia() {
      for (var e = Oa; e; ) e = Ii(e.nextSibling);
    }
    function La() {
      ((Oa = Da = null), (B = !1));
    }
    function Ra(e) {
      ka === null ? (ka = [e]) : ka.push(e);
    }
    var za = C.ReactCurrentBatchConfig;
    function Ba(e, t, n) {
      if (
        ((e = n.ref),
        e !== null && typeof e != `function` && typeof e != `object`)
      ) {
        if (n._owner) {
          if (((n = n._owner), n)) {
            if (n.tag !== 1) throw Error(i(309));
            var r = n.stateNode;
          }
          if (!r) throw Error(i(147, e));
          var a = r,
            o = `` + e;
          return t !== null &&
            t.ref !== null &&
            typeof t.ref == `function` &&
            t.ref._stringRef === o
            ? t.ref
            : ((t = function (e) {
                var t = a.refs;
                e === null ? delete t[o] : (t[o] = e);
              }),
              (t._stringRef = o),
              t);
        }
        if (typeof e != `string`) throw Error(i(284));
        if (!n._owner) throw Error(i(290, e));
      }
      return e;
    }
    function Va(e, t) {
      throw (
        (e = Object.prototype.toString.call(t)),
        Error(
          i(
            31,
            e === `[object Object]`
              ? `object with keys {` + Object.keys(t).join(`, `) + `}`
              : e,
          ),
        )
      );
    }
    function Ha(e) {
      var t = e._init;
      return t(e._payload);
    }
    function Ua(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null; ) (t(n, r), (r = r.sibling));
        return null;
      }
      function r(e, t) {
        for (e = new Map(); t !== null; )
          (t.key === null ? e.set(t.index, t) : e.set(t.key, t),
            (t = t.sibling));
        return e;
      }
      function a(e, t) {
        return ((e = eu(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 2), n)
                : ((r = r.index), r < n ? ((t.flags |= 2), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 2), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = iu(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === ee
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` &&
                  i &&
                  i.$$typeof === oe &&
                  Ha(i) === t.type))
            ? ((r = a(t, n.props)), (r.ref = Ba(e, t, n)), (r.return = e), r)
            : ((r = tu(n.type, n.key, n.props, null, e.mode, r)),
              (r.ref = Ba(e, t, n)),
              (r.return = e),
              r);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = au(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = nu(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if ((typeof t == `string` && t !== ``) || typeof t == `number`)
          return ((t = iu(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case w:
              return (
                (n = tu(t.type, t.key, t.props, null, e.mode, n)),
                (n.ref = Ba(e, null, t)),
                (n.return = e),
                n
              );
            case T:
              return ((t = au(t, e.mode, n)), (t.return = e), t);
            case oe:
              var r = t._init;
              return f(e, r(t._payload), n);
          }
          if (De(t) || ce(t))
            return ((t = nu(t, e.mode, n, null)), (t.return = e), t);
          Va(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if ((typeof n == `string` && n !== ``) || typeof n == `number`)
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case w:
              return n.key === i ? l(e, t, n, r) : null;
            case T:
              return n.key === i ? u(e, t, n, r) : null;
            case oe:
              return ((i = n._init), p(e, t, i(n._payload), r));
          }
          if (De(n) || ce(n)) return i === null ? d(e, t, n, r, null) : null;
          Va(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if ((typeof r == `string` && r !== ``) || typeof r == `number`)
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case w:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                l(t, e, r, i)
              );
            case T:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                u(t, e, r, i)
              );
            case oe:
              var a = r._init;
              return m(e, t, n, a(r._payload), i);
          }
          if (De(r) || ce(r))
            return ((e = e.get(n) || null), d(t, e, r, i, null));
          Va(t, r);
        }
        return null;
      }
      function h(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          (e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g));
        }
        if (h === s.length) return (n(i, d), B && Ca(i, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(i, s[h], c)),
              d !== null &&
                ((a = o(d, a, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d)));
          return (B && Ca(i, h), l);
        }
        for (d = r(i, d); h < s.length; h++)
          ((g = m(d, i, h, s[h], c)),
            g !== null &&
              (e &&
                g.alternate !== null &&
                d.delete(g.key === null ? h : g.key),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          B && Ca(i, h),
          l
        );
      }
      function g(a, s, c, l) {
        var u = ce(c);
        if (typeof u != `function`) throw Error(i(150));
        if (((c = u.call(c)), c == null)) throw Error(i(151));
        for (
          var d = (u = null), h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(a, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          (e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _));
        }
        if (v.done) return (n(a, h), B && Ca(a, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null &&
                ((s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v)));
          return (B && Ca(a, g), u);
        }
        for (h = r(a, h); !v.done; g++, v = c.next())
          ((v = m(h, a, g, v.value, l)),
            v !== null &&
              (e &&
                v.alternate !== null &&
                h.delete(v.key === null ? g : v.key),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          B && Ca(a, g),
          u
        );
      }
      function _(e, r, i, o) {
        if (
          (typeof i == `object` &&
            i &&
            i.type === ee &&
            i.key === null &&
            (i = i.props.children),
          typeof i == `object` && i)
        ) {
          switch (i.$$typeof) {
            case w:
              a: {
                for (var c = i.key, l = r; l !== null; ) {
                  if (l.key === c) {
                    if (((c = i.type), c === ee)) {
                      if (l.tag === 7) {
                        (n(e, l.sibling),
                          (r = a(l, i.props.children)),
                          (r.return = e),
                          (e = r));
                        break a;
                      }
                    } else if (
                      l.elementType === c ||
                      (typeof c == `object` &&
                        c &&
                        c.$$typeof === oe &&
                        Ha(c) === l.type)
                    ) {
                      (n(e, l.sibling),
                        (r = a(l, i.props)),
                        (r.ref = Ba(e, l, i)),
                        (r.return = e),
                        (e = r));
                      break a;
                    }
                    n(e, l);
                    break;
                  }
                  (t(e, l), (l = l.sibling));
                }
                i.type === ee
                  ? ((r = nu(i.props.children, e.mode, o, i.key)),
                    (r.return = e),
                    (e = r))
                  : ((o = tu(i.type, i.key, i.props, null, e.mode, o)),
                    (o.ref = Ba(e, r, i)),
                    (o.return = e),
                    (e = o));
              }
              return s(e);
            case T:
              a: {
                for (l = i.key; r !== null; ) {
                  if (r.key === l)
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === i.containerInfo &&
                      r.stateNode.implementation === i.implementation
                    ) {
                      (n(e, r.sibling),
                        (r = a(r, i.children || [])),
                        (r.return = e),
                        (e = r));
                      break a;
                    } else {
                      n(e, r);
                      break;
                    }
                  (t(e, r), (r = r.sibling));
                }
                ((r = au(i, e.mode, o)), (r.return = e), (e = r));
              }
              return s(e);
            case oe:
              return ((l = i._init), _(e, r, l(i._payload), o));
          }
          if (De(i)) return h(e, r, i, o);
          if (ce(i)) return g(e, r, i, o);
          Va(e, i);
        }
        return (typeof i == `string` && i !== ``) || typeof i == `number`
          ? ((i = `` + i),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (r = a(r, i)), (r.return = e), (e = r))
              : (n(e, r), (r = iu(i, e.mode, o)), (r.return = e), (e = r)),
            s(e))
          : n(e, r);
      }
      return _;
    }
    var Wa = Ua(!0),
      Ga = Ua(!1),
      Ka = Zi(null),
      qa = null,
      Ja = null,
      Ya = null;
    function Xa() {
      Ya = Ja = qa = null;
    }
    function Za(e) {
      var t = Ka.current;
      (L(Ka), (e._currentValue = t));
    }
    function Qa(e, t, n) {
      for (; e !== null; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function $a(e, t) {
      ((qa = e),
        (Ya = Ja = null),
        (e = e.dependencies),
        e !== null &&
          e.firstContext !== null &&
          ((e.lanes & t) !== 0 && (Vs = !0), (e.firstContext = null)));
    }
    function eo(e) {
      var t = e._currentValue;
      if (Ya !== e)
        if (
          ((e = {
            context: e,
            memoizedValue: t,
            next: null,
          }),
          Ja === null)
        ) {
          if (qa === null) throw Error(i(308));
          ((Ja = e),
            (qa.dependencies = {
              lanes: 0,
              firstContext: e,
            }));
        } else Ja = Ja.next = e;
      return t;
    }
    var to = null;
    function no(e) {
      to === null ? (to = [e]) : to.push(e);
    }
    function ro(e, t, n, r) {
      var i = t.interleaved;
      return (
        i === null ? ((n.next = n), no(t)) : ((n.next = i.next), (i.next = n)),
        (t.interleaved = n),
        io(e, r)
      );
    }
    function io(e, t) {
      e.lanes |= t;
      var n = e.alternate;
      for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        ((e.childLanes |= t),
          (n = e.alternate),
          n !== null && (n.childLanes |= t),
          (n = e),
          (e = e.return));
      return n.tag === 3 ? n.stateNode : null;
    }
    var ao = !1;
    function oo(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: 0,
        },
        effects: null,
      };
    }
    function so(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          }));
    }
    function co(e, t) {
      return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function lo(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), q & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          io(e, n)
        );
      }
      return (
        (i = r.interleaved),
        i === null ? ((t.next = t), no(r)) : ((t.next = i.next), (i.next = t)),
        (r.interleaved = t),
        io(e, n)
      );
    }
    function uo(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194240))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Yt(e, n));
      }
    }
    function fo(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              eventTime: n.eventTime,
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: n.callback,
              next: null,
            };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          effects: r.effects,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    function po(e, t, n, r) {
      var i = e.updateQueue;
      ao = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var f = s.lane,
            p = s.eventTime;
          if ((r & f) === f) {
            u !== null &&
              (u = u.next =
                {
                  eventTime: p,
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                });
            a: {
              var m = e,
                h = s;
              switch (((f = t), (p = n), h.tag)) {
                case 1:
                  if (((m = h.payload), typeof m == `function`)) {
                    d = m.call(p, d, f);
                    break a;
                  }
                  d = m;
                  break a;
                case 3:
                  m.flags = (m.flags & -65537) | 128;
                case 0:
                  if (
                    ((m = h.payload),
                    (f = typeof m == `function` ? m.call(p, d, f) : m),
                    f == null)
                  )
                    break a;
                  d = A({}, d, f);
                  break a;
                case 2:
                  ao = !0;
              }
            }
            s.callback !== null &&
              s.lane !== 0 &&
              ((e.flags |= 64),
              (f = i.effects),
              f === null ? (i.effects = [s]) : f.push(s));
          } else
            ((p = {
              eventTime: p,
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((f = s),
              (s = f.next),
              (f.next = null),
              (i.lastBaseUpdate = f),
              (i.shared.pending = null));
          }
        } while (1);
        if (
          (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          (t = i.shared.interleaved),
          t !== null)
        ) {
          i = t;
          do ((o |= i.lane), (i = i.next));
          while (i !== t);
        } else a === null && (i.shared.lanes = 0);
        ((el |= o), (e.lanes = o), (e.memoizedState = d));
      }
    }
    function mo(e, t, n) {
      if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
          var r = e[t],
            a = r.callback;
          if (a !== null) {
            if (((r.callback = null), (r = n), typeof a != `function`))
              throw Error(i(191, a));
            a.call(r);
          }
        }
    }
    var ho = {},
      go = Zi(ho),
      _o = Zi(ho),
      vo = Zi(ho);
    function yo(e) {
      if (e === ho) throw Error(i(174));
      return e;
    }
    function bo(e, t) {
      switch ((R(vo, t), R(_o, e), R(go, ho), (e = t.nodeType), e)) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : Pe(null, ``);
          break;
        default:
          ((e = e === 8 ? t.parentNode : t),
            (t = e.namespaceURI || null),
            (e = e.tagName),
            (t = Pe(t, e)));
      }
      (L(go), R(go, t));
    }
    function xo() {
      (L(go), L(_o), L(vo));
    }
    function So(e) {
      yo(vo.current);
      var t = yo(go.current),
        n = Pe(t, e.type);
      t !== n && (R(_o, e), R(go, n));
    }
    function Co(e) {
      _o.current === e && (L(go), L(_o));
    }
    var V = Zi(0);
    function wo(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (
            n !== null &&
            ((n = n.dehydrated),
            n === null || n.data === `$?` || n.data === `$!`)
          )
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var To = [];
    function Eo() {
      for (var e = 0; e < To.length; e++)
        To[e]._workInProgressVersionPrimary = null;
      To.length = 0;
    }
    var Do = C.ReactCurrentDispatcher,
      Oo = C.ReactCurrentBatchConfig,
      ko = 0,
      H = null,
      Ao = null,
      jo = null,
      Mo = !1,
      No = !1,
      Po = 0,
      Fo = 0;
    function Io() {
      throw Error(i(321));
    }
    function Lo(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Fr(e[n], t[n])) return !1;
      return !0;
    }
    function Ro(e, t, n, r, a, o) {
      if (
        ((ko = o),
        (H = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Do.current = e === null || e.memoizedState === null ? xs : Ss),
        (e = n(r, a)),
        No)
      ) {
        o = 0;
        do {
          if (((No = !1), (Po = 0), 25 <= o)) throw Error(i(301));
          ((o += 1),
            (jo = Ao = null),
            (t.updateQueue = null),
            (Do.current = Cs),
            (e = n(r, a)));
        } while (No);
      }
      if (
        ((Do.current = bs),
        (t = Ao !== null && Ao.next !== null),
        (ko = 0),
        (jo = Ao = H = null),
        (Mo = !1),
        t)
      )
        throw Error(i(300));
      return e;
    }
    function zo() {
      var e = Po !== 0;
      return ((Po = 0), e);
    }
    function Bo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (
        jo === null ? (H.memoizedState = jo = e) : (jo = jo.next = e),
        jo
      );
    }
    function Vo() {
      if (Ao === null) {
        var e = H.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = Ao.next;
      var t = jo === null ? H.memoizedState : jo.next;
      if (t !== null) ((jo = t), (Ao = e));
      else {
        if (e === null) throw Error(i(310));
        ((Ao = e),
          (e = {
            memoizedState: Ao.memoizedState,
            baseState: Ao.baseState,
            baseQueue: Ao.baseQueue,
            queue: Ao.queue,
            next: null,
          }),
          jo === null ? (H.memoizedState = jo = e) : (jo = jo.next = e));
      }
      return jo;
    }
    function Ho(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function Uo(e) {
      var t = Vo(),
        n = t.queue;
      if (n === null) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = Ao,
        a = r.baseQueue,
        o = n.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          ((a.next = o.next), (o.next = s));
        }
        ((r.baseQueue = a = o), (n.pending = null));
      }
      if (a !== null) {
        ((o = a.next), (r = r.baseState));
        var c = (s = null),
          l = null,
          u = o;
        do {
          var d = u.lane;
          if ((ko & d) === d)
            (l !== null &&
              (l = l.next =
                {
                  lane: 0,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                }),
              (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
          else {
            var f = {
              lane: d,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            };
            (l === null ? ((c = l = f), (s = r)) : (l = l.next = f),
              (H.lanes |= d),
              (el |= d));
          }
          u = u.next;
        } while (u !== null && u !== o);
        (l === null ? (s = r) : (l.next = c),
          Fr(r, t.memoizedState) || (Vs = !0),
          (t.memoizedState = r),
          (t.baseState = s),
          (t.baseQueue = l),
          (n.lastRenderedState = r));
      }
      if (((e = n.interleaved), e !== null)) {
        a = e;
        do ((o = a.lane), (H.lanes |= o), (el |= o), (a = a.next));
        while (a !== e);
      } else a === null && (n.lanes = 0);
      return [t.memoizedState, n.dispatch];
    }
    function Wo(e) {
      var t = Vo(),
        n = t.queue;
      if (n === null) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = (a = a.next);
        do ((o = e(o, s.action)), (s = s.next));
        while (s !== a);
        (Fr(o, t.memoizedState) || (Vs = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function Go() {}
    function Ko(e, t) {
      var n = H,
        r = Vo(),
        a = t(),
        o = !Fr(r.memoizedState, a);
      if (
        (o && ((r.memoizedState = a), (Vs = !0)),
        (r = r.queue),
        is(Yo.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || (jo !== null && jo.memoizedState.tag & 1))
      ) {
        if (
          ((n.flags |= 2048),
          $o(9, Jo.bind(null, n, r, a, t), void 0, null),
          qc === null)
        )
          throw Error(i(349));
        ko & 30 || qo(n, t, a);
      }
      return a;
    }
    function qo(e, t, n) {
      ((e.flags |= 16384),
        (e = {
          getSnapshot: t,
          value: n,
        }),
        (t = H.updateQueue),
        t === null
          ? ((t = {
              lastEffect: null,
              stores: null,
            }),
            (H.updateQueue = t),
            (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function Jo(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Xo(t) && Zo(e));
    }
    function Yo(e, t, n) {
      return n(function () {
        Xo(t) && Zo(e);
      });
    }
    function Xo(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Fr(e, n);
      } catch {
        return !0;
      }
    }
    function Zo(e) {
      var t = io(e, 1);
      t !== null && bl(t, e, 1, -1);
    }
    function Qo(e) {
      var t = Bo();
      return (
        typeof e == `function` && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ho,
          lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = gs.bind(null, H, e)),
        [t.memoizedState, e]
      );
    }
    function $o(e, t, n, r) {
      return (
        (e = {
          tag: e,
          create: t,
          destroy: n,
          deps: r,
          next: null,
        }),
        (t = H.updateQueue),
        t === null
          ? ((t = {
              lastEffect: null,
              stores: null,
            }),
            (H.updateQueue = t),
            (t.lastEffect = e.next = e))
          : ((n = t.lastEffect),
            n === null
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
        e
      );
    }
    function es() {
      return Vo().memoizedState;
    }
    function ts(e, t, n, r) {
      var i = Bo();
      ((H.flags |= e),
        (i.memoizedState = $o(1 | t, n, void 0, r === void 0 ? null : r)));
    }
    function ns(e, t, n, r) {
      var i = Vo();
      r = r === void 0 ? null : r;
      var a = void 0;
      if (Ao !== null) {
        var o = Ao.memoizedState;
        if (((a = o.destroy), r !== null && Lo(r, o.deps))) {
          i.memoizedState = $o(t, n, a, r);
          return;
        }
      }
      ((H.flags |= e), (i.memoizedState = $o(1 | t, n, a, r)));
    }
    function rs(e, t) {
      return ts(8390656, 8, e, t);
    }
    function is(e, t) {
      return ns(2048, 8, e, t);
    }
    function as(e, t) {
      return ns(4, 2, e, t);
    }
    function os(e, t) {
      return ns(4, 4, e, t);
    }
    function ss(e, t) {
      if (typeof t == `function`)
        return (
          (e = e()),
          t(e),
          function () {
            t(null);
          }
        );
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function cs(e, t, n) {
      return (
        (n = n == null ? null : n.concat([e])),
        ns(4, 4, ss.bind(null, t, e), n)
      );
    }
    function ls() {}
    function us(e, t) {
      var n = Vo();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return r !== null && t !== null && Lo(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
    }
    function ds(e, t) {
      var n = Vo();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return r !== null && t !== null && Lo(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
    }
    function fs(e, t, n) {
      return ko & 21
        ? (Fr(n, t) ||
            ((n = Gt()), (H.lanes |= n), (el |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (Vs = !0)),
          (e.memoizedState = n));
    }
    function ps(e, t) {
      var n = M;
      ((M = n !== 0 && 4 > n ? n : 4), e(!0));
      var r = Oo.transition;
      Oo.transition = {};
      try {
        (e(!1), t());
      } finally {
        ((M = n), (Oo.transition = r));
      }
    }
    function ms() {
      return Vo().memoizedState;
    }
    function hs(e, t, n) {
      var r = yl(e);
      if (
        ((n = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        _s(e))
      )
        vs(t, n);
      else if (((n = ro(e, t, n, r)), n !== null)) {
        var i = vl();
        (bl(n, e, r, i), ys(n, t, r));
      }
    }
    function gs(e, t, n) {
      var r = yl(e),
        i = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (_s(e)) vs(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), Fr(s, o))) {
              var c = t.interleaved;
              (c === null
                ? ((i.next = i), no(t))
                : ((i.next = c.next), (c.next = i)),
                (t.interleaved = i));
              return;
            }
          } catch {}
        ((n = ro(e, t, i, r)),
          n !== null && ((i = vl()), bl(n, e, r, i), ys(n, t, r)));
      }
    }
    function _s(e) {
      var t = e.alternate;
      return e === H || (t !== null && t === H);
    }
    function vs(e, t) {
      No = Mo = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t));
    }
    function ys(e, t, n) {
      if (n & 4194240) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Yt(e, n));
      }
    }
    var bs = {
        readContext: eo,
        useCallback: Io,
        useContext: Io,
        useEffect: Io,
        useImperativeHandle: Io,
        useInsertionEffect: Io,
        useLayoutEffect: Io,
        useMemo: Io,
        useReducer: Io,
        useRef: Io,
        useState: Io,
        useDebugValue: Io,
        useDeferredValue: Io,
        useTransition: Io,
        useMutableSource: Io,
        useSyncExternalStore: Io,
        useId: Io,
        unstable_isNewReconciler: !1,
      },
      xs = {
        readContext: eo,
        useCallback: function (e, t) {
          return ((Bo().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: eo,
        useEffect: rs,
        useImperativeHandle: function (e, t, n) {
          return (
            (n = n == null ? null : n.concat([e])),
            ts(4194308, 4, ss.bind(null, t, e), n)
          );
        },
        useLayoutEffect: function (e, t) {
          return ts(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          return ts(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Bo();
          return (
            (t = t === void 0 ? null : t),
            (e = e()),
            (n.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function (e, t, n) {
          var r = Bo();
          return (
            (t = n === void 0 ? t : n(t)),
            (r.memoizedState = r.baseState = t),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t,
            }),
            (r.queue = e),
            (e = e.dispatch = hs.bind(null, H, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Bo();
          return (
            (e = {
              current: e,
            }),
            (t.memoizedState = e)
          );
        },
        useState: Qo,
        useDebugValue: ls,
        useDeferredValue: function (e) {
          return (Bo().memoizedState = e);
        },
        useTransition: function () {
          var e = Qo(!1),
            t = e[0];
          return ((e = ps.bind(null, e[1])), (Bo().memoizedState = e), [t, e]);
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
          var r = H,
            a = Bo();
          if (B) {
            if (n === void 0) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), qc === null)) throw Error(i(349));
            ko & 30 || qo(r, t, n);
          }
          a.memoizedState = n;
          var o = {
            value: n,
            getSnapshot: t,
          };
          return (
            (a.queue = o),
            rs(Yo.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            $o(9, Jo.bind(null, r, o, n, t), void 0, null),
            n
          );
        },
        useId: function () {
          var e = Bo(),
            t = qc.identifierPrefix;
          if (B) {
            var n = Sa,
              r = xa;
            ((n = (r & ~(1 << (32 - Pt(r) - 1))).toString(32) + n),
              (t = `:` + t + `R` + n),
              (n = Po++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `:`));
          } else ((n = Fo++), (t = `:` + t + `r` + n.toString(32) + `:`));
          return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
      },
      Ss = {
        readContext: eo,
        useCallback: us,
        useContext: eo,
        useEffect: is,
        useImperativeHandle: cs,
        useInsertionEffect: as,
        useLayoutEffect: os,
        useMemo: ds,
        useReducer: Uo,
        useRef: es,
        useState: function () {
          return Uo(Ho);
        },
        useDebugValue: ls,
        useDeferredValue: function (e) {
          return fs(Vo(), Ao.memoizedState, e);
        },
        useTransition: function () {
          return [Uo(Ho)[0], Vo().memoizedState];
        },
        useMutableSource: Go,
        useSyncExternalStore: Ko,
        useId: ms,
        unstable_isNewReconciler: !1,
      },
      Cs = {
        readContext: eo,
        useCallback: us,
        useContext: eo,
        useEffect: is,
        useImperativeHandle: cs,
        useInsertionEffect: as,
        useLayoutEffect: os,
        useMemo: ds,
        useReducer: Wo,
        useRef: es,
        useState: function () {
          return Wo(Ho);
        },
        useDebugValue: ls,
        useDeferredValue: function (e) {
          var t = Vo();
          return Ao === null
            ? (t.memoizedState = e)
            : fs(t, Ao.memoizedState, e);
        },
        useTransition: function () {
          return [Wo(Ho)[0], Vo().memoizedState];
        },
        useMutableSource: Go,
        useSyncExternalStore: Ko,
        useId: ms,
        unstable_isNewReconciler: !1,
      };
    function ws(e, t) {
      if (e && e.defaultProps) {
        for (var n in ((t = A({}, t)), (e = e.defaultProps), e))
          t[n] === void 0 && (t[n] = e[n]);
        return t;
      }
      return t;
    }
    function Ts(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : A({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Es = {
      isMounted: function (e) {
        return (e = e._reactInternals) ? mt(e) === e : !1;
      },
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = vl(),
          i = yl(e),
          a = co(r, i);
        ((a.payload = t),
          n != null && (a.callback = n),
          (t = lo(e, a, i)),
          t !== null && (bl(t, e, i, r), uo(t, e, i)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = vl(),
          i = yl(e),
          a = co(r, i);
        ((a.tag = 1),
          (a.payload = t),
          n != null && (a.callback = n),
          (t = lo(e, a, i)),
          t !== null && (bl(t, e, i, r), uo(t, e, i)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = vl(),
          r = yl(e),
          i = co(n, r);
        ((i.tag = 2),
          t != null && (i.callback = t),
          (t = lo(e, i, r)),
          t !== null && (bl(t, e, r, n), uo(t, e, r)));
      },
    };
    function Ds(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Ir(n, r) || !Ir(i, a)
            : !0
      );
    }
    function Os(e, t, n) {
      var r = !1,
        i = Qi,
        a = t.contextType;
      return (
        typeof a == `object` && a
          ? (a = eo(a))
          : ((i = ra(t) ? ta : $i.current),
            (r = t.contextTypes),
            (a = (r = r != null) ? na(e, i) : Qi)),
        (t = new t(n, a)),
        (e.memoizedState =
          t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Es),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = i),
          (e.__reactInternalMemoizedMaskedChildContext = a)),
        t
      );
    }
    function ks(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Es.enqueueReplaceState(t, t.state, null));
    }
    function As(e, t, n, r) {
      var i = e.stateNode;
      ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), oo(e));
      var a = t.contextType;
      (typeof a == `object` && a
        ? (i.context = eo(a))
        : ((a = ra(t) ? ta : $i.current), (i.context = na(e, a))),
        (i.state = e.memoizedState),
        (a = t.getDerivedStateFromProps),
        typeof a == `function` && (Ts(e, t, a, n), (i.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == `function` ||
          typeof i.getSnapshotBeforeUpdate == `function` ||
          (typeof i.UNSAFE_componentWillMount != `function` &&
            typeof i.componentWillMount != `function`) ||
          ((t = i.state),
          typeof i.componentWillMount == `function` && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == `function` &&
            i.UNSAFE_componentWillMount(),
          t !== i.state && Es.enqueueReplaceState(i, i.state, null),
          po(e, n, i, r),
          (i.state = e.memoizedState)),
        typeof i.componentDidMount == `function` && (e.flags |= 4194308));
    }
    function js(e, t) {
      try {
        var n = ``,
          r = t;
        do ((n += fe(r)), (r = r.return));
        while (r);
        var i = n;
      } catch (e) {
        i =
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack;
      }
      return {
        value: e,
        source: t,
        stack: i,
        digest: null,
      };
    }
    function Ms(e, t, n) {
      return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null,
      };
    }
    function Ns(e, t) {
      try {
        console.error(t.value);
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    var Ps = typeof WeakMap == `function` ? WeakMap : Map;
    function Fs(e, t, n) {
      ((n = co(-1, n)),
        (n.tag = 3),
        (n.payload = {
          element: null,
        }));
      var r = t.value;
      return (
        (n.callback = function () {
          (cl || ((cl = !0), (ll = r)), Ns(e, t));
        }),
        n
      );
    }
    function Is(e, t, n) {
      ((n = co(-1, n)), (n.tag = 3));
      var r = e.type.getDerivedStateFromError;
      if (typeof r == `function`) {
        var i = t.value;
        ((n.payload = function () {
          return r(i);
        }),
          (n.callback = function () {
            Ns(e, t);
          }));
      }
      var a = e.stateNode;
      return (
        a !== null &&
          typeof a.componentDidCatch == `function` &&
          (n.callback = function () {
            (Ns(e, t),
              typeof r != `function` &&
                (ul === null ? (ul = new Set([this])) : ul.add(this)));
            var n = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: n === null ? `` : n,
            });
          }),
        n
      );
    }
    function Ls(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new Ps();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) || (i.add(n), (e = Wl.bind(null, e, t, n)), t.then(e, e));
    }
    function Rs(e) {
      do {
        var t;
        if (
          ((t = e.tag === 13) &&
            ((t = e.memoizedState), (t = t === null || t.dehydrated !== null)),
          t)
        )
          return e;
        e = e.return;
      } while (e !== null);
      return null;
    }
    function zs(e, t, n, r, i) {
      return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = i), e)
        : (e === t
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
              (n.flags |= 131072),
              (n.flags &= -52805),
              n.tag === 1 &&
                (n.alternate === null
                  ? (n.tag = 17)
                  : ((t = co(-1, 1)), (t.tag = 2), lo(n, t, 1))),
              (n.lanes |= 1)),
          e);
    }
    var Bs = C.ReactCurrentOwner,
      Vs = !1;
    function Hs(e, t, n, r) {
      t.child = e === null ? Ga(t, null, n, r) : Wa(t, e.child, n, r);
    }
    function Us(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      return (
        $a(t, i),
        (r = Ro(e, t, n, r, a, i)),
        (n = zo()),
        e !== null && !Vs
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~i),
            lc(e, t, i))
          : (B && n && Ta(t), (t.flags |= 1), Hs(e, t, r, i), t.child)
      );
    }
    function Ws(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !Ql(a) &&
          a.defaultProps === void 0 &&
          n.compare === null &&
          n.defaultProps === void 0
          ? ((t.tag = 15), (t.type = a), Gs(e, t, a, r, i))
          : ((e = tu(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), (e.lanes & i) === 0)) {
        var o = a.memoizedProps;
        if (
          ((n = n.compare),
          (n = n === null ? Ir : n),
          n(o, r) && e.ref === t.ref)
        )
          return lc(e, t, i);
      }
      return (
        (t.flags |= 1),
        (e = eu(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function Gs(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (Ir(a, r) && e.ref === t.ref)
          if (((Vs = !1), (t.pendingProps = r = a), (e.lanes & i) !== 0))
            e.flags & 131072 && (Vs = !0);
          else return ((t.lanes = e.lanes), lc(e, t, i));
      }
      return Js(e, t, n, r, i);
    }
    function Ks(e, t, n) {
      var r = t.pendingProps,
        i = r.children,
        a = e === null ? null : e.memoizedState;
      if (r.mode === `hidden`)
        if (!(t.mode & 1))
          ((t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            R(Zc, Xc),
            (Xc |= n));
        else {
          if (!(n & 1073741824))
            return (
              (e = a === null ? n : a.baseLanes | n),
              (t.lanes = t.childLanes = 1073741824),
              (t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null,
              }),
              (t.updateQueue = null),
              R(Zc, Xc),
              (Xc |= e),
              null
            );
          ((t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            (r = a === null ? n : a.baseLanes),
            R(Zc, Xc),
            (Xc |= r));
        }
      else
        (a === null
          ? (r = n)
          : ((r = a.baseLanes | n), (t.memoizedState = null)),
          R(Zc, Xc),
          (Xc |= r));
      return (Hs(e, t, i, n), t.child);
    }
    function qs(e, t) {
      var n = t.ref;
      ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
    }
    function Js(e, t, n, r, i) {
      var a = ra(n) ? ta : $i.current;
      return (
        (a = na(t, a)),
        $a(t, i),
        (n = Ro(e, t, n, r, a, i)),
        (r = zo()),
        e !== null && !Vs
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~i),
            lc(e, t, i))
          : (B && r && Ta(t), (t.flags |= 1), Hs(e, t, n, i), t.child)
      );
    }
    function Ys(e, t, n, r, i) {
      if (ra(n)) {
        var a = !0;
        sa(t);
      } else a = !1;
      if (($a(t, i), t.stateNode === null))
        (cc(e, t), Os(t, n, r), As(t, n, r, i), (r = !0));
      else if (e === null) {
        var o = t.stateNode,
          s = t.memoizedProps;
        o.props = s;
        var c = o.context,
          l = n.contextType;
        typeof l == `object` && l
          ? (l = eo(l))
          : ((l = ra(n) ? ta : $i.current), (l = na(t, l)));
        var u = n.getDerivedStateFromProps,
          d =
            typeof u == `function` ||
            typeof o.getSnapshotBeforeUpdate == `function`;
        (d ||
          (typeof o.UNSAFE_componentWillReceiveProps != `function` &&
            typeof o.componentWillReceiveProps != `function`) ||
          ((s !== r || c !== l) && ks(t, o, r, l)),
          (ao = !1));
        var f = t.memoizedState;
        ((o.state = f),
          po(t, r, o, i),
          (c = t.memoizedState),
          s !== r || f !== c || ea.current || ao
            ? (typeof u == `function` &&
                (Ts(t, n, u, r), (c = t.memoizedState)),
              (s = ao || Ds(t, n, s, r, f, c, l))
                ? (d ||
                    (typeof o.UNSAFE_componentWillMount != `function` &&
                      typeof o.componentWillMount != `function`) ||
                    (typeof o.componentWillMount == `function` &&
                      o.componentWillMount(),
                    typeof o.UNSAFE_componentWillMount == `function` &&
                      o.UNSAFE_componentWillMount()),
                  typeof o.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof o.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = c)),
              (o.props = r),
              (o.state = c),
              (o.context = l),
              (r = s))
            : (typeof o.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1)));
      } else {
        ((o = t.stateNode),
          so(e, t),
          (s = t.memoizedProps),
          (l = t.type === t.elementType ? s : ws(t.type, s)),
          (o.props = l),
          (d = t.pendingProps),
          (f = o.context),
          (c = n.contextType),
          typeof c == `object` && c
            ? (c = eo(c))
            : ((c = ra(n) ? ta : $i.current), (c = na(t, c))));
        var p = n.getDerivedStateFromProps;
        ((u =
          typeof p == `function` ||
          typeof o.getSnapshotBeforeUpdate == `function`) ||
          (typeof o.UNSAFE_componentWillReceiveProps != `function` &&
            typeof o.componentWillReceiveProps != `function`) ||
          ((s !== d || f !== c) && ks(t, o, r, c)),
          (ao = !1),
          (f = t.memoizedState),
          (o.state = f),
          po(t, r, o, i));
        var m = t.memoizedState;
        s !== d || f !== m || ea.current || ao
          ? (typeof p == `function` && (Ts(t, n, p, r), (m = t.memoizedState)),
            (l = ao || Ds(t, n, l, r, f, m, c) || !1)
              ? (u ||
                  (typeof o.UNSAFE_componentWillUpdate != `function` &&
                    typeof o.componentWillUpdate != `function`) ||
                  (typeof o.componentWillUpdate == `function` &&
                    o.componentWillUpdate(r, m, c),
                  typeof o.UNSAFE_componentWillUpdate == `function` &&
                    o.UNSAFE_componentWillUpdate(r, m, c)),
                typeof o.componentDidUpdate == `function` && (t.flags |= 4),
                typeof o.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof o.componentDidUpdate != `function` ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof o.getSnapshotBeforeUpdate != `function` ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = m)),
            (o.props = r),
            (o.state = m),
            (o.context = c),
            (r = l))
          : (typeof o.componentDidUpdate != `function` ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != `function` ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return Xs(e, t, n, r, a, i);
    }
    function Xs(e, t, n, r, i, a) {
      qs(e, t);
      var o = !!(t.flags & 128);
      if (!r && !o) return (i && z(t, n, !1), lc(e, t, a));
      ((r = t.stateNode), (Bs.current = t));
      var s =
        o && typeof n.getDerivedStateFromError != `function`
          ? null
          : r.render();
      return (
        (t.flags |= 1),
        e !== null && o
          ? ((t.child = Wa(t, e.child, null, a)), (t.child = Wa(t, null, s, a)))
          : Hs(e, t, s, a),
        (t.memoizedState = r.state),
        i && z(t, n, !0),
        t.child
      );
    }
    function Zs(e) {
      var t = e.stateNode;
      (t.pendingContext
        ? aa(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && aa(e, t.context, !1),
        bo(e, t.containerInfo));
    }
    function Qs(e, t, n, r, i) {
      return (La(), Ra(i), (t.flags |= 256), Hs(e, t, n, r), t.child);
    }
    var $s = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
    };
    function ec(e) {
      return {
        baseLanes: e,
        cachePool: null,
        transitions: null,
      };
    }
    function tc(e, t, n) {
      var r = t.pendingProps,
        i = V.current,
        a = !1,
        o = !!(t.flags & 128),
        s;
      if (
        ((s = o) ||
          (s = e !== null && e.memoizedState === null ? !1 : !!(i & 2)),
        s
          ? ((a = !0), (t.flags &= -129))
          : (e === null || e.memoizedState !== null) && (i |= 1),
        R(V, i & 1),
        e === null)
      )
        return (
          Na(t),
          (e = t.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)
            ? ((t.lanes = t.mode & 1 ? (e.data === `$!` ? 8 : 1073741824) : 1),
              null)
            : ((o = r.children),
              (e = r.fallback),
              a
                ? ((r = t.mode),
                  (a = t.child),
                  (o = {
                    mode: `hidden`,
                    children: o,
                  }),
                  !(r & 1) && a !== null
                    ? ((a.childLanes = 0), (a.pendingProps = o))
                    : (a = ru(o, r, 0, null)),
                  (e = nu(e, r, n, null)),
                  (a.return = t),
                  (e.return = t),
                  (a.sibling = e),
                  (t.child = a),
                  (t.child.memoizedState = ec(n)),
                  (t.memoizedState = $s),
                  e)
                : nc(t, o))
        );
      if (
        ((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null))
      )
        return ic(e, t, o, r, s, i, n);
      if (a) {
        ((a = r.fallback), (o = t.mode), (i = e.child), (s = i.sibling));
        var c = {
          mode: `hidden`,
          children: r.children,
        };
        return (
          !(o & 1) && t.child !== i
            ? ((r = t.child),
              (r.childLanes = 0),
              (r.pendingProps = c),
              (t.deletions = null))
            : ((r = eu(i, c)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
          s === null
            ? ((a = nu(a, o, n, null)), (a.flags |= 2))
            : (a = eu(s, a)),
          (a.return = t),
          (r.return = t),
          (r.sibling = a),
          (t.child = r),
          (r = a),
          (a = t.child),
          (o = e.child.memoizedState),
          (o =
            o === null
              ? ec(n)
              : {
                  baseLanes: o.baseLanes | n,
                  cachePool: null,
                  transitions: o.transitions,
                }),
          (a.memoizedState = o),
          (a.childLanes = e.childLanes & ~n),
          (t.memoizedState = $s),
          r
        );
      }
      return (
        (a = e.child),
        (e = a.sibling),
        (r = eu(a, {
          mode: `visible`,
          children: r.children,
        })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
          ((n = t.deletions),
          n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
      );
    }
    function nc(e, t) {
      return (
        (t = ru(
          {
            mode: `visible`,
            children: t,
          },
          e.mode,
          0,
          null,
        )),
        (t.return = e),
        (e.child = t)
      );
    }
    function rc(e, t, n, r) {
      return (
        r !== null && Ra(r),
        Wa(t, e.child, null, n),
        (e = nc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function ic(e, t, n, r, a, o, s) {
      if (n)
        return t.flags & 256
          ? ((t.flags &= -257), (r = Ms(Error(i(422)))), rc(e, t, s, r))
          : t.memoizedState === null
            ? ((o = r.fallback),
              (a = t.mode),
              (r = ru(
                {
                  mode: `visible`,
                  children: r.children,
                },
                a,
                0,
                null,
              )),
              (o = nu(o, a, s, null)),
              (o.flags |= 2),
              (r.return = t),
              (o.return = t),
              (r.sibling = o),
              (t.child = r),
              t.mode & 1 && Wa(t, e.child, null, s),
              (t.child.memoizedState = ec(s)),
              (t.memoizedState = $s),
              o)
            : ((t.child = e.child), (t.flags |= 128), null);
      if (!(t.mode & 1)) return rc(e, t, s, null);
      if (a.data === `$!`) {
        if (((r = a.nextSibling && a.nextSibling.dataset), r)) var c = r.dgst;
        return (
          (r = c),
          (o = Error(i(419))),
          (r = Ms(o, r, void 0)),
          rc(e, t, s, r)
        );
      }
      if (((c = (s & e.childLanes) !== 0), Vs || c)) {
        if (((r = qc), r !== null)) {
          switch (s & -s) {
            case 4:
              a = 2;
              break;
            case 16:
              a = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              a = 32;
              break;
            case 536870912:
              a = 268435456;
              break;
            default:
              a = 0;
          }
          ((a = (a & (r.suspendedLanes | s)) === 0 ? a : 0),
            a !== 0 &&
              a !== o.retryLane &&
              ((o.retryLane = a), io(e, a), bl(r, e, a, -1)));
        }
        return (Pl(), (r = Ms(Error(i(421)))), rc(e, t, s, r));
      }
      return a.data === `$?`
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = Kl.bind(null, e)),
          (a._reactRetry = t),
          null)
        : ((e = o.treeContext),
          (Oa = Ii(a.nextSibling)),
          (Da = t),
          (B = !0),
          (ka = null),
          e !== null &&
            ((va[ya++] = xa),
            (va[ya++] = Sa),
            (va[ya++] = ba),
            (xa = e.id),
            (Sa = e.overflow),
            (ba = t)),
          (t = nc(t, r.children)),
          (t.flags |= 4096),
          t);
    }
    function ac(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), Qa(e.return, t, n));
    }
    function oc(e, t, n, r, i) {
      var a = e.memoizedState;
      a === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
          })
        : ((a.isBackwards = t),
          (a.rendering = null),
          (a.renderingStartTime = 0),
          (a.last = r),
          (a.tail = n),
          (a.tailMode = i));
    }
    function sc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      if ((Hs(e, t, r.children, n), (r = V.current), r & 2))
        ((r = (r & 1) | 2), (t.flags |= 128));
      else {
        if (e !== null && e.flags & 128)
          a: for (e = t.child; e !== null; ) {
            if (e.tag === 13) e.memoizedState !== null && ac(e, n, t);
            else if (e.tag === 19) ac(e, n, t);
            else if (e.child !== null) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break a;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break a;
              e = e.return;
            }
            ((e.sibling.return = e.return), (e = e.sibling));
          }
        r &= 1;
      }
      if ((R(V, r), !(t.mode & 1))) t.memoizedState = null;
      else
        switch (i) {
          case `forwards`:
            for (n = t.child, i = null; n !== null; )
              ((e = n.alternate),
                e !== null && wo(e) === null && (i = n),
                (n = n.sibling));
            ((n = i),
              n === null
                ? ((i = t.child), (t.child = null))
                : ((i = n.sibling), (n.sibling = null)),
              oc(t, !1, i, n, a));
            break;
          case `backwards`:
            for (n = null, i = t.child, t.child = null; i !== null; ) {
              if (((e = i.alternate), e !== null && wo(e) === null)) {
                t.child = i;
                break;
              }
              ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
            }
            oc(t, !0, n, null, a);
            break;
          case `together`:
            oc(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function cc(e, t) {
      !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function lc(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (el |= t.lanes),
        (n & t.childLanes) === 0)
      )
        return null;
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (
          e = t.child, n = eu(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling),
            (n = n.sibling = eu(e, e.pendingProps)),
            (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function uc(e, t, n) {
      switch (t.tag) {
        case 3:
          (Zs(t), La());
          break;
        case 5:
          So(t);
          break;
        case 1:
          ra(t.type) && sa(t);
          break;
        case 4:
          bo(t, t.stateNode.containerInfo);
          break;
        case 10:
          var r = t.type._context,
            i = t.memoizedProps.value;
          (R(Ka, r._currentValue), (r._currentValue = i));
          break;
        case 13:
          if (((r = t.memoizedState), r !== null))
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (R(V, V.current & 1),
                  (e = lc(e, t, n)),
                  e === null ? null : e.sibling)
                : tc(e, t, n)
              : (R(V, V.current & 1), (t.flags |= 128), null);
          R(V, V.current & 1);
          break;
        case 19:
          if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
            if (r) return sc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            R(V, V.current),
            r)
          )
            break;
          return null;
        case 22:
        case 23:
          return ((t.lanes = 0), Ks(e, t, n));
      }
      return lc(e, t, n);
    }
    var dc = function (e, t) {
        for (var n = t.child; n !== null; ) {
          if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
          else if (n.tag !== 4 && n.child !== null) {
            ((n.child.return = n), (n = n.child));
            continue;
          }
          if (n === t) break;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
          }
          ((n.sibling.return = n.return), (n = n.sibling));
        }
      },
      fc = function (e, t, n, r) {
        var i = e.memoizedProps;
        if (i !== r) {
          ((e = t.stateNode), yo(go.current));
          var a = null;
          switch (n) {
            case `input`:
              ((i = xe(e, i)), (r = xe(e, r)), (a = []));
              break;
            case `select`:
              ((i = A({}, i, {
                value: void 0,
              })),
                (r = A({}, r, {
                  value: void 0,
                })),
                (a = []));
              break;
            case `textarea`:
              ((i = ke(e, i)), (r = ke(e, r)), (a = []));
              break;
            default:
              typeof i.onClick != `function` &&
                typeof r.onClick == `function` &&
                (e.onclick = Ei);
          }
          Ue(n, r);
          var s;
          for (u in ((n = null), i))
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
              if (u === `style`) {
                var c = i[u];
                for (s in c) c.hasOwnProperty(s) && ((n ||= {}), (n[s] = ``));
              } else
                u !== `dangerouslySetInnerHTML` &&
                  u !== `children` &&
                  u !== `suppressContentEditableWarning` &&
                  u !== `suppressHydrationWarning` &&
                  u !== `autoFocus` &&
                  (o.hasOwnProperty(u) ? (a ||= []) : (a ||= []).push(u, null));
          for (u in r) {
            var l = r[u];
            if (
              ((c = i?.[u]),
              r.hasOwnProperty(u) && l !== c && (l != null || c != null))
            )
              if (u === `style`)
                if (c) {
                  for (s in c)
                    !c.hasOwnProperty(s) ||
                      (l && l.hasOwnProperty(s)) ||
                      ((n ||= {}), (n[s] = ``));
                  for (s in l)
                    l.hasOwnProperty(s) &&
                      c[s] !== l[s] &&
                      ((n ||= {}), (n[s] = l[s]));
                } else (n || ((a ||= []), a.push(u, n)), (n = l));
              else
                u === `dangerouslySetInnerHTML`
                  ? ((l = l ? l.__html : void 0),
                    (c = c ? c.__html : void 0),
                    l != null && c !== l && (a ||= []).push(u, l))
                  : u === `children`
                    ? (typeof l != `string` && typeof l != `number`) ||
                      (a ||= []).push(u, `` + l)
                    : u !== `suppressContentEditableWarning` &&
                      u !== `suppressHydrationWarning` &&
                      (o.hasOwnProperty(u)
                        ? (l != null && u === `onScroll` && I(`scroll`, e),
                          a || c === l || (a = []))
                        : (a ||= []).push(u, l));
          }
          n && (a ||= []).push(`style`, n);
          var u = a;
          (t.updateQueue = u) && (t.flags |= 4);
        }
      },
      pc = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
      };
    function mc(e, t) {
      if (!B)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null; )
              (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null; )
              (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function hc(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 14680064),
            (r |= i.flags & 14680064),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function gc(e, t, n) {
      var r = t.pendingProps;
      switch ((Ea(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (hc(t), null);
        case 1:
          return (ra(t.type) && ia(), hc(t), null);
        case 3:
          return (
            (r = t.stateNode),
            xo(),
            L(ea),
            L($i),
            Eo(),
            r.pendingContext &&
              ((r.context = r.pendingContext), (r.pendingContext = null)),
            (e === null || e.child === null) &&
              (Fa(t)
                ? (t.flags |= 4)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), ka !== null && (wl(ka), (ka = null)))),
            hc(t),
            null
          );
        case 5:
          Co(t);
          var a = yo(vo.current);
          if (((n = t.type), e !== null && t.stateNode != null))
            (fc(e, t, n, r, a),
              e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (hc(t), null);
            }
            if (((e = yo(go.current)), Fa(t))) {
              ((r = t.stateNode), (n = t.type));
              var s = t.memoizedProps;
              switch (((r[zi] = t), (r[Bi] = s), (e = !!(t.mode & 1)), n)) {
                case `dialog`:
                  (I(`cancel`, r), I(`close`, r));
                  break;
                case `iframe`:
                case `object`:
                case `embed`:
                  I(`load`, r);
                  break;
                case `video`:
                case `audio`:
                  for (a = 0; a < li.length; a++) I(li[a], r);
                  break;
                case `source`:
                  I(`error`, r);
                  break;
                case `img`:
                case `image`:
                case `link`:
                  (I(`error`, r), I(`load`, r));
                  break;
                case `details`:
                  I(`toggle`, r);
                  break;
                case `input`:
                  (Se(r, s), I(`invalid`, r));
                  break;
                case `select`:
                  ((r._wrapperState = {
                    wasMultiple: !!s.multiple,
                  }),
                    I(`invalid`, r));
                  break;
                case `textarea`:
                  (Ae(r, s), I(`invalid`, r));
              }
              for (var c in (Ue(n, s), (a = null), s))
                if (s.hasOwnProperty(c)) {
                  var l = s[c];
                  c === `children`
                    ? typeof l == `string`
                      ? r.textContent !== l &&
                        (!0 !== s.suppressHydrationWarning &&
                          Ti(r.textContent, l, e),
                        (a = [`children`, l]))
                      : typeof l == `number` &&
                        r.textContent !== `` + l &&
                        (!0 !== s.suppressHydrationWarning &&
                          Ti(r.textContent, l, e),
                        (a = [`children`, `` + l]))
                    : o.hasOwnProperty(c) &&
                      l != null &&
                      c === `onScroll` &&
                      I(`scroll`, r);
                }
              switch (n) {
                case `input`:
                  (ve(r), Te(r, s, !0));
                  break;
                case `textarea`:
                  (ve(r), Me(r));
                  break;
                case `select`:
                case `option`:
                  break;
                default:
                  typeof s.onClick == `function` && (r.onclick = Ei);
              }
              ((r = a), (t.updateQueue = r), r !== null && (t.flags |= 4));
            } else {
              ((c = a.nodeType === 9 ? a : a.ownerDocument),
                e === `http://www.w3.org/1999/xhtml` && (e = Ne(n)),
                e === `http://www.w3.org/1999/xhtml`
                  ? n === `script`
                    ? ((e = c.createElement(`div`)),
                      (e.innerHTML = `<script><\/script>`),
                      (e = e.removeChild(e.firstChild)))
                    : typeof r.is == `string`
                      ? (e = c.createElement(n, {
                          is: r.is,
                        }))
                      : ((e = c.createElement(n)),
                        n === `select` &&
                          ((c = e),
                          r.multiple
                            ? (c.multiple = !0)
                            : r.size && (c.size = r.size)))
                  : (e = c.createElementNS(e, n)),
                (e[zi] = t),
                (e[Bi] = r),
                dc(e, t, !1, !1),
                (t.stateNode = e));
              a: {
                switch (((c = We(n, r)), n)) {
                  case `dialog`:
                    (I(`cancel`, e), I(`close`, e), (a = r));
                    break;
                  case `iframe`:
                  case `object`:
                  case `embed`:
                    (I(`load`, e), (a = r));
                    break;
                  case `video`:
                  case `audio`:
                    for (a = 0; a < li.length; a++) I(li[a], e);
                    a = r;
                    break;
                  case `source`:
                    (I(`error`, e), (a = r));
                    break;
                  case `img`:
                  case `image`:
                  case `link`:
                    (I(`error`, e), I(`load`, e), (a = r));
                    break;
                  case `details`:
                    (I(`toggle`, e), (a = r));
                    break;
                  case `input`:
                    (Se(e, r), (a = xe(e, r)), I(`invalid`, e));
                    break;
                  case `option`:
                    a = r;
                    break;
                  case `select`:
                    ((e._wrapperState = {
                      wasMultiple: !!r.multiple,
                    }),
                      (a = A({}, r, {
                        value: void 0,
                      })),
                      I(`invalid`, e));
                    break;
                  case `textarea`:
                    (Ae(e, r), (a = ke(e, r)), I(`invalid`, e));
                    break;
                  default:
                    a = r;
                }
                for (s in (Ue(n, a), (l = a), l))
                  if (l.hasOwnProperty(s)) {
                    var u = l[s];
                    s === `style`
                      ? Ve(e, u)
                      : s === `dangerouslySetInnerHTML`
                        ? ((u = u ? u.__html : void 0), u != null && Ie(e, u))
                        : s === `children`
                          ? typeof u == `string`
                            ? (n !== `textarea` || u !== ``) && Le(e, u)
                            : typeof u == `number` && Le(e, `` + u)
                          : s !== `suppressContentEditableWarning` &&
                            s !== `suppressHydrationWarning` &&
                            s !== `autoFocus` &&
                            (o.hasOwnProperty(s)
                              ? u != null && s === `onScroll` && I(`scroll`, e)
                              : u != null && S(e, s, u, c));
                  }
                switch (n) {
                  case `input`:
                    (ve(e), Te(e, r, !1));
                    break;
                  case `textarea`:
                    (ve(e), Me(e));
                    break;
                  case `option`:
                    r.value != null &&
                      e.setAttribute(`value`, `` + he(r.value));
                    break;
                  case `select`:
                    ((e.multiple = !!r.multiple),
                      (s = r.value),
                      s == null
                        ? r.defaultValue != null &&
                          Oe(e, !!r.multiple, r.defaultValue, !0)
                        : Oe(e, !!r.multiple, s, !1));
                    break;
                  default:
                    typeof a.onClick == `function` && (e.onclick = Ei);
                }
                switch (n) {
                  case `button`:
                  case `input`:
                  case `select`:
                  case `textarea`:
                    r = !!r.autoFocus;
                    break a;
                  case `img`:
                    r = !0;
                    break a;
                  default:
                    r = !1;
                }
              }
              r && (t.flags |= 4);
            }
            t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
          }
          return (hc(t), null);
        case 6:
          if (e && t.stateNode != null) pc(e, t, e.memoizedProps, r);
          else {
            if (typeof r != `string` && t.stateNode === null)
              throw Error(i(166));
            if (((n = yo(vo.current)), yo(go.current), Fa(t))) {
              if (
                ((r = t.stateNode),
                (n = t.memoizedProps),
                (r[zi] = t),
                (s = r.nodeValue !== n) && ((e = Da), e !== null))
              )
                switch (e.tag) {
                  case 3:
                    Ti(r.nodeValue, n, !!(e.mode & 1));
                    break;
                  case 5:
                    !0 !== e.memoizedProps.suppressHydrationWarning &&
                      Ti(r.nodeValue, n, !!(e.mode & 1));
                }
              s && (t.flags |= 4);
            } else
              ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
                (r[zi] = t),
                (t.stateNode = r));
          }
          return (hc(t), null);
        case 13:
          if (
            (L(V),
            (r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (B && Oa !== null && t.mode & 1 && !(t.flags & 128))
              (Ia(), La(), (t.flags |= 98560), (s = !1));
            else if (((s = Fa(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!s) throw Error(i(318));
                if (
                  ((s = t.memoizedState),
                  (s = s === null ? null : s.dehydrated),
                  !s)
                )
                  throw Error(i(317));
                s[zi] = t;
              } else
                (La(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (hc(t), (s = !1));
            } else (ka !== null && (wl(ka), (ka = null)), (s = !0));
            if (!s) return t.flags & 65536 ? t : null;
          }
          return t.flags & 128
            ? ((t.lanes = n), t)
            : ((r = r !== null),
              r !== (e !== null && e.memoizedState !== null) &&
                r &&
                ((t.child.flags |= 8192),
                t.mode & 1 &&
                  (e === null || V.current & 1 ? Qc === 0 && (Qc = 3) : Pl())),
              t.updateQueue !== null && (t.flags |= 4),
              hc(t),
              null);
        case 4:
          return (
            xo(),
            e === null && hi(t.stateNode.containerInfo),
            hc(t),
            null
          );
        case 10:
          return (Za(t.type._context), hc(t), null);
        case 17:
          return (ra(t.type) && ia(), hc(t), null);
        case 19:
          if ((L(V), (s = t.memoizedState), s === null)) return (hc(t), null);
          if (((r = !!(t.flags & 128)), (c = s.rendering), c === null))
            if (r) mc(s, !1);
            else {
              if (Qc !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null; ) {
                  if (((c = wo(e)), c !== null)) {
                    for (
                      t.flags |= 128,
                        mc(s, !1),
                        r = c.updateQueue,
                        r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                        t.subtreeFlags = 0,
                        r = n,
                        n = t.child;
                      n !== null;
                    )
                      ((s = n),
                        (e = r),
                        (s.flags &= 14680066),
                        (c = s.alternate),
                        c === null
                          ? ((s.childLanes = 0),
                            (s.lanes = e),
                            (s.child = null),
                            (s.subtreeFlags = 0),
                            (s.memoizedProps = null),
                            (s.memoizedState = null),
                            (s.updateQueue = null),
                            (s.dependencies = null),
                            (s.stateNode = null))
                          : ((s.childLanes = c.childLanes),
                            (s.lanes = c.lanes),
                            (s.child = c.child),
                            (s.subtreeFlags = 0),
                            (s.deletions = null),
                            (s.memoizedProps = c.memoizedProps),
                            (s.memoizedState = c.memoizedState),
                            (s.updateQueue = c.updateQueue),
                            (s.type = c.type),
                            (e = c.dependencies),
                            (s.dependencies =
                              e === null
                                ? null
                                : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext,
                                  })),
                        (n = n.sibling));
                    return (R(V, (V.current & 1) | 2), t.child);
                  }
                  e = e.sibling;
                }
              s.tail !== null &&
                wt() > ol &&
                ((t.flags |= 128), (r = !0), mc(s, !1), (t.lanes = 4194304));
            }
          else {
            if (!r)
              if (((e = wo(c)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (r = !0),
                  (n = e.updateQueue),
                  n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                  mc(s, !0),
                  s.tail === null &&
                    s.tailMode === `hidden` &&
                    !c.alternate &&
                    !B)
                )
                  return (hc(t), null);
              } else
                2 * wt() - s.renderingStartTime > ol &&
                  n !== 1073741824 &&
                  ((t.flags |= 128), (r = !0), mc(s, !1), (t.lanes = 4194304));
            s.isBackwards
              ? ((c.sibling = t.child), (t.child = c))
              : ((n = s.last),
                n === null ? (t.child = c) : (n.sibling = c),
                (s.last = c));
          }
          return s.tail === null
            ? (hc(t), null)
            : ((t = s.tail),
              (s.rendering = t),
              (s.tail = t.sibling),
              (s.renderingStartTime = wt()),
              (t.sibling = null),
              (n = V.current),
              R(V, r ? (n & 1) | 2 : n & 1),
              t);
        case 22:
        case 23:
          return (
            Al(),
            (r = t.memoizedState !== null),
            e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r && t.mode & 1
              ? Xc & 1073741824 &&
                (hc(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : hc(t),
            null
          );
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(i(156, t.tag));
    }
    function _c(e, t) {
      switch ((Ea(t), t.tag)) {
        case 1:
          return (
            ra(t.type) && ia(),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            xo(),
            L(ea),
            L($i),
            Eo(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 5:
          return (Co(t), null);
        case 13:
          if (
            (L(V), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(i(340));
            La();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return (L(V), null);
        case 4:
          return (xo(), null);
        case 10:
          return (Za(t.type._context), null);
        case 22:
        case 23:
          return (Al(), null);
        case 24:
          return null;
        default:
          return null;
      }
    }
    var U = !1,
      vc = !1,
      yc = typeof WeakSet == `function` ? WeakSet : Set,
      W = null;
    function bc(e, t) {
      var n = e.ref;
      if (n !== null)
        if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            J(e, t, n);
          }
        else n.current = null;
    }
    function xc(e, t, n) {
      try {
        n();
      } catch (n) {
        J(e, t, n);
      }
    }
    var Sc = !1;
    function Cc(e, t) {
      if (((Di = Sn), (e = Br()), Vr(e))) {
        if (`selectionStart` in e)
          var n = {
            start: e.selectionStart,
            end: e.selectionEnd,
          };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var a = r.anchorOffset,
                o = r.focusNode;
              r = r.focusOffset;
              try {
                (n.nodeType, o.nodeType);
              } catch {
                n = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === a && (c = s),
                    p === o && ++d === r && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              n =
                c === -1 || l === -1
                  ? null
                  : {
                      start: c,
                      end: l,
                    };
            } else n = null;
          }
        n ||= {
          start: 0,
          end: 0,
        };
      } else n = null;
      for (
        Oi = {
          focusedElem: e,
          selectionRange: n,
        },
          Sn = !1,
          W = t;
        W !== null;
      )
        if (((t = W), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (W = e));
        else
          for (; W !== null; ) {
            t = W;
            try {
              var h = t.alternate;
              if (t.flags & 1024)
                switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (h !== null) {
                      var g = h.memoizedProps,
                        _ = h.memoizedState,
                        v = t.stateNode;
                      v.__reactInternalSnapshotBeforeUpdate =
                        v.getSnapshotBeforeUpdate(
                          t.elementType === t.type ? g : ws(t.type, g),
                          _,
                        );
                    }
                    break;
                  case 3:
                    var y = t.stateNode.containerInfo;
                    y.nodeType === 1
                      ? (y.textContent = ``)
                      : y.nodeType === 9 &&
                        y.documentElement &&
                        y.removeChild(y.documentElement);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(i(163));
                }
            } catch (e) {
              J(t, t.return, e);
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (W = e));
              break;
            }
            W = t.return;
          }
      return ((h = Sc), (Sc = !1), h);
    }
    function wc(e, t, n) {
      var r = t.updateQueue;
      if (((r = r === null ? null : r.lastEffect), r !== null)) {
        var i = (r = r.next);
        do {
          if ((i.tag & e) === e) {
            var a = i.destroy;
            ((i.destroy = void 0), a !== void 0 && xc(t, n, a));
          }
          i = i.next;
        } while (i !== r);
      }
    }
    function Tc(e, t) {
      if (
        ((t = t.updateQueue),
        (t = t === null ? null : t.lastEffect),
        t !== null)
      ) {
        var n = (t = t.next);
        do {
          if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
          }
          n = n.next;
        } while (n !== t);
      }
    }
    function Ec(e) {
      var t = e.ref;
      if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
          case 5:
            e = n;
            break;
          default:
            e = n;
        }
        typeof t == `function` ? t(e) : (t.current = e);
      }
    }
    function Dc(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), Dc(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
          ((t = e.stateNode),
          t !== null &&
            (delete t[zi],
            delete t[Bi],
            delete t[Hi],
            delete t[Ui],
            delete t[Wi])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    function Oc(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function kc(e) {
      a: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || Oc(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Ac(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? n.nodeType === 8
              ? n.parentNode.insertBefore(e, t)
              : n.insertBefore(e, t)
            : (n.nodeType === 8
                ? ((t = n.parentNode), t.insertBefore(e, n))
                : ((t = n), t.appendChild(e)),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = Ei)));
      else if (r !== 4 && ((e = e.child), e !== null))
        for (Ac(e, t, n), e = e.sibling; e !== null; )
          (Ac(e, t, n), (e = e.sibling));
    }
    function jc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (r !== 4 && ((e = e.child), e !== null))
        for (jc(e, t, n), e = e.sibling; e !== null; )
          (jc(e, t, n), (e = e.sibling));
    }
    var Mc = null,
      Nc = !1;
    function G(e, t, n) {
      for (n = n.child; n !== null; ) (Pc(e, t, n), (n = n.sibling));
    }
    function Pc(e, t, n) {
      if (Mt && typeof Mt.onCommitFiberUnmount == `function`)
        try {
          Mt.onCommitFiberUnmount(jt, n);
        } catch {}
      switch (n.tag) {
        case 5:
          vc || bc(n, t);
        case 6:
          var r = Mc,
            i = Nc;
          ((Mc = null),
            G(e, t, n),
            (Mc = r),
            (Nc = i),
            Mc !== null &&
              (Nc
                ? ((e = Mc),
                  (n = n.stateNode),
                  e.nodeType === 8
                    ? e.parentNode.removeChild(n)
                    : e.removeChild(n))
                : Mc.removeChild(n.stateNode)));
          break;
        case 18:
          Mc !== null &&
            (Nc
              ? ((e = Mc),
                (n = n.stateNode),
                e.nodeType === 8
                  ? Fi(e.parentNode, n)
                  : e.nodeType === 1 && Fi(e, n),
                bn(e))
              : Fi(Mc, n.stateNode));
          break;
        case 4:
          ((r = Mc),
            (i = Nc),
            (Mc = n.stateNode.containerInfo),
            (Nc = !0),
            G(e, t, n),
            (Mc = r),
            (Nc = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            !vc &&
            ((r = n.updateQueue),
            r !== null && ((r = r.lastEffect), r !== null))
          ) {
            i = r = r.next;
            do {
              var a = i,
                o = a.destroy;
              ((a = a.tag),
                o !== void 0 && (a & 2 || a & 4) && xc(n, t, o),
                (i = i.next));
            } while (i !== r);
          }
          G(e, t, n);
          break;
        case 1:
          if (
            !vc &&
            (bc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function`)
          )
            try {
              ((r.props = n.memoizedProps),
                (r.state = n.memoizedState),
                r.componentWillUnmount());
            } catch (e) {
              J(n, t, e);
            }
          G(e, t, n);
          break;
        case 21:
          G(e, t, n);
          break;
        case 22:
          n.mode & 1
            ? ((vc = (r = vc) || n.memoizedState !== null),
              G(e, t, n),
              (vc = r))
            : G(e, t, n);
          break;
        default:
          G(e, t, n);
      }
    }
    function Fc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        (n === null && (n = e.stateNode = new yc()),
          t.forEach(function (t) {
            var r = ql.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          }));
      }
    }
    function Ic(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var a = n[r];
          try {
            var o = e,
              s = t,
              c = s;
            a: for (; c !== null; ) {
              switch (c.tag) {
                case 5:
                  ((Mc = c.stateNode), (Nc = !1));
                  break a;
                case 3:
                  ((Mc = c.stateNode.containerInfo), (Nc = !0));
                  break a;
                case 4:
                  ((Mc = c.stateNode.containerInfo), (Nc = !0));
                  break a;
              }
              c = c.return;
            }
            if (Mc === null) throw Error(i(160));
            (Pc(o, s, a), (Mc = null), (Nc = !1));
            var l = a.alternate;
            (l !== null && (l.return = null), (a.return = null));
          } catch (e) {
            J(a, t, e);
          }
        }
      if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) (K(t, e), (t = t.sibling));
    }
    function K(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((Ic(t, e), Lc(e), r & 4)) {
            try {
              (wc(3, e, e.return), Tc(3, e));
            } catch (t) {
              J(e, e.return, t);
            }
            try {
              wc(5, e, e.return);
            } catch (t) {
              J(e, e.return, t);
            }
          }
          break;
        case 1:
          (Ic(t, e), Lc(e), r & 512 && n !== null && bc(n, n.return));
          break;
        case 5:
          if (
            (Ic(t, e),
            Lc(e),
            r & 512 && n !== null && bc(n, n.return),
            e.flags & 32)
          ) {
            var a = e.stateNode;
            try {
              Le(a, ``);
            } catch (t) {
              J(e, e.return, t);
            }
          }
          if (r & 4 && ((a = e.stateNode), a != null)) {
            var o = e.memoizedProps,
              s = n === null ? o : n.memoizedProps,
              c = e.type,
              l = e.updateQueue;
            if (((e.updateQueue = null), l !== null))
              try {
                (c === `input` &&
                  o.type === `radio` &&
                  o.name != null &&
                  Ce(a, o),
                  We(c, s));
                var u = We(c, o);
                for (s = 0; s < l.length; s += 2) {
                  var d = l[s],
                    f = l[s + 1];
                  d === `style`
                    ? Ve(a, f)
                    : d === `dangerouslySetInnerHTML`
                      ? Ie(a, f)
                      : d === `children`
                        ? Le(a, f)
                        : S(a, d, f, u);
                }
                switch (c) {
                  case `input`:
                    we(a, o);
                    break;
                  case `textarea`:
                    je(a, o);
                    break;
                  case `select`:
                    var p = a._wrapperState.wasMultiple;
                    a._wrapperState.wasMultiple = !!o.multiple;
                    var m = o.value;
                    m == null
                      ? p !== !!o.multiple &&
                        (o.defaultValue == null
                          ? Oe(a, !!o.multiple, o.multiple ? [] : ``, !1)
                          : Oe(a, !!o.multiple, o.defaultValue, !0))
                      : Oe(a, !!o.multiple, m, !1);
                }
                a[Bi] = o;
              } catch (t) {
                J(e, e.return, t);
              }
          }
          break;
        case 6:
          if ((Ic(t, e), Lc(e), r & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            ((a = e.stateNode), (o = e.memoizedProps));
            try {
              a.nodeValue = o;
            } catch (t) {
              J(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            (Ic(t, e),
            Lc(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              bn(t.containerInfo);
            } catch (t) {
              J(e, e.return, t);
            }
          break;
        case 4:
          (Ic(t, e), Lc(e));
          break;
        case 13:
          (Ic(t, e),
            Lc(e),
            (a = e.child),
            a.flags & 8192 &&
              ((o = a.memoizedState !== null),
              (a.stateNode.isHidden = o),
              !o ||
                (a.alternate !== null && a.alternate.memoizedState !== null) ||
                (al = wt())),
            r & 4 && Fc(e));
          break;
        case 22:
          if (
            ((d = n !== null && n.memoizedState !== null),
            e.mode & 1 ? ((vc = (u = vc) || d), Ic(t, e), (vc = u)) : Ic(t, e),
            Lc(e),
            r & 8192)
          ) {
            if (
              ((u = e.memoizedState !== null),
              (e.stateNode.isHidden = u) && !d && e.mode & 1)
            )
              for (W = e, d = e.child; d !== null; ) {
                for (f = W = d; W !== null; ) {
                  switch (((p = W), (m = p.child), p.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      wc(4, p, p.return);
                      break;
                    case 1:
                      bc(p, p.return);
                      var h = p.stateNode;
                      if (typeof h.componentWillUnmount == `function`) {
                        ((r = p), (n = p.return));
                        try {
                          ((t = r),
                            (h.props = t.memoizedProps),
                            (h.state = t.memoizedState),
                            h.componentWillUnmount());
                        } catch (e) {
                          J(r, n, e);
                        }
                      }
                      break;
                    case 5:
                      bc(p, p.return);
                      break;
                    case 22:
                      if (p.memoizedState !== null) {
                        Vc(f);
                        continue;
                      }
                  }
                  m === null ? Vc(f) : ((m.return = p), (W = m));
                }
                d = d.sibling;
              }
            a: for (d = null, f = e; ; ) {
              if (f.tag === 5) {
                if (d === null) {
                  d = f;
                  try {
                    ((a = f.stateNode),
                      u
                        ? ((o = a.style),
                          typeof o.setProperty == `function`
                            ? o.setProperty(`display`, `none`, `important`)
                            : (o.display = `none`))
                        : ((c = f.stateNode),
                          (l = f.memoizedProps.style),
                          (s =
                            l != null && l.hasOwnProperty(`display`)
                              ? l.display
                              : null),
                          (c.style.display = Be(`display`, s))));
                  } catch (t) {
                    J(e, e.return, t);
                  }
                }
              } else if (f.tag === 6) {
                if (d === null)
                  try {
                    f.stateNode.nodeValue = u ? `` : f.memoizedProps;
                  } catch (t) {
                    J(e, e.return, t);
                  }
              } else if (
                ((f.tag !== 22 && f.tag !== 23) ||
                  f.memoizedState === null ||
                  f === e) &&
                f.child !== null
              ) {
                ((f.child.return = f), (f = f.child));
                continue;
              }
              if (f === e) break a;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e) break a;
                (d === f && (d = null), (f = f.return));
              }
              (d === f && (d = null),
                (f.sibling.return = f.return),
                (f = f.sibling));
            }
          }
          break;
        case 19:
          (Ic(t, e), Lc(e), r & 4 && Fc(e));
          break;
        case 21:
          break;
        default:
          (Ic(t, e), Lc(e));
      }
    }
    function Lc(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          a: {
            for (var n = e.return; n !== null; ) {
              if (Oc(n)) {
                var r = n;
                break a;
              }
              n = n.return;
            }
            throw Error(i(160));
          }
          switch (r.tag) {
            case 5:
              var a = r.stateNode;
              (r.flags & 32 && (Le(a, ``), (r.flags &= -33)), jc(e, kc(e), a));
              break;
            case 3:
            case 4:
              var o = r.stateNode.containerInfo;
              Ac(e, kc(e), o);
              break;
            default:
              throw Error(i(161));
          }
        } catch (t) {
          J(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Rc(e, t, n) {
      ((W = e), zc(e, t, n));
    }
    function zc(e, t, n) {
      for (var r = !!(e.mode & 1); W !== null; ) {
        var i = W,
          a = i.child;
        if (i.tag === 22 && r) {
          var o = i.memoizedState !== null || U;
          if (!o) {
            var s = i.alternate,
              c = (s !== null && s.memoizedState !== null) || vc;
            s = U;
            var l = vc;
            if (((U = o), (vc = c) && !l))
              for (W = i; W !== null; )
                ((o = W),
                  (c = o.child),
                  (o.tag === 22 && o.memoizedState !== null) || c === null
                    ? Hc(i)
                    : ((c.return = o), (W = c)));
            for (; a !== null; ) ((W = a), zc(a, t, n), (a = a.sibling));
            ((W = i), (U = s), (vc = l));
          }
          Bc(e, t, n);
        } else
          i.subtreeFlags & 8772 && a !== null
            ? ((a.return = i), (W = a))
            : Bc(e, t, n);
      }
    }
    function Bc(e) {
      for (; W !== null; ) {
        var t = W;
        if (t.flags & 8772) {
          var n = t.alternate;
          try {
            if (t.flags & 8772)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  vc || Tc(5, t);
                  break;
                case 1:
                  var r = t.stateNode;
                  if (t.flags & 4 && !vc)
                    if (n === null) r.componentDidMount();
                    else {
                      var a =
                        t.elementType === t.type
                          ? n.memoizedProps
                          : ws(t.type, n.memoizedProps);
                      r.componentDidUpdate(
                        a,
                        n.memoizedState,
                        r.__reactInternalSnapshotBeforeUpdate,
                      );
                    }
                  var o = t.updateQueue;
                  o !== null && mo(t, o, r);
                  break;
                case 3:
                  var s = t.updateQueue;
                  if (s !== null) {
                    if (((n = null), t.child !== null))
                      switch (t.child.tag) {
                        case 5:
                          n = t.child.stateNode;
                          break;
                        case 1:
                          n = t.child.stateNode;
                      }
                    mo(t, s, n);
                  }
                  break;
                case 5:
                  var c = t.stateNode;
                  if (n === null && t.flags & 4) {
                    n = c;
                    var l = t.memoizedProps;
                    switch (t.type) {
                      case `button`:
                      case `input`:
                      case `select`:
                      case `textarea`:
                        l.autoFocus && n.focus();
                        break;
                      case `img`:
                        l.src && (n.src = l.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (t.memoizedState === null) {
                    var u = t.alternate;
                    if (u !== null) {
                      var d = u.memoizedState;
                      if (d !== null) {
                        var f = d.dehydrated;
                        f !== null && bn(f);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(i(163));
              }
            vc || (t.flags & 512 && Ec(t));
          } catch (e) {
            J(t, t.return, e);
          }
        }
        if (t === e) {
          W = null;
          break;
        }
        if (((n = t.sibling), n !== null)) {
          ((n.return = t.return), (W = n));
          break;
        }
        W = t.return;
      }
    }
    function Vc(e) {
      for (; W !== null; ) {
        var t = W;
        if (t === e) {
          W = null;
          break;
        }
        var n = t.sibling;
        if (n !== null) {
          ((n.return = t.return), (W = n));
          break;
        }
        W = t.return;
      }
    }
    function Hc(e) {
      for (; W !== null; ) {
        var t = W;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var n = t.return;
              try {
                Tc(4, t);
              } catch (e) {
                J(t, n, e);
              }
              break;
            case 1:
              var r = t.stateNode;
              if (typeof r.componentDidMount == `function`) {
                var i = t.return;
                try {
                  r.componentDidMount();
                } catch (e) {
                  J(t, i, e);
                }
              }
              var a = t.return;
              try {
                Ec(t);
              } catch (e) {
                J(t, a, e);
              }
              break;
            case 5:
              var o = t.return;
              try {
                Ec(t);
              } catch (e) {
                J(t, o, e);
              }
          }
        } catch (e) {
          J(t, t.return, e);
        }
        if (t === e) {
          W = null;
          break;
        }
        var s = t.sibling;
        if (s !== null) {
          ((s.return = t.return), (W = s));
          break;
        }
        W = t.return;
      }
    }
    var Uc = Math.ceil,
      Wc = C.ReactCurrentDispatcher,
      Gc = C.ReactCurrentOwner,
      Kc = C.ReactCurrentBatchConfig,
      q = 0,
      qc = null,
      Jc = null,
      Yc = 0,
      Xc = 0,
      Zc = Zi(0),
      Qc = 0,
      $c = null,
      el = 0,
      tl = 0,
      nl = 0,
      rl = null,
      il = null,
      al = 0,
      ol = 1 / 0,
      sl = null,
      cl = !1,
      ll = null,
      ul = null,
      dl = !1,
      fl = null,
      pl = 0,
      ml = 0,
      hl = null,
      gl = -1,
      _l = 0;
    function vl() {
      return q & 6 ? wt() : gl === -1 ? (gl = wt()) : gl;
    }
    function yl(e) {
      return e.mode & 1
        ? q & 2 && Yc !== 0
          ? Yc & -Yc
          : za.transition === null
            ? ((e = M),
              e === 0
                ? ((e = window.event), (e = e === void 0 ? 16 : On(e.type)), e)
                : e)
            : (_l === 0 && (_l = Gt()), _l)
        : 1;
    }
    function bl(e, t, n, r) {
      if (50 < ml) throw ((ml = 0), (hl = null), Error(i(185)));
      (qt(e, n, r),
        (!(q & 2) || e !== qc) &&
          (e === qc && (!(q & 2) && (tl |= n), Qc === 4 && El(e, Yc)),
          xl(e, r),
          n === 1 &&
            q === 0 &&
            !(t.mode & 1) &&
            ((ol = wt() + 500), la && pa())));
    }
    function xl(e, t) {
      var n = e.callbackNode;
      Ut(e, t);
      var r = Vt(e, e === qc ? Yc : 0);
      if (r === 0)
        (n !== null && xt(n),
          (e.callbackNode = null),
          (e.callbackPriority = 0));
      else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && xt(n), t === 1))
          (e.tag === 0 ? fa(Dl.bind(null, e)) : da(Dl.bind(null, e)),
            Ni(function () {
              !(q & 6) && pa();
            }),
            (n = null));
        else {
          switch (Xt(r)) {
            case 1:
              n = Et;
              break;
            case 4:
              n = Dt;
              break;
            case 16:
              n = Ot;
              break;
            case 536870912:
              n = At;
              break;
            default:
              n = Ot;
          }
          n = Yl(n, Sl.bind(null, e));
        }
        ((e.callbackPriority = t), (e.callbackNode = n));
      }
    }
    function Sl(e, t) {
      if (((gl = -1), (_l = 0), q & 6)) throw Error(i(327));
      var n = e.callbackNode;
      if (Hl() && e.callbackNode !== n) return null;
      var r = Vt(e, e === qc ? Yc : 0);
      if (r === 0) return null;
      if (r & 30 || (r & e.expiredLanes) !== 0 || t) t = Fl(e, r);
      else {
        t = r;
        var a = q;
        q |= 2;
        var o = Nl();
        (qc !== e || Yc !== t) && ((sl = null), (ol = wt() + 500), jl(e, t));
        do
          try {
            Ll();
            break;
          } catch (t) {
            Ml(e, t);
          }
        while (1);
        (Xa(),
          (Wc.current = o),
          (q = a),
          Jc === null ? ((qc = null), (Yc = 0), (t = Qc)) : (t = 0));
      }
      if (t !== 0) {
        if (
          (t === 2 && ((a = Wt(e)), a !== 0 && ((r = a), (t = Cl(e, a)))),
          t === 1)
        )
          throw ((n = $c), jl(e, 0), El(e, r), xl(e, wt()), n);
        if (t === 6) El(e, r);
        else {
          if (
            ((a = e.current.alternate),
            !(r & 30) &&
              !Tl(a) &&
              ((t = Fl(e, r)),
              t === 2 && ((o = Wt(e)), o !== 0 && ((r = o), (t = Cl(e, o)))),
              t === 1))
          )
            throw ((n = $c), jl(e, 0), El(e, r), xl(e, wt()), n);
          switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 2:
              Bl(e, il, sl);
              break;
            case 3:
              if (
                (El(e, r),
                (r & 130023424) === r && ((t = al + 500 - wt()), 10 < t))
              ) {
                if (Vt(e, 0) !== 0) break;
                if (((a = e.suspendedLanes), (a & r) !== r)) {
                  (vl(), (e.pingedLanes |= e.suspendedLanes & a));
                  break;
                }
                e.timeoutHandle = Ai(Bl.bind(null, e, il, sl), t);
                break;
              }
              Bl(e, il, sl);
              break;
            case 4:
              if ((El(e, r), (r & 4194240) === r)) break;
              for (t = e.eventTimes, a = -1; 0 < r; ) {
                var s = 31 - Pt(r);
                ((o = 1 << s), (s = t[s]), s > a && (a = s), (r &= ~o));
              }
              if (
                ((r = a),
                (r = wt() - r),
                (r =
                  (120 > r
                    ? 120
                    : 480 > r
                      ? 480
                      : 1080 > r
                        ? 1080
                        : 1920 > r
                          ? 1920
                          : 3e3 > r
                            ? 3e3
                            : 4320 > r
                              ? 4320
                              : 1960 * Uc(r / 1960)) - r),
                10 < r)
              ) {
                e.timeoutHandle = Ai(Bl.bind(null, e, il, sl), r);
                break;
              }
              Bl(e, il, sl);
              break;
            case 5:
              Bl(e, il, sl);
              break;
            default:
              throw Error(i(329));
          }
        }
      }
      return (xl(e, wt()), e.callbackNode === n ? Sl.bind(null, e) : null);
    }
    function Cl(e, t) {
      var n = rl;
      return (
        e.current.memoizedState.isDehydrated && (jl(e, t).flags |= 256),
        (e = Fl(e, t)),
        e !== 2 && ((t = il), (il = n), t !== null && wl(t)),
        e
      );
    }
    function wl(e) {
      il === null ? (il = e) : il.push.apply(il, e);
    }
    function Tl(e) {
      for (var t = e; ; ) {
        if (t.flags & 16384) {
          var n = t.updateQueue;
          if (n !== null && ((n = n.stores), n !== null))
            for (var r = 0; r < n.length; r++) {
              var i = n[r],
                a = i.getSnapshot;
              i = i.value;
              try {
                if (!Fr(a(), i)) return !1;
              } catch {
                return !1;
              }
            }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function El(e, t) {
      for (
        t &= ~nl,
          t &= ~tl,
          e.suspendedLanes |= t,
          e.pingedLanes &= ~t,
          e = e.expirationTimes;
        0 < t;
      ) {
        var n = 31 - Pt(t),
          r = 1 << n;
        ((e[n] = -1), (t &= ~r));
      }
    }
    function Dl(e) {
      if (q & 6) throw Error(i(327));
      Hl();
      var t = Vt(e, 0);
      if (!(t & 1)) return (xl(e, wt()), null);
      var n = Fl(e, t);
      if (e.tag !== 0 && n === 2) {
        var r = Wt(e);
        r !== 0 && ((t = r), (n = Cl(e, r)));
      }
      if (n === 1) throw ((n = $c), jl(e, 0), El(e, t), xl(e, wt()), n);
      if (n === 6) throw Error(i(345));
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Bl(e, il, sl),
        xl(e, wt()),
        null
      );
    }
    function Ol(e, t) {
      var n = q;
      q |= 1;
      try {
        return e(t);
      } finally {
        ((q = n), q === 0 && ((ol = wt() + 500), la && pa()));
      }
    }
    function kl(e) {
      fl !== null && fl.tag === 0 && !(q & 6) && Hl();
      var t = q;
      q |= 1;
      var n = Kc.transition,
        r = M;
      try {
        if (((Kc.transition = null), (M = 1), e)) return e();
      } finally {
        ((M = r), (Kc.transition = n), (q = t), !(q & 6) && pa());
      }
    }
    function Al() {
      ((Xc = Zc.current), L(Zc));
    }
    function jl(e, t) {
      ((e.finishedWork = null), (e.finishedLanes = 0));
      var n = e.timeoutHandle;
      if ((n !== -1 && ((e.timeoutHandle = -1), ji(n)), Jc !== null))
        for (n = Jc.return; n !== null; ) {
          var r = n;
          switch ((Ea(r), r.tag)) {
            case 1:
              ((r = r.type.childContextTypes), r != null && ia());
              break;
            case 3:
              (xo(), L(ea), L($i), Eo());
              break;
            case 5:
              Co(r);
              break;
            case 4:
              xo();
              break;
            case 13:
              L(V);
              break;
            case 19:
              L(V);
              break;
            case 10:
              Za(r.type._context);
              break;
            case 22:
            case 23:
              Al();
          }
          n = n.return;
        }
      if (
        ((qc = e),
        (Jc = e = eu(e.current, null)),
        (Yc = Xc = t),
        (Qc = 0),
        ($c = null),
        (nl = tl = el = 0),
        (il = rl = null),
        to !== null)
      ) {
        for (t = 0; t < to.length; t++)
          if (((n = to[t]), (r = n.interleaved), r !== null)) {
            n.interleaved = null;
            var i = r.next,
              a = n.pending;
            if (a !== null) {
              var o = a.next;
              ((a.next = i), (r.next = o));
            }
            n.pending = r;
          }
        to = null;
      }
      return e;
    }
    function Ml(e, t) {
      do {
        var n = Jc;
        try {
          if ((Xa(), (Do.current = bs), Mo)) {
            for (var r = H.memoizedState; r !== null; ) {
              var a = r.queue;
              (a !== null && (a.pending = null), (r = r.next));
            }
            Mo = !1;
          }
          if (
            ((ko = 0),
            (jo = Ao = H = null),
            (No = !1),
            (Po = 0),
            (Gc.current = null),
            n === null || n.return === null)
          ) {
            ((Qc = 1), ($c = t), (Jc = null));
            break;
          }
          a: {
            var o = e,
              s = n.return,
              c = n,
              l = t;
            if (
              ((t = Yc),
              (c.flags |= 32768),
              typeof l == `object` && l && typeof l.then == `function`)
            ) {
              var u = l,
                d = c,
                f = d.tag;
              if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                var p = d.alternate;
                p
                  ? ((d.updateQueue = p.updateQueue),
                    (d.memoizedState = p.memoizedState),
                    (d.lanes = p.lanes))
                  : ((d.updateQueue = null), (d.memoizedState = null));
              }
              var m = Rs(s);
              if (m !== null) {
                ((m.flags &= -257),
                  zs(m, s, c, o, t),
                  m.mode & 1 && Ls(o, u, t),
                  (t = m),
                  (l = u));
                var h = t.updateQueue;
                if (h === null) {
                  var g = new Set();
                  (g.add(l), (t.updateQueue = g));
                } else h.add(l);
                break a;
              }
              if (!(t & 1)) {
                (Ls(o, u, t), Pl());
                break a;
              }
              l = Error(i(426));
            } else if (B && c.mode & 1) {
              var _ = Rs(s);
              if (_ !== null) {
                (!(_.flags & 65536) && (_.flags |= 256),
                  zs(_, s, c, o, t),
                  Ra(js(l, c)));
                break a;
              }
            }
            ((o = l = js(l, c)),
              Qc !== 4 && (Qc = 2),
              rl === null ? (rl = [o]) : rl.push(o),
              (o = s));
            do {
              switch (o.tag) {
                case 3:
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var v = Fs(o, l, t);
                  fo(o, v);
                  break a;
                case 1:
                  c = l;
                  var y = o.type,
                    b = o.stateNode;
                  if (
                    !(o.flags & 128) &&
                    (typeof y.getDerivedStateFromError == `function` ||
                      (b !== null &&
                        typeof b.componentDidCatch == `function` &&
                        (ul === null || !ul.has(b))))
                  ) {
                    ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                    var x = Is(o, c, t);
                    fo(o, x);
                    break a;
                  }
              }
              o = o.return;
            } while (o !== null);
          }
          zl(n);
        } catch (e) {
          ((t = e), Jc === n && n !== null && (Jc = n = n.return));
          continue;
        }
        break;
      } while (1);
    }
    function Nl() {
      var e = Wc.current;
      return ((Wc.current = bs), e === null ? bs : e);
    }
    function Pl() {
      ((Qc === 0 || Qc === 3 || Qc === 2) && (Qc = 4),
        qc === null || (!(el & 268435455) && !(tl & 268435455)) || El(qc, Yc));
    }
    function Fl(e, t) {
      var n = q;
      q |= 2;
      var r = Nl();
      (qc !== e || Yc !== t) && ((sl = null), jl(e, t));
      do
        try {
          Il();
          break;
        } catch (t) {
          Ml(e, t);
        }
      while (1);
      if ((Xa(), (q = n), (Wc.current = r), Jc !== null)) throw Error(i(261));
      return ((qc = null), (Yc = 0), Qc);
    }
    function Il() {
      for (; Jc !== null; ) Rl(Jc);
    }
    function Ll() {
      for (; Jc !== null && !St(); ) Rl(Jc);
    }
    function Rl(e) {
      var t = Jl(e.alternate, e, Xc);
      ((e.memoizedProps = e.pendingProps),
        t === null ? zl(e) : (Jc = t),
        (Gc.current = null));
    }
    function zl(e) {
      var t = e;
      do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
          if (((n = _c(n, t)), n !== null)) {
            ((n.flags &= 32767), (Jc = n));
            return;
          }
          if (e !== null)
            ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
          else {
            ((Qc = 6), (Jc = null));
            return;
          }
        } else if (((n = gc(n, t, Xc)), n !== null)) {
          Jc = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          Jc = t;
          return;
        }
        Jc = t = e;
      } while (t !== null);
      Qc === 0 && (Qc = 5);
    }
    function Bl(e, t, n) {
      var r = M,
        i = Kc.transition;
      try {
        ((Kc.transition = null), (M = 1), Vl(e, t, n, r));
      } finally {
        ((Kc.transition = i), (M = r));
      }
      return null;
    }
    function Vl(e, t, n, r) {
      do Hl();
      while (fl !== null);
      if (q & 6) throw Error(i(327));
      n = e.finishedWork;
      var a = e.finishedLanes;
      if (n === null) return null;
      if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(i(177));
      ((e.callbackNode = null), (e.callbackPriority = 0));
      var o = n.lanes | n.childLanes;
      if (
        (Jt(e, o),
        e === qc && ((Jc = qc = null), (Yc = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
          dl ||
          ((dl = !0),
          Yl(Ot, function () {
            return (Hl(), null);
          })),
        (o = !!(n.flags & 15990)),
        n.subtreeFlags & 15990 || o)
      ) {
        ((o = Kc.transition), (Kc.transition = null));
        var s = M;
        M = 1;
        var c = q;
        ((q |= 4),
          (Gc.current = null),
          Cc(e, n),
          K(n, e),
          Hr(Oi),
          (Sn = !!Di),
          (Oi = Di = null),
          (e.current = n),
          Rc(n, e, a),
          Ct(),
          (q = c),
          (M = s),
          (Kc.transition = o));
      } else e.current = n;
      if (
        (dl && ((dl = !1), (fl = e), (pl = a)),
        (o = e.pendingLanes),
        o === 0 && (ul = null),
        Nt(n.stateNode, r),
        xl(e, wt()),
        t !== null)
      )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
          ((a = t[n]),
            r(a.value, {
              componentStack: a.stack,
              digest: a.digest,
            }));
      if (cl) throw ((cl = !1), (e = ll), (ll = null), e);
      return (
        pl & 1 && e.tag !== 0 && Hl(),
        (o = e.pendingLanes),
        o & 1 ? (e === hl ? ml++ : ((ml = 0), (hl = e))) : (ml = 0),
        pa(),
        null
      );
    }
    function Hl() {
      if (fl !== null) {
        var e = Xt(pl),
          t = Kc.transition,
          n = M;
        try {
          if (((Kc.transition = null), (M = 16 > e ? 16 : e), fl === null))
            var r = !1;
          else {
            if (((e = fl), (fl = null), (pl = 0), q & 6)) throw Error(i(331));
            var a = q;
            for (q |= 4, W = e.current; W !== null; ) {
              var o = W,
                s = o.child;
              if (W.flags & 16) {
                var c = o.deletions;
                if (c !== null) {
                  for (var l = 0; l < c.length; l++) {
                    var u = c[l];
                    for (W = u; W !== null; ) {
                      var d = W;
                      switch (d.tag) {
                        case 0:
                        case 11:
                        case 15:
                          wc(8, d, o);
                      }
                      var f = d.child;
                      if (f !== null) ((f.return = d), (W = f));
                      else
                        for (; W !== null; ) {
                          d = W;
                          var p = d.sibling,
                            m = d.return;
                          if ((Dc(d), d === u)) {
                            W = null;
                            break;
                          }
                          if (p !== null) {
                            ((p.return = m), (W = p));
                            break;
                          }
                          W = m;
                        }
                    }
                  }
                  var h = o.alternate;
                  if (h !== null) {
                    var g = h.child;
                    if (g !== null) {
                      h.child = null;
                      do {
                        var _ = g.sibling;
                        ((g.sibling = null), (g = _));
                      } while (g !== null);
                    }
                  }
                  W = o;
                }
              }
              if (o.subtreeFlags & 2064 && s !== null)
                ((s.return = o), (W = s));
              else
                b: for (; W !== null; ) {
                  if (((o = W), o.flags & 2048))
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        wc(9, o, o.return);
                    }
                  var v = o.sibling;
                  if (v !== null) {
                    ((v.return = o.return), (W = v));
                    break b;
                  }
                  W = o.return;
                }
            }
            var y = e.current;
            for (W = y; W !== null; ) {
              s = W;
              var b = s.child;
              if (s.subtreeFlags & 2064 && b !== null)
                ((b.return = s), (W = b));
              else
                b: for (s = y; W !== null; ) {
                  if (((c = W), c.flags & 2048))
                    try {
                      switch (c.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Tc(9, c);
                      }
                    } catch (e) {
                      J(c, c.return, e);
                    }
                  if (c === s) {
                    W = null;
                    break b;
                  }
                  var x = c.sibling;
                  if (x !== null) {
                    ((x.return = c.return), (W = x));
                    break b;
                  }
                  W = c.return;
                }
            }
            if (
              ((q = a),
              pa(),
              Mt && typeof Mt.onPostCommitFiberRoot == `function`)
            )
              try {
                Mt.onPostCommitFiberRoot(jt, e);
              } catch {}
            r = !0;
          }
          return r;
        } finally {
          ((M = n), (Kc.transition = t));
        }
      }
      return !1;
    }
    function Ul(e, t, n) {
      ((t = js(n, t)),
        (t = Fs(e, t, 1)),
        (e = lo(e, t, 1)),
        (t = vl()),
        e !== null && (qt(e, 1, t), xl(e, t)));
    }
    function J(e, t, n) {
      if (e.tag === 3) Ul(e, e, n);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            Ul(t, e, n);
            break;
          }
          if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (ul === null || !ul.has(r)))
            ) {
              ((e = js(n, e)),
                (e = Is(t, e, 1)),
                (t = lo(t, e, 1)),
                (e = vl()),
                t !== null && (qt(t, 1, e), xl(t, e)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Wl(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (t = vl()),
        (e.pingedLanes |= e.suspendedLanes & n),
        qc === e &&
          (Yc & n) === n &&
          (Qc === 4 || (Qc === 3 && (Yc & 130023424) === Yc && 500 > wt() - al)
            ? jl(e, 0)
            : (nl |= n)),
        xl(e, t));
    }
    function Gl(e, t) {
      t === 0 &&
        (e.mode & 1
          ? ((t = zt), (zt <<= 1), !(zt & 130023424) && (zt = 4194304))
          : (t = 1));
      var n = vl();
      ((e = io(e, t)), e !== null && (qt(e, t, n), xl(e, n)));
    }
    function Kl(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), Gl(e, n));
    }
    function ql(e, t) {
      var n = 0;
      switch (e.tag) {
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        default:
          throw Error(i(314));
      }
      (r !== null && r.delete(t), Gl(e, n));
    }
    var Jl = function (e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ea.current) Vs = !0;
        else {
          if ((e.lanes & n) === 0 && !(t.flags & 128))
            return ((Vs = !1), uc(e, t, n));
          Vs = !!(e.flags & 131072);
        }
      else ((Vs = !1), B && t.flags & 1048576 && wa(t, _a, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          var r = t.type;
          (cc(e, t), (e = t.pendingProps));
          var a = na(t, $i.current);
          ($a(t, n), (a = Ro(null, t, r, e, a, n)));
          var o = zo();
          return (
            (t.flags |= 1),
            typeof a == `object` &&
            a &&
            typeof a.render == `function` &&
            a.$$typeof === void 0
              ? ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                ra(r) ? ((o = !0), sa(t)) : (o = !1),
                (t.memoizedState =
                  a.state !== null && a.state !== void 0 ? a.state : null),
                oo(t),
                (a.updater = Es),
                (t.stateNode = a),
                (a._reactInternals = t),
                As(t, r, e, n),
                (t = Xs(null, t, r, !0, o, n)))
              : ((t.tag = 0),
                B && o && Ta(t),
                Hs(null, t, a, n),
                (t = t.child)),
            t
          );
        case 16:
          r = t.elementType;
          a: {
            switch (
              (cc(e, t),
              (e = t.pendingProps),
              (a = r._init),
              (r = a(r._payload)),
              (t.type = r),
              (a = t.tag = $l(r)),
              (e = ws(r, e)),
              a)
            ) {
              case 0:
                t = Js(null, t, r, e, n);
                break a;
              case 1:
                t = Ys(null, t, r, e, n);
                break a;
              case 11:
                t = Us(null, t, r, e, n);
                break a;
              case 14:
                t = Ws(null, t, r, ws(r.type, e), n);
                break a;
            }
            throw Error(i(306, r, ``));
          }
          return t;
        case 0:
          return (
            (r = t.type),
            (a = t.pendingProps),
            (a = t.elementType === r ? a : ws(r, a)),
            Js(e, t, r, a, n)
          );
        case 1:
          return (
            (r = t.type),
            (a = t.pendingProps),
            (a = t.elementType === r ? a : ws(r, a)),
            Ys(e, t, r, a, n)
          );
        case 3:
          a: {
            if ((Zs(t), e === null)) throw Error(i(387));
            ((r = t.pendingProps),
              (o = t.memoizedState),
              (a = o.element),
              so(e, t),
              po(t, r, null, n));
            var s = t.memoizedState;
            if (((r = s.element), o.isDehydrated))
              if (
                ((o = {
                  element: r,
                  isDehydrated: !1,
                  cache: s.cache,
                  pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                  transitions: s.transitions,
                }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                ((a = js(Error(i(423)), t)), (t = Qs(e, t, r, n, a)));
                break a;
              } else if (r !== a) {
                ((a = js(Error(i(424)), t)), (t = Qs(e, t, r, n, a)));
                break a;
              } else
                for (
                  Oa = Ii(t.stateNode.containerInfo.firstChild),
                    Da = t,
                    B = !0,
                    ka = null,
                    n = Ga(t, null, r, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            else {
              if ((La(), r === a)) {
                t = lc(e, t, n);
                break a;
              }
              Hs(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 5:
          return (
            So(t),
            e === null && Na(t),
            (r = t.type),
            (a = t.pendingProps),
            (o = e === null ? null : e.memoizedProps),
            (s = a.children),
            ki(r, a) ? (s = null) : o !== null && ki(r, o) && (t.flags |= 32),
            qs(e, t),
            Hs(e, t, s, n),
            t.child
          );
        case 6:
          return (e === null && Na(t), null);
        case 13:
          return tc(e, t, n);
        case 4:
          return (
            bo(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Wa(t, null, r, n)) : Hs(e, t, r, n),
            t.child
          );
        case 11:
          return (
            (r = t.type),
            (a = t.pendingProps),
            (a = t.elementType === r ? a : ws(r, a)),
            Us(e, t, r, a, n)
          );
        case 7:
          return (Hs(e, t, t.pendingProps, n), t.child);
        case 8:
          return (Hs(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (Hs(e, t, t.pendingProps.children, n), t.child);
        case 10:
          a: {
            if (
              ((r = t.type._context),
              (a = t.pendingProps),
              (o = t.memoizedProps),
              (s = a.value),
              R(Ka, r._currentValue),
              (r._currentValue = s),
              o !== null)
            )
              if (Fr(o.value, s)) {
                if (o.children === a.children && !ea.current) {
                  t = lc(e, t, n);
                  break a;
                }
              } else
                for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                  var c = o.dependencies;
                  if (c !== null) {
                    s = o.child;
                    for (var l = c.firstContext; l !== null; ) {
                      if (l.context === r) {
                        if (o.tag === 1) {
                          ((l = co(-1, n & -n)), (l.tag = 2));
                          var u = o.updateQueue;
                          if (u !== null) {
                            u = u.shared;
                            var d = u.pending;
                            (d === null
                              ? (l.next = l)
                              : ((l.next = d.next), (d.next = l)),
                              (u.pending = l));
                          }
                        }
                        ((o.lanes |= n),
                          (l = o.alternate),
                          l !== null && (l.lanes |= n),
                          Qa(o.return, n, t),
                          (c.lanes |= n));
                        break;
                      }
                      l = l.next;
                    }
                  } else if (o.tag === 10)
                    s = o.type === t.type ? null : o.child;
                  else if (o.tag === 18) {
                    if (((s = o.return), s === null)) throw Error(i(341));
                    ((s.lanes |= n),
                      (c = s.alternate),
                      c !== null && (c.lanes |= n),
                      Qa(s, n, t),
                      (s = o.sibling));
                  } else s = o.child;
                  if (s !== null) s.return = o;
                  else
                    for (s = o; s !== null; ) {
                      if (s === t) {
                        s = null;
                        break;
                      }
                      if (((o = s.sibling), o !== null)) {
                        ((o.return = s.return), (s = o));
                        break;
                      }
                      s = s.return;
                    }
                  o = s;
                }
            (Hs(e, t, a.children, n), (t = t.child));
          }
          return t;
        case 9:
          return (
            (a = t.type),
            (r = t.pendingProps.children),
            $a(t, n),
            (a = eo(a)),
            (r = r(a)),
            (t.flags |= 1),
            Hs(e, t, r, n),
            t.child
          );
        case 14:
          return (
            (r = t.type),
            (a = ws(r, t.pendingProps)),
            (a = ws(r.type, a)),
            Ws(e, t, r, a, n)
          );
        case 15:
          return Gs(e, t, t.type, t.pendingProps, n);
        case 17:
          return (
            (r = t.type),
            (a = t.pendingProps),
            (a = t.elementType === r ? a : ws(r, a)),
            cc(e, t),
            (t.tag = 1),
            ra(r) ? ((e = !0), sa(t)) : (e = !1),
            $a(t, n),
            Os(t, r, a),
            As(t, r, a, n),
            Xs(null, t, r, !0, e, n)
          );
        case 19:
          return sc(e, t, n);
        case 22:
          return Ks(e, t, n);
      }
      throw Error(i(156, t.tag));
    };
    function Yl(e, t) {
      return bt(e, t);
    }
    function Xl(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function Zl(e, t, n, r) {
      return new Xl(e, t, n, r);
    }
    function Ql(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function $l(e) {
      if (typeof e == `function`) return +!!Ql(e);
      if (e != null) {
        if (((e = e.$$typeof), e === D)) return 11;
        if (e === ae) return 14;
      }
      return 2;
    }
    function eu(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = Zl(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null
            ? null
            : {
                lanes: t.lanes,
                firstContext: t.firstContext,
              }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
      );
    }
    function tu(e, t, n, r, a, o) {
      var s = 2;
      if (((r = e), typeof e == `function`)) Ql(e) && (s = 1);
      else if (typeof e == `string`) s = 5;
      else
        a: switch (e) {
          case ee:
            return nu(n.children, a, o, t);
          case E:
            ((s = 8), (a |= 8));
            break;
          case te:
            return (
              (e = Zl(12, n, t, a | 2)),
              (e.elementType = te),
              (e.lanes = o),
              e
            );
          case O:
            return (
              (e = Zl(13, n, t, a)),
              (e.elementType = O),
              (e.lanes = o),
              e
            );
          case ie:
            return (
              (e = Zl(19, n, t, a)),
              (e.elementType = ie),
              (e.lanes = o),
              e
            );
          case k:
            return ru(n, a, o, t);
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case ne:
                  s = 10;
                  break a;
                case re:
                  s = 9;
                  break a;
                case D:
                  s = 11;
                  break a;
                case ae:
                  s = 14;
                  break a;
                case oe:
                  ((s = 16), (r = null));
                  break a;
              }
            throw Error(i(130, e == null ? e : typeof e, ``));
        }
      return (
        (t = Zl(s, n, t, a)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
      );
    }
    function nu(e, t, n, r) {
      return ((e = Zl(7, e, r, t)), (e.lanes = n), e);
    }
    function ru(e, t, n, r) {
      return (
        (e = Zl(22, e, r, t)),
        (e.elementType = k),
        (e.lanes = n),
        (e.stateNode = {
          isHidden: !1,
        }),
        e
      );
    }
    function iu(e, t, n) {
      return ((e = Zl(6, e, null, t)), (e.lanes = n), e);
    }
    function au(e, t, n) {
      return (
        (t = Zl(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function ou(e, t, n, r, i) {
      ((this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
          this.pingCache =
          this.current =
          this.pendingChildren =
            null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Kt(0)),
        (this.expirationTimes = Kt(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Kt(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = i),
        (this.mutableSourceEagerHydrationData = null));
    }
    function su(e, t, n, r, i, a, o, s, c) {
      return (
        (e = new ou(e, t, n, s, c)),
        t === 1 ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
        (a = Zl(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (a.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        oo(a),
        e
      );
    }
    function cu(e, t, n) {
      var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: T,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    function lu(e) {
      if (!e) return Qi;
      e = e._reactInternals;
      a: {
        if (mt(e) !== e || e.tag !== 1) throw Error(i(170));
        var t = e;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break a;
            case 1:
              if (ra(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break a;
              }
          }
          t = t.return;
        } while (t !== null);
        throw Error(i(171));
      }
      if (e.tag === 1) {
        var n = e.type;
        if (ra(n)) return oa(e, n, t);
      }
      return t;
    }
    function uu(e, t, n, r, i, a, o, s, c) {
      return (
        (e = su(n, r, !0, e, i, a, o, s, c)),
        (e.context = lu(null)),
        (n = e.current),
        (r = vl()),
        (i = yl(n)),
        (a = co(r, i)),
        (a.callback = t ?? null),
        lo(n, a, i),
        (e.current.lanes = i),
        qt(e, i, r),
        xl(e, r),
        e
      );
    }
    function du(e, t, n, r) {
      var i = t.current,
        a = vl(),
        o = yl(i);
      return (
        (n = lu(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = co(a, o)),
        (t.payload = {
          element: e,
        }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = lo(i, t, o)),
        e !== null && (bl(e, i, o, a), uo(e, i, o)),
        o
      );
    }
    function fu(e) {
      if (((e = e.current), !e.child)) return null;
      switch (e.child.tag) {
        case 5:
          return e.child.stateNode;
        default:
          return e.child.stateNode;
      }
    }
    function pu(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function mu(e, t) {
      (pu(e, t), (e = e.alternate) && pu(e, t));
    }
    function hu() {
      return null;
    }
    var gu =
      typeof reportError == `function`
        ? reportError
        : function (e) {
            console.error(e);
          };
    function _u(e) {
      this._internalRoot = e;
    }
    ((vu.prototype.render = _u.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(i(409));
        du(e, t, null, null);
      }),
      (vu.prototype.unmount = _u.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (kl(function () {
              du(null, e, null, null);
            }),
              (t[Vi] = null));
          }
        }));
    function vu(e) {
      this._internalRoot = e;
    }
    vu.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = en();
        e = {
          blockedOn: null,
          target: e,
          priority: t,
        };
        for (var n = 0; n < un.length && t !== 0 && t < un[n].priority; n++);
        (un.splice(n, 0, e), n === 0 && hn(e));
      }
    };
    function yu(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function Y(e) {
      return !(
        !e ||
        (e.nodeType !== 1 &&
          e.nodeType !== 9 &&
          e.nodeType !== 11 &&
          (e.nodeType !== 8 || e.nodeValue !== ` react-mount-point-unstable `))
      );
    }
    function bu() {}
    function xu(e, t, n, r, i) {
      if (i) {
        if (typeof r == `function`) {
          var a = r;
          r = function () {
            var e = fu(o);
            a.call(e);
          };
        }
        var o = uu(t, r, e, 0, null, !1, !1, ``, bu);
        return (
          (e._reactRootContainer = o),
          (e[Vi] = o.current),
          hi(e.nodeType === 8 ? e.parentNode : e),
          kl(),
          o
        );
      }
      for (; (i = e.lastChild); ) e.removeChild(i);
      if (typeof r == `function`) {
        var s = r;
        r = function () {
          var e = fu(c);
          s.call(e);
        };
      }
      var c = su(e, 0, !1, null, null, !1, !1, ``, bu);
      return (
        (e._reactRootContainer = c),
        (e[Vi] = c.current),
        hi(e.nodeType === 8 ? e.parentNode : e),
        kl(function () {
          du(t, c, n, r);
        }),
        c
      );
    }
    function Su(e, t, n, r, i) {
      var a = n._reactRootContainer;
      if (a) {
        var o = a;
        if (typeof i == `function`) {
          var s = i;
          i = function () {
            var e = fu(o);
            s.call(e);
          };
        }
        du(t, o, e, i);
      } else o = xu(n, t, e, i, r);
      return fu(o);
    }
    ((Zt = function (e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var n = Bt(t.pendingLanes);
            n !== 0 &&
              (Yt(t, n | 1),
              xl(t, wt()),
              !(q & 6) && ((ol = wt() + 500), pa()));
          }
          break;
        case 13:
          (kl(function () {
            var t = io(e, 1);
            t !== null && bl(t, e, 1, vl());
          }),
            mu(e, 1));
      }
    }),
      (Qt = function (e) {
        if (e.tag === 13) {
          var t = io(e, 134217728);
          (t !== null && bl(t, e, 134217728, vl()), mu(e, 134217728));
        }
      }),
      ($t = function (e) {
        if (e.tag === 13) {
          var t = yl(e),
            n = io(e, t);
          (n !== null && bl(n, e, t, vl()), mu(e, t));
        }
      }),
      (en = function () {
        return M;
      }),
      (tn = function (e, t) {
        var n = M;
        try {
          return ((M = e), t());
        } finally {
          M = n;
        }
      }),
      (qe = function (e, t, n) {
        switch (t) {
          case `input`:
            if ((we(e, n), (t = n.name), n.type === `radio` && t != null)) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  `input[name=` + JSON.stringify(`` + t) + `][type="radio"]`,
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = Ji(r);
                  if (!a) throw Error(i(90));
                  (ye(r), we(r, a));
                }
              }
            }
            break;
          case `textarea`:
            je(e, n);
            break;
          case `select`:
            ((t = n.value), t != null && Oe(e, !!n.multiple, t, !1));
        }
      }),
      ($e = Ol),
      (et = kl));
    var Cu = {
        usingClientEntryPoint: !1,
        Events: [Ki, qi, Ji, Ze, Qe, Ol],
      },
      wu = {
        findFiberByHostInstance: Gi,
        bundleType: 0,
        version: `18.3.1`,
        rendererPackageName: `react-dom`,
      },
      Tu = {
        bundleType: wu.bundleType,
        version: wu.version,
        rendererPackageName: wu.rendererPackageName,
        rendererConfig: wu.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: C.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return ((e = vt(e)), e === null ? null : e.stateNode);
        },
        findFiberByHostInstance: wu.findFiberByHostInstance || hu,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: `18.3.1-next-f1338f8080-20240426`,
      };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var Eu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Eu.isDisabled && Eu.supportsFiber)
        try {
          ((jt = Eu.inject(Tu)), (Mt = Eu));
        } catch {}
    }
    ((e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cu),
      (e.createPortal = function (e, t) {
        var n =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!yu(t)) throw Error(i(200));
        return cu(e, t, null, n);
      }),
      (e.createRoot = function (e, t) {
        if (!yu(e)) throw Error(i(299));
        var n = !1,
          r = ``,
          a = gu;
        return (
          t != null &&
            (!0 === t.unstable_strictMode && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
          (t = su(e, 1, !1, null, null, n, !1, r, a)),
          (e[Vi] = t.current),
          hi(e.nodeType === 8 ? e.parentNode : e),
          new _u(t)
        );
      }),
      (e.findDOMNode = function (e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0)
          throw typeof e.render == `function`
            ? Error(i(188))
            : ((e = Object.keys(e).join(`,`)), Error(i(268, e)));
        return ((e = vt(t)), (e = e === null ? null : e.stateNode), e);
      }),
      (e.flushSync = function (e) {
        return kl(e);
      }),
      (e.hydrate = function (e, t, n) {
        if (!Y(t)) throw Error(i(200));
        return Su(null, e, t, !0, n);
      }),
      (e.hydrateRoot = function (e, t, n) {
        if (!yu(e)) throw Error(i(405));
        var r = (n != null && n.hydratedSources) || null,
          a = !1,
          o = ``,
          s = gu;
        if (
          (n != null &&
            (!0 === n.unstable_strictMode && (a = !0),
            n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
          (t = uu(t, null, e, 1, n ?? null, a, !1, o, s)),
          (e[Vi] = t.current),
          hi(e),
          r)
        )
          for (e = 0; e < r.length; e++)
            ((n = r[e]),
              (a = n._getVersion),
              (a = a(n._source)),
              t.mutableSourceEagerHydrationData == null
                ? (t.mutableSourceEagerHydrationData = [n, a])
                : t.mutableSourceEagerHydrationData.push(n, a));
        return new vu(t);
      }),
      (e.render = function (e, t, n) {
        if (!Y(t)) throw Error(i(200));
        return Su(null, e, t, !1, n);
      }),
      (e.unmountComponentAtNode = function (e) {
        if (!Y(e)) throw Error(i(40));
        return e._reactRootContainer
          ? (kl(function () {
              Su(null, null, e, !1, function () {
                ((e._reactRootContainer = null), (e[Vi] = null));
              });
            }),
            !0)
          : !1;
      }),
      (e.unstable_batchedUpdates = Ol),
      (e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!Y(n)) throw Error(i(200));
        if (e == null || e._reactInternals === void 0) throw Error(i(38));
        return Su(e, t, n, !1, r);
      }),
      (e.version = `18.3.1-next-f1338f8080-20240426`));
  }),
  u = i((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = l()));
  }),
  d = a(
    i((e) => {
      var t = u();
      ((e.createRoot = t.createRoot), (e.hydrateRoot = t.hydrateRoot));
    })(),
    1,
  ),
  f = a(n(), 1),
  p = 20,
  m = 1e6,
  h = {
    ADD_TOAST: `ADD_TOAST`,
    UPDATE_TOAST: `UPDATE_TOAST`,
    DISMISS_TOAST: `DISMISS_TOAST`,
    REMOVE_TOAST: `REMOVE_TOAST`,
  },
  g = 0;
function _() {
  return ((g = (g + 1) % Number.MAX_VALUE), g.toString());
}
var v = new Map(),
  y = (e) => {
    if (v.has(e)) return;
    let t = setTimeout(() => {
      (v.delete(e),
        C({
          type: h.REMOVE_TOAST,
          toastId: e,
        }));
    }, m);
    v.set(e, t);
  },
  b = (e, t) => {
    switch (t.type) {
      case h.ADD_TOAST:
        return {
          ...e,
          toasts: [t.toast, ...e.toasts].slice(0, p),
        };
      case h.UPDATE_TOAST:
        return {
          ...e,
          toasts: e.toasts.map((e) =>
            e.id === t.toast.id
              ? {
                  ...e,
                  ...t.toast,
                }
              : e,
          ),
        };
      case h.DISMISS_TOAST: {
        let { toastId: n } = t;
        return (
          n
            ? y(n)
            : e.toasts.forEach((e) => {
                y(e.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((e) =>
              e.id === n || n === void 0
                ? {
                    ...e,
                    open: !1,
                  }
                : e,
            ),
          }
        );
      }
      case h.REMOVE_TOAST:
        return t.toastId === void 0
          ? {
              ...e,
              toasts: [],
            }
          : {
              ...e,
              toasts: e.toasts.filter((e) => e.id !== t.toastId),
            };
    }
  },
  x = [],
  S = {
    toasts: [],
  };
function C(e) {
  ((S = b(S, e)),
    x.forEach((e) => {
      e(S);
    }));
}
function w({ ...e }) {
  let t = _(),
    n = (e) =>
      C({
        type: h.UPDATE_TOAST,
        toast: {
          ...e,
          id: t,
        },
      }),
    r = () =>
      C({
        type: h.DISMISS_TOAST,
        toastId: t,
      });
  return (
    C({
      type: h.ADD_TOAST,
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (e) => {
          e || r();
        },
      },
    }),
    {
      id: t,
      dismiss: r,
      update: n,
    }
  );
}
function T() {
  let [e, t] = (0, f.useState)(S);
  return (
    (0, f.useEffect)(
      () => (
        x.push(t),
        () => {
          let e = x.indexOf(t);
          e > -1 && x.splice(e, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: w,
      dismiss: (e) =>
        C({
          type: h.DISMISS_TOAST,
          toastId: e,
        }),
    }
  );
}
var ee = a(u(), 1);
typeof window < `u` && window.document && window.document.createElement;
function E(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (r) {
    if ((e?.(r), n === !1 || !r.defaultPrevented)) return t?.(r);
  };
}
function te(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
function ne(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = te(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : te(e[t], null);
        }
      };
  };
}
function re(...e) {
  return f.useCallback(ne(...e), e);
}
var D = o();
function O(e, t = []) {
  let n = [];
  function r(t, r) {
    let i = f.createContext(r),
      a = n.length;
    n = [...n, r];
    let o = (t) => {
      let { scope: n, children: r, ...o } = t,
        s = n?.[e]?.[a] || i,
        c = f.useMemo(() => o, Object.values(o));
      return (0, D.jsx)(s.Provider, {
        value: c,
        children: r,
      });
    };
    o.displayName = t + `Provider`;
    function s(n, o) {
      let s = o?.[e]?.[a] || i,
        c = f.useContext(s);
      if (c) return c;
      if (r !== void 0) return r;
      throw Error(`\`${n}\` must be used within \`${t}\``);
    }
    return [o, s];
  }
  let i = () => {
    let t = n.map((e) => f.createContext(e));
    return function (n) {
      let r = n?.[e] || t;
      return f.useMemo(
        () => ({
          [`__scope${e}`]: {
            ...n,
            [e]: r,
          },
        }),
        [n, r],
      );
    };
  };
  return ((i.scopeName = e), [r, ie(i, ...t)]);
}
function ie(...e) {
  let t = e[0];
  if (e.length === 1) return t;
  let n = () => {
    let n = e.map((e) => ({
      useScope: e(),
      scopeName: e.scopeName,
    }));
    return function (e) {
      let r = n.reduce((t, { useScope: n, scopeName: r }) => {
        let i = n(e)[`__scope${r}`];
        return {
          ...t,
          ...i,
        };
      }, {});
      return f.useMemo(
        () => ({
          [`__scope${t.scopeName}`]: r,
        }),
        [r],
      );
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function ae(e) {
  let t = oe(e),
    n = f.forwardRef((e, n) => {
      let { children: r, ...i } = e,
        a = f.Children.toArray(r),
        o = a.find(se);
      if (o) {
        let e = o.props.children,
          r = a.map((t) =>
            t === o
              ? f.Children.count(e) > 1
                ? f.Children.only(null)
                : f.isValidElement(e)
                  ? e.props.children
                  : null
              : t,
          );
        return (0, D.jsx)(t, {
          ...i,
          ref: n,
          children: f.isValidElement(e) ? f.cloneElement(e, void 0, r) : null,
        });
      }
      return (0, D.jsx)(t, {
        ...i,
        ref: n,
        children: r,
      });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function oe(e) {
  let t = f.forwardRef((e, t) => {
    let { children: n, ...r } = e;
    if (f.isValidElement(n)) {
      let e = A(n),
        i = ce(r, n.props);
      return (
        n.type !== f.Fragment && (i.ref = t ? ne(t, e) : e),
        f.cloneElement(n, i)
      );
    }
    return f.Children.count(n) > 1 ? f.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var k = Symbol(`radix.slottable`);
function se(e) {
  return (
    f.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === k
  );
}
function ce(e, t) {
  let n = {
    ...t,
  };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? i && a
        ? (n[r] = (...e) => {
            let t = a(...e);
            return (i(...e), t);
          })
        : i && (n[r] = i)
      : r === `style`
        ? (n[r] = {
            ...i,
            ...a,
          })
        : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return {
    ...e,
    ...n,
  };
}
function A(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function le(e) {
  let t = e + `CollectionProvider`,
    [n, r] = O(t),
    [i, a] = n(t, {
      collectionRef: {
        current: null,
      },
      itemMap: new Map(),
    }),
    o = (e) => {
      let { scope: t, children: n } = e,
        r = f.useRef(null),
        a = f.useRef(new Map()).current;
      return (0, D.jsx)(i, {
        scope: t,
        itemMap: a,
        collectionRef: r,
        children: n,
      });
    };
  o.displayName = t;
  let s = e + `CollectionSlot`,
    c = ae(s),
    l = f.forwardRef((e, t) => {
      let { scope: n, children: r } = e,
        i = re(t, a(s, n).collectionRef);
      return (0, D.jsx)(c, {
        ref: i,
        children: r,
      });
    });
  l.displayName = s;
  let u = e + `CollectionItemSlot`,
    d = `data-radix-collection-item`,
    p = ae(u),
    m = f.forwardRef((e, t) => {
      let { scope: n, children: r, ...i } = e,
        o = f.useRef(null),
        s = re(t, o),
        c = a(u, n);
      return (
        f.useEffect(
          () => (
            c.itemMap.set(o, {
              ref: o,
              ...i,
            }),
            () => void c.itemMap.delete(o)
          ),
        ),
        (0, D.jsx)(p, {
          [d]: ``,
          ref: s,
          children: r,
        })
      );
    });
  m.displayName = u;
  function h(t) {
    let n = a(e + `CollectionConsumer`, t);
    return f.useCallback(() => {
      let e = n.collectionRef.current;
      if (!e) return [];
      let t = Array.from(e.querySelectorAll(`[${d}]`));
      return Array.from(n.itemMap.values()).sort(
        (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current),
      );
    }, [n.collectionRef, n.itemMap]);
  }
  return [
    {
      Provider: o,
      Slot: l,
      ItemSlot: m,
    },
    h,
    r,
  ];
}
function j(e) {
  let t = ue(e),
    n = f.forwardRef((e, n) => {
      let { children: r, ...i } = e,
        a = f.Children.toArray(r),
        o = a.find(fe);
      if (o) {
        let e = o.props.children,
          r = a.map((t) =>
            t === o
              ? f.Children.count(e) > 1
                ? f.Children.only(null)
                : f.isValidElement(e)
                  ? e.props.children
                  : null
              : t,
          );
        return (0, D.jsx)(t, {
          ...i,
          ref: n,
          children: f.isValidElement(e) ? f.cloneElement(e, void 0, r) : null,
        });
      }
      return (0, D.jsx)(t, {
        ...i,
        ref: n,
        children: r,
      });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function ue(e) {
  let t = f.forwardRef((e, t) => {
    let { children: n, ...r } = e;
    if (f.isValidElement(n)) {
      let e = me(n),
        i = pe(r, n.props);
      return (
        n.type !== f.Fragment && (i.ref = t ? ne(t, e) : e),
        f.cloneElement(n, i)
      );
    }
    return f.Children.count(n) > 1 ? f.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var de = Symbol(`radix.slottable`);
function fe(e) {
  return (
    f.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === de
  );
}
function pe(e, t) {
  let n = {
    ...t,
  };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? i && a
        ? (n[r] = (...e) => {
            let t = a(...e);
            return (i(...e), t);
          })
        : i && (n[r] = i)
      : r === `style`
        ? (n[r] = {
            ...i,
            ...a,
          })
        : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return {
    ...e,
    ...n,
  };
}
function me(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var he = [
  `a`,
  `button`,
  `div`,
  `form`,
  `h2`,
  `h3`,
  `img`,
  `input`,
  `label`,
  `li`,
  `nav`,
  `ol`,
  `p`,
  `select`,
  `span`,
  `svg`,
  `ul`,
].reduce((e, t) => {
  let n = j(`Primitive.${t}`),
    r = f.forwardRef((e, r) => {
      let { asChild: i, ...a } = e,
        o = i ? n : t;
      return (
        typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0),
        (0, D.jsx)(o, {
          ...a,
          ref: r,
        })
      );
    });
  return (
    (r.displayName = `Primitive.${t}`),
    {
      ...e,
      [t]: r,
    }
  );
}, {});
function ge(e, t) {
  e && ee.flushSync(() => e.dispatchEvent(t));
}
function _e(e) {
  let t = f.useRef(e);
  return (
    f.useEffect(() => {
      t.current = e;
    }),
    f.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      [],
    )
  );
}
function ve(e, t = globalThis?.document) {
  let n = _e(e);
  f.useEffect(() => {
    let e = (e) => {
      e.key === `Escape` && n(e);
    };
    return (
      t.addEventListener(`keydown`, e, {
        capture: !0,
      }),
      () =>
        t.removeEventListener(`keydown`, e, {
          capture: !0,
        })
    );
  }, [n, t]);
}
var ye = `DismissableLayer`,
  be = `dismissableLayer.update`,
  xe = `dismissableLayer.pointerDownOutside`,
  Se = `dismissableLayer.focusOutside`,
  Ce,
  we = f.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Te = f.forwardRef((e, t) => {
    let {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: i,
        onFocusOutside: a,
        onInteractOutside: o,
        onDismiss: s,
        ...c
      } = e,
      l = f.useContext(we),
      [u, d] = f.useState(null),
      p = u?.ownerDocument ?? globalThis?.document,
      [, m] = f.useState({}),
      h = re(t, (e) => d(e)),
      g = Array.from(l.layers),
      [_] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1),
      v = g.indexOf(_),
      y = u ? g.indexOf(u) : -1,
      b = l.layersWithOutsidePointerEventsDisabled.size > 0,
      x = y >= v,
      S = Oe((e) => {
        let t = e.target,
          n = [...l.branches].some((e) => e.contains(t));
        !x || n || (i?.(e), o?.(e), e.defaultPrevented || s?.());
      }, p),
      C = ke((e) => {
        let t = e.target;
        [...l.branches].some((e) => e.contains(t)) ||
          (a?.(e), o?.(e), e.defaultPrevented || s?.());
      }, p);
    return (
      ve((e) => {
        y === l.layers.size - 1 &&
          (r?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()));
      }, p),
      f.useEffect(() => {
        if (u)
          return (
            n &&
              (l.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Ce = p.body.style.pointerEvents),
                (p.body.style.pointerEvents = `none`)),
              l.layersWithOutsidePointerEventsDisabled.add(u)),
            l.layers.add(u),
            Ae(),
            () => {
              n &&
                l.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (p.body.style.pointerEvents = Ce);
            }
          );
      }, [u, p, n, l]),
      f.useEffect(
        () => () => {
          u &&
            (l.layers.delete(u),
            l.layersWithOutsidePointerEventsDisabled.delete(u),
            Ae());
        },
        [u, l],
      ),
      f.useEffect(() => {
        let e = () => m({});
        return (
          document.addEventListener(be, e),
          () => document.removeEventListener(be, e)
        );
      }, []),
      (0, D.jsx)(he.div, {
        ...c,
        ref: h,
        style: {
          pointerEvents: b ? (x ? `auto` : `none`) : void 0,
          ...e.style,
        },
        onFocusCapture: E(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: E(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: E(e.onPointerDownCapture, S.onPointerDownCapture),
      })
    );
  });
Te.displayName = ye;
var Ee = `DismissableLayerBranch`,
  De = f.forwardRef((e, t) => {
    let n = f.useContext(we),
      r = f.useRef(null),
      i = re(t, r);
    return (
      f.useEffect(() => {
        let e = r.current;
        if (e)
          return (
            n.branches.add(e),
            () => {
              n.branches.delete(e);
            }
          );
      }, [n.branches]),
      (0, D.jsx)(he.div, {
        ...e,
        ref: i,
      })
    );
  });
De.displayName = Ee;
function Oe(e, t = globalThis?.document) {
  let n = _e(e),
    r = f.useRef(!1),
    i = f.useRef(() => {});
  return (
    f.useEffect(() => {
      let e = (e) => {
          if (e.target && !r.current) {
            let r = function () {
                je(xe, n, a, {
                  discrete: !0,
                });
              },
              a = {
                originalEvent: e,
              };
            e.pointerType === `touch`
              ? (t.removeEventListener(`click`, i.current),
                (i.current = r),
                t.addEventListener(`click`, i.current, {
                  once: !0,
                }))
              : r();
          } else t.removeEventListener(`click`, i.current);
          r.current = !1;
        },
        a = window.setTimeout(() => {
          t.addEventListener(`pointerdown`, e);
        }, 0);
      return () => {
        (window.clearTimeout(a),
          t.removeEventListener(`pointerdown`, e),
          t.removeEventListener(`click`, i.current));
      };
    }, [t, n]),
    {
      onPointerDownCapture: () => (r.current = !0),
    }
  );
}
function ke(e, t = globalThis?.document) {
  let n = _e(e),
    r = f.useRef(!1);
  return (
    f.useEffect(() => {
      let e = (e) => {
        e.target &&
          !r.current &&
          je(
            Se,
            n,
            {
              originalEvent: e,
            },
            {
              discrete: !1,
            },
          );
      };
      return (
        t.addEventListener(`focusin`, e),
        () => t.removeEventListener(`focusin`, e)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Ae() {
  let e = new CustomEvent(be);
  document.dispatchEvent(e);
}
function je(e, t, n, { discrete: r }) {
  let i = n.originalEvent.target,
    a = new CustomEvent(e, {
      bubbles: !1,
      cancelable: !0,
      detail: n,
    });
  (t &&
    i.addEventListener(e, t, {
      once: !0,
    }),
    r ? ge(i, a) : i.dispatchEvent(a));
}
var Me = Te,
  Ne = De,
  Pe = globalThis?.document ? f.useLayoutEffect : () => {},
  Fe = `Portal`,
  Ie = f.forwardRef((e, t) => {
    let { container: n, ...r } = e,
      [i, a] = f.useState(!1);
    Pe(() => a(!0), []);
    let o = n || (i && globalThis?.document?.body);
    return o
      ? ee.createPortal(
          (0, D.jsx)(he.div, {
            ...r,
            ref: t,
          }),
          o,
        )
      : null;
  });
Ie.displayName = Fe;
function Le(e, t) {
  return f.useReducer((e, n) => t[e][n] ?? e, e);
}
var Re = (e) => {
  let { present: t, children: n } = e,
    r = ze(t),
    i =
      typeof n == `function`
        ? n({
            present: r.isPresent,
          })
        : f.Children.only(n),
    a = re(r.ref, Ve(i));
  return typeof n == `function` || r.isPresent
    ? f.cloneElement(i, {
        ref: a,
      })
    : null;
};
Re.displayName = `Presence`;
function ze(e) {
  let [t, n] = f.useState(),
    r = f.useRef(null),
    i = f.useRef(e),
    a = f.useRef(`none`),
    [o, s] = Le(e ? `mounted` : `unmounted`, {
      mounted: {
        UNMOUNT: `unmounted`,
        ANIMATION_OUT: `unmountSuspended`,
      },
      unmountSuspended: {
        MOUNT: `mounted`,
        ANIMATION_END: `unmounted`,
      },
      unmounted: {
        MOUNT: `mounted`,
      },
    });
  return (
    f.useEffect(() => {
      let e = Be(r.current);
      a.current = o === `mounted` ? e : `none`;
    }, [o]),
    Pe(() => {
      let t = r.current,
        n = i.current;
      if (n !== e) {
        let r = a.current,
          o = Be(t);
        (e
          ? s(`MOUNT`)
          : o === `none` || t?.display === `none`
            ? s(`UNMOUNT`)
            : s(n && r !== o ? `ANIMATION_OUT` : `UNMOUNT`),
          (i.current = e));
      }
    }, [e, s]),
    Pe(() => {
      if (t) {
        let e,
          n = t.ownerDocument.defaultView ?? window,
          o = (a) => {
            let o = Be(r.current).includes(CSS.escape(a.animationName));
            if (a.target === t && o && (s(`ANIMATION_END`), !i.current)) {
              let r = t.style.animationFillMode;
              ((t.style.animationFillMode = `forwards`),
                (e = n.setTimeout(() => {
                  t.style.animationFillMode === `forwards` &&
                    (t.style.animationFillMode = r);
                })));
            }
          },
          c = (e) => {
            e.target === t && (a.current = Be(r.current));
          };
        return (
          t.addEventListener(`animationstart`, c),
          t.addEventListener(`animationcancel`, o),
          t.addEventListener(`animationend`, o),
          () => {
            (n.clearTimeout(e),
              t.removeEventListener(`animationstart`, c),
              t.removeEventListener(`animationcancel`, o),
              t.removeEventListener(`animationend`, o));
          }
        );
      }
      s(`ANIMATION_END`);
    }, [t, s]),
    {
      isPresent: [`mounted`, `unmountSuspended`].includes(o),
      ref: f.useCallback((e) => {
        ((r.current = e ? getComputedStyle(e) : null), n(e));
      }, []),
    }
  );
}
function Be(e) {
  return e?.animationName || `none`;
}
function Ve(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var He = f.useInsertionEffect || Pe;
function Ue({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  let [i, a, o] = We({
      defaultProp: t,
      onChange: n,
    }),
    s = e !== void 0,
    c = s ? e : i;
  {
    let t = f.useRef(e !== void 0);
    f.useEffect(() => {
      let e = t.current;
      (e !== s &&
        console.warn(
          `${r} is changing from ${e ? `controlled` : `uncontrolled`} to ${s ? `controlled` : `uncontrolled`}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (t.current = s));
    }, [s, r]);
  }
  return [
    c,
    f.useCallback(
      (t) => {
        if (s) {
          let n = Ge(t) ? t(e) : t;
          n !== e && o.current?.(n);
        } else a(t);
      },
      [s, e, a, o],
    ),
  ];
}
function We({ defaultProp: e, onChange: t }) {
  let [n, r] = f.useState(e),
    i = f.useRef(n),
    a = f.useRef(t);
  return (
    He(() => {
      a.current = t;
    }, [t]),
    f.useEffect(() => {
      i.current !== n && (a.current?.(n), (i.current = n));
    }, [n, i]),
    [n, r, a]
  );
}
function Ge(e) {
  return typeof e == `function`;
}
var Ke = Object.freeze({
    position: `absolute`,
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: `hidden`,
    clip: `rect(0, 0, 0, 0)`,
    whiteSpace: `nowrap`,
    wordWrap: `normal`,
  }),
  qe = `VisuallyHidden`,
  Je = f.forwardRef((e, t) =>
    (0, D.jsx)(he.span, {
      ...e,
      ref: t,
      style: {
        ...Ke,
        ...e.style,
      },
    }),
  );
Je.displayName = qe;
var Ye = `ToastProvider`,
  [Xe, Ze, Qe] = le(`Toast`),
  [$e, et] = O(`Toast`, [Qe]),
  [tt, nt] = $e(Ye),
  rt = (e) => {
    let {
        __scopeToast: t,
        label: n = `Notification`,
        duration: r = 5e3,
        swipeDirection: i = `right`,
        swipeThreshold: a = 50,
        children: o,
      } = e,
      [s, c] = f.useState(null),
      [l, u] = f.useState(0),
      d = f.useRef(!1),
      p = f.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Ye}\`. Expected non-empty \`string\`.`,
        ),
      (0, D.jsx)(Xe.Provider, {
        scope: t,
        children: (0, D.jsx)(tt, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: i,
          swipeThreshold: a,
          toastCount: l,
          viewport: s,
          onViewportChange: c,
          onToastAdd: f.useCallback(() => u((e) => e + 1), []),
          onToastRemove: f.useCallback(() => u((e) => e - 1), []),
          isFocusedToastEscapeKeyDownRef: d,
          isClosePausedRef: p,
          children: o,
        }),
      })
    );
  };
rt.displayName = Ye;
var it = `ToastViewport`,
  at = [`F8`],
  ot = `toast.viewportPause`,
  st = `toast.viewportResume`,
  ct = f.forwardRef((e, t) => {
    let {
        __scopeToast: n,
        hotkey: r = at,
        label: i = `Notifications ({hotkey})`,
        ...a
      } = e,
      o = nt(it, n),
      s = Ze(n),
      c = f.useRef(null),
      l = f.useRef(null),
      u = f.useRef(null),
      d = f.useRef(null),
      p = re(t, d, o.onViewportChange),
      m = r.join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``),
      h = o.toastCount > 0;
    (f.useEffect(() => {
      let e = (e) => {
        r.length !== 0 &&
          r.every((t) => e[t] || e.code === t) &&
          d.current?.focus();
      };
      return (
        document.addEventListener(`keydown`, e),
        () => document.removeEventListener(`keydown`, e)
      );
    }, [r]),
      f.useEffect(() => {
        let e = c.current,
          t = d.current;
        if (h && e && t) {
          let n = () => {
              if (!o.isClosePausedRef.current) {
                let e = new CustomEvent(ot);
                (t.dispatchEvent(e), (o.isClosePausedRef.current = !0));
              }
            },
            r = () => {
              if (o.isClosePausedRef.current) {
                let e = new CustomEvent(st);
                (t.dispatchEvent(e), (o.isClosePausedRef.current = !1));
              }
            },
            i = (t) => {
              e.contains(t.relatedTarget) || r();
            },
            a = () => {
              e.contains(document.activeElement) || r();
            };
          return (
            e.addEventListener(`focusin`, n),
            e.addEventListener(`focusout`, i),
            e.addEventListener(`pointermove`, n),
            e.addEventListener(`pointerleave`, a),
            window.addEventListener(`blur`, n),
            window.addEventListener(`focus`, r),
            () => {
              (e.removeEventListener(`focusin`, n),
                e.removeEventListener(`focusout`, i),
                e.removeEventListener(`pointermove`, n),
                e.removeEventListener(`pointerleave`, a),
                window.removeEventListener(`blur`, n),
                window.removeEventListener(`focus`, r));
            }
          );
        }
      }, [h, o.isClosePausedRef]));
    let g = f.useCallback(
      ({ tabbingDirection: e }) => {
        let t = s().map((t) => {
          let n = t.ref.current,
            r = [n, ...Ft(n)];
          return e === `forwards` ? r : r.reverse();
        });
        return (e === `forwards` ? t.reverse() : t).flat();
      },
      [s],
    );
    return (
      f.useEffect(() => {
        let e = d.current;
        if (e) {
          let t = (t) => {
            let n = t.altKey || t.ctrlKey || t.metaKey;
            if (t.key === `Tab` && !n) {
              let n = document.activeElement,
                r = t.shiftKey;
              if (t.target === e && r) {
                l.current?.focus();
                return;
              }
              let i = g({
                  tabbingDirection: r ? `backwards` : `forwards`,
                }),
                a = i.findIndex((e) => e === n);
              It(i.slice(a + 1))
                ? t.preventDefault()
                : r
                  ? l.current?.focus()
                  : u.current?.focus();
            }
          };
          return (
            e.addEventListener(`keydown`, t),
            () => e.removeEventListener(`keydown`, t)
          );
        }
      }, [s, g]),
      (0, D.jsxs)(Ne, {
        ref: c,
        role: `region`,
        "aria-label": i.replace(`{hotkey}`, m),
        tabIndex: -1,
        style: {
          pointerEvents: h ? void 0 : `none`,
        },
        children: [
          h &&
            (0, D.jsx)(ut, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                It(
                  g({
                    tabbingDirection: `forwards`,
                  }),
                );
              },
            }),
          (0, D.jsx)(Xe.Slot, {
            scope: n,
            children: (0, D.jsx)(he.ol, {
              tabIndex: -1,
              ...a,
              ref: p,
            }),
          }),
          h &&
            (0, D.jsx)(ut, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                It(
                  g({
                    tabbingDirection: `backwards`,
                  }),
                );
              },
            }),
        ],
      })
    );
  });
ct.displayName = it;
var lt = `ToastFocusProxy`,
  ut = f.forwardRef((e, t) => {
    let { __scopeToast: n, onFocusFromOutsideViewport: r, ...i } = e,
      a = nt(lt, n);
    return (0, D.jsx)(Je, {
      tabIndex: 0,
      ...i,
      ref: t,
      style: {
        position: `fixed`,
      },
      onFocus: (e) => {
        let t = e.relatedTarget;
        a.viewport?.contains(t) || r();
      },
    });
  });
ut.displayName = lt;
var dt = `Toast`,
  ft = `toast.swipeStart`,
  pt = `toast.swipeMove`,
  mt = `toast.swipeCancel`,
  ht = `toast.swipeEnd`,
  gt = f.forwardRef((e, t) => {
    let { forceMount: n, open: r, defaultOpen: i, onOpenChange: a, ...o } = e,
      [s, c] = Ue({
        prop: r,
        defaultProp: i ?? !0,
        onChange: a,
        caller: dt,
      });
    return (0, D.jsx)(Re, {
      present: n || s,
      children: (0, D.jsx)(yt, {
        open: s,
        ...o,
        ref: t,
        onClose: () => c(!1),
        onPause: _e(e.onPause),
        onResume: _e(e.onResume),
        onSwipeStart: E(e.onSwipeStart, (e) => {
          e.currentTarget.setAttribute(`data-swipe`, `start`);
        }),
        onSwipeMove: E(e.onSwipeMove, (e) => {
          let { x: t, y: n } = e.detail.delta;
          (e.currentTarget.setAttribute(`data-swipe`, `move`),
            e.currentTarget.style.setProperty(
              `--radix-toast-swipe-move-x`,
              `${t}px`,
            ),
            e.currentTarget.style.setProperty(
              `--radix-toast-swipe-move-y`,
              `${n}px`,
            ));
        }),
        onSwipeCancel: E(e.onSwipeCancel, (e) => {
          (e.currentTarget.setAttribute(`data-swipe`, `cancel`),
            e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-x`),
            e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-y`),
            e.currentTarget.style.removeProperty(`--radix-toast-swipe-end-x`),
            e.currentTarget.style.removeProperty(`--radix-toast-swipe-end-y`));
        }),
        onSwipeEnd: E(e.onSwipeEnd, (e) => {
          let { x: t, y: n } = e.detail.delta;
          (e.currentTarget.setAttribute(`data-swipe`, `end`),
            e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-x`),
            e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-y`),
            e.currentTarget.style.setProperty(
              `--radix-toast-swipe-end-x`,
              `${t}px`,
            ),
            e.currentTarget.style.setProperty(
              `--radix-toast-swipe-end-y`,
              `${n}px`,
            ),
            c(!1));
        }),
      }),
    });
  });
gt.displayName = dt;
var [_t, vt] = $e(dt, {
    onClose() {},
  }),
  yt = f.forwardRef((e, t) => {
    let {
        __scopeToast: n,
        type: r = `foreground`,
        duration: i,
        open: a,
        onClose: o,
        onEscapeKeyDown: s,
        onPause: c,
        onResume: l,
        onSwipeStart: u,
        onSwipeMove: d,
        onSwipeCancel: p,
        onSwipeEnd: m,
        ...h
      } = e,
      g = nt(dt, n),
      [_, v] = f.useState(null),
      y = re(t, (e) => v(e)),
      b = f.useRef(null),
      x = f.useRef(null),
      S = i || g.duration,
      C = f.useRef(0),
      w = f.useRef(S),
      T = f.useRef(0),
      { onToastAdd: te, onToastRemove: ne } = g,
      O = _e(() => {
        (_?.contains(document.activeElement) && g.viewport?.focus(), o());
      }),
      ie = f.useCallback(
        (e) => {
          !e ||
            e === 1 / 0 ||
            (window.clearTimeout(T.current),
            (C.current = new Date().getTime()),
            (T.current = window.setTimeout(O, e)));
        },
        [O],
      );
    (f.useEffect(() => {
      let e = g.viewport;
      if (e) {
        let t = () => {
            (ie(w.current), l?.());
          },
          n = () => {
            let e = new Date().getTime() - C.current;
            ((w.current -= e), window.clearTimeout(T.current), c?.());
          };
        return (
          e.addEventListener(ot, n),
          e.addEventListener(st, t),
          () => {
            (e.removeEventListener(ot, n), e.removeEventListener(st, t));
          }
        );
      }
    }, [g.viewport, S, c, l, ie]),
      f.useEffect(() => {
        a && !g.isClosePausedRef.current && ie(S);
      }, [a, S, g.isClosePausedRef, ie]),
      f.useEffect(() => (te(), () => ne()), [te, ne]));
    let ae = f.useMemo(() => (_ ? At(_) : null), [_]);
    return g.viewport
      ? (0, D.jsxs)(D.Fragment, {
          children: [
            ae &&
              (0, D.jsx)(bt, {
                __scopeToast: n,
                role: `status`,
                "aria-live": r === `foreground` ? `assertive` : `polite`,
                children: ae,
              }),
            (0, D.jsx)(_t, {
              scope: n,
              onClose: O,
              children: ee.createPortal(
                (0, D.jsx)(Xe.ItemSlot, {
                  scope: n,
                  children: (0, D.jsx)(Me, {
                    asChild: !0,
                    onEscapeKeyDown: E(s, () => {
                      (g.isFocusedToastEscapeKeyDownRef.current || O(),
                        (g.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: (0, D.jsx)(he.li, {
                      tabIndex: 0,
                      "data-state": a ? `open` : `closed`,
                      "data-swipe-direction": g.swipeDirection,
                      ...h,
                      ref: y,
                      style: {
                        userSelect: `none`,
                        touchAction: `none`,
                        ...e.style,
                      },
                      onKeyDown: E(e.onKeyDown, (e) => {
                        e.key === `Escape` &&
                          (s?.(e.nativeEvent),
                          e.nativeEvent.defaultPrevented ||
                            ((g.isFocusedToastEscapeKeyDownRef.current = !0),
                            O()));
                      }),
                      onPointerDown: E(e.onPointerDown, (e) => {
                        e.button === 0 &&
                          (b.current = {
                            x: e.clientX,
                            y: e.clientY,
                          });
                      }),
                      onPointerMove: E(e.onPointerMove, (e) => {
                        if (!b.current) return;
                        let t = e.clientX - b.current.x,
                          n = e.clientY - b.current.y,
                          r = !!x.current,
                          i = [`left`, `right`].includes(g.swipeDirection),
                          a = [`left`, `up`].includes(g.swipeDirection)
                            ? Math.min
                            : Math.max,
                          o = i ? a(0, t) : 0,
                          s = i ? 0 : a(0, n),
                          c = e.pointerType === `touch` ? 10 : 2,
                          l = {
                            x: o,
                            y: s,
                          },
                          f = {
                            originalEvent: e,
                            delta: l,
                          };
                        r
                          ? ((x.current = l),
                            jt(pt, d, f, {
                              discrete: !1,
                            }))
                          : Mt(l, g.swipeDirection, c)
                            ? ((x.current = l),
                              jt(ft, u, f, {
                                discrete: !1,
                              }),
                              e.target.setPointerCapture(e.pointerId))
                            : (Math.abs(t) > c || Math.abs(n) > c) &&
                              (b.current = null);
                      }),
                      onPointerUp: E(e.onPointerUp, (e) => {
                        let t = x.current,
                          n = e.target;
                        if (
                          (n.hasPointerCapture(e.pointerId) &&
                            n.releasePointerCapture(e.pointerId),
                          (x.current = null),
                          (b.current = null),
                          t)
                        ) {
                          let n = e.currentTarget,
                            r = {
                              originalEvent: e,
                              delta: t,
                            };
                          (Mt(t, g.swipeDirection, g.swipeThreshold)
                            ? jt(ht, m, r, {
                                discrete: !0,
                              })
                            : jt(mt, p, r, {
                                discrete: !0,
                              }),
                            n.addEventListener(
                              `click`,
                              (e) => e.preventDefault(),
                              {
                                once: !0,
                              },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                g.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  bt = (e) => {
    let { __scopeToast: t, children: n, ...r } = e,
      i = nt(dt, t),
      [a, o] = f.useState(!1),
      [s, c] = f.useState(!1);
    return (
      Nt(() => o(!0)),
      f.useEffect(() => {
        let e = window.setTimeout(() => c(!0), 1e3);
        return () => window.clearTimeout(e);
      }, []),
      s
        ? null
        : (0, D.jsx)(Ie, {
            asChild: !0,
            children: (0, D.jsx)(Je, {
              ...r,
              children:
                a &&
                (0, D.jsxs)(D.Fragment, {
                  children: [i.label, ` `, n],
                }),
            }),
          })
    );
  },
  xt = `ToastTitle`,
  St = f.forwardRef((e, t) => {
    let { __scopeToast: n, ...r } = e;
    return (0, D.jsx)(he.div, {
      ...r,
      ref: t,
    });
  });
St.displayName = xt;
var Ct = `ToastDescription`,
  wt = f.forwardRef((e, t) => {
    let { __scopeToast: n, ...r } = e;
    return (0, D.jsx)(he.div, {
      ...r,
      ref: t,
    });
  });
wt.displayName = Ct;
var Tt = `ToastAction`,
  Et = f.forwardRef((e, t) => {
    let { altText: n, ...r } = e;
    return n.trim()
      ? (0, D.jsx)(kt, {
          altText: n,
          asChild: !0,
          children: (0, D.jsx)(Ot, {
            ...r,
            ref: t,
          }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Tt}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
Et.displayName = Tt;
var Dt = `ToastClose`,
  Ot = f.forwardRef((e, t) => {
    let { __scopeToast: n, ...r } = e,
      i = vt(Dt, n);
    return (0, D.jsx)(kt, {
      asChild: !0,
      children: (0, D.jsx)(he.button, {
        type: `button`,
        ...r,
        ref: t,
        onClick: E(e.onClick, i.onClose),
      }),
    });
  });
Ot.displayName = Dt;
var kt = f.forwardRef((e, t) => {
  let { __scopeToast: n, altText: r, ...i } = e;
  return (0, D.jsx)(he.div, {
    "data-radix-toast-announce-exclude": ``,
    "data-radix-toast-announce-alt": r || void 0,
    ...i,
    ref: t,
  });
});
function At(e) {
  let t = [];
  return (
    Array.from(e.childNodes).forEach((e) => {
      if (
        (e.nodeType === e.TEXT_NODE && e.textContent && t.push(e.textContent),
        Pt(e))
      ) {
        let n = e.ariaHidden || e.hidden || e.style.display === `none`,
          r = e.dataset.radixToastAnnounceExclude === ``;
        if (!n)
          if (r) {
            let n = e.dataset.radixToastAnnounceAlt;
            n && t.push(n);
          } else t.push(...At(e));
      }
    }),
    t
  );
}
function jt(e, t, n, { discrete: r }) {
  let i = n.originalEvent.currentTarget,
    a = new CustomEvent(e, {
      bubbles: !0,
      cancelable: !0,
      detail: n,
    });
  (t &&
    i.addEventListener(e, t, {
      once: !0,
    }),
    r ? ge(i, a) : i.dispatchEvent(a));
}
var Mt = (e, t, n = 0) => {
  let r = Math.abs(e.x),
    i = Math.abs(e.y),
    a = r > i;
  return t === `left` || t === `right` ? a && r > n : !a && i > n;
};
function Nt(e = () => {}) {
  let t = _e(e);
  Pe(() => {
    let e = 0,
      n = 0;
    return (
      (e = window.requestAnimationFrame(
        () => (n = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(e), window.cancelAnimationFrame(n));
      }
    );
  }, [t]);
}
function Pt(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Ft(e) {
  let t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (e) => {
        let t = e.tagName === `INPUT` && e.type === `hidden`;
        return e.disabled || e.hidden || t
          ? NodeFilter.FILTER_SKIP
          : e.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function It(e) {
  let t = document.activeElement;
  return e.some((e) => e === t || (e.focus(), document.activeElement !== t));
}
var Lt = rt,
  Rt = ct,
  zt = gt,
  Bt = St,
  Vt = wt,
  Ht = Et,
  Ut = Ot;
function Wt(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`)
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = Wt(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  return r;
}
function Gt() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Wt(e)) && (r && (r += ` `), (r += t));
  return r;
}
var Kt = (e) => (typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e),
  qt = Gt,
  Jt = (e, t) => (n) => {
    if (t?.variants == null) return qt(e, n?.class, n?.className);
    let { variants: r, defaultVariants: i } = t,
      a = Object.keys(r).map((e) => {
        let t = n?.[e],
          a = i?.[e];
        if (t === null) return null;
        let o = Kt(t) || Kt(a);
        return r[e][o];
      }),
      o =
        n &&
        Object.entries(n).reduce((e, t) => {
          let [n, r] = t;
          return (r === void 0 || (e[n] = r), e);
        }, {});
    return qt(
      e,
      a,
      t?.compoundVariants?.reduce((e, t) => {
        let { class: n, className: r, ...a } = t;
        return Object.entries(a).every((e) => {
          let [t, n] = e;
          return Array.isArray(n)
            ? n.includes(
                {
                  ...i,
                  ...o,
                }[t],
              )
            : {
                ...i,
                ...o,
              }[t] === n;
        })
          ? [...e, n, r]
          : e;
      }, []),
      n?.class,
      n?.className,
    );
  },
  Yt = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  M = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  Xt = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  Zt = (0, f.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: o,
        ...s
      },
      c,
    ) =>
      (0, f.createElement)(
        `svg`,
        {
          ref: c,
          ...Xt,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: M(`lucide`, i),
          ...s,
        },
        [
          ...o.map(([e, t]) => (0, f.createElement)(e, t)),
          ...(Array.isArray(a) ? a : [a]),
        ],
      ),
  ),
  Qt = (e, t) => {
    let n = (0, f.forwardRef)(({ className: n, ...r }, i) =>
      (0, f.createElement)(Zt, {
        ref: i,
        iconNode: t,
        className: M(`lucide-${Yt(e)}`, n),
        ...r,
      }),
    );
    return ((n.displayName = `${e}`), n);
  },
  $t = Qt(`Linkedin`, [
    [
      `path`,
      {
        d: `M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z`,
        key: `c2jq9f`,
      },
    ],
    [
      `rect`,
      {
        width: `4`,
        height: `12`,
        x: `2`,
        y: `9`,
        key: `mk3on5`,
      },
    ],
    [
      `circle`,
      {
        cx: `4`,
        cy: `4`,
        r: `2`,
        key: `bt5ra8`,
      },
    ],
  ]),
  en = Qt(`Menu`, [
    [
      `line`,
      {
        x1: `4`,
        x2: `20`,
        y1: `12`,
        y2: `12`,
        key: `1e0a9i`,
      },
    ],
    [
      `line`,
      {
        x1: `4`,
        x2: `20`,
        y1: `6`,
        y2: `6`,
        key: `1owob3`,
      },
    ],
    [
      `line`,
      {
        x1: `4`,
        x2: `20`,
        y1: `18`,
        y2: `18`,
        key: `yk5zj1`,
      },
    ],
  ]),
  tn = Qt(`X`, [
    [
      `path`,
      {
        d: `M18 6 6 18`,
        key: `1bl5f8`,
      },
    ],
    [
      `path`,
      {
        d: `m6 6 12 12`,
        key: `d8bk6v`,
      },
    ],
  ]),
  nn = (e, t) => {
    let n = Array(e.length + t.length);
    for (let t = 0; t < e.length; t++) n[t] = e[t];
    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
    return n;
  },
  rn = (e, t) => ({
    classGroupId: e,
    validator: t,
  }),
  an = (e = new Map(), t = null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n,
  }),
  on = `-`,
  sn = [],
  cn = `arbitrary..`,
  ln = (e) => {
    let t = fn(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        if (e.startsWith(`[`) && e.endsWith(`]`)) return dn(e);
        let n = e.split(on);
        return un(n, +(n[0] === `` && n.length > 1), t);
      },
      getConflictingClassGroupIds: (e, t) => {
        if (t) {
          let t = r[e],
            i = n[e];
          return t ? (i ? nn(i, t) : t) : i || sn;
        }
        return n[e] || sn;
      },
    };
  },
  un = (e, t, n) => {
    if (e.length - t === 0) return n.classGroupId;
    let r = e[t],
      i = n.nextPart.get(r);
    if (i) {
      let n = un(e, t + 1, i);
      if (n) return n;
    }
    let a = n.validators;
    if (a === null) return;
    let o = t === 0 ? e.join(on) : e.slice(t).join(on),
      s = a.length;
    for (let e = 0; e < s; e++) {
      let t = a[e];
      if (t.validator(o)) return t.classGroupId;
    }
  },
  dn = (e) =>
    e.slice(1, -1).indexOf(`:`) === -1
      ? void 0
      : (() => {
          let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
          return r ? cn + r : void 0;
        })(),
  fn = (e) => {
    let { theme: t, classGroups: n } = e;
    return pn(n, t);
  },
  pn = (e, t) => {
    let n = an();
    for (let r in e) {
      let i = e[r];
      mn(i, n, r, t);
    }
    return n;
  },
  mn = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) {
      let i = e[a];
      hn(i, t, n, r);
    }
  },
  hn = (e, t, n, r) => {
    if (typeof e == `string`) {
      gn(e, t, n);
      return;
    }
    if (typeof e == `function`) {
      _n(e, t, n, r);
      return;
    }
    vn(e, t, n, r);
  },
  gn = (e, t, n) => {
    let r = e === `` ? t : yn(t, e);
    r.classGroupId = n;
  },
  _n = (e, t, n, r) => {
    if (bn(e)) {
      mn(e(r), t, n, r);
      return;
    }
    (t.validators === null && (t.validators = []), t.validators.push(rn(n, e)));
  },
  vn = (e, t, n, r) => {
    let i = Object.entries(e),
      a = i.length;
    for (let e = 0; e < a; e++) {
      let [a, o] = i[e];
      mn(o, yn(t, a), n, r);
    }
  },
  yn = (e, t) => {
    let n = e,
      r = t.split(on),
      i = r.length;
    for (let e = 0; e < i; e++) {
      let t = r[e],
        i = n.nextPart.get(t);
      (i || ((i = an()), n.nextPart.set(t, i)), (n = i));
    }
    return n;
  },
  bn = (e) => `isThemeGetter` in e && e.isThemeGetter === !0,
  xn = (e) => {
    if (e < 1)
      return {
        get: () => void 0,
        set: () => {},
      };
    let t = 0,
      n = Object.create(null),
      r = Object.create(null),
      i = (i, a) => {
        ((n[i] = a),
          t++,
          t > e && ((t = 0), (r = n), (n = Object.create(null))));
      };
    return {
      get(e) {
        let t = n[e];
        if (t !== void 0) return t;
        if ((t = r[e]) !== void 0) return (i(e, t), t);
      },
      set(e, t) {
        e in n ? (n[e] = t) : i(e, t);
      },
    };
  },
  Sn = `!`,
  Cn = `:`,
  wn = [],
  Tn = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i,
  }),
  En = (e) => {
    let { prefix: t, experimentalParseClassName: n } = e,
      r = (e) => {
        let t = [],
          n = 0,
          r = 0,
          i = 0,
          a,
          o = e.length;
        for (let s = 0; s < o; s++) {
          let o = e[s];
          if (n === 0 && r === 0) {
            if (o === Cn) {
              (t.push(e.slice(i, s)), (i = s + 1));
              continue;
            }
            if (o === `/`) {
              a = s;
              continue;
            }
          }
          o === `[`
            ? n++
            : o === `]`
              ? n--
              : o === `(`
                ? r++
                : o === `)` && r--;
        }
        let s = t.length === 0 ? e : e.slice(i),
          c = s,
          l = !1;
        s.endsWith(Sn)
          ? ((c = s.slice(0, -1)), (l = !0))
          : s.startsWith(Sn) && ((c = s.slice(1)), (l = !0));
        let u = a && a > i ? a - i : void 0;
        return Tn(t, l, c, u);
      };
    if (t) {
      let e = t + Cn,
        n = r;
      r = (t) =>
        t.startsWith(e) ? n(t.slice(e.length)) : Tn(wn, !1, t, void 0, !0);
    }
    if (n) {
      let e = r;
      r = (t) =>
        n({
          className: t,
          parseClassName: e,
        });
    }
    return r;
  },
  Dn = (e) => {
    let t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((e, n) => {
        t.set(e, 1e6 + n);
      }),
      (e) => {
        let n = [],
          r = [];
        for (let i = 0; i < e.length; i++) {
          let a = e[i],
            o = a[0] === `[`,
            s = t.has(a);
          o || s
            ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(a))
            : r.push(a);
        }
        return (r.length > 0 && (r.sort(), n.push(...r)), n);
      }
    );
  },
  On = (e) => ({
    cache: xn(e.cacheSize),
    parseClassName: En(e),
    sortModifiers: Dn(e),
    ...ln(e),
  }),
  kn = /\s+/,
  An = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: a,
      } = t,
      o = [],
      s = e.trim().split(kn),
      c = ``;
    for (let e = s.length - 1; e >= 0; --e) {
      let t = s[e],
        {
          isExternal: l,
          modifiers: u,
          hasImportantModifier: d,
          baseClassName: f,
          maybePostfixModifierPosition: p,
        } = n(t);
      if (l) {
        c = t + (c.length > 0 ? ` ` + c : c);
        continue;
      }
      let m = !!p,
        h = r(m ? f.substring(0, p) : f);
      if (!h) {
        if (!m) {
          c = t + (c.length > 0 ? ` ` + c : c);
          continue;
        }
        if (((h = r(f)), !h)) {
          c = t + (c.length > 0 ? ` ` + c : c);
          continue;
        }
        m = !1;
      }
      let g = u.length === 0 ? `` : u.length === 1 ? u[0] : a(u).join(`:`),
        _ = d ? g + Sn : g,
        v = _ + h;
      if (o.indexOf(v) > -1) continue;
      o.push(v);
      let y = i(h, m);
      for (let e = 0; e < y.length; ++e) {
        let t = y[e];
        o.push(_ + t);
      }
      c = t + (c.length > 0 ? ` ` + c : c);
    }
    return c;
  },
  jn = (...e) => {
    let t = 0,
      n,
      r,
      i = ``;
    for (; t < e.length; )
      (n = e[t++]) && (r = Mn(n)) && (i && (i += ` `), (i += r));
    return i;
  },
  Mn = (e) => {
    if (typeof e == `string`) return e;
    let t,
      n = ``;
    for (let r = 0; r < e.length; r++)
      e[r] && (t = Mn(e[r])) && (n && (n += ` `), (n += t));
    return n;
  },
  Nn = (e, ...t) => {
    let n,
      r,
      i,
      a,
      o = (o) => (
        (n = On(t.reduce((e, t) => t(e), e()))),
        (r = n.cache.get),
        (i = n.cache.set),
        (a = s),
        s(o)
      ),
      s = (e) => {
        let t = r(e);
        if (t) return t;
        let a = An(e, n);
        return (i(e, a), a);
      };
    return ((a = o), (...e) => a(jn(...e)));
  },
  Pn = [],
  Fn = (e) => {
    let t = (t) => t[e] || Pn;
    return ((t.isThemeGetter = !0), t);
  },
  In = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Ln = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Rn = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  zn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Bn =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Vn = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  Hn = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Un =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Wn = (e) => Rn.test(e),
  N = (e) => !!e && !Number.isNaN(Number(e)),
  Gn = (e) => !!e && Number.isInteger(Number(e)),
  Kn = (e) => e.endsWith(`%`) && N(e.slice(0, -1)),
  qn = (e) => zn.test(e),
  Jn = () => !0,
  Yn = (e) => Bn.test(e) && !Vn.test(e),
  Xn = () => !1,
  Zn = (e) => Hn.test(e),
  Qn = (e) => Un.test(e),
  $n = (e) => !P(e) && !F(e),
  er = (e) => hr(e, yr, Xn),
  P = (e) => In.test(e),
  tr = (e) => hr(e, br, Yn),
  nr = (e) => hr(e, xr, N),
  rr = (e) => hr(e, Cr, Jn),
  ir = (e) => hr(e, Sr, Xn),
  ar = (e) => hr(e, _r, Xn),
  or = (e) => hr(e, vr, Qn),
  sr = (e) => hr(e, wr, Zn),
  F = (e) => Ln.test(e),
  cr = (e) => gr(e, br),
  lr = (e) => gr(e, Sr),
  ur = (e) => gr(e, _r),
  dr = (e) => gr(e, yr),
  fr = (e) => gr(e, vr),
  pr = (e) => gr(e, wr, !0),
  mr = (e) => gr(e, Cr, !0),
  hr = (e, t, n) => {
    let r = In.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  gr = (e, t, n = !1) => {
    let r = Ln.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  _r = (e) => e === `position` || e === `percentage`,
  vr = (e) => e === `image` || e === `url`,
  yr = (e) => e === `length` || e === `size` || e === `bg-size`,
  br = (e) => e === `length`,
  xr = (e) => e === `number`,
  Sr = (e) => e === `family-name`,
  Cr = (e) => e === `number` || e === `weight`,
  wr = (e) => e === `shadow`,
  Tr = Nn(() => {
    let e = Fn(`color`),
      t = Fn(`font`),
      n = Fn(`text`),
      r = Fn(`font-weight`),
      i = Fn(`tracking`),
      a = Fn(`leading`),
      o = Fn(`breakpoint`),
      s = Fn(`container`),
      c = Fn(`spacing`),
      l = Fn(`radius`),
      u = Fn(`shadow`),
      d = Fn(`inset-shadow`),
      f = Fn(`text-shadow`),
      p = Fn(`drop-shadow`),
      m = Fn(`blur`),
      h = Fn(`perspective`),
      g = Fn(`aspect`),
      _ = Fn(`ease`),
      v = Fn(`animate`),
      y = () => [
        `auto`,
        `avoid`,
        `all`,
        `avoid-page`,
        `page`,
        `left`,
        `right`,
        `column`,
      ],
      b = () => [
        `center`,
        `top`,
        `bottom`,
        `left`,
        `right`,
        `top-left`,
        `left-top`,
        `top-right`,
        `right-top`,
        `bottom-right`,
        `right-bottom`,
        `bottom-left`,
        `left-bottom`,
      ],
      x = () => [...b(), F, P],
      S = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      C = () => [`auto`, `contain`, `none`],
      w = () => [F, P, c],
      T = () => [Wn, `full`, `auto`, ...w()],
      ee = () => [Gn, `none`, `subgrid`, F, P],
      E = () => [
        `auto`,
        {
          span: [`full`, Gn, F, P],
        },
        Gn,
        F,
        P,
      ],
      te = () => [Gn, `auto`, F, P],
      ne = () => [`auto`, `min`, `max`, `fr`, F, P],
      re = () => [
        `start`,
        `end`,
        `center`,
        `between`,
        `around`,
        `evenly`,
        `stretch`,
        `baseline`,
        `center-safe`,
        `end-safe`,
      ],
      D = () => [
        `start`,
        `end`,
        `center`,
        `stretch`,
        `center-safe`,
        `end-safe`,
      ],
      O = () => [`auto`, ...w()],
      ie = () => [
        Wn,
        `auto`,
        `full`,
        `dvw`,
        `dvh`,
        `lvw`,
        `lvh`,
        `svw`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...w(),
      ],
      ae = () => [
        Wn,
        `screen`,
        `full`,
        `dvw`,
        `lvw`,
        `svw`,
        `min`,
        `max`,
        `fit`,
        ...w(),
      ],
      oe = () => [
        Wn,
        `screen`,
        `full`,
        `lh`,
        `dvh`,
        `lvh`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...w(),
      ],
      k = () => [e, F, P],
      se = () => [
        ...b(),
        ur,
        ar,
        {
          position: [F, P],
        },
      ],
      ce = () => [
        `no-repeat`,
        {
          repeat: [``, `x`, `y`, `space`, `round`],
        },
      ],
      A = () => [
        `auto`,
        `cover`,
        `contain`,
        dr,
        er,
        {
          size: [F, P],
        },
      ],
      le = () => [Kn, cr, tr],
      j = () => [``, `none`, `full`, l, F, P],
      ue = () => [``, N, cr, tr],
      de = () => [`solid`, `dashed`, `dotted`, `double`],
      fe = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      pe = () => [N, Kn, ur, ar],
      me = () => [``, `none`, m, F, P],
      he = () => [`none`, N, F, P],
      ge = () => [`none`, N, F, P],
      _e = () => [N, F, P],
      ve = () => [Wn, `full`, ...w()];
    return {
      cacheSize: 500,
      theme: {
        animate: [`spin`, `ping`, `pulse`, `bounce`],
        aspect: [`video`],
        blur: [qn],
        breakpoint: [qn],
        color: [Jn],
        container: [qn],
        "drop-shadow": [qn],
        ease: [`in`, `out`, `in-out`],
        font: [$n],
        "font-weight": [
          `thin`,
          `extralight`,
          `light`,
          `normal`,
          `medium`,
          `semibold`,
          `bold`,
          `extrabold`,
          `black`,
        ],
        "inset-shadow": [qn],
        leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
        perspective: [
          `dramatic`,
          `near`,
          `normal`,
          `midrange`,
          `distant`,
          `none`,
        ],
        radius: [qn],
        shadow: [qn],
        spacing: [`px`, N],
        text: [qn],
        "text-shadow": [qn],
        tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
      },
      classGroups: {
        aspect: [
          {
            aspect: [`auto`, `square`, Wn, P, F, g],
          },
        ],
        container: [`container`],
        columns: [
          {
            columns: [N, P, F, s],
          },
        ],
        "break-after": [
          {
            "break-after": y(),
          },
        ],
        "break-before": [
          {
            "break-before": y(),
          },
        ],
        "break-inside": [
          {
            "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`],
          },
        ],
        "box-decoration": [
          {
            "box-decoration": [`slice`, `clone`],
          },
        ],
        box: [
          {
            box: [`border`, `content`],
          },
        ],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        sr: [`sr-only`, `not-sr-only`],
        float: [
          {
            float: [`right`, `left`, `none`, `start`, `end`],
          },
        ],
        clear: [
          {
            clear: [`left`, `right`, `both`, `none`, `start`, `end`],
          },
        ],
        isolation: [`isolate`, `isolation-auto`],
        "object-fit": [
          {
            object: [`contain`, `cover`, `fill`, `none`, `scale-down`],
          },
        ],
        "object-position": [
          {
            object: x(),
          },
        ],
        overflow: [
          {
            overflow: S(),
          },
        ],
        "overflow-x": [
          {
            "overflow-x": S(),
          },
        ],
        "overflow-y": [
          {
            "overflow-y": S(),
          },
        ],
        overscroll: [
          {
            overscroll: C(),
          },
        ],
        "overscroll-x": [
          {
            "overscroll-x": C(),
          },
        ],
        "overscroll-y": [
          {
            "overscroll-y": C(),
          },
        ],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [
          {
            inset: T(),
          },
        ],
        "inset-x": [
          {
            "inset-x": T(),
          },
        ],
        "inset-y": [
          {
            "inset-y": T(),
          },
        ],
        start: [
          {
            "inset-s": T(),
            start: T(),
          },
        ],
        end: [
          {
            "inset-e": T(),
            end: T(),
          },
        ],
        "inset-bs": [
          {
            "inset-bs": T(),
          },
        ],
        "inset-be": [
          {
            "inset-be": T(),
          },
        ],
        top: [
          {
            top: T(),
          },
        ],
        right: [
          {
            right: T(),
          },
        ],
        bottom: [
          {
            bottom: T(),
          },
        ],
        left: [
          {
            left: T(),
          },
        ],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [
          {
            z: [Gn, `auto`, F, P],
          },
        ],
        basis: [
          {
            basis: [Wn, `full`, `auto`, s, ...w()],
          },
        ],
        "flex-direction": [
          {
            flex: [`row`, `row-reverse`, `col`, `col-reverse`],
          },
        ],
        "flex-wrap": [
          {
            flex: [`nowrap`, `wrap`, `wrap-reverse`],
          },
        ],
        flex: [
          {
            flex: [N, Wn, `auto`, `initial`, `none`, P],
          },
        ],
        grow: [
          {
            grow: [``, N, F, P],
          },
        ],
        shrink: [
          {
            shrink: [``, N, F, P],
          },
        ],
        order: [
          {
            order: [Gn, `first`, `last`, `none`, F, P],
          },
        ],
        "grid-cols": [
          {
            "grid-cols": ee(),
          },
        ],
        "col-start-end": [
          {
            col: E(),
          },
        ],
        "col-start": [
          {
            "col-start": te(),
          },
        ],
        "col-end": [
          {
            "col-end": te(),
          },
        ],
        "grid-rows": [
          {
            "grid-rows": ee(),
          },
        ],
        "row-start-end": [
          {
            row: E(),
          },
        ],
        "row-start": [
          {
            "row-start": te(),
          },
        ],
        "row-end": [
          {
            "row-end": te(),
          },
        ],
        "grid-flow": [
          {
            "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`],
          },
        ],
        "auto-cols": [
          {
            "auto-cols": ne(),
          },
        ],
        "auto-rows": [
          {
            "auto-rows": ne(),
          },
        ],
        gap: [
          {
            gap: w(),
          },
        ],
        "gap-x": [
          {
            "gap-x": w(),
          },
        ],
        "gap-y": [
          {
            "gap-y": w(),
          },
        ],
        "justify-content": [
          {
            justify: [...re(), `normal`],
          },
        ],
        "justify-items": [
          {
            "justify-items": [...D(), `normal`],
          },
        ],
        "justify-self": [
          {
            "justify-self": [`auto`, ...D()],
          },
        ],
        "align-content": [
          {
            content: [`normal`, ...re()],
          },
        ],
        "align-items": [
          {
            items: [
              ...D(),
              {
                baseline: [``, `last`],
              },
            ],
          },
        ],
        "align-self": [
          {
            self: [
              `auto`,
              ...D(),
              {
                baseline: [``, `last`],
              },
            ],
          },
        ],
        "place-content": [
          {
            "place-content": re(),
          },
        ],
        "place-items": [
          {
            "place-items": [...D(), `baseline`],
          },
        ],
        "place-self": [
          {
            "place-self": [`auto`, ...D()],
          },
        ],
        p: [
          {
            p: w(),
          },
        ],
        px: [
          {
            px: w(),
          },
        ],
        py: [
          {
            py: w(),
          },
        ],
        ps: [
          {
            ps: w(),
          },
        ],
        pe: [
          {
            pe: w(),
          },
        ],
        pbs: [
          {
            pbs: w(),
          },
        ],
        pbe: [
          {
            pbe: w(),
          },
        ],
        pt: [
          {
            pt: w(),
          },
        ],
        pr: [
          {
            pr: w(),
          },
        ],
        pb: [
          {
            pb: w(),
          },
        ],
        pl: [
          {
            pl: w(),
          },
        ],
        m: [
          {
            m: O(),
          },
        ],
        mx: [
          {
            mx: O(),
          },
        ],
        my: [
          {
            my: O(),
          },
        ],
        ms: [
          {
            ms: O(),
          },
        ],
        me: [
          {
            me: O(),
          },
        ],
        mbs: [
          {
            mbs: O(),
          },
        ],
        mbe: [
          {
            mbe: O(),
          },
        ],
        mt: [
          {
            mt: O(),
          },
        ],
        mr: [
          {
            mr: O(),
          },
        ],
        mb: [
          {
            mb: O(),
          },
        ],
        ml: [
          {
            ml: O(),
          },
        ],
        "space-x": [
          {
            "space-x": w(),
          },
        ],
        "space-x-reverse": [`space-x-reverse`],
        "space-y": [
          {
            "space-y": w(),
          },
        ],
        "space-y-reverse": [`space-y-reverse`],
        size: [
          {
            size: ie(),
          },
        ],
        "inline-size": [
          {
            inline: [`auto`, ...ae()],
          },
        ],
        "min-inline-size": [
          {
            "min-inline": [`auto`, ...ae()],
          },
        ],
        "max-inline-size": [
          {
            "max-inline": [`none`, ...ae()],
          },
        ],
        "block-size": [
          {
            block: [`auto`, ...oe()],
          },
        ],
        "min-block-size": [
          {
            "min-block": [`auto`, ...oe()],
          },
        ],
        "max-block-size": [
          {
            "max-block": [`none`, ...oe()],
          },
        ],
        w: [
          {
            w: [s, `screen`, ...ie()],
          },
        ],
        "min-w": [
          {
            "min-w": [s, `screen`, `none`, ...ie()],
          },
        ],
        "max-w": [
          {
            "max-w": [
              s,
              `screen`,
              `none`,
              `prose`,
              {
                screen: [o],
              },
              ...ie(),
            ],
          },
        ],
        h: [
          {
            h: [`screen`, `lh`, ...ie()],
          },
        ],
        "min-h": [
          {
            "min-h": [`screen`, `lh`, `none`, ...ie()],
          },
        ],
        "max-h": [
          {
            "max-h": [`screen`, `lh`, ...ie()],
          },
        ],
        "font-size": [
          {
            text: [`base`, n, cr, tr],
          },
        ],
        "font-smoothing": [`antialiased`, `subpixel-antialiased`],
        "font-style": [`italic`, `not-italic`],
        "font-weight": [
          {
            font: [r, mr, rr],
          },
        ],
        "font-stretch": [
          {
            "font-stretch": [
              `ultra-condensed`,
              `extra-condensed`,
              `condensed`,
              `semi-condensed`,
              `normal`,
              `semi-expanded`,
              `expanded`,
              `extra-expanded`,
              `ultra-expanded`,
              Kn,
              P,
            ],
          },
        ],
        "font-family": [
          {
            font: [lr, ir, t],
          },
        ],
        "font-features": [
          {
            "font-features": [P],
          },
        ],
        "fvn-normal": [`normal-nums`],
        "fvn-ordinal": [`ordinal`],
        "fvn-slashed-zero": [`slashed-zero`],
        "fvn-figure": [`lining-nums`, `oldstyle-nums`],
        "fvn-spacing": [`proportional-nums`, `tabular-nums`],
        "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
        tracking: [
          {
            tracking: [i, F, P],
          },
        ],
        "line-clamp": [
          {
            "line-clamp": [N, `none`, F, nr],
          },
        ],
        leading: [
          {
            leading: [a, ...w()],
          },
        ],
        "list-image": [
          {
            "list-image": [`none`, F, P],
          },
        ],
        "list-style-position": [
          {
            list: [`inside`, `outside`],
          },
        ],
        "list-style-type": [
          {
            list: [`disc`, `decimal`, `none`, F, P],
          },
        ],
        "text-alignment": [
          {
            text: [`left`, `center`, `right`, `justify`, `start`, `end`],
          },
        ],
        "placeholder-color": [
          {
            placeholder: k(),
          },
        ],
        "text-color": [
          {
            text: k(),
          },
        ],
        "text-decoration": [
          `underline`,
          `overline`,
          `line-through`,
          `no-underline`,
        ],
        "text-decoration-style": [
          {
            decoration: [...de(), `wavy`],
          },
        ],
        "text-decoration-thickness": [
          {
            decoration: [N, `from-font`, `auto`, F, tr],
          },
        ],
        "text-decoration-color": [
          {
            decoration: k(),
          },
        ],
        "underline-offset": [
          {
            "underline-offset": [N, `auto`, F, P],
          },
        ],
        "text-transform": [
          `uppercase`,
          `lowercase`,
          `capitalize`,
          `normal-case`,
        ],
        "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
        "text-wrap": [
          {
            text: [`wrap`, `nowrap`, `balance`, `pretty`],
          },
        ],
        indent: [
          {
            indent: w(),
          },
        ],
        "vertical-align": [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              F,
              P,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              `normal`,
              `nowrap`,
              `pre`,
              `pre-line`,
              `pre-wrap`,
              `break-spaces`,
            ],
          },
        ],
        break: [
          {
            break: [`normal`, `words`, `all`, `keep`],
          },
        ],
        wrap: [
          {
            wrap: [`break-word`, `anywhere`, `normal`],
          },
        ],
        hyphens: [
          {
            hyphens: [`none`, `manual`, `auto`],
          },
        ],
        content: [
          {
            content: [`none`, F, P],
          },
        ],
        "bg-attachment": [
          {
            bg: [`fixed`, `local`, `scroll`],
          },
        ],
        "bg-clip": [
          {
            "bg-clip": [`border`, `padding`, `content`, `text`],
          },
        ],
        "bg-origin": [
          {
            "bg-origin": [`border`, `padding`, `content`],
          },
        ],
        "bg-position": [
          {
            bg: se(),
          },
        ],
        "bg-repeat": [
          {
            bg: ce(),
          },
        ],
        "bg-size": [
          {
            bg: A(),
          },
        ],
        "bg-image": [
          {
            bg: [
              `none`,
              {
                linear: [
                  {
                    to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`],
                  },
                  Gn,
                  F,
                  P,
                ],
                radial: [``, F, P],
                conic: [Gn, F, P],
              },
              fr,
              or,
            ],
          },
        ],
        "bg-color": [
          {
            bg: k(),
          },
        ],
        "gradient-from-pos": [
          {
            from: le(),
          },
        ],
        "gradient-via-pos": [
          {
            via: le(),
          },
        ],
        "gradient-to-pos": [
          {
            to: le(),
          },
        ],
        "gradient-from": [
          {
            from: k(),
          },
        ],
        "gradient-via": [
          {
            via: k(),
          },
        ],
        "gradient-to": [
          {
            to: k(),
          },
        ],
        rounded: [
          {
            rounded: j(),
          },
        ],
        "rounded-s": [
          {
            "rounded-s": j(),
          },
        ],
        "rounded-e": [
          {
            "rounded-e": j(),
          },
        ],
        "rounded-t": [
          {
            "rounded-t": j(),
          },
        ],
        "rounded-r": [
          {
            "rounded-r": j(),
          },
        ],
        "rounded-b": [
          {
            "rounded-b": j(),
          },
        ],
        "rounded-l": [
          {
            "rounded-l": j(),
          },
        ],
        "rounded-ss": [
          {
            "rounded-ss": j(),
          },
        ],
        "rounded-se": [
          {
            "rounded-se": j(),
          },
        ],
        "rounded-ee": [
          {
            "rounded-ee": j(),
          },
        ],
        "rounded-es": [
          {
            "rounded-es": j(),
          },
        ],
        "rounded-tl": [
          {
            "rounded-tl": j(),
          },
        ],
        "rounded-tr": [
          {
            "rounded-tr": j(),
          },
        ],
        "rounded-br": [
          {
            "rounded-br": j(),
          },
        ],
        "rounded-bl": [
          {
            "rounded-bl": j(),
          },
        ],
        "border-w": [
          {
            border: ue(),
          },
        ],
        "border-w-x": [
          {
            "border-x": ue(),
          },
        ],
        "border-w-y": [
          {
            "border-y": ue(),
          },
        ],
        "border-w-s": [
          {
            "border-s": ue(),
          },
        ],
        "border-w-e": [
          {
            "border-e": ue(),
          },
        ],
        "border-w-bs": [
          {
            "border-bs": ue(),
          },
        ],
        "border-w-be": [
          {
            "border-be": ue(),
          },
        ],
        "border-w-t": [
          {
            "border-t": ue(),
          },
        ],
        "border-w-r": [
          {
            "border-r": ue(),
          },
        ],
        "border-w-b": [
          {
            "border-b": ue(),
          },
        ],
        "border-w-l": [
          {
            "border-l": ue(),
          },
        ],
        "divide-x": [
          {
            "divide-x": ue(),
          },
        ],
        "divide-x-reverse": [`divide-x-reverse`],
        "divide-y": [
          {
            "divide-y": ue(),
          },
        ],
        "divide-y-reverse": [`divide-y-reverse`],
        "border-style": [
          {
            border: [...de(), `hidden`, `none`],
          },
        ],
        "divide-style": [
          {
            divide: [...de(), `hidden`, `none`],
          },
        ],
        "border-color": [
          {
            border: k(),
          },
        ],
        "border-color-x": [
          {
            "border-x": k(),
          },
        ],
        "border-color-y": [
          {
            "border-y": k(),
          },
        ],
        "border-color-s": [
          {
            "border-s": k(),
          },
        ],
        "border-color-e": [
          {
            "border-e": k(),
          },
        ],
        "border-color-bs": [
          {
            "border-bs": k(),
          },
        ],
        "border-color-be": [
          {
            "border-be": k(),
          },
        ],
        "border-color-t": [
          {
            "border-t": k(),
          },
        ],
        "border-color-r": [
          {
            "border-r": k(),
          },
        ],
        "border-color-b": [
          {
            "border-b": k(),
          },
        ],
        "border-color-l": [
          {
            "border-l": k(),
          },
        ],
        "divide-color": [
          {
            divide: k(),
          },
        ],
        "outline-style": [
          {
            outline: [...de(), `none`, `hidden`],
          },
        ],
        "outline-offset": [
          {
            "outline-offset": [N, F, P],
          },
        ],
        "outline-w": [
          {
            outline: [``, N, cr, tr],
          },
        ],
        "outline-color": [
          {
            outline: k(),
          },
        ],
        shadow: [
          {
            shadow: [``, `none`, u, pr, sr],
          },
        ],
        "shadow-color": [
          {
            shadow: k(),
          },
        ],
        "inset-shadow": [
          {
            "inset-shadow": [`none`, d, pr, sr],
          },
        ],
        "inset-shadow-color": [
          {
            "inset-shadow": k(),
          },
        ],
        "ring-w": [
          {
            ring: ue(),
          },
        ],
        "ring-w-inset": [`ring-inset`],
        "ring-color": [
          {
            ring: k(),
          },
        ],
        "ring-offset-w": [
          {
            "ring-offset": [N, tr],
          },
        ],
        "ring-offset-color": [
          {
            "ring-offset": k(),
          },
        ],
        "inset-ring-w": [
          {
            "inset-ring": ue(),
          },
        ],
        "inset-ring-color": [
          {
            "inset-ring": k(),
          },
        ],
        "text-shadow": [
          {
            "text-shadow": [`none`, f, pr, sr],
          },
        ],
        "text-shadow-color": [
          {
            "text-shadow": k(),
          },
        ],
        opacity: [
          {
            opacity: [N, F, P],
          },
        ],
        "mix-blend": [
          {
            "mix-blend": [...fe(), `plus-darker`, `plus-lighter`],
          },
        ],
        "bg-blend": [
          {
            "bg-blend": fe(),
          },
        ],
        "mask-clip": [
          {
            "mask-clip": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
          `mask-no-clip`,
        ],
        "mask-composite": [
          {
            mask: [`add`, `subtract`, `intersect`, `exclude`],
          },
        ],
        "mask-image-linear-pos": [
          {
            "mask-linear": [N],
          },
        ],
        "mask-image-linear-from-pos": [
          {
            "mask-linear-from": pe(),
          },
        ],
        "mask-image-linear-to-pos": [
          {
            "mask-linear-to": pe(),
          },
        ],
        "mask-image-linear-from-color": [
          {
            "mask-linear-from": k(),
          },
        ],
        "mask-image-linear-to-color": [
          {
            "mask-linear-to": k(),
          },
        ],
        "mask-image-t-from-pos": [
          {
            "mask-t-from": pe(),
          },
        ],
        "mask-image-t-to-pos": [
          {
            "mask-t-to": pe(),
          },
        ],
        "mask-image-t-from-color": [
          {
            "mask-t-from": k(),
          },
        ],
        "mask-image-t-to-color": [
          {
            "mask-t-to": k(),
          },
        ],
        "mask-image-r-from-pos": [
          {
            "mask-r-from": pe(),
          },
        ],
        "mask-image-r-to-pos": [
          {
            "mask-r-to": pe(),
          },
        ],
        "mask-image-r-from-color": [
          {
            "mask-r-from": k(),
          },
        ],
        "mask-image-r-to-color": [
          {
            "mask-r-to": k(),
          },
        ],
        "mask-image-b-from-pos": [
          {
            "mask-b-from": pe(),
          },
        ],
        "mask-image-b-to-pos": [
          {
            "mask-b-to": pe(),
          },
        ],
        "mask-image-b-from-color": [
          {
            "mask-b-from": k(),
          },
        ],
        "mask-image-b-to-color": [
          {
            "mask-b-to": k(),
          },
        ],
        "mask-image-l-from-pos": [
          {
            "mask-l-from": pe(),
          },
        ],
        "mask-image-l-to-pos": [
          {
            "mask-l-to": pe(),
          },
        ],
        "mask-image-l-from-color": [
          {
            "mask-l-from": k(),
          },
        ],
        "mask-image-l-to-color": [
          {
            "mask-l-to": k(),
          },
        ],
        "mask-image-x-from-pos": [
          {
            "mask-x-from": pe(),
          },
        ],
        "mask-image-x-to-pos": [
          {
            "mask-x-to": pe(),
          },
        ],
        "mask-image-x-from-color": [
          {
            "mask-x-from": k(),
          },
        ],
        "mask-image-x-to-color": [
          {
            "mask-x-to": k(),
          },
        ],
        "mask-image-y-from-pos": [
          {
            "mask-y-from": pe(),
          },
        ],
        "mask-image-y-to-pos": [
          {
            "mask-y-to": pe(),
          },
        ],
        "mask-image-y-from-color": [
          {
            "mask-y-from": k(),
          },
        ],
        "mask-image-y-to-color": [
          {
            "mask-y-to": k(),
          },
        ],
        "mask-image-radial": [
          {
            "mask-radial": [F, P],
          },
        ],
        "mask-image-radial-from-pos": [
          {
            "mask-radial-from": pe(),
          },
        ],
        "mask-image-radial-to-pos": [
          {
            "mask-radial-to": pe(),
          },
        ],
        "mask-image-radial-from-color": [
          {
            "mask-radial-from": k(),
          },
        ],
        "mask-image-radial-to-color": [
          {
            "mask-radial-to": k(),
          },
        ],
        "mask-image-radial-shape": [
          {
            "mask-radial": [`circle`, `ellipse`],
          },
        ],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              {
                closest: [`side`, `corner`],
                farthest: [`side`, `corner`],
              },
            ],
          },
        ],
        "mask-image-radial-pos": [
          {
            "mask-radial-at": b(),
          },
        ],
        "mask-image-conic-pos": [
          {
            "mask-conic": [N],
          },
        ],
        "mask-image-conic-from-pos": [
          {
            "mask-conic-from": pe(),
          },
        ],
        "mask-image-conic-to-pos": [
          {
            "mask-conic-to": pe(),
          },
        ],
        "mask-image-conic-from-color": [
          {
            "mask-conic-from": k(),
          },
        ],
        "mask-image-conic-to-color": [
          {
            "mask-conic-to": k(),
          },
        ],
        "mask-mode": [
          {
            mask: [`alpha`, `luminance`, `match`],
          },
        ],
        "mask-origin": [
          {
            "mask-origin": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
        ],
        "mask-position": [
          {
            mask: se(),
          },
        ],
        "mask-repeat": [
          {
            mask: ce(),
          },
        ],
        "mask-size": [
          {
            mask: A(),
          },
        ],
        "mask-type": [
          {
            "mask-type": [`alpha`, `luminance`],
          },
        ],
        "mask-image": [
          {
            mask: [`none`, F, P],
          },
        ],
        filter: [
          {
            filter: [``, `none`, F, P],
          },
        ],
        blur: [
          {
            blur: me(),
          },
        ],
        brightness: [
          {
            brightness: [N, F, P],
          },
        ],
        contrast: [
          {
            contrast: [N, F, P],
          },
        ],
        "drop-shadow": [
          {
            "drop-shadow": [``, `none`, p, pr, sr],
          },
        ],
        "drop-shadow-color": [
          {
            "drop-shadow": k(),
          },
        ],
        grayscale: [
          {
            grayscale: [``, N, F, P],
          },
        ],
        "hue-rotate": [
          {
            "hue-rotate": [N, F, P],
          },
        ],
        invert: [
          {
            invert: [``, N, F, P],
          },
        ],
        saturate: [
          {
            saturate: [N, F, P],
          },
        ],
        sepia: [
          {
            sepia: [``, N, F, P],
          },
        ],
        "backdrop-filter": [
          {
            "backdrop-filter": [``, `none`, F, P],
          },
        ],
        "backdrop-blur": [
          {
            "backdrop-blur": me(),
          },
        ],
        "backdrop-brightness": [
          {
            "backdrop-brightness": [N, F, P],
          },
        ],
        "backdrop-contrast": [
          {
            "backdrop-contrast": [N, F, P],
          },
        ],
        "backdrop-grayscale": [
          {
            "backdrop-grayscale": [``, N, F, P],
          },
        ],
        "backdrop-hue-rotate": [
          {
            "backdrop-hue-rotate": [N, F, P],
          },
        ],
        "backdrop-invert": [
          {
            "backdrop-invert": [``, N, F, P],
          },
        ],
        "backdrop-opacity": [
          {
            "backdrop-opacity": [N, F, P],
          },
        ],
        "backdrop-saturate": [
          {
            "backdrop-saturate": [N, F, P],
          },
        ],
        "backdrop-sepia": [
          {
            "backdrop-sepia": [``, N, F, P],
          },
        ],
        "border-collapse": [
          {
            border: [`collapse`, `separate`],
          },
        ],
        "border-spacing": [
          {
            "border-spacing": w(),
          },
        ],
        "border-spacing-x": [
          {
            "border-spacing-x": w(),
          },
        ],
        "border-spacing-y": [
          {
            "border-spacing-y": w(),
          },
        ],
        "table-layout": [
          {
            table: [`auto`, `fixed`],
          },
        ],
        caption: [
          {
            caption: [`top`, `bottom`],
          },
        ],
        transition: [
          {
            transition: [
              ``,
              `all`,
              `colors`,
              `opacity`,
              `shadow`,
              `transform`,
              `none`,
              F,
              P,
            ],
          },
        ],
        "transition-behavior": [
          {
            transition: [`normal`, `discrete`],
          },
        ],
        duration: [
          {
            duration: [N, `initial`, F, P],
          },
        ],
        ease: [
          {
            ease: [`linear`, `initial`, _, F, P],
          },
        ],
        delay: [
          {
            delay: [N, F, P],
          },
        ],
        animate: [
          {
            animate: [`none`, v, F, P],
          },
        ],
        backface: [
          {
            backface: [`hidden`, `visible`],
          },
        ],
        perspective: [
          {
            perspective: [h, F, P],
          },
        ],
        "perspective-origin": [
          {
            "perspective-origin": x(),
          },
        ],
        rotate: [
          {
            rotate: he(),
          },
        ],
        "rotate-x": [
          {
            "rotate-x": he(),
          },
        ],
        "rotate-y": [
          {
            "rotate-y": he(),
          },
        ],
        "rotate-z": [
          {
            "rotate-z": he(),
          },
        ],
        scale: [
          {
            scale: ge(),
          },
        ],
        "scale-x": [
          {
            "scale-x": ge(),
          },
        ],
        "scale-y": [
          {
            "scale-y": ge(),
          },
        ],
        "scale-z": [
          {
            "scale-z": ge(),
          },
        ],
        "scale-3d": [`scale-3d`],
        skew: [
          {
            skew: _e(),
          },
        ],
        "skew-x": [
          {
            "skew-x": _e(),
          },
        ],
        "skew-y": [
          {
            "skew-y": _e(),
          },
        ],
        transform: [
          {
            transform: [F, P, ``, `none`, `gpu`, `cpu`],
          },
        ],
        "transform-origin": [
          {
            origin: x(),
          },
        ],
        "transform-style": [
          {
            transform: [`3d`, `flat`],
          },
        ],
        translate: [
          {
            translate: ve(),
          },
        ],
        "translate-x": [
          {
            "translate-x": ve(),
          },
        ],
        "translate-y": [
          {
            "translate-y": ve(),
          },
        ],
        "translate-z": [
          {
            "translate-z": ve(),
          },
        ],
        "translate-none": [`translate-none`],
        accent: [
          {
            accent: k(),
          },
        ],
        appearance: [
          {
            appearance: [`none`, `auto`],
          },
        ],
        "caret-color": [
          {
            caret: k(),
          },
        ],
        "color-scheme": [
          {
            scheme: [
              `normal`,
              `dark`,
              `light`,
              `light-dark`,
              `only-dark`,
              `only-light`,
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              F,
              P,
            ],
          },
        ],
        "field-sizing": [
          {
            "field-sizing": [`fixed`, `content`],
          },
        ],
        "pointer-events": [
          {
            "pointer-events": [`auto`, `none`],
          },
        ],
        resize: [
          {
            resize: [`none`, ``, `y`, `x`],
          },
        ],
        "scroll-behavior": [
          {
            scroll: [`auto`, `smooth`],
          },
        ],
        "scroll-m": [
          {
            "scroll-m": w(),
          },
        ],
        "scroll-mx": [
          {
            "scroll-mx": w(),
          },
        ],
        "scroll-my": [
          {
            "scroll-my": w(),
          },
        ],
        "scroll-ms": [
          {
            "scroll-ms": w(),
          },
        ],
        "scroll-me": [
          {
            "scroll-me": w(),
          },
        ],
        "scroll-mbs": [
          {
            "scroll-mbs": w(),
          },
        ],
        "scroll-mbe": [
          {
            "scroll-mbe": w(),
          },
        ],
        "scroll-mt": [
          {
            "scroll-mt": w(),
          },
        ],
        "scroll-mr": [
          {
            "scroll-mr": w(),
          },
        ],
        "scroll-mb": [
          {
            "scroll-mb": w(),
          },
        ],
        "scroll-ml": [
          {
            "scroll-ml": w(),
          },
        ],
        "scroll-p": [
          {
            "scroll-p": w(),
          },
        ],
        "scroll-px": [
          {
            "scroll-px": w(),
          },
        ],
        "scroll-py": [
          {
            "scroll-py": w(),
          },
        ],
        "scroll-ps": [
          {
            "scroll-ps": w(),
          },
        ],
        "scroll-pe": [
          {
            "scroll-pe": w(),
          },
        ],
        "scroll-pbs": [
          {
            "scroll-pbs": w(),
          },
        ],
        "scroll-pbe": [
          {
            "scroll-pbe": w(),
          },
        ],
        "scroll-pt": [
          {
            "scroll-pt": w(),
          },
        ],
        "scroll-pr": [
          {
            "scroll-pr": w(),
          },
        ],
        "scroll-pb": [
          {
            "scroll-pb": w(),
          },
        ],
        "scroll-pl": [
          {
            "scroll-pl": w(),
          },
        ],
        "snap-align": [
          {
            snap: [`start`, `end`, `center`, `align-none`],
          },
        ],
        "snap-stop": [
          {
            snap: [`normal`, `always`],
          },
        ],
        "snap-type": [
          {
            snap: [`none`, `x`, `y`, `both`],
          },
        ],
        "snap-strictness": [
          {
            snap: [`mandatory`, `proximity`],
          },
        ],
        touch: [
          {
            touch: [`auto`, `none`, `manipulation`],
          },
        ],
        "touch-x": [
          {
            "touch-pan": [`x`, `left`, `right`],
          },
        ],
        "touch-y": [
          {
            "touch-pan": [`y`, `up`, `down`],
          },
        ],
        "touch-pz": [`touch-pinch-zoom`],
        select: [
          {
            select: [`none`, `text`, `all`, `auto`],
          },
        ],
        "will-change": [
          {
            "will-change": [`auto`, `scroll`, `contents`, `transform`, F, P],
          },
        ],
        fill: [
          {
            fill: [`none`, ...k()],
          },
        ],
        "stroke-w": [
          {
            stroke: [N, cr, tr, nr],
          },
        ],
        stroke: [
          {
            stroke: [`none`, ...k()],
          },
        ],
        "forced-color-adjust": [
          {
            "forced-color-adjust": [`auto`, `none`],
          },
        ],
      },
      conflictingClassGroups: {
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [
          `inset-x`,
          `inset-y`,
          `inset-bs`,
          `inset-be`,
          `start`,
          `end`,
          `top`,
          `right`,
          `bottom`,
          `left`,
        ],
        "inset-x": [`right`, `left`],
        "inset-y": [`top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
        px: [`pr`, `pl`],
        py: [`pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
        mx: [`mr`, `ml`],
        my: [`mt`, `mb`],
        size: [`w`, `h`],
        "font-size": [`leading`],
        "fvn-normal": [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        "fvn-ordinal": [`fvn-normal`],
        "fvn-slashed-zero": [`fvn-normal`],
        "fvn-figure": [`fvn-normal`],
        "fvn-spacing": [`fvn-normal`],
        "fvn-fraction": [`fvn-normal`],
        "line-clamp": [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        "rounded-s": [`rounded-ss`, `rounded-es`],
        "rounded-e": [`rounded-se`, `rounded-ee`],
        "rounded-t": [`rounded-tl`, `rounded-tr`],
        "rounded-r": [`rounded-tr`, `rounded-br`],
        "rounded-b": [`rounded-br`, `rounded-bl`],
        "rounded-l": [`rounded-tl`, `rounded-bl`],
        "border-spacing": [`border-spacing-x`, `border-spacing-y`],
        "border-w": [
          `border-w-x`,
          `border-w-y`,
          `border-w-s`,
          `border-w-e`,
          `border-w-bs`,
          `border-w-be`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        "border-w-x": [`border-w-r`, `border-w-l`],
        "border-w-y": [`border-w-t`, `border-w-b`],
        "border-color": [
          `border-color-x`,
          `border-color-y`,
          `border-color-s`,
          `border-color-e`,
          `border-color-bs`,
          `border-color-be`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        "border-color-x": [`border-color-r`, `border-color-l`],
        "border-color-y": [`border-color-t`, `border-color-b`],
        translate: [`translate-x`, `translate-y`, `translate-none`],
        "translate-none": [
          `translate`,
          `translate-x`,
          `translate-y`,
          `translate-z`,
        ],
        "scroll-m": [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mbs`,
          `scroll-mbe`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        "scroll-mx": [`scroll-mr`, `scroll-ml`],
        "scroll-my": [`scroll-mt`, `scroll-mb`],
        "scroll-p": [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pbs`,
          `scroll-pbe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        "scroll-px": [`scroll-pr`, `scroll-pl`],
        "scroll-py": [`scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        "touch-x": [`touch`],
        "touch-y": [`touch`],
        "touch-pz": [`touch`],
      },
      conflictingClassGroupModifiers: {
        "font-size": [`leading`],
      },
      orderSensitiveModifiers: [
        `*`,
        `**`,
        `after`,
        `backdrop`,
        `before`,
        `details-content`,
        `file`,
        `first-letter`,
        `first-line`,
        `marker`,
        `placeholder`,
        `selection`,
      ],
    };
  });
function Er(...e) {
  return Tr(Gt(e));
}
(window.self, window.top);
var Dr = Lt,
  Or = f.forwardRef(({ className: e, ...t }, n) =>
    (0, D.jsx)(Rt, {
      ref: n,
      className: Er(
        `fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]`,
        e,
      ),
      ...t,
    }),
  );
Or.displayName = Rt.displayName;
var kr = Jt(
    `group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full`,
    {
      variants: {
        variant: {
          default: `border bg-background text-foreground`,
          destructive: `destructive group border-destructive bg-destructive text-destructive-foreground`,
        },
      },
      defaultVariants: {
        variant: `default`,
      },
    },
  ),
  Ar = f.forwardRef(({ className: e, variant: t, ...n }, r) =>
    (0, D.jsx)(zt, {
      ref: r,
      className: Er(
        kr({
          variant: t,
        }),
        e,
      ),
      ...n,
    }),
  );
Ar.displayName = zt.displayName;
var jr = f.forwardRef(({ className: e, ...t }, n) =>
  (0, D.jsx)(Ht, {
    ref: n,
    className: Er(
      `inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive`,
      e,
    ),
    ...t,
  }),
);
jr.displayName = Ht.displayName;
var Mr = f.forwardRef(({ className: e, ...t }, n) =>
  (0, D.jsx)(Ut, {
    ref: n,
    className: Er(
      `absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600`,
      e,
    ),
    "toast-close": ``,
    ...t,
    children: (0, D.jsx)(tn, {
      className: `h-4 w-4`,
    }),
  }),
);
Mr.displayName = Ut.displayName;
var Nr = f.forwardRef(({ className: e, ...t }, n) =>
  (0, D.jsx)(Bt, {
    ref: n,
    className: Er(`text-sm font-semibold`, e),
    ...t,
  }),
);
Nr.displayName = Bt.displayName;
var Pr = f.forwardRef(({ className: e, ...t }, n) =>
  (0, D.jsx)(Vt, {
    ref: n,
    className: Er(`text-sm opacity-90`, e),
    ...t,
  }),
);
Pr.displayName = Vt.displayName;
function Fr() {
  let { toasts: e } = T();
  return (0, D.jsxs)(Dr, {
    children: [
      e.map(function ({ id: e, title: t, description: n, action: r, ...i }) {
        return (0, D.jsxs)(
          Ar,
          {
            ...i,
            children: [
              (0, D.jsxs)(`div`, {
                className: `grid gap-1`,
                children: [
                  t &&
                    (0, D.jsx)(Nr, {
                      children: t,
                    }),
                  n &&
                    (0, D.jsx)(Pr, {
                      children: n,
                    }),
                ],
              }),
              r,
              (0, D.jsx)(Mr, {}),
            ],
          },
          e,
        );
      }),
      (0, D.jsx)(Or, {}),
    ],
  });
}
var Ir = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Lr = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  Rr = new (class {
    #e = Lr;
    setTimeoutProvider(e) {
      this.#e = e;
    }
    setTimeout(e, t) {
      return this.#e.setTimeout(e, t);
    }
    clearTimeout(e) {
      this.#e.clearTimeout(e);
    }
    setInterval(e, t) {
      return this.#e.setInterval(e, t);
    }
    clearInterval(e) {
      this.#e.clearInterval(e);
    }
  })();
function zr(e) {
  setTimeout(e, 0);
}
var Br = typeof window > `u` || `Deno` in globalThis;
function Vr() {}
function Hr(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Ur(e) {
  return typeof e == `number` && e >= 0 && e !== 1 / 0;
}
function Wr(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Gr(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Kr(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function qr(e, t) {
  let {
    type: n = `all`,
    exact: r,
    fetchStatus: i,
    predicate: a,
    queryKey: o,
    stale: s,
  } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== Yr(o, t.options)) return !1;
    } else if (!Zr(t.queryKey, o)) return !1;
  }
  if (n !== `all`) {
    let e = t.isActive();
    if ((n === `active` && !e) || (n === `inactive` && e)) return !1;
  }
  return !(
    (typeof s == `boolean` && t.isStale() !== s) ||
    (i && i !== t.state.fetchStatus) ||
    (a && !a(t))
  );
}
function Jr(e, t) {
  let { exact: n, status: r, predicate: i, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Xr(t.options.mutationKey) !== Xr(a)) return !1;
    } else if (!Zr(t.options.mutationKey, a)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function Yr(e, t) {
  return (t?.queryKeyHashFn || Xr)(e);
}
function Xr(e) {
  return JSON.stringify(e, (e, t) =>
    ni(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t,
  );
}
function Zr(e, t) {
  return e === t
    ? !0
    : typeof e == typeof t &&
        e &&
        t &&
        typeof e == `object` &&
        typeof t == `object`
      ? Object.keys(t).every((n) => Zr(e[n], t[n]))
      : !1;
}
var Qr = Object.prototype.hasOwnProperty;
function $r(e, t, n = 0) {
  if (e === t) return e;
  if (n > 500) return t;
  let r = ti(e) && ti(t);
  if (!r && !(ni(e) && ni(t))) return t;
  let i = (r ? e : Object.keys(e)).length,
    a = r ? t : Object.keys(t),
    o = a.length,
    s = r ? Array(o) : {},
    c = 0;
  for (let l = 0; l < o; l++) {
    let o = r ? l : a[l],
      u = e[o],
      d = t[o];
    if (u === d) {
      ((s[o] = u), (r ? l < i : Qr.call(e, o)) && c++);
      continue;
    }
    if (
      u === null ||
      d === null ||
      typeof u != `object` ||
      typeof d != `object`
    ) {
      s[o] = d;
      continue;
    }
    let f = $r(u, d, n + 1);
    ((s[o] = f), f === u && c++);
  }
  return i === o && c === i ? e : s;
}
function ei(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (let n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function ti(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function ni(e) {
  if (!ri(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(
    !ri(n) ||
    !n.hasOwnProperty(`isPrototypeOf`) ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function ri(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function ii(e) {
  return new Promise((t) => {
    Rr.setTimeout(t, e);
  });
}
function ai(e, t, n) {
  return typeof n.structuralSharing == `function`
    ? n.structuralSharing(e, t)
    : n.structuralSharing === !1
      ? t
      : $r(e, t);
}
function oi(e, t, n = 0) {
  let r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function si(e, t, n = 0) {
  let r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var ci = Symbol();
function li(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === ci
      ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function ui(e, t) {
  return typeof e == `function` ? e(...t) : !!e;
}
function di(e, t, n) {
  let r = !1,
    i;
  return (
    Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (
        (i ??= t()),
        r
          ? i
          : ((r = !0),
            i.aborted
              ? n()
              : i.addEventListener(`abort`, n, {
                  once: !0,
                }),
            i)
      ),
    }),
    e
  );
}
var fi = new (class extends Ir {
  #e;
  #t;
  #n;
  constructor() {
    (super(),
      (this.#n = (e) => {
        if (!Br && window.addEventListener) {
          let t = () => e();
          return (
            window.addEventListener(`visibilitychange`, t, !1),
            () => {
              window.removeEventListener(`visibilitychange`, t);
            }
          );
        }
      }));
  }
  onSubscribe() {
    this.#t || this.setEventListener(this.#n);
  }
  onUnsubscribe() {
    this.hasListeners() || (this.#t?.(), (this.#t = void 0));
  }
  setEventListener(e) {
    ((this.#n = e),
      this.#t?.(),
      (this.#t = e((e) => {
        typeof e == `boolean` ? this.setFocused(e) : this.onFocus();
      })));
  }
  setFocused(e) {
    this.#e !== e && ((this.#e = e), this.onFocus());
  }
  onFocus() {
    let e = this.isFocused();
    this.listeners.forEach((t) => {
      t(e);
    });
  }
  isFocused() {
    return typeof this.#e == `boolean`
      ? this.#e
      : globalThis.document?.visibilityState !== `hidden`;
  }
})();
function I() {
  let e,
    t,
    n = new Promise((n, r) => {
      ((e = n), (t = r));
    });
  ((n.status = `pending`), n.catch(() => {}));
  function r(e) {
    (Object.assign(n, e), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (t) => {
      (r({
        status: `fulfilled`,
        value: t,
      }),
        e(t));
    }),
    (n.reject = (e) => {
      (r({
        status: `rejected`,
        reason: e,
      }),
        t(e));
    }),
    n
  );
}
var pi = zr;
function mi() {
  let e = [],
    t = 0,
    n = (e) => {
      e();
    },
    r = (e) => {
      e();
    },
    i = pi,
    a = (r) => {
      t
        ? e.push(r)
        : i(() => {
            n(r);
          });
    },
    o = () => {
      let t = e;
      ((e = []),
        t.length &&
          i(() => {
            r(() => {
              t.forEach((e) => {
                n(e);
              });
            });
          }));
    };
  return {
    batch: (e) => {
      let n;
      t++;
      try {
        n = e();
      } finally {
        (t--, t || o());
      }
      return n;
    },
    batchCalls:
      (e) =>
      (...t) => {
        a(() => {
          e(...t);
        });
      },
    schedule: a,
    setNotifyFunction: (e) => {
      n = e;
    },
    setBatchNotifyFunction: (e) => {
      r = e;
    },
    setScheduler: (e) => {
      i = e;
    },
  };
}
var hi = mi(),
  gi = new (class extends Ir {
    #e = !0;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (!Br && window.addEventListener) {
            let t = () => e(!0),
              n = () => e(!1);
            return (
              window.addEventListener(`online`, t, !1),
              window.addEventListener(`offline`, n, !1),
              () => {
                (window.removeEventListener(`online`, t),
                  window.removeEventListener(`offline`, n));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this))));
    }
    setOnline(e) {
      this.#e !== e &&
        ((this.#e = e),
        this.listeners.forEach((t) => {
          t(e);
        }));
    }
    isOnline() {
      return this.#e;
    }
  })();
function _i(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function vi(e) {
  return (e ?? `online`) !== `online` || gi.isOnline();
}
var yi = class extends Error {
  constructor(e) {
    (super(`CancelledError`),
      (this.revert = e?.revert),
      (this.silent = e?.silent));
  }
};
function bi(e) {
  let t = !1,
    n = 0,
    r,
    i = I(),
    a = () => i.status !== `pending`,
    o = (t) => {
      if (!a()) {
        let n = new yi(t);
        (f(n), e.onCancel?.(n));
      }
    },
    s = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    l = () =>
      fi.isFocused() &&
      (e.networkMode === `always` || gi.isOnline()) &&
      e.canRun(),
    u = () => vi(e.networkMode) && e.canRun(),
    d = (e) => {
      a() || (r?.(), i.resolve(e));
    },
    f = (e) => {
      a() || (r?.(), i.reject(e));
    },
    p = () =>
      new Promise((t) => {
        ((r = (e) => {
          (a() || l()) && t(e);
        }),
          e.onPause?.());
      }).then(() => {
        ((r = void 0), a() || e.onContinue?.());
      }),
    m = () => {
      if (a()) return;
      let r,
        i = n === 0 ? e.initialPromise : void 0;
      try {
        r = i ?? e.fn();
      } catch (e) {
        r = Promise.reject(e);
      }
      Promise.resolve(r)
        .then(d)
        .catch((r) => {
          if (a()) return;
          let i = e.retry ?? (Br ? 0 : 3),
            o = e.retryDelay ?? _i,
            s = typeof o == `function` ? o(n, r) : o,
            c =
              i === !0 ||
              (typeof i == `number` && n < i) ||
              (typeof i == `function` && i(n, r));
          if (t || !c) {
            f(r);
            return;
          }
          (n++,
            e.onFail?.(n, r),
            ii(s)
              .then(() => (l() ? void 0 : p()))
              .then(() => {
                t ? f(r) : m();
              }));
        });
    };
  return {
    promise: i,
    status: () => i.status,
    cancel: o,
    continue: () => (r?.(), i),
    cancelRetry: s,
    continueRetry: c,
    canStart: u,
    start: () => (u() ? m() : p().then(m), i),
  };
}
var xi = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      (this.clearGcTimeout(),
        Ur(this.gcTime) &&
          (this.#e = Rr.setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime)));
    }
    updateGcTime(e) {
      this.gcTime = Math.max(this.gcTime || 0, e ?? (Br ? 1 / 0 : 3e5));
    }
    clearGcTimeout() {
      this.#e &&= (Rr.clearTimeout(this.#e), void 0);
    }
  },
  Si = class extends xi {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    constructor(e) {
      (super(),
        (this.#o = !1),
        (this.#a = e.defaultOptions),
        this.setOptions(e.options),
        (this.observers = []),
        (this.#r = e.client),
        (this.#n = this.#r.getQueryCache()),
        (this.queryKey = e.queryKey),
        (this.queryHash = e.queryHash),
        (this.#e = Ti(this.options)),
        (this.state = e.state ?? this.#e),
        this.scheduleGc());
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#i?.promise;
    }
    setOptions(e) {
      if (
        ((this.options = {
          ...this.#a,
          ...e,
        }),
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0)
      ) {
        let e = Ti(this.options);
        e.data !== void 0 &&
          (this.setState(wi(e.data, e.dataUpdatedAt)), (this.#e = e));
      }
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === `idle` &&
        this.#n.remove(this);
    }
    setData(e, t) {
      let n = ai(this.state.data, e, this.options);
      return (
        this.#s({
          data: n,
          type: `success`,
          dataUpdatedAt: t?.updatedAt,
          manual: t?.manual,
        }),
        n
      );
    }
    setState(e, t) {
      this.#s({
        type: `setState`,
        state: e,
        setStateOptions: t,
      });
    }
    cancel(e) {
      let t = this.#i?.promise;
      return (this.#i?.cancel(e), t ? t.then(Vr).catch(Vr) : Promise.resolve());
    }
    destroy() {
      (super.destroy(),
        this.cancel({
          silent: !0,
        }));
    }
    reset() {
      (this.destroy(), this.setState(this.#e));
    }
    isActive() {
      return this.observers.some((e) => Kr(e.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === ci ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return (
        this.getObserversCount() > 0 &&
        this.observers.some((e) => Gr(e.options.staleTime, this) === `static`)
      );
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((e) => e.getCurrentResult().isStale)
        : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(e = 0) {
      return this.state.data === void 0
        ? !0
        : e === `static`
          ? !1
          : this.state.isInvalidated
            ? !0
            : !Wr(this.state.dataUpdatedAt, e);
    }
    onFocus() {
      (this.observers
        .find((e) => e.shouldFetchOnWindowFocus())
        ?.refetch({
          cancelRefetch: !1,
        }),
        this.#i?.continue());
    }
    onOnline() {
      (this.observers
        .find((e) => e.shouldFetchOnReconnect())
        ?.refetch({
          cancelRefetch: !1,
        }),
        this.#i?.continue());
    }
    addObserver(e) {
      this.observers.includes(e) ||
        (this.observers.push(e),
        this.clearGcTimeout(),
        this.#n.notify({
          type: `observerAdded`,
          query: this,
          observer: e,
        }));
    }
    removeObserver(e) {
      this.observers.includes(e) &&
        ((this.observers = this.observers.filter((t) => t !== e)),
        this.observers.length ||
          (this.#i &&
            (this.#o
              ? this.#i.cancel({
                  revert: !0,
                })
              : this.#i.cancelRetry()),
          this.scheduleGc()),
        this.#n.notify({
          type: `observerRemoved`,
          query: this,
          observer: e,
        }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated ||
        this.#s({
          type: `invalidate`,
        });
    }
    async fetch(e, t) {
      if (
        this.state.fetchStatus !== `idle` &&
        this.#i?.status() !== `rejected`
      ) {
        if (this.state.data !== void 0 && t?.cancelRefetch)
          this.cancel({
            silent: !0,
          });
        else if (this.#i) return (this.#i.continueRetry(), this.#i.promise);
      }
      if ((e && this.setOptions(e), !this.options.queryFn)) {
        let e = this.observers.find((e) => e.options.queryFn);
        e && this.setOptions(e.options);
      }
      let n = new AbortController(),
        r = (e) => {
          Object.defineProperty(e, "signal", {
            enumerable: !0,
            get: () => ((this.#o = !0), n.signal),
          });
        },
        i = () => {
          let e = li(this.options, t),
            n = (() => {
              let e = {
                client: this.#r,
                queryKey: this.queryKey,
                meta: this.meta,
              };
              return (r(e), e);
            })();
          return (
            (this.#o = !1),
            this.options.persister ? this.options.persister(e, n, this) : e(n)
          );
        },
        a = (() => {
          let e = {
            fetchOptions: t,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#r,
            state: this.state,
            fetchFn: i,
          };
          return (r(e), e);
        })();
      (this.options.behavior?.onFetch(a, this),
        (this.#t = this.state),
        (this.state.fetchStatus === `idle` ||
          this.state.fetchMeta !== a.fetchOptions?.meta) &&
          this.#s({
            type: `fetch`,
            meta: a.fetchOptions?.meta,
          }),
        (this.#i = bi({
          initialPromise: t?.initialPromise,
          fn: a.fetchFn,
          onCancel: (e) => {
            (e instanceof yi &&
              e.revert &&
              this.setState({
                ...this.#t,
                fetchStatus: `idle`,
              }),
              n.abort());
          },
          onFail: (e, t) => {
            this.#s({
              type: `failed`,
              failureCount: e,
              error: t,
            });
          },
          onPause: () => {
            this.#s({
              type: `pause`,
            });
          },
          onContinue: () => {
            this.#s({
              type: `continue`,
            });
          },
          retry: a.options.retry,
          retryDelay: a.options.retryDelay,
          networkMode: a.options.networkMode,
          canRun: () => !0,
        })));
      try {
        let e = await this.#i.start();
        if (e === void 0) throw Error(`${this.queryHash} data is undefined`);
        return (
          this.setData(e),
          this.#n.config.onSuccess?.(e, this),
          this.#n.config.onSettled?.(e, this.state.error, this),
          e
        );
      } catch (e) {
        if (e instanceof yi) {
          if (e.silent) return this.#i.promise;
          if (e.revert) {
            if (this.state.data === void 0) throw e;
            return this.state.data;
          }
        }
        throw (
          this.#s({
            type: `error`,
            error: e,
          }),
          this.#n.config.onError?.(e, this),
          this.#n.config.onSettled?.(this.state.data, e, this),
          e
        );
      } finally {
        this.scheduleGc();
      }
    }
    #s(e) {
      let t = (t) => {
        switch (e.type) {
          case `failed`:
            return {
              ...t,
              fetchFailureCount: e.failureCount,
              fetchFailureReason: e.error,
            };
          case `pause`:
            return {
              ...t,
              fetchStatus: `paused`,
            };
          case `continue`:
            return {
              ...t,
              fetchStatus: `fetching`,
            };
          case `fetch`:
            return {
              ...t,
              ...Ci(t.data, this.options),
              fetchMeta: e.meta ?? null,
            };
          case `success`:
            let n = {
              ...t,
              ...wi(e.data, e.dataUpdatedAt),
              dataUpdateCount: t.dataUpdateCount + 1,
              ...(!e.manual && {
                fetchStatus: `idle`,
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return ((this.#t = e.manual ? n : void 0), n);
          case `error`:
            let r = e.error;
            return {
              ...t,
              error: r,
              errorUpdateCount: t.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: t.fetchFailureCount + 1,
              fetchFailureReason: r,
              fetchStatus: `idle`,
              status: `error`,
              isInvalidated: !0,
            };
          case `invalidate`:
            return {
              ...t,
              isInvalidated: !0,
            };
          case `setState`:
            return {
              ...t,
              ...e.state,
            };
        }
      };
      ((this.state = t(this.state)),
        hi.batch(() => {
          (this.observers.forEach((e) => {
            e.onQueryUpdate();
          }),
            this.#n.notify({
              query: this,
              type: `updated`,
              action: e,
            }));
        }));
    }
  };
function Ci(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: vi(t.networkMode) ? `fetching` : `paused`,
    ...(e === void 0 && {
      error: null,
      status: `pending`,
    }),
  };
}
function wi(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: `success`,
  };
}
function Ti(e) {
  let t = typeof e.initialData == `function` ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == `function`
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? `success` : `pending`,
    fetchStatus: `idle`,
  };
}
var Ei = class extends Ir {
  constructor(e, t) {
    (super(),
      (this.options = t),
      (this.#e = e),
      (this.#s = null),
      (this.#o = I()),
      this.bindMethods(),
      this.setOptions(t));
  }
  #e;
  #t = void 0;
  #n = void 0;
  #r = void 0;
  #i;
  #a;
  #o;
  #s;
  #c;
  #l;
  #u;
  #d;
  #f;
  #p;
  #m = new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#t.addObserver(this),
      Oi(this.#t, this.options) ? this.#h() : this.updateResult(),
      this.#y());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return ki(this.#t, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return ki(this.#t, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    ((this.listeners = new Set()),
      this.#b(),
      this.#x(),
      this.#t.removeObserver(this));
  }
  setOptions(e) {
    let t = this.options,
      n = this.#t;
    if (
      ((this.options = this.#e.defaultQueryOptions(e)),
      this.options.enabled !== void 0 &&
        typeof this.options.enabled != `boolean` &&
        typeof this.options.enabled != `function` &&
        typeof Kr(this.options.enabled, this.#t) != `boolean`)
    )
      throw Error(
        `Expected enabled to be a boolean or a callback that returns a boolean`,
      );
    (this.#S(),
      this.#t.setOptions(this.options),
      t._defaulted &&
        !ei(this.options, t) &&
        this.#e.getQueryCache().notify({
          type: `observerOptionsUpdated`,
          query: this.#t,
          observer: this,
        }));
    let r = this.hasListeners();
    (r && Ai(this.#t, n, this.options, t) && this.#h(),
      this.updateResult(),
      r &&
        (this.#t !== n ||
          Kr(this.options.enabled, this.#t) !== Kr(t.enabled, this.#t) ||
          Gr(this.options.staleTime, this.#t) !== Gr(t.staleTime, this.#t)) &&
        this.#g());
    let i = this.#_();
    r &&
      (this.#t !== n ||
        Kr(this.options.enabled, this.#t) !== Kr(t.enabled, this.#t) ||
        i !== this.#p) &&
      this.#v(i);
  }
  getOptimisticResult(e) {
    let t = this.#e.getQueryCache().build(this.#e, e),
      n = this.createResult(t, e);
    return (
      Mi(this, n) &&
        ((this.#r = n), (this.#a = this.options), (this.#i = this.#t.state)),
      n
    );
  }
  getCurrentResult() {
    return this.#r;
  }
  trackResult(e, t) {
    return new Proxy(e, {
      get: (e, n) => (
        this.trackProp(n),
        t?.(n),
        n === `promise` &&
          (this.trackProp(`data`),
          !this.options.experimental_prefetchInRender &&
            this.#o.status === `pending` &&
            this.#o.reject(
              Error(
                `experimental_prefetchInRender feature flag is not enabled`,
              ),
            )),
        Reflect.get(e, n)
      ),
    });
  }
  trackProp(e) {
    this.#m.add(e);
  }
  getCurrentQuery() {
    return this.#t;
  }
  refetch({ ...e } = {}) {
    return this.fetch({
      ...e,
    });
  }
  fetchOptimistic(e) {
    let t = this.#e.defaultQueryOptions(e),
      n = this.#e.getQueryCache().build(this.#e, t);
    return n.fetch().then(() => this.createResult(n, t));
  }
  fetch(e) {
    return this.#h({
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0,
    }).then(() => (this.updateResult(), this.#r));
  }
  #h(e) {
    this.#S();
    let t = this.#t.fetch(this.options, e);
    return (e?.throwOnError || (t = t.catch(Vr)), t);
  }
  #g() {
    this.#b();
    let e = Gr(this.options.staleTime, this.#t);
    if (Br || this.#r.isStale || !Ur(e)) return;
    let t = Wr(this.#r.dataUpdatedAt, e) + 1;
    this.#d = Rr.setTimeout(() => {
      this.#r.isStale || this.updateResult();
    }, t);
  }
  #_() {
    return (
      (typeof this.options.refetchInterval == `function`
        ? this.options.refetchInterval(this.#t)
        : this.options.refetchInterval) ?? !1
    );
  }
  #v(e) {
    (this.#x(),
      (this.#p = e),
      !(
        Br ||
        Kr(this.options.enabled, this.#t) === !1 ||
        !Ur(this.#p) ||
        this.#p === 0
      ) &&
        (this.#f = Rr.setInterval(() => {
          (this.options.refetchIntervalInBackground || fi.isFocused()) &&
            this.#h();
        }, this.#p)));
  }
  #y() {
    (this.#g(), this.#v(this.#_()));
  }
  #b() {
    this.#d &&= (Rr.clearTimeout(this.#d), void 0);
  }
  #x() {
    this.#f &&= (Rr.clearInterval(this.#f), void 0);
  }
  createResult(e, t) {
    let n = this.#t,
      r = this.options,
      i = this.#r,
      a = this.#i,
      o = this.#a,
      s = e === n ? this.#n : e.state,
      { state: c } = e,
      l = {
        ...c,
      },
      u = !1,
      d;
    if (t._optimisticResults) {
      let i = this.hasListeners(),
        a = !i && Oi(e, t),
        o = i && Ai(e, n, t, r);
      ((a || o) &&
        (l = {
          ...l,
          ...Ci(c.data, e.options),
        }),
        t._optimisticResults === `isRestoring` && (l.fetchStatus = `idle`));
    }
    let { error: f, errorUpdatedAt: p, status: m } = l;
    d = l.data;
    let h = !1;
    if (t.placeholderData !== void 0 && d === void 0 && m === `pending`) {
      let e;
      (i?.isPlaceholderData && t.placeholderData === o?.placeholderData
        ? ((e = i.data), (h = !0))
        : (e =
            typeof t.placeholderData == `function`
              ? t.placeholderData(this.#u?.state.data, this.#u)
              : t.placeholderData),
        e !== void 0 && ((m = `success`), (d = ai(i?.data, e, t)), (u = !0)));
    }
    if (t.select && d !== void 0 && !h)
      if (i && d === a?.data && t.select === this.#c) d = this.#l;
      else
        try {
          ((this.#c = t.select),
            (d = t.select(d)),
            (d = ai(i?.data, d, t)),
            (this.#l = d),
            (this.#s = null));
        } catch (e) {
          this.#s = e;
        }
    this.#s && ((f = this.#s), (d = this.#l), (p = Date.now()), (m = `error`));
    let g = l.fetchStatus === `fetching`,
      _ = m === `pending`,
      v = m === `error`,
      y = _ && g,
      b = d !== void 0,
      x = {
        status: m,
        fetchStatus: l.fetchStatus,
        isPending: _,
        isSuccess: m === `success`,
        isError: v,
        isInitialLoading: y,
        isLoading: y,
        data: d,
        dataUpdatedAt: l.dataUpdatedAt,
        error: f,
        errorUpdatedAt: p,
        failureCount: l.fetchFailureCount,
        failureReason: l.fetchFailureReason,
        errorUpdateCount: l.errorUpdateCount,
        isFetched: l.dataUpdateCount > 0 || l.errorUpdateCount > 0,
        isFetchedAfterMount:
          l.dataUpdateCount > s.dataUpdateCount ||
          l.errorUpdateCount > s.errorUpdateCount,
        isFetching: g,
        isRefetching: g && !_,
        isLoadingError: v && !b,
        isPaused: l.fetchStatus === `paused`,
        isPlaceholderData: u,
        isRefetchError: v && b,
        isStale: ji(e, t),
        refetch: this.refetch,
        promise: this.#o,
        isEnabled: Kr(t.enabled, e) !== !1,
      };
    if (this.options.experimental_prefetchInRender) {
      let t = x.data !== void 0,
        r = x.status === `error` && !t,
        i = (e) => {
          r ? e.reject(x.error) : t && e.resolve(x.data);
        },
        a = () => {
          let e = (this.#o = x.promise = I());
          i(e);
        },
        o = this.#o;
      switch (o.status) {
        case `pending`:
          e.queryHash === n.queryHash && i(o);
          break;
        case `fulfilled`:
          (r || x.data !== o.value) && a();
          break;
        case `rejected`:
          (!r || x.error !== o.reason) && a();
      }
    }
    return x;
  }
  updateResult() {
    let e = this.#r,
      t = this.createResult(this.#t, this.options);
    ((this.#i = this.#t.state),
      (this.#a = this.options),
      this.#i.data !== void 0 && (this.#u = this.#t),
      !ei(t, e) &&
        ((this.#r = t),
        this.#C({
          listeners: (() => {
            if (!e) return !0;
            let { notifyOnChangeProps: t } = this.options,
              n = typeof t == `function` ? t() : t;
            if (n === `all` || (!n && !this.#m.size)) return !0;
            let r = new Set(n ?? this.#m);
            return (
              this.options.throwOnError && r.add(`error`),
              Object.keys(this.#r).some((t) => {
                let n = t;
                return this.#r[n] !== e[n] && r.has(n);
              })
            );
          })(),
        })));
  }
  #S() {
    let e = this.#e.getQueryCache().build(this.#e, this.options);
    if (e === this.#t) return;
    let t = this.#t;
    ((this.#t = e),
      (this.#n = e.state),
      this.hasListeners() && (t?.removeObserver(this), e.addObserver(this)));
  }
  onQueryUpdate() {
    (this.updateResult(), this.hasListeners() && this.#y());
  }
  #C(e) {
    hi.batch(() => {
      (e.listeners &&
        this.listeners.forEach((e) => {
          e(this.#r);
        }),
        this.#e.getQueryCache().notify({
          query: this.#t,
          type: `observerResultsUpdated`,
        }));
    });
  }
};
function Di(e, t) {
  return (
    Kr(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    (e.state.status !== `error` || t.retryOnMount !== !1)
  );
}
function Oi(e, t) {
  return Di(e, t) || (e.state.data !== void 0 && ki(e, t, t.refetchOnMount));
}
function ki(e, t, n) {
  if (Kr(t.enabled, e) !== !1 && Gr(t.staleTime, e) !== `static`) {
    let r = typeof n == `function` ? n(e) : n;
    return r === `always` || (r !== !1 && ji(e, t));
  }
  return !1;
}
function Ai(e, t, n, r) {
  return (
    (e !== t || Kr(r.enabled, e) === !1) &&
    (!n.suspense || e.state.status !== `error`) &&
    ji(e, n)
  );
}
function ji(e, t) {
  return Kr(t.enabled, e) !== !1 && e.isStaleByTime(Gr(t.staleTime, e));
}
function Mi(e, t) {
  return !ei(e.getCurrentResult(), t);
}
function Ni(e) {
  return {
    onFetch: (t, n) => {
      let r = t.options,
        i = t.fetchOptions?.meta?.fetchMore?.direction,
        a = t.state.data?.pages || [],
        o = t.state.data?.pageParams || [],
        s = {
          pages: [],
          pageParams: [],
        },
        c = 0,
        l = async () => {
          let n = !1,
            l = (e) => {
              di(
                e,
                () => t.signal,
                () => (n = !0),
              );
            },
            u = li(t.options, t.fetchOptions),
            d = async (e, r, i) => {
              if (n) return Promise.reject();
              if (r == null && e.pages.length) return Promise.resolve(e);
              let a = (() => {
                  let e = {
                    client: t.client,
                    queryKey: t.queryKey,
                    pageParam: r,
                    direction: i ? `backward` : `forward`,
                    meta: t.options.meta,
                  };
                  return (l(e), e);
                })(),
                o = await u(a),
                { maxPages: s } = t.options,
                c = i ? si : oi;
              return {
                pages: c(e.pages, o, s),
                pageParams: c(e.pageParams, r, s),
              };
            };
          if (i && a.length) {
            let e = i === `backward`,
              t = e ? Fi : Pi,
              n = {
                pages: a,
                pageParams: o,
              };
            s = await d(n, t(r, n), e);
          } else {
            let t = e ?? a.length;
            do {
              let e = c === 0 ? (o[0] ?? r.initialPageParam) : Pi(r, s);
              if (c > 0 && e == null) break;
              ((s = await d(s, e)), c++);
            } while (c < t);
          }
          return s;
        };
      t.fetchFn = t.options.persister
        ? () =>
            t.options.persister?.(
              l,
              {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal,
              },
              n,
            )
        : l;
    },
  };
}
function Pi(e, { pages: t, pageParams: n }) {
  let r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function Fi(e, { pages: t, pageParams: n }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
var Ii = class extends xi {
  #e;
  #t;
  #n;
  #r;
  constructor(e) {
    (super(),
      (this.#e = e.client),
      (this.mutationId = e.mutationId),
      (this.#n = e.mutationCache),
      (this.#t = []),
      (this.state = e.state || Li()),
      this.setOptions(e.options),
      this.scheduleGc());
  }
  setOptions(e) {
    ((this.options = e), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#t.includes(e) ||
      (this.#t.push(e),
      this.clearGcTimeout(),
      this.#n.notify({
        type: `observerAdded`,
        mutation: this,
        observer: e,
      }));
  }
  removeObserver(e) {
    ((this.#t = this.#t.filter((t) => t !== e)),
      this.scheduleGc(),
      this.#n.notify({
        type: `observerRemoved`,
        mutation: this,
        observer: e,
      }));
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === `pending`
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return this.#r?.continue() ?? this.execute(this.state.variables);
  }
  async execute(e) {
    let t = () => {
        this.#i({
          type: `continue`,
        });
      },
      n = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#r = bi({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(e, n)
          : Promise.reject(Error(`No mutationFn found`)),
      onFail: (e, t) => {
        this.#i({
          type: `failed`,
          failureCount: e,
          error: t,
        });
      },
      onPause: () => {
        this.#i({
          type: `pause`,
        });
      },
      onContinue: t,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    let r = this.state.status === `pending`,
      i = !this.#r.canStart();
    try {
      if (r) t();
      else {
        (this.#i({
          type: `pending`,
          variables: e,
          isPaused: i,
        }),
          this.#n.config.onMutate &&
            (await this.#n.config.onMutate(e, this, n)));
        let t = await this.options.onMutate?.(e, n);
        t !== this.state.context &&
          this.#i({
            type: `pending`,
            context: t,
            variables: e,
            isPaused: i,
          });
      }
      let a = await this.#r.start();
      return (
        await this.#n.config.onSuccess?.(a, e, this.state.context, this, n),
        await this.options.onSuccess?.(a, e, this.state.context, n),
        await this.#n.config.onSettled?.(
          a,
          null,
          this.state.variables,
          this.state.context,
          this,
          n,
        ),
        await this.options.onSettled?.(a, null, e, this.state.context, n),
        this.#i({
          type: `success`,
          data: a,
        }),
        a
      );
    } catch (t) {
      try {
        await this.#n.config.onError?.(t, e, this.state.context, this, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onError?.(t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          t,
          this.state.variables,
          this.state.context,
          this,
          n,
        );
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onSettled?.(void 0, t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      throw (
        this.#i({
          type: `error`,
          error: t,
        }),
        t
      );
    } finally {
      this.#n.runNext(this);
    }
  }
  #i(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return {
            ...t,
            failureCount: e.failureCount,
            failureReason: e.error,
          };
        case `pause`:
          return {
            ...t,
            isPaused: !0,
          };
        case `continue`:
          return {
            ...t,
            isPaused: !1,
          };
        case `pending`:
          return {
            ...t,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: `pending`,
            variables: e.variables,
            submittedAt: Date.now(),
          };
        case `success`:
          return {
            ...t,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: `success`,
            isPaused: !1,
          };
        case `error`:
          return {
            ...t,
            data: void 0,
            error: e.error,
            failureCount: t.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: `error`,
          };
      }
    };
    ((this.state = t(this.state)),
      hi.batch(() => {
        (this.#t.forEach((t) => {
          t.onMutationUpdate(e);
        }),
          this.#n.notify({
            mutation: this,
            type: `updated`,
            action: e,
          }));
      }));
  }
};
function Li() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: `idle`,
    variables: void 0,
    submittedAt: 0,
  };
}
var Ri = class extends Ir {
  constructor(e = {}) {
    (super(),
      (this.config = e),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0));
  }
  #e;
  #t;
  #n;
  build(e, t, n) {
    let r = new Ii({
      client: e,
      mutationCache: this,
      mutationId: ++this.#n,
      options: e.defaultMutationOptions(t),
      state: n,
    });
    return (this.add(r), r);
  }
  add(e) {
    this.#e.add(e);
    let t = zi(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t);
      n ? n.push(e) : this.#t.set(t, [e]);
    }
    this.notify({
      type: `added`,
      mutation: e,
    });
  }
  remove(e) {
    if (this.#e.delete(e)) {
      let t = zi(e);
      if (typeof t == `string`) {
        let n = this.#t.get(t);
        if (n)
          if (n.length > 1) {
            let t = n.indexOf(e);
            t !== -1 && n.splice(t, 1);
          } else n[0] === e && this.#t.delete(t);
      }
    }
    this.notify({
      type: `removed`,
      mutation: e,
    });
  }
  canRun(e) {
    let t = zi(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t)?.find((e) => e.state.status === `pending`);
      return !n || n === e;
    }
    return !0;
  }
  runNext(e) {
    let t = zi(e);
    return typeof t == `string`
      ? (this.#t
          .get(t)
          ?.find((t) => t !== e && t.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    hi.batch(() => {
      (this.#e.forEach((e) => {
        this.notify({
          type: `removed`,
          mutation: e,
        });
      }),
        this.#e.clear(),
        this.#t.clear());
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(e) {
    let t = {
      exact: !0,
      ...e,
    };
    return this.getAll().find((e) => Jr(t, e));
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => Jr(e, t));
  }
  notify(e) {
    hi.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    let e = this.getAll().filter((e) => e.state.isPaused);
    return hi.batch(() => Promise.all(e.map((e) => e.continue().catch(Vr))));
  }
};
function zi(e) {
  return e.options.scope?.id;
}
var Bi = class extends Ir {
    constructor(e = {}) {
      (super(), (this.config = e), (this.#e = new Map()));
    }
    #e;
    build(e, t, n) {
      let r = t.queryKey,
        i = t.queryHash ?? Yr(r, t),
        a = this.get(i);
      return (
        a ||
          ((a = new Si({
            client: e,
            queryKey: r,
            queryHash: i,
            options: e.defaultQueryOptions(t),
            state: n,
            defaultOptions: e.getQueryDefaults(r),
          })),
          this.add(a)),
        a
      );
    }
    add(e) {
      this.#e.has(e.queryHash) ||
        (this.#e.set(e.queryHash, e),
        this.notify({
          type: `added`,
          query: e,
        }));
    }
    remove(e) {
      let t = this.#e.get(e.queryHash);
      t &&
        (e.destroy(),
        t === e && this.#e.delete(e.queryHash),
        this.notify({
          type: `removed`,
          query: e,
        }));
    }
    clear() {
      hi.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#e.get(e);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(e) {
      let t = {
        exact: !0,
        ...e,
      };
      return this.getAll().find((e) => qr(t, e));
    }
    findAll(e = {}) {
      let t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((t) => qr(e, t)) : t;
    }
    notify(e) {
      hi.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      hi.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      hi.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  Vi = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e = {}) {
      ((this.#e = e.queryCache || new Bi()),
        (this.#t = e.mutationCache || new Ri()),
        (this.#n = e.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#a = 0));
    }
    mount() {
      (this.#a++,
        this.#a === 1 &&
          ((this.#o = fi.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = gi.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#a--,
        this.#a === 0 &&
          (this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0)));
    }
    isFetching(e) {
      return this.#e.findAll({
        ...e,
        fetchStatus: `fetching`,
      }).length;
    }
    isMutating(e) {
      return this.#t.findAll({
        ...e,
        status: `pending`,
      }).length;
    }
    getQueryData(e) {
      let t = this.defaultQueryOptions({
        queryKey: e,
      });
      return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      let t = this.defaultQueryOptions(e),
        n = this.#e.build(this, t),
        r = n.state.data;
      return r === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale &&
            n.isStaleByTime(Gr(t.staleTime, n)) &&
            this.prefetchQuery(t),
          Promise.resolve(r));
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
    }
    setQueryData(e, t, n) {
      let r = this.defaultQueryOptions({
          queryKey: e,
        }),
        i = this.#e.get(r.queryHash)?.state.data,
        a = Hr(t, i);
      if (a !== void 0)
        return this.#e.build(this, r).setData(a, {
          ...n,
          manual: !0,
        });
    }
    setQueriesData(e, t, n) {
      return hi.batch(() =>
        this.#e
          .findAll(e)
          .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]),
      );
    }
    getQueryState(e) {
      let t = this.defaultQueryOptions({
        queryKey: e,
      });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      let t = this.#e;
      hi.batch(() => {
        t.findAll(e).forEach((e) => {
          t.remove(e);
        });
      });
    }
    resetQueries(e, t) {
      let n = this.#e;
      return hi.batch(
        () => (
          n.findAll(e).forEach((e) => {
            e.reset();
          }),
          this.refetchQueries(
            {
              type: `active`,
              ...e,
            },
            t,
          )
        ),
      );
    }
    cancelQueries(e, t = {}) {
      let n = {
          revert: !0,
          ...t,
        },
        r = hi.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
      return Promise.all(r).then(Vr).catch(Vr);
    }
    invalidateQueries(e, t = {}) {
      return hi.batch(
        () => (
          this.#e.findAll(e).forEach((e) => {
            e.invalidate();
          }),
          e?.refetchType === `none`
            ? Promise.resolve()
            : this.refetchQueries(
                {
                  ...e,
                  type: e?.refetchType ?? e?.type ?? `active`,
                },
                t,
              )
        ),
      );
    }
    refetchQueries(e, t = {}) {
      let n = {
          ...t,
          cancelRefetch: t.cancelRefetch ?? !0,
        },
        r = hi.batch(() =>
          this.#e
            .findAll(e)
            .filter((e) => !e.isDisabled() && !e.isStatic())
            .map((e) => {
              let t = e.fetch(void 0, n);
              return (
                n.throwOnError || (t = t.catch(Vr)),
                e.state.fetchStatus === `paused` ? Promise.resolve() : t
              );
            }),
        );
      return Promise.all(r).then(Vr);
    }
    fetchQuery(e) {
      let t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      let n = this.#e.build(this, t);
      return n.isStaleByTime(Gr(t.staleTime, n))
        ? n.fetch(t)
        : Promise.resolve(n.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(Vr).catch(Vr);
    }
    fetchInfiniteQuery(e) {
      return ((e.behavior = Ni(e.pages)), this.fetchQuery(e));
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(Vr).catch(Vr);
    }
    ensureInfiniteQueryData(e) {
      return ((e.behavior = Ni(e.pages)), this.ensureQueryData(e));
    }
    resumePausedMutations() {
      return gi.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(e) {
      this.#n = e;
    }
    setQueryDefaults(e, t) {
      this.#r.set(Xr(e), {
        queryKey: e,
        defaultOptions: t,
      });
    }
    getQueryDefaults(e) {
      let t = [...this.#r.values()],
        n = {};
      return (
        t.forEach((t) => {
          Zr(e, t.queryKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    setMutationDefaults(e, t) {
      this.#i.set(Xr(e), {
        mutationKey: e,
        defaultOptions: t,
      });
    }
    getMutationDefaults(e) {
      let t = [...this.#i.values()],
        n = {};
      return (
        t.forEach((t) => {
          Zr(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      let t = {
        ...this.#n.queries,
        ...this.getQueryDefaults(e.queryKey),
        ...e,
        _defaulted: !0,
      };
      return (
        (t.queryHash ||= Yr(t.queryKey, t)),
        t.refetchOnReconnect === void 0 &&
          (t.refetchOnReconnect = t.networkMode !== `always`),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
        t.queryFn === ci && (t.enabled = !1),
        t
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#n.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#e.clear(), this.#t.clear());
    }
  },
  Hi = f.createContext(void 0),
  Ui = (e) => {
    let t = f.useContext(Hi);
    if (e) return e;
    if (!t)
      throw Error(`No QueryClient set, use QueryClientProvider to set one`);
    return t;
  },
  Wi = ({ client: e, children: t }) => (
    f.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    (0, D.jsx)(Hi.Provider, {
      value: e,
      children: t,
    })
  ),
  Gi = f.createContext(!1),
  Ki = () => f.useContext(Gi);
Gi.Provider;
function qi() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var Ji = f.createContext(qi()),
  Yi = () => f.useContext(Ji),
  Xi = (e, t, n) => {
    let r =
      n?.state.error && typeof e.throwOnError == `function`
        ? ui(e.throwOnError, [n.state.error, n])
        : e.throwOnError;
    (e.suspense || e.experimental_prefetchInRender || r) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  Zi = (e) => {
    f.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  L = ({
    result: e,
    errorResetBoundary: t,
    throwOnError: n,
    query: r,
    suspense: i,
  }) =>
    e.isError &&
    !t.isReset() &&
    !e.isFetching &&
    r &&
    ((i && e.data === void 0) || ui(n, [e.error, r])),
  R = (e) => {
    if (e.suspense) {
      let t = 1e3,
        n = (e) => (e === `static` ? e : Math.max(e ?? t, t)),
        r = e.staleTime;
      ((e.staleTime = typeof r == `function` ? (...e) => n(r(...e)) : n(r)),
        typeof e.gcTime == `number` && (e.gcTime = Math.max(e.gcTime, t)));
    }
  },
  Qi = (e, t) => e.isLoading && e.isFetching && !t,
  $i = (e, t) => e?.suspense && t.isPending,
  ea = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function ta(e, t, n) {
  let r = Ki(),
    i = Yi(),
    a = Ui(n),
    o = a.defaultQueryOptions(e);
  a.getDefaultOptions().queries?._experimental_beforeQuery?.(o);
  let s = a.getQueryCache().get(o.queryHash);
  ((o._optimisticResults = r ? `isRestoring` : `optimistic`),
    R(o),
    Xi(o, i, s),
    Zi(i));
  let c = !a.getQueryCache().get(o.queryHash),
    [l] = f.useState(() => new t(a, o)),
    u = l.getOptimisticResult(o),
    d = !r && e.subscribed !== !1;
  if (
    (f.useSyncExternalStore(
      f.useCallback(
        (e) => {
          let t = d ? l.subscribe(hi.batchCalls(e)) : Vr;
          return (l.updateResult(), t);
        },
        [l, d],
      ),
      () => l.getCurrentResult(),
      () => l.getCurrentResult(),
    ),
    f.useEffect(() => {
      l.setOptions(o);
    }, [o, l]),
    $i(o, u))
  )
    throw ea(o, l, i);
  if (
    L({
      result: u,
      errorResetBoundary: i,
      throwOnError: o.throwOnError,
      query: s,
      suspense: o.suspense,
    })
  )
    throw u.error;
  return (
    a.getDefaultOptions().queries?._experimental_afterQuery?.(o, u),
    o.experimental_prefetchInRender &&
      !Br &&
      Qi(u, r) &&
      (c ? ea(o, l, i) : s?.promise)?.catch(Vr).finally(() => {
        l.updateResult();
      }),
    o.notifyOnChangeProps ? u : l.trackResult(u)
  );
}
function na(e, t) {
  return ta(e, Ei, t);
}
var ra = new Vi({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: !1,
      retry: 1,
    },
  },
});
function ia() {
  return (
    (ia = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ia.apply(null, arguments)
  );
}
var aa;
(function (e) {
  ((e.Pop = `POP`), (e.Push = `PUSH`), (e.Replace = `REPLACE`));
})((aa ||= {}));
var oa = `popstate`;
function sa(e) {
  e === void 0 && (e = {});
  function t(e, t) {
    let { pathname: n, search: r, hash: i } = e.location;
    return da(
      ``,
      {
        pathname: n,
        search: r,
        hash: i,
      },
      (t.state && t.state.usr) || null,
      (t.state && t.state.key) || `default`,
    );
  }
  function n(e, t) {
    return typeof t == `string` ? t : fa(t);
  }
  return ma(t, n, null, e);
}
function z(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function ca(e, t) {
  if (!e) {
    typeof console < `u` && console.warn(t);
    try {
      throw Error(t);
    } catch {}
  }
}
function la() {
  return Math.random().toString(36).substr(2, 8);
}
function ua(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t,
  };
}
function da(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ia(
      {
        pathname: typeof e == `string` ? e : e.pathname,
        search: ``,
        hash: ``,
      },
      typeof t == `string` ? pa(t) : t,
      {
        state: n,
        key: (t && t.key) || r || la(),
      },
    )
  );
}
function fa(e) {
  let { pathname: t = `/`, search: n = ``, hash: r = `` } = e;
  return (
    n && n !== `?` && (t += n.charAt(0) === `?` ? n : `?` + n),
    r && r !== `#` && (t += r.charAt(0) === `#` ? r : `#` + r),
    t
  );
}
function pa(e) {
  let t = {};
  if (e) {
    let n = e.indexOf(`#`);
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf(`?`);
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function ma(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: a = !1 } = r,
    o = i.history,
    s = aa.Pop,
    c = null,
    l = u();
  l ??
    ((l = 0),
    o.replaceState(
      ia({}, o.state, {
        idx: l,
      }),
      ``,
    ));
  function u() {
    return (
      o.state || {
        idx: null,
      }
    ).idx;
  }
  function d() {
    s = aa.Pop;
    let e = u(),
      t = e == null ? null : e - l;
    ((l = e),
      c &&
        c({
          action: s,
          location: h.location,
          delta: t,
        }));
  }
  function f(e, t) {
    s = aa.Push;
    let r = da(h.location, e, t);
    (n && n(r, e), (l = u() + 1));
    let d = ua(r, l),
      f = h.createHref(r);
    try {
      o.pushState(d, ``, f);
    } catch (e) {
      if (e instanceof DOMException && e.name === `DataCloneError`) throw e;
      i.location.assign(f);
    }
    a &&
      c &&
      c({
        action: s,
        location: h.location,
        delta: 1,
      });
  }
  function p(e, t) {
    s = aa.Replace;
    let r = da(h.location, e, t);
    (n && n(r, e), (l = u()));
    let i = ua(r, l),
      d = h.createHref(r);
    (o.replaceState(i, ``, d),
      a &&
        c &&
        c({
          action: s,
          location: h.location,
          delta: 0,
        }));
  }
  function m(e) {
    let t = i.location.origin === `null` ? i.location.href : i.location.origin,
      n = typeof e == `string` ? e : fa(e);
    return (
      (n = n.replace(/ $/, `%20`)),
      z(
        t,
        `No window.location.(origin|href) available to create URL for href: ` +
          n,
      ),
      new URL(n, t)
    );
  }
  let h = {
    get action() {
      return s;
    },
    get location() {
      return e(i, o);
    },
    listen(e) {
      if (c) throw Error(`A history only accepts one active listener`);
      return (
        i.addEventListener(oa, d),
        (c = e),
        () => {
          (i.removeEventListener(oa, d), (c = null));
        }
      );
    },
    createHref(e) {
      return t(i, e);
    },
    createURL: m,
    encodeLocation(e) {
      let t = m(e);
      return {
        pathname: t.pathname,
        search: t.search,
        hash: t.hash,
      };
    },
    push: f,
    replace: p,
    go(e) {
      return o.go(e);
    },
  };
  return h;
}
var ha;
(function (e) {
  ((e.data = `data`),
    (e.deferred = `deferred`),
    (e.redirect = `redirect`),
    (e.error = `error`));
})((ha ||= {}));
function ga(e, t, n) {
  return (n === void 0 && (n = `/`), _a(e, t, n, !1));
}
function _a(e, t, n, r) {
  let i = Na((typeof t == `string` ? pa(t) : t).pathname || `/`, n);
  if (i == null) return null;
  let a = va(e);
  ba(a);
  let o = null,
    s = Ma(i);
  for (let e = 0; o == null && e < a.length; ++e) o = ka(a[e], s, r);
  return o;
}
function va(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ``));
  let i = (e, i, a) => {
    let o = {
      relativePath: a === void 0 ? e.path || `` : a,
      caseSensitive: e.caseSensitive === !0,
      childrenIndex: i,
      route: e,
    };
    o.relativePath.startsWith(`/`) &&
      (z(
        o.relativePath.startsWith(r),
        `Absolute route path "` +
          o.relativePath +
          `" nested under path ` +
          (`"` + r + `" is not valid. An absolute child route path `) +
          `must start with the combined path of all its parent routes.`,
      ),
      (o.relativePath = o.relativePath.slice(r.length)));
    let s = Ua([r, o.relativePath]),
      c = n.concat(o);
    (e.children &&
      e.children.length > 0 &&
      (z(
        e.index !== !0,
        `Index routes must not have child routes. Please remove ` +
          (`all child routes from route path "` + s + `".`),
      ),
      va(e.children, t, c, s)),
      !(e.path == null && !e.index) &&
        t.push({
          path: s,
          score: Oa(s, e.index),
          routesMeta: c,
        }));
  };
  return (
    e.forEach((e, t) => {
      var n;
      if (e.path === `` || !((n = e.path) != null && n.includes(`?`))) i(e, t);
      else for (let n of ya(e.path)) i(e, t, n);
    }),
    t
  );
}
function ya(e) {
  let t = e.split(`/`);
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith(`?`),
    a = n.replace(/\?$/, ``);
  if (r.length === 0) return i ? [a, ``] : [a];
  let o = ya(r.join(`/`)),
    s = [];
  return (
    s.push(...o.map((e) => (e === `` ? a : [a, e].join(`/`)))),
    i && s.push(...o),
    s.map((t) => (e.startsWith(`/`) && t === `` ? `/` : t))
  );
}
function ba(e) {
  e.sort((e, t) =>
    e.score === t.score
      ? B(
          e.routesMeta.map((e) => e.childrenIndex),
          t.routesMeta.map((e) => e.childrenIndex),
        )
      : t.score - e.score,
  );
}
var xa = /^:[\w-]+$/,
  Sa = 3,
  Ca = 2,
  wa = 1,
  Ta = 10,
  Ea = -2,
  Da = (e) => e === `*`;
function Oa(e, t) {
  let n = e.split(`/`),
    r = n.length;
  return (
    n.some(Da) && (r += Ea),
    t && (r += Ca),
    n
      .filter((e) => !Da(e))
      .reduce((e, t) => e + (xa.test(t) ? Sa : t === `` ? wa : Ta), r)
  );
}
function B(e, t) {
  return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function ka(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    i = {},
    a = `/`,
    o = [];
  for (let e = 0; e < r.length; ++e) {
    let s = r[e],
      c = e === r.length - 1,
      l = a === `/` ? t : t.slice(a.length) || `/`,
      u = Aa(
        {
          path: s.relativePath,
          caseSensitive: s.caseSensitive,
          end: c,
        },
        l,
      ),
      d = s.route;
    if (
      (!u &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (u = Aa(
          {
            path: s.relativePath,
            caseSensitive: s.caseSensitive,
            end: !1,
          },
          l,
        )),
      !u)
    )
      return null;
    (Object.assign(i, u.params),
      o.push({
        params: i,
        pathname: Ua([a, u.pathname]),
        pathnameBase: Wa(Ua([a, u.pathnameBase])),
        route: d,
      }),
      u.pathnameBase !== `/` && (a = Ua([a, u.pathnameBase])));
  }
  return o;
}
function Aa(e, t) {
  typeof e == `string` &&
    (e = {
      path: e,
      caseSensitive: !1,
      end: !0,
    });
  let [n, r] = ja(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let a = i[0],
    o = a.replace(/(.)\/+$/, `$1`),
    s = i.slice(1);
  return {
    params: r.reduce((e, t, n) => {
      let { paramName: r, isOptional: i } = t;
      if (r === `*`) {
        let e = s[n] || ``;
        o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, `$1`);
      }
      let c = s[n];
      return ((e[r] = i && !c ? void 0 : (c || ``).replace(/%2F/g, `/`)), e);
    }, {}),
    pathname: a,
    pathnameBase: o,
    pattern: e,
  };
}
function ja(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ca(
      e === `*` || !e.endsWith(`*`) || e.endsWith(`/*`),
      `Route path "` +
        e +
        `" will be treated as if it were ` +
        (`"` + e.replace(/\*$/, `/*`) + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        (`please change the route path to "` + e.replace(/\*$/, `/*`) + `".`),
    ));
  let r = [],
    i =
      `^` +
      e
        .replace(/\/*\*?$/, ``)
        .replace(/^\/*/, `/`)
        .replace(/[\\.*+^${}|()[\]]/g, `\\$&`)
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (e, t, n) => (
            r.push({
              paramName: t,
              isOptional: n != null,
            }),
            n ? `/?([^\\/]+)?` : `/([^\\/]+)`
          ),
        );
  return (
    e.endsWith(`*`)
      ? (r.push({
          paramName: `*`,
        }),
        (i += e === `*` || e === `/*` ? `(.*)$` : `(?:\\/(.+)|\\/*)$`))
      : n
        ? (i += `\\/*$`)
        : e !== `` && e !== `/` && (i += `(?:(?=\\/|$))`),
    [new RegExp(i, t ? void 0 : `i`), r]
  );
}
function Ma(e) {
  try {
    return e
      .split(`/`)
      .map((e) => decodeURIComponent(e).replace(/\//g, `%2F`))
      .join(`/`);
  } catch (t) {
    return (
      ca(
        !1,
        `The URL path "` +
          e +
          `" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ` +
          (`encoding (` + t + `).`),
      ),
      e
    );
  }
}
function Na(e, t) {
  if (t === `/`) return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith(`/`) ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== `/` ? null : e.slice(n) || `/`;
}
var Pa = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Fa = (e) => Pa.test(e);
function Ia(e, t) {
  t === void 0 && (t = `/`);
  let {
      pathname: n,
      search: r = ``,
      hash: i = ``,
    } = typeof e == `string` ? pa(e) : e,
    a;
  if (n)
    if (Fa(n)) a = n;
    else {
      if (n.includes(`//`)) {
        let e = n;
        ((n = Ha(n)),
          ca(
            !1,
            `Pathnames cannot have embedded double slashes - normalizing ` +
              (e + ` -> ` + n),
          ));
      }
      a = n.startsWith(`/`) ? La(n.substring(1), `/`) : La(n, t);
    }
  else a = t;
  return {
    pathname: a,
    search: Ga(r),
    hash: Ka(i),
  };
}
function La(e, t) {
  let n = t.replace(/\/+$/, ``).split(`/`);
  return (
    e.split(`/`).forEach((e) => {
      e === `..` ? n.length > 1 && n.pop() : e !== `.` && n.push(e);
    }),
    n.length > 1 ? n.join(`/`) : `/`
  );
}
function Ra(e, t, n, r) {
  return (
    `Cannot include a '` +
    e +
    `' character in a manually specified ` +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      `].  Please separate it out to the `) +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    `a string in <Link to="..."> and the router will parse it for you.`
  );
}
function za(e) {
  return e.filter(
    (e, t) => t === 0 || (e.route.path && e.route.path.length > 0),
  );
}
function Ba(e, t) {
  let n = za(e);
  return t
    ? n.map((e, t) => (t === n.length - 1 ? e.pathname : e.pathnameBase))
    : n.map((e) => e.pathnameBase);
}
function Va(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == `string`
    ? (i = pa(e))
    : ((i = ia({}, e)),
      z(
        !i.pathname || !i.pathname.includes(`?`),
        Ra(`?`, `pathname`, `search`, i),
      ),
      z(
        !i.pathname || !i.pathname.includes(`#`),
        Ra(`#`, `pathname`, `hash`, i),
      ),
      z(!i.search || !i.search.includes(`#`), Ra(`#`, `search`, `hash`, i)));
  let a = e === `` || i.pathname === ``,
    o = a ? `/` : i.pathname,
    s;
  if (o == null) s = n;
  else {
    let e = t.length - 1;
    if (!r && o.startsWith(`..`)) {
      let t = o.split(`/`);
      for (; t[0] === `..`; ) (t.shift(), --e);
      i.pathname = t.join(`/`);
    }
    s = e >= 0 ? t[e] : `/`;
  }
  let c = Ia(i, s),
    l = o && o !== `/` && o.endsWith(`/`),
    u = (a || o === `.`) && n.endsWith(`/`);
  return (!c.pathname.endsWith(`/`) && (l || u) && (c.pathname += `/`), c);
}
var Ha = (e) => e.replace(/\/\/+/g, `/`),
  Ua = (e) => Ha(e.join(`/`)),
  Wa = (e) => e.replace(/\/+$/, ``).replace(/^\/*/, `/`),
  Ga = (e) => (!e || e === `?` ? `` : e.startsWith(`?`) ? e : `?` + e),
  Ka = (e) => (!e || e === `#` ? `` : e.startsWith(`#`) ? e : `#` + e);
function qa(e) {
  return (
    e != null &&
    typeof e.status == `number` &&
    typeof e.statusText == `string` &&
    typeof e.internal == `boolean` &&
    `data` in e
  );
}
var Ja = [`post`, `put`, `patch`, `delete`];
new Set(Ja);
var Ya = [`get`, ...Ja];
new Set(Ya);
function Xa() {
  return (
    (Xa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Xa.apply(null, arguments)
  );
}
var Za = f.createContext(null),
  Qa = f.createContext(null),
  $a = f.createContext(null),
  eo = f.createContext(null),
  to = f.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1,
  }),
  no = f.createContext(null);
function ro(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  !io() && z(!1);
  let { basename: r, navigator: i } = f.useContext($a),
    {
      hash: a,
      pathname: o,
      search: s,
    } = po(e, {
      relative: n,
    }),
    c = o;
  return (
    r !== `/` && (c = o === `/` ? r : Ua([r, o])),
    i.createHref({
      pathname: c,
      search: s,
      hash: a,
    })
  );
}
function io() {
  return f.useContext(eo) != null;
}
function ao() {
  return (!io() && z(!1), f.useContext(eo).location);
}
function oo() {
  return f.useContext(eo).navigationType;
}
function so(e) {
  f.useContext($a).static || f.useLayoutEffect(e);
}
function co() {
  let { isDataRoute: e } = f.useContext(to);
  return e ? Do() : lo();
}
function lo() {
  !io() && z(!1);
  let e = f.useContext(Za),
    { basename: t, future: n, navigator: r } = f.useContext($a),
    { matches: i } = f.useContext(to),
    { pathname: a } = ao(),
    o = JSON.stringify(Ba(i, n.v7_relativeSplatPath)),
    s = f.useRef(!1);
  return (
    so(() => {
      s.current = !0;
    }),
    f.useCallback(
      function (n, i) {
        if ((i === void 0 && (i = {}), !s.current)) return;
        if (typeof n == `number`) {
          r.go(n);
          return;
        }
        let c = Va(n, JSON.parse(o), a, i.relative === `path`);
        (e == null &&
          t !== `/` &&
          (c.pathname = c.pathname === `/` ? t : Ua([t, c.pathname])),
          (i.replace ? r.replace : r.push)(c, i.state, i));
      },
      [t, r, o, a, e],
    )
  );
}
var uo = f.createContext(null);
function fo(e) {
  let t = f.useContext(to).outlet;
  return (
    t &&
    f.createElement(
      uo.Provider,
      {
        value: e,
      },
      t,
    )
  );
}
function po(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = f.useContext($a),
    { matches: i } = f.useContext(to),
    { pathname: a } = ao(),
    o = JSON.stringify(Ba(i, r.v7_relativeSplatPath));
  return f.useMemo(() => Va(e, JSON.parse(o), a, n === `path`), [e, o, a, n]);
}
function mo(e, t) {
  return ho(e, t);
}
function ho(e, t, n, r) {
  !io() && z(!1);
  let { navigator: i } = f.useContext($a),
    { matches: a } = f.useContext(to),
    o = a[a.length - 1],
    s = o ? o.params : {};
  o && o.pathname;
  let c = o ? o.pathnameBase : `/`;
  o && o.route;
  let l = ao(),
    u;
  if (t) {
    let e = typeof t == `string` ? pa(t) : t;
    (!(c === `/` || e.pathname?.startsWith(c)) && z(!1), (u = e));
  } else u = l;
  let d = u.pathname || `/`,
    p = d;
  if (c !== `/`) {
    let e = c.replace(/^\//, ``).split(`/`);
    p = `/` + d.replace(/^\//, ``).split(`/`).slice(e.length).join(`/`);
  }
  let m = ga(e, {
      pathname: p,
    }),
    h = bo(
      m &&
        m.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, s, e.params),
            pathname: Ua([
              c,
              i.encodeLocation
                ? i.encodeLocation(e.pathname).pathname
                : e.pathname,
            ]),
            pathnameBase:
              e.pathnameBase === `/`
                ? c
                : Ua([
                    c,
                    i.encodeLocation
                      ? i.encodeLocation(e.pathnameBase).pathname
                      : e.pathnameBase,
                  ]),
          }),
        ),
      a,
      n,
      r,
    );
  return t && h
    ? f.createElement(
        eo.Provider,
        {
          value: {
            location: Xa(
              {
                pathname: `/`,
                search: ``,
                hash: ``,
                state: null,
                key: `default`,
              },
              u,
            ),
            navigationType: aa.Pop,
          },
        },
        h,
      )
    : h;
}
function go() {
  let e = Eo(),
    t = qa(e)
      ? e.status + ` ` + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null;
  return f.createElement(
    f.Fragment,
    null,
    f.createElement(`h2`, null, `Unexpected Application Error!`),
    f.createElement(
      `h3`,
      {
        style: {
          fontStyle: `italic`,
        },
      },
      t,
    ),
    n
      ? f.createElement(
          `pre`,
          {
            style: {
              padding: `0.5rem`,
              backgroundColor: `rgba(200,200,200, 0.5)`,
            },
          },
          n,
        )
      : null,
    null,
  );
}
var _o = f.createElement(go, null),
  vo = class extends f.Component {
    constructor(e) {
      (super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        }));
    }
    static getDerivedStateFromError(e) {
      return {
        error: e,
      };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== `idle` && e.revalidation === `idle`)
        ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation,
          }
        : {
            error: e.error === void 0 ? t.error : e.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        `React Router caught the following error during render`,
        e,
        t,
      );
    }
    render() {
      return this.state.error === void 0
        ? this.props.children
        : f.createElement(
            to.Provider,
            {
              value: this.props.routeContext,
            },
            f.createElement(no.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          );
    }
  };
function yo(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = f.useContext(Za);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    f.createElement(
      to.Provider,
      {
        value: t,
      },
      r,
    )
  );
}
function bo(e, t, n, r) {
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let a = e,
    o = n?.errors;
  if (o != null) {
    let e = a.findIndex((e) => e.route.id && o?.[e.route.id] !== void 0);
    (!(e >= 0) && z(!1), (a = a.slice(0, Math.min(a.length, e + 1))));
  }
  let s = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let e = 0; e < a.length; e++) {
      let t = a[e];
      if (
        ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (c = e),
        t.route.id)
      ) {
        let { loaderData: e, errors: r } = n,
          i =
            t.route.loader &&
            e[t.route.id] === void 0 &&
            (!r || r[t.route.id] === void 0);
        if (t.route.lazy || i) {
          ((s = !0), (a = c >= 0 ? a.slice(0, c + 1) : [a[0]]));
          break;
        }
      }
    }
  return a.reduceRight((e, r, i) => {
    let l,
      u = !1,
      d = null,
      p = null;
    n &&
      ((l = o && r.route.id ? o[r.route.id] : void 0),
      (d = r.route.errorElement || _o),
      s &&
        (c < 0 && i === 0
          ? (ko(
              `route-fallback`,
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (u = !0),
            (p = null))
          : c === i &&
            ((u = !0), (p = r.route.hydrateFallbackElement || null))));
    let m = t.concat(a.slice(0, i + 1)),
      h = () => {
        let t;
        return (
          (t = l
            ? d
            : u
              ? p
              : r.route.Component
                ? f.createElement(r.route.Component, null)
                : r.route.element
                  ? r.route.element
                  : e),
          f.createElement(yo, {
            match: r,
            routeContext: {
              outlet: e,
              matches: m,
              isDataRoute: n != null,
            },
            children: t,
          })
        );
      };
    return n && (r.route.ErrorBoundary || r.route.errorElement || i === 0)
      ? f.createElement(vo, {
          location: n.location,
          revalidation: n.revalidation,
          component: d,
          error: l,
          children: h(),
          routeContext: {
            outlet: null,
            matches: m,
            isDataRoute: !0,
          },
        })
      : h();
  }, null);
}
var xo = (function (e) {
    return (
      (e.UseBlocker = `useBlocker`),
      (e.UseRevalidator = `useRevalidator`),
      (e.UseNavigateStable = `useNavigate`),
      e
    );
  })(xo || {}),
  So = (function (e) {
    return (
      (e.UseBlocker = `useBlocker`),
      (e.UseLoaderData = `useLoaderData`),
      (e.UseActionData = `useActionData`),
      (e.UseRouteError = `useRouteError`),
      (e.UseNavigation = `useNavigation`),
      (e.UseRouteLoaderData = `useRouteLoaderData`),
      (e.UseMatches = `useMatches`),
      (e.UseRevalidator = `useRevalidator`),
      (e.UseNavigateStable = `useNavigate`),
      (e.UseRouteId = `useRouteId`),
      e
    );
  })(So || {});
function Co(e) {
  let t = f.useContext(Za);
  return (!t && z(!1), t);
}
function V(e) {
  let t = f.useContext(Qa);
  return (!t && z(!1), t);
}
function wo(e) {
  let t = f.useContext(to);
  return (!t && z(!1), t);
}
function To(e) {
  let t = wo(e),
    n = t.matches[t.matches.length - 1];
  return (!n.route.id && z(!1), n.route.id);
}
function Eo() {
  let e = f.useContext(no),
    t = V(So.UseRouteError),
    n = To(So.UseRouteError);
  return e === void 0 ? t.errors?.[n] : e;
}
function Do() {
  let { router: e } = Co(xo.UseNavigateStable),
    t = To(So.UseNavigateStable),
    n = f.useRef(!1);
  return (
    so(() => {
      n.current = !0;
    }),
    f.useCallback(
      function (r, i) {
        (i === void 0 && (i = {}),
          n.current &&
            (typeof r == `number`
              ? e.navigate(r)
              : e.navigate(
                  r,
                  Xa(
                    {
                      fromRouteId: t,
                    },
                    i,
                  ),
                )));
      },
      [e, t],
    )
  );
}
var Oo = {};
function ko(e, t, n) {
  !t && !Oo[e] && (Oo[e] = !0);
}
var H = (e, t, n) => (
  `` +
    t +
    ("You can use the `" + e + "` future flag to opt-in early. ") +
    (`For more information, see ` + n + `.`),
  void 0
);
function Ao(e, t) {
  (e?.v7_startTransition === void 0 &&
    H(
      `v7_startTransition`,
      "React Router will begin wrapping state updates in `React.startTransition` in v7",
      `https://reactrouter.com/v6/upgrading/future#v7_starttransition`,
    ),
    e?.v7_relativeSplatPath === void 0 &&
      (!t || t.v7_relativeSplatPath === void 0) &&
      H(
        `v7_relativeSplatPath`,
        `Relative route resolution within Splat routes is changing in v7`,
        `https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath`,
      ),
    t &&
      (t.v7_fetcherPersist === void 0 &&
        H(
          `v7_fetcherPersist`,
          `The persistence behavior of fetchers is changing in v7`,
          `https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist`,
        ),
      t.v7_normalizeFormMethod === void 0 &&
        H(
          `v7_normalizeFormMethod`,
          "Casing of `formMethod` fields is being normalized to uppercase in v7",
          `https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod`,
        ),
      t.v7_partialHydration === void 0 &&
        H(
          `v7_partialHydration`,
          "`RouterProvider` hydration behavior is changing in v7",
          `https://reactrouter.com/v6/upgrading/future#v7_partialhydration`,
        ),
      t.v7_skipActionErrorRevalidation === void 0 &&
        H(
          `v7_skipActionErrorRevalidation`,
          "The revalidation behavior after 4xx/5xx `action` responses is changing in v7",
          `https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation`,
        )));
}
function jo(e) {
  return fo(e.context);
}
function Mo(e) {
  z(!1);
}
function No(e) {
  let {
    basename: t = `/`,
    children: n = null,
    location: r,
    navigationType: i = aa.Pop,
    navigator: a,
    static: o = !1,
    future: s,
  } = e;
  io() && z(!1);
  let c = t.replace(/^\/*/, `/`),
    l = f.useMemo(
      () => ({
        basename: c,
        navigator: a,
        static: o,
        future: Xa(
          {
            v7_relativeSplatPath: !1,
          },
          s,
        ),
      }),
      [c, s, a, o],
    );
  typeof r == `string` && (r = pa(r));
  let {
      pathname: u = `/`,
      search: d = ``,
      hash: p = ``,
      state: m = null,
      key: h = `default`,
    } = r,
    g = f.useMemo(() => {
      let e = Na(u, c);
      return e == null
        ? null
        : {
            location: {
              pathname: e,
              search: d,
              hash: p,
              state: m,
              key: h,
            },
            navigationType: i,
          };
    }, [c, u, d, p, m, h, i]);
  return g == null
    ? null
    : f.createElement(
        $a.Provider,
        {
          value: l,
        },
        f.createElement(eo.Provider, {
          children: n,
          value: g,
        }),
      );
}
function Po(e) {
  let { children: t, location: n } = e;
  return mo(Io(t), n);
}
var Fo = (function (e) {
  return (
    (e[(e.pending = 0)] = `pending`),
    (e[(e.success = 1)] = `success`),
    (e[(e.error = 2)] = `error`),
    e
  );
})(Fo || {});
(new Promise(() => {}), f.Component);
function Io(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    f.Children.forEach(e, (e, r) => {
      if (!f.isValidElement(e)) return;
      let i = [...t, r];
      if (e.type === f.Fragment) {
        n.push.apply(n, Io(e.props.children, i));
        return;
      }
      (e.type !== Mo && z(!1), !(!e.props.index || !e.props.children) && z(!1));
      let a = {
        id: e.props.id || i.join(`-`),
        caseSensitive: e.props.caseSensitive,
        element: e.props.element,
        Component: e.props.Component,
        index: e.props.index,
        path: e.props.path,
        loader: e.props.loader,
        action: e.props.action,
        errorElement: e.props.errorElement,
        ErrorBoundary: e.props.ErrorBoundary,
        hasErrorBoundary:
          e.props.ErrorBoundary != null || e.props.errorElement != null,
        shouldRevalidate: e.props.shouldRevalidate,
        handle: e.props.handle,
        lazy: e.props.lazy,
      };
      (e.props.children && (a.children = Io(e.props.children, i)), n.push(a));
    }),
    n
  );
}
function Lo() {
  return (
    (Lo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Lo.apply(null, arguments)
  );
}
function Ro(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function zo(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Bo(e, t) {
  return e.button === 0 && (!t || t === `_self`) && !zo(e);
}
var Vo = [
    `onClick`,
    `relative`,
    `reloadDocument`,
    `replace`,
    `state`,
    `target`,
    `to`,
    `preventScrollReset`,
    `viewTransition`,
  ],
  Ho = [
    `aria-current`,
    `caseSensitive`,
    `className`,
    `end`,
    `style`,
    `to`,
    `viewTransition`,
    `children`,
  ],
  Uo = `6`;
try {
  window.__reactRouterVersion = Uo;
} catch {}
var Wo = f.createContext({
    isTransitioning: !1,
  }),
  Go = f.startTransition;
function Ko(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    a = f.useRef();
  a.current ??= sa({
    window: i,
    v5Compat: !0,
  });
  let o = a.current,
    [s, c] = f.useState({
      action: o.action,
      location: o.location,
    }),
    { v7_startTransition: l } = r || {},
    u = f.useCallback(
      (e) => {
        l && Go ? Go(() => c(e)) : c(e);
      },
      [c, l],
    );
  return (
    f.useLayoutEffect(() => o.listen(u), [o, u]),
    f.useEffect(() => Ao(r), [r]),
    f.createElement(No, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: o,
      future: r,
    })
  );
}
var qo =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0,
  Jo = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Yo = f.forwardRef(function (e, t) {
    let {
        onClick: n,
        relative: r,
        reloadDocument: i,
        replace: a,
        state: o,
        target: s,
        to: c,
        preventScrollReset: l,
        viewTransition: u,
      } = e,
      d = Ro(e, Vo),
      { basename: p } = f.useContext($a),
      m,
      h = !1;
    if (typeof c == `string` && Jo.test(c) && ((m = c), qo))
      try {
        let e = new URL(window.location.href),
          t = c.startsWith(`//`) ? new URL(e.protocol + c) : new URL(c),
          n = Na(t.pathname, p);
        t.origin === e.origin && n != null
          ? (c = n + t.search + t.hash)
          : (h = !0);
      } catch {}
    let g = ro(c, {
        relative: r,
      }),
      _ = es(c, {
        replace: a,
        state: o,
        target: s,
        preventScrollReset: l,
        relative: r,
        viewTransition: u,
      });
    function v(e) {
      (n && n(e), e.defaultPrevented || _(e));
    }
    return f.createElement(
      `a`,
      Lo({}, d, {
        href: m || g,
        onClick: h || i ? n : v,
        ref: t,
        target: s,
      }),
    );
  }),
  Xo = f.forwardRef(function (e, t) {
    let {
        "aria-current": n = `page`,
        caseSensitive: r = !1,
        className: i = ``,
        end: a = !1,
        style: o,
        to: s,
        viewTransition: c,
        children: l,
      } = e,
      u = Ro(e, Ho),
      d = po(s, {
        relative: u.relative,
      }),
      p = ao(),
      m = f.useContext(Qa),
      { navigator: h, basename: g } = f.useContext($a),
      _ = m != null && ts(d) && c === !0,
      v = h.encodeLocation ? h.encodeLocation(d).pathname : d.pathname,
      y = p.pathname,
      b =
        m && m.navigation && m.navigation.location
          ? m.navigation.location.pathname
          : null;
    (r ||
      ((y = y.toLowerCase()),
      (b = b ? b.toLowerCase() : null),
      (v = v.toLowerCase())),
      b && g && (b = Na(b, g) || b));
    let x = v !== `/` && v.endsWith(`/`) ? v.length - 1 : v.length,
      S = y === v || (!a && y.startsWith(v) && y.charAt(x) === `/`),
      C =
        b != null &&
        (b === v || (!a && b.startsWith(v) && b.charAt(v.length) === `/`)),
      w = {
        isActive: S,
        isPending: C,
        isTransitioning: _,
      },
      T = S ? n : void 0,
      ee;
    ee =
      typeof i == `function`
        ? i(w)
        : [
            i,
            S ? `active` : null,
            C ? `pending` : null,
            _ ? `transitioning` : null,
          ]
            .filter(Boolean)
            .join(` `);
    let E = typeof o == `function` ? o(w) : o;
    return f.createElement(
      Yo,
      Lo({}, u, {
        "aria-current": T,
        className: ee,
        ref: t,
        style: E,
        to: s,
        viewTransition: c,
      }),
      typeof l == `function` ? l(w) : l,
    );
  }),
  Zo;
(function (e) {
  ((e.UseScrollRestoration = `useScrollRestoration`),
    (e.UseSubmit = `useSubmit`),
    (e.UseSubmitFetcher = `useSubmitFetcher`),
    (e.UseFetcher = `useFetcher`),
    (e.useViewTransitionState = `useViewTransitionState`));
})((Zo ||= {}));
var Qo;
(function (e) {
  ((e.UseFetcher = `useFetcher`),
    (e.UseFetchers = `useFetchers`),
    (e.UseScrollRestoration = `useScrollRestoration`));
})((Qo ||= {}));
function $o(e) {
  let t = f.useContext(Za);
  return (!t && z(!1), t);
}
function es(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: a,
      relative: o,
      viewTransition: s,
    } = t === void 0 ? {} : t,
    c = co(),
    l = ao(),
    u = po(e, {
      relative: o,
    });
  return f.useCallback(
    (t) => {
      if (Bo(t, n)) {
        t.preventDefault();
        let n = r === void 0 ? fa(l) === fa(u) : r;
        c(e, {
          replace: n,
          state: i,
          preventScrollReset: a,
          relative: o,
          viewTransition: s,
        });
      }
    },
    [l, c, u, r, i, n, e, a, o, s],
  );
}
function ts(e, t) {
  t === void 0 && (t = {});
  let n = f.useContext(Wo);
  n ?? z(!1);
  let { basename: r } = $o(Zo.useViewTransitionState),
    i = po(e, {
      relative: t.relative,
    });
  if (!n.isTransitioning) return !1;
  let a = Na(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = Na(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Aa(i.pathname, o) != null || Aa(i.pathname, a) != null;
}
function ns(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
var { toString: rs } = Object.prototype,
  { getPrototypeOf: is } = Object,
  { iterator: as, toStringTag: os } = Symbol,
  ss = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  cs = (e, t) => {
    let n = e,
      r = [];
    for (; n != null && n !== Object.prototype; ) {
      if (r.indexOf(n) !== -1) return !1;
      if ((r.push(n), ss(n, t))) return !0;
      n = is(n);
    }
    return !1;
  },
  ls = (e, t) => (e != null && cs(e, t) ? e[t] : void 0),
  us = ((e) => (t) => {
    let n = rs.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ds = (e) => ((e = e.toLowerCase()), (t) => us(t) === e),
  fs = (e) => (t) => typeof t === e,
  { isArray: ps } = Array,
  ms = fs(`undefined`);
function hs(e) {
  return (
    e !== null &&
    !ms(e) &&
    e.constructor !== null &&
    !ms(e.constructor) &&
    ys(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
var gs = ds(`ArrayBuffer`);
function _s(e) {
  let t;
  return (
    (t =
      typeof ArrayBuffer < `u` && ArrayBuffer.isView
        ? ArrayBuffer.isView(e)
        : e && e.buffer && gs(e.buffer)),
    t
  );
}
var vs = fs(`string`),
  ys = fs(`function`),
  bs = fs(`number`),
  xs = (e) => typeof e == `object` && !!e,
  Ss = (e) => e === !0 || e === !1,
  Cs = (e) => {
    if (!xs(e)) return !1;
    let t = is(e);
    return (
      (t === null || t === Object.prototype || is(t) === null) &&
      !cs(e, os) &&
      !cs(e, as)
    );
  },
  ws = (e) => {
    if (!xs(e) || hs(e)) return !1;
    try {
      return (
        Object.keys(e).length === 0 &&
        Object.getPrototypeOf(e) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  Ts = ds(`Date`),
  Es = ds(`File`),
  Ds = (e) => !!(e && e.uri !== void 0),
  Os = (e) => e && e.getParts !== void 0,
  ks = ds(`Blob`),
  As = ds(`FileList`),
  js = (e) => xs(e) && ys(e.pipe);
function Ms() {
  return typeof globalThis < `u`
    ? globalThis
    : typeof self < `u`
      ? self
      : typeof window < `u`
        ? window
        : typeof global < `u`
          ? global
          : {};
}
var Ns = Ms(),
  Ps = Ns.FormData === void 0 ? void 0 : Ns.FormData,
  Fs = (e) => {
    if (!e) return !1;
    if (Ps && e instanceof Ps) return !0;
    let t = is(e);
    if (!t || t === Object.prototype || !ys(e.append)) return !1;
    let n = us(e);
    return (
      n === `formdata` ||
      (n === `object` && ys(e.toString) && e.toString() === `[object FormData]`)
    );
  },
  Is = ds(`URLSearchParams`),
  [Ls, Rs, zs, Bs] = [`ReadableStream`, `Request`, `Response`, `Headers`].map(
    ds,
  ),
  Vs = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ``);
function Hs(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e == null) return;
  let r, i;
  if ((typeof e != `object` && (e = [e]), ps(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    if (hs(e)) return;
    let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = i.length,
      o;
    for (r = 0; r < a; r++) ((o = i[r]), t.call(null, e[o], o, e));
  }
}
function Us(e, t) {
  if (hs(e)) return null;
  t = t.toLowerCase();
  let n = Object.keys(e),
    r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
var Ws =
    typeof globalThis < `u`
      ? globalThis
      : typeof self < `u`
        ? self
        : typeof window < `u`
          ? window
          : global,
  Gs = (e) => !ms(e) && e !== Ws;
function Ks(...e) {
  let { caseless: t, skipUndefined: n } = (Gs(this) && this) || {},
    r = {},
    i = (e, i) => {
      if (i === `__proto__` || i === `constructor` || i === `prototype`) return;
      let a = (t && typeof i == `string` && Us(r, i)) || i,
        o = ss(r, a) ? r[a] : void 0;
      Cs(o) && Cs(e)
        ? (r[a] = Ks(o, e))
        : Cs(e)
          ? (r[a] = Ks({}, e))
          : ps(e)
            ? (r[a] = e.slice())
            : (!n || !ms(e)) && (r[a] = e);
    };
  for (let t = 0, n = e.length; t < n; t++) {
    let n = e[t];
    if (!n || hs(n) || (Hs(n, i), typeof n != `object` || ps(n))) continue;
    let r = Object.getOwnPropertySymbols(n);
    for (let e = 0; e < r.length; e++) {
      let t = r[e];
      ic.call(n, t) && i(n[t], t);
    }
  }
  return r;
}
var qs = (e, t, n, { allOwnKeys: r } = {}) => (
    Hs(
      t,
      (t, r) => {
        n && ys(t)
          ? Object.defineProperty(e, r, {
              __proto__: null,
              value: ns(t, n),
              writable: !0,
              enumerable: !0,
              configurable: !0,
            })
          : Object.defineProperty(e, r, {
              __proto__: null,
              value: t,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            });
      },
      {
        allOwnKeys: r,
      },
    ),
    e
  ),
  Js = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Ys = (e, t, n, r) => {
    ((e.prototype = Object.create(t.prototype, r)),
      Object.defineProperty(e.prototype, "constructor", {
        __proto__: null,
        value: e,
        writable: !0,
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "super", {
        __proto__: null,
        value: t.prototype,
      }),
      n && Object.assign(e.prototype, n));
  },
  Xs = (e, t, n, r) => {
    let i,
      a,
      o,
      s = {};
    if (((t ||= {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
        ((o = i[a]),
          (!r || r(o, e, t)) && !s[o] && ((t[o] = e[o]), (s[o] = !0)));
      e = n !== !1 && is(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Zs = (e, t, n) => {
    ((e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length));
    let r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Qs = (e) => {
    if (!e) return null;
    if (ps(e)) return e;
    let t = e.length;
    if (!bs(t)) return null;
    let n = Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  $s = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < `u` && is(Uint8Array)),
  ec = (e, t) => {
    let n = (e && e[as]).call(e),
      r;
    for (; (r = n.next()) && !r.done; ) {
      let n = r.value;
      t.call(e, n[0], n[1]);
    }
  },
  tc = (e, t) => {
    let n,
      r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  nc = ds(`HTMLFormElement`),
  rc = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
      return t.toUpperCase() + n;
    }),
  { propertyIsEnumerable: ic } = Object.prototype,
  ac = ds(`RegExp`),
  oc = (e, t) => {
    let n = Object.getOwnPropertyDescriptors(e),
      r = {};
    (Hs(n, (n, i) => {
      let a;
      (a = t(n, i, e)) !== !1 && (r[i] = a || n);
    }),
      Object.defineProperties(e, r));
  },
  sc = (e) => {
    oc(e, (t, n) => {
      if (ys(e) && [`arguments`, `caller`, `callee`].includes(n)) return !1;
      let r = e[n];
      if (ys(r)) {
        if (((t.enumerable = !1), `writable` in t)) {
          t.writable = !1;
          return;
        }
        t.set ||= () => {
          throw Error(`Can not rewrite read-only method '` + n + `'`);
        };
      }
    });
  },
  cc = (e, t) => {
    let n = {},
      r = (e) => {
        e.forEach((e) => {
          n[e] = !0;
        });
      };
    return (ps(e) ? r(e) : r(String(e).split(t)), n);
  },
  lc = () => {},
  uc = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function dc(e) {
  return !!(e && ys(e.append) && e[os] === `FormData` && e[as]);
}
var fc = (e) => {
    let t = new WeakSet(),
      n = (e) => {
        if (xs(e)) {
          if (t.has(e)) return;
          if (hs(e)) return e;
          if (!(`toJSON` in e)) {
            t.add(e);
            let r = ps(e) ? [] : {};
            return (
              Hs(e, (e, t) => {
                let i = n(e);
                !ms(i) && (r[t] = i);
              }),
              t.delete(e),
              r
            );
          }
        }
        return e;
      };
    return n(e);
  },
  pc = ds(`AsyncFunction`),
  mc = (e) => e && (xs(e) || ys(e)) && ys(e.then) && ys(e.catch),
  hc = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((e, t) => (
            Ws.addEventListener(
              `message`,
              ({ source: n, data: r }) => {
                n === Ws && r === e && t.length && t.shift()();
              },
              !1,
            ),
            (n) => {
              (t.push(n), Ws.postMessage(e, `*`));
            }
          ))(`axios@${Math.random()}`, [])
        : (e) => setTimeout(e))(
    typeof setImmediate == `function`,
    ys(Ws.postMessage),
  ),
  gc =
    typeof queueMicrotask < `u`
      ? queueMicrotask.bind(Ws)
      : (typeof process < `u` && process.nextTick) || hc,
  _c = (e) => e != null && ys(e[as]),
  U = {
    isArray: ps,
    isArrayBuffer: gs,
    isBuffer: hs,
    isFormData: Fs,
    isArrayBufferView: _s,
    isString: vs,
    isNumber: bs,
    isBoolean: Ss,
    isObject: xs,
    isPlainObject: Cs,
    isEmptyObject: ws,
    isReadableStream: Ls,
    isRequest: Rs,
    isResponse: zs,
    isHeaders: Bs,
    isUndefined: ms,
    isDate: Ts,
    isFile: Es,
    isReactNativeBlob: Ds,
    isReactNative: Os,
    isBlob: ks,
    isRegExp: ac,
    isFunction: ys,
    isStream: js,
    isURLSearchParams: Is,
    isTypedArray: $s,
    isFileList: As,
    forEach: Hs,
    merge: Ks,
    extend: qs,
    trim: Vs,
    stripBOM: Js,
    inherits: Ys,
    toFlatObject: Xs,
    kindOf: us,
    kindOfTest: ds,
    endsWith: Zs,
    toArray: Qs,
    forEachEntry: ec,
    matchAll: tc,
    isHTMLForm: nc,
    hasOwnProperty: ss,
    hasOwnProp: ss,
    hasOwnInPrototypeChain: cs,
    getSafeProp: ls,
    reduceDescriptors: oc,
    freezeMethods: sc,
    toObjectSet: cc,
    toCamelCase: rc,
    noop: lc,
    toFiniteNumber: uc,
    findKey: Us,
    global: Ws,
    isContextDefined: Gs,
    isSpecCompliantForm: dc,
    toJSONObject: fc,
    isAsyncFn: pc,
    isThenable: mc,
    setImmediate: hc,
    asap: gc,
    isIterable: _c,
    isSafeIterable: (e) => e != null && cs(e, as) && _c(e),
  },
  vc = U.toObjectSet([
    `age`,
    `authorization`,
    `content-length`,
    `content-type`,
    `etag`,
    `expires`,
    `from`,
    `host`,
    `if-modified-since`,
    `if-unmodified-since`,
    `last-modified`,
    `location`,
    `max-forwards`,
    `proxy-authorization`,
    `referer`,
    `retry-after`,
    `user-agent`,
  ]),
  yc = (e) => {
    let t = {},
      n,
      r,
      i;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (e) {
            ((i = e.indexOf(`:`)),
              (n = e.substring(0, i).trim().toLowerCase()),
              (r = e.substring(i + 1).trim()),
              !(!n || (t[n] && vc[n])) &&
                (n === `set-cookie`
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + `, ` + r : r)));
          }),
      t
    );
  };
function W(e) {
  let t = 0,
    n = e.length;
  for (; t < n; ) {
    let n = e.charCodeAt(t);
    if (n !== 9 && n !== 32) break;
    t += 1;
  }
  for (; n > t; ) {
    let t = e.charCodeAt(n - 1);
    if (t !== 9 && t !== 32) break;
    --n;
  }
  return t === 0 && n === e.length ? e : e.slice(t, n);
}
var bc = RegExp(`[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+`, `g`),
  xc = RegExp(`[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+`, `g`);
function Sc(e, t) {
  return U.isArray(e) ? e.map((e) => Sc(e, t)) : W(String(e).replace(t, ``));
}
var Cc = (e) => Sc(e, bc),
  wc = (e) => Sc(e, xc);
function Tc(e) {
  let t = Object.create(null);
  return (
    U.forEach(e.toJSON(), (e, n) => {
      t[n] = wc(e);
    }),
    t
  );
}
var Ec = Symbol(`internals`);
function Dc(e) {
  return e && String(e).trim().toLowerCase();
}
function Oc(e) {
  return e === !1 || e == null ? e : U.isArray(e) ? e.map(Oc) : Cc(String(e));
}
function kc(e) {
  let t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,
    r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
var Ac = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function jc(e, t, n, r, i) {
  if (U.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), U.isString(t))) {
    if (U.isString(r)) return t.indexOf(r) !== -1;
    if (U.isRegExp(r)) return r.test(t);
  }
}
function Mc(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function Nc(e, t) {
  let n = U.toCamelCase(` ` + t);
  [`get`, `set`, `has`].forEach((r) => {
    Object.defineProperty(e, r + n, {
      __proto__: null,
      value: function (e, n, i) {
        return this[r].call(this, t, e, n, i);
      },
      configurable: !0,
    });
  });
}
var G = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, n) {
    let r = this;
    function i(e, t, n) {
      let i = Dc(t);
      if (!i) return;
      let a = U.findKey(r, i);
      (!a || r[a] === void 0 || n === !0 || (n === void 0 && r[a] !== !1)) &&
        (r[a || t] = Oc(e));
    }
    let a = (e, t) => U.forEach(e, (e, n) => i(e, n, t));
    if (U.isPlainObject(e) || e instanceof this.constructor) a(e, t);
    else if (U.isString(e) && (e = e.trim()) && !Ac(e)) a(yc(e), t);
    else if (U.isObject(e) && U.isSafeIterable(e)) {
      let n = Object.create(null),
        r,
        i;
      for (let t of e) {
        if (!U.isArray(t))
          throw TypeError(`Object iterator must return a key-value pair`);
        ((i = t[0]),
          U.hasOwnProp(n, i)
            ? ((r = n[i]), (n[i] = U.isArray(r) ? [...r, t[1]] : [r, t[1]]))
            : (n[i] = t[1]));
      }
      a(n, t);
    } else e != null && i(t, e, n);
    return this;
  }
  get(e, t) {
    if (((e = Dc(e)), e)) {
      let n = U.findKey(this, e);
      if (n) {
        let e = this[n];
        if (!t) return e;
        if (t === !0) return kc(e);
        if (U.isFunction(t)) return t.call(this, e, n);
        if (U.isRegExp(t)) return t.exec(e);
        throw TypeError(`parser must be boolean|regexp|function`);
      }
    }
  }
  has(e, t) {
    if (((e = Dc(e)), e)) {
      let n = U.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!t || jc(this, this[n], n, t)));
    }
    return !1;
  }
  delete(e, t) {
    let n = this,
      r = !1;
    function i(e) {
      if (((e = Dc(e)), e)) {
        let i = U.findKey(n, e);
        i && (!t || jc(n, n[i], i, t)) && (delete n[i], (r = !0));
      }
    }
    return (U.isArray(e) ? e.forEach(i) : i(e), r);
  }
  clear(e) {
    let t = Object.keys(this),
      n = t.length,
      r = !1;
    for (; n--; ) {
      let i = t[n];
      (!e || jc(this, this[i], i, e, !0)) && (delete this[i], (r = !0));
    }
    return r;
  }
  normalize(e) {
    let t = this,
      n = {};
    return (
      U.forEach(this, (r, i) => {
        let a = U.findKey(n, i);
        if (a) {
          ((t[a] = Oc(r)), delete t[i]);
          return;
        }
        let o = e ? Mc(i) : String(i).trim();
        (o !== i && delete t[i], (t[o] = Oc(r)), (n[o] = !0));
      }),
      this
    );
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    let t = Object.create(null);
    return (
      U.forEach(this, (n, r) => {
        n != null && n !== !1 && (t[r] = e && U.isArray(n) ? n.join(`, `) : n);
      }),
      t
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, t]) => e + `: ` + t).join(`
`);
  }
  getSetCookie() {
    return this.get(`set-cookie`) || [];
  }
  get [Symbol.toStringTag]() {
    return `AxiosHeaders`;
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...t) {
    let n = new this(e);
    return (t.forEach((e) => n.set(e)), n);
  }
  static accessor(e) {
    let t = (this[Ec] = this[Ec] =
        {
          accessors: {},
        }).accessors,
      n = this.prototype;
    function r(e) {
      let r = Dc(e);
      t[r] || (Nc(n, e), (t[r] = !0));
    }
    return (U.isArray(e) ? e.forEach(r) : r(e), this);
  }
};
(G.accessor([
  `Content-Type`,
  `Content-Length`,
  `Accept`,
  `Accept-Encoding`,
  `User-Agent`,
  `Authorization`,
]),
  U.reduceDescriptors(G.prototype, ({ value: e }, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
      get: () => e,
      set(e) {
        this[n] = e;
      },
    };
  }),
  U.freezeMethods(G));
var Pc = `[REDACTED ****]`;
function Fc(e) {
  if (U.hasOwnProp(e, `toJSON`)) return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (U.hasOwnProp(t, `toJSON`)) return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function Ic(e, t) {
  let n = new Set(t.map((e) => String(e).toLowerCase())),
    r = [],
    i = (e) => {
      if (typeof e != `object` || !e || U.isBuffer(e)) return e;
      if (r.indexOf(e) !== -1) return;
      (e instanceof G && (e = e.toJSON()), r.push(e));
      let t;
      if (U.isArray(e))
        ((t = []),
          e.forEach((e, n) => {
            let r = i(e);
            U.isUndefined(r) || (t[n] = r);
          }));
      else {
        if (!U.isPlainObject(e) && Fc(e)) return (r.pop(), e);
        t = Object.create(null);
        for (let [r, a] of Object.entries(e)) {
          let e = n.has(r.toLowerCase()) ? Pc : i(a);
          U.isUndefined(e) || (t[r] = e);
        }
      }
      return (r.pop(), t);
    };
  return i(e);
}
var K = class e extends Error {
  static from(t, n, r, i, a, o) {
    let s = new e(t.message, n || t.code, r, i, a);
    return (
      Object.defineProperty(s, "cause", {
        __proto__: null,
        value: t,
        writable: !0,
        enumerable: !1,
        configurable: !0,
      }),
      (s.name = t.name),
      t.status != null && s.status == null && (s.status = t.status),
      o && Object.assign(s, o),
      s
    );
  }
  constructor(e, t, n, r, i) {
    (super(e),
      Object.defineProperty(this, "message", {
        __proto__: null,
        value: e,
        enumerable: !0,
        writable: !0,
        configurable: !0,
      }),
      (this.name = `AxiosError`),
      (this.isAxiosError = !0),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      i && ((this.response = i), (this.status = i.status)));
  }
  toJSON() {
    let e = this.config,
      t = e && U.hasOwnProp(e, `redact`) ? e.redact : void 0,
      n = U.isArray(t) && t.length > 0 ? Ic(e, t) : U.toJSONObject(e);
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: n,
      code: this.code,
      status: this.status,
    };
  }
};
((K.ERR_BAD_OPTION_VALUE = `ERR_BAD_OPTION_VALUE`),
  (K.ERR_BAD_OPTION = `ERR_BAD_OPTION`),
  (K.ECONNABORTED = `ECONNABORTED`),
  (K.ETIMEDOUT = `ETIMEDOUT`),
  (K.ECONNREFUSED = `ECONNREFUSED`),
  (K.ERR_NETWORK = `ERR_NETWORK`),
  (K.ERR_FR_TOO_MANY_REDIRECTS = `ERR_FR_TOO_MANY_REDIRECTS`),
  (K.ERR_DEPRECATED = `ERR_DEPRECATED`),
  (K.ERR_BAD_RESPONSE = `ERR_BAD_RESPONSE`),
  (K.ERR_BAD_REQUEST = `ERR_BAD_REQUEST`),
  (K.ERR_CANCELED = `ERR_CANCELED`),
  (K.ERR_NOT_SUPPORT = `ERR_NOT_SUPPORT`),
  (K.ERR_INVALID_URL = `ERR_INVALID_URL`),
  (K.ERR_FORM_DATA_DEPTH_EXCEEDED = `ERR_FORM_DATA_DEPTH_EXCEEDED`));
function Lc(e) {
  return U.isPlainObject(e) || U.isArray(e);
}
function Rc(e) {
  return U.endsWith(e, `[]`) ? e.slice(0, -2) : e;
}
function zc(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (e, t) {
          return ((e = Rc(e)), !n && t ? `[` + e + `]` : e);
        })
        .join(n ? `.` : ``)
    : t;
}
function Bc(e) {
  return U.isArray(e) && !e.some(Lc);
}
var Vc = U.toFlatObject(U, {}, null, function (e) {
  return /^is[A-Z]/.test(e);
});
function Hc(e, t, n) {
  if (!U.isObject(e)) throw TypeError(`target must be an object`);
  ((t ||= new FormData()),
    (n = U.toFlatObject(
      n,
      {
        metaTokens: !0,
        dots: !1,
        indexes: !1,
      },
      !1,
      function (e, t) {
        return !U.isUndefined(t[e]);
      },
    )));
  let r = n.metaTokens,
    i = n.visitor || m,
    a = n.dots,
    o = n.indexes,
    s = n.Blob || (typeof Blob < `u` && Blob),
    c = n.maxDepth === void 0 ? 100 : n.maxDepth,
    l = s && U.isSpecCompliantForm(t),
    u = [];
  if (!U.isFunction(i)) throw TypeError(`visitor must be a function`);
  function d(e) {
    if (e === null) return ``;
    if (U.isDate(e)) return e.toISOString();
    if (U.isBoolean(e)) return e.toString();
    if (!l && U.isBlob(e))
      throw new K(`Blob is not supported. Use a Buffer instead.`);
    if (U.isArrayBuffer(e) || U.isTypedArray(e)) {
      if (l && typeof s == `function`) return new s([e]);
      if (typeof Buffer < `u`) return Buffer.from(e);
      throw new K(
        `Blob is not supported. Use a Buffer instead.`,
        K.ERR_NOT_SUPPORT,
      );
    }
    return e;
  }
  function f(e) {
    if (e > c)
      throw new K(
        `Object is too deeply nested (` + e + ` levels). Max depth: ` + c,
        K.ERR_FORM_DATA_DEPTH_EXCEEDED,
      );
  }
  function p(e, t) {
    if (c === 1 / 0) return JSON.stringify(e);
    let n = [];
    return JSON.stringify(e, function (e, r) {
      if (!U.isObject(r)) return r;
      for (; n.length && n[n.length - 1] !== this; ) n.pop();
      return (n.push(r), f(t + n.length - 1), r);
    });
  }
  function m(e, n, i) {
    let s = e;
    if (U.isReactNative(t) && U.isReactNativeBlob(e))
      return (t.append(zc(i, n, a), d(e)), !1);
    if (e && !i && typeof e == `object`) {
      if (U.endsWith(n, `{}`)) ((n = r ? n : n.slice(0, -2)), (e = p(e, 1)));
      else if (
        (U.isArray(e) && Bc(e)) ||
        ((U.isFileList(e) || U.endsWith(n, `[]`)) && (s = U.toArray(e)))
      )
        return (
          (n = Rc(n)),
          s.forEach(function (e, r) {
            !(U.isUndefined(e) || e === null) &&
              t.append(
                o === !0 ? zc([n], r, a) : o === null ? n : n + `[]`,
                d(e),
              );
          }),
          !1
        );
    }
    return Lc(e) ? !0 : (t.append(zc(i, n, a), d(e)), !1);
  }
  let h = Object.assign(Vc, {
    defaultVisitor: m,
    convertValue: d,
    isVisitable: Lc,
  });
  function g(e, n, r = 0) {
    if (!U.isUndefined(e)) {
      if ((f(r), u.indexOf(e) !== -1))
        throw Error(`Circular reference detected in ` + n.join(`.`));
      (u.push(e),
        U.forEach(e, function (e, a) {
          (!(U.isUndefined(e) || e === null) &&
            i.call(t, e, U.isString(a) ? a.trim() : a, n, h)) === !0 &&
            g(e, n ? n.concat(a) : [a], r + 1);
        }),
        u.pop());
    }
  }
  if (!U.isObject(e)) throw TypeError(`data must be an object`);
  return (g(e), t);
}
function Uc(e) {
  let t = {
    "!": `%21`,
    "'": `%27`,
    "(": `%28`,
    ")": `%29`,
    "~": `%7E`,
    "%20": `+`,
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function (e) {
    return t[e];
  });
}
function Wc(e, t) {
  ((this._pairs = []), e && Hc(e, this, t));
}
var Gc = Wc.prototype;
((Gc.append = function (e, t) {
  this._pairs.push([e, t]);
}),
  (Gc.toString = function (e) {
    let t = e ? (t) => e.call(this, t, Uc) : Uc;
    return this._pairs
      .map(function (e) {
        return t(e[0]) + `=` + t(e[1]);
      }, ``)
      .join(`&`);
  }));
function Kc(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, `:`)
    .replace(/%24/g, `$`)
    .replace(/%2C/gi, `,`)
    .replace(/%20/g, `+`);
}
function q(e, t, n) {
  if (!t) return e;
  e ||= ``;
  let r = U.isFunction(n)
      ? {
          serialize: n,
        }
      : n,
    i = U.getSafeProp(r, `encode`) || Kc,
    a = U.getSafeProp(r, `serialize`),
    o;
  if (
    ((o = a
      ? a(t, r)
      : U.isURLSearchParams(t)
        ? t.toString()
        : new Wc(t, r).toString(i)),
    o)
  ) {
    let t = e.indexOf(`#`);
    (t !== -1 && (e = e.slice(0, t)),
      (e += (e.indexOf(`?`) === -1 ? `?` : `&`) + o));
  }
  return e;
}
var qc = class {
    constructor() {
      this.handlers = [];
    }
    use(e, t, n) {
      return (
        this.handlers.push({
          fulfilled: e,
          rejected: t,
          synchronous: n ? n.synchronous : !1,
          runWhen: n ? n.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }
    eject(e) {
      this.handlers[e] && (this.handlers[e] = null);
    }
    clear() {
      this.handlers &&= [];
    }
    forEach(e) {
      U.forEach(this.handlers, function (t) {
        t !== null && e(t);
      });
    }
  },
  Jc = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0,
    advertiseZstdAcceptEncoding: !1,
    validateStatusUndefinedResolves: !0,
  },
  Yc = {
    isBrowser: !0,
    classes: {
      URLSearchParams: typeof URLSearchParams < `u` ? URLSearchParams : Wc,
      FormData: typeof FormData < `u` ? FormData : null,
      Blob: typeof Blob < `u` ? Blob : null,
    },
    protocols: [`http`, `https`, `file`, `blob`, `url`, `data`],
  },
  Xc = e({
    hasBrowserEnv: () => Zc,
    hasStandardBrowserEnv: () => $c,
    hasStandardBrowserWebWorkerEnv: () => el,
    navigator: () => Qc,
    origin: () => tl,
  }),
  Zc = typeof window < `u` && typeof document < `u`,
  Qc = (typeof navigator == `object` && navigator) || void 0,
  $c =
    Zc &&
    (!Qc || [`ReactNative`, `NativeScript`, `NS`].indexOf(Qc.product) < 0),
  el =
    typeof WorkerGlobalScope < `u` &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == `function`,
  tl = (Zc && window.location.href) || `http://localhost`,
  nl = {
    ...Xc,
    ...Yc,
  };
function rl(e, t) {
  return Hc(e, new nl.classes.URLSearchParams(), {
    visitor: function (e, t, n, r) {
      return nl.isNode && U.isBuffer(e)
        ? (this.append(t, e.toString(`base64`)), !1)
        : r.defaultVisitor.apply(this, arguments);
    },
    ...t,
  });
}
var il = 100;
function al(e) {
  if (e > il)
    throw new K(
      `FormData field is too deeply nested (` +
        e +
        ` levels). Max depth: ` +
        il,
      K.ERR_FORM_DATA_DEPTH_EXCEEDED,
    );
}
function ol(e) {
  let t = [],
    n = /\w+|\[(\w*)]/g,
    r;
  for (; (r = n.exec(e)) !== null; )
    (al(t.length), t.push(r[0] === `[]` ? `` : r[1] || r[0]));
  return t;
}
function sl(e) {
  let t = {},
    n = Object.keys(e),
    r,
    i = n.length,
    a;
  for (r = 0; r < i; r++) ((a = n[r]), (t[a] = e[a]));
  return t;
}
function cl(e) {
  function t(e, n, r, i) {
    al(i);
    let a = e[i++];
    if (a === `__proto__`) return !0;
    let o = Number.isFinite(+a),
      s = i >= e.length;
    return (
      (a = !a && U.isArray(r) ? r.length : a),
      s
        ? (U.hasOwnProp(r, a)
            ? (r[a] = U.isArray(r[a]) ? r[a].concat(n) : [r[a], n])
            : (r[a] = n),
          !o)
        : ((!U.hasOwnProp(r, a) || !U.isObject(r[a])) && (r[a] = []),
          t(e, n, r[a], i) && U.isArray(r[a]) && (r[a] = sl(r[a])),
          !o)
    );
  }
  if (U.isFormData(e) && U.isFunction(e.entries)) {
    let n = {};
    return (
      U.forEachEntry(e, (e, r) => {
        t(ol(e), r, n, 0);
      }),
      n
    );
  }
  return null;
}
var ll = (e, t) => (e != null && U.hasOwnProp(e, t) ? e[t] : void 0);
function ul(e, t, n) {
  if (U.isString(e))
    try {
      return ((t || JSON.parse)(e), U.trim(e));
    } catch (e) {
      if (e.name !== `SyntaxError`) throw e;
    }
  return (n || JSON.stringify)(e);
}
var dl = {
  transitional: Jc,
  adapter: [`xhr`, `http`, `fetch`],
  transformRequest: [
    function (e, t) {
      let n = t.getContentType() || ``,
        r = n.indexOf(`application/json`) > -1,
        i = U.isObject(e);
      if ((i && U.isHTMLForm(e) && (e = new FormData(e)), U.isFormData(e)))
        return r ? JSON.stringify(cl(e)) : e;
      if (
        U.isArrayBuffer(e) ||
        U.isBuffer(e) ||
        U.isStream(e) ||
        U.isFile(e) ||
        U.isBlob(e) ||
        U.isReadableStream(e)
      )
        return e;
      if (U.isArrayBufferView(e)) return e.buffer;
      if (U.isURLSearchParams(e))
        return (
          t.setContentType(
            `application/x-www-form-urlencoded;charset=utf-8`,
            !1,
          ),
          e.toString()
        );
      let a;
      if (i) {
        let t = ll(this, `formSerializer`);
        if (n.indexOf(`application/x-www-form-urlencoded`) > -1)
          return rl(e, t).toString();
        if ((a = U.isFileList(e)) || n.indexOf(`multipart/form-data`) > -1) {
          let n = ll(this, `env`),
            r = n && n.FormData;
          return Hc(
            a
              ? {
                  "files[]": e,
                }
              : e,
            r && new r(),
            t,
          );
        }
      }
      return i || r ? (t.setContentType(`application/json`, !1), ul(e)) : e;
    },
  ],
  transformResponse: [
    function (e) {
      let t = ll(this, `transitional`) || dl.transitional,
        n = t && t.forcedJSONParsing,
        r = ll(this, `responseType`),
        i = r === `json`;
      if (U.isResponse(e) || U.isReadableStream(e)) return e;
      if (e && U.isString(e) && ((n && !r) || i)) {
        let n = !(t && t.silentJSONParsing) && i;
        try {
          return JSON.parse(e, ll(this, `parseReviver`));
        } catch (e) {
          if (n)
            throw e.name === `SyntaxError`
              ? K.from(e, K.ERR_BAD_RESPONSE, this, null, ll(this, `response`))
              : e;
        }
      }
      return e;
    },
  ],
  timeout: 0,
  xsrfCookieName: `XSRF-TOKEN`,
  xsrfHeaderName: `X-XSRF-TOKEN`,
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: nl.classes.FormData,
    Blob: nl.classes.Blob,
  },
  validateStatus: function (e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: `application/json, text/plain, */*`,
      "Content-Type": void 0,
    },
  },
};
U.forEach([`delete`, `get`, `head`, `post`, `put`, `patch`, `query`], (e) => {
  dl.headers[e] = {};
});
function fl(e, t) {
  let n = this || dl,
    r = t || n,
    i = G.from(r.headers),
    a = r.data;
  return (
    U.forEach(e, function (e) {
      a = e.call(n, a, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    a
  );
}
function pl(e) {
  return !!(e && e.__CANCEL__);
}
var ml = class extends K {
  constructor(e, t, n) {
    (super(e ?? `canceled`, K.ERR_CANCELED, t, n),
      (this.name = `CanceledError`),
      (this.__CANCEL__ = !0));
  }
};
function hl(e, t, n) {
  let r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new K(
          `Request failed with status code ` + n.status,
          n.status >= 400 && n.status < 500
            ? K.ERR_BAD_REQUEST
            : K.ERR_BAD_RESPONSE,
          n.config,
          n.request,
          n,
        ),
      );
}
function gl(e) {
  let t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return (t && t[1]) || ``;
}
function _l(e, t) {
  e ||= 10;
  let n = Array(e),
    r = Array(e),
    i = 0,
    a = 0,
    o;
  return (
    (t = t === void 0 ? 1e3 : t),
    function (s) {
      let c = Date.now(),
        l = r[a];
      ((o ||= c), (n[i] = s), (r[i] = c));
      let u = a,
        d = 0;
      for (; u !== i; ) ((d += n[u++]), (u %= e));
      if (((i = (i + 1) % e), i === a && (a = (a + 1) % e), c - o < t)) return;
      let f = l && c - l;
      return f ? Math.round((d * 1e3) / f) : void 0;
    }
  );
}
function vl(e, t) {
  let n = 0,
    r = 1e3 / t,
    i,
    a,
    o = (t, r = Date.now()) => {
      ((n = r), (i = null), (a &&= (clearTimeout(a), null)), e(...t));
    };
  return [
    (...e) => {
      let t = Date.now(),
        s = t - n;
      s >= r
        ? o(e, t)
        : ((i = e),
          (a ||= setTimeout(() => {
            ((a = null), o(i));
          }, r - s)));
    },
    () => i && o(i),
  ];
}
var yl = (e, t, n = 3) => {
    let r = 0,
      i = _l(50, 250);
    return vl((n) => {
      if (!n || typeof n.loaded != `number`) return;
      let a = n.loaded,
        o = n.lengthComputable ? n.total : void 0,
        s = o == null ? a : Math.min(a, o),
        c = Math.max(0, s - r),
        l = i(c);
      ((r = Math.max(r, s)),
        e({
          loaded: s,
          total: o,
          progress: o ? s / o : void 0,
          bytes: c,
          rate: l || void 0,
          estimated: l && o ? (o - s) / l : void 0,
          event: n,
          lengthComputable: o != null,
          [t ? `download` : `upload`]: !0,
        }));
    }, n);
  },
  bl = (e, t) => {
    let n = e != null;
    return [
      (r) =>
        t[0]({
          lengthComputable: n,
          total: e,
          loaded: r,
        }),
      t[1],
    ];
  },
  xl =
    (e) =>
    (...t) =>
      U.asap(() => e(...t)),
  Sl = nl.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, nl.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(nl.origin),
        nl.navigator && /(msie|trident)/i.test(nl.navigator.userAgent),
      )
    : () => !0,
  Cl = nl.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, i, a, o) {
          if (typeof document > `u`) return;
          let s = [`${e}=${encodeURIComponent(t)}`];
          (U.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`),
            U.isString(r) && s.push(`path=${r}`),
            U.isString(i) && s.push(`domain=${i}`),
            a === !0 && s.push(`secure`),
            U.isString(o) && s.push(`SameSite=${o}`),
            (document.cookie = s.join(`; `)));
        },
        read(e) {
          if (typeof document > `u`) return null;
          let t = document.cookie.split(`;`);
          for (let n = 0; n < t.length; n++) {
            let r = t[n].replace(/^\s+/, ``),
              i = r.indexOf(`=`);
            if (i !== -1 && r.slice(0, i) === e)
              try {
                return decodeURIComponent(r.slice(i + 1));
              } catch {
                return r.slice(i + 1);
              }
          }
          return null;
        },
        remove(e) {
          this.write(e, ``, Date.now() - 864e5, `/`);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function wl(e) {
  return typeof e == `string` && /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Tl(e, t) {
  return t ? e.replace(/\/?\/$/, ``) + `/` + t.replace(/^\/+/, ``) : e;
}
var El = /^https?:(?!\/\/)/i,
  Dl = /[\t\n\r]/g;
function Ol(e) {
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; ) t++;
  return e.slice(t);
}
function kl(e) {
  return Ol(e).replace(Dl, ``);
}
function Al(e, t) {
  if (typeof e == `string` && El.test(kl(e)))
    throw new K(
      `Invalid URL: missing "//" after protocol`,
      K.ERR_INVALID_URL,
      t,
    );
}
function jl(e, t, n, r) {
  Al(t, r);
  let i = !wl(t);
  return e && (i || n === !1) ? (Al(e, r), Tl(e, t)) : t;
}
var Ml = (e) =>
  e instanceof G
    ? {
        ...e,
      }
    : e;
function Nl(e, t) {
  ((e ||= {}), (t ||= {}));
  let n = Object.create(null);
  Object.defineProperty(n, "hasOwnProperty", {
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0,
  });
  function r(e, t, n, r) {
    return U.isPlainObject(e) && U.isPlainObject(t)
      ? U.merge.call(
          {
            caseless: r,
          },
          e,
          t,
        )
      : U.isPlainObject(t)
        ? U.merge({}, t)
        : U.isArray(t)
          ? t.slice()
          : t;
  }
  function i(e, t, n, i) {
    if (!U.isUndefined(t)) return r(e, t, n, i);
    if (!U.isUndefined(e)) return r(void 0, e, n, i);
  }
  function a(e, t) {
    if (!U.isUndefined(t)) return r(void 0, t);
  }
  function o(e, t) {
    if (!U.isUndefined(t)) return r(void 0, t);
    if (!U.isUndefined(e)) return r(void 0, e);
  }
  function s(n) {
    let r = U.hasOwnProp(t, `transitional`) ? t.transitional : void 0;
    if (!U.isUndefined(r))
      if (U.isPlainObject(r)) {
        if (U.hasOwnProp(r, n)) return r[n];
      } else return;
    let i = U.hasOwnProp(e, `transitional`) ? e.transitional : void 0;
    if (U.isPlainObject(i) && U.hasOwnProp(i, n)) return i[n];
  }
  function c(n, i, a) {
    if (U.hasOwnProp(t, a)) return r(n, i);
    if (U.hasOwnProp(e, a)) return r(void 0, n);
  }
  let l = {
    url: a,
    method: a,
    data: a,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    allowedSocketPaths: o,
    responseEncoding: o,
    validateStatus: c,
    headers: (e, t, n) => i(Ml(e), Ml(t), n, !0),
  };
  return (
    U.forEach(
      Object.keys({
        ...e,
        ...t,
      }),
      function (r) {
        if (r === `__proto__` || r === `constructor` || r === `prototype`)
          return;
        let a = U.hasOwnProp(l, r) ? l[r] : i,
          o = a(
            U.hasOwnProp(e, r) ? e[r] : void 0,
            U.hasOwnProp(t, r) ? t[r] : void 0,
            r,
          );
        (U.isUndefined(o) && a !== c) || (n[r] = o);
      },
    ),
    U.hasOwnProp(t, `validateStatus`) &&
      U.isUndefined(t.validateStatus) &&
      s(`validateStatusUndefinedResolves`) === !1 &&
      (U.hasOwnProp(e, `validateStatus`)
        ? (n.validateStatus = r(void 0, e.validateStatus))
        : delete n.validateStatus),
    n
  );
}
var Pl = [`content-type`, `content-length`];
function Fl(e, t, n) {
  if (n !== `content-only`) {
    e.set(t);
    return;
  }
  Object.entries(t || {}).forEach(([t, n]) => {
    Pl.includes(t.toLowerCase()) && e.set(t, n);
  });
}
var Il = (e) =>
  encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) =>
    String.fromCharCode(parseInt(t, 16)),
  );
function Ll(e) {
  let t = Nl({}, e),
    n = (e) => (U.hasOwnProp(t, e) ? t[e] : void 0),
    r = n(`data`),
    i = n(`withXSRFToken`),
    a = n(`xsrfHeaderName`),
    o = n(`xsrfCookieName`),
    s = n(`headers`),
    c = n(`auth`),
    l = n(`baseURL`),
    u = n(`allowAbsoluteUrls`),
    d = n(`url`);
  if (
    ((t.headers = s = G.from(s)),
    (t.url = q(jl(l, d, u, t), n(`params`), n(`paramsSerializer`))),
    c)
  ) {
    let t = U.getSafeProp(c, `username`) || ``,
      n = U.getSafeProp(c, `password`) || ``;
    try {
      s.set(`Authorization`, `Basic ` + btoa(t + `:` + (n ? Il(n) : ``)));
    } catch (t) {
      throw K.from(t, K.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (
    (U.isFormData(r) &&
      (nl.hasStandardBrowserEnv ||
      nl.hasStandardBrowserWebWorkerEnv ||
      U.isReactNative(r)
        ? s.setContentType(void 0)
        : U.isFunction(r.getHeaders) &&
          Fl(s, r.getHeaders(), n(`formDataHeaderPolicy`))),
    nl.hasStandardBrowserEnv &&
      (U.isFunction(i) && (i = i(t)), i === !0 || (i == null && Sl(t.url))))
  ) {
    let e = a && o && Cl.read(o);
    e && s.set(a, e);
  }
  return t;
}
var Rl =
    typeof XMLHttpRequest < `u` &&
    function (e) {
      return new Promise(function (t, n) {
        let r = Ll(e),
          i = r.data,
          a = G.from(r.headers).normalize(),
          { responseType: o, onUploadProgress: s, onDownloadProgress: c } = r,
          l,
          u,
          d,
          f,
          p;
        function m() {
          (f && f(),
            p && p(),
            r.cancelToken && r.cancelToken.unsubscribe(l),
            r.signal && r.signal.removeEventListener(`abort`, l));
        }
        let h = new XMLHttpRequest();
        (h.open(r.method.toUpperCase(), r.url, !0), (h.timeout = r.timeout));
        function g() {
          if (!h) return;
          let r = G.from(
            `getAllResponseHeaders` in h && h.getAllResponseHeaders(),
          );
          (hl(
            function (e) {
              (t(e), m());
            },
            function (e) {
              (n(e), m());
            },
            {
              data:
                !o || o === `text` || o === `json`
                  ? h.responseText
                  : h.response,
              status: h.status,
              statusText: h.statusText,
              headers: r,
              config: e,
              request: h,
            },
          ),
            (h = null));
        }
        (`onloadend` in h
          ? (h.onloadend = g)
          : (h.onreadystatechange = function () {
              !h ||
                h.readyState !== 4 ||
                (h.status === 0 &&
                  !(h.responseURL && h.responseURL.startsWith(`file:`))) ||
                setTimeout(g);
            }),
          (h.onabort = function () {
            h &&=
              (n(new K(`Request aborted`, K.ECONNABORTED, e, h)), m(), null);
          }),
          (h.onerror = function (t) {
            let r = new K(
              t && t.message ? t.message : `Network Error`,
              K.ERR_NETWORK,
              e,
              h,
            );
            ((r.event = t || null), n(r), m(), (h = null));
          }),
          (h.ontimeout = function () {
            let t = r.timeout
                ? `timeout of ` + r.timeout + `ms exceeded`
                : `timeout exceeded`,
              i = r.transitional || Jc;
            (r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
              n(
                new K(
                  t,
                  i.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED,
                  e,
                  h,
                ),
              ),
              m(),
              (h = null));
          }),
          i === void 0 && a.setContentType(null),
          `setRequestHeader` in h &&
            U.forEach(Tc(a), function (e, t) {
              h.setRequestHeader(t, e);
            }),
          U.isUndefined(r.withCredentials) ||
            (h.withCredentials = !!r.withCredentials),
          o && o !== `json` && (h.responseType = r.responseType),
          c && (([d, p] = yl(c, !0)), h.addEventListener(`progress`, d)),
          s &&
            h.upload &&
            (([u, f] = yl(s)),
            h.upload.addEventListener(`progress`, u),
            h.upload.addEventListener(`loadend`, f)),
          (r.cancelToken || r.signal) &&
            ((l = (t) => {
              h &&=
                (n(!t || t.type ? new ml(null, e, h) : t),
                h.abort(),
                m(),
                null);
            }),
            r.cancelToken && r.cancelToken.subscribe(l),
            r.signal &&
              (r.signal.aborted
                ? l()
                : r.signal.addEventListener(`abort`, l))));
        let _ = gl(r.url);
        if (_ && !nl.protocols.includes(_)) {
          (n(new K(`Unsupported protocol ` + _ + `:`, K.ERR_BAD_REQUEST, e)),
            m());
          return;
        }
        h.send(i || null);
      });
    },
  zl = (e, t) => {
    if (((e = e ? e.filter(Boolean) : []), !t && !e.length)) return;
    let n = new AbortController(),
      r = !1,
      i = function (e) {
        if (!r) {
          ((r = !0), o());
          let t = e instanceof Error ? e : this.reason;
          n.abort(
            t instanceof K ? t : new ml(t instanceof Error ? t.message : t),
          );
        }
      },
      a =
        t &&
        setTimeout(() => {
          ((a = null), i(new K(`timeout of ${t}ms exceeded`, K.ETIMEDOUT)));
        }, t),
      o = () => {
        e &&=
          (a && clearTimeout(a),
          (a = null),
          e.forEach((e) => {
            e.unsubscribe
              ? e.unsubscribe(i)
              : e.removeEventListener(`abort`, i);
          }),
          null);
      };
    e.forEach((e) =>
      e.addEventListener(`abort`, i, {
        once: !0,
      }),
    );
    let { signal: s } = n;
    return ((s.unsubscribe = () => U.asap(o)), s);
  },
  Bl = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      i;
    for (; r < n; ) ((i = r + t), yield e.slice(r, i), (r = i));
  },
  Vl = async function* (e, t) {
    for await (let n of Hl(e)) yield* Bl(n, t);
  },
  Hl = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    let t = e.getReader();
    try {
      for (;;) {
        let { done: e, value: n } = await t.read();
        if (e) break;
        yield n;
      }
    } finally {
      await t.cancel();
    }
  },
  Ul = (e, t, n, r) => {
    let i = Vl(e, t),
      a = 0,
      o,
      s = (e) => {
        o || ((o = !0), r && r(e));
      };
    return new ReadableStream(
      {
        async pull(e) {
          try {
            let { done: t, value: r } = await i.next();
            if (t) {
              (s(), e.close());
              return;
            }
            let o = r.byteLength;
            (n && n((a += o)), e.enqueue(new Uint8Array(r)));
          } catch (e) {
            throw (s(e), e);
          }
        },
        cancel(e) {
          return (s(e), i.return());
        },
      },
      {
        highWaterMark: 2,
      },
    );
  },
  J = (e) =>
    (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102),
  Wl = (e, t, n) =>
    t + 2 < n && J(e.charCodeAt(t + 1)) && J(e.charCodeAt(t + 2));
function Gl(e) {
  if (!e || typeof e != `string` || !e.startsWith(`data:`)) return 0;
  let t = e.indexOf(`,`);
  if (t < 0) return 0;
  let n = e.slice(5, t),
    r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let e = r.length,
      t = r.length;
    for (let n = 0; n < t; n++)
      if (r.charCodeAt(n) === 37 && n + 2 < t) {
        let t = r.charCodeAt(n + 1),
          i = r.charCodeAt(n + 2);
        J(t) && J(i) && ((e -= 2), (n += 2));
      }
    let n = 0,
      i = t - 1,
      a = (e) =>
        e >= 2 &&
        r.charCodeAt(e - 2) === 37 &&
        r.charCodeAt(e - 1) === 51 &&
        (r.charCodeAt(e) === 68 || r.charCodeAt(e) === 100);
    (i >= 0 && (r.charCodeAt(i) === 61 ? (n++, i--) : a(i) && (n++, (i -= 3))),
      n === 1 && i >= 0 && (r.charCodeAt(i) === 61 || a(i)) && n++);
    let o = Math.floor(e / 4) * 3 - (n || 0);
    return o > 0 ? o : 0;
  }
  let i = 0;
  for (let e = 0, t = r.length; e < t; e++) {
    let n = r.charCodeAt(e);
    if (n === 37 && Wl(r, e, t)) ((i += 1), (e += 2));
    else if (n < 128) i += 1;
    else if (n < 2048) i += 2;
    else if (n >= 55296 && n <= 56319 && e + 1 < t) {
      let t = r.charCodeAt(e + 1);
      t >= 56320 && t <= 57343 ? ((i += 4), e++) : (i += 3);
    } else i += 3;
  }
  return i;
}
var Kl = `1.18.1`,
  ql = 65536,
  { isFunction: Jl } = U,
  Yl = (e) =>
    encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) =>
      String.fromCharCode(parseInt(t, 16)),
    ),
  Xl = (e) => {
    if (!U.isString(e)) return e;
    try {
      return decodeURIComponent(e);
    } catch {
      return e;
    }
  },
  Zl = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  Ql = (e) => {
    let t = e.indexOf(`://`),
      n = e;
    return (
      t !== -1 && (n = n.slice(t + 3)),
      n.includes(`@`) || n.includes(`:`)
    );
  },
  $l = (e) => {
    let t = U.global !== void 0 && U.global !== null ? U.global : globalThis,
      { ReadableStream: n, TextEncoder: r } = t;
    e = U.merge.call(
      {
        skipUndefined: !0,
      },
      {
        Request: t.Request,
        Response: t.Response,
      },
      e,
    );
    let { fetch: i, Request: a, Response: o } = e,
      s = i ? Jl(i) : typeof fetch == `function`,
      c = Jl(a),
      l = Jl(o);
    if (!s) return !1;
    let u = s && Jl(n),
      d =
        s &&
        (typeof r == `function`
          ? (
              (e) => (t) =>
                e.encode(t)
            )(new r())
          : async (e) => new Uint8Array(await new a(e).arrayBuffer())),
      f =
        c &&
        u &&
        Zl(() => {
          let e = !1,
            t = new a(nl.origin, {
              body: new n(),
              method: `POST`,
              get duplex() {
                return ((e = !0), `half`);
              },
            }),
            r = t.headers.has(`Content-Type`);
          return (t.body != null && t.body.cancel(), e && !r);
        }),
      p = l && u && Zl(() => U.isReadableStream(new o(``).body)),
      m = {
        stream: p && ((e) => e.body),
      };
    s &&
      [`text`, `arrayBuffer`, `blob`, `formData`, `stream`].forEach((e) => {
        !m[e] &&
          (m[e] = (t, n) => {
            let r = t && t[e];
            if (r) return r.call(t);
            throw new K(
              `Response type '${e}' is not supported`,
              K.ERR_NOT_SUPPORT,
              n,
            );
          });
      });
    let h = async (e) => {
        if (e == null) return 0;
        if (U.isBlob(e)) return e.size;
        if (U.isSpecCompliantForm(e))
          return (
            await new a(nl.origin, {
              method: `POST`,
              body: e,
            }).arrayBuffer()
          ).byteLength;
        if (U.isArrayBufferView(e) || U.isArrayBuffer(e)) return e.byteLength;
        if ((U.isURLSearchParams(e) && (e += ``), U.isString(e)))
          return (await d(e)).byteLength;
      },
      g = async (e, t) => U.toFiniteNumber(e.getContentLength()) ?? h(t);
    return async (e) => {
      let {
          url: t,
          method: n,
          data: s,
          signal: l,
          cancelToken: d,
          timeout: _,
          onDownloadProgress: v,
          onUploadProgress: y,
          responseType: b,
          headers: x,
          withCredentials: S = `same-origin`,
          fetchOptions: C,
          maxContentLength: w,
          maxBodyLength: T,
        } = Ll(e),
        ee = U.isNumber(w) && w > -1,
        E = U.isNumber(T) && T > -1,
        te = (t) => (U.hasOwnProp(e, t) ? e[t] : void 0),
        ne = i || fetch;
      b = b ? (b + ``).toLowerCase() : `text`;
      let re = zl([l, d && d.toAbortSignal()], _),
        D = null,
        O =
          re &&
          re.unsubscribe &&
          (() => {
            re.unsubscribe();
          }),
        ie,
        ae = null,
        oe = () =>
          new K(
            `Request body larger than maxBodyLength limit`,
            K.ERR_BAD_REQUEST,
            e,
            D,
          );
      try {
        let i,
          l = te(`auth`);
        if (
          (l &&
            (i = {
              username: U.getSafeProp(l, `username`) || ``,
              password: U.getSafeProp(l, `password`) || ``,
            }),
          Ql(t))
        ) {
          let e = new URL(t, nl.origin);
          (!i &&
            (e.username || e.password) &&
            (i = {
              username: Xl(e.username),
              password: Xl(e.password),
            }),
            (e.username || e.password) &&
              ((e.username = ``), (e.password = ``), (t = e.href)));
        }
        if (
          (i &&
            (x.delete(`authorization`),
            x.set(
              `Authorization`,
              `Basic ` +
                btoa(Yl((i.username || ``) + `:` + (i.password || ``))),
            )),
          ee && typeof t == `string` && t.startsWith(`data:`) && Gl(t) > w)
        )
          throw new K(
            `maxContentLength size of ` + w + ` exceeded`,
            K.ERR_BAD_RESPONSE,
            e,
            D,
          );
        if (E && n !== `get` && n !== `head`) {
          let e = await h(s);
          if (typeof e == `number` && isFinite(e) && ((ie = e), e > T))
            throw oe();
        }
        let d = E && (U.isReadableStream(s) || U.isStream(s)),
          _ = (e, t, n) =>
            Ul(
              e,
              ql,
              (e) => {
                if (E && e > T) throw (ae = oe());
                t && t(e);
              },
              n,
            );
        if (f && n !== `get` && n !== `head` && (y || d)) {
          if (((ie ??= await g(x, s)), ie !== 0 || d)) {
            let e = new a(t, {
                method: `POST`,
                body: s,
                duplex: `half`,
              }),
              n;
            if (
              (U.isFormData(s) &&
                (n = e.headers.get(`content-type`)) &&
                x.setContentType(n),
              e.body)
            ) {
              let [t, n] = (y && bl(ie, yl(xl(y)))) || [];
              s = _(e.body, t, n);
            }
          }
        } else if (d && !c && u && n !== `get` && n !== `head`) s = _(s);
        else if (d && c && !f && n !== `get` && n !== `head`)
          throw new K(
            `Stream request bodies are not supported by the current fetch implementation`,
            K.ERR_NOT_SUPPORT,
            e,
            D,
          );
        U.isString(S) || (S = S ? `include` : `omit`);
        let k = c && `credentials` in a.prototype;
        if (U.isFormData(s)) {
          let e = x.getContentType();
          e &&
            /^multipart\/form-data/i.test(e) &&
            !/boundary=/i.test(e) &&
            x.delete(`content-type`);
        }
        x.set(`User-Agent`, `axios/` + Kl, !1);
        let se = {
          ...C,
          signal: re,
          method: n.toUpperCase(),
          headers: Tc(x.normalize()),
          body: s,
          duplex: `half`,
          credentials: k ? S : void 0,
        };
        D = c && new a(t, se);
        let ce = await (c ? ne(D, C) : ne(t, se)),
          A = G.from(ce.headers);
        if (ee) {
          let t = U.toFiniteNumber(A.getContentLength());
          if (t != null && t > w)
            throw new K(
              `maxContentLength size of ` + w + ` exceeded`,
              K.ERR_BAD_RESPONSE,
              e,
              D,
            );
        }
        let le = p && (b === `stream` || b === `response`);
        if (p && ce.body && (v || ee || (le && O))) {
          let t = {};
          [`status`, `statusText`, `headers`].forEach((e) => {
            t[e] = ce[e];
          });
          let n = U.toFiniteNumber(A.getContentLength()),
            [r, i] = (v && bl(n, yl(xl(v), !0))) || [],
            a = 0;
          ce = new o(
            Ul(
              ce.body,
              ql,
              (t) => {
                if (ee && ((a = t), a > w))
                  throw new K(
                    `maxContentLength size of ` + w + ` exceeded`,
                    K.ERR_BAD_RESPONSE,
                    e,
                    D,
                  );
                r && r(t);
              },
              () => {
                (i && i(), O && O());
              },
            ),
            t,
          );
        }
        b ||= `text`;
        let j = await m[U.findKey(m, b) || `text`](ce, e);
        if (ee && !p && !le) {
          let t;
          if (
            (j != null &&
              (typeof j.byteLength == `number`
                ? (t = j.byteLength)
                : typeof j.size == `number`
                  ? (t = j.size)
                  : typeof j == `string` &&
                    (t =
                      typeof r == `function`
                        ? new r().encode(j).byteLength
                        : j.length)),
            typeof t == `number` && t > w)
          )
            throw new K(
              `maxContentLength size of ` + w + ` exceeded`,
              K.ERR_BAD_RESPONSE,
              e,
              D,
            );
        }
        return (
          !le && O && O(),
          await new Promise((t, n) => {
            hl(t, n, {
              data: j,
              headers: G.from(ce.headers),
              status: ce.status,
              statusText: ce.statusText,
              config: e,
              request: D,
            });
          })
        );
      } catch (t) {
        if ((O && O(), re && re.aborted && re.reason instanceof K)) {
          let n = re.reason;
          throw (
            (n.config = e),
            D && (n.request = D),
            t !== n &&
              Object.defineProperty(n, "cause", {
                __proto__: null,
                value: t,
                writable: !0,
                enumerable: !1,
                configurable: !0,
              }),
            n
          );
        }
        if (ae) throw (D && !ae.request && (ae.request = D), ae);
        if (t instanceof K) throw (D && !t.request && (t.request = D), t);
        if (
          t &&
          t.name === `TypeError` &&
          /Load failed|fetch/i.test(t.message)
        ) {
          let n = new K(`Network Error`, K.ERR_NETWORK, e, D, t && t.response);
          throw (
            Object.defineProperty(n, "cause", {
              __proto__: null,
              value: t.cause || t,
              writable: !0,
              enumerable: !1,
              configurable: !0,
            }),
            n
          );
        }
        throw K.from(t, t && t.code, e, D, t && t.response);
      }
    };
  },
  eu = new Map(),
  tu = (e) => {
    let t = (e && e.env) || {},
      { fetch: n, Request: r, Response: i } = t,
      a = [r, i, n],
      o = a.length,
      s,
      c,
      l = eu;
    for (; o--; )
      ((s = a[o]),
        (c = l.get(s)),
        c === void 0 && l.set(s, (c = o ? new Map() : $l(t))),
        (l = c));
    return c;
  };
tu();
var nu = {
  http: null,
  xhr: Rl,
  fetch: {
    get: tu,
  },
};
U.forEach(nu, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", {
        __proto__: null,
        value: t,
      });
    } catch {}
    Object.defineProperty(e, "adapterName", {
      __proto__: null,
      value: t,
    });
  }
});
var ru = (e) => `- ${e}`,
  iu = (e) => U.isFunction(e) || e === null || e === !1;
function au(e, t) {
  e = U.isArray(e) ? e : [e];
  let { length: n } = e,
    r,
    i,
    a = {};
  for (let o = 0; o < n; o++) {
    r = e[o];
    let n;
    if (
      ((i = r),
      !iu(r) && ((i = nu[(n = String(r)).toLowerCase()]), i === void 0))
    )
      throw new K(`Unknown adapter '${n}'`);
    if (i && (U.isFunction(i) || (i = i.get(t)))) break;
    a[n || `#` + o] = i;
  }
  if (!i) {
    let e = Object.entries(a).map(
      ([e, t]) =>
        `adapter ${e} ` +
        (t === !1
          ? `is not supported by the environment`
          : `is not available in the build`),
    );
    throw new K(
      `There is no suitable adapter to dispatch the request ` +
        (n
          ? e.length > 1
            ? `since :
` +
              e.map(ru).join(`
`)
            : ` ` + ru(e[0])
          : `as no adapter specified`),
      K.ERR_NOT_SUPPORT,
    );
  }
  return i;
}
var ou = {
  getAdapter: au,
  adapters: nu,
};
function su(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new ml(null, e);
}
function cu(e) {
  return (
    su(e),
    (e.headers = G.from(e.headers)),
    (e.data = fl.call(e, e.transformRequest)),
    [`post`, `put`, `patch`].indexOf(e.method) !== -1 &&
      e.headers.setContentType(`application/x-www-form-urlencoded`, !1),
    ou
      .getAdapter(
        e.adapter || dl.adapter,
        e,
      )(e)
      .then(
        function (t) {
          (su(e), (e.response = t));
          try {
            t.data = fl.call(e, e.transformResponse, t);
          } finally {
            delete e.response;
          }
          return ((t.headers = G.from(t.headers)), t);
        },
        function (t) {
          if (!pl(t) && (su(e), t && t.response)) {
            e.response = t.response;
            try {
              t.response.data = fl.call(e, e.transformResponse, t.response);
            } finally {
              delete e.response;
            }
            t.response.headers = G.from(t.response.headers);
          }
          return Promise.reject(t);
        },
      )
  );
}
var lu = {};
[`object`, `boolean`, `number`, `function`, `string`, `symbol`].forEach(
  (e, t) => {
    lu[e] = function (n) {
      return typeof n === e || `a` + (t < 1 ? `n ` : ` `) + e;
    };
  },
);
var uu = {};
((lu.transitional = function (e, t, n) {
  function r(e, t) {
    return (
      `[Axios v` +
      Kl +
      `] Transitional option '` +
      e +
      `'` +
      t +
      (n ? `. ` + n : ``)
    );
  }
  return (n, i, a) => {
    if (e === !1)
      throw new K(
        r(i, ` has been removed` + (t ? ` in ` + t : ``)),
        K.ERR_DEPRECATED,
      );
    return (
      t &&
        !uu[i] &&
        ((uu[i] = !0),
        console.warn(
          r(
            i,
            ` has been deprecated since v` +
              t +
              ` and will be removed in the near future`,
          ),
        )),
      !e || e(n, i, a)
    );
  };
}),
  (lu.spelling = function (e) {
    return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
  }));
function du(e, t, n) {
  if (typeof e != `object` || !e)
    throw new K(`options must be an object`, K.ERR_BAD_OPTION_VALUE);
  let r = Object.keys(e),
    i = r.length;
  for (; i-- > 0; ) {
    let a = r[i],
      o = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
    if (o) {
      let t = e[a],
        n = t === void 0 || o(t, a, e);
      if (n !== !0)
        throw new K(`option ` + a + ` must be ` + n, K.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new K(`Unknown option ` + a, K.ERR_BAD_OPTION);
  }
}
var fu = {
    assertOptions: du,
    validators: lu,
  },
  pu = fu.validators,
  mu = class {
    constructor(e) {
      ((this.defaults = e || {}),
        (this.interceptors = {
          request: new qc(),
          response: new qc(),
        }));
    }
    async request(e, t) {
      try {
        return await this._request(e, t);
      } catch (e) {
        if (e instanceof Error) {
          let t = {};
          Error.captureStackTrace ? Error.captureStackTrace(t) : (t = Error());
          let n = (() => {
            if (!t.stack) return ``;
            let e = t.stack.indexOf(`
`);
            return e === -1 ? `` : t.stack.slice(e + 1);
          })();
          try {
            if (!e.stack) e.stack = n;
            else if (n) {
              let t = n.indexOf(`
`),
                r =
                  t === -1
                    ? -1
                    : n.indexOf(
                        `
`,
                        t + 1,
                      ),
                i = r === -1 ? `` : n.slice(r + 1);
              String(e.stack).endsWith(i) ||
                (e.stack +=
                  `
` + n);
            }
          } catch {}
        }
        throw e;
      }
    }
    _request(e, t) {
      (typeof e == `string` ? ((t ||= {}), (t.url = e)) : (t = e || {}),
        (t = Nl(this.defaults, t)));
      let { transitional: n, paramsSerializer: r, headers: i } = t;
      (n !== void 0 &&
        fu.assertOptions(
          n,
          {
            silentJSONParsing: pu.transitional(pu.boolean),
            forcedJSONParsing: pu.transitional(pu.boolean),
            clarifyTimeoutError: pu.transitional(pu.boolean),
            legacyInterceptorReqResOrdering: pu.transitional(pu.boolean),
            advertiseZstdAcceptEncoding: pu.transitional(pu.boolean),
            validateStatusUndefinedResolves: pu.transitional(pu.boolean),
          },
          !1,
        ),
        r != null &&
          (U.isFunction(r)
            ? (t.paramsSerializer = {
                serialize: r,
              })
            : fu.assertOptions(
                r,
                {
                  encode: pu.function,
                  serialize: pu.function,
                },
                !0,
              )),
        t.allowAbsoluteUrls !== void 0 ||
          (this.defaults.allowAbsoluteUrls === void 0
            ? (t.allowAbsoluteUrls = !0)
            : (t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)),
        fu.assertOptions(
          t,
          {
            baseUrl: pu.spelling(`baseURL`),
            withXsrfToken: pu.spelling(`withXSRFToken`),
          },
          !0,
        ),
        (t.method = (t.method || this.defaults.method || `get`).toLowerCase()));
      let a = i && U.merge(i.common, i[t.method]);
      (i &&
        U.forEach(
          [`delete`, `get`, `head`, `post`, `put`, `patch`, `query`, `common`],
          (e) => {
            delete i[e];
          },
        ),
        (t.headers = G.concat(a, i)));
      let o = [],
        s = !0;
      this.interceptors.request.forEach(function (e) {
        if (typeof e.runWhen == `function` && e.runWhen(t) === !1) return;
        s &&= e.synchronous;
        let n = t.transitional || Jc;
        n && n.legacyInterceptorReqResOrdering
          ? o.unshift(e.fulfilled, e.rejected)
          : o.push(e.fulfilled, e.rejected);
      });
      let c = [];
      this.interceptors.response.forEach(function (e) {
        c.push(e.fulfilled, e.rejected);
      });
      let l,
        u = 0,
        d;
      if (!s) {
        let e = [cu.bind(this), void 0];
        for (
          e.unshift(...o), e.push(...c), d = e.length, l = Promise.resolve(t);
          u < d;
        )
          l = l.then(e[u++], e[u++]);
        return l;
      }
      d = o.length;
      let f = t;
      for (; u < d; ) {
        let e = o[u++],
          t = o[u++];
        try {
          f = e(f);
        } catch (e) {
          t.call(this, e);
          break;
        }
      }
      try {
        l = cu.call(this, f);
      } catch (e) {
        return Promise.reject(e);
      }
      for (u = 0, d = c.length; u < d; ) l = l.then(c[u++], c[u++]);
      return l;
    }
    getUri(e) {
      return (
        (e = Nl(this.defaults, e)),
        q(
          jl(e.baseURL, e.url, e.allowAbsoluteUrls, e),
          e.params,
          e.paramsSerializer,
        )
      );
    }
  };
(U.forEach([`delete`, `get`, `head`, `options`], function (e) {
  mu.prototype[e] = function (t, n) {
    return this.request(
      Nl(n || {}, {
        method: e,
        url: t,
        data: n && U.hasOwnProp(n, `data`) ? n.data : void 0,
      }),
    );
  };
}),
  U.forEach([`post`, `put`, `patch`, `query`], function (e) {
    function t(t) {
      return function (n, r, i) {
        return this.request(
          Nl(i || {}, {
            method: e,
            headers: t
              ? {
                  "Content-Type": `multipart/form-data`,
                }
              : {},
            url: n,
            data: r,
          }),
        );
      };
    }
    ((mu.prototype[e] = t()),
      e !== `query` && (mu.prototype[e + `Form`] = t(!0)));
  }));
var hu = class e {
  constructor(e) {
    if (typeof e != `function`) throw TypeError(`executor must be a function.`);
    let t;
    this.promise = new Promise(function (e) {
      t = e;
    });
    let n = this;
    (this.promise.then((e) => {
      if (!n._listeners) return;
      let t = n._listeners.length;
      for (; t-- > 0; ) n._listeners[t](e);
      n._listeners = null;
    }),
      (this.promise.then = (e) => {
        let t,
          r = new Promise((e) => {
            (n.subscribe(e), (t = e));
          }).then(e);
        return (
          (r.cancel = function () {
            n.unsubscribe(t);
          }),
          r
        );
      }),
      e(function (e, r, i) {
        n.reason || ((n.reason = new ml(e, r, i)), t(n.reason));
      }));
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
  }
  unsubscribe(e) {
    if (!this._listeners) return;
    let t = this._listeners.indexOf(e);
    t !== -1 && this._listeners.splice(t, 1);
  }
  toAbortSignal() {
    let e = new AbortController(),
      t = (t) => {
        e.abort(t);
      };
    return (
      this.subscribe(t),
      (e.signal.unsubscribe = () => this.unsubscribe(t)),
      e.signal
    );
  }
  static source() {
    let t;
    return {
      token: new e(function (e) {
        t = e;
      }),
      cancel: t,
    };
  }
};
function gu(e) {
  return function (t) {
    return e.apply(null, t);
  };
}
function _u(e) {
  return U.isObject(e) && e.isAxiosError === !0;
}
var vu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};
Object.entries(vu).forEach(([e, t]) => {
  vu[t] = e;
});
function yu(e) {
  let t = new mu(e),
    n = ns(mu.prototype.request, t);
  return (
    U.extend(n, mu.prototype, t, {
      allOwnKeys: !0,
    }),
    U.extend(n, t, null, {
      allOwnKeys: !0,
    }),
    (n.create = function (t) {
      return yu(Nl(e, t));
    }),
    n
  );
}
var Y = yu(dl);
((Y.Axios = mu),
  (Y.CanceledError = ml),
  (Y.CancelToken = hu),
  (Y.isCancel = pl),
  (Y.VERSION = Kl),
  (Y.toFormData = Hc),
  (Y.AxiosError = K),
  (Y.Cancel = Y.CanceledError),
  (Y.all = function (e) {
    return Promise.all(e);
  }),
  (Y.spread = gu),
  (Y.isAxiosError = _u),
  (Y.mergeConfig = Nl),
  (Y.AxiosHeaders = G),
  (Y.formToJSON = (e) => cl(U.isHTMLForm(e) ? new FormData(e) : e)),
  (Y.getAdapter = ou.getAdapter),
  (Y.HttpStatusCode = vu),
  (Y.default = Y));
var bu = typeof window > `u`,
  xu = !bu && window.self !== window.top,
  Su = !bu && typeof document > `u`,
  Cu = () =>
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15),
  wu = [];
for (let e = 0; e < 256; ++e) wu.push((e + 256).toString(16).slice(1));
function Tu(e, t = 0) {
  return (
    wu[e[t + 0]] +
    wu[e[t + 1]] +
    wu[e[t + 2]] +
    wu[e[t + 3]] +
    `-` +
    wu[e[t + 4]] +
    wu[e[t + 5]] +
    `-` +
    wu[e[t + 6]] +
    wu[e[t + 7]] +
    `-` +
    wu[e[t + 8]] +
    wu[e[t + 9]] +
    `-` +
    wu[e[t + 10]] +
    wu[e[t + 11]] +
    wu[e[t + 12]] +
    wu[e[t + 13]] +
    wu[e[t + 14]] +
    wu[e[t + 15]]
  ).toLowerCase();
}
var Eu,
  Du = new Uint8Array(16);
function Ou() {
  if (!Eu) {
    if (typeof crypto > `u` || !crypto.getRandomValues)
      throw Error(
        `crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported`,
      );
    Eu = crypto.getRandomValues.bind(crypto);
  }
  return Eu(Du);
}
var ku = {
  randomUUID:
    typeof crypto < `u` && crypto.randomUUID && crypto.randomUUID.bind(crypto),
};
function Au(e, t, n) {
  e ||= {};
  let r = e.random ?? e.rng?.() ?? Ou();
  if (r.length < 16) throw Error(`Random bytes length must be >= 16`);
  if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
    if (((n ||= 0), n < 0 || n + 16 > t.length))
      throw RangeError(
        `UUID byte range ${n}:${n + 15} is out of buffer bounds`,
      );
    for (let e = 0; e < 16; ++e) t[n + e] = r[e];
    return t;
  }
  return Tu(r);
}
function ju(e, t, n) {
  return ku.randomUUID && !t && !e ? ku.randomUUID() : Au(e, t, n);
}
var Mu =
  typeof window < `u`
    ? window
    : {
        base44SharedInstances: {},
      };
function Nu(e, t) {
  return (
    (Mu.base44SharedInstances ||= {}),
    Mu.base44SharedInstances[e] ||
      (Mu.base44SharedInstances[e] = {
        instance: t(),
      }),
    Mu.base44SharedInstances[e].instance
  );
}
var Pu = `__user_heartbeat_event__`,
  Fu = `__initialization_event__`,
  Iu = `__session_duration_event__`,
  Lu = `analytics-enable`,
  Ru = `base44_analytics_session_id`,
  zu = {
    enabled: !0,
    maxQueueSize: 1e3,
    throttleTime: 1e3,
    batchSize: 30,
    heartBeatInterval: 6e4,
  },
  X = Nu(`analytics`, () => ({
    requestsQueue: [],
    isProcessing: !1,
    isHeartBeatProcessing: !1,
    wasInitializationTracked: !1,
    sessionContext: null,
    sessionStartTime: null,
    fallbackSessionId: null,
    config: {
      ...zu,
      ...Qu(),
    },
  })),
  Bu = ({
    axiosClient: e,
    serverUrl: t,
    appId: n,
    userAuthModule: r,
    enabled: i,
  }) => {
    let { maxQueueSize: a, throttleTime: o, batchSize: s } = X.config;
    if (!i || !X.config?.enabled || Su)
      return {
        track: () => {},
        cleanup: () => {},
      };
    let c,
      l = `${t}/api/apps/${n}/analytics/track/batch`,
      u = async (t) => {
        await e.request({
          method: `POST`,
          url: `/apps/${n}/analytics/track/batch`,
          data: {
            events: t,
          },
        });
      },
      d = (e) => {
        try {
          let t = JSON.stringify({
              events: e,
            }),
            n = new Blob([t], {
              type: `application/json`,
            });
          return (
            typeof navigator > `u` ||
            t.length > 6e4 ||
            !navigator.sendBeacon(l, n)
          );
        } catch {
          return !1;
        }
      },
      f = async (e, t = {}) => {
        if (e.length === 0) return;
        let n = await Zu(r),
          i = e.map(Ju(n));
        try {
          (!t.isBeacon || !d(i)) && (await u(i));
        } catch {}
      },
      p = () => {
        Hu(f, {
          throttleTime: o,
          batchSize: s,
        });
      },
      m = (e) => {
        if (X.requestsQueue.length >= a) return;
        let t = qu();
        (X.requestsQueue.push({
          ...e,
          ...t,
        }),
          p());
      },
      h = () => {
        (Hu(f, {
          throttleTime: o,
          batchSize: s,
        }),
          (c = Uu(m)),
          Gu());
      },
      g = () => {
        (Vu(), c?.(), Ku(m));
        let e = X.requestsQueue.splice(0);
        f(e, {
          isBeacon: !0,
        });
      },
      _ = () => {
        typeof window > `u` ||
          (document.visibilityState === `hidden`
            ? g()
            : document.visibilityState === `visible` && h());
      };
    return (
      p(),
      (c = Uu(m)),
      Wu(m),
      typeof window < `u` && window.addEventListener(`visibilitychange`, _),
      {
        track: m,
        cleanup: () => {
          (Vu(),
            c?.(),
            typeof window < `u` &&
              window.removeEventListener(`visibilitychange`, _));
        },
      }
    );
  };
function Vu() {
  X.isProcessing = !1;
}
async function Hu(e, t) {
  if (X.isProcessing) return;
  X.isProcessing = !0;
  let { throttleTime: n = 1e3, batchSize: r = 30 } = t ?? {};
  for (; X.isProcessing && X.requestsQueue.length > 0; ) {
    let t = X.requestsQueue.splice(0, r);
    (t.length && (await e(t)), await new Promise((e) => setTimeout(e, n)));
  }
  X.isProcessing = !1;
}
function Uu(e) {
  if (
    typeof window > `u` ||
    X.isHeartBeatProcessing ||
    (X.config.heartBeatInterval ?? 0) < 10
  )
    return () => {};
  X.isHeartBeatProcessing = !0;
  let t = setInterval(() => {
    e({
      eventName: Pu,
    });
  }, X.config.heartBeatInterval);
  return () => {
    (clearInterval(t), (X.isHeartBeatProcessing = !1));
  };
}
function Wu(e) {
  typeof window > `u` ||
    X.wasInitializationTracked ||
    ((X.wasInitializationTracked = !0),
    e({
      eventName: Fu,
      properties: {
        referrer: document == null ? void 0 : document.referrer,
      },
    }));
}
function Gu() {
  typeof window > `u` ||
    X.sessionStartTime !== null ||
    (X.sessionStartTime = new Date().toISOString());
}
function Ku(e) {
  if (typeof window > `u` || X.sessionStartTime === null) return;
  let t = new Date().getTime() - new Date(X.sessionStartTime).getTime();
  ((X.sessionStartTime = null),
    e({
      eventName: Iu,
      properties: {
        sessionDuration: t,
      },
    }));
}
function qu() {
  return {
    timestamp: new Date().toISOString(),
    pageUrl: typeof window < `u` ? (window.location?.pathname ?? null) : null,
  };
}
function Ju(e) {
  return (t) => ({
    event_name: t.eventName,
    properties: t.properties,
    timestamp: t.timestamp,
    page_url: t.pageUrl,
    ...e,
  });
}
var Yu = null;
function Xu() {
  ((X.sessionContext = null), (Yu = null));
}
async function Zu(e) {
  if (!X.sessionContext) {
    if (!e.hasToken())
      return {
        user_id: null,
        session_id: ed(),
      };
    if (!Yu) {
      let t = ed();
      Yu = e
        .me()
        .then((e) => ({
          user_id: e.id,
          session_id: t,
        }))
        .catch(() => ({
          user_id: null,
          session_id: t,
        }));
    }
    let t = Yu,
      n = await t;
    return (Yu === t && (X.sessionContext = n), n);
  }
  return X.sessionContext;
}
function Qu() {
  if (typeof window > `u` || !window.location) return;
  let e = new URLSearchParams(window.location.search).get(Lu);
  if (e == null || !e.length) return;
  let t = new URLSearchParams(window.location.search);
  t.delete(Lu);
  let n = window.location.pathname + (t.toString() ? `?` + t.toString() : ``);
  return (
    window.history.replaceState({}, ``, n),
    {
      enabled: e === `true`,
    }
  );
}
function $u() {
  return (X.fallbackSessionId ??= Cu());
}
function ed() {
  if (typeof window > `u`) return $u();
  try {
    let e = localStorage.getItem(Ru);
    if (!e) {
      let e = Cu();
      return (localStorage.setItem(Ru, e), e);
    }
    return e;
  } catch {
    return $u();
  }
}
var td = class extends Error {
  constructor(e, t, n, r, i) {
    (super(e),
      (this.name = `Base44Error`),
      (this.status = t),
      (this.code = n),
      (this.data = r),
      (this.originalError = i));
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      code: this.code,
      data: this.data,
    };
  }
};
function nd({
  baseURL: e,
  headers: t = {},
  token: n,
  interceptResponses: r = !0,
  onError: i,
}) {
  let a = Y.create({
    baseURL: e,
    headers: {
      "Content-Type": `application/json`,
      Accept: `application/json`,
      ...t,
    },
  });
  return (
    n && (a.defaults.headers.common.Authorization = `Bearer ${n}`),
    a.interceptors.request.use((t) => {
      typeof window < `u` &&
        (window.location && t.headers.set(`X-Origin-URL`, window.location.href),
        t.headers.get(`Authorization`) ||
          t.headers.set(`X-Base44-Anonymous-Id`, ed()));
      let n = ju();
      if (((t.requestId = n), xu))
        try {
          window.parent.postMessage(
            {
              type: `api-request-start`,
              requestId: n,
              data: {
                url: e + t.url,
                method: t.method,
                body: t.data instanceof FormData ? `[FormData object]` : t.data,
              },
            },
            `*`,
          );
        } catch {}
      return t;
    }),
    r &&
      a.interceptors.response.use(
        (e) => {
          let t = e.config?.requestId;
          try {
            xu &&
              t &&
              window.parent.postMessage(
                {
                  type: `api-request-end`,
                  requestId: t,
                  data: {
                    statusCode: e.status,
                    response: e.data,
                  },
                },
                `*`,
              );
          } catch {}
          return e.data;
        },
        (e) => {
          var t;
          let n = e.response?.data,
            r = new td(
              n?.error?.message || n?.message || n?.detail || e.message,
              e.response?.status,
              n?.error?.code ??
                n?.code ??
                (t = e.response?.headers)?.get?.call(
                  t,
                  `x-base44-connector-error`,
                ) ??
                e.response?.headers?.[`x-base44-connector-error`],
              n,
              e,
            );
          return (i?.(r), Promise.reject(r));
        },
      ),
    a
  );
}
function rd(e) {
  let { axios: t, appId: n, getSocket: r } = e;
  return new Proxy(
    {},
    {
      get(e, i) {
        if (!(typeof i != `string` || i === `then` || i.startsWith(`_`)))
          return sd(t, n, i, r);
      },
    },
  );
}
function id(e) {
  try {
    let t = JSON.parse(e);
    return {
      type: t.type,
      data: t.data,
      id: t.id || t.data?.id,
      timestamp: t.timestamp || new Date().toISOString(),
    };
  } catch (e) {
    return (
      console.warn(`[Base44 SDK] Failed to parse realtime message:`, e),
      null
    );
  }
}
var ad = 100;
function od(e) {
  return typeof e == `object` && !!e;
}
function sd(e, t, n, r) {
  let i = `/apps/${t}/entities/${n}`,
    a = (e) => (Array.isArray(e) ? e.join(`,`) : e),
    o = (t, n, r, o, s) => {
      let c = {};
      return (
        s && (c.q = JSON.stringify(s)),
        t && (c.sort = t),
        n && (c.limit = n),
        r && (c.skip = r),
        o && (c.fields = a(o)),
        e.get(i, {
          params: c,
        })
      );
    },
    s = (t, n) => {
      let r = {};
      return (
        n && (r.q = JSON.stringify(n)),
        (r.limit = t.limit || ad),
        t.cursor && (r.cursor = t.cursor),
        `distinct` in t
          ? (r.distinct = t.distinct)
          : (t.sort && (r.sort = t.sort), t.fields && (r.fields = a(t.fields))),
        e.get(`${i}/v2/list`, {
          params: r,
        })
      );
    };
  return {
    async list(...e) {
      let [t, n, r, i] = e;
      return od(t) ? s(t) : o(t, n, r, i);
    },
    async filter(e, ...t) {
      let [n, r, i, a] = t;
      return od(n) ? s(n, e) : o(n, r, i, a, e);
    },
    async get(t) {
      return e.get(`${i}/${t}`);
    },
    async create(t) {
      return e.post(i, t);
    },
    async update(t, n) {
      return e.put(`${i}/${t}`, n);
    },
    async delete(t) {
      return e.delete(`${i}/${t}`);
    },
    async deleteMany(t) {
      return e.delete(i, {
        data: t,
      });
    },
    async bulkCreate(t) {
      return e.post(`${i}/bulk`, t);
    },
    async updateMany(t, n) {
      return e.patch(`${i}/update-many`, {
        query: t,
        data: n,
      });
    },
    async count(t) {
      let n = {};
      return (
        t && (n.q = JSON.stringify(t)),
        (
          await e.get(`${i}/count`, {
            params: n,
          })
        ).count
      );
    },
    async aggregate(t) {
      return e.post(`${i}/aggregate`, t);
    },
    async upsert(t, n) {
      return e.post(`${i}/upsert`, {
        records: t,
        key: n.key,
      });
    },
    async bulkUpdate(t) {
      return e.put(`${i}/bulk`, t);
    },
    async importEntities(t) {
      let n = new FormData();
      return (
        n.append(`file`, t, t.name),
        e.post(`${i}/import`, n, {
          headers: {
            "Content-Type": `multipart/form-data`,
          },
        })
      );
    },
    subscribe(e) {
      let i = `entities:${t}:${n}`;
      return r().subscribeToRoom(i, {
        update_model: (t) => {
          let r = id(t.data);
          if (r) {
            r.type !== `delete` &&
              r.data?._oversize &&
              console.error(
                `[Base44 SDK] Realtime broadcast for ${n}#${r.id} was oversize and got slimmed for transport. Fields >10 KB are empty and the rest of the record may be a stub. Call \`entities.${n}.get("${r.id}")\` to fetch the full record.`,
              );
            try {
              e(r);
            } catch (e) {
              console.error(`[Base44 SDK] Subscription callback error:`, e);
            }
          }
        },
      });
    },
  };
}
function cd(e, t) {
  return {
    async call(n, r, i) {
      if (!n?.trim())
        throw Error(`Integration slug is required and cannot be empty`);
      if (!r?.trim())
        throw Error(`Operation ID is required and cannot be empty`);
      let { pathParams: a, queryParams: o, ...s } = i ?? {},
        c = {
          ...s,
          ...(a && {
            path_params: a,
          }),
          ...(o && {
            query_params: o,
          }),
        };
      return await e.post(`/apps/${t}/integrations/custom/${n}/${r}`, c);
    },
  };
}
function ld(e, t) {
  let n = cd(e, t);
  return new Proxy(
    {},
    {
      get(r, i) {
        if (!(typeof i != `string` || i === `then` || i.startsWith(`_`)))
          return i === `custom`
            ? n
            : new Proxy(
                {},
                {
                  get(n, r) {
                    if (
                      !(
                        typeof r != `string` ||
                        r === `then` ||
                        r.startsWith(`_`)
                      )
                    )
                      return async (n) => {
                        if (typeof n == `string`)
                          throw Error(
                            `Integration ${r} must receive an object with named parameters, received: ${n}`,
                          );
                        let a, o;
                        return (
                          n instanceof FormData ||
                          (n && Object.values(n).some((e) => e instanceof File))
                            ? ((a = new FormData()),
                              Object.keys(n).forEach((e) => {
                                n[e] instanceof File
                                  ? a.append(e, n[e], n[e].name)
                                  : typeof n[e] == `object` && n[e] !== null
                                    ? a.append(e, JSON.stringify(n[e]))
                                    : a.append(e, n[e]);
                              }),
                              (o = `multipart/form-data`))
                            : ((a = n), (o = `application/json`)),
                          i === `Core`
                            ? e.post(
                                `/apps/${t}/integration-endpoints/Core/${r}`,
                                a || n,
                                {
                                  headers: {
                                    "Content-Type": o,
                                  },
                                },
                              )
                            : e.post(
                                `/apps/${t}/integration-endpoints/installable/${i}/integration-endpoints/${r}`,
                                a || n,
                                {
                                  headers: {
                                    "Content-Type": o,
                                  },
                                },
                              )
                        );
                      };
                  },
                },
              );
      },
    },
  );
}
function ud() {
  return typeof window > `u` ? !1 : window !== window.parent;
}
function dd(e, t, n) {
  let r = Math.round(window.screenX + (window.outerWidth - 500) / 2),
    i = Math.round(window.screenY + (window.outerHeight - 600) / 2),
    a = window.open(
      e,
      `base44_auth`,
      `width=500,height=600,left=${r},top=${i},resizable=yes,scrollbars=yes`,
    );
  if (!a) return;
  let o = () => {
      (window.removeEventListener(`message`, s),
        clearInterval(c),
        a.closed || a.close());
    },
    s = (e) => {
      if (e.origin !== n || e.source !== a || !e.data?.access_token) return;
      o();
      let r = new URL(t),
        { access_token: i, is_new_user: s } = e.data;
      (r.searchParams.set(`access_token`, i),
        s != null && r.searchParams.set(`is_new_user`, String(s)),
        (window.location.href = r.toString()));
    },
    c = setInterval(() => {
      a.closed && o();
    }, 500);
  window.addEventListener(`message`, s);
}
function fd(e, t, n, r) {
  let i = null,
    a = () => {
      i = null;
    },
    o = !!r.token;
  return {
    hasToken() {
      return o;
    },
    async me() {
      let t =
        i ??
        e.get(`/apps/${n}/entities/User/me`).finally(() => {
          i === t && (i = null);
        });
      return ((i = t), t);
    },
    async updateMe(t) {
      return e.put(`/apps/${n}/entities/User/me`, t);
    },
    redirectToLogin(e) {
      if (typeof window > `u`)
        throw Error(`Login method can only be used in a browser environment`);
      let t = e
          ? new URL(e, window.location.origin).toString()
          : window.location.href,
        n = `${r.appBaseUrl}/login?from_url=${encodeURIComponent(t)}`;
      window.location.href = n;
    },
    loginWithProvider(e, t = `/`) {
      let i = new URL(t, window.location.origin).toString(),
        a = `app_id=${n}&from_url=${encodeURIComponent(i)}`,
        o;
      o =
        e === `sso`
          ? `/apps/${n}/auth/sso/login`
          : `/apps/auth${e === `google` ? `` : `/${e}`}/login`;
      let s = `${r.appBaseUrl}/api${o}?${a}`;
      if (ud())
        return dd(
          `${s}&popup_origin=${encodeURIComponent(window.location.origin)}`,
          i,
          window.location.origin,
        );
      window.location.href = s;
    },
    logout(t) {
      if (
        (delete e.defaults.headers.common.Authorization,
        a(),
        Xu(),
        (o = !1),
        typeof window < `u`)
      ) {
        if (window.localStorage)
          try {
            (window.localStorage.removeItem(`base44_access_token`),
              window.localStorage.removeItem(`token`));
          } catch (e) {
            console.error(`Failed to remove token from localStorage:`, e);
          }
        let e = t || window.location.href,
          n = `${r.appBaseUrl}/api/apps/auth/logout?from_url=${encodeURIComponent(e)}`;
        window.location.href = n;
      }
    },
    setToken(n, r = !0) {
      if (
        n &&
        (a(),
        Xu(),
        (o = !0),
        (e.defaults.headers.common.Authorization = `Bearer ${n}`),
        (t.defaults.headers.common.Authorization = `Bearer ${n}`),
        r && typeof window < `u` && window.localStorage)
      )
        try {
          (window.localStorage.setItem(`base44_access_token`, n),
            window.localStorage.setItem(`token`, n));
        } catch (e) {
          console.error(`Failed to save token to localStorage:`, e);
        }
    },
    async loginViaEmailPassword(t, r, i) {
      try {
        let { access_token: a, user: o } = await e.post(
          `/apps/${n}/auth/login`,
          {
            email: t,
            password: r,
            ...(i && {
              turnstile_token: i,
            }),
          },
        );
        return (
          a && this.setToken(a),
          {
            access_token: a,
            user: o,
          }
        );
      } catch (e) {
        throw (e.response?.status === 401 && (await this.logout()), e);
      }
    },
    async isAuthenticated() {
      try {
        return (await this.me(), !0);
      } catch {
        return !1;
      }
    },
    inviteUser(t, r) {
      return e.post(`/apps/${n}/users/invite-user`, {
        user_email: t,
        role: r,
      });
    },
    register(t) {
      return e.post(`/apps/${n}/auth/register`, t);
    },
    verifyOtp({ email: t, otpCode: r }) {
      return e.post(`/apps/${n}/auth/verify-otp`, {
        email: t,
        otp_code: r,
      });
    },
    resendOtp(t) {
      return e.post(`/apps/${n}/auth/resend-otp`, {
        email: t,
      });
    },
    resetPasswordRequest(t) {
      return e.post(`/apps/${n}/auth/reset-password-request`, {
        email: t,
      });
    },
    resetPassword({ resetToken: t, newPassword: r }) {
      return e.post(`/apps/${n}/auth/reset-password`, {
        reset_token: t,
        new_password: r,
      });
    },
    changePassword({ userId: t, currentPassword: r, newPassword: i }) {
      return e.post(`/apps/${n}/auth/change-password`, {
        user_id: t,
        current_password: r,
        new_password: i,
      });
    },
  };
}
function pd(e, t) {
  return {
    async getAccessToken(n) {
      let r = `/apps/${t}/auth/sso/accesstoken/${n}`;
      return e.get(r);
    },
    async getIdToken(n) {
      let r = `/apps/${t}/auth/sso/idtoken/${n}`;
      return e.get(r);
    },
  };
}
var md = new Set([`GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`]);
function hd(e, t) {
  return {
    async getAccessToken(n) {
      if (!n || typeof n != `string`)
        throw Error(`Integration type is required and must be a string`);
      return (
        await e.get(`/apps/${t}/external-auth/tokens/${encodeURIComponent(n)}`)
      ).access_token;
    },
    async getConnection(n) {
      if (!n || typeof n != `string`)
        throw Error(`Integration type is required and must be a string`);
      let r = await e.get(
        `/apps/${t}/external-auth/tokens/${encodeURIComponent(n)}`,
      );
      return {
        accessToken: r.access_token,
        connectionConfig: r.connection_config ?? null,
      };
    },
    async getWorkspaceConnection(n) {
      if (!n || typeof n != `string`)
        throw Error(`Connector ID is required and must be a string`);
      let r = await e.get(
        `/apps/${t}/external-auth/tokens/connectors/${encodeURIComponent(n)}`,
      );
      return {
        accessToken: r.access_token,
        connectionConfig: r.connection_config ?? null,
      };
    },
    async getCurrentAppUserAccessToken(n) {
      if (!n || typeof n != `string`)
        throw Error(`Connector ID is required and must be a string`);
      return (
        await e.get(
          `/apps/${t}/app-user-auth/connectors/${encodeURIComponent(n)}/token`,
        )
      ).access_token;
    },
    async getCurrentAppUserConnection(n) {
      if (!n || typeof n != `string`)
        throw Error(`Connector ID is required and must be a string`);
      let r = await e.get(
        `/apps/${t}/app-user-auth/connectors/${encodeURIComponent(n)}/token`,
      );
      return {
        accessToken: r.access_token,
        connectionConfig: r.connection_config ?? null,
      };
    },
    async callApi(n, r) {
      return (
        gd(n, `Integration type`),
        _d(e, `/apps/${t}/connectors/${encodeURIComponent(n)}/call`, r)
      );
    },
  };
}
function gd(e, t) {
  if (!e || typeof e != `string`)
    throw Error(`${t} is required and must be a string`);
}
async function _d(e, t, n) {
  if (!n || typeof n != `object`)
    throw Error(`Request is required and must be an object`);
  gd(n.path, `Request path`);
  let r = n.method ?? `GET`;
  if (!md.has(r))
    throw Error(
      `Request method must be one of GET, POST, PUT, PATCH, DELETE, or HEAD`,
    );
  let i = await e.post(t, {
    method: r,
    ...(n.host == null
      ? {}
      : {
          host: n.host,
        }),
    path: n.path,
    query: n.query ?? {},
    headers: n.headers ?? {},
    body: n.body ?? null,
  });
  return {
    success: i.success,
    phase: i.phase,
    status: i.status_code ?? null,
    data: i.data,
    dataBase64: i.data_base64 ?? null,
    contentType: i.content_type ?? null,
    headers: i.headers ?? {},
    creditsCharged: i.credits_charged ?? 0,
  };
}
function vd(e, t) {
  return {
    async connectAppUser(n) {
      if (!n || typeof n != `string`)
        throw Error(`Connector ID is required and must be a string`);
      return (
        await e.post(
          `/apps/${t}/app-user-auth/connectors/${encodeURIComponent(n)}/initiate`,
        )
      ).redirect_url;
    },
    async disconnectAppUser(n) {
      if (!n || typeof n != `string`)
        throw Error(`Connector ID is required and must be a string`);
      await e.delete(
        `/apps/${t}/app-user-auth/connectors/${encodeURIComponent(n)}`,
      );
    },
  };
}
function yd(e = {}) {
  let {
      storageKey: t = `base44_access_token`,
      paramName: n = `access_token`,
      saveToStorage: r = !0,
      removeFromUrl: i = !0,
    } = e,
    a = null;
  if (typeof window < `u` && window.location)
    try {
      let e = new URLSearchParams(window.location.search);
      if (((a = e.get(n)), a)) {
        if (
          (r &&
            bd(a, {
              storageKey: t,
            }),
          i)
        ) {
          e.delete(n);
          let t = `${window.location.pathname}${e.toString() ? `?${e.toString()}` : ``}${window.location.hash}`;
          window.history.replaceState({}, document.title, t);
        }
        return a;
      }
    } catch (e) {
      console.error(`Error retrieving token from URL:`, e);
    }
  if (typeof window < `u` && window.localStorage)
    try {
      return ((a = window.localStorage.getItem(t)), a);
    } catch (e) {
      console.error(`Error retrieving token from local storage:`, e);
    }
  return null;
}
function bd(e, t) {
  let { storageKey: n = `base44_access_token` } = t;
  if (typeof window > `u` || !window.localStorage || !e) return !1;
  try {
    return (
      window.localStorage.setItem(n, e),
      window.localStorage.setItem(`token`, e),
      !0
    );
  } catch (e) {
    return (console.error(`Error saving token to local storage:`, e), !1);
  }
}
function xd({
  axios: e,
  serviceRoleAxios: t,
  appId: n,
  serverUrl: r,
  functionsVersion: i,
  platformHeaders: a,
}) {
  let o = new Headers(a),
    s = (e) => {
      let t = e.defaults.headers.common.Authorization;
      return typeof t == `string` && t.startsWith(`Bearer `) ? t : null;
    };
  return async function (a, c = {}) {
    Sd(a);
    let { fetch: l = fetch, ...u } = c,
      d = new Headers(c.headers),
      f = (e, t) => {
        t && !d.has(e) && d.set(e, t);
      };
    return (
      f(`Authorization`, s(e)),
      f(`Base44-Service-Authorization`, s(t)),
      f(`Base44-App-Id`, n),
      f(`Base44-Api-Url`, r),
      f(`Base44-Functions-Version`, i),
      f(`Base44-State`, o.get(`Base44-State`)),
      f(`X-Data-Env`, o.get(`X-Data-Env`)),
      l(a, {
        ...u,
        headers: d,
      })
    );
  };
}
function Sd(e) {
  if (typeof e != `string` || e === ``)
    throw Error(`fetchWithAuth() requires a path, such as '/api/orders'.`);
  let t = e.replace(/[\t\n\r]/g, ``).replace(/^[\x00-\x20]+/, ``);
  if (!t.startsWith(`/`) || t.startsWith(`//`) || t.startsWith(`/\\`))
    throw Error(
      `fetchWithAuth() only sends requests to your app's own origin, so your app's credentials never reach a third party. "${e}" is not a path on it — pass a relative path such as '/api/orders'. Use base44.functions.fetch() to call a Base44 backend function, or plain fetch() for another origin.`,
    );
}
function Cd(e, t, n) {
  let r = (e, t) => (e ? `${String(e).replace(/\/$/, ``)}${t}` : t),
    i = (e) => {
      let t = new Headers();
      if (n?.getAuthHeaders) {
        let e = n.getAuthHeaders();
        Object.entries(e).forEach(([e, n]) => {
          n != null && t.set(e, String(n));
        });
      }
      return (
        e &&
          new Headers(e).forEach((e, n) => {
            t.set(n, e);
          }),
        t
      );
    };
  return {
    async invoke(n, r) {
      if (typeof r == `string`)
        throw Error(
          `Function ${n} must receive an object with named parameters, received: ${r}`,
        );
      let i, a;
      return (
        r instanceof FormData ||
        (r && Object.values(r).some((e) => e instanceof File))
          ? ((i = new FormData()),
            Object.keys(r).forEach((e) => {
              r[e] instanceof File
                ? i.append(e, r[e], r[e].name)
                : typeof r[e] == `object` && r[e] !== null
                  ? i.append(e, JSON.stringify(r[e]))
                  : i.append(e, r[e]);
            }),
            (a = `multipart/form-data`))
          : ((i = r), (a = `application/json`)),
        e.post(`/apps/${t}/functions/${n}`, i || r, {
          headers: {
            "Content-Type": a,
          },
        })
      );
    },
    async fetch(e, t = {}) {
      let a = `/functions${e.startsWith(`/`) ? e : `/${e}`}`,
        o = i(t.headers),
        s = {
          ...t,
          headers: o,
        };
      return await fetch(r(n?.baseURL, a), s);
    },
  };
}
function wd({ axios: e, getSocket: t, appId: n, serverUrl: r, token: i }) {
  let a = `/apps/${n}/agents`,
    o = {},
    s = () => e.get(`${a}/conversations`),
    c = (t) => e.get(`${a}/conversations/${t}`);
  return {
    getConversations: s,
    getConversation: c,
    listConversations: (t) =>
      e.get(`${a}/conversations`, {
        params: t,
      }),
    createConversation: (t) => e.post(`${a}/conversations`, t),
    addMessage: async (t, n) =>
      e.post(`${a}/conversations/v2/${t.id}/messages`, n),
    subscribeToConversation: (e, n) => {
      let r = `/agent-conversations/${e}`,
        i = t(),
        a = c(e).then((t) => ((o[e] = t), t));
      return i.subscribeToRoom(r, {
        connect: () => {},
        update_model: async ({ data: t }) => {
          let r = JSON.parse(t);
          if (r._message) {
            await a;
            let t = r._message,
              i = o[e];
            if (i) {
              let r = i.messages || [],
                a = r.findIndex((e) => e.id === t.id),
                s = a === -1 ? [...r, t] : r.map((e, n) => (n === a ? t : e));
              ((o[e] = {
                ...i,
                messages: s,
              }),
                n?.(o[e]));
            }
          }
        },
      });
    },
  };
}
var Td = {
  openai: `openai`,
  typesafe: `typesafe`,
};
function Ed({ serverUrl: e, token: t, appId: n }) {
  return {
    connection: ({ provider: r = `openai` } = {}) => {
      if (!Object.prototype.hasOwnProperty.call(Td, r))
        throw Error(`Unsupported AI Gateway provider: ${r}`);
      return {
        baseURL: `${e}/api/apps/${n}/ai/${Td[r]}/v1`,
        token: t ?? yd() ?? ``,
      };
    },
  };
}
function Dd(e, t) {
  let n = `/app-logs/${t}`;
  return {
    async logUserInApp(t) {
      await e.post(`${n}/log-user-in-app/${t}`);
    },
    async fetchLogs(t = {}) {
      return await e.get(n, {
        params: t,
      });
    },
    async getStats(t = {}) {
      return await e.get(`${n}/stats`, {
        params: t,
      });
    },
  };
}
function Od(e, t) {
  return {
    async getPublicSettings() {
      return e.get(`/apps/public/prod/public-settings/by-id/${t}`);
    },
  };
}
function kd(e, t) {
  return {
    async inviteUser(n, r) {
      if (r !== `user` && r !== `admin`)
        throw Error(
          `Invalid role: "${r}". Role must be either "user" or "admin".`,
        );
      return await e.post(`/apps/${t}/runtime/users/invite-user`, {
        user_email: n,
        role: r,
      });
    },
  };
}
var Ad = Object.create(null);
((Ad.open = `0`),
  (Ad.close = `1`),
  (Ad.ping = `2`),
  (Ad.pong = `3`),
  (Ad.message = `4`),
  (Ad.upgrade = `5`),
  (Ad.noop = `6`));
var jd = Object.create(null);
Object.keys(Ad).forEach((e) => {
  jd[Ad[e]] = e;
});
var Md = {
    type: `error`,
    data: `parser error`,
  },
  Nd =
    typeof Blob == `function` ||
    (typeof Blob < `u` &&
      Object.prototype.toString.call(Blob) === `[object BlobConstructor]`),
  Pd = typeof ArrayBuffer == `function`,
  Fd = (e) =>
    typeof ArrayBuffer.isView == `function`
      ? ArrayBuffer.isView(e)
      : e && e.buffer instanceof ArrayBuffer,
  Id = ({ type: e, data: t }, n, r) =>
    Nd && t instanceof Blob
      ? n
        ? r(t)
        : Ld(t, r)
      : Pd && (t instanceof ArrayBuffer || Fd(t))
        ? n
          ? r(t)
          : Ld(new Blob([t]), r)
        : r(Ad[e] + (t || ``)),
  Ld = (e, t) => {
    let n = new FileReader();
    return (
      (n.onload = function () {
        let e = n.result.split(`,`)[1];
        t(`b` + (e || ``));
      }),
      n.readAsDataURL(e)
    );
  };
function Rd(e) {
  return e instanceof Uint8Array
    ? e
    : e instanceof ArrayBuffer
      ? new Uint8Array(e)
      : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
var zd;
function Bd(e, t) {
  if (Nd && e.data instanceof Blob)
    return e.data.arrayBuffer().then(Rd).then(t);
  if (Pd && (e.data instanceof ArrayBuffer || Fd(e.data))) return t(Rd(e.data));
  Id(e, !1, (e) => {
    ((zd ||= new TextEncoder()), t(zd.encode(e)));
  });
}
var Vd = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,
  Hd = typeof Uint8Array > `u` ? [] : new Uint8Array(256);
for (let e = 0; e < 64; e++) Hd[Vd.charCodeAt(e)] = e;
var Ud = (e) => {
    let t = e.length * 0.75,
      n = e.length,
      r,
      i = 0,
      a,
      o,
      s,
      c;
    e[e.length - 1] === `=` && (t--, e[e.length - 2] === `=` && t--);
    let l = new ArrayBuffer(t),
      u = new Uint8Array(l);
    for (r = 0; r < n; r += 4)
      ((a = Hd[e.charCodeAt(r)]),
        (o = Hd[e.charCodeAt(r + 1)]),
        (s = Hd[e.charCodeAt(r + 2)]),
        (c = Hd[e.charCodeAt(r + 3)]),
        (u[i++] = (a << 2) | (o >> 4)),
        (u[i++] = ((o & 15) << 4) | (s >> 2)),
        (u[i++] = ((s & 3) << 6) | (c & 63)));
    return l;
  },
  Wd = typeof ArrayBuffer == `function`,
  Gd = (e, t) => {
    if (typeof e != `string`)
      return {
        type: `message`,
        data: qd(e, t),
      };
    let n = e.charAt(0);
    return n === `b`
      ? {
          type: `message`,
          data: Kd(e.substring(1), t),
        }
      : jd[n]
        ? e.length > 1
          ? {
              type: jd[n],
              data: e.substring(1),
            }
          : {
              type: jd[n],
            }
        : Md;
  },
  Kd = (e, t) =>
    Wd
      ? qd(Ud(e), t)
      : {
          base64: !0,
          data: e,
        },
  qd = (e, t) => {
    switch (t) {
      case `blob`:
        return e instanceof Blob ? e : new Blob([e]);
      default:
        return e instanceof ArrayBuffer ? e : e.buffer;
    }
  },
  Jd = ``,
  Yd = (e, t) => {
    let n = e.length,
      r = Array(n),
      i = 0;
    e.forEach((e, a) => {
      Id(e, !1, (e) => {
        ((r[a] = e), ++i === n && t(r.join(Jd)));
      });
    });
  },
  Xd = (e, t) => {
    let n = e.split(Jd),
      r = [];
    for (let e = 0; e < n.length; e++) {
      let i = Gd(n[e], t);
      if ((r.push(i), i.type === `error`)) break;
    }
    return r;
  };
function Zd() {
  return new TransformStream({
    transform(e, t) {
      Bd(e, (n) => {
        let r = n.length,
          i;
        if (r < 126)
          ((i = new Uint8Array(1)), new DataView(i.buffer).setUint8(0, r));
        else if (r < 65536) {
          i = new Uint8Array(3);
          let e = new DataView(i.buffer);
          (e.setUint8(0, 126), e.setUint16(1, r));
        } else {
          i = new Uint8Array(9);
          let e = new DataView(i.buffer);
          (e.setUint8(0, 127), e.setBigUint64(1, BigInt(r)));
        }
        (e.data && typeof e.data != `string` && (i[0] |= 128),
          t.enqueue(i),
          t.enqueue(n));
      });
    },
  });
}
var Qd;
function $d(e) {
  return e.reduce((e, t) => e + t.length, 0);
}
function ef(e, t) {
  if (e[0].length === t) return e.shift();
  let n = new Uint8Array(t),
    r = 0;
  for (let i = 0; i < t; i++)
    ((n[i] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0)));
  return (e.length && r < e[0].length && (e[0] = e[0].slice(r)), n);
}
function tf(e, t) {
  Qd ||= new TextDecoder();
  let n = [],
    r = 0,
    i = -1,
    a = !1;
  return new TransformStream({
    transform(o, s) {
      for (n.push(o); ; ) {
        if (r === 0) {
          if ($d(n) < 1) break;
          let e = ef(n, 1);
          ((a = (e[0] & 128) == 128),
            (i = e[0] & 127),
            (r = i < 126 ? 3 : i === 126 ? 1 : 2));
        } else if (r === 1) {
          if ($d(n) < 2) break;
          let e = ef(n, 2);
          ((i = new DataView(e.buffer, e.byteOffset, e.length).getUint16(0)),
            (r = 3));
        } else if (r === 2) {
          if ($d(n) < 8) break;
          let e = ef(n, 8),
            t = new DataView(e.buffer, e.byteOffset, e.length),
            a = t.getUint32(0);
          if (a > 2 ** 21 - 1) {
            s.enqueue(Md);
            break;
          }
          ((i = a * 2 ** 32 + t.getUint32(4)), (r = 3));
        } else {
          if ($d(n) < i) break;
          let e = ef(n, i);
          (s.enqueue(Gd(a ? e : Qd.decode(e), t)), (r = 0));
        }
        if (i === 0 || i > e) {
          s.enqueue(Md);
          break;
        }
      }
    },
  });
}
function nf(e) {
  if (e) return rf(e);
}
function rf(e) {
  for (var t in nf.prototype) e[t] = nf.prototype[t];
  return e;
}
((nf.prototype.on = nf.prototype.addEventListener =
  function (e, t) {
    return (
      (this._callbacks = this._callbacks || {}),
      (this._callbacks[`$` + e] = this._callbacks[`$` + e] || []).push(t),
      this
    );
  }),
  (nf.prototype.once = function (e, t) {
    function n() {
      (this.off(e, n), t.apply(this, arguments));
    }
    return ((n.fn = t), this.on(e, n), this);
  }),
  (nf.prototype.off =
    nf.prototype.removeListener =
    nf.prototype.removeAllListeners =
    nf.prototype.removeEventListener =
      function (e, t) {
        if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
          return ((this._callbacks = {}), this);
        var n = this._callbacks[`$` + e];
        if (!n) return this;
        if (arguments.length == 1)
          return (delete this._callbacks[`$` + e], this);
        for (var r, i = 0; i < n.length; i++)
          if (((r = n[i]), r === t || r.fn === t)) {
            n.splice(i, 1);
            break;
          }
        return (n.length === 0 && delete this._callbacks[`$` + e], this);
      }),
  (nf.prototype.emit = function (e) {
    this._callbacks = this._callbacks || {};
    for (
      var t = Array(arguments.length - 1), n = this._callbacks[`$` + e], r = 1;
      r < arguments.length;
      r++
    )
      t[r - 1] = arguments[r];
    if (n) {
      n = n.slice(0);
      for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t);
    }
    return this;
  }),
  (nf.prototype.emitReserved = nf.prototype.emit),
  (nf.prototype.listeners = function (e) {
    return (
      (this._callbacks = this._callbacks || {}),
      this._callbacks[`$` + e] || []
    );
  }),
  (nf.prototype.hasListeners = function (e) {
    return !!this.listeners(e).length;
  }));
var af =
    typeof Promise == `function` && typeof Promise.resolve == `function`
      ? (e) => Promise.resolve().then(e)
      : (e, t) => t(e, 0),
  of =
    typeof self < `u`
      ? self
      : typeof window < `u`
        ? window
        : Function(`return this`)(),
  sf = `arraybuffer`;
function cf(e, ...t) {
  return t.reduce((t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t), {});
}
var lf = of.setTimeout,
  uf = of.clearTimeout;
function df(e, t) {
  t.useNativeTimers
    ? ((e.setTimeoutFn = lf.bind(of)), (e.clearTimeoutFn = uf.bind(of)))
    : ((e.setTimeoutFn = of.setTimeout.bind(of)),
      (e.clearTimeoutFn = of.clearTimeout.bind(of)));
}
var ff = 1.33;
function pf(e) {
  return typeof e == `string`
    ? mf(e)
    : Math.ceil((e.byteLength || e.size) * ff);
}
function mf(e) {
  let t = 0,
    n = 0;
  for (let r = 0, i = e.length; r < i; r++)
    ((t = e.charCodeAt(r)),
      t < 128
        ? (n += 1)
        : t < 2048
          ? (n += 2)
          : t < 55296 || t >= 57344
            ? (n += 3)
            : (r++, (n += 4)));
  return n;
}
function hf() {
  return (
    Date.now().toString(36).substring(3) +
    Math.random().toString(36).substring(2, 5)
  );
}
function gf(e) {
  let t = ``;
  for (let n in e)
    e.hasOwnProperty(n) &&
      (t.length && (t += `&`),
      (t += encodeURIComponent(n) + `=` + encodeURIComponent(e[n])));
  return t;
}
function _f(e) {
  let t = {},
    n = e.split(`&`);
  for (let e = 0, r = n.length; e < r; e++) {
    let r = n[e].split(`=`);
    t[decodeURIComponent(r[0])] = decodeURIComponent(r[1]);
  }
  return t;
}
var vf = class extends Error {
    constructor(e, t, n) {
      (super(e),
        (this.description = t),
        (this.context = n),
        (this.type = `TransportError`));
    }
  },
  yf = class extends nf {
    constructor(e) {
      (super(),
        (this.writable = !1),
        df(this, e),
        (this.opts = e),
        (this.query = e.query),
        (this.socket = e.socket),
        (this.supportsBinary = !e.forceBase64));
    }
    onError(e, t, n) {
      return (super.emitReserved(`error`, new vf(e, t, n)), this);
    }
    open() {
      return ((this.readyState = `opening`), this.doOpen(), this);
    }
    close() {
      return (
        (this.readyState === `opening` || this.readyState === `open`) &&
          (this.doClose(), this.onClose()),
        this
      );
    }
    send(e) {
      this.readyState === `open` && this.write(e);
    }
    onOpen() {
      ((this.readyState = `open`),
        (this.writable = !0),
        super.emitReserved(`open`));
    }
    onData(e) {
      let t = Gd(e, this.socket.binaryType);
      this.onPacket(t);
    }
    onPacket(e) {
      super.emitReserved(`packet`, e);
    }
    onClose(e) {
      ((this.readyState = `closed`), super.emitReserved(`close`, e));
    }
    pause(e) {}
    createUri(e, t = {}) {
      return (
        e +
        `://` +
        this._hostname() +
        this._port() +
        this.opts.path +
        this._query(t)
      );
    }
    _hostname() {
      let e = this.opts.hostname;
      return e.indexOf(`:`) === -1 ? e : `[` + e + `]`;
    }
    _port() {
      return this.opts.port &&
        ((this.opts.secure && Number(this.opts.port) !== 443) ||
          (!this.opts.secure && Number(this.opts.port) !== 80))
        ? `:` + this.opts.port
        : ``;
    }
    _query(e) {
      let t = gf(e);
      return t.length ? `?` + t : ``;
    }
  },
  bf = class extends yf {
    constructor() {
      (super(...arguments), (this._polling = !1));
    }
    get name() {
      return `polling`;
    }
    doOpen() {
      this._poll();
    }
    pause(e) {
      this.readyState = `pausing`;
      let t = () => {
        ((this.readyState = `paused`), e());
      };
      if (this._polling || !this.writable) {
        let e = 0;
        (this._polling &&
          (e++,
          this.once(`pollComplete`, function () {
            --e || t();
          })),
          this.writable ||
            (e++,
            this.once(`drain`, function () {
              --e || t();
            })));
      } else t();
    }
    _poll() {
      ((this._polling = !0), this.doPoll(), this.emitReserved(`poll`));
    }
    onData(e) {
      (Xd(e, this.socket.binaryType).forEach((e) => {
        if (
          (this.readyState === `opening` && e.type === `open` && this.onOpen(),
          e.type === `close`)
        )
          return (
            this.onClose({
              description: `transport closed by the server`,
            }),
            !1
          );
        this.onPacket(e);
      }),
        this.readyState !== `closed` &&
          ((this._polling = !1),
          this.emitReserved(`pollComplete`),
          this.readyState === `open` && this._poll()));
    }
    doClose() {
      let e = () => {
        this.write([
          {
            type: `close`,
          },
        ]);
      };
      this.readyState === `open` ? e() : this.once(`open`, e);
    }
    write(e) {
      ((this.writable = !1),
        Yd(e, (e) => {
          this.doWrite(e, () => {
            ((this.writable = !0), this.emitReserved(`drain`));
          });
        }));
    }
    uri() {
      let e = this.opts.secure ? `https` : `http`,
        t = this.query || {};
      return (
        !1 !== this.opts.timestampRequests &&
          (t[this.opts.timestampParam] = hf()),
        !this.supportsBinary && !t.sid && (t.b64 = 1),
        this.createUri(e, t)
      );
    }
  },
  xf = !1;
try {
  xf = typeof XMLHttpRequest < `u` && `withCredentials` in new XMLHttpRequest();
} catch {}
var Sf = xf;
function Cf() {}
var wf = class extends bf {
    constructor(e) {
      if ((super(e), typeof location < `u`)) {
        let t = location.protocol === `https:`,
          n = location.port;
        ((n ||= t ? `443` : `80`),
          (this.xd =
            (typeof location < `u` && e.hostname !== location.hostname) ||
            n !== e.port));
      }
    }
    doWrite(e, t) {
      let n = this.request({
        method: `POST`,
        data: e,
      });
      (n.on(`success`, t),
        n.on(`error`, (e, t) => {
          this.onError(`xhr post error`, e, t);
        }));
    }
    doPoll() {
      let e = this.request();
      (e.on(`data`, this.onData.bind(this)),
        e.on(`error`, (e, t) => {
          this.onError(`xhr poll error`, e, t);
        }),
        (this.pollXhr = e));
    }
  },
  Tf = class e extends nf {
    constructor(e, t, n) {
      (super(),
        (this.createRequest = e),
        df(this, n),
        (this._opts = n),
        (this._method = n.method || `GET`),
        (this._uri = t),
        (this._data = n.data === void 0 ? null : n.data),
        this._create());
    }
    _create() {
      var t;
      let n = cf(
        this._opts,
        `agent`,
        `pfx`,
        `key`,
        `passphrase`,
        `cert`,
        `ca`,
        `ciphers`,
        `rejectUnauthorized`,
        `autoUnref`,
      );
      n.xdomain = !!this._opts.xd;
      let r = (this._xhr = this.createRequest(n));
      try {
        r.open(this._method, this._uri, !0);
        try {
          if (this._opts.extraHeaders) {
            r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
            for (let e in this._opts.extraHeaders)
              this._opts.extraHeaders.hasOwnProperty(e) &&
                r.setRequestHeader(e, this._opts.extraHeaders[e]);
          }
        } catch {}
        if (this._method === `POST`)
          try {
            r.setRequestHeader(`Content-type`, `text/plain;charset=UTF-8`);
          } catch {}
        try {
          r.setRequestHeader(`Accept`, `*/*`);
        } catch {}
        ((t = this._opts.cookieJar) == null || t.addCookies(r),
          `withCredentials` in r &&
            (r.withCredentials = this._opts.withCredentials),
          this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout),
          (r.onreadystatechange = () => {
            var e;
            (r.readyState === 3 &&
              ((e = this._opts.cookieJar) == null ||
                e.parseCookies(r.getResponseHeader(`set-cookie`))),
              r.readyState === 4 &&
                (r.status === 200 || r.status === 1223
                  ? this._onLoad()
                  : this.setTimeoutFn(() => {
                      this._onError(typeof r.status == `number` ? r.status : 0);
                    }, 0)));
          }),
          r.send(this._data));
      } catch (e) {
        this.setTimeoutFn(() => {
          this._onError(e);
        }, 0);
        return;
      }
      typeof document < `u` &&
        ((this._index = e.requestsCount++), (e.requests[this._index] = this));
    }
    _onError(e) {
      (this.emitReserved(`error`, e, this._xhr), this._cleanup(!0));
    }
    _cleanup(t) {
      if (this._xhr !== void 0 && this._xhr !== null) {
        if (((this._xhr.onreadystatechange = Cf), t))
          try {
            this._xhr.abort();
          } catch {}
        (typeof document < `u` && delete e.requests[this._index],
          (this._xhr = null));
      }
    }
    _onLoad() {
      let e = this._xhr.responseText;
      e !== null &&
        (this.emitReserved(`data`, e),
        this.emitReserved(`success`),
        this._cleanup());
    }
    abort() {
      this._cleanup();
    }
  };
if (((Tf.requestsCount = 0), (Tf.requests = {}), typeof document < `u`)) {
  if (typeof attachEvent == `function`) attachEvent(`onunload`, Ef);
  else if (typeof addEventListener == `function`) {
    let e = `onpagehide` in of ? `pagehide` : `unload`;
    addEventListener(e, Ef, !1);
  }
}
function Ef() {
  for (let e in Tf.requests)
    Tf.requests.hasOwnProperty(e) && Tf.requests[e].abort();
}
var Df = (function () {
    let e = kf({
      xdomain: !1,
    });
    return e && e.responseType !== null;
  })(),
  Of = class extends wf {
    constructor(e) {
      super(e);
      let t = e && e.forceBase64;
      this.supportsBinary = Df && !t;
    }
    request(e = {}) {
      return (
        Object.assign(
          e,
          {
            xd: this.xd,
          },
          this.opts,
        ),
        new Tf(kf, this.uri(), e)
      );
    }
  };
function kf(e) {
  let t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < `u` && (!t || Sf)) return new XMLHttpRequest();
  } catch {}
  if (!t)
    try {
      return new of[[`Active`, `Object`].join(`X`)](`Microsoft.XMLHTTP`);
    } catch {}
}
var Af =
    typeof navigator < `u` &&
    typeof navigator.product == `string` &&
    navigator.product.toLowerCase() === `reactnative`,
  jf = class extends yf {
    get name() {
      return `websocket`;
    }
    doOpen() {
      let e = this.uri(),
        t = this.opts.protocols,
        n = Af
          ? {}
          : cf(
              this.opts,
              `agent`,
              `perMessageDeflate`,
              `pfx`,
              `key`,
              `passphrase`,
              `cert`,
              `ca`,
              `ciphers`,
              `rejectUnauthorized`,
              `localAddress`,
              `protocolVersion`,
              `origin`,
              `maxPayload`,
              `family`,
              `checkServerIdentity`,
            );
      this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
      try {
        this.ws = this.createSocket(e, t, n);
      } catch (e) {
        return this.emitReserved(`error`, e);
      }
      ((this.ws.binaryType = this.socket.binaryType), this.addEventListeners());
    }
    addEventListeners() {
      ((this.ws.onopen = () => {
        (this.opts.autoUnref && this.ws._socket.unref(), this.onOpen());
      }),
        (this.ws.onclose = (e) =>
          this.onClose({
            description: `websocket connection closed`,
            context: e,
          })),
        (this.ws.onmessage = (e) => this.onData(e.data)),
        (this.ws.onerror = (e) => this.onError(`websocket error`, e)));
    }
    write(e) {
      this.writable = !1;
      for (let t = 0; t < e.length; t++) {
        let n = e[t],
          r = t === e.length - 1;
        Id(n, this.supportsBinary, (e) => {
          try {
            this.doWrite(n, e);
          } catch {}
          r &&
            af(() => {
              ((this.writable = !0), this.emitReserved(`drain`));
            }, this.setTimeoutFn);
        });
      }
    }
    doClose() {
      this.ws !== void 0 &&
        ((this.ws.onerror = () => {}), this.ws.close(), (this.ws = null));
    }
    uri() {
      let e = this.opts.secure ? `wss` : `ws`,
        t = this.query || {};
      return (
        this.opts.timestampRequests && (t[this.opts.timestampParam] = hf()),
        this.supportsBinary || (t.b64 = 1),
        this.createUri(e, t)
      );
    }
  },
  Mf = of.WebSocket || of.MozWebSocket,
  Nf = {
    websocket: class extends jf {
      createSocket(e, t, n) {
        return Af ? new Mf(e, t, n) : t ? new Mf(e, t) : new Mf(e);
      }
      doWrite(e, t) {
        this.ws.send(t);
      }
    },
    webtransport: class extends yf {
      get name() {
        return `webtransport`;
      }
      doOpen() {
        try {
          this._transport = new WebTransport(
            this.createUri(`https`),
            this.opts.transportOptions[this.name],
          );
        } catch (e) {
          return this.emitReserved(`error`, e);
        }
        (this._transport.closed
          .then(() => {
            this.onClose();
          })
          .catch((e) => {
            this.onError(`webtransport error`, e);
          }),
          this._transport.ready.then(() => {
            this._transport.createBidirectionalStream().then((e) => {
              let t = tf(2 ** 53 - 1, this.socket.binaryType),
                n = e.readable.pipeThrough(t).getReader(),
                r = Zd();
              (r.readable.pipeTo(e.writable),
                (this._writer = r.writable.getWriter()));
              let i = () => {
                n.read()
                  .then(({ done: e, value: t }) => {
                    e || (this.onPacket(t), i());
                  })
                  .catch((e) => {});
              };
              i();
              let a = {
                type: `open`,
              };
              (this.query.sid && (a.data = `{"sid":"${this.query.sid}"}`),
                this._writer.write(a).then(() => this.onOpen()));
            });
          }));
      }
      write(e) {
        this.writable = !1;
        for (let t = 0; t < e.length; t++) {
          let n = e[t],
            r = t === e.length - 1;
          this._writer.write(n).then(() => {
            r &&
              af(() => {
                ((this.writable = !0), this.emitReserved(`drain`));
              }, this.setTimeoutFn);
          });
        }
      }
      doClose() {
        var e;
        (e = this._transport) == null || e.close();
      }
    },
    polling: Of,
  },
  Pf =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  Ff = [
    `source`,
    `protocol`,
    `authority`,
    `userInfo`,
    `user`,
    `password`,
    `host`,
    `port`,
    `relative`,
    `path`,
    `directory`,
    `file`,
    `query`,
    `anchor`,
  ];
function If(e) {
  if (e.length > 8e3) throw `URI too long`;
  let t = e,
    n = e.indexOf(`[`),
    r = e.indexOf(`]`);
  n != -1 &&
    r != -1 &&
    (e =
      e.substring(0, n) +
      e.substring(n, r).replace(/:/g, `;`) +
      e.substring(r, e.length));
  let i = Pf.exec(e || ``),
    a = {},
    o = 14;
  for (; o--; ) a[Ff[o]] = i[o] || ``;
  return (
    n != -1 &&
      r != -1 &&
      ((a.source = t),
      (a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, `:`)),
      (a.authority = a.authority
        .replace(`[`, ``)
        .replace(`]`, ``)
        .replace(/;/g, `:`)),
      (a.ipv6uri = !0)),
    (a.pathNames = Lf(a, a.path)),
    (a.queryKey = Rf(a, a.query)),
    a
  );
}
function Lf(e, t) {
  let n = t.replace(/\/{2,9}/g, `/`).split(`/`);
  return (
    (t.slice(0, 1) == `/` || t.length === 0) && n.splice(0, 1),
    t.slice(-1) == `/` && n.splice(n.length - 1, 1),
    n
  );
}
function Rf(e, t) {
  let n = {};
  return (
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (e, t, r) {
      t && (n[t] = r);
    }),
    n
  );
}
var zf =
    typeof addEventListener == `function` &&
    typeof removeEventListener == `function`,
  Bf = [];
zf &&
  addEventListener(
    `offline`,
    () => {
      Bf.forEach((e) => e());
    },
    !1,
  );
var Vf = class e extends nf {
  constructor(e, t) {
    if (
      (super(),
      (this.binaryType = sf),
      (this.writeBuffer = []),
      (this._prevBufferLen = 0),
      (this._pingInterval = -1),
      (this._pingTimeout = -1),
      (this._maxPayload = -1),
      (this._pingTimeoutTime = 1 / 0),
      e && typeof e == `object` && ((t = e), (e = null)),
      e)
    ) {
      let n = If(e);
      ((t.hostname = n.host),
        (t.secure = n.protocol === `https` || n.protocol === `wss`),
        (t.port = n.port),
        n.query && (t.query = n.query));
    } else t.host && (t.hostname = If(t.host).host);
    (df(this, t),
      (this.secure =
        t.secure == null
          ? typeof location < `u` && location.protocol === `https:`
          : t.secure),
      t.hostname && !t.port && (t.port = this.secure ? `443` : `80`),
      (this.hostname =
        t.hostname ||
        (typeof location < `u` ? location.hostname : `localhost`)),
      (this.port =
        t.port ||
        (typeof location < `u` && location.port
          ? location.port
          : this.secure
            ? `443`
            : `80`)),
      (this.transports = []),
      (this._transportsByName = {}),
      t.transports.forEach((e) => {
        let t = e.prototype.name;
        (this.transports.push(t), (this._transportsByName[t] = e));
      }),
      (this.opts = Object.assign(
        {
          path: `/engine.io`,
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: `t`,
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: {
            threshold: 1024,
          },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        t,
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, ``) +
        (this.opts.addTrailingSlash ? `/` : ``)),
      typeof this.opts.query == `string` &&
        (this.opts.query = _f(this.opts.query)),
      zf &&
        (this.opts.closeOnBeforeunload &&
          ((this._beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener(
            `beforeunload`,
            this._beforeunloadEventListener,
            !1,
          )),
        this.hostname !== `localhost` &&
          ((this._offlineEventListener = () => {
            this._onClose(`transport close`, {
              description: `network connection lost`,
            });
          }),
          Bf.push(this._offlineEventListener))),
      this.opts.withCredentials && (this._cookieJar = void 0),
      this._open());
  }
  createTransport(e) {
    let t = Object.assign({}, this.opts.query);
    ((t.EIO = 4), (t.transport = e), this.id && (t.sid = this.id));
    let n = Object.assign(
      {},
      this.opts,
      {
        query: t,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[e],
    );
    return new this._transportsByName[e](n);
  }
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved(`error`, `No transports available`);
      }, 0);
      return;
    }
    let t =
      this.opts.rememberUpgrade &&
      e.priorWebsocketSuccess &&
      this.transports.indexOf(`websocket`) !== -1
        ? `websocket`
        : this.transports[0];
    this.readyState = `opening`;
    let n = this.createTransport(t);
    (n.open(), this.setTransport(n));
  }
  setTransport(e) {
    (this.transport && this.transport.removeAllListeners(),
      (this.transport = e),
      e
        .on(`drain`, this._onDrain.bind(this))
        .on(`packet`, this._onPacket.bind(this))
        .on(`error`, this._onError.bind(this))
        .on(`close`, (e) => this._onClose(`transport close`, e)));
  }
  onOpen() {
    ((this.readyState = `open`),
      (e.priorWebsocketSuccess = this.transport.name === `websocket`),
      this.emitReserved(`open`),
      this.flush());
  }
  _onPacket(e) {
    if (
      this.readyState === `opening` ||
      this.readyState === `open` ||
      this.readyState === `closing`
    )
      switch (
        (this.emitReserved(`packet`, e), this.emitReserved(`heartbeat`), e.type)
      ) {
        case `open`:
          this.onHandshake(JSON.parse(e.data));
          break;
        case `ping`:
          (this._sendPacket(`pong`),
            this.emitReserved(`ping`),
            this.emitReserved(`pong`),
            this._resetPingTimeout());
          break;
        case `error`:
          let t = Error(`server error`);
          ((t.code = e.data), this._onError(t));
          break;
        case `message`:
          (this.emitReserved(`data`, e.data),
            this.emitReserved(`message`, e.data));
      }
  }
  onHandshake(e) {
    (this.emitReserved(`handshake`, e),
      (this.id = e.sid),
      (this.transport.query.sid = e.sid),
      (this._pingInterval = e.pingInterval),
      (this._pingTimeout = e.pingTimeout),
      (this._maxPayload = e.maxPayload),
      this.onOpen(),
      this.readyState !== `closed` && this._resetPingTimeout());
  }
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    let e = this._pingInterval + this._pingTimeout;
    ((this._pingTimeoutTime = Date.now() + e),
      (this._pingTimeoutTimer = this.setTimeoutFn(() => {
        this._onClose(`ping timeout`);
      }, e)),
      this.opts.autoUnref && this._pingTimeoutTimer.unref());
  }
  _onDrain() {
    (this.writeBuffer.splice(0, this._prevBufferLen),
      (this._prevBufferLen = 0),
      this.writeBuffer.length === 0
        ? this.emitReserved(`drain`)
        : this.flush());
  }
  flush() {
    if (
      this.readyState !== `closed` &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      let e = this._getWritablePackets();
      (this.transport.send(e),
        (this._prevBufferLen = e.length),
        this.emitReserved(`flush`));
    }
  }
  _getWritablePackets() {
    if (
      !(
        this._maxPayload &&
        this.transport.name === `polling` &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let e = 1;
    for (let t = 0; t < this.writeBuffer.length; t++) {
      let n = this.writeBuffer[t].data;
      if ((n && (e += pf(n)), t > 0 && e > this._maxPayload))
        return this.writeBuffer.slice(0, t);
      e += 2;
    }
    return this.writeBuffer;
  }
  _hasPingExpired() {
    if (!this._pingTimeoutTime) return !0;
    let e = Date.now() > this._pingTimeoutTime;
    return (
      e &&
        ((this._pingTimeoutTime = 0),
        af(() => {
          this._onClose(`ping timeout`);
        }, this.setTimeoutFn)),
      e
    );
  }
  write(e, t, n) {
    return (this._sendPacket(`message`, e, t, n), this);
  }
  send(e, t, n) {
    return (this._sendPacket(`message`, e, t, n), this);
  }
  _sendPacket(e, t, n, r) {
    if (
      (typeof t == `function` && ((r = t), (t = void 0)),
      typeof n == `function` && ((r = n), (n = null)),
      this.readyState === `closing` || this.readyState === `closed`)
    )
      return;
    ((n ||= {}), (n.compress = !1 !== n.compress));
    let i = {
      type: e,
      data: t,
      options: n,
    };
    (this.emitReserved(`packetCreate`, i),
      this.writeBuffer.push(i),
      r && this.once(`flush`, r),
      this.flush());
  }
  close() {
    let e = () => {
        (this._onClose(`forced close`), this.transport.close());
      },
      t = () => {
        (this.off(`upgrade`, t), this.off(`upgradeError`, t), e());
      },
      n = () => {
        (this.once(`upgrade`, t), this.once(`upgradeError`, t));
      };
    return (
      (this.readyState === `opening` || this.readyState === `open`) &&
        ((this.readyState = `closing`),
        this.writeBuffer.length
          ? this.once(`drain`, () => {
              this.upgrading ? n() : e();
            })
          : this.upgrading
            ? n()
            : e()),
      this
    );
  }
  _onError(t) {
    if (
      ((e.priorWebsocketSuccess = !1),
      this.opts.tryAllTransports &&
        this.transports.length > 1 &&
        this.readyState === `opening`)
    )
      return (this.transports.shift(), this._open());
    (this.emitReserved(`error`, t), this._onClose(`transport error`, t));
  }
  _onClose(e, t) {
    if (
      this.readyState === `opening` ||
      this.readyState === `open` ||
      this.readyState === `closing`
    ) {
      if (
        (this.clearTimeoutFn(this._pingTimeoutTimer),
        this.transport.removeAllListeners(`close`),
        this.transport.close(),
        this.transport.removeAllListeners(),
        zf &&
          (this._beforeunloadEventListener &&
            removeEventListener(
              `beforeunload`,
              this._beforeunloadEventListener,
              !1,
            ),
          this._offlineEventListener))
      ) {
        let e = Bf.indexOf(this._offlineEventListener);
        e !== -1 && Bf.splice(e, 1);
      }
      ((this.readyState = `closed`),
        (this.id = null),
        this.emitReserved(`close`, e, t),
        (this.writeBuffer = []),
        (this._prevBufferLen = 0));
    }
  }
};
Vf.protocol = 4;
var Hf = class extends Vf {
    constructor() {
      (super(...arguments), (this._upgrades = []));
    }
    onOpen() {
      if ((super.onOpen(), this.readyState === `open` && this.opts.upgrade))
        for (let e = 0; e < this._upgrades.length; e++)
          this._probe(this._upgrades[e]);
    }
    _probe(e) {
      let t = this.createTransport(e),
        n = !1;
      Vf.priorWebsocketSuccess = !1;
      let r = () => {
        n ||
          (t.send([
            {
              type: `ping`,
              data: `probe`,
            },
          ]),
          t.once(`packet`, (e) => {
            if (!n)
              if (e.type === `pong` && e.data === `probe`) {
                if (
                  ((this.upgrading = !0), this.emitReserved(`upgrading`, t), !t)
                )
                  return;
                ((Vf.priorWebsocketSuccess = t.name === `websocket`),
                  this.transport.pause(() => {
                    n ||
                      (this.readyState !== `closed` &&
                        (l(),
                        this.setTransport(t),
                        t.send([
                          {
                            type: `upgrade`,
                          },
                        ]),
                        this.emitReserved(`upgrade`, t),
                        (t = null),
                        (this.upgrading = !1),
                        this.flush()));
                  }));
              } else {
                let e = Error(`probe error`);
                ((e.transport = t.name), this.emitReserved(`upgradeError`, e));
              }
          }));
      };
      function i() {
        n || ((n = !0), l(), t.close(), (t = null));
      }
      let a = (e) => {
        let n = Error(`probe error: ` + e);
        ((n.transport = t.name), i(), this.emitReserved(`upgradeError`, n));
      };
      function o() {
        a(`transport closed`);
      }
      function s() {
        a(`socket closed`);
      }
      function c(e) {
        t && e.name !== t.name && i();
      }
      let l = () => {
        (t.removeListener(`open`, r),
          t.removeListener(`error`, a),
          t.removeListener(`close`, o),
          this.off(`close`, s),
          this.off(`upgrading`, c));
      };
      (t.once(`open`, r),
        t.once(`error`, a),
        t.once(`close`, o),
        this.once(`close`, s),
        this.once(`upgrading`, c),
        this._upgrades.indexOf(`webtransport`) !== -1 && e !== `webtransport`
          ? this.setTimeoutFn(() => {
              n || t.open();
            }, 200)
          : t.open());
    }
    onHandshake(e) {
      ((this._upgrades = this._filterUpgrades(e.upgrades)),
        super.onHandshake(e));
    }
    _filterUpgrades(e) {
      let t = [];
      for (let n = 0; n < e.length; n++)
        ~this.transports.indexOf(e[n]) && t.push(e[n]);
      return t;
    }
  },
  Uf = class extends Hf {
    constructor(e, t = {}) {
      let n = typeof e == `object`,
        r = n
          ? {
              ...e,
            }
          : {
              ...t,
            };
      ((!r.transports ||
        (r.transports && typeof r.transports[0] == `string`)) &&
        (r.transports = (
          r.transports || [`polling`, `websocket`, `webtransport`]
        )
          .map((e) => Nf[e])
          .filter((e) => !!e)),
        super(n ? r : e, r));
    }
  };
Uf.protocol;
function Wf(e, t = ``, n) {
  let r = e;
  ((n ||= typeof location < `u` && location),
    (e ??= n.protocol + `//` + n.host),
    typeof e == `string` &&
      (e.charAt(0) === `/` &&
        (e = e.charAt(1) === `/` ? n.protocol + e : n.host + e),
      /^(https?|wss?):\/\//.test(e) ||
        (e = n === void 0 ? `https://` + e : n.protocol + `//` + e),
      (r = If(e))),
    r.port ||
      (/^(http|ws)$/.test(r.protocol)
        ? (r.port = `80`)
        : /^(http|ws)s$/.test(r.protocol) && (r.port = `443`)),
    (r.path = r.path || `/`));
  let i = r.host.indexOf(`:`) === -1 ? r.host : `[` + r.host + `]`;
  return (
    (r.id = r.protocol + `://` + i + `:` + r.port + t),
    (r.href =
      r.protocol + `://` + i + (n && n.port === r.port ? `` : `:` + r.port)),
    r
  );
}
var Gf = typeof ArrayBuffer == `function`,
  Kf = (e) =>
    typeof ArrayBuffer.isView == `function`
      ? ArrayBuffer.isView(e)
      : e.buffer instanceof ArrayBuffer,
  qf = Object.prototype.toString,
  Jf =
    typeof Blob == `function` ||
    (typeof Blob < `u` && qf.call(Blob) === `[object BlobConstructor]`),
  Yf =
    typeof File == `function` ||
    (typeof File < `u` && qf.call(File) === `[object FileConstructor]`);
function Xf(e) {
  return (
    (Gf && (e instanceof ArrayBuffer || Kf(e))) ||
    (Jf && e instanceof Blob) ||
    (Yf && e instanceof File)
  );
}
function Zf(e, t) {
  if (!e || typeof e != `object`) return !1;
  if (Array.isArray(e)) {
    for (let t = 0, n = e.length; t < n; t++) if (Zf(e[t])) return !0;
    return !1;
  }
  if (Xf(e)) return !0;
  if (e.toJSON && typeof e.toJSON == `function` && arguments.length === 1)
    return Zf(e.toJSON(), !0);
  for (let t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && Zf(e[t])) return !0;
  return !1;
}
function Qf(e) {
  let t = [],
    n = e.data,
    r = e;
  return (
    (r.data = $f(n, t)),
    (r.attachments = t.length),
    {
      packet: r,
      buffers: t,
    }
  );
}
function $f(e, t) {
  if (!e) return e;
  if (Xf(e)) {
    let n = {
      _placeholder: !0,
      num: t.length,
    };
    return (t.push(e), n);
  }
  if (Array.isArray(e)) {
    let n = Array(e.length);
    for (let r = 0; r < e.length; r++) n[r] = $f(e[r], t);
    return n;
  }
  if (typeof e == `object` && !(e instanceof Date)) {
    let n = {};
    for (let r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = $f(e[r], t));
    return n;
  }
  return e;
}
function ep(e, t) {
  return ((e.data = tp(e.data, t)), delete e.attachments, e);
}
function tp(e, t) {
  if (!e) return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == `number` && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw Error(`illegal attachments`);
  }
  if (Array.isArray(e)) for (let n = 0; n < e.length; n++) e[n] = tp(e[n], t);
  else if (typeof e == `object`)
    for (let n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = tp(e[n], t));
  return e;
}
var np = e({
    Decoder: () => ap,
    Encoder: () => ip,
    PacketType: () => Z,
    isPacketValid: () => fp,
    protocol: () => 5,
  }),
  rp = [
    `connect`,
    `connect_error`,
    `disconnect`,
    `disconnecting`,
    `newListener`,
    `removeListener`,
  ],
  Z;
(function (e) {
  ((e[(e.CONNECT = 0)] = `CONNECT`),
    (e[(e.DISCONNECT = 1)] = `DISCONNECT`),
    (e[(e.EVENT = 2)] = `EVENT`),
    (e[(e.ACK = 3)] = `ACK`),
    (e[(e.CONNECT_ERROR = 4)] = `CONNECT_ERROR`),
    (e[(e.BINARY_EVENT = 5)] = `BINARY_EVENT`),
    (e[(e.BINARY_ACK = 6)] = `BINARY_ACK`));
})((Z ||= {}));
var ip = class {
    constructor(e) {
      this.replacer = e;
    }
    encode(e) {
      return (e.type === Z.EVENT || e.type === Z.ACK) && Zf(e)
        ? this.encodeAsBinary({
            type: e.type === Z.EVENT ? Z.BINARY_EVENT : Z.BINARY_ACK,
            nsp: e.nsp,
            data: e.data,
            id: e.id,
          })
        : [this.encodeAsString(e)];
    }
    encodeAsString(e) {
      let t = `` + e.type;
      return (
        (e.type === Z.BINARY_EVENT || e.type === Z.BINARY_ACK) &&
          (t += e.attachments + `-`),
        e.nsp && e.nsp !== `/` && (t += e.nsp + `,`),
        e.id != null && (t += e.id),
        e.data != null && (t += JSON.stringify(e.data, this.replacer)),
        t
      );
    }
    encodeAsBinary(e) {
      let t = Qf(e),
        n = this.encodeAsString(t.packet),
        r = t.buffers;
      return (r.unshift(n), r);
    }
  },
  ap = class e extends nf {
    constructor(e) {
      (super(),
        (this.opts = Object.assign(
          {
            reviver: void 0,
            maxAttachments: 10,
          },
          typeof e == `function`
            ? {
                reviver: e,
              }
            : e,
        )));
    }
    add(e) {
      let t;
      if (typeof e == `string`) {
        if (this.reconstructor)
          throw Error(`got plaintext data when reconstructing a packet`);
        t = this.decodeString(e);
        let n = t.type === Z.BINARY_EVENT;
        n || t.type === Z.BINARY_ACK
          ? ((t.type = n ? Z.EVENT : Z.ACK),
            (this.reconstructor = new op(t)),
            t.attachments === 0 && super.emitReserved(`decoded`, t))
          : super.emitReserved(`decoded`, t);
      } else if (Xf(e) || e.base64)
        if (this.reconstructor)
          ((t = this.reconstructor.takeBinaryData(e)),
            t &&
              ((this.reconstructor = null), super.emitReserved(`decoded`, t)));
        else throw Error(`got binary data when not reconstructing a packet`);
      else throw Error(`Unknown type: ` + e);
    }
    decodeString(t) {
      let n = 0,
        r = {
          type: Number(t.charAt(0)),
        };
      if (Z[r.type] === void 0) throw Error(`unknown packet type ` + r.type);
      if (r.type === Z.BINARY_EVENT || r.type === Z.BINARY_ACK) {
        let e = n + 1;
        for (; t.charAt(++n) !== `-` && n != t.length; );
        let i = t.substring(e, n);
        if (i != Number(i) || t.charAt(n) !== `-`)
          throw Error(`Illegal attachments`);
        let a = Number(i);
        if (!cp(a) || a < 0) throw Error(`Illegal attachments`);
        if (a > this.opts.maxAttachments) throw Error(`too many attachments`);
        r.attachments = a;
      }
      if (t.charAt(n + 1) === `/`) {
        let e = n + 1;
        for (; ++n && t.charAt(n) !== `,` && n !== t.length; );
        r.nsp = t.substring(e, n);
      } else r.nsp = `/`;
      let i = t.charAt(n + 1);
      if (i !== `` && Number(i) == i) {
        let e = n + 1;
        for (; ++n; ) {
          let e = t.charAt(n);
          if (e == null || Number(e) != e) {
            --n;
            break;
          }
          if (n === t.length) break;
        }
        r.id = Number(t.substring(e, n + 1));
      }
      if (t.charAt(++n)) {
        let i = this.tryParse(t.substr(n));
        if (e.isPayloadValid(r.type, i)) r.data = i;
        else throw Error(`invalid payload`);
      }
      return r;
    }
    tryParse(e) {
      try {
        return JSON.parse(e, this.opts.reviver);
      } catch {
        return !1;
      }
    }
    static isPayloadValid(e, t) {
      switch (e) {
        case Z.CONNECT:
          return up(t);
        case Z.DISCONNECT:
          return t === void 0;
        case Z.CONNECT_ERROR:
          return typeof t == `string` || up(t);
        case Z.EVENT:
        case Z.BINARY_EVENT:
          return (
            Array.isArray(t) &&
            (typeof t[0] == `number` ||
              (typeof t[0] == `string` && rp.indexOf(t[0]) === -1))
          );
        case Z.ACK:
        case Z.BINARY_ACK:
          return Array.isArray(t);
      }
    }
    destroy() {
      this.reconstructor &&=
        (this.reconstructor.finishedReconstruction(), null);
    }
  },
  op = class {
    constructor(e) {
      ((this.packet = e), (this.buffers = []), (this.reconPack = e));
    }
    takeBinaryData(e) {
      if (
        (this.buffers.push(e),
        this.buffers.length === this.reconPack.attachments)
      ) {
        let e = ep(this.reconPack, this.buffers);
        return (this.finishedReconstruction(), e);
      }
      return null;
    }
    finishedReconstruction() {
      ((this.reconPack = null), (this.buffers = []));
    }
  };
function sp(e) {
  return typeof e == `string`;
}
var cp =
  Number.isInteger ||
  function (e) {
    return typeof e == `number` && isFinite(e) && Math.floor(e) === e;
  };
function lp(e) {
  return e === void 0 || cp(e);
}
function up(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function dp(e, t) {
  switch (e) {
    case Z.CONNECT:
      return t === void 0 || up(t);
    case Z.DISCONNECT:
      return t === void 0;
    case Z.EVENT:
      return (
        Array.isArray(t) &&
        (typeof t[0] == `number` ||
          (typeof t[0] == `string` && rp.indexOf(t[0]) === -1))
      );
    case Z.ACK:
      return Array.isArray(t);
    case Z.CONNECT_ERROR:
      return typeof t == `string` || up(t);
    default:
      return !1;
  }
}
function fp(e) {
  return sp(e.nsp) && lp(e.id) && dp(e.type, e.data);
}
function pp(e, t, n) {
  return (
    e.on(t, n),
    function () {
      e.off(t, n);
    }
  );
}
var mp = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1,
  }),
  hp = class extends nf {
    constructor(e, t, n) {
      (super(),
        (this.connected = !1),
        (this.recovered = !1),
        (this.receiveBuffer = []),
        (this.sendBuffer = []),
        (this._queue = []),
        (this._queueSeq = 0),
        (this.ids = 0),
        (this.acks = {}),
        (this.flags = {}),
        (this.io = e),
        (this.nsp = t),
        n && n.auth && (this.auth = n.auth),
        (this._opts = Object.assign({}, n)),
        this.io._autoConnect && this.open());
    }
    get disconnected() {
      return !this.connected;
    }
    subEvents() {
      if (this.subs) return;
      let e = this.io;
      this.subs = [
        pp(e, `open`, this.onopen.bind(this)),
        pp(e, `packet`, this.onpacket.bind(this)),
        pp(e, `error`, this.onerror.bind(this)),
        pp(e, `close`, this.onclose.bind(this)),
      ];
    }
    get active() {
      return !!this.subs;
    }
    connect() {
      return this.connected
        ? this
        : (this.subEvents(),
          this.io._reconnecting || this.io.open(),
          this.io._readyState === `open` && this.onopen(),
          this);
    }
    open() {
      return this.connect();
    }
    send(...e) {
      return (e.unshift(`message`), this.emit.apply(this, e), this);
    }
    emit(e, ...t) {
      if (mp.hasOwnProperty(e))
        throw Error(`"` + e.toString() + `" is a reserved event name`);
      if (
        (t.unshift(e),
        this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      )
        return (this._addToQueue(t), this);
      let n = {
        type: Z.EVENT,
        data: t,
      };
      if (
        ((n.options = {}),
        (n.options.compress = this.flags.compress !== !1),
        typeof t[t.length - 1] == `function`)
      ) {
        let e = this.ids++,
          r = t.pop();
        (this._registerAckCallback(e, r), (n.id = e));
      }
      let r = this.io.engine?.transport?.writable,
        i = this.connected && !this.io.engine?._hasPingExpired();
      return (
        (this.flags.volatile && !r) ||
          (i
            ? (this.notifyOutgoingListeners(n), this.packet(n))
            : this.sendBuffer.push(n)),
        (this.flags = {}),
        this
      );
    }
    _registerAckCallback(e, t) {
      let n = this.flags.timeout ?? this._opts.ackTimeout;
      if (n === void 0) {
        this.acks[e] = t;
        return;
      }
      let r = this.io.setTimeoutFn(() => {
          delete this.acks[e];
          for (let t = 0; t < this.sendBuffer.length; t++)
            this.sendBuffer[t].id === e && this.sendBuffer.splice(t, 1);
          t.call(this, Error(`operation has timed out`));
        }, n),
        i = (...e) => {
          (this.io.clearTimeoutFn(r), t.apply(this, e));
        };
      ((i.withError = !0), (this.acks[e] = i));
    }
    emitWithAck(e, ...t) {
      return new Promise((n, r) => {
        let i = (e, t) => (e ? r(e) : n(t));
        ((i.withError = !0), t.push(i), this.emit(e, ...t));
      });
    }
    _addToQueue(e) {
      let t;
      typeof e[e.length - 1] == `function` && (t = e.pop());
      let n = {
        id: this._queueSeq++,
        tryCount: 0,
        pending: !1,
        args: e,
        flags: Object.assign(
          {
            fromQueue: !0,
          },
          this.flags,
        ),
      };
      (e.push(
        (e, ...r) => (
          this._queue[0],
          e === null
            ? (this._queue.shift(), t && t(null, ...r))
            : n.tryCount > this._opts.retries &&
              (this._queue.shift(), t && t(e)),
          (n.pending = !1),
          this._drainQueue()
        ),
      ),
        this._queue.push(n),
        this._drainQueue());
    }
    _drainQueue(e = !1) {
      if (!this.connected || this._queue.length === 0) return;
      let t = this._queue[0];
      (t.pending && !e) ||
        ((t.pending = !0),
        t.tryCount++,
        (this.flags = t.flags),
        this.emit.apply(this, t.args));
    }
    packet(e) {
      ((e.nsp = this.nsp), this.io._packet(e));
    }
    onopen() {
      typeof this.auth == `function`
        ? this.auth((e) => {
            this._sendConnectPacket(e);
          })
        : this._sendConnectPacket(this.auth);
    }
    _sendConnectPacket(e) {
      this.packet({
        type: Z.CONNECT,
        data: this._pid
          ? Object.assign(
              {
                pid: this._pid,
                offset: this._lastOffset,
              },
              e,
            )
          : e,
      });
    }
    onerror(e) {
      this.connected || this.emitReserved(`connect_error`, e);
    }
    onclose(e, t) {
      ((this.connected = !1),
        delete this.id,
        this.emitReserved(`disconnect`, e, t),
        this._clearAcks());
    }
    _clearAcks() {
      Object.keys(this.acks).forEach((e) => {
        if (!this.sendBuffer.some((t) => String(t.id) === e)) {
          let t = this.acks[e];
          (delete this.acks[e],
            t.withError && t.call(this, Error(`socket has been disconnected`)));
        }
      });
    }
    onpacket(e) {
      if (e.nsp === this.nsp)
        switch (e.type) {
          case Z.CONNECT:
            e.data && e.data.sid
              ? this.onconnect(e.data.sid, e.data.pid)
              : this.emitReserved(
                  `connect_error`,
                  Error(
                    `It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)`,
                  ),
                );
            break;
          case Z.EVENT:
          case Z.BINARY_EVENT:
            this.onevent(e);
            break;
          case Z.ACK:
          case Z.BINARY_ACK:
            this.onack(e);
            break;
          case Z.DISCONNECT:
            this.ondisconnect();
            break;
          case Z.CONNECT_ERROR:
            this.destroy();
            let t = Error(e.data.message);
            ((t.data = e.data.data), this.emitReserved(`connect_error`, t));
        }
    }
    onevent(e) {
      let t = e.data || [];
      (e.id != null && t.push(this.ack(e.id)),
        this.connected
          ? this.emitEvent(t)
          : this.receiveBuffer.push(Object.freeze(t)));
    }
    emitEvent(e) {
      if (this._anyListeners && this._anyListeners.length) {
        let t = this._anyListeners.slice();
        for (let n of t) n.apply(this, e);
      }
      (super.emit.apply(this, e),
        this._pid &&
          e.length &&
          typeof e[e.length - 1] == `string` &&
          (this._lastOffset = e[e.length - 1]));
    }
    ack(e) {
      let t = this,
        n = !1;
      return function (...r) {
        n ||
          ((n = !0),
          t.packet({
            type: Z.ACK,
            id: e,
            data: r,
          }));
      };
    }
    onack(e) {
      let t = this.acks[e.id];
      typeof t == `function` &&
        (delete this.acks[e.id],
        t.withError && e.data.unshift(null),
        t.apply(this, e.data));
    }
    onconnect(e, t) {
      ((this.id = e),
        (this.recovered = t && this._pid === t),
        (this._pid = t),
        (this.connected = !0),
        this.emitBuffered(),
        this._drainQueue(!0),
        this.emitReserved(`connect`));
    }
    emitBuffered() {
      (this.receiveBuffer.forEach((e) => this.emitEvent(e)),
        (this.receiveBuffer = []),
        this.sendBuffer.forEach((e) => {
          (this.notifyOutgoingListeners(e), this.packet(e));
        }),
        (this.sendBuffer = []));
    }
    ondisconnect() {
      (this.destroy(), this.onclose(`io server disconnect`));
    }
    destroy() {
      ((this.subs &&= (this.subs.forEach((e) => e()), void 0)),
        this.io._destroy(this));
    }
    disconnect() {
      return (
        this.connected &&
          this.packet({
            type: Z.DISCONNECT,
          }),
        this.destroy(),
        this.connected && this.onclose(`io client disconnect`),
        this
      );
    }
    close() {
      return this.disconnect();
    }
    compress(e) {
      return ((this.flags.compress = e), this);
    }
    get volatile() {
      return ((this.flags.volatile = !0), this);
    }
    timeout(e) {
      return ((this.flags.timeout = e), this);
    }
    onAny(e) {
      return (
        (this._anyListeners = this._anyListeners || []),
        this._anyListeners.push(e),
        this
      );
    }
    prependAny(e) {
      return (
        (this._anyListeners = this._anyListeners || []),
        this._anyListeners.unshift(e),
        this
      );
    }
    offAny(e) {
      if (!this._anyListeners) return this;
      if (e) {
        let t = this._anyListeners;
        for (let n = 0; n < t.length; n++)
          if (e === t[n]) return (t.splice(n, 1), this);
      } else this._anyListeners = [];
      return this;
    }
    listenersAny() {
      return this._anyListeners || [];
    }
    onAnyOutgoing(e) {
      return (
        (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
        this._anyOutgoingListeners.push(e),
        this
      );
    }
    prependAnyOutgoing(e) {
      return (
        (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
        this._anyOutgoingListeners.unshift(e),
        this
      );
    }
    offAnyOutgoing(e) {
      if (!this._anyOutgoingListeners) return this;
      if (e) {
        let t = this._anyOutgoingListeners;
        for (let n = 0; n < t.length; n++)
          if (e === t[n]) return (t.splice(n, 1), this);
      } else this._anyOutgoingListeners = [];
      return this;
    }
    listenersAnyOutgoing() {
      return this._anyOutgoingListeners || [];
    }
    notifyOutgoingListeners(e) {
      if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
        let t = this._anyOutgoingListeners.slice();
        for (let n of t) n.apply(this, e.data);
      }
    }
  };
function gp(e) {
  ((e ||= {}),
    (this.ms = e.min || 100),
    (this.max = e.max || 1e4),
    (this.factor = e.factor || 2),
    (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
    (this.attempts = 0));
}
((gp.prototype.duration = function () {
  var e = this.ms * this.factor ** +this.attempts++;
  if (this.jitter) {
    var t = Math.random(),
      n = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + n : e - n;
  }
  return Math.min(e, this.max) | 0;
}),
  (gp.prototype.reset = function () {
    this.attempts = 0;
  }),
  (gp.prototype.setMin = function (e) {
    this.ms = e;
  }),
  (gp.prototype.setMax = function (e) {
    this.max = e;
  }),
  (gp.prototype.setJitter = function (e) {
    this.jitter = e;
  }));
var _p = class extends nf {
    constructor(e, t) {
      (super(),
        (this.nsps = {}),
        (this.subs = []),
        e && typeof e == `object` && ((t = e), (e = void 0)),
        (t ||= {}),
        (t.path = t.path || `/socket.io`),
        (this.opts = t),
        df(this, t),
        this.reconnection(t.reconnection !== !1),
        this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0),
        this.reconnectionDelay(t.reconnectionDelay || 1e3),
        this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3),
        this.randomizationFactor(t.randomizationFactor ?? 0.5),
        (this.backoff = new gp({
          min: this.reconnectionDelay(),
          max: this.reconnectionDelayMax(),
          jitter: this.randomizationFactor(),
        })),
        this.timeout(t.timeout == null ? 2e4 : t.timeout),
        (this._readyState = `closed`),
        (this.uri = e));
      let n = t.parser || np;
      ((this.encoder = new n.Encoder()),
        (this.decoder = new n.Decoder()),
        (this._autoConnect = t.autoConnect !== !1),
        this._autoConnect && this.open());
    }
    reconnection(e) {
      return arguments.length
        ? ((this._reconnection = !!e), e || (this.skipReconnect = !0), this)
        : this._reconnection;
    }
    reconnectionAttempts(e) {
      return e === void 0
        ? this._reconnectionAttempts
        : ((this._reconnectionAttempts = e), this);
    }
    reconnectionDelay(e) {
      var t;
      return e === void 0
        ? this._reconnectionDelay
        : ((this._reconnectionDelay = e),
          (t = this.backoff) == null || t.setMin(e),
          this);
    }
    randomizationFactor(e) {
      var t;
      return e === void 0
        ? this._randomizationFactor
        : ((this._randomizationFactor = e),
          (t = this.backoff) == null || t.setJitter(e),
          this);
    }
    reconnectionDelayMax(e) {
      var t;
      return e === void 0
        ? this._reconnectionDelayMax
        : ((this._reconnectionDelayMax = e),
          (t = this.backoff) == null || t.setMax(e),
          this);
    }
    timeout(e) {
      return arguments.length ? ((this._timeout = e), this) : this._timeout;
    }
    maybeReconnectOnOpen() {
      !this._reconnecting &&
        this._reconnection &&
        this.backoff.attempts === 0 &&
        this.reconnect();
    }
    open(e) {
      if (~this._readyState.indexOf(`open`)) return this;
      this.engine = new Uf(this.uri, this.opts);
      let t = this.engine,
        n = this;
      ((this._readyState = `opening`), (this.skipReconnect = !1));
      let r = pp(t, `open`, function () {
          (n.onopen(), e && e());
        }),
        i = (t) => {
          (this.cleanup(),
            (this._readyState = `closed`),
            this.emitReserved(`error`, t),
            e ? e(t) : this.maybeReconnectOnOpen());
        },
        a = pp(t, `error`, i);
      if (!1 !== this._timeout) {
        let e = this._timeout,
          n = this.setTimeoutFn(() => {
            (r(), i(Error(`timeout`)), t.close());
          }, e);
        (this.opts.autoUnref && n.unref(),
          this.subs.push(() => {
            this.clearTimeoutFn(n);
          }));
      }
      return (this.subs.push(r), this.subs.push(a), this);
    }
    connect(e) {
      return this.open(e);
    }
    onopen() {
      (this.cleanup(), (this._readyState = `open`), this.emitReserved(`open`));
      let e = this.engine;
      this.subs.push(
        pp(e, `ping`, this.onping.bind(this)),
        pp(e, `data`, this.ondata.bind(this)),
        pp(e, `error`, this.onerror.bind(this)),
        pp(e, `close`, this.onclose.bind(this)),
        pp(this.decoder, `decoded`, this.ondecoded.bind(this)),
      );
    }
    onping() {
      this.emitReserved(`ping`);
    }
    ondata(e) {
      try {
        this.decoder.add(e);
      } catch (e) {
        this.onclose(`parse error`, e);
      }
    }
    ondecoded(e) {
      af(() => {
        this.emitReserved(`packet`, e);
      }, this.setTimeoutFn);
    }
    onerror(e) {
      this.emitReserved(`error`, e);
    }
    socket(e, t) {
      let n = this.nsps[e];
      return (
        n
          ? this._autoConnect && !n.active && n.connect()
          : ((n = new hp(this, e, t)), (this.nsps[e] = n)),
        n
      );
    }
    _destroy(e) {
      let t = Object.keys(this.nsps);
      for (let e of t) if (this.nsps[e].active) return;
      this._close();
    }
    _packet(e) {
      let t = this.encoder.encode(e);
      for (let n = 0; n < t.length; n++) this.engine.write(t[n], e.options);
    }
    cleanup() {
      (this.subs.forEach((e) => e()),
        (this.subs.length = 0),
        this.decoder.destroy());
    }
    _close() {
      ((this.skipReconnect = !0),
        (this._reconnecting = !1),
        this.onclose(`forced close`));
    }
    disconnect() {
      return this._close();
    }
    onclose(e, t) {
      var n;
      (this.cleanup(),
        (n = this.engine) == null || n.close(),
        this.backoff.reset(),
        (this._readyState = `closed`),
        this.emitReserved(`close`, e, t),
        this._reconnection && !this.skipReconnect && this.reconnect());
    }
    reconnect() {
      if (this._reconnecting || this.skipReconnect) return this;
      let e = this;
      if (this.backoff.attempts >= this._reconnectionAttempts)
        (this.backoff.reset(),
          this.emitReserved(`reconnect_failed`),
          (this._reconnecting = !1));
      else {
        let t = this.backoff.duration();
        this._reconnecting = !0;
        let n = this.setTimeoutFn(() => {
          e.skipReconnect ||
            (this.emitReserved(`reconnect_attempt`, e.backoff.attempts),
            !e.skipReconnect &&
              e.open((t) => {
                t
                  ? ((e._reconnecting = !1),
                    e.reconnect(),
                    this.emitReserved(`reconnect_error`, t))
                  : e.onreconnect();
              }));
        }, t);
        (this.opts.autoUnref && n.unref(),
          this.subs.push(() => {
            this.clearTimeoutFn(n);
          }));
      }
    }
    onreconnect() {
      let e = this.backoff.attempts;
      ((this._reconnecting = !1),
        this.backoff.reset(),
        this.emitReserved(`reconnect`, e));
    }
  },
  vp = {};
function yp(e, t) {
  (typeof e == `object` && ((t = e), (e = void 0)), (t ||= {}));
  let n = Wf(e, t.path || `/socket.io`),
    r = n.source,
    i = n.id,
    a = n.path,
    o = vp[i] && a in vp[i].nsps,
    s = t.forceNew || t[`force new connection`] || !1 === t.multiplex || o,
    c;
  return (
    s ? (c = new _p(r, t)) : (vp[i] || (vp[i] = new _p(r, t)), (c = vp[i])),
    n.query && !t.query && (t.query = n.queryKey),
    c.socket(n.path, t)
  );
}
Object.assign(yp, {
  Manager: _p,
  Socket: hp,
  io: yp,
  connect: yp,
});
var bp = 250;
function xp(e, t) {
  let n = e.token ?? yd(),
    r = {
      app_id: e.appId,
      token: n,
    };
  n || (r.anonymous_id = ed());
  let i = yp(e.serverUrl, {
    path: e.mountPath,
    transports: e.transports,
    query: r,
  });
  return (
    i.on(
      `connect`,
      async () => (console.log(`connect`, i.id), t.connect?.call(t)),
    ),
    i.on(`update_model`, async (e) => t.update_model?.call(t, e)),
    i.on(`error`, async (e) => t.error?.call(t, e)),
    i.on(
      `connect_error`,
      async (e) => (console.error(`connect_error`, e), t.error?.call(t, e)),
    ),
    i
  );
}
function Sp({ config: e }) {
  let t = {
      ...e,
    },
    n = {},
    r = {},
    i = {
      connect: async () => {
        let e = [];
        (Object.keys(n).forEach((t) => {
          let n = f(t);
          n.length !== 0 &&
            (l(t),
            n.forEach(({ connect: t }) => {
              e.push((async () => t?.())());
            }));
        }),
          await Promise.all(e));
      },
      update_model: async (e) => {
        let t = f(e.room).map((t) => t.update_model?.call(t, e));
        await Promise.all(t);
      },
      error: async (e) => {
        console.error(`error`, e);
        let t = Object.values(n)
          .flat()
          .map((t) => t.error?.call(t, e));
        await Promise.all(t);
      },
    },
    a = xp(e, i);
  function o() {
    s();
  }
  function s() {
    (m(), a && a.disconnect());
  }
  function c(e) {
    (o(),
      (t = {
        ...t,
        ...e,
      }),
      (a = xp(t, i)));
  }
  function l(e) {
    a.emit(`join`, e);
  }
  function u(e) {
    a.emit(`leave`, e);
  }
  async function d(e, t) {
    let n = JSON.stringify(t);
    return i.update_model?.call(i, {
      room: e,
      data: n,
    });
  }
  function f(e) {
    return n[e] ?? [];
  }
  function p(e) {
    let t = r[e];
    t && (clearTimeout(t), delete r[e]);
  }
  function m() {
    Object.keys(r).forEach((e) => {
      (clearTimeout(r[e]),
        delete r[e],
        (n[e]?.length ?? 0) === 0 && delete n[e]);
    });
  }
  function h(e) {
    (p(e),
      (r[e] = setTimeout(() => {
        (delete r[e], !((n[e]?.length ?? 0) > 0) && (u(e), delete n[e]));
      }, bp)));
  }
  return {
    socket: a,
    subscribeToRoom: (e, t) => {
      (n[e] ? p(e) : (l(e), (n[e] = [])), n[e].push(t));
      let r = !1;
      return () => {
        r ||
          ((r = !0),
          (n[e] = n[e]?.filter((e) => e !== t) ?? []),
          n[e].length === 0 && h(e));
      };
    },
    updateConfig: c,
    updateModel: d,
    disconnect: s,
  };
}
(!globalThis.EventTarget || !globalThis.Event) &&
  console.error(`
  PartySocket requires a global 'EventTarget' class to be available!
  You can polyfill this global by adding this to your code before any partysocket imports: 
  
  \`\`\`
  import 'partysocket/event-target-polyfill';
  \`\`\`
  Please file an issue at https://github.com/partykit/partykit if you're still having trouble.
`);
var Cp = class extends Event {
    message;
    error;
    constructor(e, t) {
      (super(`error`, t), (this.message = e.message), (this.error = e));
    }
  },
  wp = class extends Event {
    code;
    reason;
    wasClean = !0;
    constructor(e = 1e3, t = ``, n) {
      (super(`close`, n), (this.code = e), (this.reason = t));
    }
  },
  Tp = {
    Event,
    ErrorEvent: Cp,
    CloseEvent: wp,
  };
function Ep(e, t) {
  if (!e) throw Error(t);
}
function Dp(e) {
  return new e.constructor(e.type, e);
}
function Op(e) {
  return `data` in e
    ? new MessageEvent(e.type, e)
    : `code` in e || `reason` in e
      ? new wp(e.code || 1999, e.reason || `unknown reason`, e)
      : `error` in e
        ? new Cp(e.error, e)
        : new Event(e.type, e);
}
var kp =
    typeof process < `u` &&
    process.versions?.node !== void 0 &&
    typeof document > `u`
      ? Op
      : Dp,
  Ap = {
    maxReconnectionDelay: 1e4,
    minReconnectionDelay: 1e3 + Math.random() * 4e3,
    minUptime: 5e3,
    reconnectionDelayGrowFactor: 1.3,
    connectionTimeout: 4e3,
    maxRetries: 1 / 0,
    maxEnqueuedMessages: 1 / 0,
    startClosed: !1,
    debug: !1,
  },
  jp = !1,
  Mp = class e extends EventTarget {
    _ws;
    _retryCount = -1;
    _uptimeTimeout;
    _connectTimeout;
    _shouldReconnect = !0;
    _connectLock = !1;
    _binaryType = `blob`;
    _closeCalled = !1;
    _messageQueue = [];
    _url;
    _protocols;
    _options;
    constructor(e, t, n = {}) {
      (super(),
        (this._url = e),
        (this._protocols = t),
        (this._options = n),
        this._options.startClosed && (this._shouldReconnect = !1),
        this._connect());
    }
    static get CONNECTING() {
      return 0;
    }
    static get OPEN() {
      return 1;
    }
    static get CLOSING() {
      return 2;
    }
    static get CLOSED() {
      return 3;
    }
    get CONNECTING() {
      return e.CONNECTING;
    }
    get OPEN() {
      return e.OPEN;
    }
    get CLOSING() {
      return e.CLOSING;
    }
    get CLOSED() {
      return e.CLOSED;
    }
    get binaryType() {
      return this._ws ? this._ws.binaryType : this._binaryType;
    }
    set binaryType(e) {
      ((this._binaryType = e), this._ws && (this._ws.binaryType = e));
    }
    get retryCount() {
      return Math.max(this._retryCount, 0);
    }
    get bufferedAmount() {
      return (
        this._messageQueue.reduce(
          (e, t) => (
            typeof t == `string`
              ? (e += t.length)
              : t instanceof Blob
                ? (e += t.size)
                : (e += t.byteLength),
            e
          ),
          0,
        ) + (this._ws ? this._ws.bufferedAmount : 0)
      );
    }
    get extensions() {
      return this._ws ? this._ws.extensions : ``;
    }
    get protocol() {
      return this._ws ? this._ws.protocol : ``;
    }
    get readyState() {
      return this._ws
        ? this._ws.readyState
        : this._options.startClosed
          ? e.CLOSED
          : e.CONNECTING;
    }
    get url() {
      return this._ws ? this._ws.url : ``;
    }
    get shouldReconnect() {
      return this._shouldReconnect;
    }
    onclose = null;
    onerror = null;
    onmessage = null;
    onopen = null;
    close(e = 1e3, t) {
      if (
        ((this._closeCalled = !0),
        (this._shouldReconnect = !1),
        this._clearTimeouts(),
        !this._ws)
      ) {
        this._debug(`close enqueued: no ws instance`);
        return;
      }
      if (this._ws.readyState === this.CLOSED) {
        this._debug(`close: already closed`);
        return;
      }
      this._ws.close(e, t);
    }
    reconnect(e, t) {
      ((this._shouldReconnect = !0),
        (this._closeCalled = !1),
        (this._retryCount = -1),
        !this._ws ||
          this._ws.readyState === this.CLOSED ||
          this._disconnect(e, t),
        this._connect());
    }
    send(e) {
      if (this._ws && this._ws.readyState === this.OPEN)
        (this._debug(`send`, e), this._ws.send(e));
      else {
        let { maxEnqueuedMessages: t = Ap.maxEnqueuedMessages } = this._options;
        this._messageQueue.length < t &&
          (this._debug(`enqueue`, e), this._messageQueue.push(e));
      }
    }
    _debug(...e) {
      this._options.debug && console.log.apply(console, [`RWS>`, ...e]);
    }
    _getNextDelay() {
      let {
          reconnectionDelayGrowFactor: e = Ap.reconnectionDelayGrowFactor,
          minReconnectionDelay: t = Ap.minReconnectionDelay,
          maxReconnectionDelay: n = Ap.maxReconnectionDelay,
        } = this._options,
        r = 0;
      return (
        this._retryCount > 0 &&
          ((r = t * e ** (this._retryCount - 1)), r > n && (r = n)),
        this._debug(`next delay`, r),
        r
      );
    }
    _wait() {
      return new Promise((e) => {
        setTimeout(e, this._getNextDelay());
      });
    }
    _getNextProtocols(e) {
      if (!e) return Promise.resolve(null);
      if (typeof e == `string` || Array.isArray(e)) return Promise.resolve(e);
      if (typeof e == `function`) {
        let t = e();
        if (!t) return Promise.resolve(null);
        if (typeof t == `string` || Array.isArray(t)) return Promise.resolve(t);
        if (t.then) return t;
      }
      throw Error(`Invalid protocols`);
    }
    _getNextUrl(e) {
      if (typeof e == `string`) return Promise.resolve(e);
      if (typeof e == `function`) {
        let t = e();
        if (typeof t == `string`) return Promise.resolve(t);
        if (t.then) return t;
      }
      throw Error(`Invalid URL`);
    }
    _connect() {
      if (this._connectLock || !this._shouldReconnect) return;
      this._connectLock = !0;
      let {
        maxRetries: e = Ap.maxRetries,
        connectionTimeout: t = Ap.connectionTimeout,
      } = this._options;
      if (this._retryCount >= e) {
        this._debug(`max retries reached`, this._retryCount, `>=`, e);
        return;
      }
      (this._retryCount++,
        this._debug(`connect`, this._retryCount),
        this._removeListeners(),
        this._wait()
          .then(() =>
            Promise.all([
              this._getNextUrl(this._url),
              this._getNextProtocols(this._protocols || null),
            ]),
          )
          .then(([e, n]) => {
            if (this._closeCalled) {
              this._connectLock = !1;
              return;
            }
            !this._options.WebSocket &&
              typeof WebSocket > `u` &&
              !jp &&
              (console.error(`‼️ No WebSocket implementation available. You should define options.WebSocket. 

For example, if you're using node.js, run \`npm install ws\`, and then in your code:

import PartySocket from 'partysocket';
import WS from 'ws';

const partysocket = new PartySocket({
  host: "127.0.0.1:1999",
  room: "test-room",
  WebSocket: WS
});

`),
              (jp = !0));
            let r = this._options.WebSocket || WebSocket;
            (this._debug(`connect`, {
              url: e,
              protocols: n,
            }),
              (this._ws = n ? new r(e, n) : new r(e)),
              (this._ws.binaryType = this._binaryType),
              (this._connectLock = !1),
              this._addListeners(),
              (this._connectTimeout = setTimeout(
                () => this._handleTimeout(),
                t,
              )));
          })
          .catch((e) => {
            ((this._connectLock = !1),
              this._handleError(new Tp.ErrorEvent(Error(e.message), this)));
          }));
    }
    _handleTimeout() {
      (this._debug(`timeout event`),
        this._handleError(new Tp.ErrorEvent(Error(`TIMEOUT`), this)));
    }
    _disconnect(e = 1e3, t) {
      if ((this._clearTimeouts(), this._ws)) {
        this._removeListeners();
        try {
          (this._ws.close(e, t),
            this._handleClose(new Tp.CloseEvent(e, t, this)));
        } catch {}
      }
    }
    _acceptOpen() {
      (this._debug(`accept open`), (this._retryCount = 0));
    }
    _handleOpen = (e) => {
      this._debug(`open event`);
      let { minUptime: t = Ap.minUptime } = this._options;
      (clearTimeout(this._connectTimeout),
        (this._uptimeTimeout = setTimeout(() => this._acceptOpen(), t)),
        Ep(this._ws, `WebSocket is not defined`),
        (this._ws.binaryType = this._binaryType),
        this._messageQueue.forEach((e) => this._ws?.send(e)),
        (this._messageQueue = []),
        this.onopen && this.onopen(e),
        this.dispatchEvent(kp(e)));
    };
    _handleMessage = (e) => {
      (this._debug(`message event`),
        this.onmessage && this.onmessage(e),
        this.dispatchEvent(kp(e)));
    };
    _handleError = (e) => {
      (this._debug(`error event`, e.message),
        this._disconnect(void 0, e.message === `TIMEOUT` ? `timeout` : void 0),
        this.onerror && this.onerror(e),
        this._debug(`exec error listeners`),
        this.dispatchEvent(kp(e)),
        this._connect());
    };
    _handleClose = (e) => {
      (this._debug(`close event`),
        this._clearTimeouts(),
        this._shouldReconnect && this._connect(),
        this.onclose && this.onclose(e),
        this.dispatchEvent(kp(e)));
    };
    _removeListeners() {
      this._ws &&
        (this._debug(`removeListeners`),
        this._ws.removeEventListener(`open`, this._handleOpen),
        this._ws.removeEventListener(`close`, this._handleClose),
        this._ws.removeEventListener(`message`, this._handleMessage),
        this._ws.removeEventListener(`error`, this._handleError));
    }
    _addListeners() {
      this._ws &&
        (this._debug(`addListeners`),
        this._ws.addEventListener(`open`, this._handleOpen),
        this._ws.addEventListener(`close`, this._handleClose),
        this._ws.addEventListener(`message`, this._handleMessage),
        this._ws.addEventListener(`error`, this._handleError));
    }
    _clearTimeouts() {
      (clearTimeout(this._connectTimeout), clearTimeout(this._uptimeTimeout));
    }
  },
  Np = 1e3,
  Pp = 3e3,
  Fp = new Set([405, 409, 422, 503]),
  Ip = new Set([400, 403, 404]);
function Lp(e) {
  let t = e && typeof e == `object` ? e.status : void 0;
  return typeof t == `number` ? t : void 0;
}
function Rp(e) {
  return e instanceof Error ? e : Error(String(e));
}
var zp = class {
  constructor(e, t, n, r, i) {
    ((this.onClose = i),
      (this.listeners = new Set()),
      (this.heartbeat = null),
      (this.closed = !1),
      (this.id = r?.id ?? crypto.randomUUID()));
    let a = n.transport === `proxy`,
      o = new Mp(async () => {
        var r;
        if (this.closed) throw Error(`Actor connection is closed`);
        if (!a)
          try {
            let { websocket_url: r, token: i } = await n.mintConnectionToken(
              e,
              t,
              this.id,
            );
            return `${r}${r.includes(`?`) ? `&` : `?`}token=${encodeURIComponent(i)}`;
          } catch (e) {
            let t = Lp(e);
            if (!(n.transport !== `direct` && t !== void 0 && Fp.has(t))) {
              t !== void 0 && Ip.has(t) && this.close();
              try {
                (r = n.onMintError) == null || r.call(n, Rp(e));
              } catch {}
              throw e;
            }
            a = !0;
          }
        return Vp(
          n.host,
          e,
          t,
          this.id,
          n.appId,
          n.getAuthToken(),
          n.functionsVersion,
        );
      });
    this.ws = o;
    let s = Date.now(),
      c = () => {
        s = Date.now();
      };
    (o.addEventListener(`open`, c),
      o.addEventListener(`message`, (e) => {
        c();
        let t;
        try {
          t = JSON.parse(e.data);
        } catch {
          return;
        }
        if ((t && typeof t == `object` ? t.type : void 0) !== `__pong`)
          for (let e of this.listeners) e(t);
      }),
      (this.heartbeat = setInterval(() => {
        if (Date.now() - s > Pp) {
          (c(), o.readyState === o.OPEN && o.reconnect());
          return;
        }
        try {
          o.send(
            JSON.stringify({
              type: `__ping`,
            }),
          );
        } catch {}
      }, Np)));
  }
  subscribe(e) {
    return (
      this.listeners.add(e),
      {
        unsubscribe: () => {
          this.listeners.delete(e);
        },
      }
    );
  }
  send(e) {
    this.closed || this.ws.send(JSON.stringify(e));
  }
  close() {
    this.closed ||
      ((this.closed = !0),
      (this.heartbeat &&= (clearInterval(this.heartbeat), null)),
      this.listeners.clear(),
      this.ws.close(),
      this.onClose());
  }
};
function Bp(e, t, n, r) {
  let i = null;
  return {
    connect(a) {
      if (i) return i;
      let o = new zp(e, t, n, a, () => {
        (r.delete(o), i === o && (i = null));
      });
      return ((i = o), r.add(o), o);
    },
  };
}
function Vp(e, t, n, r, i, a, o) {
  let s = e.replace(/^(http|https|ws|wss):\/\//, ``);
  s.endsWith(`/`) && (s = s.slice(0, -1));
  let c =
      s.startsWith(`localhost:`) ||
      s.startsWith(`127.0.0.1:`) ||
      s.startsWith(`192.168.`) ||
      s.startsWith(`10.`) ||
      (s.startsWith(`172.`) &&
        s.split(`.`)[1] >= `16` &&
        s.split(`.`)[1] <= `31`) ||
      s.startsWith(`[::ffff:7f00:1]:`),
    l = new URLSearchParams([
      [`_pk`, r],
      [`app_id`, i],
      [`handler`, t],
    ]);
  return (
    a && l.append(`token`, a),
    o && l.append(`fv`, o),
    `${c ? `ws` : `wss`}://${s}/parties/${t}/${n}?${l}`
  );
}
function Hp(e, t) {
  return e && !e.startsWith(`/`) ? e : (t ?? e);
}
function Up(e) {
  let t = new Set();
  return {
    module: new Proxy(
      {},
      {
        get(n, r) {
          if (typeof r == `string` && r !== `then`)
            return (n) => Bp(r, n, e, t);
        },
      },
    ),
    closeAll: () => {
      for (let e of [...t]) e.close();
    },
  };
}
function Wp(e) {
  let {
      serverUrl: t = `https://base44.app`,
      appId: n,
      analytics: r,
      token: i,
      serviceToken: a,
      requiresAuth: o = !1,
      appBaseUrl: s,
      options: c,
      functionsVersion: l,
      headers: u,
    } = e,
    d = typeof s == `string` ? s : ``,
    f = {
      serverUrl: t,
      mountPath: `/ws-user-apps/socket.io/`,
      transports: [`websocket`],
      appId: n,
      token: i,
    },
    p = null,
    m = () => (
      (p ||= Sp({
        config: f,
      })),
      p
    ),
    h = {
      ...u,
      "X-App-Id": String(n),
    },
    g = l
      ? {
          ...h,
          "Base44-Functions-Version": l,
        }
      : h,
    _ = nd({
      baseURL: `${t}/api`,
      headers: h,
      token: i,
      onError: c?.onError,
    }),
    v = nd({
      baseURL: `${t}/api`,
      headers: g,
      token: i,
      interceptResponses: !1,
      onError: c?.onError,
    }),
    y = {
      ...h,
      ...(i
        ? {
            "on-behalf-of": `Bearer ${i}`,
          }
        : {}),
    },
    b = nd({
      baseURL: `${t}/api`,
      headers: y,
      token: a,
      onError: c?.onError,
    }),
    x = nd({
      baseURL: `${t}/api`,
      headers: g,
      token: a,
      interceptResponses: !1,
    }),
    S = nd({
      baseURL: `${t}/api`,
      headers: h,
    }),
    C = fd(_, v, n, {
      appBaseUrl: d,
      serverUrl: t,
      token: i,
    });
  if (typeof window < `u`) {
    let e = i || yd();
    e && C.setToken(e);
  }
  let w = Up({
      appId: n,
      host: Hp(t, typeof window < `u` ? window.location?.origin : void 0),
      functionsVersion: l,
      getAuthToken: () => i || yd(),
      mintConnectionToken: async (e, t, r) => {
        let a = i || yd();
        return await S.post(
          `/apps/${n}/actors/${encodeURIComponent(e)}/connection-token`,
          {
            room: t,
            connection_id: r,
          },
          {
            headers: {
              ...(a
                ? {
                    Authorization: `Bearer ${a}`,
                  }
                : {}),
              ...(l
                ? {
                    "Base44-Functions-Version": l,
                  }
                : {}),
            },
          },
        );
      },
      transport: c?.actorsTransport,
      onMintError: c?.onError,
    }),
    T = {
      entities: rd({
        axios: _,
        appId: n,
        getSocket: m,
      }),
      integrations: ld(_, n),
      connectors: vd(_, n),
      auth: C,
      functions: Cd(v, n, {
        getAuthHeaders: () => {
          let e = {},
            t = i || yd();
          return (t && (e.Authorization = `Bearer ${t}`), e);
        },
        baseURL: v.defaults?.baseURL,
      }),
      agents: wd({
        axios: _,
        getSocket: m,
        appId: n,
        serverUrl: t,
        token: i,
      }),
      aiGateway: Ed({
        serverUrl: t,
        token: i,
        appId: n,
      }),
      appLogs: Dd(_, n),
      app: Od(_, n),
      users: kd(_, n),
      analytics: Bu({
        axiosClient: _,
        serverUrl: t,
        appId: n,
        userAuthModule: C,
        enabled: r?.enabled ?? !1,
      }),
      actors: w.module,
      cleanup: () => {
        (T.analytics.cleanup(), w.closeAll(), p && p.disconnect());
      },
    },
    ee = {
      entities: rd({
        axios: b,
        appId: n,
        getSocket: m,
      }),
      integrations: ld(b, n),
      sso: pd(b, n),
      connectors: hd(b, n),
      functions: Cd(x, n, {
        getAuthHeaders: () => {
          let e = {};
          return (a && (e.Authorization = `Bearer ${a}`), e);
        },
        baseURL: x.defaults?.baseURL,
      }),
      agents: wd({
        axios: b,
        getSocket: m,
        appId: n,
        serverUrl: t,
        token: i,
      }),
      aiGateway: Ed({
        serverUrl: t,
        token: a,
        appId: n,
      }),
      appLogs: Dd(b, n),
      cleanup: () => {
        p && p.disconnect();
      },
    };
  return (
    o &&
      typeof window < `u` &&
      setTimeout(async () => {
        try {
          (await T.auth.isAuthenticated()) ||
            T.auth.redirectToLogin(window.location.href);
        } catch (e) {
          (console.error(`Authentication check failed:`, e),
            T.auth.redirectToLogin(window.location.href));
        }
      }, 0),
    {
      ...T,
      fetchWithAuth: xd({
        axios: _,
        serviceRoleAxios: b,
        appId: String(n),
        serverUrl: t,
        functionsVersion: l,
        platformHeaders: u,
      }),
      setToken(e) {
        (T.auth.setToken(e),
          p &&
            p.updateConfig({
              token: e,
            }),
          (f.token = e));
      },
      getConfig() {
        return {
          serverUrl: t,
          appId: n,
          requiresAuth: o,
        };
      },
      get asServiceRole() {
        if (!a)
          throw Error(
            `Service token is required to use asServiceRole. Please provide a serviceToken when creating the client.`,
          );
        return ee;
      },
    }
  );
}
var Gp = {
    ...(!(typeof window > `u`) &&
      new URLSearchParams(window.location.search).get(`clear_access_token`) ===
        `true` &&
      (window.localStorage.removeItem(`base44_access_token`),
      window.localStorage.removeItem(`token`)),
    {
      appId: `6aa2b4e48a6d301320179bea`,
      token: yd(),
      functionsVersion: `prod`,
      appBaseUrl: void 0,
    }),
  },
  { appId: Kp, token: qp, functionsVersion: Jp, appBaseUrl: Yp } = Gp,
  Xp = Wp({
    appId: Kp,
    token: qp,
    functionsVersion: Jp,
    serverUrl: ``,
    appBaseUrl: Yp,
  });
function Zp({}) {
  let e = ao().pathname.substring(1),
    { data: t, isFetched: n } = na({
      queryKey: [`user`],
      queryFn: async () => {
        try {
          return {
            user: await Xp.auth.me(),
            isAuthenticated: !0,
          };
        } catch {
          return {
            user: null,
            isAuthenticated: !1,
          };
        }
      },
    });
  return (0, D.jsx)(`div`, {
    className: `min-h-screen flex items-center justify-center p-6 bg-slate-50`,
    children: (0, D.jsx)(`div`, {
      className: `max-w-md w-full`,
      children: (0, D.jsxs)(`div`, {
        className: `text-center space-y-6`,
        children: [
          (0, D.jsxs)(`div`, {
            className: `space-y-2`,
            children: [
              (0, D.jsx)(`h1`, {
                className: `text-7xl font-light text-slate-300`,
                children: `404`,
              }),
              (0, D.jsx)(`div`, {
                className: `h-0.5 w-16 bg-slate-200 mx-auto`,
              }),
            ],
          }),
          (0, D.jsxs)(`div`, {
            className: `space-y-3`,
            children: [
              (0, D.jsx)(`h2`, {
                className: `text-2xl font-medium text-slate-800`,
                children: `Page Not Found`,
              }),
              (0, D.jsxs)(`p`, {
                className: `text-slate-600 leading-relaxed`,
                children: [
                  `The page `,
                  (0, D.jsxs)(`span`, {
                    className: `font-medium text-slate-700`,
                    children: [`"`, e, `"`],
                  }),
                  ` could not be found in this application.`,
                ],
              }),
            ],
          }),
          n &&
            t.isAuthenticated &&
            t.user?.role === `admin` &&
            (0, D.jsx)(`div`, {
              className: `mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200`,
              children: (0, D.jsxs)(`div`, {
                className: `flex items-start space-x-3`,
                children: [
                  (0, D.jsx)(`div`, {
                    className: `flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5`,
                    children: (0, D.jsx)(`div`, {
                      className: `w-2 h-2 rounded-full bg-orange-400`,
                    }),
                  }),
                  (0, D.jsxs)(`div`, {
                    className: `text-left space-y-1`,
                    children: [
                      (0, D.jsx)(`p`, {
                        className: `text-sm font-medium text-slate-700`,
                        children: `Admin Note`,
                      }),
                      (0, D.jsx)(`p`, {
                        className: `text-sm text-slate-600 leading-relaxed`,
                        children: `This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat.`,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          (0, D.jsx)(`div`, {
            className: `pt-6`,
            children: (0, D.jsxs)(`button`, {
              onClick: () => (window.location.href = `./`),
              className: `inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500`,
              children: [
                (0, D.jsx)(`svg`, {
                  className: `w-4 h-4 mr-2`,
                  fill: `none`,
                  stroke: `currentColor`,
                  viewBox: `0 0 24 24`,
                  children: (0, D.jsx)(`path`, {
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    strokeWidth: 2,
                    d: `M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`,
                  }),
                }),
                `Go Home`,
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
var Qp = (0, f.createContext)(),
  $p = ({ children: e }) => {
    let [t, n] = (0, f.useState)(null),
      [r, i] = (0, f.useState)(!1),
      [a, o] = (0, f.useState)(!0),
      [s, c] = (0, f.useState)(!0),
      [l, u] = (0, f.useState)(null),
      [d, p] = (0, f.useState)(!1),
      [m, h] = (0, f.useState)(null);
    (0, f.useEffect)(() => {
      g();
    }, []);
    let g = async () => {
        // RMARC is a static GitHub Pages site. Do not contact Base44 services.
        (h(null), u(null), n(null), i(!1), c(!1), o(!1), p(!0));
      },
      _ = async () => {
        try {
          o(!0);
          let e = await Xp.auth.me();
          (n(e), i(!0), o(!1), p(!0));
        } catch (e) {
          (console.error(`User auth check failed:`, e),
            o(!1),
            i(!1),
            p(!0),
            (e.status === 401 || e.status === 403) &&
              u({
                type: `auth_required`,
                message: `Authentication required`,
              }));
        }
      };
    return (0, D.jsx)(Qp.Provider, {
      value: {
        user: t,
        isAuthenticated: r,
        isLoadingAuth: a,
        isLoadingPublicSettings: s,
        authError: l,
        appPublicSettings: m,
        authChecked: d,
        logout: (e = !0) => {
          (n(null),
            i(!1),
            e ? Xp.auth.logout(window.location.href) : Xp.auth.logout());
        },
        navigateToLogin: () => {
          Xp.auth.redirectToLogin(window.location.href);
        },
        checkUserAuth: _,
        checkAppState: g,
      },
      children: e,
    });
  },
  em = () => {
    let e = (0, f.useContext)(Qp);
    if (!e) throw Error(`useAuth must be used within an AuthProvider`);
    return e;
  },
  tm = () =>
    (0, D.jsx)(`div`, {
      className: `flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-50`,
      children: (0, D.jsx)(`div`, {
        className: `max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-slate-100`,
        children: (0, D.jsxs)(`div`, {
          className: `text-center`,
          children: [
            (0, D.jsx)(`div`, {
              className: `inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100`,
              children: (0, D.jsx)(`svg`, {
                className: `w-8 h-8 text-orange-600`,
                fill: `none`,
                stroke: `currentColor`,
                viewBox: `0 0 24 24`,
                children: (0, D.jsx)(`path`, {
                  strokeLinecap: `round`,
                  strokeLinejoin: `round`,
                  strokeWidth: `2`,
                  d: `M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z`,
                }),
              }),
            }),
            (0, D.jsx)(`h1`, {
              className: `text-3xl font-bold text-slate-900 mb-4`,
              children: `Access Restricted`,
            }),
            (0, D.jsx)(`p`, {
              className: `text-slate-600 mb-8`,
              children: `You are not registered to use this application. Please contact the app administrator to request access.`,
            }),
            (0, D.jsxs)(`div`, {
              className: `p-4 bg-slate-50 rounded-md text-sm text-slate-600`,
              children: [
                (0, D.jsx)(`p`, {
                  children: `If you believe this is an error, you can:`,
                }),
                (0, D.jsxs)(`ul`, {
                  className: `list-disc list-inside mt-2 space-y-1`,
                  children: [
                    (0, D.jsx)(`li`, {
                      children: `Verify you are logged in with the correct account`,
                    }),
                    (0, D.jsx)(`li`, {
                      children: `Contact the app administrator for access`,
                    }),
                    (0, D.jsx)(`li`, {
                      children: `Try logging out and back in again`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  nm = (e) => {
    let t = e.slice(1);
    try {
      return decodeURIComponent(t);
    } catch {
      return t;
    }
  };
function rm() {
  let { pathname: e, hash: t } = ao(),
    n = oo();
  return (
    (0, f.useEffect)(() => {
      if (n !== `POP`) {
        if (t) {
          let e = nm(t),
            n = window.setTimeout(() => {
              document.getElementById(e)?.scrollIntoView({
                behavior: `smooth`,
              });
            }, 50);
          return () => window.clearTimeout(n);
        }
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: `instant`,
        });
      }
    }, [e, t, n]),
    null
  );
}
var im = (0, f.createContext)({});
function am(e) {
  let t = (0, f.useRef)(null);
  return (t.current === null && (t.current = e()), t.current);
}
var om = (0, f.createContext)(null),
  sm = (0, f.createContext)({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: `never`,
  }),
  cm = class extends f.Component {
    getSnapshotBeforeUpdate(e) {
      let t = this.props.childRef.current;
      if (t && e.isPresent && !this.props.isPresent) {
        let e = this.props.sizeRef.current;
        ((e.height = t.offsetHeight || 0),
          (e.width = t.offsetWidth || 0),
          (e.top = t.offsetTop),
          (e.left = t.offsetLeft));
      }
      return null;
    }
    componentDidUpdate() {}
    render() {
      return this.props.children;
    }
  };
function lm({ children: e, isPresent: t }) {
  let n = (0, f.useId)(),
    r = (0, f.useRef)(null),
    i = (0, f.useRef)({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
    }),
    { nonce: a } = (0, f.useContext)(sm);
  return (
    (0, f.useInsertionEffect)(() => {
      let { width: e, height: o, top: s, left: c } = i.current;
      if (t || !r.current || !e || !o) return;
      r.current.dataset.motionPopId = n;
      let l = document.createElement(`style`);
      return (
        a && (l.nonce = a),
        document.head.appendChild(l),
        l.sheet &&
          l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${o}px !important;
            top: ${s}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(l);
        }
      );
    }, [t]),
    (0, D.jsx)(cm, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: f.cloneElement(e, {
        ref: r,
      }),
    })
  );
}
var um = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: a,
  mode: o,
}) => {
  let s = am(dm),
    c = (0, f.useId)(),
    l = (0, f.useCallback)(
      (e) => {
        s.set(e, !0);
        for (let e of s.values()) if (!e) return;
        r && r();
      },
      [s, r],
    ),
    u = (0, f.useMemo)(
      () => ({
        id: c,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: l,
        register: (e) => (s.set(e, !1), () => s.delete(e)),
      }),
      a ? [Math.random(), l] : [n, l],
    );
  return (
    (0, f.useMemo)(() => {
      s.forEach((e, t) => s.set(t, !1));
    }, [n]),
    f.useEffect(() => {
      !n && !s.size && r && r();
    }, [n]),
    o === `popLayout` &&
      (e = (0, D.jsx)(lm, {
        isPresent: n,
        children: e,
      })),
    (0, D.jsx)(om.Provider, {
      value: u,
      children: e,
    })
  );
};
function dm() {
  return new Map();
}
function fm(e = !0) {
  let t = (0, f.useContext)(om);
  if (t === null) return [!0, null];
  let { isPresent: n, onExitComplete: r, register: i } = t,
    a = (0, f.useId)();
  (0, f.useEffect)(() => {
    e && i(a);
  }, [e]);
  let o = (0, f.useCallback)(() => e && r && r(a), [a, r, e]);
  return !n && r ? [!1, o] : [!0];
}
var pm = (e) => e.key || ``;
function mm(e) {
  let t = [];
  return (
    f.Children.forEach(e, (e) => {
      (0, f.isValidElement)(e) && t.push(e);
    }),
    t
  );
}
var hm = typeof window < `u`,
  gm = hm ? f.useLayoutEffect : f.useEffect,
  _m = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: a = `sync`,
    propagate: o = !1,
  }) => {
    let [s, c] = fm(o),
      l = (0, f.useMemo)(() => mm(e), [e]),
      u = o && !s ? [] : l.map(pm),
      d = (0, f.useRef)(!0),
      p = (0, f.useRef)(l),
      m = am(() => new Map()),
      [h, g] = (0, f.useState)(l),
      [_, v] = (0, f.useState)(l);
    gm(() => {
      ((d.current = !1), (p.current = l));
      for (let e = 0; e < _.length; e++) {
        let t = pm(_[e]);
        u.includes(t) ? m.delete(t) : m.get(t) !== !0 && m.set(t, !1);
      }
    }, [_, u.length, u.join(`-`)]);
    let y = [];
    if (l !== h) {
      let e = [...l];
      for (let t = 0; t < _.length; t++) {
        let n = _[t],
          r = pm(n);
        u.includes(r) || (e.splice(t, 0, n), y.push(n));
      }
      (a === `wait` && y.length && (e = y), v(mm(e)), g(l));
      return;
    }
    let { forceRender: b } = (0, f.useContext)(im);
    return (0, D.jsx)(D.Fragment, {
      children: _.map((e) => {
        let f = pm(e),
          h = o && !s ? !1 : l === _ || u.includes(f);
        return (0, D.jsx)(
          um,
          {
            isPresent: h,
            initial: !d.current || n ? void 0 : !1,
            custom: h ? void 0 : t,
            presenceAffectsLayout: i,
            mode: a,
            onExitComplete: h
              ? void 0
              : () => {
                  if (m.has(f)) m.set(f, !0);
                  else return;
                  let e = !0;
                  (m.forEach((t) => {
                    t || (e = !1);
                  }),
                    e && (b?.(), v(p.current), o && c?.(), r && r()));
                },
            children: e,
          },
          f,
        );
      }),
    });
  },
  vm = (e) => e,
  ym = vm,
  bm = vm;
function xm(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var Sm = (e, t, n) => {
    let r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Cm = (e) => e * 1e3,
  wm = (e) => e / 1e3,
  Tm = {
    skipAnimations: !1,
    useManualTiming: !1,
  };
function Em(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1,
    a = new WeakSet(),
    o = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1,
    };
  function s(t) {
    (a.has(t) && (c.schedule(t), e()), t(o));
  }
  let c = {
    schedule: (e, i = !1, o = !1) => {
      let s = o && r ? t : n;
      return (i && a.add(e), s.has(e) || s.add(e), e);
    },
    cancel: (e) => {
      (n.delete(e), a.delete(e));
    },
    process: (e) => {
      if (((o = e), r)) {
        i = !0;
        return;
      }
      ((r = !0),
        ([t, n] = [n, t]),
        t.forEach(s),
        t.clear(),
        (r = !1),
        i && ((i = !1), c.process(e)));
    },
  };
  return c;
}
var Dm = [
    `read`,
    `resolveKeyframes`,
    `update`,
    `preRender`,
    `render`,
    `postRender`,
  ],
  Om = 40;
function km(e, t) {
  let n = !1,
    r = !0,
    i = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1,
    },
    a = () => (n = !0),
    o = Dm.reduce((e, t) => ((e[t] = Em(a)), e), {}),
    {
      read: s,
      resolveKeyframes: c,
      update: l,
      preRender: u,
      render: d,
      postRender: f,
    } = o,
    p = () => {
      let a = Tm.useManualTiming ? i.timestamp : performance.now();
      ((n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(a - i.timestamp, Om), 1)),
        (i.timestamp = a),
        (i.isProcessing = !0),
        s.process(i),
        c.process(i),
        l.process(i),
        u.process(i),
        d.process(i),
        f.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(p)));
    },
    m = () => {
      ((n = !0), (r = !0), i.isProcessing || e(p));
    };
  return {
    schedule: Dm.reduce((e, t) => {
      let r = o[t];
      return (
        (e[t] = (e, t = !1, i = !1) => (n || m(), r.schedule(e, t, i))),
        e
      );
    }, {}),
    cancel: (e) => {
      for (let t = 0; t < Dm.length; t++) o[Dm[t]].cancel(e);
    },
    state: i,
    steps: o,
  };
}
var {
    schedule: Q,
    cancel: Am,
    state: jm,
    steps: Mm,
  } = km(typeof requestAnimationFrame < `u` ? requestAnimationFrame : vm, !0),
  Nm = (0, f.createContext)({
    strict: !1,
  }),
  Pm = {
    animation: [
      `animate`,
      `variants`,
      `whileHover`,
      `whileTap`,
      `exit`,
      `whileInView`,
      `whileFocus`,
      `whileDrag`,
    ],
    exit: [`exit`],
    drag: [`drag`, `dragControls`],
    focus: [`whileFocus`],
    hover: [`whileHover`, `onHoverStart`, `onHoverEnd`],
    tap: [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`],
    pan: [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`],
    inView: [`whileInView`, `onViewportEnter`, `onViewportLeave`],
    layout: [`layout`, `layoutId`],
  },
  Fm = {};
for (let e in Pm)
  Fm[e] = {
    isEnabled: (t) => Pm[e].some((e) => !!t[e]),
  };
function Im(e) {
  for (let t in e)
    Fm[t] = {
      ...Fm[t],
      ...e[t],
    };
}
var Lm = new Set(
  `animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport`.split(
    `.`,
  ),
);
function Rm(e) {
  return (
    e.startsWith(`while`) ||
    (e.startsWith(`drag`) && e !== `draggable`) ||
    e.startsWith(`layout`) ||
    e.startsWith(`onTap`) ||
    e.startsWith(`onPan`) ||
    e.startsWith(`onLayout`) ||
    Lm.has(e)
  );
}
var zm = e({
    default: () => Bm,
  }),
  Bm,
  Vm = t(() => {
    throw (
      (Bm = {}),
      Error(
        `Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`,
      )
    );
  }),
  Hm = (e) => !Rm(e);
function Um(e) {
  e && (Hm = (t) => (t.startsWith(`on`) ? !Rm(t) : e(t)));
}
try {
  Um((Vm(), r(zm)).default);
} catch {}
function Wm(e, t, n) {
  let r = {};
  for (let i in e)
    (i !== `values` || typeof e.values != `object`) &&
      (Hm(i) ||
        (n === !0 && Rm(i)) ||
        (!t && !Rm(i)) ||
        (e.draggable && i.startsWith(`onDrag`))) &&
      (r[i] = e[i]);
  return r;
}
function Gm(e) {
  if (typeof Proxy > `u`) return e;
  let t = new Map();
  return new Proxy((...t) => e(...t), {
    get: (n, r) =>
      r === `create` ? e : (t.has(r) || t.set(r, e(r)), t.get(r)),
  });
}
var Km = (0, f.createContext)({});
function qm(e) {
  return typeof e == `string` || Array.isArray(e);
}
function Jm(e) {
  return typeof e == `object` && !!e && typeof e.start == `function`;
}
var Ym = [
    `animate`,
    `whileInView`,
    `whileFocus`,
    `whileHover`,
    `whileTap`,
    `whileDrag`,
    `exit`,
  ],
  Xm = [`initial`, ...Ym];
function Zm(e) {
  return Jm(e.animate) || Xm.some((t) => qm(e[t]));
}
function Qm(e) {
  return !!(Zm(e) || e.variants);
}
function $m(e, t) {
  if (Zm(e)) {
    let { initial: t, animate: n } = e;
    return {
      initial: t === !1 || qm(t) ? t : void 0,
      animate: qm(n) ? n : void 0,
    };
  }
  return e.inherit === !1 ? {} : t;
}
function eh(e) {
  let { initial: t, animate: n } = $m(e, (0, f.useContext)(Km));
  return (0, f.useMemo)(
    () => ({
      initial: t,
      animate: n,
    }),
    [th(t), th(n)],
  );
}
function th(e) {
  return Array.isArray(e) ? e.join(` `) : e;
}
var nh = Symbol.for(`motionComponentSymbol`);
function rh(e) {
  return (
    e &&
    typeof e == `object` &&
    Object.prototype.hasOwnProperty.call(e, `current`)
  );
}
function ih(e, t, n) {
  return (0, f.useCallback)(
    (r) => {
      (r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == `function` ? n(r) : rh(n) && (n.current = r)));
    },
    [t],
  );
}
var ah = (e) => e.replace(/([a-z])([A-Z])/gu, `$1-$2`).toLowerCase(),
  oh = `data-` + ah(`framerAppearId`),
  { schedule: sh, cancel: ch } = km(queueMicrotask, !1),
  lh = (0, f.createContext)({});
function uh(e, t, n, r, i) {
  let { visualElement: a } = (0, f.useContext)(Km),
    o = (0, f.useContext)(Nm),
    s = (0, f.useContext)(om),
    c = (0, f.useContext)(sm).reducedMotion,
    l = (0, f.useRef)(null);
  ((r ||= o.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: c,
      })));
  let u = l.current,
    d = (0, f.useContext)(lh);
  u &&
    !u.projection &&
    i &&
    (u.type === `html` || u.type === `svg`) &&
    dh(l.current, n, i, d);
  let p = (0, f.useRef)(!1);
  (0, f.useInsertionEffect)(() => {
    u && p.current && u.update(n, s);
  });
  let m = n[oh],
    h = (0, f.useRef)(
      !!m &&
        !window.MotionHandoffIsComplete?.call(window, m) &&
        window.MotionHasOptimisedAnimation?.call(window, m),
    );
  return (
    gm(() => {
      u &&
        ((p.current = !0),
        (window.MotionIsMounted = !0),
        u.updateFeatures(),
        sh.render(u.render),
        h.current && u.animationState && u.animationState.animateChanges());
    }),
    (0, f.useEffect)(() => {
      u &&
        (!h.current && u.animationState && u.animationState.animateChanges(),
        (h.current &&=
          (queueMicrotask(() => {
            var e;
            (e = window.MotionHandoffMarkAsComplete) == null ||
              e.call(window, m);
          }),
          !1)));
    }),
    u
  );
}
function dh(e, t, n, r) {
  let {
    layoutId: i,
    layout: a,
    drag: o,
    dragConstraints: s,
    layoutScroll: c,
    layoutRoot: l,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t[`data-framer-portal-id`] ? void 0 : fh(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: !!o || (s && rh(s)),
      visualElement: e,
      animationType: typeof a == `string` ? a : `both`,
      initialPromotionConfig: r,
      layoutScroll: c,
      layoutRoot: l,
    }));
}
function fh(e) {
  if (e) return e.options.allowProjection === !1 ? fh(e.parent) : e.projection;
}
function ph({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && Im(e);
  function a(a, o) {
    let s,
      c = {
        ...(0, f.useContext)(sm),
        ...a,
        layoutId: mh(a),
      },
      { isStatic: l } = c,
      u = eh(a),
      d = r(a, l);
    if (!l && hm) {
      hh(c, e);
      let n = gh(c);
      ((s = n.MeasureLayout),
        (u.visualElement = uh(i, d, c, t, n.ProjectionNode)));
    }
    return (0, D.jsxs)(Km.Provider, {
      value: u,
      children: [
        s && u.visualElement
          ? (0, D.jsx)(s, {
              visualElement: u.visualElement,
              ...c,
            })
          : null,
        n(i, a, ih(d, u.visualElement, o), d, l, u.visualElement),
      ],
    });
  }
  a.displayName = `motion.${typeof i == `string` ? i : `create(${i.displayName ?? i.name ?? ``})`}`;
  let o = (0, f.forwardRef)(a);
  return ((o[nh] = i), o);
}
function mh({ layoutId: e }) {
  let t = (0, f.useContext)(im).id;
  return t && e !== void 0 ? t + `-` + e : e;
}
function hh(e, t) {
  (0, f.useContext)(Nm).strict;
}
function gh(e) {
  let { drag: t, layout: n } = Fm;
  if (!t && !n) return {};
  let r = {
    ...t,
    ...n,
  };
  return {
    MeasureLayout:
      t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
var _h = [
  `animate`,
  `circle`,
  `defs`,
  `desc`,
  `ellipse`,
  `g`,
  `image`,
  `line`,
  `filter`,
  `marker`,
  `mask`,
  `metadata`,
  `path`,
  `pattern`,
  `polygon`,
  `polyline`,
  `rect`,
  `stop`,
  `switch`,
  `symbol`,
  `svg`,
  `text`,
  `tspan`,
  `use`,
  `view`,
];
function vh(e) {
  return typeof e != `string` || e.includes(`-`)
    ? !1
    : !!(_h.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function yh(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((e, n) => {
      ((t[0][n] = e.get()), (t[1][n] = e.getVelocity()));
    }),
    t
  );
}
function bh(e, t, n, r) {
  if (typeof t == `function`) {
    let [i, a] = yh(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  if (
    (typeof t == `string` && (t = e.variants && e.variants[t]),
    typeof t == `function`)
  ) {
    let [i, a] = yh(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  return t;
}
var xh = (e) => Array.isArray(e),
  Sh = (e) => !!(e && typeof e == `object` && e.mix && e.toValue),
  Ch = (e) => (xh(e) ? e[e.length - 1] || 0 : e),
  wh = (e) => !!(e && e.getVelocity);
function Th(e) {
  let t = wh(e) ? e.get() : e;
  return Sh(t) ? t.toValue() : t;
}
function Eh(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  i,
  a,
) {
  let o = {
    latestValues: Oh(r, i, a, e),
    renderState: t(),
  };
  return (
    n &&
      ((o.onMount = (e) =>
        n({
          props: r,
          current: e,
          ...o,
        })),
      (o.onUpdate = (e) => n(e))),
    o
  );
}
var Dh = (e) => (t, n) => {
  let r = (0, f.useContext)(Km),
    i = (0, f.useContext)(om),
    a = () => Eh(e, t, r, i);
  return n ? a() : am(a);
};
function Oh(e, t, n, r) {
  let i = {},
    a = r(e, {});
  for (let e in a) i[e] = Th(a[e]);
  let { initial: o, animate: s } = e,
    c = Zm(e),
    l = Qm(e);
  t &&
    l &&
    !c &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
  let u = n ? n.initial === !1 : !1;
  u ||= o === !1;
  let d = u ? s : o;
  if (d && typeof d != `boolean` && !Jm(d)) {
    let t = Array.isArray(d) ? d : [d];
    for (let n = 0; n < t.length; n++) {
      let r = bh(e, t[n]);
      if (r) {
        let { transitionEnd: e, transition: t, ...n } = r;
        for (let e in n) {
          let t = n[e];
          if (Array.isArray(t)) {
            let e = u ? t.length - 1 : 0;
            t = t[e];
          }
          t !== null && (i[e] = t);
        }
        for (let t in e) i[t] = e[t];
      }
    }
  }
  return i;
}
var kh = [
    `transformPerspective`,
    `x`,
    `y`,
    `z`,
    `translateX`,
    `translateY`,
    `translateZ`,
    `scale`,
    `scaleX`,
    `scaleY`,
    `rotate`,
    `rotateX`,
    `rotateY`,
    `rotateZ`,
    `skew`,
    `skewX`,
    `skewY`,
  ],
  Ah = new Set(kh),
  jh = (e) => (t) => typeof t == `string` && t.startsWith(e),
  Mh = jh(`--`),
  Nh = jh(`var(--`),
  Ph = (e) => (Nh(e) ? Fh.test(e.split(`/*`)[0].trim()) : !1),
  Fh =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Ih = (e, t) => (t && typeof e == `number` ? t.transform(e) : e),
  Lh = (e, t, n) => (n > t ? t : n < e ? e : n),
  Rh = {
    test: (e) => typeof e == `number`,
    parse: parseFloat,
    transform: (e) => e,
  },
  zh = {
    ...Rh,
    transform: (e) => Lh(0, 1, e),
  },
  Bh = {
    ...Rh,
    default: 1,
  },
  Vh = (e) => ({
    test: (t) =>
      typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Hh = Vh(`deg`),
  Uh = Vh(`%`),
  $ = Vh(`px`),
  Wh = Vh(`vh`),
  Gh = Vh(`vw`),
  Kh = {
    ...Uh,
    parse: (e) => Uh.parse(e) / 100,
    transform: (e) => Uh.transform(e * 100),
  },
  qh = {
    borderWidth: $,
    borderTopWidth: $,
    borderRightWidth: $,
    borderBottomWidth: $,
    borderLeftWidth: $,
    borderRadius: $,
    radius: $,
    borderTopLeftRadius: $,
    borderTopRightRadius: $,
    borderBottomRightRadius: $,
    borderBottomLeftRadius: $,
    width: $,
    maxWidth: $,
    height: $,
    maxHeight: $,
    top: $,
    right: $,
    bottom: $,
    left: $,
    padding: $,
    paddingTop: $,
    paddingRight: $,
    paddingBottom: $,
    paddingLeft: $,
    margin: $,
    marginTop: $,
    marginRight: $,
    marginBottom: $,
    marginLeft: $,
    backgroundPositionX: $,
    backgroundPositionY: $,
  },
  Jh = {
    rotate: Hh,
    rotateX: Hh,
    rotateY: Hh,
    rotateZ: Hh,
    scale: Bh,
    scaleX: Bh,
    scaleY: Bh,
    scaleZ: Bh,
    skew: Hh,
    skewX: Hh,
    skewY: Hh,
    distance: $,
    translateX: $,
    translateY: $,
    translateZ: $,
    x: $,
    y: $,
    z: $,
    perspective: $,
    transformPerspective: $,
    opacity: zh,
    originX: Kh,
    originY: Kh,
    originZ: $,
  },
  Yh = {
    ...Rh,
    transform: Math.round,
  },
  Xh = {
    ...qh,
    ...Jh,
    zIndex: Yh,
    size: $,
    fillOpacity: zh,
    strokeOpacity: zh,
    numOctaves: Yh,
  },
  Zh = {
    x: `translateX`,
    y: `translateY`,
    z: `translateZ`,
    transformPerspective: `perspective`,
  },
  Qh = kh.length;
function $h(e, t, n) {
  let r = ``,
    i = !0;
  for (let a = 0; a < Qh; a++) {
    let o = kh[a],
      s = e[o];
    if (s === void 0) continue;
    let c = !0;
    if (
      ((c =
        typeof s == `number`
          ? s === +!!o.startsWith(`scale`)
          : parseFloat(s) === 0),
      !c || n)
    ) {
      let e = Ih(s, Xh[o]);
      if (!c) {
        i = !1;
        let t = Zh[o] || o;
        r += `${t}(${e}) `;
      }
      n && (t[o] = e);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, i ? `` : r)) : i && (r = `none`), r);
}
function eg(e, t, n) {
  let { style: r, vars: i, transformOrigin: a } = e,
    o = !1,
    s = !1;
  for (let e in t) {
    let n = t[e];
    if (Ah.has(e)) {
      o = !0;
      continue;
    }
    if (Mh(e)) {
      i[e] = n;
      continue;
    }
    {
      let t = Ih(n, Xh[e]);
      e.startsWith(`origin`) ? ((s = !0), (a[e] = t)) : (r[e] = t);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = $h(t, e.transform, n))
        : (r.transform &&= `none`)),
    s)
  ) {
    let { originX: e = `50%`, originY: t = `50%`, originZ: n = 0 } = a;
    r.transformOrigin = `${e} ${t} ${n}`;
  }
}
var tg = {
    offset: `stroke-dashoffset`,
    array: `stroke-dasharray`,
  },
  ng = {
    offset: `strokeDashoffset`,
    array: `strokeDasharray`,
  };
function rg(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let a = i ? tg : ng;
  e[a.offset] = $.transform(-r);
  let o = $.transform(t),
    s = $.transform(n);
  e[a.array] = `${o} ${s}`;
}
function ig(e, t, n) {
  return typeof e == `string` ? e : $.transform(t + n * e);
}
function ag(e, t, n) {
  return `${ig(t, e.x, e.width)} ${ig(n, e.y, e.height)}`;
}
function og(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: a,
    pathLength: o,
    pathSpacing: s = 1,
    pathOffset: c = 0,
    ...l
  },
  u,
  d,
) {
  if ((eg(e, l, d), u)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  let { attrs: f, style: p, dimensions: m } = e;
  (f.transform && (m && (p.transform = f.transform), delete f.transform),
    m &&
      (i !== void 0 || a !== void 0 || p.transform) &&
      (p.transformOrigin = ag(
        m,
        i === void 0 ? 0.5 : i,
        a === void 0 ? 0.5 : a,
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    o !== void 0 && rg(f, o, s, c, !1));
}
var sg = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {},
  }),
  cg = () => ({
    ...sg(),
    attrs: {},
  }),
  lg = (e) => typeof e == `string` && e.toLowerCase() === `svg`;
function ug(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (let t in n) e.style.setProperty(t, n[t]);
}
var dg = new Set([
  `baseFrequency`,
  `diffuseConstant`,
  `kernelMatrix`,
  `kernelUnitLength`,
  `keySplines`,
  `keyTimes`,
  `limitingConeAngle`,
  `markerHeight`,
  `markerWidth`,
  `numOctaves`,
  `targetX`,
  `targetY`,
  `surfaceScale`,
  `specularConstant`,
  `specularExponent`,
  `stdDeviation`,
  `tableValues`,
  `viewBox`,
  `gradientTransform`,
  `pathLength`,
  `startOffset`,
  `textLength`,
  `lengthAdjust`,
]);
function fg(e, t, n, r) {
  ug(e, t, void 0, r);
  for (let n in t.attrs) e.setAttribute(dg.has(n) ? n : ah(n), t.attrs[n]);
}
var pg = {};
function mg(e) {
  Object.assign(pg, e);
}
function hg(e, { layout: t, layoutId: n }) {
  return (
    Ah.has(e) ||
    e.startsWith(`origin`) ||
    ((t || n !== void 0) && (!!pg[e] || e === `opacity`))
  );
}
function gg(e, t, n) {
  let { style: r } = e,
    i = {};
  for (let a in r)
    (wh(r[a]) ||
      (t.style && wh(t.style[a])) ||
      hg(a, e) ||
      n?.getValue(a)?.liveStyle !== void 0) &&
      (i[a] = r[a]);
  return i;
}
function _g(e, t, n) {
  let r = gg(e, t, n);
  for (let n in e)
    if (wh(e[n]) || wh(t[n])) {
      let t =
        kh.indexOf(n) === -1
          ? n
          : `attr` + n.charAt(0).toUpperCase() + n.substring(1);
      r[t] = e[n];
    }
  return r;
}
function vg(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == `function` ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
  }
}
var yg = [`x`, `y`, `width`, `height`, `cx`, `cy`, `r`],
  bg = {
    useVisualState: Dh({
      scrapeMotionValuesFromProps: _g,
      createRenderState: cg,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: i,
      }) => {
        if (!n) return;
        let a = !!e.drag;
        if (!a) {
          for (let e in i)
            if (Ah.has(e)) {
              a = !0;
              break;
            }
        }
        if (!a) return;
        let o = !t;
        if (t)
          for (let n = 0; n < yg.length; n++) {
            let r = yg[n];
            e[r] !== t[r] && (o = !0);
          }
        o &&
          Q.read(() => {
            (vg(n, r),
              Q.render(() => {
                (og(r, i, lg(n.tagName), e.transformTemplate), fg(n, r));
              }));
          });
      },
    }),
  },
  xg = {
    useVisualState: Dh({
      scrapeMotionValuesFromProps: gg,
      createRenderState: sg,
    }),
  };
function Sg(e, t, n) {
  for (let r in t) !wh(t[r]) && !hg(r, n) && (e[r] = t[r]);
}
function Cg({ transformTemplate: e }, t) {
  return (0, f.useMemo)(() => {
    let n = sg();
    return (eg(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function wg(e, t) {
  let n = e.style || {},
    r = {};
  return (Sg(r, n, e), Object.assign(r, Cg(e, t)), r);
}
function Tg(e, t) {
  let n = {},
    r = wg(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = `none`),
      (r.touchAction =
        e.drag === !0 ? `none` : `pan-${e.drag === `x` ? `y` : `x`}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function Eg(e, t, n, r) {
  let i = (0, f.useMemo)(() => {
    let n = cg();
    return (
      og(n, t, lg(r), e.transformTemplate),
      {
        ...n.attrs,
        style: {
          ...n.style,
        },
      }
    );
  }, [t]);
  if (e.style) {
    let t = {};
    (Sg(t, e.style, e),
      (i.style = {
        ...t,
        ...i.style,
      }));
  }
  return i;
}
function Dg(e = !1) {
  return (t, n, r, { latestValues: i }, a) => {
    let o = (vh(t) ? Eg : Tg)(n, i, a, t),
      s = Wm(n, typeof t == `string`, e),
      c =
        t === f.Fragment
          ? {}
          : {
              ...s,
              ...o,
              ref: r,
            },
      { children: l } = n,
      u = (0, f.useMemo)(() => (wh(l) ? l.get() : l), [l]);
    return (0, f.createElement)(t, {
      ...c,
      children: u,
    });
  };
}
function Og(e, t) {
  return function (
    n,
    { forwardMotionProps: r } = {
      forwardMotionProps: !1,
    },
  ) {
    return ph({
      ...(vh(n) ? bg : xg),
      preloadedFeatures: e,
      useRender: Dg(r),
      createVisualElement: t,
      Component: n,
    });
  };
}
function kg(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Ag(e, t, n) {
  let r = e.getProps();
  return bh(r, t, n === void 0 ? r.custom : n, e);
}
var jg = xm(() => window.ScrollTimeline !== void 0),
  Mg = class {
    constructor(e) {
      ((this.stop = () => this.runAll(`stop`)),
        (this.animations = e.filter(Boolean)));
    }
    get finished() {
      return Promise.all(
        this.animations.map((e) => (`finished` in e ? e.finished : e)),
      );
    }
    getAll(e) {
      return this.animations[0][e];
    }
    setAll(e, t) {
      for (let n = 0; n < this.animations.length; n++)
        this.animations[n][e] = t;
    }
    attachTimeline(e, t) {
      let n = this.animations.map((n) => {
        if (jg() && n.attachTimeline) return n.attachTimeline(e);
        if (typeof t == `function`) return t(n);
      });
      return () => {
        n.forEach((e, t) => {
          (e && e(), this.animations[t].stop());
        });
      };
    }
    get time() {
      return this.getAll(`time`);
    }
    set time(e) {
      this.setAll(`time`, e);
    }
    get speed() {
      return this.getAll(`speed`);
    }
    set speed(e) {
      this.setAll(`speed`, e);
    }
    get startTime() {
      return this.getAll(`startTime`);
    }
    get duration() {
      let e = 0;
      for (let t = 0; t < this.animations.length; t++)
        e = Math.max(e, this.animations[t].duration);
      return e;
    }
    runAll(e) {
      this.animations.forEach((t) => t[e]());
    }
    flatten() {
      this.runAll(`flatten`);
    }
    play() {
      this.runAll(`play`);
    }
    pause() {
      this.runAll(`pause`);
    }
    cancel() {
      this.runAll(`cancel`);
    }
    complete() {
      this.runAll(`complete`);
    }
  },
  Ng = class extends Mg {
    then(e, t) {
      return Promise.all(this.animations).then(e).catch(t);
    }
  };
function Pg(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
var Fg = 2e4;
function Ig(e) {
  let t = 0,
    n = e.next(t);
  for (; !n.done && t < 2e4; ) ((t += 50), (n = e.next(t)));
  return t >= 2e4 ? 1 / 0 : t;
}
function Lg(e) {
  return typeof e == `function`;
}
function Rg(e, t) {
  ((e.timeline = t), (e.onfinish = null));
}
var zg = (e) => Array.isArray(e) && typeof e[0] == `number`,
  Bg = {
    linearEasing: void 0,
  };
function Vg(e, t) {
  let n = xm(e);
  return () => Bg[t] ?? n();
}
var Hg = Vg(() => {
    try {
      document.createElement(`div`).animate(
        {
          opacity: 0,
        },
        {
          easing: `linear(0, 1)`,
        },
      );
    } catch {
      return !1;
    }
    return !0;
  }, `linearEasing`),
  Ug = (e, t, n = 10) => {
    let r = ``,
      i = Math.max(Math.round(t / n), 2);
    for (let t = 0; t < i; t++) r += e(Sm(0, i - 1, t)) + `, `;
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function Wg(e) {
  return !!(
    (typeof e == `function` && Hg()) ||
    !e ||
    (typeof e == `string` && (e in Kg || Hg())) ||
    zg(e) ||
    (Array.isArray(e) && e.every(Wg))
  );
}
var Gg = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Kg = {
    linear: `linear`,
    ease: `ease`,
    easeIn: `ease-in`,
    easeOut: `ease-out`,
    easeInOut: `ease-in-out`,
    circIn: Gg([0, 0.65, 0.55, 1]),
    circOut: Gg([0.55, 0, 1, 0.45]),
    backIn: Gg([0.31, 0.01, 0.66, -0.59]),
    backOut: Gg([0.33, 1.53, 0.69, 0.99]),
  };
function qg(e, t) {
  if (e)
    return typeof e == `function` && Hg()
      ? Ug(e, t)
      : zg(e)
        ? Gg(e)
        : Array.isArray(e)
          ? e.map((e) => qg(e, t) || Kg.easeOut)
          : Kg[e];
}
var Jg = {
  x: !1,
  y: !1,
};
function Yg() {
  return Jg.x || Jg.y;
}
function Xg(e, t, n) {
  if (e instanceof Element) return [e];
  if (typeof e == `string`) {
    let r = document;
    t && (r = t.current);
    let i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
function Zg(e, t) {
  let n = Xg(e),
    r = new AbortController();
  return [
    n,
    {
      passive: !0,
      ...t,
      signal: r.signal,
    },
    () => r.abort(),
  ];
}
function Qg(e) {
  return (t) => {
    t.pointerType === `touch` || Yg() || e(t);
  };
}
function $g(e, t, n = {}) {
  let [r, i, a] = Zg(e, n),
    o = Qg((e) => {
      let { target: n } = e,
        r = t(e);
      if (typeof r != `function` || !n) return;
      let a = Qg((e) => {
        (r(e), n.removeEventListener(`pointerleave`, a));
      });
      n.addEventListener(`pointerleave`, a, i);
    });
  return (
    r.forEach((e) => {
      e.addEventListener(`pointerenter`, o, i);
    }),
    a
  );
}
var e_ = (e, t) => (t ? e === t || e_(e, t.parentElement) : !1),
  t_ = (e) =>
    e.pointerType === `mouse`
      ? typeof e.button != `number` || e.button <= 0
      : e.isPrimary !== !1,
  n_ = new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`]);
function r_(e) {
  return n_.has(e.tagName) || e.tabIndex !== -1;
}
var i_ = new WeakSet();
function a_(e) {
  return (t) => {
    t.key === `Enter` && e(t);
  };
}
function o_(e, t) {
  e.dispatchEvent(
    new PointerEvent(`pointer` + t, {
      isPrimary: !0,
      bubbles: !0,
    }),
  );
}
var s_ = (e, t) => {
  let n = e.currentTarget;
  if (!n) return;
  let r = a_(() => {
    if (i_.has(n)) return;
    o_(n, `down`);
    let e = a_(() => {
      o_(n, `up`);
    });
    (n.addEventListener(`keyup`, e, t),
      n.addEventListener(`blur`, () => o_(n, `cancel`), t));
  });
  (n.addEventListener(`keydown`, r, t),
    n.addEventListener(`blur`, () => n.removeEventListener(`keydown`, r), t));
};
function c_(e) {
  return t_(e) && !Yg();
}
function l_(e, t, n = {}) {
  let [r, i, a] = Zg(e, n),
    o = (e) => {
      let r = e.currentTarget;
      if (!c_(e) || i_.has(r)) return;
      i_.add(r);
      let a = t(e),
        o = (e, t) => {
          (window.removeEventListener(`pointerup`, s),
            window.removeEventListener(`pointercancel`, c),
            !(!c_(e) || !i_.has(r)) &&
              (i_.delete(r),
              typeof a == `function` &&
                a(e, {
                  success: t,
                })));
        },
        s = (e) => {
          o(e, n.useGlobalTarget || e_(r, e.target));
        },
        c = (e) => {
          o(e, !1);
        };
      (window.addEventListener(`pointerup`, s, i),
        window.addEventListener(`pointercancel`, c, i));
    };
  return (
    r.forEach((e) => {
      (!r_(e) && e.getAttribute(`tabindex`) === null && (e.tabIndex = 0),
        (n.useGlobalTarget ? window : e).addEventListener(`pointerdown`, o, i),
        e.addEventListener(`focus`, (e) => s_(e, i), i));
    }),
    a
  );
}
function u_(e) {
  return e === `x` || e === `y`
    ? Jg[e]
      ? null
      : ((Jg[e] = !0),
        () => {
          Jg[e] = !1;
        })
    : Jg.x || Jg.y
      ? null
      : ((Jg.x = Jg.y = !0),
        () => {
          Jg.x = Jg.y = !1;
        });
}
var d_ = new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...kh]),
  f_;
function p_() {
  f_ = void 0;
}
var m_ = {
  now: () => (
    f_ === void 0 &&
      m_.set(
        jm.isProcessing || Tm.useManualTiming
          ? jm.timestamp
          : performance.now(),
      ),
    f_
  ),
  set: (e) => {
    ((f_ = e), queueMicrotask(p_));
  },
};
function h_(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function g_(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
var __ = class {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return (h_(this.subscriptions, e), () => g_(this.subscriptions, e));
  }
  notify(e, t, n) {
    let r = this.subscriptions.length;
    if (r)
      if (r === 1) this.subscriptions[0](e, t, n);
      else
        for (let i = 0; i < r; i++) {
          let r = this.subscriptions[i];
          r && r(e, t, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};
function v_(e, t) {
  return t ? (1e3 / t) * e : 0;
}
var y_ = 30,
  b_ = (e) => !isNaN(parseFloat(e)),
  x_ = {
    current: void 0,
  },
  S_ = class {
    constructor(e, t = {}) {
      ((this.version = `11.18.2`),
        (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (e, t = !0) => {
          let n = m_.now();
          (this.updatedAt !== n && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(e),
            this.current !== this.prev &&
              this.events.change &&
              this.events.change.notify(this.current),
            t &&
              this.events.renderRequest &&
              this.events.renderRequest.notify(this.current));
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = t.owner));
    }
    setCurrent(e) {
      ((this.current = e),
        (this.updatedAt = m_.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = b_(this.current)));
    }
    setPrevFrameValue(e = this.current) {
      ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
    }
    onChange(e) {
      return this.on(`change`, e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new __());
      let n = this.events[e].add(t);
      return e === `change`
        ? () => {
            (n(),
              Q.read(() => {
                this.events.change.getSize() || this.stop();
              }));
          }
        : n;
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      ((this.passiveEffect = e), (this.stopPassiveEffect = t));
    }
    set(e, t = !0) {
      !t || !this.passiveEffect
        ? this.updateAndNotify(e, t)
        : this.passiveEffect(e, this.updateAndNotify);
    }
    setWithVelocity(e, t, n) {
      (this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n));
    }
    jump(e, t = !0) {
      (this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
    get() {
      return (x_.current && x_.current.push(this), this.current);
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = m_.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        e - this.updatedAt > y_
      )
        return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, y_);
      return v_(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          ((this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify());
        }).then(() => {
          (this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation());
        })
      );
    }
    stop() {
      (this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation());
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      (this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
  };
function C_(e, t) {
  return new S_(e, t);
}
function w_(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, C_(n));
}
function T_(e, t) {
  let { transitionEnd: n = {}, transition: r = {}, ...i } = Ag(e, t) || {};
  i = {
    ...i,
    ...n,
  };
  for (let t in i) w_(e, t, Ch(i[t]));
}
function E_(e) {
  return !!(wh(e) && e.add);
}
function D_(e, t) {
  let n = e.getValue(`willChange`);
  if (E_(n)) return n.add(t);
}
function O_(e) {
  return e.props[oh];
}
var k_ = {
    current: !1,
  },
  A_ = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  j_ = 1e-7,
  M_ = 12;
function N_(e, t, n, r, i) {
  let a,
    o,
    s = 0;
  do ((o = t + (n - t) / 2), (a = A_(o, r, i) - e), a > 0 ? (n = o) : (t = o));
  while (Math.abs(a) > j_ && ++s < M_);
  return o;
}
function P_(e, t, n, r) {
  if (e === t && n === r) return vm;
  let i = (t) => N_(t, 0, 1, e, n);
  return (e) => (e === 0 || e === 1 ? e : A_(i(e), t, r));
}
var F_ = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  I_ = (e) => (t) => 1 - e(1 - t),
  L_ = P_(0.33, 1.53, 0.69, 0.99),
  R_ = I_(L_),
  z_ = F_(R_),
  B_ = (e) => ((e *= 2) < 1 ? 0.5 * R_(e) : 0.5 * (2 - 2 ** (-10 * (e - 1)))),
  V_ = (e) => 1 - Math.sin(Math.acos(e)),
  H_ = I_(V_),
  U_ = F_(V_),
  W_ = (e) => /^0[^.\s]+$/u.test(e);
function G_(e) {
  return typeof e == `number`
    ? e === 0
    : e === null || e === `none` || e === `0` || W_(e);
}
var K_ = (e) => Math.round(e * 1e5) / 1e5,
  q_ = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function J_(e) {
  return e == null;
}
var Y_ =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  X_ = (e, t) => (n) =>
    !!(
      (typeof n == `string` && Y_.test(n) && n.startsWith(e)) ||
      (t && !J_(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Z_ = (e, t, n) => (r) => {
    if (typeof r != `string`) return r;
    let [i, a, o, s] = r.match(q_);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(a),
      [n]: parseFloat(o),
      alpha: s === void 0 ? 1 : parseFloat(s),
    };
  },
  Q_ = (e) => Lh(0, 255, e),
  $_ = {
    ...Rh,
    transform: (e) => Math.round(Q_(e)),
  },
  ev = {
    test: X_(`rgb`, `red`),
    parse: Z_(`red`, `green`, `blue`),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      `rgba(` +
      $_.transform(e) +
      `, ` +
      $_.transform(t) +
      `, ` +
      $_.transform(n) +
      `, ` +
      K_(zh.transform(r)) +
      `)`,
  };
function tv(e) {
  let t = ``,
    n = ``,
    r = ``,
    i = ``;
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
var nv = {
    test: X_(`#`),
    parse: tv,
    transform: ev.transform,
  },
  rv = {
    test: X_(`hsl`, `hue`),
    parse: Z_(`hue`, `saturation`, `lightness`),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      `hsla(` +
      Math.round(e) +
      `, ` +
      Uh.transform(K_(t)) +
      `, ` +
      Uh.transform(K_(n)) +
      `, ` +
      K_(zh.transform(r)) +
      `)`,
  },
  iv = {
    test: (e) => ev.test(e) || nv.test(e) || rv.test(e),
    parse: (e) =>
      ev.test(e) ? ev.parse(e) : rv.test(e) ? rv.parse(e) : nv.parse(e),
    transform: (e) =>
      typeof e == `string`
        ? e
        : e.hasOwnProperty(`red`)
          ? ev.transform(e)
          : rv.transform(e),
  },
  av =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function ov(e) {
  return (
    isNaN(e) &&
    typeof e == `string` &&
    (e.match(q_)?.length || 0) + (e.match(av)?.length || 0) > 0
  );
}
var sv = `number`,
  cv = `color`,
  lv = `var`,
  uv = `var(`,
  dv = "${}",
  fv =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function pv(e) {
  let t = e.toString(),
    n = [],
    r = {
      color: [],
      number: [],
      var: [],
    },
    i = [],
    a = 0;
  return {
    values: n,
    split: t
      .replace(
        fv,
        (e) => (
          iv.test(e)
            ? (r.color.push(a), i.push(cv), n.push(iv.parse(e)))
            : e.startsWith(uv)
              ? (r.var.push(a), i.push(lv), n.push(e))
              : (r.number.push(a), i.push(sv), n.push(parseFloat(e))),
          ++a,
          dv
        ),
      )
      .split(dv),
    indexes: r,
    types: i,
  };
}
function mv(e) {
  return pv(e).values;
}
function hv(e) {
  let { split: t, types: n } = pv(e),
    r = t.length;
  return (e) => {
    let i = ``;
    for (let a = 0; a < r; a++)
      if (((i += t[a]), e[a] !== void 0)) {
        let t = n[a];
        i += t === sv ? K_(e[a]) : t === cv ? iv.transform(e[a]) : e[a];
      }
    return i;
  };
}
var gv = (e) => (typeof e == `number` ? 0 : e);
function _v(e) {
  let t = mv(e);
  return hv(e)(t.map(gv));
}
var vv = {
    test: ov,
    parse: mv,
    createTransformer: hv,
    getAnimatableNone: _v,
  },
  yv = new Set([`brightness`, `contrast`, `saturate`, `opacity`]);
function bv(e) {
  let [t, n] = e.slice(0, -1).split(`(`);
  if (t === `drop-shadow`) return e;
  let [r] = n.match(q_) || [];
  if (!r) return e;
  let i = n.replace(r, ``),
    a = +!!yv.has(t);
  return (r !== n && (a *= 100), t + `(` + a + i + `)`);
}
var xv = /\b([a-z-]*)\(.*?\)/gu,
  Sv = {
    ...vv,
    getAnimatableNone: (e) => {
      let t = e.match(xv);
      return t ? t.map(bv).join(` `) : e;
    },
  },
  Cv = {
    ...Xh,
    color: iv,
    backgroundColor: iv,
    outlineColor: iv,
    fill: iv,
    stroke: iv,
    borderColor: iv,
    borderTopColor: iv,
    borderRightColor: iv,
    borderBottomColor: iv,
    borderLeftColor: iv,
    filter: Sv,
    WebkitFilter: Sv,
  },
  wv = (e) => Cv[e];
function Tv(e, t) {
  let n = wv(e);
  return (
    n !== Sv && (n = vv),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
var Ev = new Set([`auto`, `none`, `0`]);
function Dv(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    let t = e[r];
    (typeof t == `string` && !Ev.has(t) && pv(t).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (let r of t) e[r] = Tv(n, i);
}
var Ov = (e) => e === Rh || e === $,
  kv = (e, t) => parseFloat(e.split(`, `)[t]),
  Av =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === `none` || !r) return 0;
      let i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return kv(i[1], t);
      {
        let t = r.match(/^matrix\((.+)\)$/u);
        return t ? kv(t[1], e) : 0;
      }
    },
  jv = new Set([`x`, `y`, `z`]),
  Mv = kh.filter((e) => !jv.has(e));
function Nv(e) {
  let t = [];
  return (
    Mv.forEach((n) => {
      let r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith(`scale`)));
    }),
    t
  );
}
var Pv = {
  width: ({ x: e }, { paddingLeft: t = `0`, paddingRight: n = `0` }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = `0`, paddingBottom: n = `0` }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Av(4, 13),
  y: Av(5, 14),
};
((Pv.translateX = Pv.x), (Pv.translateY = Pv.y));
var Fv = new Set(),
  Iv = !1,
  Lv = !1;
function Rv() {
  if (Lv) {
    let e = Array.from(Fv).filter((e) => e.needsMeasurement),
      t = new Set(e.map((e) => e.element)),
      n = new Map();
    (t.forEach((e) => {
      let t = Nv(e);
      t.length && (n.set(e, t), e.render());
    }),
      e.forEach((e) => e.measureInitialState()),
      t.forEach((e) => {
        e.render();
        let t = n.get(e);
        t &&
          t.forEach(([t, n]) => {
            var r;
            (r = e.getValue(t)) == null || r.set(n);
          });
      }),
      e.forEach((e) => e.measureEndState()),
      e.forEach((e) => {
        e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
      }));
  }
  ((Lv = !1), (Iv = !1), Fv.forEach((e) => e.complete()), Fv.clear());
}
function zv() {
  Fv.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (Lv = !0));
  });
}
function Bv() {
  (zv(), Rv());
}
var Vv = class {
    constructor(e, t, n, r, i, a = !1) {
      ((this.isComplete = !1),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.isScheduled = !1),
        (this.unresolvedKeyframes = [...e]),
        (this.onComplete = t),
        (this.name = n),
        (this.motionValue = r),
        (this.element = i),
        (this.isAsync = a));
    }
    scheduleResolve() {
      ((this.isScheduled = !0),
        this.isAsync
          ? (Fv.add(this),
            Iv || ((Iv = !0), Q.read(zv), Q.resolveKeyframes(Rv)))
          : (this.readKeyframes(), this.complete()));
    }
    readKeyframes() {
      let {
        unresolvedKeyframes: e,
        name: t,
        element: n,
        motionValue: r,
      } = this;
      for (let i = 0; i < e.length; i++)
        if (e[i] === null)
          if (i === 0) {
            let i = r?.get(),
              a = e[e.length - 1];
            if (i !== void 0) e[0] = i;
            else if (n && t) {
              let r = n.readValue(t, a);
              r != null && (e[0] = r);
            }
            (e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]));
          } else e[i] = e[i - 1];
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
      ((this.isComplete = !0),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        Fv.delete(this));
    }
    cancel() {
      this.isComplete || ((this.isScheduled = !1), Fv.delete(this));
    }
    resume() {
      this.isComplete || this.scheduleResolve();
    }
  },
  Hv = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Uv = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Wv(e) {
  let t = Uv.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
var Gv = 4;
function Kv(e, t, n = 1) {
  bm(
    n <= Gv,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
  );
  let [r, i] = Wv(e);
  if (!r) return;
  let a = window.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    let e = a.trim();
    return Hv(e) ? parseFloat(e) : e;
  }
  return Ph(i) ? Kv(i, t, n + 1) : i;
}
var qv = (e) => (t) => t.test(e),
  Jv = [
    Rh,
    $,
    Uh,
    Hh,
    Gh,
    Wh,
    {
      test: (e) => e === `auto`,
      parse: (e) => e,
    },
  ],
  Yv = (e) => Jv.find(qv(e)),
  Xv = class extends Vv {
    constructor(e, t, n, r, i) {
      super(e, t, n, r, i, !0);
    }
    readKeyframes() {
      let { unresolvedKeyframes: e, element: t, name: n } = this;
      if (!t || !t.current) return;
      super.readKeyframes();
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (typeof r == `string` && ((r = r.trim()), Ph(r))) {
          let i = Kv(r, t.current);
          (i !== void 0 && (e[n] = i),
            n === e.length - 1 && (this.finalKeyframe = r));
        }
      }
      if ((this.resolveNoneKeyframes(), !d_.has(n) || e.length !== 2)) return;
      let [r, i] = e,
        a = Yv(r),
        o = Yv(i);
      if (a !== o)
        if (Ov(a) && Ov(o))
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            typeof n == `string` && (e[t] = parseFloat(n));
          }
        else this.needsMeasurement = !0;
    }
    resolveNoneKeyframes() {
      let { unresolvedKeyframes: e, name: t } = this,
        n = [];
      for (let t = 0; t < e.length; t++) G_(e[t]) && n.push(t);
      n.length && Dv(e, n, t);
    }
    measureInitialState() {
      let { element: e, unresolvedKeyframes: t, name: n } = this;
      if (!e || !e.current) return;
      (n === `height` && (this.suspendedScrollY = window.pageYOffset),
        (this.measuredOrigin = Pv[n](
          e.measureViewportBox(),
          window.getComputedStyle(e.current),
        )),
        (t[0] = this.measuredOrigin));
      let r = t[t.length - 1];
      r !== void 0 && e.getValue(n, r).jump(r, !1);
    }
    measureEndState() {
      let { element: e, name: t, unresolvedKeyframes: n } = this;
      if (!e || !e.current) return;
      let r = e.getValue(t);
      r && r.jump(this.measuredOrigin, !1);
      let i = n.length - 1,
        a = n[i];
      ((n[i] = Pv[t](
        e.measureViewportBox(),
        window.getComputedStyle(e.current),
      )),
        a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
        this.removedTransforms?.length &&
          this.removedTransforms.forEach(([t, n]) => {
            e.getValue(t).set(n);
          }),
        this.resolveNoneKeyframes());
    }
  },
  Zv = (e, t) =>
    t !== `zIndex` &&
    !!(
      typeof e == `number` ||
      Array.isArray(e) ||
      (typeof e == `string` &&
        (vv.test(e) || e === `0`) &&
        !e.startsWith(`url(`))
    );
function Qv(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function $v(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === `display` || t === `visibility`) return !0;
  let a = e[e.length - 1],
    o = Zv(i, t),
    s = Zv(a, t);
  return (
    ym(
      o === s,
      `You are trying to animate ${t} from "${i}" to "${a}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${a} via the \`style\` property.`,
    ),
    !o || !s ? !1 : Qv(e) || ((n === `spring` || Lg(n)) && r)
  );
}
var ey = (e) => e !== null;
function ty(e, { repeat: t, repeatType: n = `loop` }, r) {
  let i = e.filter(ey),
    a = t && n !== `loop` && t % 2 == 1 ? 0 : i.length - 1;
  return !a || r === void 0 ? i[a] : r;
}
var ny = 40,
  ry = class {
    constructor({
      autoplay: e = !0,
      delay: t = 0,
      type: n = `keyframes`,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: a = `loop`,
      ...o
    }) {
      ((this.isStopped = !1),
        (this.hasAttemptedResolve = !1),
        (this.createdAt = m_.now()),
        (this.options = {
          autoplay: e,
          delay: t,
          type: n,
          repeat: r,
          repeatDelay: i,
          repeatType: a,
          ...o,
        }),
        this.updateFinishedPromise());
    }
    calcStartTime() {
      return this.resolvedAt && this.resolvedAt - this.createdAt > ny
        ? this.resolvedAt
        : this.createdAt;
    }
    get resolved() {
      return (
        !this._resolved && !this.hasAttemptedResolve && Bv(),
        this._resolved
      );
    }
    onKeyframesResolved(e, t) {
      ((this.resolvedAt = m_.now()), (this.hasAttemptedResolve = !0));
      let {
        name: n,
        type: r,
        velocity: i,
        delay: a,
        onComplete: o,
        onUpdate: s,
        isGenerator: c,
      } = this.options;
      if (!c && !$v(e, n, r, i))
        if (k_.current || !a) {
          (s && s(ty(e, this.options, t)),
            o && o(),
            this.resolveFinishedPromise());
          return;
        } else this.options.duration = 0;
      let l = this.initPlayback(e, t);
      l !== !1 &&
        ((this._resolved = {
          keyframes: e,
          finalKeyframe: t,
          ...l,
        }),
        this.onPostResolved());
    }
    onPostResolved() {}
    then(e, t) {
      return this.currentFinishedPromise.then(e, t);
    }
    flatten() {
      ((this.options.type = `keyframes`), (this.options.ease = `linear`));
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((e) => {
        this.resolveFinishedPromise = e;
      });
    }
  },
  iy = (e, t, n) => e + (t - e) * n;
function ay(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function oy({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    a = 0,
    o = 0;
  if (!t) i = a = o = n;
  else {
    let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - r;
    ((i = ay(s, r, e + 1 / 3)), (a = ay(s, r, e)), (o = ay(s, r, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function sy(e, t) {
  return (n) => (n > 0 ? t : e);
}
var cy = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  ly = [nv, ev, rv],
  uy = (e) => ly.find((t) => t.test(e));
function dy(e) {
  let t = uy(e);
  if (
    (ym(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`,
    ),
    !t)
  )
    return !1;
  let n = t.parse(e);
  return (t === rv && (n = oy(n)), n);
}
var fy = (e, t) => {
    let n = dy(e),
      r = dy(t);
    if (!n || !r) return sy(e, t);
    let i = {
      ...n,
    };
    return (e) => (
      (i.red = cy(n.red, r.red, e)),
      (i.green = cy(n.green, r.green, e)),
      (i.blue = cy(n.blue, r.blue, e)),
      (i.alpha = iy(n.alpha, r.alpha, e)),
      ev.transform(i)
    );
  },
  py = (e, t) => (n) => t(e(n)),
  my = (...e) => e.reduce(py),
  hy = new Set([`none`, `hidden`]);
function gy(e, t) {
  return hy.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function _y(e, t) {
  return (n) => iy(e, t, n);
}
function vy(e) {
  return typeof e == `number`
    ? _y
    : typeof e == `string`
      ? Ph(e)
        ? sy
        : iv.test(e)
          ? fy
          : Sy
      : Array.isArray(e)
        ? yy
        : typeof e == `object`
          ? iv.test(e)
            ? fy
            : by
          : sy;
}
function yy(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((e, n) => vy(e)(e, t[n]));
  return (e) => {
    for (let t = 0; t < r; t++) n[t] = i[t](e);
    return n;
  };
}
function by(e, t) {
  let n = {
      ...e,
      ...t,
    },
    r = {};
  for (let i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = vy(e[i])(e[i], t[i]));
  return (e) => {
    for (let t in r) n[t] = r[t](e);
    return n;
  };
}
function xy(e, t) {
  let n = [],
    r = {
      color: 0,
      var: 0,
      number: 0,
    };
  for (let i = 0; i < t.values.length; i++) {
    let a = t.types[i],
      o = e.indexes[a][r[a]],
      s = e.values[o] ?? 0;
    ((n[i] = s), r[a]++);
  }
  return n;
}
var Sy = (e, t) => {
  let n = vv.createTransformer(t),
    r = pv(e),
    i = pv(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (hy.has(e) && !i.values.length) || (hy.has(t) && !r.values.length)
      ? gy(e, t)
      : my(yy(xy(r, i), i.values), n)
    : (ym(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
      ),
      sy(e, t));
};
function Cy(e, t, n) {
  return typeof e == `number` && typeof t == `number` && typeof n == `number`
    ? iy(e, t, n)
    : vy(e)(e, t);
}
var wy = 5;
function Ty(e, t, n) {
  let r = Math.max(t - wy, 0);
  return v_(n - e(r), t - r);
}
var Ey = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: {
      granular: 0.01,
      default: 2,
    },
    restDelta: {
      granular: 0.005,
      default: 0.5,
    },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Dy = 0.001;
function Oy({
  duration: e = Ey.duration,
  bounce: t = Ey.bounce,
  velocity: n = Ey.velocity,
  mass: r = Ey.mass,
}) {
  let i, a;
  ym(e <= Cm(Ey.maxDuration), `Spring duration must be 10 seconds or less`);
  let o = 1 - t;
  ((o = Lh(Ey.minDamping, Ey.maxDamping, o)),
    (e = Lh(Ey.minDuration, Ey.maxDuration, wm(e))),
    o < 1
      ? ((i = (t) => {
          let r = t * o,
            i = r * e,
            a = r - n,
            s = jy(t, o),
            c = Math.exp(-i);
          return Dy - (a / s) * c;
        }),
        (a = (t) => {
          let r = t * o * e,
            a = r * n + n,
            s = o ** 2 * t ** 2 * e,
            c = Math.exp(-r),
            l = jy(t ** 2, o);
          return ((-i(t) + Dy > 0 ? -1 : 1) * ((a - s) * c)) / l;
        }))
      : ((i = (t) => -0.001 + Math.exp(-t * e) * ((t - n) * e + 1)),
        (a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)))));
  let s = 5 / e,
    c = Ay(i, a, s);
  if (((e = Cm(e)), isNaN(c)))
    return {
      stiffness: Ey.stiffness,
      damping: Ey.damping,
      duration: e,
    };
  {
    let t = c ** 2 * r;
    return {
      stiffness: t,
      damping: o * 2 * Math.sqrt(r * t),
      duration: e,
    };
  }
}
var ky = 12;
function Ay(e, t, n) {
  let r = n;
  for (let n = 1; n < ky; n++) r -= e(r) / t(r);
  return r;
}
function jy(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var My = [`duration`, `bounce`],
  Ny = [`stiffness`, `damping`, `mass`];
function Py(e, t) {
  return t.some((t) => e[t] !== void 0);
}
function Fy(e) {
  let t = {
    velocity: Ey.velocity,
    stiffness: Ey.stiffness,
    damping: Ey.damping,
    mass: Ey.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Py(e, Ny) && Py(e, My))
    if (e.visualDuration) {
      let n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        a = 2 * Lh(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = {
        ...t,
        mass: Ey.mass,
        stiffness: i,
        damping: a,
      };
    } else {
      let n = Oy(e);
      ((t = {
        ...t,
        ...n,
        mass: Ey.mass,
      }),
        (t.isResolvedFromDuration = !0));
    }
  return t;
}
function Iy(e = Ey.visualDuration, t = Ey.bounce) {
  let n =
      typeof e == `object`
        ? e
        : {
            visualDuration: e,
            keyframes: [0, 1],
            bounce: t,
          },
    { restSpeed: r, restDelta: i } = n,
    a = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    s = {
      done: !1,
      value: a,
    },
    {
      stiffness: c,
      damping: l,
      mass: u,
      duration: d,
      velocity: f,
      isResolvedFromDuration: p,
    } = Fy({
      ...n,
      velocity: -wm(n.velocity || 0),
    }),
    m = f || 0,
    h = l / (2 * Math.sqrt(c * u)),
    g = o - a,
    _ = wm(Math.sqrt(c / u)),
    v = Math.abs(g) < 5;
  ((r ||= v ? Ey.restSpeed.granular : Ey.restSpeed.default),
    (i ||= v ? Ey.restDelta.granular : Ey.restDelta.default));
  let y;
  if (h < 1) {
    let e = jy(_, h);
    y = (t) => {
      let n = Math.exp(-h * _ * t);
      return (
        o - n * (((m + h * _ * g) / e) * Math.sin(e * t) + g * Math.cos(e * t))
      );
    };
  } else if (h === 1) y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
  else {
    let e = _ * Math.sqrt(h * h - 1);
    y = (t) => {
      let n = Math.exp(-h * _ * t),
        r = Math.min(e * t, 300);
      return (
        o - (n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r))) / e
      );
    };
  }
  let b = {
    calculatedDuration: (p && d) || null,
    next: (e) => {
      let t = y(e);
      if (p) s.done = e >= d;
      else {
        let n = 0;
        h < 1 && (n = e === 0 ? Cm(m) : Ty(y, e, t));
        let a = Math.abs(n) <= r,
          c = Math.abs(o - t) <= i;
        s.done = a && c;
      }
      return ((s.value = s.done ? o : t), s);
    },
    toString: () => {
      let e = Math.min(Ig(b), Fg),
        t = Ug((t) => b.next(e * t).value, e, 30);
      return e + `ms ` + t;
    },
  };
  return b;
}
function Ly({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: s,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u,
}) {
  let d = e[0],
    f = {
      done: !1,
      value: d,
    },
    p = (e) => (s !== void 0 && e < s) || (c !== void 0 && e > c),
    m = (e) =>
      s === void 0
        ? c
        : c === void 0 || Math.abs(s - e) < Math.abs(c - e)
          ? s
          : c,
    h = n * t,
    g = d + h,
    _ = o === void 0 ? g : o(g);
  _ !== g && (h = _ - d);
  let v = (e) => -h * Math.exp(-e / r),
    y = (e) => _ + v(e),
    b = (e) => {
      let t = v(e),
        n = y(e);
      ((f.done = Math.abs(t) <= l), (f.value = f.done ? _ : n));
    },
    x,
    S,
    C = (e) => {
      p(f.value) &&
        ((x = e),
        (S = Iy({
          keyframes: [f.value, m(f.value)],
          velocity: Ty(y, e, f.value),
          damping: i,
          stiffness: a,
          restDelta: l,
          restSpeed: u,
        })));
    };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (e) => {
        let t = !1;
        return (
          !S && x === void 0 && ((t = !0), b(e), C(e)),
          x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f)
        );
      },
    }
  );
}
var Ry = P_(0.42, 0, 1, 1),
  zy = P_(0, 0, 0.58, 1),
  By = P_(0.42, 0, 0.58, 1),
  Vy = (e) => Array.isArray(e) && typeof e[0] != `number`,
  Hy = {
    linear: vm,
    easeIn: Ry,
    easeInOut: By,
    easeOut: zy,
    circIn: V_,
    circInOut: U_,
    circOut: H_,
    backIn: R_,
    backInOut: z_,
    backOut: L_,
    anticipate: B_,
  },
  Uy = (e) => {
    if (zg(e)) {
      bm(
        e.length === 4,
        `Cubic bezier arrays must contain four numerical values.`,
      );
      let [t, n, r, i] = e;
      return P_(t, n, r, i);
    }
    return typeof e == `string`
      ? (bm(Hy[e] !== void 0, `Invalid easing type '${e}'`), Hy[e])
      : e;
  };
function Wy(e, t, n) {
  let r = [],
    i = n || Cy,
    a = e.length - 1;
  for (let n = 0; n < a; n++) {
    let a = i(e[n], e[n + 1]);
    (t && (a = my(Array.isArray(t) ? t[n] || vm : t, a)), r.push(a));
  }
  return r;
}
function Gy(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let a = e.length;
  if (
    (bm(a === t.length, `Both input and output ranges must be the same length`),
    a === 1)
  )
    return () => t[0];
  if (a === 2 && t[0] === t[1]) return () => t[1];
  let o = e[0] === e[1];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = Wy(t, r, i),
    c = s.length,
    l = (n) => {
      if (o && n < e[0]) return t[0];
      let r = 0;
      if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
      let i = Sm(e[r], e[r + 1], n);
      return s[r](i);
    };
  return n ? (t) => l(Lh(e[0], e[a - 1], t)) : l;
}
function Ky(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = Sm(0, t, r);
    e.push(iy(n, 1, i));
  }
}
function qy(e) {
  let t = [0];
  return (Ky(t, e.length - 1), t);
}
function Jy(e, t) {
  return e.map((e) => e * t);
}
function Yy(e, t) {
  return e.map(() => t || By).splice(0, e.length - 1);
}
function Xy({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = `easeInOut`,
}) {
  let i = Vy(r) ? r.map(Uy) : Uy(r),
    a = {
      done: !1,
      value: t[0],
    },
    o = Gy(Jy(n && n.length === t.length ? n : qy(t), e), t, {
      ease: Array.isArray(i) ? i : Yy(t, i),
    });
  return {
    calculatedDuration: e,
    next: (t) => ((a.value = o(t)), (a.done = t >= e), a),
  };
}
var Zy = (e) => {
    let t = ({ timestamp: t }) => e(t);
    return {
      start: () => Q.update(t, !0),
      stop: () => Am(t),
      now: () => (jm.isProcessing ? jm.timestamp : m_.now()),
    };
  },
  Qy = {
    decay: Ly,
    inertia: Ly,
    tween: Xy,
    keyframes: Xy,
    spring: Iy,
  },
  $y = (e) => e / 100,
  eb = class extends ry {
    constructor(e) {
      (super(e),
        (this.holdTime = null),
        (this.cancelTime = null),
        (this.currentTime = 0),
        (this.playbackSpeed = 1),
        (this.pendingPlayState = `running`),
        (this.startTime = null),
        (this.state = `idle`),
        (this.stop = () => {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            this.state === `idle`)
          )
            return;
          this.teardown();
          let { onStop: e } = this.options;
          e && e();
        }));
      let { name: t, motionValue: n, element: r, keyframes: i } = this.options,
        a = r?.KeyframeResolver || Vv,
        o = (e, t) => this.onKeyframesResolved(e, t);
      ((this.resolver = new a(i, o, t, n, r)), this.resolver.scheduleResolve());
    }
    flatten() {
      (super.flatten(),
        this._resolved &&
          Object.assign(
            this._resolved,
            this.initPlayback(this._resolved.keyframes),
          ));
    }
    initPlayback(e) {
      let {
          type: t = `keyframes`,
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: i,
          velocity: a = 0,
        } = this.options,
        o = Lg(t) ? t : Qy[t] || Xy,
        s,
        c;
      o !== Xy &&
        typeof e[0] != `number` &&
        ((s = my($y, Cy(e[0], e[1]))), (e = [0, 100]));
      let l = o({
        ...this.options,
        keyframes: e,
      });
      (i === `mirror` &&
        (c = o({
          ...this.options,
          keyframes: [...e].reverse(),
          velocity: -a,
        })),
        l.calculatedDuration === null && (l.calculatedDuration = Ig(l)));
      let { calculatedDuration: u } = l,
        d = u + r,
        f = d * (n + 1) - r;
      return {
        generator: l,
        mirroredGenerator: c,
        mapPercentToKeyframes: s,
        calculatedDuration: u,
        resolvedDuration: d,
        totalDuration: f,
      };
    }
    onPostResolved() {
      let { autoplay: e = !0 } = this.options;
      (this.play(),
        this.pendingPlayState === `paused` || !e
          ? this.pause()
          : (this.state = this.pendingPlayState));
    }
    tick(e, t = !1) {
      let { resolved: n } = this;
      if (!n) {
        let { keyframes: e } = this.options;
        return {
          done: !0,
          value: e[e.length - 1],
        };
      }
      let {
        finalKeyframe: r,
        generator: i,
        mirroredGenerator: a,
        mapPercentToKeyframes: o,
        keyframes: s,
        calculatedDuration: c,
        totalDuration: l,
        resolvedDuration: u,
      } = n;
      if (this.startTime === null) return i.next(0);
      let {
        delay: d,
        repeat: f,
        repeatType: p,
        repeatDelay: m,
        onUpdate: h,
      } = this.options;
      (this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 &&
          (this.startTime = Math.min(e - l / this.speed, this.startTime)),
        (this.currentTime = t
          ? e
          : this.holdTime === null
            ? Math.round(e - this.startTime) * this.speed
            : this.holdTime));
      let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
        _ = this.speed >= 0 ? g < 0 : g > l;
      ((this.currentTime = Math.max(g, 0)),
        this.state === `finished` &&
          this.holdTime === null &&
          (this.currentTime = l));
      let v = this.currentTime,
        y = i;
      if (f) {
        let e = Math.min(this.currentTime, l) / u,
          t = Math.floor(e),
          n = e % 1;
        (!n && e >= 1 && (n = 1),
          n === 1 && t--,
          (t = Math.min(t, f + 1)),
          t % 2 &&
            (p === `reverse`
              ? ((n = 1 - n), m && (n -= m / u))
              : p === `mirror` && (y = a)),
          (v = Lh(0, 1, n) * u));
      }
      let b = _
        ? {
            done: !1,
            value: s[0],
          }
        : y.next(v);
      o && (b.value = o(b.value));
      let { done: x } = b;
      !_ &&
        c !== null &&
        (x = this.speed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
      let S =
        this.holdTime === null &&
        (this.state === `finished` || (this.state === `running` && x));
      return (
        S && r !== void 0 && (b.value = ty(s, this.options, r)),
        h && h(b.value),
        S && this.finish(),
        b
      );
    }
    get duration() {
      let { resolved: e } = this;
      return e ? wm(e.calculatedDuration) : 0;
    }
    get time() {
      return wm(this.currentTime);
    }
    set time(e) {
      ((e = Cm(e)),
        (this.currentTime = e),
        this.holdTime !== null || this.speed === 0
          ? (this.holdTime = e)
          : this.driver &&
            (this.startTime = this.driver.now() - e / this.speed));
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      let t = this.playbackSpeed !== e;
      ((this.playbackSpeed = e), t && (this.time = wm(this.currentTime)));
    }
    play() {
      if (
        (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
      ) {
        this.pendingPlayState = `running`;
        return;
      }
      if (this.isStopped) return;
      let { driver: e = Zy, onPlay: t, startTime: n } = this.options;
      ((this.driver ||= e((e) => this.tick(e))), t && t());
      let r = this.driver.now();
      (this.holdTime === null
        ? this.startTime
          ? this.state === `finished` && (this.startTime = r)
          : (this.startTime = n ?? this.calcStartTime())
        : (this.startTime = r - this.holdTime),
        this.state === `finished` && this.updateFinishedPromise(),
        (this.cancelTime = this.startTime),
        (this.holdTime = null),
        (this.state = `running`),
        this.driver.start());
    }
    pause() {
      if (!this._resolved) {
        this.pendingPlayState = `paused`;
        return;
      }
      ((this.state = `paused`), (this.holdTime = this.currentTime ?? 0));
    }
    complete() {
      (this.state !== `running` && this.play(),
        (this.pendingPlayState = this.state = `finished`),
        (this.holdTime = null));
    }
    finish() {
      (this.teardown(), (this.state = `finished`));
      let { onComplete: e } = this.options;
      e && e();
    }
    cancel() {
      (this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise());
    }
    teardown() {
      ((this.state = `idle`),
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        (this.startTime = this.cancelTime = null),
        this.resolver.cancel());
    }
    stopDriver() {
      this.driver &&= (this.driver.stop(), void 0);
    }
    sample(e) {
      return ((this.startTime = 0), this.tick(e, !0));
    }
  },
  tb = new Set([`opacity`, `clipPath`, `filter`, `transform`]);
function nb(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: a = 0,
    repeatType: o = `loop`,
    ease: s = `easeInOut`,
    times: c,
  } = {},
) {
  let l = {
    [t]: n,
  };
  c && (l.offset = c);
  let u = qg(s, i);
  return (
    Array.isArray(u) && (l.easing = u),
    e.animate(l, {
      delay: r,
      duration: i,
      easing: Array.isArray(u) ? `linear` : u,
      fill: `both`,
      iterations: a + 1,
      direction: o === `reverse` ? `alternate` : `normal`,
    })
  );
}
var rb = xm(() => Object.hasOwnProperty.call(Element.prototype, `animate`)),
  ib = 10,
  ab = 2e4;
function ob(e) {
  return Lg(e.type) || e.type === `spring` || !Wg(e.ease);
}
function sb(e, t) {
  let n = new eb({
      ...t,
      keyframes: e,
      repeat: 0,
      delay: 0,
      isGenerator: !0,
    }),
    r = {
      done: !1,
      value: e[0],
    },
    i = [],
    a = 0;
  for (; !r.done && a < ab; ) ((r = n.sample(a)), i.push(r.value), (a += ib));
  return {
    times: void 0,
    keyframes: i,
    duration: a - ib,
    ease: `linear`,
  };
}
var cb = {
  anticipate: B_,
  backInOut: z_,
  circInOut: U_,
};
function lb(e) {
  return e in cb;
}
var ub = class extends ry {
    constructor(e) {
      super(e);
      let { name: t, motionValue: n, element: r, keyframes: i } = this.options;
      ((this.resolver = new Xv(
        i,
        (e, t) => this.onKeyframesResolved(e, t),
        t,
        n,
        r,
      )),
        this.resolver.scheduleResolve());
    }
    initPlayback(e, t) {
      let {
        duration: n = 300,
        times: r,
        ease: i,
        type: a,
        motionValue: o,
        name: s,
        startTime: c,
      } = this.options;
      if (!o.owner || !o.owner.current) return !1;
      if (
        (typeof i == `string` && Hg() && lb(i) && (i = cb[i]), ob(this.options))
      ) {
        let {
            onComplete: t,
            onUpdate: o,
            motionValue: s,
            element: c,
            ...l
          } = this.options,
          u = sb(e, l);
        ((e = u.keyframes),
          e.length === 1 && (e[1] = e[0]),
          (n = u.duration),
          (r = u.times),
          (i = u.ease),
          (a = `keyframes`));
      }
      let l = nb(o.owner.current, s, e, {
        ...this.options,
        duration: n,
        times: r,
        ease: i,
      });
      return (
        (l.startTime = c ?? this.calcStartTime()),
        this.pendingTimeline
          ? (Rg(l, this.pendingTimeline), (this.pendingTimeline = void 0))
          : (l.onfinish = () => {
              let { onComplete: n } = this.options;
              (o.set(ty(e, this.options, t)),
                n && n(),
                this.cancel(),
                this.resolveFinishedPromise());
            }),
        {
          animation: l,
          duration: n,
          times: r,
          type: a,
          ease: i,
          keyframes: e,
        }
      );
    }
    get duration() {
      let { resolved: e } = this;
      if (!e) return 0;
      let { duration: t } = e;
      return wm(t);
    }
    get time() {
      let { resolved: e } = this;
      if (!e) return 0;
      let { animation: t } = e;
      return wm(t.currentTime || 0);
    }
    set time(e) {
      let { resolved: t } = this;
      if (!t) return;
      let { animation: n } = t;
      n.currentTime = Cm(e);
    }
    get speed() {
      let { resolved: e } = this;
      if (!e) return 1;
      let { animation: t } = e;
      return t.playbackRate;
    }
    set speed(e) {
      let { resolved: t } = this;
      if (!t) return;
      let { animation: n } = t;
      n.playbackRate = e;
    }
    get state() {
      let { resolved: e } = this;
      if (!e) return `idle`;
      let { animation: t } = e;
      return t.playState;
    }
    get startTime() {
      let { resolved: e } = this;
      if (!e) return null;
      let { animation: t } = e;
      return t.startTime;
    }
    attachTimeline(e) {
      if (!this._resolved) this.pendingTimeline = e;
      else {
        let { resolved: t } = this;
        if (!t) return vm;
        let { animation: n } = t;
        Rg(n, e);
      }
      return vm;
    }
    play() {
      if (this.isStopped) return;
      let { resolved: e } = this;
      if (!e) return;
      let { animation: t } = e;
      (t.playState === `finished` && this.updateFinishedPromise(), t.play());
    }
    pause() {
      let { resolved: e } = this;
      if (!e) return;
      let { animation: t } = e;
      t.pause();
    }
    stop() {
      if (
        (this.resolver.cancel(), (this.isStopped = !0), this.state === `idle`)
      )
        return;
      (this.resolveFinishedPromise(), this.updateFinishedPromise());
      let { resolved: e } = this;
      if (!e) return;
      let {
        animation: t,
        keyframes: n,
        duration: r,
        type: i,
        ease: a,
        times: o,
      } = e;
      if (t.playState === `idle` || t.playState === `finished`) return;
      if (this.time) {
        let {
            motionValue: e,
            onUpdate: t,
            onComplete: s,
            element: c,
            ...l
          } = this.options,
          u = new eb({
            ...l,
            keyframes: n,
            duration: r,
            type: i,
            ease: a,
            times: o,
            isGenerator: !0,
          }),
          d = Cm(this.time);
        e.setWithVelocity(u.sample(d - ib).value, u.sample(d).value, ib);
      }
      let { onStop: s } = this.options;
      (s && s(), this.cancel());
    }
    complete() {
      let { resolved: e } = this;
      e && e.animation.finish();
    }
    cancel() {
      let { resolved: e } = this;
      e && e.animation.cancel();
    }
    static supports(e) {
      let {
        motionValue: t,
        name: n,
        repeatDelay: r,
        repeatType: i,
        damping: a,
        type: o,
      } = e;
      if (!t || !t.owner || !(t.owner.current instanceof HTMLElement))
        return !1;
      let { onUpdate: s, transformTemplate: c } = t.owner.getProps();
      return (
        rb() &&
        n &&
        tb.has(n) &&
        !s &&
        !c &&
        !r &&
        i !== `mirror` &&
        a !== 0 &&
        o !== `inertia`
      );
    }
  },
  db = {
    type: `spring`,
    stiffness: 500,
    damping: 25,
    restSpeed: 10,
  },
  fb = (e) => ({
    type: `spring`,
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  pb = {
    type: `keyframes`,
    duration: 0.8,
  },
  mb = {
    type: `keyframes`,
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3,
  },
  hb = (e, { keyframes: t }) =>
    t.length > 2
      ? pb
      : Ah.has(e)
        ? e.startsWith(`scale`)
          ? fb(t[1])
          : db
        : mb;
function gb({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: a,
  repeatType: o,
  repeatDelay: s,
  from: c,
  elapsed: l,
  ...u
}) {
  return !!Object.keys(u).length;
}
var _b =
  (e, t, n, r = {}, i, a) =>
  (o) => {
    let s = Pg(r, e) || {},
      c = s.delay || r.delay || 0,
      { elapsed: l = 0 } = r;
    l -= Cm(c);
    let u = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: `easeOut`,
      velocity: t.getVelocity(),
      ...s,
      delay: -l,
      onUpdate: (e) => {
        (t.set(e), s.onUpdate && s.onUpdate(e));
      },
      onComplete: () => {
        (o(), s.onComplete && s.onComplete());
      },
      name: e,
      motionValue: t,
      element: a ? void 0 : i,
    };
    (gb(s) ||
      (u = {
        ...u,
        ...hb(e, u),
      }),
      u.duration && (u.duration = Cm(u.duration)),
      u.repeatDelay && (u.repeatDelay = Cm(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from));
    let d = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        ((u.duration = 0), u.delay === 0 && (d = !0)),
      (k_.current || Tm.skipAnimations) &&
        ((d = !0), (u.duration = 0), (u.delay = 0)),
      d && !a && t.get() !== void 0)
    ) {
      let e = ty(u.keyframes, s);
      if (e !== void 0)
        return (
          Q.update(() => {
            (u.onUpdate(e), u.onComplete());
          }),
          new Ng([])
        );
    }
    return !a && ub.supports(u) ? new ub(u) : new eb(u);
  };
function vb({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function yb(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: a = e.getDefaultTransition(), transitionEnd: o, ...s } = t;
  r && (a = r);
  let c = [],
    l = i && e.animationState && e.animationState.getState()[i];
  for (let t in s) {
    let r = e.getValue(t, e.latestValues[t] ?? null),
      i = s[t];
    if (i === void 0 || (l && vb(l, t))) continue;
    let o = {
        delay: n,
        ...Pg(a || {}, t),
      },
      u = !1;
    if (window.MotionHandoffAnimation) {
      let n = O_(e);
      if (n) {
        let e = window.MotionHandoffAnimation(n, t, Q);
        e !== null && ((o.startTime = e), (u = !0));
      }
    }
    (D_(e, t),
      r.start(
        _b(
          t,
          r,
          i,
          e.shouldReduceMotion && d_.has(t)
            ? {
                type: !1,
              }
            : o,
          e,
          u,
        ),
      ));
    let d = r.animation;
    d && c.push(d);
  }
  return (
    o &&
      Promise.all(c).then(() => {
        Q.update(() => {
          o && T_(e, o);
        });
      }),
    c
  );
}
function bb(e, t, n = {}) {
  let r = Ag(e, t, n.type === `exit` ? e.presenceContext?.custom : void 0),
    { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  let a = r ? () => Promise.all(yb(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (r = 0) => {
            let {
              delayChildren: a = 0,
              staggerChildren: o,
              staggerDirection: s,
            } = i;
            return xb(e, t, a + r, o, s, n);
          }
        : () => Promise.resolve(),
    { when: s } = i;
  if (s) {
    let [e, t] = s === `beforeChildren` ? [a, o] : [o, a];
    return e().then(() => t());
  }
  return Promise.all([a(), o(n.delay)]);
}
function xb(e, t, n = 0, r = 0, i = 1, a) {
  let o = [],
    s = (e.variantChildren.size - 1) * r,
    c = i === 1 ? (e = 0) => e * r : (e = 0) => s - e * r;
  return (
    Array.from(e.variantChildren)
      .sort(Sb)
      .forEach((e, r) => {
        (e.notify(`AnimationStart`, t),
          o.push(
            bb(e, t, {
              ...a,
              delay: n + c(r),
            }).then(() => e.notify(`AnimationComplete`, t)),
          ));
      }),
    Promise.all(o)
  );
}
function Sb(e, t) {
  return e.sortNodePosition(t);
}
function Cb(e, t, n = {}) {
  e.notify(`AnimationStart`, t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map((t) => bb(e, t, n));
    r = Promise.all(i);
  } else if (typeof t == `string`) r = bb(e, t, n);
  else {
    let i = typeof t == `function` ? Ag(e, t, n.custom) : t;
    r = Promise.all(yb(e, i, n));
  }
  return r.then(() => {
    e.notify(`AnimationComplete`, t);
  });
}
var wb = Xm.length;
function Tb(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    let t = (e.parent && Tb(e.parent)) || {};
    return (e.props.initial !== void 0 && (t.initial = e.props.initial), t);
  }
  let t = {};
  for (let n = 0; n < wb; n++) {
    let r = Xm[n],
      i = e.props[r];
    (qm(i) || i === !1) && (t[r] = i);
  }
  return t;
}
var Eb = [...Ym].reverse(),
  Db = Ym.length;
function Ob(e) {
  return (t) =>
    Promise.all(t.map(({ animation: t, options: n }) => Cb(e, t, n)));
}
function kb(e) {
  let t = Ob(e),
    n = Mb(),
    r = !0,
    i = (t) => (n, r) => {
      let i = Ag(e, r, t === `exit` ? e.presenceContext?.custom : void 0);
      if (i) {
        let { transition: e, transitionEnd: t, ...r } = i;
        n = {
          ...n,
          ...r,
          ...t,
        };
      }
      return n;
    };
  function a(n) {
    t = n(e);
  }
  function o(a) {
    let { props: o } = e,
      s = Tb(e.parent) || {},
      c = [],
      l = new Set(),
      u = {},
      d = 1 / 0;
    for (let t = 0; t < Db; t++) {
      let f = Eb[t],
        p = n[f],
        m = o[f] === void 0 ? s[f] : o[f],
        h = qm(m),
        g = f === a ? p.isActive : null;
      g === !1 && (d = t);
      let _ = m === s[f] && m !== o[f] && h;
      if (
        (_ && r && e.manuallyAnimateOnMount && (_ = !1),
        (p.protectedKeys = {
          ...u,
        }),
        (!p.isActive && g === null) ||
          (!m && !p.prevProp) ||
          Jm(m) ||
          typeof m == `boolean`)
      )
        continue;
      let v = Ab(p.prevProp, m),
        y = v || (f === a && p.isActive && !_ && h) || (t > d && h),
        b = !1,
        x = Array.isArray(m) ? m : [m],
        S = x.reduce(i(f), {});
      g === !1 && (S = {});
      let { prevResolvedValues: C = {} } = p,
        w = {
          ...C,
          ...S,
        },
        T = (t) => {
          ((y = !0),
            l.has(t) && ((b = !0), l.delete(t)),
            (p.needsAnimating[t] = !0));
          let n = e.getValue(t);
          n && (n.liveStyle = !1);
        };
      for (let e in w) {
        let t = S[e],
          n = C[e];
        if (u.hasOwnProperty(e)) continue;
        let r = !1;
        ((r = xh(t) && xh(n) ? !kg(t, n) : t !== n),
          r
            ? t == null
              ? l.add(e)
              : T(e)
            : t !== void 0 && l.has(e)
              ? T(e)
              : (p.protectedKeys[e] = !0));
      }
      ((p.prevProp = m),
        (p.prevResolvedValues = S),
        p.isActive &&
          (u = {
            ...u,
            ...S,
          }),
        r && e.blockInitialAnimation && (y = !1),
        y &&
          (!(_ && v) || b) &&
          c.push(
            ...x.map((e) => ({
              animation: e,
              options: {
                type: f,
              },
            })),
          ));
    }
    if (l.size) {
      let t = {};
      (l.forEach((n) => {
        let r = e.getBaseTarget(n),
          i = e.getValue(n);
        (i && (i.liveStyle = !0), (t[n] = r ?? null));
      }),
        c.push({
          animation: t,
        }));
    }
    let f = !!c.length;
    return (
      r &&
        (o.initial === !1 || o.initial === o.animate) &&
        !e.manuallyAnimateOnMount &&
        (f = !1),
      (r = !1),
      f ? t(c) : Promise.resolve()
    );
  }
  function s(t, r) {
    var i;
    if (n[t].isActive === r) return Promise.resolve();
    ((i = e.variantChildren) == null ||
      i.forEach((e) => e.animationState?.setActive(t, r)),
      (n[t].isActive = r));
    let a = o(t);
    for (let e in n) n[e].protectedKeys = {};
    return a;
  }
  return {
    animateChanges: o,
    setActive: s,
    setAnimateFunction: a,
    getState: () => n,
    reset: () => {
      ((n = Mb()), (r = !0));
    },
  };
}
function Ab(e, t) {
  return typeof t == `string` ? t !== e : Array.isArray(t) ? !kg(t, e) : !1;
}
function jb(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Mb() {
  return {
    animate: jb(!0),
    whileInView: jb(),
    whileHover: jb(),
    whileTap: jb(),
    whileDrag: jb(),
    whileFocus: jb(),
    exit: jb(),
  };
}
var Nb = class {
    constructor(e) {
      ((this.isMounted = !1), (this.node = e));
    }
    update() {}
  },
  Pb = class extends Nb {
    constructor(e) {
      (super(e), (e.animationState ||= kb(e)));
    }
    updateAnimationControlsSubscription() {
      let { animate: e } = this.node.getProps();
      Jm(e) && (this.unmountControls = e.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: e } = this.node.getProps(),
        { animate: t } = this.node.prevProps || {};
      e !== t && this.updateAnimationControlsSubscription();
    }
    unmount() {
      var e;
      (this.node.animationState.reset(),
        (e = this.unmountControls) == null || e.call(this));
    }
  },
  Fb = 0,
  Ib = {
    animation: {
      Feature: Pb,
    },
    exit: {
      Feature: class extends Nb {
        constructor() {
          (super(...arguments), (this.id = Fb++));
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === n) return;
          let r = this.node.animationState.setActive(`exit`, !e);
          t && !e && r.then(() => t(this.id));
        }
        mount() {
          let { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {}
      },
    },
  };
function Lb(
  e,
  t,
  n,
  r = {
    passive: !0,
  },
) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function Rb(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY,
    },
  };
}
var zb = (e) => (t) => t_(t) && e(t, Rb(t));
function Bb(e, t, n, r) {
  return Lb(e, t, zb(n), r);
}
var Vb = (e, t) => Math.abs(e - t);
function Hb(e, t) {
  let n = Vb(e.x, t.x),
    r = Vb(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
var Ub = class {
  constructor(
    e,
    t,
    { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        let e = Kb(this.lastMoveEventInfo, this.history),
          t = this.startEvent !== null,
          n =
            Hb(e.offset, {
              x: 0,
              y: 0,
            }) >= 3;
        if (!t && !n) return;
        let { point: r } = e,
          { timestamp: i } = jm;
        this.history.push({
          ...r,
          timestamp: i,
        });
        let { onStart: a, onMove: o } = this.handlers;
        (t ||
          (a && a(this.lastMoveEvent, e),
          (this.startEvent = this.lastMoveEvent)),
          o && o(this.lastMoveEvent, e));
      }),
      (this.handlePointerMove = (e, t) => {
        ((this.lastMoveEvent = e),
          (this.lastMoveEventInfo = Wb(t, this.transformPagePoint)),
          Q.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (e, t) => {
        this.end();
        let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
        if (
          (this.dragSnapToOrigin && i && i(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        let a = Kb(
          e.type === `pointercancel`
            ? this.lastMoveEventInfo
            : Wb(t, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && n && n(e, a), r && r(e, a));
      }),
      !t_(e))
    )
      return;
    ((this.dragSnapToOrigin = i),
      (this.handlers = t),
      (this.transformPagePoint = n),
      (this.contextWindow = r || window));
    let a = Wb(Rb(e), this.transformPagePoint),
      { point: o } = a,
      { timestamp: s } = jm;
    this.history = [
      {
        ...o,
        timestamp: s,
      },
    ];
    let { onSessionStart: c } = t;
    (c && c(e, Kb(a, this.history)),
      (this.removeListeners = my(
        Bb(this.contextWindow, `pointermove`, this.handlePointerMove),
        Bb(this.contextWindow, `pointerup`, this.handlePointerUp),
        Bb(this.contextWindow, `pointercancel`, this.handlePointerUp),
      )));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    (this.removeListeners && this.removeListeners(), Am(this.updatePoint));
  }
};
function Wb(e, t) {
  return t
    ? {
        point: t(e.point),
      }
    : e;
}
function Gb(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y,
  };
}
function Kb({ point: e }, t) {
  return {
    point: e,
    delta: Gb(e, Jb(t)),
    offset: Gb(e, qb(t)),
    velocity: Yb(t, 0.1),
  };
}
function qb(e) {
  return e[0];
}
function Jb(e) {
  return e[e.length - 1];
}
function Yb(e, t) {
  if (e.length < 2)
    return {
      x: 0,
      y: 0,
    };
  let n = e.length - 1,
    r = null,
    i = Jb(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Cm(t))); ) n--;
  if (!r)
    return {
      x: 0,
      y: 0,
    };
  let a = wm(i.timestamp - r.timestamp);
  if (a === 0)
    return {
      x: 0,
      y: 0,
    };
  let o = {
    x: (i.x - r.x) / a,
    y: (i.y - r.y) / a,
  };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
var Xb = 0.9999,
  Zb = 1.0001,
  Qb = -0.01,
  $b = 0.01;
function ex(e) {
  return e.max - e.min;
}
function tx(e, t, n) {
  return Math.abs(e - t) <= n;
}
function nx(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = iy(t.min, t.max, e.origin)),
    (e.scale = ex(n) / ex(t)),
    (e.translate = iy(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Xb && e.scale <= Zb) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Qb && e.translate <= $b) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function rx(e, t, n, r) {
  (nx(e.x, t.x, n.x, r ? r.originX : void 0),
    nx(e.y, t.y, n.y, r ? r.originY : void 0));
}
function ix(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + ex(t)));
}
function ax(e, t, n) {
  (ix(e.x, t.x, n.x), ix(e.y, t.y, n.y));
}
function ox(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + ex(t)));
}
function sx(e, t, n) {
  (ox(e.x, t.x, n.x), ox(e.y, t.y, n.y));
}
function cx(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? iy(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? iy(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function lx(e, t, n) {
  return {
    min: t === void 0 ? void 0 : e.min + t,
    max: n === void 0 ? void 0 : e.max + n - (e.max - e.min),
  };
}
function ux(e, { top: t, left: n, bottom: r, right: i }) {
  return {
    x: lx(e.x, n, i),
    y: lx(e.y, t, r),
  };
}
function dx(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    {
      min: n,
      max: r,
    }
  );
}
function fx(e, t) {
  return {
    x: dx(e.x, t.x),
    y: dx(e.y, t.y),
  };
}
function px(e, t) {
  let n = 0.5,
    r = ex(e),
    i = ex(t);
  return (
    i > r
      ? (n = Sm(t.min, t.max - r, e.min))
      : r > i && (n = Sm(e.min, e.max - i, t.min)),
    Lh(0, 1, n)
  );
}
function mx(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
var hx = 0.35;
function gx(e = hx) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = hx),
    {
      x: _x(e, `left`, `right`),
      y: _x(e, `top`, `bottom`),
    }
  );
}
function _x(e, t, n) {
  return {
    min: vx(e, t),
    max: vx(e, n),
  };
}
function vx(e, t) {
  return typeof e == `number` ? e : e[t] || 0;
}
var yx = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0,
  }),
  bx = () => ({
    x: yx(),
    y: yx(),
  }),
  xx = () => ({
    min: 0,
    max: 0,
  }),
  Sx = () => ({
    x: xx(),
    y: xx(),
  });
function Cx(e) {
  return [e(`x`), e(`y`)];
}
function wx({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: {
      min: t,
      max: n,
    },
    y: {
      min: e,
      max: r,
    },
  };
}
function Tx({ x: e, y: t }) {
  return {
    top: t.min,
    right: e.max,
    bottom: t.max,
    left: e.min,
  };
}
function Ex(e, t) {
  if (!t) return e;
  let n = t({
      x: e.left,
      y: e.top,
    }),
    r = t({
      x: e.right,
      y: e.bottom,
    });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x,
  };
}
function Dx(e) {
  return e === void 0 || e === 1;
}
function Ox({ scale: e, scaleX: t, scaleY: n }) {
  return !Dx(e) || !Dx(t) || !Dx(n);
}
function kx(e) {
  return (
    Ox(e) ||
    Ax(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Ax(e) {
  return jx(e.x) || jx(e.y);
}
function jx(e) {
  return e && e !== `0%`;
}
function Mx(e, t, n) {
  return n + t * (e - n);
}
function Nx(e, t, n, r, i) {
  return (i !== void 0 && (e = Mx(e, i, r)), Mx(e, n, r) + t);
}
function Px(e, t = 0, n = 1, r, i) {
  ((e.min = Nx(e.min, t, n, r, i)), (e.max = Nx(e.max, t, n, r, i)));
}
function Fx(e, { x: t, y: n }) {
  (Px(e.x, t.translate, t.scale, t.originPoint),
    Px(e.y, n.translate, n.scale, n.originPoint));
}
var Ix = 0.999999999999,
  Lx = 1.0000000000001;
function Rx(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let a, o;
  for (let s = 0; s < i; s++) {
    ((a = n[s]), (o = a.projectionDelta));
    let { visualElement: i } = a.options;
    (i && i.props.style && i.props.style.display === `contents`) ||
      (r &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        Vx(e, {
          x: -a.scroll.offset.x,
          y: -a.scroll.offset.y,
        }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Fx(e, o)),
      r && kx(a.latestValues) && Vx(e, a.latestValues));
  }
  (t.x < Lx && t.x > Ix && (t.x = 1), t.y < Lx && t.y > Ix && (t.y = 1));
}
function zx(e, t) {
  ((e.min += t), (e.max += t));
}
function Bx(e, t, n, r, i = 0.5) {
  Px(e, t, n, iy(e.min, e.max, i), r);
}
function Vx(e, t) {
  (Bx(e.x, t.x, t.scaleX, t.scale, t.originX),
    Bx(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function Hx(e, t) {
  return wx(Ex(e.getBoundingClientRect(), t));
}
function Ux(e, t, n) {
  let r = Hx(e, n),
    { scroll: i } = t;
  return (i && (zx(r.x, i.offset.x), zx(r.y, i.offset.y)), r);
}
var Wx = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Gx = new WeakMap(),
  Kx = class {
    constructor(e) {
      ((this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = {
          x: 0,
          y: 0,
        }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = Sx()),
        (this.visualElement = e));
    }
    start(e, { snapToCursor: t = !1 } = {}) {
      let { presenceContext: n } = this.visualElement;
      if (n && n.isPresent === !1) return;
      let r = (e) => {
          let { dragSnapToOrigin: n } = this.getProps();
          (n ? this.pauseAnimation() : this.stopAnimation(),
            t && this.snapToCursor(Rb(e).point));
        },
        i = (e, t) => {
          let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
          if (
            n &&
            !r &&
            (this.openDragLock && this.openDragLock(),
            (this.openDragLock = u_(n)),
            !this.openDragLock)
          )
            return;
          ((this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            Cx((e) => {
              let t = this.getAxisMotionValue(e).get() || 0;
              if (Uh.test(t)) {
                let { projection: n } = this.visualElement;
                if (n && n.layout) {
                  let r = n.layout.layoutBox[e];
                  r && (t = ex(r) * (parseFloat(t) / 100));
                }
              }
              this.originPoint[e] = t;
            }),
            i && Q.postRender(() => i(e, t)),
            D_(this.visualElement, `transform`));
          let { animationState: a } = this.visualElement;
          a && a.setActive(`whileDrag`, !0);
        },
        a = (e, t) => {
          let {
            dragPropagation: n,
            dragDirectionLock: r,
            onDirectionLock: i,
            onDrag: a,
          } = this.getProps();
          if (!n && !this.openDragLock) return;
          let { offset: o } = t;
          if (r && this.currentDirection === null) {
            ((this.currentDirection = Jx(o)),
              this.currentDirection !== null && i && i(this.currentDirection));
            return;
          }
          (this.updateAxis(`x`, t.point, o),
            this.updateAxis(`y`, t.point, o),
            this.visualElement.render(),
            a && a(e, t));
        },
        o = (e, t) => this.stop(e, t),
        s = () =>
          Cx(
            (e) =>
              this.getAnimationState(e) === `paused` &&
              this.getAxisMotionValue(e).animation?.play(),
          ),
        { dragSnapToOrigin: c } = this.getProps();
      this.panSession = new Ub(
        e,
        {
          onSessionStart: r,
          onStart: i,
          onMove: a,
          onSessionEnd: o,
          resumeAnimation: s,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: c,
          contextWindow: Wx(this.visualElement),
        },
      );
    }
    stop(e, t) {
      let n = this.isDragging;
      if ((this.cancel(), !n)) return;
      let { velocity: r } = t;
      this.startAnimation(r);
      let { onDragEnd: i } = this.getProps();
      i && Q.postRender(() => i(e, t));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: e, animationState: t } = this.visualElement;
      (e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0));
      let { dragPropagation: n } = this.getProps();
      (!n &&
        this.openDragLock &&
        (this.openDragLock(), (this.openDragLock = null)),
        t && t.setActive(`whileDrag`, !1));
    }
    updateAxis(e, t, n) {
      let { drag: r } = this.getProps();
      if (!n || !qx(e, r, this.currentDirection)) return;
      let i = this.getAxisMotionValue(e),
        a = this.originPoint[e] + n[e];
      (this.constraints &&
        this.constraints[e] &&
        (a = cx(a, this.constraints[e], this.elastic[e])),
        i.set(a));
    }
    resolveConstraints() {
      let { dragConstraints: e, dragElastic: t } = this.getProps(),
        n =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : this.visualElement.projection?.layout,
        r = this.constraints;
      (e && rh(e)
        ? (this.constraints ||= this.resolveRefConstraints())
        : (this.constraints = e && n ? ux(n.layoutBox, e) : !1),
        (this.elastic = gx(t)),
        r !== this.constraints &&
          n &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          Cx((e) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(e) &&
              (this.constraints[e] = mx(n.layoutBox[e], this.constraints[e]));
          }));
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
      if (!e || !rh(e)) return !1;
      let n = e.current;
      bm(
        n !== null,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
      );
      let { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      let i = Ux(n, r.root, this.visualElement.getTransformPagePoint()),
        a = fx(r.layout.layoutBox, i);
      if (t) {
        let e = t(Tx(a));
        ((this.hasMutatedConstraints = !!e), e && (a = wx(e)));
      }
      return a;
    }
    startAnimation(e) {
      let {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: a,
          onDragTransitionEnd: o,
        } = this.getProps(),
        s = this.constraints || {},
        c = Cx((o) => {
          if (!qx(o, t, this.currentDirection)) return;
          let c = (s && s[o]) || {};
          a &&
            (c = {
              min: 0,
              max: 0,
            });
          let l = r ? 200 : 1e6,
            u = r ? 40 : 1e7,
            d = {
              type: `inertia`,
              velocity: n ? e[o] : 0,
              bounceStiffness: l,
              bounceDamping: u,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...c,
            };
          return this.startAxisValueAnimation(o, d);
        });
      return Promise.all(c).then(o);
    }
    startAxisValueAnimation(e, t) {
      let n = this.getAxisMotionValue(e);
      return (
        D_(this.visualElement, e),
        n.start(_b(e, n, 0, t, this.visualElement, !1))
      );
    }
    stopAnimation() {
      Cx((e) => this.getAxisMotionValue(e).stop());
    }
    pauseAnimation() {
      Cx((e) => this.getAxisMotionValue(e).animation?.pause());
    }
    getAnimationState(e) {
      return this.getAxisMotionValue(e).animation?.state;
    }
    getAxisMotionValue(e) {
      let t = `_drag${e.toUpperCase()}`,
        n = this.visualElement.getProps();
      return (
        n[t] ||
        this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
      );
    }
    snapToCursor(e) {
      Cx((t) => {
        let { drag: n } = this.getProps();
        if (!qx(t, n, this.currentDirection)) return;
        let { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t);
        if (r && r.layout) {
          let { min: n, max: a } = r.layout.layoutBox[t];
          i.set(e[t] - iy(n, a, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!rh(t) || !n || !this.constraints) return;
      this.stopAnimation();
      let r = {
        x: 0,
        y: 0,
      };
      Cx((e) => {
        let t = this.getAxisMotionValue(e);
        if (t && this.constraints !== !1) {
          let n = t.get();
          r[e] = px(
            {
              min: n,
              max: n,
            },
            this.constraints[e],
          );
        }
      });
      let { transformTemplate: i } = this.visualElement.getProps();
      ((this.visualElement.current.style.transform = i ? i({}, ``) : `none`),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        Cx((t) => {
          if (!qx(t, e, null)) return;
          let n = this.getAxisMotionValue(t),
            { min: i, max: a } = this.constraints[t];
          n.set(iy(i, a, r[t]));
        }));
    }
    addListeners() {
      if (!this.visualElement.current) return;
      Gx.set(this.visualElement, this);
      let e = this.visualElement.current,
        t = Bb(e, `pointerdown`, (e) => {
          let { drag: t, dragListener: n = !0 } = this.getProps();
          t && n && this.start(e);
        }),
        n = () => {
          let { dragConstraints: e } = this.getProps();
          rh(e) &&
            e.current &&
            (this.constraints = this.resolveRefConstraints());
        },
        { projection: r } = this.visualElement,
        i = r.addEventListener(`measure`, n);
      (r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
        Q.read(n));
      let a = Lb(window, `resize`, () => this.scalePositionWithinConstraints()),
        o = r.addEventListener(
          `didUpdate`,
          ({ delta: e, hasLayoutChanged: t }) => {
            this.isDragging &&
              t &&
              (Cx((t) => {
                let n = this.getAxisMotionValue(t);
                n &&
                  ((this.originPoint[t] += e[t].translate),
                  n.set(n.get() + e[t].translate));
              }),
              this.visualElement.render());
          },
        );
      return () => {
        (a(), t(), i(), o && o());
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: a = hx,
          dragMomentum: o = !0,
        } = e;
      return {
        ...e,
        drag: t,
        dragDirectionLock: n,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: a,
        dragMomentum: o,
      };
    }
  };
function qx(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Jx(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = `y`) : Math.abs(e.x) > t && (n = `x`), n);
}
var Yx = class extends Nb {
    constructor(e) {
      (super(e),
        (this.removeGroupControls = vm),
        (this.removeListeners = vm),
        (this.controls = new Kx(e)));
    }
    mount() {
      let { dragControls: e } = this.node.getProps();
      (e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || vm));
    }
    unmount() {
      (this.removeGroupControls(), this.removeListeners());
    }
  },
  Xx = (e) => (t, n) => {
    e && Q.postRender(() => e(t, n));
  },
  Zx = class extends Nb {
    constructor() {
      (super(...arguments), (this.removePointerDownListener = vm));
    }
    onPointerDown(e) {
      this.session = new Ub(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: Wx(this.node),
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: e,
        onPanStart: t,
        onPan: n,
        onPanEnd: r,
      } = this.node.getProps();
      return {
        onSessionStart: Xx(e),
        onStart: Xx(t),
        onMove: n,
        onEnd: (e, t) => {
          (delete this.session, r && Q.postRender(() => r(e, t)));
        },
      };
    }
    mount() {
      this.removePointerDownListener = Bb(
        this.node.current,
        `pointerdown`,
        (e) => this.onPointerDown(e),
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      (this.removePointerDownListener(), this.session && this.session.end());
    }
  },
  Qx = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1,
  };
function $x(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var eS = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == `string`)
        if ($.test(e)) e = parseFloat(e);
        else return e;
      return `${$x(e, t.target.x)}% ${$x(e, t.target.y)}%`;
    },
  },
  tS = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = vv.parse(e);
      if (i.length > 5) return r;
      let a = vv.createTransformer(e),
        o = typeof i[0] == `number` ? 0 : 1,
        s = n.x.scale * t.x,
        c = n.y.scale * t.y;
      ((i[0 + o] /= s), (i[1 + o] /= c));
      let l = iy(s, c, 0.5);
      return (
        typeof i[2 + o] == `number` && (i[2 + o] /= l),
        typeof i[3 + o] == `number` && (i[3 + o] /= l),
        a(i)
      );
    },
  },
  nS = class extends f.Component {
    componentDidMount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
          layoutId: r,
        } = this.props,
        { projection: i } = e;
      (mg(iS),
        i &&
          (t.group && t.group.add(i),
          n && n.register && r && n.register(i),
          i.root.didUpdate(),
          i.addEventListener(`animationComplete`, () => {
            this.safeToRemove();
          }),
          i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove(),
          })),
        (Qx.hasEverUpdated = !0));
    }
    getSnapshotBeforeUpdate(e) {
      let {
          layoutDependency: t,
          visualElement: n,
          drag: r,
          isPresent: i,
        } = this.props,
        a = n.projection;
      return a
        ? ((a.isPresent = i),
          r || e.layoutDependency !== t || t === void 0
            ? a.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? a.promote()
              : a.relegate() ||
                Q.postRender(() => {
                  let e = a.getStack();
                  (!e || !e.members.length) && this.safeToRemove();
                })),
          null)
        : null;
    }
    componentDidUpdate() {
      let { projection: e } = this.props.visualElement;
      e &&
        (e.root.didUpdate(),
        sh.postRender(() => {
          !e.currentAnimation && e.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
        } = this.props,
        { projection: r } = e;
      r &&
        (r.scheduleCheckAfterUnmount(),
        t && t.group && t.group.remove(r),
        n && n.deregister && n.deregister(r));
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  };
function rS(e) {
  let [t, n] = fm(),
    r = (0, f.useContext)(im);
  return (0, D.jsx)(nS, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: (0, f.useContext)(lh),
    isPresent: t,
    safeToRemove: n,
  });
}
var iS = {
  borderRadius: {
    ...eS,
    applyTo: [
      `borderTopLeftRadius`,
      `borderTopRightRadius`,
      `borderBottomLeftRadius`,
      `borderBottomRightRadius`,
    ],
  },
  borderTopLeftRadius: eS,
  borderTopRightRadius: eS,
  borderBottomLeftRadius: eS,
  borderBottomRightRadius: eS,
  boxShadow: tS,
};
function aS(e, t, n) {
  let r = wh(e) ? e : C_(e);
  return (r.start(_b(``, r, t, n)), r.animation);
}
function oS(e) {
  return e instanceof SVGElement && e.tagName !== `svg`;
}
var sS = (e, t) => e.depth - t.depth,
  cS = class {
    constructor() {
      ((this.children = []), (this.isDirty = !1));
    }
    add(e) {
      (h_(this.children, e), (this.isDirty = !0));
    }
    remove(e) {
      (g_(this.children, e), (this.isDirty = !0));
    }
    forEach(e) {
      (this.isDirty && this.children.sort(sS),
        (this.isDirty = !1),
        this.children.forEach(e));
    }
  };
function lS(e, t) {
  let n = m_.now(),
    r = ({ timestamp: i }) => {
      let a = i - n;
      a >= t && (Am(r), e(a - t));
    };
  return (Q.read(r, !0), () => Am(r));
}
var uS = [`TopLeft`, `TopRight`, `BottomLeft`, `BottomRight`],
  dS = uS.length,
  fS = (e) => (typeof e == `string` ? parseFloat(e) : e),
  pS = (e) => typeof e == `number` || $.test(e);
function mS(e, t, n, r, i, a) {
  i
    ? ((e.opacity = iy(0, n.opacity === void 0 ? 1 : n.opacity, gS(r))),
      (e.opacityExit = iy(t.opacity === void 0 ? 1 : t.opacity, 0, _S(r))))
    : a &&
      (e.opacity = iy(
        t.opacity === void 0 ? 1 : t.opacity,
        n.opacity === void 0 ? 1 : n.opacity,
        r,
      ));
  for (let i = 0; i < dS; i++) {
    let a = `border${uS[i]}Radius`,
      o = hS(t, a),
      s = hS(n, a);
    (o !== void 0 || s !== void 0) &&
      ((o ||= 0),
      (s ||= 0),
      o === 0 || s === 0 || pS(o) === pS(s)
        ? ((e[a] = Math.max(iy(fS(o), fS(s), r), 0)),
          (Uh.test(s) || Uh.test(o)) && (e[a] += `%`))
        : (e[a] = s));
  }
  (t.rotate || n.rotate) && (e.rotate = iy(t.rotate || 0, n.rotate || 0, r));
}
function hS(e, t) {
  return e[t] === void 0 ? e.borderRadius : e[t];
}
var gS = vS(0, 0.5, H_),
  _S = vS(0.5, 0.95, vm);
function vS(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Sm(e, t, r)));
}
function yS(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function bS(e, t) {
  (yS(e.x, t.x), yS(e.y, t.y));
}
function xS(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function SS(e, t, n, r, i) {
  return (
    (e -= t),
    (e = Mx(e, 1 / n, r)),
    i !== void 0 && (e = Mx(e, 1 / i, r)),
    e
  );
}
function CS(e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
  if (
    (Uh.test(t) &&
      ((t = parseFloat(t)), (t = iy(o.min, o.max, t / 100) - o.min)),
    typeof t != `number`)
  )
    return;
  let s = iy(a.min, a.max, r);
  (e === a && (s -= t),
    (e.min = SS(e.min, t, n, s, i)),
    (e.max = SS(e.max, t, n, s, i)));
}
function wS(e, t, [n, r, i], a, o) {
  CS(e, t[n], t[r], t[i], t.scale, a, o);
}
var TS = [`x`, `scaleX`, `originX`],
  ES = [`y`, `scaleY`, `originY`];
function DS(e, t, n, r) {
  (wS(e.x, t, TS, n ? n.x : void 0, r ? r.x : void 0),
    wS(e.y, t, ES, n ? n.y : void 0, r ? r.y : void 0));
}
function OS(e) {
  return e.translate === 0 && e.scale === 1;
}
function kS(e) {
  return OS(e.x) && OS(e.y);
}
function AS(e, t) {
  return e.min === t.min && e.max === t.max;
}
function jS(e, t) {
  return AS(e.x, t.x) && AS(e.y, t.y);
}
function MS(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function NS(e, t) {
  return MS(e.x, t.x) && MS(e.y, t.y);
}
function PS(e) {
  return ex(e.x) / ex(e.y);
}
function FS(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
var IS = class {
  constructor() {
    this.members = [];
  }
  add(e) {
    (h_(this.members, e), e.scheduleRender());
  }
  remove(e) {
    if (
      (g_(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      let e = this.members[this.members.length - 1];
      e && this.promote(e);
    }
  }
  relegate(e) {
    let t = this.members.findIndex((t) => e === t);
    if (t === 0) return !1;
    let n;
    for (let e = t; e >= 0; e--) {
      let t = this.members[e];
      if (t.isPresent !== !1) {
        n = t;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(e, t) {
    let n = this.lead;
    if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
      (n.instance && n.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = n),
        t && (e.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((e.snapshot = n.snapshot),
          (e.snapshot.latestValues = n.animationValues || n.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0));
      let { crossfade: r } = e.options;
      r === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      let { options: t, resumingFrom: n } = e;
      (t.onExitComplete && t.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
};
function LS(e, t, n) {
  let r = ``,
    i = e.x.translate / t.x,
    a = e.y.translate / t.y,
    o = n?.z || 0;
  if (
    ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let {
      transformPerspective: e,
      rotate: t,
      rotateX: i,
      rotateY: a,
      skewX: o,
      skewY: s,
    } = n;
    (e && (r = `perspective(${e}px) ${r}`),
      t && (r += `rotate(${t}deg) `),
      i && (r += `rotateX(${i}deg) `),
      a && (r += `rotateY(${a}deg) `),
      o && (r += `skewX(${o}deg) `),
      s && (r += `skewY(${s}deg) `));
  }
  let s = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return ((s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || `none`);
}
var RS = {
    type: `projectionFrame`,
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  zS = typeof window < `u` && window.MotionDebug !== void 0,
  BS = [``, `X`, `Y`, `Z`],
  VS = {
    visibility: `hidden`,
  },
  HS = 1e3,
  US = 0;
function WS(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function GS(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  let { visualElement: t } = e.options;
  if (!t) return;
  let n = O_(t);
  if (window.MotionHasOptimisedAnimation(n, `transform`)) {
    let { layout: t, layoutId: r } = e.options;
    window.MotionCancelOptimisedAnimation(n, `transform`, Q, !(t || r));
  }
  let { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && GS(r);
}
function KS({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(e = {}, n = t?.()) {
      ((this.id = US++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = {
          x: 1,
          y: 1,
        }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            zS &&
              (RS.totalNodes =
                RS.resolvedTargetDeltas =
                RS.recalculatedProjection =
                  0),
            this.nodes.forEach(YS),
            this.nodes.forEach(nC),
            this.nodes.forEach(rC),
            this.nodes.forEach(XS),
            zS && window.MotionDebug.record(RS));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = e),
        (this.root = n ? n.root || n : this),
        (this.path = n ? [...n.path, n] : []),
        (this.parent = n),
        (this.depth = n ? n.depth + 1 : 0));
      for (let e = 0; e < this.path.length; e++)
        this.path[e].shouldResetTransform = !0;
      this.root === this && (this.nodes = new cS());
    }
    addEventListener(e, t) {
      return (
        this.eventHandlers.has(e) || this.eventHandlers.set(e, new __()),
        this.eventHandlers.get(e).add(t)
      );
    }
    notifyListeners(e, ...t) {
      let n = this.eventHandlers.get(e);
      n && n.notify(...t);
    }
    hasListeners(e) {
      return this.eventHandlers.has(e);
    }
    mount(t, n = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = oS(t)), (this.instance = t));
      let { layoutId: r, layout: i, visualElement: a } = this.options;
      if (
        (a && !a.current && a.mount(t),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        n && (i || r) && (this.isLayoutDirty = !0),
        e)
      ) {
        let n,
          r = () => (this.root.updateBlockedByResize = !1);
        e(t, () => {
          ((this.root.updateBlockedByResize = !0),
            n && n(),
            (n = lS(r, 250)),
            Qx.hasAnimatedSinceResize &&
              ((Qx.hasAnimatedSinceResize = !1), this.nodes.forEach(tC)));
        });
      }
      (r && this.root.registerSharedNode(r, this),
        this.options.animate !== !1 &&
          a &&
          (r || i) &&
          this.addEventListener(
            `didUpdate`,
            ({
              delta: e,
              hasLayoutChanged: t,
              hasRelativeTargetChanged: n,
              layout: r,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              let i = this.options.transition || a.getDefaultTransition() || uC,
                { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } =
                  a.getProps(),
                c = !this.targetLayout || !NS(this.targetLayout, r) || n,
                l = !t && n;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                l ||
                (t && (c || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(e, l));
                let t = {
                  ...Pg(i, `layout`),
                  onPlay: o,
                  onComplete: s,
                };
                ((a.shouldReduceMotion || this.options.layoutRoot) &&
                  ((t.delay = 0), (t.type = !1)),
                  this.startAnimation(t));
              } else
                (t || tC(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = r;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      let e = this.getStack();
      (e && e.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Am(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(iC),
        this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: e } = this.options;
      return e && e.getProps().transformTemplate;
    }
    willUpdate(e = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          GS(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let e = 0; e < this.path.length; e++) {
        let t = this.path[e];
        ((t.shouldResetTransform = !0),
          t.updateScroll(`snapshot`),
          t.options.layoutRoot && t.willUpdate(!1));
      }
      let { layoutId: t, layout: n } = this.options;
      if (t === void 0 && !n) return;
      let r = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = r
        ? r(this.latestValues, ``)
        : void 0),
        this.updateSnapshot(),
        e && this.notifyListeners(`willUpdate`));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(QS));
        return;
      }
      (this.isUpdating || this.nodes.forEach($S),
        (this.isUpdating = !1),
        this.nodes.forEach(eC),
        this.nodes.forEach(qS),
        this.nodes.forEach(JS),
        this.clearAllSnapshots());
      let e = m_.now();
      ((jm.delta = Lh(0, 1e3 / 60, e - jm.timestamp)),
        (jm.timestamp = e),
        (jm.isProcessing = !0),
        Mm.update.process(jm),
        Mm.preRender.process(jm),
        Mm.render.process(jm),
        (jm.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), sh.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(ZS), this.sharedNodes.forEach(aC));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Q.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Q.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
      let e = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = Sx()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners(`measure`, this.layout.layoutBox));
      let { visualElement: t } = this.options;
      t &&
        t.notify(
          `LayoutMeasure`,
          this.layout.layoutBox,
          e ? e.layoutBox : void 0,
        );
    }
    updateScroll(e = `measure`) {
      let t = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === e &&
          (t = !1),
        t)
      ) {
        let t = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: e,
          isRoot: t,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : t,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      let e =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        t = this.projectionDelta && !kS(this.projectionDelta),
        n = this.getTransformTemplate(),
        r = n ? n(this.latestValues, ``) : void 0,
        a = r !== this.prevTransformTemplateValue;
      e &&
        (t || kx(this.latestValues) || a) &&
        (i(this.instance, r),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(e = !0) {
      let t = this.measurePageBox(),
        n = this.removeElementScroll(t);
      return (
        e && (n = this.removeTransform(n)),
        mC(n),
        {
          animationId: this.root.animationId,
          measuredBox: t,
          layoutBox: n,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: e } = this.options;
      if (!e) return Sx();
      let t = e.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(gC))) {
        let { scroll: e } = this.root;
        e && (zx(t.x, e.offset.x), zx(t.y, e.offset.y));
      }
      return t;
    }
    removeElementScroll(e) {
      let t = Sx();
      if ((bS(t, e), this.scroll?.wasRoot)) return t;
      for (let n = 0; n < this.path.length; n++) {
        let r = this.path[n],
          { scroll: i, options: a } = r;
        r !== this.root &&
          i &&
          a.layoutScroll &&
          (i.wasRoot && bS(t, e), zx(t.x, i.offset.x), zx(t.y, i.offset.y));
      }
      return t;
    }
    applyTransform(e, t = !1) {
      let n = Sx();
      bS(n, e);
      for (let e = 0; e < this.path.length; e++) {
        let r = this.path[e];
        (!t &&
          r.options.layoutScroll &&
          r.scroll &&
          r !== r.root &&
          Vx(n, {
            x: -r.scroll.offset.x,
            y: -r.scroll.offset.y,
          }),
          kx(r.latestValues) && Vx(n, r.latestValues));
      }
      return (kx(this.latestValues) && Vx(n, this.latestValues), n);
    }
    removeTransform(e) {
      let t = Sx();
      bS(t, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        if (!n.instance || !kx(n.latestValues)) continue;
        Ox(n.latestValues) && n.updateSnapshot();
        let r = Sx();
        (bS(r, n.measurePageBox()),
          DS(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r));
      }
      return (kx(this.latestValues) && DS(t, this.latestValues), t);
    }
    setTargetDelta(e) {
      ((this.targetDelta = e),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(e) {
      this.options = {
        ...this.options,
        ...e,
        crossfade: e.crossfade === void 0 || e.crossfade,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== jm.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(e = !1) {
      let t = this.getLead();
      ((this.isProjectionDirty ||= t.isProjectionDirty),
        (this.isTransformDirty ||= t.isTransformDirty),
        (this.isSharedProjectionDirty ||= t.isSharedProjectionDirty));
      let n = !!this.resumingFrom || this !== t;
      if (
        !(
          e ||
          (n && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      let { layout: r, layoutId: i } = this.options;
      if (!(!this.layout || !(r || i))) {
        if (
          ((this.resolvedRelativeTargetAt = jm.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          let e = this.getClosestProjectingParent();
          e && e.layout && this.animationProgress !== 1
            ? ((this.relativeParent = e),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Sx()),
              (this.relativeTargetOrigin = Sx()),
              sx(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                e.layout.layoutBox,
              ),
              bS(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Sx()), (this.targetWithTransforms = Sx())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                ax(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : bS(this.target, this.layout.layoutBox),
                  Fx(this.target, this.targetDelta))
                : bS(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            let e = this.getClosestProjectingParent();
            e &&
            !!e.resumingFrom == !!this.resumingFrom &&
            !e.options.layoutScroll &&
            e.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = e),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Sx()),
                (this.relativeTargetOrigin = Sx()),
                sx(this.relativeTargetOrigin, this.target, e.target),
                bS(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          zS && RS.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Ox(this.parent.latestValues) ||
          Ax(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      let e = this.getLead(),
        t = !!this.resumingFrom || this !== e,
        n = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1),
        t &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (n = !1),
        this.resolvedRelativeTargetAt === jm.timestamp && (n = !1),
        n)
      )
        return;
      let { layout: r, layoutId: i } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(r || i))
      )
        return;
      bS(this.layoutCorrected, this.layout.layoutBox);
      let a = this.treeScale.x,
        o = this.treeScale.y;
      (Rx(this.layoutCorrected, this.treeScale, this.path, t),
        e.layout &&
          !e.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((e.target = e.layout.layoutBox), (e.targetWithTransforms = Sx())));
      let { target: s } = e;
      if (!s) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (xS(this.prevProjectionDelta.x, this.projectionDelta.x),
          xS(this.prevProjectionDelta.y, this.projectionDelta.y)),
        rx(this.projectionDelta, this.layoutCorrected, s, this.latestValues),
        (this.treeScale.x !== a ||
          this.treeScale.y !== o ||
          !FS(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !FS(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners(`projectionUpdate`, s)),
        zS && RS.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(e = !0) {
      var t;
      if (((t = this.options.visualElement) == null || t.scheduleRender(), e)) {
        let e = this.getStack();
        e && e.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = bx()),
        (this.projectionDelta = bx()),
        (this.projectionDeltaWithTransform = bx()));
    }
    setAnimationOrigin(e, t = !1) {
      let n = this.snapshot,
        r = n ? n.latestValues : {},
        i = {
          ...this.latestValues,
        },
        a = bx();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !t));
      let o = Sx(),
        s =
          (n ? n.source : void 0) !==
          (this.layout ? this.layout.source : void 0),
        c = this.getStack(),
        l = !c || c.members.length <= 1,
        u = !!(s && !l && this.options.crossfade === !0 && !this.path.some(lC));
      this.animationProgress = 0;
      let d;
      ((this.mixTargetDelta = (t) => {
        let n = t / 1e3;
        (oC(a.x, e.x, n),
          oC(a.y, e.y, n),
          this.setTargetDelta(a),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (sx(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            cC(this.relativeTarget, this.relativeTargetOrigin, o, n),
            d && jS(this.relativeTarget, d) && (this.isProjectionDirty = !1),
            (d ||= Sx()),
            bS(d, this.relativeTarget)),
          s &&
            ((this.animationValues = i), mS(i, r, this.latestValues, n, u, l)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = n));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(e) {
      (this.notifyListeners(`animationStart`),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        (this.pendingAnimation &&= (Am(this.pendingAnimation), void 0)),
        (this.pendingAnimation = Q.update(() => {
          ((Qx.hasAnimatedSinceResize = !0),
            (this.currentAnimation = aS(0, HS, {
              ...e,
              onUpdate: (t) => {
                (this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t));
              },
              onComplete: () => {
                (e.onComplete && e.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let e = this.getStack();
      (e && e.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners(`animationComplete`));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(HS),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      let e = this.getLead(),
        { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
      if (!(!t || !n || !r)) {
        if (
          this !== e &&
          this.layout &&
          r &&
          hC(this.options.animationType, this.layout.layoutBox, r.layoutBox)
        ) {
          n = this.target || Sx();
          let t = ex(this.layout.layoutBox.x);
          ((n.x.min = e.target.x.min), (n.x.max = n.x.min + t));
          let r = ex(this.layout.layoutBox.y);
          ((n.y.min = e.target.y.min), (n.y.max = n.y.min + r));
        }
        (bS(t, n),
          Vx(t, i),
          rx(this.projectionDeltaWithTransform, this.layoutCorrected, t, i));
      }
    }
    registerSharedNode(e, t) {
      (this.sharedNodes.has(e) || this.sharedNodes.set(e, new IS()),
        this.sharedNodes.get(e).add(t));
      let n = t.options.initialPromotionConfig;
      t.promote({
        transition: n ? n.transition : void 0,
        preserveFollowOpacity:
          n && n.shouldPreserveFollowOpacity
            ? n.shouldPreserveFollowOpacity(t)
            : void 0,
      });
    }
    isLead() {
      let e = this.getStack();
      return !e || e.lead === this;
    }
    getLead() {
      let { layoutId: e } = this.options;
      return (e && this.getStack()?.lead) || this;
    }
    getPrevLead() {
      let { layoutId: e } = this.options;
      return e ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      let { layoutId: e } = this.options;
      if (e) return this.root.sharedNodes.get(e);
    }
    promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
      let r = this.getStack();
      (r && r.promote(this, n),
        e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        t &&
          this.setOptions({
            transition: t,
          }));
    }
    relegate() {
      let e = this.getStack();
      return e ? e.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: e } = this.options;
      if (!e) return;
      let t = !1,
        { latestValues: n } = e;
      if (
        ((n.z ||
          n.rotate ||
          n.rotateX ||
          n.rotateY ||
          n.rotateZ ||
          n.skewX ||
          n.skewY) &&
          (t = !0),
        !t)
      )
        return;
      let r = {};
      n.z && WS(`z`, e, r, this.animationValues);
      for (let t = 0; t < BS.length; t++)
        (WS(`rotate${BS[t]}`, e, r, this.animationValues),
          WS(`skew${BS[t]}`, e, r, this.animationValues));
      e.render();
      for (let t in r)
        (e.setStaticValue(t, r[t]),
          this.animationValues && (this.animationValues[t] = r[t]));
      e.scheduleRender();
    }
    getProjectionStyles(e) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return VS;
      let t = {
          visibility: ``,
        },
        n = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (t.opacity = ``),
          (t.pointerEvents = Th(e?.pointerEvents) || ``),
          (t.transform = n ? n(this.latestValues, ``) : `none`),
          t
        );
      let r = this.getLead();
      if (!this.projectionDelta || !this.layout || !r.target) {
        let t = {};
        return (
          this.options.layoutId &&
            ((t.opacity =
              this.latestValues.opacity === void 0
                ? 1
                : this.latestValues.opacity),
            (t.pointerEvents = Th(e?.pointerEvents) || ``)),
          this.hasProjected &&
            !kx(this.latestValues) &&
            ((t.transform = n ? n({}, ``) : `none`), (this.hasProjected = !1)),
          t
        );
      }
      let i = r.animationValues || r.latestValues;
      (this.applyTransformsToTarget(),
        (t.transform = LS(
          this.projectionDeltaWithTransform,
          this.treeScale,
          i,
        )),
        n && (t.transform = n(i, t.transform)));
      let { x: a, y: o } = this.projectionDelta;
      ((t.transformOrigin = `${a.origin * 100}% ${o.origin * 100}% 0`),
        (t.opacity = r.animationValues
          ? r === this
            ? (i.opacity ?? this.latestValues.opacity ?? 1)
            : this.preserveOpacity
              ? this.latestValues.opacity
              : i.opacityExit
          : r === this
            ? i.opacity === void 0
              ? ``
              : i.opacity
            : i.opacityExit === void 0
              ? 0
              : i.opacityExit));
      for (let e in pg) {
        if (i[e] === void 0) continue;
        let { correct: n, applyTo: a } = pg[e],
          o = t.transform === `none` ? i[e] : n(i[e], r);
        if (a) {
          let e = a.length;
          for (let n = 0; n < e; n++) t[a[n]] = o;
        } else t[e] = o;
      }
      return (
        this.options.layoutId &&
          (t.pointerEvents = r === this ? Th(e?.pointerEvents) || `` : `none`),
        t
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((e) => e.currentAnimation?.stop()),
        this.root.nodes.forEach(QS),
        this.root.sharedNodes.clear());
    }
  };
}
function qS(e) {
  e.updateLayout();
}
function JS(e) {
  let t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners(`didUpdate`)) {
    let { layoutBox: n, measuredBox: r } = e.layout,
      { animationType: i } = e.options,
      a = t.source !== e.layout.source;
    i === `size`
      ? Cx((e) => {
          let r = a ? t.measuredBox[e] : t.layoutBox[e],
            i = ex(r);
          ((r.min = n[e].min), (r.max = r.min + i));
        })
      : hC(i, t.layoutBox, n) &&
        Cx((r) => {
          let i = a ? t.measuredBox[r] : t.layoutBox[r],
            o = ex(n[r]);
          ((i.max = i.min + o),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[r].max = e.relativeTarget[r].min + o)));
        });
    let o = bx();
    rx(o, n, t.layoutBox);
    let s = bx();
    a ? rx(s, e.applyTransform(r, !0), t.measuredBox) : rx(s, n, t.layoutBox);
    let c = !kS(o),
      l = !1;
    if (!e.resumeFrom) {
      let r = e.getClosestProjectingParent();
      if (r && !r.resumeFrom) {
        let { snapshot: i, layout: a } = r;
        if (i && a) {
          let o = Sx();
          sx(o, t.layoutBox, i.layoutBox);
          let s = Sx();
          (sx(s, n, a.layoutBox),
            NS(o, s) || (l = !0),
            r.options.layoutRoot &&
              ((e.relativeTarget = s),
              (e.relativeTargetOrigin = o),
              (e.relativeParent = r)));
        }
      }
    }
    e.notifyListeners(`didUpdate`, {
      layout: n,
      snapshot: t,
      delta: s,
      layoutDelta: o,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: l,
    });
  } else if (e.isLead()) {
    let { onExitComplete: t } = e.options;
    t && t();
  }
  e.options.transition = void 0;
}
function YS(e) {
  (zS && RS.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      (e.isSharedProjectionDirty ||= !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
      (e.isTransformDirty ||= e.parent.isTransformDirty)));
}
function XS(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function ZS(e) {
  e.clearSnapshot();
}
function QS(e) {
  e.clearMeasurements();
}
function $S(e) {
  e.isLayoutDirty = !1;
}
function eC(e) {
  let { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify(`BeforeLayoutMeasure`),
    e.resetTransform());
}
function tC(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function nC(e) {
  e.resolveTargetDelta();
}
function rC(e) {
  e.calcProjection();
}
function iC(e) {
  e.resetSkewAndRotation();
}
function aC(e) {
  e.removeLeadSnapshot();
}
function oC(e, t, n) {
  ((e.translate = iy(t.translate, 0, n)),
    (e.scale = iy(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function sC(e, t, n, r) {
  ((e.min = iy(t.min, n.min, r)), (e.max = iy(t.max, n.max, r)));
}
function cC(e, t, n, r) {
  (sC(e.x, t.x, n.x, r), sC(e.y, t.y, n.y, r));
}
function lC(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var uC = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1],
  },
  dC = (e) =>
    typeof navigator < `u` &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  fC = dC(`applewebkit/`) && !dC(`chrome/`) ? Math.round : vm;
function pC(e) {
  ((e.min = fC(e.min)), (e.max = fC(e.max)));
}
function mC(e) {
  (pC(e.x), pC(e.y));
}
function hC(e, t, n) {
  return (
    e === `position` || (e === `preserve-aspect` && !tx(PS(t), PS(n), 0.2))
  );
}
function gC(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
var _C = KS({
    attachResizeListener: (e, t) => Lb(e, `resize`, t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  vC = {
    current: void 0,
  },
  yC = KS({
    measureScroll: (e) => ({
      x: e.scrollLeft,
      y: e.scrollTop,
    }),
    defaultParent: () => {
      if (!vC.current) {
        let e = new _C({});
        (e.mount(window),
          e.setOptions({
            layoutScroll: !0,
          }),
          (vC.current = e));
      }
      return vC.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t === void 0 ? `none` : t;
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === `fixed`,
  }),
  bC = {
    pan: {
      Feature: Zx,
    },
    drag: {
      Feature: Yx,
      ProjectionNode: yC,
      MeasureLayout: rS,
    },
  };
function xC(e, t, n) {
  let { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive(`whileHover`, n === `Start`);
  let i = r[`onHover` + n];
  i && Q.postRender(() => i(t, Rb(t)));
}
var SC = class extends Nb {
    mount() {
      let { current: e } = this.node;
      e &&
        (this.unmount = $g(
          e,
          (e) => (xC(this.node, e, `Start`), (e) => xC(this.node, e, `End`)),
        ));
    }
    unmount() {}
  },
  CC = class extends Nb {
    constructor() {
      (super(...arguments), (this.isActive = !1));
    }
    onFocus() {
      let e = !1;
      try {
        e = this.node.current.matches(`:focus-visible`);
      } catch {
        e = !0;
      }
      !e ||
        !this.node.animationState ||
        (this.node.animationState.setActive(`whileFocus`, !0),
        (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive(`whileFocus`, !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = my(
        Lb(this.node.current, `focus`, () => this.onFocus()),
        Lb(this.node.current, `blur`, () => this.onBlur()),
      );
    }
    unmount() {}
  };
function wC(e, t, n) {
  let { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive(`whileTap`, n === `Start`);
  let i = r[`onTap` + (n === `End` ? `` : n)];
  i && Q.postRender(() => i(t, Rb(t)));
}
var TC = class extends Nb {
    mount() {
      let { current: e } = this.node;
      e &&
        (this.unmount = l_(
          e,
          (e) => (
            wC(this.node, e, `Start`),
            (e, { success: t }) => wC(this.node, e, t ? `End` : `Cancel`)
          ),
          {
            useGlobalTarget: this.node.props.globalTapTarget,
          },
        ));
    }
    unmount() {}
  },
  EC = new WeakMap(),
  DC = new WeakMap(),
  OC = (e) => {
    let t = EC.get(e.target);
    t && t(e);
  },
  kC = (e) => {
    e.forEach(OC);
  };
function AC({ root: e, ...t }) {
  let n = e || document;
  DC.has(n) || DC.set(n, {});
  let r = DC.get(n),
    i = JSON.stringify(t);
  return (
    r[i] ||
      (r[i] = new IntersectionObserver(kC, {
        root: e,
        ...t,
      })),
    r[i]
  );
}
function jC(e, t, n) {
  let r = AC(t);
  return (
    EC.set(e, n),
    r.observe(e),
    () => {
      (EC.delete(e), r.unobserve(e));
    }
  );
}
var MC = {
    some: 0,
    all: 1,
  },
  NC = class extends Nb {
    constructor() {
      (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
    }
    startObserver() {
      this.unmount();
      let { viewport: e = {} } = this.node.getProps(),
        { root: t, margin: n, amount: r = `some`, once: i } = e,
        a = {
          root: t ? t.current : void 0,
          rootMargin: n,
          threshold: typeof r == `number` ? r : MC[r],
        };
      return jC(this.node.current, a, (e) => {
        let { isIntersecting: t } = e;
        if (
          this.isInView === t ||
          ((this.isInView = t), i && !t && this.hasEnteredView)
        )
          return;
        (t && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive(`whileInView`, t));
        let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(),
          a = t ? n : r;
        a && a(e);
      });
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > `u`) return;
      let { props: e, prevProps: t } = this.node;
      [`amount`, `margin`, `root`].some(PC(e, t)) && this.startObserver();
    }
    unmount() {}
  };
function PC({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
var FC = {
    inView: {
      Feature: NC,
    },
    tap: {
      Feature: TC,
    },
    focus: {
      Feature: CC,
    },
    hover: {
      Feature: SC,
    },
  },
  IC = {
    layout: {
      ProjectionNode: yC,
      MeasureLayout: rS,
    },
  },
  LC = {
    current: null,
  },
  RC = {
    current: !1,
  };
function zC() {
  if (((RC.current = !0), hm))
    if (window.matchMedia) {
      let e = window.matchMedia(`(prefers-reduced-motion)`),
        t = () => (LC.current = e.matches);
      (e.addListener(t), t());
    } else LC.current = !1;
}
var BC = [...Jv, iv, vv],
  VC = (e) => BC.find(qv(e)),
  HC = new WeakMap();
function UC(e, t, n) {
  for (let r in t) {
    let i = t[r],
      a = n[r];
    if (wh(i)) e.addValue(r, i);
    else if (wh(a))
      e.addValue(
        r,
        C_(i, {
          owner: e,
        }),
      );
    else if (a !== i)
      if (e.hasValue(r)) {
        let t = e.getValue(r);
        t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
      } else {
        let t = e.getStaticValue(r);
        e.addValue(
          r,
          C_(t === void 0 ? i : t, {
            owner: e,
          }),
        );
      }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
var WC = [
    `AnimationStart`,
    `AnimationComplete`,
    `Update`,
    `BeforeLayoutMeasure`,
    `LayoutMeasure`,
    `LayoutAnimationStart`,
    `LayoutAnimationComplete`,
  ],
  GC = class {
    scrapeMotionValuesFromProps(e, t, n) {
      return {};
    }
    constructor(
      {
        parent: e,
        props: t,
        presenceContext: n,
        reducedMotionConfig: r,
        blockInitialAnimation: i,
        visualState: a,
      },
      o = {},
    ) {
      ((this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.KeyframeResolver = Vv),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify(`Update`, this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection,
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          let e = m_.now();
          this.renderScheduledAt < e &&
            ((this.renderScheduledAt = e), Q.render(this.render, !1, !0));
        }));
      let { latestValues: s, renderState: c, onUpdate: l } = a;
      ((this.onUpdate = l),
        (this.latestValues = s),
        (this.baseTarget = {
          ...s,
        }),
        (this.initialValues = t.initial
          ? {
              ...s,
            }
          : {}),
        (this.renderState = c),
        (this.parent = e),
        (this.props = t),
        (this.presenceContext = n),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.options = o),
        (this.blockInitialAnimation = !!i),
        (this.isControllingVariants = Zm(t)),
        (this.isVariantNode = Qm(t)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(e && e.current)));
      let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(
        t,
        {},
        this,
      );
      for (let e in d) {
        let t = d[e];
        s[e] !== void 0 && wh(t) && t.set(s[e], !1);
      }
    }
    mount(e) {
      ((this.current = e),
        HC.set(e, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
        RC.current || zC(),
        (this.shouldReduceMotion =
          this.reducedMotionConfig === `never`
            ? !1
            : this.reducedMotionConfig === `always` || LC.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext));
    }
    unmount() {
      (HC.delete(this.current),
        this.projection && this.projection.unmount(),
        Am(this.notifyUpdate),
        Am(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this));
      for (let e in this.events) this.events[e].clear();
      for (let e in this.features) {
        let t = this.features[e];
        t && (t.unmount(), (t.isMounted = !1));
      }
      this.current = null;
    }
    bindToMotionValue(e, t) {
      this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
      let n = Ah.has(e),
        r = t.on(`change`, (t) => {
          ((this.latestValues[e] = t),
            this.props.onUpdate && Q.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0));
        }),
        i = t.on(`renderRequest`, this.scheduleRender),
        a;
      (window.MotionCheckAppearSync &&
        (a = window.MotionCheckAppearSync(this, e, t)),
        this.valueSubscriptions.set(e, () => {
          (r(), i(), a && a(), t.owner && t.stop());
        }));
    }
    sortNodePosition(e) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== e.type
        ? 0
        : this.sortInstanceNodePosition(this.current, e.current);
    }
    updateFeatures() {
      let e = `animation`;
      for (e in Fm) {
        let t = Fm[e];
        if (!t) continue;
        let { isEnabled: n, Feature: r } = t;
        if (
          (!this.features[e] &&
            r &&
            n(this.props) &&
            (this.features[e] = new r(this)),
          this.features[e])
        ) {
          let t = this.features[e];
          t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : Sx();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t;
    }
    update(e, t) {
      ((e.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t));
      for (let t = 0; t < WC.length; t++) {
        let n = WC[t];
        this.propEventSubscriptions[n] &&
          (this.propEventSubscriptions[n](),
          delete this.propEventSubscriptions[n]);
        let r = e[`on` + n];
        r && (this.propEventSubscriptions[n] = this.on(n, r));
      }
      ((this.prevMotionValues = UC(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps, this),
        this.prevMotionValues,
      )),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this));
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
          ? this.parent.getClosestVariantNode()
          : void 0;
    }
    addVariantChild(e) {
      let t = this.getClosestVariantNode();
      if (t)
        return (
          t.variantChildren && t.variantChildren.add(e),
          () => t.variantChildren.delete(e)
        );
    }
    addValue(e, t) {
      let n = this.values.get(e);
      t !== n &&
        (n && this.removeValue(e),
        this.bindToMotionValue(e, t),
        this.values.set(e, t),
        (this.latestValues[e] = t.get()));
    }
    removeValue(e) {
      this.values.delete(e);
      let t = this.valueSubscriptions.get(e);
      (t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState));
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e])
        return this.props.values[e];
      let n = this.values.get(e);
      return (
        n === void 0 &&
          t !== void 0 &&
          ((n = C_(t === null ? void 0 : t, {
            owner: this,
          })),
          this.addValue(e, n)),
        n
      );
    }
    readValue(e, t) {
      let n =
        this.latestValues[e] !== void 0 || !this.current
          ? this.latestValues[e]
          : (this.getBaseTargetFromProps(this.props, e) ??
            this.readValueFromInstance(this.current, e, this.options));
      return (
        n != null &&
          (typeof n == `string` && (Hv(n) || W_(n))
            ? (n = parseFloat(n))
            : !VC(n) && vv.test(t) && (n = Tv(e, t)),
          this.setBaseTarget(e, wh(n) ? n.get() : n)),
        wh(n) ? n.get() : n
      );
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    getBaseTarget(e) {
      let { initial: t } = this.props,
        n;
      if (typeof t == `string` || typeof t == `object`) {
        let r = bh(this.props, t, this.presenceContext?.custom);
        r && (n = r[e]);
      }
      if (t && n !== void 0) return n;
      let r = this.getBaseTargetFromProps(this.props, e);
      return r !== void 0 && !wh(r)
        ? r
        : this.initialValues[e] !== void 0 && n === void 0
          ? void 0
          : this.baseTarget[e];
    }
    on(e, t) {
      return (
        this.events[e] || (this.events[e] = new __()),
        this.events[e].add(t)
      );
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t);
    }
  },
  KC = class extends GC {
    constructor() {
      (super(...arguments), (this.KeyframeResolver = Xv));
    }
    sortInstanceNodePosition(e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e, t) {
      return e.style ? e.style[t] : void 0;
    }
    removeValueFromRenderState(e, { vars: t, style: n }) {
      (delete t[e], delete n[e]);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      let { children: e } = this.props;
      wh(e) &&
        (this.childSubscription = e.on(`change`, (e) => {
          this.current && (this.current.textContent = `${e}`);
        }));
    }
  };
function qC(e) {
  return window.getComputedStyle(e);
}
var JC = class extends KC {
    constructor() {
      (super(...arguments), (this.type = `html`), (this.renderInstance = ug));
    }
    readValueFromInstance(e, t) {
      if (Ah.has(t)) {
        let e = wv(t);
        return (e && e.default) || 0;
      }
      {
        let n = qC(e),
          r = (Mh(t) ? n.getPropertyValue(t) : n[t]) || 0;
        return typeof r == `string` ? r.trim() : r;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return Hx(e, t);
    }
    build(e, t, n) {
      eg(e, t, n.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return gg(e, t, n);
    }
  },
  YC = class extends KC {
    constructor() {
      (super(...arguments),
        (this.type = `svg`),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = Sx));
    }
    getBaseTargetFromProps(e, t) {
      return e[t];
    }
    readValueFromInstance(e, t) {
      if (Ah.has(t)) {
        let e = wv(t);
        return (e && e.default) || 0;
      }
      return ((t = dg.has(t) ? t : ah(t)), e.getAttribute(t));
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return _g(e, t, n);
    }
    build(e, t, n) {
      og(e, t, this.isSVGTag, n.transformTemplate);
    }
    renderInstance(e, t, n, r) {
      fg(e, t, n, r);
    }
    mount(e) {
      ((this.isSVGTag = lg(e.tagName)), super.mount(e));
    }
  },
  XC = (e, t) =>
    vh(e)
      ? new YC(t)
      : new JC(t, {
          allowProjection: e !== f.Fragment,
        }),
  ZC = Gm(
    Og(
      {
        ...Ib,
        ...FC,
        ...bC,
        ...IC,
      },
      XC,
    ),
  ),
  QC = [
    {
      label: `Início`,
      to: `/`,
    },
    {
      label: `Estrutura`,
      to: `/estrutura.html`,
    },
    {
      label: `Projetos`,
      to: `/projetos.html`,
    },
    {
      label: `Sobre`,
      to: `/sobre.html`,
    },
    {
      label: `Contato`,
      to: `/contato.html`,
    },
  ];
function $C() {
  let [e, t] = (0, f.useState)(!1),
    [n, r] = (0, f.useState)(!1),
    i = ao().pathname === `/`;
  (0, f.useEffect)(() => {
    let e = () => t(window.scrollY > 40);
    return (
      e(),
      window.addEventListener(`scroll`, e),
      () => window.removeEventListener(`scroll`, e)
    );
  }, []);
  let a = e || !i;
  return (0, D.jsxs)(ZC.header, {
    initial: {
      y: -80,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
    className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${a ? `glass border-b border-border/60` : `bg-transparent`}`,
    children: [
      (0, D.jsxs)(`nav`, {
        className: `mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between`,
        children: [
          (0, D.jsxs)(Yo, {
            to: `/`,
            className: `flex items-center gap-2.5 group`,
            children: [
              (0, D.jsxs)(`span`, {
                className: `relative flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-display font-bold text-sm shadow-lg shadow-primary/20`,
                children: [
                  `R`,
                  (0, D.jsx)(`span`, {
                    className: `absolute -inset-1 rounded-lg border border-primary/30 group-hover:scale-110 transition-transform`,
                  }),
                ],
              }),
              (0, D.jsxs)(`span`, {
                className: `font-display font-semibold tracking-tight text-[15px]`,
                children: [
                  `Rafael Marcondes`,
                  (0, D.jsx)(`span`, {
                    className: `block text-[10px] font-body font-normal tracking-[0.2em] text-muted-foreground uppercase`,
                    children: `Engenharia Civil`,
                  }),
                ],
              }),
            ],
          }),
          (0, D.jsxs)(`div`, {
            className: `hidden lg:flex items-center gap-1`,
            children: [
              QC.map((e) =>
                (0, D.jsx)(
                  Xo,
                  {
                    to: e.to,
                    end: e.to === `/`,
                    className: ({ isActive: e }) =>
                      `px-3 py-2 text-sm transition-colors rounded-md ${e ? `text-foreground bg-secondary/60` : `text-muted-foreground hover:text-foreground hover:bg-secondary/60`}`,
                    children: e.label,
                  },
                  e.to,
                ),
              ),
              (0, D.jsx)(Yo, {
                to: `/contato.html`,
                className: `ml-2 px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:brightness-110 transition`,
                children: `Vamos conversar`,
              }),
            ],
          }),
          (0, D.jsx)(`button`, {
            className: `lg:hidden p-2 rounded-md hover:bg-secondary`,
            onClick: () => r((e) => !e),
            "aria-label": `Menu`,
            children: n
              ? (0, D.jsx)(tn, {
                  size: 20,
                })
              : (0, D.jsx)(en, {
                  size: 20,
                }),
          }),
        ],
      }),
      (0, D.jsx)(_m, {
        children:
          n &&
          (0, D.jsx)(ZC.div, {
            initial: {
              height: 0,
              opacity: 0,
            },
            animate: {
              height: `auto`,
              opacity: 1,
            },
            exit: {
              height: 0,
              opacity: 0,
            },
            className: `lg:hidden glass border-t border-border/60 overflow-hidden`,
            children: (0, D.jsx)(`div`, {
              className: `px-5 py-4 flex flex-col gap-1`,
              children: QC.map((e) =>
                (0, D.jsx)(
                  Xo,
                  {
                    to: e.to,
                    end: e.to === `/`,
                    onClick: () => r(!1),
                    className: ({ isActive: e }) =>
                      `px-3 py-2.5 text-sm rounded-md ${e ? `text-foreground bg-secondary/60` : `text-muted-foreground hover:text-foreground hover:bg-secondary/60`}`,
                    children: e.label,
                  },
                  e.to,
                ),
              ),
            }),
          }),
      }),
    ],
  });
}
function ew() {
  return (0, D.jsxs)(`main`, {
    className: `relative bg-background min-h-screen`,
    children: [
      (0, D.jsx)($C, {}),
      (0, D.jsx)(jo, {}),
      (0, D.jsx)(`footer`, {
        className: `border-t border-border/50 py-10`,
        children: (0, D.jsxs)(`div`, {
          className: `mx-auto max-w-7xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground`,
          children: [
            (0, D.jsx)(`p`, {
              children: `Rafael Souza Marcondes · Engenheiro Civil · Curitiba/PR`,
            }),
            (0, D.jsxs)(`div`, {
              className: `flex items-center gap-4`,
              children: [
                (0, D.jsxs)(`a`, {
                  href: `https://br.linkedin.com/in/rafael-marcondes-55a34b1bb`,
                  target: `_blank`,
                  rel: `noreferrer`,
                  className: `inline-flex items-center gap-1.5 hover:text-primary transition`,
                  children: [
                    (0, D.jsx)($t, {
                      size: 16,
                    }),
                    (0, D.jsx)(`span`, {
                      className: `text-xs`,
                      children: `LinkedIn`,
                    }),
                  ],
                }),
                (0, D.jsx)(`span`, {
                  className: `text-xs`,
                  children: `RMARC Engenharia Ltda · CNPJ 49.031.965/0001-30`,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
var tw = `modulepreload`,
  nw = function (e) {
    if (e.startsWith(`../`)) {
      e = e.slice(3);
    }

    if (!e.startsWith(`./`)) {
      e = `./` + e;
    }

    return e;
  },
  rw = {},
  iw = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({
                status: `fulfilled`,
                value: e,
              }),
              (e) => ({
                status: `rejected`,
                reason: e,
              }),
            ),
          ),
        );
      }
      function s(e) {
        return import.meta.resolve
          ? import.meta.resolve(e)
          : new URL(e, import.meta.url).href;
      }
      r = o(
        t.map((t) => {
          if (((t = nw(t, n)), (t = s(t)), t in rw)) return;
          rw[t] = !0;
          let r = t.endsWith(`.css`);
          for (let n = e.length - 1; n >= 0; n--) {
            let i = e[n];
            if (i.href === t && (!r || i.rel === `stylesheet`)) return;
          }
          let i = document.createElement(`link`);
          if (
            ((i.rel = r ? `stylesheet` : tw),
            r || (i.as = `script`),
            (i.crossOrigin = ``),
            (i.href = t),
            a && i.setAttribute(`nonce`, a),
            document.head.appendChild(i),
            r)
          )
            return new Promise((e, n) => {
              (i.addEventListener(`load`, e),
                i.addEventListener(`error`, () =>
                  n(Error(`Unable to preload CSS for ${t}`)),
                ));
            });
        }),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, {
        cancelable: !0,
      });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  aw = (0, f.lazy)(() =>
    iw(
      () => import(`./assets/home.js`),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
    ),
  ),
  ow = (0, f.lazy)(() =>
    iw(
      () => import(`./assets/estrutura.js`),
      __vite__mapDeps([10, 1, 3, 11, 5, 12, 13, 8]),
    ),
  ),
  sw = (0, f.lazy)(() =>
    iw(
      () => import(`./assets/projetos.js`),
      __vite__mapDeps([14, 1, 2, 5, 12, 6, 13, 8, 9]),
    ),
  ),
  cw = (0, f.lazy)(() =>
    iw(
      () => import(`./assets/sobre.js`),
      __vite__mapDeps([15, 1, 4, 11, 5, 12, 13, 16, 8, 9]),
    ),
  ),
  lw = (0, f.lazy)(() =>
    iw(
      () => import(`./assets/contato.js`),
      __vite__mapDeps([17, 1, 4, 6, 7, 13, 16, 8]),
    ),
  ),
  uw = () =>
    (0, D.jsx)(`div`, {
      className: `fixed inset-0 flex items-center justify-center`,
      children: (0, D.jsx)(`div`, {
        className: `w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin`,
      }),
    }),
  dw = () => {
    let {
      isLoadingAuth: e,
      isLoadingPublicSettings: t,
      authError: n,
      navigateToLogin: r,
    } = em();
    if (t || e)
      return (0, D.jsx)(`div`, {
        className: `fixed inset-0 flex items-center justify-center`,
        children: (0, D.jsx)(`div`, {
          className: `w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin`,
        }),
      });
    if (n) {
      if (n.type === `user_not_registered`) return (0, D.jsx)(tm, {});
      if (n.type === `auth_required`) return (r(), null);
    }
    return (0, D.jsx)(f.Suspense, {
      fallback: (0, D.jsx)(uw, {}),
      children: (0, D.jsxs)(Po, {
        children: [
          (0, D.jsxs)(Mo, {
            element: (0, D.jsx)(ew, {}),
            children: [
              (0, D.jsx)(Mo, {
                path: `/`,
                element: (0, D.jsx)(aw, {}),
              }),
              (0, D.jsx)(Mo, {
                path: `/estrutura.html`,
                element: (0, D.jsx)(ow, {}),
              }),
              (0, D.jsx)(Mo, {
                path: `/projetos.html`,
                element: (0, D.jsx)(sw, {}),
              }),
              (0, D.jsx)(Mo, {
                path: `/sobre.html`,
                element: (0, D.jsx)(cw, {}),
              }),
              (0, D.jsx)(Mo, {
                path: `/contato.html`,
                element: (0, D.jsx)(lw, {}),
              }),
            ],
          }),
          (0, D.jsx)(Mo, {
            path: `*`,
            element: (0, D.jsx)(Zp, {}),
          }),
        ],
      }),
    });
  };
function fw() {
  return (0, D.jsx)($p, {
    children: (0, D.jsxs)(Wi, {
      client: ra,
      children: [
        (0, D.jsxs)(Ko, {
          basename:
            (window.location.hostname === `localhost` ||
              window.location.hostname === `127.0.0.1` ||
              window.location.hostname === `soumarcondes.github.io`) &&
            window.location.pathname.startsWith(`/rmarc`)
              ? `/rmarc`
              : `/`,
          children: [(0, D.jsx)(rm, {}), (0, D.jsx)(dw, {})],
        }),
        (0, D.jsx)(Fr, {}),
      ],
    }),
  });
}
d.createRoot(document.getElementById(`root`)).render((0, D.jsx)(fw, {}));
export {
  Yo as a,
  $t as c,
  _m as i,
  Qt as l,
  ZC as n,
  Er as o,
  Xg as r,
  tn as s,
  iw as t,
  u,
};
