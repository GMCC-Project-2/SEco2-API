# SEco2-API

How i've created the NodeJS API from scratch:

1 - Create a new repository on Github

2 - Open this repository on Visual Code

3 - Run the following command:

```bash

npm init                            # It will create the initial configuration files for a NodeJS API

npm install axios                   # This is a library to allow us make request to a external API
npm install express                 # This is a library to provide small, robust tooling for HTTP servers
npm install nodemon                 # This is a library to auto-restart the node app when code changes

```

4 - Open `package.json` file and add to Scripts the following line:

```bash

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon ./src/index.js"                         # Line to be added
  },

```

5 - Create a `src` folder in the same folder that you have your package.json

6 - Create a `index.js` file inside your `src` folder

7 - Add the following code:

```bash

const express = require("express");                      #Importing library

const app = express();                                   #Creating a instance of express library called app
const port = 4000;                                       #Creating a variable called port

app.get("/", (req, res) => {                             #Send a Helloworld response when
    res.send("Helloworld!!!");                           #access http://localhost:4000/
});

app.listen(port, () => {
  console.log("🚀 Server ready at PORT:" + port);       #Force our code to stay running and listening calls
});


```

8 - This this the first steps.

Next Steps will be added in the future but in summary we need to create a `routes` file that allow us to have all routes to make calls in our API in just one file, create separated controllers for each one of the modules of our app....
