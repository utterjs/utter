# strokes.js (formery input.js)

This is where all of your input gets handled. That's a big, important job in a messaging client, so we're gonna document things.

## Methods

`init(opt)` :: takes `opt`, an object which allows you to override the default methods [display,send,currentChannel(object)]. Initializes the program to read from stdin.

`changeChannel(channelObj)` :: used to switch between channels.

`currentBufferText()` :: returns the contents of the current channel's input buffer as a string.

`setPrefix()` :: change the current prefix character

`core.parseCommand()` :: used to parse messages passed after an unescaped prefix character (default '/').

`onReturn()`

`onBackspace()`

`pushInput()`

`listen()`

## Internal variables

`core` :: an object which contains the default methods.

`prefixChar` :: the prefix character (or sequence) used to distinguish commands from messages.

## Keybindings

Keybindings can be reconfigured permanently by editing your conf, or at runtime using various commands. As detailed below, the `/map` command allows you to remap keybindings as you would with vim.

## Plugin Integration

Utter exposes much of its core functionality to plugin authors, so that you can have the irc/xmpp client you've always wanted. You have the option of defining new 'slash commands', like those below.

You modify the prefix character from '/' to ':', if you want.

You can modify what happens when you hit enter, so that messages are only sent on 'shift+return'.

## Commands

`/clear`

`/close`

`/connect`

`/deop`

`/devoice`

`/disconnect`

`/invite`

`/join`

`/kick`

`/leave`

`/map` :: add/alter a keybinding.

`/me`

`/mode`

`/motd` :: print out the message of the day.

`/msg`

`/nick`

`/notice`

`/op`

`/part`

`/query`

`/quit`

`/quote`

`/raw`

`/say`

`/send`

`/server`

`/source` :: reload a configuration file. Can be a different source, or your original source after modification.

`/topic`

`/voice`

`/whois`
