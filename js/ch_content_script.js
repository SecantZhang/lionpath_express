window.onload = function() {
    var i = 0
    var msg, temp, sum = 0, ld_sum = 0, ip_sum = 0;
    var iframe = document.getElementById("ptifrmtgtframe");
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    var units_content, grade_content;
    if (iframeDocument) {
        while (iframeDocument.getElementById("CRSE_UNITS$" + i)) {
            units_content = iframeDocument.getElementById("CRSE_UNITS$" + i);
            grade_content = iframeDocument.getElementById("CRSE_GRADE$" + i);
            temp = Number(units_content.innerText);
            if (grade_content.innerText == 'LD') {
                ld_sum += temp;
            }
            else if (grade_content.innerText == '\xa0') {
                ip_sum += temp;
            }
            else {
                sum += temp;
            }
            i += 1;
        }

        var ava_units = sum + ip_sum;

        var html_content1 = "<tr>\n" +
            "    <th scope=\"col\" width=\"101\" align=\"left\">\n" +
            "        <a name=\"le_insert_tc\">Available Units:</a>\n" +
            "    </th>\n" +
            "    <th scope=\"col\" width=\"45\" align=\"left\">\n" +
            "        <a name=\"le_insert_tc_result\">";
        var html_content2 = "        </a>\n" +
            "    </th>\n" +
            "    <th scope=\"col\" width=\"101\" align=\"left\">\n" +
            "        <a name=\"le_insert_ip\">In Progress Units:</a>\n" +
            "    </th>\n" +
            "    <th scope=\"col\" width=\"45\" align=\"left\">\n" +
            "        <a name=\"le_insert_ip_result\">";
        var html_content3 = "        </a>\n" +
            "    <th scope=\"col\" width=\"101\" align=\"left\">\n" +
            "        <a name=\"le_insert_taken\">Taken Units:</a>\n" +
            "    </th>\n" +
            "    <th scope=\"col\" width=\"45\" align=\"left\">\n" +
            "        <a name=\"le_insert_taken_result\">";
        var html_content4 = "        </a>\n" +
            "    </th>\n" +
            "</tr>";
        var insert_content = html_content1 + ava_units + html_content2 + ip_sum + html_content3 + sum;
        var insert_html = iframeDocument.getElementById("trCRSE_HIST$0_row1");
        if (insert_html.insertAdjacentHTML)
            insert_html.insertAdjacentHTML("beforeBegin", insert_content);
        else {
            var range = iframeDocument.createRange();
            var frag = range.createContextualFragment(insert_content);
            insert_html.parentNode.insertBefore(frag, insert_html);
        }
        chrome.runtime.sendMessage({"source": "ch", "validation": true});
    }
    else 
        chrome.runtime.sendMessage({"source": "ch", "validation" : false});

}