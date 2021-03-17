pipeline {
  agent any
  stages {
    stage('Install Dependencies') {
      steps {
        nodejs('nodejs LTS 14.16.0') {
          sh 'npm i -g yarn && yarn'
        }

      }
    }

    stage('Lint') {
      steps {
        nodejs('nodejs LTS 14.16.0') {
          sh 'yarn lint'
        }

      }
    }

    stage('Test') {
      steps {
        nodejs('nodejs LTS 14.16.0') {
          sh 'yarn test'
        }

      }
    }

    stage('Build') {
      steps {
        nodejs('nodejs LTS 14.16.0') {
          sh 'next build'
        }

      }
    }

    stage('Archive Artifacts') {
      steps {
        nodejs('nodejs LTS 14.16.0') {
          archiveArtifacts '*'
        }

      }
    }

    stage('End') {
      steps {
        echo 'Done!'
      }
    }

  }
}