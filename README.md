# python-flask-docker-k8s

very simple python app that starts flask to serve an html file with some javascript

html lives in /templates
javascript lives in /static

the app has 3 endpoints:

index (`/`) ... just a "hello flask" message

`/meh` ... just another endpoint

`/test` ... renders a box on the screen which changes colors ever 500ms

--

to run the standalone python app:

in the app directory, create a virtual env `python3 -m venv venv`

then `source venv/bin/activate`

then `pip install -r requirements.txt`

finally `python3 app.py`

flask should start and provide a url

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

`kubectl apply -f python-flask-docker-k8s-server-deployment.yaml`

`kubectl apply -f python-flask-docker-k8s-server-service.yaml`

`kubectl port-forward service/python-flask-docker-k8s 5000:` <-- nothing after the colon is on purpose

