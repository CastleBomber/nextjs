/**
 * Author: CastleBomber
 * Project: Next_13
 * Date: April 17th, 2023
 *
 * Acknowledgements: Traversy Media's Youtube Next.js 13 series
 *
 * Tips:
 * Creates a React app with the contents a folder called frontend
 * npx create-react-app@latest frontend --template redux
 *
 * To get app running, affirm correct folder,
 * (for this project, run from root folder)
 * npm run client (starts frontend)
 * (same as using: npm run start  while in the 'frontend' folder)
 *
 *
 * cmd+D will change opening and closing tag simultaneously
 * cmd+D (+ D..) change multiple nearby instances of a name
 * cors-heroku error: open https://cors-anywhere.herokuapp.com/corsdemo
 *
 * Watch out for:
 * In app, older syntax 'component', needs to be switched to 'element'
 * older syntax of 'Switch', need to be 'Router' surrounding 'Route'
 *
 * URL variables may need ending '/' added to function properly
 *
 * Bootstrap uses: public/index.html
 *
 * For multiple package.json files, the needed dependency will need
 * to be loaded up from the ~immediate directory (perhaps where npm* was called)
 * ex: frontend/src/App.js uses react-bootstrap.
 *     so frontend/package.json needs to show react-bootstrap
 *     ./package.json version not seen/used
 *
 * For image carousel, keep images 1920w x 800h to prevent page resizing
 */

import React from "react";

const HomePage = () => {
  return <div>HomePage</div>;
};

export default HomePage;
