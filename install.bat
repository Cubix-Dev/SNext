# Install Node Modules
echo Asserting that NodeJS and NPM are Installed...
set NULL_VAL=null
set NODE_VER=%NULL_VAL%
set NODE_EXEC=node-16.16.0-x86.msi

node -v >.tmp_nodever
set /p NODE_VER=<.tmp_nodever
del .tmp_nodever

IF "%NODE_VER%"=="%NULL_VAL%" (
	echo.
	echo Node.js is not installed! Please press a key to download and install it from the website that will open.
	PAUSE
	start "" http://nodejs.org/dist/v16.16.0/%NODE_EXEC%
	echo.
	echo.
	echo After you have installed Node.js, press a key to shut down this process. Please restart it again afterwards.
	PAUSE
	EXIT
) ELSE (
	echo A version of Node.js ^(%NODE_VER%^) is installed. Proceeding...
)

cd src
npm install
npm audit fix
echo Installation Complete! Run npm start in the src folder.