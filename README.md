# GasTruck

GasTruck an app created in a demo project for [Softruck](http://www.softruck.com/).
It consists in collect, store and display data about fuel prices of a Brazilian agency called
[ANP](http://www.anp.gov.br/preco/index.asp).

The application contains a cover page, and a series of pages to go deeper from states to cities
and the to gas stations, which . It also presents statistics about the cities fuel prices an the individual
gas station prices. However if you prefere navegating by searching a name of a place: state/city/station
you can perform a search on the API and choose the place you would like.

It was developed using ReactJs with es6, Bootstrap, Less and Gulp.

## Usage

Before going deep in the app, there are some steps to be followed before.

First, you will need to get the data from ANP. To do so, you can use 
[GasTruckCrawler](https://github.com/mibrito/gastruckcrawler), which is a sub product of this
project.

After that you will need to serve the data using an API. This can be done by using
the custom API [GasTruckAPI](https://github.com/mibrito/gastruckapi).

After this steps you will be ready to run GasTruck app in localhost.

## Usage
To use the application on local you must clone the repo and execute the install comand:

```
git https://github.com/mibrito/gastruck.git
npm install
```

## Run
To run the application using the small server implemented on index just type on bash:

```
npm start
```

After that you can try opening the app using http://localhost:8080. If you want to change the default
port you can use the prefix
```
PORT=xxxx npm start
```

### Rebuild

The app is internaly configured to conect with the API using port 3000 on localhost. If your API is
running in another place, you will need to alter the file config.js, compile the code to get the
right build.js

To rebuild the build.js file, please run gulp
```
gulp
```

and wait until the message:
```
Finished 'default'
```