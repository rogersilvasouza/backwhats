/*jslint white: true, browser: true */
/*globals console, chrome */

/**
* background.js
*
*/

chrome.tabs.executeScript(null, {file: "/app/js/inject.js"});
