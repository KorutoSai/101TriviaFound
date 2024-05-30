// incase I broke my code

import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://opentdb.com/api.php?amount=50";
const history = "&category=22";
const easy = "&difficulty=easy&type=multiple";
const questions = [] ;
let resultEasyHistory = await axios.get(API_URL + history + easy);
let score = 0;
//question numbers
let quesNum = 1;
let quesAtt = 0;
let quizes = [];


//question numbers










app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {






      res.render("index.ejs", {  

        
    });

    
});


  




app.get("/start", async (req, res) => {


  try {
    //get API
   if (quizes === undefined || quizes.length == 0){
    //  let result = await axios.get(API_URL + history + easy);

     

     quizes = (resultEasyHistory.data.results);      

   }

  
  
   
  

   
   
   //choices
   var correctAnswer = (quizes[quesNum].correct_answer)
   var  wrongAnswer1 = (quizes[quesNum].incorrect_answers[0])
   var  wrongAnswer2 = (quizes[quesNum].incorrect_answers[1])
   var  wrongAnswer3 = (quizes[quesNum].incorrect_answers[2])

   
   
   //array to put coices to randomize
   var choices = [correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3 ]

   questions.push({question:quizes[quesNum].question, correctAnswer  })






      //to randomize items
      let choicesShuffled = choices
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)


      res.render("start.ejs", {  
        
        question: quizes[quesNum].question,

        choicesShuffled,
        score,
        quesNum,
        quesAtt,
        

        
        
        answers: [(quizes[quesNum].correct_answer)]
        // , (result.data.results[0].incorrect_answers[0]),(result.data.results[0].incorrect_answers[1]),(result.data.results[0].incorrect_answers[2])],

        // console: ((result.data.results).length)
   
      }
    );

  } catch (error) {
    //   res.render("index.ejs",  
    //   {content: error.response.data} );

    console.log("error", error)
    }
  });




 



  app.post("/post", async (req, res) => { 
    const answerToPreviousQuestion = req.body.q1
    const answeredQuestion = req.body.question
    const allPreviousQuestions = questions
    
    //verifyer
    const previousQuestionObject = allPreviousQuestions.find(questionItem => {
        return questionItem.question === answeredQuestion
    })


    if (previousQuestionObject.correctAnswer === answerToPreviousQuestion){
        console.log("correct")
          
          //score
          score += 1;

          //question number
          quesNum = Math.floor(Math.random() * quizes.length)
         
          //question attempt
         quesAtt +=1;

         console.log(quesAtt)
          

          
       
    }else{

      //question number
      quesNum = Math.floor(Math.random() * quizes.length)
      //question attempt
      quesAtt +=1;  
      console.log(quesAtt)
        
    }


  

    try {

      res.redirect('/start' )


    
    } catch (error) {

    
console.log("error")
}


  });



  app.get("/reset", async (req, res) => {
    
   
    //to reset counter
    if (score > 0 && quesNum > 0){
   
      score = 0,
      quesAtt = 0
    }

    try{
    res.render("index.ejs");
    } catch (error) {

    
      console.log("error")
      }

  });


 





  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });