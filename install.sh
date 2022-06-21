# Install Node Modules
echo "Installing..."
cd src
npm install
# Update Electron
echo "Fixing potential vulnerabilities..."
npm audit fix --force
# Fix chrome-sandbox issue
echo "Prepping Sandbox..."
cd ./node_modules
cd ./electron
cd ./dist
sudo chown root:root chrome-sandbox
sudo chmod 4755 chrome-sandbox
cd ..
cd ..
cd ..
# Start
echo "Complete! Run cd src then npm start to open."
