function crearUsuario() {

  class Usuario {
    constructor(opciones) {
      this.usuario = opciones.usuario;
      this.nombre = opciones.nombre;
      this.email = opciones.email;
      this.password = opciones.password;
    }
    saludar() {
      return `Hola, mi nombre es ${this.nombre}`;
    }
  }

  return Usuario;

}



function agregarMetodoPrototype(Constructor) {

  Constructor.prototype.saludar = function() {
    return 'Hello World!';
  }

}

function agregarStringInvertida() {

  String.prototype.reverse = function(){
    return this.split('').reverse().join('')
  }

}

  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
    }
}

Persona.prototype.detalle = function(){
  return {
    nombre : this.nombre,
    apellido : this.apellido,
    edad : this.edad,
    domicilio : this.domicilio
  }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {

  const persona1 = new Persona(nombre, apellido, edad, dir);
  return persona1;

}
  
function agregarMetodo() {

  Persona.prototype.datos = function(){
    return `${this.nombre}, ${this.edad} años`
  }

}