---
title: Main Menus
---

# Main Menus

# Entry List

<vimg src="navigating-page/entry_list_updated.png" />

The Entry List is a list of all of the structures that have been loaded into the environment.

The Load, Plugin, Display, Color, Modify, Select, and Macro Menus can be displayed by clicking their respective icons located at the bottom of the Entry List.

# Quest Limiter

<vimg src="navigating-page/Limiter.jpg" />

The Quest Limiter is an indicator that shows how close the current amount of atoms is to hitting the limit of Quest's computing capability. This indicator only shows up in the Quest version of Nanome software. When the amount of atoms approaches or hit the limit, the following prompts will show up.

<vimg src="navigating-page/Limiter-Close.jpg" />
<vimg src="navigating-page/Limiter-Max.jpg" />

## Hierarchy Menu

<vimg src="navigating-page/Entry-Hierarchy.jpg" />
<vimg src="navigating-page/Entry-HierarchyMenu.jpg" />

Hierarchy menus lists out the component of an entity, such as chains and residues, in hierarchical levels.

### Different Browsing Modes (Small, Medium, Large)

<vimg src="navigating-page/Entry-SmallIcon.jpg" />
<vimg src="navigating-page/Entry-MediumIcon.jpg" />
<vimg src="navigating-page/Entry-BigIcon.jpg" />

Different Viewing Modes can be toggled to modify the substructure icon sizes in each menu.

### Frame Data

<vimg src="navigating-page/frame_menu_speeds.png" />
<vimg src="navigating-page/Entry-FrameData2.jpg" />

Frame data allows users to navigate and modify different frames of the same structure (Academic and Enterprise only).

### Electron Density Maps

<vimg src="features-page/edm.gif" />
<vimg src="navigating-page/Entry-EDM.jpg" />

The Electron Density tab shows the configuration of viewing the Electron Density Map of the structure (Academic and Enterprise only).

## Menu Actions

<vimg src="navigating-page/entry_list_updated.png" />
Action buttons on the Entry List provide quick access to common actions on the workspace.

| Action        | Description   |Additional Menu|
|:-------------:|:-------------:|:-----:|
|<vimg src="navigating-page/Entry-SelectAll-Button.jpg" /><vimg src="navigating-page/Entry-DeselectAll-Button.jpg" />Select/Deselect All| Select or deselect all present structures.||
|<vimg src="navigating-page/Entry-InvertSelection-Button.jpg" />Invert Selection | Invert current selection.||
|<vimg src="navigating-page/Entry-ToggleLock-Button.jpg" />Toggle Lock | Lock or unlock selected entities.||
|<vimg src="navigating-page/Entry-ToggleBox-Button.jpg" />Toggle Box | Show or hide the box frame of selected entities.||
|<vimg src="navigating-page/Entry-ToggleVisibility-Button.jpg" />Toggle Visibility| Show or hide the selected entities.||
|<vimg src="navigating-page/Entry-Save-Button.jpg" />Save| Save the current workspace.||
|<vimg src="navigating-page/Entry-New-Button.jpg" />New Workspace | Discard the current workspace and create a new one.||
|<vimg src="navigating-page/Entry-Export-Button.jpg" />Export| Export the selected structures in a desired format.| <vimg src="navigating-page/export_menu_update.png" /> |
|<vimg src="navigating-page/Entry-Align-Button.jpg" />Align | Align the selected entities and place them in the same position under the same coordinate system. Caution: this does not necessarily align the entities by their atom position, and the entities could end up not overlapping after the alignment.| |
|<vimg src="navigating-page/Entry-SequenceMenu-Button.jpg" />Sequence | View the seqences of multiple chains and align them.| <vimg src="navigating-page/Entry-SequenceMenu.jpg" /> |
|<vimg src="navigating-page/Entry-Delete-Button.jpg" /> Delete | Delete the selected entities.||

## Load

Load molecules or structures into your workspace. Supported file formats include:
.pdb, .cif, .mmcif, .sdf, .mol, .xyz, .mol2, .ccp4, .dsn6, .dcd, .gro, .pqr, .trr, .xtc, .psf, .pse, .nanome, .png, .jpg, .jpeg, .pdf

