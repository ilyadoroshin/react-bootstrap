#!/bin/bash

# Fail build on any cli command failure
set -e

# Build npm lib folder
npm run babel-build-lib

# Build Bower amd folder
npm run babel-build-amd

# Build docs
npm run docs-build
