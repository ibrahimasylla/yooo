'use strict';

// let drive =false;
// const past=true;

// if(past){
//     drive = true;
//     // console.log(drivee)
// }

// if(drive){
//     console.log( 'je conduit')
// }

// const interface= coucou


// 34
// function logger(){
//     console.log('My name is khalil')
// }
// //Invoking the function 
// logger();
// function full ( nom, prenom){

//     const valeur = ` Mon nom est ${nom } et mon prenom est  ${prenom}`

//     return valeur;
// }

// console.log('Ibrahima ', 'Sylla')



//35


// function Age1(naissance){

//     const age = 2022-naissance
//     return age;
// }
// console.log(Age1(20))

//  const age2 =function (naissance){

//     const age = 2022-naissance
//     return age;
// }


// 36 

// const Fullname=  (nom,prenom) =>{

//     const valeur = ` salut ${nom} et ${prenom} `
//     return valeur
// }

// console.log(Fullname('ibrahima ', 'Syll'));


// 36



// const piece = (fruit)=>{
//     return 4 * fruit;
// }

// const Fullname=  (nom,prenom) =>{

//     const ized=piece(nom)
//     const ized2=piece(prenom)

//     const juice = ` salut ${ized} et ${ized2} `


//     return juice 
// }

// console.log(Fullname('ibrahima ', 'Syll'));


//  


// const calcAverage = (sccore1,sccore2,sccore3)=>{

//     const Team = (sccore1+sccore2+sccore3)/3
//     return Team;
// }

// const checkWinner = ( Dolphin , koala)=>{
// if(Date1dolphin>Date1Koala){
//     console.log(`Team 1 gagne: ${Dolphin} vs ${koala}` )
// }else{
//     console.log(`Team 2 gagne: ${Dolphin} vs ${koala}` )

// }
// }

// const Date1dolphin  = console.log(calcAverage(44,23,71))
// const Date1Koala  = console.log(calcAverage(65,54,49))

// const Date2Koala  = console.log(calcAverage(85,54,41))
// const Date2dolphin  = console.log(calcAverage(24,34,27))

// checkWinner(100,400);


// const khalil= new Array('khalil','');

// console.log(khalil.length);

// const yoo= function(nom){

//     return(nom)
// };


// const year=[2001,2002];

//  console.log(yoo(year[0]))


// const calcTip = function (bill) {

//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;


// const bills = [125, 555, 44];


// const total = [];



// // console.log(calcTip(calcTip));


// const tips =[calcTip(bills[0])]
//  const totaleu = bills+tips
// console.log(tips[0]+bills[0]);

// console.log(totaleu);


// const jonas={
//   name:'khalil',
//   lastname:'ibrahima',
//   frinds:['ibrahima','khalil','ibrahima'],
//   age:23,
//   conduit:true,

//   calcule:function(){

//     this.name= 'yooo';
//     return this.name
//   },


//   challenge:function(){


// return ` ${this.name } is ${this.age } and has ${this.conduit ? 'a'  :'no' } driver'`


//   }



// }

// console.log(jonas.challenge())


// console.log(jonas.calcule())
// console.log(jonas.lastname)



// jonas.location='portugal';
// jonas['twiter']='email@';
// jonas.phrase='portugal';


// const key = ' name';
// // console.log(jonas.lastname + key)

// // console.log(jonas['name']);

// console.log(`${jonas.name} has ${jonas.frinds.length} called ${jonas.frinds[1]} `
// );

// console.log(jonas['name'] + " has " + jonas.frinds.length+
// ' caled '+jonas.frinds[1]
// );
// console.log(jonas.frinds.length);




// // const ask=prompt('coucpu');

// if(jonas[ask]){

//   console.log('bravoo')
// }else{
//   console.log('fals')


// }



// const Mark ={

//   name:'MARK',
//   MASS: 78, 
//   height: 1.69, 

//   Calcul: function(){

//      this.opera = this.MASS /this.height**2;
    
//     return  this.opera
  
//     }

// }
// const john ={

//   name:'MARK',
//   MASS: 92, 
//   height: 1.95, 

//   Calcul: function(){

//      this.opera = this.MASS /this.height**2;
    
//     return  this.opera
  
//     }

// }



// Mark.Calcul()
// john.Calcul()

// console.log(Mark.opera)
// console.log(john.opera)




const john =  [

'MARK',
 92, 
   1.95, 
   1.95, 

   1.95, 

   'yoo',

2.5, 


]

for(let i =0 ;  i < john.length ; i++){
if (typeof john[i]!=='string') continue;
  console.log(john[i] ,typeof john[i]);
 
  
}

// console.log(vide)