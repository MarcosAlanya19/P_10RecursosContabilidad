import './style.css'
import './bootstrap.css'
import { cargarAportesComisiones, showAndHideTable } from './utils';
import { aportesComisiones } from './data';

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
cargarAportesComisiones(selectAfp);

// OPERACIONES
// const aporteObligatorio = (sueldo: number) => sueldo * 0.10;
// const primaSeguro = (sueldo: number) => sueldo * 0.0174;
// const comisionAFP = (sueldo: number, comision: number) => sueldo * comision;
// const sueldoNeto = (sueldo: number, aporte: number, prima: number, comision: number) => sueldo - aporte - prima - comision;


// TABLAS
formPlanillaBasica.addEventListener('submit', e => {
  e.preventDefault()
  const idAporteComision = selectAfp.value;
  const findAporteComision = aportesComisiones.find(a => a.id === parseInt(idAporteComision))
  if (!findAporteComision) throw new Error("No se encontro el aporte Comision")

  showAndHideTable(tablePlanilla)

  console.log(findAporteComision);

})// sueldoBruto
