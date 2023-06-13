const http = require('http');
const server = http.createServer();
const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://admin:Password1@mongo:27017/test?authSource=admin');

    const kittySchema = new mongoose.Schema({
        name: String
    });

    const Kitten = mongoose.model('Kitten', kittySchema);

    const misty = new Kitten({ name: 'Misty' });
    const fluffy = new Kitten({ name: 'Fluffy' });

    await misty.save();
    await fluffy.save();

    const kittens = await Kitten.find();
    console.log(kittens);
}

main().catch(err => console.log(err));