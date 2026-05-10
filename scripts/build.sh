pwd=$(pwd)

# Plug in the web repository
rm -rf ../habbit-frontend
git clone https://github.com/ivanmatcuka/habbit-frontend.git ../habbit-frontend
cd ../habbit-frontend
npm i

cd ${pwd}

npm install
npm run build:development
npx cap sync
npm run build:android