### Featured

<vimg src="navigating-page/Load-Featured-Workspace.jpg" />

Workspaces that contain featured structures and tutorials.

<vimg src="navigating-page/Load-Featured-Molecule.jpg" />

Molecules featured by Nanome for their interesting properties or background.

### Database

<vimg src="navigating-page/Load-Database.jpg" />

From the Database tab, structures can be directly loaded from RCSB, DrugBank (Academic and Enterprise only), or Pubchem (Academic and Enterprise only). Custom database can also be added by changing the config file.

### Keyword

<vimg src="navigating-page/Load-Keyword.jpg" />

From the Keyword tab, structure can be loaded from a keyword search.

### My Files

<vimg src="navigating-page/Load-MyFiles.jpg" />

My Files tab allows users to load structures from their local directory.

### Recent

<vimg src="navigating-page/Load-Recent.jpg" />

Recent files loaded in Nanome.

## Stacks

<vimg src="navigating-page/Plugin-List.jpg" />

[Please view the Nanome Stacks page to learn more.](https://docs.nanome.ai/plugins/overview.html)

## Display


### Atom

<vimg src="navigating-page/Display-Atom-Menu.jpg" />

This tab contains options for the visual of atoms and bonds.
| Option        | Description   |Fig.  |
|:-------------:|:-------------:|:-----:|
| <vimg src="navigating-page/Display-Atom-Wire-Button.jpg" />Wire      | Hide atoms and show bonds in thin wire visual. | <vimg src="navigating-page/Display-Atom-Wire-Small.jpg" /> |
| <vimg src="navigating-page/Display-Atom-Stick-Button.jpg" />Stick      | Show small atoms and bonds in volumetric stick visual.      |   <vimg src="navigating-page/Display-Atom-Stick-Small.jpg" /> |
| <vimg src="navigating-page/Display-Atom-Vanderwal-Button.jpg" />Van Der Waals | Show atoms in thin Van Der Waals visual and hide bonds.      |    <vimg src="navigating-page/Display-Atom-Vanderwal-Small.jpg" /> |
| <vimg src="navigating-page/Display-Atom-Adaptive-Button.jpg" />Adaptive | Show atoms with radius proportion to their color value and hide bonds.      |    <vimg src="navigating-page/Display-Atom-Adaptive-Small.jpg" /> |
| <vimg src="navigating-page/Display-Atom-BallnStick-Button.jpg" />Ball & Stick | Hide all atoms and bonds. | <vimg src="navigating-page/Display-Atom-BallnStick-Small.jpg" /> |

### Ribbon

<vimg src="navigating-page/Display-Ribbon-Menu.jpg" />

This tab contains options for the visual of ribbons.

| Visual        | Description   |Fig.  |
|:-------------:|:-------------:|:-----:|
| <vimg src="navigating-page/Display-Ribbon-Cartoon-Button.jpg" />Cartoon | Show ribbon in cartoon visual that highlight secondary structures using helix and arrows. | <vimg src="navigating-page/Display-Ribbon-Cartoon-Small.jpg" /> |
| <vimg src="navigating-page/Display-Ribbon-Coil-Button.jpg" />Coil | Show ribbon in uniform tube visual.| <vimg src="navigating-page/Display-Ribbon-Coil-Small.jpg" />|
| <vimg src="navigating-page/Display-Ribbon-Putty-Button.jpg" />Putty | Show ribbon in tube with widths proportion to the atoms' color value.| <vimg src="navigating-page/Display-Ribbon-Putty-Small.jpg" />|

### Surface

<vimg src="navigating-page/Display-Surface-Menu.jpg" />

Toggle the visibility of solvent-excluded-surface or change its opacity.

### Sub Structure

<vimg src="navigating-page/Display-SubStructure-Menu.jpg" />

| Option        | Description   |Fig.  |
|:-------------:|:-------------:|:-----:|
| <vimg src="navigating-page/Display-SubStructure-Hetatoms-Button.jpg" />Hetatoms | Show hetatoms. | <vimg src="navigating-page/Display-SubStructure-Hetatoms-Small.jpg" /> |
| <vimg src="navigating-page/Display-SubStructure-Water-Button.jpg" />Waters | Show hetatoms, including water.| <vimg src="navigating-page/Display-SubStructure-Water-Small.jpg" />|
| <vimg src="navigating-page/Display-SubStructure-Hydrogen-Button.jpg" />Hydrogens | Show hydrogens.| <vimg src="navigating-page/Display-SubStructure-Hydrogen-Small.jpg" />|

### Labels

<vimg src="navigating-page/Display-Label-Menu.jpg" />

| Option        | Description   |Fig.  |
|:-------------:|:-------------:|:-----:|
| <vimg src="navigating-page/Display-Label-Atom-Button.jpg" />Atoms | Show labels on atoms. | <vimg src="navigating-page/Display-Label-Atom-Small.jpg" /> |
| <vimg src="navigating-page/Display-Label-Residue-Button.jpg" />Residue | Show labels on residues.| <vimg src="navigating-page/Display-Label-Residue-Small.jpg" />|

## Color

Apply a solid color or a color scheme on the selected structures.

### Picker

<vimg src="navigating-page/Color-Picker-Menu.jpg" />

Colors picked in picker are applied in a solid style.

| Option        | Description   |Fig.  |
|:-------------:|:-------------:|:-----:|
| <vimg src="navigating-page/Color-Carbonite-Button.jpg" />Carbonite | Carbonite color applies only to carbons. | <vimg src="navigating-page/Color-Carbonite-Small.jpg" /> |
| <vimg src="navigating-page/Color-Monochrome-Button.jpg" />Monochrome | Monochrome color applies to all atoms indifferently.| <vimg src="navigating-page/Color-Monochrome-Small.jpg" />|

### Schemes

<vimg src="navigating-page/Color-Scheme-Menu.jpg" />

Colors picked in schemes are applied in a certain pattern.

- YRB Hydrophobe

<vimg src="navigating-page/Color-Hydrophobe-Small.jpg" />

Color selected structures by their hydrophobicity with yellow, red, blue colors.

- IMGT

<vimg src="navigating-page/Color-IMGT-Small.jpg" />

Color selected antibody structures by their regions.

Other available color schemes include coloring by occupancy, b-factor, rainbow and so on.

## Modify

### Edit

<vimg src="navigating-page/Modify-Edit.jpg" />

Edit the selected structures by applying actions from the buttons.

### Compute

<vimg src="navigating-page/Modify-Compute.jpg" />

Apply certain computations on the selected structures and modify them according to the result.

- Calculate ESP

<vimg src="navigating-page/Modify-ESP.jpg" />

Generate the Electron Potential Map of the selected structure.

- Calculate Clashes

<vimg src="navigating-page/Modify-Compute-Clashes.jpg" />

Config the tolerance of atom clashes.

- Calculate Hbond

<vimg src="navigating-page/Modify-Compute-Hbond.jpg" />

Config the threshold for generating h-bonds.

- Minimize

<vimg src="navigating-page/Modify-Compute-Minimize.jpg" />

Config forcefield and step for minimizing potential energy of selected structures.

### Tools

<vimg src="navigating-page/Modify-Tools.jpg" />

Switch to a certain tool to directly apply modification to the structures.

### Mutate

<vimg src="navigating-page/Mutate.jpg" />

Mutate the R-groups of the selected amino acids.

## Select

Quickly modify selection range using certain criteria.

### Refine

<vimg src="navigating-page/Selection-Refine.jpg" />

Refine selection by applying certain changes.

- Replace Selection

<vimg src="navigating-page/Selection-Sub-Chain.jpg" />
<vimg src="navigating-page/Selection-Sub-Residue.jpg" />
<vimg src="navigating-page/Selection-Sub-Atom.jpg" />

### Atom Type

<vimg src="navigating-page/Selection.jpg" />

Select or deselect certain types of atoms.

### Residue Type

<vimg src="navigating-page/Selection-ResidueType.jpg" />

Select or deselect certain types of residues.

### Distance

<vimg src="navigating-page/Selection-Distance.jpg" />

Expand or shrink the selection range by physical proximity.

## Macro

<vimg src="navigating-page/Macro.jpg" />

[Please view the macros page to learn more.](https://docs.nanome.ai/macros.html)
