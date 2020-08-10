---
title: Troubleshooting
---

# Troubleshooting

## Having Trouble Logging into Nanome?

### Open these ports for Firewall

#### In order to use the Nanome application, please allow outbound connections to ports 80 and 443 for the following domains:
- api.nanome.ai
- home.nanome.ai
- nanome.ai
Additionally, allow outbounds connection for UDP Ports 5055, 5056, 5058 to IP: '13.56.83.235' (public multi-user collaboration server)

#### If you are using an Oculus, please allow outbound connections to ports 80 and 443 for the following domains:
- oculus.com
- facebook.com
- fbcdn.net
- akamaidh.net
Additionally, allow outbound connections for ports 3478 TCP and/or 50000-59999 UDP

#### If you want to download files from public protein and drug databases, please allow outbound connections to ports 80 and 443 for the following domains:
- https://files.rcsb.org
- https://www.drugbank.ca
- https://pubchem.ncbi.nlm.nih.gov

#### If you are using Steam, please open these ports to log into Steam and download content:
- HTTP (TCP port 80) and HTTPS (443)
- UDP 27015 through 27030
- TCP 27015 through 27030
For generic Steam HTTP/HTTPS requests, your proxy should allow the following domains:
- steampowered.com
- steamcommunity.com
- steamgames.com
- steamusercontent.com
- steamcontent.com
- steamstatic.com
- akamaihd.net

#### If you are using Nanome Plugin, please allow outbound connections to TCP Ports 8888 and 4530 for this domain:
-  plugins.nanome.ai

#### Oculus for Business Only:
Firewall 443 outbound connectivity to the following URLs:

- https://graph.oculus.com
- https://graph.facebook-hardware.com
- https://graph.facebook.com
- https://mqtt.facebook.com
- https://my.workplace.com

#### Tips to use your Oculus Quest in a VPN network

Method 1: VPN-enabled Hotspot from a Windows 10 PC
Requirements: 
1. An existing organizational VPN and VPN software on your PC
2. Admin access to your Windows 10 PC
3. Have VPN Credentials on hand
4. Validate your Wireless card can support this! https://www.quora.com/How-do-i-know-if-i-have-Qualcomm-Atheros-wireless-card

Once all requirements are met, follow these steps to create a VPN-enabled hotspot:

Step 1: Open your VPN Software, Enter your credentials, and connect to your VPN

Verify you have an internet connection through the VPN and check your IP address to validate it changed and note the location/IP for later (https://whatismyipaddress.com/)

Step 2: Hit Windows Key + type Mobile Hotspot

Open Mobile Hotspot and change your wifi name and password then turn on the hotspot

Step 3: Open your Control Panel > Network and Internet > Network and Sharing Center > Change adapter settings. 

Step 4. Identify which connection is your Ethernet # with the indicator "Unidentified Network, TAP-<VPNType> Windows Adapter 

Step 5: Right click it and go to the Sharing tab

Step 6: Check allow sharing for other users in the network. From the dropdown, select your mobile hotspot connection "Local Area Connection #". It should be labeled as Wifi Direct Virtual Adapter

Step 7: Join the Mobile Hotspot Wifi from your Oculus Quest

Step 8: Verify you have the VPN applied by checking your IP/location (https://whatismyipaddress.com/)

Step 9: Launch and enjoy Nanome behind your firewall!

Oculus for Business FAQ  
[https://developer.oculus.com/documentation/ofb/latest/concepts/ofb-developer-reference/](https://developer.oculus.com/documentation/ofb/latest/concepts/ofb-developer-reference/)

### Allow Nanome through firewall

#### 1. In the Start menu click Settings, and then enter Firewall in the Find a Setting search box.

#### 2. Click Windows Firewall in the search results. In the resulting Windows Firewall window, click Allow an App or Feature through Windows Firewall.
<vimg src="howto-page/Firewall1.png" />

#### 3. In the Allowed Apps window that appears, click the Change Settings button, and then select the check box for Nanome.
<vimg src="howto-page/Firewall2.png" />

If you can't find Nanome in this list, click the Allow another app button, and type in the path to Nanome.exe or click the Browse button and select it.
<vimg src="howto-page/Firewall3.png" />

#### Find Nanome.exe if you installed Nanome using Oculus

<vimg src="howto-page/Path_Oculus0.png" />
<vimg src="howto-page/Path_Oculus1.png" />
If you installed Nanome using Oculus, click on the three dots button and click Details. You can find the location of Nanome to the right.

#### Find Nanome.exe if you installed Nanome using Steam

<vimg src="howto-page/Path_Steam0.png" />
<vimg src="howto-page/Path_Steam1.png" />
If you installed Nanome using Steam, right click on Nanome in the library and click Properties. Select Local Files tab and click Browse Local Files to open the folder containing Nanome.

#### 4. Click OK and then click the Close button to close the Windows Firewall window.

## Having Trouble Hearing Anything?

#### Windows Audio Troubleshooting

[How to fix Windows audio](https://support.microsoft.com/en-us/help/4520288/windows-10-fix-sound-problems)

#### Oculus Audio Troubleshooting

[How to fix Oculus audio](https://support.oculus.com/948087951934283/)

#### Vive Audio Troubleshooting

[How to fix Vive audio](https://www.vive.com/uk/support/vive/category_howto/no-audio-while-using-extension-cable.html)

#### Nanome Audio Troubleshooting

[My Windows and Oculus audio are working, but I can't hear anything in Nanome](https://docs.nanome.ai/navigating.html#settings)