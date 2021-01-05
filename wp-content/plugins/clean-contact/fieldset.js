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

// Help fend off spam spiders
function clean_contact_form() {
	var send = document.getElementById('str_clean_contact_send').value;
	document.write('<a name="clean_contact"></a><form method="post" action="#clean_contact" name="clean_contact" id="clean_contact" onsubmit="return clean_contact_validate(this)">');
	document.write('<input type="hidden" name="clean_contact_token" value="cc" />');
	document.write('<fieldset class="CleanContact">');
	document.write('<label for="clean_contact_from_name" style="display: inline;">' + document.getElementById('str_clean_contact_name').value + '<em>*</em></label><input type="text" name="clean_contact_from_name" id="clean_contact_from_name" onchange="clean_contact_msg_clr()" />');
	document.write('<label for="clean_contact_from_email" style="display: inline;">' + document.getElementById('str_clean_contact_email').value + '<em>*</em></label><input type="text" name="clean_contact_from_email" id="clean_contact_from_email"  onchange="clean_contact_msg_clr()"  />');
	document.write('<label for="clean_contact_subject">' + document.getElementById('str_clean_contact_subject').value + '<em>*</em></label><input type="text" id="clean_contact_subject" name="clean_contact_subject"  onchange="clean_contact_msg_clr()"  />');
	document.write('<label for="clean_contact_body">' + document.getElementById('str_clean_contact_body').value +  '<em>*</em></label>');
	document.write('<textarea id="clean_contact_body" name="clean_contact_body"  onchange="clean_contact_msg_clr()" ></textarea><br />');
	document.write('<div id="clean_contact_msg"></div>');
	document.write('<input type="submit" id="clean_contact_send" value=" ' + send + ' " />');
	document.write('</fieldset>');
	document.write('</form>');
}

function clean_contact_validate() {
	var email  = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/;
	var error = document.getElementById('str_clean_contact_send').value + ': ';
	var str = 	/\w+/;

	var error = document.getElementById('str_clean_contact_error').value + ': ';
	if(document.getElementById('clean_contact_from_name').value == '') {
		clean_contact_msg(error + document.getElementById('str_clean_contact_name').value);
		return false;
	}
	if(!email.test(document.getElementById('clean_contact_from_email').value)) {
		clean_contact_msg(error + document.getElementById('str_clean_contact_email').value);
		return false;
	}
	if(document.getElementById('clean_contact_subject').value == '') {
		clean_contact_msg(error + document.getElementById('str_clean_contact_subject').value);
		return false;
	}

	if(document.getElementById('clean_contact_body').value == '') {
		clean_contact_msg(error + document.getElementById('str_clean_contact_body').value);
		return false;
	}
	return true;
}

function  clean_contact_msg_clr() {
	document.getElementById('clean_contact_msg').style.display = 'none';
}

function clean_contact_msg(msg) {
	em = document.getElementById('clean_contact_msg');
	em.innerHTML = msg;
	em.style.display = 'block';
} 

function clean_contact_url(url) {
	window.location = url;
}



}
/*
     FILE ARCHIVED ON 15:09:32 Oct 24, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:57 Jan 05, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.164
  esindex: 0.012
  exclusion.robots: 0.175
  PetaboxLoader3.datanode: 1575.172 (4)
  captures_list: 1572.075
  RedisCDXSource: 3.825
  CDXLines.iter: 19.292 (3)
  load_resource: 111.612
  LoadShardBlock: 1545.349 (3)
  PetaboxLoader3.resolve: 38.818
*/