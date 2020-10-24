//alert("Loading Covid Correcter")
chrome.runtime.onMessage.addListener(function (request ,sender, sendResponse) {
    const findCovid = new RegExp('Covid', 'gi')
    const matches = 
    document.documentElement.innerHTML.match(findCovid)
    sendResponse({count: matches.length})
})