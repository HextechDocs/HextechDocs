pipeline {
  agent {
    node {
      label 'HextechDocs'
    }

  }
  stages {
    stage('Install dependencies') {
      steps {
        sh 'yarn'
      }
    }

    stage('Test') {
      steps {
        sh 'yarn lint'
      }
    }

    stage('Build') {
      steps {
        sh 'yarn build'
      }
    }

    stage('Save artifacts') {
      steps {
        archiveArtifacts(artifacts: '*', allowEmptyArchive: true)
      }
    }

    stage('End') {
      steps {
        echo 'Done!'
      }
    }

  }
}