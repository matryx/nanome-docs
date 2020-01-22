---
title: Troubleshooting
---

# Troubleshooting

## Having Trouble Hearing Anything?

#### Windows Audio Troubleshooting

[How to fix Windows audio](https://support.microsoft.com/en-us/help/4520288/windows-10-fix-sound-problems)

#### Oculus Audio Troubleshooting

[How to fix Oculus audio](https://support.oculus.com/948087951934283/)

#### Nanome Audio Troubleshooting

[My Windows and Oculus audio are working, but I can't hear anything in Nanome](https://docs.nanome.ai/navigating.html#settings)

## Having Trouble Logging into Nanome?

#### Allow Nanome through firewall

### 1. In the Start menu click Settings, and then enter Firewall in the Find a Setting search box.

### 2. Click Windows Firewall in the search results. In the resulting Windows Firewall window, click Allow an App or Feature through Windows Firewall.
<vimg src="howto-page/Firewall1.png" />

### 3. In the Allowed Apps window that appears, click the Change Settings button, and then select the check box for Nanome.
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

### 4. Click OK and then click the Close button to close the Windows Firewall window.
#### Open these ports for Firewall

Allowing Traffic to the application

- UDP Ports 5055, 5056, 5058 to IP: '13.56.83.235' (public multi-user collaboration server)
- TCP Ports 80 & 443 open for ‘nanome.ai’
- TCP Ports 80 & 443 open for ‘api.nanome.ai’
- TCP Ports 80 & 443 open for ‘home.nanome.ai’


Additional:

- TCP Ports 8888 & 4530 to 'plugins.nanome.ai'

Oculus for Business Only:
Firewall 443 outbound connectivity to the following URLs:

- https://graph.oculus.com
- https://graph.facebook-hardware.com
- https://graph.facebook.com
- https://mqtt.facebook.com
- https://my.workplace.com


Oculus for Business FAQ  
[https://developer.oculus.com/documentation/ofb/latest/concepts/ofb-developer-reference/](https://developer.oculus.com/documentation/ofb/latest/concepts/ofb-developer-reference/)
