version=0.1
echo "Deploying app to docker folder"
dockerImageName=dleon/myapp
docker build -t $dockerImageName .
docker run -d -p 80:80 $dockerImageName
dockerImageId=`docker images | grep $dockerImageName | grep latest | awk -F " " '{print $3}'`
docker tag $dockerImageId $dockerImageName:$version

