---
title: Chemical Interactions
---

# Chemical Interactions

The Chemical Interactions plugin visualizes ligand-receptor and protein-protein interactions. It utilizes [arpeggio](https://github.com/PDBeurope/arpeggio) for calculating interactions.


# Instructions

<vimg src="plugins-page/chem_interactions_menu_labeled.png" />

1. Select Structure 1 from the dropdown. this should be the receptor, or the larger of the two interacting proteins
2. Set your Selection mode for Structure 2
    - **Selected Atoms/Residues**: Uses the atoms/residues selected in the workspace, and calculates interactions with the Complex selected in Structure 1.
        - Atoms/residues can be from any complex in the Entry List.
        - Does not require the Structure 2 dropdown
    - **Specific Structures**: Select either another complex in the workspace, or a ligand detected in Structue 1.
        - When Structure 1 dropdown is populated, the plugin automatically detects ligands inside of the complex, and adds them to the choices for Structure 2 dropdown.
    - For performance, you want to minimize the number of atoms in your selections for Structure 2. Doing a full protein-protein calculation can cause long render times, so we advise you specify the atoms/residues of interest.
3. Press Calculate, which will identify interactions using arpeggio, and render results in your workspace.
4. Modify the Display Settings to show or hide interactions of interest.
    - Change the visibility or color of each interaction type
    - `Hide All`: Quickly Hide all interaction lines. Toggles through _Hide All_, _Show All_, and _Show Default_ 
    - `Clear Frame` button will delete all interaction lines currently visible in the workspace.
