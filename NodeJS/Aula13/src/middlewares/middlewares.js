exports.middlewareGlobal = (req, res, next) => {
    
    if (req.body.cliente) { //nome do input
        console.log();
        console.log(`Postou nome do clente ${req.body.cliente}`);
        console.log();
    }

    next();
}

exports.outroMiddleware = (req, res, next) => {
    console.log();
    console.log('Sou o outro middleware');
    console.log();
    next();
}