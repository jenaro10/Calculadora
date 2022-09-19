
const limpiar=()=>{
    document.getElementById("miFomulario").reset();
}

const sumar=()=>{
    const numero1=parseInt(document.getElementById('valor1').value);
    const numero2=parseInt(document.getElementById('valor2').value);
    alert("El resultado de la suma es: "+(numero1+numero2))
}   

const restar=()=>{
    const numero1=parseInt(document.getElementById('valor1').value);
    const numero2=parseInt(document.getElementById('valor2').value);
    alert("El resultado de la resta es: "+(numero1-numero2))
} 

const multiplicar=()=>{
    const numero1=parseInt(document.getElementById('valor1').value);
    const numero2=parseInt(document.getElementById('valor2').value);
    alert("El resultado de la multiplicacion es: "+(numero1*numero2))
} 

const dividir=()=>{
    const numero1=parseInt(document.getElementById('valor1').value);
    const numero2=parseInt(document.getElementById('valor2').value);
    alert("El resultado de la division es: "+(numero1/numero2))
} 


