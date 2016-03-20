/*jslint white: true, browser: true */
/*globals console, image, key, changes, chrome */

/**
* inject.js
*
*/

var i, elems, url, img, image;

function changeBackground() {

    "use strict";

    if (image) {

        img = image;

    } else {

        img = 'chrome-extension://' + chrome.runtime.id + '/app/img/background.jpg';

    }

    url = decodeURIComponent(img);

    if (document.getElementsByClassName("pane-chat-body").length > 0) {

        document.getElementsByClassName("pane-chat-body")[0].style.background       = "url('" + url + "')";

        document.getElementsByClassName("pane-chat-body")[0].style.backgroundRepeat = 'no-repeat';

        document.getElementsByClassName("pane-chat-body")[0].style.backgroundSize = 'cover';

    }

    document.getElementById("app").style.background = "url('" + url + "') no-repeat";

}

function loadImage() {

    "use strict";

    chrome.storage.local.get('image', function (result) {

        image = result.image;

    });

    changeBackground();

}

setTimeout(function() {

  "use strict";

  loadImage();

}, 1000);

document.getElementById("app").addEventListener("click", loadImage());

document.getElementById("app").addEventListener("click", function () {

  "use strict";

  chrome.storage.local.get('image', function (result) {

      image = result.image;

  });

  changeBackground();

});
