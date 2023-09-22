/*
    L     I  BBB    RRRR   EEEE  RRRR   I  N   N   GGGG
    L     I  B  B   R   R  E     R   R  I  NN  N  G
    L     I  BBBB   RRRR   EEE   RRRR   I  N N N  G  GG
    L     I  B   B  R   R  E     R   R  I  N  NN  G    G
    LLLLL I  BBBB   R   R  EEEE  R   R  I  N   N   GGGG 

    LIBRERING is a simple javascript webring script.
    It should be compatible with HTML and XHTML and supports rudimentary configuration options.
    
    Copyright 2023: Lian B. of Libre.Town
    
    This program is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.
    You should have received a copy of the GNU Lesser General Public License along with this program. If not, see <https://www.gnu.org/licenses/>. 
*/

// ·······································································
// : ADMINISTRATOR SECTION :: This section contains configuration options :
// ·······································································

// List of all members in the webring. Add onto this manually whenever you want to add someone new to the ring.
// Please take time to go through here and use the search-and-replace feature of your favorite text editor to change all instances of WEBRINGNAME to a lower-case or camel-case version of your webring name, as well as change the configuration to your liking.
var WEBRINGNAME_members = [
    'https://some.site',
    'https://someother.site',
    'https://somethird.site'
]
// Various config options that should be self-documenting.
// Again, if you're hosting this Librering, please change all the instances of WEBRINGNAME to your particular webring name in lower case, and insert valid image URLs for the badges and navigation.
var WEBRINGNAME_ringurl = "https://thewebringitself.site/"; // The URL of the webring itself, for contact and information purposes.
var WEBRINGNAME_badgeurl = "https://thewebringitself.site/badge.png"; // The URL of the main badge of the webring; 88x31 recommended, but any size goes.
var WEBRINGNAME_prevurl = "https://thewebringitself.site/prev.png"; // The URL of the PREVIOUS badge of the webring; in the original design, a quarter of the main badge.
var WEBRINGNAME_nexturl = "https://thewebringitself.site/next.png"; // The URL of the NEXT badge of the webring; in the original design, a quarter of the main badge.
var WEBRINGNAME_randomurl = "https://thewebringitself.site/random.png"; // The URL of the RANDOM badge of the webring; in the original design, a quarter of the main badge.
var WEBRINGNAME_abouturl = "https://thewebringitself.site/about.png"; // The URL of the ABOUT LIBRERING badge of the webring; in the original design, a quarter of the main badge.

// ····························································································································
// : DISPLAY SECTION :: This defines whatever happens on a member's individual site: most notably, inserting a little display. :
// ····························································································································

// Before you can use this, please replace all instances of WEBRINGNAME with your webring name in lower case.
// This will allow you to have multiple webrings on the same site without them conflicting with each other. 
// Please also carefully read through these options to see what you can (and have to) change; the design, the layout and the links.
// For more information and a step-by-step tutorial, see: https://libre.town/creative/development/librering.xhtml

// ... Let's begin.

// For displaying messages of all kinds, as well as the working webring display, we want to keep our little HTML element in mind.
// Remember to insert your webring's name here, just like everywhere, if you host this webring.
var displayElement = document.getElementById("WEBRINGNAME"); 

// First of all, we want to check whether we are even a member of this particular webring, and if so, at which position.
var currentLocation = window.location.href;
var siteIndex = WEBRINGNAME_members.indexOf(currentLocation);

// If our current location is NOT in the webring, display an error message. The rest of the code only runs if the site has been found in the webring.
if (siteIndex == -1) {
    displayElement.innerHTML =
    "<p>I am sorry, but the WEBRINGNAME display has failed to find you in the member list.<br />Please contact the webring administrator for support if you are the webmaster of this site and believe this to be in error.</p>";
}

// If our current location IS in the webring, this is where it continues.
else {
    // This is a readable (but technologically not very sound) way to loop around when you are either the first or last member of the webring.
    var beforeID;
    var afterID;
    if (siteIndex == 0) { beforeID = WEBRINGNAME_members.length - 1; }
    else { beforeID = siteIndex - 1; }
    if (siteIndex == WEBRINGNAME_members.length - 1) { afterID = 0; }
    else { afterID = siteIndex + 1; }
    
    // This chooses a random website from a copy of the member list.
    var randomID;
    randomID = Math.floor(Math.random() * WEBRINGNAME_members.length);

    // Now it is time to get to the meaty stuff. This will replace our little display container with the actual display content: a general badge, next/previous buttons, and a webring info and random link.
    // Remove, swap around or change these components as you see fit.
    displayElement.innerHTML =
    "<a href='" + WEBRINGNAME_ringurl + "'><img alt='Badge: WEBRINGNAME webring' src='" + WEBRINGNAME_badgeurl + "' /></a><br />" +
    "<a href='" + WEBRINGNAME_members[beforeID] + "'><img alt='Previous' src='" + WEBRINGNAME_prevurl + "' /></a>" +
    "<a href='" + WEBRINGNAME_members[randomID] + "'><img alt='Random' src='" + WEBRINGNAME_randomurl + "' /></a>" +
    "<a href='https://libre.town/creative/development/librering.xhtml'><img alt='About LibreRing' src='" + WEBRINGNAME_abouturl + "' /></a>" + 
    "<a href='" + WEBRINGNAME_members[afterID] + "'><img alt='Next' src='" + WEBRINGNAME_nexturl + "' /></a>";
}

// If you want to choose a text-based display instead without any images, remove or comment up the entire else block above and instead uncomment this one.
/*
else {
    // This is a readable (but technologically not very sound) way to loop around when you are either the first or last member of the webring.
    var beforeID;
    var afterID;
    if (siteIndex == 0) { beforeID = WEBRINGNAME_members.length - 1; }
    else { beforeID = siteIndex - 1; }
    if (siteIndex == WEBRINGNAME_members.length - 1) { afterID = 0; }
    else { afterID = siteIndex + 1; }
    
    // This chooses a random website from a copy of the member list.
    var randomID;
    randomID = Math.floor(Math.random() * WEBRINGNAME_members.length);

    // Now it is time to get to the meaty stuff. This will replace our little display container with the actual display content: a general badge, next/previous buttons, and a webring info and random link.
    // Remove, swap around or change these components as you see fit.
    displayElement.innerHTML =
    "<p><a href='" + WEBRINGNAME_ringurl + "'>This site is part of the WEBRINGNAME webring.</a></br>" +
    "<a href='" + WEBRINGNAME_members[beforeID] + "'>Previous |</a>" +
    " <a href='" + WEBRINGNAME_members[randomID] + "'>Random |</a>" +
    " <a href='https://libre.town/creative/development/librering.xhtml'>About LibreRing |</a>" + 
    " <a href='" + WEBRINGNAME_members[afterID] + "'>Next</a></p>";
}
*/