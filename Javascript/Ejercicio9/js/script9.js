/*En un hospital existen tres áreas: Ginecología, Pediatría, Traumatología. El
presupuesto anual del hospital se reparte conforme a la sig. tabla:
Área / Porcentaje del presupuesto
Ginecología : 40%
Traumatología : 30%
Pediatría : 30%
Obtener la cantidad de dinero que recibirá cada área, para cualquier monto
presupuestal.*/

let MonPre = prompt(" indique el valor del monto presupuestal: ")

let Ginec = 40/100;
let trau = 30/100;
let pedi= 30/100;

let MFGi = parseInt(MonPre * Ginec);
let MFTr = parseInt(MonPre * trau);
let MFPe = parseInt(MonPre * pedi);

alert(" El dinero recibido por el area de gineconologia es: " + MFGi + ", el dinero recibido por el area de traumologia es: " + MFTr + " y el dinero recibido por el area de pediatria es: " + MFPe )