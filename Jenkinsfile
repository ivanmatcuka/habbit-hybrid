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
                    chmod +x ./scripts/deploy.sh
                    ssh ${DEPLOY_USER}@${DEPLOY_HOST} 'bash -s' < ./scripts/deploy.sh
                '''
            }
        }
        stage('Build') {
            agent {
                dockerfile {
                    filename 'Dockerfile.android'
                    args '-v /tmp:/usr/src/app/android/app/build/outputs/bundle'
                }
            }
            steps {
                echo 'Building...'
                sh '''
                    chmod +x ./scripts/build.sh
                    ./scripts/build.sh
                '''
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '/tmp/**/*.aab', fingerprint: true
        }
    }
}
