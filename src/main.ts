import './style.css'
import './bootstrap.css'
import { cargarAportesComisiones, showAndHideTable } from './utils';
import { aportesComisiones } from './data';


// var dt = require('datatables.net')();

// DOM
const sueldo = document.querySelector<HTMLInputElement>('#exampleInputEmail1');
if (!sueldo) throw new Error("No se encontro el inputEmail1")
//ingreseSueldoBruto
const selectAfp = document.querySelector<HTMLInputElement>('#selectAporteComision'); // selectAfp
if (!selectAfp) throw new Error("No se encontro el afpInput")

const formPlanillaBasica = document.querySelector<HTMLFormElement>('#formPlanillaBasica');
if (!formPlanillaBasica) throw new Error("No se encontro el formPlanillaBasica")
const tablePlanilla = document.querySelector<HTMLTableElement>('#tablePlanilla');
if (!tablePlanilla) throw new Error("No se encontro el tablePlanilla")

const tableDiv = document.querySelector<HTMLElement>('#tableDiv');
if (!tableDiv) throw new Error("No se encontro el tableDiv")
cargarAportesComisiones(selectAfp);

// OPERACIONES
// const aporteObligatorio = (sueldo: number) => sueldo * 0.10;
// const primaSeguro = (sueldo: number) => sueldo * 0.0174;
// const comisionAFP = (sueldo: number, comision: number) => sueldo * comision;
// const sueldoNeto = (sueldo: number, aporte: number, prima: number, comision: number) => sueldo - aporte - prima - comision;
// console.log($);
// TABLAS
// $(document).ready(function () {

// });

formPlanillaBasica.addEventListener('submit', e => {

  e.preventDefault()
  const idAporteComision = selectAfp.value;
  const findAporteComision = aportesComisiones.find(a => a.id === parseInt(idAporteComision))
  if (!findAporteComision) throw new Error("No se encontro el aporte Comision")

  showAndHideTable(tableDiv);

  ($('#tablePlanilla') as any).DataTable({
    dom: 'Bfrtip',
    buttons: [
      'copy', 'csv', 'excel', 'pdf', 'print'
    ]
  });
  console.log(findAporteComision);

})// sueldoBruto
