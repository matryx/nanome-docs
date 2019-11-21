---
Title: Nanome Vault
---

# Nanome Vault

The Nanome Nanome Vault allows for the distribution of files (PDB, SDF, PDF, PPT, etc.) to be drag-and-dropped into a web interface to be made available inside of the Nanome VR software.

## Installation (Windows)

Required dependencies:
- Python3 & Pip
- Nanome Library
- Nanome Vault Plugin

Optional dependencies:
- Ghostscript (required for pdf support)
- ImageMagick (required for pdf support)
- Libre Office (required for pdf, ppt, and odp support)

### Installing Dependencies

1. Install Python
   - <https://www.python.org/ftp/python/3.8.0/python-3.8.0.exe>
   - Don’t forget to click the checkbox to add Python3 to PATH

2. Open a command prompt

3. Type `python --version` to verify the version is Python 3.0+

4. Upgrade your Pip library
   - `python -m pip install --upgrade pip`

5. Install the latest Nanome Lib with `pip`
   - `pip install nanome`

6. Install the Nanome Vault Plugin with `pip`
    - `pip install nanome-vault`

### Installing Optional Dependencies

1. Install GhostScript
   - <https://github.com/ArtifexSoftware/ghostpdl-downloads/releases/download/gs950/gs950w64.exe>

1. Install ImageMagick
   - <https://imagemagick.org/download/binaries/ImageMagick-7.0.9-5-Q16-x64-dll.exe>

1. Install Libre Office
   - <https://www.libreoffice.org/donate/dl/win-x86_64/6.3.3/en-US/LibreOffice_6.3.3_Win_x64.msi>

1. Add Libre Office to the PATH environmental variable
   - Search "env" from the Windows Search Bar and click on the "Edit System Environment Variables" in the control panel.

   ![](/assets/plugins-page/search_env.png)

   - Click on the "Environment Variables" button

   ![](/assets/plugins-page/find_env.png)

   - Click the Edit button for the PATH variable

   ![](/assets/plugins-page/edit_path.png)

   - Click the Browse button and select LibreOffice/program in the Program Files

   ![](/assets/plugins-page/browse_path.png)


## Running Nanome Vault

Run the Nanome Vault plugin with:\
`nanome-vault -a localhost`

The `-a` denotes the address of the Plugin Server IP

![](/assets/plugins-page/running_plugin.png)


## Web Interface

Once the Nanome Vault plugin is running, you can visit <http://localhost> in your browser to see the Web Interface.

![](/assets/plugins-page/nanome-vault/web.png)

### Folders

At the root level, there are two folders: **shared** and **account**.

The **shared** folder is accessible to all users connected to the plugin, whereas the **account** folder is only accessible to your Nanome account.

To log in on the web interface, either click the "log in" next to "Welcome!", or double-click the **account** folder. Enter your Nanome account credentials in the popup that appears and click "log in".

![](/assets/plugins-page/nanome-vault/web-login.png)

Once you are logged in, you can use the **account** folder.

![](/assets/plugins-page/nanome-vault/web-account.png)

### Uploading and Managing Files

To upload files, you can either drag and drop a file onto the webpage, or click the upload button.

![](/assets/plugins-page/nanome-vault/web-upload.png)

Try it out! Download a sample PDF and drag-and-drop it into the Web Interface. An example can be found here:\
<https://drive.google.com/drive/folders/1JU4jVMH6X_uMjN03mIZCpm9rH62UCDVC>

To create folders, you can either click the new folder button or right-click and select "new folder". This will prompt you for the folder name and create the folder in the current directory.

To delete files or folders, right-click the item and select "delete", and then confirm in the dialog that appears.

## VR Interface

Launch Nanome and create a room. Open the Plugins Menu with the button on the Entry Menu to see your plugin populated.

![](/assets/plugins-page/nanome-vault/plugin-list.png)

Like the web interface, at the root level there are two folders: **shared** and **account**.

![](/assets/plugins-page/nanome-vault/plugin.png)

You can browse and load items from the folder structure by clicking on items in the list.

![](/assets/plugins-page/nanome-vault/plugin-shared.png)

To upload structures from your workspace, browse to the directory you want to upload to and click on the "upload here" button. This will prompt you to select a structure. After you select a structure, upload it by selecting the format you want (PDB, SDF, or MMCIF).
