/* Tres personas deciden invertir su dinero para fundar una empresa. Cada una de
ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte
con respecto a la cantidad total invertida. 

let INVPer1 = prompt(" Escribe la inversion de la persona 1");
let INVPer2 = prompt(" Escribe la inversion de la persona 2");
let INVPer3 = prompt(" Escribe la inversion de la persona 3");

let CanTInve = parseInt(INVPer1 + INVPer2 + INVPer3);

let PIP1=parseInt(INVPer1/CanTInve) * 100;
let PIP2=parseInt(INVPer2/CanTInve) * 100;
let PIP3=parseInt(INVPer3/CanTInve) * 100;



alert(" el porcentaje de la inversion para la persona 1 es: "+ PIP1 + "%" + ", el porcentaje de la inversion para la persona 2 es: "+ PIP2 + "%" + " y el porcentaje de la inversion para la persona 3 es:" + PIP3 + "%" )*/

let pers1 = prompt("Ingrese la cantidad de dinero invertido por la primera persona");
let pers2 = prompt("Ingrese la cantidad de dinero invertido por la segunda persona");
let pers3 = prompt("Ingrese la cantidad de dinero invertido por la tercera persona");
let totalp = parseInt(pers1)+ parseInt(pers2)+ parseInt(pers3);
let tper1 = parseInt(pers1)* parseInt(100/totalp);
let tper2 = parseInt(pers2)* parseInt(100/totalp);
let tper3 = parseInt(pers3)* parseInt(100/totalp);

alert("El porcentaje que cada persona invirtio en la fundacion de la empresa es de " +tper1+ "% la primera persona, " +tper2+ "% la segunda persona y " +tper3+ "% la tercera persona.");