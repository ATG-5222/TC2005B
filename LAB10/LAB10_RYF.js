const http = require('http');

const fs = require("fs");
const readline = require('readline');

const clasesbs = [];
const accounts = [];

function leer_linea (txt,array){
    const lectura = readline.createInterface({
        input: fs.createReadStream(txt),
        output: process.stdout,
        console: false
    });
    lectura.on('line', function(linea) {
        array.push(linea)
    });
}

leer_linea('CLASES_B&S.txt',clasesbs);
leer_linea('CUENTAS_B&S.txt',accounts);

//const clasesbs = ["Force master","Zen archer","Astromancer"];
//const accounts = ["Aldo5222", "DELL_i7"];

const server = http.createServer( (request, response) => {
    if (request.url === '/') { //Creación de la pagína de inicio
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<meta charset="utf-8">');
        response.write('<title>LAB10-ATG</title>');
        response.write('</head><body>');
        response.write('<h1 id="principal">Prueba del laboratorio 10: Rutas y formas.</h1>');
        response.write('<p>Aldo Tena García - A01275222</p>')
        response.write('<br><br>');
        response.write('<p>Bienvenido a la pagina principal.</p>')
        response.write('<p><strong>/TombRaider</strong> para la pagína de Tomb Raider.</p>')
        response.write('<p><strong>/Blade&Soul</strong> para la pagína de Blade & Soul.</p>')
        response.write('<p><strong>/CallofCthulhu</strong> para la pagína de Call of Cthulhu.</p>')
        response.write('<br><br>');
        response.write('<footer>Construcción de software y toma de decisiones.</footer>')
        response.write('</body>');
        response.end();
    } else if (request.url === '/TombRaider') { //Creación de la pagína de Tomb Raider
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<title>Tomb Raider</title>');
        response.write('<meta charset="utf-8">');
        response.write('</head><body>');
        response.write('<h1 id="principal">Tomb Raider</h1>');
        response.write('<h2>Tomb Raider es una aventura de acción aclamada por la crítica que explora los orígenes de Lara Croft y su transformación, de joven inexperta a dura superviviente.</h2>');
        response.write('<br><br>');
        response.write('<a href="/">Regresar a la pagina principal</a>');
        response.write('</body>');
        response.end();
    } 
    else if (request.url === '/Blade&Soul' && request.method === 'GET') { //Creación de la pagína de Blade & Soul - Metodo GET
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<title>Blade & Soul</title>');
        response.write('<meta charset="utf-8">');
        response.write('</head><body>');
        response.write('<h1 id="principal">Blade & Soul</h1>');
        response.write('<h2>Comienza un viaje heroico para enfrentarte a las fuerzas oscuras y buscar venganza como un maestro de las artes marciales en Blade & Soul, el MMORPG gratuito.</h2>');
        //Impresión de lista de clases
        response.write('<p>Clases presentes dentro del juego:</p>');
        response.write('<ul>');
        for (let clase in clasesbs) {
            response.write('<li>' + clasesbs[clase] + '</li>');
        }
        response.write('</ul>');
        //Impresión de lista de cuentas
        response.write('<p>Cuentas registradas:</p>');
        response.write('<ul>');
        for (let cuenta in accounts) {
            response.write('<li>' + accounts[cuenta] + '</li>');
        }
        response.write('</ul>');
        //Inicio del metodo GET
        response.write('<h2>Aquí nacen las nuevas leyendas:</h2>');
        response.write('<form action="Blade&Soul" method="POST">');
        response.write('<label for="nombre">Ingrese el nuevo usuario: </label> ');
        response.write('<input type="text" id="nombre" name="nombre" placeholder="Nombre de usuario">');
        response.write('<br><br>');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="/">Regresar a la pagina principal</a>');
        response.write('</body>');
        response.end();
    }
    else if (request.url === '/Blade&Soul' && request.method === 'POST') {  //Creación de la pagína de Blade & Soul - Metodo POST
        const datos = [];
        request.on('data', (dato) => {
            datos.push(dato);
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            const nuevo_dato = datos_completos.split('=')[1];
            accounts.push(nuevo_dato);
            fs.appendFile('CUENTAS_B&S.txt',"\n"+nuevo_dato, (err) => {
                if (err) throw err;
             });
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html>');
            response.write('<html lang="es-mx"><head>');
            response.write('<title>Blade & Soul</title>');
            response.write('<meta charset="utf-8">');
            response.write('</head><body>');
            response.write('<h1 id="principal">Blade & Soul</h1>');
            response.write('<h2>Comienza un viaje heroico para enfrentarte a las fuerzas oscuras y buscar venganza como un maestro de las artes marciales en Blade & Soul, el MMORPG gratuito.</h2>');
            //Impresión de lista de clases
            response.write('<p>Clases presentes dentro del juego:</p>');
            response.write('<ul>');
            for (let clase in clasesbs) {
                response.write('<li>' + clasesbs[clase] + '</li>');
            }
            response.write('</ul>');
            //Impresión de lista de cuentas
            response.write('<p>Cuentas registradas:</p>');
            response.write('<ul>');
            for (let cuenta in accounts) {
                response.write('<li>' + accounts[cuenta] + '</li>');
            }
            response.write('</ul>');
            response.write('<br><br>');
            response.write('<a href="/">Regresar a la pagina principal</a>');
            return response.end();
        });
    }
    else if (request.url === '/CallofCthulhu') { //Creación de la pagína de Call of Cthulhu
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<title>Call of Cthulhu</title>');
        response.write('<meta charset="utf-8">');
        response.write('</head><body>');
        response.write('<h1 id="principal">Call of Cthulhu</h1>');
        response.write('<h2>1924. El investigador Pierce estudia la trágica muerte de la familia Hawkins. Sumérgete en un mundo en el que acechan la locura y los horrores cósmicos.</h2>');
        response.write('<br><br>');
        response.write('<a href="/">Regresar a la pagina principal</a>');
        response.write('</body>');
        response.end();
    }  
    else { //Creación de la pagína 404
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html><head>');
        response.write('<meta charset="utf-8">');
        response.write('<title>Sección no encontrada</title>');
        response.write('</head><body>');
        response.write('<h1 id="principal">Pagina no existente, ingrese una dirección valida.</h1>');
        response.write('</body>');
        response.end();
    }
});
server.listen(3000);