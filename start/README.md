# Start

This is where utter starts to come to life. We include all of the basics to get the client up and running, but sometimes people like to include their own scripts. We're okay with that!

Upon running utter for the first time it'll create the folders and files that it needs to run. 

```tree
~/.utter
  │
  ├── plugins
  │   └── default
  ├── scripts
  │   └── start.js
  └── utter.json
```

The file `scripts/start.js` is an empty file with some comments at the top. You can change that though! If you want to do some alterations at the startup of utter, this is where they happen.

## Plugins

Plugins placed in `~/.utter/plugins/default` will be loaded at startup, and plugins placed at `~/.utter/plugins` can be loaded dynamically. Plugin structure documentation will come along when it is developed some more.
