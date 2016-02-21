/*jslint browser: true*/
/*global $, jQuery, console, alert, GET, chrome, language*/

var saveButton = document.getElementById('save'), image;

function restoreImage() {

    "use strict";

    image = localStorage.getItem("image");

    if (image) {

        document.getElementById("url").value = image;

    }

}

function saveImage() {

    "use strict";

    localStorage.setItem("image", document.getElementById("url").value);

    chrome.storage.local.set({'image': document.getElementById("url").value});

    alert('Save');

}

saveButton.addEventListener('click', function () {

    "use strict";

    saveImage();

});

document.addEventListener("DOMContentLoaded", function () {

    "use strict";

    restoreImage();

});
