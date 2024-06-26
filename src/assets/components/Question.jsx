import React, { useState } from 'react';
import QuestionTimeBar from './QuestionTimeBar';
import Answers from './Answers';
import Qeustions from '../../question';


function Question({
    index,
    onSelect,
    onSkipAnswer}) {
        const [answer, setAnswer] = useState({
            selectedAnswer: '',
            isCorrect: null
        });

        let timer = 15000;

        if(answer.selectedAnswer){
            timer = 1000;
        }

        if(answer.isCorrect !== null){
            timer = 2000;
        }

        function handleSelectedAnswer(answer){
            setAnswer({
                selectedAnswer: answer,
                isCorrect: null
            })
            setTimeout(() => {
                setAnswer({
                    selectedAnswer: answer,
                    isCorrect: Qeustions[index].answers[0] === answer
                });
                setTimeout(() => {
                    onSelect(answer);
                }, 2000);
            }, 1000);
        }

        let answerState = '';

        if(answer.selectedAnswer && answer.isCorrect != null){
            answerState = answer.isCorrect ? 'correct' : 'wrong';
        }
        else if(answer.selectedAnswer){
            answerState = 'answered';
        }
    return (
        <div id='question'>
            <QuestionTimeBar 
            key={timer}
            timeout={timer}
            onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
            mode={answerState}/>
            <h2>{index!= Qeustions.length && Qeustions[index].text}</h2>
            <Answers answers={Qeustions[index].answers}
            selectedItem={answer.selectedAnswer}
            answerState={answerState}
            onSelect={handleSelectedAnswer}/>
        </div>
    );
}

export default Question;