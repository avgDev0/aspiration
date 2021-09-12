## Dev notes

For this project I used the following libraries/packages:

- create-react-app to create the basic skeleton of the app, no template was applied
- Material UI as a component library
- Apollo as a GraphQL client
- Prettier and ESLint as code formatter and linter
- Husky and lint-staged as tools to add a pretty simple pre-commit hook

## How to run and test the app

**I didn't added any tests because, to be completely honest, I haven't used any testing framework in a few months and it would take me extra time (more than what it already tooked me) to review it and implement any kind of test.**

**For what it's worth, I've worked and have knowledge of libraries like Jest for unit testing and Cypress for integration testing, it's just that in my last couple of project we didn't used any testing tool because of the nature of them so the knowledge I had eventually rusted :(**

To run the app you'll need to go thru the following setup:

- Create a **.env.local** file in the root directory of the project and add an environment variable with key = REACT_APP_GITHUB_KEY and value = any valid Github key with enough permissions to fetch the Github API for topics (as a tip, follow [this guide](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) to create a key that would suffice the permissions requirements)
- Make sure yarn is installed in your system by running **yarn --version**, if it's not, install it ([here](https://classic.yarnpkg.com/en/docs/install/#arch-stable) you can find alternatives for that process)


Once you're sure yarn is installed run **yarn install** to install the necessary app dependencies and then simply run **yarn start**

The app displays a single card element in the center of the browser that looks for the topic 'react' by default, it shows the name of the current topic, the stargazer count and the first 10 related topics provided by the GraphQL API (10 is the max limit for related topics).

You can then click on any of the listed topics, then the app will fetch the same data stated above but now for the selected topic, you can go back to the previous topic by clickinc the 'Back' button on your browser.

If any error occurs then an error will be displayed in the screen. It will contain the actual error message and ask the user to reload the page to try to fix it.

*Tip: try the mobile version by accessing the '[device toolbar](https://www.digitalcitizen.life/emulate-mobile-device-desktop-browser/)' in your browser.*

## Improvements

- Obviously, the next step from here would be to add both, integration and unit testing before thinking on adding any sort of enhancement or design change.
- Introducing TypeScript might be complex but I would recommend it, I think GraphQL + TypeScript are a very strong combination
- Replace the single stargazer counter for a more elaborated component, maybe one showing the avatars of the (4 or 5 first) stargazers ([implementation example](https://material-ui.com/components/avatars/#image-avatars)). That would make the app look more complete from my standpoint.
- Add a searching functionality so we're not tight to whatever topics are related to the one we're currently viewing.
- Add the ability to display more then one topic card at a time
- There's a known issue in the repo: even though husky is installed and a .husky folder containing a pre-commit hook exists it doesn't get executed when the code is downloaded in a new machine (we need to 'rerun' husky's config after the installation of the package, maybe changing the start script to include that setup?), I would fix that issue before thinking on collaborating
- .eslint file contains a very basic set of rules, some of them might be revisited to properly configure them according to what we prefer.