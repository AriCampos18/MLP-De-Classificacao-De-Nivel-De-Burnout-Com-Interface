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
  const [estressada, setEstressada] = useState("")
  const [ansiedade, setAnsiedade] = useState("")
  const [depressao, setDepressao] = useState("")
  const [pressaoAcademica, setPressaoAcademica] = useState("")
  const [estresseFinanceiro, setEstresseFinanceiro] = useState("")
  const [suporteSocial, setSuporteSocial] = useState("")

  function handleSubmit() {

    if (!idade || !genero || !curso || !anoCurso || !horasEstud || !horasDorme || !horasRedes || !estressada ||
      !ansiedade || !ansiedade || !depressao || !pressaoAcademica || !estresseFinanceiro || !suporteSocial)
      return console.log("ERRO: Preeencha todos os campos corretamente!!!!");


    if (idade < 0 || idade > 200)
      return console.log("ERRO: Idade Invalida!!!!");  

    if (ansiedade < 0 || ansiedade > 10)
      return console.log("ERRO: Nivel de Ansiedade Invalida!!!! Procure um Terapeuta!!!!");

    if (depressao < 0 || depressao > 10)
      return console.log("ERRO: Nivel de Depressão Invalida!!!! Procure um Terapeuta!!!!");

    if (pressaoAcademica < 0 || pressaoAcademica > 10)  
      return console.log("ERRO: Nivel de Pressão Acadêmica Invalida!!!! Procure um Terapeuta!!!!");

    if (estresseFinanceiro < 0 || estresseFinanceiro > 10)  
      return console.log("ERRO: Nivel de Estresse Financeiro Invalido!!!! Procure um Terapeuta!!!!");

    if (suporteSocial < 0 || suporteSocial > 10)  
      return console.log("ERRO: Nivel de Suporte Social Invalido!!!! Procure um Terapeuta!!!!");

    const dados = {
      age: idade,
      gender: genero,
      course: curso,
      year: anoCurso,
      daily_study_hours: horasEstud,
      daily_sleep_hours: horasDorme,
      screen_time_hours: horasRedes,
      stress_level: estressada,
      anxiety_score: ansiedade,
      depression_score: depressao,
      academic_pressure_score: pressaoAcademica,
      financial_stress_score: estresseFinanceiro,
      social_support_score: suporteSocial
    }

    console.log("Dados enviados:", dados)
  }

  return (
    <section id="center">
      {/* HERO */}
      <div className="hero">
        <h1>Trabalho Bimestral MLP</h1>
        <h2>Previsão do Nível de Burnout</h2>
        <img src={viteLogo} className="vite" alt="Vite logo" />
      </div>

      {/* FORMULÁRIO */}
      <div className="form-container">
        <h3>Preencha os dados</h3>

        <div className="form-group">
          <label>Idade</label>
          <input value={idade} onChange={(e) => setIdade(e.target.value)} />
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
          <label>Horas de estudo por dia</label>
          <input value={horasEstud} onChange={(e) => setHorasEstud(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Horas de sono</label>
          <input value={horasDorme} onChange={(e) => setHorasDorme(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Horas em redes sociais</label>
          <input value={horasRedes} onChange={(e) => setHorasRedes(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Nível de estresse</label>
          <select value={estressada} onChange={(e) => setEstressada(e.target.value)}>
            <option value="">Selecione</option>
            <option value="Low">Baixo</option>
            <option value="Medium">Médio</option>
            <option value="High">Alto</option>
          </select>
        </div>

        <div className="form-group">
          <label>O quanto você se considera uma pessoa ansiedade? (0-10)</label>
          <input value={ansiedade} onChange={(e) => setAnsiedade(e.target.value)} />
        </div>

        <div className="form-group">
          <label>O quanto você se considera uma pessoa depressao? (0-10)</label>
          <input value={depressao} onChange={(e) => setDepressao(e.target.value)} />
        </div>

        <div className="form-group">
          <label>O quanto você se sente pressionado/a academicamente? (0-10)</label>
          <input value={pressaoAcademica} onChange={(e) => setPressaoAcademica(e.target.value)} />
        </div>

        <div className="form-group">
          <label>O quanto você se sente estressado com relação a finanças/dinheiro? (0-10)</label>
          <input value={estresseFinanceiro} onChange={(e) => setEstresseFinanceiro(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Quanto você acha que pode contar com outras pessoas (família, amigos, rede de apoio, etc)? (0-10)</label>
          <input value={suporteSocial} onChange={(e) => setSuporteSocial(e.target.value)} />
        </div>

        <button className="btn-primary" onClick={handleSubmit}>
          Prever
        </button>
      </div>
    </section>
  )
}

export default App