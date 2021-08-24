import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from './nav';
import Question from './Question';
import Grid from '@material-ui/core/Grid';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Card";
import "./app.css";

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

  return (  
    <>
     < Nav />
     <h1 className="display-4 text-center">OceanNews</h1> 
    <div className="all_news">   

    {questions.map((item) =>
    <div class="container">
       <div class="row">
    <div class="col-sm">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={item.imageurl} Style="width:100%" />
    <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Card.Text>
    {item.description}
    </Card.Text>
    <p class="card-text"><small class="text-muted">Author : {item.author}</small></p>
    <p class="card-text"><small class="text-muted">Publish Date : {item.publishdate}</small></p>
  </Card.Body>
</Card>
</div>
</div>
<br></br><br></br><br></br>
</div>


    )}




    </div>

</>
    
  );
} 

export default Quiz;



