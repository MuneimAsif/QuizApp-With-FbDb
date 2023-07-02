 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
 import { getDatabase,ref,onChildAdded } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAmx86_NmjD1apahD8ByYJun1q1NYgyjrY",
   authDomain: "hackathon-project-fe3c7.firebaseapp.com",
   databaseURL: "https://hackathon-project-fe3c7-default-rtdb.firebaseio.com",
   projectId: "hackathon-project-fe3c7",
   storageBucket: "hackathon-project-fe3c7.appspot.com",
   messagingSenderId: "334476609634",
   appId: "1:334476609634:web:444ef9f98cf5ff2e08293b",
   measurementId: "G-7D95JLDQKE"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
const database = getDatabase();
    var reference = ref(database , `questions/`)
    onChildAdded(reference , function(data){
        console.log(data.val());
        questions.push(data.val())
        renderQuestion();
        
    })
    
    var questions = [
   
    
    ]

var question = document.getElementById("question");
var option = document.getElementById("option")
var correctAnswer

   


var indexVal = 0; 
function renderQuestion(){
    var que = questions[indexVal]
    question.innerHTML = que.question
    currentQuestion.innerHTML = indexVal + 1;
    totalQuestion.innerHTML = questions.length
    
    option.innerHTML = ""
    for(var i =0; i<que.options.length; i++){
        correctAnswer = que.correctAnswer
        option.innerHTML += `<button id = "btn" onclick="checkAns('${que.correctAnswer}', '${que.options[i]}')">${que.options[i]}</button>`
    }
 
};
var quiz = document.getElementById('quiz')
var marksdiv = document.getElementById('marksdiv')
var btn = document.getElementById("btn")
//   renderQuestion();
  var btn = document.getElementById("btn")

  var marks = 0;
  var main = document.getElementById("main")
  var markshtml = document.getElementById("marks") ;
  var correctAns = document.getElementById("correctAns")
  var afterBodyDiv = document.getElementById("afterBodyDiv")
 window.checkAns =  function (a,b){
     if(indexVal + 1 == questions.length){
        afterBodyDiv.style.marginTop = "150px" 
        main.style.display ="none"
        quiz.style.innerHTML =""
        main.style.innerHTML = marksdiv.style.display
        marksdiv.style.height = "100px"
        marksdiv.style.display = "flex"
        correctAns.style.fontSize = "2rem"
        correctAns.style.fontWeight = "bold"
        correctAns.style.justifyContent = "center"
        correctAns.style.marginTop = "25px"
   
 }
      if(a == b){
          markshtml.innerHTML = ++marks
          ++indexVal
          renderQuestion() 
        }
        else{
            ++indexVal
            renderQuestion() 
            
        }
        
  }