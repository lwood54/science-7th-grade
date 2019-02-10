const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port, () => {
        console.log('Server is up on ', port, '!');
});

// Things to do before deployment to heroku:
//      https://medium.com/jeremy-gottfrieds-tech-blog/tutorial-how-to-deploy-a-production-react-app-to-heroku-c4831dfcfa08
// 1. inside project directory, create server.js
// 2. run express server, make sure path is linked to run index.html
// 3. update package.json scripts to have
//      a. start: "node server.js",
//      b. dev: "react-scripts start"
// 4. npm run build (in order to setup the build of production files)
// 5. update .gitignore
//      a. remove /build
//      b. add:
//              src/*
//              public/*
//              build/static/css/*.map
//              build/static/js/*.map
// 6. heroku create app-name-here
//      (this will automatically set the heroku git repo as a remote repo)
//      https://devcenter.heroku.com/articles/git
// 7. add and commit git
// 8. finally git push heroku master
