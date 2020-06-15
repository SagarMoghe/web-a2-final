# Assignment-2

This is the final submission of the Assignment-2 of Web development.

* Date Created: 06 06 2020
* Last Modification Date: 14 06 2020

## Authors

If what is being submitted is an individual Lab or Assignment, you may simply include your name and email address. Otherwise list the members of your group.

* [Sagar Moghe](sg286595@dal.ca) - (Contributor) B00838037
git: https://github.com/SagarMoghe/web-a2-final



## Getting Started

The small front-end is uploaded on https://web-a2-b00838037.herokuapp.com/


### Prerequisites

To have a local copy of this lab / assingnment / project up and running on your local machine, you will first need to install the following software / libraries / plug-ins
Node
npm
bootstrap
create-react-app


```
Give examples or provide a list of the required software / libraries / plug-ins
IDE

```

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be, assume the marker just acquired a computer

To run this project, run command npm i in web-a2-final folder nad npm i in web-a2-final/web-a2 folder

Note:
I made 4 pages for this assignment: Landing page, Cost-estimator Page, Password reset, and Search result page.
All these pages cannot be linked due to missing few connecting pages. 
Landing page and Search result page are linked. On clicking the button in cost estimator image in landing page, it will redirect to Cost-estimator Page.
"/reset" is the route given to password reset page.
"/result" is given to searched result page.
"https://web-a2-b00838037.herokuapp.com/" Landing Page.
"https://web-a2-b00838037.herokuapp.com/Estimator" Cost-Estimator page.
"https://web-a2-b00838037.herokuapp.com/result" Result page.
"https://web-a2-b00838037.herokuapp.com/reset" Password reset page.


```
Give the example
```
./web-a2-final> npm i

And repeat

web-a2-final/web-a2> npm i

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo. You may also include a quick example of what the marker should see if the installation of all required software / libraries / plug-ins was successful.


## Running the tests

If needing to run automated tests, then explain how to run the automated tests for this system. If this section is not needed, ** you may delete **.
No deletions required.

### Break down into end to end tests
Landing page: Links working properly, Responsive.
Estimator page: text validator, email validator, responsive
Password Reset Page: Password matching, blank password as input, Responsive
Search result page: Responsive design


Explain what these tests test and why
Tests are essential in determineing the security and user experience quality of our application


```
Give an example
```
Landing: Test if we can navigate to next pages and the display is responsive in multiple screen sizes.
Estimator: Text validation on input data such as email name, error popup on incorrect data, Correct output in test input of estimator.
Password Match: Proper response on password match and fail. Blank password error handling, Responsive design to all screen size.

### And coding style tests
All the code is written in ES6 syntax.
The code was written in modular format and each module was independently tested after integration.

Explain what these tests test and why
Integration testing if all the modules appear as desired and no overlap is observed.
All functions are written using arrow fucntion style

```
Give an example
```


## Deployment

Add additional notes about how to deploy this on a live system

This system is deployed using Heroku at https://web-a2-b00838037.herokuapp.com/

