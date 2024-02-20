#! /bin/bash

TARGET_DIR=$1
SERVICE=$2
IMAGE_NAME=$3
DOPPLER_TOKEN=$4

cd $TARGET_DIR
docker compose down $SERVICE --volumes --rmi all
docker pull ghcr.io/chaneesong/$IMAGE_NAME:latest
$DOPPLER_TOKEN docker compose up -d api
