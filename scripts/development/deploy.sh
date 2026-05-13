cd ${PROJECT_NAME}

git reset --hard
git checkout development
git pull

docker compose down
docker compose -f compose.development.yml up -d --build