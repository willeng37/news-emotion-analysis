# corona-corrector

Project for HackTX 2020. Current working title. Need to come up with actual name.

This is an extension written for Google Chrome that can evaluate articles for
emotional connotation (sentiment) in order to help the user determine whether an
article is emotionally charged or neutral in presentation.

WARNING: This program is highly experimental and will NOT work in all conditions.
Use at your own risk.

This program runs based on a Node.js backend which connects to Google Cloud Platform 
and takes advantage of the Google Cloud Natural Language API to process sentimental
analysis of the news articles. This back-end server is currently not public.

The extension extracts articles based on ideas of utilizing HTML tags and other
items to extract article contents from websites, written by myself.

Future possibilities for this project:

- Being able to publicize the software (and server) to analyze articles
- More efficient/effective article parsing algorithm
- Data transfer between server and extension can be improved
- UI/Design could be improved