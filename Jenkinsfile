pipeline {
    agent any

    tools {
        nodejs 'Default'
    }

    environment {
        DEPLOY_USER = credentials('deploy-user')
        DEPLOY_HOST = credentials('deploy-host')
    }

    stages {
        stage('Lint') {
            steps {
                echo 'Linting....'
                sh 'npm i'
                sh 'npm run lint'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                sh '''
                    chmod +x ./scripts/development/deploy.sh
                    ssh ${DEPLOY_USER}@${DEPLOY_HOST} 'bash -s' < ./scripts/development/deploy.sh
                '''
            }
        }
        stage('Build') {
            environment {
                VITE_API_URL = credentials('development-api-url')
            }
            agent {
                dockerfile {
                    filename './docker/development/Dockerfile.android'
                    args '-v ${WORKSPACE}/artifacts:/artifacts  -e VITE_API_URL=${VITE_API_URL}'
                }
            }
            steps {
                echo 'Building...'

                sh '''
                    rm .env.local.development
                    touch .env.local.development
                    echo VITE_API_URL=${VITE_API_URL} >> .env.local.development

                    chmod +x ./scripts/development/build.sh
                    ./scripts/development/build.sh
                '''
                archiveArtifacts artifacts: 'artifacts/*.apk', fingerprint: true
            }
        }
    }
}