## Built With

Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below 
[React](https://reactjs.org/) - The web front end Framework
[npm](https://www.npmjs.com/) - package manager
[bootstrap](https://getbootstrap.com/) - CSS library
[express](https://expressjs.com/) - Deployment server framework



## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implement, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.

### RideCard component

Lines 18 - 28
---------------
<div className="col-lg-3 col-md-6 ">
                    <div className="card mt-4 mb-5 shadow-lg">
                        <img src={props.source} alt='Image' className='img-fluid' ></img>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h4 className="card-title font-weight-bold">{props.name}</h4>
                                <label className='_addToFav'>
                                    <input type="checkbox" name="favorite" className='d-none'/>
                                    <i className="material-icons _active d-none _textcolor">favorite</i>
                                    <i className="material-icons _inactive _textcolor">favorite_border</i>
                                </label>
                            </div>

                            <div className="card-subtitle text-truncate text-muted my-2">Ride Description</div>
                            <div className="card-text d-flex justify-content-between mt-5 mb-3">
                                <span>Pooling rate</span>
                                <span className="_priceSection d-flex">
                                    <div className='h6 _textcolor'>${props.price} </div>
                                    <div>/per person</div>
                                </span>
                            </div>
                            <button className='btn d-inline-flex text-uppercase text-white font-weight-bold rounded-0 _cartButton position-absolute' style={styles}>
                                <span>Select</span>
                                <i className="material-icons ml-2"> read_more </i>
                            </button>
                        </div>
                    </div>

                </div>
```
Copy and paste your code on lines mentioned 

```

The code above was created by adapting the code in [Front End Funn](https://www.youtube.com/watch?v=kwW7QCr99VI) as shown below: 

```
Copy and paste the snippet of code you are referencing

```
Youtube video link: https://www.youtube.com/watch?v=kwW7QCr99VI

- <!---How---> The code in [Front End Funn](https://www.youtube.com/watch?v=kwW7QCr99VI) was implemented by... Sagar Moghe



- <!---Why---> [Front End Funn](https://www.youtube.com/watch?v=kwW7QCr99VI) Code was used because...
It is the base card design of all shopping websites.


- <!---How---> [Front End Funn](https://www.youtube.com/watch?v=kwW7QCr99VI) Code was modified by...
It was designed for single card, the cards were made responsive and multiplied 12 times.


Repeat as needed

### File Name: Reset Portal

Lines 46 - 58
---------------
<div className="d-flex justify-content-center align-items-center login-container">
                <form className="login-form text-center"  action='/' >
                    <h1 className="mb-5 font-weight-light text-uppercase">Reset Password</h1>
                    <div className="form-group">
                        <input type="password" className="form-control rounded-pill form-control-lg" placeholder="Enter new password" name="up" required onChange={this.setPassHandler}/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control rounded-pill form-control-lg" placeholder="Re-enter the new password" name="up2" required onChange={this.setNewPassHandler}/>
                    </div>
                    <button type="submit" className="btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase" value="Create account"onClick={this.validation.bind(this)}>Submit
                    </button>
                </form>
            </div>

```
Copy and paste your code on lines mentioned 

<div className="d-flex justify-content-center align-items-center login-container">
                <form className="login-form text-center"  action='/' >
                    <h1 className="mb-5 font-weight-light text-uppercase">Reset Password</h1>
                    <div className="form-group">
                        <input type="password" className="form-control rounded-pill form-control-lg" placeholder="Enter new password" name="up" required onChange={this.setPassHandler}/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control rounded-pill form-control-lg" placeholder="Re-enter the new password" name="up2" required onChange={this.setNewPassHandler}/>
                    </div>
                    <button type="submit" className="btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase" value="Create account"onClick={this.validation.bind(this)}>Submit
                    </button>
                </form>
            </div>

```

The code above was created by adapting the code in [Vijay Shinde](https://www.youtube.com/watch?v=PF1n6ZdTaW4) as shown below: 

```
Copy and paste the snippet of code you are referencing

```
https://www.youtube.com/watch?v=PF1n6ZdTaW4

- [How] The code in [Vijay Shinde](https://www.youtube.com/watch?v=PF1n6ZdTaW4) was implemented by... Sagar Moghe

- [Why] [Vijay Shinde](https://www.youtube.com/watch?v=PF1n6ZdTaW4) Code was used because... Base template page for login page.

- [How] [Vijay Shinde](https://www.youtube.com/watch?v=PF1n6ZdTaW4) Code was modified by... Frontend validation added and some style changed.

Repeat as needed

## Acknowledgments
I would like to acknowledge countless stackoverflow contributors and youtubers that make up the best support comunity in IT industry.
I would also like to acknowledge the teams of bootstrap react and many other frameworks that create much insightfull documentation.

* Hat tip to anyone whose code was used
* Inspiration
* etc

## References

2020. Car Image. [image] Available at: <https://unsplash.com/photos/6lSBynPRaAQ> [Accessed 15 June 2020].

2020. Car Sharing Image. [image] Available at: <https://www.hoeghautoliners.com/news-and-media/blogs/sharing-economy-disrupts-car-ownership-model> [Accessed 15 June 2020].

2020. Cost Estimator Image. [image] Available at: <https://www.cleveroad.com/blog/see-how-to-start-a-rideshare-business-and-make-a-rideshare-app-from-scratch> [Accessed 15 June 2020].

2020. Product Card Component. [video] Available at: <https://www.youtube.com/watch?v=kwW7QCr99VI> [Accessed 15 June 2020].

2020. Reset Password Template. [video] Available at: <https://www.youtube.com/watch?v=PF1n6ZdTaW4> [Accessed 15 June 2020].

2020. Save Money Image. [image] Available at: <https://www.bloglovin.com/@mtammy779/grocery-shopping-best-ways-to-save-money> [Accessed 15 June 2020].

Getbootstrap.com. 2020. Redirecting…. [online] Available at: <https://getbootstrap.com/docs/4.1/components> [Accessed 15 June 2020].

Shaha, A., 2020. Tutorial 2. [video] Available at: <https://dal.brightspace.com/d2l/le/content/124056/Home?itemIdentifier=D2L.LE.Content.ContentObject.ModuleCO-1670247> [Accessed 15 June 2020].
