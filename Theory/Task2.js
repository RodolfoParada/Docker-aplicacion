// Task 2: Dockerfile Efectivo (8 minutos)
// Crear imágenes optimizadas para producción.

// # Dockerfile para aplicación Node.js
// FROM node:18-alpine

// # Establecer directorio de trabajo
// WORKDIR /app

// # Copiar archivos de dependencias primero (cache eficiente)
// COPY package*.json ./

// # Instalar dependencias
// RUN npm ci --only=production && npm cache clean --force

// # Copiar código fuente
// COPY . .

// # Crear usuario no-root por seguridad
// RUN addgroup -g 1001 -S nodejs
// RUN adduser -S nextjs -u 1001

// # Cambiar propietario de archivos
// RUN chown -R nextjs:nodejs /app

// # Cambiar a usuario no-root
// USER nextjs

// # Exponer puerto
// EXPOSE 3000

// # Health check
// HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
//   CMD curl -f http://localhost:3000/api/health || exit 1

// # Comando para ejecutar
// CMD ["npm", "start"]
// # Dockerfile multi-stage para optimización
// # Stage 1: Build
// FROM node:18-alpine AS builder

// WORKDIR /app

// COPY package*.json ./
// RUN npm ci

// COPY . .
// RUN npm run build

// # Stage 2: Production
// FROM node:18-alpine AS runner

// WORKDIR /app

// # Copiar solo archivos necesarios
// COPY --from=builder /app/package*.json ./
// COPY --from=builder /app/.next ./.next
// COPY --from=builder /app/public ./public

// # Instalar solo dependencias de producción
// RUN npm ci --only=production

// # Usuario no-root
// RUN addgroup -g 1001 -S nodejs
// RUN adduser -S nextjs -u 1001
// RUN chown -R nextjs:nodejs /app
// USER nextjs

// EXPOSE 3000

// CMD ["npm", "start"]