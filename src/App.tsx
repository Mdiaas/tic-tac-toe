import { useState } from "react"
import { Board } from "./Board"

function App() {

  const [board, setBoard] = useState(['','','','','','','','',''])
  return (
    <Board></Board>
  )
}

export default App
