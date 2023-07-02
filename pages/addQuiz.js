 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
 import { getDatabase,ref,set,push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
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

// ===================================================================================================================================================================================================================================
var question = document.getElementById('question');
var option = document.getElementById('option');
var optionsParent = document.getElementById('optionsParent');
var correctAnswerElem = document.getElementById('correctAnswer');
function allEmty(){
  question.value = "";
  option.value = "";
  optionsParent.innerHTML = ""
  correctAnswerElem.innerHTML = ""
}

  var correctAnswer
var options = []

function renderOptions(){
    optionsParent.innerHTML = "";
    for(var i = 0 ; i < options.length ; i++){
        optionsParent.innerHTML += `<li class ="p-2 fs-5 rounded-2" onclick="setCorrectAnswer('${options[i]}')">${options[i]}</li>`
    }
}

window.addOptions = function(){

options.push(option.value)

renderOptions()
option.value = ""
}

window.setCorrectAnswer = function(a){
correctAnswer = a
correctAnswerElem.innerHTML = correctAnswer

}

window.submitQuestion = function(){
  var  quizIdRef = push(ref(database,'questions')).key
    var obj = {
      question: question.value,
      options: options,
      correctAnswer: correctAnswer,
      id : quizIdRef
    }


    var quizRef = ref(database,`questions/${quizIdRef}/`)
set(quizRef,obj) 
allEmty()
  }