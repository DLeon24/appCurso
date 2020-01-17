node{
	
	stage('Preparation'){
		sh 'rm -rf *'
        checkout scm
	}

	stage('Build') {
	 	try{
		 sh "pwd"
		 sh "npm run ng build --prod"
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
