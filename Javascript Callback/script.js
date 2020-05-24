//Callback são funções executadas após outros serem executados

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

/*function f1() {
    setTimeout(function() {
        console.log('f1');
    }, rand());
}

function f2() {
    setTimeout(function() {
        console.log('f2');
    }, rand());
}

function f3() {
    setTimeout(function() {
        console.log('f3');
    }, rand());
}

f1();
f2();
f3();
*/
//Resolver caso acima

function ff1(callback) {
    setTimeout(function() {
        console.log('ff1');
        if (callback) callback();
    }, rand());
}

function ff2(callback) {
    setTimeout(function() {
        console.log('ff2');
        if (callback) callback();
    }, rand());
}

function ff3(callback) {
    setTimeout(function() {
        console.log('ff3');
        if (callback) callback();
    }, rand());
}

ff1(function(){
    ff2(function() {
        ff3(function(){
            console.log('Olá mundo');
        });
    })
})

//Essa verbosidade foi resolvida com Funções Assíncronas