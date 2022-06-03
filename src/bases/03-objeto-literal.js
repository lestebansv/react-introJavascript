
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 5512135,
        lat: 14.3216,
        lng: 34.1351
    }
};

// console.table({ persona });

const persona2 = { ...persona };
persona2.nombre = 'Peter';
persona2.apellido = 'Parker';
persona2.edad = 18;
persona2.direccion.ciudad = 'Miami';

console.log(persona);
console.log(persona2);