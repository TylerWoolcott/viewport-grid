# Motilent single-page Grid of Viewports Coding Test 

## Link to website
https://viewport-grid.vercel.app/

## Requirements

Using the provided project template (based off create-react-app), create single page application that contains a uniform Grid of Viewports, with a fixed Sidebar. The Sidebar shall contain the inputs "Rows" and "Columns" both of which must be in the range of 1-10, and a button to collapse and expand the Sidebar. The Grid must show the defined number of "Rows" and "Columns", with a Viewport at each position. The Grid must fill remaining space and fit all Viewports equally, with a small gutter between them, and efficiently adapt to browser resizes and Sidebar collapsing/expanding. Each Viewport must have a thin border. Viewports must also be aware of their size at all times and be printed at its center.
The example colours are just for reference and styling should be adjusted for a clean modern UX.

Refer to `INSTRUCTIONS.md` for more details.

## Constraints

- Solution should be production quality, documented, and reusable.
- Solution should contain appropriate unit testing.
- Solution should not require additional NPM packages.
- Solution should work against the latest version of Chrome, Firefox and Edge

## Initial development strategy

 1. Scope out existing architectures available online for inspiration and the pros and cons of each approach.
 2. Decide which architecture approach to use.
 3. Assess layout configuration parameters the site may need in order to be fully responsive and interactive.
 4. Get the structure of the app in place.
 5. Start development.
 6. Ways I might evolve the site to improve its appeal and utility.

## Installing and running client locally 

> Note that if you want to test out the app, then you don't need to run it locally. You can visit the deployed app here: https://viewport-grid.vercel.app/

To install locally you will need to have node installed on your computer.

```bash
git clone https://github.com/TylerWoolcott/viewport-grid.git
yarn install
yarn start
```

Open `http://localhost:3000` in a browser. 

## Testing

Unit tests are included to test individual components.

To run the tests:
```bash
yarn test
```

Then press 'a' to run all tests.

## Retrospective

How did this little mini project go?

I actually really enjoyed it but it took me quite a while because I had to research a variety of ways to implement the grid dynamically. 

I started off by creating a static CSS Grid layout with the required borders and gutters, as well as the sidebar. Then I hooked up the functionality of the sidebar toggle button with React's useState hook. 

I had to lift state up to the App component because both the Viewport Grid and Sidebar components needed to know if the button had been toggled. I made the requisite adjustments to the SCSS file to accomodate different sizes when the sidebar is open / closed. I stubbed out the Column / Rows form. 

I quickly realised creating a component for each grid configuration would be impractical so I created a `GenerateGrid()` function that created rows / columns (a 2D array of child divs) in the DOM whenever a user added / removed them using the form inputs. Because there is no button to invoke the function, I placed it into a useEffect callback hook with the `row` and `column` in the dependency array so they can be tracked whenever they're updated. 

To add the `grid-template-columns` and `grid-template-rows` layout dynamically I stored them in two respective `const` variables and added them as an inline style to the parent div. In effect this created a 'child div factory' that dynamically added CSS Grid to the rows (eg. `grid-template-rows: repeat(n + 1, 1fr);`) and columns (eg. `grid-template-columns: repeat(n + 1, 1fr);`). I mapped over the rows and columns and rendered each child div item with the appropriate border and styling. 

Next I used useRef, useLayoutEffect, together with useState hooks to get, dynamically track and statefully update the viewport heights and widths via the `getClientHeight` and `getClientWidth` APIs. I then added the `gridRef` to the parent div for tracking and rendering the `width` and `height` variables in the child divs, and then divided them based on the `height.length` and `row.length`, and lastly `Math.round`ed them to get their values as integers. 

In `Sidebar.tsx` I created two functions that required the Row / Column input values to be between 1-10 using `Math.min` and `Math.max` and stored them in `useState` variables. 

For testing, I used `render`, `screen`, and `fireEvent` from React Testing Library to test the functionality of the Sidebar toggle button, row and column inputs, as well as the role and label fields. 

I then further styled the app for a clean modern UX.

If I were to tackle a project of similar size then it would take me less than half the time. 

### What am I proud of?

I believe I have done a good job in my presentation, in terms of clear code and commits. I have not tidied/rebased my commit messages so you can get a good idea of my progress and thoughts throughout development.

I am pleased with the responsive and intuitive app which works nicely at different resolutions.

## What could I have done better?

I would have liked to have done TDD. TDD does take a little longer but I believe it results in a more robust product. 

Other than TDD, there are some obvious features missing from the project. In anticipation of pulling in data from Motilent's medical image analysis such as GIQuant, I think a loading animation would have been good for times when Motilent's server might be slow. I would have also liked to add a hover state to the `Viewport Grid` component so that when a user hovers over a grid item it enlarges, as well as a way to filter the viewport grid items by the type of data being presented. 

I think it's good to have deployed the app so it can be easily tested on multiple devices. 

### Development tools

Development was on a Mac running M1. Used Git CLI for commit messages. Visual Studio Code was used for editing source.