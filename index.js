function $$(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector));
}

$$("#examples article").forEach(function (article, i) {
    var style = article.getAttribute("style");
    article.removeAttribute("style");

    var div = document.createElement("div");
    article.appendChild(div);

    var textarea = document.createElement("textarea");
    textarea.textContent = style;
    (textarea.oninput = function() {
        var fixed = StyleFix.fix(this.value);
        div.setAttribute("style", fixed);
    }).call(textarea);

    new Incrementable(textarea);

    article.appendChild(textarea);
});

if (location.protocol === 'http:' && location.hostname !== 'localhost')
    location.protocol = 'https:';
if ('paintWorklet' in CSS) {
    CSS.paintWorklet.addModule('conic-gradient-paint.js');
} else {
    document.body.innerHTML = 'You need support for <a href="https://drafts.css-houdini.org/css-paint-api/">CSS Paint API</a> to view this demo :(';
}
