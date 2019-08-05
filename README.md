# s3-be
Booking Engine

Front-End - React + Redux

Back-End - Node.js, Express.js & MongoDB


Steps to run in development mode:-
      Fork the repo and clone it.
      Switch to development branch for running in development mode.
      Make sure you have npm Node.js installed in your system
      server:
        cd to node-app folder 
          RUN npm run server
      client:
         cd to react-app folder 
          RUN npm run start
      
      Go to http://localhost:3000 to see the client application running.
      Go to http://localhost:5000 to see the server application running.
      
Links:
    Server:
       http://localhost:5000:: rest-api
       
       http://localhost:5000/rest :: all data regarding rooms (get request)
       http://localhost:5000/rest/api :: user liked hotel list (get request)
       http://localhost:5000/rest/api :: post new liked hotel in database (post request)
       http://localhost:5000/rest/api :: delete a non liked hotel (delete request)
       http://localhost:5000/rest/deleteall :: delete all data for a user (delete request)
    Client:
       http://localhost:3000 :: React Client-side application
     
