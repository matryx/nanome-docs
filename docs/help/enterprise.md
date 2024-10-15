---
title: Enterprise
---

# Enterprise Deployment Information

This section provides additional information and resources for on-prem enteprise deployments. For assistance with setting up or managing your environments, please reach out to your dedicated Nanome representative.

## Recommended Infrastructure

The following diagram illustrates how network traffic in Nanome works, as well as what we recommend for your enterprise network.

<vimg src="help/recommended-infrastructure.png" />

## IT & Networking Requirements

### Virtual Machine #1:

The recommended specs for the Private Server VM are:
- _Amazon AWS T2.Medium EC2 Windows 2012 Server or greater_ **or** *equivalent
- 1 quad core CPU (e.g., Intel Xeon 3440, E3-1230 etc.) 4 GB RAM 1 GBps NIC / uplink port speed 
- Windows Server 2012 and above 
- 10GB + of storage space

### Virtual Machine #2:

The recommend specs for the Dedicated Plugins VM are: 
- _Amazon AWS T2.Large EC2 Linux machine with 30 GB of disk storage_ **or** *equivalent
- 1 GBps NIC / uplink port speed 
- A Linux based operating system (Ubuntu or CentOS) 
- 4 CPU - equiv. to an Intel Broadwell E5-2686v4 or higher
- 8GB of RAM 
- 90GB of Storage space 
- 1 GBps NIC /uplink port speed

### Inbound Ports

The following inbound ports are required for VM #1 to connect to the VR devices:
- UDP 5055, 5056
- TCP 443, 80, 8888

The following inbound ports are required for VM #2 to allow connection to plugin webpages (like Vault and Data Table):

- TCP 80, 443

### Outbound Ports

The following outbound ports are needed on each of the VR devices for internal collaboration:
- UDP Ports: 5055, 5056 towards VM #1
- TCP Ports 8888 towards the VM #1
- TCP Ports 80 & 443 towards VM #2
- TCP Port 443 open for ”api.nanome.ai”
- TCP Port 443 open for “home.nanome.ai”
- TCP Port 443 open for “cms.nanome.ai”


### Nanome Collaboration for training sessions

The following outbound ports are needed on each of the VR devices for external training sessions with Nanome:
- UDP 5055, 5056 towards the DNS “collaboration.nanome.ai”
- TCP 8888 towards DNS “plugins.nanome.ai”


## Plugin Deployment Procedure & Security Info

`code block`
