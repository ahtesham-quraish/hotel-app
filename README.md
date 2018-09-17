This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

[![Build Status](https://travis-ci.org/ahtesham-quraish/hotel-app.svg?branch=master)](https://travis-ci.org/ahtesham-quraish/hotel-app)
<a href="https://codeclimate.com/github/ahtesham-quraish/hotel-app/maintainability"><img src="https://api.codeclimate.com/v1/badges/419422b8188042f994f2/maintainability" /></a>
<a href="https://codeclimate.com/github/ahtesham-quraish/hotel-app/test_coverage"><img src="https://api.codeclimate.com/v1/badges/419422b8188042f994f2/test_coverage" /></a>


## Setup the Code locally.
install node and yarn manager and npm manager.

1 - Clone repo locally\
2 - Navigate to root directory of cloned repository\
3 - Open command line terminal and run the following commands -> npm i create-react-app\
4 - Run the following command -> yarn add npm-run-all\
4 - Run following command -> yarn start (for dev build)\
5 - Run following command for Unit test -> yarn test

Following is the matric which explain the Unit test cases results matrics.


![s2](https://user-images.githubusercontent.com/12580995/45630688-96198500-bab2-11e8-9422-c0eb0975518c.png)

Important Notes - :


Few Use cases are given below related to Sidebar filters

1 - We first need to select dates from datepicker then click on submit button to filter hotels. Refrence -> (First Step)\
2 - We can apply name and price filters and both would be applied as '&&', like if we select price range and then hotel name then both would be '&&' and result would be filterd. if we select dates again from datepicker these above two filters would be reset.\
3 - Sort by name and Sort by price would behave independently from name and price filters.

   
