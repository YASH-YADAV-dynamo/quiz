import React, { useState } from 'react';

function Quiz() {
    const [questions, setQuestions] = useState([
        {
            question: 'What is the SI unit of force?',
            options: ['Newton', 'Joule', 'Watt', 'Volt'],
            answer: 0,
            selectedOption: null
        },
        {
            question: 'Which of the following is a vector quantity?',
            options: ['Speed', 'Temperature', 'Mass', 'Velocity'],
            answer: 3,
            selectedOption: null
        },
        {
            question: 'What is the SI unit of electric charge?',
            options: ['Ampere', 'Coulomb', 'Volt', 'Ohm'],
            answer: 1,
            selectedOption: null
        },
        {
            question: 'Which law states that every action has an equal and opposite reaction?',
            options: ['Newton\'s First Law', 'Newton\'s Second Law', 'Newton\'s Third Law', 'Law of Gravitation'],
            answer: 2,
            selectedOption: null
        },
        {
            question: 'What is the speed of light in vacuum?',
            options: ['299,792,458 m/s', '3.00 x 10^8 m/s', '3.14 x 10^8 m/s', '2.99 x 10^8 m/s'],
            answer: 0,
            selectedOption: null
        }
    ]);

    const [score, setScore] = useState(0);

    const handleOptionSelect = (questionIndex, optionIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].selectedOption = optionIndex;
        setQuestions(updatedQuestions);
    };

    const handleResult = () => {
        let correctAnswers = 0;
        questions.forEach(question => {
            if (question.selectedOption === question.answer) {
                correctAnswers++;
            }
        });
        setScore(correctAnswers);
    };

    return (
        <div className="quiz-container p-10 m-10 text-white text-sm">
            {questions.map((question, index) => (
                <div key={index} className="question p-5 m-2 text-white text-sm">
                    <h3>{`${index + 1}. ${question.question}`}</h3>
                    <ul>
                        {question.options.map((option, optionIndex) => (
                            <li key={optionIndex} className="p-1 m-1">
                                <input
                                    type="radio"
                                    id={`option_${index}_${optionIndex}`}
                                    name={`question_${index}`}
                                    value={option}
                                    checked={question.selectedOption === optionIndex}
                                    onChange={() => handleOptionSelect(index, optionIndex)}
                                />
                                <label htmlFor={`option_${index}_${optionIndex}`}>{option}</label>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <button onClick={handleResult}>Show Result</button>
            {score !== null && (
                <div className="result">
                    <h2>Quiz Finished!</h2>
                    <p>Your score: {score}/{questions.length}</p>
                </div>
            )}
        </div>
    );
}

export default Quiz;
