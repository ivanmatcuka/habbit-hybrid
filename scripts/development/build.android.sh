# Generate debug key
keytool -genkey -v \
  -keystore debug.keystore \
  -storepass android \
  -alias androiddebugkey \
  -keypass android \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000 \
  -dname "C=US, O=Android, CN=Android Debug"


npm install
npm i $LIB_GIT_SOURCE#development
npm run build:development
npx cap sync android
npm run android:debug

mkdir -p ./artifacts
cp ./android/app/build/outputs/apk/debug/*.apk ./artifacts/

# RUNS INSIDE DOCKER CONTAINER ON JENKINS SERVER

