#! /bin/bash

SERVICE=$1
IMAGE_NAME=$2
DOPPLER_TOKEN=$3

cd /home/ubuntu/blog
git pull origin main
docker-compose down $SERVICE --volumes --rmi all
docker pull ghcr.io/chaneesong/$IMAGE_NAME:latest
$DOPPLER_TOKEN docker compose up -d api
