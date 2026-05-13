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
            environment {
                PROJECT_NAME = 'habits-hybrid'
            }
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
                VITE_API_URL = 'http://192.168.2.128:8000'
                LIB_PROJECT_NAME = 'habits-frontend'
                LIB_GIT_SOURCE = 'https://github.com/ivanmatcuka/habits-frontend.git'
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
                    chmod +x ./scripts/development/build.sh
                    ./scripts/development/build.sh
                '''
                archiveArtifacts artifacts: 'artifacts/*.apk', fingerprint: true
            }
        }
    }
}
