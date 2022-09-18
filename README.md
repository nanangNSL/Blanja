<h2 align="center">Blanja</h2>
<p align="center">Blanja is an online store that focuses on the world of fashion.</p>


<details>
<summary>Table of Contents</summary>
<br/>
  

* [Screenshoot](#screen)
* [Made with](#built)
* [Getting Started](#getting)
  * [Prerequisites](#Prerequisites)
  * [Installation](#Installation)
* [License](#License)
</details>


<h3 id=screen>Screenshot</h3>

<table>
  <tr>
    <th>Login</th>
    <th>Register</th>
    <th>Add Recipe</th>
     <th>Profile</th>
      <th>Alert</th>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/45787278/190203782-b7d5eb80-8977-49d8-947b-d7f89ef452a7.png" /></td>
    <td><img src="https://user-images.githubusercontent.com/45787278/190203797-da0d04ab-b3dd-4f76-8299-0245df8c38b3.png" /></td>
    <td><img src="https://user-images.githubusercontent.com/45787278/190203797-da0d04ab-b3dd-4f76-8299-0245df8c38b3.png" /></td>
      <td><img src="https://user-images.githubusercontent.com/45787278/190203808-4246e777-2490-432a-b412-3d6d29aaf737.png" /></td>
      <td><img src="https://user-images.githubusercontent.com/45787278/190203814-b8f70054-b340-4028-ba85-dee0d50b1574.png" /></td>
  </tr>
</table>
<blockquote>Note: Click to zoom image</blockquote>



<h3 id=built>Made With</h3>
<ul>
  <li>Express JS</li>
   <li>PostgreSQL(databases)</li>
   <li>JOI</li>
   <li>Axios</li>
   <li>Multer</li>
   <li>JWT token</li>
   <li>Redis AWS Cloud</li>
  <li>Cloudinary (For media storage)</li>
  <li>Etc.</li>
</ul>
<h3 id=getting>Getting started</h3>
<ul>
   <li>
     <h4 id=Prerequisites>Prerequiresites</h4>
     <ul>
       <li>Downloading and installing Node.js and npm or you can use command:</li>
       <pre><code>npm install npm@latest -g</code> </pre>
       <li>Checking your version of npm and Node.js</li>
       <p>To see if you already have Node.js and npm installed and check the installed version, run the following commands:</p>
       <pre><code>node -v</code></pre>
        <pre><code>npm -v</code></pre>
       <p>In this project I use <code>version v16.15.1</code></p> 
       <li>Set up multiple accounts for configuration
       <ul>
         <li><a href="https://cloudinary.com/">Cloudinary<a></li>
         <li><a href="https://app.redislabs.com/#/login">Redis Cloud<a></li>
         </ul>
       </li>
     </ul>
  </li>
  <li>
     <h4 id=Installation>Intalation</h4>
      <ul>
        <li>Clone project
          <ul>
             <li>Backend (server) || or you can use an endpoint server 👉<code><a href="https://motaro.herokuapp.com">link<a></code> 
             <pre><code>git clone -b deployment https://github.com/nanangNSL/Motaro.git</code> </pre>
             </li>
            <li>Client
             <pre><code>git clone -b add-responsive https://github.com/nanangNSL/Motaro.git</code> </pre>
             </li>
          </ul>
        </li>
        <li>Install all dependencies
             <pre><code>npm install</code> </pre>
            </li>
       <li>Settup <code>.env.example</code></li>
         <code>Fill all secret keys</code>
          <li>Settup database in doc/motaro.psql </li>
             <pre><code>psql -U postgres -p 5432 -h localhost -d db_name -f motaro.psql</code> </pre>
         <li>Run project</li>
            <pre><code>npm start</code></pre>
      </ul>
   </li>
</ul> 
    
<h3 id=License>License</h3>
<ul>
  <li><code><a href="https://github.com/nanangNSL/Motaro/blob/main/LICENSE">MIT</a></code></li>
</ul>
<p>Happy code!☕</p>

