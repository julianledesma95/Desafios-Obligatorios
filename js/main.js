/** CALCULAR PAGOS EN CUOTAS SOBRE UN MONTO DETERMINADO + INTERES 2% POR CANTIDAD DE CUOTA */

let numeroCuotas = 0;
let precioProducto = 0;

precioProducto = prompt("Ingrese el precio del producto seleccionado");1000
numeroCuotas = prompt("Ingrese la cantidad de cuotas que desea");2

let interesCuota = numeroCuotas * 0.02;
let incremento = precioProducto * interesCuota;
let valorFinal = parseFloat(precioProducto) + parseFloat(incremento);
let valorCuota = valorFinal / numeroCuotas;

console.log(interesCuota);
console.log(numeroCuotas);
console.log(incremento);
console.log(valorCuota);
console.log(valorFinal);