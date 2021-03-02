// Clase PADRE (SUPERCLASE)
class Mascota {
    constructor(nombre, patas) {
        this.nombre = nombre;
        this.patas = patas;
    }

    comer() {
        return `${this.nombre} está comiendo`;
    }
}

// CLASE HIJA (SUBCLASE)
class Perrito extends Mascota {
    constructor(nombre, patas, color) {
        super(nombre, patas);
        this.color = color;
    }

    ladrar() {
        return `wooof`;
    }
}

class Tortuga extends Mascota {
    constructor(nombre, patas, tipo) {
        super(nombre, patas);
        this.tipo = tipo;
    }

    nadar() {
        return `Mi tortuga de tipo ${this.tipo} llamada ${this.nombre} nada 1km/hr`
    }
}

class Gato extends Mascota {
    constructor(nombre, patas, timido) {
        super(nombre, patas);
        this.timido = timido;
    }

    maullar() {
        return `Mi gato ${this.nombre} maulla porque es timido:${this.timido}`
    }
}

class Vaca extends Mascota {
    constructor(nombre, patas, leche) {
        super(nombre, patas);
        this.leche = leche;
    }

    muge() {
        return `Mi vaca ${this.nombre} muge porque da leche:${this.leche}`
    }
}


const perrito1 = new Perrito("Pelos", 4, "blanco");
console.log(perrito1.comer()); // comer es el método de la clase padre
const tortuga = new Tortuga("Camelia", 4, "caguama");
console.log(tortuga.nadar());
console.log(tortuga.comer());
const gatito = new Gato("Cheto", 3, true);
console.log(gatito.maullar());
console.log(gatito.comer());
const vaca = new Vaca("Penelope", 4, false);
console.log(vaca.muge());
console.log(vaca.comer());