---
title: Conformer Generator
---

# Conformer Generator

<vimg src="plugins-page/conformer-generator/overview.png" />

The Conformer Generator Plugin uses RDKit and UFF minimization to deliver a collection of diverse, low energy conformers of a selected “seed” ligand. 3D results are captured as frames in a single new entry in the workspace. The associated minimized energy and similarity to the seed ligand (RMSD) for the seed and all conformers is accessible in both the Advanced Menu - Frames and via the Data Table Plugin.

## Potential uses

1. Assess whether a protein bound ligand conformation is one of its low energy unbound conformations or if instead it is adopting a higher energy conformation
2. Compare conformer energy and RMSD to that of the “seed” ligand
3. Obtain low energy conformers for further analysis in docking protocols
4. Visualize whether a ligand has many or few diverse low energy conformations available to it, to inform design strategy for more constrained or more flexible analogs
5. Apply conformational analysis to selections for fragment screening and virtual screening as one parameter of hit quality

## Instructions

<vimg src="plugins-page/conformer-generator/plugin-list.png" />

Access the Conformer Generator plugin from the Stacks Menu.

<vimg src="plugins-page/conformer-generator/input-protein.png" />
<vimg src="plugins-page/conformer-generator/input-ligand.png" />

1. In the upper left, the user can select either a protein entry containing a ligand or an individual ligand entry
2. Next the number of conformers to be returned (50, 100 or 200 conformers) is chosen from the pulldown
3. Users may optionally choose to have the conformer set locked with the seed structure
4. Clicking Generate runs the plugin.  During calculation, this button reads “Generating”
5. Once complete, the “Generating” button returns to “Generate” state and a new entry appears in the entry list
6. The new entry of conformer frames has associated meta data of conformation energy and RMSD to seed ligand

<vimg src="plugins-page/conformer-generator/result.png" />

The conformer entry of frames opens in the workspace, and the new entry list item appears, with a link to the Advanced Menu for navigating frames.

<vimg src="plugins-page/conformer-generator/frames.png" />

Advanced Menu allows sorting and playing back through the conformers, as well as viewing the energy and RMSD of each conformer.

<vimg src="plugins-page/conformer-generator/data-table.png" />
<vimg src="plugins-page/conformer-generator/data-table-graph.png" />

The Data Table plugin can also be used to view results and is accessible through the Stacks Menu. Energy and RMSD to seed ligand may be sorted and filtered in the table, and plotted graphically. Note the seed ligand at RMSD=0 highlighted here.
