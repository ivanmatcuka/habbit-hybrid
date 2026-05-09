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
        stage('Build') {
            steps {
                echo 'Deploying...'

                sh '''
                    chmod +x ./scripts/build.sh
                    ssh ${DEPLOY_USER}@${DEPLOY_HOST} 'bash -s' < ./scripts/build.sh
                '''
            }
        }
    }
}
