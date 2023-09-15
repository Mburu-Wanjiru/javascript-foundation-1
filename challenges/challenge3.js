/*



There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data: 
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


*/

/*
const dolphinscore=96+108+89;
const koalascore=88+91+110;
console.log(`Dolphin has scored ${dolphinscore}`);
console.log(`Koala has scored ${koalascore}`);
const dolphinAveragescore=dolphinscore/3;
const koalaAveragescore=koalascore/3;

console.log(`Dolphin average score is ${dolphinAveragescore}`);
console.log(`Koala average score is ${koalaAveragescore}`);
 
const highscore=dolphinAveragescore>koalaAveragescore;

console.log( highscore);



if (highscore){ 
    console.log(`congratulations Dolphin.YOU ARE THE WINNER OF THE TROPHY.`)
}
else if(highscore) {
  console.log(`congratulations Koala.YOU ARE THE THE WINNER OF THE TROPHY.`)
}
else {
    console.log(`THERE IS NO WINNER.BOTH COMPETITORS HAVE DRAWN.`)
}
*/
// BONUS 2

/*
Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks
Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
*/
/*
const dolphinscore=97+112+101;
const koalascore=109+95+123;

console.log(`dolphin score is ${dolphinscore}.`);
console.log(`koala score is ${koalascore}.`);

const averagedolphinscore=dolphinscore/3;
const averagekoalascore=koalascore/3;

console.log(`average score for dolphin is ${averagedolphinscore}`);

console.log(`average score for koala is ${averagekoalascore}`);

const highaverage=averagedolphinscore>averagekoalascore;

console.log(highaverage);



const above100dolphin=averagedolphinscore>100;

const above100koala=averagekoalascore>100;

console.log(`${above100dolphin}`);

console.log(`${above100koala}`);


if (highaverage && above100dolphin) {

    console.log(`CONGRATULATION DOLPHIN.THE TROPHY IS YOURS.`);
}

else if (highaverage && ! above100dolphin) {


console.log(`DOLPHIN YOU HAVE WON BUT YOUR POINTS ARE BELOW REQUIREMENT OF 100 SO NO TROPHY `);
}
else if (!highaverage && above100koala) {

    console.log(`CONGRATULATION KOALA.THE TROPHY IS YOURS.`);
}
else if( !highaverage &&  ! above100koala) {

console.log(`KOALA YOU HAVE WON BUT YOUR POINTS ARE BELOW REQUIREMENT OF 100 SO NO TROPHY `);
}

else { 
    console.log(`BOTH COMPETITORS HAVE SHARED THE POINTS.`);
}
*/

const dolphinscore=97+112+101;
const koalascore=109+95+106;

console.log(`dolphin scored ${dolphinscore}.`);

console.log(`koala scored ${koalascore}.`);

const averagedolphinscore=dolphinscore/3;
const averagekoalascore=koalascore/3;

console.log(`the average score for dolphin is ${averagedolphinscore}`);

console.log(`the average score for koala is ${averagekoalascore}`);

const higheraverage=averagedolphinscore>averagekoalascore;
console.log(higheraverage);

const dolphinabove100points=averagedolphinscore>=100;
const koalaabove100points=averagekoalascore>=100;

console.log(koalaabove100points);
console.log(dolphinabove100points);


const bothtie=averagedolphinscore==averagekoalascore;

console.log(bothtie);

if (higheraverage && dolphinabove100points && ! bothtie){

    console.log(`dolphin wins the trophy`);
}

else if(higheraverage && !dolphinabove100points && ! bothtie){ 

    console.log(`dolphin wins but no trophy due to less points`);
}
else if(!higheraverage && koalaabove100points && ! bothtie){ 

    console.log(`koala wins the trophy`);
}

else if(!higheraverage && !koalaabove100points && ! bothtie){

    console.log(`koala wins but no trophy due to less points`);
}

else if(bothtie && koalaabove100points && dolphinabove100points){

    console.log(`both parties wins the trophy`);
}

else {

    console.log(`no team wins the trophy`);
}




