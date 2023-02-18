# Whats On?

## Description

'Whats On?' is an application that allows a user to select metadata relating to movies which will then pull data from 2 movie API sources to produce a list of films related to the users choices. The list will include a poster image, synopsis and
a trailer. The basic idea of the app is that when you dont know exactly what you want to watch, though you have a feeling for a specific type of movie you can enter the criteria for what you feel like watching and have a list tailor made to help you select the perfct watch 

## Table of Contents

- [Installation](#installation)
- [Credits](#credits)
- [License](#license)


## User Story

As an INDECISIVE MOVIE ENJOYER
I WANT a choice of metadata related to movies I can pick from
THEN a list of movies is created tailored to my choices
making it easier to decide on what to watch.

## Challenges

We faced many challenges throughout the process of this project. The most outstanding issue was getting the second API. First choice was TrailerAddict API, which unfortunetly is going through upgrades during the creation
of this app forcing us to source a new API.
Then the second API only allows for very specific requests and limits these requests to only 75 calls. We have had to manage multiple keys and interchange them when they reach the limit.

Embeding the trailer into the modal was another challenge, we had funny bugs occur where the trailer would load into the closing button of the modal.

## Successes

After hours of failures we finally got the a trailer playing in the modals. This was a huge win for the team!

Coming together as a team and completing the task to the MVP status is our greatest success story of the project.

## Future Development

In the future we hope to add more more metadata options to be selected from. As for the sake of hitting MVP ASAP we opted to go only with the options of selecting a genre. Future additions would look like:

- Options for Release Date
- Choice by Actor and/or Director
- Cross genre's
- movies by rating
- adding like features, making a certain movie more likely to hit the list

## Usage

1. User loads webpage
2. User clicks the genre selection button and picks a genre from the menu
3. User decides a genre and is met with 20 films relevent to their selection to chose from
4. User clicks the poster image and can watch a trailer for that specific film
5. User decides to watch the movie!

## Installation

No installation is required. The code is currently deployed in github pages! The end result can be appreciated by just accessing the page. (click below!)

[Whats on](https://virgona.github.io/Whats-on/)

## Credits

This challenge is part of a Bootcamp by University of Sydney and Trilogy.

The source code was initially provided by the abovementioned entities and modified by us.

In this instance we only used code provided by the following documentation;

- [Moment.js](https://momentjs.com/docs/#/displaying/)

- [Jquery API](https://api.jquery.com/)

- [W3Schools](https://www.w3schools.com/jquery/)

## Screenshots

![whats on webpage](./assets/images/Whats%20On%20Webpage.png)

## The Team

- [Andrew](https://github.com/AndrewDippel)
- [Chris](https://github.com/ChristopherGatt)
- [Ivo](https://github.com/ivoveloso)
- [Toby](https://github.com/Virgona)

## License

MIT License

Copyright (c) 2022 [Ivo Veloso]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---
