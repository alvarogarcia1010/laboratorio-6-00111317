var arreglo = [];

function userInsert (nombre, apellido, fechaNacimiento, numeroTelefono, correoElectronico )
{
    var user = {nombre, apellido, fechaNacimiento, numeroTelefono, correoElectronico};

    arreglo.push(user);

    return user;
}