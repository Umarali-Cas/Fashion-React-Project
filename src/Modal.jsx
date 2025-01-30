import { useEffect, useState } from "react";

export function Modal({ onClose }){
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(prev => console.log(prev + 1));
        
      }, 1000);
      return () => {
        clearInterval(interval);
        prompt('Выполнено размонтирование компоненты');
      };
    }, []);

    return (
    <div className="container-login">
        <div className="login-backround">
            <h1>Login in your Account</h1>
            <button id="x" onClick={onClose}>x</button>
            <hr />
            <input type="text" placeholder="Enter your Name"/>
            <input type="text" placeholder="Enter your password"/>
            <div className={`login-register`}>
                <button>Login</button>
                <button id="register">Register</button>
            </div>
        </div>
    </div>
    )
}