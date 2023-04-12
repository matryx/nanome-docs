---
title: Cryo-EM
---

# Cryo-EM

The Cryo-EM plugin allows you to load Cryo-EM maps from the Electron Microscopy Data Bank (EMDB), and align it with it's corresponding model from RCSB database.

##  Instructions

### Load Map and Model
<vimg src="plugins-page/cryo-em/CryoMainMenu.png" />
<i>Cryo-EM main menu</i>

1. Ensure that a MapGroup is selected on the right hand side of the main menu
    - Map groups are used to organize your maps and models. You can have 1 map per Mapgroup, with multiple models.
    - The map group with a green square next to it is the one that the maps/models will be added to in the following steps
2. Find the EMDB ID for the map you wish to load. Enter the id in the Textbox and press Load
    - The Browse EMDB button will open EMDB in the web browser
    - Files must be under 500MB. Unfortunately there is no way to tell unless you try loading it.

3. After the Map loads, the RCSB code will be prepopulated in the next Textbox. Load this by pressing load.
    - The structure will be added to your workspace, and aligned to the previously loaded map.

### Edit Map
<vimg src="plugins-page/cryo-em/CryoEditMapMenu.png" />
<i>Cryo-EM Edit Map Menu</i>

To edit map colors and isovalues, click the mapgroup on the right hand side. This will open the Edit Map Menu.

#### Edit Isovalue
Select a new isovalue on the slider, and press the "Redraw Map" button

#### Change Color Scheme
On the bottom of the menu, there is a dropdown to edit the coloring scheme of the map. 

Note that color schemes are based on loaded model, so just a map on its own will not be colored.

Color Options:
- **Element**: When a model is present, the map is colored according to the nearest element on the model
- **BFactor**: Colored according to model BFactor
- **Chain**: Each chain on the model is given a different color.

#### Viewport Editor
We provide the ability to use only show a small subset of the loaded map.

When you press the Apply Viewport button. A gray sphere will be rendered near your map. This sphere can be moved to cover the section of your map you wish to keep. It can be resized using the viewport radius, with a max size of 50 angstroms. When the sphere is placed where you want, press Apply viewport, and the map should be trimmed to just what is inside of the sphere.
    