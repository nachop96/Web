
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

Persona1.hablar();
console.log(Persona1)

for (const i in Persona1) {
    console.log(Persona1[i])
    
}