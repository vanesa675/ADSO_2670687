/* Ejercicio 2 - dado el sueldo de un empleado
imprimir en una alerta el nuevo sueldo
del empleado si tuvo un aumento del 10%*/ 

/*const sueldo = prompt("Ingrese el valor del sueldo");
const psueldo = 10/100;
const nsueldo = parseInt(sueldo) + parseInt(sueldo*psueldo);
alert("el nuevo sueldo con el aumento es:"+nsueldo);*/

/* Ejercicio 3 - un vendedor que tiene su sueldo base,
resive una comision del 30% del total de las ventas
del mes, el quiere saber cuanto ganara en un mes
que tuvo 3 ventas */

const sueldo = prompt("valor del sueldo")
const ventas = prompt("valor total de ventas");
const pventas = 30/100;
const nsueldo = parseInt(sueldo) + parseInt(ventas*pventas);
alert("el nuevo sueldo con el aumento del 30% de las ventas es: "+nsueldo)