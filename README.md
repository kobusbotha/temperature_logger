A turnkey temperature logger for the Raspberry Pi 3B, with a chart.js view powered by JourneyApps

This is a personal project not intended for public use.

Steps to set up:

* Follow this: https://learn.adafruit.com/adafruits-raspberry-pi-lesson-11-ds18b20-temperature-sensing/software 
* configure `logger.py` to POST to the correct endpoint
* configure `logger.py` to run at startup - remember to `sudo apt-get install rng-tools` otherwise the entropy pool runs out for background SSL requests
