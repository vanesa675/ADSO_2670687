/* Ejercicio 7 - Un taxi cobra por una carrera 15 mil pesos por kilómetro recorrido y 2 mil por
minuto. Determine el monto a pagar por una carrera.*/

let distancia = prompt(" cuantos kilometros recorrio el taxi");
let tiempo= prompt(" en cuanto tiempo recorrio la carrera");
let tPK = 15000;
let tPM = 2000;
let MAP = parseInt(distancia * tPK) + parseInt(tiempo * tPM);
alert("El monto a pagar por la carrera es: " + MAP);