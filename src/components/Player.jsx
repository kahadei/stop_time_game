import { useState, useRef } from "react";


export default function Player() {
  const playerNameInput = useRef();

  const [playerName, setPlayerName] = useState('');

  function handleName(event) {
    setPlayerName(event.target.value);
  }

  function handleSubmit() {
    setPlayerName(playerNameInput.current.value);
    playerNameInput.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'UNKNOWN'}</h2>
      <p>
        <input
          ref={playerNameInput}
          type="text"
          />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
