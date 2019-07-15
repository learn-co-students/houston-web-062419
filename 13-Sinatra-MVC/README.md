# Sinatra and MVC

### LGs:
* - [ ] Explain the Model View Controller (MVC) pattern and give an example
* - [ ] Implement one model that inherit from ActiveRecord
* - [ ] Implement one controller to route and process requests
* - [ ] Demonstrate how the params hash changes and where the data comes from
* - [ ] Implement ERB template and get it to render data from controller and model
* - [ ] Identify the connection between REST and CRUD

#### **Explain the Model View Controller (MVC) pattern and give an example**
* Sinatra from scratch
* Config.ru
* How and Why we use the MVC pattern?
    * Separation of concerns
    * Model: interacts with our database, how we create instances
    * Controller: go-between
    * View: html that renders a web page

**TASK:** Take 2 mins with you partner and discuss the MVC pattern
    
#### **Implement one model that inherit from ActiveRecord**
* Model
    * A class (template for objects) which represents a table
    * Where business logic goes

**TASK:** Implement Book model
    
#### **Implement one controller to route and process requests**
* Controller
    * Where the path is driven
    * Analogies:
        * Model would be the kitchen, view would be the customers, and the controller would be the server
        * Model would be the factory, view would be the end user, and the controller would be the distributor
        
#### **Demonstrate how the params hash changes and where the data comes from**

#### **Implement ERB template and get it to render data from controller and model**

#### **Identify the connection between REST and CRUD**
* What REST stands for?
    * REpresentational State Transfer
        * My URL talk about the state of application team
        * http://www.espn.com/nba/players
    * Index page
    * Show page
    * New page
    * Edit page
    * Create route
    * Update route
    * Delete route


### Deliverables:
* View all the books
    * get /books
* View info on an individual book
    * get /books/:id
* Create a new book
    * get /books/new
    * post /books
* edit an existing book
    * get /books/:id/edit
    * patch /books/:id
* delete an existing book
    * delete /books/:id
