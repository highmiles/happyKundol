! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Naver", [], t) : "object" == typeof exports ? exports.Naver = t() : e.Naver = t()
}(this, function() {
    return function(e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var a = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.i = function(e) {
            return e
        }, t.d = function(e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 32)
    }([function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var a = function() {
            function e() {
                i(this, e)
            }
            return e.isMobile = function() {
                return !!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))
            }, e.isBrowserSupportsAnimation = function() {
                var e = !0;
                if ("Microsoft Internet Explorer" === navigator.appName) {
                    var t = navigator.userAgent;
                    if (null !== new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(t)) {
                        e = parseFloat(RegExp.$1) > 9
                    }
                }
                return e
            }, e
        }();
        t.default = a
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var a = function() {
            function e() {
                i(this, e)
            }
            return e.prototype.attachEvent = function(e, t, n) {
                e.addEventListener(t, n, !1)
            }, e.prototype.detachEvent = function(e, t, n) {
                e.removeEventListener(t, n, !1)
            }, e
        }();
        t.default = a
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var a = function() {
            function e() {
                i(this, e)
            }
            return e.getMerchantOriginUrl = function() {
                var e = window.location;
                return e.origin ? e.origin : [e.protocol, "//", e.host].join("")
            }, e
        }();
        t.default = a
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            var t = Object.keys(e).reduce(function(t, n) {
                return t[e[n]] = n, t
            }, {});
            return Object.freeze(Object.keys(e).reduce(function(t, n) {
                return t[n] = e[n], t
            }, function(e) {
                return t[e]
            }))
        }
        t.__esModule = !0, t.default = i
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var a = n(2),
            r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a),
            o = function() {
                function e() {
                    i(this, e)
                }
                return e.isDeveloperCenterPayments = function() {
                    return r.default.getMerchantOriginUrl().indexOf("developer.pay.naver.com") > 0
                }, e.createDeveloperCenterUrl = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = "?clientId=" + t.clientId + "&productName=" + t.payload.productName + "&totalPayAmount=" + t.payload.totalPayAmount;
                    return e.dcPaymentPageUrl + n
                }, e
            }();
        t.default = o
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var i = n(3),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            r = (0, a.default)({
                LAYER: "layer",
                PAGE: "page",
                POPUP: "popup"
            });
        t.default = r
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var a = n(12),
            r = function() {
                function e() {
                    i(this, e)
                }
                return e.prototype.find = function() {
                    return document.currentScript || function() {
                        for (var e = document.getElementsByTagName("script"), t = a.sdkFilename, n = 0; n < e.length; n++) {
                            var i = new RegExp(t + ".js|" + t + ".min.js", "g");
                            if (e[n].src && e[n].src.match(i)) return e[n]
                        }
                    }()
                }, e
            }();
        t.default = r
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            o = n(5),
            s = i(o),
            c = n(0),
            u = i(c),
            l = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        mode: "production",
                        payType: "",
                        clientId: "",
                        chainId: "",
                        buttonType: "",
                        buttonEnable: !0,
                        openType: s.default.LAYER,
                        onAuthorize: null,
                        payload: {
                            modelVersion: 2,
                            merchantUserKey: "",
                            merchantPayKey: "",
                            productName: "",
                            totalPayAmount: 0,
                            taxScopeAmount: 0,
                            taxExScopeAmount: 0,
                            productCount: 1,
                            isExtraDeduction: !1,
                            returnUrl: ""
                        }
                    };
                    a(this, e), this._payType = t.payType || "NORMAL", this._payType = this._payType.toUpperCase(), this._mode = t.mode || "production", this._clientId = t.clientId, this._chainId = t.chainId, this._buttonType = t.buttonType, this._buttonEnable = t.buttonEnable, this._openType = this._findOpenTypeValue(t.openType), this._onAuthorize = t.onAuthorize, u.default.isMobile() && this._openType === s.default.LAYER && (this._openType = s.default.PAGE), this._payload = t.payload
                }
                return e.prototype._findOpenTypeValue = function(e) {
                    for (var t in s.default)
                        if (e === s.default[t]) return e;
                    return s.default.LAYER
                }, e.prototype.isDevEnv = function() {
                    return "development" === this._mode
                }, r(e, [{
                    key: "payType",
                    get: function() {
                        return this._payType
                    }
                }, {
                    key: "mode",
                    get: function() {
                        return this._mode
                    },
                    set: function(e) {
                        this._mode = e
                    }
                }, {
                    key: "clientId",
                    get: function() {
                        return this._clientId
                    },
                    set: function(e) {
                        this._clientId = e
                    }
                }, {
                    key: "chainId",
                    get: function() {
                        return this._chainId
                    }
                }, {
                    key: "buttonType",
                    get: function() {
                        return this._buttonType
                    }
                }, {
                    key: "buttonEnable",
                    get: function() {
                        return this._buttonEnable
                    }
                }, {
                    key: "openType",
                    get: function() {
                        return this._openType
                    },
                    set: function(e) {
                        this._openType = e
                    }
                }, {
                    key: "payload",
                    get: function() {
                        return this._payload
                    },
                    set: function(e) {
                        this._payload = e
                    }
                }, {
                    key: "onAuthorize",
                    get: function() {
                        return this._onAuthorize
                    }
                }]), e
            }();
        t.default = l
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var r = n(2),
            o = i(r),
            s = n(0),
            c = i(s),
            u = n(28),
            l = i(u),
            p = n(29),
            d = i(p),
            f = n(10),
            y = i(f),
            _ = n(4),
            h = i(_),
            m = function() {
                function e() {
                    a(this, e)
                }
                return e.prototype.openPaymentLayer = function(e) {
                    this._switchPaymentLayer(!1), this._switchLoginLayer(!1), this._switchExceptionLoginLayer(!1), this._switchLoadingAnimation(!0), this._switchOverLay(!0), this._createIframeForPaymentPage(e)
                }, e.prototype.openLoginLayer = function(e, t) {
                    var n = this;
                    this._switchPaymentLayer(!1), this._switchExceptionLoginLayer(!1), this._setLoginLayerContents(e, t), this._switchLoginLayer(!0), setTimeout(function() {
                        n._switchPaymentLayer(!1)
                    }, 500)
                }, e.prototype.openExceptionLoginLayer = function(e, t) {
                    var n = this;
                    t ? this._openExceptionLoginPage(e) : (this._switchPaymentLayer(!1), this._switchLoginLayer(!1), this._switchExceptionLoginLayer(!0)), setTimeout(function() {
                        n._switchPaymentLayer(!1)
                    }, 500)
                }, e.prototype.closeLayer = function() {
                    var e = this;
                    this._switchLoginLayer(!1), this._switchExceptionLoginLayer(!1), this._switchPaymentLayer(!1), this._switchOverLay(!1), setTimeout(function() {
                        e._switchPaymentLayer(!1)
                    }, 500)
                }, e.prototype.userCancel = function(e, t) {
                    var n = t.payload.returnUrl,
                        i = new d.default(n).appendParam("resultCode", "Fail").appendParam("resultMessage", "userCancel").appendParam("reserveId", e).toString(),
                        a = t.onAuthorize,
                        r = {
                            resultCode: "Fail",
                            resultMessage: "userCancel",
                            reserveId: e,
                            returnUrl: n
                        };
                    a ? "function" == typeof a ? a(r) : y.default.executeByName(window, a, r) : location.href = i
                }, e.prototype.callBackToMerchant = function(e, t, n) {
                    var i = t.payload.returnUrl,
                        a = new d.default(i).appendParam("resultCode", "Fail").appendParam("resultMessage", "userCancel").appendParam("reserveId", e).toString(),
                        r = t.onAuthorize,
                        o = {
                            resultCode: "Fail",
                            resultMessage: n,
                            reserveId: e,
                            returnUrl: i
                        };
                    r ? "function" == typeof r ? r(o) : y.default.executeByName(window, r, o) : location.href = a
                }, e.prototype._createIframeForPaymentPage = function(e) {
                    var t = this,
                        n = document.querySelector("#_Npay_SDK_payment_iframe"),
                        i = [e, this._createPram()].join("");
                    n.contentWindow.location.replace(i), n.addEventListener("load", function() {
                        t._switchLoadingAnimation(!1), t._isLoginLayerVisible() || t._isExceptionLoginLayerVisible() ? t._switchPaymentLayer(!1) : t._switchPaymentLayer(!0), t._adjustIframeVisibleSize(n)
                    }, !1)
                }, e.prototype._createPram = function() {
                    return [!0 === h.default.isDeveloperCenterPayments() ? "&isLayer=true" : "?isLayer=true", "&originUrl=" + o.default.getMerchantOriginUrl()].join("")
                }, e.prototype._adjustIframeVisibleSize = function(e) {
                    e.width = "750", window.innerHeight < 820 && window.innerHeight > 100 ? e.height = window.innerHeight - 100 : e.height = "820"
                }, e.prototype._switchPaymentLayer = function(e) {
                    var t = document.querySelector(".Npay_SDK_payment");
                    if (t)
                        if (c.default.isBrowserSupportsAnimation()) {
                            var n = t.getAttribute("class"),
                                i = "_Npay_SDK_payment_effect_on";
                            if (e) {
                                if (n.indexOf(i) < 0) {
                                    var a = [n, " ", i].join("");
                                    t.setAttribute("class", a)
                                }
                            } else {
                                var r = n.replace(i, "");
                                t.setAttribute("class", r)
                            }
                        } else t.style.visibility = e ? "visible" : "hidden"
                }, e.prototype._switchLoadingAnimation = function(e) {
                    document.querySelector(".Npay_SDK_progress").style.visibility = e ? "visible" : "hidden"
                }, e.prototype._switchOverLay = function(e) {
                    var t = document.querySelector(".Npay_SDK_dimmed");
                    t && (t.style.visibility = e ? "visible" : "hidden")
                }, e.prototype._setLoginLayerContents = function(e, t) {
                    e = l.default.doFilter(e), t = l.default.doFilter(t), document.querySelector(".Npay_SDK_product").innerText = e || "", document.querySelector(".Npay_SDK_price").innerText = t ? t + "원" : ""
                }, e.prototype._isLoginLayerVisible = function() {
                    var e = document.querySelector("#Npay_SDK_layer_login");
                    return !!e && "visible" === e.style.visibility
                }, e.prototype._switchLoginLayer = function(e) {
                    var t = document.querySelector("#Npay_SDK_layer_login");
                    t && (t.style.visibility = e ? "visible" : "hidden")
                }, e.prototype._openExceptionLoginPage = function(e) {
                    var t = "production" === e || "staging" === e ? "https://pay.naver.com/home" : "https://test-pay.naver.com/home";
                    window.open(t).focus(), this.closeLayer()
                }, e.prototype._isExceptionLoginLayerVisible = function() {
                    return "visible" === document.querySelector("#Npay_SDK_layer_exception_login").style.visibility
                }, e.prototype._switchExceptionLoginLayer = function(e) {
                    var t = document.querySelector("#Npay_SDK_layer_exception_login");
                    t && (t.style.visibility = e ? "visible" : "hidden")
                }, e.prototype._adjustLayerPositionToCenter = function(e) {
                    var t = window.innerWidth,
                        n = window.innerHeight,
                        i = void 0 !== window.pageXOffset,
                        a = "CSS1Compat" === (document.compatMode || ""),
                        r = i ? window.pageXOffset : a ? document.documentElement.scrollLeft : document.body.scrollLeft,
                        o = i ? window.pageYOffset : a ? document.documentElement.scrollTop : document.body.scrollTop;
                    e.style.position = "absolute", e.style.top = n / 2 + o + "px", e.style.left = t / 2 + r + "px"
                }, e
            }();
        t.default = m
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var r = n(5),
            o = i(r),
            s = n(8),
            c = i(s),
            u = new c.default,
            l = function() {
                function e() {
                    a(this, e)
                }
                return e.prototype.open = function(e, t) {
                    switch (t) {
                        case o.default.LAYER:
                            u.openPaymentLayer(e);
                            break;
                        case o.default.PAGE:
                            location.href = e;
                            break;
                        case o.default.POPUP:
                            window.open(e, "naverPayWindow", ["width=750", "height=800", "left=" + (screen.width - 750) / 2, "top=" + (screen.height - 800) / 2, "scrollbars=yes", "resizable=yes"].join(",")) || alert("팝업이 차단되었습니다. 팝업 설정을 허용하여 주십시오.");
                            break;
                        default:
                            location.href = e
                    }
                }, e.prototype.close = function() {
                    u.closeLayer()
                }, e
            }();
        t.default = l
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var a = function() {
            function e() {
                i(this, e)
            }
            return e.executeByName = function(e, t) {
                for (var n = [].slice.call(arguments).splice(2), i = t.split("."), a = i.pop(), r = 0; r < i.length; r++) e = e[i[r]];
                return e[a].apply(e, n)
            }, e
        }();
        t.default = a
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var r = n(31),
            o = i(r),
            s = n(6),
            c = i(s),
            u = new c.default,
            l = function() {
                function e() {
                    a(this, e)
                }
                return e.findType = function() {
                    var e = u.find();
                    if (e)
                        for (var t = e.attributes, n = 0, i = t.length; n < i; n++) {
                            var a = t[n],
                                r = a.name.match(/^data-(.+)$/);
                            if (null !== r) return o.default.SIMPLE
                        }
                    return o.default.CUSTOM
                }, e.isSimple = function() {
                    return o.default.SIMPLE === this.findType()
                }, e.isNormalPay = function() {
                    var e = u.find();
                    if (e) {
                        var t = e.attributes,
                            n = t.getNamedItem("data-pay-type");
                        if (null === n) return !0;
                        if ("normal" === n.value) return !0
                    }
                    return !1
                }, e.isNormalSimplePay = function() {
                    return !(!this.isNormalPay() || !this.isSimple())
                }, e.isRecurrentPay = function() {
                    var e = u.find();
                    if (e) {
                        var t = e.attributes,
                            n = t.getNamedItem("data-pay-type");
                        if (null !== n && "recurrent" === n.value) return !0
                    }
                    return !1
                }, e.isRecurrentSimplePay = function() {
                    return !(!this.isRecurrentPay() || !this.isSimple())
                }, e
            }();
        t.default = l
    }, function(e, t) {
        e.exports = {
            name: "naverpay-javascript-sdk",
            version: "1.2.0",
            description: "naverpay integration javascript sdk",
            sdkFilename: "naverpay",
            main: "index.js",
            scripts: {
                test: "mocha --require babel-register --recursive",
                eslint: "eslint .eslintrc.js src/",
                start: "webpack-dev-server --open --port 8081",
                build: "webpack",
                "build-watch": "webpack --watch",
                "build-release": "cross-env NODE_ENV=production webpack",
                karma: "karma start",
                jsdoc: "jsdoc src/**/*.js",
                "code-coverage": "cross-env NODE_ENV=test nyc mocha test/**/*.js"
            },
            repository: {
                type: "git",
                url: "https://oss.navercorp.com/PayNsp/naverpay-javascript-sdk.git"
            },
            author: "naver",
            license: "ISC",
            devDependencies: {
                "babel-core": "^6.25.0",
                "babel-helper-modules": "^6.0.0",
                "babel-loader": "^7.0.0",
                "babel-plugin-transform-es3-member-expression-literals": "^6.22.0",
                "babel-plugin-transform-es3-property-literals": "^6.22.0",
                "babel-plugin-transform-runtime": "^6.23.0",
                "babel-preset-env": "^1.5.1",
                "babel-plugin-istanbul": "^4.1.4",
                chai: "^3.5.0",
                eslint: "^3.19.0",
                karma: "^1.7.0",
                "karma-babel-preprocessor": "^6.0.1",
                "karma-chrome-launcher": "^2.2.0",
                "karma-firefox-launcher": "^1.0.1",
                "karma-ie-launcher": "^1.0.0",
                "karma-mocha": "^1.3.0",
                "karma-phantomjs-launcher": "^1.0.4",
                "karma-safari-launcher": "^1.0.0",
                "karma-webpack": "^2.0.3",
                nyc: "^11.1.0",
                "cross-env": "^5.0.2",
                mocha: "^3.4.1",
                sinon: "^2.3.8",
                webpack: "^2.6.0",
                "webpack-dev-server": "^2.4.5",
                "uglifyjs-webpack-plugin": "^0.4.6"
            },
            dependencies: {
                "babel-register": "^6.24.1",
                npm: "^6.4.1"
            },
            nyc: {
                require: ["babel-register"],
                sourceMap: !1,
                instrument: !1,
                watermarks: {
                    lines: [50, 90],
                    functions: [50, 90],
                    branches: [50, 90],
                    statements: [50, 90]
                },
                lines: 0,
                statements: 0,
                functions: 0,
                branches: 0,
                include: ["src/**/*.js", "src/*.js"],
                "report-dir": "./coverage",
                reporter: ["lcov", "text"]
            }
        }
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0, t.Pay = void 0;
        var i = n(23),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            r = new a.default;
        t.Pay = r
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var r = n(6),
            o = i(r),
            s = n(1),
            c = i(s),
            u = new o.default,
            l = new c.default,
            p = function() {
                function e() {
                    a(this, e)
                }
                return e.prototype.find = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "mediumGreen",
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = arguments[2],
                        i = {
                            smallWhite: {
                                size: "s",
                                color: "white"
                            },
                            mediumWhite: {
                                size: "m",
                                color: "white"
                            },
                            largeWhite: {
                                size: "l",
                                color: "white"
                            },
                            xLargeWhite: {
                                size: "xl",
                                color: "white"
                            },
                            smallGreen: {
                                size: "s",
                                color: "green"
                            },
                            mediumGreen: {
                                size: "m",
                                color: "green"
                            },
                            largeGreen: {
                                size: "l",
                                color: "green"
                            },
                            xLargeGreen: {
                                size: "xl",
                                color: "green"
                            }
                        };
                    return this.render(i[e], t, n)
                }, e.prototype.render = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            size: "m",
                            color: "green"
                        },
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "NORMAL";
                    return '\n\t\t\t<div class="' + ("NORMAL" === n ? "Npay_payment_box" : "RECURRENT" === n ? "Npay_regular_box" : "") + "  " + (!0 !== t ? " Npay_type_disabled" : " Npay_type_" + e.color) + " Npay_btn_size" + e.size + '">\n\t\t\t\t<a href="#" class="Npay_sdk_payment_btn _payButton">\n\t\t\t\t\t<div class="Npay_sdk_payment_inner">\n\t\t\t\t\t\t<span class="Npay_logo"><em class="Npay_SDK_blind">Npay</em></span>\n\t\t\t\t\t\t<span class="Npay_txt_payment">' + ("NORMAL" === n ? "결제" : "RECURRENT" === n ? "정기결제" : "") + "</span>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n    \t"
                }, e.prototype.createPayButton = function(e, t, n, i) {
                    var a = this.find(e, t, n);
                    (u.find().parentElement || document.getElementsByTagName("body")[0]).insertAdjacentHTML("beforeend", a);
                    var r = document.querySelector("._payButton");
                    l.attachEvent(r, "click", i)
                }, e
            }();
        t.default = p
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var a = function() {
            function e(t) {
                i(this, e), this._elIframe = t || document.getElementById("_Npay_SDK_reserve_iframe")
            }
            return e.prototype.checkReserveProxyLoad = function() {
                var e = this._elIframe;
                void 0 !== e.loadCheck && !1 === e.loadCheck && (alert("일시적 오류가 발생했습니다. 잠시 후 다시 시도해 주세요."), e.contentWindow.location.replace(""))
            }, e.prototype.isReserveProxyPage = function(e) {
                var t = void 0;
                try {
                    t = this._elIframe.contentWindow.location.origin, void 0 === this._elIframe.contentWindow.location.ancestorOrigins ? this._elIframe.contentWindow.location.origin === e && (t = void 0) : this._elIframe.contentWindow.location.ancestorOrigins[0] === e && (t = void 0)
                } catch (e) {}
                return !t
            }, e
        }();
        t.default = a
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            o = n(19),
            s = i(o),
            c = n(7),
            u = i(c),
            l = function() {
                function e() {
                    a(this, e)
                }
                return e.prototype.init = function(e) {
                    this._initialized = !0, this._payConfig = new u.default(e);
                    var t = {
                        mode: this._payConfig.mode,
                        payType: this._payConfig.payType
                    };
                    this._urls = new s.default(t)
                }, e.prototype.isInitialized = function() {
                    return !0 === this._initialized
                }, r(e, [{
                    key: "payConfig",
                    get: function() {
                        return this._payConfig
                    }
                }, {
                    key: "urls",
                    get: function() {
                        return this._urls
                    }
                }]), e
            }();
        t.default = l
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            r = n(0),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r),
            s = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "development";
                    i(this, e), this._mode = t, this._isMobile = o.default.isMobile(), this._pcOriginDomain = "nsp.pay.naver.com", this._pcDomain = "pay.naver.com", this._mobileDomain = "m.pay.naver.com", this._localDomainPrefix = "local", this._alphaDomainPrefix = "alpha", this._devDomainPrefix = "dev", this._testDomainPrefix = "test", this._stgDomainPrefix = "beta", this._cdnDomain = "ssl.pstatic.net"
                }
                return e.prototype.createDomain = function(e) {
                    return "development" === this._mode ? this._testDomainPrefix + "-" + e : "staging" === this._mode ? this._stgDomainPrefix + "-" + e : "alpha" === this._mode ? this._alphaDomainPrefix + "-" + e : "dev" === this._mode ? this._devDomainPrefix + "-" + e : "local" === this._mode ? this._devDomainPrefix + "-" + e : e
                }, a(e, [{
                    key: "apiDomain",
                    get: function() {
                        return this.createDomain(this._pcOriginDomain)
                    }
                }, {
                    key: "developerCenterDomain",
                    get: function() {
                        return this.createDomain(this._pcOriginDomain)
                    }
                }, {
                    key: "baseDomain",
                    get: function() {
                        return this._isMobile ? this.createDomain(this._mobileDomain) : this.createDomain(this._pcDomain)
                    }
                }, {
                    key: "staticResourceDomain",
                    get: function() {
                        return "development" === this._mode ? this._testDomainPrefix + "-nsp." + this._pcDomain : "alpha" === this._mode ? this._alphaDomainPrefix + "-nsp." + this._pcDomain : "dev" === this._mode ? this._devDomainPrefix + "-nsp." + this._pcDomain : "local" === this._mode ? this._localDomainPrefix + "-nsp." + this._pcDomain : this._cdnDomain
                    }
                }]), e
            }();
        t.default = s
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var r = n(11),
            o = i(r),
            s = n(6),
            c = i(s),
            u = n(27),
            l = i(u),
            p = new c.default,
            d = new l.default,
            f = function() {
                function e() {
                    a(this, e)
                }
                return e.prototype.find = function() {
                    if (o.default.isSimple()) {
                        for (var e = p.find(), t = e.attributes, n = {}, i = {}, a = void 0, r = 0, s = t.length; r < s; r++) {
                            a = t[r];
                            var c = a.name.match(/^data-(.+)$/);
                            if (null !== c ? c[1] : void 0) {
                                var u = d.dashToCamelCase(c[1]),
                                    l = a.value;
                                if ("payType" === u || "mode" === u || "clientId" === u || "chainId" === u || "buttonType" === u || "buttonEnable" === u || "openType" === u || "onAuthorize" === u) "buttonEnable" === u && (l = "true" === l), n[u] = l;
                                else {
                                    switch (u) {
                                        case "productCount":
                                        case "totalPayAmount":
                                        case "taxScopeAmount":
                                        case "taxExScopeAmount":
                                            l = Number(l);
                                            break;
                                        case "extraDeduction":
                                            u = "isExtraDeduction", l = "true" === l
                                    }
                                    i[u] = l
                                }
                            }
                        }
                        return n.payload = i, n
                    }
                }, e
            }();
        t.default = f
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            o = n(17),
            s = i(o),
            c = n(30),
            u = i(c),
            l = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        mode: "production",
                        payType: "NORMAL"
                    };
                    a(this, e);
                    var n = t.mode || "production",
                        i = t.payType || "NORMAL";
                    this._domains = new s.default(n), this._payOrigin = "https://" + this._domains.baseDomain, this._payApiOrigin = "https://" + this._domains.apiDomain, this._loginProxyApiUrl = "https://" + this._domains.apiDomain + "/payments/sdk/proxy/loginpopup", this._payTypeUrlSelector(i), this._sdkCssUrl = "development" === n || "alpha" === n || "dev" === n ? "https://" + this._domains.staticResourceDomain + "/sdk/css/" : "local" === n ? "https://" + this._domains.staticResourceDomain + "/sdk/css/" : "https://" + this._domains.staticResourceDomain + "/static.pay/z/static/sdk/css/", this._dcPaymentPageUrl = "https://" + this._domains.developerCenterDomain + "/payments/developer/getstarted", this._payType = i, this._mode = n
                }
                return e.prototype._payTypeUrlSelector = function(e) {
                    e === u.default.NORMAL ? this._reserveApiUrl = "https://" + this._domains.apiDomain + "/payments/sdk/proxy/reserve" : e === u.default.RECURRENT && (this._reserveApiUrl = "https://" + this._domains.apiDomain + "/payments/sdk/proxy/recurrent/reserve"), e === u.default.NORMAL ? this._paymentPageUrl = "https://" + this._domains.baseDomain + "/payments/" : e === u.default.RECURRENT && (this._paymentPageUrl = "https://" + this._domains.baseDomain + "/payments/recurrent/")
                }, r(e, [{
                    key: "payType",
                    get: function() {
                        return this._payType
                    }
                }, {
                    key: "mode",
                    get: function() {
                        return this._mode
                    }
                }, {
                    key: "payApiOrigin",
                    get: function() {
                        return this._payApiOrigin
                    }
                }, {
                    key: "payOrigin",
                    get: function() {
                        return this._payOrigin
                    }
                }, {
                    key: "reserveApiUrl",
                    get: function() {
                        return this._reserveApiUrl
                    }
                }, {
                    key: "loginProxyApiUrl",
                    get: function() {
                        return this._loginProxyApiUrl
                    }
                }, {
                    key: "paymentPageUrl",
                    get: function() {
                        return this._paymentPageUrl
                    }
                }, {
                    key: "domains",
                    get: function() {
                        return this._domains
                    }
                }, {
                    key: "sdkCssUrl",
                    get: function() {
                        return this._sdkCssUrl
                    }
                }, {
                    key: "dcPaymentPageUrl",
                    get: function() {
                        return this._dcPaymentPageUrl
                    }
                }]), e
            }();
        t.default = l
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var r = n(1),
            o = i(r),
            s = n(2),
            c = i(s),
            u = new o.default,
            l = function() {
                function e() {
                    a(this, e)
                }
                return e.prototype.login = function(e, t, n) {
                    var i = this;
                    this._urls = t;
                    var a = document.createElement("iframe");
                    a.width = 0, a.height = 0, a.style.display = "none", this.elBody || (this.elBody = document.getElementsByTagName("body")[0]), this.elBody.appendChild(a);
                    var r = [this._urls.loginProxyApiUrl, "/", e, "?merchantOriginUrl=", c.default.getMerchantOriginUrl(), "&payType=", n.payType].join("");
                    a.contentWindow.location.replace(r), u.attachEvent(a, "load", function() {
                        a.contentWindow.postMessage("", i._urls.payApiOrigin)
                    })
                }, e
            }();
        t.default = l
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var r = n(1),
            o = i(r),
            s = n(2),
            c = i(s),
            u = n(15),
            l = i(u),
            p = new o.default,
            d = function() {
                function e() {
                    a(this, e)
                }
                return e.prototype.reserve = function(e, t) {
                    var n = this;
                    this._urls = e, this._payConfig = t;
                    var i = document.getElementById("_Npay_SDK_reserve_iframe");
                    i && document.getElementsByTagName("body")[0].removeChild(i), i = document.createElement("iframe"), i.id = "_Npay_SDK_reserve_iframe", i.width = "0", i.height = "0", i.innerHTML = "", i.style.display = "none", i.loadCheck = !1, this.elBody || (this.elBody = document.getElementsByTagName("body")[0]), this.elBody.appendChild(i);
                    var a = new l.default(i);
                    i.contentWindow.location.replace(this._urls.reserveApiUrl), setTimeout(function() {
                        a.checkReserveProxyLoad()
                    }, 6e3), p.attachEvent(i, "load", function() {
                        a.isReserveProxyPage(n._urls.payApiOrigin) && i.contentWindow.postMessage(n._findReserveParam(n._urls, n._payConfig), n._urls.payApiOrigin)
                    })
                }, e.prototype._findReserveParam = function(e, t) {
                    var n = t.payload;
                    if (!n) return "";
                    n.clientId = t.clientId, n.chainId = t.chainId;
                    var i = void 0;
                    n.productItems && (i = "string" == typeof n.productItems ? JSON.parse(t.payload.productItems.replace(/\'/g, '"')) : n.productItems), n.productItems = i, n.merchantOriginUrl = c.default.getMerchantOriginUrl();
                    var a = {};
                    return a.param = n, a.baseUrl = "https://" + e.domains.apiDomain, JSON.stringify(a)
                }, e
            }();
        t.default = d
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            o = n(1),
            s = i(o),
            c = n(0),
            u = i(c),
            l = n(8),
            p = i(l),
            d = n(20),
            f = i(d),
            y = new s.default,
            _ = function() {
                function e(t, n) {
                    a(this, e), this._urls = t, this._payConfig = n, this._layerOpenManager = new p.default, this._resetLayer(), this._loadHtml(), this._initBtnEvent()
                }
                return e.prototype._resetLayer = function() {
                    var e = document.getElementById("_Npay_SDK_root");
                    e && e.parentNode && e.parentNode.removeChild(e)
                }, e.prototype._loadHtml = function() {
                    var e = '\n\t\t\t<div id="_Npay_SDK_root">\n\t\t\t<div class="Npay_SDK_dimmed" style="visibility:hidden;"></div>\n\t\t\t\n\t\t\t<div class="Npay_SDK_layer Npay_SDK_progress" style="visibility:hidden;">\n\t\t\t\t<div class="Npay_layer_inner">\n\t\t\t\t\t<span class="Npay_SDK_loading">\n\t\t\t\t\t\t<em class="Npay_SDK_blind">로딩중</em>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div id="Npay_SDK_layer_login" class="Npay_SDK_layer Npay_SDK_simple" style="visibility:hidden;">\n\t\t\t\t<div class="Npay_layer_inner">\n\t\t\t\t\t<div class="Npay_SDK_login">\n\t\t\t\t\t\t<span class="Npay_SDK_logo"><em class="Npay_SDK_blind">Npay</em></span>\n\t\t\t\t\t\t<div class="Npay_SDK_info">\n\t\t\t\t\t\t\t<strong class="Npay_SDK_product"></strong>\n\t\t\t\t\t\t\t<em class="Npay_SDK_price"></em>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class="Npay_SDK_guide">네이버 로그인 하시면<br><strong class="Npay_point_color">네이버페이</strong>를 이용하실 수 있습니다.</p>\n\t\t\t\t\t\t<a href="#" class="Npay_btn_login _Npay_btn_login">\n\t\t\t\t\t\t\t<span class="Npay_btn_inner"><em class="Npay_SDK_blind">NAVER</em>로그인</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<a href="#" class="Npay_btn_close _Npay_btn_login_close" role="button"><em class="Npay_SDK_blind">닫기</em></a>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div id="Npay_SDK_layer_exception_login" class="Npay_SDK_layer Npay_SDK_simple" style="visibility:hidden;">\n\t\t\t\t<div class="Npay_layer_inner">\n\t\t\t\t\t<div class="Npay_SDK_login">\n\t\t\t\t\t\t<span class="Npay_SDK_logo"><em class="Npay_SDK_blind">Npay</em></span>\n\t\t\t\t\t\t<div class="Npay_SDK_info">\n\t\t\t\t\t\t\t<strong class="Npay_SDK_product">네이버페이 이용확인이 필요합니다.</strong>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t <p class="Npay_SDK_guide">네이버페이 이용을 위해서는<br><span class="Npay_point_color">\'네이버페이 이용확인\'을 진행해 주셔야 합니다</span></p>\n\t\t\t\t\t\t<a href="#" class="Npay_btn_login _Npay_btn_exception_login">\n\t\t\t\t\t\t\t<span class="Npay_btn_inner text">네이버페이 이용 확인하러 가기</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<a href="#" class="Npay_btn_close _Npay_btn_exception_login_close" role="button"><em class="Npay_SDK_blind">닫기</em></a>\n\t\t\t</div>\n\n\t\t\t<div id="Npay_SDK_layer" class="Npay_SDK_layer Npay_SDK_payment _Npay_SDK_payment_effect">\n\t\t\t\t<div class="Npay_layer_inner">\n\t\t\t\t\t<iframe id="_Npay_SDK_payment_iframe" frameborder="0" marginheight="0" marginwidth="0" width="0" height="0"></iframe>\n\t\t\t\t</div>\n\t\t\t\t<a href="#" class="Npay_btn_close _Npay_btn_close" role="button"><em class="Npay_SDK_blind">닫기</em></a>\n\t\t\t</div>\n\t\t\t\n\t\t\t</div>\n\t\t\t\n\t\t\t';
                    u.default.isBrowserSupportsAnimation() || (e = e.replace(" _Npay_SDK_payment_effect", "")), document.body.insertAdjacentHTML("beforeend", e)
                }, e.prototype._initBtnEvent = function() {
                    var e = this,
                        t = document.querySelector("._Npay_btn_close");
                    y.attachEvent(t, "click", function(t) {
                        confirm("취소하시면 입력한 모든 정보가 취소됩니다.\n결제를 취소하시겠습니까?") && (e._layerOpenManager.closeLayer(), e._layerOpenManager.callBackToMerchant(e._reserveId, e._payConfig, "userCancel")), t.preventDefault()
                    });
                    var n = document.querySelector("._Npay_btn_login");
                    y.attachEvent(n, "click", function(t) {
                        (new f.default).login(e._reserveId, e._urls, e._payConfig), t.preventDefault()
                    });
                    var i = document.querySelector("._Npay_btn_login_close");
                    y.attachEvent(i, "click", function(t) {
                        e._layerOpenManager.closeLayer(), e._layerOpenManager.callBackToMerchant(e._reserveId, e._payConfig, "userCancel"), t.preventDefault()
                    });
                    var a = document.querySelector("._Npay_btn_exception_login");
                    y.attachEvent(a, "click", function(t) {
                        e._layerOpenManager._openExceptionLoginPage(e._urls.mode), e._layerOpenManager.callBackToMerchant(e._reserveId, e._payConfig, "userStatusFail"), t.preventDefault()
                    });
                    var r = document.querySelector("._Npay_btn_exception_login_close");
                    y.attachEvent(r, "click", function(t) {
                        e._layerOpenManager.closeLayer(), e._layerOpenManager.callBackToMerchant(e._reserveId, e._payConfig, "userCancel"), t.preventDefault()
                    })
                }, r(e, [{
                    key: "reserveId",
                    set: function(e) {
                        this._reserveId = e
                    }
                }, {
                    key: "layerOpenManager",
                    get: function() {
                        return this._layerOpenManager
                    }
                }]), e
            }();
        t.default = _
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var r = n(11),
            o = i(r),
            s = n(7),
            c = i(s),
            u = n(26),
            l = i(u),
            p = n(14),
            d = i(p),
            f = n(18),
            y = i(f),
            _ = n(16),
            h = i(_),
            m = n(9),
            g = i(m),
            v = n(21),
            b = i(v),
            w = n(24),
            N = i(w),
            P = n(4),
            E = i(P),
            S = n(5),
            D = i(S),
            L = n(12),
            C = new l.default,
            M = new d.default,
            T = new y.default,
            k = new h.default,
            x = new g.default,
            O = new b.default,
            A = new N.default,
            R = function() {
                function e() {
                    if (a(this, e), o.default.isSimple()) {
                        var t = T.find();
                        this.create(t), M.createPayButton(k.payConfig.buttonType, k.payConfig.buttonEnable, k.payConfig.payType, function(e) {
                            O.reserve(k.urls, k.payConfig), e.preventDefault()
                        })
                    }
                }
                return e.prototype.create = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new c.default;
                    return k.init(e), A.init(k.urls, k.payConfig), A.start(), C.load(k.urls.sdkCssUrl, "naverpay_sdk_20180208.css"), this
                }, e.prototype.open = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!k.isInitialized()) return void(k.payConfig.isDevEnv() && alert("[NaverPay sdk not ready] used before Naver.Pay.create() functions invocation. Please check the following link https://developer.pay.naver.com/sdk"));
                    if ("string" == typeof e) return void x.open(k.urls.paymentPageUrl + e, k.payConfig.openType);
                    if (k.payConfig.payload)
                        for (var t in e) "bookAndShowDeduction" === t ? k.payConfig.payload.isBookNShowDeduction = e[t] : k.payConfig.payload[t] = e[t];
                    else k._payConfig.payload = e;
                    if (k._payConfig.payload.bookAndShowDeduction = void 0, !0 === E.default.isDeveloperCenterPayments()) {
                        var n = E.default.createDeveloperCenterUrl(k.urls, k.payConfig);
                        x.open(n, D.default.LAYER)
                    } else O.reserve(k.urls, k.payConfig)
                }, e.prototype.close = function() {
                    x.close()
                }, e.prototype.getVersion = function() {
                    return L.version
                }, e
            }();
        t.default = R
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var r = n(25),
            o = i(r),
            s = n(1),
            c = i(s),
            u = n(9),
            l = i(u),
            p = n(10),
            d = i(p),
            f = n(0),
            y = i(f),
            _ = n(22),
            h = i(_),
            m = n(4),
            g = i(m),
            v = new c.default,
            b = new l.default,
            w = function() {
                function e() {
                    a(this, e)
                }
                return e.prototype.init = function(e, t) {
                    var n = this;
                    this._urls = e, this._payConfig = t, !g.default.isDeveloperCenterPayments() && y.default.isMobile() || (this._layer = new h.default(this._urls, this._payConfig), this._layerOpenManager = this._layer.layerOpenManager), this._eventHandler = v, this._isLoginProcess = !1, this._reserveId = "", this._messageListenHandler || (this._messageListenHandler = function(e) {
                        n.listen(e)
                    })
                }, e.prototype.setEventHandler = function(e) {
                    this._eventHandler = e
                }, e.prototype.start = function() {
                    this._eventHandler.detachEvent(window, "message", this._messageListenHandler), this._eventHandler.attachEvent(window, "message", this._messageListenHandler)
                }, e.prototype.listen = function(e) {
                    var t = this;
                    if (this.checkOrigin(e.origin)) {
                        var n = void 0;
                        try {
                            n = JSON.parse(e.data)
                        } catch (t) {
                            n = e.data
                        }
                        var i = n.type;
                        if (!n && !i) return;
                        var a = document.getElementById("_Npay_SDK_reserve_iframe"),
                            r = !1;
                        switch (a && !a.loadCheck && (a.loadCheck = !0, r = !0), i) {
                            case o.default.NSP_LOGIN:
                                "Success" === n.code ? "true" === n.body.isLoginException ? (this.openExceptionLoginPage(this._isLoginProcess), this._isLoginProcess = !1) : (this.openLoginPage(), this._isLoginProcess = !0) : alert("[error] code : " + n.code + ", message : " + n.message);
                                break;
                            case o.default.NSP_RESERVE:
                                "Success" === n.code ? (y.default.isMobile() || (this._layer.reserveId = n.body.reserveId), this._reserveId = n.body.reserveId, this.openPaymentPage(n.body.reserveId)) : r ? alert("일시적 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.") : alert("[error] code : " + n.code + ", message : " + n.message);
                                break;
                            case o.default.NSP_PAY_RETURN:
                                "Success" === n.code ? setTimeout(function() {
                                    t.closePaymentPage(), setTimeout(function() {
                                        location.href = n.redirectUrl
                                    }, 500)
                                }, 2e3) : (this.closePaymentPage(), setTimeout(function() {
                                    location.href = n.redirectUrl
                                }, 500));
                                break;
                            case o.default.NSP_PAY_LAYER_RETURN:
                                this.closePaymentPage();
                                var s = this._payConfig.onAuthorize;
                                setTimeout(function() {
                                    s ? "function" == typeof s ? s(n.body) : d.default.executeByName(window, s, n.body) : location.href = n.redirectUrl
                                }, 500)
                        }
                    }
                }, e.prototype.checkOrigin = function(e) {
                    return e === this._urls.payOrigin || e === this._urls.payApiOrigin
                }, e.prototype.openPaymentPage = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    b.open(this._urls.paymentPageUrl + e, this._payConfig.openType)
                }, e.prototype.closePaymentPage = function() {
                    this._layerOpenManager.closeLayer()
                }, e.prototype.openLoginPage = function() {
                    var e = this._payConfig.payload,
                        t = e ? e.productName : "",
                        n = e ? e.totalPayAmount : "";
                    this._layerOpenManager.openLoginLayer(t, n)
                }, e.prototype.openExceptionLoginPage = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._layerOpenManager.openExceptionLoginLayer(this._payConfig.mode, e), e && this._layerOpenManager.callBackToMerchant(this._reserveId, this._payConfig, "userStatusFail")
                }, e
            }();
        t.default = w
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var i = n(3),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            r = (0, a.default)({
                NSP_RESERVE: "NSP_RESERVE",
                NSP_PAY_RETURN: "NSP_PAY_RETURN",
                NSP_PAY_LAYER_RETURN: "NSP_PAY_LAYER_RETURN",
                NSP_LOGIN: "NSP_LOGIN"
            });
        t.default = r
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var a = function() {
            function e() {
                i(this, e)
            }
            return e.prototype.load = function(e, t) {
                var n = e + t,
                    i = new Date,
                    a = i.getFullYear(),
                    r = i.getMonth() + 1,
                    o = i.getDate(),
                    s = document.createElement("link");
                s.rel = "stylesheet", s.type = "text/css", s.charset = "utf-8", s.async = !1, s.href = n + "?" + a + (r < 10 ? "0" + r : r) + (o < 10 ? "0" + o : o);
                var c = document.getElementsByTagName("head")[0];
                c.appendChild(s, c)
            }, e
        }();
        t.default = a
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var a = function() {
            function e() {
                i(this, e)
            }
            return e.prototype.dashToCamelCase = function(e) {
                return e.replace(/-(\w)/g, function(e, t) {
                    return t.toUpperCase()
                })
            }, e.prototype.camelToDashCase = function(e) {
                return e.replace(/([A-Z])/g, function(e) {
                    return "-" + e.toLowerCase()
                })
            }, e
        }();
        t.default = a
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var a = function() {
            function e() {
                i(this, e)
            }
            return e.doFilter = function(e) {
                return e.toString().replace(/</g, "&lt;").replace(/>/g, "&gt;").replace("onmouseover", "").replace("onerror", "")
            }, e
        }();
        t.default = a
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var a = function() {
            function e(t) {
                i(this, e), this._sUrl = t
            }
            return e.prototype.hasParameters = function() {
                return -1 !== this._sUrl.indexOf("?")
            }, e.prototype.appendParam = function(e, t) {
                return this.hasParameters() ? (this._sUrl = this._sUrl + "&" + e + "=" + t, this) : (this._sUrl = this._sUrl + "?" + e + "=" + t, this)
            }, e.prototype.toString = function() {
                return this._sUrl
            }, e
        }();
        t.default = a
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var i = n(3),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            r = (0, a.default)({
                NORMAL: "NORMAL",
                RECURRENT: "RECURRENT"
            });
        t.default = r
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var i = n(3),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            r = (0, a.default)({
                SIMPLE: "simple",
                CUSTOM: "custom"
            });
        t.default = r
    }, function(e, t, n) {
        e.exports = n(13)
    }])
});