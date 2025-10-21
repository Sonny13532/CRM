// Usa el signo = en el parámetro para establecer el valor por defecto
function calcularPrecioFinal(precioBase, tasaImpuesto = 0.15) {
    // Aquí tu lógica
    const precioFinal = precioBase * (1 + tasaImpuesto);
    return precioFinal;
}

calcularPrecioFinal(); // Llamada con valor por defecto
calcularPrecioFinal(200, 0.10); // Llamada con valor personalizado

// Pruebas (Descomenta y verifica en la consola)
// console.log(calcularPrecioFinal(100));     // Esperado: 115 (100 * 1.15)
// console.log(calcularPrecioFinal(50, 0.05)); // Esperado: 52.5 (50 * 1.05)