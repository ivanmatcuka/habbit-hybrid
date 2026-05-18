pipeline {
    agent any

    tools {
        nodejs '22.13'
    }

    environment {
        DEPLOY_USER = credentials('deploy-user')
        DEPLOY_HOST = credentials('deploy-host')

        BUILD_USER = credentials('build-user')
        BUILD_HOST = credentials('build-host')

        LIB_PROJECT_NAME = 'habits-frontend'
        PROJECT_NAME = 'habits-hybrid'
        VITE_API_URL = 'http://192.168.2.128:8000'
        LIB_GIT_SOURCE = 'https://github.com/ivanmatcuka/habits-frontend.git'
    }

    stages {
        stage('lint') {
            steps {
                echo 'Linting....'
                sh 'npm i'
                sh 'npm run lint'
            }
        }
        stage('deploy') {
            steps {
                echo 'Deploying...'
                sh '''
                    ssh ${DEPLOY_USER}@${DEPLOY_HOST} "PROJECT_NAME=${PROJECT_NAME} bash -s" < ./scripts/development/deploy.sh
                '''
            }
        }
        stage('build-android') {
            agent {
                dockerfile {
                    filename './docker/development/Dockerfile.android'
                    args '-v ${WORKSPACE}/artifacts:/artifacts  -e VITE_API_URL=${VITE_API_URL} -e LIB_PROJECT_NAME=${LIB_PROJECT_NAME} -e LIB_GIT_SOURCE=${LIB_GIT_SOURCE}'
                }
            }
            steps {
                echo 'Building for Android...'

                sh '''
                    ./scripts/development/build.android.sh
                '''
                archiveArtifacts artifacts: 'artifacts/*.apk', fingerprint: true
            }
        }
        stage('build-ios') {
            agent {
                dockerfile {
                    filename './docker/development/Dockerfile.ios'
                    args '-v ${WORKSPACE}/artifacts:/artifacts  -e VITE_API_URL=${VITE_API_URL} -e LIB_PROJECT_NAME=${LIB_PROJECT_NAME} -e LIB_GIT_SOURCE=${LIB_GIT_SOURCE}'
                }
            }
            steps {
                echo 'Building for iOS...'

                sh '''
                    ssh ${BUILD_USER}@${BUILD_HOST}  "PROJECT_NAME=${PROJECT_NAME} bash -s" < ./scripts/development/build.ios.sh
                '''

                archiveArtifacts artifacts: 'artifacts/*.ipa', fingerprint: true
            }
        }
    }
}
