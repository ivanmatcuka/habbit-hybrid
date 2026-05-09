cd habbit-hybrid

# Update
# git checkout development
# git pull

# Build
docker compose down
docker compose -f ./docker-compose.yml up -d

# Extract output from container
# chmod 755 ./android
# mkdir -p ./android/app/build/outputs
# docker ps
docker cp android_builder:/usr/src/app/package.json .

# Kill
docker compose down