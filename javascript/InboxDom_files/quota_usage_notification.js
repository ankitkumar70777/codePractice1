rcmail.addEventListener('plugin.show_quota_notification', function (notification) {
    var modal_options = {
        modal: false,
        draggable: false,
        resizable: false,
        // show popup around the storage indicator
        position: { my: "center+80 top-190", at: "center", of: "#quotadisplay" },
        classes: {
            "ui-dialog": "quota_notification"
        }
    };

    // quotadisplay bar is only visible for desktop site
    if (!$('#quotadisplay').is(':visible')) {
        modal_options.modal = true;
        modal_options.resizable = false;
        // add close button for mobile and tablet size
        modal_options.buttons = [{
            text: "Close",
            //icon: "ui-icon-heart",
            click: function () {
                $(this).dialog("close");
            }
        }];
        delete modal_options.position;
    }

    var html = '<div id="quota_notification" title="' + notification.notification_title + '">\
        <p>'+ notification.notification_content + '</p></div >';

    $('body').append(html);
    $("#quota_notification").dialog(modal_options);

    // send ajax request to set session
    rcmail.http_post('plugin.set_quota_usage_notified');
});