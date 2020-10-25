chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.msg == 'runCovidCounter') {
        // search for mentions of the string Covid in the webpage.
        const findCovid = new RegExp('Covid', 'gi')
        const matches = document.documentElement.innerHTML.match(findCovid)
        if (matches == null) {
            // matches is null if none was found.
            sendResponse({count: 0})
        }
        else {
            sendResponse({count: matches.length})
        }
    }
})