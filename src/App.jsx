
import './App.css'
import { useState } from 'react'
import CurrencyConverter from './components/currency-converter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-green-200 flex flex-col items-center justify-center">
      hello ananya
      <CurrencyConverter/>
    </div>

  )
}

export default App
