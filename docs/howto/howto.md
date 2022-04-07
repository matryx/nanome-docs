---
title: How to
---

## How to export a molecule for future access or other softwares

1. Select the structure you want to save.
2. On the Entry List menu, click the [Export button](https://docs.nanome.ai/navigation/menus.html#export)
3. On the menu that appears after clicking Export, select where on your computer you want to save the structure (Desktop or Documents), and then select the file format you want to export to (pdb, sdf, or mmcif).

## How to load a structure stored on local computer

1. Go to the [Load menu](https://docs.nanome.ai/navigation/menus.html#load).
2. Click on [Files](https://docs.nanome.ai/navigation/menus.html#my-files) and then select the location (Desktop or Documents) where you saved the structure.
3. You should then see the filename for the structure you saved. Click on the file, then click "load files".

## How to load a MD trajectory file

<vimg src="howto-page/LoadTrajectory.gif" />

Nanome supports the following MD trajectory files: .PDB, .PSE, .DCD, .GRO, .XTC, .TRR. 
1. Go to the [Load menu](https://docs.nanome.ai/navigation/menus.html#load).
2. Click on [Files](https://docs.nanome.ai/navigation/menus.html#my-files). Navigate to the folder that contains your trajectories and press load (you may also have to multi-select the topology file for trajectories generated via Gromacs or Desmond.
If a trajectory doesn’t load properly, please try reducing its frame count and/or export as a multi-model .PDB. Additionally, please let us know some details about the problematic files and we can look into resolving them. Relevant details would include the file format type and the number of frames. Typically, the shorter the trajectory the easier time you’ll have to load it in. 
3. Once loaded, you can play the trajectory by launching the “Frame” menu represented by this icon on the [Entry List](https://docs.nanome.ai/navigation/menus.html#entry-list): 
<vimg src="howto-page/FrameMenuIcon.png" />

## How to open the Frame Menu and execute frame operations

Find the entity containing multiple frames that you have loaded on the [Entry Menu](https://docs.nanome.ai/navigation/menus.html#main-menus). Click on the second button from the right on the same row. This is the [Frame Menu](https://docs.nanome.ai/navigation/menus.html#frame-data) Button.

### How to change frame

Click on the arrow buttons on the left side of the [Frame Menu](https://docs.nanome.ai/navigation/menus.html#frame-data) to change frame.

### How to duplicate a frame 

Click on the Duplicate Frame button on the right side of the [Frame Menu](https://docs.nanome.ai/navigation/menus.html#frame-data) to change frame.

### How to swap molecules from the list of frames

1. Click on the Frames Tab Button on the top left to switch to the Frames Tab.
2. Click on one of the models in the list to switch to that molecule.

### How to show meta data on frame

Click on the Meta Data Tab Button on the top right to switch to Meta Data Tab.

## How to access the MedChem tool and build molecules

Hold down the B Button on the right controller to bring up the [Tool Menu](https://docs.nanome.ai/navigation/toolsmenu.html#tool-menu), hover the ray over the [MedChem Tool](https://docs.nanome.ai/navigation/toolsmenu.html#medchem-tools) button to the bottom left and release B button.

### How to open the library of molecules 

Click on the [Build Menu](https://docs.nanome.ai/navigation/toolsmenu.html#build) Tab Button on the top right of the MedChem menu on the left hand

### How to build molecules using the MedChem tool

1. Click on a structure on the [Build menu](https://docs.nanome.ai/navigation/toolsmenu.html#build) to select it for placement.
2. Overlap the structure on the right controller with an atom on the ligand. Once a yellow outline encloese the atom(s) that you want to build on, press down trigger button on your right controller in order to place the structure.

## How to use the Measurement tool

1. Hold down the B Button on the right controller to bring up the [Tool Menu](https://docs.nanome.ai/navigation/toolsmenu.html#tool-menu), hover the ray over the [Measurement Tool](https://docs.nanome.ai/navigation/toolsmenu.html#measurement-tool) button to the top right and release B button
2. Overlap the tip of the tool with the atom that you want to measure and press trigger on the right hand controller to place a measurement point.
3. Do the same action for another atom in order to create a distance measurement between the two atoms

## How to change the color of your avatar

VR: 

1.Press the Y Button on the left controller to bring up the [Action Menu](https://docs.nanome.ai/navigation/actionmenu.html#action-menu).

Desktop: 

1.Right-click anywhere in the window.  

2.Click on the Settings Button at the bottom of the [Action Menu](https://docs.nanome.ai/navigation/actionmenu.html#action-menu) to open Settings Submenu.
3.Click on the Change My Color button to change avatar color.



## How to view Windows content in Nanome

<vimg src="howto-page/WindowsContent.gif" />

When using the Oculus Rift/Rift S or Oculus Link (Quest connected to a desktop), users can take advantage of Oculus Dash to ‘pin’ windows or their entire desktop in VR and Nanome. This means users can view excel sheets, websites, and other 3rd party software while the headset is on. This way, users can seamlessly work in Nanome with their existing desktop apps. However, please note that this pinned window is not visible to other users in the same room. If you want to collaboratively view a PDF file with your colleague in Nanome, please [load](https://docs.nanome.ai/navigation/menus.html#load) the PDF file into your workspace.

To view the documentation on how to use Oculus Dash, please visit the official oculus support page: [https://support.oculus.com/166993604065478/](https://support.oculus.com/166993604065478/)

To view a tutorial on how to use oculus dash to pin windows, we recommend this uploadVR article here: [https://uploadvr.com/oculus-dash-windows-button/](https://uploadvr.com/oculus-dash-windows-button/)

### How to capture 2D videos in Oculus Quest

To view a tutorial on how to capture 2D videos and retrieve them in Oculus Quest, we recommend this uploadVR article here: [https://uploadvr.com/how-to-transfer-screenshots-videos-quest/](https://uploadvr.com/how-to-transfer-screenshots-videos-quest/)

## How to capture 2D videos on PC

To view a tutorial on how to capture 2D videos on PC, we recommend this PCMag article here: [https://www.pcmag.com/how-to/how-to-capture-video-clips-in-windows-10](https://www.pcmag.com/how-to/how-to-capture-video-clips-in-windows-10)


## How to capture mixed reality video on an Oculus system

To view a tutorial on how to capture mixed reality videos on an Oculus system, we recommend this VRfocus article here: [https://www.vrfocus.com/2017/07/a-guide-to-mixed-reality-capture-on-oculus-rift](https://www.vrfocus.com/2017/07/a-guide-to-mixed-reality-capture-on-oculus-rift)

## How to find the log file (Logs) of Nanome sessions for PC-tethered VR

If you experience an issue with Nanome, please be sure to send us the logs for the event (both message.txt and detaileds.txt) so that we can investigate the issue. Feel free to email your bug report to support@nanome.ai.

If you are using PC 2D mode or PC-tethered VR headsets, the logs for your session will be on your computer. If you open up your file explorer, please navigate to the following path:

`C:\Users\\[USERNAME]\AppData\LocalLow\Nanome Inc_\Nanome\History`

A log file's name follows the format of "YYYY-MM-DD_HH-MM-SS_details.txt" and is determined by the starting time of the session.

For frequent users of Nanome, we recommend favoriting this path in your Windows File Explorer to quickly come back to later. 

<vimg src="howto-page/LogFile.png" />

## How to find the log file (Logs) of Nanome sessions for All-in-One VR (e.g. Quest 2/Vive Focus 3)

If you experience an issue with Nanome, please be sure to send us the logs for the event (both message.txt and detaileds.txt) so that we can investigate the issue. Feel free to email your bug report to support@nanome.ai.
### NOTE: 
- #### The VR headset needs to be turned on during this process.
- ####  The computer you are connecting the headset to does not need to be VR-Ready. It can be a generic low spec computer.



All-in-one VR headsets such as the Quest 2 or the Vive Focus 3 are Android based operating systems and log files are saved directly onto the headset. In order to move them or make a copy, you will need to connect your VR device to your computer via a USB-C cable. After pluggin in your headset via USB-C to your computer, make sure to turn on the headset and put it on. You will be prompted in-VR to click "Allow" when prompted to let the computer read the headset's files. 


Note that some USB-C cables are charging only cables and you will need one that can transmit data.

Now that the computer has access to read the VR headset's storage, there are two methods depending on if you are on Windows or Mac.

### Windows
Open your Windows File Explorer and look to the left panel. There you can see Storage Devices that are connected to your computer. You will see an item to the left that lists the associated File Storage for the VR headset. Sometime it is named "Quest" or "Oculus".

### Mac
Please download and install [Android File Transfer]("https://www.android.com/filetransfer/") or your other favorite tool in order to access android device storage.

After the VR device is plugged in, and "Allow" permission was granted from within the headset, a window will show up that you can navigate the Android Device Storage.

Now navigate to:

` "\Internal shared storage\Android\data\com.Nanome.NanomeCuriePublic\files\History"`

A log file's name follows the format of "YYYY-MM-DD_HH-MM-SS_details.txt" and is determined by the starting time of the session.

Make sure to copy the file and paste it onto your Desktop or Downloads folder for future use or bug reporting.
## How to access Nanome on the Oculus Quest family of headsets

Nanome can be loaded onto the Oculus Quest or Oculus Quest 2 via a few different methods. In 2021, Nanome was added to the Oculus App Lab (see [here](https://www.oculus.com/experiences/quest/3077598929010226/)), which means Nanome can now be found in the Quest store. When searching for Nanome, the result will initially be hidden - you need to open the "App Lab" results to find the Nanome application. See the animation below for more details. (Note: this process was performed on a smartphone.)

<vimg src="howto-page/nanome_on_oculus_quest.gif"/>

Downloading Nanome from Oculus App Lab will be the easiest method for getting access to the software on your Quest device. For alternative methods (such as sideloading), you can refer to our [setup page](https://nanome.ai/setup).

## How to use Oculus Dash

<vimg src="howto-page/OculusDash.gif" />

When using the Oculus Rift/Rift S or Oculus Link (Quest connected to a desktop), users can take advantage of Oculus Dash to ‘pin’ windows or their entire desktop in VR and Nanome. This means users can view excel sheets, websites, and other 3rd party software while the headset is on. This way, users can seamlessly work in Nanome with their existing desktop apps.

To view the documentation on how to use Oculus Dash please visit the official oculus support page: [https://support.oculus.com/166993604065478/](https://support.oculus.com/166993604065478/)

To view a tutorial on how to use oculus dash to pin windows, we recommend this UploadVR article here: 
[https://uploadvr.com/oculus-dash-windows-button/](https://uploadvr.com/oculus-dash-windows-button/)

## How to access pre-release beta versions of Nanome

Prior to the official release of each new Nanome version, we will make available a beta release on the Steam and Oculus stores. These are strictly beta builds and are not meant for regular use; rather, you have an opportunity to preview the next version as we are putting the finishing touches on it.

On the Steam store, you can switch to the beta release by following [this guide](https://partner.steamgames.com/doc/store/application/branches). On the Oculus store, refer to the following GIF. (Be sure to switch back to the ‘LIVE’ for the latest stable release.)

<vimg src="howto-page/beta-release-oculus-store.gif" />

If you are participating in our Oculus Quest Nanome beta, please request the pre-release beta of the next version by emailing [support@nanome.ai](mailto:support@nanome.ai).

**REMINDER:** During collaborative sessions with other users, those on different versions will NOT be able to see each other’s lobbies or will have features that may not fully function. For collaborative sessions with other users, please ensure you are on the same version of Nanome.

If you'd like to leave us any feedback on the beta releases, you can fill out [this form](https://forms.gle/DsTkDCuqAzhP4vJR8).

## How to record and share Passthrough Mixed Reality footage using Nanome
For versions of Nanome that support Nanome mixed reality, users will want to record what they see and share it with their colleagues or post how awesome it is online.
 
### Users with access to a Windows 10 Computer
First, please download [Sidequest](https://sidequestvr.com/). This is the unofficial Quest App Store which has the ability to actually stream the video feed from the android device. 

- Connect your Oculus Quest device to your PC with an USB cable, but without activating Oculus Link.
- Open SideQuest and wait for it to connect with the Quest
- If you want, click on the Wi-fi icon to make it connect via Wi-fi to the Quest, so that you be tetherless while recording the video. I would suggest to do it only if you have a fantastic Wi-fi connection, or the quality of the resulting video may degrade
sidequest wireless
- The button in the upper right corner of SideQuest that lets you connect your headset wirelessly
- Click on the Streaming Icon of SideQuest in the menu that is in the upper right corner of your screen
- In the resulting popup, select “Quest 2 Crop” and then “Start Stream”
At this point you should see a window on your screen showing the AR content of the headset
sidequest hot to stream ar

Now you can record the screen content of Nanome. We suggest you to use Open Broadcaster Software (OBS), or the Xbox Game Bar on Windows 10 (you trigger it by pressing Win + G)

### NOTE:
- #### The VR headset needs to be turned on during this process.
- ####  The computer you are connecting the headset to does not need to be VR-Ready. It can be a generic low spec computer.


### Users with access to a Mac computer

Unfortunately, Sidequest does not support streaming the content from the device with the mixed reality footage include. 

This means we need to use a different tool which involve the terminal command line. 
- Open your Mac's Terminal
- [Download Brew](https://brew.sh/)
- [Install Scrcpy](https://ports.macports.org/port/scrcpy/) by using `brew install scrcpy`
- Run Scrcpy entering `scrcpy` in the terminal

This will open a window that streams the video input of your VR device along with the Mixed Reality passthrough content.


<!--
## How to load molecules or workspace



## How to save my molecules or workspace

## How to change the display of the molecule

## How to view a Density Map

## How to change the Density Map Configuration

## How to play a trajectory

## How to view docked results

## How to focus on a binding site

## How to build a small molecule

## How to build an animation via frame duplication

## How to measure distances

## How to rotate a bond with measurements

## How to do advanced selection

## How to mutate a residue

## How to align structures through the RMSD plugin

## How to hide the environment

## How to export an image or file

## How to request presenter

## How to change the audio settings

## How to change your name

## How to teleport

## How to build/modify a macro -->
