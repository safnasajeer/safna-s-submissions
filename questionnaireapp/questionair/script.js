const quizData =[
{question:'How old is Safna?',
a:'10',
b:'17',
c:'28',
d:'110',
correct:'c'
},
{
question:'What is the good programming language in 2019',
a:'java',
b:'c',
c:'Python',
d:'Jvascript',
correct:'a'
},
{
question:'Who is the president of US',
a:'Safna',
b:'Obama',
c:'Trumb',
d:'Bush',
correct:'c'
},{
question:'What does html stands for',
a:'Hyper Text Markup Language',
b:'Hypo Text Mark Language',
c:'Hyloop Test Markup Laguage',
d:'Hyper Test Markup Language',
correct:'a'
},
{
  question:'What year javscript launched?',
  a:'2020',
  b:'2019',
  c:'1995',
  d:'none of th above',
  correct:'c'
  },
  
]
const answers = document.querySelectorAll(".answer");
const quizEl =document.getElementById('quiz');
const questionEl =document.getElementById('questions');
const a_text =document.getElementById('a_text');
const b_text =document.getElementById('b_text');
const c_text =document.getElementById('c_text');
const d_text =document.getElementById('d_text');
const subBtn =document.getElementById('submit'); 
let score =0;
let answer = undefined;
let currentQuiz = 0 ;
loadQuiz();
function loadQuiz()
{
  const currentQuizData = quizData[currentQuiz]; 
  questionEl.innerHTML =currentQuizData.question;
  a_text.innerText=currentQuizData.a;
  b_text.innerText=currentQuizData.b;
  c_text.innerText=currentQuizData.c;
  d_text.innerText=currentQuizData.d;
  deselectAnswers()
}

function getSelected()
{
    
      answers.forEach(answer => {
      if(answer.checked)
      {
        if(answer.id === quizData[currentQuiz].correct)
        {
          score++;
        }
      }

        
});
}

function deselectAnswers()
{
    answers.forEach(answerEl => 
    {
      answerEl.checked= false;
    });
  }
subBtn.addEventListener('click',()=>
{
  
    getSelected();
    currentQuiz++;
    if(currentQuiz < quizData.length)
    {
      
      loadQuiz();
    }
    else
    {
      // alert('You finished! get your self an Orange Lemonade ');
      quizEl.innerHTML = ' You finished! '+score +' marks! get your self an Orange Lemonade' ;

    }   
  });










//     let answer = undefined ;
//     //contains the  value of the selected answer
//     answerEls.forEach(answerEl =>  {
//         // console.log(answer.value); on/off
//         // console.log(answer.checked); returns true /false value
//         if(answerEl.checked)
//         {
//           answer = answerEl.id;
//         }
//           return answer; 
//     });
// }

// const answerEls = document.querySelectorAll(".answer");
// const qestionEl =document.getElementById('questionEl');
// const quiz = document.getElementById("quiz");
// const a_text =document.getElementById('a_text');
// const b_text =document.getElementById('b_text');
// const c_text =document.getElementById('c_text');
// const d_text =document.getElementById('d_text');
// const subBtn =document.getElementById("submit"); 
// let currentQuiz = 0;
// let score = 0;
// loadQuiz();

// function loadQuiz()
// {
//   deselectAnswers();
//   const cuurrentQuizData = quizData[currentQuiz];
//   qestionEl.innerText=cuurrentQuizData.question;
//   a_text.innerText=cuurrentQuizData.a;
//   b_text.innerText=cuurrentQuizData.b;
//   c_text.innerText=cuurrentQuizData.c;
//   d_text.innerText=cuurrentQuizData.d;
  

// }

// function getSelected()
// {
//     let answer = undefined ;
//     //contains the  value of the selected answer
//     answerEls.forEach(answerEl =>  {
//         // console.log(answer.value); on/off
//         // console.log(answer.checked); returns true /false value
//         if(answerEl.checked)
//         {
//           answer = answerEl.id;
//         }
//           return answer; 
//     });
// }
// function deselectAnswers()
// {

//   answerEls.forEach(answerEl => 
//     {
//       answerEl.checked= false;
//     });
// }



//   subBtn.addEventListener('click',()=>
//   { debugger
//     const answer = getSelected();

//       if(answer === quizData[currentQuiz].correct)
//       {
//         score++;
//         currentQuiz++;

//       }

//       if(currentQuiz < quizData.length)
//         loadQuiz();
//       else
//         // alert('You finished! get your self an Orange Lemonade')  
//         quiz.innerHTML = '<h2> You answerd correctly at $ {score}/${quizData.length} questions .</h2>';
    
//   });

