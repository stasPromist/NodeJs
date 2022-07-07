var oneLinerJoke = require('one-liner-joke');
//  const random = require("./modules/getjoke");
//  console.log(oneLinerJoke.length);



let randomNum = oneLinerJoke.randomInt();
let jokesArray = [];
console.log(randomNum);

while(randomNum > 4 ) {
    let getRandomJoke = oneLinerJoke.getRandomJoke();
    jokesArray.push(getRandomJoke);
    randomNum = randomNum - 1;
}
console.log(jokesArray);