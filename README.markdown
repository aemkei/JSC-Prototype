JSC Prototype
=============

A quick port of [Prototype](http://www.prototypejs.org/) without any DOM specific declarations.

This will let you execute Prototype based JavaScript code from your MAC OS terminal.

### Setup

    # clone this project
    git clone git://github.com/aemkei/JSC-Prototype.git
    cd JSC-Prototype/
    # set shortcut to JavaScriptCore framework
    sudo ln /System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Resources/jsc /bin/jsc
    # run sample application
    jsc sample.js -- one two three

This projekt was inspired by [phpied](http://www.phpied.com/javascript-shell-scripting/).