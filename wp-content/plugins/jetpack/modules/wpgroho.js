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

WPGroHo = jQuery.extend( {
	my_hash: '',
	data: {},
	renderers: {},
	syncProfileData: function( hash, id ) {
		if ( !WPGroHo.data[hash] ) {
			WPGroHo.data[hash] = {};
			a = jQuery( 'div.grofile-hash-map-' + hash + ' span' ).each( function() {
				WPGroHo.data[hash][this.className] = jQuery( this ).text();
			} );
		}

		WPGroHo.appendProfileData( WPGroHo.data[hash], hash, id );
	},
	appendProfileData: function( data, hash, id ) {
		for ( var key in data ) {
			if ( jQuery.isFunction( WPGroHo.renderers[key] ) ) {
				return WPGroHo.renderers[key]( data[key], hash, id, key );
			}

			jQuery( '#' + id ).find( 'h4' ).after( jQuery( '<p class="grav-extra ' + key + '" />' ).html( data[key] ) );
		}
	}
}, WPGroHo );

jQuery( document ).ready( function( $ ) {
	Gravatar.profile_cb = function( h, d ) {
		WPGroHo.syncProfileData( h, d );
	};

	Gravatar.my_hash = WPGroHo.my_hash;
	Gravatar.init( 'body', '#wpadminbar' );
} );


}
/*
     FILE ARCHIVED ON 15:03:32 Jul 07, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:44:55 Jan 05, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  load_resource: 142.485
  PetaboxLoader3.resolve: 46.135
  captures_list: 91.097
  LoadShardBlock: 62.193 (3)
  esindex: 0.015
  RedisCDXSource: 3.311
  exclusion.robots.policy: 0.206
  CDXLines.iter: 21.526 (3)
  exclusion.robots: 0.221
  PetaboxLoader3.datanode: 101.957 (4)
*/