#Elmer

Elmer is the ui components library used to power the Epoxy project and now it is available to all of Gloo as a bower package and separate repository for collaboration and use in any web project.

### Documentation


<http://166.78.17.181/styleguide>

---
### Dependencies

The elmer ui library depends on some additional libraries that will need to be added to your primary stylesheet **before** you import it.

	// normalize
	@import "PATH_YOU_DEFINE/_normalize.scss/normalize";

	// bourbon ~ css3 mixins <http://bourbon.io>
	@import "PATH_YOU_DEFINE/bourbon/dist/bourbon";

	// neat ~ fluid semantic grid <http://neat.bourbon.io>
	@import "PATH_YOU_DEFINE/neat/app/assets/stylesheets/neat";

	// font awesome <http://fontawesome.io>
	$fa-font-path: "../PATH_YOU_DEFINE/components-font-awesome/fonts"; // set it to use bowers version
	@import "PATH_YOU_DEFINE/components-font-awesome/scss/font-awesome";


### Installation

Bower :

First install bower via <http://bower.io>


** then in your project run :**

	bower install git@github.com:TangoGroup/elmer.git --save

** Then add the following line to your primary scss file after the above dependencies **

	@import "packages/elmer/elmer";

*Optionally you can create a `.bowerrc` file at the root of your project to set a custom install location*

	{
  		"directory": "public/assets/scss/packages"
	}

---

Elmer is a living framework that is still in active development if you would like to provide feedback or have specific questions please feel free to contact the web team.

[@hrallo](mailto:hrallo@tangogroup.com)

[@rsuh](mailto:rsuh@tangogroup.com)

[@jray](mailto:jray@tangogroup.com)

[@cashworth](mailto:cashworth@tangogroup.com)


** For info on contributing [read here](CONTRIBUTING.md) **
