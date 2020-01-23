node{
	
	stage('Preparation'){
		//el pipeline de jenkins ya tiene integracion con github mediante el plugin
		// apuntando al repo con las credenciales
		sh 'rm -rf *'
        checkout scm
	}

	stage('Build') {
	 	try{
		 sh 'pwd'
		 sh 'docker build -t app-curso-svc:dev .'
		}catch (e){
		 notifyStarted("Build Failed in Jenkins!")
		 throw e
		}
	}

	  // stage('Deployment'){
	// 	try{
	// 	 sh './runDeployment.sh'
	// 	}catch (e){
	// 	 notifyStarted("Deployment Failed in Jenkins!")
	// 	 throw e
	// 	}

	// }
     
	stage('Deploy'){
		try{
		sh 'apt-get install -y kubectl'
		sh 'kubectl apply -f app-curso.yml'
		}catch (e){
		 notifyStarted("Deploy Failed in Jenkins!")
		 throw e
		}
	}

 //  



}
