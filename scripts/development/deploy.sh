cd habbit-hybrid

git reset --hard
git pull

docker compose down
docker compose -f compose.development.sh up -d --build