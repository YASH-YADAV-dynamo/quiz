import React, { useState } from 'react';

const Teacher = () => {
    const [questions, setQuestions] = useState(Array(5).fill({ statement: '', options: Array(4).fill('') }));

    const handleStatementChange = (index, event) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].statement = event.target.value;
        setQuestions(updatedQuestions);
    };

    const handleOptionChange = (questionIndex, optionIndex, event) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].options[optionIndex] = event.target.value;
        setQuestions(updatedQuestions);
    };

    return (
        <div className='p-10 m-10'>
            {questions.map((question, questionIndex) => (
                <div key={questionIndex} className='p-1 m-1'>
                    <input
                        type="text"
                        value={question.statement}
                        onChange={(event) => handleStatementChange(questionIndex, event)}
                        placeholder={`Question ${questionIndex + 1} statement`}
                    />
                    {question.options.map((option, optionIndex) => (
                        <input
                            key={optionIndex}
                            type="text"
                            value={option}
                            onChange={(event) => handleOptionChange(questionIndex, optionIndex, event)}
                            placeholder={`Option ${optionIndex + 1}`}
                        />
                    ))}
                </div>
                ))}
                </div>)};
                export default Teacher;