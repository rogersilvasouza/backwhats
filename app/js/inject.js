/*jslint white: true, browser: true */
/*globals console */

/**
* Inject.js
*
*/

var i, elems, url, img = 'https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/12670068_934420459968681_3746995988839703274_n.jpg?oh=39c25a41ba70479974155ddd46ee0f33&oe=5765AD9A&__gda__=1462229779_7f2f9354951fb7e4226ba8e11a328bbc';

img = 'https://scontent-mia1-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/942801_1131749893532066_4194837725433874430_n.jpg?oh=20bcbdf081fb48ae1aa8c75a0df3607e&oe=577078EB';

img = 'https://res.cloudinary.com/teepublic/image/private/s--nc0YsF2E--/t_Preview/b_rgb:c62b29,c_limit,f_jpg,h_630,q_90,w_630/v1446197407/production/designs/145085_0';

// img = localStorage.getItem("language");
//
// console.log(img);


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
