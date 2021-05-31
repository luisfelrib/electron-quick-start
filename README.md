# electron-quick-start

**Clone and run for a quick way to see Electron in action with Express.**

This is a minimal Electron application based on the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start) within the Electron documentation.

## Dependencies

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. 
Install Electron Packager globally are required to. To create the installers some libs are optional.

**- To build for Debian the electron-installer-debian are required.**
**- To build a setup installer for Windows the electron-installer-windows are required.**

```bash
# After Node JS installed use NPM to install Electron Packager Globally
npm install electron-packager -g
# Debian installer
npm install electron-installer-debian -g
# Windows installer
npm install electron-installer-windows -g
# Clone this repository
git clone https://github.com/luisfelrib/electron-quick-start
```
## To Use

```bash
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start

# Build for Linux
npm run build-linux
# Build for Windows
npm run build-windows
# Generate Debian Installer
npm run gen-deb
# Generate Windows installer
npm run gen-exe
```
## Application
 - After build for any SO, the builded application is located in dist folder.
 - After run installer generate command, the resources will be into installers folder.
 - If you run de application from command line you will see some logs on terminal:
 ```bash
# Go into dist folder
cd dist
# Windows builded resources
cd app-win32-x64
# Execute app from terminal to see logs
./electron-quick-start.exe
```
## Server 
 - Express server are running on port 5050 - http://localhost:5050
## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs