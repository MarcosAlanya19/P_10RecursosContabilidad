import { aportesComisiones } from "./dataAFP";

// Ingresa los datos de SELECCIONA AFP
export const cargarAportesComisiones = (selectAfp: HTMLInputElement) => {
    let templateHtml = "";
    aportesComisiones.forEach(e => {
        templateHtml += `
        <option id="select" value='${e.id}'>${e.name}</option>
        `;
    })
    selectAfp.innerHTML = templateHtml;
}

// TOGGLE desaparece y vuelve a aparecer la tabla
// export const showAndHideTable = (tablePlanilla: HTMLElement) => {
//     tablePlanilla.classList.toggle("d-none");
// }