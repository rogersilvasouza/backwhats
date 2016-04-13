/*jslint browser: true*/
/*global $, jQuery, console, alert, GET, chrome, language*/


var saveButton = document.getElementById('save'), helpButton = document.getElementById('help'), image;

function restoreImage() {

    image = localStorage.getItem("image");

    if (image) {

        document.getElementById("url").value = image;

    }

}

function saveImage() {

    localStorage.setItem("image", document.getElementById("url").value);

    chrome.storage.local.set({'image': document.getElementById("url").value});

    alert('Save');

}

saveButton.addEventListener('click', function () {

    saveImage();

});

helpButton.addEventListener('click', function () {

    window.open('http://www.paperwhats.com/help', '_blank');

});

document.addEventListener("DOMContentLoaded", function () {

    restoreImage();

});
