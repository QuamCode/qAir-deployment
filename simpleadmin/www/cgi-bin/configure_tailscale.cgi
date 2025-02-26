#!/bin/sh
echo "Content-type: text/plain"
echo ""

# Define toolkit paths and environment variables
export PATH=/bin:/sbin:/usr/bin:/usr/sbin:/opt/bin:/opt/sbin:/usrdata/root/bin
GITUSER="iamromulan"
REPONAME="quectel-rgmii-toolkit"
GITTREE="SDXLEMUR"
GITROOT="https://raw.githubusercontent.com/$GITUSER/$REPONAME/$GITTREE"
TAILSCALE_DIR="/usrdata/tailscale"

# Helper functions
remount_rw() {
  mount -o remount,rw /
}

remount_ro() {
  mount -o remount,ro /
}

# Get the 'action' parameter from the query string
action=$(echo "$QUERY_STRING" | sed -n 's/.*action=\([^&]*\).*/\1/p')

case "$action" in
  enable-webui)
    remount_rw
    cd /lib/systemd/system/
    wget -O tailscale-webui.service "$GITROOT/tailscale/systemd/tailscale-webui.service"
    wget -O tailscale-webui-trigger.service "$GITROOT/tailscale/systemd/tailscale-webui-trigger.service"
    ln -sf /lib/systemd/system/tailscale-webui-trigger.service /lib/systemd/system/multi-user.target.wants/
    systemctl daemon-reload
    systemctl start tailscale-webui
    remount_ro
    echo "Tailscale Web UI Enabled and started."
    ;;
  disable-webui)
    remount_rw
    systemctl stop tailscale-webui
    systemctl disable tailscale-webui-trigger
    rm -f /lib/systemd/system/multi-user.target.wants/tailscale-webui.service
    rm -f /lib/systemd/system/multi-user.target.wants/tailscale-webui-trigger.service
    rm -f /lib/systemd/system/tailscale-webui.service
    rm -f /lib/systemd/system/tailscale-webui-trigger.service
    systemctl daemon-reload
    remount_ro
    echo "Tailscale Web UI Stopped and Disabled."
    ;;
  connect)
    echo "Connecting to Tailnet..."
    "$TAILSCALE_DIR/tailscale" up --accept-dns=false --reset
    echo "Connected to Tailnet."
    ;;
  connect-ssh)
    echo "Connecting to Tailnet with SSH enabled..."
    "$TAILSCALE_DIR/tailscale" up --ssh --accept-dns=false --reset
    echo "Connected to Tailnet with SSH enabled."
    ;;
  reconnect)
    echo "Reconnecting to Tailnet with SSH off..."
    "$TAILSCALE_DIR/tailscale" up --accept-dns=false --reset
    echo "Reconnected to Tailnet with SSH off."
    ;;
  disconnect)
    echo "Disconnecting from Tailnet..."
    "$TAILSCALE_DIR/tailscale" down
    echo "Disconnected from Tailnet."
    ;;
  logout)
    echo "Logging out from Tailscale account..."
    "$TAILSCALE_DIR/tailscale" logout
    echo "Logged out from Tailscale account."
    ;;
  *)
    echo "Invalid action. Expected actions: enable-webui, disable-webui, connect, connect-ssh, reconnect, disconnect, logout."
    ;;
esac
