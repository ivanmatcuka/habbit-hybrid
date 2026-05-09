cd habbit-hybrid
git checkout development
git pull
docker compose -f ./docker-compose.yml up -d --build
exit