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

    console.log('Dentro da função -> ' + image);

});

console.log('Fora da função -> ' + image);

if (image) {

    img = image;

} else {

    img = 'https://scontent-mia1-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/942801_1131749893532066_4194837725433874430_n.jpg?oh=20bcbdf081fb48ae1aa8c75a0df3607e&oe=577078EB';

}

elems = document.getElementsByClassName('pane-list-user');

for (i = 0; i < elems.length; i = i + 1) {

  elems[i].style.background = 'red';

}

function changeBackground() {

  "use strict";

  elems = document.getElementsByClassName('pane-chat-body');

  url = decodeURIComponent(img);

  for (i = 0; i < elems.length; i = i + 1) {

    elems[i].style.background       = "url('" + url + "')";
    elems[i].style.backgroundRepeat = 'no-repeat';

  }

}

changeBackground();

document.getElementById("app").addEventListener("click", changeBackground);

console.log('CSS Alterado');
