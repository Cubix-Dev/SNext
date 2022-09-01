<p align="center">
  <img src="https://i.imgur.com/i5CgPuX.png">
</p>

<h1 align="center">SNext<br>An open-source Scratch gaming console.</h1>

<!-- Shields -->
<p align="center">
  <img src="https://img.shields.io/discord/839159549260333117?color=7289da&label=SNext&logo=Snext" href="https://discord.gg/XU4zK5jjMc">
  <img src="https://img.shields.io/github/last-commit/cube-enix/snext" href="https://github.com/Cube-Enix/SNext/commits/main">
  <img src="https://img.shields.io/github/issues/cube-enix/snext" href="https://github.com/Cube-Enix/SNext/issues">
</p>

## Tell me more, please!

As you wish. SNext is made with JavaScript, the same language that Scratch 3.0 runs off of. Games can be sumbitted to it, and if approved, they'll go on a server which can be accessed via the included shop. You can then download these games and play them offline or online through a little UI magic and SNConnect!

## What do I need to run SNext?

SNext is now an ElectronJS executable, so that means all the dependencies come packaged with it. That's a good thing for you, since all you need is that now! You can get the lastest version from the [releases section](https://github.com/Cube-Enix/SNext/releases/latest) to the right.

## Wait a minute. Isn't this just Turbowarp then?

Well, not quite. First of all, SNext isn't an editor.. Although we now have our own editor called [SN-Edit](https://cube-enix.github.io/sn-edit/). Second, this is a console. Not an *emulator*. SNext is designed to run games from a seperate system mostly without an internet connection or the limitations of an everyday browser. Also, does TurboWarp have a custom server running to host games? Ok, maybe they do, but it isn't as cool as ours!

## Wow, this sounds fun! How do I add my game to the console?

Just head to [this link](https://forms.gle/Rbt1ELbr8HPgEh2q9). You can also join our Discord, [here](https://discord.gg/mqGKmRw9MY).

## wOaH! This is cool. Now add this feature!

In general if you want a feature added, simply create a feature request [here](https://github.com/Cube-Enix/SNext/issues/new/choose). Once a dev sees it, we'll give it a cool tag to show the status if your idea. Once we add it you'll be credited for suggesting it!

## Building from Source

###### I'm gonna take this time to warn you that this is **NOT** the recommended way to build SNext. The only time this should be done is when you are attempting to tackle an issue.
1. Download the files.
2. Make sure you have both [Node.js](https://nodejs.org/en/download/) and [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) ready.
3. Clone the repo into a folder on your system.
4. (WINDOWS ONLY)  Navigate to the directory that you downloaded/cloned SNext to. Then right click on the file called `install.ps1` and click on 'Run with Powershell'. If you get an error about security, see [this](https://www.danielengberg.com/powershell-check-execution-policy/).

<b>We are officially depricating install.ps1 after the release of v1.1.0. Use</b> `install.bat` <b>instead</b>

4. (LINUX ONLY) Navigate to the directory that you downloaded/cloned SNext to. Then open it in the terminal and run: `sh install.sh`.
5. Navagate to the directory that you downloaded/cloned SNext to. Then, navigate to `src` and run `npm start`.
**(Note: Despite the special treatment the Linux Build recieves its still relativly buggy. If you find an issue with it report it [here](https://github.com/Cube-Enix/SNext/issues/5))**
<!-- 
Please note that you'll get an error, stating that there were no files to run. **THIS IS INTENDED BEHAVIOUR. DO NOT REPORT THIS AS A BUG. SNEXT  WILL STILL COMPILE SUCCESSFULLY.** -->

## Features on their way
- Discord Rich Presense
- Automatic Game Loading
- Auto Updating
- eShop Intergration

## Credits
<a href="https://github.com/Cube-Enix/SNext/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Cube-Enix/SNext" />
</a>

## I need help!

If you have any issues with using SNext or simply need assistance, please either;

- Make a GitHub issue. Please provide screenshots of error messages if possible, or go as in depth as possible.
- Join the [Discord](https://discord.gg/mqGKmRw9MY) and make a ticket in the #tickets channel.
  - If the ticket bot is down, ping a Firmware dev (they have a magentaish color name) with your issue.
