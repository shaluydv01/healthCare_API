<h1>The steps I have taken during this project:</h1>
<ol>
  <li>First, I created a directory in my local system.</li>
  <li>I opened this directory in VS Code and performed the operation <code>npm init -y</code></li>
  <li>.After that I installed the another packeges such as express, mpngoose , dotenv, and body-parse using the command <br />
<code>npm install express mongoose body-parser dotenv</code>.
</li>
  <li>After doing all these things, I set up the mongodB environment.</li>
  <ul>
    <li>First I created a cluster named healthcare_api in mongodB</li>
    <li>Then using string url of this cluster, I connected this cluster to mongoDB compass.</li>
    <li>Copied this string connection url and paste it in ".env(Environment Variable)" file.</li>
  </ul>
  <li>To build API for this project, I created the following file structure:</li>
  <pre>
    healthcare-api/
├── models/
│   └── Service.js
├── routes/
│   └── services.js
├── .env
├── app.js
└── package.json 
  </pre>
  <ul>
    <li>First I defined the model of the Service.js(models/Service.js)</li>
    <li>Second I created the routes for the API(routes/services.js)</li>
    <li>Third I setup the app main(app.js)</li>
  </ul>
</ol>


----------------------------------------

<h2>The other settings I need to do in my package.json are: </h2>
<ul>
    <li>First I changed the name of "main" according to my file structure and named it <code>"main": "app.js"</code>.</li>
    <li>Second I added an extra line just above the <code>"keywords": [], "type": "module"</code></li>
    <li>Third I added "start" "nodemon app.js" just below the "test" to implement programs execution continuously without manual interruption again and again.</li>
  <code>"start": "nodemon app.js"</code>
  </ul>

---------------------------------------------

<h3>Note:</h3>
<p>This project is set to use ES modules (ESM), which means that import and export should be used instead of require and module.exports.</p>
<p>By default, Node.js treats files with the .js extension as ES modules when the "type": "module" field is present in the package.json.</p>

<em>When my project execution in terminal was completely ok, I performed the API test such as "GET", "PUT", "DELETE", and "POST" using "Postman".</em>
