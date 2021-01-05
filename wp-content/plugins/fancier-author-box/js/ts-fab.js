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

jQuery(document).ready(function($){
	$('.ts-fab-tabs > div').hide();
	$('.ts-fab-tabs > div:first-child').show();
	$('.ts-fab-list li:first-child').addClass('active');

	$('.ts-fab-list li a').click(function() {
		$(this).closest('.ts-fab-wrapper').find('li').removeClass('active');
		$(this).parent().addClass('active');
		var currentTab = $(this).attr('href');
		if(currentTab.indexOf('#') != -1) {
			currentTabExp = currentTab.split('#');
			currentTab = '#' + currentTabExp[1];
		}

		$(this).closest('.ts-fab-wrapper').find('.ts-fab-tabs > div').hide();
		$(currentTab).show();

		return false;
	});
});

}
/*
     FILE ARCHIVED ON 02:30:36 Mar 18, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:44:26 Jan 05, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  CDXLines.iter: 22.198 (3)
  exclusion.robots.policy: 0.171
  RedisCDXSource: 0.792
  captures_list: 78.992
  load_resource: 153.386
  PetaboxLoader3.datanode: 138.021 (4)
  LoadShardBlock: 51.665 (3)
  exclusion.robots: 0.184
  esindex: 0.012
  PetaboxLoader3.resolve: 35.465
*/