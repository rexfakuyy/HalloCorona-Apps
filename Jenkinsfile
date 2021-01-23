pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'git@github.com:rexfakuyy/HalloCorona-Apps.git'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
         sh 'npm start'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}
