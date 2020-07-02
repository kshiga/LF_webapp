# Fullstack Engineer Coding Challenge
### LightFeather.io
-----

This repository represents Kaitlyn Higa's submission to LightFeather.io's Fullstack Engineering Coding Challenge.

The app created is written in JavaScript and utilizes the following tools, libraries, and frameworks.

- [Node](https://nodejs.org/en/)
  - [Express](https://expressjs.com/)
  - [Mocha](https://mochajs.org/)
  - [Chai](https://www.chaijs.com/)
  - [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Skeleton CSS](http://getskeleton.com/)
- [jQuery](https://jquery.com/)

-----

### How to run
Requirements
- Node 12.18.1 ([download](https://nodejs.org/en/download/))
- MongoDB 4.2.8 ([download](https://www.mongodb.com/try/download/community))

#### Getting Started
1. In a web browser, navigate to the GitHub repo at [https://github.com/kshiga/LF_webapp](https://github.com/kshiga/LF_webapp)
2. Copy either The HTTP or SSH link to clone the repo on to your local machine

> I'm using SHH so I'm copying `git@github.com:kshiga/LF_webapp.git`

3. In a terminal, navigate to the directory that you want to clone the repo into

> I want this to live in my `~/Documents/code` directory, so I'll `cd` to there

4. Clone the repo into the directory

> `$ git clone git@github.com:kshiga/LF_webapp.git`

5. Navigate into the directory

> `$ cd LF_webapp`

6. Install all node packages needed to run

> `npm install`

7.  Once this has completed, you can start the application

> `$ npm start`



-----
### How to test

Once your application is running, you can move on to testing out its functionality. You can start the application by navigating to the `LF_webapp` directory and running the command `npm start`.

#### Webserver
In a new terminal, run the following command.

```
$ curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"shift": 3, "message": "encode this message please"}' \
  localhost:23456/api/encode
```

This should  return

```
{"EncodedMessage":"hqfrgh wklv phvvdjh sohdvh"}
```

Alter the JSON data to get different results.

Additionally, you can run tests without a server running.  In a terminal, navigate to the `LF_webapp` directory and run the tests with `npm test`.

#### Client
With the server running, open a web browser and navigate to [localhost:23456/user-signup.html](http://localhost:23456/user-signup.html).  Be sure to have JavaScript enabled on your browser.

Here is how to manually test the requirements on the elements

1. Username
  - Required
    - actions
      1. Type characters in the input
      2. Clear out the input
      3. Click outside of the input
    - expected result
      - Helper text reading "Username is required" is displayed below input
  - Maximum length
    - action
      1. Type more than 15 characters in the input
      2. Click outside of the input
    - expected result
      - Helper text reading "Username cannot be longer than 15 characters" is displayed below input
  - Valid input
    - action
      1. Type more than 0, less than 15 characters in the input
      2. Click outside of the input
    - expected result
      - No helper text is displayed below input
      - Any existing helper text will be removed
2. Email address
  - Required
    - action
      1. Type characters in the input
      2. Clear out the input
      3. Click outside of the input
    - expected result
      - Helper text reading "Email is required" is displayed below input
  - Formatted
    - action
      1. Type characters that **do not** comply with the specs outlined [here](https://stackoverflow.com/a/2049510) AKA an invalid email address
      2. Click outside of the input
    - expected result
      - Helper text reading "Email is not valid" is displayed below input
  - Valid Input
    - action
      1. Type characters that comply with the specs outlined [here](https://stackoverflow.com/a/2049510) AKA a valid email address
      2. Click outside of the input
    - expected result
      - No helper text is displayed below input
      - Any existing helper text will be removed
3. Password
  - Required
    - action
      1. Type characters into the **Password** field input
      2. Clear out the Input
      3. Click outside of the input
    - expected result
     - Helper text reading "Password is required" is displayed below the Password field input
  - Matching
    - action
      1. Type characters into the **Password** field input
      2. Type characters that form a different string in the **Confirm Password** field input
      3. Click outside of the input
    - expected result
      - Helper text reading "Passwords must match" is displayed below the Confirm Password field input
    - Valid Input
      - action
        1. Type characters into the **Password** field input
        2. Type the **exact same** characters in the **Confirm Password** field input
        3. Click outside of the input
      - expected result
        - No helper text is displayed below Confirm Password or Password input
        - Any existing helper text will be removed
4. Submit button
  - Disabled
    - action
      - Pick a field above and follow the steps to create an error
      - On page load
    - expected result
      - Submit button at the end of form is disabled
  - Enabled
    - action
      - Follow the steps for creating valid input for each of the form fields
    - expected result
      - Submit button is enabled

-----

### Notes & Future Improvements

I took this opportunity to re-familiarize myself with nodejs, a technology that I have not utilized in a while.  I chose node because of its robust packages and support and because I wanted to keep all of the work in JavaScript, one of my most used languages. As you will read below, the familiarity of node/express concepts (or lack of) had significant impact upon my ability to be building the products.

#### Webserver
Overall, I'm fairly satisfied with the technical implementation of the server. I chose Express as the application framework due to my familiarity with it as well as its popularity.  Google is my most trusted companion while coding and Express was at the top of all of the lists for node application frameworks.  PostgrSQL, the database that I originally chose however, presented me with a significant amount of obstacles.  Familiarity was the main reason that I chose this relational database, but I ran into issues upon install.  After more research, I settled upon MongoDB. Because the requirements did not ask for a read from disk, Mongo became the choice for the application's database.  Due to its document based structure, writes are relatively fast. Additionally, a popular node package called Mongoose was able to offer a very elegant and readable solution for creating models.

In creating the methods for encoding messages, an ambiguity in how the cipher was to work appeared. What should be included in this alphabet set?  Latin letters only?  Lowercase? Uppercase?  What would the order of this set be?  Lowercase first such that a loop would look like `a, b, c, ..., y, z, A, B, ...`?  The opposite way around?  I decided to make some assumptions and base the method off of those.  

1. The alphabet consists of unaccented latin letters
2. Special characters are not included in the alphabet
3. Casing does not create a new set of letters, but ...
4. Casing must be maintained per each character

In the future, I would want to develop a client side to this application, if just to be able to send out the post requests.  Ideally, the page would also display a set of previously encoded messages.  A decoder functionality would also be something to consider.

_____

### Requirements
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
- [x] Create a user signup form with the following fields
  - [x] Username
    - [x] Make sure a username cannot be longer than 15 characters.
  - [x] Email
    - [x] Validate the email addresses to spec: https://stackoverflow.com/a/2049510.
  - [x] Password
  - [x] Confirm Password
    - [x] Confirm the ‘Password’ and ‘Confirm Password’ fields match.
  - [x] All fields are required
- [x] Form should have validation checks
  - [x] If input is invalid, show error on click outside of field
  - [x] If any input is invalid, disable submit button
- [x] Follow the following style rules:
  - [x] Inputs are aligned vertically
  - [x] Inputs are stacked
  - [x] Center fields on the page
  - [x] Vertical margin between elements should be >= 8px
  - [x] Input fields corners should be rounded with >= 2px radius
