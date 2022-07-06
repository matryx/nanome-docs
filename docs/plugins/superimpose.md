---
title: Superimpose Proteins
---

# Superimpose Proteins

The Superimpose Proteins plugin overlays two or more proteins in 3D space for visual comparison and calculates Root Mean Square Deviation (RMSD) values as a numeric metric on structural similarity.   Protein overlay is done either by using backbone (alpha-carbons) or by using all heavy protein atoms; and the alignment can be done on the full protein or limited to a chain. A Fixed Reference structure is chosen, and Moving Structures are translocated to be superimposed upon the Fixed Reference.  RMSD values are reported between the Fixed Reference and each Moving Structure.

# Instructions
<br>
<vimg src="plugins-page/superimpose_menu.png" />

1. In the upper left, Superimpose Proteins Using **Backbone α carbons** is the default selection, and will result in an overlay based on all paired alpha carbons between the two proteins.   Switching this selection to Superimpose Proteins Using **All Heavy Atoms** uses backbone atoms and side chain atoms (all protein atoms except for Hydrogen) for all paired residues.

2. In the upper right, **Align to Entire Fixed Reference** is the default selection and will result in overlay of the full proteins.  Changing this selection to **1 specific Chain from the Fixed Reference** will make the chain selection boxes active, and will result in overlay by just the selected chain in each protein.   

3. A list of proteins in the workspace appears in the main panel.  In this panel, choose **Fixed Reference** and **Moving Structures**, and subselect a chain for each, if aligning by chain (see 4, below).
    - By default, the first entry is set as Fixed, and designated by the yellow pin. When selected as Fixed, the box under Moving will be inactive.  To change this selection, select the pin next to the desired Fixed Reference protein.

    - Choose one or more Moving Structures by selecting the boxes under the Moving Structures column.  This box will turn green when selected.  
    
    - Once selections are made, the Superimpose button in the lower right will become active and show the number of proteins selected.  (e.g. “Superimpose (3)” for a Fixed Reference and 2 Moving Structures).  Click this button to superimpose the proteins and calculate RMSD values.   The button will change to “calculating” as the process is being completed.  
    
    - Once complete, the proteins will be superimposed and locked, for visual inspection.  The RMSD tables pulldown menu in the lower right will become active.   Each superimpose run will generate a new table, with the most recent run appearing at the top of the pulldown list.  Select the run to open the table in the workspace.  Tables can be closed and reopened in the workspace.

<vimg src="plugins-page/superimpose_protein.png" />
<vimg src="plugins-page/superimpose_rmsd_menu.png" />

4. When aligning by chain, the main panel chain selection boxes will become active. 
Choose **Fixed** and **Moving structures** as above, and additionally choose a chain for each protein to be superimposed.  
    
    - Note that selecting a chain on the plugin main panel will also apply green highlighting to the selected chain of the protein structure, to visualize the selections before running.

<vimg src="plugins-page/superimpose_menu_2.png" />
<vimg src="plugins-page/superimpose_rmsd_menu_2.png" />

5. **RMSD table** reports fixed and moving structures (with chain when relevant) RMSD values, and the number of paired residues/atoms
    
    - Note that when superimposing by backbone alpha carbons, the #of paired residues = #of paired atoms;  when superimposing by all heavy atoms, the # paired residues will be ~8x less than the #of paired atoms because there are on average ~8 heavy atoms per residue.
    
    - For two identical proteins, the RMSD would be zero.  Values close to zero indicate highly similar proteins.  Values over 10 are very different.  A combination of visual inspection and RMSD values gives a reasonable indication of how similar the structures are.


# Methodologies

For this plugin, we heavily utilize tools in the biopython library.

## Primary modules
[Bio.pairwise2](https://biopython.org/docs/1.75/api/Bio.pairwise2.html#module-Bio.pairwise2) <br>
[Bio.PDB.Superimposer](https://biopython.org/docs/1.75/api/Bio.PDB.Superimposer.html#module-Bio.PDB.Superimposer)

## Summary:
For each pairing of fixed structure and moving structure: 
    - A global alignment is run on protein residue sequences using Bio.pairwise2
    - Aligned residue atoms are passed into Bio.PDB.Superimposer, which calculates an RMSD value and a transform matrix.
    - We apply the transform matrix to every moving atom on the complex.

After all moving atoms have been transformed, we update the complexes in the workspace.

## Implementation Details

### Alignment
- For Entry mode, the entire protein sequence is aligned.
- For Chain mode, only the specified chains are aligned.

#### Global alignment scoring values
- match = 2
- mismatch = -1
- gap penalty = -10
- gap extend penalty = -.5

### Superimpose
- If the alpha carbon overlay method is selected, we only pair the alpha carbons from each residue.
- If all heavy atoms overlay method is selected, we attempt to pair all heavy atoms. In some cases, we cannot get a 1-1 pairing of heavy atoms. In this case, those residues are excluded from the superimpose
