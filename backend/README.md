# nodejs-corona-backend

Backend for corona-corrector Chrome extension. Running on a separate Node.js applet.

To run:

Set environmental variables: This program uses Google Cloud Platform, which requires a JSON-format key as seen in their [documentation](https://cloud.google.com/natural-language/docs/reference/libraries) for the Natural Language API.

To set environmental variables in Powershell:

```
$env:GOOGLE_APPLICATION_CREDENTIALS:"[path]"
```

where \[path\] is the path of the JSON-formatted key. Learn more [here.](https://cloud.google.com/natural-language/docs/reference/libraries)

To run the server, `cd` to folder of the server file and

```
npm start
```

The server will begin listening on port 8080.
