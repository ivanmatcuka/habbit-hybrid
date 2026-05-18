# ==============================================================================
# Script: build.android.sh
# Type: build
# State: stateless (containerized)
# Hermetic: mostly yes
#
# Execution:
#   CI: yes
#   SSH: no
#   Docker: yes
#
# Host:
#   Jenkins Linux + Docker runtime
#
# Requires:
#   - Node.js (inside container)
#   - Java keytool
#   - Android SDK (inside container)
#   - LIB_GIT_SOURCE access
#
# Outputs:
#   - artifacts/*.apk
#
# Side effects:
#   - installs npm dependencies
#   - builds Android project
# ==============================================================================

set -e


# Generate debug key
rm -f debug.keystore
keytool -genkey -v \
  -keystore debug.keystore \
  -storepass android \
  -alias androiddebugkey \
  -keypass android \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000 \
  -dname "C=US, O=Android, CN=Android Debug"

# Temporary UI plug-in
git clone ${LIB_GIT_SOURCE} ../${LIB_PROJECT_NAME}
cd ../${LIB_PROJECT_NAME}
npm i
npm run build:library
cd ../${PROJECT_NAME}
npm i ../${LIB_PROJECT_NAME}

# Build
npm run build:development
npx cap sync android
npm run android:debug

# Extract artifacts
mkdir -p ./artifacts
cp ./android/app/build/outputs/apk/debug/*.apk ./artifacts/
