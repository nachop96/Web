console.log(localStorage.getItem("listaUsuarios"));


class Usuario{

    constructor(user,pass){
        this.user = user;
        this.pass = pass;
    }

}


function Registrar(){

  
    let user = document.getElementById("userRegistro").value;
    let pass = document.getElementById("passRegistro").value;


    let msj ="";
    if (user=="" || pass=="") {
        msj = "Falta llenar campos!"

    }
    else{
        
        if (user.length < 4) {
            
            msj ="El usuario debe tener almenos 4 caracteres "
            
            if (pass.length < 4) {
                msj = msj + "\nLa contraseña debe tener almenos 4 caracteres."
                
            }
        }
        else if(buscarUsuario(user) == false){
            let NewUser = new Usuario(user,pass);
            GuardarUsuarios(NewUser);
            msj ="Registro completo!";


        }
        else{
            msj ='Ya existe ese usuario';

        }
        

        

    }

    alert(msj);
    

}

function GuardarUsuarios(usuarioNuevo) {

    let item = localStorage.getItem("listaUsuarios");
    
    if (item) {
        
        let almacenados = JSON.parse(localStorage.getItem("listaUsuarios"));
        almacenados.push(usuarioNuevo);

        let almacenados_string = JSON.stringify(almacenados);
        localStorage.setItem("listaUsuarios",almacenados_string);

    }
    
    else{

        let almacenados = new Array();
        almacenados.push(usuarioNuevo);
        let almacenados_string = JSON.stringify(almacenados);
        localStorage.setItem("listaUsuarios",almacenados_string);


    }


    
}


function buscarUsuario(usuario) {

    if(!localStorage.getItem("listaUsuarios")){
            return false;
    }

    
    let almacenados = JSON.parse(localStorage.getItem("listaUsuarios"));
    let encontrado = false;

    let i = 0;
    
    while (!encontrado && i != almacenados.length) {

        
        if(almacenados[i].user == usuario){
            encontrado = almacenados[i];

        }

        i++;
        
    }

    return encontrado;


    
}