import React from 'react';
import EndImg from '../../assets/quiz-complete.png';
import Questions from '../../question.js';

function Summary({userAnswers}) {
    let skippedCount = 0;
    userAnswers.map((el) => {
        if(el === null){
            skippedCount++;
        }
    });

    let answeredCorrectly = 0;
    userAnswers.map((el, index) => {
        if(el === Questions[index].answers[0]){
            answeredCorrectly++;
        }
    });

    let answeredIncorrectly = Questions.length - answeredCorrectly - skippedCount;

    
    return (
        <div id="summary">
            <img src={EndImg} alt="End Quiz" />
            <h2>Quiz Completed!</h2>
            <div id='summary-stats'>
                <p>
                    <span className='number'>{skippedCount}</span>
                    <span className='text'>skipped</span>
                </p>
                <p>
                    <span className='number'>{answeredCorrectly}</span>
                    <span className='text'>answered correctly</span>
                </p>
                <p>
                    <span className='number'>{answeredIncorrectly}</span>
                    <span className='text'>answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssStyle = null;
                    if(answer === Questions[index].answers[0]){
                        cssStyle = 'user-answer correct';
                    }
                    else if(answer === null) {
                        cssStyle = 'user-answer skipped';
                    }
                    else{
                        cssStyle = 'user-answer wrong';
                    }
                    return (
                        <li key={answer}>
                            <h3>{index + 1}</h3>
                            <p className='question'>{Questions[index].text}</p>
                            <p className={cssStyle}>{answer !== null ? answer : 'Skipped'}</p>
                        </li>
                    );
                })}
                
            </ol>
        </div>
    );
}

export default Summary;