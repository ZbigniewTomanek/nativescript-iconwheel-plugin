# Overview

This is a custom native android plugin which adds widget with hardcoded weather icons.

I've been using these tutorials:

https://docs.nativescript.org/plugins/building-plugins
https://docs.nativescript.org/plugins/ui-plugin-custom#building-ui-plugins-using-custom-components

Plugin itself is built on the top of this scaffold:
https://github.com/NativeScript/nativescript-plugin-seed

## Installation

To install plugin download publish/package/nativescript-wheel-view-1.0.0.tgz, copy it to your app and run
```
tns plugin add nativescript-version-number-1.0.0.tgz
```

## Run demo

To see a workind demo run from src folder `npm run demo.android`

## Example usage

Demo's source code is in the demo dictionary. Widget is declared in home-page.xml and its listener is placed home-view-model.ts.

## Android plugin source code

To edit native part of plugin you should open PluginJava project with android studio, edit it and then export fresh .aar archive.
Then this archive should be pasted to src/platforms/android/.

WheelView source code was borrowed from here:
https://github.com/wangjiegulu/WheelView
    
## License

Apache License Version 2.0, January 2004
