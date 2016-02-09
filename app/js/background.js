alert('OK');

console.log('TESTE');

    // var tabUrl = tab.url;
    // if (tabUrl && tabUrl.indexOf("site_domain") != -1) {
    //     // changeBgkColour() here:
    //     chrome.tabs.insertCSS(tab.id, {
    //         file: "/app/css/styles.css"
    //     });
    // }
console.log(chrome.tabs);

chrome.tabs.executeScript(null, {file: "/app/js/inject.js"});

console.log('TAB');
