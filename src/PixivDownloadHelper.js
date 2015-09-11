javascript:
(function() {
    if(/.*pixiv.*member_illust.*mode=medium/i.test(document.URL)){
        var u;
        (u=$(".original-image").attr("data-src"))==undefined?
            u=(pixiv.context.ugokuIllustFullscreenData==undefined?
                $(".works_display ._layout-thumbnail img").attr("src").replace("c/600x600/img-master","img-original").replace("_master1200",""):
                pixiv.context.ugokuIllustFullscreenData.src)
        :u;
        window.open(u,"_blank");
    }
})();