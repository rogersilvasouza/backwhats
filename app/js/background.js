/*jslint white: true, browser: true */
/*globals console, chrome */

//console.log(chrome.tabs);

chrome.tabs.executeScript(null, {file: "/app/js/inject.js"});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: "/app/js/teste.js"
  });
});
