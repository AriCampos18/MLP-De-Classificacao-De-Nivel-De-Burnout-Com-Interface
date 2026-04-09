from flask import Flask, request, jsonify
import numpy as np
import pickle
from keras.models import load_model

app = Flask(__name__)

model = load_model("modelo_dengue.h5")
encoder = pickle.load(
    open("labelencoder_dengue.pkl","rb")
)

@app.route("/prever", methods=["POST"])
def prever():

    dados = request.json

    genero = encoder.transform([dados["gender"]])[0]

    entrada = np.array([[
        dados["age"],
        genero,
        dados["hemoglobin_g_dl"],
        dados["wbc_count"],
        dados["differential_count"],
        dados["rbc_count"],
        dados["platelet_count"],
        dados["platelet_distribution_width"]
    ]])

    pred = model.predict(entrada)

    classe = np.argmax(pred)

    return jsonify({
        "classe": int(classe)
    })

if __name__ == "__main__":
    app.run(debug=True)