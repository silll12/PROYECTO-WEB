const validacion = {
    
    boleta: /^(PE|PP)\d{8}$|^\d{10}$/,
    telefono: /^\d{10}$/,
    nombre: /^[A-Za-záéíóúÁÉÍÓÚñÑüÜ]+(?: [A-Za-záéíóúÁÉÍÓÚñÑüÜ]+){1,3}$/,
    curp: /^[A-Z]{4}\d{6}[A-Z]{6}[A-Z0-9]{2}$/,
    correo: /^[a-zA-Z0-9._%+-]+@alumno\.ipn\.mx+$/

};

