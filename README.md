# Fullstack Engineer Coding Challenge
### LightFeather.io
-----

This repository represents Kaitlyn Higa's submission to LightFeather.io's Fullstack Engineering Coding Challenge.

The app created is written in JavaScript and utilizes the following tools, libraries, and frameworks.

- Node
  - Express
  - [Testing Library] // TBD
- [DB] // TBD
- [CSS Styling Library] // TBD
- React
  - react-testing-library

-----

### How to run

 // TODO

Node

Database Setup

Web Application


-----
#### Webserver Specifications

- [x] The webserver should run on port `23456`.
- [] The webserver has an endpoint at `/api/encode`.
  - [] This endpoint should accept post requests.
  - [] This endpoint expects a JSON string to be received. The JSON structure should have two keys.
    - [] This endpoint should accept post requests.
    - [] The JSON structure should have a key `Shift`. It’s value should be an
    integer.
    - [] The JSON structure should have a key `Message` It’s value should be a
    string.
  - [] When the JSON payload is received, it should encode the provided message
  using the shift cipher method.
    - [] If multiple words are provided, spaces should be retained.
    - [] Shift Cipher Method: shift character a given number N spaces
      - Examples
        - char `A`, shift `1`: `B`  
        - char `B`, shift `2`: `D`
  - [] When the message is successfully encoded, it should be stored in a file on disk.
  - [] The endpoint should return a 200 if successful, 500 if unsuccessful.
  - [] The endpoint should return a json object with a single key `EncodedMessage`.
    - [] If successful, the value returned should be the encoded string.
    - [] If unsuccessful, it should return an empty string.


#### Web Component Specifications
- [] Create a user signup form with the following fields
  - [] Username
    - [] Make sure a username cannot be longer than 15 characters.
  - [] Email
    - [] Validate the email addresses to spec: https://stackoverflow.com/a/2049510.
  - [] Password
  - [] Confirm Password
    - [] Confirm the ‘Password’ and ‘Confirm Password’ fields match.
  - [] All fields are required
- [] Form should have validation checks
  - [] If input is invalid, show error on click outside of field
  - [] If any input is invalid, disable submit button
- [] Follow the following style rules:
  - [] Inputs are aligned vertically
  - [] Inputs are stacked
  - [] Center fields on the page
  - [] Vertical margin between elements should be >= 8px
  - [] Input fields corners should be rounded with >= 2px radius
