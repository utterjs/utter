# What window.js provides

Window.js exposes the UI elements and their basic handlers which are provided by **blessed**.

Thus far, it has included various hard-coded values and initializing functions which should be abstracted away, or handled elsewhere.

When you `require("./ui/window.js")`, you get an object containing the following:

## window data

### `window.options`

So far this only contains the attribute `debug`, which defaults to `true`. Using this, authors can dynamically modify such variables from other scripts.

### `window.dim`

The object containing the dimensions of the window (`screen.width` and `screen.height`). Formerly known as `chat`.

### `window.users`

Formerly known as `window.users`, which was used to initialize which users were in the channel. This variable name was accidentally clobbered by the UI element `users`. 

This attribute is an array which enables authors to sort, or otherwise modify the list however they see fit.

### `window.chans`

Another array, like `window.users`, exposing to authors the ability to read, rearrange, or modify the array of channels.

## window UI objects

These object's names will be FULLY CAPITALIZED so as to easily disambiguate them from window data elements.

### `window.USERLIST`

The rightmost panel, indicating which users are in the channel.

### `window.CHANINFO`

The panel immediately above user input, which display various stats about the current channel.

### `window.INPUT`

The bottom panel, which provides feedback to the user about what they have typed.

### `window.TOPIC`

The uppermost panel, which indicatese the current channel's topic line.

### `window.CHANLINE`

### `window.USERSLINE`

### `window.BODY`

The main window, where the current channel's scrollback is displayed.

## window functions and methods

### `window.render`

This is the function that draws the screen. By exposing it to plugin authors, we give them the capacity to trigger this action in their scripts. It's up to them to ensure that their use of it is not excessive.

### `window.onEscape`

This method will most likely be deprecated as we transition to using the `keypress` library for input. For now, it is the function called when you hit the `escape` key.

### `window.onKeypress`

This method is also likely to be deprecated very soon. It handles keystrokes and triggers screen renders.

### `window.debug`

This function can be replaced as authors see fit (though they should give a clear warning that it will do so in their documentation).

At present, it is only called on screen resizes if `window.options.debug` is set to true (which it currently defaults to).


