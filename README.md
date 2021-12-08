# Evaluate A News Article with Natural Language Processing


# The goal of this project :-

* Setting up Webpack
* Sass styles
* Webpack Loaders and Plugins
* Creating layouts and page design
* Service workers
* Using APIs and creating requests to external URLs



## Installation

1. go to the project folder

2. Install npm ---->    npm install

3. Install loaders and plugins

# Choose the necessary installation for your development mode
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin

4. Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

5. Configure environment variables using dotenv package
	1. Install the dotenv ----->npm install dotenv
	
	2. Create a new `.env` file 
	3. write your API key in`.env` file with  like this:
	API_KEY=-----------
	
6. Start the project

`npm run build-dev` 
`npm run build-prod` 
`npm start` 


