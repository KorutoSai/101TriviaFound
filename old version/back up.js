import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
// let historyLink = "&category=23&difficulty=easy&type=multiple"
// let geoLink = "&category=22&difficulty=easy&type=multiple"

// const resultEasyHistory = await axios.get("https://opentdb.com/api.php?amount=50"+ historyLink);
// const resultEasyGeo = await axios.get("https://opentdb.com/api.php?amount=50&category=22&difficulty=easy&type=multiple");






const app = express();
const port = 3000;
const questions = [] ;
let score = 0;
//question numbers
let quesNum = 1;
let quesAtt = 0;
let quizes = [];

let answerList = ""; 



//question numbers










app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {

  score = 0,
  quesAtt = 0,
  quizes = [],
  answerList = ""




      res.render("index.ejs", {  

        
    });

    
});


  


//history

app.get("/start", async (req, res) => {
  

  try {
    //get API
   if (quizes === undefined || quizes.length == 0){
    let resultEasyHistory = await axios.get("https://opentdb.com/api.php?amount=50&category=23&difficulty=easy&type=multiple");

    

    

     quizes = resultEasyHistory.data.results;      

   }

  
   //choices
   var correctAnswer = (quizes[quesNum].correct_answer)
   var  wrongAnswer1 = (quizes[quesNum].incorrect_answers[0])
   var  wrongAnswer2 = (quizes[quesNum].incorrect_answers[1])
   var  wrongAnswer3 = (quizes[quesNum].incorrect_answers[2])
   var testName = "History"
 
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
        answerList,
        testName , 
              
        answers: [(quizes[quesNum].correct_answer)]
      }
    );

  } catch (error) {


    console.log("error")
    }
  });


//geo

app.get("/startGeo", async (req, res) => {
 

  try {
    //get API
   if (quizes === undefined || quizes.length == 0){
    let resultEasyGeo = await axios.get("https://opentdb.com/api.php?amount=50&category=22&difficulty=easy&type=multiple");


   

    quizes = resultEasyGeo.data.results;        

   }

  
   //choices
   var correctAnswer = (quizes[quesNum].correct_answer)
   var  wrongAnswer1 = (quizes[quesNum].incorrect_answers[0])
   var  wrongAnswer2 = (quizes[quesNum].incorrect_answers[1])
   var  wrongAnswer3 = (quizes[quesNum].incorrect_answers[2])
   var testName = "Geography"
 
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
        answerList,
        testName ,

        answers: [(quizes[quesNum].correct_answer)]
      }
    );

  } catch (error) {


    console.log("error")
    }
  });



//vehicles

app.get("/startVehicle", async (req, res) => {
 

  try {
    //get API
   if (quizes === undefined || quizes.length == 0){
    let resultEasyVehicle = await axios.get("https://opentdb.com/api.php?amount=50&category=28&type=multiple");


   

    quizes = resultEasyVehicle.data.results;        

   }

  
   //choices
   var correctAnswer = (quizes[quesNum].correct_answer)
   var  wrongAnswer1 = (quizes[quesNum].incorrect_answers[0])
   var  wrongAnswer2 = (quizes[quesNum].incorrect_answers[1])
   var  wrongAnswer3 = (quizes[quesNum].incorrect_answers[2])
   var testName = "Vehicles"
 
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
        answerList,
        testName ,
              
        answers: [(quizes[quesNum].correct_answer)]
      }
    );

  } catch (error) {


    console.log("error")
    }
  });

// science
  app.get("/startScience", async (req, res) => {
 

    try {
      //get API
     if (quizes === undefined || quizes.length == 0){
      let resultEasyScience = await axios.get("https://opentdb.com/api.php?amount=50&category=17&difficulty=easy&type=multiple");
  
  
     
  
      quizes = resultEasyScience.data.results;        
  
     }
  
    
     //choices
     var correctAnswer = (quizes[quesNum].correct_answer)
     var  wrongAnswer1 = (quizes[quesNum].incorrect_answers[0])
     var  wrongAnswer2 = (quizes[quesNum].incorrect_answers[1])
     var  wrongAnswer3 = (quizes[quesNum].incorrect_answers[2])
     var testName = "General Science"
   
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
          answerList,
          testName ,
                
          answers: [(quizes[quesNum].correct_answer)]
        }
      );
  
    } catch (error) {
  
  
      console.log("error")
      }
    });


// anime
    app.get("/startAnime", async (req, res) => {
 

      try {
        //get API
       if (quizes === undefined || quizes.length == 0){
        let resultEasyAnime = await axios.get("https://opentdb.com/api.php?amount=50&category=31&type=multiple");
    
    
       
    
        quizes = resultEasyAnime.data.results;        
    
       }
    
      
       //choices
       var correctAnswer = (quizes[quesNum].correct_answer)
       var  wrongAnswer1 = (quizes[quesNum].incorrect_answers[0])
       var  wrongAnswer2 = (quizes[quesNum].incorrect_answers[1])
       var  wrongAnswer3 = (quizes[quesNum].incorrect_answers[2])
       var testName = "Anime and Manga"
     
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
            answerList,
            testName ,
                  
            answers: [(quizes[quesNum].correct_answer)]
          }
        );
    
      } catch (error) {
    
    
        console.log("error")
        }
      });

      // Gen Knowledge

      app.get("/startGen", async (req, res) => {
 

        try {
          //get API
         if (quizes === undefined || quizes.length == 0){
          let resultEasyGen = await axios.get("https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple");
      
      
         
      
          quizes = resultEasyGen.data.results;        
      
         }
      
        
         //choices
         var correctAnswer = (quizes[quesNum].correct_answer)
         var  wrongAnswer1 = (quizes[quesNum].incorrect_answers[0])
         var  wrongAnswer2 = (quizes[quesNum].incorrect_answers[1])
         var  wrongAnswer3 = (quizes[quesNum].incorrect_answers[2])
         var testName = "General Information"
       
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
              answerList,
              testName ,
                    
              answers: [(quizes[quesNum].correct_answer)]
            }
          );
      
        } catch (error) {
      
      
          console.log("error")
          }
        });



 


//post
  app.post("/post", async (req, res) => { 
    const answerToPreviousQuestion = req.body.q1
    const answeredQuestion = req.body.question
    const allPreviousQuestions = questions
    
    //verifyer
    const previousQuestionObject = allPreviousQuestions.find(questionItem => {
        return questionItem.question === answeredQuestion
    })


    if (previousQuestionObject.correctAnswer === answerToPreviousQuestion){
        // console.log("correct")
          
          //score
          score += 1;

          //question number
          quesNum = Math.floor(Math.random() * quizes.length)
         
          //question attempt
         quesAtt +=1;

         
      //correct answer
      // console.log(previousQuestionObject.correctAnswer)
      answerList = (previousQuestionObject.correctAnswer)

          
       
    }else{

      //question number
      quesNum = Math.floor(Math.random() * quizes.length)
      //question attempt
      quesAtt +=1;  


      //correct answer
      // console.log(previousQuestionObject.correctAnswer)
      answerList = (previousQuestionObject.correctAnswer)
      

        
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
      quesAtt = 0,
      quizes = [],
      answerList = ""
      
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