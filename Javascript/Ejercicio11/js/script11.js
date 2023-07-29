/* Tres personas deciden invertir su dinero para fundar una empresa. Cada una de
ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte
con respecto a la cantidad total invertida. */


let pers1 = prompt("Ingrese la cantidad de dinero invertido por la primera persona");
let pers2 = prompt("Ingrese la cantidad de dinero invertido por la segunda persona");
let pers3 = prompt("Ingrese la cantidad de dinero invertido por la tercera persona");
let totalp = parseInt(pers1)+ parseInt(pers2)+ parseInt(pers3);
let tper1 = parseInt(pers1)* parseInt(100/totalp);
let tper2 = parseInt(pers2)* parseInt(100/totalp);
let tper3 = parseInt(pers3)* parseInt(100/totalp);

alert("El porcentaje que cada persona invirtio en la fundacion de la empresa es de " +tper1+ "% la primera persona, " +tper2+ "% la segunda persona y " +tper3+ "% la tercera persona.");