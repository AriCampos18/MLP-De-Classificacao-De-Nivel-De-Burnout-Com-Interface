import { useState } from 'react'
import Swal from 'sweetalert2'
import './App.css'

function App() {

  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [hemoglobin, setHemoglobin] = useState("")
  const [wbc, setWbc] = useState("")
  const [differential, setDifferential] = useState("")
  const [rbc, setRbc] = useState("")
  const [platelet, setPlatelet] = useState("")
  const [pdw, setPdw] = useState("")

  const [resultado, setResultado] = useState(null)

  async function handleSubmit() {

    const campos = [
      age,
      gender,
      hemoglobin,
      wbc,
      differential,
      rbc,
      platelet,
      pdw
    ]

    if (campos.some(c => c === "")) {
      return Swal.fire({
        title: "Erro!",
        text: "Preencha todos os campos!",
        icon: "error"
      })
    }

    const dados = {

      age: Number(age),
      gender: gender,

      hemoglobin_g_dl: Number(hemoglobin),
      wbc_count: Number(wbc),
      differential_count: Number(differential),
      rbc_count: Number(rbc),
      platelet_count: Number(platelet),
      platelet_distribution_width: Number(pdw)

    }

    try {

      const response = await fetch(
        "http://localhost:5000/prever",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(dados)
        }
      )

      const data = await response.json()

      setResultado(data.classe)

    } catch (erro) {

      console.error(erro)

      Swal.fire({
        title: "Erro!",
        text: "Erro ao conectar com API",
        icon: "error"
      })
    }
  }

  return (

    <section id="center">

      <h1>Detecção de Dengue com Rede Neural</h1>

      <div className="form-container">

        <h3>Preencha os dados laboratoriais</h3>

        <div className="form-group">
          <label>Idade</label>
          <input
            type="number"
            value={age}
            onChange={(e)=>setAge(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Gênero</label>

          <select
            value={gender}
            onChange={(e)=>setGender(e.target.value)}
          >

            <option value="">Selecione</option>
            <option value="Male">Masculino</option>
            <option value="Female">Feminino</option>

          </select>
        </div>

        <div className="form-group">
          <label>Hemoglobina (g/dL)</label>

          <input
            type="number"
            value={hemoglobin}
            onChange={(e)=>setHemoglobin(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Contagem de Leucócitos</label>

          <input
            type="number"
            value={wbc}
            onChange={(e)=>setWbc(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Contagem Diferencial</label>

          <input
            type="number"
            value={differential}
            onChange={(e)=>setDifferential(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Contagem de Hemácias</label>

          <input
            type="number"
            value={rbc}
            onChange={(e)=>setRbc(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Contagem de Plaquetas</label>

          <input
            type="number"
            value={platelet}
            onChange={(e)=>setPlatelet(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Largura de Distribuição Plaquetária</label>

          <input
            type="number"
            value={pdw}
            onChange={(e)=>setPdw(e.target.value)}
          />
        </div>

        <button
          className="btn-primary"
          onClick={handleSubmit}
        >
          Prever Dengue
        </button>

        {resultado !== null && (

          <div className="resultado">

            <h2>
              Resultado: {resultado}
            </h2>

          </div>

        )}

      </div>

    </section>

  )
}

export default App