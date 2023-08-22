let firstName = 'John';
let age = 35;
let hobby = 'Coding';

const parameter = `Hello, ${firstName} (${age}). I love ${hobby}!` 
const logTwice = () => {
  console.log(parameter)
  console.log(parameter)
}

const theHobby = () => {
  logTwice(parameter)
}

theHobby()