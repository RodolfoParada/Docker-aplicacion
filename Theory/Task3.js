// Task 3: Docker Compose (8 minutos)
// Orquestar múltiples servicios.

// # docker-compose.yml básico
// version: '3.8'

// services:
//   app:
//     build: .
//     ports:
//       - "3000:3000"
//     environment:
//       - NODE_ENV=development
//       - DATABASE_URL=postgresql://user:pass@db:5432/app
//     depends_on:
//       - db
//     volumes:
//       - .:/app
//       - /app/node_modules

//   db:
//     image: postgres:13
//     environment:
//       - POSTGRES_DB=app
//       - POSTGRES_USER=user
//       - POSTGRES_PASSWORD=pass
//     ports:
//       - "5432:5432"
//     volumes:
//       - postgres_data:/var/lib/postgresql/data

// volumes:
//   postgres_data:
// # docker-compose.yml completo con Redis
// version: '3.8'

// services:
//   # API Backend
//   api:
//     build:
//       context: ./backend
//       dockerfile: Dockerfile
//     ports:
//       - "4000:4000"
//     environment:
//       - NODE_ENV=production
//       - REDIS_URL=redis://redis:6379
//       - DATABASE_URL=postgresql://user:pass@postgres:5432/app
//     depends_on:
//       - postgres
//       - redis
//     networks:
//       - app-network

//   # Frontend
//   frontend:
//     build:
//       context: ./frontend
//       dockerfile: Dockerfile
//     ports:
//       - "3000:3000"
//     environment:
//       - REACT_APP_API_URL=http://localhost:4000
//     depends_on:
//       - api
//     networks:
//       - app-network

//   # Base de datos
//   postgres:
//     image: postgres:13
//     environment:
//       - POSTGRES_DB=app
//       - POSTGRES_USER=user
//       - POSTGRES_PASSWORD=password
//     volumes:
//       - postgres_data:/var/lib/postgresql/data
//     ports:
//       - "5432:5432"
//     networks:
//       - app-network

//   # Cache
//   redis:
//     image: redis:6-alpine
//     ports:
//       - "6379:6379"
//     volumes:
//       - redis_data:/data
//     networks:
//       - app-network

// networks:
//   app-network:
//     driver: bridge

// volumes:
//   postgres_data:
//   redis_data: