javascript: 
(function(document) {
    if (!document.getElementById("flashStyle")) {
        var e = document.createElement("style");
        e.setAttribute("type", "text/css");
        e.setAttribute("id", "flashStyle");
        e.innerHTML = "
            object[type = 'application/x-shockwave-flash'] {
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                margin: 0 !important;
                z-index: 9999 !important;
            }
            .live-room-side {
                display: none !important;
            }
        ";
        document.head.appendChild(e);
    } else {
        document.getElementById("flashStyle").remove();
    }
})(document);
