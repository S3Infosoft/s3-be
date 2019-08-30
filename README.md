Mern stack width docker and also with payment
Project file structure:

        project-name
            |
            |---/ client
                    |
                    |---/ public
                    |---/ src
                    |
                    .dockerignore
                    Dockerfile
                    nginx.conf
                    package.json
            |
            |---/ server
                    |
                    |---/src
                    |
                    .dockerignore
                    dbs
                    route 
                    server_data
                    Dockerfile
                    Dockerfile-dev
                    package.json
            |
            |
            .env
            .gitignore
            docker-compose.yml
            README.md

    Prerequisites:

        DockerCE
        docker-compose
        NodeJs 
        Npm
        Clone and Run

        git clone https://github.com/S3Infosoft/s3-be.git
        cd --> WorkDir
        docker-compose build
        docker-compose up -d
        docker-compose up
        
        
  Frontend:
  
      React and Redux
  Backend:
  
      NodeJs and Mongodb
      
      
 Run without docker:
  
    Client Setup
        cd react-app
        Run npm install 
        Run npm run start
    
    Server Setup:
        cd express-app
        Run npm install
        Run npm run server
    
   Client:
       
       http://localhost:3000
   
   Server:
   
       http://localhost:5000
      
  
