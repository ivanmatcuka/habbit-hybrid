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
            agent {
                dockerfile {
                    filename './docker/development/Dockerfile.android'
                    args '-v ${WORKSPACE}/artifacts:/artifacts'
                }
            }
            steps {
                echo 'Building...'
                sh '''
                    chmod +x ./scripts/development/build.sh
                    ./scripts/development/build.sh
                '''
                archiveArtifacts artifacts: 'artifacts/*.aab', fingerprint: true
            }
        }
    }
}
