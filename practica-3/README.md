
![Participantes](https://github.com/Byotony/logospng/blob/main/PNG/Participantes%20WHITE.png)

| Antony Palacios | Gustavo Rodriguez | Cristhopher Alcivar | Diego Flores | Ian Velez | Isaac Joviric |
| ------ | ------ | ------ | ------ |  ------ | ------ |
|<p align="center"><a href="https://github.com/byotony"><img src="https://github.com/Byotony/logospng/blob/main/PNG/Byonetta.png" text-align="center" width="100" height="100"/></a></p>|<p align="center"><a href="https://github.com/gusrsl"><img src="https://github.com/Byotony/logospng/blob/main/PNG/gustavo.png" align="center" width="100" height="100"/></a></p>|<p align="center"><a href="https://github.com/krixsjdk"><img src="https://github.com/Byotony/logospng/blob/main/PNG/alcivar.png" align="center" width="100" height="100"/></a></p>|<p align="center"><a href="https://github.com/diegoflores16"><img src="https://github.com/Byotony/logospng/blob/main/PNG/diego.png" align="center" width="100" height="100"/></a></p>|<p align="center"><a href="https://github.com/e1313326363"><img src="https://github.com/Byotony/logospng/blob/main/PNG/ian.png" align="center" width="100" height="100"/></a></p>|<p align="center"><a href="https://github.com/IsaacJ95"><img src="https://github.com/Byotony/logospng/blob/main/PNG/chepo.png" align="center" width="100" height="100"/></a></p>|

## Testing

### 1er Paso.
#### Definimos las variables las cuales se van a testear.
![Alt text](images/uno.png)

### 2do Paso.
#### En el Act detallamos todo el testeo que se realizará, hay que tener en cuenta los factores de "Proviers" que es el encargado de llamar al servicio que se quiera testear, y los mocker de usan para ayudarnos a definir variables de mongo a través de tokens
![Alt text](images/dos.png)

### 3er Paso.
#### El assert que es el encargado de ejecutar el testeo, esto lo logramos usando la función describe sobre el findAll
![Alt text](images/tres.png)

## Luego Procedemos a la Dockerizar 

### 1er Paso
#### Configuramos el Dockerfile
![Alt text](images/cuatro.png)

### 2do Paso
#### Ejecutamos todos los Test del proyecto
```sh
  npm test
```
![Alt text](images/cinco.png)

### 3er Paso
#### Creamos la imagen del docker pero con referencia al Test
```sh
    docker build --target test -t mi-backend:test .  
```    
![Alt text](images/sexto.png)

### 4to Paso
#### Creamos la imagen del docker completa
```sh
    docker build -t mi-backend:latest .
``` 
![Alt text](images/septimo.png)

### 5to Paso
#### Revisamos las imagenes creadas 
```sh
    docker images
``` 
![Alt text](images/octavo.png)

### 6to Paso
#### Nos Logueamos en docker
```sh
    docker login
``` 
![Alt text](images/noveno.png)

### 7to Paso
#### Etiquetar las imágenes con tu nombre de usuario de Docker Hub, antes de poder subir tus imágenes a Docker Hub.
```sh
  docker tag mi-backend:test joviric95/mi-backend:test
  docker tag mi-backend:latest joviric95/mi-backend:latest
  ![Alt text](images/diez.png)
```
#### Subir las imágenes a Docker Hub
```sh
  docker push joviric95/mi-backend:test
  docker push joviric95/mi-backend:latest
```
![Alt text](images/once.png)

### 8vo Paso
#### Por ultimo hacemos el Docker Publico
```sh
  docker push joviric95/mi-backend
```
![Alt text](images/doce.png)

### 9no Paso
#### Ejecutamos la imagen bajada del docker del test y Observamos que funcione correctamente
![Alt text](images/trece.png)

#### Tambien podemos observar la imagen completa y Observamos que funcione correctamente
![Alt text](images/catorce.png)

### 10mo Paso
#### Observamos todas las imagenes bajadas y creadas
![Alt text](images/quince.png)

#### Observamos las imagenes subida en Docker Hub
![Alt text](images/dieciseis.png)
