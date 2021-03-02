class Automovil {

    constructor(color, marca, deportivo) {
        this.color = color;
        this.marca = marca;
        this.deportivo = deportivo;
    }

    arranca() {
        return `Mi carro color ${this.color} es de la marca ${this.marca} y no funciona :(`;
    }

    esDeportivo() {
        return `porque ${this.deportivo} deportivo`;
    }
}

const myCar = new Automovil("rojo", "toyota", false);
console.log(myCar.arranca());
console.log(myCar.esDeportivo());

const myCar2 = new Automovil("azul", "audi", true);
console.log(myCar2.arranca());
console.log(myCar2.esDeportivo());

const myCar3 = new Automovil("blanco", "mercedes", false);
console.log(myCar3.arranca());
console.log(myCar3.esDeportivo());