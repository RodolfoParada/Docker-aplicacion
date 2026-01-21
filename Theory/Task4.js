// Task 4: Volúmenes y Persistencia (4 minutos)
// Gestionar datos persistentes.

// # Tipos de volúmenes
// version: '3.8'

// services:
//   app:
//     image: node:18
//     volumes:
//       # Bind mount - directorio del host
//       - ./app:/app

//       # Named volume - gestionado por Docker
//       - app_data:/app/data

//       # Anonymous volume - temporal
//       - /app/temp

//   db:
//     image: postgres:13
//     volumes:
//       # Persistir datos de PostgreSQL
//       - postgres_data:/var/lib/postgresql/data

//       # Logs
//       - postgres_logs:/var/log/postgresql

// volumes:
//   app_data:
//   postgres_data:
//   postgres_logs:
// # Comandos de gestión de volúmenes
// docker volume create mi-volumen     # Crear volumen
// docker volume ls                   # Listar volúmenes
// docker volume inspect mi-volumen   # Inspeccionar volumen
// docker volume rm mi-volumen        # Eliminar volumen
// docker volume prune                # Limpiar volúmenes no usados