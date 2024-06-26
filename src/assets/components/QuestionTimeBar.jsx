import React, {  useEffect, useState } from 'react';

function QuestionTimeBar({timeout, onTimeout, mode}) {

    const [barProgess, setBarProgress] = useState(timeout);
    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);
        return () => {
            clearTimeout(timer);
        }
    }, [timeout, onTimeout])
    

    useEffect(() => {
        const interval = setInterval(() => {
            setBarProgress(prevBarProgress => prevBarProgress-100);
        }, 100)
        return () => {
            clearInterval(interval);
        } 
    }, []);
    

    return (
        <progress id='question-time' value={barProgess} max={timeout} className={mode}/>
    );
}

export default QuestionTimeBar;