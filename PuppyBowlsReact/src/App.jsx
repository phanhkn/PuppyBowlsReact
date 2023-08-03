import { useState } from "react";
import "./App.css";
import AllPlayers from "./Components/AllPlayers";
import SinglePlayer from "./Components/SinglePlayer";
import NewPlayerForm from "./Components/NewPlayerForm";

function App() {
  return (
    <>
      <div>
        <AllPlayers />
        <SinglePlayer />
        <NewPlayerForm />
      </div>
    </>
  );
}

export default App;
