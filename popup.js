document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').addEventListener('click', onclick, false)

    function onclick(){
        chrome.tabs.query({currentWindow: true, active: true},
            function(tabs){
                // Whenever we click our button, this code is run.
                // sendMessage sends a message to the content.js (which is a content script) to do something.
                // in return, it sends a response which we can parse.
                chrome.tabs.sendMessage(tabs[0].id, {msg: 'tryGetArticle'}, processArticle)
            })
    }

    function setCount(res){
        const div = document.createElement('div')
        //div.textContent = `${res.count} Covid mentions found`
        document.body.appendChild(div)
    }

    function processArticle(res) {
        let articleText = '';
        // null check
        if (res.articleText != null) {
            articleText = res.articleText;
        }
        
        // in this function, we want to process article text and send to algorithm.
        // for this purpose, we will use localhost.
        if (!articleText == '') {
            // please don't send a whole book or something
            // we're gonna cut it off.
            if (articleText.length <= 22000) {
                articleText = articleText.substring(0, 22000);
            }

            // in production, replace url with own server location.
            // uses a node.js backend that is not included with this file.
            const urlReq = 'http://localhost:8080/processArticle/' + articleText;
            httpGetAsync(urlReq, function(urlResp) {
                // handles the response from the url, process received response from server.
                console.log("response is being handled");
                const div = document.createElement('div');
                div.textContent = "server has been reached!";
                document.body.appendChild(div);
            })
        }
    }

    async function httpGetAsync(url, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", url, true);
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                console.log("response is a-ok");
                callback(xmlHttp.responseText);
            }
        }
        xmlHttp.send();
    }

    function sanitizeText(text) {
        // sanitize
        text = text.replace('?', '\?');

        return text;
    }
}, false)