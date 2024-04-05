# python-flask-docker-k8s

very simple python app that starts flask to serve an html file with some javascript

html lives in /templates
javascript lives in /static

currently, the html loads and a square is rendered on screen that changes to a random color ever 500ms

--

also included a basic dockerfile:

`docker compose up --build` -- builds and runs the image

then the app can be accessed by going to `127.0.0.1:4000/test`

the app current has 2 other endpoints defined, but the color changing box appears at /test

--

also includes basic deployment and service yaml files for kubernetes:

instructions for `minikube`:

after downloading (if necessary) - `minikube start`

`eval $(minikube docker-env)` ... then `cd` into the app directory
`docker build -t python-flask-docker-k8s .`

`kubectl apply -f python-flask-docker-server-deployment.yaml`
`kubectl apply -f python-flask-docker-server-service.yaml`



