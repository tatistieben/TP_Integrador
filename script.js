//funcion de calculo de valor total de las entradas
// Sin descuentos 

   const valores = 200 
  
   function hacerClick() {

        let entradas = document.getElementById("cantidadEntradas").value //tomo cantidad de entradas
        let categoria = document.getElementById("categoria").value
            const valorOriginal = entradas * valores
        
            //agrego las condicionales según selección de categoría
                
                if (categoria == 1){
                        var calcularEntradas = ((valorOriginal) * 0.2 )
                }
                else if (categoria == 2){
                    var calcularEntradas = ((valorOriginal) * 0.5 )
                }
                            
                else if (categoria == 3){
                    var calcularEntradas = ((valorOriginal) * 0.85 )
                }
                else {
                   alert("Por favor seleccione una categoría")
                }
       
        document.getElementById("totalaPagar").innerHTML= "Total a Pagar: $" + calcularEntradas //imprimo en el html el valor
     }

     function validar() {

        var validarCantidad = document.getElementById("cantidadEntradas").value

            if( validarCantidad <=0)  {
                    alert("Debes ingresar una cantidad válida")      
             }
             else if( validarCantidad >=5)  {
                alert("No puede comprar mas de 5 entradas")      
         }
     }
    
      // si categorías es igual a Estudiante aplicar 80% de descuento
      // si categorías es igual a Trainee aplicar 50% de descuento
      // si categorías es igual a Junior aplicar 15% de descuento


    
      
    
   