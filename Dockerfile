FROM node:alpine
WORKDIR '/app'
<<<<<<< HEAD
COPY package*.json ./
=======
COPY package.json .
>>>>>>> 57d194bf650b9c82f46c0ef9cccb99fc508815d2
RUN npm install
COPY . .
RUN npm run build

FROM nginx
<<<<<<< HEAD
EXPOSE 80
=======
>>>>>>> 57d194bf650b9c82f46c0ef9cccb99fc508815d2
COPY --from=0 /app/build /usr/share/nginx/html