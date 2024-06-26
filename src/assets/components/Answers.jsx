import React, { useRef } from 'react';

function Answers({answers, selectedItem, answerState, onSelect}) {
    const shuffledAnswers = useRef();

    if(!shuffledAnswers.current){
        shuffledAnswers.current = answers;
        shuffledAnswers.current.sort(() => {return (Math.random() - 0.5);});
    }

    return (
        <ul id="answers">
                {answers.map(el => {
                    const selected = selectedItem === el;
                    let cssClasses = '';
                    if(answerState === 'answered' && selected){
                        cssClasses = 'selected';
                    }
                    
                    if((answerState === 'correct' || answerState === 'wrong') && selected){
                        cssClasses = answerState;
                    }
                    return <li key={el} className='answer'>
                        <button className={cssClasses} onClick={() => onSelect(el)} disabled={answerState !== ''}>{el} </button>
                    </li>
                })}
            </ul>
    );
}

export default Answers;