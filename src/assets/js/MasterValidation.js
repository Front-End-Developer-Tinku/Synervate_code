$(document).ready(function () {
    var pathname = window.location.pathname;
    $('.coupn_catg_in > ul > li > a[href="' + pathname + '"]').addClass('NavAbAct');

//    var pathnameForDetails = '/' + window.location.pathname.split('/')[1] + '/' + window.location.pathname.split('/')[2];
//    $('.coupn_catg_in > ul > li > a[href="' + pathnameForDetails + '"]').addClass('NavAbAct');
});

//1. Only Number.
function numeralsOnly(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode != 46)) {
        alert("Enter Digit only in this field!");
        return false;
    }
    return true;
}

//2. Quick Enquiry.
function pageQuickcheck() {
    var txtMobile = document.getElementById('ctl00_txtQuickPhone').value;
    if (!chkValue(document.getElementById("ctl00_DdMainMenuCAtegory"), 0, "Select Service Type"))
        return false;
    if (!chkValue(document.getElementById("ctl00_DdMainMenuData"), 0, "Select Service"))
        return false;    
    if (!req(document.getElementById("ctl00_txtQuickName"), "Please enter your name."))
        return false;
    if (!req(document.getElementById("ctl00_txtQuickEmail"), "Please enter your email id."))
        return false;
    if (!isEmail(document.getElementById("ctl00_txtQuickEmail"), "Should be  valid email id."))
        return false;
    if (!req(document.getElementById("ctl00_txtQuickPhone"), "Please enter your contact no."))
        return false;
    if (txtMobile.length < 10) {
        alert("Please enter 10 digits mobile no.");
        return false;
    }
    if (!req(document.getElementById("ctl00_txtQuickMsg"), "Please enter your msg."))
        return false;

}

//3. Noraml Enquiry.
function pageNoramlcheck() {
    var txtMobile = document.getElementById('ctl00_ContentPlaceHolder1_txtNormalMsg').value;
    if (!req(document.getElementById("ctl00_ContentPlaceHolder1_txtNormalFirstName"), "Please enter your first name."))
        return false;
    if (!req(document.getElementById("ctl00_ContentPlaceHolder1_txtNormalLastName"), "Please enter your last name."))
        return false;
    if (!req(document.getElementById("ctl00_ContentPlaceHolder1_txtNormalEmailID"), "Please enter your email id."))
        return false;
    if (!isEmail(document.getElementById("ctl00_ContentPlaceHolder1_txtNormalEmailID"), "Should be  valid email id."))
        return false;
    if (!req(document.getElementById("ctl00_ContentPlaceHolder1_txtNormalMsg"), "Please enter your contact no."))
        return false;
    if (txtMobile.length < 10) {
        alert("Please enter 10 digits mobile no.");
        return false;
    }
    if (!req(document.getElementById("ctl00_ContentPlaceHolder1_txtNormalMsg"), "Please enter your msg."))
        return false;

}