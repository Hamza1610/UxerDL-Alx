#!/bin/bash

# Build the client-side code
cd frontend
npm install
npm run build

# Move the built files to the server directory
rm -rf ../backend/public
mv build ../backend/public

# Install dependencies and start the server
cd ../backend
npm install
npm start
