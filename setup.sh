#!/bin/bash

# Install dependencies for both server and client
echo "Installing dependencies..."

echo "Installing server dependencies..."
cd server
npm install

echo "Installing client dependencies..."
cd ../client
npm install

echo "Installation complete!"
echo ""
echo "Next steps:"
echo "1. Update .env files with your configuration"
echo "2. Run 'npm run dev' from the root directory to start both servers"
echo "or"
echo "3. Run 'npm run server' in one terminal"
echo "4. Run 'npm run client' in another terminal"
