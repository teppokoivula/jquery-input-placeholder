/*
 * Input Placeholder Plugin for jQuery by Teppo Koivula
 *
 * This plugin lets you specify a placeholder text for input fields.
 * Placeholder text is cleared as soon as the input field gets focus
 * and (unless "clearPlaceholderOnFormSubmit" setting is false) also
 * when user submits parent form of the input (if one exists.)
 *
 * Please note that by default HTML5 placeholder feature is used if
 * it's supported by users browser. This feature can be disabled by
 * setting "useHTML5PlaceholderByDefault" to false.
 *
 * Input Placeholder Plugin can also mimic the HTML5 placeholder
 * feature, though this part is partly experimental and disabled by
 * default.
 *
 * -----------------------------------------------------------------
 * This program is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the Do What The Fuck You Want
 * To Public License, Version 2, as published by Sam Hocevar. See
 * http://sam.zoy.org/wtfpl/COPYING for more details.
 * -----------------------------------------------------------------
 */
(function($){

	 // Search Input Placeholder Plugin
	 $.fn.inputPlaceholder = function(options) {

		 // Defaults (merged with any options that were provided)
		 var settings = $.extend({
			 placeholder: null,
			 activeCSS: {
				 fontStyle: 'normal',
				 color: '#000'
			 },
			 inactiveCSS: {
				 fontStyle: 'italic',
				 color: '#727272'
			 },
			 mimicHTML5Placeholder: false,
			 useHTML5PlaceholderByDefault: true,
			 clearPlaceholderOnFormSubmit: true
		 }, options);

		 // Function for checking if HTML5 placeholder is supported
		 function HTML5PlaceholderSupport() {
			 var input = document.createElement("input");
			 return ('placeholder' in input);
		 }

		 // Function for adding custom CSS style to HTML5 placeholder
		 function stylizeHTML5Placeholder(style) {
			 // TODO!
		 }

		 // Actual plugin code (return is required to maintain jQuery chaining)
		 return this.each(function() {
			 var $input = $(this);
			 if (settings.useHTML5PlaceholderByDefault
			     && HTML5PlaceholderSupport()
			     && $input.attr('placeholder')) {
				 // HTML5 placeholder is supported and placeholder attribute
				 // found, do nothing
			 } else if (settings.useHTML5PlaceholderByDefault
			            && HTML5PlaceholderSupport()
			            && !$input.attr('placeholder')
			            && settings.placeholder) {
				 // HTML5 placeholder is supported and placeholder is given but
				 // placeholder attribute isn't set; we'll just set it now
				 $input.attr('placeholder', settings.placeholder);
			 } else if (settings.placeholder || $input.attr('placeholder')) {
				 // HTML5 placeholder is not supported (or user has decided not
				 // to use it) and either placeholder attribute or placeholder
				 // setting is found; use custom placeholder functionality
				 if (!settings.placeholder) {
					 // Clear placeholder attribute to avoid any confusion in
					 // case that our HTML5 placeholder support check for some
					 // strange reason didn't work properly..
					 settings.placeholder = $input.attr('placeholder');
					 $input.removeAttr('placeholder');
				 }
				 if (settings.mimicHTML5Placeholder) {
					 // Attach to keyup / keydown events to mimic HTML5 placeholder
					 // functionality
					 $input
						 .keyup(function() {
							 if ($input.val() == '') {
								 $input
									 .val(settings.placeholder)
									 .css(settings.inactiveCSS);
							 }
						 })
						 .keydown(function() {
							 if ($input.val() == settings.placeholder) {
								 $input
									 .val('')
									 .css(settings.activeCSS);
							 }
						 })
						 .keyup();
				 } else {
					 // Attach to focus / blur events to create our own custom
					 // placeholder functionality
					 $input
						 .focus(function() {
							 $input.css(settings.activeCSS);
							 if ($input.val() == settings.placeholder) $input.val('');
						 })
						 .blur(function() {
							 if (!$input.val()) $input.val(settings.placeholder);
							 if ($input.val() == settings.placeholder) $input.css(settings.inactiveCSS);
						 })
						 .blur();
				 }
				 if ((!settings.useHTML5PlaceholderByDefault || !HTML5PlaceholderSupport())
					 && settings.clearPlaceholderOnFormSubmit
					 && $input.parents('form:first')) {
					 // Prevent placeholder value from being sent with form
					 // containing this input (parent form). Note: we're using
					 // parents('form:first') instead of closest('form') here
					 // because closest() has only been around since jQuery 1.3.
					 $input.parent('form').submit(function() {
						 if ($input.val() == settings.placeholder) $input.val('');
					 });
				 }
			 }
		 });

	 };

})(jQuery);