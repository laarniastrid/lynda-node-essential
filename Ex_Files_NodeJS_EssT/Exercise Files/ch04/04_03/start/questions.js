const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  'what is your name? ',
  'where do you live? ', 
  'what are you going to do with node js? '
];

const collectAnswers = (questions, done) => {
  const answers = [];
  const [firstQuestion] = questions;

  const questionAnswered = answer => {
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      done(answers);
    }
  }

  rl.question(firstQuestion, questionAnswered);
}

collectAnswers(questions, answers => {
  console.log('thank you for your answers. ');
  console.log(answers);
  process.exit();
})
