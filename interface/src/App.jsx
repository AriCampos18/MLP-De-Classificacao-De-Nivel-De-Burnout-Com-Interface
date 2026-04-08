import { useState } from 'react'
import viteLogo from './assets/vite.svg'
import Swal from 'sweetalert2'
import './App.css'

function App() {
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [course, setCourse] = useState("")
  const [year, setYear] = useState("")
  const [daily_study_hours, setDaily_study_hours] = useState("")
  const [daily_sleep_hours, setDaily_sleep_hours] = useState("")
  const [screen_time_hours, setScreen_time_hours] = useState("")
  const [stress_level, setStress_level] = useState("")
  const [anxiety_score, setAnxiety_score] = useState("")
  const [depression_score, setDepression_score] = useState("")
  const [academic_pressure_score, setAcademic_pressure_score] = useState("")
  const [financial_stress_score, setFinancial_stress_score] = useState("")
  const [social_support_score, setSocial_support_score] = useState("")

  const [physical_activity_hours, setPhysical_activity_hours] = useState("")
  const [sleep_quality, setSleep_quality] = useState("")
  const [attendance_percentage, setAttendance_percentage] = useState("")
  const [cgpa, setCgpa] = useState("")
  const [internet_quality, setInternet_quality] = useState("")
  const [resultado, setResultado] = useState(null)

  async function handleSubmit() {
    const campos = [
      age, gender, course, year, daily_study_hours,
      daily_sleep_hours, screen_time_hours, stress_level,
      anxiety_score, depression_score, academic_pressure_score,
      financial_stress_score, social_support_score,
      physical_activity_hours, sleep_quality,
      attendance_percentage, cgpa, internet_quality
    ]

    if (campos.some(campo => campo === "")) {
      return Swal.fire({
        title: "Erro!",
        text: "Preencha todos os campos!",
        icon: "error",
        confirmButtonText: "OK"
      })
    }

    if (age < 0 || age > 120)
      return Swal.fire({
        title: "Erro!",
        text: "Idade inválida!",
        icon: "error",
        confirmButtonText: "OK"
      })

    if (anxiety_score < 0 || anxiety_score > 10)
      return Swal.fire({
        title: "Erro!",
        text: "Ansiedade inválida!",
        icon: "error",
        confirmButtonText: "OK"
      })

    if (depression_score < 0 || depression_score > 10)
      return Swal.fire({
        title: "Erro!",
        text: "Depressão inválida!",
        icon: "error",
        confirmButtonText: "OK"
      })

    if (academic_pressure_score < 0 || academic_pressure_score > 10)
      return Swal.fire({
        title: "Erro!",
        text: "Pressão acadêmica inválida!",
        icon: "error",
        confirmButtonText: "OK"
      })

    if (financial_stress_score < 0 || financial_stress_score > 10)
      return Swal.fire({
        title: "Erro!",
        text: "Estresse financeiro inválido!",
        icon: "error",
        confirmButtonText: "OK"
      })

    if (social_support_score < 0 || social_support_score > 10)
      return Swal.fire({
        title: "Erro!",
        text: "Suporte social inválido!",
        icon: "error",
        confirmButtonText: "OK"
      })

    if (attendance_percentage < 0 || attendance_percentage > 100)
      return Swal.fire({
        title: "Erro!",
        text: "Percentual de frequência inválido!",
        icon: "error",
        confirmButtonText: "OK"
      })

    const dados = {
      age: Number(age),
      gender: gender,
      course: course,
      year: year,
      daily_study_hours: Number(daily_study_hours),
      daily_sleep_hours: Number(daily_sleep_hours),
      screen_time_hours: Number(screen_time_hours),
      stress_level: stress_level,
      anxiety_score: Number(anxiety_score),
      depression_score: Number(depression_score),
      academic_pressure_score: Number(academic_pressure_score),
      financial_stress_score: Number(financial_stress_score),
      social_support_score: Number(social_support_score)
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
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Gênero</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Selecione</option>
            <option value="Female">Feminino</option>
            <option value="Male">Masculino</option>
            <option value="Other">Outro</option>
          </select>
        </div>

        <div className="form-group">
          <label>Curso</label>
          <input value={course} onChange={(e) => setCourse(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Ano do course</label>
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Selecione</option>
            <option value="1st">1º Ano</option>
            <option value="2nd">2º Ano</option>
            <option value="3rd">3º Ano</option>
            <option value="4th">4º Ano</option>
          </select>
        </div>

        <div className="form-group">
          <label>Horas de estudo</label>
          <input type="number" value={daily_study_hours} onChange={(e) => setDaily_study_hours(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Horas de sono</label>
          <input type="number" value={daily_sleep_hours} onChange={(e) => setDaily_sleep_hours(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Horas em redes sociais</label>
          <input type="number" value={screen_time_hours} onChange={(e) => setScreen_time_hours(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Nível de stress_level</label>
          <select value={stress_level} onChange={(e) => setStress_level(e.target.value)}>
            <option value="">Selecione</option>
            <option value="Low">Baixo</option>
            <option value="Medium">Médio</option>
            <option value="High">Alto</option>
          </select>
        </div>

        <div className="form-group">
          <label>Ansiedade (0-10)</label>
          <input type="number" value={anxiety_score} onChange={(e) => setAnxiety_score(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Depressão (0-10)</label>
          <input type="number" value={depression_score} onChange={(e) => setDepression_score(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Pressão acadêmica (0-10)</label>
          <input type="number" value={academic_pressure_score} onChange={(e) => setAcademic_pressure_score(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Estresse financeiro (0-10)</label>
          <input type="number" value={financial_stress_score} onChange={(e) => setFinancial_stress_score(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Suporte social (0-10)</label>
          <input type="number" value={social_support_score} onChange={(e) => setSocial_support_score(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Horas de Atividade Física</label>
          <input type="number" value={physical_activity_hours} onChange={(e) => setPhysical_activity_hours(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Qualidade do Sono</label>
          <select value={sleep_quality} onChange={(e) => setSleep_quality(e.target.value)}>
            <option value="">Selecione</option>
            <option value="Poor">Pobre</option>
            <option value="Average">Médio</option>
            <option value="Good">Bom</option>
          </select>
        </div>

        <div className="form-group">
          <label>Percentual de Frequência</label>
          <input type="number" value={attendance_percentage} onChange={(e) => setAttendance_percentage(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Média Geral Ponderada (CGPA)</label>
          <input type="number" value={cgpa} onChange={(e) => setCgpa(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Qualidade da Internet</label>
          <select value={internet_quality} onChange={(e) => setInternet_quality(e.target.value)}>
            <option value="">Selecione</option>
            <option value="Poor">Pobre</option>
            <option value="Average">Médio</option>
            <option value="Good">Bom</option>
          </select>
        </div>

        <button className="btn-primary" onClick={handleSubmit}>
          Prever
        </button>
        {resultado !== null && (
          <div className="resultado">
            <h2>Resultado: {resultado}</h2>
          </div>
        )}
      </div>
    </section>
  )
}

export default App