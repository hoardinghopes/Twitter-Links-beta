#!/bin/sh

set -e

rm -f extension_*.zip

cd src/chrome; zip -r ../../extension_chrome.zip *; cd ../../
cd src/firefox; zip -r ../../extension_firefox.zip *; cd ../../



