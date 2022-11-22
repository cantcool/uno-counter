import { useState } from 'react'
import { Button, Paper, TextField } from '@mui/material'

import './App.css'

function App() {
  const [player1, setPlayer1] = useState(0)
  const [player2, setPlayer2] = useState(0)

  return (
    <div className="App">
      <div className="columns">
        <Paper elevation="1">
          <TextField label="Player 1" color="primary" value={player1} type="number" onChange={e => setPlayer1(+e.target.value)} />
          <Button variant="contained" color="success" onClick={() => setPlayer1(current => current + 1)}>+1</Button>
          <Button variant="contained" color="success" onClick={() => setPlayer1(current => current + 5)}>+5</Button>
          <Button variant="contained" color="success" onClick={() => setPlayer1(current => current + 10)}>+10</Button>
          <Button variant="contained" color="success" onClick={() => setPlayer1(current => current + 20)}>+20</Button>
          <Button variant="contained" color="success" onClick={() => setPlayer1(current => current + 50)}>+50</Button>
        </Paper>

        <Paper>
          <TextField label="Player 2" color="secondary" value={player2} type="number" onChange={e => setPlayer1(+e.target.value)} />
          <Button variant="contained" color="success" onClick={() => setPlayer2(current => current + 1)}>+1</Button>
          <Button variant="contained" color="success" onClick={() => setPlayer2(current => current + 5)}>+5</Button>
          <Button variant="contained" color="success" onClick={() => setPlayer2(current => current + 10)}>+10</Button>
          <Button variant="contained" color="success" onClick={() => setPlayer2(current => current + 20)}>+20</Button>
          <Button variant="contained" color="success" onClick={() => setPlayer2(current => current + 50)}>+50</Button>
        </Paper>
      </div>
      <Button variant="contained" color="warning" onClick={() => { setPlayer1(0); setPlayer2(0) }}>Reset</Button>

    </div>
  );
}

export default App;
