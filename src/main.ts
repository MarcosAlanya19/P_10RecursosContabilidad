import './styles/style.css'
import './styles/bootstrap.css'
import { cargarAportesComisiones } from './utils';
import { aportesComisiones } from './dataAFP';


// var dt = require('datatables.net')();

// DOM
const sueldo = document.querySelector<HTMLInputElement>('#exampleInputEmail1');
if (!sueldo) throw new Error("No se encontro el inputEmail1")
const selectAfp = document.querySelector<HTMLInputElement>('#selectAporteComision');
if (!selectAfp) throw new Error("No se encontro el afpInput")
const formPlanillaBasica = document.querySelector<HTMLFormElement>('#formPlanillaBasica');
if (!formPlanillaBasica) throw new Error("No se encontro el formPlanillaBasica")
const tablePlanilla = document.querySelector<HTMLTableElement>('#tablePlanilla');
if (!tablePlanilla) throw new Error("No se encontro el tablePlanilla")

const tableDiv = document.querySelector<HTMLElement>('#tableDiv');
if (!tableDiv) throw new Error("No se encontro el tableDiv")
cargarAportesComisiones(selectAfp);

// OPERACIONES
const aporteObligatorio = (sueldo: number, afp:number) => sueldo * afp;
const primaSeguro = (sueldo: number, afp:number) => sueldo * afp;
const comisionAFP = (sueldo: number, afp:number) => sueldo * afp;
const sueldoNeto = (sueldo: number, aporte: number, prima: number, comision: number) => sueldo - aporte - prima - comision;

// Aparcion y desaparicion de tablas
formPlanillaBasica.addEventListener('submit', e => {
  e.preventDefault()
  
  // info de la tabla
  infotable();
  // showAndHideTable(tableDiv);
})

function infotable(){
  if (!selectAfp) throw new Error("No se encontro el afpInput")
  const idAporteComision = selectAfp.value;
  const findAporteComision = aportesComisiones.find(a => a.id === parseInt(idAporteComision))
  if (!findAporteComision) throw new Error("No se encontro el aporte Comision");
  // Datos de tabla

  if (!sueldo) throw new Error("No se encontro el inputEmail1")
  const ingresoBruto = parseInt(sueldo.value);
  // const sueldoBruto= document.querySelector<HTMLTableElement>('#sueldo-bruto')!;
  

  // const nameAfp= document.querySelector<HTMLTableElement>('#select-afp')!;
    // nameAfp.innerText=`${findAporteComision.name}`;

  const resultAporte=aporteObligatorio(ingresoBruto,findAporteComision.aporteObligatorio).toFixed(2);
  // const aporteAfp= document.querySelector<HTMLTableElement>('#aporte-obligatorio')!;
  // aporteAfp.innerText=`${resultAporte.toFixed(2)}`;

  const resultSeguro=primaSeguro(ingresoBruto,findAporteComision.primaSeguro).toFixed(2);
  // const seguroAfp= document.querySelector<HTMLTableElement>('#prima-seguro')!;
    // seguroAfp.innerText=`${resultSeguro.toFixed(2)}`;

  const resultComision=comisionAFP(ingresoBruto,findAporteComision.comision).toFixed(2);
  // const comisionAfp= document.querySelector<HTMLTableElement>('#comision-afp')!;
    // comisionAfp.innerText=`${resultComision.toFixed(2)}`;
    

  const resultNeto=sueldoNeto(ingresoBruto,resultAporte,resultSeguro,resultComision).toFixed(2);
  // const netoPlanilla= document.querySelector<HTMLTableElement>('#sueldo-neto')!;
    // netoPlanilla.innerText=`${resultNeto.toFixed(2)}`;

  // Generar HTML
    const row = document.createElement('tbody');
        row.innerHTML = `
        <tr>
            <td id="sueldo-bruto">${ingresoBruto}</td>
            <td id="select-afp">${findAporteComision.name}</td>
            <td id="aporte-obligatorio">${resultAporte}</td>
            <td id="prima-seguro">${resultSeguro}</td>
            <td id="comision-afp">${resultComision}</td>
            <td id="sueldo-neto">${resultNeto}</td>
        </tr>
        `;
        // Se agrega al tbody
  tablePlanilla?.appendChild(row);
}

