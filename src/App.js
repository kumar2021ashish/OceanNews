import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from './nav';
import Question from './Question';


const Quiz = () =>{
  const [questions,setQuestions]=useState(null);
  const [count]=useState(0);
  useEffect(() => {
    const getApi = () =>{
      axios
        .get("https://oceannews.herokuapp.com/news/allnews/",
        )
        .then((res)=>setQuestions(res.data))
        .catch((err)=>console.log(err));
    };
    if(!questions){
      getApi();
    }
    console.log(questions);
  },[questions,count]);
  if(!questions) return <p className="text-light text-muted">Loading...</p>;
  //setCount(count+1);
  return (
    <div>
      < Nav />
    <h1 className="text-center">OceanNews</h1> 
<Question question={questions[count]} />
<div className="card-text">
  <div
  className="btn-group btn-group-vertical btn-group-toggle w-100"
  data-toggle="buttons"
  >

  </div>
</div>

    </div>
    
  );
} 

export default Quiz;

