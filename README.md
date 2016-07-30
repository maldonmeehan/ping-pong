# EPICODUS STUDENT PROJECT | Arrays and Looping: Build a Ping-Pong Converter

#### Ping-Pong Converter, June 9, 2016

#### By **Maldon Meehan, Epicodus**

## Description

This is an Epicodus student project to create a web application that takes a number from a user and returns a range of numbers from 1 to the inputed number with the following exceptions:
* Numbers divisible by 3 are replaced with "ping"
* Numbers divisible by 5 are replaced with "pong"
* Numbers divisible by 15 are replaced with "pingpong"
* The user will be able to a new number and see new results over and over again.

Behavior  | Input Example | Output Example
------------- | ------------- | -------------
Restrict input to numbers only  | abc | Alert: input field will only accept numbers
Restrict input to positive numbers only  | -1  | Alert: input field will only accept positive numbers
Find multiples of 15 (15,30,) with in the array of 1 to the inputed number and replace them with pingpong | 15 | (1,2,3,4,5,6,7,8,9,10,11,12,13,14,pingpong,)
Find multiples of 5 (5,10,15) with in the array of 1 to the inputed number and replace them with pong | 15 | (1,2,3,4,pong,6,7,8,9,pong,11,12,13,14,pong,)
Find multiples of 3 (3,6,9) with in the array of 1 to the inputed number and replace them with ping | 15 | (1,2,ping,4,5,ping,7,8,ping,10,11,ping,13,14,ping,)
Output the entire list in | 15 |(1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,pingpong,)

## Setup/Installation Requirements

* Open a web browser_
* Download this repo

## Known Bugs

* List keeps amending new answers unless the users refreshes the page, currently can't get the remove function to work

## Support and contact details

If you run into any issues or have questions, ideas, or concerns, please feel free to contact Maldon on github.

## Technologies Used

* HTML
* CSS
* JavaScript
* jQuery (jquery-1.12.4.js)
* Bootstrap (bootstrap.min.css)

### License

*MIT License*

Copyright (c) 2016 **_Maldon Meehan, Epicodus_**
