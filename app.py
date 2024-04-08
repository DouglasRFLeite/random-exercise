from flask import Flask, render_template, jsonify
import requests
import random

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/hello")
def hello():
    return "hello"

@app.route("/api/get_exercise_data")
def get_exercise_data():
    exercicio_aleatorio = random.randint(0, 1299)
    try:
        url = "https://exercisedb.p.rapidapi.com/exercises"
        querystring = {"limit":"1","offset":exercicio_aleatorio}
        headers = {
            "X-RapidAPI-Key": "1a6191428bmshd5ace4b8d86cad3p178e0ejsnb39eb0718b4b",
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
        }
        response = requests.get(url, headers=headers, params=querystring)

        # Processa a resposta conforme necessário
        if response.status_code == 200:
            data = response.json()
            # Retorna os dados da API em formato JSON
            return jsonify(data)
        else:
            # Retorna uma mensagem de erro em caso de falha na solicitação
            return jsonify({'error': 'Erro ao acessar a API externa'}), 500
    except Exception as e:
        # Retorna uma mensagem de erro em caso de exceção
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, debug=True)
