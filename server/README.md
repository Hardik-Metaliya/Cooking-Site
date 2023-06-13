## API Routes

## Demo

link:-https://cooking-site.onrender.com/

- look at root folder for installation guide

## API Routes

| Route                         | Description                         | Method | Additional Info                         |
| ----------------------------- | ----------------------------------- | ------ | --------------------------------------- |
| `/`                           | Root route                          | GET    |                                         |
| `/recipes`                    | Get all recipes                     | GET    |                                         |
| `/recipes/limitrecipes`       | Get limited recipes with pagination | GET    |                                         |
| `/recipes/id/:id`             | Get a recipe by ID                  | GET    |                                         |
| `/recipes/category/:category` | Get recipes by category             | GET    |                                         |
| `/recipes/addrecipe`          | Add a new recipe                    | POST   | Login Required                          |
| `/recipes/:id`                | Update a recipe                     | PUT    |                                         |
| `/recipes/:id`                | Delete a recipe                     | DELETE | Login Required                          |
| `/users/register`             | Register a new user                 | POST   | Can't create without admin's permission |
| `/users/login`                | User login                          | POST   | You will get a JWT Token                |
| `/contact`                    | Contact form submission             | POST   |                                         |

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
