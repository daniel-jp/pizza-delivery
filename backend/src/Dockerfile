# Stage 1: Build the application
FROM ubuntu:latest AS build

RUN apt-get update && apt-get install -y \
    openjdk-11-jdk \
    maven

WORKDIR /app

COPY . .

RUN mvn clean install

# Stage 2: Create a minimal runtime image
FROM openjdk:11-jdk-slim

EXPOSE 8080

COPY --from=build /app/target/backend-0.0.1-SNAPSHOT.jar /app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]
