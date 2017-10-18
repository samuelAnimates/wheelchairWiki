# Wheelchair Travel Wiki

This site is designed as a place to collect and provide information on wheelchair accessibility in various locations. In addition to the site itself (hosted at http://wheelchairtravelwiki.herokuapp.com/), we provide an API for other developers to retrieve information.

## Using the API

Information can be retrieved, added, updated, and deleted through various routes. Adding, updating, or deleting information requires the user to sign-in.

In the documentation below, "City" refers to a City document, which contains the name, country, latitude, and longitude of a city along with its associated sites, restaurants, and bathrooms. "Places" refers to  place documents, either Locations or Bathrooms. Pieces of the API url for requests that are in all-caps are pieces where the request should provide a parameter.

### Reading information

#### Get all cities
##### Input 

URL: https://wheelchairtravelwiki.herokuapp.com/api/city

Request type: GET

##### Output

The output will include an array of City objects containing the information on all the cities. The properties for associated places will be filled out to provide information on all the places of that city..

#### Get a city by its id
##### Input 

URL: https://wheelchairtravelwiki.herokuapp.com/api/city/id/123CITY-ID456

Request type: GET

##### Output

The output will include the object for the city with the id provided in the url. If no city with that id is found, this will return `null`.

#### Get a city by its name
##### Input 

URL: https://wheelchairtravelwiki.herokuapp.com/api/city/CITY-NAME

Request type: GET

Note: City names containing spaces should have those spaces replaced with hyphens. E.g. Ho Chi Minh City would be Ho-Chi-Minh-City.

##### Output

The output will include the object for the city matching that name. If no city with that name is found, this will return `null`.

#### Get all places
##### Input 

URL: https://wheelchairtravelwiki.herokuapp.com/api/places

Request type: GET

##### Output

The output will include a list of objects, with one object for each place in the database, regardless of city.

Note: To retrieve the places for a single city, use the above commands to get a city by id or name, and retrieve the places from its properties.

#### Get all places of a particular type
##### Input 

URL: https://wheelchairtravelwiki.herokuapp.com/api/places/TYPE

Request type: GET

Note: The current types are site, restaurant, and bathroom.

##### Output

The output will include a list of objects, with one object for each place of the specified type in the database, regardless of city.

Note: To retrieve the places for a single city, use the above commands to get a city by id or name, and retrieve the places from the relevant property.

#### Get a place by its id
##### Input 

URL: https://wheelchairtravelwiki.herokuapp.com/api/places/PLACE/123PLACE-ID456

Request type: GET

Note: The current types are site, restaurant, and bathroom.

##### Output

The output will include the object for the specified place. If no city with that id is found, this will return `null`.

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

URL: https://wheelchairtravelwiki.herokuapp.com/api/city/id/123CITY-ID456/TYPE

Request type: POST

Request body: An object containing the information to create the place.

Note: The current types are site, restaurant, and bathroom.

##### Output

The output will include the object for the city with the new place added.

### Updating the database

#### Updating a city
##### Input 

URL: https://wheelchairtravelwiki.herokuapp.com/api/city/id/123CITY-ID456

Request type: POST

Request body: An object containing the information that will be changed in the city record.

##### Output

The output will include the object for the updated city.

#### Updating a place
##### Input 

URL: https://wheelchairtravelwiki.herokuapp.com/api/places/TYPE/123PLACE-ID456

Request type: POST

Request body: An object containing the information that will be changed in the place record.

##### Output

The output will include the object for the updated place.

#### Add a url to a place
##### Input 

URL: https://wheelchairtravelwiki.herokuapp.com/api/places/TYPE/123PLACE-ID456

Request type: POST

Request body: An object containing the url and title of the link to be added.

##### Output

The output will include the object for the updated place.

### Deleting information

#### Delete a city
##### Input 

URL: https://wheelchairtravelwiki.herokuapp.com/api/city/id/123CITY-ID456

Request type: DELETE

##### Output

The output will include the object for the city that was deleted.

NOTE: Deleting a city will also delete the places associated with that city.

#### Delete a place
##### Input 

URL: https://wheelchairtravelwiki.herokuapp.com/api/places/TYPE/123PLACE-ID456

Request type: DELETE

Note: The current types are site, restaurant, and bathroom.

##### Output

The output will include the object for the place that was deleted.