import React, { useEffect, useState } from 'react';
import axios from 'axios';


function QuestionPage() {
    const[questions, setQuestions] = useState([]);


    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('/api/questions/', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}`},
                });

                setQuestions(response.data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestionsuestions();
    },[]);


    return (
        <div>
            <h2>Questions</h2>

            <ul>
                {questions.map((question) => (
                <li key={question.id}>{question.text}</li>
                ))}
            </ul>
        </div>
    );
}


export default QuestionPage;