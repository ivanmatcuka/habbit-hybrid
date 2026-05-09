cd habbit-frontend
git pull
# npx cap build ios --xcode-export-method debugging
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000 -dname "C=US, O=Android, CN=Android Debug"
npx cap build android --keystorepath ../debug.keystore --keystorepass android --keystorealias androiddebugkey --keystorealiaspass android