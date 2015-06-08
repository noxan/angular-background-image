# angular-background-image

Background image directive for angular.

## Get started

Install `angular-background-image`:

    $ npm install angular-background-image

Include the script file:

    require("angular-background-image");

Add `backgroundImage` module to your angular app:

    var app = angular("myapp", ["backgroundImage"]);

Use directive:

    <div background-image="{{model.imageURL}}"></div>


## Development

### Style guide check

Use `JSCS` to enforce code style guide, http://jscs.info

    jscs src/index.js

## Credits

Build so often, too often, now as module.

First implementation has been based on http://stackoverflow.com/a/15537359, thanks!
