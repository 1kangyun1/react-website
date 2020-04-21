import React from 'react';

export default function Projects() {
  return (
    <div>
      <h2>
        BUGFIX UPDATE: Right now the page refreshed on every page navigation change...which isn't right. I pushed some changes to the code hosted on github (modified App.js and NavigationBar.jsx). Basically Nav.Link becomes an anchor tag. So that causes the browser to physically route to that page, which isn't what we want. We want the single page app to navigate there and not have to rerender the entire page. So in the NavigationBar file I imported Link from react-router-dom. Then I  wrap the links in the Link component so react router dom knows how to navigate. Then I needed to add the a tag selector to our link styling in the navigation file. Then finally, I had to move the NavigationBar and Jumbotron files inside the Router component in App.js so they can take advantage of the router. Thanks again for catching that. Hope that helps!
        NOTE: Make sure you are running the same version of Bootstrap and React-Bootstrap as me. If you use NPM, it installs a different version than Yarn. If using NPM, when installing Bootstrap and React bootstrap, instead of "npm install --save react-bootstrap and bootstrap" you will need to run "npm install --save react-bootstrap@1.0.0-beta.6 bootstrap@4.3.1". Otherwise install Yarn with NPM and you will be okay. For whatever reason, Yarn and NPM install different versions.
        Github Code - https://github.com/MyNameIsURL/React-...
        Create a website with React Bootstrap, Styled Components and React Router. React-Bootstrap is used to quickly style our page with their selection of prebuilt react components. Then we use styled-components to tweak some of the styles. Finally, we use react-router page navigation in our navbar.
      </h2>
    </div>
  )
}
