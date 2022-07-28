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
  // Agregar tabla
  infotable();
  // Quitar tabla
  
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

  const resultAporte=aporteObligatorio(ingresoBruto,findAporteComision.aporteObligatorio);

  const resultSeguro=primaSeguro(ingresoBruto,findAporteComision.primaSeguro);

  const resultComision=comisionAFP(ingresoBruto,findAporteComision.comision);
  
  const resultNeto=sueldoNeto(ingresoBruto,resultAporte,resultSeguro,resultComision).toFixed(2);
  

  // Generar HTML
    const row = document.createElement('tbody');
        row.innerHTML = `
        <tr >
            <td>${ingresoBruto}</td>
            <td>${findAporteComision.name}</td>
            <td>${resultAporte}</td>
            <td>${resultSeguro}</td>
            <td>${resultComision}</td>
            <td>${resultNeto}</td>
            <td>
            <a id="result" href="#" class="borrar-curso"> X </a>
            </td>
        </tr>
        `;
        // Se agrega al tbody
  tablePlanilla?.appendChild(row);
}
const result = document.querySelector<HTMLLinkElement>('#result')!;
result.addEventListener('click' , e => {
      //Elimina del arreglo por el data-id
      limpiarHTML();
      // articulosCarrito = articulosCarrito.filter( curso=> curso.id !== cursoId)
      // carritoHTML();
  }
)

function limpiarHTML(){
  // contenedorCarrito.innerHTML = '';
  while(tablePlanilla?.firstChild){
    tablePlanilla.removeChild(tablePlanilla.firstChild);
  }
}
