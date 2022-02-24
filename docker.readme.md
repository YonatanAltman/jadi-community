# Docker

###### Docker containers
`docker ps -a`

###### Gwr docker images
`docker pull nginx:alpine`

###### Run a nginx alpine version
`docker run -d -p 9090:80 nginx:alpine`

###### Run angular inside the docker
`docker run -d -p 4200:80 -v $(pwd):/usr/share/nginx/html nginx:alpine`
