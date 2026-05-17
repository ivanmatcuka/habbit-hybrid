git reset --hard
git checkout development
git pull

npm install
npm i "${LIB_GIT_SOURCE}#development#development"

# temp
cd "node_modules/${LIB_PROJECT_NAME}"
npm run prepare
cd ../..

npm run build:development

# Xcode
xcode-select --install

npx cap sync ios
npm run ios:debug

mkdir -p ./artifacts
cp ./ios/App/*.ipa ./artifacts/

# RUNS ON THE REAL SERVER (MacBook builder)