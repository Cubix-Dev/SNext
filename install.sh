# Hopefully this works.
# Install Node Modules
cd ./src;
npm install;
# Update Electron
npm audit fix --force;
# Fix chrome-sandbox issue
cd ./node_modules;
cd ./electron;
cd ./dist;
sudo chown root:root chrome-sandbox
sudo chmod 4755 chrome-sandbox
cd ..
cd ..
cd ..
# Start
npm run start;
