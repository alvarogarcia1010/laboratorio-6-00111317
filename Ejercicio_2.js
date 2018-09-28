function sumArray(array)
{
    total = 0;
    if(arreglo.length <= 0)
    {
      return "El arreglo esta vacio"  
    }
    else
    {
        array.forEach(element => {
            total += element;
        });
    
        console.log("SUMA: " + total);
        console.log("PROMEDIO: " + total/arreglo.length);

        return
    }
}