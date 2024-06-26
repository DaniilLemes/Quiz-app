import React, { useCallback, useState } from 'react';
import Question from './Question';
import Questions from '../../question';
import Summary from './Summary';

function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    
    const quizIsEnd = activeQuestionIndex === Questions.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer];
        });
    }, [])

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])
    if(quizIsEnd){
        return <Summary
        userAnswers={userAnswers}/>
    }

    return (
        <div id="quiz">
            <Question 
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSelect={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}/>
        </div>
        
        
    );
}

export default Quiz;