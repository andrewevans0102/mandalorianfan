# mandalorianfan.com

![](./public/HomePage.jpg)

This project is the webiste for [mandalorianfan.com](https://www.mandalorianfan.com). It is open source with the MIT license.

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

This project makes use of two environment variables for deployment.

- `MANDO_MESSAGE`
- `MANDO_GA`

They should not impact your ability to run the app locally, but I just note them here if you see a build error.

## Contributing

If you'd like to add to this project, feel free to open a PR and I will review as soon as I can.

Additional tasks that I'm planning to do:

- create Jest unit tests for components
- add additional characters and vehicles
- refactor some of the pages to be [React higher order components](https://reactjs.org/docs/higher-order-components.html)
- improve performance with automatically optimzing images
