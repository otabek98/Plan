const mongodb = require('mongodb');
const http = require('http');

let db;
const connectionString = 'mongodb+srv://Otabek:Cb9iaRtiRGH2b4zi@cluster0.5fhlo5i.mongodb.net/Reja';

mongodb.connect(
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) console.log('Error in connection MongoDB');
        else {
            console.log('MongoDB connection succed');
            module.exports = client
            const app = require('./app');
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function () {
                console.log(`The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`);
            });
        }
    },
);
