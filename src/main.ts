import './style.css'
import './bootstrap.css'

// DOM
const sueldo=document.getElementById('exampleInputEmail1') as HTMLInputElement; //ingreseSueldoBruto
const afp=document.getElementById('disabledSelect') as HTMLInputElement; // selectAfp
const afpContent= afp.value;
const addTodo=document.getElementById('add-todo') as HTMLFormElement;//Formulario
const sueldoBruto=document.getElementById('sueldo-bruto') as HTMLTableElement;//tablaSueldo

// OPERACIONES
const aporteObligatorio=(sueldo:number)=>sueldo*0.10;
const primaSeguro=(sueldo:number)=>sueldo*0.0174;
const comisionAFP=(sueldo:number,comision:any)=>sueldo*comision;
const sueldoNeto=(sueldo:number,aporte:number,prima:number,comision:number)=>sueldo-aporte-prima-comision;

switch(afpContent){
  case 'HABITAD': 0.023 ;break ;
  case 'INTEGRA': 0.0;break ;
  case 'PRIMA': 0.018;break ;
  case 'PROFUTURO': 0.067;break ;
}

// TABLAS
addTodo.addEventListener('click',e=>{
  e.preventDefault();
  const sueldoValue=Number(sueldo.value);
  const result = document.getElementById('sueldo-bruto') as HTMLInputElement; ;
  result.innerText= `${sueldoValue}`;
})// sueldoBruto

addTodo.addEventListener('click',e=>{
  e.preventDefault();
  const sueldoValue=Number(sueldo.value);
  const calculaAporte =aporteObligatorio(sueldoValue);
  const result = document.getElementById('aporte-obligatorio') as HTMLInputElement;
  result.innerText= `${calculaAporte}`;
}) // aporteObligatorio

addTodo.addEventListener('click',e=>{
  e.preventDefault();
  const sueldoValue=Number(sueldo.value);
  const calculaPrima =primaSeguro(sueldoValue);
  const result = document.getElementById('prima-seguro') as HTMLInputElement;
  result.innerText= `${calculaPrima}`;
}) // primaSeguro

addTodo.addEventListener('click',e=>{
  e.preventDefault();
  const sueldoValue=Number(sueldo.value);
  const calculaComision =comisionAFP(sueldoValue,afpContent);
  const result = document.getElementById('comision-afp') as HTMLInputElement;
  result.innerText= `${calculaComision}`;
}) // comisionAfp

addTodo.addEventListener('click',e=>{
  e.preventDefault();
  const sueldoValue=Number(sueldo.value);
  const calculaAporte =aporteObligatorio(sueldoValue);
  const calculaPrima =primaSeguro(sueldoValue);
  const calculaComision =comisionAFP(sueldoValue,afpContent);
  const calculaNeto =sueldoNeto(sueldoValue,calculaAporte,calculaPrima,calculaComision);
  const result = document.getElementById('sueldo-neto') as HTMLInputElement;
  result.innerText= `${calculaNeto}`;
}) // sueldoNeto