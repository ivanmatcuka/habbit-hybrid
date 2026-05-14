pwd=$(pwd)

# Plug in the web repository
rm -rf ../habbit-frontend
git clone https://github.com/ivanmatcuka/habbit-frontend.git ../habbit-frontend
cd ../habbit-frontend
npm i

cd "${pwd}"

npm install
npm i github:ivanmatcuka/habits-frontend#development
npm run build:development

# Xcode
xcode-select --install

npx cap sync ios
npm run ios:debug

mkdir -p ./artifacts
cp ./ios/App/*.ipa ./artifacts/

