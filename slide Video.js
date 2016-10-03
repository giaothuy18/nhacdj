function removeHtmlTag(a, b) {
    if (a.indexOf("<") != -1) {
        var s = a.split("<");
        for (var i = 0; i < s.length; i++) {
            if (s[i].indexOf(">") != -1) {
                s[i] = s[i].substring(s[i].indexOf(">") + 1, s[i].length)
            }
        }
        a = s.join("")
    }
    b = (b < a.length - 1) ? b : a.length - 2;
    while (a.charAt(b - 1) != ' ' && a.indexOf(' ', b) != -1) b++;
    a = a.substring(0, b - 1);
    return a
}

function showrecentposts99(e) {
    j = (showRandomImg) ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = new Array();
    var f = new Array();
    for (var i = 0; i < numposts; i++) {
        var g = e.feed.entry[i];
        var h = g.title.$t;
        var l;
        var n;
        if (i == e.feed.entry.length) break;
        for (var k = 0; k < g.link.length; k++) {
            if (g.link[k].rel == 'alternate') {
                n = g.link[k].href;
                break
            }
        }
        for (var k = 0; k < g.link.length; k++) {
            if (g.link[k].rel == 'replies' && g.link[k].type == 'text/html') {
                l = g.link[k].title.split(" ")[0];
                break
            }
        }
        if ("content" in g) {
            var o = g.content.$t
        } else if ("summary" in g) {
            var o = g.summary.$t
        } else var o = "";
        s = o;
        a = s.indexOf("<img");
        b = s.indexOf("src=\"", a);
        c = s.indexOf("\"", b + 5);
        d = s.substr(b + 5, c - b - 5);
        if (j > imgr.length - 1) j = 0;
        img[i] = imgr[j];
        if ((a != -1) && (b != -1) && (c != -1) && (d != "")) img[i] = d;
        var p = h.length;
        if (p > sumTitle) {
            f[i] = '<td id="rc-3cotthai1"><center><img alt="' + h + '" src="' + img[i] + '"/><p><a title="' + h + '" href="' + n + '" style="color:' + colortitle + ';">' + removeHtmlTag(h, sumTitle) + ' ...</a></p><center></td>'
        } else {
            f[i] = '<td id="rc-3cotthai1"><center><img alt="' + h + '" src="' + img[i] + '"/><p><a title="' + h + '" href="' + n + '" style="color:' + colortitle + ';">' + h + '</a></p></center></td>'
        }
    }
    var m = numposts / 3;
    document.write("<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" id=\"itechplus-rc-3cotthai1\">");
    for (var j = 0; j < m; j++) {
        if (j % 3 == 0) {
            document.write("<tr id=\"rc-3cotthai1-top\">");
            document.write(f[j * 3]);
            document.write(f[j * 3 + 1]);
            document.write(f[j * 3 + 2]);
            document.write("<tr id=\"rc-3cotthai1-top\">");
            document.write("</tr>")
        } else {
            document.write("<tr id=\"rc-3cotthai1-bottom\">");
            document.write(f[j * 3]);
            document.write(f[j * 3 + 1]);
            document.write(f[j * 3 + 2]);
            document.write("<tr id=\"rc-3cotthai1-bottom\">");
            document.write("</tr>")
        }
    }
    document.write("</table>")
}
document.write("<script src=\"" + home_page + "feeds/posts/default/-/" + label + "?max-results=" + numposts + "&orderby=published&alt=json-in-script&callback=showrecentposts99\"><\/script>");
