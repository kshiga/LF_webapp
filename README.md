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


Requirements
- Node.js
- MongoDB



#### Web Application


-----
### How to test

Once your application is running, you can move on to testing out its functionality.

#### Webserver
In a terminal, run the following command.
```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"shift": 3, "message": "encode this message please"}' \
  localhost:23456/api/encode
```
Alter the JSON data to get different results.

-----
#### Webserver Specifications

- [x] The webserver should run on port `23456`.
- [x] The webserver has an endpoint at `/api/encode`.
  - [x] This endpoint should accept post requests.
  - [x] This endpoint expects a JSON string to be received. The JSON structure should have two keys.
    - [x] This endpoint should accept post requests.
    - [x] The JSON structure should have a key `Shift`. It’s value should be an
    integer.
    - [x] The JSON structure should have a key `Message` It’s value should be a
    string.
  - [x] When the JSON payload is received, it should encode the provided message
  using the shift cipher method.
    - [x] If multiple words are provided, spaces should be retained.
    - [x] Shift Cipher Method: shift character a given number N spaces
      - Examples
        - char `A`, shift `1`: `B`  
        - char `B`, shift `2`: `D`
  - [x] When the message is successfully encoded, it should be stored in a file on disk.
  - [x] The endpoint should return a 200 if successful, 500 if unsuccessful.
  - [x] The endpoint should return a json object with a single key `EncodedMessage`.
    - [x] If successful, the value returned should be the encoded string.
    - [x] If unsuccessful, it should return an empty string.


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
