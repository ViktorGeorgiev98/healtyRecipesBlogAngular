# healthyRecipesBlogAngular
A healthy recipes blog written with Angular 16.

1/ SUMMARY

This is a healthy recipes blog. It is made for everyone that wants to train and eat on a diet or just wants to have a healthier lifestyle. Similar minded people can look at different recipes here and try them at home. We all know that is the hardest part of any diet, thinking what to eat and how to cook it. Most of the time eating healthy gets boring. 

You can do the following things inside the application.
- Register
- Log in
- Create new recipes
- Look at the whole list of existing recipes
- Search for any specific recipe
- Comment recipes
- Logout
- Edit and delete recipes a specific user has created.

1.1/ NOT LOGGED IN USERS
If a user is not logged in, he will have access to a limited part of the application. He will not be able to create new recipes, comment, edit and delete recipes.

1.2 LOGGED IN USERS
Logged in users have access to the whole application. 

2/ AUTHENTICATION
The application has authentication. If you try to enter edit page for a recipe while not logged you will be redirected and vise versa if you are logged in and try to to go to the login page.

2.1 Register
Register requires users to enter a valid email address and a password which needs to contains one uppercase, one lowercase letter and a symbol and to be at least 6 characters long. If the email already exists, the registration will not work!

3/ CRUD OPERATIONS.

3.1 Users who are logged in can created new recipes. If you are the creator of a recipe you can edit and delete it, but you cannot leave a comment on you own recipe.
3.2 Users who are logged in and are not the creators of a specific recipe can leave a comment.

4/ STARTING THE APPLICATION ON YOUR LOCAL PC
You can start the application locally. Just download this repository to your local pc and do the following.

4.1/ STARTING THE SERVER.
Go to the server folder using cd server.
The first time you will need to run the following commands.
npm install
npm run client
npm run build
Then, if you need to start the server any other time you can run the following command.
run command npm start. This will start the server. 


4.2/ STARTING THE CLIENT.
Go to the folder of the client.
cd client
cd healthyRecipesBlog

Run command npm i to install any dependencies.
Run command ng serve to start the dev version of the application. Then you can access it on http://localhost:4200/





