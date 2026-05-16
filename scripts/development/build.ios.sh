cd ${PROJECT_NAME}

git reset --hard
git checkout development
git pull

npm install
npm i "${LIB_GIT_SOURCE}#development#development"
npm run build:development

# Xcode
xcode-select --install

npx cap sync ios
npm run ios:debug

mkdir -p ./artifacts
cp ./ios/App/*.ipa ./artifacts/

# RUNS ON THE REAL SERVER (MacBook builder)