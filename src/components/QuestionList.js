import React, {useEffect, useState} from "react";

function QuestionList() {
  const [quizQuestions, setData] = useState([])
  
  useEffect(() => {
    fetch ("http://localhost:4000/questions")
    .then (response => response.json())
    .then (data => setData(data))
  }, [])

  return (
    <section>
      <h1>Quiz Questions</h1>
      <div>{/* display QuestionItem components here after fetching */}
      {quizQuestions.map((questions) =>{
        return <ul key={questions.id}>
          <li>{questions.prompt}</li>
        </ul>
      })}</div>
    </section>
  );
}

export default QuestionList;
