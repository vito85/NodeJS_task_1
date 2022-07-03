// 1  create a directory in its same directory.

// const fs = require("fs");

// // Faile system 
// const path = require("path")

// fs.mkdir(path.join(__dirname,"new catalog"),(err) => {
//     if(err) throw new Error(err)
//     console.log("catalog is crate ")
// })

 //2 create a file in the new created directory with favorite name, and content containing running script file path.

// const fs = require("fs"); 
// const path = require("path");

// fs.writeFile(path.join(__dirname,"new catalog","fs_path"),__filename,(err)=>{
//     if(err) throw err 
//     console.log("fail@ stexcvel e")
// })

//3 Append Operation system information about cpus, to that new file.

// const fs = require("fs"); 
// const path = require("path");
// const os = require("os");

// const task_cpus = JSON.stringify( os.cpus()) ; 

// fs.appendFile(path.join(__dirname , "new catalog", "fs_path"),`\n${task_cpus}`, (err)=>{
//     if(err) throw err 
//     console.log("fail@ stexcvac e")
// });

//4 import from configuration file a string, and rename created new file with that string.

// let userstring = require("./user") ; 
// const fs = require("fs"); 
// const path = require("path");

// fs.rename(path.join(__dirname,"new catalog","fs_path") ,path.join(__dirname,"new catalog",userstring), (err)=>{
//     if(err) throw err
//     console.log("anun@poxvac e");
// })


const fs = require("fs"); 
const path = require("path");
const os = require("os");
const  userstring = require("./user");

fs.mkdir(path.join(__dirname,"new catalog"),(err) => {
    if(err) throw err
    console.log("catalog is crate ")

    fs.writeFile(path.join(__dirname,"new catalog","fs_path"),__filename,(err)=>{
        if(err) throw err 
        console.log("fail@ stexcvel e")
        const task_cpus = JSON.stringify( os.cpus()) ; 

        fs.appendFile(path.join(__dirname , "new catalog", "fs_path"),`\n${task_cpus}`, (err)=>{
            if(err) throw err 
            console.log("fail@ popoxvac e")
            fs.rename(path.join(__dirname,"new catalog","fs_path") ,path.join(__dirname,"new catalog",userstring), (err)=>{
                if(err) throw err
                console.log("anun@poxvac e");
            })
        });
    })

})
