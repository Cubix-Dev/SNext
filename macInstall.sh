# Install Node Modules
echo "Installing..."
cd src
npm install
# Update Electron
echo "Fixing potential vulnerabilities..."
npm audit fix --force
echo "Sandbox is not supported so we'll go ahead and quit."
echo "Complete! Run cd src then npm start to open."