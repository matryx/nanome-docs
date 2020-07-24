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

## How to find the log file of a previous session

<vimg src="howto-page/LogFile.png" />

If you had a crashed session or encountered any issues in Nanome, you can go to "C:\Users\\[USERNAME]\AppData\LocalLow\Nanome Inc_\Nanome\History" to retrieve the log file and send it to us at support@nanome.ai so that we can help you troubleshoot the problem.

A log file's name follows the format of "YYYY-MM-DD_HH-MM-SS_details.txt" and is determined by the starting time of the session.


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
