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
        // stage('Lint') {
        //     steps {
        //         echo 'Linting....'
        //         sh 'npm i'
        //         sh 'npm run lint'
        //     }
        // }
        // stage('Deploy') {
        //     steps {
        //         echo 'Deploying...'
        //         sh '''
        //             chmod +x ./scripts/build.sh
        //             ssh ${BUILD_USER}@${BUILD_HOST} 'bash -s' < ./scripts/build.sh
        //             mkdir -p ./artifacts
        //             scp -r ${BUILD_USER}@${BUILD_HOST}:/home/flatten/habbit-hybrid/tmp/release ./artifacts
        //         '''
        //     }
        // }
        stage('Build') {
            agent {
                dockerfile {
                    filename 'Dockerfile.android'
                    additionalBuildArgs  '--build-arg version=1.0.2'
                    args '-v /tmp:/usr/src/app/android/app/build/outputs/bundle'
                }
            }
            steps {
                echo 'Building...'
                sh '''
                    ls -l /tmp
                '''

            // chmod +x ./scripts/build.sh
            // ssh ${BUILD_USER}@${BUILD_HOST} 'bash -s' < ./scripts/build.sh
            // mkdir -p ./artifacts
            // scp -r ${BUILD_USER}@${BUILD_HOST}:/home/flatten/habbit-hybrid/tmp/release ./artifacts
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '/tmp/**/*.aab', fingerprint: true
        }
    }
}
