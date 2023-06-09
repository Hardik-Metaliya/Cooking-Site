# Cooking Website

This is a cooking website project that allows users to view and create recipes. It provides various features such as authentication, recipe listing, recipe details, and recipe creation.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- User authentication: Users can sign up, log in, and access protected routes.
- Recipe listing: Users can view a list of recipes.
- Recipe details: Users can view detailed information about a specific recipe.
- Recipe creation: Authenticated users can create new recipes.
- Categories: Recipes can be categorized for easy navigation.
- Tags: Recipes can be tagged for easier search and organization.

## Requirements

Make sure you have the following software installed on your machine:

- Node.js (v12 or higher)
- MongoDB

## Installation

1. Clone the repository:

```
git clone https://github.com/Hardik-Metaliya/Cooking-Site
```

2. Navigate to the project directory:

```
cd cooking-website
```

3. Install the dependencies:

```
npm install
```

4 .Set up environment variables:

- Create a `.env` file in the root directory of the project.
- Copy the content of .env.example into .env.
- Update the environment variables with your own values.
- Sample .env file:

```
Email_ID=example@gmail.com email id that will send email to To_Email
Email_ID_Pass=your app password for gmail just search app pass on google very easy steps
JWT_SECRET=jwt token password
MONGODB_URI=mongodburi
To_Email=the email which will receive the mail sent by Email_ID
```

5.Set up MongoDB:

- Make sure MongoDB is running on your machine.
- Update the MongoDB connection URL in the `.env` file with your MongoDB server information.

## Usage

1. client

```
cd client
npm run dev

```

2. server

```
cd server
nodemon server.js
```

3. Open your web browser and visit http://localhost:3000 to access the cooking website.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug fixes, please open an issue or submit a pull request.
