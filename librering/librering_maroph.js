/*
My LibreRing based webring JavaScript file.
Created for HTML5 pages.
My script is based on the template file https://libre.town/creative/development/librering-template.js

LIBRERING is a simple javascript webring script.
Copyright 2023: Lian B. of Libre.Town
https://libre.town/creative/development/librering.xhtml
    
- This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU Lesser General Public License as published
  by the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
- This program is distributed in the hope that it will be useful, but
  WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
  or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License
  for more details.
- You should have received a copy of the GNU Lesser General Public License along
  with this program. If not, see https://www.gnu.org/licenses/lgpl-3.0
  See also https://choosealicense.com/licenses/lgpl-3.0/
*/
const librering_url = "https://libre.town/creative/development/librering.xhtml";
const librering_maroph_baseurl  = "https://maroph.github.io/mvhs_html_css/librering/";
//const librering_maroph_baseurl  = "https://maroph.github.io/";

/* 22-SEP-2023, 15:48 */
const librering_maroph_members = [
    'https://maroph.github.io/mvhs_html_css/',
    'http://localhost/projects/mvhs_html_css/'
]

const librering_maroph_ringurl  = librering_maroph_baseurl + "index.html";
const librering_maroph_badgeurl = librering_maroph_baseurl + "librering_badge.png";
const librering_maroph_prevurl  = librering_maroph_baseurl + "librering_prev.png";
const librering_maroph_nexturl  = librering_maroph_baseurl + "librering_next.png";
const librering_maroph_randomurl= librering_maroph_baseurl + "librering_random.png";
const librering_maroph_abouturl = librering_maroph_baseurl + "librering_about.png";


const librering_maroph_displayElement = document.getElementById("librering_maroph");
if (librering_maroph_displayElement) {
    const librering_maroph_currentLocation = window.location.href;
    let librering_maroph_siteIndex = -1;
    if (librering_maroph_currentLocation !== '') {
        for (let i = 0; i < librering_maroph_members.length; i++) {
            if (librering_maroph_currentLocation.startsWith(librering_maroph_members[i])) {
                librering_maroph_siteIndex = i;
                break;
            }
        }
    }

    if (librering_maroph_siteIndex === -1) {
        librering_maroph_displayElement.innerHTML =
            '<p>The librering_maroph lookup has failed to find you in the member list.<br>' +
            'Please contact the webring administrator for support if you are the webmaster of this ' +
            'site and believe this is an error.</p>';
    } else {
        let librering_maroph_beforeID;
        let librering_maroph_afterID;
        if (librering_maroph_siteIndex === 0) {
            librering_maroph_beforeID = librering_maroph_members.length - 1;
        } else {
            librering_maroph_beforeID = librering_maroph_siteIndex - 1;
        }
        if (librering_maroph_siteIndex === librering_maroph_members.length - 1) {
            librering_maroph_afterID = 0;
        } else {
            librering_maroph_afterID = librering_maroph_siteIndex + 1;
        }

        let librering_maroph_randomID;
        librering_maroph_randomID = Math.floor(Math.random() * librering_maroph_members.length);

        librering_maroph_displayElement.innerHTML =
            "<a href='" + librering_maroph_ringurl + "'><img alt='Badge: librering_maroph webring' title='Badge: librering_maroph webring' src='" + librering_maroph_badgeurl + "'></a><br>" +
            "<a href='" + librering_maroph_members[librering_maroph_beforeID] + "'><img alt='Previous' title='Previous' src='" + librering_maroph_prevurl + "'></a>" +
            "<a href='" + librering_maroph_members[librering_maroph_randomID] + "'><img alt='Random' title='Random' src='" + librering_maroph_randomurl + "'></a>" +
            "<a href='" + librering_url + "'><img alt='About LibreRing' title='About LibreRing' src='" + librering_maroph_abouturl + "'></a>" +
            "<a href='" + librering_maroph_members[librering_maroph_afterID] + "'><img alt='Next' title='Next' src='" + librering_maroph_nexturl + "'></a>";
    }
}
