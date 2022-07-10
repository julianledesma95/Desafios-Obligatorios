/** CALCULAR PAGOS EN CUOTAS SOBRE UN MONTO DETERMINADO + INTERES 2% POR CANTIDAD DE CUOTA */

let numeroCuotas = 0;
let precioProducto = 0;

function calcularInteres(cuotas, valor) {
    interes = cuotas * 0.02;
    return valor * interes;
}

precioProducto = prompt("Ingrese el precio del producto seleccionado");
numeroCuotas = prompt("Ingrese la cantidad de cuotas que desea");

let incremento = calcularInteres(numeroCuotas, precioProducto);
let valorFinal = parseFloat(precioProducto) + parseFloat(incremento);
let valorCuota = valorFinal / numeroCuotas;

console.log(interesCuota);
console.log(numeroCuotas);
console.log(incremento);
console.log(valorCuota);
console.log(valorFinal);