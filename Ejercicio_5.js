function ocurrenciaTipo(arreglo, type) 
{
    typearreglo = [];
    arreglo.forEach(element => {
        if(typeof element === type) 
        {
            typearreglo.push(element);
        }
    });
    
    return typearreglo;
}