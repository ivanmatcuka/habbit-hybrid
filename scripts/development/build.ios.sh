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

# Install dependencies
npm install

# Temporary UI plug-in
npm i "${LIB_GIT_SOURCE}#development"
cd "node_modules/${LIB_PROJECT_NAME}"
npm run prepublish
cd ../..

# Build
npm run build:development
npx cap sync ios
npm run ios:debug

# Extract artifacts
mkdir -p ./artifacts
cp ./ios/App/*.ipa ./artifacts/