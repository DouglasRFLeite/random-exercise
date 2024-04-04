from flask import Flask, render_template
import requests

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('loading.html')

@app.route("/get_exercise_data")
def get_exercise_data():
    try:
        # Faça a solicitação para a API externa usando a chave de API protegida
        url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio?limit=10'
        headers = {'X-RapidAPI-Key': 'SuaChaveDeAPIAqui'}
        response = requests.get(url, headers=headers)

        # Processa a resposta conforme necessário
        if response.status_code == 200:
            data = response.json()
            # Renderiza o template com os dados recebidos da API
            return render_template('index.html', data=data)
        else:
            # Retorna uma mensagem de erro em caso de falha na solicitação
            return render_template('error.html', message='Erro ao acessar a API externa')
    except Exception as e:
        # Retorna uma mensagem de erro em caso de exceção
        return render_template('error.html', message=str(e))

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, debug=True)
