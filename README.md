# python-flask-docker

very simple python app that starts flask to serve an html file with some javascript

html lives in /templates
javascript lives in /static

currently, the html loads and a square is rendered on screen that changes to a random color ever 500ms

--

also included a basic dockerfile:

`docker compose up --build` -- builds and runs the image

then the app can be accessed by going to `127.0.0.1:4000/test`

the app current has 2 other endpoints defined, but the color changing box appears at /test
