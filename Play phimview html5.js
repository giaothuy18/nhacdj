//<![CDATA[
function ancMedia() {
	function g(a) {
		var f = "",
		e, h, g = "",
		l, n = "",
		k = 0;
		a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		do e = m.indexOf(a.charAt(k++)),
		h = m.indexOf(a.charAt(k++)),
		l = m.indexOf(a.charAt(k++)),
		n = m.indexOf(a.charAt(k++)),
		e = e << 2 | h >> 4,
		h = (h & 15) << 4 | l >> 2,
		g = (l & 3) << 6 | n,
		f += String.fromCharCode(e),
		64 != l && (f += String.fromCharCode(h)),
		64 != n && (f += String.fromCharCode(g));
		while (k < a.length);
		return unescape(f)
	}
	url = window.location.href;
	home = ancplayer.load.site;
	server_i = [0];
	part = [];
	sv = ancplayer.sv.list_sv.split(",");
	tensv = ancplayer.sv.ten_sv.split(",");
	width = ancplayer.load.width;
	height = ancplayer.load.height;
	player = ancplayer.load.player;
	proxy = ancplayer.load.proxy;
	skin = ancplayer.load.skin;
	imgload = ancplayer.load.imgload;
	tmget = ancplayer.load.getlink;
	auto = ancplayer.load.autoplay;
	eauto = ancplayer.load.embedplay;
	this.fu = function (a, f, e) {
		if (null == f && null == e) return document.getElementById(a).innerHTML;
		null != f && null == e ? document.getElementById(a).innerHTML = f: document.getElementById(a).style[e] = f
	};
	this.read = function () {
		b = this.fu("anc_data");
		c = '<div id="b_data" style="display:none !important;">';
		d = "</div>";
		b = b.replace(/\<id\>/gi, c);
		b = b.replace(/\<\/id\>/gi, d);
		b = b.replace(/\[id\]/gi, c);
		b = b.replace(/\[\/id\]/gi, d);
		this.fu("anc_data", b); - 1 != b.indexOf("anc*") ? (b = this.fu("b_data"), b = b.replace("anc*", ""), b = b.substring(0, b.length), b = decodeanc(b)) : b = this.fu("b_data");
		0 >= b.indexOf("|") && (b = ";" + b + "|");
		return b
	};
	data = this.read();
	l_spi = data.split("|").length;
	l_spk = function (a) {
		return data.split("|")[a].split(";").length
	};
	d_spi = function (a) {
		return data.split("|")[a]
	};
	d_spk = function (a, f) {
		return data.split("|")[a].split(";")[f]
	};
	pc = "0abcdefghiklmnopqrs".split("");
	svt = "";
	svx = 0;
	this.Play = function () {
		for (var a = 0; a < tensv.length; a++) {
			var f = tensv[a].split(".")[0];
			"" == f && (f = home);
			part[a] = '<li id="sev_' + a + '" class="sev">' + f + " <li>"
		}
		for (f = 0; f < l_spi - 1; f++) for (var e = 0; e < l_spk(f); e++) for (name = d_spk(f, 0), link = d_spk(f, e), name = 2 == l_spk(f) ? d_spk(f, 0) : (d_spk(f + 1, 0), name + pc[e]), a = 0; a < sv.length; a++) - 1 != link.indexOf(sv[a]) && (sv[a] && (data_out = '<li class="ep"><a class="a_tap" id="ep_' + f + '" href="?phimmoc=' + a + "-" + f + "-" + e + '" title="' + name + " - " + home + '" >' + name + "</a></li>"), part[a] += data_out);
		for (a = 0; a < sv.length; a++) - 1 != part[a].indexOf(home) && (getlinksv = svt += '<ul id="server_' + svx + '" > ' + part[a] + ' <div class="clear"></div></ul>', server_i[a] = svx.toString(), svx++);
		svt = '<div id="list_tap"> ' + svt + ' <div class="clear"></div></div><div class="clear"></div>';
		getlinksv1 = getlinksv.substring(32, 35);
		getlinksv2 = getlinksv1.replace('"', "");
		laylinksv = getlinksv2.replace(" ", "");
		this.fu("anc_tp", svt);
		this.getUrl()
	};
	this.getUrl = function () {
		String.prototype.GetPart = function (a) {
			a = new RegExp("(^|&)" + a + "=([^&]*)(&|$)");
			a = this.substr(this.indexOf("?") + 1).match(a);
			return null != a ? unescape(a[2]) : null
		};
		part_Url = url.GetPart("phimmoc");
		if(part_Url == null) {part_Url = "" + laylinksv + "-0-1"};
		part_Url = part_Url.split("-");
		pserver = part_Url[0];
		pepisode = part_Url[1];
		pelink = part_Url[2];
		var a = this.fu("server_0"),
		e = this.fu("server_" + server_i[pserver]);
		this.fu("server_" + server_i[pserver], a);
		this.fu("server_0", e);
		document.getElementById("ep_" + pepisode).className = "tap_active";
		document.getElementById("sev_" + pserver).className = "sv_active";
		d_spk(pepisode, pelink) ? this.load(d_spk(pepisode, pelink)) : window.location.href = url.split("?")[0]
	};
  
this.load = function(x) {	
//if(x.indexOf(sv[0]) != -1){x = x.replace(/\/watch\?v=/gi,"/embed/"); x = x.replace(/\feature\=player\_embedded/gi,"");x = x.replace(/\#sub=/gi,'?captions.file='); obj = DBOj(x)[1];}	// youtube
if (x.indexOf(sv[0]) != -1) {x = x.replace(/\feature\=player\_embedded/gi, "");x = x.replace(/\#sub=/gi, "&sub=");obj = DBOj(x)[10];} // youtube
if(x.indexOf(sv[1]) != -1){x = x.replace(/anc\.you\/watch\?v=/gi,"http://youtube.com/embed/");x = x.replace(/\#sub=/gi,'?captions.file=');obj = DBOj(x)[1];}	 // youtube
if(x.indexOf(sv[2]) != -1){x = x.replace(/anc\.yl/gi,"http://www.youtube.com/p");obj = DBOj(x)[1];}  // Gdata youtube
if(x.indexOf(sv[3]) != -1){x = x.replace(/anc\.mp4\/http/gi,"http"); x = x.replace(/\#sub=/gi,"&captions.file=");obj = DBOj(x)[5];} //mp4
if(x.indexOf(sv[4]) != -1){x = x.replace(/anc\.flv\/http/gi,"http"); x = x.replace(/\#sub=/gi,"&captions.file=");obj = DBOj(x)[5];}  // FLV
if(x.indexOf(sv[5]) != -1){x = x.replace(/\*/gi,"&");x = x.replace(/\@/gi,"&"); x = x.replace(/\#sub=/gi,'&captions.file=');obj = DBOj(x)[2];}  // Picasa
if(x.indexOf(sv[6]) != -1){x = x.replace(/anc\.ps/gi,"https://picasaweb.google.com"); x = x.replace(/\*/gi,"&");x = x.replace(/\@/gi,"&"); x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[2];}  // Picasa 2
if(x.indexOf(sv[7]) != -1){x = x.replace(/anc\.tm/gi,"https://picasaweb.google.com"); x = x.replace(/\*/gi,"&");x = x.replace(/\@/gi,"&"); x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[2];}  // Picasa 3
if(x.indexOf(sv[8]) != -1){x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[3]}    /*plus*/ 
if(x.indexOf(sv[9]) != -1){x = x.replace(/edit\?pli\=1/gi,"preview?pli=1");x = x.replace(/\#sub=/gi,'?captions.file='); obj = DBOj(x)[11];}  // Docs Google
if(x.indexOf(sv[10]) != -1){x = x.replace(/edit/gi,"preview"); obj = DBOj(x)[11];}  // Driver Google
//if(x.indexOf(sv[11]) != -1){v = x.match(/[\d\w]+/gi); c = v.length - 2; obj = DBOj(v[c])[8];} // Zing
//if(x.indexOf(sv[12]) != -1){v = x.match(/[\d\w]+/gi); c = v.length - 1; obj = DBOj(v[c])[8];} // Zing
if(x.indexOf(sv[11]) != -1){v = x.match(/[\d\w]+/gi); c = v.length - 2; obj = DBOj(v[c])[12];} // Zing
if(x.indexOf(sv[12]) != -1){v = x.match(/[\d\w]+/gi); c = v.length - 1; obj = DBOj(v[c])[12];} // Zing
if(x.indexOf(sv[13]) != -1){obj = DBOj(x)[5]}  // Zing mobile
if(x.indexOf(sv[14]) != -1){obj = DBOj(x)[5]}  // Zing PS
if(x.indexOf(sv[15]) != -1){v = x.match(/[\d\w]+/gi); c = v.length - 2; obj = DBOj(v[c])[6];} // nct
if(x.indexOf(sv[16]) != -1){x = x.replace(/\#sub=/gi,"?captions.file=");obj = DBOj(x)[1]} // dailymotion
if(x.indexOf(sv[17]) != -1){x = x.replace(/\/[\0-9]\//gi,"/");x = x.replace(/\/[\0-9][\0-9]\//gi,"/"); x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[7]}   /*xvideos*/ 
if(x.indexOf(sv[18]) != -1){obj = DBOj(x)[5]}   /*Goo.gl*/ 
if(x.indexOf(sv[19]) != -1){x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[8]}   //Clipvn
if(x.indexOf(sv[20]) != -1){x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[9]}   //MEME.VN
if(x.indexOf(sv[21]) != -1) {x = x.replace(/\*/gi,"&");x = x.replace(/\@/gi,"&");x = x.replace(/\#sub=/gi,"&captions.file="); obj = DBOj(x)[5];}  // googlevideo.com
if(x.indexOf(sv[22]) != -1){v = x.match(/[\d\w]+/gi); c = v.length - 2; obj = DBOj(v[c])[13];} // Daily
// - Danh sach 2:	
for(var k = 23; k < sv.length; k++){if(x.indexOf(sv[k]) != -1){x = x.replace(/\#sub=/gi,"&captions.file=");obj = DBOj(x)[0]};}
this.fu("anc_pl", obj)
}; 
 
  
var DBOj = function(x){
rut = '<iframe type="text/html" width="'+width+'" height="'+height+'" src="';
qua = '<div id="logoplayer"></div><';
	return obj = [
	// 0 - gk
	''+rut+''+x+'?autoplay='+eauto+'" width="'+width+'" height="'+height+'" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" id="playerayer" frameborder="0"></iframe>',
	// 1 - youtube - Docs - Diver - Daily
	''+qua+'iframe src="'+x+'?modestbranding=1&controls=2&showinfo=3&hd=1&rel=0&iv_load_policy=3&autohide=2&border=0&wmode=opaque&enablejsapi=1&autoplay='+eauto+'" width="'+width+'" height="'+height+'" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" id="playerayer" frameborder="0"></iframe>',
	// 2 - picasa
	''+rut+''+tmget+'/pica.php?url='+x+'" width="'+width+'" height="'+height+'" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" id="playerayer" frameborder="0"></iframe>',
	// 3 - plus
	''+rut+''+tmget+'/photos.php?url='+x+'" width="'+width+'" height="'+height+'" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" id="playerayer" frameborder="0"></iframe>',
	// 4 - Zing web 
	''+rut+''+tmget+'/zingtv.php?url=http://tv.zing.vn/video/phimmoc-hd-player/'+x+'.html" width="'+width+'" height="'+height+'" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" id="playerayer" frameborder="0"></iframe>',
	// 5 - Zing html5 - Goo.gl
	''+rut+''+tmget+'/mp4.php?url='+x+'" width="'+width+'" height="'+height+'" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" id="playerayer" frameborder="0"></iframe>',
	// 6 - NCT
	''+rut+''+tmget+'/onbox.php?url=http://onbox.vn/phimmoc-hd-player-'+x+'.html" width="'+width+'" height="'+height+'" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" id="playerayer" frameborder="0"></iframe>',
    // 7 - Xvideos	
	''+rut+''+tmget+'/xvd.php?url='+x+'" width="'+width+'" height="'+height+'" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" id="playerayer" frameborder="0"></iframe>',
    // 8 - Clipvn	
	''+rut+''+x+'" width="'+width+'" height="'+height+'" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" id="playerayer" frameborder="0"></iframe>',
    // 9 - meme.vn	
	''+rut+''+tmget+'/meme.php?url='+x+'" width="'+width+'" height="'+height+'" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" id="playerayer" frameborder="0"></iframe>',
    // 10 - youtube
    '' + rut + '' + tmget + '/youtube.php?url=' + x + '" frameborder="0" allowfullscreen="true" id="playerayer"> </iframe>',
    // 11 - Drive, Docs Google
    '' + rut + '' + tmget + '/drive.php?url=' + x + '" frameborder="0" allowfullscreen="true" id="playerayer"> </iframe>',
    // 12 - TV.Zing
    ''+rut+'http://tv.zing.vn/embed/video/'+x+'" width="'+width+'" height="'+height+'" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" id="playerayer" frameborder="0"></iframe>',
    // 13 - Daily
    ''+rut+'//www.dailymotion.com/embed/video/'+x+'" width="'+width+'" height="'+height+'" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" id="playerayer" frameborder="0"></iframe>',
	];	
}
}
var M = new ancMedia; M.Play();
//]]>
