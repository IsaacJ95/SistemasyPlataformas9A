# Dockerización de Aplicación NestJS y GitHub Actions

## Descripción
Este repositorio demuestra cómo Dockerizar una aplicación NestJS y configurar un flujo de trabajo en GitHub Actions para construir y desplegar contenedores de Docker.

## Pasos por seguir

###  Crear Repositorio

Crea un repositorio público o privado en GitHub. [Enlace al Repositorio](https://github.com/IsaacJ95/practica-dock)
![Alt text](img/img1.png)

### Preparar el Código Fuente

Luego solo realizamos el commit del código a utilizar
![Alt text](img/img2.png)

###  Configurar Secrets en GitHub

Crea los secrets DOCKER_USER y DOCKER_PASSWORD en la sección de Secrets de tu repositorio en GitHub.
![Alt text](img/img3.png)


###  Configurar Token de Docker Hub

Utiliza tu usuario y clave (token) de Docker Hub para llenar los secrets DOCKER_USER y DOCKER_PASSWORD.
Crea un Token en Docker (con el nombre Github-Actions) y copia este Token generado en el secret DOCKER_PASSWORD.
![Alt text](img/img4.png)
![Alt text](img/img5.png)
![Alt text](img/img6.png)


####  Verificar Construcción y Funcionamiento

Asegúrate de que la imagen puede ser compilada con el siguiente comando:
bash
docker login
docker build -t joviric95/webhooks:latest .
Verifica el funcionamiento de la aplicación.
![Alt text](img/img8.png)

###  Crear Action Docker Image
Configura un flujo de trabajo en GitHub Actions para generar la imagen Docker utilizando el archivo docker-image.yml.

![Alt text](img/img7.png)


# Evidencias

Ya tenemos el actions creado para realizar builds automáticos.
![Alt text](img/img9.png)



