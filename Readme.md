# React Quickstart Module

This modules is intended to make integrating React into your Drupal 8 project as quick and easy as possible.  
Built on the following incredible technologies:

* React
* Webpack
* Babel

## Getting started

1. Clone this repo into your `modules` or `modules/custom` folder
2. cd `react_quickstart/static`
3. To install the React and the other JavaScript dependencies, run `npm install`
4. To start the build engine: `npm run dev`, which will watch the source files and re-build after any change
5. For production builds, run `npm run build`

## Included Examples

This repo includes an React-ified block - a Clock  app which will render the time on an analog clock using React.


## Directory Structure


```javascript

--src/
  |
  --Plugin/
    |
    --Block/
      |
      --ClockFaceBlock.php //Example block for the clock face demo

--static/ //folder containing all of our static assets
  |
  --common/  //Folder for custom utilities or components shared by multiple "apps".
  |
  --dist/ //This is where the compiled bundles will be placed
  |
  --src/ //Source code for our "apps"
  |  |
  |  --clock/
  |    |
  |    --clock.jsx //Clock face example React component
  |    
  --.babelrc //Config information for babel
  |
  --.gitignore
  |
  --package.json
  |
  --webpack.config.js //Config information for the webpack build system
  
--LICENSE

--react_quickstart.info.yml //module definition

--react_quickstart.libraries.yml //defines the react library as well as our React "apps"
   
      
```

## Shameless self-promotion

If you're interested in learning more about webpack, babel, or react - check our blog series on the right way to set up React projects here: https://www.bowst.com/article/bowst-about-react-part-1



