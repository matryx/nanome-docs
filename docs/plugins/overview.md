---
title: Overview
---

# Overview

## How to use Plugins (Enterprise Only)

The Nanome Plugin API provides a way to interface and integrate external software with Nanome's molecular modeling VR software.
Through this API, users can seamlessly interface with external computational tools for tasks such as molecular dynamics and docking.
The extended functionality includes the ability to create new windows inside of the virtual environment and is easily customizable through a graphical user interface.

Plugins can be designed and ran from different environments including Windows, Linux, and Mac operating systems depending on the requirements needed from the plugin.

Some examples of plugins that our customers love are:

- Running and viewing docking results
- Loading PDFs and PowerPoints
- Running custom molecular dynamics
- All of our public plugins are available on our [Github](https://github.com/nanome-ai).

The primary requirements for running plugins is the Nanome Virtual Reality Software and the Nanome Plugin Server (NTS). The Nanome Plugin Server acts as a relay to forward plugin information and processes into the Nanome virtual environment.

The Nanome Virtual Reality Software can be acquired directly from Nanome or in any of the VR stores here:

- Oculus Store: [https://www.oculus.com/experiences/rift/1873145426039242](https://sidequestvr.com/#/app/333)
- Viveport: [https://www.viveport.com/apps/0a467f78-2ed2-43eb-ada8-9d677d5acf54](https://www.viveport.com/apps/0a467f78-2ed2-43eb-ada8-9d677d5acf54)
- Steam: [https://store.steampowered.com/app/493430/Nanome/](https://store.steampowered.com/app/493430/Nanome/)
- SideQuest: [https://sidequestvr.com/#/app/333](https://sidequestvr.com/#/app/333)

Please contact sales@nanome.ai for the Nanome Plugin Server (NTS.exe)

## Setting Up

_Editing the Config File_

First, you want to locate the Config file (nanome-config.ini) of the Nanome Application in the builds folder.
If you downloaded Nanome through the Oculus store, it will be available here:

C:\Program Files\Oculus\Software\Software\nanome-nanome\Build

Open the nanome-config.ini file in a text editor and scroll down to the section named ‘ Nanome plugin server config’ and change to the following:

Plugin-server-addr = 127.0.0.1
Plugin-server-port = 8888

_Launch a local Plugin Server_

Next, we want to launch the Plugin Server locally. Go ahead and launch the NTS.exe file and a command prompt should open with the server running on port 8888.

<vimg src="plugins-page/runningNTS.png" />

Now, we want to check to make sure that the Plugin Server is connected. Go ahead and launch Nanome, then log in using your credentials. Create a room and Start in 2D and click on the Plugins Icon on the bottom of the Entry Menu.

You should see that the NTS is connected and there are no current running plugins. If it says that “No NTS is connected”, that means it is unable to see the Plugin server and it is entered incorrectly on the Config file or in the Admin settings for home.nanome.ai.
