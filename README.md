# Invisible: Angular Test Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

## Introduction

The goal is to understand:
* Your readiness to invest your time
* How quickly you learn
* Your ability to construct and deploy an application
* Quality of your code and coding standards you adhere to

## Requirements

1. Create a simple CRUD application. You can use the back-end end-points as described in the Movie API endpoints section.

2. Implement datagrid using https://handsontable.com/ (it's a must).

3. Implement one key feature: Personalization
   As a User, I'd like to personalize the "tabular" view
   Set width of columns
   Change the sequence of columns in the data grid aka tabular view
   The changes I perform should be saved so that when I refresh the page, the view shows the changes I performed.

4. Deploy the application in any free environment of your choice, for ex. Heroku, Vercel or any other. Share the link of the deployed environment as well as the github repository through email.


## Movies API Endpoints

API URL: http://test-movies-api.vercel.app/

| Method | Endpoint | Description |
| ------ | ------ | ------ |
| GET | /api/movies | Fetch all movies. Use limit and page to restrict the number of results. By default, 100 movies are returned. |
| POST | /api/movies | Add a new movie. |
| GET | /api/movies/{movieId} | Fetch a single movie. |
| PUT | /api/movies/{movieId} | Update a movie. |
| DELETE | /api/movies/{movieId} | Remove a movie record. |

### Sample API response

GET http://test-movies-api.vercel.app/api/movies

```javascript
[
  {
    "id": 2,
    "budget": "2000000",
    "originalLang": "en",
    "originalTitle": "The Bens",
    "overview": "This is a scary movie that will get your adrenaline pumping",
    "popularity": "233.11",
    "releaseDate": "2021-10-11T10:12:58.957Z",
    "revenue": 1234677,
    "runtime": 127,
    "status": "ongoing",
    "tagline": null,
    "title": "The Bens",
    "voteAverage": 20,
    "voteCount": 5,
    "createdAt": "2021-10-12T04:26:42.248Z",
    "updatedAt": null,
    "deletedAt": null
  }
]
```
