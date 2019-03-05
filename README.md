# Github User Fetcher

A simple software that allows the user to fetch GitHub users and save them as favourites if wished.

## Before running

For this project, a couple of tools are needed. These are:
 + [Java](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
 + [Yarn](https://yarnpkg.com/en/docs/install)
 + [Maven](https://maven.apache.org/download.cgi)
 + And of course a functioning web browser
 
## How to run the project

Do the following:
 1. Run `mvn clean install` in the root directory (`.../github.fetcher`)
 2. Run `mvn spring-boot:run` in the root directory (`.../github.fetcher`)
 3. Run `yarn install` in the webapp folder (`.../github.fetcher/webapp`)
 4. Once that is done, run `yarn start` in the webapp folder (`.../github.fetcher/webapp`)

 If these steps have been followed correctly without any errors, a webpage with the url `localhost:8080` should pop of with the service.

## Enjoy!
