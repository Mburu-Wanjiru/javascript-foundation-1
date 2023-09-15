/*
let shop="open";

if(shop=="open")alert("good morning my beloved customers");
if(shop=="open")alert("we have added new stock and even the scarce commodities are also available");
if (shop=="open")alert("FIFO");
console.log(657*876);
console.log(345+8773983);
let js="good"
if (js=="good")alert("it is the best");
//declaring variable
console.log("jimna");
let goodsavailable="fruits";
let owner="jimna1";
let ceo="mose";
let chair="kimani";
console.log(goodsavailable);
console.log(owner);
console.log(chair);
console.log(ceo);
*/
/*
let jimmy="true";
console.log(jimmy);
console.log(typeof true);
console.log(typeof 34);
console.log(typeof "jimmy");
jimmy="yes!";//dynamictyping
console.log(typeof jimmy);//we changed jimmy from boolean to a string
jimmy="7897"
console.log(typeof jimmy);

//undefined data types.simply means it is empty and it is type of undefined
let year;
console.log(year);
console.log(typeof year);

//dynamictyping
year=1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/
/*
let age =30;
age=31;//reassigning the varible to a new variable/muting a variable
const birthyear=1999;
//const is used by imutable variables and when using const you have to initialize.that is you dont use undefined variables.
var job ="programmer";
job ="teacher";
lastname="mburu";
console.log(lastname);
*/

//const agemburu=2037-1991;
//const agesarah=3879-3687;
//console.log(agemburu, agesarah);
//implementing the same code
/*
const now="2037";
const agemburu=now-1991;
const agesarah=now-2020;
console.log(agemburu, agesarah);
 
console.log(agemburu*2, agemburu/10,2**3);
//2**3  means 2^3 which is equal to 8
const firstname="jonnah";
const lastname="wahu";
//console.log(firstname+lastname);
//if you want space between them
console.log(firstname+ " " +lastname);//addition of an empty string between the two strings

//assignment operator
 
let x=10+5;//15
//console.log(x);
//we use let because we want to reassign.
x+=10;//x=x+10=25
//mean the value of x is reaasigned again from 15 to 25
x *=4//x=x*4=100
x++; //x=x+1=101
x--;//x=x+1-1=100
x--;//x=x+1-1-1=99
console.log(x);


//comparison operators
//<,>,>=,<=
console.log(agemburu > agesarah);
console.log(agesarah>=18);
const isfullage =agesarah>=18;
*/

/*
const now="2037";
const agemburu=now-1991;
const agesarah=now-2018;

console.log(now-1991>now-2018)
let x,y;
x=y=25-10-5;
console.log(x,y);
const averageage=(agemburu+agesarah)/2
console.log(agesarah,agemburu,averageage);
*/
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/
/*
const massmark=78;
const heightmark=1.69;
const massjohn=92;
const heightjohn=1.95;
const bmimark=massmark/heightmark**2;
const bmijohn=massjohn/heightjohn**2;
const markhigherbmi=bmimark>bmijohn;//compares both bmi and produces a boolean result
console.log(bmimark,bmijohn);//outputs result of both bmi
console.log(markhigherbmi);outputs boolean result
*/

/*
const firstname="jimna";//string
const job="programmer";//string
const birthyear=1991;/number
const year=2037;//number

const jimna ="I'm " +    firstname    +', a ' +  (year - birthyear) + " years old " + job + " !";
console.log(jimna);
 //temparate literals
 const jimnanew=`I'm ${firstname},a ${year-birthyear} year old ${job}!`;
 console.log(jimnanew);


 console.log(`just a regular string...`);
 console.log('string with\n\
 multiple\n\
 lines');


 console.log(`string
 multiple
 lines`);
 */


 //checks whether a person is able to take DL and if not gives the remaining years 

/*
 const age=15;
 const yearsleft=18-age;

 if(age>=18){
    
    console.log("mose can start driving licence");
 }else{
   
    console.log(`sarah is too young.wait another ${yearsleft} years`);
 }

 const birthyear=1991;
 let centuary;
 if(birthyear<=2000){
     centuary=20;

 } else{
   let centuary=21;
 }
 console.log(centuary);
*/
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK
*/

/*
const johnmass=92;
const johnheight=1.95;
const markmass=78;
const markheight=1.69;
const johnbmi=johnmass/(johnheight**2);
console.log(johnbmi);
const markbmi=markmass/(markheight**2);
console.log(markbmi);
const markbmihigher=markbmi>johnbmi;
console.log(markbmihigher);
*/

/*
Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
*/


/*
const johnmass=92;const johnheight=1.95;
const markmass=78;
const markheight=1.69;
const johnbmi=johnmass/(johnheight**2);
console.log(johnbmi);
const markbmi=markmass/(markheight**2);
console.log(markbmi);
const markbmihigher=markbmi>johnbmi;
console.log(markbmihigher);

if (markbmihigher){
    console.log(`mark's bmi (${markbmi}) is higher than john's bmi (${johnbmi})!`);
}
else{
    console.log(`john's bmi (${johnbmi}) is higher than mark's bmi (${markbmi})!`);
}
*/

