// Task 1: Conceptos Básicos de Docker (6 minutos)
// Fundamentos de containerización.

// # Docker vs VMs
// # VM: Virtualiza hardware completo
// # Docker: Virtualiza solo el sistema operativo

// # Ventajas de Docker:
// # - Ligero y rápido
// # - Portabilidad
// # - Escalabilidad
// # - Aislamiento
// # - Versionado de ambientes
// # Comandos básicos de Docker
// # Imágenes
// docker build -t mi-app .          # Construir imagen
// docker images                     # Listar imágenes
// docker rmi mi-app                 # Eliminar imagen

// # Contenedores
// docker run -d -p 3000:3000 mi-app # Ejecutar contenedor
// docker ps                         # Listar contenedores corriendo
// docker ps -a                      # Listar todos los contenedores
// docker stop mi-app                # Detener contenedor
// docker rm mi-app                  # Eliminar contenedor

// # Limpieza
// docker system prune               # Limpiar recursos no usados