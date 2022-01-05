// Writing to JSON file
// Save Persons object to 'data_write.json' file in the same folder as this script 

const Persons =  { 
    Name: 'John Doe', 
    Age: 35, 
    City: 'Collingwood' 
};

const fs = require('fs');
fs.writeFile('./data_write.json', JSON.stringify(Persons), function(err){
    if(err) {
        console.log(err);
    }
});