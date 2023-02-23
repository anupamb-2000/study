import { Button, Box, Typography, List, ListItem } from '@mui/material'
import { useState } from 'react'

function Square({value, onSquareClick}) {
  return <Button 
            variant='contained' 
            sx={{ margin: '10px', backgroundColor: '#EB6440', height: '60px' }}
            onClick={onSquareClick}>
              { value }
          </Button>
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    const nextSquares = squares.slice()
    if(squares[i] || calculateWinner(squares)){
      return
    }
    if(xIsNext){
      nextSquares[i] = 'X'
    }
    else {
      nextSquares[i] = 'O'
    }
    onPlay(nextSquares)
  }

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = "Winner : " + winner
  }
  else {
    status = "Next Player: " + (xIsNext ? "X" : "O")
  }
  
  return (
    <Box 
      sx={{
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        marginTop : '350px',
      }}>
      <Typography variant='h4'>{status}</Typography>
      <Box>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </Box>
      <Box>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </Box>
      <Box>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </Box>
    </Box>
  )
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove)
  }

  const moves = history.map(( squares, move) => {
    let description
    if ( move > 0 ){
      description = 'Go to move #' + move
    } else  {
      description = 'Go to game start'
    }
    return (
      <ListItem key={move}>
        <Button variant='outlined' onClick={() => jumpTo(move)}>
          {description}
        </Button>
      </ListItem>
    )
  })
  return (
    <Box>
      <Box>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </Box>
      <Box>
        <List sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: '500px',
                marginRight: '500px'
              }}>
          {moves}
        </List>
      </Box>
    </Box>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}