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
        stage('Deliver') {
            steps {
                echo "${workspace}"
                sh '/bin/bash /var/lib/jenkins/workspace/Node-pipeline/script/deploy'
            }
        }
    }
}
