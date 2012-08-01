jQuery Input Placeholder Plugin
===============================

This plugin lets you specify a placeholder text for input fields. Placeholder text is cleared as soon as the input field gets focus (unless "mimicHTML5Placeholder" is set to true) and also when user submits parent form of the input (unless "clearPlaceholderOnFormSubmit" setting is false.)

Please note that by default HTML5 placeholder feature is used if it's supported by users browser. This feature can be disabled by setting "useHTML5PlaceholderByDefault" to false.

Input Placeholder Plugin can also mimic the HTML5 placeholder feature, though this part is partly experimental and disabled by default.

## How to use?

You just need to place jquery.inputplaceholder.js in a place where you can link to ..

    <script type="text/javascript" src="/path/to/jquery.inputplaceholder.js"></script>
    
.. and call it for any inputfields you want:

    <script type="text/javascript">
    $(function() {
        $('input#field-id').inputPlaceholder({ placeholder: 'My placeholder!' });
    });
    </script>

### Basic example

The only thing you need to set is the value used as placeholder:

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script type="text/javascript" src="jquery.inputplaceholder.js"></script>
    <form method="get">
        <input type="text" id="search" name="query" />
    </form>
    <script type="text/javascript">
    $(function() {
        $('input#search').inputPlaceholder({ placeholder: 'This is placeholder text' });
    });
    </script>

Please note that you could also set HTML5 placeholder attribute and let Input Placeholder Plugin mimic that feature for old browser with no support for it:

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script type="text/javascript" src="jquery.inputplaceholder.js"></script>
    <form method="get">
        <input type="text" id="search" name="query" placeholder="This is placeholder text" />
    </form>
    <script type="text/javascript">
    $(function() {
        $('input#search').inputPlaceholder({ mimicHTML5Placeholder: true });
    });
    </script>

### More advanced example

Sometimes you may want to customize how Input Placeholder Plugin works a bit more:

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script type="text/javascript" src="jquery.inputplaceholder.js"></script>
    <form method="get">
        <label>
            <span>Search</span>
            <input type="text" id="search" name="query" />
        </label>
    </form>
    <script type="text/javascript">
    $(function() {
        $('input#search')
            .inputPlaceholder({
                placeholder: $('input#search').parent('label').find('span').text(),
                inactiveCSS: {
                    color: '#999',
                    fontStyle: 'italic'
                },
                activeCSS: {
                    color: '#333',
                    fontStyle: 'normal'
                },
                useHTML5PlaceholderByDefault: false
            })
            .parent('label')
                .find('span')
                    .remove();
    });
    </script>
  
## Options

All of these options are optional (no pun intended), although you do need to set either placeholder option or HTML5 placeholder attribute in order for this script to actually do something.

*   **placeholder**
    
    *   Text (string) to be used as placeholder.
    *   default: null

*   **activeCSS**
    
    *   Styles for active inputfield (focus) in JSON format (default jQuery .css() behaviour.)
    *   default: { fontStyle: 'normal', color: '#000' }

*   **inactiveCSS**
    
    *   Styles for inactive inputfield (blur) in JSON format (default jQuery .css() behaviour.)
    *   default: { fontStyle: 'italic', color: '#727272' }

*   **mimicHTML5Placeholder**
    
    *   If set to true, Input Placeholder Plugin will attempt to mimic default HTML5 placeholder feature.
    *   default: false

*   **useHTML5PlaceholderByDefault**
    
    *   If set to true, HTML5 placeholder feature will be used instead of custom script if it's supported.
    *   default: true

*   **clearPlaceholderOnFormSubmit**
    
    *   If set to true, placeholder value will be cleared when parent form of the input is submitted. Only applies to situations where HTML5 placeholder is a) not supported or b) disabled by setting useHTML5PlaceholderByDefault to false.
    *   default: true

## License

This program is free software. It comes without any warranty, to the extent permitted by applicable law. You can redistribute it and/or modify it under the terms of the Do What The Fuck You Want To Public License, Version 2, as published by Sam Hocevar:

                DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                        Version 2, December 2004
    
     Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>
    
     Everyone is permitted to copy and distribute verbatim or modified
     copies of this license document, and changing it is allowed as long
     as the name is changed.
    
                DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
       TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
    
      0. You just DO WHAT THE FUCK YOU WANT TO.