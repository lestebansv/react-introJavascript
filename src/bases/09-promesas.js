import { getHeroeById } from '../src/bases/08-imp-exp';

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {

//         const p1 = getHeroeById(2);
//         console.log(p1);

//         // resolve(p1);

//         reject('No se pudo encontrar el héroe');
//     }, 2000);

// });

// promesa.then((heroe) => {
//     console.log('Then de la promesa ', heroe)
// })
//     .catch((err) => {
//         console.warn(err);
//     })


const getHeoreByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const p1 = getHeroeById(id);

            if (p1) resolve(p1);
            else reject('No se pudo encontrar el héroe');
        }, 2000);

    });
}

getHeoreByIdAsync(4)
    .then(console.log)
    .catch(console.warn)