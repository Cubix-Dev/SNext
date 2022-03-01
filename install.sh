echo "
eeeee eeee eeeee  eeeee eeeee eeee e   e eeeee eeee e    e eeeee e  eeeee eeeee eeeee eeeee e     e     eeee eeeee  
8   " 8  8 8   8  8   8   8   8  8 8   8 8   8 8    8    8   8   8  8   8 8   "   8   8   8 8     8     8    8   8  
8eeee 8e   8eee8e 8eee8   8e  8e   8eee8 8e  8 8eee eeeeee   8e  8e 8e  8 8eeee   8e  8eee8 8e    8e    8eee 8eee8e 
   88 88   88   8 88  8   88  88   88  8 88  8 88   88   8   88  88 88  8    88   88  88  8 88    88    88   88   8 
8ee88 88e8 88   8 88  8   88  88e8 88  8 88  8 88ee 88   8   88  88 88  8 8ee88   88  88  8 88eee 88eee 88ee 88   8 
                                                                                                                    "
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
