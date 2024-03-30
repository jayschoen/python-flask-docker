from flask import Flask, url_for, render_template

app = Flask(__name__)

@app.route('/')
def hello():
  return "hello flask!"

@app.route('/meh')
def meh():
  return 'mehhhhhhhhhhhh'

@app.route('/test')
def test():
  return render_template("test.html")

if __name__ == "__main__":
  app.run(debug=True)

