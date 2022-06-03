pipeline {
    agent any

    environment {
        CI = 'true'
    }
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
            }
        }
        stage('Test') {
            steps {
                echo "Test"
            }
        }
        stage('Deploy') {
            steps {
                echo "${WORKSPACE}"
                ssh -t -t '/bin/bash ${WORKSPACE}/script/deploy'
            }
        }
    }
}
