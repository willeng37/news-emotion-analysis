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
    else if (request.msg == 'tryGetArticle') {
        // this is an article parser. it extracts articles from the website you are currently browsing,
        // and allows us to run it through our ML algorithm and determine its sentiment.

        // find elements with matching document classes to: article-body, body-text, Article
        // or id: body-text
        let articleText = '';

        // Based on article design research, this is what some possible article classes look like
        // From there, we use these to extract articles from the html.
        const possibleArticleClasses = ['article-body', 'body-text', 'Article'];

        for (var index = 0; index < possibleArticleClasses.length; index++) {
            // console.log("current index: " + index)
            const bodymatches = document.documentElement.getElementsByClassName(possibleArticleClasses[index])

            if (bodymatches.length != 0) {
                //console.log("Found match: " + bodymatches.length);
                const nodesOfArticle = bodymatches[0].childNodes

                for (const node of nodesOfArticle) {
                    // in each node, we need to strip the html and add it to the article text.
                    // acknowledgements to stack overflow for helping me on this one
                    // console.log("Iterating through nodesOfArticle: " + node.textContent);
                    articleText += node.textContent + "\n";
                }
            }
        }

        if (articleText == '') {
            // we can try search by id: body-text, we already exhausted our main options above.
            const possibleArticleById = document.getElementById("body-text");
            if (possibleArticleById != null) {
                const nodesOfArticle = possibleArticleById.childNodes;

                if (nodesOfArticle.length != 0) {
                    for (const node of nodesOfArticle) {
                        // oh cool we found an article that's pretty dope
                        console.log("Alt method, iterating through nodesOfArticle: " + node.textContent);
                        articleText += node.textContent + "\n";
                    }
                }
            }
        }

        console.log("current website: " + document.URL);
        console.log("possible article text: \n");
        console.log(articleText);

        console.log("captured article text length: " + articleText.length);

        sendResponse({articleText});
    }
})