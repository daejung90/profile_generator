const readline = require('readline-promise').default;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// npm i readline-promise
const answers = [];

rl.questionAsync('What do you think about NodeJs? ')
.then((answer) => {
    answers.push(answer);
    return rl.questionAsync('What is your name? ')
})
.then((answer) => {
    answers.push(answer);
    return rl.questionAsync('What is an activity you like doing? ')
})
.then((answer) => {
    answers.push(answer);
    return rl.questionAsync('What do you listen to while doing that? ')
})
.then((answer) => {
    answers.push(answer);
    return rl.questionAsync('Which is you favourite meal? (eg: dinner, brunc, etc.) ')
})
.then((answer) => {
    answers.push(answer);
    return rl.questionAsync('What is your favourite thing to eat for that meal? ')
})
.then((answer) => {
    answers.push(answer);
    return rl.questionAsync('Which sport is your absolute favourite? ')
})
.then((answer) => {
    answers.push(answer);
    return rl.questionAsync('What is your superpower? ')
})
.then((answer) => {
    answers.push(answer);
    rl.close()
    

    console.log(`Hi! You can call me ${answers[0]}. ${answers[1]} while I'm listening ${answers[2]}. My favourite meal is ${answers[3]} because it's a perfect meal to eat ${answers[4]}. After eat a lot I love watch ${answers[5]}, which is my favourite sport. ${answers[6]}. `)

})
.then(() => {
    console.log('Process finished!')
})
.catch((err) => {
    console.log(err)
})


//rl.question('What do you think about NodeJs? ', (answer) => {
    // console.log(sdgas;ganrlgnar)


// rl.question('What is your name? Nicknames are also acceptable ', (answer1) => {
// //   console.log(`Thank you for your valuable feedback: ${answer}`);
    
//   rl.question('What is an activity you like doing? ', (answer2) => {
//     // console.log(`Thank you for your valuable feedback: ${answer}`);

    // rl.question('What do you listen to while doing that? ', (answer3) => {
    //     // console.log(`Thank you for your valuable feedback: ${answer}`);

    //     rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) => {
    //         // console.log(`Thank you for your valuable feedback: ${answer}`);

    //         rl.question('What is your favourite thing to eat for that meal? ', (answer5) => {
    //             // console.log(`Thank you for your valuable feedback: ${answer}`);

    //             rl.question('Which sport is your absolute favourite? ', (answer6) => {
    //                 // console.log(`Thank you for your valuable feedback: ${answer}`);

    //                 rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
    //                     console.log(`Hi! You can call me ${answer1}. ${answer2} while I'm listening ${answer3}. My favourite meal is ${answer4} because it's a perfect meal to eat ${answer5}. After eat a lot I love watch ${answer6}, which is my favourite sport. ${answer7}. `);

//   rl.close();
//                     })
//                 })
//             })
//         })
//     })
//   })
// });