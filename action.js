function validacion_email() 
        {   
            valor = document.getElementById("email").value;
            valor_nombre = document.getElementById("nombre").value;
            mensaje_nombre = document.getElementById('mensaje_nombre');
            mensaje_email= document.getElementById('mensaje');

            mensaje_nombre.innerHTML = "";
            mensaje_email.innerHTML = "";
            if( valor_nombre == null || valor_nombre.length == 0) 
            {
                
                mensaje_nombre.innerHTML = "Complete el Nombre";
                elemento = document.getElementById('nombre');
                elemento.focus();
                
                return false;
            }

              
             else   if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|ar)+$/.test(valor)))
             {
                 mensaje_email.innerHTML = "No es una direccion de email correcta" ;
                 elemento = document.getElementById('email');
                 elemento.value = '';
                 elemento.focus();
 
                 return false;
             }
           
            
            return true;          
        }

        