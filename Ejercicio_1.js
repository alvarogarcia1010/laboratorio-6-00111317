function ocurrenciaNum(number, arreglo)
{
    total = 0;

    arreglo.forEach(element => {
        if(element === number)
            total += 1;
    });

    return total;
}