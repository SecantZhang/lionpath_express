alert("js injected!");
//var bt = document.getElementsByClassName("row section-grid-row hidden-sm hidden-xs show-for-print").value[0].querySelector("td.row_label");
var schedule_show = document.getElementsByClassName("schedule-show");
// if (schedule_show == null) alert("schedule_show = null");
// else alert(schedule_show[0].innerHTML);

var row_section = schedule_show[0].getElementsByClassName("row section-grid-row hidden-sm hidden-xs show-for-print");
// if (row_section == null) alert("row_section == null");
// else alert(row_section[0].innerHTML);

var first_tag = row_section[0].getElementsByTagName("div");
// if (first_tag == null) alert("first_tag == null");
// else alert(first_tag[0].innerHTML);

var classwithintag = first_tag[0].getElementsByClassName("section-detail-grid table-bordered-wrap");
// if (classwithintag == null) alert("classwithintag == null");
// else alert(classwithintag[0].innerHTML);

var tbodytag = classwithintag[0].getElementsByTagName("tbody");
// if (tbodytag == null) alert("tbody == null");
// else alert(tbodytag[0].innerHTML);

var actual_content = tbodytag[0].getElementsByClassName("section-item section first linked-section");
if (actual_content == null) alert("actual_content == null");
else alert(actual_content[0].innerHTML);

var row_l = actual_content[0].getElementsByClassName(" row-label");
for (var i = 0; i < row_l.length; i++) {
    if (row_l[i].className == ' row-label') 
        alert(row_l[i].innerHTML);
}
