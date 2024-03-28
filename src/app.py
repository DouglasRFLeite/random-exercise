from flask import Flask
import os

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, World!"


@app.route("/exercise")
def go_exercise():
    print("teste")
    return "<script>alert(\"teste\")</script><h1>Go Exercise Now!</h1>"


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)