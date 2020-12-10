console.log('Hello')

const fs = require('fs'); 
   
const path = './vehicle-min.csv'


function readCsv (path){
  const data = fs.readFileSync(path, 
        {encoding:'utf8', flag:'r'});
  return data
};

// function to convert csv file to an array of object
function csvConversionHelper (csv, delimiter = ';') {
    const titles = csv.slice(0, csv.indexOf('\n')).split(delimiter);
    const rows = csv.slice(csv.indexOf('\n') + 1).split('\n');
    return rows.map((row) => {
      const values = row.split(delimiter);
      return titles.reduce((object, curr, i) => (object[curr] = values[i], object), {})
    });
};

// filter out columns based on the column names in an array


function filterColumns (data, columnName) {
  const filterdArray= []
  const filtered = data.filter(item => {
    return filterdArray.push(item[columnName])
  });
  return filterdArray;
  
};


let csv = readCsv(path)
console.log(csv)
let word_array = csvConversionHelper(csv,';');
console.log(word_array)
let filtered = filterColumns(word_array, '"registrationnumber"');
console.log(filtered)
