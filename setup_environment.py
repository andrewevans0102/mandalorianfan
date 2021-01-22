#!/usr/bin/env python3
import fileinput
import os

print("setup environment has started")

messageEndpoint = os.environ['MANDO_MESSAGE']
trackingID = os.environ["MANDO_GA"]

successFile = "util/success.js"
with fileinput.FileInput(successFile, inplace=True) as file:
    for line in file:
        print(line.replace("MANDO_MESSAGE", messageEndpoint), end='')

appFile="src/helper/googleAnalytics.js"
with fileinput.FileInput(appFile, inplace=True) as file:
    for line in file:
        print(line.replace("MANDO_GA", trackingID), end='')

print("setup environment has finished")