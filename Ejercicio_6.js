function encriptar(cadena)
{
    cadena = cadena.toUpperCase();
    encriptado = "";
    for(let letra of cadena){
        switch(letra)
        {
            case 'M':
                encriptado += '0';
                break;

            case 'U':
                encriptado += '1';
                break;
            case 'R':
                encriptado += '2';
                break;
            case 'C':
                encriptado += '3';
                break;
            case 'I':
                encriptado += '4';
                break;
            case 'E':
                encriptado += '5';
                break;
            
            case 'L':
                encriptado += '6';
                break;

            case 'A':
                encriptado += '7';
                break;

            case 'G':
                encriptado += '8';
                break;

            case 'O':
                encriptado += '9';
                break;

            default:
                encriptado += letra;
                break;
        }
    }
    
    return encriptado;
}