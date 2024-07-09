require([
    'jquery',
    'matchMedia',
    'mage/gallery/gallery'
], function ($, mediaCheck, gallery) {
   'use strict';
    mediaCheck({
        media: '(min-width: 768px)',
        // Switch to Desktop Version
        entry: function () {
	        console.log('Desktop');			
        },

        // Switch to Mobile Version
        exit: function () {
	        console.log('Mobile');	
        }	
    });
});