class Usuario {

    constructor(user, pass) {
        this.user = user;
        this.pass = pass;
    }

}

function TomarDatos() {
    

  
    let user = document.getElementById("inputUser").value;
    let pass = document.getElementById("inputPassword").value;
    UserLoggin(user,pass);
}


function UserLoggin(usuario, password) {

    if (!localStorage.getItem("listaUsuarios")) {
        alert('No existen usuarioss')
    }

    else {

    
        let almacenados = JSON.parse(localStorage.getItem("listaUsuarios"));
        let encontrado = false;
        

        let i = 0;

        
        while (!encontrado && i != almacenados.length) {


            if (almacenados[i].user == usuario && almacenados[i].pass == password) {
                encontrado = almacenados[i];
    
            }
    
            i++;
    
        }

        if (!encontrado) {
            alert('Usuario y/o contraseña incorrectas')
            
        }
        else{

            alert('¡Hola '+usuario+'!')
        }

        console.log(encontrado)
        return encontrado;

    }



    if (!localStorage.getItem("listaUsuarios")) {
        return false;
    }


    let almacenados = JSON.parse(localStorage.getItem("listaUsuarios"));
    let encontrado = false;

    let i = 0;

    while (!encontrado && i != almacenados.length) {


        if (almacenados[i].user == usuario) {
            encontrado = almacenados[i];

        }

        i++;

    }

    return encontrado;

}






    // let almacenados = JSON.parse(localStorage.getItem("listaUsuarios"));
    // let encontrado = false;

    // let i = 0;

    // while (!encontrado && i != almacenados.length) {


    //     if(almacenados[i].user == usuario){
    //         encontrado = almacenados[i];

    //     }

    //     i++;

    // }

    // return encontrado;














// hablar() {
//     console.log('Hola soy ' + this.nombre + ' tengo '+this.edad +' años. Y me gusta mucho la frase "'+this.frase+'"')

// }

// }

// const Persona1 = new Persona('Igna',24,'No hay mal que por bien no venga');


// localStorage.setItem('Primeraxd','Hola Scoly');

// let Primer = localStorage.getItem('Primeraxd')

// console.log(Primer);



