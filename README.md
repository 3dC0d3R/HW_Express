First Express Homework
Practice the Basics of Express

Purpose From Curriculum Development Team: This HW is the first hw where we try to push learners out of their comfort zone and have them put together their new knowledge of express and there problem solving muscles that they learned in Pre-Work and Mod 1. Learners will need to think about how to solve each problem conceptually and then use the knowledge they learned the last 3 days to solve the problems. This lab purposely uses industry terminology to describe instructions which may prompt learners to ask clarifying questions or to google meanings. That's ok and expected.

Learning Objectives
Set up some express servers for practice
make some get routes
use URL/query parameters
Prerequisites
Nodejs
npm packages
Introduction to express.js
Request/response/ how the internet works basics
Basic understanding of routing
JavaScript, HTML fundamentals
Technical Requirements
Must be able run without syntax errors (ok if it breaks after the user tries to do something, though do try to comment on the code that isn't working)
Must get functionality required for each section working
Learning Objectives
Practice setting up express applications.
Practice creating custom routes.
Practice using parameters from a request.
Getting Started
In the homework directory for today, create a JavaScript file server.js. Write your answers inside this one js file.

npm init -y. You should receive a package.json.
Install express. npm i express. Check your files.

Hint: You can check to make sure your installation was successful in one of the following places:

Your package.json file should have express listed in the dependencies.
You could also check in your node_modules folder to see an express folder.
Require express and set the app. (look back to the markdown from today if you need more help on how to do this).
Tell the server where to listen for requests (the port).
Greetings
Make a route '/greeting' that sends a generic greeting to the screen like "Hello, stranger".

Give the greeting route a param /:name

When hitting the route, the page should display a message such as "Hello, ", or "What's up, <name>", or "<name>! It's so great to see you!" (ex. hitting '/greeting/Jimmy-boy' should display Wow! Hello there, Jimmy-boy on the page).

🔴 Commit

"Greeting express application created."
 

Tip Calculator
Your app should have a route of '/tip' and it should expect 2 params. One should be total and one should be tipPercentage.

When hitting the route, the page should display how much your tip will be based on the total amount of the bill and the tip percentage. (ex. hitting '/tip/100/20' should display 20 on the page).

�� Commit

 

"Tip Calculator express application created."
 

Magic 8 Ball
Create a route of '/magic' that should expect a phrase in the URL that ask the Magic 8 ball a question.

So if the user hits that route and asks a question of "Will I be a Millionaire" (ex. '/magic/Will%20I%20Be%20A%20Millionaire') he should have return to him his question AND a random Magic 8 ball response (see the array below) on the screen.

We can't use spaces in the url, so we use %20 to express a space in the url.

So if the user hits that route and asks a question of "Will I be a Millionaire" he should get his question asked and a random Magic 8 ball quote on the screen.

Send the magic 8 ball response back between html <h1> tags
Use this array of Magic 8 ball responses…..
["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
🔴 Commit

"Magic 8 Ball express application created."
 

Take one Down and Pass it Around
Build an express application that enables users to count down the number of bottles of beer. Don't like beer? Pass around bottles of soda, kombucha, or milk etc.

Instructions
mkdir pass-it-around
cd pass-it-around
npm init -y
build a basic express server
Requirements
/*
- On the home page (`get "/"`), users should see:
  - "99 Bottles of beer on the wall"
  - a link that says "take one down, pass it around"
  - this should link to `/98`, where the number represents the number of bottles left.
- When a number is given in the URL (`get "/:number_of_bottles"`), users should see:
  - The number of bottles of beer on the wall (i.e. `98 Bottles of beer on the wall.`)
  - a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.
- If there are 0 bottles left, do not show a link to "take one down"
  - Add a link to start over, which directs the user back to the home page.
*/
Hints
You should use an anchor tag with an href to link to the next 'page'
Bonus
Have some more fun
Update your page to be something like

/*
99 little bugs in the code
99 little bugs
Take on down
Patch it around
127 bugs in the code
*/
Make the bugs go down by one, but then have some sort of functionality where the bug count can randomly go up

You have a lot of freedom to make it work how you want!

Hungry for more?
Fibonacci
Back in your main app:

Add Fibonacci as a comment in your application.

Create a route 'fibonacci'

This route will take one param, the number we will operate on.

If the number param is not a fibonacci number (Links to an external site.), print out "I can tell this is not a fibonacci number."

If the number is a Fibonacci number print out "Very good. It is Fibonacci."

🔴 Commit

"Fibonacci."
 

HackerRank
Sign up for HackerRank (Links to an external site.). Solve a few of the problems (this will help get you prepared for interviews! A lot of companies use this site for pre-screening interviews.). Some companies use hacker rank as part of an interview process, so getting familiar with the interface can be a good move
