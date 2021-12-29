
self.addEventListener('install', function (event) {
    console.log("Installed Service Worker!")
});

String.prototype.toHtmlEntities = function() {
    return this.replace(/./gm, function(s) {
        // return "&#" + s.charCodeAt(0) + ";";
        return (s.match(/[a-z0-9\s]+/i)) ? s : "&#" + s.charCodeAt(0) + ";";
    });
};

self.addEventListener('fetch', function (event) {
    const url = new URL(event.request.url);
    if (url.href.split(url.hostname)[1].includes("j") && url.href.split(url.hostname)[1].split("j/")[1] != undefined) {
        event.respondWith(
//             fetch("https://jokzbackend.locknessko.repl.co/api/v1/get?id=" + url.href.split(url.hostname)[1].split("j/")[1]).then(x => {
//                 return x.text()
//             }).then(y => {
//                 console.error(y);
//                 return new Response(template.replace("&joke;",atob(y).toHtmlEntities()).replace("&title;",url.href.split(url.hostname)[1].split("j/")[1]), {
//                     headers: {
//                         'Content-Type': 'text/html'
//                     }
//                 })
//             })
        )
    }
});
