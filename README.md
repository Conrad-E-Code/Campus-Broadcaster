INDIVIDUAL GOALS
Sinatra
blogs
chill

Think about project, contribute to readme

PROJECT Goals

We are trying to make a social media resource similar to linked in in terms of creeting connections where alumni can help current and recent graduates.
projects, talking, connecting.

AS a user I can :

LOGIN:


ADD DATA TO SERVER: CREATE
Add a strings to my public table table
add strings to my private table (friends)

CHANGE DATA ON SERVER: UPDATE

                Add my id to a table (join a group)
                see my tables
                see strings from all students in my table
                delete my strings

FETCH DATA FROM SERVER: READ

                add students to friends list
                see my friends list
                NO RULES NO PARENTS Lets PARTY


DELETE DATA FROM SERVER:

                delete my strings



                WHEN I LOG IN I WANT TO SEE:

                Aidan ideas:

                Kevin Ideas:

                Conrad Ideas:


                When I first visit the page I want to see a login page.

                how could a login page work?

                probably a fetch request. comparison with saved password. 

                checking into token auth
https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications






                TEAM GOALS FIRST WEEKEND


brainstorm user stories until meetup, add custom user stories to this readme
 on your own branch.

 general brainstorming

meetup goals:
CREATE RELATIONSHIP HIERARCHY FOR BACKEND DIAGRAM
agree on user stories.
divide tasks by category
assign tasks to RP's
formulate tables

Identify goals for next week
Prioritize goals and make a roadmap.




Account creation:
step one post to user table redirect to add picture form
step two post to picture table redirect to first post form
step 3 make first post redirect to dashboard





NEXT WEEK GOALS:


user table:
has_many posts
username:
password:


UserImages:
belongs_to user



campus table: 
has many users
has many posts through users
user_id (foreign key)

Posts Table
belongs to a user
belongs to a campus

user_id: foreign 
body
date :
author: username

