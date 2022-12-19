# installing node
if [[ command --version node &>/dev/null; ]] then
        echo "Node isn't installed on this machine. Node is required for SNext to boot."
        if [["$OSTYPE" == "linux-gnu"*]]; then
            echo "We will attempt to install Node with apt-get. Should we? [Y/N]"
            read confirm | tr '[:upper:]' '[:lower:]'
            if [[ confirm == "Y" ]]; then
                echo "Installing Node ..."
                # this part will only work on debian-based distros but who cares
                curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
                sudo apt-get install nodejs -y
                echo "Node has been installed."
                sleep 5
            else
                echo "Please install Node.js, then retry this installer."
                exit 1
        else
            echo "Please install Node.js, then retry this installer."
            exit 1
    else
        echo "Node has already been installed."
        sleep 5
    fi


echo "Installing required dependencies for SNext..."
cd src
npm install
# Update Electron
echo "Fixing potential vulnerabilities..."
npm audit fix --force

# linux only
if [[ "$OSTYPE" == "linux-gnu"* ]]; then 
    # Fix chrome-sandbox issue
    echo "Preparing Sandbox..."
    cd ./node_modules
    cd ./electron
    cd ./dist
    sudo chown root:root chrome-sandbox
    sudo chmod 4755 chrome-sandbox
    cd ..
    cd ..
    cd ..
fi
# Start
echo "Complete! Run cd src then npm start to open."
