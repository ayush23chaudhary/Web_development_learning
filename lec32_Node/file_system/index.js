const fs= require('fs');
// create
let data = "i m fine thnak u";
fs.writeFile('data.txt', data,{
    encoding: 'utf-8',
    flag: 'w'
}, (err) => {
    if(err) {
        console.log("Error writing file:", err);
    } else {
        console.log("File written successfully");
    }
});

// read
fs.readFile('data.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log("Error reading file:", err);
    } else {
        console.log("File content:", data);  // data.toString() if utf 8 not specified
    }
});

//update
fs.appendFile('data.txt', ' i m fine thnak u', {
    encoding: 'utf-8',
    }, (err) => {
        if(err) {
            console.log("Error writing file:", err);
        }
        else {
            console.log("File updated successfully");
        }
    });

    // delete
fs.unlink('data.txt', (err) => {
    if(err) {
        console.log("Error deleting file:", err);
    }
    else {
        console.log("File deleted successfully");
    }
}
);