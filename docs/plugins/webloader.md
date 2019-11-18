---
Title: Web Loader
---

# Web Loader

_Installing your first plugin: Nanome Web Loader_

The Nanome Web Loader allows for the distribution of files (PDB, SDF, PDF, PPT) to be drag-and-dropped into a web interface and then available inside of the Nanome VR software.

\*Windows
Required dependencies:

- Python3 & Pip
- Ghostscript
- ImageMagick
- Nanome Library
- Libre Office
- Nanome-Loaders Plugin

_Instructions_

1. First, you need to install Python

- https://www.python.org/ftp/python/3.7.3/python-3.7.3.exe
- Don’t forget to click the checkbox to add Python3 to PATH

2. Open a command prompt
3. Type `python` to verify the version is Python 3.0+, then exit()
4. Upgrade your Pip library

- `python -m pip install --upgrade pip`

5. Install GhostScript

- https://github.com/ArtifexSoftware/ghostpdl-downloads/releases/download/gs927/gs927w64.exe

6. Install ImageMagick

- https://imagemagick.org/download/binaries/ImageMagick-7.0.8-56-Q16-x64-dll.exe

7. Install Libre Office

- https://www.libreoffice.org/donate/dl/win-x86_64/6.2.4/en-US/LibreOffice_6.2.4_Win_x64.msi

8. Add Libre Office to the PATH environmental variable

- Search ‘env’ from the Windows Search Bar and click on the ‘Edit System Environment Variables’ in the control panel.

![](/assets/plugins-page/search_env.png)

- Click on the ‘Environment Variables’ button

![](/assets/plugins-page/find_env.png)

- Click the Edit button for the PATH variable

![](/assets/plugins-page/edit_path.png)

- Click the Browse button and select LibraOffice/program in the Program Files

![](/assets/plugins-page/browse_path.png)

9. Install the latest Nanome Lib through Pip

- enter `pip install nanome`

10. Install the Nanome Loaders Plugin

- Enter `pip install nanome-loaders`

11. Run the Nanome Loaders’ WebLoader plugin

- Enter `nanome-web-loader -a localhost`
- The `-a` denotes the address of the Plugin Server IP

![](/assets/plugins-page/running_plugin.png)

12. You now can open up your browser and go to http://localhost to see the Web Interface

![](/assets/plugins-page/webloader_browserprompt.png)

13. Drag and drop a sample PDF into the Web Interface. I have provided one for download here: https://drive.google.com/drive/folders/1JU4jVMH6X_uMjN03mIZCpm9rH62UCDVC?usp=sharing

![](/assets/plugins-page/webloader_uploaded.png)

14. Go ahead and launch Nanome and create a room in 2D mode. Navigate to the Plugins Menu through the button on the Entry Menu to see your plugin populated.

\*You can move windows around in 2D mode by right-clicking and dragging the window.
\*\* Hit the escape key to see the controls and make changes to the application

![](/assets/plugins-page/2Dmode_plugins.png)

15. Activate the plugin, select your uploaded file and click Load. This will open a new window with your PDF and is resizable.