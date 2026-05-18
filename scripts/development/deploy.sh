# ==============================================================================
# Script: deploy.sh
# Type: deploy
# State: stateful (linux server)
# Hermetic: no
#
# Execution:
#   CI: yes
#   SSH: yes
#   Docker: yes
#
# Host:
#   Ubuntu server (production/development environment)
#
# Requires:
#   - Git repo checked out at $PROJECT_NAME
#   - Docker + Docker Compose installed
#   - Access to compose.development.yml
#
# Outputs:
#   - running containerized services
#
# Side effects:
#   - stops running containers
#   - rebuilds and restarts stack
#   - pulls latest git state
# ==============================================================================

set -euo pipefail

# Rebuild and restart Docker
docker compose -f compose.development.yml down
docker compose -f compose.development.yml up -d --build