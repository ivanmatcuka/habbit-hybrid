pwd=$(pwd)

# Plug in the web repository
rm -rf ../habbit-frontend
git clone https://github.com/ivanmatcuka/habbit-frontend.git ../habbit-frontend
cd ../habbit-frontend
npm i

cd ${pwd}

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
npm run build:development
npx cap sync
npm run android:debug

mkdir -p ./artifacts
cp ./android/app/build/outputs/bundle/**/*.apk ./artifacts/

