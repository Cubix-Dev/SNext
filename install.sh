# installing node
if [ which node > /dev/null ]; then
    echo "Node isn't installed on this machine. Node is required for SNext to boot."
    if [ "$OSTYPE" == "linux-gnu"* ]; then
        echo "We will attempt to install Node with your release's equivlant of apt-get. Should we? [Y/N]"
        read confirm | tr '[:upper:]' '[:lower:]'
        if [ confirm == "Y" ]; then
            echo "Installing Node ..."
            # this part will only work on debian-based distros
            if [ -f "/etc/debian_version" ]; then
               curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
               sudo apt-get install nodejs -y
               echo "Node has been installed."
               sleep 5
            fi
            # should* only work on redhat distros
            if [ -f "/etc/redhat-release"]; then
                dnf module install nodejs:18/common -y
                sleep 5
            fi
            # should only work on CentOS
            if [ -f "/etc/centos-release"]; then
                dnf module install nodejs:18/common -y
                sleep 5
            fi
            if [ -f "/etc/arch-release"]; then
                pacman -S nodejs npm
                sleep 5
            fi
        else
            echo "Please install Node.js, then retry this installer."
            exit 1
        fi
    elif ["$OSTYPE" == "darwin"]; then
            echo "We will attempt to install Node with curl. Should we? [Y/N]"
            read confirm | tr '[:upper:]' '[:lower:]'
            if [ confirm == "Y" ]; then
                echo "Installing Node ..."
                curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
        else
                echo "Please install Node.js, then retry this installer."
                exit 1
            fi
        else
            echo "Please install Node.js, then retry this installer."
            exit 1
        fi
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
if [ "$OSTYPE" == "linux-gnu"* ]; then 
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
