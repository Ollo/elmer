#Elmer

Elmer is the ui components library used to power the Epoxy project and now it is available to all of Gloo as a bower package and separate repository for collaboration and use in any web project.

---
## Dependencies

The elmer ui library depends on some additional libraries for convenience and ease of use.

- normalize <http://necolas.github.io/normalize.css/>

- bourbon ~ css3 mixins <http://bourbon.io>

- neat ~ fluid semantic grid <http://neat.bourbon.io>

- font awesome <http://fontawesome.io>

---
## Installation

Bower :

First install bower via <http://bower.io>

**then in your project run :**

    bower install git@github.com:TangoGroup/elmer.git --save

**Then import elmer with following line into your primary scss file after the above dependencies**

    @import "<YOUR_BOWER_LOCATION>/elmer/scss/elmer";

** due to the font awesome dependency the below variable must be declared locally **

    $fa-font-path: "<YOUR_BOWER_LOCATION>/elmer/scss/packages/components-font-awesome/fonts";

---

## Development

After cloning this repo run :

    npm install

Then to view the styleguide run :

    grunt

navigate in a browser to : `http://0.0.0.0:9000/`

Elmer is a living framework that is still in active development if you would like to provide feedback or have specific questions please feel free to contact the web team.

[@hrallo](mailto:hrallo@tangogroup.com)

[@rsuh](mailto:rsuh@tangogroup.com)

[@jray](mailto:jray@tangogroup.com)

[@cashworth](mailto:cashworth@tangogroup.com)

---

## Standards

When building elmer, we strive to keep our css DRY.

** Nesting **

Though nesting is necessary in many cases, keeping it to a minimum will keep us from having to repeat code. If something can be stripped out into it’s own class for universal purposes, do so. By nesting a minimum amount, our media queries will also be cleaner.

** Extending **

 Using sass's @extend functionality is a great way to achieve DRY code. Write code once, and let sass take care of the compiling. Only in cases where you plan to use the class in the html should you choose to extend a class over a placeholder. In many cases, a placeholder will suffice.

"Keep stylesheets small, and many good things will come to you in life." - Ancient proverb

Please see http://thesassway.com/intermediate/understanding-placeholder-selectors for more information on this.

** Class Names **

Create class names by 'behavior' and not 'look'. For example, instead of calling a button .blue_button, you would call it .primary_button. The color could change at any point, but the fact that it is the main button of the site will not.

Use underscores for all class names, example:

.widget_front

** IDs **

Our philosophy is that an ID should only be used to:

1 Designating a page

2 Declaring the scope of an element for styling purposes

3 Hooking into javascript

There will be no ID's in elmer. Each style created is reusable.

---