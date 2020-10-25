# news-emotion-analysis

Project made during HackTX 2020. Repository title is current working title.

This is an extension written for Google Chrome that can evaluate articles for emotional connotation (sentiment) in order to help the user determine whether an article is emotionally charged or neutral in presentation.

WARNING: This program is highly experimental and will NOT work in all conditions.
Use at your own risk.

This program runs based on a Node.js backend which connects to Google Cloud Platform and takes advantage of the Google Cloud Natural Language API to process sentimental analysis of the news articles. This back-end server is currently not public.

The extension extracts articles based on ideas of utilizing HTML tags and other items to extract article contents from websites, written by myself.

Future possibilities for this project (which may or may not ever happen):

- Publication of the software (and server) for use to analyze articles
- More efficient/effective article parsing algorithm (removal of bloat/non-article related items within the article)
- Data transfer between server and extension can be improved (current implementation causes issues)
- UI/Design could be improved
- Implementation of custom ML model that has a stronger analysis of news article output (custom tuning for news articles), this could have likely been done using Google's AutoML Natural Language instead of their pre-trained model.

## Acknowledgements

Special thanks to DanThy Nguyen for assisting and partnering up on this project, from project idea to assisting in development.
