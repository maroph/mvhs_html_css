count = 0;
for (const char of window.location.pathname) {
    if (char === '/') {
        count++;
    }
}
if (window.location.pathname.startsWith('/projects/')) {
    count -= 3;
} else if (window.location.pathname.startsWith('/mvhs_html_css/')) {
    count -= 2;
}
else {
    count -= 1;
}
if (count < 0) {
    count = 0;
}
let dirprefix = '.';
if (count > 0) {
    dirprefix = '..';
    for (let i = 1; i < count; i++) {
        dirprefix = dirprefix + '/..';
    }
}

/*
document.writeln('<pre>');
document.writeln('window.location.pathname : ' + window.location.pathname);
document.writeln('dirprefix                : ' + dirprefix);
document.writeln('</pre>');
*/

const page_footer = document.querySelector("#page_footer");
if (page_footer === null) {
    document.writeln('<footer>');
    document.write('<a href="https://validator.w3.org/nu/?doc=');
    document.write(window.location);
    document.writeln('" target="_blank"><img src="' + dirprefix + '/assets/images/valid-html5-blue.png" alt="valid HTML5 code" title="valid HTML5 code"></a>&nbsp;&nbsp;');
    document.write('<a href="https://jigsaw.w3.org/css-validator/validator?uri=');
    document.write(window.location);
    document.writeln('" target="_blank"><img src="' + dirprefix + '/assets/images/valid-css-blue.png" alt="valid CSS code" title="valid CSS code"></a><br>');
    document.writeln('<a rel="license nofollow" href="https://creativecommons.org/licenses/by/4.0/" target="_blank"><img src="' + dirprefix + '/assets/images/cc-by-88x31.png" alt="CC-BY 4.0" title="CC-BY 4.0"></a>&nbsp;&nbsp;');
    document.write('(c) 2023-2026, <a href="https://maroph.github.io/" target="_blank" rel="noreferrer">Manfred Rosenboom</a>, Mastodon: <a href="https://mastodon.social/@maroph" rel="nofollow" target="_blank">@maroph@mastodon.social</a>');
    document.writeln('</footer>');
} else {
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/write
    let page_footer_policy = null;
    if (window.trustedTypes && trustedTypes.createPolicy) {
        page_footer_policy = trustedTypes.createPolicy("pageFooterPolicy", {
            createHTML(string) {
                return string;
            }
        });
    }

    let html_page_footer = '';
    html_page_footer += '<footer>\n';

    html_page_footer += '<a href="https://validator.w3.org/nu/?doc=';
    html_page_footer += window.location;
    html_page_footer += '" target="_blank"><img src="' + dirprefix + '/assets/images/valid-html5-blue.png" alt="valid HTML5 code" title="valid HTML5 code"></a>&nbsp;&nbsp;\n';

    html_page_footer += '<a href="https://jigsaw.w3.org/css-validator/validator?uri=';
    html_page_footer += window.location;
    html_page_footer += '" target="_blank"><img src="' + dirprefix + '/assets/images/valid-css-blue.png" alt="valid CSS code" title="valid CSS code"></a><br>\n';

    html_page_footer += '<a rel="license nofollow" href="https://creativecommons.org/licenses/by/4.0/" target="_blank"><img src="' + dirprefix + '/assets/images/cc-by-88x31.png" alt="CC-BY 4.0" title="CC-BY 4.0"></a>&nbsp;&nbsp;';
    html_page_footer += '(c) 2023-2026, <a href="https://maroph.github.io/" target="_blank" rel="noreferrer">Manfred Rosenboom</a>, Mastodon: <a href="https://mastodon.social/@maroph" rel="me nofollow" target="_blank">@maroph@mastodon.social</a>';
    html_page_footer += '</footer>\n';

    if (page_footer_policy === null) {
        page_footer.innerHTML = html_page_footer;
    } else {
        page_footer.innerHTML = page_footer_policy.createHTML(html_page_footer);
    }
}
