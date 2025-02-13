import { useEffect, useRef, useState } from "react"

export const Timer = ({initialSeconds = 30}) => {

    const countRef = useRef(0)

    const handleClick = () => {
        console.log(countRef.current);
        countRef.current = countRef.current + 1
    }

    // -----------------------------------------

    const iframeRef = useRef(null);


    const handlePlay = () => {
      if (iframeRef.current) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: "playVideo" }),
          "*"
        );
      }
    };
  
    const handlePause = () => {
      if (iframeRef.current) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: "pauseVideo" }),
          "*"
        );
      }
    };

    // -----------------------------------------

    const [seconds, setSeconds] = useState(initialSeconds);
    const timerRef = useRef(null);
  
    useEffect(() => {
      if (seconds > 0) {
        timerRef.current = setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        alert("Время вышло!");
      }
      return () => clearTimeout(timerRef.current);
    }, [seconds]);

    return(
        <section className="timer-section">
            <div className="first-timer-container">
                <button onClick={handleClick}>Click me</button>
                <span>{countRef.current}</span>
            </div>
            {/* ---------------------------- */}
            <div className="second-timer-container">
            <iframe
                ref={iframeRef}
                width="400"
                height="225"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <div>
                <button className="start" onClick={handlePlay}>Start</button>
                <button className="pause" onClick={handlePause}>Pause</button>
            </div>
            {/* ---------------------------- */}
            <div className="third-timer-container">
                <h1>Time: {seconds}s</h1>
            </div>
            </div>
        </section>
    )
}