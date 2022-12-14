// Following steps outline the process to create apps using node.js, express(), hosted in Heroku

// 1. cd to directory
// 2. mkdir 'P_M (Project Name)'
// 3. cd P_M
// 4. touch "create" server.js
// 5. npm init -y
// 6. npm i express => installs the Express Module
// 7. npm i dotenv => install the dotenv module , used for privacy purposes.
// 8. touch .env => on the same level of server.js and add variables: PORT=3000. no spaces, no commas, no semi-colons. If you have a second variable, you would put it on the next line.
// 9. touch .gitignore => add node_modules and .env, and anyhting you want ignored by github
// 10. mkdir views
// 11. cd views
// 12. touch template.hypatia in the views folder => 
                /* <head>
                #title#
                </head>
                <body>
                <header>#message#</header>
                #content#
                </body> */
// 13. mkdir models/File_Name.js => at the bottom of file add: "module.exports = File_Name"; This allows us to import/export data such as arrays and objects from an external file. 


/* GitHub commands 
1. Navigate to project directory!
2. git init main // Initialize the local directory as a Git  repository.
3. git add . // Adds the files in the local repository and stages them for commit. To unstage a file, use 'git reset HEAD YOUR-FILE'.
4. git commit -m 'Added my project' // Commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.
5. git remote add origin git@g3dC0d3R/m2w1d3_First_Express_HW.git# // Sets the new remote
6. git remote -v // Verifies the new remote URL
6. git push -u -f origin main //# Pushes the changes in your local repository up to the remote repository you specified as the origin. The -f (or --force) flag stands for force. This will automatically overwrite everything in the remote directory.
*/

/* The following code belongs in server.js
    -------------------------------------  */

// -----> Require modules 
require('dotenv').config() // Link .env file
const { randomInt } = require('crypto');
const express = require('express') // Load express
const fs = require('fs') // this engine requires the fs module 
const variable = require('./models/File_Name.js') // Imports value of module.exports

// -----> Create the Express app
const app = express(); //app is an object. 

// -----> Declare environment variables. 
const port = process.env.PORT // Links PORT variable from .env file. 

// -----> Create views engine

// -----> Configure the app (app.set)

// -----> Mount middleware (app.use)

// -----> Mount routes

  // Take one Down and Pass it Around
  let count = 99
  app.get('/', function (req, res) {
    count = 99
    res.send(`<h1> 99 Bottles of beer on the wall</h1> <br> <a href="${count}">link take one down, pass it around</a> `);
  });

  app.get('/:number_of_bottles', function (req, res) {
    count--
    if (count != 0) {
      res.send(`<h1> ${count+1} Bottles of beer on the wall</h1> <br> <a href="${count}">take one down, pass it around </a> `);
    } else {
      res.send(`<h1> ${count} Bottles of beer on the wall</h1> <br> <a href="/">Home </a> `);
    }
  });

  // Greetings
  app.get('/greeting/:name', function (req, res) {
    res.send('Hello ' + req.params.name + '!');
  });

  // Tip Calculator
  app.get('/tip/:total/:tipPercentage', function (req, res) {
    res.send(
      `
        ${req.params.total * (req.params.tipPercentage/100)}
      `
    )
  });

  // Magic 8 Ball 
  app.get('/magic/:question', function (req, res) {
    const random8 = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    
  let guess = random8[Math.floor(Math.random() * random8.length)]

  if (req.params.question == 'Will I Be A Millionaire') {
    res.send(
      `
        ${req.params.question}? <br> ${guess}
      `
    )
  } else {
      res.send("Try again bud...")
  }
    
  });  

// -----> Listen on port defined in .env
app.listen(port, function() {
 console.log('Listening on port 3000');
});