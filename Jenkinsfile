node{
	
	stage('Preparation'){
		sh 'rm -rf *'
        checkout scm
	}

	stage('Build') {
		sh 'npm install'
	 	try{
		 sh 'pwd'
		 sh 'ng build --prod'
		}catch (e){
		 notifyStarted("Build Failed in Jenkins!")
		 throw e
		}
	}
     
    stage('Deployment'){
		try{
		 sh './runDeployment.sh'
		}catch (e){
		 notifyStarted("Build Failed in Jenkins!")
		 throw e
		}

	}

}
