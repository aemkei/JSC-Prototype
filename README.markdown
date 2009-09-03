JSC Prototype
=============

A quick port of [Prototype](http://www.prototypejs.org/) without any DOM specific declarations.

This will let you execute Prototype based JavaScript code from your MAC OS terminal.

### Setup

First, you need to create a shortcut to JavaScriptCore framework:

    sudo ln /System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Resources/jsc /bin/jsc

Then download and exceute the project:

    # clone this project
    git clone git://github.com/aemkei/JSC-Prototype.git
    cd JSC-Prototype/
    # run sample application
    jsc sample.js -- one two three

This projekt was inspired by [phpied](http://www.phpied.com/javascript-shell-scripting/).