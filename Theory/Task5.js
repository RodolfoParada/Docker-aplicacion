// Task 5: Redes y Comunicación (4 minutos)
// Configurar redes entre contenedores.

// # Configuración de redes
// version: '3.8'

// services:
//   web:
//     build: .
//     networks:
//       - frontend
//       - backend

//   api:
//     build: ./api
//     networks:
//       - backend
//       - database

//   db:
//     image: postgres:13
//     networks:
//       - database

// networks:
//   frontend:
//     driver: bridge
//   backend:
//     driver: bridge
//   database:
//     driver: bridge
//     internal: true  # No expuesto externamente
// # Comandos de redes
// docker network create mi-red        # Crear red
// docker network ls                   # Listar redes
// docker network inspect mi-red       # Inspeccionar red
// docker network connect mi-red app   # Conectar contenedor a red
// docker network disconnect mi-red app # Desconectar
// docker network rm mi-red            # Eliminar red