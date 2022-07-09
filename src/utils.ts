import { aportesComisiones } from "./data";

export const cargarAportesComisiones = (selectAfp: HTMLInputElement) => {
    let templateHtml = "";
    aportesComisiones.forEach(e => {
        templateHtml += `
        <option value='${e.id}'>${e.name}</option>
        `;
    })

    selectAfp.innerHTML = templateHtml;
}

export const showAndHideTable = (tablePlanilla: HTMLTableElement) => {
    tablePlanilla.classList.toggle("d-none");
}