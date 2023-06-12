const fs = require('fs');
//With this library you can write, append, rename, remove(unlink)

//Create and write a file

// fs.writeFile('test.txt','Olá Node JS', err =>{
//     console.log(err)
// })

//Write more things in a file
fs.appendFile('test.txt',' Mais Ola Node', err =>{
    console.log(err)
})