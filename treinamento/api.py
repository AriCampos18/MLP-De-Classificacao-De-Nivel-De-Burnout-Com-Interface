from flask import Flask, request, jsonify
import numpy as np
from keras.models import load_model
import pickle

app = Flask(__name__)

# carregar modelo treinado (você precisa salvar antes)
modelo = load_model("modelo.h5")

# exemplo: se você usar scaler/encoder, carregue também
# scaler = pickle.load(open("scaler.pkl", "rb"))

@app.route("/prever", methods=["POST"])
def prever():
    dados = request.json

    entrada = [
        float(dados["age"]),
        float(dados["daily_study_hours"]),
        float(dados["daily_sleep_hours"]),
        float(dados["screen_time_hours"]),
        float(dados["anxiety_score"]),
        float(dados["depression_score"])
    ]

    entrada = np.array(entrada).reshape(1, -1)

    resultado = modelo.predict(entrada)
    classe = int(np.argmax(resultado))

    return jsonify({
        "classe": classe
    })

if __name__ == "__main__":
    app.run(debug=True)