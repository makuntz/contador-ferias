import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2026-03-02T00:00:00').getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Faltam</h1>
        <div className="days-display">
          <span className="number">{timeLeft.days}</span>
          <span className="label">dias</span>
        </div>
        <p className="subtitle">para as férias da Maíra! 🏖️</p>
        
        <div className="time-details">
          <div className="time-item">
            <span className="time-value">{timeLeft.hours.toString().padStart(2, '0')}</span>
            <span className="time-label">horas</span>
          </div>
          <div className="time-item">
            <span className="time-value">{timeLeft.minutes.toString().padStart(2, '0')}</span>
            <span className="time-label">minutos</span>
          </div>
          <div className="time-item">
            <span className="time-value">{timeLeft.seconds.toString().padStart(2, '0')}</span>
            <span className="time-label">segundos</span>
          </div>
        </div>

        <div className="date-info">
          <p>Data das férias: 2 de março de 2026</p>
        </div>
      </div>
    </div>
  )
}

export default App

