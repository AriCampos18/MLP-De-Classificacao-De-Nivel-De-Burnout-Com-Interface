from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd
from keras.models import load_model
import pickle

app = Flask(__name__)
CORS(app)

# carregar modelo e colunas
modelo = load_model("modelo.h5")
colunas = pickle.load(open("colunas.pkl", "rb"))

# 🔧 FUNÇÃO CORRIGIDA
def preprocessar(dados):
    df = pd.DataFrame([dados])

    # one-hot encoding
    df = pd.get_dummies(df)

    # garantir mesmas colunas do treino
    for col in colunas:
        if col not in df:
            df[col] = 0

    # manter ordem correta
    df = df[colunas]

    # 🚨 CORREÇÃO PRINCIPAL (resolve seu erro)
    df = df.astype(float)

    return df.values


@app.route("/prever", methods=["POST"])
def prever():
    try:
        dados = request.json
        print("Recebido:", dados)  # DEBUG

        entrada = preprocessar(dados)
        print("Entrada:", entrada)  # DEBUG

        resultado = modelo.predict(entrada)

        classe = int(np.argmax(resultado))

        return jsonify({"classe": classe})

    except Exception as e:
        print("ERRO:", str(e))
        return jsonify({"erro": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)