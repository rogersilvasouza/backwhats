/*jslint white: true, browser: true */
/*globals console, image, key, changes, chrome */

/**
* Inject.js
*
*/

var i, elems, url, img, image;

chrome.storage.local.get('image', function (result) {

    "use strict";

    image = result.image;

});

if (image) {

    img = image;

} else {

    img = 'http://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-334393.jpg';

}

elems = document.getElementsByClassName('pane-list-user');

if (elems.length) {

    for (i = 0; i < elems.length; i = i + 1) {

        elems[i].style.background = 'red';

    }

}

function changeBackground() {

    "use strict";

    elems = document.getElementsByClassName("pane-chat-body");

    url = decodeURIComponent(img);

    for (i = 0; i < elems.length; i = i + 1) {

        elems[i].style.background       = "url('" + url + "')";

        elems[i].style.backgroundRepeat = 'no-repeat';

    }

    document.getElementById("app") .style.background = "url('" + url + "') no-repeat";

}

changeBackground();

document.getElementById("app").addEventListener("click", changeBackground);
