# ./qAir Deployment
Current Branch: **Development**


#### [JUMP TO HOW TO USE](#how-to-use)
**Currently:** This will allow you to install or if already installed, update, remove, or modify:
 -  Admin: A simple web interface for managing modem through it's gateway address
	 - It will install socat-at-bridge: sets up ttyOUT and ttyOUT2 for AT commands. You'll be able to use the `atcmd` command as well for an interactive at command session from adb, ssh, or ttyd
	 - It will install simplefirewall: A simple firewall that blocks definable incoming ports and a TTL mangle option/modifier. As of now only the TTL is controllable through Simple Admin. You can edit port block options and TTL from the 3rd option in the toolkit
 - Tailscale: A magic VPN for accessing Simple Admin, SSH, and ttyd on the go. The Toolkit installs the Tailscale client directly to the modem and allows you to login and configure other settings. Head over to tailscale.com to sign up for a free account and learn more.
 - Schedule a Daily Reboot at a specified time
 - A fix for certain modems that don't start in CFUN=1 mode
 - Entware/OPKG: A package installer/manager/repo
	- Run `opkg help` to see how to use it
	- These packages are installable: https://bin.entware.net/armv7sf-k3.2/Packages.html
 - TTYd: A shell session right from your browser
	 - Currently this uses port 443 but SSL/TLS is not in use (http only for now)
	 - Entware/OPKG is required so it will install it if it isn't installed
	 - This will replace the stock Quectel login and passwd binaries with ones from entware

  
 - Make sure your modem is connected by USB to your computer
 - Run `adb devices` to make sure your modem is detected by adb
 - Run `adb shell ping 8.8.8.8` to make sure the shell can access the internet. 
 - Simply Copy/Paste this into your Command Prompt/Shell 
```bash
adb shell "cd /tmp && wget -O RMxxx_rgmii_toolkit.sh https://raw.githubusercontent.com/QuamCode/qAir-deployment/SDXLEMUR/RMxxx_rgmii_toolkit.sh && chmod +x RMxxx_rgmii_toolkit.sh && ./RMxxx_rgmii_toolkit.sh" && cd /
```

**Or, if you want to stay in the modems shell when you are done**

```
adb shell
```
Then run
```
cd /tmp && wget -O RMxxx_rgmii_toolkit.sh https://raw.githubusercontent.com/QuamCode/qAir-deployment/SDXLEMUR/RMxxx_rgmii_toolkit.sh && chmod +x RMxxx_rgmii_toolkit.sh && ./RMxxx_rgmii_toolkit.sh && cd /
```


### Entware/OPKG installation


It isn't perfect yet so it goes here under Advanced/Beta for now. 
Here's what you gotta know about going into it:

 - After installing, the `opkg` command will work
 - You can run `opkg list` to see a list of installable packages, or head over to  https://bin.entware.net/armv7sf-k3.2/Packages.html
 - Everything opkg does is installed to /opt
 - `/opt` is actually located at `/usrdata/opt` to save space but is   
   mounted at `/opt`
 - Anything `opkg` installs will not be available in the system path by 
   default but you can get around this either:

#### Temporarily:
 Run this at the start of each adb shell or SSH shell session

    export PATH=/opt/bin:/opt/sbin:$PATH

#### Permanently:
Symbolic linking each binary installed by the package to `/bin` and `/sbin` from `/opt/bin` and `/opt/sbin`
For example, if you were to install zerotier:

    opkg install zerotier
    ln -sf /opt/bin/zerotier-one /bin
    ln -sf /opt/bin/zerotier-cli /bin
    ln -sf /opt/bin/zerotier-idtool /bin

Now you can run those 3 binaries from the shell anytime since they are linked in a place already part of the system path.

I plan to create a watchdog service for /opt/bin and /opt/sbin that will automaticly link new packages to /bin or /sbin later on in order to combat this.

### TTYd installation

It isn't perfect yet so it goes here under Advanced/Beta for now. 
Here's what you gotta know about going into it:

 - This listens on port 443 for http requests (no SSL/TLS yet)
 - This will automaticly install entware and patch the login and passwd binaries with ones from entware
 - It will ask you to set a password for the `root` user account
 - TTYd doesn't seem to be too mobile friendly for now but I optimized it the best i could for now so it is at least usable through a smartphone browser. Hopefully the startup script can be improved even more later. 

## Acknowledgements
### GitHub Users/Individuals:
Thank You to: 

[Nate Carlson](https://github.com/natecarlson) for the Original Telnet Deamon/socat bridge usage and the Original RGMII Notes

[aesthernr](https://github.com/aesthernr)  for creating the Original Simple Admin

[rbflurry](https://github.com/rbflurry/) for inital Simple Admin fixes

[dr-dolomite](https://github.com/dr-dolomite) for some major stat page improvements and this repos first approved external PR!

[tarunVreddy](https://github.com/tarunVreddy) for helping with the SA band aggregation parse
