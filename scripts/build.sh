cd habbit-hybrid

# Update
git checkout development
git pull

# Build
docker compose down
docker compose -f ./docker-compose.yml up -d --build