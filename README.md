!['elmer'](elmer.jpg)
#Elmer

Elmer is the ui components library used to power the Epoxy project and now it is available to all of Gloo as a bower package and separate repository for collaboration and use in any web project.

### Documentation


<http://166.78.17.181/styleguide>

---
### Dependencies

The elmer ui library depends on some additional libraries for convenience and ease of use.

- normalize <http://necolas.github.io/normalize.css/>

- bourbon ~ css3 mixins <http://bourbon.io>

- neat ~ fluid semantic grid <http://neat.bourbon.io>

- font awesome <http://fontawesome.io>

**In order to use the elmer library you first must add the follow to your primary sass file**

    @import "<YOUR_BOWER_LOCATION>/bourbon/dist/bourbon";

    @import "<YOUR_BOWER_LOCATION>/neat/app/assets/stylesheets/neat";

    $fa-font-path: "<YOUR_BOWER_LOCATION>/components-font-awesome/fonts"; // set it to use bowers version

    @import "<YOUR_BOWER_LOCATION>/components-font-awesome/scss/font-awesome";

    @import "<YOUR_BOWER_LOCATION>/_normalize.scss/normalize";



### Installation

Bower :

First install bower via <http://bower.io>

**then in your project run :**

	bower install git@github.com:TangoGroup/elmer.git --save

**Then import elmer with following line into your primary scss file after the above dependencies**

	@import "<YOUR_BOWER_LOCATION>/elmer/elmer";

*Optionally if you already use bower you can create a `.bowerrc` file at the root of your project to map a custom install location*

	{
  		"directory": "public/assets/scss/packages"
	}

---

Elmer is a living framework that is still in active development if you would like to provide feedback or have specific questions please feel free to contact the web team.

[@hrallo](mailto:hrallo@tangogroup.com)

[@rsuh](mailto:rsuh@tangogroup.com)

[@jray](mailto:jray@tangogroup.com)

[@cashworth](mailto:cashworth@tangogroup.com)

