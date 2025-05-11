// Variables para manejar las ventas
let totalEfectivo = 0;
const ventas = [];

// Elementos del DOM
const productoSelect = document.getElementById('producto');
const cantidadInput = document.getElementById('cantidad');
const precioInput = document.getElementById('precio');
const totalSpan = document.getElementById('total');
const ventasList = document.getElementById('ventasList');
const totalEfectivoSpan = document.getElementById('totalEfectivo');
const registrarVentaButton = document.getElementById('registrarVenta');

// Función para calcular el total de una venta
function calcularTotal() {
  const cantidad = parseInt(cantidadInput.value);
  const precio = parseFloat(precioInput.value);
  const totalVenta = cantidad * precio;
  totalSpan.textContent = totalVenta.toFixed(2);
}

// Función para registrar la venta
function registrarVenta() {
  const cantidad = parseInt(cantidadInput.value);
  const precio = parseFloat(precioInput.value);
  const producto = productoSelect.value;
  const totalVenta = cantidad * precio;

  // Guardar la venta
  ventas.push({ producto, cantidad, precio, total: totalVenta });

  // Actualizar ventas del día
  const li = document.createElement('li');
  li.textContent = `${producto} - ${cantidad} unidades - $${totalVenta.toFixed(2)}`;
  ventasList.appendChild(li);

  // Actualizar total efectivo
  totalEfectivo += totalVenta;
  totalEfectivoSpan.textContent = totalEfectivo.toFixed(2);

  // Limpiar los campos
  cantidadInput.value = 1;
  precioInput.value = 0;
  calcularTotal();
}

// Evento para el cálculo del total cuando cambia la cantidad o el precio
cantidadInput.addEventListener('input', calcularTotal);
precioInput.addEventListener('input', calcularTotal);

// Evento para registrar la venta cuando se hace clic en el botón
registrarVentaButton.addEventListener('click', registrarVenta);

// Calcular el total inicialmente
calcularTotal();

  