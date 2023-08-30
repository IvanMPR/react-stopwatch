import { useEffect, useState } from "react";

function App() {
  const [timer, setTimer] = useState(0);
  const [hasStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (hasStarted) {
      const interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  });

  const hour = Math.floor((timer / 3600) % 24);
  const minute = Math.floor((timer % 3600) / 60);
  const seconds = timer % 60;

  function formatTime(time) {
    return String(time).padStart(2, "0");
  }

  return (
    <div className="app">
      <h1>Stopwatch</h1>
      <div className="stopwatch">
        <p className="time-p">{`${formatTime(hour)} : ${formatTime(
          minute
        )} : ${formatTime(seconds)} `}</p>
      </div>
      <button onClick={() => setIsStarted((previous) => !previous)}>
        {hasStarted ? "Stop" : "Start"}
      </button>
      <button
        onClick={() => {
          setTimer(0);
          setIsStarted(false);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
