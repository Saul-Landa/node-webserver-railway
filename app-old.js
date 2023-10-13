const http = require('http');

 http.createServer( ( req, res ) => {

    //res.writeHead(200, { 'Content-Type': 'application/json' } );
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(200, { 'Content-Type': 'application/cvs' } );

    // const persona = {
    //     id: 1,
    //     nombre: "Saúl Eduardo"
    // }

    // res.write( JSON.stringify(persona) );
    // res.write( 'id, nombre\n')
    // res.write( '1, Saúl\n')
    // res.write( '2, Landa\n')
    // res.write( '3, García\n')

    res.write('Hola Mundo');
    res.end();
})
.listen( 8080 );

console.log('Escuchado el puerto', 8080);