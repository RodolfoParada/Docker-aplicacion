// Practical exercise to apply the concepts learned.
// Aplicación completa con Docker:

// # ./Dockerfile (Frontend React)
// FROM node:18-alpine AS builder

// WORKDIR /app

// COPY package*.json ./
// RUN npm ci

// COPY . .
// RUN npm run build

// # Production stage
// FROM nginx:alpine

// COPY --from=builder /app/build /usr/share/nginx/html

// # Configurar nginx
// COPY nginx.conf /etc/nginx/conf.d/default.conf

// EXPOSE 80

// CMD ["nginx", "-g", "daemon off;"]
// # ./api/Dockerfile (Backend Node.js)
// FROM node:18-alpine

// WORKDIR /app

// COPY package*.json ./
// RUN npm ci --only=production

// COPY . .

// # Crear usuario no-root
// RUN addgroup -g 1001 -S nodejs && \
//     adduser -S appuser -u 1001 && \
//     chown -R appuser:nodejs /app

// USER appuser

// EXPOSE 4000

// HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
//   CMD node healthcheck.js

// CMD ["npm", "start"]
// # docker-compose.prod.yml
// version: '3.8'

// services:
//   frontend:
//     build:
//       context: .
//       dockerfile: Dockerfile
//     ports:
//       - "80:80"
//     depends_on:
//       - api
//     networks:
//       - app-network

//   api:
//     build:
//       context: ./api
//       dockerfile: Dockerfile
//     ports:
//       - "4000:4000"
//     environment:
//       - NODE_ENV=production
//       - DATABASE_URL=postgresql://user:pass@db:5432/app
//       - REDIS_URL=redis://redis:6379
//     depends_on:
//       - db
//       - redis
//     networks:
//       - app-network

//   db:
//     image: postgres:13-alpine
//     environment:
//       - POSTGRES_DB=app
//       - POSTGRES_USER=user
//       - POSTGRES_PASSWORD=secure_password
//     volumes:
//       - postgres_data:/var/lib/postgresql/data
//     networks:
//       - app-network

//   redis:
//     image: redis:6-alpine
//     volumes:
//       - redis_data:/data
//     networks:
//       - app-network

//   nginx:
//     image: nginx:alpine
//     ports:
//       - "443:443"
//     volumes:
//       - ./nginx/ssl:/etc/nginx/ssl
//       - ./nginx/nginx.conf:/etc/nginx/nginx.conf
//     depends_on:
//       - frontend
//     networks:
//       - app-network

// networks:
//   app-network:
//     driver: bridge

// volumes:
//   postgres_data:
//   redis_data:
// # Scripts de Docker
// # package.json scripts
// {
//   "scripts": {
//     "docker:build": "docker build -t mi-app .",
//     "docker:run": "docker run -d -p 3000:3000 mi-app",
//     "docker:dev": "docker-compose up --build",
//     "docker:prod": "docker-compose -f docker-compose.prod.yml up -d",
//     "docker:stop": "docker-compose down",
//     "docker:clean": "docker system prune -f && docker volume prune -f"
//   }
// }
// Requerimientos:
// # Instalar Docker y Docker Compose
// # macOS
// brew install docker docker-compose

// # Ubuntu/Debian
// sudo apt-get update
// sudo apt-get install docker.io docker-compose

// # Verificar instalación
// docker --version
// docker-compose --version

// # Crear archivos necesarios
// touch Dockerfile
// touch docker-compose.yml
// touch .dockerignore