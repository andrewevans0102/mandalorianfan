# mandalorianfan.com

![](./public/HomePage.jpg)

This project is the website for [mandalorianfan.com](https://www.mandalorianfan.com). It is open source with the MIT license.

The image on the home page was copied from [https://starwars.fandom.com/wiki/The_Mandalorian](https://starwars.fandom.com/wiki/The_Mandalorian).

Episodes Summaries were originally copied from[https://en.wikipedia.org/wiki/The_Mandalorian](https://en.wikipedia.org/wiki/The_Mandalorian).

Quotes were originally copied from [https://www.magicalquote.com/best-mandalorian-quotes/](https://www.magicalquote.com/best-mandalorian-quotes/).

Character information and images was copied from [https://starwars.fandom.com](https://starwars.fandom.com).

Vehicle information and images were copied from [https://starwars.fandom.com](https://starwars.fandom.com).

## Project Structure

This is a react application. It uses [redux that can be seen here](./src/redux).

The [util](./util) folder has some helper functions that I used to pull data from wikipedia.

The site is hosted with Firebase and can be reached at [mnandalorianfan.com](https://www.mandalorianfan.com).

The site's deployment uses [GitHub Actions](https://github.com/features/actions).

## Environment Variables

This project's deployment makes use of the following environment variables

- `MANDO_MESSAGE`
- `MANDO_GA`

Not having them should not impact your ability to run the app locally. I just wanted to note it here if you see a build error.

## Running Locally

To run this project locally:

1. clone the project repo
2. have node installed (12.0 or higher recommended)
3. do an `npm i` at the project root
4. do `npm run start` and it should open on `http://localhost:3000/`

## Contributing

If you'd like to add to this project, feel free to open a PR and I will review as soon as I can.

Additional tasks that I'm planning to do:

- create Jest unit tests for components
- add additional characters and vehicles
- refactor some of the pages to be [React higher order components](https://reactjs.org/docs/higher-order-components.html)
- improve performance with automatically optimzing images

For anything else, feel free to contact me at [andrewevans0102](https://www.twitter.com/andrewevans0102)
