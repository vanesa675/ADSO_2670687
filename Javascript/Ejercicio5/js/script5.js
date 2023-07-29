/*Un alumno desea saber cuál será su calificación final en la materia de
Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
a. 55% del promedio de sus tres calificaciones parciales.
b. 30% de la calificación del examen final.
c. 15% de la calificación de un trabajo final*/


let califParcial1 = prompt(" calificacion parcial 1: "); 
let califParcial2 = prompt(" calificacion parcial 2: "); 
let califParcial3 = prompt(" calificacion parcial 3: "); 
let califExamenFinal = prompt(" calificacion examen final: "); 
let califTrabajoFinal = prompt(" calificacion trabajo final: "); 

let porcentajeParciales = 55/100; 
let porcentajeExamenFinal = 30/100; 
let porcentajeTrabajoFinal = 15/100; 
      
let promedioParciales = (califParcial1 + califParcial2 + califParcial3);
let calificacionFinal = (promedioParciales * porcentajeParciales) + (califExamenFinal * porcentajeExamenFinal) + (califTrabajoFinal * porcentajeTrabajoFinal);
      
alert("La calificación final es: "+ calificacionFinal)

