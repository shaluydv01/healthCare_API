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
</ol>

5.To build API for this project, I created the following file structure:
healthcare-api/
├── models/
│   └── Service.js
├── routes/
│   └── services.js
├── .env
├── app.js
└── package.json 

---First I defined the model of the Service.js(models/Service.js)
---Second I created the routes for the API(routes/services.js)
---Third I setup the app main(app.js)

The other settings I need to do in my package.json are: 
---First I change the name of "main" according to my file structure and named it "main": "app.js".
---Second I added an extra line just above the "keywords": [], "type": "module"
---Third I added "start" "nodemon app.js" just below the "test" to implement programs execution continuously without manual interruption again and again.
"start": "nodemon app.js"

Note:
This project is set to use ES modules (ESM), which means that import and export should be used instead of require and module.exports.
By default, Node.js treats files with the .js extension as ES modules when the "type": "module" field is present in the package.json.

When my project execution in terminal was completely ok, I performed the API test such as "GET", "PUT", "DELETE", and "POST" using "Postman".
