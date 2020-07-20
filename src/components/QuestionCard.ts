import React from 'react';
import { directive } from '@babel/types';
import { Button } from 'react-native';


type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNr, totalQuestions}) = () => (
    <div>
    <p className="number">
    Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHtml={{ __html: question }} />
    <div>
    {answers.map(answer => (
        <div>
            <button disabled={userAnswer} onclick{callback}>
            <span dangerouslySetInnerHTML={{ __html: answer}} />
            </button>
        </div>
    ))}
    </div>
    </div>
    );

export default QuestionCard;