/*
//type conversion
const imputyear="1991";
console.log(Number(imputyear), imputyear);
console.log(Number(imputyear)+ 18);
console.log(Number("jimna"));
console.log(typeof NaN);   

console.log(String(23), 45); 

//type coersion

console.log('i am ' + 23 + ' years old');
console.log('i am ' + String(23) + ' years old');
console.log('23'-'10'-3)//minus operator makes the console to change strings to numbers
console.log('23'+'10'+3); //in this the number is converted to a string
console.log('23'*'2');//strings converted to numbers coz * must work
console.log('23'>'56');//conversion occurs again
let n="1" + 1;// string 11
n=n-1;//string will be converted due to minus sign
console.log(n);
let j=4*2-3/2;//console applies bodmass
console.log(j);
const p=4*2-3/2+"789";
console.log(p);
*/


/*
//falsy values
//falsy values are values that are not exactly false but will become false when we try to convert them into boolean
//5 falsy values; 0,'',undefined,null,NuN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jimna'));
console.log(Boolean({}));//empty object
console.log(Boolean(''));

const money=0;
if(money){//0 is a falsy value then the condition is returned false.
    console.log("dont spend it all");
} else{
    console.log('you should get a job');
}

let height;//undefined value hence produces a falsy value
if (height){
    console.log('YAH height is defined');
} else {
    console.log('height is undefinefined');
}
*/


/*
const age=18;
if(age===18)//incase you have one line to execute you dont have to use curlly braces({})
console.log('you just became an aldult(strictly operator)');


if(age==18)//incase you have one line to execute you dont have to use curlly braces({})
console.log('you just became an aldult(loosely)');//we do not use loosely equal sign mostly.

//getting a value from a website using prompt function

const favourite=Number(prompt("what's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite===98){ //'98'===98
    console.log('cool! 98 is an amazing number');
}
else if(favourite===7){
    console.log('7 is also a cool number');
}
else if(favourite===9){
    console.log('9 is also a cool number');
}
else {
    console.log("number is not 98 or 7 or 9");
}

if(favourite !==98)console.log("why not 98?");
*/

/*
const hasdriverslicence=true;//A
const hasgoodvision=true;//B

console.log(hasdriverslicence && hasgoodvision);//AND logical operator
console.log(hasdriverslicence || hasgoodvision); //OR logical operator
console.log(! hasdriverslicence ); NOT logical operator



//if(hasdriverslicence && hasgoodvision){
    //console.log('sarah is able to drive');
//} else {
   //console.log('someone else should drive');
//}
const istired=true;//C
console.log(hasdriverslicence || hasgoodvision|| istired);
if(hasdriverslicence && hasgoodvision && !istired){
    console.log('sarah is able to drive');
} else {
   console.log('someone else should drive');
}



//console.log(hasdriverslicence && hasgoodvision);
*/




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


/*
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
*/
const day = 'tuesday';
/*
switch(day) {
    case 'monday'://day===monday
    console.log(`plan course structure`);
    console.log(`go to coding meetup`);
    break;
    case 'tuesday':
    console.log('prepare theory videos');
    break;
    case 'wednesday':
    case 'thursday':
    console.log('write code examples');
    break;
    case 'friday':
    console.log('record videos');
    break;
    case 'saturday':
    case 'sunday':
    console.log('enjoy the weekend :D');
    break;
    default: //executed when others fail
    console.log('not a valid day');
}

*/


if (day===`monday`){
    console.log(`plan course structure`);
    console.log(`go to coding meetup`);
}
else if(day===`tuesday`){
    console.log('prepare theory videos');
}
else if(day===`wednesday` || day===`thursday`){
    console.log('write code examples');
}
else if(day===`friday`){
    console.log('record videos');  
}
else if(day===`saturday` || day=== `sunday`){
    console.log('enjoy the weekend :D');
}
else{
    console.log('not a valid day');   
}
switch (day){
    case `monday`:
    console.log(`its monday`);
    break;
    case `tuesday`:
    console.log(`its tuesday`);
    break;
    case `wednesday`:
    console.log(`its wednesday`);
    break;
    case `thursday`:
    console.log(`its thurday`);
    break;
    case `friday`:
    break;
    case `saturday`:
   case `sunday`:
    console.log(`its weekend`);
    break;
    default:
        console.log(`not valid`);
}

/*
    if(23>10){
        const str=`23 is bigger`;//expression
    }

console.log(`i'm ${2037-1991}` years old);
*/

//ternary operator
const age=20;//
age>=23 ?//condition
 // console.log(`i like to drink ${`wine`: `water`});//if statement
//console.log(`i like to drink water`);//else statement

//another one
//const drink=18 ? `wine`: `water`;
//console.log(drink);

//let drink2;
//if(age>=18){
    //drink2=`wine`;
//}else{
  //  drink2=`water`;
//}
//console.log(drink2);
//console.log(`i like to drink ${age>=18 ? `wine`: `water`}`);

The Complete JavaScript Course 8
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉
