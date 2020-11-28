---
title: Overview
---

# Overview

*Nanome Stacks is a plugin API that provides a way to interface and integrate external software with Nanome's collaborative molecular modeling VR/AR software.*

## Nanome Stacks, Plugins and how to use them

 Nanome stacks is a grouping of plugins, macros, and any other configurations. Plugins allow the VR/AR software to off-board the heavy calculations and tools integrations into scalable cloud computing. Not only does API enable the current VR/AR standalone headsets which have low computation power. It also extends your scientific capabilities by leveraging existing expert tools and radically advanced computation techniques whose only limit is your AWS credits and creativity.

A rule of thumb is that any 3rd Party application that can interact using a command line or a python script would be easy to build a plugin for. Plugins can be designed and ran from different environments including Windows, Linux, and Mac operating systems depending on the requirements needed from the plugin.

Some examples of plugins that our customers love are:
- Nanome Vault: Drag and Drop files on a website and access them on any device running Nanome (Amazing for Quest storage)
- Docking: Running and viewing docking results (Autodock, etc)
- ChemProps: Live chemical property prediction during design with RDKit 
- MD: Running molecular dynamics simulations from OpenMM
- All of our public plugins are available on our [Github](https://github.com/nanome-ai).

The primary requirements for running plugins is the Nanome Virtual Reality Software and to have a Stacks Server configured for your Nanome account. *This is Enterprise only at the moment, but Academic BETA users will start in Q2 2020*

The Nanome Stacks Server is a crucial component that acts as a relay to forward information and processes from your running plugin into the Nanome virtual environment. The technical name is NTS or Nanome Transport Server.

If you would like to develop plugins for Nanome on your own, you can do so by checking to see if you are Stack-enabled on your account and [contacting us](mail:hello@nanome.ai) to get a copy of Stack Studio - a graphical drag and drop Nanome menu builder for your plugin.

## Nanome Plugins Full List

The following is the list of some our favorite plugins made by Nanome to date.

- [Vault](vault.md)
- [Minimization](minimization.md)
- [RMSD](rmsd.md)
- [Real-time Scoring](realtimescoring.md)
- [Docking](docking.md)
- [Molecular Dynamics](moleculardynamics.md)
- [Chemical Properties](chemicalproperties.md)
- [Structure Prep](structureprep.md)
- OpenMM Molecular Dynamics Simulations
