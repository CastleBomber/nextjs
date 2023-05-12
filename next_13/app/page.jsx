/**
 * Author: CastleBomber
 * Project: Next_13
 * Date: April 17th, 2023
 *
 * Acknowledgements: Traversy Media's Youtube Next.js 13 series
 *
 * Tips:
 * npm run dev (from root folder)
 *
 * Creates a React app with the contents a folder called frontend
 * npx create-react-app@latest frontend --template redux
 * ^^ may have used: npx create-next-app@latest^^
 *
 * next 13 - react frame work server side rendering (SSR)
 * react - front end JS library, client side rendering (CSR)
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
import Link from "next/link";

export const metadata = {
  title: "CastleBomber Title",
};

const HomePage = () => {
  return (
    <div>
      <h1> Welcome to CBombs's Page </h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
