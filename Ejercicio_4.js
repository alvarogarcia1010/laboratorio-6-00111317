function sumar(arreglo) 
{
    console.log(arreglo);
    if(arreglo.length % 2 == 0) 
    {
        for(let i=0; i<arreglo.length/2; i++) 
        {
            console.log(arreglo[i] + " + " + arreglo[arreglo.length - (1+i)] + " = " + (arreglo[i] + arreglo[arreglo.length - (1+i)]));
        }
    }else
    {
        for(let i=0; i<Math.floor(arreglo.length/2); i++) 
        {
            console.log(arreglo[i] + " + " + arreglo[arreglo.length - (1+i)] + " = " + (arreglo[i] + arreglo[arreglo.length - (1+i)]));
        }
        console.log(arreglo[Math.floor(arreglo.length/2)] + " + " + arreglo[Math.floor(arreglo.length/2)] + " = " + (arreglo[Math.floor(arreglo.length/2)] * 2));
    }
    return;
}
