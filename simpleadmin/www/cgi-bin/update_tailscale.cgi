#!/bin/sh
echo "Content-type: text/plain"
echo ""

# Define toolkit paths and environment variables
export PATH=/bin:/sbin:/usr/bin:/usr/sbin:/opt/bin:/opt/sbin:/usrdata/root/bin
GITUSER="QuamCode"
REPONAME="qAir-deployment"
GITTREE="SDXLEMUR"
GITROOT="https://raw.githubusercontent.com/$GITUSER/$REPONAME/$GITTREE"
USRDATA_DIR="/usrdata"
TAILSCALE_DIR="/usrdata/tailscale"

# Helper functions
remount_rw() {
  mount -o remount,rw /
}

remount_ro() {
  mount -o remount,ro /
}

echo "Installing Tailscale from branch: $GITTREE"
mkdir -p "$USRDATA_DIR/simpleupdates/scripts"

# Download the update script and make it executable
wget -O "$USRDATA_DIR/simpleupdates/scripts/update_tailscale.sh" "$GITROOT/simpleupdates/scripts/update_tailscale.sh" && chmod +x "$USRDATA_DIR/simpleupdates/scripts/update_tailscale.sh"

echo "Installing/updating Tailscale. Please wait..."
remount_rw
"$USRDATA_DIR/simpleupdates/scripts/update_tailscale.sh"
echo "Tailscale has been updated/installed."
remount_ro
