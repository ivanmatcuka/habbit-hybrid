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

set -euo pipefail

LIB_DIR="../${LIB_PROJECT_NAME}"

# Generate debug keystore
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

# Build UI library
git clone -b development "${LIB_GIT_SOURCE}" "${LIB_DIR}"
npm i --prefix "${LIB_DIR}"
npm run build:library --prefix "${LIB_DIR}"

# Build app
npm install
npm i "${LIB_DIR}"
npm run build:development
npx cap sync android
npm run android:debug

# Extract artifacts
mkdir -p ./artifacts
cp ./android/app/build/outputs/apk/debug/*.apk ./artifacts/