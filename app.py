from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route("/")
def go_exercise():
    return render_template('index.html')

@app.route("/healthz")
def healthz():
    return "OK", 200

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)