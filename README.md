# python-flask-docker

very simple python app that starts flask to serve an html file with some javascript

html lives in /templates
javascript lives in /static

currently, the html loads and a square is rendered on screen that changes to a random color ever 500ms

--

also included a basic dockerfile:

builds the image and uses 'python-flask-docker' as the image name
`docker build --tag python-flask-docker .`

runs the image in detatched mode (-d) using a specific port (-p) ... 4000 is the external port, 5000 is the internal port
`docker run -d -p 4000:5000 python-flask-docker` 

then the app can be accessed by going to 127.0.0.1:4000/test
the app current has 2 other endpoints defined, but the color changing box appears at /test
