#!/bin/bash

pendingChanges=$( git diff-index --name-only HEAD -- )

if [[ $? != 0 ]]; then
  echo "Pending changes check failed"
  exit 1
elif [[ -n $pendingChanges ]]; then
  echo "You have unstagged changes"
  exit 1
fi

fetchLatest=$( git fetch )

if [[ $? != 0 ]]; then
  echo "Failed to fetch the latest changes"
  exit 1
fi

currentBranchState=$( git branch -v --no-color | grep -e "^\*" )

if [[ $? != 0 ]]; then
  echo "Failed to check current branch state"
  exit 1
elif [[ $currentBranchState =~ "[behind [0-9]]" ]]; then
  echo "You're not up to date with the latest changes"
  exit 1
fi
