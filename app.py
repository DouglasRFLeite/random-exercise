from flask import Flask
import os

app = Flask(__name__)


@app.rout("/exercise")
def go_exercise():
    print("teste")
    return "<script>alert(\"teste\")</script><h1>Go Exercise Now!</h1>"


if __name__ == "__main__":
    ENVIRONMENT_DEBUG = os.environ.get("DEBUG", True)
    app.run(host='0.0.0.0', port=5000, debug=ENVIRONMENT_DEBUG)