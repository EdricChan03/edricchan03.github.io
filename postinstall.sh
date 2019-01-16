#!/bin/bash

# echo "Current directory/file permissions:"

# ls -hAFl

echo "Copying node_modules to _sass directory..."
if [[ -z "$GITHUB_WORKSPACE" ]]; then
  # Running in GitHub Action Docker container
  sudo cp -Rf node_modules _sass/
else
  # Running locally
  cp -Rf node_modules _sass/
fi

echo "Done copying."
