function mostrar(asientos){
  var tamaño = asientos.length;
  var sPares = "";
  var sImpares = "";
  for(var i = 0; i < tamaño; i++){
    var e = (asientos[i] != undefined)?"*":" ";
    if(i%2 == 0){
      sImpares += (i+1) + "[ " + e + " ]";
    } else {
      sPares += (i+1) + "[ " + e + " ]";
    }
  }
  return sImpares + "\n" + sPares + "\n" + "\n";
}

function reserva () {
   var N = 10; // Número de asientos
   var asientos = [];
   for (var i = 0; i < N; i++) {
      asientos[i] = undefined;
   }
   var mensaje = "0: Salir\n" +
                 "1: Reservar  asiento\n" +
                 "2: Liberar asiento \n" +
                 "3: Seleccionar asiento \n"+
                 "4: Buscar pasajero por DNI \n";

   var option = 0;
   while (true){
      var str = mostrar(asientos) + mensaje + " >> ingrese opcion:" ;
      option = parseInt( prompt( str )  );
      if (option == 0) {
         break;
      }else if (option == 1) {
         str = "Seleccione asiento: \n" + mostrar(asientos);
         var nro = parseInt( prompt( str )  );
         if (nro => 1 && nro <= N) {
            var name =  prompt( "Nombre del pasajero" )  ;
            var id = parseInt( prompt( "DNI del pasajero"  ) );
            asientos[nro - 1] = {
               nombre : name,
               dni: id,
               asiento : nro
            };
         }
      }else if (option == 2) {
         str = "Seleccione asiento: \n" + mostrar(asientos);
         var nro = parseInt( prompt( str )  );
         if (nro >0 && nro <= N) {
            asientos[nro - 1] = undefined;
         }
       }else if (option == 3) {
         str = "Seleccione asiento: \n" + mostrar(asientos);
         var nro = parseInt( prompt( str )  );
         if (nro > 0 && nro <= N) {
            str = mostrar(asientos) +
                     "Nombre del pasajero: " + asientos [nro - 1].nombre +
                     "DNI del pasajero: " + asientos [nro - 1].dni;

            alert (str);
         }
      }else if (option == 4) {
        str = "Ingrese el número de DNI";
        var buscarDNI = parseInt( prompt (str) );
        for (var i = 0; i < asientos.length; i++){
          if(asientos[i] != undefined){
            if(buscarDNI == parseInt(asientos[i].dni)){
              str = "Nombre del pasajero: " + asientos [i].nombre + "\nDNI: " + asientos [i].dni +"\nAsiento: " + asientos [i].asiento;
              break;
            } else {
              str = "DNI no se encuentra registrado";
            }
          }
        }
        alert (str);
      }
    }
  }
   //imprimir(asientos);
reserva();
