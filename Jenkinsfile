pipeline {
  agent any
  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm i -g yarn && yarn'
      }
    }

    stage('Lint') {
      steps {
        sh 'yarn lint'
      }
    }

    stage('Test') {
      steps {
        sh 'yarn test'
      }
    }

    stage('Build') {
      steps {
        sh 'next build'
      }
    }

    stage('Archive Artifacts') {
      steps {
        archiveArtifacts '*'
      }
    }

    stage('End') {
      steps {
        echo 'Done!'
      }
    }

  }
}