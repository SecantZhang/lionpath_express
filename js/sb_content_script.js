/**
 * Reach the element.
 * @author Secant(Zheng) Zhang 
 */
var schedule_show = document.getElementsByClassName("schedule-show");
var row_section = schedule_show[0].getElementsByClassName("row section-grid-row hidden-sm hidden-xs show-for-print");
var first_tag = row_section[0].getElementsByTagName("div");
var classwithintag = first_tag[0].getElementsByClassName("section-detail-grid table-bordered-wrap");
var tbodytag = classwithintag[0].getElementsByTagName("tbody");
var actual_content = tbodytag[0].getElementsByClassName("section-item section");
/**
 * Regular Expression Function for Getting the time.
 * @author Luke Yao & Yiyan Wei
 * @param str0 original string
 */
function timeRegex ( str0 ) {
    var reg1 = /\s\w+\W\w+\s\W\s\w+\W\w+/;
    var str1 = reg1.exec(str0);
    return str1;
} 
/**
 * Regular Expression Function for Getting the Locaiton. 
 * @author Luke Yao & Yiyan Wei
 * @param str0 original string
 */
function locRegex ( str0 ) {
    var reg2 = /\s[A-Za-z\s]+[A-Za-z](?=\s)/;
    var str2 = reg2.exec(str0);
    return str2;
}
/**
 * Variable: Subject, Course, Weekday, Time, Location.
 * @author Secant(Zheng) Zhang
 */
var subject_ary = new Array(), course_ary = new Array(), weekday_ary = new Array(), time_ary = new Array(), loc_ary = new Array();
/**
 * Main Algorithm for text extraction. 
 * @author Secant(Zheng) Zhang
 */
for (var k = 0; k < actual_content.length; k++) {
    var row_label = actual_content[k].getElementsByClassName(" row-label");
    for (var i = 0; i < row_label.length; i++) {
        if (row_label[i].className == ' row-label') {
            switch (i) {
                case 1: { 
                    subject_ary.push(row_label[i+1].innerText);
                    break;
                }
                case 2: {
                    course_ary.push(row_label[i+1].innerText);
                    break;
                }
                case 6: {
                    var row_label_innerTag_div = row_label[i+1].getElementsByTagName("div");
                    time_ary.push(timeRegex(row_label_innerTag_div[0].innerText));
                    loc_ary.push(locRegex(row_label_innerTag_div[0].innerText));
                    var row_label_innerClass = row_label_innerTag_div[0].getElementsByTagName("span");
                    var stringbuilder = "";
                    for (var j = 0; j < row_label_innerClass.length; j++) {
                        var temp = "" + row_label_innerClass[j].innerText;
                        stringbuilder += temp;
                    }
                    weekday_ary.push(stringbuilder);
                    break;
                }
            }
        }
    }
}

chrome.tabs.executeScript(null, {file: "js/dateSort.js"}, function() {
    chrome.tabs.sendMessage(null, {
            
    });
});