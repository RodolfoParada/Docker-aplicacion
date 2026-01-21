#### 1. crea carpeta Theory para guardar las tasks
#### 2. crea carpeta para guardar la actividad a desarrollar
#### 3. desarrollo de la actividad 
  #### instalcación de dependencias
   ```
   sudo apt-get update
   sudo apt-get install docker.io docker-compose
   ```
   ```# Verificar instalación
   docker --version
   docker-compose --version
   ```
   ``` # Crear archivos necesarios
   touch Dockerfile
   touch docker-compose.yml
   touch .dockerignore
   ```

   #### instalar en Docker-aplicacion/api
    ```
    npm init -y
    ```

#### se levanta el proyecto con 
  ```
  docker-compose up --build
  ```