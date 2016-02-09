/*jslint white: true, browser: true */
/*globals console, chrome */

//console.log(chrome.tabs);

chrome.tabs.executeScript(null, {file: "/app/js/inject.js"});
