# TODO App

## The task

We want to build a TODO web app.

It will allow the users to keep track and organize their tasks.

Your objective is to do the following user story.

```
As a user
I want to be able to add a TODO item
so I can track the things I want to do.
```

The app has two parts, a frontend built in React and a Backend built in NodeJS.

The backend exposes an API to fetch the TODO items, that are be displayed in the page.

To complete the task you will be required to work on both backend and frontend parts.

Please write code as you would for it to be production ready.

While it isn't required to make the front end look slick and well designed we would appreciate any effort that you put into UI design and UX.

## Starting the application

- Backend: (In the backend folder)

```shell
npm install
npm start # Start the server in the 9091 port
```

- Frontend: (In the root folder)

```shell
npm install
npm start # Starts the app in http://localhost:3000
```

## Backend

You can find it in the `/backend` directory. It's built in Express and stores the TODO items in memory.

- GET /api/todo

![get todo picture](docs/get_todo_endpoint.png "Get TODO")

## Frontend

You can find it in the `src` folder. It has been build with React and Redux. The list of todos are fetched asynchronously from the backend via Redux-thunk.

You can assume the backend is running under `http://localhost:9091/api/todo`

![get todo FE](docs/get_todo_frontend.png "GET todo frontend")

## Change Made from Ashish Dongol

## Frontend

The design was taken from a simple todo app that i build almost 5 yrs ago in vanilla js with local storage. There is still some flaws in the design but the implementation is the main part so.... yeah hope you like it.
![get todo picture](docs/Frontend.png "Get TODO")

## Backend

Consistend Response with proper data formatting, validation and error handling.
![get todo picture](docs/Endpoint_1_Get_Todo.png "Get TODO")
![get todo picture](docs/Endpoint_2_Add_Todo.png "Get TODO")
![get todo picture](docs/Endpoint_3_Status_Change.png "Get TODO")
![get todo picture](docs/Endpoint_4_Delete_Todo.png "Get TODO")

All of these implementations are done at my best ability of understanding how a project should structure, how we should use certain patterns and so on. Patterns like rate limiters or retry or circuitbreakers are not utilized because its just a todo app. Hope you like it. 😊
