/*jslint white: true, browser: true */
/*globals console, image, key, changes, chrome */

/**
* Teste.js
*
*/

console.log('---- INICIO TESTE.JS ----');

var i, elems, url, img, image;

chrome.storage.local.get('image', function (result) {

    "use strict";

    image = result.image;

});

if (image) {

    img = image;

} else {

    img = 'chrome-extension://' + chrome.runtime.id + '/app/img/background.jpg';

}

function changeBackground() {

    "use strict";

    url = decodeURIComponent(img);

    if (document.getElementsByClassName("pane-chat-body").length > 0) {

        document.getElementsByClassName("pane-chat-body")[0].style.background       = "url('" + url + "')";

        document.getElementsByClassName("pane-chat-body")[0].style.backgroundRepeat = 'no-repeat';

        document.getElementsByClassName("pane-chat-body")[0].style.backgroundSize = 'cover';

    }

    document.getElementById("app").style.background = "url('" + url + "') no-repeat";

}

changeBackground();

document.getElementById("app").addEventListener("click", changeBackground);

console.log('---- FIM TESTE.JS ----');
