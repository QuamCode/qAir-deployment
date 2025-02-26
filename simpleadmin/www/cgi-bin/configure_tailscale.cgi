#!/bin/sh
echo "Content-type: text/plain"
echo ""

# Define toolkit paths and environment variables
export PATH=/bin:/sbin:/usr/bin:/usr/sbin:/opt/bin:/opt/sbin:/usrdata/root/bin
GITUSER="QuamCode"
REPONAME="qAir-deployment"
GITTREE="SDXLEMUR"
GITROOT="https://raw.githubusercontent.com/$GITUSER/$REPONAME/$GITTREE"
TAILSCALE_DIR="/usrdata/tailscale"

# Helper functions
remount_rw() {
  echo "Remounting filesystem as read-write..."
  mount -o remount,rw / 2>&1
}

remount_ro() {
  echo "Remounting filesystem as read-only..."
  mount -o remount,ro / 2>&1
}

# Get the 'action' parameter from the query string
action=$(echo "$QUERY_STRING" | sed -n 's/.*action=\([^&]*\).*/\1/p')
echo "Received action: $action"
echo "Starting verbose execution..."

case "$action" in
  enable-webui)
    echo "Action: Enable Web UI"
    output=$(remount_rw)
    echo "$output"
    echo "Changing directory to /lib/systemd/system/..."
    cd /lib/systemd/system/ || { echo "Failed to change directory to /lib/systemd/system/"; exit 1; }
    echo "Downloading tailscale-webui.service from $GITROOT/tailscale/systemd/tailscale-webui.service..."
    output=$(wget -O tailscale-webui.service "$GITROOT/tailscale/systemd/tailscale-webui.service" 2>&1)
    echo "$output"
    echo "Downloading tailscale-webui-trigger.service from $GITROOT/tailscale/systemd/tailscale-webui-trigger.service..."
    output=$(wget -O tailscale-webui-trigger.service "$GITROOT/tailscale/systemd/tailscale-webui-trigger.service" 2>&1)
    echo "$output"
    echo "Creating symlink for tailscale-webui-trigger.service..."
    output=$(ln -sf /lib/systemd/system/tailscale-webui-trigger.service /lib/systemd/system/multi-user.target.wants/ 2>&1)
    echo "$output"
    echo "Reloading systemd daemon..."
    output=$(systemctl daemon-reload 2>&1)
    echo "$output"
    echo "Starting tailscale-webui service..."
    output=$(systemctl start tailscale-webui 2>&1)
    echo "$output"
    output=$(remount_ro)
    echo "$output"
    echo "Tailscale Web UI Enabled and started."
    ;;
  disable-webui)
    echo "Action: Disable Web UI"
    output=$(remount_rw)
    echo "$output"
    echo "Stopping tailscale-webui service..."
    output=$(systemctl stop tailscale-webui 2>&1)
    echo "$output"
    echo "Disabling tailscale-webui-trigger service..."
    output=$(systemctl disable tailscale-webui-trigger 2>&1)
    echo "$output"
    echo "Removing symlink for tailscale-webui.service..."
    output=$(rm -f /lib/systemd/system/multi-user.target.wants/tailscale-webui.service 2>&1)
    echo "$output"
    echo "Removing symlink for tailscale-webui-trigger.service..."
    output=$(rm -f /lib/systemd/system/multi-user.target.wants/tailscale-webui-trigger.service 2>&1)
    echo "$output"
    echo "Removing tailscale-webui.service file..."
    output=$(rm -f /lib/systemd/system/tailscale-webui.service 2>&1)
    echo "$output"
    echo "Removing tailscale-webui-trigger.service file..."
    output=$(rm -f /lib/systemd/system/tailscale-webui-trigger.service 2>&1)
    echo "$output"
    echo "Reloading systemd daemon..."
    output=$(systemctl daemon-reload 2>&1)
    echo "$output"
    output=$(remount_ro)
    echo "$output"
    echo "Tailscale Web UI Stopped and Disabled."
    ;;
  connect)
    echo "Action: Connect to Tailnet"
    echo "Executing: $TAILSCALE_DIR/tailscale up --accept-dns=false --reset"
    output=$("$TAILSCALE_DIR/tailscale" up --accept-dns=false --reset 2>&1)
    echo "$output"
    echo "Connected to Tailnet."
    ;;
  connect-ssh)
    echo "Action: Connect to Tailnet with SSH enabled"
    echo "Executing: $TAILSCALE_DIR/tailscale up --ssh --accept-dns=false --reset"
    output=$("$TAILSCALE_DIR/tailscale" up --ssh --accept-dns=false --reset 2>&1)
    echo "$output"
    echo "Connected to Tailnet with SSH enabled."
    ;;
  reconnect)
    echo "Action: Reconnect to Tailnet with SSH off"
    echo "Executing: $TAILSCALE_DIR/tailscale up --accept-dns=false --reset"
    output=$("$TAILSCALE_DIR/tailscale" up --accept-dns=false --reset 2>&1)
    echo "$output"
    echo "Reconnected to Tailnet with SSH off."
    ;;
  disconnect)
    echo "Action: Disconnect from Tailnet"
    echo "Executing: $TAILSCALE_DIR/tailscale down"
    output=$("$TAILSCALE_DIR/tailscale" down 2>&1)
    echo "$output"
    echo "Disconnected from Tailnet."
    ;;
  logout)
    echo "Action: Logout from Tailscale account"
    echo "Executing: $TAILSCALE_DIR/tailscale logout"
    output=$("$TAILSCALE_DIR/tailscale" logout 2>&1)
    echo "$output"
    echo "Logged out from Tailscale account."
    ;;
  *)
    echo "Invalid action. Expected actions: enable-webui, disable-webui, connect, connect-ssh, reconnect, disconnect, logout."
    ;;
esac
