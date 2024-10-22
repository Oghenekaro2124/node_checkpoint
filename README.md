# Node.js Guided Exercises

This project contains a series of guided exercises to help you get started with Node.js. Each task demonstrates fundamental features of Node.js like creating a server, working with the file system, generating random passwords, and sending emails.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes bundled with Node.js)

Verify your installation by running:

```bash
node -v
npm -v

##Installation
Clone the repository or copy the code files. Then, install the required npm packages by running the following commands in the terminal for tasks 4 and 5:
npm install generate-password
npm install nodemailer

## Project structure
.
├── hello-world.js          # Task 1: Print HELLO WORLD to the console
├── server.js               # Task 2: Create a server that runs on port 3000
├── file-operations.js      # Task 3: Write to and read from files
├── password-generator.js   # Task 4: Generate random passwords
└── email-sender.js         # Task 5: Send an email using Node.js

## Tasks
1. Hello World
This is a simple Node.js script that prints "HELLO WORLD" to the console.

To run it:
node hello-world.js


2. Create a Server
This script creates a basic HTTP server that listens on port 3000 and responds with a simple HTML message.

To start the server:
node server.js

3. File System Operations
This script writes "Hello Node" to a file called welcome.txt and then reads and logs the contents of hello.txt.
To run the script:
node file-operations.js


4. Password Generator
This script generates a random password using the generate-password npm package and logs the password to the console.

To run the script:
node password-generator.js

5. Email Sender
This script sends an email using the nodemailer npm package. You will need to configure the script with your email credentials.

To send an email:
node email-sender.js

License
This project is licensed under the MIT License.


---

### Notes for Usage:
- Replace email addresses and credentials in the `email-sender.js` file before using.
- Make sure the `hello.txt` file exists before running `file-operations.js`.

This README should help anyone understand and run your project. Let me know if you need any changes or additions!





```
