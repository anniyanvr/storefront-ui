"use strict";

const fs = require("fs");
const path = require("path");

const isDependency = __dirname.includes("node_modules");
const stylesPath = path.resolve(__dirname, "../../../sfui.scss");

function getStylesContent() {
  return `/* Here you can override global SCSS variables */

// global override excluding scoped components
// $button-desktop-padding: 5px !default;
// global override including scoped componentss
// $button-desktop-padding: 50px;`;
}
function createRootSfuiScss() {
  if (isDependency && !fs.existsSync(stylesPath)) {
    fs.appendFile("../../../sfui.scss", getStylesContent(), err => {
      if (err) throw err;
    });
  }
}

module.exports = {
  createRootSfuiScss
};
