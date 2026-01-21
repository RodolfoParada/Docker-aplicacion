FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
# Cambiamos ci por install para que no pida el archivo lock
RUN npm install --only=production 
COPY . .

RUN addgroup -g 1001 -S nodejs && \
    adduser -S appuser -u 1001 && \
    chown -R appuser:nodejs /app
USER appuser

EXPOSE 4000
CMD ["node", "index.js"]