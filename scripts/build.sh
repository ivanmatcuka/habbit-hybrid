cd habbit-hybrid
git checkout development
git pull
docker compose -f ./docker-compose.yml up -d --build
docker cp android_builder:/usr/src/app/android/app/build/outputs/bundle ./android/app/build/outputs/bundle
docker compose down