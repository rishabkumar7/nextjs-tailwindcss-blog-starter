---
title: 'Beautify your Terminal-WSL2'
date: '2020-05-25'
coverUrl: 'https://149366088.v2.pressablecdn.com/wp-content/uploads/2020/04/ubuntu-20.4-wsl.jpg'
tags: 'Linux'
---


I used Ubuntu as a VM for the front-end development. But recently I have been testing [Windows Subsystem of Linux (WSL 2)](https://devblogs.microsoft.com/commandline/wsl-2-is-now-available-in-windows-insiders/) and so far its good.
No need to run VM anymore! (Since I only care about the command line functionality).
Also, I have been trying out the [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh) and I gotta say that it is amazing!

Here is a guide on [how to get started with WSL](https://dev.to/pluralsight/getting-started-with-wsl-1abp) by @jeremycmorgan.
 
-------------------------------
So my terminal looks like this right now:
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/724h6x5po0rgdjj1orqi.png)

And here is the guide for the same. (Assuming that you have WSL enabled, Ubuntu and Windows Terminal App installed, if not, you can [follow this guide](https://dev.to/pluralsight/getting-started-with-wsl-1abp))

-------------------------------
### Install oh-my-zsh:

Make sure zsh is installed:

```
apt install zsh

```
Install ohmyzsh

```
sh -c "$(curl -fsSL [<https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh>](<https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh>))"

```
-----------------------------------------

### Install and configure Powerline fonts

To install the Powerline fonts:

1.  Open a Powershell session as administrator.

2.  Download and expand the Powerline fonts repository:

    `powershell -command "& { iwr [<https://github.com/powerline/fonts/archive/master.zip>](<https://github.com/powerline/fonts/archive/master.zip>) -OutFile ~\\fonts.zip }" Expand-Archive -Path ~\\fonts.zip -DestinationPath ~`

3.  Update the execution policy to allow the installation of the fonts:

    `Set-ExecutionPolicy Bypass`

4.  Run the installation script:

    `~\\fonts-master\\install.ps1`

5.  Revert the execution policy back the default value:

    `Set-ExecutionPolicy Default`

--------------------------
### Edit the settings for WSL:


To configure the fonts:

For Windows Terminal App:
- Open the Windows Terminal App.
- Go to settings.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/6uimsg314p7hlewldasy.png)
- Update the json, list one of the Powerline fonts.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/dh2hjdykwgdvxe7157kz.png)

For Ubuntu App:
- Open the Ubuntu app.
- Open the **Properties** dialog.
- From the **Font** tab, select one of the Powerline fonts, such as *ProFont for Powerline*.
- Click **OK**.

-------------------------
### Choose you theme! 🎨

You can now choose the theme you want for your terminal, there are many to [choose from](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes). I am using "agnoster".
You can do so by: 
- Edit the '.zshrc' file
` nano ~/.zshr `
- Change the theme to one that you selected:
```
# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="agnoster"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in ~/.oh-my-zsh/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )
```

You can also enable different Plugins:
```
plugins=(
  git
  bundler
  dotenv
  osx
  rake
  rbenv
  ruby
)
```
Let me know which theme you picked! Also feel free to reach out if you have any concerns.