# Almundo

Proyecto generado mediante [Angular CLI](https://github.com/angular/angular-cli) versión 1.6.5.

## dataBase

Este proyecto interactúa con una base de datos no relacional [MOongoDB](https://www.mongodb.com/), antes de iniciar el proyecto ejecute en consola de comandos : `mongoimport --db almundo --collection hotels --type json --file data.json --jsonArray` dentro de la carpeta `./config` ubicada en la raíz del proyecto

## server

ejecute el comando `npm install --prod` luego ejecute el comando `ng build --prod` este comando generara la carpeta `dist` la cual contendrá el proyecto compilado al cual apuntara backend cuando el proceso allá terminado ejecute el comando `node server --prod` y ya podrá abrir la aplicación en el puerto que indique la consola

# almundo
