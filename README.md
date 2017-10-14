# Wheelchair Travel Wiki

## About This Boilerplate

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following commands:



That's it, your app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Using the API

Information can be retrieved, added, updated, and deleted through various routes.

In the documentation below, "City" refers to a City document, which contains the name, country, latitude, and longitude of a city along with its associated sites, restaurants, and bathrooms. "Places" refers to  place documents, either Locations or Bathrooms.

### Reading information

#### Get all cities
##### Input 

URL: https://wheelchairtravelwiki.herokuapp.com/api/city

Request type: GET

##### Output

The output will include an array of City objects containing the information on all the cities. The properties for associated places will be filled out to provide information on all the places of that city..

#### Get a city by its id
##### Input 

URL: https://wheelchairtravelwiki.herokuapp.com/api/city/id/123DOCUMENT-ID456

Request type: GET

##### Output

The output will include the object for the city with the id provided in the url. If no city with that id is found, this will return `null`.

#### Get a city by its name
##### Input 

URL: https://wheelchairtravelwiki.herokuapp.com/api/city/city-name

Request type: GET

Request body: An object containing the information to create the city.

##### Output

The output will include the object for the newly-created city.

#### Get all places
##### Input 

URL: https://wheelchairtravelwiki.herokuapp.com/api/city

Request type: POST

Request body: An object containing the information to create the city.

##### Output

The output will include the object for the newly-created city.

#### Get all places of a particular type
The current types are site, restaurant, and bathroom
##### Input 

URL: https://wheelchairtravelwiki.herokuapp.com/api/city

Request type: POST

Request body: An object containing the information to create the city.

##### Output

The output will include the object for the newly-created city.

#### Get a place by its id
##### Input 

URL: https://wheelchairtravelwiki.herokuapp.com/api/city

Request type: POST

Request body: An object containing the information to create the city.

##### Output

The output will include the object for the newly-created city.

### Adding to the database

#### Creating a city
Creating a city only requires information about the city. Information about locations within the city should be added as places (see below).

##### Input 

URL: https://wheelchairtravelwiki.herokuapp.com/api/city

Request type: POST

Request body: An object containing the information to create the city.

##### Output

The output will include the object for the newly-created city.

#### Adding a place (site, restaurant, or bathroom) to a city
##### Input 

URL: https://wheelchairtravelwiki.herokuapp.com/api/city

Request type: POST

Request body: An object containing the information to create the city.

##### Output

The output will include the object for the newly-created city.

### Updating the database

#### Updating a city
##### Input 

URL: https://wheelchairtravelwiki.herokuapp.com/api/city

Request type: POST

Request body: An object containing the information to create the city.

##### Output

The output will include the object for the newly-created city.

#### Updating a place
##### Input 

URL: https://wheelchairtravelwiki.herokuapp.com/api/city

Request type: POST

Request body: An object containing the information to create the city.

##### Output

The output will include the object for the newly-created city.

#### Add a link to a place
##### Input 

URL: https://wheelchairtravelwiki.herokuapp.com/api/city

Request type: POST

Request body: An object containing the information to create the city.

##### Output

The output will include the object for the newly-created city.

### Deleting information

#### Delete a city
Deleting a city will also delete the places associated with that city.
##### Input 

URL: https://wheelchairtravelwiki.herokuapp.com/api/city

Request type: POST

Request body: An object containing the information to create the city.

##### Output

The output will include the object for the newly-created city.

#### Delete a place
##### Input 

URL: https://wheelchairtravelwiki.herokuapp.com/api/city

Request type: POST

Request body: An object containing the information to create the city.

##### Output

The output will include the object for the newly-created city.