import { Automovel } from "./Auto.js";

class Car extends Automovel {

    constructor(marca, modelo, ano) {
        super(marca)
    }

    comprar() {
        this.setModelo("Porsche 911")
        this.setMarca("Porsche")
        this.setAno(2026)

        return "Seu modelo é: " + this.getModelo() + "\n" 
            + "A marca do carro é: " + this.getMarca() + "\n"
            + "O ano do carro é:" + this.getAno()
    }
}

class Principal {
    main() {
        const auto = new Car()
        console.log(auto.comprar())
    }
}

const auto = new Car()
console.log(auto.comprar())