// -------- POO ---------
class Animal {

    // Constructor que siempre debe tener parametros y no obliga a pasar valores de todos los parametros al crear objs
    constructor(nombre, edad, color, raza) {
        this.nombre = nombre;
        this.edad = edad;
        this.color = color;
        this.raza = raza;
    }

    // Método
    dormir() {
        return `Mi mascota ${this.nombre} duerme porque ya tiene ${this.edad} años`;
    }

    comer() {
        return `${this.nombre} ayer se comió una galleta`
    }
}

const miMascota1 = new Animal("Miley", 10, "blanco", "chihuahua");
const miMascota2 = new Animal("Roxanna", 3, "blanco");
const miMascota3 = new Animal("Pelos", 2);

console.log(miMascota1);
console.log(miMascota1.dormir());
console.log(miMascota2);
console.log(miMascota2.dormir());