$(document).ready(function () {
    var a = sessionStorage.length;
    if (sessionStorage.length > 0) {
        displayUserSearchHistory();
        $("#divNoHistory").hide();
    } else {
        $("#divNoHistory").show();
    }
    $('#lstSearch').change(function () {
        $("#searchTitle").val($("#lstSearch option:selected").text());
        $('#lstSearch').hide();
        var todaysDate = dateFormate();
        sessionStorage.setItem($("#searchTitle").val(), todaysDate);
        if (sessionStorage.length > 0) {
            $("#searchHistory").find('tbody').detach();
            $("#divNoHistory").hide();
        }
        displayUserSearchHistory();
    }
    );
});

/*This function will will display search history for the user based on session */
function displayUserSearchHistory() {
    var newRows = '';
    newRows += "<tbody>";
    for (i = 0; i < sessionStorage.length; i++) {
        if (i == 0) {
            newRows += "<tr class='borderBottom borderTop'><td class='padding10TopBottom fontArial16Bold'>" + sessionStorage.key(i) +
                "</td><td class='historyDate'>" + sessionStorage.getItem(sessionStorage.key(i)) +
                "</td><td class='padding10TopBottom'><a onclick='removeSearchItem(this);'  href='javascript: void (0);' class='closeButton'>X</a></td></tr> ";
        }
        else {
            newRows += "<tr class='borderBottom'><td class='padding10TopBottom fontArial16Bold'>" + sessionStorage.key(i) +
                "</td><td class='historyDate'>" + sessionStorage.getItem(sessionStorage.key(i)) +
                "</td><td class='padding10TopBottom'><a onclick='removeSearchItem(this);'  href='javascript: void (0);' class='closeButton'>X</a></td></tr> ";
        }

    }
    newRows += "</tbody>";
    $("#searchHistory").append(newRows);
}
function dateFormate() {
    var todayDate = new Date(Date.now());
    var format = "AM";
    var hour = todayDate.getHours();
    var min = todayDate.getMinutes();
    var month = todayDate.getMonth() + 1;
    var date = todayDate.getDate();
    if (month < 10) { month = "0" + month; }
    if (date < 10) { date = "0" + date; }
    if (hour > 11) { format = "PM"; }
    if (hour < 10) { hour = "0" + hour; }
    if (hour > 12) { hour = hour - 12; }
    if (hour == 0) { hour = 12; }
    if (min < 10) { min = "0" + min; }
    var date = (todayDate.getFullYear() + "-" + month + "-" + date + " " + hour + ":" + min + " " + format);
    return date;
}

/*This function will remove a search item from search history on user demand */
function removeSearchItem(searchItem) {
    sessionStorage.removeItem($(searchItem).closest('tr').find("td:first").text());
    $(searchItem).closest('tr').remove();
}
/*This function will clear all the search history for the user */
function clearSearchList() {
    sessionStorage.clear();
    $("#searchHistory").find('tbody').detach();
    $("#divNoHistory").show();
}
/*This function will display a list of items matching to the input */
function showMatchingItems() {
    var uri = "http://localhost:63111/api/SearchApi?searchString=" + $("#searchTitle").val();
    $.ajax({
        type: 'GET',
        url: uri,
        dataType: "json",
        success: function (data) {
            $('#lstSearch').empty();
            if (data.length > 0) {
                $(".noMatch").hide();
                $("#divNoMatch").removeClass("divNoMatch");
                $('#lstSearch').show();
            }
            else {
                $(".noMatch").show();
                $("#divNoMatch").addClass("divNoMatch");
                $('#lstSearch').hide();
            }
            $.each(data, function (index) {
                $.each(data[index], function (key, title) {
                    var b = key + title;
                    if (key == "Title") {
                        $('#lstSearch').append('<option value="' + key + '" class="listItem">'
                            + '<b>' + title + '</b></option>');
                    }
                });
            });
        }
    });
}