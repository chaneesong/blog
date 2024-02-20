#! /bin/bash

TARGET_DIR=$1
SERVICE=$2
IMAGE_NAME=$3

cd $TARGET_DIR
docker compose down $SERVICE --volumes --rmi all
docker pull ghcr.io/chaneesong/$IMAGE_NAME:latest
if [ "$SERVICE" = "api" ]; then
  DOPPLER_TOKEN_API="$(doppler configs tokens create --project blog --config prd_api api-prd-token --plain --max-age 1m)" docker compose up -d $SERVICE
else
  DOPPLER_TOKEN_WEB="$(doppler configs tokens create --project blog --config prd_web web-prd-token --plain --max-age 1m)" docker compose up -d $SERVICE
fi
