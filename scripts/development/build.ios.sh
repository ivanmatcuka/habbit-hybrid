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

# Build UI library
rm -rf "${LIB_DIR}"
git clone -b development "${LIB_GIT_SOURCE}" "${LIB_DIR}"
npm i --prefix "${LIB_DIR}"
npm run build:library --prefix "${LIB_DIR}"

# Build app
npm install
npm i "${LIB_DIR}"
npm run build:development
npx cap sync ios
npm run ios:debug

# Extract artifacts
mkdir -p ./artifacts
cp ./ios/App/*.ipa ./artifacts/