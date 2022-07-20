export interface AporteComision {
    id: number;
    name: string;
    aporteObligatorio: number;
    primaSeguro: number;
    comision: number;
}

export const aportesComisiones: AporteComision[] = [
    {
        id: 0,
        name: "",
        aporteObligatorio: 0,
        primaSeguro: 0,
        comision: 0,
    },
    {
        id: 1,
        name: "Prima Flujo",
        aporteObligatorio: 0.10,
        primaSeguro: 0.0174,
        comision: 0.0160,
    },
    {
        id: 2,
        name: "Prima Mixta",
        aporteObligatorio: 0.10,
        primaSeguro: 0.0174,
        comision: 0.0018,
    },
    {
        id: 3,
        name: "Habitad Flujo",
        aporteObligatorio: 0.10,
        primaSeguro: 0.0174,
        comision: 0.0147,
    },
    {
        id: 4,
        name: "Habitad Mixta",
        aporteObligatorio: 0.10,
        primaSeguro: 0.0174,
        comision: 0.0023,
    },
    {
        id: 5,
        name: "Integra Flujo",
        aporteObligatorio: 0.10,
        primaSeguro: 0.0174,
        comision: 0.0155,
    },
    {
        id: 6,
        name: "Integra Mixta",
        aporteObligatorio: 0.10,
        primaSeguro: 0.0174,
        comision: 0.0000,
    },
    {
        id: 7,
        name: "Profuturo Flujo",
        aporteObligatorio: 0.10,
        primaSeguro: 0.0174,
        comision: 0.0169,
    },
    {
        id: 8,
        name: "Profuturo Flujo",
        aporteObligatorio: 0.10,
        primaSeguro: 0.0174,
        comision: 0.0067,
    }
];