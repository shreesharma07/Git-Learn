// --> Printing Line onto Console 
// Importing Module
const chalk = require('chalk')
// Function for Printing String //
const call = (str) => {
    console.log('String Passed :: '+chalk.magenta.bold(str))
}
let string = 'This is a simple Log Text File'
call(string)// Function Calling 