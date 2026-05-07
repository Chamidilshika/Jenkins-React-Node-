pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/Chamidilshika/Jenkins-React-Node-.git'
            }
        }

        stage('Install Backend') {
            steps {
                dir('server') {
                    sh 'npm install'
                }
            }
        }

        stage('Install Frontend') {
            steps {
                dir('client') {
                    sh 'npm install'
                }
            }
        }

        stage('Build React') {
            steps {
                dir('client') {
                    sh 'npm run build'
                }
            }
        }
    }
}