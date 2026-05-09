pipeline {
    agent any

    tools {
        nodejs 'Default'
    }

    environment {
        BUILD_USER = credentials('build-user')
        BUILD_HOST = credentials('build-host')
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
                echo 'Building...'
                sh '''
                    chmod +x ./scripts/build.sh
                    ssh ${BUILD_USER}@${BUILD_HOST} 'bash -s' < ./scripts/build.sh
                    mkdir -p ./android/app/build/outputs/bundle/release
                    scp -r ${BUILD_USER}@${BUILD_HOST}:/home/flatten/habbit-hybrid/android/app/build/outputs/bundle/release ./android/app/build/outputs/bundle/release
                '''
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'android/app/build/outputs/bundle/**/*.aab', fingerprint: true
        }
    }
}
