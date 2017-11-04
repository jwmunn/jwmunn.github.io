---
layout: post
title:  "Creating and Launching Files in VS Code Terminal"
date:   2017-11-4 12:00:00
permalink: blog/vscode-terminal/
tags: [web development, React, terminal, workflow]
---

The more comfortable I get with the terminal the more I prefer creating files and folders using `touch` and `mkdir` respectively. I wanted to find a way to quickly create and open files from the terminal in the same text editor window I’m already using.

## Terminal Commands

First we’ll review a few basic terminal commands.
* `mkdir mydirectory` will create a folder named `mydirectory`.
* `touch mydirectory/filename.js` will create the file `filename.js` in the `mydirectory` folder
* Using `&&` will allow you to chain 2 terminal commands together.
* Example: `cd mydirectory && ls` will change directories into the `my directory` folder and then immediately list all files in that directory.
* Pressing the up arrow key will bring up your last command in the terminal. Keep pressing up or down to go through your recent commands.

## Setup New Terminal command

[Visual Studio Code](https://code.visualstudio.com/) is my text editor of choice. I love the default terminal and git integration. Plus it’s free, open source, has a great UI and useful package extensions.

To launch files from the terminal you need to run a command first. Here are the instructions from the [VS Code site](https://code.visualstudio.com/docs/setup/mac):

* Launch VS Code.
* Open the Command Palette (⇧⌘P) and type 'shell command' to find the Shell Command: Install 'code' command in PATH command.

![Install code command](/images/vscode-terminal/vscode-screenshot.png)

## In practice

The main way I use these terminal commands is during the initial phase of a project when I’m building out the app structure. This comes in handy for something like React where you are building out components in subfolders. So my workflow would be something like this, I’ve created the app and am in the app directory:

``` Bash
$ mkdir src/components
$ touch src/components/Child1.js && code -r src/components/Child1.js
```

* It creates then automatically brings up the new file in my window to edit.
* Press up on the keyboard to bring up the last command in terminal, then just edit the file name for the next Component.

``` Bash
$ touch src/components/Child2.js && code -r src/components/Child2.js
```

It’s a simple tip that has greatly sped up my workflow setting up projects.
