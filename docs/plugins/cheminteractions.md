---
title: Chemical Interactions
---

# Chemical Interaction

The Chemical Interactions plugin visualizes ligand-receptor and protein-protein interactions. It utilizes [arpeggio](https://github.com/PDBeurope/arpeggio) for calculating interactions.


# Instructions

<vimg src="plugins-page/chem_interactions_menu_labeled.png" />

1. Select Structure 1, this should be the receptor, or the larger of the two interacting proteins
2. Set your Selection mode for Structure 2
    - **Selected Atoms/Residues**: Uses the atoms/residues selected in the workspace, and calculates interactions with the Complex selected in Structure 1.
        - The atoms can be from any complex in the Entry List.
        - Does not require the Structure 2 dropdown
    - **Specific Structures**: Select either another complex in the workspace, or a ligand detected in Structue 1.
        - When Structure 1 is selected, the plugin automatically detects ligands inside of the complex, and adds them to the dropdown for Structure 2.
    - For performance, you want to minimize the number of atoms in your selections for Structure 2. Doing a full protein-protein calculation can cause long render times, so we advise you specify the residues of interest.
3. Press Calculate, which will calcuate interactions using arpeggio, and render results in your workspace.
4. Modify the Display Settings to show or hide interactions of interest.

