//manipulação de arquivos com NODEJS
const fs = require('fs').promises;  //.promsies para poder utilizar promises com os métodos
const path = require('path');

//fs.readdir(path.resolve(__dirname)) //obter somente os arquivos dentro do diretório
//.then(files => console.log(files))
//.catch(e => console.log(e))

//recebe o diretório principal
async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

//caminha pelos diretórios, exibindo os arquivos
async function walk(files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        if (stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }
        //expressões regulares
        if(/\.git/g.test(fileFullPath)) continue;           //ignora a pasta .git
        if (/node_modules/g.test(fileFullPath)) continue;   //ignora a pasta node.modules
        

        console.log(fileFullPath);
    }
}

readdir('C:/Users/Vinicius/Desktop/Estudos/');