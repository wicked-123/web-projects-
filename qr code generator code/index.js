/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message:"enter your url ",
        name:'url',
    },  
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  const ans=answers.urL;
    console.log(ans);
    var qr_svg=qr.image(url);
    qr_svg.pipe(fs.createReadStream("qr_image.png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      comsole.log("ere");
    }
  });