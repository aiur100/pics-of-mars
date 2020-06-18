# Mars Photos

Author: Christopher Hill 
Email: chrishill9@gmail.com

A simple website to view photos taken on Mars by rovers currently on the surface. 

## Structure

`/api` - Contains `serverless` framework source code for the AWS lambda function that controls the photo responses.
`/web` - Contains the website HTML / Javascript that powers the client-side interface.

## Requirements
* For package management, you'll need NPM/Node installed. 
* You'll need the serverless framework tools installed for the API.

## Configuration
* Run `npm install` on root directory, and then go to the `api/` directory and run npm install. 

## Development Processes
* I use `http-server` in Node to server the website.  specifically running `http-server web`.  
* Simply install `npm install -g http-server` to globally install the server, since it's not a part of this project. 
* Then run `http-server web` and visit the address that appears in your CLI.

#### Deploy of API source code changes.
* `npm run deploy-api` which uses my AWS profile, or go into the API directly and use `sls deploy --aws-profile <YOUR PROFILE>`

