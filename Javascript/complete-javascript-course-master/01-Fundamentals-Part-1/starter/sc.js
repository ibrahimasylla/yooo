let tip;
const prix= 275;





if(prix >=275 && prix<=300){
    tip = (275*15)/100;
     totale= prix+tip;
} else{
    tip = (275*20)/100;
     totale= prix+tip;

}
console.log(` Avec un montant de ${prix }$ 

Le tips est de Tip ${tip} Et le montant est de : ${totale} `);