cd habbit-hybrid

# Update
git checkout development
git pull

# Build
docker compose -f ./docker-compose.yml up -d --build

# Extract output from container
chmod 755 ./android
mkdir -p ./android/app/build/outputs
docker cp android_builder:/usr/src/app/android/app/build/outputs/bundle ./android/app/build/outputs

# Kill
docker compose down