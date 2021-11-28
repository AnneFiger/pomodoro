import React, { useEffect } from "react";
import Session from "./Session";
import Break from "./Break";
import alarmBeep from "./Alarm.wav";
import "./App.css";

//change to 500ms tests still pass!!! -> drift seems to be a serious problem
//put newDate so doesn't lag behind and simulate several sessions in a row.

//see change useEffect functions/refactor- remove variable totalTimeLeftBreak 
//and have use effect for both cases?
// see handling breaks refactor too.


function App(props) {
  //useState definitions for break and session lengths
  //retrieved from Break and Session components
  const [breakLength, setBreakLength] = React.useState(5);
  const [sessionLength, setSessionLength] = React.useState(25);
  // initially in Clock component
  const [sessionIsShown, setSessionIsShown] = React.useState(true); //conditional rendering
  const [isRunning, setIsRunning] = React.useState(false); //button logic
  //This only decrement seconds and then calculate with timeDisplay function,
  //then reinject values in sessionCounter 
  const [totalTimeLeft, setTotalTimeLeft] = React.useState(sessionLength);
  let sessionCounter = timeDisplay(totalTimeLeft);
  //same logic than directly above but for breaks.
  const [totalTimeLeftBreak, setTotalTimeLeftBreak] =
    React.useState(breakLength);
  let breakCounter = timeDisplay(totalTimeLeftBreak);

  const alarm = document.getElementById("beep");

  function timeDisplay(min) {
    let minutes = Math.floor(min / 60);
    let seconds = Math.ceil(min % 60);

    let arr = [
      minutes < 10 ? "0" + minutes : minutes,
      seconds < 10 ? "0" + seconds : seconds,
    ];

    return arr;
  }

  //handling sessions and breaks
  const handleBreaks = (type) => {
    if (isRunning) {
      return;
    } else if (type === "decrement") {
      if (breakLength === 1) {
        return;
      } else {
        setBreakLength((prevBreakLength) => prevBreakLength - 1);
      }
    } else {
      if (breakLength === 60) {
        return;
      } else {
        setBreakLength((prevBreakLength) => prevBreakLength + 1);
      }
    }
  };

  const handleSession = (type) => {
    if (isRunning) {
      return;
    } else if (type === "decrement") {
      if (sessionLength === 1) {
        return;
      } else {
        setSessionLength((prevSessionLength) => prevSessionLength - 1);
      }
    } else {
      if (sessionLength === 60) {
        return;
      } else {
        setSessionLength((prevSessionLength) => prevSessionLength + 1);
      }
    }
  };

  //handling logic for sessions with useEffect

  useEffect(() => {
    setTotalTimeLeft(sessionLength * 60);
  }, [sessionLength]);

  useEffect(() => {
    if (!isRunning || !sessionIsShown) {
      return;
    } else if (totalTimeLeft === 0) {
      alarm.currentTime = 0;
      alarm.play();
      setSessionIsShown(false);
      setTimeout(() => {
        setTotalTimeLeft(sessionLength * 60);
      }, 1000); //needed so it doesn't flicker after 1 session and 1 break play
    } else {
      const countdown = setTimeout(() => {
        setTotalTimeLeft((prevTotalTimeLeft) => prevTotalTimeLeft - 1);
      }, 1000);
      return () => clearTimeout(countdown);
    }
  }, [totalTimeLeft, isRunning, sessionIsShown, sessionLength, alarm]);

  //using same handling logic than above with useEffect but for breaks

  useEffect(() => {
    setTotalTimeLeftBreak(breakLength * 60);
  }, [breakLength]);

  useEffect(() => {
    if (!isRunning || sessionIsShown) {
      return;
    } else if (totalTimeLeftBreak === 0) {
      alarm.currentTime = 0;
      alarm.play();
      setSessionIsShown(true);
    } else {
      const countdown2 = setTimeout(() => {
        setTotalTimeLeftBreak(
          (prevTotalTimeLeftInSecondsBreak) =>
            prevTotalTimeLeftInSecondsBreak - 1
        );
      }, 1000);
      return () => clearTimeout(countdown2);
    }
  }, [totalTimeLeftBreak, isRunning, sessionIsShown, alarm]);

  const startStopCountdown = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const resetCountdown = () => {
    setIsRunning(false);
    alarm.pause();
    alarm.currentTime = 0;
    setSessionLength(25);
    setBreakLength(5);
    setSessionIsShown(true);
  };

  return (
    <div>
      <div className="App">
        <div className="Pomodoro">
          <h2>Pomodoro Clock</h2>

          <div className="my-container">
            <Break setBreak={handleBreaks} break={breakLength} />
            <Session setSession={handleSession} session={sessionLength} />
          </div>

          <div className="Clock">
            <h3 id="timer-label">{sessionIsShown ? "Session" : "Break"}</h3>
            <h1 id="time-left">
              {sessionIsShown
                ? `${sessionCounter[0]}:${sessionCounter[1]}`
                : `${breakCounter[0]}:${breakCounter[1]}`}
            </h1>

            <button
              id="start_stop"
              onClick={startStopCountdown}
              className="rounded-pill"
            >
              <span
                className="iconify"
                data-icon="emojione-monotone:play-or-pause-button"
              ></span>
            </button>
            <button
              id="reset"
              onClick={resetCountdown}
              className="rounded-pill"
            >
              <span className="iconify" data-icon="ri:restart-fill"></span>
            </button>
            <audio id="beep" src= {alarmBeep} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
