javascript:
(function() {
    document.body.insertBefore(document.createElement("img"), document.body.childNodes[0]);
    var l = document.images;
    for (var i = 0; i < l.length; i++) {
        var e = document.createElement("button");
        e.innerText = "Share";
        e.style.position = "absolute";
        e.style.left = l[i].offsetLeft + "px";
        e.style.top = l[i].offsetTop + "px";
        e.setAttribute("link", "http://service.weibo.com/share/share.php?url=" + document.URL + "&title=" + document.title + "&pic=" + l[i].src + "&searchPic=true");
        document.body.appendChild(e);
        e.addEventListener("click", function() {
            window.open(this.getAttribute("link"), "_blank", "width=615,height=505");
        });
    }
})();
