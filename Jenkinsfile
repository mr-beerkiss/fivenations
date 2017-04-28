pipeline {
    environment {
        DOCKER_IMAGE = "fivenations:build_${env.BUILD_ID}"
        FV_PORT = '9000'
    }
	agent any
    stages {
        stage('Build docker image') {
            steps {
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"            
                sh "docker build --no-cache -t ${env.DOCKER_IMAGE} ."
            }
        }
        stage('Stop currently running container') {
            steps {
                sh "export FV_CID=\$(docker ps | grep ${env.FV_PORT} | awk '{print \$1}')"
                sh "docker rm -f \$FV_CID;"
            }
        }        
        stage('Deploy docker image') {
            steps {
                sh "docker run -d -p ${env.FV_PORT}:${env.FV_PORT} -it ${docker_image}"
            }
        }
    }
}
