#!/usr/bin/env bash
cd /home/ubuntu/build
sudo nohup java -jar seb39_pre_054-0.0.1-SNAPSHOT.jar --spring.profiles.active=server > /dev/null 2> /dev/null < /dev/null &
