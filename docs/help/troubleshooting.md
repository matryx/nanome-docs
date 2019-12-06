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

#### Required Ports for Firewall

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
https://developer.oculus.com/documentation/ofb/latest/concepts/ofb-developer-reference/
