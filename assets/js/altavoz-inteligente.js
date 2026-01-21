class AltavozInteligente extends Dispositivo{
    constructor (nombre, ubicacion, volumen = 10){
        super (nombre, ubicacion)
        this.volumen = volumen;
    }

    ajustarVolumen(nivel){
        if(nivel > 100 ){
            this.volumen = 100;
        } else if (nivel < 0){
            this.volumen = 0;
        } else {
            this.volumen = nivel;
        }

        console.log(console.log(`Volumen de ${this.nombre} ajustado a: ${this.volumen}`));
        
    }
}
