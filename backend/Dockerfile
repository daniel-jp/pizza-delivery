FROM eclipse-temurin:11-jdk-alpine
VOLUME /tmp
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
EXPOSE 8080

#FROM ubuntu:latest AS build

#RUN apt-get update
#RUN apt-get install openjdk-11-jre -y
#COPY . .

#RUN apt-get install maven -y
#RUN mvn clean install

#FROM openjdk:11-jre-slim
#EXPOSE 8080
#COPY --from=build /target/backend-0.0.1-SNAPSHOT.jar backend.jar
#ENTRYPOINT ["java", "-jar", "backend.jar"]



# Use a imagem base do OpenJDK para o Java
#FROM openjdk:11-jre-slim

# Defina o diretório de trabalho no contêiner
#WORKDIR /app

# Copie o arquivo JAR do Spring Boot para o diretório de trabalho do contêiner
#COPY target/backend-0.0.1-SNAPSHOT.jar /app/achahada2.jar

# Exponha a porta do Spring Boot
#EXPOSE 8080

# Comando para executar o aplicativo Spring Boot quando o contêiner for iniciado
#CMD ["java", "-jar", "achahada2.jar"]
