! function () {
    var e = window,
       t = "___grecaptcha_cfg",
       c = e[t] = e[t] || {},
       r = "grecaptcha",
       a = e[r] = e[r] || {};
    a.ready = a.ready || function (e) {
       (c.fns = c.fns || []).push(e)
    }, e.__recaptcha_api = "https://www.google.com/recaptcha/api2/", (c.render = c.render || []).push("onload"), e.__google_recaptcha_client = !0;
    var n = document,
       o = n.createElement("script");
    o.type = "text/javascript", o.async = !0, o.src = "https://www.gstatic.com/recaptcha/releases/4q6CtudrwcI-LSEYlfoEbDXg/recaptcha__en.js", o.crossOrigin = "anonymous", o.integrity = "sha384-qXuJ4ygBop9oxjZHS9+4GBxjI9VjYCwfwQvoBapXOHPeeKLPf2BGerMyPJZODZPN";
    var s = n.querySelector("script[nonce]"),
       p = s && (s.nonce || s.getAttribute("nonce"));
    p && o.setAttribute("nonce", p);
    var i = n.getElementsByTagName("script")[0];
    i.parentNode.insertBefore(o, i)
 }();