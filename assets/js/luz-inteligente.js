class LuzInteligente extends Dispositivo {
    constructor (nombre, ubicacion, color = "Blanco"){
        super (nombre, ubicacion)
        this.color = color;
    };

    cambiarColor (nuevoColor){
        this.color = nuevoColor;
        console.log(`🎨 Luz ${this.nombre} cambió a color ${this.color}`);
    }

    encender(){
        super.encender();
        console.log(`🟢 ${this.nombre} Encendido con color ${this.color}`);
    }
};
