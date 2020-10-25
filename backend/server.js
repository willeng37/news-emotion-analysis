const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hiya!');
  });

  // must use async process
  // processes the article text for our extension!
app.get('/processArticle/:articleText', async (req, res) => {
    console.log("Request made to process article!");
    console.log("article length: " + req.params.articleText.length);
    // process article text
    if (req.params.articleText != null && !(req.params.articleText.length >= 22000)) {
        console.log("valid request received");
        // need to process async function with await
        const articleSentiment = await processArticle(req.params.articleText);

        console.log(`Text: ${req.params.articleText}`);
        console.log(`Sentiment score: ${articleSentiment.score}`);
        console.log(`Sentiment magnitude: ${articleSentiment.magnitude}`);

        console.log(`server response: ${articleSentiment.score}|${articleSentiment.magnitude}`);
        res.send(`${articleSentiment.score}|${articleSentiment.magnitude}`);
    }
    else {
        console.log("server response: NOT VALID RESPONSE msg");
        res.send(req.params.articleText + " is not a valid request!");
    }
});
  
  // Listen to the App Engine-specified port, or 8080 otherwise
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
  });

async function processArticle(articleText) {
    console.log("processArticle has been called");
    // Imports the Google Cloud client library
    const language = require('@google-cloud/language');
  
    // Instantiates a client
    const client = new language.LanguageServiceClient();
  
    // The text to analyze, passed as articleText
    const document = {
      content: articleText,
      type: 'PLAIN_TEXT',
    };
  
    // Detects the sentiment of the text
    const [result] = await client.analyzeSentiment({document: document});
    const sentiment = result.documentSentiment;

    // returns as part of the promise.
    return sentiment;
}
