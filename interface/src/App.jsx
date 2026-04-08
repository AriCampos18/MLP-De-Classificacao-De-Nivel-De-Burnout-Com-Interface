import { useState } from 'react'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [idade, setIdade] = useState("")
  const [genero, setGenero] = useState("")
  const [curso, setCurso] = useState("")
  const [anoCurso, setAnoCurso] = useState("")
  const [horasEstud, setHorasEstud] = useState("")
  const [horasDorme, setHorasDorme] = useState("")
  const [horasRedes, setHorasRedes] = useState("")
  const [estresse, setEstresse] = useState("")
  const [ansiedade, setAnsiedade] = useState("")
  const [depressao, setDepressao] = useState("")
  const [pressaoAcademica, setPressaoAcademica] = useState("")
  const [estresseFinanceiro, setEstresseFinanceiro] = useState("")
  const [suporteSocial, setSuporteSocial] = useState("")
  const [resultado, setResultado] = useState(null)

  async function handleSubmit() {
    const campos = [
      idade, genero, curso, anoCurso, horasEstud,
      horasDorme, horasRedes, estresse,
      ansiedade, depressao, pressaoAcademica,
      estresseFinanceiro, suporteSocial
    ]

    if (campos.some(campo => campo === "")) {
      return alert("Preencha todos os campos!")
    }

    if (idade < 0 || idade > 120)
      return alert("Idade inválida")

    if (ansiedade < 0 || ansiedade > 10)
      return alert("Ansiedade inválida")

    if (depressao < 0 || depressao > 10)
      return alert("Depressão inválida")

    if (pressaoAcademica < 0 || pressaoAcademica > 10)
      return alert("Pressão acadêmica inválida")

    if (estresseFinanceiro < 0 || estresseFinanceiro > 10)
      return alert("Estresse financeiro inválido")

    if (suporteSocial < 0 || suporteSocial > 10)
      return alert("Suporte social inválido")

    const dados = {
      age: Number(idade),
      gender: genero,
      course: curso,
      year: anoCurso,
      daily_study_hours: Number(horasEstud),
      daily_sleep_hours: Number(horasDorme),
      screen_time_hours: Number(horasRedes),
      stress_level: estresse,
      anxiety_score: Number(ansiedade),
      depression_score: Number(depressao),
      academic_pressure_score: Number(pressaoAcademica),
      financial_stress_score: Number(estresseFinanceiro),
      social_support_score: Number(suporteSocial)
    }

    console.log("Dados enviados:", dados)

    try {
      const response = await fetch("http://localhost:5000/prever", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
      })

      const data = await response.json()
      setResultado(data.classe)

    } catch (erro) {
      console.error("Erro ao conectar com API:", erro)
      alert("Erro ao conectar com o servidor")
    }
  }

  return (
    <section id="center">
      <div className="hero">
        <h1>Trabalho Bimestral MLP</h1>
        <h2>Previsão do Nível de Burnout</h2>
        <img src={viteLogo} className="vite" alt="Vite logo" />
      </div>

      <div className="form-container">
        <h3>Preencha os dados</h3>

        <div className="form-group">
          <label>Idade</label>
          <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Gênero</label>
          <select value={genero} onChange={(e) => setGenero(e.target.value)}>
            <option value="">Selecione</option>
            <option value="Female">Feminino</option>
            <option value="Male">Masculino</option>
            <option value="Other">Outro</option>
          </select>
        </div>

        <div className="form-group">
          <label>Curso</label>
          <input value={curso} onChange={(e) => setCurso(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Ano do curso</label>
          <select value={anoCurso} onChange={(e) => setAnoCurso(e.target.value)}>
            <option value="">Selecione</option>
            <option value="1st">1º Ano</option>
            <option value="2nd">2º Ano</option>
            <option value="3rd">3º Ano</option>
            <option value="4th">4º Ano</option>
          </select>
        </div>

        <div className="form-group">
          <label>Horas de estudo</label>
          <input type="number" value={horasEstud} onChange={(e) => setHorasEstud(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Horas de sono</label>
          <input type="number" value={horasDorme} onChange={(e) => setHorasDorme(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Horas em redes sociais</label>
          <input type="number" value={horasRedes} onChange={(e) => setHorasRedes(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Nível de estresse</label>
          <select value={estresse} onChange={(e) => setEstresse(e.target.value)}>
            <option value="">Selecione</option>
            <option value="Low">Baixo</option>
            <option value="Medium">Médio</option>
            <option value="High">Alto</option>
          </select>
        </div>

        <div className="form-group">
          <label>Ansiedade (0-10)</label>
          <input type="number" value={ansiedade} onChange={(e) => setAnsiedade(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Depressão (0-10)</label>
          <input type="number" value={depressao} onChange={(e) => setDepressao(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Pressão acadêmica (0-10)</label>
          <input type="number" value={pressaoAcademica} onChange={(e) => setPressaoAcademica(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Estresse financeiro (0-10)</label>
          <input type="number" value={estresseFinanceiro} onChange={(e) => setEstresseFinanceiro(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Suporte social (0-10)</label>
          <input type="number" value={suporteSocial} onChange={(e) => setSuporteSocial(e.target.value)} />
        </div>

        <button className="btn-primary" onClick={handleSubmit}>
          Prever
        </button>

        {/* RESULTADO */}
        {resultado !== null && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <h2>Resultado: {resultado}</h2>
          </div>
        )}
      </div>
    </section>
  )
}

export default App