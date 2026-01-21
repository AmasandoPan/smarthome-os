class Dispositivo {
  #encendido;
  constructor(nombre, ubicacion) {
    this.nombre = nombre;
    this.ubicacion = ubicacion;
    this.#encendido = false;
  }

  encender() {
    console.log(`🟢 ${this.nombre} Encendido `);
    this.#encendido = true;
  }

  apagar() {
    console.log(`🔴 ${this.nombre} Apagado `);
    this.#encendido = false;
  }

  get estado() {
    return this.#encendido ? "Encendido" : "Apagado";
  }
}
