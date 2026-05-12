import bcrypt from 'bcrypt';
import config from './servicios/config.js'

const credenciales = [
    { usuario: 'demo', pass: 'demo'},
    { usuario: 'test', pass: 'test'},
    { usuario: 'otro', pass: '123'},
];

credenciales.forEach(async (credencial) => {
    const hash = await bcrypt.hash(credencial.pass, config.seguridad.saltRounds);
    console.log(`Credencial: ${JSON.stringify(credencial)}, hash: ${hash} `);
})

const result = await bcrypt.compare('test', '$2b$10$heWzkHacxT6OheZPm.UezeWGH9lzR.2mn0cenuKGSe8hnhTVohmV6');

console.log(`Result: ${result}`);
