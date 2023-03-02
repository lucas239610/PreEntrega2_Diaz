let MiNombre=prompt("Escriba su nombre");
        console.log("El usuario dijo que su nombre es")
        if (!isNaN(MiNombre)){
            alert("No debe poner numeros en este campo")
            console.error("El usuario puso un numero donde va su nombre: " + MiNombre)
        }
        let MiApellido=prompt("Escriba su apellido")
        console.log("El usuario dijo que su apellido es: "+MiApellido)
        if (!isNaN(MiApellido)){
            alert("No debe poner numeros en este campo")
            console.error("El usuario puso un numero donde va su nombre")
        }
        const MiAntiguedad=parseFloat(prompt("Escriba su antiguedad en la empresa"))
        console.log("El usuario dijo que su antiguedad es " + MiAntiguedad)
        if (isNaN(MiAntiguedad)){
            alert("Debe poner numeros en este campo")
            console.error("El usuario puso un valor invalido")
        }
        const MisDias=parseInt(prompt("Escriba la cantidad de dias que trabaja en el mes"))
        console.log("El usuario dijo que la cantidad de dias que trabajo en el mes son " + MisDias);

        if (MisDias > 31){
            alert("La cantidad de dias que trabajo en el mes no puede ser mayor a 31")
            console.error("El usuario puso un valor que no corresponde")
        }else if(MisDias <0){
            alert("La cantidad de dias que trabajo en el mes no puede ser menor a 1")
            console.error("El usuario puso un valor que no corresponde")
        }
        else if (isNaN(MisDias)){
            alert("Debe poner numeros en este campo")
            console.error("El usuario puso un valor invalido")
        }
        //con esta condicion aclaramos que el usuario no califica para el bono por el presentismo
        else if(MisDias<21){
            alert("con la cantidad de dias que trabajo no califca para el bono por presentismo ni para el bono adicional")
            console.info("el usuario no califica para el bono de presentismo")
        }
        
        const valores=[80000,110000,150000];
        console.log(valores);
        for (let i = 0; i < 3; i++){
            console.log(valores[i]);
        }
        // la antiguedad dandole al usuario la informacion de cuanto es el valor de su sueldo segun la antiguedad que tenga
        let ValorAntiguedad;
        
        (MiAntiguedad < 3 && MiAntiguedad >= 0)? ValorAntiguedad = 80000 : (MiAntiguedad >= 3 && MiAntiguedad < 5)? ValorAntiguedad = 110000 :(MiAntiguedad>= 5)? ValorAntiguedad = 150000 : (alert("El valor es invalido por favor ingresar la cantidad de años en numero"))
        
        //declaramos una variable para dar la informacion si corresponde el bono por presentismo segun la cantidad de dias informados
        var BonoPresentismo=((MisDias>= 20 && MisDias < 32) ? BonoPresentismo = 10000 :0)
        //aclaramos cual es el sueldo total para poder informar al usuario
        const SueldoTotal= (ValorAntiguedad + BonoPresentismo )
        //y por ultimo damos toda la informacion solicitada
        document.write("Hola "+ MiNombre + " " + MiApellido + " con sus " + MiAntiguedad + " años de antiguedad a un valor mensual de " + ValorAntiguedad  + "\n Usted cuenta con un  bono de presentismo " + "\n Lo que significa que su sueldo final es: $" + SueldoTotal)