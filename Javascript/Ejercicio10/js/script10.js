/*El dueño de una tienda compra un artículo a un precio determinado. Obtener el
precio en que lo debe vender para obtener una ganancia del 30%. */

let precioCompra = 100;
let gananciaPorcentaje = 30/100;
let precioVenta = precioCompra + (precioCompra * gananciaPorcentaje);
alert("El precio de venta necesario es: " + precioVenta);