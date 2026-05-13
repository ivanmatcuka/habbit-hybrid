pwd=$(pwd)

# Plug in the web repository
if [! -d "$LIB_PROJECT_NAME" ];then
	git clone ${LIB_GIT_SOURCE} ../${LIB_PROJECT_NAME}
fi

cd ../${LIB_PROJECT_NAME}
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
npx cap sync android
npm run android:debug

mkdir -p ./artifacts
cp ./android/app/build/outputs/apk/debug/*.apk ./artifacts/

