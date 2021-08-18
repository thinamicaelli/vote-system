import './App.css';
import { FormVote } from './components/Form/index'
import { Results } from './stories/Results'
import React, { useState, useEffect } from "react";

function App() {
  const [next, setNext] = useState(true)
  const [lastVote, setLastVote] = useState()
  const [voteData, setVoteData] = useState([
    {
      option : "Sim",
      count : 0
    },
    {
      option : "Não",
      count : 0
    }
  ])

  const handleVote = (vote) => {
    const voteDataHelper = voteData;
    setLastVote(vote)
    if (vote.choice === "Sim") {
      voteDataHelper[0].count += 1
      setVoteData([...voteDataHelper])
    } else {
      voteDataHelper[1].count += 1
      setVoteData([...voteDataHelper])
    }
  }

  const handleRevertVote = (vote) => {
    if (!lastVote) return

    const voteDataHelper = voteData;
    if (vote.choice === "Sim") {
      voteDataHelper[0].count -= 1
      setVoteData([...voteDataHelper])
    } else {
      voteDataHelper[1].count -= 1
      setVoteData([...voteDataHelper])
    }
    setLastVote('')
  }

  return (
    <div className="App">
      <section>
        <h1>Seguiremos amanhã ?</h1>
        <button type="button" onClick={() => setNext(true)}>Sim</button>
        <button type="button" onClick={() => setNext(false)}>Não</button>
      </section>
      { next && (
        <section>
          <FormVote onVote={handleVote}/>
        </section>
      ) }
      <section>
        <Results votes={voteData}/>
      </section>
      { next && (
        <section>
          <h2>Corrige</h2>
          <button type="button" onClick={() => handleRevertVote(lastVote)}>Corrige voto</button>
        </section>
      ) }
    </div>
  );
}

export default App;
