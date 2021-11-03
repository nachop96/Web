

class Persona{

    constructor (nombre,edad,frase){

    this.nombre = nombre;
    this.edad = edad;
    this.frase = frase;
    
}

hablar() {
    console.log('Hola soy ' + this.nombre + ' tengo '+this.edad +' años. Y me gusta mucho la frase "'+this.frase+'"')

}

}

const Persona1 = new Persona('Igna',24,'No hay mal que por bien no venga');


localStorage.setItem('Primeraxd','Hola Scoly');

let Primer = localStorage.getItem('Primeraxd')

console.log(Primer);



