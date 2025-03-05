#!/bin/bash

# Check if /usrdata/socat-at-bridge/atcmd exists
if [ -f "/usrdata/socat-at-bridge/atcmd" ]; then
    # Read the serial number
    serial_number=$(/usrdata/socat-at-bridge/atcmd 'AT+EGMR=0,5' | grep '+EGMR:' | cut -d '"' -f2)
    # Read the firmware revision
    firmware_revision=$(/usrdata/socat-at-bridge/atcmd 'AT+QGMR' | grep -o 'RM[0-9A-Z].*')
else
    serial_number="UNKNOWN"
    firmware_revision="UNKNOWN"
fi

echo "=============================================================="
echo "=============================================================="
echo "=============================================================="
echo "=============================================================="
echo "=============================================================="
echo "=============================================================="
echo "=============================================================="
echo "=============================================================="
echo "=============================================================="
echo "=============================================================="
echo "=============================================================="
echo "=============================================================="
echo "=============================================================="
echo "=============================================================="
echo "=============================================================="
echo "=============================================================="
echo "=============================================================="
# Start your Actual echo output here, 17 lines omitted for mobile compatibility. ttyd font needs to be size 25.
# Echo "Logo"
echo "                                                      "
echo "                                                      "
echo "                     @@@@@@@@@@                      "
echo "                 @@@@@@@@@@@@@@@@@@@@                 "
echo "             @@@@@@                @@@@@@             "
echo "           @@@@@                      @@@@@           "
echo "         @@@@@            @@            @@@@@          "
echo "        @@@@             @@@@             @@@@        "
echo "       @@@              @@@@@@             @@@@       "
echo "      @@@             @@@ @@ @@@             @@@      "
echo "     @@@           @@@@   @@   @@@@           @@@     "
echo "     @@@          @@@@@   @@   @@@@@          @@@     "
echo "    @@@         @@@   @@@ @@ @@@   @@@         @@@    "
echo "    @@@      @@@@@     @@@@@@@@     @@@@@      @@@    "
echo "    @@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     @@@    "
echo "    @@@      @@@@@     @@@@@@@@     @@@@@      @@@    "
echo "    @@@         @@@   @@@ @@ @@@   @@@         @@@    "
echo "     @@           @@@@@   @@   @@@@@          @@@     "
echo "     @@@           @@@@   @@   @@@@           @@@     "
echo "      @@@             @@@ @@ @@@             @@@      "
echo "       @@@              @@@@@@              @@@       "
echo "        @@@@             @@@@             @@@@        "
echo "         @@@@@            @@            @@@@@         "
echo "           @@@@@                      @@@@@@@@        "
echo "             @@@@@@@              @@@@@@@  @@@@@      "
echo "                @@@@@@@@@@@@@@@@@@@@@@       @@@@@    "
echo "                     @@@@@@@@@@@@              @@@@   "
echo "                                                 @@   "
echo "=============================================================="
echo "./qAir Console"
echo "=============================================================="
echo "Firmware Revision: $firmware_revision"
echo "Serial Number: $serial_number"
echo "=============================================================="
# print a caution message about modifying the system and any changes
echo -e "\033[1;33mWARNING: You are accessing the console of this device. Any changes made to the system that disrupt its intended operation may cause the device to go offline or become unstable. Support for issues caused by unauthorized modifications is limited or unavailable. Proceed with caution and at your own risk.\033[0m"



# Start a login session
exec /bin/login
