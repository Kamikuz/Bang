! function(e) {
    function t(a) {
        if (o[a]) return o[a].exports;
        var s = o[a] = {
            exports: {},
            id: a,
            loaded: !1
        };
        return e[a].call(s.exports, s, s.exports, t), s.loaded = !0, s.exports
    }
    var o = {};
    return t.m = e, t.c = o, t.p = "", t(0)
}([function(e, t, o) {
    "use strict";
    var a = o(1),
        s = $(window).width(),
        i = $(window).innerHeight();
    (0, a.preload)(), (0, a.toggleHeader)(), (0, a.pageTop)(), $(window).on("load", function() {
        d(), n(), setTimeout(function() {
            $("#st-Loader").addClass("hidden")
        }, 50), setTimeout(function() {
            $("#st-Loader").remove()
        }, 150)
    });
    var n = function() {
            var e;
            e = 100, e = s >= 1024 ? 100 : 60;
            var t = $(window).scrollTop();
            $(window).on("load resize", function() {
                s = $(window).width(), i = $(window).innerHeight()
            }), $(".anim_Item").each(function() {
                var e = $(this).offset().top;
                e < i + t && $(this).addClass("show")
            }), $(window).on("scroll", function() {
                t = $(window).scrollTop(), $(".anim_Item").each(function() {
                    var o = $(this).offset().top;
                    t > o - i + e && $(this).addClass("show")
                })
            })
        },
        d = function() {
            var e, t = Math.floor(25 * Math.random()),
                o = $("#st-Frame_Line"),
                a = $(".swiper-slide-active").attr("data-hash");
            e = new Swiper(".keyvisual-Img-Container", {
                initialSlide: t,
                autoplay: {
                    delay: 5e3
                },
                effect: "fade",
                speed: 1e3,
                fadeEffect: {
                    crossFade: !0
                },
                allowTouchMove: !0,
                loop: !0,
                slidesPerView: 1,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    hideOnClick: !0
                },
                preloadImages: !1,
                lazy: {
                    loadPrevNext: !0,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !0
                },
                on: {
                    slideChangeTransitionStart: function() {
                        a = $(".swiper-slide-active").attr("data-hash"), o.removeClass().addClass(a)
                    },
                    lazyImageReady: function() {}
                }
            })
        }
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.anchorLink = t.tabSwitchingCampaign = t.tabSwitching = t.showImg = t.showMovie = t.pageTop = t.preload = t.toggleHeader = void 0;
    var o = !1,
        a = document.getElementById("st-Header"),
        s = document.getElementById("st-Header_Nav"),
        i = document.getElementById("st-Header_Bg"),
        n = document.getElementById("st-Menu"),
        d = $("#movie-Stage"),
        r = $("#movie-Iframe"),
        l = function() {
            $(window).on("load", function() {
                $("body").removeClass("preload")
            })
        };
    t.preload = l;
    var c = function() {
        n.addEventListener("click", function() {
            o ? (a.classList.remove("opened"), s.classList.remove("opened"), n.classList.remove("opened"), i.classList.remove("opened"), a.classList.add("closed"), s.classList.add("closed"), n.classList.add("closed"), i.classList.add("closed"), o = !1, setTimeout(function() {}, 0)) : setTimeout(function() {
                a.classList.remove("closed"), s.classList.remove("closed"), n.classList.remove("closed"), i.classList.remove("closed"), a.classList.add("opened"), s.classList.add("opened"), n.classList.add("opened"), i.classList.add("opened"), o = !0
            }, 0)
        }, !1)
    };
    t.toggleHeader = c;
    var u = function() {
        $(window).on("scroll", function() {
            var e = $(window).scrollTop();
            e >= 70 ? $("#st-Top").removeClass("st-Top-Hidden") : $("#st-Top").addClass("st-Top-Hidden")
        }), $("#st-Top").on("click", function() {
            var e = 700;
            return $("html, body").animate({
                scrollTop: 0
            }, e, "easeInOutQuint"), !1
        })
    };
    t.pageTop = u;
    var p = function() {
        $(".js-Youtube").on("click", function() {
            var e = $(this).attr("data-youtube");
            $("#movie-Stage").css({
                opacity: "0",
                display: "block"
            }).stop().animate({
                opacity: "1",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0
            }, 300, "easeOutQuart", function() {
                return r.append('<iframe width="900" height="506" src="https://www.youtube.com/embed/' + e + '?rel=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen" frameborder="0"></iframe>'), d.stop().fadeIn(400), !1
            })
        }), $("#movie-Close,#movie-Iframe").on("click", function() {
            $("#movie-Stage").css({
                opacity: "1"
            }).stop().animate({
                opacity: "0"
            }, 300, "easeOutQuart", function() {
                $("#movie-Stage").css({
                    display: "none"
                }), r.children().remove()
            })
        })
    };
    t.showMovie = p;
    var m = function() {
        $(".js-Img").on("click", function() {
            var e = $(this).attr("data-img");
            $("#movie-Stage").css({
                opacity: "0",
                display: "block"
            }).stop().animate({
                opacity: "1",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0
            }, 300, "easeOutQuart", function() {
                return r.append('<img src="' + e + '">'), d.stop().fadeIn(400), !1
            })
        })
    };
    t.showImg = m;
    var f = function() {
        $(".tab-item").on("click", function() {
            var e = $(".tab-item").index(this);
            $(this).addClass("current").siblings(".tab-item").removeClass("current"), $(this).closest(".tab").prev(".panel").find(".panel-item").removeClass("is-show"), $(".panel-item").eq(e).addClass("is-show")
        })
    };
    t.tabSwitching = f;
    var v = function() {
        $(".tab-item").on("click", function() {
            var e = $(".tab-item").index(this);
            $(this).addClass("current").siblings(".tab-item").removeClass("current"), $(this).closest(".tab").next(".panel").find(".panel-item").removeClass("is-show"), $(".panel-item").eq(e).addClass("is-show")
        })
    };
    t.tabSwitchingCampaign = v;
    var h = function() {
        var e = location.hash;
        e && ($("body,html").stop().scrollTop(0), setTimeout(function() {
            var t = $(e),
                o = t.offset().top - 40;
            $("body,html").stop().animate({
                scrollTop: o
            }, 500)
        }, 200)), $("a[href^='#']").on("click", function() {
            var e = 700,
                t = $(this).attr("href"),
                o = $("#" == t || "" == t ? "html" : t),
                a = 40,
                s = o.offset().top;
            return $("html, body").animate({
                scrollTop: s - a
            }, e, "easeInOutQuint"), !1
        })
    };
    t.anchorLink = h
}]);
//# sourceMappingURL=app.bundle.js.map