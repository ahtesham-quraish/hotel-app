This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

<a href="https://codeclimate.com/github/ahtesham-quraish/hotel-app/maintainability"><img src="https://api.codeclimate.com/v1/badges/419422b8188042f994f2/maintainability" /></a>
<a href="https://codeclimate.com/github/ahtesham-quraish/hotel-app/test_coverage"><img src="https://api.codeclimate.com/v1/badges/419422b8188042f994f2/test_coverage" /></a>

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Setup the Code locally.

1 - install node and yarn manager and npm manager.

2 - Run the following command -> npm i create-react-app

3 - Clone repo locally

4 - Run following command -> yarn start (for dev build)

5 - Run following command for Unit test -> yarn test 

Following is the matric which explain the Unit test cases results matrics.

 PASS  src/components/sidebar/Sidebar.test.js\
 PASS  src/components/search/Search.test.js\
 PASS  src/components/sortRow/SortRow.test.js\
 PASS  src/components/slider/Slider.test.js\
 PASS  src/components/hotel/Hotel.test.js\
 PASS  src/components/hotellist/HotelList.test.js

Test Suites: 8 passed, 8 total\
Tests:       25 passed, 25 total\
Snapshots:   3 passed, 3 total\
Time:        2.301s\
Ran all test suites.\
----------------------------------|----------|----------|----------|----------|-------------------|\
File                              |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |\
----------------------------------|----------|----------|----------|----------|-------------------|\
All files                         |    95.88 |      100 |    93.88 |    95.79 |                   |\
 components/button                |      100 |      100 |      100 |      100 |                   |\
  Button.js                       |      100 |      100 |      100 |      100 |                   |\
 components/datepicker            |      100 |      100 |      100 |      100 |                   |\
  DatePicker.js                   |      100 |      100 |      100 |      100 |                   |\
 components/hotel                 |      100 |      100 |      100 |      100 |                   |\
  Hotel.js                        |      100 |      100 |      100 |      100 |                   |\
 components/hotellist             |      100 |      100 |      100 |      100 |                   |\
  HotelList.js                    |      100 |      100 |      100 |      100 |                   |\
 components/search                |      100 |      100 |      100 |      100 |                   |\
  Search.js                       |      100 |      100 |      100 |      100 |                   |\
 components/sidebar               |      100 |      100 |      100 |      100 |                   |\
  Sidebar.js                      |      100 |      100 |      100 |      100 |                   |\
 components/slider                |    91.67 |      100 |    83.33 |    91.67 |                   |\
  Slider.js                       |     87.5 |      100 |       80 |     87.5 |                27 |\
  Tooltip.js                      |      100 |      100 |      100 |      100 |                   |\
 components/sortRow               |      100 |      100 |      100 |      100 |                   |\
  ButtonContainer.js              |      100 |      100 |      100 |      100 |                   |\
  SortRow.js                      |      100 |      100 |      100 |      100 |                   |\
 containers/App                   |      100 |      100 |      100 |      100 |                   |
  App.js                          |      100 |      100 |      100 |      100 |                   |
 containers/MainContainer         |    78.57 |      100 |       60 |    76.92 |                   |
  MainContainer.js                |    57.14 |      100 |       50 |       50 |          18,22,23 |
  MainContainerReducer.js         |      100 |      100 |      100 |      100 |                   |
  actionTypes.js                  |      100 |      100 |      100 |      100 |                   |
 containers/MainContainer/actions |      100 |      100 |      100 |      100 |                   |
  fetchHotelListAction.js         |      100 |      100 |      100 |      100 |                   |
----------------------------------|----------|----------|----------|----------|-------------------|
