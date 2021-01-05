var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

sfHover = function() {
	if (!document.getElementsByTagName) return false;
	var sfEls = document.getElementById("nav-ie").getElementsByTagName("li");
	// if you only have one main menu - delete the line below //
	//var sfEls1 = document.getElementById("secnav").getElementsByTagName("li");
	//
	for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onmouseover=function() {
			this.className+=" sfhover";
		}
		sfEls[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
		}
	}
	// if you only have one main menu - delete the "for" loop below //
//	for (var i=0; i<sfEls1.length; i++) {
//		sfEls1[i].onmouseover=function() {
//			this.className+=" sfhover1";
//		}
//		sfEls1[i].onmouseout=function() {
//			this.className=this.className.replace(new RegExp(" sfhover1\\b"), "");
//		}
//	}
	//
}
if (window.attachEvent) window.attachEvent("onload", sfHover);

}
/*
     FILE ARCHIVED ON 23:22:08 Oct 07, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:48:56 Jan 05, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  load_resource: 1125.367
  PetaboxLoader3.resolve: 958.19
  captures_list: 118.836
  LoadShardBlock: 77.831 (3)
  esindex: 0.012
  RedisCDXSource: 13.295
  exclusion.robots.policy: 0.111
  CDXLines.iter: 23.157 (3)
  exclusion.robots: 0.119
  PetaboxLoader3.datanode: 222.541 (4)
*/