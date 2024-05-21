## eBootcamp

To run this project locally, follow the steps below:-

- First clone the repo in the directory of your choice using `git clone https://github.com/yashprasad234/ebootcamp.git`

# To start the backend service

- Now cd into the api folder `cd api`
- Install all the required dependencies using `npm install`
- Create a .env file for the environment variables using `touch .env` (inside the api directory)
- In the .env file create two environment variables:-
  - 1: MONGO_URI={ADD_YOUR_MONGODB_DATABASE_URL_HERE}
  - 2: AUTH_SECRET={ADD_YOUR_SECRET_STRING_HERE}
- Now do `node index.js` to start the backend server

# To start the admin-frontend

- From the same directory do `cd ../client-admin`
- Install all the required dependencies using `npm install`
- Now do `echo "VITE_APP_BACKEND_URI=http://localhost:3000/" >> .env` this will create your .env file with necessary environment variables
- Now do `npm run dev` this will start your admin-frontend on http://localhost:5174"

# To start the admin-frontend

- From the same directory do `cd ../client-user`
- Install all the required dependencies using `npm install`
- Now do `echo "VITE_APP_BACKEND_URI=http://localhost:3000/" >> .env` this will create your .env file with necessary environment variables
- Now do `npm run dev` this will start your admin-frontend on http://localhost:5173"
