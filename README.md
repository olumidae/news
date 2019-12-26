## Project Title
an open API for news with multiple writers

# Installation
To install and run the project you need to do the following:

Create the folder you wish to run the project in

Clone the repository: git clone https://github.com/olumidae/news.git in the folder you created

Install all dependencies by running the command: **npm** install

Start the server by running thhe command: **npm** start

Navigate to localhost: 3000/api/v1 in Postman to test the running application

#API Endpoints
<table>
<tr><th>HTTP VERB</th><th>ENDPOINT</th><th>FUNCTIONALITY</th></tr>

<tr><td>POST</td><td>/api/v1/auth/create-user</td><td>User signup</td></tr>

<tr><td>POST</td><td>/api/v1/auth/signin</td><td>User signin</td></tr>

<tr><td>POST</td><td>/api/v1/articles</td><td>User post article</td></tr>

<tr><td>PATCH</td><td>/api/v1/articles/<:articleId></td><td>User edit article</td></tr>

<tr><td>DELETE</td><td>/api/v1/articles/<:articleId></td><td>User delete article</td></tr>

<tr><td>GET</td><td>/api/v1/articles</td><td>User view all article</td></tr>

<tr><td>GET</td><td>/api/v1/articles/<:articleId></td><td>User view specific article</td></tr>

</table>

## User
* User can sign in
* User can create and share gifs with other colleagues.
* User can write articles
* User can edit their articles.
* User can delete their articles.
* User can view all articles,
* User can view a specific article. 


## Built With
* *Node JS*
* *Express JS*


# Author
## Omitiran Olumide