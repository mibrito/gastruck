# GasTruck

GasTruck an app created in a demo project for [Softruck](http://www.softruck.com/).
It consists in collect, store and display data about fuel prices of a Brazilian agency called
[ANP](http://www.anp.gov.br/preco/index.asp).

Before going deep in the app, there are some steps to be followed before.

First, you will need to get the data from ANP. To do so, you can use 
[GasTruckCrawler](https://github.com/mibrito/gastruckcrawler), which is a sub product of this
project.

After that you will need to serve the data using an API. This can be done by using
the custom API [GasTruckAPI](https://github.com/mibrito/gastruckapi).

After this steps you will be ready to touch on GasTruck app.

## Usage
There are two ways of using this app, the fist one is creating a static web serve, which serves
the index.html, build.js and app.css.

The other is using some pre instaled http server like apache.


This package already includes the dependencies for server creation. To use this pre-existing mechanism
install all the dependencies:

```
git https://github.com/mibrito/gastruck.git
npm install
```

### Rebuild

If you are using a localhost that doesnt yet listen to port 3000 you can skip this step, and go to the
next one.

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