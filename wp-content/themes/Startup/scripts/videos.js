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

(function( $ )
{
$.fn.vids = function( options )
{
var settings = {
customSelector: null
}
var div = document.createElement('div'),
ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];
div.className = 'vids-style';
div.innerHTML = '&shy;<style type="text/css">.video-wrap{position:relative;width:100%;padding:0}.video-wrap embed, .video-wrap object, .video-wrap iframe{position:absolute;top:0;left:0;width:100%;height:100%}</style>';
ref.parentNode.insertBefore(div,ref);
if ( options ) {
$.extend( settings, options );
}
return this.each(function()
{
var selectors = [
"iframe[src^='//web.archive.org/web/20190205070128/http://www.youtube.com']",
"iframe[src^='https://web.archive.org/web/20190205070128/http://www.youtube.com']",
"iframe[src^='https://web.archive.org/web/20190205070128/https://www.youtube.com']",
"iframe[src^='//web.archive.org/web/20190205070128/http://www.youtube-nocookie.com']",
"iframe[src^='https://web.archive.org/web/20190205070128/http://www.youtube-nocookie.com']",
"iframe[src^='https://web.archive.org/web/20190205070128/https://www.youtube-nocookie.com']",
"iframe[src^='https://web.archive.org/web/20190205070128/http://player.vimeo.com']",
"iframe[src^='//web.archive.org/web/20190205070128/http://player.vimeo.com']",
"iframe[src^='https://web.archive.org/web/20190205070128/http://www.dailymotion.com']",
"iframe[src^='https://web.archive.org/web/20190205070128/http://www.metacafe.com']",
"iframe[src^='https://web.archive.org/web/20190205070128/http://blip.tv']",
"embed",
"object"
];
if (settings.customSelector) {
selectors.push(settings.customSelector);
}
var $allVideos = $(this).find(selectors.join(','));
$allVideos.each(function(){
var $this = $(this);
if (this.tagName.toLowerCase() == 'embed' && $this.parent('object').length || $this.parent('.video-wrap').length) { return; }
var height = this.tagName.toLowerCase() == 'object' ? $this.attr('height') : $this.height(),
aspectRatio = height / $this.width();
if(!$this.attr('id')){
var videoID = 'vids' + Math.floor(Math.random()*999999);
$this.attr('id', videoID);
}
$this.wrap('<div class="video-wrap"></div>').parent('.video-wrap').css('padding-top', (aspectRatio * 100)+"%");
$this.removeAttr('height').removeAttr('width');
});
});
}
})( jQuery );

}
/*
     FILE ARCHIVED ON 07:01:28 Feb 05, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:49:49 Jan 05, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 7.593
  PetaboxLoader3.resolve: 31.696
  exclusion.robots.policy: 0.12
  exclusion.robots: 0.13
  captures_list: 841.339
  LoadShardBlock: 809.144 (3)
  PetaboxLoader3.datanode: 677.931 (4)
  esindex: 0.013
  CDXLines.iter: 21.943 (3)
  load_resource: 119.749
*/