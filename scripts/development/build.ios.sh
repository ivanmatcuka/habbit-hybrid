# ==============================================================================
# Script: build.ios.sh
# Type: build
# State: stateful (macOS host)
# Hermetic: no
#
# Host: MacBook Air 2017 (macOS 12 Monterey)
#
# Requires:
# - Node.js 22 + npm
# - Xcode + CLI tools
# - CocoaPods
# - Existing repo at ~/Documents/habits-hybrid
#
# Outputs:
# - artifacts/*.ipa
#
# Side effects:
# - modifies local git checkout
# - installs npm deps
# - runs iOS build
# ==============================================================================

set -euo pipefail

LIB_DIR="../${LIB_PROJECT_NAME}"

# Build UI library and app
rm -rf "${LIB_DIR}"
git clone -b development "${LIB_GIT_SOURCE}" "${LIB_DIR}"

nvm use
npm install
npm install  --prefix "${LIB_DIR}" # Temp
npm run build:library --prefix "${LIB_DIR}" # Temp
npm run build:development
npx cap sync ios

# Build iOS app
npm run ios:debug

# Extract artifacts
mkdir -p ./artifacts
cp ./ios/App/*.ipa ./artifacts/