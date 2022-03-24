const names = ["Guadalupe", "Ollie", "Aki"];
const event = ["surprise"];

function writeCards(names, event) {
    const newNames = []
    for (let i = 0; i < names.length; i++) {
        let message = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        newNames.push(message);
        console.log(newNames)
  }

  return newNames;
}

writeCards(names);

function countDown(number) {
    for(let i = 0; i <= number; i++) {
        console.log(i)
    }
}

countDown(10); 


function calledWithExactly(number) {
    for(let i = 0; i <= number; i++) {
        console.log(i)
    }
}

calledWithExactly(4)
