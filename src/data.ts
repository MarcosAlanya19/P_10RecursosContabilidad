export interface AporteComision {
    id: number;
    name: string;
    aporteObligatorio: number;
    primaSeguro: number;
    comision: number;
}

export const aportesComisiones: AporteComision[] = [
    {
        id: 1,
        name: "Prima Flujo",
        aporteObligatorio: 10,
        primaSeguro: 1.74,
        comision: 1.60,
    },
    {
        id: 2,
        name: "Prima Mixta",
        aporteObligatorio: 10,
        primaSeguro: 1.74,
        comision: 0.18,
    },
    {
        id: 3,
        name: "Habitad Flujo",
        aporteObligatorio: 10,
        primaSeguro: 1.74,
        comision: 1.47,
    }
];