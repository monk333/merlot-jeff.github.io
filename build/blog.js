!function (e) { function t(n) { if (a[n]) return a[n].exports; var o = a[n] = { i: n, l: !1, exports: {} }; return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports } var a = {}; t.m = e, t.c = a, t.i = function (e) { return e }, t.d = function (e, a, n) { t.o(e, a) || Object.defineProperty(e, a, { configurable: !1, enumerable: !0, get: n }) }, t.n = function (e) { var a = e && e.__esModule ? function () { return e.default } : function () { return e }; return t.d(a, "a", a), a }, t.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "/build/", t(t.s = 59) }([function (e, t) { e.exports = React }, function (e, t, a) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); t.throttle = function (e, t) { var a = null; return function () { for (var n = arguments.length, o = Array(n), r = 0; r < n; r++)o[r] = arguments[r]; var i = this; clearTimeout(a), a = setTimeout(function () { e.apply(i, o) }, t) } }, t.getScrollTop = function () { var e = 0; return document.documentElement && document.documentElement.scrollTop ? e = document.documentElement.scrollTop : document.body && (e = document.body.scrollTop), e }, t.getLink = function (e) { return ("" + e).length > 1 && /^\/[^\/]/.test("" + e) ? "" + window.rootPath + e : e }, t.parseJSONStr = function (e) { try { return JSON.parse(e) } catch (t) { return e } } }, function (e, t, a) { e.exports = a(13)() }, function (e, t) { e.exports = ReactDOM }, function (e, t, a) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { rootPath: "", port: 8080, domain: "merlot-jeff.github.io", defaultSearch: "baidu", defaultLanguage: "en-us", "en-us": { pageMenu: [{ key: "home", text: "HOME", link: "/en-us/index.html" }, { key: "docs", text: "DOCS", link: "/en-us/docs/overview/what-is-seata.html" }, { key: "developers", text: "DEVELOPERS", link: "/en-us/docs/developers/developers_dev.html" }, { key: "blog", text: "BLOG", link: "/en-us/blog/index.html" }, { key: "community", text: "COMMUNITY", link: "/en-us/community/index.html" }, { key: "download", text: "DOWNLOAD", link: "/en-us/blog/download.html" }], vision: { title: "Vision", content: "Seata is an Alibaba open source distributed transaction solution that delivers high performance and easy to use distributed transaction services under a microservices architecture." }, documentation: { title: "Documentation", list: [{ text: "What is Seata?", link: "/en-us/docs/overview/what-is-seata.html" }, { text: "Quick Start", link: "/en-us/docs/user/quickstart.html" }, { text: "Report a doc issue", link: "https://github.com/seata/seata.github.io/issues/new" }, { text: "Edit This Page on GitHub", link: "https://github.com/seata/seata.github.io" }] }, resources: { title: "Resources", list: [{ text: "Blog", link: "/en-us/blog/index.html" }, { text: "Community", link: "/en-us/community/index.html" }] }, copyright: "Copyright © 2019 Seata" }, "zh-cn": { pageMenu: [{ key: "home", text: "首页", link: "/zh-cn/index.html" }, { key: "docs", text: "文档", link: "/zh-cn/docs/overview/what-is-seata.html" }, { key: "developers", text: "开发者", link: "/zh-cn/docs/developers/developers_dev.html" }, { key: "blog", text: "博客", link: "/zh-cn/blog/index.html" }, { key: "community", text: "社区", link: "/zh-cn/community/index.html" }, { key: "download", text: "下载", link: "/zh-cn/blog/download.html" }], vision: { title: "愿景", content: "Seata 是一款阿里巴巴开源的分布式事务解决方案，致力于在微服务架构下提供高性能和简单易用的分布式事务服务。" }, documentation: { title: "文档", list: [{ text: "Seata 是什么？", link: "/zh-cn/docs/overview/what-is-seata.html" }, { text: "快速开始", link: "/zh-cn/docs/user/quickstart.html" }, { text: "报告文档问题", link: "https://github.com/seata/seata.github.io/issues/new" }, { text: "在Github上编辑此文档", link: "https://github.com/seata/seata.github.io" }] }, resources: { title: "资源", list: [{ text: "博客", link: "/zh-cn/blog/index.html" }, { text: "社区", link: "/zh-cn/community/index.html" }] }, copyright: "Copyright © 2019 Seata" } } }, function (e, t, a) {
  var n, o;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
  !function () { "use strict"; function a() { for (var e = [], t = 0; t < arguments.length; t++) { var n = arguments[t]; if (n) { var o = typeof n; if ("string" === o || "number" === o) e.push(n); else if (Array.isArray(n) && n.length) { var i = a.apply(null, n); i && e.push(i) } else if ("object" === o) for (var l in n) r.call(n, l) && n[l] && e.push(l) } } return e.join(" ") } var r = {}.hasOwnProperty; void 0 !== e && e.exports ? (a.default = a, e.exports = a) : (n = [], void 0 !== (o = function () { return a }.apply(t, n)) && (e.exports = o)) }()
}, function (e, t, a) { "use strict"; function n(e) { return e && e.__esModule ? e : { default: e } } function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function r(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t } function i(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var l = function () { function e(e, t) { for (var a = 0; a < t.length; a++) { var n = t[a]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } return function (t, a, n) { return a && e(t.prototype, a), n && e(t, n), t } }(), s = a(0), u = n(s), c = a(2), d = n(c), f = a(4), m = n(f), p = a(1); a(10); var h = { logo: d.default.string.isRequired, language: d.default.oneOf(["zh-cn", "en-us"]) }, g = function (e) { function t() { return o(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)) } return i(t, e), l(t, [{ key: "render", value: function () { var e = this.props, t = e.logo, a = e.language, n = m.default[a]; return u.default.createElement("footer", { className: "footer-container" }, u.default.createElement("div", { className: "footer-body" }, u.default.createElement("img", { src: (0, p.getLink)(t) }), u.default.createElement("p", { className: "docsite-power" }, "website powered by docsite"), u.default.createElement("div", { className: "cols-container" }, u.default.createElement("div", { className: "col col-12" }, u.default.createElement("h3", null, n.vision.title), u.default.createElement("p", null, n.vision.content)), u.default.createElement("div", { className: "col col-6" }, u.default.createElement("dl", null, u.default.createElement("dt", null, n.documentation.title), n.documentation.list.map(function (e, t) { return u.default.createElement("dd", { key: t }, u.default.createElement("a", { href: (0, p.getLink)(e.link), target: e.target || "_self" }, e.text)) }))), u.default.createElement("div", { className: "col col-6" }, u.default.createElement("dl", null, u.default.createElement("dt", null, n.resources.title), n.resources.list.map(function (e, t) { return u.default.createElement("dd", { key: t }, u.default.createElement("a", { href: (0, p.getLink)(e.link), target: e.target || "_self" }, e.text)) })))), u.default.createElement("div", { className: "copyright" }, u.default.createElement("span", null, n.copyright)))) } }]), t }(u.default.Component); g.propTypes = h, t.default = g }, function (e, t, a) { "use strict"; function n(e) { return e && e.__esModule ? e : { default: e } } function o(e, t, a) { return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e } function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function i(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t } function l(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var s = function () { function e(e, t) { for (var a = 0; a < t.length; a++) { var n = t[a]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } return function (t, a, n) { return a && e(t.prototype, a), n && e(t, n), t } }(), u = a(0), c = n(u), d = a(2), f = n(d), m = a(5), p = n(m), h = a(4), g = n(h), b = a(1); a(11); var y = [{ text: "中", value: "en-us" }, { text: "En", value: "zh-cn" }], v = { baidu: { logo: "https://img.alicdn.com/tfs/TB1n6DQayLaK1RjSZFxXXamPFXa-300-300.png", url: "https://www.baidu.com/s?wd=" }, google: { logo: "https://img.alicdn.com/tfs/TB1REfuaCzqK1RjSZFjXXblCFXa-300-300.jpg", url: "https://www.google.com/search?q=" } }, k = function () { }, w = { currentKey: f.default.string, logo: f.default.string.isRequired, type: f.default.oneOf(["primary", "normal"]), language: f.default.oneOf(["en-us", "zh-cn"]), onLanguageChange: f.default.func }, S = { type: "primary", language: "en-us", onLanguageChange: k }, E = function (e) { function t(e) { r(this, t); var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return a.toggleMenu = function () { a.setState({ menuBodyVisible: !a.state.menuBodyVisible }) }, a.switchLang = function () { var e = void 0; e = "zh-cn" === a.state.language ? "en-us" : "zh-cn", a.setState({ language: e }), a.props.onLanguageChange(e) }, a.switchSearch = function () { var e = void 0; e = "baidu" === a.state.search ? "google" : "baidu", a.setState({ search: e }) }, a.toggleSearch = function () { a.setState({ searchVisible: !a.state.searchVisible }) }, a.onInputChange = function (e) { a.setState({ searchValue: e.target.value }) }, a.state = { menuBodyVisible: !1, language: e.language, search: g.default.defaultSearch, searchValue: "", inputVisible: !1 }, a } return l(t, e), s(t, [{ key: "componentWillReceiveProps", value: function (e) { this.setState({ language: e.language }) } }, { key: "goSearch", value: function () { var e = this.state, t = e.search, a = e.searchValue; window.open("" + v[t].url + window.encodeURIComponent(a + " site:" + g.default.domain)) } }, { key: "onKeyDown", value: function (e) { 13 === e.keyCode && this.goSearch() } }, { key: "render", value: function () { var e = this.props, t = e.type, a = e.logo, n = e.onLanguageChange, r = e.currentKey, i = this.state, l = i.menuBodyVisible, s = i.language, u = i.search, d = i.searchVisible; return c.default.createElement("header", { className: (0, p.default)(o({ "header-container": !0 }, "header-container-" + t, !0)) }, c.default.createElement("div", { className: "header-body" }, c.default.createElement("a", { href: (0, b.getLink)("/" + s + "/index.html") }, c.default.createElement("img", { className: "logo", alt: g.default.name, title: g.default.name, src: (0, b.getLink)(a) })), g.default.defaultSearch ? c.default.createElement("div", { className: (0, p.default)(o({ search: !0 }, "search-" + t, !0)) }, c.default.createElement("span", { className: "icon-search", onClick: this.toggleSearch }), d ? c.default.createElement("div", { className: "search-input" }, c.default.createElement("img", { src: v[u].logo, onClick: this.switchSearch }), c.default.createElement("input", { autoFocus: !0, onChange: this.onInputChange, onKeyDown: this.onKeyDown })) : null) : null, n !== k ? c.default.createElement("span", { className: (0, p.default)(o({ "language-switch": !0 }, "language-switch-" + t, !0)), onClick: this.switchLang }, y.find(function (e) { return e.value === s }).text) : null, c.default.createElement("div", { className: (0, p.default)({ "header-menu": !0, "header-menu-open": l }) }, c.default.createElement("img", { className: "header-menu-toggle", onClick: this.toggleMenu, src: "primary" === t ? (0, b.getLink)("/img/system/menu_white.png") : (0, b.getLink)("/img/system/menu_gray.png") }), c.default.createElement("ul", null, g.default[s].pageMenu.map(function (e) { var a; return c.default.createElement("li", { className: (0, p.default)((a = { "menu-item": !0 }, o(a, "menu-item-" + t, !0), o(a, "menu-item-" + t + "-active", r === e.key), a)), key: e.key }, c.default.createElement("a", { href: (0, b.getLink)(e.link), target: e.target || "_self" }, e.text)) }))))) } }]), t }(c.default.Component); E.propTypes = w, E.defaultProps = S, t.default = E }, function (e, t, a) { "use strict"; function n(e) { return e && e.__esModule ? e : { default: e } } function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function r(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t } function i(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var l = a(0), s = n(l), u = a(12), c = n(u), d = a(4), f = n(d), m = function (e) { function t() { var e, a, n, i; o(this, t); for (var l = arguments.length, s = Array(l), u = 0; u < l; u++)s[u] = arguments[u]; return a = n = r(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), n.onLanguageChange = function (e) { var t = window.location.pathname, a = void 0; a = "zh-cn" === e ? "en-us" : "zh-cn"; var n = t.replace(window.rootPath + "/" + a, window.rootPath + "/" + e); c.default.set("docsite_language", e, { expires: 365 }), window.location = n }, n.getLanguage = function () { var e = window.location.pathname.replace(window.rootPath || "", "").split("/")[1], t = n.props.lang || e || c.default.get("docsite_language") || f.default.defaultLanguage; return "en-us" !== t && "zh-cn" !== t && (t = f.default.defaultLanguage), t !== c.default.get("docsite_language") && c.default.set("docsite_language", t, { expires: 365 }), t }, i = a, r(n, i) } return i(t, e), t }(s.default.Component); t.default = m }, , function (e, t) { }, function (e, t) { }, function (e, t, a) { var n, o; !function (r) { var i = !1; if (n = r, void 0 !== (o = "function" == typeof n ? n.call(t, a, t, e) : n) && (e.exports = o), i = !0, e.exports = r(), i = !0, !i) { var l = window.Cookies, s = window.Cookies = r(); s.noConflict = function () { return window.Cookies = l, s } } }(function () { function e() { for (var e = 0, t = {}; e < arguments.length; e++) { var a = arguments[e]; for (var n in a) t[n] = a[n] } return t } function t(a) { function n(t, o, r) { var i; if ("undefined" != typeof document) { if (arguments.length > 1) { if (r = e({ path: "/" }, n.defaults, r), "number" == typeof r.expires) { var l = new Date; l.setMilliseconds(l.getMilliseconds() + 864e5 * r.expires), r.expires = l } r.expires = r.expires ? r.expires.toUTCString() : ""; try { i = JSON.stringify(o), /^[\{\[]/.test(i) && (o = i) } catch (e) { } o = a.write ? a.write(o, t) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape); var s = ""; for (var u in r) r[u] && (s += "; " + u, !0 !== r[u] && (s += "=" + r[u])); return document.cookie = t + "=" + o + s } t || (i = {}); for (var c = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, f = 0; f < c.length; f++) { var m = c[f].split("="), p = m.slice(1).join("="); this.json || '"' !== p.charAt(0) || (p = p.slice(1, -1)); try { var h = m[0].replace(d, decodeURIComponent); if (p = a.read ? a.read(p, h) : a(p, h) || p.replace(d, decodeURIComponent), this.json) try { p = JSON.parse(p) } catch (e) { } if (t === h) { i = p; break } t || (i[h] = p) } catch (e) { } } return i } } return n.set = n, n.get = function (e) { return n.call(n, e) }, n.getJSON = function () { return n.apply({ json: !0 }, [].slice.call(arguments)) }, n.defaults = {}, n.remove = function (t, a) { n(t, "", e(a, { expires: -1 })) }, n.withConverter = t, n } return t(function () { }) }) }, function (e, t, a) { "use strict"; function n() { } function o() { } var r = a(14); o.resetWarningCache = n, e.exports = function () { function e(e, t, a, n, o, i) { if (i !== r) { var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"); throw l.name = "Invariant Violation", l } } function t() { return e } e.isRequired = e; var a = { array: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: t, element: e, elementType: e, instanceOf: t, node: e, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: o, resetWarningCache: n }; return a.PropTypes = a, a } }, function (e, t, a) { "use strict"; e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" }, , function (e, t, a) { "use strict"; function n(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var o = a(0), r = n(o), i = a(2), l = n(i), s = a(5), u = n(s), c = a(1); a(22); var d = { text: l.default.string.isRequired, img: l.default.string.isRequired }, f = function (e) { var t = e.text, a = e.img, n = (0, u.default)({ bar: !0 }); return r.default.createElement("div", { className: n }, r.default.createElement("div", { className: "bar-body" }, r.default.createElement("img", { src: (0, c.getLink)(a), className: "front-img" }), r.default.createElement("span", null, t), r.default.createElement("img", { src: (0, c.getLink)(a), className: "back-img" }))) }; f.propTypes = d, t.default = f }, , , , , , function (e, t) { }, , , , , , , , , , , , , , , function (e, t, a) { "use strict"; e.exports = { "en-us": [{ filename: "download.md", link: "/en-us/blog/download.html", meta: { title: "Downloads", keywords: "Seata, Downloads, Version", description: "This article will introduce you how to understand the details of each version and upgrade matters needing attention." } }, { filename: "manual-transaction-mode.md", link: "/en-us/blog/manual-transaction-mode.html", meta: { title: "MT mode", keywords: "MT mode", description: "introduce MT mode", author: "kmmshmily", date: "2019-02-13" } }, { filename: "quick-start-use-seata-and-dubbo-services.md", link: "/en-us/blog/quick-start-use-seata-and-dubbo-services.html", meta: { title: "How to use Seata to ensure consistency between Dubbo Microservices", keywords: "Dubbo,Seata,Consistency", description: "This article will introduce you how to use Seata to ensure consistency between Dubbo Microservices.", author: "slievrly", date: "2019-03-07" } }], "zh-cn": [{ filename: "design-more-flexable-application-by-saga.md", link: "/zh-cn/blog/design-more-flexable-application-by-saga.html", meta: { title: "基于 Seata Saga 设计更有弹性的金融应用", keywords: "Saga,Seata,一致性,金融,弹性,分布式,事务", description: "本文从金融分布式应用开发的一些痛点出发，结合理论和实践对社区和行业的解决方案进行了分析，并讲解了如何基于Seata saga设计更有弹性的金融应用", author: "long187", date: "2019-11-04" } }, { filename: "download.md", link: "/zh-cn/blog/download.html", meta: { title: "下载中心", keywords: "Seata, Downloads, Version", description: "本文将向你介绍如何点击了解各版本详情和升级注意事项。" } }, { filename: "how-to-support-spring-cloud.md", link: "/zh-cn/blog/how-to-support-spring-cloud.html", meta: { title: "Fescar 与 Spring Cloud 集成源码深度剖析", author: "郭树抗 季敏", date: "2019/04/15", keywords: "fescar、seata、分布式事务" } }, { filename: "integrate-seata-with-spring-cloud.md", link: "/zh-cn/blog/integrate-seata-with-spring-cloud.html", meta: { title: "Seata（Fescar）分布式事务 整合 Spring Cloud", author: "大菲.Fei", date: "2019/04/15", keywords: "fescar、seata、分布式事务" } }, { filename: "manual-transaction-mode.md", link: "/zh-cn/blog/manual-transaction-mode.html", meta: { title: "MT 模式", keywords: "MT 模式", description: "介绍 MT 模式", author: "kmmshmily", date: "2019-02-13" } }, { filename: "quick-start-use-seata-and-dubbo-services.md", link: "/zh-cn/blog/quick-start-use-seata-and-dubbo-services.html", meta: { title: "如何使用Seata保证Dubbo微服务间的一致性", keywords: "Dubbo,Seata,一致性", description: "本文主要介绍如何使用Seata保证Dubbo微服务间的一致性", author: "slievrly", date: "2019-03-07" } }, { filename: "seata-analysis-go-server.md", link: "/zh-cn/blog/seata-analysis-go-server.html", meta: { title: "Seata分布式Go Server正式开源-TaaS设计简介", author: "fagongzi(zhangxu19830126@gmail.com)", date: "2019/04/23", keywords: "seata、分布式事务、高可用" } }, { filename: "seata-analysis-java-client.md", link: "/zh-cn/blog/seata-analysis-java-client.html", meta: { title: "分布式事务之Seata-Client原理及流程详解", author: "fangliangsheng", date: "2019/04/15", keywords: "fescar、seata、分布式事务" } }, { filename: "seata-analysis-java-server.md", link: "/zh-cn/blog/seata-analysis-java-server.html", meta: { title: "深度剖析一站式分布式事务方案Seata-Server", author: "李钊,季敏", date: "2019/04/08", keywords: "fescar、seata、分布式事务" } }, { filename: "seata-analysis-simple.md", link: "/zh-cn/blog/seata-analysis-simple.html", meta: { title: "Fescar分布式事务原理解析探秘", author: "陈凯玲", keywords: "Fescar、分布式事务", date: "2019/02/18" } }, { filename: "seata-at-mode-design.md", link: "/zh-cn/blog/seata-at-mode-design.html", meta: { title: "分布式事务中间件 Seata 的设计原理", author: "张乘辉", keywords: "Seata、分布式事务、AT模式", description: "AT 模式设计原理", date: "2019/07/11" } }, { filename: "seata-at-mode-start-rm-tm.md", link: "/zh-cn/blog/seata-at-mode-start-rm-tm.html", meta: { title: "Seata 客户端需要同时启动 RM 和 TM 吗？", author: "张乘辉", keywords: "Seata、分布式事务、AT模式、RM、TM", description: "关于 Seata 后续优化的一个讨论点", date: "2019/11/28" } }, { filename: "seata-at-mode-start.md", link: "/zh-cn/blog/seata-at-mode-start.html", meta: { title: "Seata AT 模式启动源码分析", author: "张乘辉", keywords: "Seata、分布式事务、AT模式", description: "Seata 源码分析系列", date: "2019/11/27" } }, { filename: "seata-at-tcc-saga.md", link: "/zh-cn/blog/seata-at-tcc-saga.html", meta: { title: "分布式事务 Seata 及其三种模式详解", keywords: "Saga,Seata,AT,TCC,一致性,金融,分布式,事务", description: "着重分享分布式事务产生的背景、理论基础，以及 Seata 分布式事务的原理以及三种模式（AT、TCC、Saga）的分布式事务实现", author: "long187", date: "2019-08-11" } }, { filename: "seata-mybatisplus-analysis.md", link: "/zh-cn/blog/seata-mybatisplus-analysis.html", meta: { title: "透过源码解决SeataAT模式整合Mybatis-Plus失去MP特性的问题", keywords: "Seata,Mybatis-Plus,分布式事务", description: "本文讲述如何透过源码解决Seata整合Mybatis-Plus失去MP特性的问题", author: "FUNKYE", date: "2019/11/30" } }, { filename: "seata-nacos-analysis.md", link: "/zh-cn/blog/seata-nacos-analysis.html", meta: { title: "Seata分布式事务启用Nacos做配置中心", keywords: "Seata,Nacos,分布式事务", description: "本文讲述如何使用Seata整合Nacos配置", author: "FUNKYE", date: "2019/12/02" } }, { filename: "seata-nacos-docker.md", link: "/zh-cn/blog/seata-nacos-docker.html", meta: { title: "Docker部署Seata与Nacos整合", keywords: "Seata,Nacos,分布式事务", description: "本文讲述如何使用Seata整合Nacos配置的Docker部署", author: "FUNKYE", date: "2019/12/03" } }, { filename: "springboot-dubbo-mybatisplus-seata.md", link: "/zh-cn/blog/springboot-dubbo-mybatisplus-seata.html", meta: { title: "SpringBoot+Dubbo+MybatisPlus整合seata分布式事务", keywords: "Seata,dubbo,mybatis,分布式事务", description: "本文讲述如何将springboot+dubbo+mybatisplus整合seata直连方式搭建", author: "FUNKYE", date: "2019/11/29" } }, { filename: "tcc-mode-applicable-scenario-analysis.md", link: "/zh-cn/blog/tcc-mode-applicable-scenario-analysis.html", meta: { title: "TCC适用模型与适用场景分析", author: "zhangthen", date: "2019/03/27", keywords: "seata、分布式事务、TCC、roadmap" } }, { filename: "tcc-mode-design-principle.md", link: "/zh-cn/blog/tcc-mode-design-principle.html", meta: { title: "TCC 理论及设计实现指南介绍", author: "zhangthen", date: "2019/03/26", keywords: "fescar、分布式事务、TCC、roadmap" } }] } }, function (e, t, a) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { "en-us": { barText: "Blog", postsTitle: "All posts", list: [{ title: "How to use Seata to ensure consistency between Dubbo Microservices", author: "@slievrly", dateStr: "Jan 17th, 2019", desc: "This blog describes details of using Seata to ensure consistency between Dubbo Microservices", link: "/en-us/blog/dubbo-seata.html" }] }, "zh-cn": { barText: "博客", postsTitle: "所有文章", list: [{ title: "如何使用Seata保证Dubbo微服务间的一致性", author: "@slievrly", dateStr: "Jan 17th, 2019", desc: "本文详细介绍了如何使用Seata保证Dubbo微服务间的一致性", link: "/zh-cn/blog/dubbo-seata.html" }, { title: "分布式事务 Seata 及其三种模式详解", author: "@long187", dateStr: "Aug 11th, 2019", desc: "着重分享分布式事务产生的背景、理论基础，以及 Seata 分布式事务的原理以及三种模式（AT、TCC、Saga）的分布式事务实现", link: "/zh-cn/blog/seata-at-tcc-saga.html" }, { title: "基于 Seata Saga 设计更有弹性的金融应用", author: "@long187", dateStr: "Nov 4th, 2019", desc: "本文从金融分布式应用开发的一些痛点出发，结合理论和实践对社区和行业的解决方案进行了分析，并讲解了如何基于Seata saga设计更有弹性的金融应用", link: "/zh-cn/blog/design-more-flexable-application-by-saga.html" }, { title: "SpringBoot+Dubbo+MybatisPlus整合Seata分布式事务", author: "@FUNKYE", dateStr: "Nov 29th, 2019", desc: "本文讲述如何将springboot+dubbo+mybatisplus整合seata直连方式搭建", link: "/zh-cn/blog/springboot-dubbo-mybatisplus-seata.html" }, { title: "透过源码解决SeataAT模式整合Mybatis-Plus失去MP特性的问题", author: "@FUNKYE", dateStr: "Nov 30th, 2019", desc: "本文讲述如何透过源码解决Seata整合Mybatis-Plus失去MP特性的问题", link: "/zh-cn/blog/seata-mybatisplus-analysis.html" }, { title: "Seata分布式事务启用Nacos做配置中心", author: "@FUNKYE", dateStr: "Dec 2th, 2019", desc: "本文讲述如何使用Seata整合Nacos配置", link: "/zh-cn/blog/seata-nacos-analysis.html" }, { title: "Docker部署Seata与Nacos整合", author: "@FUNKYE", dateStr: "Dec 3th, 2019", desc: "本文讲述如何使用Seata整合Nacos配置的Docker部署", link: "/zh-cn/blog/seata-nacos-docker.html" }] } } }, , , , , , function (e, t, a) { "use strict"; function n(e) { return e && e.__esModule ? e : { default: e } } function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function r(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t } function i(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var l = function () { function e(e, t) { for (var a = 0; a < t.length; a++) { var n = t[a]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } return function (t, a, n) { return a && e(t.prototype, a), n && e(t, n), t } }(), s = a(0), u = n(s), c = a(2), d = n(c), f = a(5), m = n(f), p = a(1); a(66); var h = { pageSize: d.default.number }, g = { pageSize: 5 }, b = function (e) { function t(e) { o(this, t); var a = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return a.changePage = function (e) { a.setState({ page: e }) }, a.renderSliderList = function () { for (var e = a.props, t = e.children, n = e.pageSize, o = a.state, r = o.page, i = o.pageWidth, l = [], s = u.default.Children.count(t), c = Math.ceil(s / n), d = 0; d < c; d++)l.push(Array.from(t).slice(d * n, (d + 1) * n)); return u.default.createElement("div", { className: "slider-list", style: { transform: "translateX(-" + r * i + "px)", transition: "transform 500ms ease", width: c * i } }, l.map(function (e, t) { return u.default.createElement("div", { className: "slider-page", style: { width: i }, key: t }, e.map(function (e, t) { return u.default.createElement("div", { className: "slider-item", key: t }, e) })) })) }, a.renderControl = function () { var e = a.props, t = e.children, n = e.pageSize, o = a.state.page, r = u.default.Children.count(t), i = Math.ceil(r / n); return u.default.createElement("div", { className: "slider-control" }, u.default.createElement("img", { className: (0, m.default)({ "slider-control-prev": !0, "slider-control-prev-hidden": 0 === o }), src: (0, p.getLink)("/img/system/prev.png"), onClick: a.changePage.bind(a, o - 1) }), u.default.createElement("img", { className: (0, m.default)({ "slider-control-next": !0, "slider-control-next-hidden": o === i - 1 }), src: (0, p.getLink)("/img/system/next.png"), onClick: a.changePage.bind(a, o + 1) })) }, a.container = null, a.state = { page: 0, pageWidth: 0 }, a } return i(t, e), l(t, [{ key: "componentDidMount", value: function () { var e = this, t = this.container.getBoundingClientRect().width; this.setState({ pageWidth: t }), this.throttleAdjust = (0, p.throttle)(function () { e.setState({ pageWidth: e.container.getBoundingClientRect().width }) }, 200), window.addEventListener("resize", this.throttleAdjust) } }, { key: "componentWillUnmount", value: function () { window.removeEventListener("resize", this.throttleAdjust) } }, { key: "render", value: function () { var e = this; return u.default.createElement("div", { className: "page-slider", ref: function (t) { e.container = t } }, this.renderSliderList(), this.renderControl()) } }]), t }(u.default.Component); b.propTypes = h, b.defaultProps = g, t.default = b }, , , function (e, t, a) { "use strict"; function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t } function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var i = function () { function e(e, t) { for (var a = 0; a < t.length; a++) { var n = t[a]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } return function (t, a, n) { return a && e(t.prototype, a), n && e(t, n), t } }(), l = a(0), s = function (e) { return e && e.__esModule ? e : { default: e } }(l), u = a(1); a(69); var c = function (e) { function t(e) { n(this, t); var a = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return a.onMouseOver = function () { a.setState({ isHovered: !0 }) }, a.onMouseOut = function () { a.setState({ isHovered: !1 }) }, a.state = { isHovered: !1 }, a } return r(t, e), i(t, [{ key: "render", value: function () { var e = this.props.dataSource, t = e.link, a = e.meta, n = a.target, o = a.title, r = a.author, i = a.companyIcon, l = a.companyIconHover, c = a.date, d = a.description, f = this.state.isHovered; return s.default.createElement("a", { href: (0, u.getLink)(t), target: n || "_self", className: "blog-item", onMouseOver: this.onMouseOver, onMouseOut: this.onMouseOut }, s.default.createElement("div", { className: "title" }, s.default.createElement("img", { src: f ? (0, u.getLink)("https://img.alicdn.com/tfs/TB1qqVZJAvoK1RjSZFDXXXY3pXa-32-40.png") : (0, u.getLink)("https://img.alicdn.com/tfs/TB1OkBRukzoK1RjSZFlXXai4VXa-32-40.png") }), s.default.createElement("span", null, o)), s.default.createElement("div", { className: "brief-info" }, s.default.createElement("span", { className: "author" }, r), i ? s.default.createElement("img", { src: f ? (0, u.getLink)(l) : (0, u.getLink)(i) }) : null, s.default.createElement("span", { className: "date" }, c)), s.default.createElement("p", null, d)) } }]), t }(s.default.Component); t.default = c }, , , , , function (e, t) { }, , , , , , , function (e, t, a) { "use strict"; function n(e) { return e && e.__esModule ? e : { default: e } } function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function r(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t } function i(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(t, "__esModule", { value: !0 }); var l = function () { function e(e, t) { for (var a = 0; a < t.length; a++) { var n = t[a]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } return function (t, a, n) { return a && e(t.prototype, a), n && e(t, n), t } }(), s = a(0), u = n(s), c = a(3), d = n(c), f = a(8), m = n(f), p = a(7), h = n(p), g = a(16), b = n(g), y = a(44), v = n(y), k = a(47), w = n(k), S = a(6), E = n(S), _ = a(38), O = n(_), x = a(1), C = a(37), T = n(C); a(52); var j = {}; j["en-us"] = T.default["en-us"].filter(function (e) { return (!e.meta.hidden || "false" === e.meta.hidden) && -1 === e.link.indexOf("download.html") && -1 === e.link.indexOf("client.html") }).sort(function (e, t) { return new Date(t.meta.date) - new Date(e.meta.date) }), j["zh-cn"] = T.default["zh-cn"].filter(function (e) { return (!e.meta.hidden || "false" === e.meta.hidden) && -1 === e.link.indexOf("download.html") && -1 === e.link.indexOf("client.html") }).sort(function (e, t) { return new Date(t.meta.date) - new Date(e.meta.date) }); var P = function (e) { function t() { return o(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)) } return i(t, e), l(t, [{ key: "render", value: function () { var e = this.getLanguage(), t = O.default[e], a = j[e]; return u.default.createElement("div", { className: "blog-list-page" }, u.default.createElement(h.default, { type: "normal", currentKey: "blog", logo: "/img/seata_logo.png", language: e, onLanguageChange: this.onLanguageChange }), u.default.createElement(b.default, { img: "https://img.alicdn.com/tfs/TB1gQ8uJyrpK1RjSZFhXXXSdXXa-160-160.png", text: t.barText }), u.default.createElement("section", { className: "blog-container" }, u.default.createElement("div", { className: "col col-18 left-part" }, u.default.createElement(v.default, { pageSize: 5 }, a.map(function (e, t) { return u.default.createElement(w.default, { key: t, dataSource: e }) }))), u.default.createElement("div", { className: "col col-6 right-part" }, u.default.createElement("h4", null, t.postsTitle), u.default.createElement("ul", null, a.map(function (e, t) { return u.default.createElement("li", { key: t }, u.default.createElement("a", { href: (0, x.getLink)(e.link), target: e.target || "_self" }, u.default.createElement("span", null, e.meta.date, "  "), u.default.createElement("span", null, e.meta.title))) })))), u.default.createElement(E.default, { logo: "/img/seata_logo_gray.png", language: e })) } }]), t }(m.default); document.getElementById("root") && d.default.render(u.default.createElement(P, null), document.getElementById("root")), t.default = P }, , , , , , , function (e, t) { }, , , function (e, t) { }]);