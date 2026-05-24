#!/usr/bin/env sh

if command -v python3 >/dev/null 2>&1; then
  python3 "$(dirname "$0")/hello_world.py"
elif command -v python >/dev/null 2>&1; then
  python "$(dirname "$0")/hello_world.py"
else
  echo "Hello, World!"
fi
