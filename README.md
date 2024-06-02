# Instrucciones para arrancar la app

---
1. Instalar las dependencias con el comando "npm install"
2. Arrancar una base de datos mongodb

3. Si no se tiene base de datos mongodb en local, cambiar en el archivo index.js en la línea 10 de esto "mongoose.connect('mongodb://localhost:27017/tecnopac')"
 a 
"mongoose.connect('mongodb+srv://thhomasgt99:lPSWgHFfHqt7fkGu@cluster0.tykp5qz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')".
Con este cambio se conectará a una base de datos en Mongo Atlas
4. Arrancar el proyecto con el comando "npm run dev"