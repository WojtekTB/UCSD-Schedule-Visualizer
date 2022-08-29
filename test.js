$(function () {
    $("body").fadeIn(100);
    $.support.cors = true;
    if (!window.console) {
        console = {
            log: function () {}
        };
    }
    if (typeof String.prototype.trim !== "function") {
        String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, "");
        };
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (E3) {
            return jQuery.inArray(E3, this);
        };
    }
    var DO = false;
    if (document.all && !document.addEventListener) {
        if (document.all && !document.querySelector) {
            alert("Your browser is currently not supported by Webreg.  Please update your browser to the current version or use the latest version of Chrome or Firefox for the best experience.");
            window.location.replace("http://students.ucsd.edu");
        } else {
            DO = true;
        }
    }
    $("body").addClass("wr-spinner-loading");
    function CC() {
        window.location.replace("/security/student/logout?url=http://students.ucsd.edu");
    }
    function Db() {
        window.location.replace("/webreg2/");
    }
    var Br;
    $("#dialog-session-timeout").dialog({
        autoOpen: false,
        maxWidth: 600,
        position: {
            my: "center",
            at: "center",
            of: window
        },
        height: "auto",
        width: 600,
        modal: true,
        closeOnEscape: false,
        buttons: {
            "No": BT,
            "Yes": Ci
        }
    });
    $(this).mousemove(function (E4) {
        if (Br != undefined) {
            window.clearTimeout(Br);
        }
        var E3 = 1080000;
        Br = window.setTimeout(Ei, E3);
    });
    function Ei() {
        window.clearTimeout(Br);
        var E3 = 120000;
        Br = window.setTimeout(BT, E3);
        $("#dialog-session-timeout").dialog("open");
    }
    function Ci() {
        $("#dialog-session-timeout").dialog("close");
        Bw(function (E3) {
            if (E3 != undefined) {
                if (! E3.SESSION_OK) {
                    Db();
                }
            } else {
                Db();
            }
        });
    }
    function BT() {
        $("#dialog-session-timeout").dialog("close");
        CC();
    }
    var Ca = BH("p1");
    var CZ = BH("p2");
    var Dd = BH("p3");
    if (Ca != undefined) {
        var BM = Ca.match(/^S1|^S2|^S3|^SU/i) ? true : false;
        var X = (Ca.match(/^S3/i)) ? true : false;
    } else {
        Db();
    }
    function BV(E5) {
        var E3 = E5.substring(0, 2);
        var E6 = "";
        switch (E3) {
            case "SP": E6 += "Spring Quarter";
                break;
            case "FA": E6 += "Fall Quarter";
                break;
            case "WI": E6 += "Winter Quarter";
                break;
            case "S1": E6 += "Summer Session I";
                break;
            case "S2": E6 += "Summer Session II";
                break;
            case "S3": E6 += "Special Summer Session";
                break;
            case "SU": E6 += "Summer Med School";
                break;
        }
        var E4 = E5.substring(2, 4);
        return E6 + " 20" + E4;
    }
    var Ae = BV(Ca);
    var C3 = false;
    var G = false;
    var EW = "/webreg2/resources/images/down_arrow.png";
    var DP = "/webreg2/resources/images/right_arrow.png";
    var EA = "My Schedule";
    var ES = EA;
    var A8 = [];
    A8.length = 0;
    var Bt = {};
    var Ar = new Date();
    var Eb = Ar.getFullYear();
    var Eg = Ar.getMonth();
    var Ek = Ar.getDate();
    var Ep = Ar.getDay();
    var CA = Ar.getTime();
    var Bi = Eg + 1;
    if (Bi < 10) {
        Bi = "0" + String(Bi);
    }
    var Et = Ek;
    if (Et < 10) {
        Et = "0" + Et;
    }
    var b = Eb + "-" + Bi + "-" + Et;
    var Dq = "Cannot edit at this time";
    var p = "Cannot drop at this time";
    var EU = "Cannot waitlist at this time";
    var B3 = "Confirm your appointment time or check holds";
    var DK = "Cannot enroll at this time";
    var Bq = "Course already enrolled";
    var EI = Bq;
    var CS = "Not available for MD";
    var N = "Cannot plan at this time.";
    var Ck = "Confirm your appointment time";
    var CL = "Check your holds";
    var Bz = "Course already waitlisted";
    var As = "Course already enrolled or waitlisted";
    var Bf = "Preauthorized enrollment";
    var AU = "Section already planned, enrolled or waitlisted";
    var Bu = "BEGIN DROP";
    var M = "BEGIN DROP WAITLIST";
    var DC = "BEGIN CHANGE";
    var C1 = "BEGIN CHANGE WAITLIST";
    var Cj = "This class does not allow you to change grade option or units.";
    var Ct = [];
    var EE = [];
    var DM = "You have a scheduling conflict!";
    var D0 = "You have scheduling conflicts!";
    var Cx = [];
    var Bx = [];
    var Cw = "wr-grid-en";
    var Cn = "wr-grid-wt";
    var DA = "wr-grid-pl";
    var CH = "wr-grid-ev";
    var Cc = "alwaysdisable";
    var An = [];
    An.length = 0;
    var Ag = {};
    Ag.length = 0;
    var Eo = [];
    Eo.length = 0;
    var DE = {};
    var C2 = "23";
    var Y = "00";
    var Am;
    var BA = [];
    BA.length = 0;
    var DJ = "23";
    var AA = "00";
    var Di = false;
    var ER = "wr-search-group-row-section-";
    $.fn.floaterJump = function () {
        $("html, body").animate({
            scrollTop: $(this).offset().top + "px"
        }, "fast");
        return this;
    };
    $("#wr-floater-img1").click(function () {
        $("#mainpage-div1-span1").floaterJump();
    });
    $("#wr-floater-img2").click(function () {
        $("#bottom-jumper").floaterJump();
    });
    function DY() {
        var E7 = $(window).width();
        var E3 = 960;
        var E4 = E7 - E3;
        if (E4 > 85) {
            var E5 = Math.round(E4 / 2);
            var E6 = E5 + E3 + 10;
            $(".wr-floater-img-class").css("left", E6);
            $(".wr-floater-img-class").show();
        } else {
            $(".wr-floater-img-class").hide();
        }
    }
    DY();
    $(window).on("resize", function () {
        DY();
    });
    $(document).tooltip({
        show: {
            delay: 100,
            duration: 1000
        }
    });
    function BZ(E3) {
        Em({
            url: "/webreg2/svc/wradapter/get-current-name",
            dataType: "text",
            type: "GET",
            async: false,
            successF: E3
        });
    }
    function y(E6, E3, E5, E4) {
        Em({
            url: "/webreg2/svc/wradapter/check-eligibility",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "termcode": E6,
                "seqid": E3,
                "logged": E5
            },
            successF: E4
        });
    }
    function BS(E4, E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/check-academic-integrity",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "section": E4,
                "termcode": Ca
            },
            successF: E3
        });
    }
    function Dt(E5, E3, E4) {
        Em({
            url: "/webreg2/svc/wradapter/get-status-start",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "termcode": E5,
                "seqid": E3
            },
            successF: E4
        });
    }
    function DF(E3) {
        Em({
            url: "/webreg2/svc/wradapter/get-term",
            dataType: "json",
            type: "GET",
            async: false,
            successF: E3
        });
    }
    function Ao(E3) {
        Em({
            url: "/webreg2/svc/wradapter/get-msg-to-proceed",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "termcode": Ca
            },
            successF: E3
        });
    }
    function Cf(E4, E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/get-error-message",
            dataType: "json",
            type: "POST",
            async: false,
            data: {
                "code": E4,
                "termcode": Ca
            },
            successF: E3
        });
    }
    function Ej(E4, E6, E3, E5) {
        Em({
            url: "/webreg2/svc/wradapter/secure/get-unit-options",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "section": E4,
                "subjcode": E6,
                "crsecode": E3,
                "termcode": Ca
            },
            successF: E5
        });
    }
    function CK(E3, E4) {
        Em({
            url: "/webreg2/svc/wradapter/secure/check-drop-enroll-warn",
            dataType: "json",
            type: "POST",
            async: false,
            data: {
                "sectnum": E3,
                "termcode": Ca
            },
            successF: E4
        });
    }
    function Aj(E4, E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/check-drop-financial",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "termyear": E4,
                "termcode": Ca
            },
            successF: E3
        });
    }
    function ET(E4, E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/send-email",
            dataType: "json",
            type: "POST",
            async: false,
            data: {
                "actionevent": E4,
                "termcode": Ca
            },
            successF: E3
        });
    }
    function CR(E3, E4, E6, E8, E5) {
        var E7 = E3 ? "/webreg2/svc/wradapter/secure/drop-enroll" : "/webreg2/svc/wradapter/secure/drop-wait";
        Em({
            url: E7,
            dataType: "json",
            type: "POST",
            data: {
                "section": E4,
                "subjcode": E6,
                "crsecode": E8,
                "termcode": Ca
            },
            successF: E5
        });
    }
    function Bo(E4, FB, E5, E3, E8, FC, E9, FA, E7) {
        var E6 = E4 ? "/webreg2/svc/wradapter/secure/change-enroll" : "/webreg2/svc/wradapter/secure/change-wait";
        Em({
            url: E6,
            dataType: "json",
            type: "POST",
            data: {
                "section": FB,
                "subjCode": E5,
                "crseCode": E3,
                "grade": E8,
                "unit": FC,
                "oldGrade": E9,
                "oldUnit": FA,
                "termcode": Ca
            },
            successF: E7
        });
    }
    function Ef(E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/get-msg-holds",
            dataType: "json",
            type: "GET",
            data: {
                "termcode": Ca
            },
            successF: E3
        });
    }
    function At(E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/get-msg-status",
            dataType: "json",
            type: "GET",
            data: {
                "termcode": Ca
            },
            successF: E3
        });
    }
    function Bn(E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/get-msg-pass",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "termcode": Ca
            },
            successF: E3
        });
    }
    function C(E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/get-error-type4",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "termcode": Ca
            },
            successF: E3
        });
    }
    function r(E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/get-msg-global",
            dataType: "json",
            type: "GET",
            data: {
                "termcode": Ca
            },
            successF: E3
        });
    }
    function EK(E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/get-status-eligflags",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "termcode": Ca
            },
            successF: E3
        });
    }
    function EV(E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/check-status-button",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "termcode": Ca
            },
            successF: E3
        });
    }
    function AS(E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/check-status-waitlistable",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "termcode": Ca
            },
            successF: E3
        });
    }
    function Bl(E6, E5, E3, E4) {
        Em({
            url: "/webreg2/svc/wradapter/secure/get-class",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "schedname": E6,
                "final": E5,
                "sectnum": E3,
                "termcode": Ca
            },
            successF: E4
        });
    }
    function S(E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/get-preauth-info",
            dataType: "json",
            async: false,
            type: "GET",
            data: {
                "termcode": Ca
            },
            successF: E3
        });
    }
    function Ex(E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/get-final-location-option",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "termcode": Ca
            },
            successF: E3
        });
    }
    function BJ(E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/get-final-sat2",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "termcode": Ca
            },
            successF: E3
        });
    }
    function A1(E4, E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/search-inst-email-addr",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "emailref": E4,
                "termcode": Ca
            },
            successF: E3
        });
    }
    function Cq(FA, E5, E9, E4, E7, E8, E6) {
        if (FA) {
            var E3 = "/webreg2/svc/wradapter/secure/add-wait";
        } else {
            var E3 = "/webreg2/svc/wradapter/secure/add-enroll";
        } Em({
            url: E3,
            dataType: "json",
            type: "POST",
            data: {
                "section": E5,
                "grade": E9,
                "unit": E4,
                "subjcode": E7,
                "crsecode": E8,
                "termcode": Ca
            },
            successF: E6
        });
    }
    function Bc(E9, E7, E3, E5, FA, E8, E4, E6) {
        Em({
            url: "/webreg2/svc/wradapter/secure/plan-add",
            dataType: "json",
            async: false,
            type: "POST",
            data: {
                "schedname": E9,
                "subjcode": E7,
                "crsecode": E3,
                "sectnum": E5,
                "sectcode": FA,
                "grade": E8,
                "unit": E4,
                "termcode": Ca
            },
            successF: E6
        });
    }
    function v(E5, E3, E4) {
        Em({
            url: "/webreg2/svc/wradapter/secure/plan-remove",
            dataType: "json",
            async: false,
            type: "POST",
            data: {
                "schedname": E5,
                "sectnum": E3,
                "termcode": Ca
            },
            successF: E4
        });
    }
    function BK(E3, E4) {
        Em({
            url: "/webreg2/svc/wradapter/secure/plan-remove-all",
            dataType: "json",
            async: false,
            type: "POST",
            data: {
                "sectnum": E3,
                "termcode": Ca
            },
            successF: E4
        });
    }
    function Dr(E4, E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/sched-remove",
            dataType: "json",
            async: false,
            type: "POST",
            data: {
                "schedname": E4,
                "termcode": Ca
            },
            successF: E3
        });
    }
    function AY(E5, E3, E4) {
        Em({
            url: "/webreg2/svc/wradapter/secure/plan-rename",
            dataType: "json",
            async: false,
            type: "POST",
            data: {
                "oldschedname": E5,
                "newschedname": E3,
                "termcode": Ca
            },
            successF: E4
        });
    }
    function Ea(E5, E3, E4) {
        Em({
            url: "/webreg2/svc/wradapter/secure/plan-copy",
            dataType: "json",
            async: false,
            type: "POST",
            data: {
                "oldschedname": E5,
                "newschedname": E3,
                "termcode": Ca
            },
            successF: E4
        });
    }
    function g(E4, E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/plan-count",
            dataType: "json",
            async: false,
            type: "GET",
            data: {
                "schedname": E4,
                "termcode": Ca
            },
            successF: E3
        });
    }
    function Bm(E8, E5, E7, E3, E6) {
        if (E8) {
            var E4 = "/webreg2/svc/wradapter/secure/edit-wait";
        } else {
            var E4 = "/webreg2/svc/wradapter/secure/edit-enroll";
        } Em({
            url: E4,
            dataType: "json",
            type: "POST",
            data: {
                "section": E5,
                "subjcode": E7,
                "crsecode": E3,
                "termcode": Ca
            },
            successF: E6
        });
    }
    function Dg(E4, E6, E3, E5) {
        Em({
            url: "/webreg2/svc/wradapter/secure/edit-plan",
            dataType: "json",
            type: "POST",
            data: {
                "section": E4,
                "subjcode": E6,
                "crsecode": E3,
                "termcode": Ca
            },
            successF: E5
        });
    }
    function Bd(E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/get-enroll-add-dates",
            dataType: "json",
            async: false,
            type: "GET",
            data: {
                "termcode": Ca
            },
            successF: E3
        });
    }
    function A6(E4, E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/search-by-sectionid",
            dataType: "json",
            type: "GET",
            data: {
                "sectionid": E4,
                "termcode": Ca
            },
            successF: E3
        });
    }
    function h(E6, E4, FA, E9, FC, FE, FD, E3, E8, E5, FB, E7) {
        Em({
            url: "/webreg2/svc/wradapter/secure/search-by-all",
            dataType: "json",
            type: "GET",
            data: {
                "subjcode": E6,
                "crsecode": E4,
                "department": FA,
                "professor": E9,
                "title": FC,
                "levels": FE,
                "days": FD,
                "timestr": E3,
                "opensection": E8,
                "isbasic": E5,
                "basicsearchvalue": FB,
                "termcode": Ca
            },
            successF: E7
        });
    }
    function El(E4, E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/search-get-crse-text",
            dataType: "json",
            type: "GET",
            data: {
                "subjlist": E4,
                "termcode": Ca
            },
            successF: E3
        });
    }
    function ED(E5, E4, E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/search-get-crse-list",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "termcode": E5,
                "subjlist": E4
            },
            successF: E3
        });
    }
    function D2(E5, E3, E6, E4) {
        Em({
            url: "/webreg2/svc/wradapter/secure/search-load-group-data",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "subjcode": E5.toString().toUpperCase(),
                "crsecode": E6.toString().toUpperCase(),
                "termcode": Ca
            },
            successF: E4
        });
    }
    function CD(E4, E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/search-get-section-text",
            dataType: "json",
            async: false,
            type: "GET",
            data: {
                "sectnumlist": E4,
                "termcode": Ca
            },
            successF: E3
        });
    }
    function Dk(E4, E5, E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/search-get-restriction",
            dataType: "json",
            async: false,
            type: "GET",
            data: {
                "subjcode": E4,
                "crsecode": E5,
                "termcode": Ca
            },
            successF: E3
        });
    }
    function Ds(E4, E5, E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/search-get-catalog",
            dataType: "json",
            async: false,
            type: "GET",
            data: {
                "subjcode": E4,
                "crsecode": E5,
                "termcode": Ca
            },
            successF: E3
        });
    }
    function w(E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/search-load-subject",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "termcode": Ca
            },
            successF: E3
        });
    }
    function De(E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/search-load-department",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "termcode": Ca
            },
            successF: E3
        });
    }
    function B2(E7, E5, E4, E6, E3) {
        Em({
            url: "/webreg2/svc/wradapter/wr-logger",
            dataType: "json",
            type: "POST",
            data: {
                "sectnum": E7,
                "subjcode": E5,
                "crsecode": E4.trim(),
                "action": E6,
                "result": E3,
                "termcode": Ca
            },
            error: function (E8) {
                return;
            }
        });
    }
    function En(E4, E3) {
        Em({
            url: "/webreg2/svc/wradapter/wr-logger",
            dataType: "json",
            type: "POST",
            data: {
                "sectnum": 0,
                "subjcode": "N/A",
                "crsecode": "N/A",
                "action": "CHECK ELIGIBILITY",
                "result": "Fail: " + E3,
                "termcode": E4
            },
            error: function (E5) {
                return;
            }
        });
    }
    function Bp(E3, E4) {
        Em({
            url: "/webreg2/svc/wradapter/secure/check-and-get-grade-unit",
            dataType: "json",
            type: "POST",
            async: false,
            data: {
                "section": E3,
                "termcode": Ca
            },
            successF: E4
        });
    }
    function Du(E4, E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/get-enroll-detail",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "sectnumlist": E4,
                "termcode": Ca
            },
            successF: E3
        });
    }
    function T(E8, E3, E4, E7, E5, E6) {
        Em({
            url: "/webreg2/svc/wradapter/secure/event-add",
            dataType: "json",
            type: "POST",
            async: false,
            data: {
                "aename": E8,
                "aedays": E3,
                "aestarttime": E4,
                "aeendtime": E7,
                "aelocation": E5,
                "termcode": Ca
            },
            successF: E6
        });
    }
    function CE(E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/event-get",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "termcode": Ca
            },
            successF: E3
        });
    }
    function Cz(E4, E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/event-remove",
            dataType: "json",
            type: "POST",
            async: false,
            data: {
                "aetimestamp": E4,
                "termcode": Ca
            },
            successF: E3
        });
    }
    function A7(E9, E8, E3, E4, E7, E5, E6) {
        Em({
            url: "/webreg2/svc/wradapter/secure/event-edit",
            dataType: "json",
            type: "POST",
            async: false,
            data: {
                "aetimestamp": E9,
                "aename": E8,
                "aedays": E3,
                "aestarttime": E4,
                "aeendtime": E7,
                "aelocation": E5,
                "termcode": Ca
            },
            successF: E6
        });
    }
    function A5(E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/sched-get-schednames",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "termcode": Ca
            },
            successF: E3
        });
    }
    function BE(E5, E3, E4) {
        Em({
            url: "/webreg2/svc/wradapter/get-status-for-level",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "alevel": E5,
                "seqid": E3
            },
            successF: E4
        });
    }
    function EL(E5, E3, E4) {
        Em({
            url: "/webreg2/svc/wradapter/secure/get-major-restrictions",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "subjcode": E5,
                "crsecode": E3,
                "termcode": Ca
            },
            successF: E4
        });
    }
    function Ai(E5, E3, E4) {
        Em({
            url: "/webreg2/svc/wradapter/secure/get-college-restrictions",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "subjcode": E5,
                "crsecode": E3,
                "termcode": Ca
            },
            successF: E4
        });
    }
    function Ez(E5, E3, E4) {
        Em({
            url: "/webreg2/svc/wradapter/secure/get-academic-level-restrictions",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "subjcode": E5,
                "crsecode": E3,
                "termcode": Ca
            },
            successF: E4
        });
    }
    function D(E5, E3, E4) {
        Em({
            url: "/webreg2/svc/wradapter/secure/get-class-level-restrictions",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "subjcode": E5,
                "crsecode": E3,
                "termcode": Ca
            },
            successF: E4
        });
    }
    function Dj(E5, E3, E4) {
        Em({
            url: "/webreg2/svc/wradapter/secure/get-prerequisites",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "subjcode": E5,
                "crsecode": E3,
                "termcode": Ca
            },
            successF: E4
        });
    }
    function CX(E5, E3, E4) {
        Em({
            url: "/webreg2/svc/wradapter/secure/get-academic-level-for-course",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "subjcode": E5,
                "crsecode": E3,
                "termcode": Ca
            },
            successF: E4
        });
    }
    function Bw(E3) {
        Em({
            url: "/webreg2/svc/wradapter/secure/ping-server",
            dataType: "json",
            type: "GET",
            async: true,
            successF: E3
        });
    }
    var AD = {
        "EDITELIG": "/webreg2/svc/wradapter/check-eligibility",
        "DEL-ENRL": "/webreg2/svc/wradapter/secure/drop-enroll",
        "DEL-WAIT": "/webreg2/svc/wradapter/secure/drop-wait",
        "CHG-ENRL": "/webreg2/svc/wradapter/secure/change-enroll",
        "CHG-WAIT": "/webreg2/svc/wradapter/secure/change-wait",
        "ADD-WAIT": "/webreg2/svc/wradapter/secure/add-wait",
        "ADD-ENRL": "/webreg2/svc/wradapter/secure/add-enroll",
        "EDITWAIT": "/webreg2/svc/wradapter/secure/edit-wait",
        "EDITENRL": "/webreg2/svc/wradapter/secure/edit-enroll"
    };
    function Em(E5) {
        var E4 = true;
        var E3 = {
            url: E5.url,
            type: "GET",
            cache: false,
            crossDomain: true,
            error: function (E8, E6, E7) {
                if (E8.status === 0 && E6 == "timeout") {
                    DS("<div class='msg error'><h4>Service Unavailable</h4><span>We're currently experiencing unusually high traffic.  Please try again in a few minutes.</span></div>");
                } else {
                    if (E8.status === 0 || E8.status == 307) {
                        Db();
                    } else {
                        DS("<div class='msg error'><h4>System Error</h4><span>Please try again and if the error persists report the problem at servicedesk@ucsd.edu</span></div>");
                    }
                }
                return;
            },
            success: function (E6) {
                if ((E6.VERIFY != undefined && E6.VERIFY == "FAIL") || E6[0] != undefined && E6[0].VERIFY != undefined && E6[0].VERIFY == "FAIL") {
                    Db();
                }
                if (E4 && ("successF" in E5)) {
                    if (undefined != E6.OPSIV && "FAIL" == E6.OPSIV && undefined != E6.IVORY_UNAVAIL_MSG) {
                        E4 = false;
                        DS("<div class='msg error'><h4>Alert:</h4><span>" + E6.IVORY_UNAVAIL_MSG + "</span></div>");
                    }
                    if (E4) {
                        E5.successF(E6);
                    }
                }
            }
        };
        if ("type" in E5) {
            E3.type = E5.type;
        }
        if ("data" in E5) {
            E3.data = E5.data;
        }
        if ("dataType" in E5) {
            E3.dataType = E5.dataType;
        }
        if ("contentType" in E5) {
            E3.contentType = E5.contentType;
        }
        if ("mimeType" in E5) {
            E3.mimeType = E5.mimeType;
        }
        if ("error" in E5) {
            E3.error = E5.error;
        }
        if ("async" in E5) {
            E3.async = E5.async;
        }
        if ("global" in E5) {
            E3.global = E5.global;
        }
        if ("beforeSend" in E5) {
            E3.beforeSend = E5.beforeSend;
        }
        $.ajax(E3);
    }
    $(document).ajaxStart(function () {
        $("body").addClass("wr-spinner-loading");
    });
    $(document).ajaxStop(function () {
        $("body").removeClass("wr-spinner-loading");
    });
    function DS(E3) {
        if (undefined != E3) {
            $("#dialog-msg-small").dialog("open");
            EB(E3);
        }
    }
    function D7(E5, E7) {
        var E4 = E5.substring(0, 2);
        var E6 = "";
        switch (E4) {
            case "SU": E6 = "Summer Med School";
                break;
            case "S1": E6 = "Summer Session I";
                break;
            case "S2": E6 = "Summer Session II";
                break;
            case "S3": E6 = "Special Summer Session";
                break;
            case "FA": E6 = "Fall Quarter";
                break;
            case "WI": E6 = "Winter Quarter";
                break;
            case "SP": E6 = "Spring Quarter";
                break;
            default: E6 = "Unknown";
                break;
        }
        var E3 = E7.replace(/\D/g, "");
        return E6 + " " + E3.trim();
    }
    $("#wr-term-text").text("Term: " + Ae);
    var B6 = {};
    DF(function (E3) {
        $("#mainpage-select-term").empty();
        B6 = {};
        $.each(E3, function (E5, E7) {
            var E8 = E7.termDesc;
            var E4 = E7.seqId;
            var E6 = E7.termCode;
            B6[E6] = E4;
            E8 = D7(E6, E8);
            if (E7.termCode == Ca) {
                $("<option selected='selected' value='" + E4 + ":::" + E6 + "'>" + E8 + "</option>").appendTo("#mainpage-select-term");
            } else {
                $("<option value='" + E4 + ":::" + E6 + "'>" + E8 + "</option>").appendTo("#mainpage-select-term");
            }
        });
    });
    if (Dd != undefined && Dd.localeCompare("true") == 0) {
        BW(Ca, B6[Ca]);
    }
    var AC = $("#mainpage-select-term option:selected").val();
    var Cr = (AC.split(":::"))[0];
    var AZ = false;
    DF(function (E3) {
        $.each(E3, function (E4, E6) {
            var E5 = E6.termCode;
            if (E5 == Ca) {
                AZ = true;
            }
        });
        if (! AZ) {
            window.location.replace("/webreg2/start");
        }
    });
    y(Ca, Cr, false, function (E3) {
        if ("SUCCESS" != E3.OPS) {
            window.location.replace("/webreg2/start");
        }
    });
    var Ey = false;
    var Eh = false;
    var AV = false;
    var C6 = true;
    EK(function (E3) {
        if (undefined != E3.ELIG_FLAGS) {
            if (1 == E3.ELIG_FLAGS.toString().charAt(0)) {
                Ey = true;
            }
            if (1 == E3.ELIG_FLAGS.toString().charAt(1)) {
                Eh = true;
            }
            if (Ey || Eh) {
                AV = true;
            }
        }
    });
    C(function (E3) {
        if (undefined != E3.GOT_NO_FTYPE) {
            if (E3.GOT_NO_FTYPE) {
                C6 = false;
            }
        }
    });
    var BI;
    function Dn(E3) {
        window.clearTimeout(Br);
        BI = window.setTimeout(CP, E3);
    }
    function CP() {
        y(Ca, B6[Ca], false, function (E3) {
            window.clearTimeout(BI);
            if ("SUCCESS" == E3.OPS) {
                Ey = false;
                Eh = false;
                AV = false;
                C6 = true;
                EK(function (E4) {
                    if (undefined != E4.ELIG_FLAGS) {
                        if (1 == E4.ELIG_FLAGS.toString().charAt(0)) {
                            Ey = true;
                        }
                        if (1 == E4.ELIG_FLAGS.toString().charAt(1)) {
                            Eh = true;
                        }
                        if (Ey || Eh) {
                            AV = true;
                        }
                    }
                });
                C(function (E4) {
                    if (undefined != E4.GOT_NO_FTYPE) {
                        if (E4.GOT_NO_FTYPE) {
                            C6 = false;
                        }
                    }
                });
                if (Eh) {
                    Dn(10000);
                } else {
                    $("#dialog-msg-appttime").dialog("open");
                    t();
                }
            }
        });
    }
    function AL() {
        $(".wrbuttong").button().button("enable");
        $(".wrbuttong").removeAttr("title");
        $(".wrbuttons").button().button("enable");
        $(".wrbuttons").removeAttr("title");
        $(".wrbuttonc").button().button("enable");
        $(".wrbuttonc").removeAttr("title");
        $("." + Cc).removeClass(Cc);
    }
    function t() {
        AL();
        f();
        Cl();
        Ad();
    }
    function AE(FI) {
        var E5 = FI.data.sectionHead;
        var FG = (FI.data.enStatus == "EN") ? true : false;
        var Fa = CZ;
        var FM = FI.data.objid;
        var FO;
        var FZ;
        var FX;
        var E6;
        var FP = false;
        var E9 = false;
        $("#diagclass-class-table-subj").empty();
        $("#diagclass-class-table-title").empty();
        $("#diagclass-class-table-grade-p").empty();
        $("#diagclass-class-table-unit-p").empty();
        $("#diagclass-class-table-code").empty();
        $("#diagclass-class-table-type").empty();
        $("#diagclass-class-table-days").empty();
        $("#diagclass-class-table-time").empty();
        $(".diagclass-class-table-no1234").remove();
        if (FM.toString().match(/^grid:/)) {
            var FL = FM.split(":")[1];
            var FS = $("#list-id-table").jqGrid("getRowData", FL);
            subjCode = FS.SUBJ_CODE;
            FO = FS.CRSE_CODE;
            FZ = FS.CRSE_TITLE;
            FX = FS.SECT_CREDIT_HRS;
            E6 = FS.GRADE_OPTION;
            if (FG) {
                if (FS.GRADE_OPTN_CD_PLUS == "+") {
                    FP = true;
                }
                if (FS.SECT_CREDIT_HRS_PL == "+") {
                    E9 = true;
                }
            }
        } else {
            var FC = $("#calendar-id").fullCalendar("clientEvents", FM)[0];
            subjCode = FC.subjCode;
            FO = FC.crseCode;
            FZ = FC.stitle;
            FX = FC.unitVal.toFixed(2);
            E6 = FC.gradeVal;
            if (FG) {
                FP = FC.gradeEnable;
                E9 = FC.unitEnable;
            }
        }
        if (! FG) {
            var FT = A3(E5);
            FP = FT[0];
            E9 = FT[1];
        }
        var FJ = subjCode + FO;
        var E7 = $("#list-id-table");
        var Fc = E7.jqGrid("getDataIDs");
        var FV = [];
        for (var FU = 0; FU < Fc.length; FU++) {
            var FN = Fc[FU];
            FS = E7.jqGrid("getRowData", FN);
            if (FS.colstatus.match(/plan/i)) {
                continue;
            }
            if (undefined != FS.PB_FRIEND && "true" == FS.PB_FRIEND) {
                continue;
            }
            if (FS.SECTION_HEAD == E5) {
                var FY = CW(FS.FK_CDI_INSTR_TYPE);
                var FR = {
                    key0: FY,
                    key1: FS.DAY_CODE,
                    key2: FS.coltime,
                    key3: FS.SECT_CODE,
                    key4: FS.CRSE_TITLE
                };
                FV.push(FR);
            }
        }
        var E3 = undefined;
        var FB = undefined;
        var FF = undefined;
        var FW = BP(FO);
        if (E9) {
            Ej(E5, subjCode, FO, function (Fd) {
                if ("YES" == Fd.UNIT) {
                    E3 = Fd.UNIT_FROM;
                    FB = Fd.UNIT_TO;
                    FF = Fd.UNIT_INC;
                }
            });
        }
        var FQ = $("#dialog-class").dialog("open");
        FQ.dialog("option", "section", E5);
        FQ.dialog("option", "subjcode", subjCode);
        FQ.dialog("option", "crsecode", FO);
        FQ.dialog("option", "stitle", FZ);
        FQ.dialog("option", "isenroll", FG);
        $("#diagclass-class-table-subj").text(FJ);
        var FK = FV[0].key4.replace("<br>", "");
        $("#diagclass-class-table-title").text(FK);
        $("#dialog-class-button-confirm").button("enable");
        var FD = $("#diagclass-class-table-grade-p");
        FD.empty();
        if (FP) {
            FQ.dialog("option", "gradeenable", true);
            FD.append("<select class='diagxxx-class-table-td-select' id='diagclass-class-table-grade'></select>");
            var FA = $("#diagclass-class-table-grade");
            FA.empty();
            if (Fa == "UN") {
                FA.append($("<option></option>").val("L").html("Letter"));
                FA.append($("<option></option>").val("P").html("Pass / No Pass"));
            } else {
                if (Fa == "GR") {
                    FA.append($("<option></option>").val("L").html("Letter"));
                    FA.append($("<option></option>").val("S").html("Satisfactory / Unsatisfactory"));
                } else {
                    if (Fa == "PH") {
                        CX(subjCode, FO, function (Fd) {
                            if (Fd.ACADEMIC_LEVEL == "GR") {
                                FA.append($("<option></option>").val("L").html("Letter"));
                            } else {
                                FA.append($("<option></option>").val("H").html("Honors Pass / Fail"));
                            } FA.append($("<option></option>").val("S").html("Satisfactory / Unsatisfactory"));
                        });
                    }
                }
            } FA.val(Av(E6));
        } else {
            FD.text(E6);
            FQ.dialog("option", "gradeenable", false);
        } FQ.dialog("option", "oldgrade", E6);
        var E8 = $("#diagclass-class-table-unit-p");
        E8.empty();
        if (E9 && undefined != E3 && undefined != FB && undefined != FF) {
            FQ.dialog("option", "unitenable", true);
            E8.append("<select class='diagxxx-class-table-td-select' id='diagclass-class-table-unit' ></select>");
            var Fb = $("#diagclass-class-table-unit");
            Fb.empty();
            var FH = Er(E3, FB, FF, FX);
            $.each(FH.ob2, function (Fd, Fe) {
                Fb.append($("<option></option>").val(Fd).html(Fe));
            });
            Fb.val(FH.ob1);
        } else {
            E8.text(FX);
            FQ.dialog("option", "unitenable", false);
        } FQ.dialog("option", "oldunit", FX);
        var FE = $("#diagclass-class-table");
        $(".diagclass-class-table-no1234").remove();
        $.each(FV, function (Fe, Ff) {
            if (0 == Fe) {
                $("#diagclass-class-table-code").text(Ff.key3);
                $("#diagclass-class-table-mt").text(Ff.key0);
                $("#diagclass-class-table-days").text(Ff.key1);
                $("#diagclass-class-table-time").text(Ff.key2);
            } else {
                if ("" == Ff.key0.trim() && "" == Ff.key1.trim() && "" == Ff.key2.trim()) {
                    return;
                }
                var Fd = '<tr class="diaclass-class-table-extra-row diagclass-class-table-no1234" >';
                FE.append(Fd + '<td class="diagclass-class-table-empty"></td>' + '<td class="diagclass-class-table-empty"></td>' + '<td class="diagclass-class-table-empty"></td>' + '<td class="diagclass-class-table-empty"></td>' + "<td>" + Ff.key3 + "</td>" + "<td>" + CW(Ff.key0) + "</td>" + "<td>" + Ff.key1 + "</td>" + "<td>" + Ff.key2 + "</td>" + "</tr>");
            }
        });
        var E4 = (FG) ? DC : C1;
        B2(E5, subjCode.trim(), FO.trim(), E4, "");
        EB("<b>Change grading option and/or units</b><br />");
    }
    function Aa(E4) {
        var FF = (E4.data.enStatus == "EN") ? true : false;
        var FG = E4.data.sectionHead;
        var FN = "";
        var E5 = false;
        var E9 = undefined;
        var FJ = Ca.match(/^S1/i);
        var FH = Ca.match(/^S2/i);
        if (FF && BM && CQ <= 1) {
            var FA = "20" + Ca.substring(2, 4);
            FA = FA - 1;
            var FJ = Ca.match(/^S1/i);
            var FH = Ca.match(/^S2/i);
            Aj(FA, function (FQ) {
                if (FQ.length > 0) {
                    if (FQ[0].DROP_OK !== undefined) {
                        return false;
                    }
                }
                $.each(FQ, function (FR, FS) {
                    if (undefined == E9) {
                        if (undefined != FS.ERR_MSG) {
                            E5 = true;
                            E9 = FS.ERR_MSG;
                            return false;
                        }
                    }
                });
            });
        }
        var FD = "";
        var FL = [];
        var E8 = $("#list-id-table");
        var FI = E8.jqGrid("getDataIDs");
        for (var FM = 0; FM < FI.length; FM++) {
            var FC = FI[FM];
            rowData = E8.jqGrid("getRowData", FC);
            if (rowData.colstatus.match(/plan/i)) {
                continue;
            }
            if (undefined != rowData.PB_FRIEND && "true" == rowData.PB_FRIEND) {
                continue;
            }
            if (rowData.SECTION_HEAD == FG) {
                FD = CW(rowData.FK_CDI_INSTR_TYPE);
                if (undefined == FD || FD.trim() == "") {
                    FD = rowData.FK_CDI_INSTR_TYPE;
                }
                var E6 = {
                    key0: rowData.colsubj,
                    key1: rowData.CRSE_TITLE,
                    key2: FD,
                    key3: rowData.DAY_CODE,
                    key4: rowData.coltime,
                    key5: rowData.SUBJ_CODE,
                    key6: rowData.CRSE_CODE,
                    key7: Af(rowData.GRADE_OPTION),
                    key8: rowData.SECT_CREDIT_HRS,
                    key9: rowData.SECT_CODE
                };
                FL.push(E6);
            }
        }
        if (E5) {
            var E3 = "FAIL: Attempting to drop the last summer class for financial student.";
            var E7 = "<div class='msg error'><h4>Request Unsuccessful</h4><span>" + E3 + "</span></div>";
            if (undefined != E9) {
                E3 = "FAIL: " + E9;
                E7 = "<div class='msg error'><h4>Request Unsuccessful</h4><span>" + E9 + "</span></div>";
            }
            var FK = FF ? Bu : M;
            B2(FG, FL[0].key5, FL[0].key6, FK, E3);
            var FE = $("#dialog-after-action").dialog("open");
            FE.dialog("option", "buttons", O);
            FE.dialog("option", "actionevent", E7);
            EB(E7);
            return;
        }
        if ((FJ || FH || X) && CN(FG)) {
            var E3 = DE[FG].message;
            var E7 = "<div class='msg error'><h4>Request Unsuccessful</h4><span>" + E3 + "</span></div>";
            E3 = "FAIL: " + E3;
            var FK = FF ? Bu : M;
            B2(FG, FL[0].key5, FL[0].key6, FK, E3);
            var FE = $("#dialog-after-action").dialog("open");
            FE.dialog("option", "buttons", O);
            FE.dialog("option", "actionevent", E7);
            EB(E7);
            return;
        }
        if (FF) {
            CK(FG, function (FQ) {
                if ("Y" == FQ.WARN_DROP) {
                    FN = FQ.MSG;
                }
            });
        }
        var FB = $("#dialog-confirm-drop").dialog("open");
        FB.dialog("option", "subjcrse", FL[0].key0);
        FB.dialog("option", "subjcode", FL[0].key5);
        FB.dialog("option", "crsecode", FL[0].key6);
        FB.dialog("option", "stitle", FL[0].key1);
        FB.dialog("option", "section", FG);
        FB.dialog("option", "isenroll", FF);
        $("#diagdrop-class-table-subj").empty();
        $("#diagdrop-class-table-title").empty();
        $("#diagdrop-class-table-grade-p").empty();
        $("#diagdrop-class-table-unit-p").empty();
        $("#diagdrop-class-table-code").empty();
        $("#diagdrop-class-table-type").empty();
        $("#diagdrop-class-table-days").empty();
        $("#diagdrop-class-table-time").empty();
        $(".diagdrop-class-table-no1234").remove();
        $("#diagdrop-class-table-subj").text(FL[0].key0);
        var FP = FL[0].key1.replace("<br>", "");
        $("#diagdrop-class-table-title").text(FP);
        $("#diagdrop-class-table-grade-p").text(FL[0].key7);
        $("#diagdrop-class-table-unit-p").text(FL[0].key8);
        $("#diagdrop-class-table-code").text(FL[0].key9);
        $("#diagdrop-class-table-type").text(FL[0].key2);
        $("#diagdrop-class-table-days").text(FL[0].key3);
        $("#diagdrop-class-table-time").text(FL[0].key4);
        var FO = $("#diagdrop-class-table");
        $(".diagdrop-class-table-extra-row").empty();
        $.each(FL.slice(1), function (FR, FS) {
            var FQ = '<tr class="diagdrop-class-table-extra-row diagdrop-class-table-no1234" >';
            FO.append(FQ + '<td class="diagclass-class-table-empty"></td>' + '<td class="diagclass-class-table-empty"></td>' + '<td class="diagclass-class-table-empty"></td>' + '<td class="diagclass-class-table-empty"></td>' + "<td>" + FS.key9 + "</td>" + "<td>" + FS.key2 + "</td>" + "<td>" + FS.key3 + "</td>" + "<td>" + FS.key4 + "</td>" + "</tr>");
        });
        if (FF) {
            B2(FG, FL[0].key5, FL[0].key6, Bu, FN);
            D4("<div class='msg error'><h4>You are about to drop this class.</h4>" + FN + "<b>You will be dropped from all components of this class.<br />Are you sure you would like to drop this class?</b></div>");
        } else {
            B2(FG, FL[0].key5, FL[0].key6, M, "");
            D4("<div class='msg error'><h4>You are about to drop this wait-listed class.</h4><b>You will be dropped from all components of this class.<br />Are you sure you would like to drop this class?</b></div>");
        }
    }
    function CN(E5) {
        var E3 = false;
        if (DE.hasOwnProperty(E5)) {
            E3 = DE[E5].flag;
        } else {
            var E4 = "";
            DE[E5] = {};
            BS(E5, function (E6) {
                if (E6.ACAD_INTEGRITY_FL == "X") {
                    E3 = true;
                    DE[E5].message = E6.ERROR_MESSAGE;
                }
            });
            DE[E5].flag = E3;
        }
        return E3;
    }
    function B1(E6, E7, E3) {
        var E9 = $("#list-id-table");
        var E5 = E9.jqGrid("getDataIDs");
        for (var E4 = 0; E4 <= E5.length; E4++) {
            var E8 = E5[E4];
            rowData = E9.jqGrid("getRowData", E8);
            if (rowData.SECTION_HEAD == E6) {
                if (rowData["GRADE_OPTION"].trim() != "") {
                    E9.jqGrid("setCell", E8, "GRADE_OPTION", DI(E7), "", {"title": Af(E7)});
                    E9.jqGrid("setCell", E8, "SECT_CREDIT_HRS", E3);
                }
            }
        }
    }
    function CW(E4) {
        var E3;
        switch (E4) {
            case "LE": E3 = "Lecture";
                break;
            case "DI": E3 = "Discussion";
                break;
            case "LA": E3 = "Lab";
                break;
            case "IN": E3 = "Independent Study";
                break;
            case "SE": E3 = "Seminar";
                break;
            case "AC": E3 = "Activity";
                break;
            case "CL": E3 = "Clinical Clerkship";
                break;
            case "CN": E3 = "Clinic";
                break;
            case "CO": E3 = "Conference";
                break;
            case "FW": E3 = "Fieldwork";
                break;
            case "IT": E3 = "Internship";
                break;
            case "OP": E3 = "Outside Preparation";
                break;
            case "PR": E3 = "Practicum";
                break;
            case "SA": E3 = "Study Abroad";
                break;
            case "SI": E3 = "Simultaneous Enrlmnt-Other UC";
                break;
            case "ST": E3 = "Studio";
                break;
            case "TU": E3 = "Tutorial";
                break;
            case "FI": E3 = "Final Exam";
                break;
            case "MI": E3 = "Midterm";
                break;
            case "FM": E3 = "Film Sessions";
                break;
            case "PB": E3 = "Problem Sessions";
                break;
            case "OT": E3 = "Other Sessions";
                break;
            case "RE": E3 = "Review Sessions";
                break;
            case "MU": E3 = "Make-up Sessions";
                break;
            default: E3 = E4;
        }
        return E3;
    }
    function Af(E4) {
        var E3;
        switch (E4) {
            case "L": E3 = "Letter";
                break;
            case "P": E3 = "Pass / No Pass";
                break;
            case "P/NP": E3 = "Pass / No Pass";
                break;
            case "S": E3 = "Satisfactory / Unsatisfactory";
                break;
            case "S/U": E3 = "Satisfactory / Unsatisfactory";
                break;
            case "H": E3 = "Honors Pass / Fail";
                break;
            default: E3 = E4;
        }
        return E3;
    }
    function Dx(E4) {
        var E3 = "";
        if (E4.match(/lett/i)) {
            E3 = "L";
        } else {
            if (E4.match(/hono/i)) {
                E3 = "H";
            } else {
                if (E4.match(/pass/i)) {
                    E3 = "P";
                } else {
                    if (E4.match(/sati/i)) {
                        E3 = "S";
                    }
                }
            }
        }
        return E3;
    }
    function DI(E4) {
        var E3;
        switch (E4) {
            case "P": E3 = "P/NP";
                break;
            case "S": E3 = "S/U";
                break;
            default: E3 = E4;
                break;
        }
        return E3;
    }
    function Av(E4) {
        var E3;
        switch (E4) {
            case "P/NP": E3 = "P";
                break;
            case "S/U": E3 = "S";
                break;
            default: E3 = E4;
                break;
        }
        return E3;
    }
    function CG(E7, E4) {
        var E6 = "";
        var E3 = '<span id="checkText">' + E6 + "</span>";
        var E5 = 0;
        while (E3.width() < E4) {
            E6 += entry.slice(E5, E5 + 1);
            E3 = '<span id="checkText">' + E6 + "</span>";
            E5++;
        }
        return E3;
    }
    function EM(E3) {
        var E4 = "";
        if (/1/.test(E3)) {
            E4 = E4 + "M";
        }
        if (/2/.test(E3)) {
            E4 = E4 + "Tu";
        }
        if (/3/.test(E3)) {
            E4 = E4 + "W";
        }
        if (/4/.test(E3)) {
            E4 = E4 + "Th";
        }
        if (/5/.test(E3)) {
            E4 = E4 + "F";
        }
        if (/6/.test(E3)) {
            E4 = E4 + "Sa";
        }
        if (/7/.test(E3)) {
            E4 = E4 + "Su";
        }
        return E4;
    }
    function Q(E3, E5, E4) {
        var E8 = E3.split("-");
        var E7 = ("0" + E5).slice(-2);
        var E6 = ("0" + E4).slice(-2);
        return new Date(E8[0], (E8[1] - 1), E8[2], E7, E6).getTime();
    }
    function EN(E3) {
        if (":" == E3) {
            return "TBA";
        }
        return Cs(E3).replace(/p$/, " .p.m").replace(/a$/, " a.m.");
    }
    function CY(E3) {
        if (":" == E3) {
            return "TBA";
        }
        return Cs(E3).replace(/p$/, " p.m. PT").replace(/a$/, " a.m. PT");
    }
    function Cs(E8) {
        if (undefined == E8) {
            return "TBA";
        }
        var E4 = "";
        var E6 = "";
        if (-1 == E8.indexOf(":")) {
            E4 = E8.substring(0, 2);
            E6 = String("0" + E8.substring(2)).slice(-2);
        } else {
            var E3 = E8.split(":");
            E4 = E3[0];
            E6 = String("0" + E3[1]).slice(-2);
        }
        var E5 = "a";
        var E7 = "";
        if (E4 > 12) {
            E5 = "p";
            E4 = E4 - 12;
        } else {
            if (E4 == 12) {
                E5 = "p";
            }
        } E7 = E4 + ":" + E6 + E5;
        return E7;
    }
    function D8(E6) {
        if ("" == E6 || undefined == E6) {
            return "";
        }
        var E4 = E6.substr(0, E6.length - 2);
        var E5 = E6.substr(E6.length - 2).toLowerCase();
        var E3 = E4.split(":");
        if ("pm" == E5 && E3[0] != "12") {
            E3[0] = Number(E3[0]) + 12;
        }
        E3[0] = String("0" + E3[0]).slice(-2);
        return E3[0] + "" + E3[1];
    }
    function I(E3, E5, E4, E7) {
        var E9 = "TBA";
        var E6 = E3 + ":" + E5;
        var E8 = E4 + ":" + E7;
        E6 = Cs(E6);
        E8 = Cs(E8);
        if (E3 == 0 && E5 == 0 && E4 == 0 && E7 == 0) {
            E9 = "TBA";
        } else {
            E9 = E6 + "-" + E8;
        }
        return E9;
    }
    function Az(E4) {
        if (null == E4 || undefined == E4) {
            return "TBA";
        }
        var E3 = E4.split("/");
        E3[0] = String("0" + E3[0]).slice(-2);
        E3[1] = String("0" + E3[1]).slice(-2);
        return E3[2] + "-" + E3[0] + "-" + E3[1];
    }
    function Ay(E4) {
        if (null == E4 || undefined == E4) {
            return "TBA";
        }
        var E3 = E4.split("-");
        E3[1] = String("0" + E3[1]).slice(-2);
        E3[2] = String("0" + E3[2]).slice(-2);
        return E3[1] + "/" + E3[2] + "/" + E3[0];
    }
    function Ax(E4) {
        if (null == E4 || undefined == E4) {
            return "TBA";
        }
        var E3 = E4.split("-");
        E3[1] = String("0" + E3[1]).slice(-2);
        var E5 = E3[1];
        switch (E3[1]) {
            case "01": E5 = "January";
                break;
            case "02": E5 = "February";
                break;
            case "03": E5 = "March";
                break;
            case "04": E5 = "April";
                break;
            case "05": E5 = "May";
                break;
            case "06": E5 = "June";
                break;
            case "07": E5 = "July";
                break;
            case "08": E5 = "August";
                break;
            case "09": E5 = "September";
                break;
            case "10": E5 = "October";
                break;
            case "11": E5 = "November";
                break;
            case "12": E5 = "December";
                break;
        }
        return E5 + " " + E3[2] + " " + E3[0];
    }
    function Ce(E5) {
        if (null == E5 || undefined == E5) {
            return "TBA";
        }
        var E7 = E5.replace(/\D/g, "");
        var FA = E7.substr(0, 4);
        var E8 = E7.substr(4, 2);
        E8 = E8 - 1;
        var E3 = E7.substr(6, 2);
        var E6 = new Date();
        E6.setFullYear(FA, E8, E3);
        var E9 = E6.getDay();
        var E4 = "";
        switch (E9) {
            case 0: E4 = "Sunday";
                break;
            case 1: E4 = "Monday";
                break;
            case 2: E4 = "Tuesday";
                break;
            case 3: E4 = "Wednesday";
                break;
            case 4: E4 = "Thursday";
                break;
            case 5: E4 = "Friday";
                break;
            case 6: E4 = "Saturday";
                break;
            default: E4 = E9.toString();
        }
        return E4;
    }
    function K(E5) {
        var E6 = E5.substr(1, 1);
        var E3 = E5.substr(2, 2);
        var E7 = E5.substr(4, 2);
        var E4 = A(E6);
        return new Date(E4[0], E4[1], E4[2], E3, E7);
    }
    function A(E6) {
        var E4 = Ep;
        if (0 == Ep) {
            E4 = 7;
        }
        var E5 = E4 - E6;
        var E3 = Ek - E5;
        return [Eb, Eg, E3];
    }
    function EB(E3) {
        var E4 = $(".dialog-tip-class");
        E4.html(E3);
    }
    function DX(E3) {
        var E4 = $(".dialog-tip-class-2");
        E4.html(E3);
    }
    function D4(E3) {
        var E4 = $(".dialog-tip-class-alert");
        E4.html(E3);
    }
    function u(E3) {
        var E4 = $(".dialog-tip-class-2");
        E4.html("");
    }
    function DV() {
        $(".dialog-tip-class").empty();
    }
    function AJ(E3) {
        $("#wr-search-notice-msg").html("<b>" + E3 + "</b>");
        $("#wr-search-notice").show();
    }
    function CJ(E3) {
        $("#search-pager-dropdown").hide();
        $("#search-pager-dropdown-header").hide();
        $("#search-pager").empty();
        $("#search-pager").hide();
        AJ(E3);
    }
    function BH(E6) {
        var E4 = window.location.search.substring(1);
        var E3 = E4.split("&");
        for (var E5 = 0; E5 < E3.length; E5++) {
            var E7 = E3[E5].split("=");
            if (E7[0] == E6) {
                return E7[1];
            }
        }
    }
    function BP(E5) {
        var E6 = E5.split("-");
        if (E6.length > 1) {
            var E4 = BP(E6[1]);
            if (E4.match(/[A-Za-z]+/) === null) {
                E4 += "ZZ";
            }
            return BP(E6[0]) + "-" + BP(E4);
        }
        var E3 = E5.replace(/[^0-9]|\s/g, "");
        var E7 = E5.replace(/[0-9]|\s/g, "");
        E3 = String("   " + E3).slice(-3);
        E5 = E3 + E7;
        return E5;
    }
    function Ac(FB, E5, FA, E7, E6) {
        var E9 = (E5.toString().match(/^[1-9]/) || E5 == "<b>") ? true : false;
        var E4 = ("Y" == FA) ? true : false;
        var E3 = false;
        var FC = false;
        var E8 = false;
        var FD = false;
        if (undefined != Dz && Dz.length > 0) {
            $.each(Dz, function (FE, FF) {
                if (FF.SUBJ_CODE.trim() == E7.trim() && FF.CRSE_CODE.trim() == E6.trim()) {
                    if (undefined != FF.SECTION_NUMBER && FB != FF.SECTION_NUMBER) {
                        return;
                    }
                    if ("AL" == FF.OVERRIDE_TYPE_1 || "AL" == FF.OVERRIDE_TYPE_2 || "AL" == FF.OVERRIDE_TYPE_3) {
                        FC = true;
                    }
                    if ("EL" == FF.OVERRIDE_TYPE_1 || "EL" == FF.OVERRIDE_TYPE_2 || "EL" == FF.OVERRIDE_TYPE_3) {
                        E8 = true;
                    }
                    if ("SE" == FF.OVERRIDE_TYPE_1 || "SE" == FF.OVERRIDE_TYPE_2 || "SE" == FF.OVERRIDE_TYPE_3) {
                        FD = true;
                    }
                }
            });
        }
        if (FC) {
            return true;
        }
        if (E8) {
            E9 = true;
        }
        if (FD) {
            E4 = false;
        }
        if (E9 && ! E4) {
            return true;
        } else {
            return false;
        }
    }
    function EQ() {
        e();
        BG();
        AK();
        DN();
        A4();
        A0();
        Ak();
        CO();
    }
    function BY() {
        A4();
        DN();
    }
    function CO() {
        c();
        B0();
        DD();
    }
    function BG() {
        AM();
        B4();
        Ec();
    }
    function Ec() {
        if (Ct.length > 0 || EE.length > 0) {
            $(".wr-schedule-conflict-header").html((Ct.length + EE == 1) ? DM : D0);
            $(".wr-schedule-conflict").html("<ul>");
            $.each(Ct, function (E3, E4) {
                $(".wr-schedule-conflict").append("<li>" + E4[0].SUBJ_CODE.trim() + " " + E4[0].CRSE_CODE.trim() + ((E4[0].FK_CDI_INSTR_TYPE == "MI") ? " Midterm" : "") + " and " + E4[1].SUBJ_CODE.trim() + " " + E4[1].CRSE_CODE.trim() + ((E4[1].FK_CDI_INSTR_TYPE == "MI") ? " Midterm" : "") + "</li>");
            });
            $.each(EE, function (E3, E4) {
                $(".wr-schedule-conflict").append("<li>" + E4[0].SUBJ_CODE.trim() + " " + E4[0].CRSE_CODE.trim() + " Final and " + E4[1].SUBJ_CODE.trim() + " " + E4[1].CRSE_CODE.trim() + " Final</li>");
            });
            $(".wr-schedule-conflict").append("</ul>");
            $("#wr-conflict-alert-box-id-div").show();
            $("#wr-conflict-alert-box-id-div-print").addClass("print-conflicts");
        } else {
            $("#wr-conflict-alert-box-id-div").hide();
            $("#wr-conflict-alert-box-id-div-print").removeClass("print-conflicts");
        }
    }
    function DD() {
        if (G) {
            $("#wr-finals-alert-box-id-div").show();
        } else {
            $("#wr-finals-alert-box-id-div").hide();
        }
    }
    function C8() {
        e();
        BG();
        AK();
        CO();
    }
    function CB() {
        e();
        BG();
        A4();
        A0();
        CO();
    }
    function Bh() {
        e();
        BG();
        Ak();
        CO();
    }
    function A3(E4) {
        var E3 = false;
        var E5 = false;
        if (undefined != Bt[E4]) {
            E3 = Bt[E4][0];
            E5 = Bt[E4][1];
        } else {
            Bt[E4] = [];
            Bt[E4].length = 0;
            Bp(E4, function (E6) {
                if ("SUCCESS" == E6.OPS) {
                    if ("YES" == E6.GRADE) {
                        E3 = true;
                        Bt[E4][0] = true;
                    } else {
                        Bt[E4][0] = false;
                    }
                    if ("YES" == E6.UNIT) {
                        E5 = true;
                        Bt[E4][1] = true;
                    } else {
                        Bt[E4][1] = false;
                    }
                }
            });
        }
        return [E3, E5];
    }
    function BW(E4, E3) {
        Dt(E4, E3, function (E8) {
            if (E8.length > 1) {
                var E7 = $("#dialog-multi-level").dialog("open");
                E7.dialog("option", "termCode", E4);
                E7.dialog("option", "seqId", E3);
                var E5 = $("#dialog-multi-level-div");
                E5.empty();
                E5.append("<select id='dialog-multi-level-select' style='text-algin:left'></select>");
                var E6 = $("#dialog-multi-level-select");
                $.each(E8, function (FA, FB) {
                    var FC = FB.ACADEMIC_LEVEL;
                    switch (FB.ACADEMIC_LEVEL) {
                        case "UN": FC = "Undergraduate";
                            break;
                        case "GR": FC = "Graduate";
                            break;
                        case "PH": FC = "Doctoral";
                            break;
                        case "MD": FC = "Medical";
                            break;
                    }
                    E6.append($("<option></option>").val(FB.ACADEMIC_LEVEL).html(FC));
                });
                $("#dialog-multi-level-tip").html("<b>Please select an academic level:</b>");
                return;
            } else {
                if (undefined != E8[0].ERROR_MESSAGE) {
                    DS("<div class='msg error'><h4>Alert:</h4><span>" + E8[0].ERROR_MESSAGE + "</span></div>");
                    En(E4, E8[0].ERROR_MESSAGE);
                    $("#mainpage-select-term").val(B6[Ca]);
                } else {
                    var E9 = E8[0].ACADEMIC_LEVEL;
                    B9(E4, E9, E3);
                }
            }
        });
    }
    function B9(E4, E5, E3) {
        y(E4, E3, true, function (E7) {
            if ("SUCCESS" == E7.OPS) {
                Ao(function (FA) {
                    var FC = FA.WARN_MSG;
                    if (undefined != FC && "" != FC.trim()) {
                        var E9 = {
                            "p1": E4,
                            "p2": E5,
                            "p4": E3
                        };
                        var FB = $.param(E9);
                        window.location.replace("/webreg2/start?" + FB);
                    } else {
                        var E9 = {
                            "p1": E4,
                            "p2": E5
                        };
                        var FB = $.param(E9);
                        window.location.replace("/webreg2/main?" + FB);
                    }
                });
            } else {
                var E6 = {
                    "p1": E4,
                    "p2": E5,
                    "p4": E3
                };
                var E8 = $.param(E6);
                window.location.replace("/webreg2/start?" + E8);
            }
        });
    }
    function s() {
        $("#msg-preauth").empty();
        $.each(Dz, function (FA, FC) {
            var E4 = FC.SUBJ_CODE;
            var E3 = FC.CRSE_CODE;
            var E9 = FC.SECTION_NUMBER;
            var E8 = FC.OVERRIDE_TYPE_1;
            var E7 = FC.OVERRIDE_TYPE_2;
            var E6 = FC.OVERRIDE_TYPE_3;
            if (null == E4 || null == E3 || undefined == E4 || undefined == E3) {
                return;
            }
            if (E8 != "LA" && E7 != "LA" && E6 != "LA") {
                return;
            }
            var E5 = "";
            if (undefined != E9 && E9.toString().match(/^\d+$/)) {
                E5 = ", SECTION " + E9;
            }
            if (BL(undefined, E4, E3, "ENWT")[0]) {
                return;
            }
            var FD = "";
            if (FA > 0) {
                FD = "<br>";
            }
            var FB = "YOU HAVE BEEN PREAUTHORIZED TO ENROLL in " + E4 + E3.trim() + E5;
            $("#msg-preauth").append(FD + '<span id="preauthid_' + FA + '"><a href="#">' + FB + "</a></span>");
            $("#preauthid_" + FA).click(function () {
                EC(E4, E3, E9);
            });
        });
    }
    function BL(E9, E5, E3, E7) {
        var FB = [false, null];
        var FA = (undefined == E5 || undefined == E3) ? true : false;
        switch (E7) {
            case "ENWT":
                var E4 = "EN|WT";
                break;
            case "PL":
                var E4 = "PL";
                break;
            case "EN":
                var E4 = "EN";
                break;
            case "WT":
                var E4 = "WT";
                break;
            case "ALL":
                var E4 = "EN|WT|PL";
                break;
        }
        var E6 = new RegExp(E4);
        if (undefined != E9 && ! E9.toString().match(/^\s*\d{6}\s*$/)) {
            var E8 = E9.toString().split("\n")[0];
            E9 = E8.replace(/^.*(\d{6}).*$/, "$1").trim();
        }
        if (FA) {
            if (undefined != C4[E9]) {
                if ("ALL" == E7) {
                    FB[0] = true;
                    FB[1] = C4[E9];
                } else {
                    if (C4[E9].match(E6)) {
                        FB[0] = true;
                    }
                }
            }
        } else {
            $.each(V, function (FC, FD) {
                E5 = E5.trim();
                E3 = E3.trim();
                if (FD.SUBJ_CODE.trim() == E5 && FD.CRSE_CODE.trim() == E3 && FD.ENROLL_STATUS.match(E6)) {
                    FB[0] = true;
                    return false;
                }
            });
        }
        return FB;
    }
    function Er(FB, E4, E3, E9) {
        var E5 = {};
        E5["key0"] = Number(FB).toFixed(2);
        var E8 = FB;
        var E7 = "";
        var FA = (E4 - FB) * (1 / E3);
        for (var E6 = 0; E6 <= FA; E6++) {
            if (Number(E8) == Number(E9)) {
                E7 = "key" + E6;
            }
            E8 = E8 + E3;
            if (E8 > E4) {
                break;
            }
            E5["key" + (
                    E6 + 1
                )] = Number(E8).toFixed(2);
        }
        return {ob1: E7, ob2: E5};
    }
    var EF = {
        step: "15",
        minTime: "7:00am",
        maxTime: "10:00pm",
        useSelect: true,
        noneOption: "none",
        showOnFocus: true
    };
    var DQ = {
        step: "5",
        minTime: "7:00am",
        maxTime: "10:00pm",
        useSelect: true,
        noneOption: "none",
        showOnFocus: true
    };
    $("#dialog-multi-level").dialog({
        autoOpen: false,
        maxWidth: 600,
        position: {
            my: "center",
            at: "center",
            of: window
        },
        height: "auto",
        width: 600,
        modal: true,
        closeOnEscape: false,
        buttons: {
            Cancel: {
                text: "Cancel",
                click: function () {
                    $(this).dialog("close");
                }
            },
            Confirm: {
                text: "Go",
                click: function () {
                    $(this).dialog("close");
                    var E5 = $("#dialog-multi-level-select option:selected").val();
                    var E4 = $(this);
                    var E3 = E4.dialog("option", "seqId");
                    BE(E5, E3, function (E7) {
                        if (undefined != E7.ERROR_MESSAGE) {
                            DS("<div class='msg error'><h4>Alert:</h4><span>" + E7.ERROR_MESSAGE + "</span></div>");
                        } else {
                            var E6 = E4.dialog("option", "termCode");
                            B9(E6, E5, E3);
                        }
                    });
                    return;
                }
            }
        }
    });
    $("#dialog-msg").dialog({
        autoOpen: false,
        maxWidth: 800,
        position: {
            my: "center",
            at: "center",
            of: window
        },
        height: "auto",
        width: 800,
        modal: true,
        closeOnEscape: false,
        buttons: {
            but1: {
                text: "Close",
                id: "dialog-msg-close",
                click: function () {
                    $(this).dialog("close");
                }
            }
        }
    });
    $("#dialog-msg-appttime").dialog({
        autoOpen: false,
        maxWidth: 800,
        position: {
            my: "center",
            at: "center",
            of: window
        },
        height: "auto",
        width: 800,
        modal: true,
        closeOnEscape: false,
        buttons: {
            but1: {
                text: "Close",
                id: "dialog-msg-close",
                click: function () {
                    $(this).dialog("close");
                }
            }
        }
    });
    $("#dialog-msg-small-redirect").dialog({
        autoOpen: false,
        maxWidth: 600,
        position: {
            my: "center",
            at: "center",
            of: window
        },
        height: "auto",
        width: 500,
        modal: true,
        closeOnEscape: false,
        buttons: {
            but1: {
                text: "Close",
                id: "dialog-msg-close",
                click: function () {
                    $(this).dialog("close");
                    window.location = "/webreg2";
                }
            }
        }
    });
    $("#dialog-msg-small").dialog({
        autoOpen: false,
        maxWidth: 600,
        position: {
            my: "center",
            at: "center",
            of: window
        },
        height: "auto",
        width: 500,
        modal: true,
        closeOnEscape: false,
        buttons: {
            but1: {
                text: "Close",
                id: "dialog-msg-close",
                click: function () {
                    $(this).dialog("close");
                }
            }
        }
    });
    $("#dialog-msg-appt").dialog({
        autoOpen: false,
        maxWidth: 900,
        position: {
            my: "center",
            at: "center",
            of: window
        },
        height: "auto",
        width: 900,
        modal: true,
        closeOnEscape: false,
        buttons: {
            but1: {
                text: "Close",
                id: "dialog-msg-close",
                click: function () {
                    $(this).dialog("close");
                }
            }
        }
    });
    var O = [
        {
            text: "Close",
            id: "dialog-after-action-close",
            click: function () {
                $(this).dialog("close");
                return;
            }
        }, {
            text: "Send Me Email Confirmation",
            id: "dialog-after-action-email",
            click: function () {
                $(this).dialog("close");
                var E3 = $(this).dialog("option", "actionevent");
                ET(E3, function (E4) {
                    var E5 = "";
                    if ("YES" == E4.SUCCESS) {
                        E5 = "<div class='msg confirm'><h4>Email Sent Successfully</h4><span>Mail sent to " + E4.MAIL_ADDR + "</span></div>";
                    } else {
                        if (undefined != E4.REASON) {
                            E5 = "<div class='msg error'><h4>Email Sent Unsuccessfully</h4><span>" + E4.REASON + "</span></div>";
                        } else {
                            E5 = "<div class='msg error'><h4>Email Sent Unsuccessfully</h4><span>Your confirmation email was unable to be sent.</span></div>";
                        }
                    }
                    $("#dialog-msg").dialog("open");
                    EB(E5);
                    return;
                });
            }
        }
    ];
    $("#dialog-after-action").dialog({
        autoOpen: false,
        maxWidth: 800,
        position: {
            my: "center",
            at: "center",
            of: window
        },
        height: "auto",
        width: 800,
        modal: true,
        closeOnEscape: false,
        buttons: O
    });
    $("#dialog-restrictions").dialog({
        autoOpen: false,
        maxWidth: 800,
        position: {
            my: "center",
            at: "center",
            of: window
        },
        height: "auto",
        width: 800,
        modal: true,
        closeOnEscape: false,
        buttons: {
            but1: {
                text: "Close",
                id: "dialog-msg-close",
                click: function () {
                    $(this).dialog("close");
                }
            }
        }
    });
    $("#dialog-prereqs").dialog({
        autoOpen: false,
        maxWidth: 800,
        position: {
            my: "center",
            at: "center",
            of: window
        },
        height: "auto",
        maxHeight: 500,
        width: 800,
        modal: true,
        closeOnEscape: false,
        buttons: {
            but1: {
                text: "Close",
                id: "dialog-msg-close",
                click: function () {
                    $(this).dialog("close");
                }
            }
        }
    });
    $("#dialog-confirm-drop").dialog({
        autoOpen: false,
        maxWidth: 1050,
        position: {
            my: "center",
            at: "center",
            of: window
        },
        height: "auto",
        width: 1050,
        modal: true,
        closeOnEscape: false,
        buttons: {
            but1: {
                text: "Cancel",
                click: function () {
                    $(this).dialog("close");
                    return;
                }
            },
            but2: {
                text: "Drop",
                click: function () {
                    $(this).dialog("close");
                    var FA = $(this).dialog("option", "section");
                    var E5 = $(this).dialog("option", "isenroll");
                    var E9 = $(this).dialog("option", "subjcrse");
                    var E6 = $(this).dialog("option", "subjcode");
                    var E4 = BP($(this).dialog("option", "crsecode"));
                    var E3 = $(this).dialog("option", "stitle");
                    var FB = E6.toString().trim();
                    var E7 = E4.toString().trim();
                    var E8 = E3.toString().trim();
                    crseCodeWellForm = BP(E4);
                    CR(E5, FA, E6, crseCodeWellForm, function (FF) {
                        var FH = "";
                        if ("SUCCESS" == FF.OPS) {
                            EQ();
                            s();
                            if (E5) {
                                FH = "<div class='msg confirm'><h4>Request Successful</h4><span>Dropped " + E6.trim() + " " + E4.trim() + " " + E8 + ", Section " + FA + ".</span></div>";
                            } else {
                                FH = "<div class='msg confirm'><h4>Request Successful</h4><span>Dropped wait-listed class " + E6.trim() + " " + E4.trim() + " " + E8 + ", Section " + FA + ".</span></div>";
                            }
                            if (Ew[0].grid) {
                                if (undefined != BX) {
                                    BC[BX] = $.extend(true, [], AX);
                                    var FE = false;
                                    var FC = new RegExp(FA);
                                    $.each(BC, function (FI, FJ) {
                                        if (undefined == FJ || 0 == FJ.length) {
                                            return;
                                        }
                                        var FK = undefined;
                                        $.each(FJ, function (FL, FM) {
                                            if (! FE && undefined != FM.SECTION_NUMBER && FM.SECTION_NUMBER.toString().match(FC)) {
                                                if (undefined != FM.colaction && ! FM.colaction.match(/^\s*$/)) {
                                                    FM.colaction = FM.colaction.replace(/disableSBSectionClass/g, " ");
                                                }
                                                if (! E5) {
                                                    if (undefined != FM.COUNT_ON_WAITLIST) {
                                                        FM.COUNT_ON_WAITLIST = FM.COUNT_ON_WAITLIST.toString().replace(/\d+/g, function (FO) {
                                                            var FN = Number(FO) - 1;
                                                            if (FN < 0) {
                                                                FN = 0;
                                                            }
                                                            return FN;
                                                        });
                                                    }
                                                }
                                                if (undefined != FM.AVAIL_SEAT) {
                                                    if (FM.AVAIL_SEAT.toString().match(/^\s*\d+\s*$/)) {
                                                        if (E5) {
                                                            FM.AVAIL_SEAT = FM.AVAIL_SEAT + 1;
                                                            FK.colaction = FK.colaction.replace(/Waitlist/i, "Enroll");
                                                            FK.colaction = FK.colaction.replace(/search-wait-id-/, "search-enroll-id-");
                                                        }
                                                        FE = true;
                                                    }
                                                }
                                            }
                                            if (FM.SUBJ_CODE == FB && FM.CRSE_CODE == E7) {
                                                if (BL(FM.SECTION_NUMBER, undefined, undefined, "ALL")[0]) {
                                                    return;
                                                }
                                                if (undefined != FM.colaction && ! FM.colaction.match(/^\s*$/)) {
                                                    FM.colaction = FM.colaction.replace(/disableSBEnWtClass/g, " ");
                                                    FM.colaction = FM.colaction.replace(/disableSBEnClass/g, " ");
                                                    FM.colaction = FM.colaction.replace(/disableSBWtClass/g, " ");
                                                    FM.colaction = FM.colaction.replace(/disableSBSectionClass/g, " ");
                                                }
                                            }
                                            FK = FM;
                                        });
                                    });
                                    Ed(BX, false, false);
                                }
                            }
                        } else {
                            var FG = "";
                            if (undefined != FF.REASON) {
                                FG = FF.REASON;
                            }
                            if (E5) {
                                FH = "<div class='msg error'><h4>Request Unsuccessful</h4><span>Attempting to drop " + E9.trim() + ", Section " + FA + ".  " + FG + "</span></div>";
                            } else {
                                FH = "<div class='msg error'><h4>Request Unsuccessful</h4><span>Attempting to drop wait-listed class " + E9.trim() + ", Section " + FA + ".  " + FG + "</span></div>";
                            }
                        }
                        var FD = $("#dialog-after-action").dialog("open");
                        FD.dialog("option", "buttons", O);
                        FD.dialog("option", "actionevent", FH);
                        EB(FH);
                    });
                    return;
                }
            }
        }
    });
    $("#dialog-class").dialog({
        autoOpen: false,
        maxWidth: 1050,
        position: {
            my: "center",
            at: "center",
            of: window
        },
        height: "auto",
        width: 1050,
        modal: true,
        closeOnEscape: false,
        buttons: {
            Cancel: {
                text: "Cancel",
                click: function () {
                    $(this).dialog("close");
                }
            },
            Confirm: {
                text: "Confirm",
                click: function () {
                    $(this).dialog("close");
                    var E9 = $("#diagclass-class-table-grade option:selected").val();
                    var FG = $("#diagclass-class-table-unit option:selected").text();
                    if (undefined == E9 || E9.trim() == "") {
                        E9 = Av($("#diagclass-class-table-grade-p").text());
                    }
                    if (undefined == FG || FG.trim() == "") {
                        FG = $("#diagclass-class-table-unit-p").text();
                    }
                    var FA = $(this).dialog("option", "oldgrade");
                    var FE = $(this).dialog("option", "oldunit");
                    var E8 = $(this).dialog("option", "subjcode");
                    var E5 = $(this).dialog("option", "crsecode");
                    var FD = E8 + E5;
                    var E3 = $(this).dialog("option", "stitle");
                    var E4 = $(this).dialog("option", "isenroll");
                    var E7 = $(this).dialog("option", "gradeenable");
                    var E6 = $(this).dialog("option", "unitenable");
                    var FB = false;
                    if (! E7 && ! E6) {
                        FB = true;
                    } else {
                        if (E7 && (E9 != Av(FA))) {
                            FB = true;
                        } else {
                            if (E6 && (FG != FE)) {
                                FB = true;
                            }
                        }
                    }
                    if (! FB) {
                        $("#dialog-msg").dialog("open");
                        var FC = "<div class='msg error'><h4>Request Unsuccessful</h4><span>No change of information was requested for " + FD.trim() + ": " + E3.trim() + ".</span></div>";
                        EB(FC);
                        return;
                    }
                    var FF = $(this).dialog("option", "section");
                    FG = Number(FG).toFixed(2);
                    Bo(E4, FF, E8, E5, E9, FG, Av(FA), FE, function (FL) {
                        var FN = "";
                        var FI = "units from " + FE + " to " + FG + " for " + FD.trim() + ", Section " + FF;
                        var FK = "grade option from " + Af(FA) + " to " + Af(E9) + " for " + FD.trim() + ", Section " + FF;
                        if (undefined == FG || FG.match(/^\s*$/) || FE == FG) {
                            FI = "";
                        }
                        if (undefined == E9 || E9.match(/^\s*$/) || Af(FA) == Af(E9)) {
                            FK = "";
                        }
                        var FH = "";
                        if (FI != "" && FK != "") {
                            FI = "units from " + FE + " to " + FG + " and ";
                            FH = FI + FK;
                        } else {
                            if (FI != "") {
                                FH = FI;
                            } else {
                                FH = FK;
                            }
                        }
                        if ("SUCCESS" == FL.OPS) {
                            B1(FF, E9, FG);
                            CB();
                            FN = "<div class='msg confirm'><h4>Request Successful</h4><span>Changed " + FH + ".</span></div>";
                        } else {
                            var FM = "";
                            if (undefined != FL.REASON || "null" == FL.REASON) {
                                FM = FL.REASON;
                            }
                            FN = "<div class='msg error'><h4>Request Unsuccessful</h4><span>Attempting to change " + FH + ".<br /><br />" + FM + "</span></div>";
                        }
                        var FJ = $("#dialog-after-action").dialog("open");
                        FJ.dialog("option", "buttons", O);
                        FJ.dialog("option", "actionevent", FN);
                        EB(FN);
                    });
                    return;
                }
            }
        }
    });
    var DZ = undefined;
    $.address.externalChange(function (E5) {
        var E4 = E5.value.substring(1);
        if (undefined != DZ) {
            if ("tabs" == DZ.substring(0, 4) && "tabs" == E4.substring(0, 4)) {
                var E3 = E4.substring(5, 6);
                $("#tabs").tabs({active: E3});
            }
        }
        DZ = E4;
    });
    var DR = 0;
    var Ch = undefined;
    if ("#" != BU) {
        var BU = window.location.hash;
        Ch = BU.substring(6, 7);
    }
    if (undefined == Ch || ! Ch.toString().match(/^\d$/)) {
        Ch = DR;
    }
    window.location.hash = "tabs-" + Ch;
    $("#tabs").tabs({
        active: Ch,
        activate: function (E4, E5) {
            var E3 = $("#tabs").tabs("option", "active");
            window.location.hash = "tabs-" + E3;
            Ch = E3;
            if (E3 == 1) {
                $("#calendar-id").fullCalendar("render");
                $("#print-title").text(x + " - Calendar");
            } else {
                if (E3 == 2) {
                    $("#finalcal-id").fullCalendar("render");
                    $("#print-title").text(x + " - Finals");
                } else {
                    $("#print-title").text(x);
                }
            }
        }
    });
    var x = "";
    BZ(function (E4) {
        x = E4 + " - " + Ae;
        $("#print-title").text(x);
        if ("#" != BU) {
            var E3 = BU.substring(6, 7);
            if (E3 == 1) {
                $("#print-title").text(x + " - Calendar");
            } else {
                if (E3 == 2) {
                    $("#print-title").text(x + " - Finals");
                }
            }
        }
    });
    var CI = true;
    Ex(function (E3) {
        if ("NO" == E3.DISPLAY) {
            CI = false;
        }
    });
    if (Ey) {
        Cf("992556", function (E3) {
            if (undefined != E3.KEY) {
                $("#msg-hold").html(E3.KEY);
            }
        });
    }
    var Cg = undefined;
    if ("UN" == CZ) {
        Cg = "http://students.ucsd.edu/go/enroll-checklist-ug";
        $("#enrollment-info-link").attr("href", Cg);
    } else {
        if ("GR" == CZ) {
            Cg = "http://students.ucsd.edu/go/enroll-checklist-grad";
            $("#enrollment-info-link").attr("href", Cg);
        } else {
            $("#enrollment-info-link").remove();
            $("#enrollment-info-link-bar").remove();
        }
    }
    var EH = undefined;
    var Dc = undefined;
    function H() {
        Bn(function (FO) {
            if (FO.APPT_TIMER != "") {
                if (FO.APPT_TIMER >= 0) {
                    Dn(FO.APPT_TIMER);
                } else {
                    if (Eh) {
                        y(Ca, B6[Ca], false, function (FQ) {
                            window.clearTimeout(BI);
                            if ("SUCCESS" == FQ.OPS) {
                                Ey = false;
                                Eh = false;
                                AV = false;
                                C6 = true;
                                EK(function (FR) {
                                    if (undefined != FR.ELIG_FLAGS) {
                                        if (1 == FR.ELIG_FLAGS.toString().charAt(0)) {
                                            Ey = true;
                                        }
                                        if (1 == FR.ELIG_FLAGS.toString().charAt(1)) {
                                            Eh = true;
                                        }
                                        if (Ey || Eh) {
                                            AV = true;
                                        }
                                    }
                                });
                                C(function (FR) {
                                    if (undefined != FR.GOT_NO_FTYPE) {
                                        if (FR.GOT_NO_FTYPE) {
                                            C6 = false;
                                        }
                                    }
                                });
                                if (! Eh) {
                                    $("#dialog-msg-appttime").dialog("open");
                                    t();
                                }
                            }
                        });
                    }
                }
            }
            Dc = FO.COLLEGE_CODE;
            if ("NO" == FO.DISPLAY) {
                return;
            }
            var FB = false;
            if (null != FO.FIRST_BEGIN_DATE) {
                FB = true;
            }
            var FC = false;
            if (null != FO.SECOND_BEGIN_DATE) {
                FC = true;
            }
            var FK = "First Pass";
            var FG = "Second Pass";
            if (FB || FC) {
                EH = '<table id="dialog-msg-appt-table" ><tbody>';
            }
            if (FB && FC) {
                var FJ = Ce(FO.FIRST_BEGIN_DATE);
                var E6 = Ce(FO.FIRST_END_DATE);
                var E5 = Ay(FO.FIRST_BEGIN_DATE);
                var FN = Ay(FO.FIRST_END_DATE);
                var FE = CY(FO.FIRST_BEGIN_HOUR + ":" + FO.FIRST_BEGIN_MIN);
                var E9 = CY(FO.FIRST_END_HOUR + ":" + FO.FIRST_END_MIN);
                var FP = Q(FO.FIRST_END_DATE, FO.FIRST_END_HOUR, FO.FIRST_END_MIN);
                if (CA > FP) {
                    FK = FK + " (Not Active)";
                }
                var FF = FJ + ", <span>" + E5 + "</span> " + FE;
                var FL = E6 + ", <span>" + FN + "</span> " + E9;
                var FH = Ce(FO.SECOND_BEGIN_DATE);
                var E4 = Ce(FO.SECOND_END_DATE);
                var FM = Ay(FO.SECOND_BEGIN_DATE);
                var E3 = Ay(FO.SECOND_END_DATE);
                var E8 = CY(FO.SECOND_BEGIN_HOUR + ":" + FO.SECOND_BEGIN_MIN);
                var FA = CY(FO.SECOND_END_HOUR + ":" + FO.SECOND_END_MIN);
                var E7 = Q(FO.SECOND_END_DATE, FO.SECOND_END_HOUR, FO.SECOND_END_MIN);
                if (CA > E7) {
                    FG = FG + " (Not Active)";
                }
                var FD = FH + ", <span>" + FM + "</span> " + E8;
                var FI = E4 + ", <span>" + E3 + "</span> " + FA;
                EH = EH + " " + "<tr>" + ' <td style="font-weight:bold; ">' + " <span>" + FK + "</span>" + " </td>" + ' <td style=" font-weight:bold; ">' + " <span>" + FG + "</span>" + " </td>" + " </tr>" + "<tr>" + "<td><span>Start date/time: " + FF + "</span></td>" + "<td><span>Start date/time: " + FD + "</span></td>" + "</tr>";
                if (! Ca.startsWith("SU") && ! Ca.startsWith("S1") && ! Ca.startsWith("S2") && ! Ca.startsWith("S3")) {
                    EH = EH + "<tr>" + "<td><span>End date/time: " + FL + "</span></td>" + "<td><span>End date/time: " + FI + "</span></td>" + "</tr>";
                }
            } else {
                if (FB && ! FC || ! FB && FC) {
                    if (FB) {
                        var FJ = Ce(FO.FIRST_BEGIN_DATE);
                        var E6 = Ce(FO.FIRST_END_DATE);
                        var E5 = Ay(FO.FIRST_BEGIN_DATE);
                        var FN = Ay(FO.FIRST_END_DATE);
                        var FE = CY(FO.FIRST_BEGIN_HOUR + ":" + FO.FIRST_BEGIN_MIN);
                        var E9 = CY(FO.FIRST_END_HOUR + ":" + FO.FIRST_END_MIN);
                        var FP = Q(FO.FIRST_END_DATE, FO.FIRST_END_HOUR, FO.FIRST_END_MIN);
                        if (CA > FP) {
                            EH = EH + " " + "<tr>" + ' <td style="font-weight:bold; ">' + " <span>Not Active</span>" + " </td>" + " </tr>";
                        }
                        var FF = FJ + ", <span>" + E5 + "</span> " + FE;
                        var FL = E6 + ", <span>" + FN + "</span> " + E9;
                        EH = EH + " " + "<tr>" + "<tr>" + "<td><span>Start date/time: " + FF + "</span></td>" + "</tr>";
                        if (! Ca.startsWith("SU") && ! Ca.startsWith("S1") && ! Ca.startsWith("S2") && ! Ca.startsWith("S3")) {
                            EH = EH + "<tr>" + "<td><span>End date/time: " + FL + "</span></td>" + "</tr>";
                        }
                    } else {
                        var FH = Ce(FO.SECOND_BEGIN_DATE);
                        var E4 = Ce(FO.SECOND_END_DATE);
                        var FM = Ay(FO.SECOND_BEGIN_DATE);
                        var E3 = Ay(FO.SECOND_END_DATE);
                        var E8 = CY(FO.SECOND_BEGIN_HOUR + ":" + FO.SECOND_BEGIN_MIN);
                        var FA = CY(FO.SECOND_END_HOUR + ":" + FO.SECOND_END_MIN);
                        var E7 = Q(FO.SECOND_END_DATE, FO.SECOND_END_HOUR, FO.SECOND_END_MIN);
                        if (CA > E7) {
                            EH = EH + " " + "<tr>" + ' <td style="font-weight:bold; ">' + " <span>Not Active</span>" + " </td>" + " </tr>";
                        }
                        var FD = FH + ", <span>" + FM + "</span> " + E8;
                        var FI = E4 + ", <span>" + E3 + "</span> " + FA;
                        EH = EH + " " + "<tr>" + "<tr>" + "<td><span>Start date/time: " + FD + "</span></td>" + "</tr>";
                        if (! Ca.startsWith("SU") && ! Ca.startsWith("S1") && ! Ca.startsWith("S2") && ! Ca.startsWith("S3")) {
                            EH = EH + "<tr>" + "<td><span>End date/time: " + FI + "</span></td>" + "</tr>";
                        }
                    }
                }
            }
            if (FB || FC) {
                EH = EH + "</tbody> </table>";
            }
        });
    }
    H();
    if ("UN" == CZ && Dc.trim() != "SS") {
        $("#msg-appt-link").click(function () {
            if (undefined == EH) {
                $("#dialog-msg").dialog("open");
                EB("<p>An appointment time has not been assigned for you. New incoming students will receive separate notification of appointment times. Continuing and visiting students should call the Registrar's Office at  858-534-3150 to discuss their eligibility for an appointment time.</p>");
            } else {
                $("#dialog-msg-appt").dialog("open");
                EB(EH);
            }
        });
    } else {
        $("#msg-appt-link").remove();
        $("#msg-appt-link-bar").remove();
    } At(function (E5) {
        $("#wr-apptmsg-alert-box-id-div").hide();
        var E3 = E5.STATUS;
        var E4 = E5.MSG_APPT;
        if (undefined != E3) {
            $("#msg-status").html(E3);
        }
        if (undefined == EH) {
            if (undefined != E4) {
                E4 = E4.replace(/<br>/gi, "");
                $("#msg-appt-alert").html(E4);
                $("#wr-apptmsg-alert-box-id-div").show();
            }
        }
    });
    r(function (E3) {
        if ("NO" == E3.DISPLAY) {
            return;
        }
        $("#msg-global").empty();
        $("#msg-global").html("* " + E3.MSG);
    });
    $("#mainpage-select-term").change(function () {
        var E5 = $("#mainpage-select-term option:selected").val();
        var E4 = (E5.split(":::"))[0];
        var E3 = (E5.split(":::"))[1];
        BW(E3, E4);
    });
    var CU = true;
    var q = true;
    var BD = true;
    var E2 = false;
    AS(function (E3) {
        if (undefined != E3 && undefined != E3.WAITLIST_ABLE) {
            CU = E3.WAITLIST_ABLE;
        }
    });
    if (!X) {
        EV(function (E3) {
            $.each(E3, function (E4, E5) {
                q = E5.EDITABLE;
                BD = E5.DROPABLE;
                return false;
            });
        });
    }
    if ("MD" == CZ) {
        E2 = true;
    }
    var Bv = true;
    var AB = false;
    Bd(function (E4) {
        var E5 = E4.START_DATE;
        var E3 = E4.END_DATE;
        if (E3 != "") {
            E3 = Q(E3, "23", "59");
            if (CA <= E3) {
                Bv = false;
            }
            if (E5 != "") {
                E5 = Q(E5, "00", "00");
                if (CA >= E5 && CA <= E3) {
                    AB = true;
                }
            }
        }
    });
    var V = null;
    var C4 = {};
    function AR(E3) {
        return JSON.parse(JSON.stringify(E3));
    }
    function e() {
        if (null != V) {
            V.length = 0;
            V = null;
            $.each(C4, function (E4, E5) {
                delete E5;
            });
            C4 = {};
        }
        var E3 = Bv ? null : ES;
        Bl(E3, "", "", function (E4) {
            V = E4;
        });
        $.each(V, function (E4, E5) {
            C4[E5.SECTION_HEAD] = E5.ENROLL_STATUS;
        });
    }
    e();
    function AM() {
        Ct = [];
        Ct.length = 0;
        var E3 = AR(V);
        $.each(E3, function (E7, FA) {
            if (undefined == FA.FK_CDI_INSTR_TYPE || FA.FK_CDI_INSTR_TYPE.match(/FI|FM|PB|RE|OT|MU/)) {
                return;
            }
            var E9 = String("0" + FA.BEGIN_HH_TIME).slice(-2) + String("0" + FA.BEGIN_MM_TIME).slice(-2);
            var E5 = String("0" + FA.END_HH_TIME).slice(-2) + String("0" + FA.END_MM_TIME).slice(-2);
            var E6 = FA.DAY_CODE;
            var E8 = FA.FK_CDI_INSTR_TYPE;
            var E4 = String(FA.START_DATE).replace(/\-/g, "");
            var FB = String(FA.END_DATE).replace(/\-/g, "");
            if (E9.toString().match(/^0+$/) || E4.toString().match(/TBA/i)) {
                return;
            }
            $.each(E3.slice(E7 + 1), function (FI, FH) {
                if (undefined == FH.FK_CDI_INSTR_TYPE || FH.FK_CDI_INSTR_TYPE.match(/FI|FM|PB|RE|OT|MU/)) {
                    return;
                }
                var FG = String("0" + FH.BEGIN_HH_TIME).slice(-2) + String("0" + FH.BEGIN_MM_TIME).slice(-2);
                var FD = String("0" + FH.END_HH_TIME).slice(-2) + String("0" + FH.END_MM_TIME).slice(-2);
                var FF = FH.DAY_CODE;
                var FJ = FH.FK_CDI_INSTR_TYPE;
                var FE = String(FH.START_DATE).replace(/\-/g, "");
                var FC = String(FH.END_DATE).replace(/\-/g, "");
                if (FG.toString().match(/^0+$/) || FE.toString().match(/TBA/i)) {
                    return;
                }
                if (FA.SECTION_NUMBER == FH.SECTION_NUMBER) {
                    return;
                }
                if ("MI" == E8 && "MI" == FJ) {
                    if (E4 == FE) {
                        if (E9 < FD && FG < E5) {
                            Dw(FA, FH);
                            return;
                        }
                    }
                    return;
                }
                if (FA.PB_FRIEND && FH.PB_FRIEND) {
                    return;
                }
                if ("MI" == E8 || "MI" == FJ) {
                    if (E6 == FF && E9 < FD && FG < E5) {
                        Dw(FA, FH);
                        return;
                    }
                }
                if (FA.PB_FRIEND || FH.PB_FRIEND) {
                    return;
                }
                if (E6 == FF && E9 < FD && FG < E5 && E4 < FC && FE < FB) {
                    Dw(FA, FH);
                    return;
                }
            });
        });
    }
    AM();
    function Dw(E4, E3) {
        var E5 = false;
        if (E4.FK_CDI_INSTR_TYPE == "MI" || E3.FK_CDI_INSTR_TYPE == "MI") {
            Ct.push([E4, E3]);
            return;
        }
        $.each(Ct, function (E6, E7) {
            if (E7[0].SUBJ_CODE == E4.SUBJ_CODE && E7[0].CRSE_CODE == E4.CRSE_CODE && E7[0].FK_CDI_INSTR_TYPE != "MI" && E7[1].SUBJ_CODE == E3.SUBJ_CODE && E7[1].CRSE_CODE == E3.CRSE_CODE && E7[1].FK_CDI_INSTR_TYPE != "MI") {
                E5 = true;
                return false;
            }
        });
        if (! E5) {
            Ct.push([E4, E3]);
        }
    }
    function B4() {
        EE = [];
        EE.length = 0;
        var E3 = AR(V);
        $.each(E3, function (E7, E9) {
            if (undefined == E9.FK_CDI_INSTR_TYPE || E9.FK_CDI_INSTR_TYPE != "FI") {
                return;
            }
            var E8 = String("0" + E9.BEGIN_HH_TIME).slice(-2) + String("0" + E9.BEGIN_MM_TIME).slice(-2);
            var E5 = String("0" + E9.END_HH_TIME).slice(-2) + String("0" + E9.END_MM_TIME).slice(-2);
            var E4 = E9.START_DATE;
            var E6 = E9.DAY_CODE;
            if (E8.toString().match(/^0+$/) || E4.toString().match(/TBA/i)) {
                return;
            }
            $.each(E3.slice(E7 + 1), function (FF, FE) {
                if (undefined == FE.FK_CDI_INSTR_TYPE || FE.FK_CDI_INSTR_TYPE != "FI") {
                    return;
                }
                var FD = String("0" + FE.BEGIN_HH_TIME).slice(-2) + String("0" + FE.BEGIN_MM_TIME).slice(-2);
                var FA = String("0" + FE.END_HH_TIME).slice(-2) + String("0" + FE.END_MM_TIME).slice(-2);
                var FB = FE.START_DATE;
                var FC = FE.DAY_CODE;
                var FG = FE.FK_CDI_INSTR_TYPE;
                if (FD.toString().match(/^0+$/) || FB.toString().match(/TBA/i)) {
                    return;
                }
                if (E9.SECTION_NUMBER == FE.SECTION_NUMBER) {
                    return;
                }
                if (E4 == FB && E8 < FA && FD < E5) {
                    EE.push([E9, FE]);
                    return;
                }
            });
        });
    }
    B4();
    if (undefined != Dz && null != Dz) {
        Dz.length = 0;
    }
    var Dz = [];
    S(function (E3) {
        if ("YES" == E3.DISPLAY) {
            $.each(E3.LIST_DATA, function (E8, FA) {
                var E9 = FA.SUBJ_CODE;
                var E5 = FA.CRSE_CODE;
                var FB = FA.SECTION_NUMBER;
                var E7 = FA.OVERRIDE_TYPE_1;
                var E6 = FA.OVERRIDE_TYPE_2;
                var E4 = FA.OVERRIDE_TYPE_3;
                Dz.push({
                    "SUBJ_CODE": E9,
                    "CRSE_CODE": E5,
                    "SECTION_NUMBER": FB,
                    "OVERRIDE_TYPE_1": E7,
                    "OVERRIDE_TYPE_2": E6,
                    "OVERRIDE_TYPE_3": E4
                });
            });
        }
    });
    s();
    var Cp = [];
    Cp.length = 0;
    $("#my-schedule-id").val("my-schedule-opt-dummy");
    $("#my-schedule-label").text(EA);
    function DW() {
        Cp = [];
        Cp.length = 0;
        A5(function (E3) {
            Cp.push(EA);
            $.each(E3, function (E4, E5) {
                if (E5 == EA) {
                    return;
                }
                Cp.push(E5);
            });
        });
    }
    DW();
    function Ap() {
        $("#my-schedule-opt-dummy").prop("disabled", true);
        DW();
        $(".sched-class-x").remove();
        $.each(Cp, function (E3, E4) {
            if (E2 || Ey || Bv) {
                if (0 == E3) {
                    $("#schedid-0").prop("disabled", true);
                    if (E2) {
                        $("#schedid-0").attr("title", "Not for MD students");
                    } else {
                        if (Ey) {
                            $("#schedid-0").attr("title", "Hold error");
                        } else {
                            if (Bv) {
                                $("#schedid-0").attr("title", "Inactive at this time");
                            }
                        }
                    }
                } else {
                    $("<option disabled class='sched-class-all sched-class-x' id='schedid-" + E3 + "' value='schedval-" + E3 + "' >" + E4 + "</option>").appendTo("#my-schedule-id");
                }
                return;
            }
            if (0 != E3) {
                $("<option class='sched-class-all sched-class-x' id='schedid-" + E3 + "' value='schedval-" + E3 + "' >" + E4 + "</option>").appendTo("#my-schedule-id");
            }
        });
        if (E2 || Ey || Bv) {
            $(".my-schedule-action-class").prop("disabled", true);
            if (E2) {
                $("#schedid-0").attr("title", "Not for MD students");
            } else {
                if (Ey) {
                    $(".my-schedule-action-class").attr("title", "Hold error");
                } else {
                    if (Bv) {
                        $(".my-schedule-action-class").attr("title", "Inactive at this time");
                    }
                }
            }
        } else {
            if (ES == EA) {
                $("#my-schedule-opt-rename").prop("disabled", true);
                $("#my-schedule-opt-delete").prop("disabled", true);
            } else {
                $("#my-schedule-opt-rename").prop("disabled", false);
                $("#my-schedule-opt-delete").prop("disabled", false);
            }
        }
        $("#my-schedule-id option:disabled").css("color", "gray");
        $("#my-schedule-id option:enabled").css("color", "black");
        $("#my-schedule-id option").mouseleave(function (E3) {
            $("#my-schedule-opt-dummy").prop("selected", true);
        });
        $("#my-schedule-id").change(function () {
            var E3 = $(this).children(":selected").attr("id").trim();
            var E7 = $(this).children(":selected").text().trim();
            var E4 = $(this).children(":selected").attr("class");
            if (undefined != E4 && E4.match(/sched-class-all/)) {
                ES = E7;
                $("#my-schedule-label").text(ES);
                $("#my-schedule-id").val("my-schedule-opt-dummy");
                Ap();
                EQ();
                $("#my-schedule-opt-dummy").prop("selected", "selected");
                if (Ew[0].grid) {
                    if (Aq != undefined) {
                        Aq();
                    }
                    Ed(0, false, true);
                }
            } else {
                if ("my-schedule-opt-new" == E3) {
                    $("#my-schedule-opt-dummy").prop("selected", "selected");
                    var E8 = Cp.length;
                    if (E8 > 19) {
                        $("#dialog-msg").dialog("open");
                        var E6 = "<div class='msg error'><h4>Request Unsuccessful</h4><span>The maximum number of schedules is 20.</span></div>";
                        EB(E6);
                        return;
                    }
                    $("#dialog-schedule-input").dialog("open");
                    $("#dialog-schedule-input-t1-i1").val("");
                    $("#dialog-schedule-input").dialog("option", "action", "create");
                    $("#dialog-schedule-input-confirm").button("option", "label", "Create");
                    EB("<b>Create a schedule</b>");
                } else {
                    if ("my-schedule-opt-rename" == E3) {
                        $("#my-schedule-opt-dummy").prop("selected", "selected");
                        if (ES == EA) {
                            $("#dialog-msg").dialog("open");
                            var E6 = "<div class='msg error'><h4>Request Unsuccessful</h4><span>Cannot rename the primary schedule.</span></div>";
                            EB(E6);
                            return;
                        }
                        $("#dialog-schedule-input").dialog("open");
                        $("#dialog-schedule-input-t1-i1").val("");
                        $("#dialog-schedule-input").dialog("option", "action", "rename");
                        $("#dialog-schedule-input-confirm").button("option", "label", "Rename");
                        EB('<b>Rename "' + ES + '" </b> - Enter new schedule name.');
                    } else {
                        if ("my-schedule-opt-copy" == E3) {
                            $("#my-schedule-opt-dummy").prop("selected", "selected");
                            $("#dialog-schedule-input").dialog("open");
                            $("#dialog-schedule-input-t1-i1").val("");
                            $("#dialog-schedule-input").dialog("option", "action", "copy");
                            $("#dialog-schedule-input-confirm").button("option", "label", "Copy");
                            EB('<b>Copy "' + ES + '" </b> - Enter new schedule name.');
                        } else {
                            if ("my-schedule-opt-delete" == E3) {
                                $("#my-schedule-opt-dummy").prop("selected", "selected");
                                if (ES == EA) {
                                    $("#dialog-msg").dialog("open");
                                    var E6 = "<div class='msg error'><h4>Request Unsuccessful</h4><span>Cannot delete the primary schedule.</span></div>";
                                    EB(E6);
                                    return;
                                }
                                var E5 = $("#dialog-schedule-confirm").dialog("open");
                                EB('<b>Are you sure you want to delete "' + ES + '"?</b>');
                            }
                        }
                    }
                }
            }
        });
    }
    Ap();
    $("#dialog-schedule-confirm").dialog({
        autoOpen: false,
        maxWidth: 800,
        position: {
            my: "center",
            at: "center",
            of: window
        },
        height: "auto",
        width: 800,
        modal: true,
        closeOnEscape: false,
        buttons: {
            Cancel: {
                text: "Cancel",
                click: function () {
                    u();
                    $(this).dialog("close");
                }
            },
            Confirm: {
                text: "Delete",
                title: "Delete schedule",
                click: function () {
                    u();
                    $(this).dialog("close");
                    Dr(ES, function (E6) {
                        if ("SUCCESS" == E6.OPS) {
                            Ap();
                            $("#schedid-0").prop("selected", true).trigger("change");
                            $("#my-schedule-label").text(EA);
                        } else {
                            var E7 = "";
                            if (undefined != E6.REASON || "null" != E6.REASON) {
                                E7 = E6.REASON;
                            }
                            var E5 = "<div class='msg error'><h4>Request Unsuccessful</h4><span>The current schedule \"" + ES + '" was not removed.  ' + E7 + "</span></div>";
                            var E4 = $("#dialog-after-action").dialog("open");
                            var E3 = O.slice(0);
                            E3.splice(1, 2);
                            E4.dialog("option", "buttons", E3);
                            EB(E5);
                        }
                    });
                }
            }
        }
    });
    $("#dialog-schedule-input").dialog({
        autoOpen: false,
        maxWidth: 800,
        position: {
            my: "center",
            at: "center",
            of: window
        },
        height: "auto",
        width: 800,
        modal: true,
        closeOnEscape: false,
        open: function () {
            $("#dialog-schedule-input-t1-i1").prop("disabled", false);
        },
        buttons: {
            Cancel: {
                text: "Cancel",
                click: function () {
                    u();
                    $(this).dialog("close");
                }
            },
            Confirm: {
                id: "dialog-schedule-input-confirm",
                click: function () {
                    u();
                    var E9 = $("#dialog-schedule-input-t1-i1");
                    var FB = E9.val().trim();
                    var E4 = $(this).dialog("option", "action");
                    var FA = false;
                    var E5 = false;
                    if ("Replace" == $("#dialog-schedule-input-confirm").button("option", "label")) {
                        E5 = true;
                    } else {
                        if ("create" == E4 || "rename" == E4 || "copy" == E4) {
                            if (FB.match(/^\s*$/)) {
                                DX("<div class='msg error'>Please provide a schedule name</div>");
                                FA = true;
                                return false;
                            }
                            if (FB == ES) {
                                DX("<div class='msg error'>You cannot perform this action using the same name as the currently selected schedule!</div>");
                                FA = true;
                                return false;
                            }
                            var E3 = false;
                            if (FB == EA) {
                                E3 = true;
                            } else {
                                $.each(Cp, function (FC, FD) {
                                    if (FD == FB) {
                                        E3 = true;
                                        return false;
                                    }
                                });
                            }
                            if (E3) {
                                DX("<div class='msg alert'>\"" + FB + '" already exists. Would you like to replace "' + FB + '"?</div>');
                                E9.prop("disabled", true);
                                $("#dialog-schedule-input-confirm").button("option", "label", "Replace");
                                FA = true;
                            }
                        }
                    }
                    if (FA) {
                        return;
                    }
                    if (FB == EA) {
                        FB = EA;
                    }
                    if (E5) {
                        Dr(FB, function (FF) {
                            if ("SUCCESS" != FF.OPS) {
                                var FG = "";
                                if (undefined != FF.REASON || "null" != FF.REASON) {
                                    FG = FF.REASON;
                                }
                                var FE = "<div class='msg error'><h4>Request Unsuccessful</h4><span>Schedule\"" + FB + '" could not be replaced.  ' + FG + "</span></div>";
                                var FD = $("#dialog-after-action").dialog("open");
                                var FC = O.slice(0);
                                FC.splice(1, 2);
                                FD.dialog("option", "buttons", FC);
                                EB(FE);
                            }
                        });
                    }
                    if ("create" == E4) {
                        u();
                        Bc(FB, "NONE", "NONE", 0, "XX", "X", 0, function (FG) {
                            if ("SUCCESS" == FG.OPS) {
                                Ap();
                                var FE = 0;
                                $.each(Cp, function (FI, FJ) {
                                    if (FJ == FB) {
                                        FE = FI;
                                        return false;
                                    }
                                });
                                $("#schedid-" + FE).prop("selected", true).trigger("change");
                                $("#my-schedule-label").text(FB);
                            } else {
                                var FH = "";
                                if (undefined != FG.REASON || "null" != FG.REASON) {
                                    FH = FG.REASON;
                                }
                                var FF = "<div class='msg error'><h4>Request Unsuccessful</h4><span>New schedule \"" + FB + '" was not created.  ' + FH + "</span></div>";
                                var FD = $("#dialog-after-action").dialog("open");
                                var FC = O.slice(0);
                                FC.splice(1, 2);
                                FD.dialog("option", "buttons", FC);
                                EB(FF);
                            }
                        });
                    } else {
                        if ("rename" == E4) {
                            u();
                            var E7 = ES.trim();
                            AY(E7, FB, function (FG) {
                                if ("SUCCESS" == FG.OPS) {
                                    Ap();
                                    var FE = 0;
                                    $.each(Cp, function (FI, FJ) {
                                        if (FJ == FB) {
                                            FE = FI;
                                            return false;
                                        }
                                    });
                                    $("#schedid-" + FE).prop("selected", true).trigger("change");
                                    $("#my-schedule-label").text(FB);
                                } else {
                                    var FH = "";
                                    if (undefined != FG.REASON || "null" != FG.REASON) {
                                        FH = FG.REASON;
                                    }
                                    var FF = "<div class='msg error'><h4>Request Unsuccessful</h4><span>Schedule \"" + E7 + '" has not been renamed.  ' + FH + "</span></div>";
                                    var FD = $("#dialog-after-action").dialog("open");
                                    var FC = O.slice(0);
                                    FC.splice(1, 2);
                                    FD.dialog("option", "buttons", FC);
                                    EB(FF);
                                }
                            });
                        } else {
                            if ("copy" == E4) {
                                var E6 = "";
                                u();
                                var E7 = ES.trim();
                                var E8 = false;
                                if (E7 == EA) {
                                    g(E7, function (FC) {
                                        if (undefined != FC.COUNT && FC.COUNT > 0) {
                                            E8 = true;
                                        }
                                    });
                                } else {
                                    E8 = true;
                                }
                                if (! E8) {
                                    Bc(E7, "NONE", "NONE", 0, "XX", "X", 0, function (FC) {
                                        if ("SUCCESS" == FC.OPS) {
                                            E8 = true;
                                        } else {
                                            var FD = "";
                                            if (undefined != FC.REASON || "null" != FC.REASON) {
                                                FD = FC.REASON;
                                            }
                                            E6 = "<div class='msg error'><h4>Request Unsuccessful</h4><span>Schedule \"" + E7 + '" has not been copied.  ' + FD + "</span></div>";
                                        }
                                    });
                                }
                                if (E8) {
                                    Ea(E7, FB, function (FF) {
                                        if ("SUCCESS" == FF.OPS) {
                                            Ap();
                                            var FE = 0;
                                            $.each(Cp, function (FH, FI) {
                                                if (FI == FB) {
                                                    FE = FH;
                                                    return false;
                                                }
                                            });
                                            $("#schedid-" + FE).prop("selected", true).trigger("change");
                                            $("#my-schedule-label").text(FB);
                                        } else {
                                            var FG = "";
                                            if (undefined != FF.REASON || "null" != FF.REASON) {
                                                FG = FF.REASON;
                                            }
                                            E6 = "<div class='msg error'><h4>Request Unsuccessful</h4><span>Schedule \"" + E7 + '" has not been copied.  ' + FG + "</span></div>";
                                            var FD = $("#dialog-after-action").dialog("open");
                                            var FC = O.slice(0);
                                            FC.splice(1, 2);
                                            FD.dialog("option", "buttons", FC);
                                            EB(E6);
                                        }
                                    });
                                }
                            }
                        }
                    }
                    $(this).dialog("close");
                }
            }
        }
    });
    Cb();
    function A9(E5, E6, E4, E3) {
        if (0 == E5.val().trim().length) {
            DX("<div class='msg error'>Event Name Required</div>");
            return false;
        }
        if (E5.val().length > E3 || E5.val().length < E4) {
            DX("<div class='msg error'>Event Name cannot exceed " + E6 + " characters</div>");
            return false;
        } else {
            return true;
        }
    }
    function B(E3) {
        if (E3[0].is(":checked") || E3[1].is(":checked") || E3[2].is(":checked") || E3[3].is(":checked") || E3[4].is(":checked") || E3[5].is(":checked") || E3[6].is(":checked")) {
            return true;
        } else {
            DX("<div class='msg error'>Event Day(s) Required</div>");
            return false;
        }
    }
    function F(E6, E3) {
        if (! E6.val() || "none" == E6.val()) {
            DX("<div class='msg error'>Start and End Time Required</div>");
            return 1;
        } else {
            if (! E3.val() || "none" == E3.val()) {
                DX("<div class='msg error'>Start and End Time Required</div>");
                return 2;
            } else {
                var E5 = D8(E6.val());
                var E4 = D8(E3.val());
                if (E5 >= E4) {
                    DX("<div class='msg error'>Start time must be before end time</div>");
                    return 3;
                }
                return 0;
            }
        }
    }
    function Cb() {
        A8 = [];
        A8.length = 0;
        CE(function (E3) {
            A8 = E3;
        });
    }
    function Ee(E4) {
        var FA = E4.data.aeName;
        var FE = E4.data.aeDay;
        var E5 = E4.data.aeDays;
        var E7 = E4.data.aeLocation;
        var E6 = E4.data.aeStartTime;
        var FD = E4.data.aeEndTime;
        var FB = E4.data.aeTimeStamp;
        var E3 = $("#dialog-event").dialog("open");
        E3.dialog("option", "action", "remove");
        E3.dialog("option", "aetimestamp", FB);
        $("#dialog-event-confirm").button("option", "label", "Remove");
        $("#dialog-event-t1-i1").val(FA);
        var FC = E5.split("");
        for (var E9 = 0; E9 < FC.length; E9++) {
            var E8 = E9 + 1;
            if ("1" == FC[E9]) {
                $("#dialog-event-t2-c" + E8).prop("checked", true);
            } else {
                $("#dialog-event-t2-c" + E8).prop("checked", false);
            }
        }
        $("#dialog-event-t3-i1").timepicker(DQ);
        $("#dialog-event-t3-i1").timepicker("setTime", new Date(Eb, Eg, Ek, E6.substr(0, 2), E6.substr(2, 2)));
        $("#dialog-event-t3-i2").timepicker(DQ);
        $("#dialog-event-t3-i2").timepicker("setTime", new Date(Eb, Eg, Ek, FD.substr(0, 2), FD.substr(2, 2)));
        $("#dialog-event-t4-i1").val(E7);
        Au();
        EB("<b>Remove Event</b>");
        u();
    }
    function Au() {
        $("#dialog-event-t1-label").removeClass("wr-required-class");
        $("#dialog-event-t2-label").removeClass("wr-required-class");
        $("#dialog-event-t3-label-1").removeClass("wr-required-class");
        $("#dialog-event-t3-label-2").removeClass("wr-required-class");
        $("#dialog-event-t1-i1").prop("disabled", true);
        for (var E3 = 1; E3 < 8; E3++) {
            $("#dialog-event-t2-c" + E3).prop("disabled", true);
        }
        $("#dialog-event-t3  select.ui-timepicker-select").prop("disabled", true);
        $("#dialog-event-t4-i1").prop("disabled", true);
    }
    function By() {
        $("#dialog-event-t1-label").addClass("wr-required-class");
        $("#dialog-event-t2-label").addClass("wr-required-class");
        $("#dialog-event-t3-label-1").addClass("wr-required-class");
        $("#dialog-event-t3-label-2").addClass("wr-required-class");
        $("#dialog-event-t1-i1").prop("disabled", false);
        for (var E3 = 1; E3 < 8; E3++) {
            $("#dialog-event-t2-c" + E3).prop("disabled", false);
        }
        $("#dialog-event-t3  select.ui-timepicker-select").prop("disabled", false);
        $("#dialog-event-t4-i1").prop("disabled", false);
    }
    function Ah(E4) {
        var FA = E4.data.aeName;
        var FE = E4.data.aeDay;
        var E5 = E4.data.aeDays;
        var E7 = E4.data.aeLocation;
        var E6 = E4.data.aeStartTime;
        var FD = E4.data.aeEndTime;
        var FB = E4.data.aeTimeStamp;
        var E3 = $("#dialog-event").dialog("open");
        E3.dialog("option", "action", "edit");
        E3.dialog("option", "aetimestamp", FB);
        $("#dialog-event-confirm").button("option", "label", "Edit");
        $("#dialog-event-t1-i1").val(FA);
        var FC = E5.split("");
        for (var E9 = 0; E9 < FC.length; E9++) {
            var E8 = E9 + 1;
            if ("1" == FC[E9]) {
                $("#dialog-event-t2-c" + E8).prop("checked", true);
            } else {
                $("#dialog-event-t2-c" + E8).prop("checked", false);
            }
        }
        $("#dialog-event-t3-i1").timepicker(DQ);
        $("#dialog-event-t3-i1").timepicker("setTime", new Date(Eb, Eg, Ek, E6.substr(0, 2), E6.substr(2, 2)));
        $("#dialog-event-t3-i2").timepicker(DQ);
        $("#dialog-event-t3-i2").timepicker("setTime", new Date(Eb, Eg, Ek, FD.substr(0, 2), FD.substr(2, 2)));
        $("#dialog-event-t4-i1").val(E7);
        By();
        EB("<b>Edit Event</b>");
        u();
    }
    if (Ey) {
        $("#add-event-id").button().button("disable");
        $("#add-event-id").attr("title", "Hold error");
    } else {
        $("#add-event-id").click(function () {
            var E3 = $("#dialog-event").dialog("open");
            E3.dialog("option", "action", "create");
            $("#dialog-event-confirm").button("option", "label", "Add");
            $("#dialog-event-t1-i1").val("");
            $(".dialog-event-days-class").prop("checked", false);
            $("#dialog-event-t3-i1").val("");
            $("#dialog-event-t3-i2").val("");
            $("#dialog-event-t4-i1").val("");
            $("#dialog-event-t3-i1").timepicker(DQ);
            $("#dialog-event-t3-i2").timepicker(DQ);
            By();
            EB("<b>Add Event</b>");
            u();
        });
    }
    $("#dialog-event").dialog({
        autoOpen: false,
        maxWidth: 800,
        position: {
            my: "center",
            at: "center",
            of: window
        },
        height: "auto",
        width: 800,
        modal: true,
        closeOnEscape: false,
        buttons: {
            Cancel: {
                text: "Cancel",
                click: function () {
                    u();
                    $(this).dialog("close");
                }
            },
            Confirm: {
                id: "dialog-event-confirm",
                click: function () {
                    u();
                    var FA = $(this).dialog("option", "action");
                    var FC = $(this).dialog("option", "aetimestamp", FC);
                    var E3 = $("#dialog-event-t1-i1");
                    if (! A9(E3, "name", 1, 20)) {
                        return;
                    }
                    var E4 = [];
                    E4.length = 0;
                    E4.push($("#dialog-event-t2-c1"));
                    E4.push($("#dialog-event-t2-c2"));
                    E4.push($("#dialog-event-t2-c3"));
                    E4.push($("#dialog-event-t2-c4"));
                    E4.push($("#dialog-event-t2-c5"));
                    E4.push($("#dialog-event-t2-c6"));
                    E4.push($("#dialog-event-t2-c7"));
                    if (! B(E4)) {
                        return;
                    }
                    var E5 = $("#dialog-event-t3 tbody tr td:nth-child(2) select.ui-timepicker-select");
                    var FD = $("#dialog-event-t3 tbody tr td:nth-child(4) select.ui-timepicker-select");
                    var E6 = F(E5, FD);
                    if (1 == E6) {
                        return;
                    } else {
                        if (2 == E6) {
                            return;
                        } else {
                            if (3 == E6) {
                                return;
                            }
                        }
                    }
                    var FB = $("#dialog-event-t1-i1").val();
                    var E7 = $("#dialog-event-t2-c1").is(":checked") ? "1" : "0";
                    E7 += $("#dialog-event-t2-c2").is(":checked") ? "1" : "0";
                    E7 += $("#dialog-event-t2-c3").is(":checked") ? "1" : "0";
                    E7 += $("#dialog-event-t2-c4").is(":checked") ? "1" : "0";
                    E7 += $("#dialog-event-t2-c5").is(":checked") ? "1" : "0";
                    E7 += $("#dialog-event-t2-c6").is(":checked") ? "1" : "0";
                    E7 += $("#dialog-event-t2-c7").is(":checked") ? "1" : "0";
                    var E8 = D8(E5.val());
                    var FE = D8(FD.val());
                    var E9 = $("#dialog-event-t4-i1").val();
                    if (E9.match(/^\s*$/)) {
                        E9 = "";
                    }
                    $(this).dialog("close");
                    if ("create" == FA) {
                        T(FB, E7, E8, FE, E9, function (FF) {
                            var FH = "";
                            if ("SUCCESS" == FF.OPS) {
                                Cb();
                                BY();
                                FH = "<div class='msg confirm'><h4>Request Successful</h4><span>New event(" + FB + ") added.</span></div>";
                            } else {
                                var FG = "";
                                if (undefined != FF.REASON || "null" != FF.REASON) {
                                    FG = FF.REASON;
                                }
                                FH = "<div class='msg error'><h4>Request Unsuccessful</h4><span>New event(" + FB + ") was not created.  " + FG + "</span></div>";
                                $("#dialog-msg").dialog("open");
                                EB(FH);
                            }
                        });
                    } else {
                        if ("remove" == FA) {
                            Cz(FC, function (FF) {
                                var FH = "";
                                if ("SUCCESS" == FF.OPS) {
                                    Cb();
                                    BY();
                                    FH = "<div class='msg confirm'><h4>Request Successful</h4><span>Event(" + FB + ") removed.</span></div>";
                                } else {
                                    var FG = "";
                                    if (undefined != FF.REASON || "null" != FF.REASON) {
                                        FG = FF.REASON;
                                    }
                                    FH = "<div class='msg error'><h4>Request Unsuccessful</h4><span>Event(" + FB + ") was not removed.  " + FG + "</span></div>";
                                    $("#dialog-msg").dialog("open");
                                    EB(FH);
                                }
                            });
                        } else {
                            if ("edit" == FA) {
                                A7(FC, FB, E7, E8, FE, E9, function (FF) {
                                    if ("SUCCESS" == FF.OPS) {
                                        Cb();
                                        BY();
                                    } else {
                                        var FG = "";
                                        if (undefined != FF.REASON || "null" != FF.REASON) {
                                            FG = FF.REASON;
                                        }
                                        var FH = "<div class='msg error'><h4>Request Unsuccessful</h4><span>Event(" + FB + ") was not updated.  " + FG + "</span></div>";
                                        $("#dialog-msg").dialog("open");
                                        EB(FH);
                                    }
                                });
                            }
                        }
                    }
                }
            }
        }
    });
    var J = [];
    J.length = 0;
    var CQ = 0;
    var Cm = [];
    Cm.length = 0;
    function z(E5, E4, E3) {
        if (undefined == E4 || "" == E4.trim() || "TBA" == E4) {
            return "";
        }
        return 'title="Click for campus map"';
    }
    function C9(E5, E4, E3) {
        return 'title="' + CW(E4) + '"';
    }
    function AN(E5, E4, E3) {
        return 'title="' + Af(E4) + '"';
    }
    function i(E4, E5, E3) {
        if ("EN" == E4) {
            return '<a target="_blank" class="nonewwin " href="http://act.ucsd.edu/maps/?isisCode=' + E5 + '">' + E3 + "</a>";
        } else {
            if ("WT" == E4) {
                return '<a target="_blank" class="nonewwin " href="http://act.ucsd.edu/maps/?isisCode=' + E5 + '">' + E3 + "</a>";
            } else {
                if ("PL" == E4) {
                    return '<a target="_blank" class="nonewwin " href="http://act.ucsd.edu/maps/?isisCode=' + E5 + '">' + E3 + "</a>";
                } else {
                    return '<a target="_blank" class="nonewwin " href="http://act.ucsd.edu/maps/?isisCode=' + E5 + '">' + E3 + "</a>";
                }
            }
        }
    }
    function CV(E4, E3, E5) {
        if (undefined == E4 || "TBA" == E4) {
            return "TBA";
        } else {
            if ("" == E4.trim()) {
                return "";
            }
        }
        return i(E5.ENROLL_STATUS, E5.PBF_BLDG, E4);
    }
    function AG(E4, E3, E5) {
        if (undefined == E4 || "TBA" == E4) {
            return "TBA";
        } else {
            if ("" == E4.trim()) {
                return "";
            }
        }
        return i(E5.ENROLL_STATUS, E5.BLDG_CODE, E4);
    }
    function Dl(E4, E3, E5) {
        if (undefined == E4 || "TBA" == E4) {
            return "TBA";
        } else {
            if ("" == E4.trim()) {
                return "";
            }
        }
        return i(E5.ENROLL_STATUS, E4, E4);
    }
    function AK() {
        Cm = [];
        Cm.length = 0;
        $("#list-id-table").jqGrid("clearGridData", true);
        $("#list-id-table").jqGrid({
            datatype: "local",
            height: "100%",
            autowidth: true,
            shrinkToFit: true,
            gridview: true,
            loadonce: true,
            rowNum: 100,
            viewrecords: true,
            cmTemplate: {
                title: false
            },
            beforeSelectRow: function (GC, GD) {
                return false;
            },
            onRightClickRow: function () {
                $("#list-id-table").jqGrid("resetSelection");
                return false;
            },
            colNames: [
                "Subject<br >Course",
                "Title",
                "Section<br />Code",
                "Type",
                "Instructor",
                "Grade<br >Option",
                "Units",
                "Days",
                "Time",
                "BLDG",
                "Room",
                "Status /<br />(Position)",
                "Action",
                "SectNum",
                "SectHead",
                "GradeEnable",
                "UnitEnable",
                "SubjCode",
                "CrseCode",
                "StatusOrg",
                "RowAttr",
                "pbFriend"
            ],
            colModel: [
                {
                    name: "colsubj",
                    fixed: true,
                    index: "subjcrse",
                    jsonmap: "NULL",
                    width: 65,
                    align: "left",
                    editable: false,
                    sortable: false
                },
                {
                    name: "CRSE_TITLE",
                    fixed: true,
                    index: "title",
                    jsonmap: "CRSE_TITLE",
                    width: 170,
                    align: "left",
                    editable: false,
                    sortable: false
                },
                {
                    name: "SECT_CODE",
                    fixed: true,
                    index: "sectionnumber",
                    jsonmap: "SECT_CODE",
                    width: 41,
                    align: "center",
                    editable: false,
                    sortable: false
                },
                {
                    name: "FK_CDI_INSTR_TYPE",
                    fixed: true,
                    index: "type",
                    jsonmap: "FK_CDI_INSTR_TYPE",
                    width: 27,
                    align: "center",
                    editable: false,
                    sortable: false,
                    title: true,
                    cellattr: C9
                }, {
                    name: "PERSON_FULL_NAME",
                    fixed: true,
                    index: "inst",
                    jsonmap: "NULL",
                    width: 110,
                    align: "left",
                    editable: false,
                    sortable: false
                }, {
                    name: "GRADE_OPTION",
                    fixed: true,
                    index: "grade",
                    jsonmap: "GRADE_OPTION",
                    width: 40,
                    align: "center",
                    editable: false,
                    sortable: false,
                    title: true,
                    cellattr: AN
                }, {
                    name: "SECT_CREDIT_HRS",
                    fixed: true,
                    index: "units",
                    jsonmap: "SECT_CREDIT_HRS",
                    width: 30,
                    align: "center",
                    editable: false,
                    sortable: false
                }, {
                    name: "DAY_CODE",
                    fixed: true,
                    index: "days",
                    jsonmap: "DAY_CODE",
                    width: 85,
                    align: "center",
                    editable: false,
                    sortable: false
                }, {
                    name: "coltime",
                    fixed: true,
                    index: "time",
                    jsonmap: "NULL",
                    width: 80,
                    align: "center",
                    editable: false,
                    sortable: false
                }, {
                    name: "BLDG_CODE",
                    fixed: true,
                    index: "bld",
                    jsonmap: "NULL",
                    width: 40,
                    align: "center",
                    editable: false,
                    sortable: false,
                    formatter: Dl,
                    cellattr: z
                }, {
                    name: "ROOM_CODE",
                    fixed: true,
                    index: "rm",
                    jsonmap: "NULL",
                    width: 36,
                    align: "center",
                    editable: false,
                    sortable: false,
                    formatter: AG,
                    cellattr: z
                }, {
                    name: "colstatus",
                    fixed: true,
                    index: "status",
                    jsonmap: "NULL",
                    width: 62,
                    align: "center",
                    editable: false,
                    sortable: false
                }, {
                    name: "colaction",
                    fixed: true,
                    index: "action",
                    jsonmap: "action",
                    width: 110,
                    align: "center",
                    editable: false,
                    sortable: false
                }, {
                    name: "SECTION_NUMBER",
                    hidden: true,
                    jsonmap: "SECTION_NUMBER"
                }, {
                    name: "SECTION_HEAD",
                    hidden: true,
                    jsonmap: "SECTION_HEAD"
                }, {
                    name: "GRADE_OPTN_CD_PLUS",
                    hidden: true,
                    jsonmap: "GRADE_OPTN_CD_PLUS"
                }, {
                    name: "SECT_CREDIT_HRS_PL",
                    hidden: true,
                    jsonmap: "SECT_CREDIT_HRS_PL"
                }, {
                    name: "SUBJ_CODE",
                    hidden: true,
                    jsonmap: "SUBJ_CODE"
                }, {
                    name: "CRSE_CODE",
                    hidden: true,
                    jsonmap: "CRSE_CODE"
                }, {
                    name: "colstatusorg",
                    hidden: true,
                    jsonmap: "NULL"
                }, {
                    name: "ROW_ATTR",
                    hidden: true
                }, {
                    name: "PB_FRIEND",
                    hidden: true
                }
            ],
            rowattr: function (GE) {
                var GD = "";
                var GC = GE.ROW_ATTR;
                if (undefined != GC) {
                    if (undefined != GE.ROW_ATTR.rowClass) {
                        GD = {
                            "class": GE.ROW_ATTR.rowClass
                        };
                    }
                }
                return GD;
            }
        });
        var Ff = AR(V);
        var FB = $("#list-id-table");
        var FC = [];
        var Fg = undefined;
        var F4 = "";
        $.each(Ff, function (GC, GE) {
            if (GC == 0) {
                if (1 == Ff.length) {
                    FC.push(GE);
                } else {
                    Fg = $.extend(true, {}, GE);
                    F4 = GE.DAY_CODE;
                }
                return;
            }
            if (Fg != undefined) {
                if (Fg.SUBJ_CODE == GE.SUBJ_CODE && Fg.CRSE_CODE == GE.CRSE_CODE && Fg.SECT_CODE == GE.SECT_CODE && Fg.START_DATE == GE.START_DATE && Fg.BEGIN_HH_TIME == GE.BEGIN_HH_TIME && Fg.BEGIN_MM_TIME == GE.BEGIN_MM_TIME && Fg.END_HH_TIME == GE.END_HH_TIME && Fg.END_MM_TIME == GE.END_MM_TIME && Fg.BLDG_CODE == GE.BLDG_CODE && Fg.ROOM_CODE == GE.ROOM_CODE && Fg.SECTION_NUMBER == GE.SECTION_NUMBER && Fg.ENROLL_STATUS == GE.ENROLL_STATUS) {
                    var GD = GE.DAY_CODE;
                    GE.DAY_CODE = F4 + GE.DAY_CODE;
                    F4 = F4 + GD;
                } else {
                    F4 = GE.DAY_CODE;
                    FC.push(Fg);
                }
            }
            if ((GC + 1) == Ff.length) {
                FC.push(GE);
            }
            Fg = $.extend(true, {}, GE);
        });
        Ff.length = 0;
        Ff = null;
        var F3 = [];
        F3.length = 0;
        var Fj = undefined;
        var FX = null;
        var FQ = "";
        var Fh = "";
        var Fx = "";
        var FL = "";
        var FO = false;
        var F7 = "";
        $.each(FC, function (GL, GF) {
            var GK = ("00" == GF.SECT_CODE.slice(-2)) ? true : false;
            if ("LE" == GF.FK_CDI_INSTR_TYPE) {
                Fj = $.extend(true, {}, GF);
            }
            if (true == GF.NEED_HEADROW && undefined != Fj) {
                Fj.SECTION_HEAD = GF.SECTION_HEAD;
                F3.push($.extend(true, {}, Fj));
                Fj = undefined;
            }
            if (null != FX && true == GF.PB_FRIEND) {
                var GT = GF.FK_CDI_INSTR_TYPE;
                var GJ = GT.match(/FI|MI|FM|PB|RE|OT|MU/) ? true : false;
                var GU = CW(GT);
                var GE = GT.match(/MI|FI/) ? true : false;
                var GS = "";
                var GW = GF.ENROLL_STATUS;
                var GG = GF.SUBJ_CODE.trim() + " " + GF.CRSE_CODE.trim();
                var GO = GF.SECTION_HEAD;
                var GD = GF.SECT_CODE.substr(0, 1);
                if (GO != Fx) {
                    GS = GG;
                    if (GW == FQ && GG == Fh && GD == FL) {
                        FO = true;
                    } else {
                        FO = false;
                    }
                }
                FQ = GW;
                Fh = GG;
                Fx = GO;
                FL = GD;
                var GR = GG.trim().replace(/\s/, "_");
                var GN = "";
                switch (GF.ENROLL_STATUS) {
                    case "EN": GN = "Enrolled";
                        break;
                    case "WT": GN = "Waitlist";
                        break;
                    case "PL": GN = "Planned";
                        break;
                }
                var GV = GF.CRSE_TITLE;
                var GX = GF.LONG_DESC;
                if (null != GX && ! GX.match(/^\s*$/)) {
                    GV = GF.CRSE_TITLE.trim() + "<br /> - " + GX;
                }
                if ("" !== GS && ! FO) {
                    Cm.push({
                        SECTION_HEAD: GF.SECTION_HEAD,
                        SECTION_NUMBER: GF.SECTION_NUMBER,
                        PBF_SUBJ_CRSE: GS,
                        PBF_TITLE: GV,
                        PBF_STATUS: GN,
                        PBF_MTYPE: "",
                        PBF_DAY: "",
                        PBF_DATE: "",
                        PBF_TIME: "",
                        PBF_BLDG: "",
                        PBF_ROOM: "",
                        ENROLL_STATUS: GF.ENROLL_STATUS
                    });
                }
                if (! GE) {
                    if (undefined != FX.FK_CDI_INSTR_TYPE && FX.FK_CDI_INSTR_TYPE != GF.FK_CDI_INSTR_TYPE) {
                        var Gb = $.extend(true, {}, GF);
                        Gb.PERSON_FULL_NAME = "HEADER_" + GU;
                        Gb.ADDINFO = GR;
                        F3.push(Gb);
                        if (! FO) {
                            Cm.push({
                                SECTION_HEAD: GF.SECTION_HEAD,
                                SECTION_NUMBER: GF.SECTION_NUMBER,
                                PBF_SUBJ_CRSE: "",
                                PBF_TITLE: GU,
                                PBF_STATUS: "",
                                PBF_MTYPE: GT,
                                PBF_DAY: "",
                                PBF_DATE: "",
                                PBF_TIME: "",
                                PBF_BLDG: "",
                                PBF_ROOM: "",
                                ENROLL_STATUS: GF.ENROLL_STATUS,
                                PBF_INFO: GR,
                                PBF_HEAD: "HEADER_" + GU
                            });
                        }
                        F7 = GF.SECTION_HEAD + "" + GF.SECTION_NUMBER;
                    }
                    if (undefined != GF.FK_CDI_INSTR_TYPE && GF.FK_CDI_INSTR_TYPE.match(/FI|MI|FM|PB|RE|OT|MU/)) {
                        F7 = GF.SECTION_HEAD + "" + GF.SECTION_NUMBER;
                    }
                    GF.ROW_ATTR = {
                        "rowClass": "wr-gridrow-class wr-gridrow-class-" + GR + "-" + GT + "-" + F7
                    };
                }
                var GS = "";
                var GP = GE ? GU : "";
                var GC = GF.FK_CDI_INSTR_TYPE;
                var Ga = EM(GF.DAY_CODE);
                var GZ = Ay(GF.START_DATE);
                var GM = I(GF.BEGIN_HH_TIME, GF.BEGIN_MM_TIME, GF.END_HH_TIME, GF.END_MM_TIME);
                var GI = "";
                if (GJ) {
                    GI = GZ;
                }
                if (GF.FK_CDI_INSTR_TYPE.match(/FI/) && ! CI) {
                    GF.BLDG_CODE = "TBA";
                    GF.ROOM_CODE = "TBA";
                }
                if (! FO) {
                    var GH = GF.BLDG_CODE;
                    var GY = GF.ROOM_CODE.trim();
                    var GQ = "";
                    if (! GE) {
                        if (undefined != GF.FK_CDI_INSTR_TYPE && GF.FK_CDI_INSTR_TYPE.match(/FI|MI|FM|PB|RE|OT|MU/)) {
                            F7 = GF.SECTION_HEAD + "" + GF.SECTION_NUMBER;
                        }
                        GQ = {
                            "rowClass": "wr-pbfrow-class wr-pbfrow-class-" + GR + "-" + GT + "-" + F7
                        };
                    }
                    Cm.push({
                        SECTION_HEAD: GF.SECTION_HEAD,
                        SECTION_NUMBER: GF.SECTION_NUMBER,
                        PBF_SUBJ_CRSE: GS,
                        PBF_TITLE: GP,
                        PBF_STATUS: "",
                        ENROLL_STATUS: GF.ENROLL_STATUS,
                        PBF_MTYPE: GC,
                        PBF_DAY: Ga,
                        PBF_DATE: GI,
                        PBF_TIME: GM,
                        PBF_BLDG: GH,
                        PBF_ROOM: GY,
                        ROW_ATTR: GQ
                    });
                }
            }
            F3.push(GF);
            FX = GF;
        });
        FC.length = 0;
        FC = null;
        $.each(F3, function (GC, GD) {
            FB.jqGrid("addRowData", GC, GD);
        });
        data = [];
        var GA = FB.jqGrid("getDataIDs");
        var Fm;
        var Fk;
        var E5 = [];
        E5.length = 0;
        for (var F0 = 0; F0 < GA.length; F0++) {
            Fm = GA[F0];
            if (undefined == F3[F0]) {
                return;
            }
            if ("PL" != F3[F0].ENROLL_STATUS) {
                continue;
            }
            if (-1 == $.inArray(F3[F0].SECTION_HEAD, E5)) {
                E5.push(F3[F0].SECTION_HEAD);
            }
        }
        if (E5.length > 0) {
            Du(E5, function (GC) {
                J = [];
                J.length = 0;
                J = GC;
            });
        }
        CQ = 0;
        for (var F0 = 0; F0 < GA.length; F0++) {
            Fm = GA[F0];
            if (undefined == F3[F0]) {
                return;
            }
            var Fp = F3[F0].SECTION_HEAD;
            var Ft = F3[F0].SUBJ_CODE;
            var Fn = F3[F0].CRSE_CODE;
            var FZ = Ft.trim() + " " + Fn;
            var F8 = F3[F0].LONG_DESC;
            var F2 = F3[F0].CRSE_TITLE;
            if (null != F8 && ! F8.match(/^\s*$/)) {
                F2 = F3[F0].CRSE_TITLE.trim() + "<br /> - " + F8;
            }
            if (X) {
                F2 += "<br />" + Ay(F3[F0].START_DATE) + " - " + Ay(F3[F0].END_DATE);
            }
            var FI = F3[F0].BEGIN_HH_TIME;
            var Fc = F3[F0].BEGIN_MM_TIME;
            var Fi = F3[F0].END_HH_TIME;
            var GB = F3[F0].END_MM_TIME;
            var FT = I(FI, Fc, Fi, GB);
            var E7 = EM(F3[F0].DAY_CODE);
            if (E7 == "") {
                E7 = "TBA";
            }
            var FR = F3[F0].SECT_CREDIT_HRS.toFixed(2);
            var Fb = F3[F0].PERSON_FULL_NAME.split(":");
            var F1 = "";
            var FE = [];
            $.each(Fb, function (GC, GD) {
                GD = GD.trim();
                if ($.inArray(GD, FE) === -1) {
                    FE.push(GD);
                    if (0 == GC) {
                        F1 = GD;
                    } else {
                        F1 = F1 + " / " + GD;
                    }
                }
            });
            var E4 = false;
            $.each(FE, function (GC, GD) {
                if (GD.match(/^\s*staff\s*$/i)) {
                    E4 = true;
                    return false;
                }
                if (GC == 0) {
                    FE = '<span title="' + F1 + '">' + GD;
                } else {
                    FE += " + ";
                    return false;
                }
            });
            if (! E4) {
                FE = FE + "</span>";
            }
            var Fq = [];
            switch (F3[F0].ENROLL_STATUS) {
                case "EN": Fq[0] = 0;
                    Fq[1] = "Enrolled";
                    break;
                    title = "Your position on the waitlist is ' +  rawObject.WT_POS + '";
                case "WT": Fq[0] = 1;
                    Fq[1] = "<span title='Your position on the waitlist is " + F3[F0].WT_POS + "'>Waitlist (" + F3[F0].WT_POS + ")</span>";
                    break;
                case "PL": Fq[0] = 2;
                    Fq[1] = "Planned";
                    break;
            }
            var FY = DI(F3[F0].GRADE_OPTION);
            FB.jqGrid("setRowData", Fm, {
                colsubj: FZ,
                CRSE_TITLE: F2,
                DAY_CODE: E7,
                coltime: FT,
                colstatus: Fq[1],
                colstatusorg: Fq[1],
                SECT_CREDIT_HRS: FR,
                PERSON_FULL_NAME: FE,
                GRADE_OPTION: FY,
                BLDG_CODE: F3[F0].BLDG_CODE.trim(),
                ROOM_CODE: F3[F0].ROOM_CODE.trim()
            });
            switch (Fq[0]) {
                case 0:
                    var FW = " wrbuttong grid-but-enroll-class ";
                    break;
                case 1:
                    var FW = " wrbuttong grid-but-wait-class ";
                    break;
                case 2:
                    var FW = " wrbuttong grid-but-plan-class ";
                    break;
            }
            var Fu = "";
            if (2 == Fq[0] && BL(undefined, Ft, Fn, "EN")[0]) {
                Fu = " noMoreEnWtGridClass ";
            }
            if (F3[F0].SECT_CODE.match(/00$/) || F3[F0].SECT_CODE.match(/^\d+$/)) {
                if (undefined != F3[F0].FK_CDI_INSTR_TYPE && ! F3[F0].FK_CDI_INSTR_TYPE.match(/FI|MI|FM|PB|RE|OT|MU/) && 0 == Fq[0]) {
                    CQ++;
                }
                if (2 == Fq[0]) {
                    var FP = false;
                    if (undefined != J[Fp]) {
                        FP = Ac(Fp, J[Fp].AVAIL_SEAT, J[Fp].STP_ENRLT_FLAG, F3[F0].SUBJ_CODE, F3[F0].CRSE_CODE);
                    }
                    if (FP) {
                        var FJ = "<input " + " id=grid-edit-plan-id-enroll-" + Fm + " class=' wrbutton wrbuttong wrbuttongr secondary grid-but-plan-enwt-class grid-but-plan-enroll-class " + FW + Fu + " ' " + " type='button' value='Enroll' />";
                    } else {
                        var FJ = "<input " + " id=grid-edit-plan-id-wait-" + Fm + " class=' wrbutton wrbuttong wrbuttongr secondary grid-but-plan-enwt-class grid-but-plan-wait-class " + FW + Fu + " ' " + " type='button' value='Waitlist' />";
                    }
                    var FN = "<input " + " id=grid-drop-plan-id-" + Fm + " class=' wrbutton wrbuttong wrbuttongl secondary grid-but-plan-remove-class " + FW + " ' " + " type='button' value='Remove' />";
                } else {
                    var FJ = "<input " + " id=grid-edit-id-" + Fm + " class=' wrbutton wrbuttong wrbuttongr secondary grid-but-eddr-class grid-but-edit-class " + FW + " ' " + " type='button' value='Change' />";
                    var FN = "<input " + " id=grid-drop-id-" + Fm + " class=' wrbutton wrbuttong wrbuttongl secondary grid-but-eddr-class grid-but-drop-class " + FW + " ' " + " type='button' value='Drop' />";
                }
                var FA = FN + FJ;
                FB.jqGrid("setCell", Fm, "colaction", FA);
            }
            var E3 = $("#list-id-table tbody tr#" + Fm + "");
            switch (Fq[0]) {
                case 0: E3.addClass("wr-grid-en");
                    break;
                case 1: E3.addClass("wr-grid-wt");
                    break;
                case 2: E3.addClass("wr-grid-pl");
                    break;
            }
        }
        for (var F0 = 0; F0 < GA.length; F0++) {
            Fm = GA[F0];
            var E6 = F3[F0].SECTION_HEAD;
            var FH = F3[F0].ENROLL_STATUS;
            var Ft = F3[F0].SUBJ_CODE;
            var Fn = F3[F0].CRSE_CODE;
            var F6 = F3[F0].CRSE_TITLE;
            var F5 = F3[F0].SECT_CREDIT_HRS;
            var E9;
            var FU = FB.jqGrid("getDataIDs");
            for (var Fy = 0; Fy <= FU.length; Fy++) {
                Fk = FU[Fy];
                var Fr = FB.jqGrid("getRowData", Fk);
                if (Fr["SECTION_NUMBER"] == E6) {
                    E9 = E6;
                    break;
                }
            }
            var Fa = {
                objid: "grid:" + Fm,
                sectionHead: E9,
                enStatus: FH
            };
            var Fl = $("#list-id-table").jqGrid("getRowData", Fm);
            var E8 = false;
            var F9 = false;
            var FG = Fl.colstatus;
            if (undefined != FG) {
                if (FG.toString().match(/enroll/i)) {
                    if (Fl.GRADE_OPTN_CD_PLUS == "+") {
                        E8 = true;
                    }
                    if (Fl.SECT_CREDIT_HRS_PL == "+") {
                        F9 = true;
                    }
                } else {
                    if (FG.toString().match(/waitlist/i)) {
                        var Fs = A3(E6);
                        E8 = Fs[0];
                        F9 = Fs[1];
                    }
                }
            }
            if (! E8 && ! F9) {
                $("#grid-edit-id-" + F0).button().button("disable");
                $("#grid-edit-id-" + F0).attr("title", Cj);
            } else {
                $("#grid-edit-id-" + F0).click(Fa, AE);
            }
            $("#grid-drop-id-" + F0).click(Fa, Aa);
            $("#grid-edit-plan-id-enroll-" + F0).click((function (GD, GC, GI, GH, GG, GF, GE) {
                return function () {
                    DH(GD, GC, GI, GH, GG, GF, GE);
                };
            })(E9, "enroll", Ft, Fn, F6, undefined, undefined));
            $("#grid-edit-plan-id-wait-" + F0).click((function (GD, GC, GI, GH, GG, GF, GE) {
                return function () {
                    DH(GD, GC, GI, GH, GG, GF, GE);
                };
            })(E9, "wait", Ft, Fn, F6, undefined, undefined));
            var Fo = {
                actionTip: "<b style='font-size:16px' >Would you like to remove the following planned class?</b>",
                sectionHead: E9
            };
            $("#grid-drop-plan-id-" + F0).click(Fo, Bs);
        }
        f();
        var FK = "";
        var Fw = "";
        var Fz = "";
        var Fv = "";
        var Fe = "";
        var FD = "";
        var Fd = "";
        var FM = "";
        for (var F0 = 0; F0 < GA.length; F0++) {
            var Fm = F0;
            var FV = F3[F0].SECT_CODE.match(/00$/) ? true : false;
            var FF = ("PL" == F3[F0].ENROLL_STATUS) ? true : false;
            if (Fm == 0) {
                FK = FB.jqGrid("getCell", Fm, "colsubj");
                Fz = FB.jqGrid("getCell", Fm, "SECT_CODE");
                Fe = FB.jqGrid("getCell", Fm, "colstatus");
                Fe = EO(Fe);
                Fd = FB.jqGrid("getCell", Fm, "SECTION_HEAD");
            } else {
                Fw = FB.jqGrid("getCell", Fm, "colsubj");
                Fv = FB.jqGrid("getCell", Fm, "SECT_CODE");
                FD = FB.jqGrid("getCell", Fm, "colstatus");
                FD = EO(FD);
                FM = FB.jqGrid("getCell", Fm, "SECTION_HEAD");
                if (FK == Fw && Fz.substring(0, 1) == Fv.substring(0, 1) && Fe == FD && Fd == FM) {
                    var FS = (F3[F0].PB_FRIEND) ? " " : F3[F0].SECT_CODE;
                    FB.jqGrid("setCell", Fm, "SECT_CODE", FS);
                    FB.jqGrid("setCell", Fm, "colsubj", " ");
                    FB.jqGrid("setCell", Fm, "CRSE_TITLE", " ");
                    FB.jqGrid("setCell", Fm, "GRADE_OPTION", " ");
                    FB.jqGrid("setCell", Fm, "SECT_CREDIT_HRS", " ");
                    FB.jqGrid("setCell", Fm, "PERSON_FULL_NAME", " ");
                    FB.jqGrid("setCell", Fm, "colstatus", " ");
                    FB.jqGrid("setCell", Fm, "WT_POS", " ");
                    FB.jqGrid("setCell", Fm, "colaction", " ");
                }
                FK = Fw;
                Fz = Fv;
                Fe = FD;
                Fd = FM;
            }
        }
        $.each(F3, function (GH, GG) {
            if (GG.PERSON_FULL_NAME.match(/HEADER_/)) {
                var GC = GG.PERSON_FULL_NAME.substring(7);
                var GD = "<div class='wr-gridrow-header-outer-class' id='wr-gridrow-header-outer-id-" + GH + "'><img class='wr-gridrow-header-class' alt='Expand: ' id='wr-gridrow-header-id-" + GH + "' src='" + DP + "' " + " style=' width:8px; height:8px; margin-right: 2px; margin-top: 5px;' ></img> " + GC + "</div>";
                FB.jqGrid("setCell", GH, "SECT_CODE", " ");
                FB.jqGrid("setCell", GH, "colsubj", " ");
                FB.jqGrid("setCell", GH, "CRSE_TITLE", GD);
                FB.jqGrid("setCell", GH, "FK_CDI_INSTR_TYPE", " ");
                FB.jqGrid("setCell", GH, "PERSON_FULL_NAME", " ");
                FB.jqGrid("setCell", GH, "GRADE_OPTION", " ");
                FB.jqGrid("setCell", GH, "SECT_CREDIT_HRS", " ");
                FB.jqGrid("setCell", GH, "DAY_CODE", " ");
                FB.jqGrid("setCell", GH, "coltime", " ");
                FB.jqGrid("setCell", GH, "BLDG_CODE", " ");
                FB.jqGrid("setCell", GH, "ROOM_CODE", " ");
                FB.jqGrid("setCell", GH, "colstatus", " ");
                FB.jqGrid("setCell", GH, "WT_POS", " ");
                FB.jqGrid("setCell", GH, "colaction", " ");
                var GE = GG.SECTION_HEAD + "" + GG.SECTION_NUMBER;
                $("#wr-gridrow-header-outer-id-" + GH).click(function () {
                    var GI = $("#wr-gridrow-header-id-" + GH).attr("src");
                    if (GI === EW) {
                        $("#wr-gridrow-header-id-" + GH).attr("src", DP);
                        $(".wr-gridrow-class-" + GG.ADDINFO + "-" + GG.FK_CDI_INSTR_TYPE + "-" + GE).addClass("grid-row-hidden");
                    } else {
                        $("#wr-gridrow-header-id-" + GH).attr("src", EW);
                        $(".wr-gridrow-class-" + GG.ADDINFO + "-" + GG.FK_CDI_INSTR_TYPE + "-" + GE).removeClass("grid-row-hidden");
                    }
                });
                return;
            }
            if (undefined != GG.FK_CDI_INSTR_TYPE && GG.FK_CDI_INSTR_TYPE.match(/FI|MI|FM|PB|RE|OT|MU/)) {
                if (GG.START_DATE.indexOf("TBA") > -1) {
                    GF = "TBA";
                } else {
                    var GF = FB.jqGrid("getCell", GH, "DAY_CODE");
                    GF = GF + " " + Ay(GG.START_DATE);
                } FB.jqGrid("setCell", GH, "DAY_CODE", GF);
                switch (GG.FK_CDI_INSTR_TYPE) {
                    case "MI": FB.jqGrid("setCell", GH, "CRSE_TITLE", "Midterm");
                        break;
                    case "FI": FB.jqGrid("setCell", GH, "CRSE_TITLE", "Final Exam");
                        break;
                }
            }
        });
        $(".wr-gridrow-class").addClass("grid-row-hidden");
    }
    AK();
    function f() {
        if (! CU) {
            $(".grid-but-plan-wait-class").button().button("disable");
            $(".grid-but-plan-wait-class").attr("title", EU);
        }
        if (! q) {
            $(".grid-but-edit-class").button().button("disable");
            $(".grid-but-edit-class").attr("title", Dq);
        }
        if (! BD) {
            $(".grid-but-drop-class").button().button("disable");
            $(".grid-but-drop-class").attr("title", p);
        }
        if (AV) {
            $(".grid-but-eddr-class").button().button("disable");
            $(".grid-but-eddr-class").attr("title", B3);
            $(".grid-but-plan-enwt-class").button().button("disable");
            $(".grid-but-plan-enwt-class").attr("title", B3);
        } else {
            if (! AB) {
                $(".grid-but-plan-enwt-class").button().button("disable");
                $(".grid-but-plan-enwt-class").attr("title", B3);
            }
        }
        if (C6) {
            $(".noMoreEnWtGridClass").button().button("disable");
            $(".noMoreEnWtGridClass").attr("title", EI);
        }
        if (E2) {
            $(".wrbuttong").button().button("disable");
            $(".wrbuttong").attr("title", CS);
        }
    }
    function EO(E3) {
        return E3.split(" ")[0];
    }
    function CF(E3) {
        return E3.match(/[0-9]+/g);
    }
    function DN() {
        $("#list-id-event").jqGrid("GridUnload");
        if (0 == A8.length) {
            return;
        }
        $("#list-id-event").jqGrid({
            caption: "My Events",
            datatype: "local",
            height: "100%",
            gridview: true,
            loadonce: true,
            sortable: true,
            rowNum: 100,
            viewrecords: true,
            cmTemplate: {
                title: false
            },
            beforeSelectRow: function (E4, E5) {
                return false;
            },
            onRightClickRow: function () {
                $("#list-id-event").jqGrid("resetSelection");
                return false;
            },
            colNames: [
                "Name",
                "Location",
                "Start",
                "End",
                "Days",
                "Action",
                ""
            ],
            colModel: [
                {
                    name: "DESCRIPTION",
                    jsonmap: "DESCRIPTION",
                    fixed: true,
                    width: 150,
                    align: "left",
                    editable: false,
                    sortable: false
                },
                {
                    name: "LOCATION",
                    jsonmap: "LOCATION",
                    fixed: true,
                    width: 150,
                    align: "left",
                    editable: false,
                    sortable: false
                },
                {
                    name: "EV_START_TIME",
                    jsonmap: "START_TIME",
                    fixed: true,
                    width: 100,
                    align: "center",
                    editable: false,
                    sortable: false
                },
                {
                    name: "EV_END_TIME",
                    jsonmap: "END_TIME",
                    fixed: true,
                    width: 100,
                    align: "center",
                    editable: false,
                    sortable: false
                }, {
                    name: "EV_DAYS",
                    jsonmap: "DAYS",
                    fixed: true,
                    width: 200,
                    align: "center",
                    editable: false,
                    sortable: false
                }, {
                    name: "ACTION",
                    jsonmap: "ACTION",
                    fixed: true,
                    width: 120,
                    align: "center",
                    editable: false,
                    sortable: false
                }, {
                    name: "nothing",
                    fixed: true,
                    width: 30,
                    align: "center",
                    editable: false,
                    sortable: false,
                    hidden: ! DO
                }
            ],
            rowattr: function (E6) {
                var E5 = "";
                var E4 = E6.ROW_ATTR;
                if (undefined != E4) {
                    if (undefined != E6.ROW_ATTR.rowClass) {
                        E5 = {
                            "class": E6.ROW_ATTR.rowClass
                        };
                    }
                }
                return E5;
            }
        });
        var E3 = $("#list-id-event");
        $.each(A8, function (E6, E5) {
            var E8 = E6;
            var E9 = Cs(E5.START_TIME);
            var E7 = Cs(E5.END_TIME);
            var E4 = E5.DAYS.split("");
            var FH = ("1" == E4[0]) ? " checked " : "";
            var FG = ("1" == E4[1]) ? " checked " : "";
            var FE = ("1" == E4[2]) ? " checked " : "";
            var FD = ("1" == E4[3]) ? " checked " : "";
            var FC = ("1" == E4[4]) ? " checked " : "";
            var FB = ("1" == E4[5]) ? " checked " : "";
            var FA = ("1" == E4[6]) ? " checked " : "";
            var FI = '<table style="width:100%; margin-top:0px;" class="wr-gridevent-class" ><tr> <td ><label>Mon</label></td> <td ><label>Tue</label></td> <td ><label>Wed</label></td> <td ><label>Thu</label></td> <td ><label>Fri</label></td> <td ><label>Sat</label></td> <td ><label>Sun</label></td> </tr> <tr>' + "	<td ><input disabled " + FH + ' type="checkbox" /></td>' + "	<td ><input disabled " + FG + ' type="checkbox" /></td>' + "	<td ><input disabled " + FE + ' type="checkbox" /></td>' + "	<td ><input disabled " + FD + ' type="checkbox" /></td>' + "	<td ><input disabled " + FC + ' type="checkbox" /></td>' + "	<td ><input disabled " + FB + ' type="checkbox" /></td>' + "	<td ><input disabled " + FA + ' type="checkbox" /></td>' + "	</tr></table>";
            var FF = "<input " + " id=ev-edit-id-" + E8 + " class=' wrbutton wrbuttong wrbuttongr secondary ' " + " type='button' value='Change' />";
            var FJ = "<input " + " id=ev-remove-id-" + E8 + " class=' wrbutton wrbuttong wrbuttongl secondary ' " + " type='button' value='Remove' />";
            var FL = FJ + FF;
            E3.jqGrid("addRowData", E8, {
                EV_START_TIME: E9,
                EV_END_TIME: E7,
                EV_DAYS: FI,
                DESCRIPTION: E5.DESCRIPTION,
                LOCATION: E5.LOCATION,
                ACTION: FL
            });
            var FK = {
                aeName: E5.DESCRIPTION,
                aeDays: E5.DAYS,
                aeLocation: E5.LOCATION,
                aeStartTime: E5.START_TIME,
                aeEndTime: E5.END_TIME,
                aeTimeStamp: E5.TIME_STAMP
            };
            $("#ev-edit-id-" + E8).click(FK, Ah);
            $("#ev-remove-id-" + E8).click(FK, Ee);
        });
    }
    DN();
    function c() {
        var E8 = AR(V);
        var E6 = [];
        E6.length = 0;
        var E4 = [];
        E6.length = 0;
        var E5 = {};
        $.each(E8, function (E9, FA) {
            if (FA.SECTION_NUMBER != FA.SECTION_HEAD) {
                return;
            }
            if (E5[FA.SECTION_NUMBER]) {
                return;
            }
            E5[FA.SECTION_NUMBER] = true;
            if ("EN" == FA.ENROLL_STATUS) {
                E6.push(FA.SUBJ_CODE.trim() + "." + FA.CRSE_CODE + "." + FA.SECTION_NUMBER);
            }
            if ("WT" == FA.ENROLL_STATUS) {
                E4.push(FA.SUBJ_CODE + "." + FA.CRSE_CODE + "." + FA.SECTION_NUMBER);
            }
        });
        var E3 = "";
        if (E6.length > 0) {
            E3 = "&class=" + E6.join(":").replace(/\s/g, "");
        }
        var E7 = "";
        if (E4.length > 0) {
            E7 = "&waitlist=" + E4.join(":").replace(/\s/g, "");
        }
        E8.length = 0;
        E8 = null;
        E6.length = 0;
        E6 = null;
        E4.length = 0;
        E4 = null;
        E5 = {};
        E5 = null;
        $("#view-booklist").empty();
        if (V.length > 0) {
            $("#view-booklist").append('<a id="print-link" href="#">Print Schedule</a>');
            $("#view-booklist").on("click", "#print-link", AI);
        }
        if ("" != E3 || "" != E7) {
            $("#view-booklist").append(" | <a id='viewbooklistlink' style='color:white;' target='_blank' href='https://ucsdbkst.ucsd.edu/wrtx/FullBookList?term=" + Ca + E3 + E7 + "'>View Book List</a>");
        }
    }
    c();
    function AI() {
        $(".wr-gridrow-class").removeClass("grid-row-hidden");
        $(".wr-pbfrow-class").removeClass("grid-row-hidden");
        window.print();
        $(".wr-gridrow-header-class").attr("src", DP);
        $(".wr-pbfrow-header-class").attr("src", DP);
        $(".wr-gridrow-class").addClass("grid-row-hidden");
        $(".wr-pbfrow-class").addClass("grid-row-hidden");
        return false;
    }
    $("#dialog-view").dialog({
        autoOpen: false,
        maxWidth: 1050,
        position: {
            my: "center",
            at: "center",
            of: window
        },
        height: "auto",
        width: 1050,
        modal: true,
        closeOnEscape: false,
        buttons: {
            Cancel: {
                text: "Close",
                click: function () {
                    $(this).dialog("close");
                }
            }
        }
    });
    $("#dialog-choose").dialog({
        autoOpen: false,
        maxWidth: 1050,
        position: {
            my: "center",
            at: "center",
            of: window
        },
        height: "auto",
        width: 1050,
        modal: true,
        closeOnEscape: false,
        buttons: {
            Cancel: {
                text: "Close",
                click: function () {
                    $(this).dialog("close");
                }
            }
        }
    });
    function Dp(FD, FA, E4, E7, FE) {
        var E6 = {};
        Eo = [];
        Eo.length = 0;
        var E9 = [];
        E9.length = 0;
        $.each(FA, function (FG, FI) {
            if (true == FI.PB_FRIEND) {
                return;
            }
            if ("WT" == FI.ENROLL_STATUS) {
                E9.push(FI);
                return;
            }
            var FH = FI.SECTION_NUMBER + FI.ENROLL_STATUS + FI.DAY_CODE + I(FI.BEGIN_HH_TIME, FI.BEGIN_MM_TIME, FI.END_HH_TIME, FI.END_MM_TIME);
            if (!(FH in E6)) {
                E6[FH] = true;
                E9.push(FI);
            } else {
                FI.DUPLICATE = true;
                E9.push(FI);
                Eo.push(FI);
            }
        });
        E6 = {};
        E6 = null;
        var E5 = [];
        var FF = new Date().getTime();
        An = [];
        An.length = 0;
        $("#calendar-id-tba").empty();
        var E3 = [];
        var E8 = [];
        $.each(FD, function (FL, FQ) {
            var FJ = FQ.DESCRIPTION;
            var FK = FQ.LOCATION;
            var FH = FJ + "<br>" + FK;
            var FR = [];
            FR = FQ.DAYS.split("");
            for (var FI = 0; FI < FR.length; FI++) {
                if ("0" == FR[FI]) {
                    continue;
                }
                var FP = FI + 1;
                var FO = Number(FF) + "000" + FL + FI;
                var FN = "9" + FP + FQ.START_TIME;
                var FM = "9" + FP + FQ.END_TIME;
                var FG = {
                    id: FO,
                    start: K(FN),
                    end: K(FM),
                    title: FH,
                    enStatus: "EV",
                    className: CH + " wr-event-cal-" + FO,
                    aeName: FJ,
                    aeDay: FP,
                    aeDays: FQ.DAYS,
                    aeLocation: FK,
                    aeStartTime: FQ.START_TIME,
                    aeEndTime: FQ.END_TIME,
                    aeTimeStamp: FQ.TIME_STAMP
                };
                E5.push(FG);
            }
        });
        var FB = {};
        $.each(E9, function (FM, FJ) {
            if (X) {
                if (b.localeCompare(String(FJ.END_DATE)) > 0) {
                    return;
                }
            }
            var FZ = FJ.FK_CDI_INSTR_TYPE;
            if (undefined != FZ && FZ.match(/FI|MI|FM|PB|RE|MU/)) {
                return;
            }
            var FO = FJ.FK_SPM_SPCL_MTG_CD;
            if (FO == undefined || FO.trim() != "") {
                return;
            }
            var FV = FJ.SECTION_HEAD;
            var FT = Number(FF) + FM;
            var Fb = FJ.DAY_CODE;
            var FI = String("0" + FJ.BEGIN_HH_TIME).slice(-2);
            var FY = String("0" + FJ.BEGIN_MM_TIME).slice(-2);
            var Fj = String("0" + FJ.END_HH_TIME).slice(-2);
            var FW = String("0" + FJ.END_MM_TIME).slice(-2);
            var FK = FI + "" + FY;
            var FQ = Fj + "" + FW;
            var Fe = "9" + Fb + FK;
            var FH = "9" + Fb + FQ;
            switch (FJ.ENROLL_STATUS) {
                case "EN":
                    var FR = Cw;
                    break;
                case "WT":
                    var FR = Cn;
                    break;
                case "PL":
                    var FR = DA;
                    break;
            }
            if ("PL" != FJ.ENROLL_STATUS) {
                An.push({startTime: FK, endTime: FQ, dayCode: Fb, sectionHead: FV});
            }
            var Fc = FJ.SUBJ_CODE + " " + FJ.CRSE_CODE;
            var FX = FJ.BLDG_CODE;
            if ("" == FX.trim()) {
                FX = "TBA";
            }
            var Fg = FJ.ROOM_CODE;
            if ("" == Fg.trim()) {
                Fg = "TBA";
            }
            var Fa = FJ.PERSON_FULL_NAME.split(":");
            var FN = "";
            var FG = [];
            $.each(Fa, function (Fk, Fl) {
                Fl = Fl.trim();
                if ($.inArray(Fl, FG) === -1) {
                    FG.push(Fl);
                    if (0 == Fk) {
                        FN = Fl;
                    } else {
                        FN = FN + " / " + Fl;
                    }
                }
            });
            $.each(FG, function (Fk, Fl) {
                if (Fl.match(/^\s*staff\s*$/i)) {
                    return false;
                }
                if (Fk == 0) {
                    FG = Fl;
                } else {
                    FG = FG + '<span title="' + FN + '"> + </span> ';
                    return false;
                }
            });
            var Ff = '<span title="' + CW(FZ) + '">' + FZ + "</span>";
            var FU = "<span id='calendar-title-event-id-" + FT + "' class='calendar-course-title calendar-section-" + FV + "'>" + Fc + "</span>" + "<br /><div class='calendar-type-location'>" + Ff + " / " + '<a target="_blank"  class="nonewwin ' + FR + '" href="http://act.ucsd.edu/maps/?isisCode=' + FX + '">' + FX.trim() + " " + Fg.trim() + "</a></div>" + "<br /><div class='calendar-instructor'>" + FG + "</div>";
            if (FI == 0 && FY == 0 && Fj == 0 && FW == 0) {
                var FS = Fc.replace(/\s/g, "");
                if (!(FS in FB)) {
                    FB[FS] = true;
                    $("#calendar-id-tba").append('<tr class="CALTBA_' + FJ.SECTION_HEAD + '"' + ' style="line-height:120%; color:black" >' + ' <td style="text-align:left">' + " *No schedule time for " + Fc + " </td></tr>");
                }
                return;
            }
            var Fi = false;
            var Fd = false;
            if ("EN" == FJ.ENROLL_STATUS) {
                if ("+" == FJ.GRADE_OPTN_CD_PLUS) {
                    Fi = true;
                }
                if ("+" == FJ.SECT_CREDIT_HRS_PL) {
                    Fd = true;
                }
            } else {
                if ("WT" == FJ.ENROLL_STATUS) {
                    var Fh = A3(FV);
                    Fi = Fh[0];
                    Fd = Fh[1];
                }
            }
            var FP = FJ.COUNT_ON_WAITLIST || 0;
            var FL = FJ.SCTN_CPCTY_QTY - FJ.SCTN_ENRLT_QTY;
            if (FL < 0 || FJ.STP_ENRLT_FLAG === "Y") {
                FL = 0;
            }
            if (FJ.DUPLICATE == undefined) {
                E5.push({
                    id: FT,
                    start: K(Fe),
                    end: K(FH),
                    title: FU,
                    enStatus: FJ.ENROLL_STATUS,
                    sectionHead: FV,
                    subjCode: FJ.SUBJ_CODE,
                    crseCode: FJ.CRSE_CODE,
                    subjCrse: Fc,
                    stitle: FJ.CRSE_TITLE,
                    unitVal: FJ.SECT_CREDIT_HRS,
                    gradeVal: FJ.GRADE_OPTION,
                    gradeEnable: Fi,
                    unitEnable: Fd,
                    aeDay: FJ.DAY_CODE,
                    aeStartTime: FK,
                    aeEndTime: FQ,
                    sectionNumber: FJ.SECTION_NUMBER,
                    building: FX,
                    room: Fg,
                    className: FR,
                    capacity: FJ.SCTN_CPCTY_QTY,
                    available: FL,
                    wtcount: FP,
                    startDate: FJ.START_DATE
                });
            }
            E8.push({
                sectionHead: FV,
                time: I(FJ.BEGIN_HH_TIME, FJ.BEGIN_MM_TIME, FJ.END_HH_TIME, FJ.END_MM_TIME),
                building: FX,
                room: Fg,
                status: FJ.ENROLL_STATUS,
                sectionCode: FJ.SECT_CODE,
                subjCrse: Fc,
                days: FJ.DAY_CODE,
                sectionNumber: FJ.SECTION_NUMBER,
                title: FJ.CRSE_TITLE,
                units: FJ.SECT_CREDIT_HRS,
                grade: FJ.GRADE_OPTION,
                type: FJ.FK_CDI_INSTR_TYPE,
                id: FT,
                subjCode: FJ.SUBJ_CODE,
                crseCode: FJ.CRSE_CODE,
                duplicate: (FJ.DUPLICATE != undefined),
                wtposition: FJ.WT_POS,
                subtitle: FJ.LONG_DESC,
                capacity: FJ.SCTN_CPCTY_QTY,
                available: FL,
                wtcount: FP
            });
            if ($.inArray(FV, E3) == -1) {
                E3.push(FV);
            }
        });
        var FC = $.extend(true, [], E8);
        Ag = {};
        Ag.length = 0;
        $.each(E3, function (FH, FG) {
            var FI = [];
            FI.length = 0;
            $.each(E8, function (FK, FL) {
                if (FL.sectionHead == FG) {
                    var FJ = false;
                    $.each(FI, function (FN, FM) {
                        if (FM.sectionCode == FL.sectionCode) {
                            if (FM.time == FL.time && FM.building == FL.building && FM.room == FL.room) {
                                FM.days = FM.days.toString() + FL.days.toString();
                                FJ = true;
                                return false;
                            }
                        }
                    });
                    if (! FJ) {
                        FI.push(FL);
                    }
                }
            });
            Ag[FG] = FI;
        });
        $.each(Eo, function (FI, FJ) {
            if (Ag[FJ.SECTION_NUMBER + FJ.ENROLL_STATUS] != undefined) {
                return;
            }
            var FN = [];
            FN.length = 0;
            var FM = true;
            var FL = undefined;
            for (var FH in Ag) {
                var FK = false;
                var FG = undefined;
                $.each(Ag[FH], function (FP, FO) {
                    if (FJ.ENROLL_STATUS != FO.status) {
                        return false;
                    }
                    if (FH == FO.sectionNumber) {
                        FG = FO;
                    }
                    if (FJ.SECTION_NUMBER == FO.sectionNumber) {
                        FL = FO;
                        FK = true;
                    }
                });
                if (FM && FL != undefined) {
                    FN.push(FL);
                    FM = false;
                }
                if (FK && FG != undefined) {
                    FN.push(FG);
                }
            }
            if (FN.length > 0) {
                Ag[FJ.SECTION_NUMBER + FJ.ENROLL_STATUS] = FN;
            }
        });
        $.each(FC, function (FG, FI) {
            if (FI.duplicate) {
                return;
            }
            var FH = FI.sectionHead;
            $.each(Eo, function (FJ, FK) {
                if (FK.SECTION_NUMBER == FI.sectionNumber && FK.ENROLL_STATUS == FI.status) {
                    FH = FI.sectionNumber + FI.status;
                    return false;
                }
            });
            $("#calendar-id").on("click", "#calendar-title-event-id-" + FI.id, function () {
                EJ(Ag[FH], FI.id);
            });
        });
        FB = {};
        FB = null;
        FE(E5);
    }
    function EJ(E5, E8) {
        if ($("#calendar-title-event-id-" + E8).hasClass("calendar-course-title-hidden")) {
            return;
        }
        var E3 = (E5[0].status == "WT");
        $("#diagview-wtcount-header").empty();
        $("#diagview-wtcount-header").text(E3 ? "Waitlist Position" : "Waitlist Count");
        $("#diagview-class-table-subj").empty();
        $("#diagview-class-table-title").empty();
        $("#diagview-class-table-grade-p").empty();
        $("#diagview-class-table-unit-p").empty();
        $("#diagview-class-table-code").empty();
        $("#diagview-class-table-type").empty();
        $("#diagview-class-table-days").empty();
        $("#diagview-class-table-time").empty();
        $("#diagview-class-table-seats").empty();
        $("#diagview-class-table-wtcount").empty();
        $("#dialog-view").dialog("open");
        DV();
        $("#diagview-class-table-subj").text(E5[0].subjCrse);
        var E6 = E5[0].title;
        if (E5[0].subtitle.trim() != "") {
            E6 += " - " + E5[0].subtitle;
        }
        $("#diagview-class-table-title").text(E6);
        $("#diagview-class-table-grade-p").text(Af(E5[0].grade));
        $("#diagview-class-table-unit-p").text(E5[0].units.toFixed(2));
        $("#diagview-class-table-code").text(E5[0].sectionCode);
        $("#diagview-class-table-type").text(E5[0].type);
        $("#diagview-class-table-days").text(EM(E5[0].days));
        $("#diagview-class-table-time").text(E5[0].time);
        if (E5.length == 1) {
            var E4 = E5[0].available + "/" + E5[0].capacity;
            $("#diagview-class-table-seats").text(E4);
            if (E3) {
                $("#diagview-class-table-wtcount").text(E5[0].wtposition);
            } else {
                $("#diagview-class-table-wtcount").text(E5[0].wtcount);
            }
        }
        var E7 = $("#diagview-class-table");
        $(".diagview-class-table-no1234").remove();
        $.each(E5.slice(1), function (FA, FC) {
            rowDef = '<tr class="diagview-class-table-no1234" >';
            var FB = FC.available + "/" + FC.capacity;
            var E9 = "";
            if (E3) {
                E9 = FC.wtposition;
            } else {
                E9 = FC.wtcount;
            } E7.append(rowDef + '<td class="diagclass-class-table-empty"></td>' + '<td class="diagclass-class-table-empty"></td>' + '<td class="diagclass-class-table-empty"></td>' + '<td class="diagclass-class-table-empty"></td>' + "<td>" + FC.sectionCode + "</td>" + "<td>" + FC.type + "</td>" + "<td>" + EM(FC.days) + "</td>" + "<td>" + FC.time + "</td>" + "<td>" + FB + "</td>" + "<td>" + E9 + "</td>" + "</tr>");
        });
    }
    function Ev(E3, E4) {
        if ($("#calendar-title-event-id-" + E3[0].id).hasClass("calendar-course-title-hidden")) {
            return;
        }
        $("#diagchoose-class-table-subj").empty();
        $("#diagchoose-class-table-title").empty();
        $("#diagchoose-class-table-grade-p").empty();
        $("#diagchoose-class-table-unit-p").empty();
        $("#diagchoose-class-table-code").empty();
        $("#diagchoose-class-table-type").empty();
        $("#diagchoose-class-table-days").empty();
        $("#diagchoose-class-table-time").empty();
        $("#diagchoose-class-table-seats").empty();
        $("#diagchoose-class-table-wtcount").empty();
        $("#diagchoose-class-table-action").empty();
        $("#dialog-choose").dialog("open");
        DV();
        $("#diagchoose-class-table-subj").text(E3[0].subjCrse);
        $("#diagchoose-class-table-title").text(E3[0].title);
        $("#diagchoose-class-table-grade-p").text(Af(E3[0].grade));
        $("#diagchoose-class-table-unit-p").text(E3[0].units.toFixed(2));
        $("#diagchoose-class-table-code").text(E3[0].sectionCode);
        $("#diagchoose-class-table-type").text(E3[0].type);
        $("#diagchoose-class-table-days").text(EM(E3[0].days));
        $("#diagchoose-class-table-time").text(E3[0].time);
        EB("<strong>Which section would you like to perform this action on?</strong>");
        var E5 = $("#diagchoose-class-table");
        $(".diagview-class-table-no1234").remove();
        $.each(E3.slice(1), function (E8, FC) {
            var FD = false;
            if (FC.status == "PL") {
                if (undefined != J[FC.sectionNumber]) {
                    FD = Ac(FC.sectionNumber, J[FC.sectionNumber].AVAIL_SEAT, J[FC.sectionNumber].STP_ENRLT_FLAG, FC.subjCode, FC.crseCode);
                }
            }
            rowDef = '<tr class="diagview-class-table-no1234" >';
            var E9 = FC.available + "/" + FC.capacity;
            var E7 = FC.wtcount;
            var FB = "choose-button-event-" + FC.id;
            var E6 = "";
            switch (E4) {
                case "change": E6 = "Change";
                    break;
                case "drop": E6 = "Drop";
                    break;
                case "waitlist":
                case "enroll": E6 = (FD) ? "Enroll" : "Waitlist";
                    break;
                case "removeplan": E6 = "Remove";
                    break;
            }
            E5.append(rowDef + '<td class="diagclass-class-table-empty"></td>' + '<td class="diagclass-class-table-empty"></td>' + '<td class="diagclass-class-table-empty"></td>' + '<td class="diagclass-class-table-empty"></td>' + "<td>" + FC.sectionCode + "</td>" + "<td>" + FC.type + "</td>" + "<td>" + EM(FC.days) + "</td>" + "<td>" + FC.time + "</td>" + "<td>" + E9 + "</td>" + "<td>" + E7 + "</td>" + '<td><input type="button"  id="' + FB + '" class="ui-button wrbutton wrbuttonc" value="' + E6 + '" /></td>' + "</tr>");
            switch (E4) {
                case "change":
                    var FA = {
                        data: {
                            objid: FC.id,
                            sectionHead: FC.sectionHead,
                            enStatus: FC.status
                        }
                    };
                    $("#" + FB).click(function () {
                        AE(FA);
                        $("#dialog-choose").dialog("close");
                    });
                    break;
                case "drop":
                    var FA = {
                        data: {
                            objid: FC.id,
                            sectionHead: FC.sectionHead,
                            enStatus: FC.status
                        }
                    };
                    $("#" + FB).click(function () {
                        Aa(FA);
                        $("#dialog-choose").dialog("close");
                    });
                    break;
                case "waitlist":
                case "enroll":
                    $("#" + FB).click(function () {
                        $("#dialog-choose").dialog("close");
                        DH(FC.sectionHead, (FD) ? "enroll" : "wait", FC.subjCode, FC.crseCode, FC.title, undefined, undefined);
                    });
                    break;
                case "removeplan":
                    var FA = {
                        data: {
                            actionTip: "<b style='font-size:16px' >Would you like to remove the following planned class?</b>",
                            sectionHead: FC.sectionHead
                        }
                    };
                    $("#" + FB).click(function () {
                        Bs(FA);
                        $("#dialog-choose").dialog("close");
                    });
                    break;
            }
        });
    }
    function AO(E3) {
        return(E3.charAt(0) == "0") ? E3.charAt(1) : E3.substring(0, 2);
    }
    function DG() {
        C2 = "23";
        Y = "00";
        Am = false;
        $.each(A8, function (E7, E9) {
            var E6 = E9.START_TIME.substring(0, 2);
            var E8 = E9.END_TIME.substring(0, 2);
            if (E6 < C2) {
                C2 = E6;
            }
            if (E8 > Y) {
                Y = E8;
            }
        });
        C2 = C2.substring(0, 2);
        Y = Y.substring(0, 2);
        var E3 = AR(V);
        var E5 = {};
        var E4 = [];
        E4.length = 0;
        $.each(E3, function (E6, E8) {
            if (true == E8.PB_FRIEND) {
                return;
            }
            if ("PL" != E8.ENROLL_STATUS) {
                E4.push(E8);
                return;
            }
            var E7 = E8.SECTION_NUMBER + E8.DAY_CODE + I(E8.BEGIN_HH_TIME, E8.BEGIN_MM_TIME, E8.END_HH_TIME, E8.END_MM_TIME);
            if (!(E7 in E5)) {
                E5[E7] = true;
                E4.push(E8);
            }
        });
        $.each(E4, function (E8, FA) {
            var E6 = String("0" + FA.BEGIN_HH_TIME).slice(-2);
            var E9 = String("0" + FA.BEGIN_MM_TIME).slice(-2);
            var E7 = String("0" + FA.END_HH_TIME).slice(-2);
            var FB = String("0" + FA.END_MM_TIME).slice(-2);
            if (!(E6 == 0 && E9 == 0 && E7 == 0 && FB == 0)) {
                if (E6 < C2 && E6 != "00") {
                    C2 = E6;
                }
                if (E7 > Y) {
                    Y = E7;
                }
            }
        });
        if (C2 == "23" && Y == "00") {
            C2 = "7";
            Y = "7";
            Am = true;
        }
    }
    var Cc = "alwaysdisable";
    function Dm(E3, E4) {
        $(E3).button().button("disable");
        $(E3).button().addClass(Cc);
        $(E3).attr("title", E4);
    }
    function Cl() {
        if (! q) {
            Dm(".cal-edit-class", Dq);
        }
        if (! BD) {
            Dm(".cal-drop-class", p);
        }
        if (! CU) {
            Dm(".cal-plan-wait-class", EU);
        }
        if (AV) {
            Dm(".cal-eddr-class", B3);
            Dm(".cal-plan-enwt-class", B3);
        } else {
            if (! AB) {
                Dm(".cal-plan-enwt-class", DK);
            }
        }
        if (C6) {
            Dm(".noMoreEnWtCalClass", EI);
        }
        if (E2) {
            Dm(".wrbuttonc", CS);
            $(".cal-event-class-but").button().button("enable");
            $(".cal-event-class-but").button().removeClass(Cc);
            $(".cal-event-class-but").removeAttr("title");
        }
    }
    function A4() {
        var E4 = [];
        var E3 = [];
        DG();
        $("#calendar-id").empty();
        $("#calendar-id").fullCalendar({
            slotEventOverlap: true,
            defaultView: "agendaWeek",
            header: {
                left: false,
                center: false,
                right: false
            },
            columnFormat: {
                week: "dddd"
            },
            height: 9999,
            axisFormat: (Am) ? "" : "htt",
            editable: false,
            theme: true,
            allDaySlot: false,
            allDayDefault: false,
            weekends: true,
            slotMinutes: 30,
            firstDay: 1,
            minTime: parseInt(AO(C2)),
            maxTime: parseInt(AO(Y)) + 1,
            ignoreTimezone: false,
            defaultEventMinutes: 50,
            events: function (E9, E5, E8) {
                if (V != null) {
                    var E7 = AR(V);
                    Dp(A8, E7, E9, E5, E8);
                } else {
                    var E6 = Bv ? null : ES;
                    Bl(E6, "", "", function (FA) {
                        V = FA;
                        Dp(A8, AR(V), E9, E5, E8);
                    });
                }
            },
            eventClick: function (FC, E6, E5) {
                $(this).css("z-index", 99);
                if ($(this).hasClass("event-div-hidden")) {
                    E6.stopPropagation();
                }
                $(this).removeClass("event-div-hidden");
                var FB = E3;
                var FA = $.extend(true, [], FB);
                var E9 = $(this).attr("id").substring(16);
                var E7;
                $.each(FA, function (FD, FE) {
                    if (FE.id == E9) {
                        E7 = FE;
                        FA.splice(FD, 1);
                        return false;
                    }
                });
                $.each(FA, function (FD, FE) {
                    if (FE.day == E7.day) {
                        if (FE.start < E7.end && E7.start < FE.end) {
                            $(".fc-event-button-class-" + FE.id).button().button("disable");
                            FE.element.css("z-index", 0);
                            if (!$("#fc-event-div-id-" + FE.id).hasClass("event-div-hidden")) {
                                $("#fc-event-div-id-" + FE.id).addClass("event-div-hidden");
                            }
                            if ($("#calendar-title-event-id-" + FE.id).length) {
                                $("#calendar-id").off("click", "#calendar-title-event-id-" + FE.id, EJ);
                                if (!$("#calendar-title-event-id-" + FE.id).hasClass("calendar-course-title-hidden")) {
                                    $("#calendar-title-event-id-" + FE.id).addClass("calendar-course-title-hidden");
                                }
                            }
                        }
                    }
                });
                $(".fc-event-button-class-" + E9).button().button("enable");
                $("." + Cc).button().button("disable");
                if ($("#calendar-title-event-id-" + E9).length) {
                    var E8 = E7.sectionHead;
                    $.each(Eo, function (FD, FE) {
                        if (FE.SECTION_NUMBER == E7.section && FE.ENROLL_STATUS == E7.status) {
                            E8 = FC.sectionNumber + E7.status;
                            return false;
                        }
                    });
                    $("#calendar-id").on("click", "#calendar-title-event-id-" + FC.id, function () {
                        EJ(Ag[E8], FC.id);
                    });
                    $("#calendar-title-event-id-" + E9).removeClass("calendar-course-title-hidden");
                }
            },
            eventAfterAllRender: function (E5) {
                $("#calendar-id .fc-today").removeClass("ui-state-highlight");
                $.each(E4, function (E7, E6) {
                    var E8 = E6;
                    $.each(E4.slice(E7 + 1), function (FA, E9) {
                        if (E6.day == E9.day && E6.section != E9.section && E6.startDate == E9.startDate) {
                            if (E6.start < E9.end && E9.start < E6.end) {
                                E8 = E9;
                                if (E9.status != "EV" && E6.status != "EV") {
                                    if (! E9.element.hasClass("conflict-cal-event")) {
                                        E9.element.addClass("conflict-cal-event");
                                    }
                                    if (! E6.element.hasClass("conflict-cal-event")) {
                                        E6.element.addClass("conflict-cal-event");
                                    }
                                }
                            }
                        }
                    });
                    E6.top = (E8 == E6);
                });
                $.each(E4, function (E6, E7) {
                    if (! E7.top) {
                        $(".fc-event-button-class-" + E7.id).button().button("disable");
                        if (!$("#fc-event-div-id-" + E7.id).hasClass("event-div-hidden")) {
                            $("#fc-event-div-id-" + E7.id).addClass("event-div-hidden");
                        }
                        $("#calendar-id").off("click", "#calendar-title-event-id-" + E7.id, EJ);
                        if (!$("#calendar-title-event-id-" + E7.id).hasClass("calendar-course-title-hidden")) {
                            $("#calendar-title-event-id-" + E7.id).addClass("calendar-course-title-hidden");
                        }
                    }
                });
                Cl();
                E3 = $.extend(true, [], E4);
                E4 = [];
                E4.length = 0;
            },
            eventAfterRender: function (E7, E6, E5) {
                if ($(E6).css("width").replace(/px/i, "") < 100) {
                    $(E6).css("width", "100px");
                }
            },
            eventRender: function (Fm, FJ, E8) {
                FJ.find(".fc-event-title").html(Fm.title);
                FJ.attr("id", "fc-event-div-id-" + Fm.id);
                var FK = Fm.id;
                var E7 = Fm.sectionHead;
                var Fg = Fm.subjCode;
                var FY = Fm.crseCode;
                var Fl = Fm.stitle;
                var Fb = Fm.gradeVal;
                var FE = Fm.unitVal;
                var FI = Fm.enStatus;
                var FG = undefined;
                var FF = undefined;
                var FV = Fm.aeName;
                var FB = Fm.aeDay;
                var FO = Fm.aeDays;
                var E6 = Fm.aeLocation;
                var Fd = Fm.aeStartTime;
                var FR = Fm.aeEndTime;
                var FW = Fm.aeTimeStamp;
                var FS = Fm.sectionNumber || "";
                var FH = [];
                E4.push({
                    id: Fm.id,
                    element: FJ,
                    status: FI,
                    day: FB,
                    start: Fd,
                    end: FR,
                    section: FS,
                    sectionHead: E7,
                    startDate: Fm.startDate
                });
                switch (FI) {
                    case "EN": FG = 0;
                        FF = "Enrolled";
                        break;
                    case "WT": FG = 1;
                        FF = "Waitlist";
                        break;
                    case "PL": FG = 2;
                        FF = "Planned";
                        break;
                    case "EV": FG = 3;
                        FF = "Event";
                        break;
                }
                var FA = Fm.gradeEnable;
                var Fn = Fm.unitEnable;
                var FX = FJ[0].innerHTML;
                FX = FX.replace(/fc-event-time">([^<]+)<\/div>/, 'fc-event-time">' + "<span> $1</span>" + "<span class='fc-local-enstatus' > " + FF + "</span>" + "</div>");
                switch (FG) {
                    case 0:
                        var Ff = " wrbuttonc cal-enroll-class-but ";
                        break;
                    case 1:
                        var Ff = " wrbuttonc cal-wait-class-but ";
                        break;
                    case 2:
                        var Ff = " wrbuttonc cal-plan-class-but ";
                        break;
                    case 3:
                        var Ff = " wrbuttonc cal-event-class-but ";
                        break;
                    default:
                        var Ff = " wrbuttonc ";
                        break;
                }
                var FN = undefined;
                var FP = undefined;
                var E9 = "cal-edit-id-" + FK;
                var FC = "cal-drop-id-" + FK;
                var Fe = "cal-plan-enroll-id-" + FK;
                var Fk = "cal-plan-wait-id-" + FK;
                var FZ = "cal-plan-remove-id-" + FK;
                var Fc = "cal-event-edit-id-" + FK;
                var E5 = "cal-event-remove-id-" + FK;
                var FD = "fc-event-button-class-" + Fm.id;
                var FT = false;
                $.each(Eo, function (Fo, Fp) {
                    if (Fp.SECTION_NUMBER == Fm.sectionNumber && Fp.ENROLL_STATUS == Fm.enStatus) {
                        FT = true;
                        return false;
                    }
                });
                if (2 == FG) {
                    var FM = false;
                    if (FT) {
                        var FL = Fm.sectionNumber + Fm.enStatus;
                        var FQ = Ag[FL];
                        $.each(FQ.slice(1), function (Fo, Fp) {
                            if (undefined != J[Fp.sectionNumber]) {
                                var Fq = Ac(Fp.sectionNumber, J[Fp.sectionNumber].AVAIL_SEAT, J[Fp.sectionNumber].STP_ENRLT_FLAG, Fp.subjCode, Fp.crseCode);
                                if (Fq) {
                                    FM = true;
                                    return false;
                                }
                            }
                        });
                    } else {
                        if (undefined != J[E7]) {
                            FM = Ac(E7, J[E7].AVAIL_SEAT, J[E7].STP_ENRLT_FLAG, Fg, FY);
                        }
                    }
                    if (BL(undefined, Fg, FY, "EN")[0]) {
                        var Fh = " noMoreEnWtCalClass ";
                    } else {
                        var Fh = "";
                    }
                    if (FM) {
                        FN = "<input type='button'  id='" + Fe + "' " + " class='ui-button wrbutton wrbuttonc wrbuttoncr secondary cal-plan-enwt-class cal-plan-enroll-class " + Ff + Fh + " " + FD + " ' " + "value='Enroll' />";
                    } else {
                        FN = "<input type='button'  id='" + Fk + "' " + " class='ui-button wrbutton wrbuttonc wrbuttoncr secondary cal-plan-enwt-class cal-plan-wait-class " + Ff + Fh + " " + FD + " ' " + " value='Waitlist' />";
                    } FP = "<input type='button'  id='" + FZ + "' " + " class='ui-button wrbutton wrbuttonc wrbuttoncl secondary cal-plan-remove-class " + Ff + " " + FD + " ' " + " value='Remove' />";
                } else {
                    if (3 == FG) {
                        FN = "<input type='button'  id='" + Fc + "' " + " class='ui-button wrbutton wrbuttonc wrbuttoncr secondary cal-event-class cal-event-edit-class " + Ff + " " + FD + " ' " + " ' value='Change' />";
                        FP = "<input type='button'  id='" + E5 + "' " + " class='ui-button wrbutton wrbuttonc wrbuttoncl secondary cal-event-class cal-event-remove-class " + Ff + " " + FD + " ' " + " ' value='Remove' />";
                    } else {
                        FN = "<input type='button'  id='" + E9 + "' " + " class='ui-button wrbutton wrbuttonc wrbuttoncr secondary cal-eddr-class cal-edit-class " + Ff + " " + FD + " ' " + " ' value='Change' />";
                        FP = "<input type='button'  id='" + FC + "' " + " class='ui-button wrbutton wrbuttonc wrbuttoncl secondary cal-eddr-class cal-drop-class " + Ff + " " + FD + " ' " + " ' value='Drop' />";
                    }
                }
                var Fi = FP + FN;
                if (DO) {
                    FX = FX.replace(/(<\/div>)\s*(<\/div>)/i, "$1" + Fi + "$2");
                } else {
                    FX = FX.replace(/(<\/div>)\s*(<\/div>)/, "$1" + Fi + "$2");
                } FJ[0].innerHTML = FX;
                var FU = {
                    objid: Fm.id,
                    sectionHead: E7,
                    enStatus: FI
                };
                if (FT) {
                    var FL = Fm.sectionNumber + Fm.enStatus;
                    if (! FA && ! Fn) {
                        $("#" + E9).button().button("disable");
                        $("#" + E9).button().addClass(Cc);
                        $("#" + E9).button().attr("title", Cj);
                    } else {
                        $("#" + E9).click(function () {
                            Ev(Ag[FL], "change");
                        });
                    }
                    $("#" + FC).click(function () {
                        Ev(Ag[FL], "drop");
                    });
                    $("#" + Fe).click(function () {
                        Ev(Ag[FL], "enroll");
                    });
                    $("#" + Fk).click(function () {
                        Ev(Ag[FL], "waitlist");
                    });
                    $("#" + FZ).click(function () {
                        Ev(Ag[FL], "removeplan");
                    });
                    return;
                }
                if (! FA && ! Fn) {
                    $("#" + E9).button().button("disable");
                    $("#" + E9).button().addClass(Cc);
                    $("#" + E9).button().attr("title", Cj);
                } else {
                    $("#" + E9).click(FU, AE);
                }
                $("#" + FC).click(FU, Aa);
                $("#" + Fe).click(function () {
                    DH(E7, "enroll", Fg, FY, Fl, undefined, undefined);
                });
                $("#" + Fk).click(function () {
                    DH(E7, "wait", Fg, FY, Fl, undefined, undefined);
                });
                var Fa = {
                    actionTip: "<b style='font-size:16px' >Would you like to remove the following planned class?</b>",
                    sectionHead: E7
                };
                $("#" + FZ).click(Fa, Bs);
                var Fj = {
                    objid: Fm.id,
                    aeName: FV,
                    aeDay: FB,
                    aeDays: FO,
                    aeLocation: E6,
                    aeStartTime: Fd,
                    aeEndTime: FR,
                    aeTimeStamp: FW
                };
                $("#" + Fc).click(Fj, Ah);
                $("#" + E5).click(Fj, Ee);
            }
        });
    }
    A4();
    function A0() {
        if (0 == Cm.length) {
            $("#calendar-id-pb").jqGrid("clearGridData", true);
            $("#calendar-id-pb-div").hide();
            return;
        }
        $("#calendar-id-pb-div").show();
        $("#calendar-id-pb").jqGrid("clearGridData", true);
        $("#calendar-id-pb").jqGrid({
            caption: "Additional Sessions & Meetings",
            datatype: "local",
            height: "100%",
            shrinkToFit: true,
            gridview: true,
            loadonce: true,
            sortable: true,
            rowNum: 100,
            hidegrid: false,
            viewrecords: true,
            cmTemplate: {
                title: false
            },
            beforeSelectRow: function (E4, E5) {
                return false;
            },
            onRightClickRow: function () {
                $("#calendar-id-pb").jqGrid("resetSelection");
                return false;
            },
            colNames: [
                "Subject Course",
                "Title",
                "Status",
                "Day",
                "Date",
                "Time",
                "Building",
                "Room",
                "",
                "RowAttr",
                "enStatus"
            ],
            colModel: [
                {
                    name: "PBF_SUBJ_CRSE",
                    jsonmap: "PBF_SUBJ_CRSE",
                    fixed: true,
                    width: 100,
                    align: "left",
                    editable: false,
                    sortable: false
                },
                {
                    name: "PBF_TITLE",
                    jsonmap: "PBF_TITLE",
                    fixed: true,
                    width: 200,
                    align: "left",
                    editable: false,
                    sortable: false
                },
                {
                    name: "PBF_STATUS",
                    jsonmap: "PBF_STATUS",
                    fixed: true,
                    width: 80,
                    align: "center",
                    editable: false,
                    sortable: false
                },
                {
                    name: "PBF_DAY",
                    jsonmap: "PBF_DAY",
                    fixed: true,
                    width: 40,
                    align: "center",
                    editable: false,
                    sortable: false
                }, {
                    name: "PBF_DATE",
                    jsonmap: "PBF_DATE",
                    fixed: true,
                    width: 100,
                    align: "center",
                    editable: false,
                    sortable: false
                }, {
                    name: "PBF_TIME",
                    jsonmap: "PBF_TIME",
                    fixed: true,
                    width: 100,
                    align: "center",
                    editable: false,
                    sortable: false
                }, {
                    name: "PBF_BLDG",
                    jsonmap: "PBF_BLDG",
                    fixed: true,
                    width: 80,
                    align: "center",
                    editable: false,
                    sortable: false,
                    formatter: Dl,
                    cellattr: z
                }, {
                    name: "PBF_ROOM",
                    jsonmap: "PBF_ROOM",
                    fixed: true,
                    width: 80,
                    align: "center",
                    editable: false,
                    sortable: false,
                    formatter: CV,
                    cellattr: z
                }, {
                    name: "nothing",
                    fixed: true,
                    width: 40,
                    align: "center",
                    editable: false,
                    sortable: false,
                    hidden: ! DO
                }, {
                    name: "ROW_ATTR",
                    hidden: true
                }, {
                    name: "ENROLL_STATUS",
                    hidden: true,
                    jsonmap: "ENROLL_STATUS"
                }
            ],
            rowattr: function (E6) {
                var E5 = "";
                var E4 = E6.ROW_ATTR;
                if (undefined != E4) {
                    if (undefined != E6.ROW_ATTR.rowClass) {
                        E5 = {
                            "class": E6.ROW_ATTR.rowClass
                        };
                    }
                }
                return E5;
            }
        });
        var E3 = $("#calendar-id-pb");
        $.each(Cm, function (E7, E9) {
            var FA = E7;
            E3.jqGrid("addRowData", FA, E9);
            if (undefined != E9.PBF_HEAD && E9.PBF_HEAD.match(/HEADER_/)) {
                var E5 = E9.PBF_HEAD.substring(7);
                var E6 = "<div class='wr-pbfrow-header-outer-class' id='wr-pbfrow-header-outer-id-" + FA + "'><img class='wr-pbfrow-header-class' id='wr-pbfrow-header-id-" + FA + "' alt='Expand: ' src='" + DP + "' " + " style=' width:8px; height:8px; margin-right: 2px; margin-top: 5px;' ></img> " + E5 + "</div>";
                E3.jqGrid("setCell", FA, "PBF_TITLE", E6);
                var E8 = E9.SECTION_HEAD + "" + E9.SECTION_NUMBER;
                $("#wr-pbfrow-header-outer-id-" + FA).click(function () {
                    var FB = $("#wr-pbfrow-header-id-" + FA).attr("src");
                    if (FB === EW) {
                        $("#wr-pbfrow-header-id-" + FA).attr("src", DP);
                        $(".wr-pbfrow-class-" + E9.PBF_INFO + "-" + E9.PBF_MTYPE + "-" + E8).addClass("grid-row-hidden");
                    } else {
                        $("#wr-pbfrow-header-id-" + FA).attr("src", EW);
                        $(".wr-pbfrow-class-" + E9.PBF_INFO + "-" + E9.PBF_MTYPE + "-" + E8).removeClass("grid-row-hidden");
                    }
                });
            }
            var E4 = $("#calendar-id-pb tbody tr#" + FA);
            switch (E9.ENROLL_STATUS) {
                case "EN": E4.addClass("wr-grid-en");
                    break;
                case "WT": E4.addClass("wr-grid-wt");
                    break;
                case "PL": E4.addClass("wr-grid-pl");
                    break;
            }
        });
        $(".wr-pbfrow-class").addClass("grid-row-hidden");
    }
    A0();
    function C0(E8, E3, E6, FA) {
        var E5 = {};
        var E7 = [];
        E7.length = 0;
        $.each(E8, function (FC, FE) {
            if (! FE.FK_SPM_SPCL_MTG_CD.match(/FI/)) {
                return;
            }
            var FD = FE.SECTION_NUMBER + FE.DAY_CODE + FE.ENROLL_STATUS + I(FE.BEGIN_HH_TIME, FE.BEGIN_MM_TIME, FE.END_HH_TIME, FE.END_MM_TIME);
            if (!(FD in E5)) {
                E5[FD] = true;
                E7.push(FE);
            }
        });
        E5 = {};
        E5 = null;
        var E4 = [];
        var FB = new Date().getTime();
        BA = [];
        BA.length = 0;
        var E9 = undefined;
        $.each(E7, function (FI, FF) {
            var FM = Number(FB) + FI;
            var FS = FF.DAY_CODE;
            if (FS == 6) {
                if (E9 == undefined) {
                    BJ(function (FY) {
                        E9 = FY.DATE;
                    });
                }
                if (undefined != E9 && FF.START_DATE.replace(/-/g, "") < E9.replace(/-/g, "")) {
                    FS = 0;
                }
            }
            var FE = String("0" + FF.BEGIN_HH_TIME).slice(-2);
            var FQ = String("0" + FF.BEGIN_MM_TIME).slice(-2);
            var FX = String("0" + FF.END_HH_TIME).slice(-2);
            var FO = String("0" + FF.END_MM_TIME).slice(-2);
            var FH = FE + "" + FQ;
            var FK = FX + "" + FO;
            var FT = "9" + FS + FH;
            var FD = "9" + FS + FK;
            var FV = FF.SUBJ_CODE + " " + FF.CRSE_CODE;
            var FP = FF.BLDG_CODE;
            var FU = FF.ROOM_CODE;
            BA.push({
                subjCrse: FV,
                startTime: FH,
                endTime: FK,
                startDate: FF.START_DATE,
                dayCode: FS
            });
            var FW = [];
            switch (FF.ENROLL_STATUS) {
                case "EN": FW[0] = 0;
                    FW[1] = "Enrolled";
                    break;
                case "WT": FW[0] = 1;
                    FW[1] = "Waitlist";
                    break;
                case "PL": FW[0] = 2;
                    FW[1] = "Planned";
                    break;
            }
            switch (FW[0]) {
                case 0:
                    var FL = Cw;
                    break;
                case 1:
                    var FL = Cn;
                    break;
                case 2:
                    var FL = DA;
                    break;
            }
            var FR = FF.PERSON_FULL_NAME.split(":");
            var FJ = "";
            var FC = [];
            $.each(FR, function (FY, FZ) {
                FZ = FZ.trim();
                if ($.inArray(FZ, FC) === -1) {
                    FC.push(FZ);
                    if (0 == FY) {
                        FJ = FZ;
                    } else {
                        FJ = FJ + " / " + FZ;
                    }
                }
            });
            $.each(FC, function (FY, FZ) {
                if (FZ.match(/^\s*staff\s*$/i)) {
                    return false;
                }
                if (FY == 0) {
                    FC = FZ;
                } else {
                    FC = FC + '<span title="' + FJ + '"> + </span> ';
                    return false;
                }
            });
            var FG = Ay(FF.START_DATE);
            if (CI) {
                finalLocation = '<a target="_blank" class="nonewwin ' + FL + ' " href="http://act.ucsd.edu/maps/?isisCode=' + FP + '">' + FP.trim() + " " + FU.trim() + "</a>\n";
            } else {
                finalLocation = "Location - TBA\n";
            }
            var FN = "<br><b><em>" + FG + "</em></b><br>" + "<br>" + FV + "<br>" + finalLocation + "<br>" + FC;
            E4.push({
                id: FM,
                start: K(FT),
                end: K(FD),
                title: FN,
                className: FL,
                enStatus1: FW[1],
                sectionHead: FF.SECTION_HEAD,
                aeDay: FS,
                aeStartTime: FH,
                aeEndTime: FK,
                sectionNumber: FF.SECTION_NUMBER,
                startDate: FF.START_DATE
            });
        });
        FA(E4);
    }
    function C5() {
        DJ = "23";
        AA = "00";
        Di = false;
        var E5 = {};
        var E3 = AR(V);
        var E4 = [];
        E4.length = 0;
        $.each(E3, function (E6, E8) {
            if (! E8.FK_SPM_SPCL_MTG_CD.match(/FI/)) {
                return;
            }
            var E7 = E8.SECTION_NUMBER + E8.DAY_CODE + E8.ENROLL_STATUS + I(E8.BEGIN_HH_TIME, E8.BEGIN_MM_TIME, E8.END_HH_TIME, E8.END_MM_TIME);
            if (!(E7 in E5)) {
                E5[E7] = true;
                E4.push(E8);
            }
        });
        E5 = {};
        E5 = null;
        $.each(E4, function (E8, FA) {
            var E6 = String("0" + FA.BEGIN_HH_TIME).slice(-2);
            var E9 = String("0" + FA.BEGIN_MM_TIME).slice(-2);
            var E7 = String("0" + FA.END_HH_TIME).slice(-2);
            var FB = String("0" + FA.END_MM_TIME).slice(-2);
            if (!(E6 == 0 && E9 == 0 && E7 == 0 && FB == 0)) {
                if (E6 < DJ && E6 != "00") {
                    DJ = E6;
                }
                if (E7 > AA) {
                    AA = E7;
                }
            }
        });
        if (DJ == "23" && AA == "00") {
            DJ = "7";
            AA = "7";
            Di = true;
        }
    }
    function AQ() {
        var E4 = [
            "Sat",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ];
        if (BM) {
            return E4;
        }
        var E3 = null;
        BJ(function (E5) {
            var E6 = E5.DATE.split("-");
            E3 = new Date(E6[0], E6[1] - 1, E6[2]);
            if (E3.getDay() == 5) {
                E3.setDate(E3.getDate() - 6);
            } else {
                E3.setDate(E3.getDate() - 7);
            }
        });
        $.each(E4, function (E5, E6) {
            E4[E5] += "\n" + (
                E3.getMonth() + 1
            ) + "/" + E3.getDate() + "/" + E3.getFullYear();
            if (E5 == 0) {
                E3.setDate(E3.getDate() + 2);
            } else {
                E3.setDate(E3.getDate() + 1);
            }
        });
        return E4;
    }
    function Ak() {
        var E3 = [];
        C5();
        var E4 = AQ();
        $("#finalcal-id").empty();
        $("#finalcal-id").fullCalendar({
            slotEventOverlap: true,
            defaultView: "agendaWeek",
            header: {
                left: false,
                center: false,
                right: false
            },
            columnFormat: {
                week: "dddd"
            },
            dayNames: E4,
            height: 9999,
            axisFormat: (Di) ? "" : "htt",
            editable: false,
            theme: true,
            allDaySlot: false,
            allDayDefault: false,
            weekends: true,
            slotMinutes: 30,
            firstDay: 0,
            minTime: parseInt(AO(DJ)),
            maxTime: parseInt(AO(AA)) + 1,
            ignoreTimezone: false,
            defaultEventMinutes: 50,
            events: function (E8, E5, E7) {
                var E6 = Bv ? null : ES;
                C0(AR(V), E8, E5, E7);
            },
            eventAfterAllRender: function (E5) {
                $("#finalcal-id .fc-today").removeClass("ui-state-highlight");
                $.each(E3, function (E7, E6) {
                    $.each(E3.slice(E7 + 1), function (E9, E8) {
                        if (E6.day == E8.day && E6.section != E8.section && E6.startDate == E8.startDate) {
                            if (E6.start < E8.end && E8.start < E6.end) {
                                if (! E8.element.hasClass("conflict-cal-event")) {
                                    E8.element.addClass("conflict-cal-event");
                                }
                                if (! E6.element.hasClass("conflict-cal-event")) {
                                    E6.element.addClass("conflict-cal-event");
                                }
                            }
                        }
                    });
                });
                E3 = [];
                E3.length = 0;
            },
            eventAfterRender: function (E7, E6, E5) {
                if ($(E6).css("width").replace(/px/i, "") < 100) {
                    $(E6).css("width", "100px");
                }
            },
            eventRender: function (E8, E7, E5) {
                E7.find(".fc-event-title").html(E8.title);
                E3.push({
                    id: E8.id,
                    element: E7,
                    day: E8.aeDay,
                    start: E8.aeStartTime,
                    end: E8.aeEndTime,
                    section: E8.sectionNumber,
                    startDate: E8.startDate
                });
                var E6 = E7[0].innerHTML;
                E6 = E6.replace(/fc-event-time">([^<]+)<\/div>/, 'fc-event-time">' + "<span> $1</span>" + "<span class='fc-local-enstatus' > " + E8.enStatus1 + "</span>" + "</div>");
                E7[0].innerHTML = E6;
            },
            eventClick: function (E7, E6, E5) {
                $(this).siblings().css("z-index", 0);
                $(this).css("z-index", 99);
            }
        });
        B0();
    }
    Ak();
    function B0() {
        var E7 = undefined;
        var E5 = [];
        E5.length = 0;
        var E4 = [];
        E4.length = 0;
        $.each(BA, function (E8, E9) {
            if (E9.dayCode == 0) {
                E5.push(E9);
            } else {
                if (E9.dayCode == 6) {
                    E4.push(E9);
                }
            }
        });
        if (E5.length > 0 && !BM) {
            G = true;
            var E6 = "";
            $.each(E5, function (E8, E9) {
                E6 = E6 + "<br>You have a final for " + E9.subjCrse + " on the First Saturday of Finals week on " + Ax(E9.startDate);
            });
            E6 = E6.replace(/<br>/, "");
            $("#wr-final-conflict-sat-1").html(E6);
            if (E4.length > 0) {
                var E3 = "";
                $.each(E4, function (E8, E9) {
                    E3 = E3 + "<br>You have a final for " + E9.subjCrse + " on the Second Saturday of Finals week on " + Ax(E9.startDate);
                });
                E3 = E3.replace(/<br>/, "");
                $("#wr-final-conflict-sat-2").html(E3);
            }
        } else {
            G = false;
            $("#wr-final-conflict-sat-1").empty();
            $("#wr-final-conflict-sat-2").empty();
        }
    }
    $("#dialog-enroll").dialog({
        autoOpen: false,
        maxWidth: 1050,
        position: {
            my: "center",
            at: "center",
            of: window
        },
        height: "auto",
        width: 1050,
        modal: true,
        closeOnEscape: false,
        buttons: {
            Cancel: {
                text: "Cancel",
                click: function () {
                    $(this).dialog("close");
                }
            },
            Confirm: {
                text: "Confirm",
                click: function () {
                    $(this).dialog("close");
                    var E8 = $("#diagenroll-class-table-grade option:selected").val();
                    var FC = $("#diagenroll-class-table-unit option:selected").text();
                    if (undefined == E8 || E8.trim() == "") {
                        E8 = Dx($("#diagenroll-class-table-grade-p").text());
                    }
                    if (undefined == FC || FC.trim() == "") {
                        FC = $("#diagenroll-class-table-unit-p").text();
                    }
                    var E6 = $(this).dialog("option", "action");
                    var E9 = $(this).dialog("option", "subjcrse");
                    var E4 = $(this).dialog("option", "subjcode");
                    var E3 = BP($(this).dialog("option", "crsecode"));
                    var FB = $(this).dialog("option", "sectionhead");
                    var FA = $(this).dialog("option", "buttonrowid");
                    var E7 = $(this).dialog("option", "fromEnrollmentGrid");
                    FC = Number(FC).toFixed(2);
                    var E5 = (E6 == "enroll") ? false : true;
                    DT(E5, FB, E8, FC, E4, E3, FA, E7);
                    return;
                }
            }
        }
    });
    function DT(E5, FB, E7, FC, E4, E3, E9, E6) {
        var E8 = BP(E3);
        var FA = E4.trim();
        Cq(E5, FB, E7, FC, FA, E8, function (FF) {
            var FG = "";
            var FI = E4 + " " + E3;
            var FE = E3.trim();
            if ("SUCCESS" == FF.OPS) {
                var FK = "";
                BK(FB, function (FM) {
                    if ("SUCCESS" != FM.OPS) {
                        FK = "<br><br><div class='msg alert'><h4>Warning</h4>The removal of the planned section was <b>unsuccessful</b></div>";
                    }
                });
                EQ();
                s();
                if (Ew[0].grid) {
                    if (undefined != BX) {
                        BC[BX] = $.extend(true, [], AX);
                        var FJ = false;
                        var FD = new RegExp(FB);
                        $.each(BC, function (FM, FN) {
                            if (undefined == FN || 0 == FN.length) {
                                return;
                            }
                            $.each(FN, function (FO, FP) {
                                if (FP.SUBJ_CODE == FA && FP.CRSE_CODE == FE) {
                                    if (undefined != FP.colaction && ! FP.colaction.match(/^\s*$/)) {
                                        if (FP.colaction.match(/search-enroll-class/)) {
                                            if (E5) {
                                                FP.colaction = FP.colaction.replace(/disableSBWtClass/g, "");
                                                FP.colaction = FP.colaction.replace(/search-wait-class/, "search-wait-class disableSBWtClass ");
                                            } else {
                                                FP.colaction = FP.colaction.replace(/disableSBEnClass/g, "");
                                                FP.colaction = FP.colaction.replace(/search-enroll-class/, "search-enroll-class disableSBEnClass ");
                                            }
                                        }
                                    }
                                    if (FP.SECTION_NUMBER.toString().match(FD)) {
                                        FP.colaction = FP.colaction.replace(/disableSBSectionClass/g, "");
                                        FP.colaction = FP.colaction.replace(/wrbuttonspew/g, "wrbuttonspew disableSBSectionClass ");
                                        if (E5) {
                                            if (undefined != FP.COUNT_ON_WAITLIST) {
                                                FP.COUNT_ON_WAITLIST = FP.COUNT_ON_WAITLIST.toString().replace(/\d+/g, function (FQ) {
                                                    return Number(FQ) + 1;
                                                });
                                            }
                                        }
                                    } else {
                                        if (! BL(FP.SECTION_NUMBER, undefined, undefined, "ALL")[0]) {
                                            FP.colaction = FP.colaction.replace(/disableSBSectionClass/g, "");
                                        }
                                    }
                                }
                                if (! E5) {
                                    if (! FJ && undefined != FP.SECTION_NUMBER && FP.SECTION_NUMBER.toString().match(FD)) {
                                        if (undefined != FP.AVAIL_SEAT) {
                                            if (FP.AVAIL_SEAT.toString().match(/^\s*\d+\s*$/)) {
                                                if (FP.AVAIL_SEAT > 0) {
                                                    FP.AVAIL_SEAT = FP.AVAIL_SEAT - 1;
                                                }
                                                FJ = true;
                                            }
                                        }
                                    }
                                }
                            });
                        });
                        Ed(BX, false, false);
                    }
                }
                if ("YES" == FF.WARNING) {
                    var FH = "";
                    if (undefined != FF.REASON || "null" != FF.REASON) {
                        FH = FF.REASON;
                    }
                    if (E5) {
                        FG = "<div class='msg alert'><h4>Request Successful with warning</h4><span>Waitlisted " + FI.trim() + " with " + Af(E7) + " grade option for " + FC + " units, Section " + FB + ".<br /><br />" + FH + "</span></div>";
                    } else {
                        FG = "<div class='msg alert'><h4>Request Successful with warning</h4><span>Enrolled in " + FI.trim() + " with " + Af(E7) + " grade option for " + FC + " units, Section " + FB + ".<br /><br />" + FH + "</span></div>";
                        if (FF.WAIT_DROP_MSG != undefined) {
                            FG += "<br /><div class='msg error'><h4>Alert:</h4><strong>" + FF.WAIT_DROP_MSG + "</strong></div>";
                        }
                    }
                } else {
                    if (E5) {
                        FG = "<div class='msg confirm'><h4>Request Successful</h4><span>Waitlisted " + FI.trim() + " with " + Af(E7) + " grade option for " + FC + " units, Section " + FB + ".</span></div>";
                    } else {
                        FG = "<div class='msg confirm'><h4>Request Successful</h4><span>Enrolled in " + FI.trim() + " with " + Af(E7) + " grade option for " + FC + " units, Section " + FB + ".</span></div>";
                    }
                } FG = FG + FK;
                FG += L(FB, ! E6);
            } else {
                var FH = "";
                if (undefined != FF.REASON || "null" != FF.REASON) {
                    FH = FF.REASON;
                }
                FG = "<div class='msg error'><h4>Request Unsuccessful</h4><span>Attempting to add " + FI.trim() + ", Section " + FB + ".  " + FH + "</span></div>";
            }
            var FL = $("#dialog-after-action").dialog("open");
            FL.dialog("option", "buttons", O);
            FL.dialog("option", "actionevent", FG);
            EB(FG);
        });
    }
    function Eu(FU, FR, Fb, FD, E7, Fa, E3, E9, E8, FB, FE, FV, FP, FQ, FK) {
        $("#diagenroll-class-table-subj").empty();
        $("#diagenroll-class-table-title").empty();
        $("#diagenroll-class-table-grade-p").empty();
        $("#diagenroll-class-table-unit-p").empty();
        $("#diagenroll-class-table-code").empty();
        $("#diagenroll-class-table-type").empty();
        $("#diagenroll-class-table-days").empty();
        $("#diagenroll-class-table-time").empty();
        var E6 = CZ;
        var FA = BP(FD);
        var FY = Fb + " " + FD;
        var FJ = $("#dialog-enroll").dialog("open");
        FJ.dialog("option", "action", FU);
        FJ.dialog("option", "sectionhead", FR);
        FJ.dialog("option", "subjcrse", FY);
        FJ.dialog("option", "subjcode", Fb);
        FJ.dialog("option", "crsecode", FD);
        FJ.dialog("option", "buttonrowid", FP);
        $("#diagenroll-class-table-subj").text(FY);
        $("#diagenroll-class-table-title").text(E7);
        $("#dialog-enroll-button-confirm").button("enable");
        var FZ = $("#list-id-table");
        var E5 = FZ.jqGrid("getDataIDs");
        var FT = [];
        for (var FX = 0; FX <= E5.length; FX++) {
            var FL = E5[FX];
            rowData = FZ.jqGrid("getRowData", FL);
            if (undefined != rowData.PB_FRIEND && "true" == rowData.PB_FRIEND) {
                continue;
            }
            if (rowData.SECTION_HEAD == FR) {
                FT.push({
                    title: rowData.CRSE_TITLE,
                    grade: rowData.GRADE_OPTION,
                    unit: rowData.SECT_CREDIT_HRS,
                    code: rowData.SECT_CODE,
                    type: rowData.FK_CDI_INSTR_TYPE,
                    days: rowData.DAY_CODE,
                    time: rowData.coltime
                });
            }
        }
        var FS = FT.length > 0;
        FJ.dialog("option", "fromEnrollmentGrid", FS);
        $(".diagenroll-class-table-no1234").remove();
        if (FS) {
            FT[0].title = FT[0].title.replace("<br />", "");
            FT[0].title = FT[0].title.replace("<br>", "");
            $("#diagenroll-class-table-title").text(FT[0].title);
            E3 = FT[0].grade;
            E8 = FT[0].unit;
            $.each(FT, function (Fc, Fe) {
                if (Fc == 0) {
                    $("#diagenroll-class-table-code").text(Fe.code);
                    $("#diagenroll-class-table-type").text(Af(Fe.type));
                    $("#diagenroll-class-table-days").text(Fe.days);
                    $("#diagenroll-class-table-time").text(Fe.time);
                } else {
                    var Fd = $("#diagenroll-class-table");
                    Fd.append("<tr class='diagenroll-class-table-no1234'>" + "<td class='diagclass-class-table-empty'></td>" + "<td class='diagclass-class-table-empty'></td>" + "<td class='diagclass-class-table-empty'></td>" + "<td class='diagclass-class-table-empty'></td>" + "<td>" + Fe.code + "</td>" + "<td>" + Af(Fe.type) + "</td>" + "<td>" + Fe.days + "</td>" + "<td>" + Fe.time + "</td>" + "</tr>");
                }
            });
        } else {
            var FG = 0;
            var FN = $(".wr-search-group-data-row").filter(function () {
                return $(this).children("td[aria-describedby='search-div-b-table_SECTION_NUMBER']").text().indexOf(FR) != -1;
            });
            var FF = "";
            if (DO) {
                FF = $("#" + FN[0].id).children("td[aria-describedby='search-div-b-table_SECTION_NUMBER']")[0].innerHTML.trim();
            } else {
                FF = $("#" + FN[0].id).children("td[aria-describedby='search-div-b-table_SECTION_NUMBER']")[0].textContent.trim();
            } FF = FF.replace(/^\d+/, "");
            if (FF.trim() != "") {
                FF = E7 + " - " + FF.trim();
                $("#diagenroll-class-table-title").text(FF);
            }
            FN.sort(function (Fd, Fc) {
                return Fd.id > Fc.id;
            });
            var FO = [];
            $.each(FN, function (Fd, Fg) {
                var Ff = "";
                var Fi = "";
                var Fc = "";
                var Fh = "";
                if (DO) {
                    Ff = $("#" + Fg.id).children("td[aria-describedby='search-div-b-table_SECT_CODE']")[0].innerHTML.trim();
                    Fi = $("#" + Fg.id).children("td[aria-describedby='search-div-b-table_FK_CDI_INSTR_TYPE']")[0].innerHTML.trim();
                    Fc = $("#" + Fg.id).children("td[aria-describedby='search-div-b-table_DAY_CODE']")[0].innerHTML.trim();
                    Fh = $("#" + Fg.id).children("td[aria-describedby='search-div-b-table_coltime']")[0].innerHTML.trim();
                } else {
                    Ff = $("#" + Fg.id).children("td[aria-describedby='search-div-b-table_SECT_CODE']")[0].textContent.trim();
                    Fi = $("#" + Fg.id).children("td[aria-describedby='search-div-b-table_FK_CDI_INSTR_TYPE']")[0].textContent.trim();
                    Fc = $("#" + Fg.id).children("td[aria-describedby='search-div-b-table_DAY_CODE']")[0].textContent.trim();
                    Fh = $("#" + Fg.id).children("td[aria-describedby='search-div-b-table_coltime']")[0].textContent.trim();
                }
                if (Fi != "") {
                    if (FG == 0) {
                        $("#diagenroll-class-table-code").text(Ff);
                        $("#diagenroll-class-table-type").text(Af(Fi));
                        $("#diagenroll-class-table-days").text(Fc);
                        $("#diagenroll-class-table-time").text(Fh);
                    } else {
                        var Fe = $("#diagenroll-class-table");
                        Fe.append("<tr class='diagenroll-class-table-no1234'>" + "<td class='diagclass-class-table-empty'></td>" + "<td class='diagclass-class-table-empty'></td>" + "<td class='diagclass-class-table-empty'></td>" + "<td class='diagclass-class-table-empty'></td>" + "<td>" + Ff + "</td>" + "<td>" + Af(Fi) + "</td>" + "<td>" + Fc + "</td>" + "<td>" + Fh + "</td>" + "</tr>");
                    } FG++;
                }
            });
        }
        var FH = $("#diagenroll-class-table-grade-p");
        FH.empty();
        if (Fa) {
            FH.append("<select class='diagxxx-class-table-td-select' id='diagenroll-class-table-grade'></select>");
            var E4 = $("#diagenroll-class-table-grade");
            E4.empty();
            if (E6 == "UN") {
                E4.append($("<option></option>").val("L").html("Letter"));
                E4.append($("<option></option>").val("P").html("Pass / No Pass"));
            } else {
                if (E6 == "GR") {
                    E4.append($("<option></option>").val("L").html("Letter"));
                    E4.append($("<option></option>").val("S").html("Satisfactory / Unsatisfactory"));
                } else {
                    if (E6 == "PH") {
                        CX(Fb, FD, function (Fc) {
                            if (Fc.ACADEMIC_LEVEL == "GR") {
                                E4.append($("<option></option>").val("L").html("Letter"));
                            } else {
                                E4.append($("<option></option>").val("H").html("Honors Pass / Fail"));
                            } E4.append($("<option></option>").val("S").html("Satisfactory / Unsatisfactory"));
                        });
                    }
                }
            }
            if (undefined != E3) {
                E4.val(Av(E3));
            }
        } else {
            if (undefined != E3) {
                FH.text(Af(E3));
            } else {
                if (E6 == "UN") {
                    FH.text("Pass / No Pass");
                } else {
                    if (E6 == "GR") {
                        FH.text("Satisfactory / Unsatisfactory");
                    } else {
                        if (E6 == "PH") {
                            FH.text("Satisfactory / Unsatisfactory");
                        }
                    }
                }
            }
        }
        var FM = $("#diagenroll-class-table-unit-p");
        FM.empty();
        if (E9 && undefined != FB && undefined != FE && undefined != FV) {
            FM.append("<select class='diagxxx-class-table-td-select' id='diagenroll-class-table-unit' ></select>");
            var FW = $("#diagenroll-class-table-unit");
            FW.empty();
            var FI = Er(FB, FE, FV, E8);
            $.each(FI.ob2, function (Fc, Fd) {
                FW.append($("<option></option>").val(Fc).html(Fd));
            });
            FW.val(FI.ob1);
        } else {
            FM.text(E8);
        }
        var FC = "<b>Confirm class, and/or grading option or units to waitlist</b><br><br>";
        if (FU == "enroll") {
            FC = "<b>Confirm class, and/or grading option or units to enroll</b><br><br />";
        }
        if (undefined != FQ) {
            FC = FC + "<div class='msg alert'><h4>Alert: </h4>" + FQ + "</div>";
        }
        if (FK != undefined) {
            FC = FC + "<div class='msg error'><h4>Alert:</h4><strong>" + FK + "</strong></div>";
        }
        FC += L(FR, ! FS);
        EB(FC);
    }
    function DH(E5, E8, E7, E3, E6, FA, E4) {
        var E9 = (E8 == "enroll") ? false : true;
        if (undefined == E6) {
            E6 = FA.toString().split("(")[0];
        }
        Bm(E9, E5, E7, E3, function (FG) {
            var FE = false;
            var FF = false;
            var FL = undefined;
            var FC = undefined;
            var FB = undefined;
            var FK = undefined;
            var FM = undefined;
            var FI = "";
            if ("SUCCESS" == FG.OPS) {
                var FD = undefined;
                if ("YES" == FG.WARNING) {
                    if (undefined != FG.REASON || "null" != FG.REASON) {
                        FD = FG.REASON;
                    }
                }
                if ("YES" == FG.GRADE) {
                    FE = true;
                }
                if ("YES" == FG.UNIT) {
                    FF = true;
                    FL = FG.UNIT_FROM;
                    FC = FG.UNIT_TO;
                    FB = FG.UNIT_INC;
                }
                var FJ = FG.WAIT_DROP;
                FM = FG.GRADE_DEFAULT;
                FK = FG.UNIT_DEFAULT;
                Eu(E8, E5, E7, E3, E6, FE, FM, FF, FK, FL, FC, FB, E4, FD, FJ);
            } else {
                var FH = "Service error.";
                if (undefined != FG.REASON || "null" == FG.REASON) {
                    FH = FG.REASON;
                }
                if (E9) {
                    FI = "<div class='msg error'><h4>Request Unsuccessful</h4><span>Attempting to waitlist class " + E7.trim() + " " + E3.trim() + ", Section " + E5 + ".  " + FH + "</span></div>";
                } else {
                    FI = "<div class='msg error'><h4>Request Unsuccessful</h4><span>Attempting to add " + E7.trim() + " " + E3.trim() + ", Section " + E5 + ".  " + FH + "</span></div>";
                }
                var FN = $("#dialog-after-action").dialog("open");
                FN.dialog("option", "buttons", O);
                FN.dialog("option", "actionevent", FI);
                EB(FI);
            }
        });
    }
    var EG = false;
    var DU = (function () {
        var E3 = 1;
        return function () {
            return E3++;
        };
    }());
    var BQ = null;
    w(function (E3) {
        BQ = E3;
    });
    var Ba = [];
    Ba.length = 0;
    var C7 = {};
    $.each(BQ, function (E4, E5) {
        var E6 = E5.SUBJECT_CODE + " / " + E5.LONG_DESC;
        Ba.push({id: E4, text: E6, subjcode: E5.SUBJECT_CODE, subjdesc: E5.LONG_DESC});
        var E3 = E5.SUBJECT_CODE.trim();
        C7[E3] = E5.LONG_DESC;
    });
    var AH = null;
    var Ab = [];
    Ab.length = 0;
    var n = undefined;
    var a = false;
    var AF = false;
    var Ew = $("#search-div-b-table");
    var m = [];
    var AX = [];
    var BC = [];
    var Do = $("#search-pager-dropdown option:selected").val();
    var BX = undefined;
    var Dh = [];
    var E = [];
    var AW = [];
    var BO = [];
    var D3 = [];
    var Co = [];
    Co.length = 0;
    var Es = "";
    var k = "";
    var AP = "";
    var E1 = "";
    var Al = "";
    $("#search-div-t-b1").click(function () {
        Dv();
        BN();
        EY();
    });
    var BR = [];
    BR.length = 0;
    var E0 = [];
    E0.length = 0;
    var Z = undefined;
    var B5 = undefined;
    ED(Ca, "", function (E3) {
        $.each(E3, function (E4, E5) {
            E0.push({
                id: "crselist-" + E5.SUBJ_CODE + "-" + E4,
                text: E5.SUBJ_CODE + " " + E5.CRSE_CODE,
                subjcode: E5.SUBJ_CODE,
                crsecode: E5.CRSE_CODE
            });
        });
    });
    $("#search-div-t-t1-i1").select2c({
        combobox: true,
        containerCss: {
            "display": "block"
        },
        containerCssClass: "wr-select-top",
        dropdownCssClass: "wr-select-top-drop",
        placeholder: "(e.g., BILD, BILD 3 or computer 3 )",
        query: function (E7) {
            var FM = E7.term;
            var FN = undefined;
            if (undefined != FM && FM.trim().length < 2) {
                $("#search-div-t-t1-i1").select2c("close");
                B5 = [];
                return;
            }
            var FD = {
                results: []
            };
            var FK = FM.replace(/\d.*/, "").trim();
            var E6 = FM.replace(/^\D+(\d.*)/, "$1").trim();
            var FI = (FM.trim() == E6) ? true : false;
            if (! E6.match(/^\d.*$/)) {
                E6 = undefined;
            }
            if ("" == FM.trim()) {
                $("#search-div-t-t1-i1").select2c("close");
                return;
            }
            if (undefined != E6) {
                var FJ = [];
                FJ.length = 0;
                if (undefined == Z) {
                    Z = {};
                    for (var FG = 0; FG < E0.length; FG++) {
                        var E9 = E0[FG].subjcode.trim();
                        if (undefined == Z[E9]) {
                            Z[E9] = [];
                            Z[E9].length = 0;
                        }
                        Z[E9].push(E0[FG]);
                    }
                }
                if (FI) {
                    FN = Z;
                } else {
                    FK = FK.replace(/[{()} ]/g, "");
                    var FH = new RegExp("^\\s*" + FK + "\\s*$", "i");
                    var E4 = new RegExp(FK, "i");
                    var E5 = [];
                    E5.length = 0;
                    $.each(BR, function (FO, FP) {
                        if (FP.subjcode.match(FH) || FP.text.match(E4)) {
                            E5.push(FP.subjcode);
                        }
                    });
                    FN = {};
                    for (var FG = 0; FG < E5.length; FG++) {
                        var FF = E5[FG].trim();
                        FN[FF] = Z[FF];
                    }
                }
                var FE = new RegExp("^\\s*" + E6, "i");
                if (FI) {
                    $.each(E0, function (FO, FP) {
                        if (FP.crsecode.match(FE)) {
                            FJ.push(FP);
                        }
                    });
                } else {
                    var E3 = [];
                    E3.length = 0;
                    var FL = new RegExp("^\\s*" + FK, "i");
                    var FA = new RegExp(FK, "i");
                    var E8 = new RegExp(E6);
                    $.each(FN, function (FP, FQ) {
                        if (FP.match(FL)) {
                            for (var FO = 0; FO < FQ.length; FO++) {
                                if (FQ[FO].crsecode.match(FE)) {
                                    FJ.push(FQ[FO]);
                                }
                            }
                        } else {
                            if (C7[FP].match(FA)) {
                                for (var FO = 0; FO < FQ.length; FO++) {
                                    if (FQ[FO].crsecode.match(FE)) {
                                        E3.push(FQ[FO]);
                                    }
                                }
                            }
                        }
                    });
                    if (E3.length > 0) {
                        FJ = FJ.concat(E3);
                    }
                    E3 = [];
                    E3.length = 0;
                }
                if (0 < FJ.length) {
                    for (var FG = 0; FG < FJ.length; FG++) {
                        FD.results.push(FJ[FG]);
                    }
                }
            } else {
                var E3 = [];
                E3.length = 0;
                var FC = new RegExp("^s*" + FM.trim(), "i");
                var FB = new RegExp(FM.trim(), "i");
                $.each(BR, function (FO, FP) {
                    if (undefined != FP.text) {
                        if (FP.text.match(FC)) {
                            FD.results.push({
                                id: "subjlist-text-" + FO,
                                text: FP.text,
                                subjcode: FP.subjcode
                            });
                        } else {
                            if (FP.text.match(FB)) {
                                E3.push({
                                    id: "subjlist-text-" + FO,
                                    text: FP.text,
                                    subjcode: FP.subjcode
                                });
                            }
                        }
                    }
                });
                if (E3.length > 0) {
                    FD.results = FD.results.concat(E3);
                }
                E3 = [];
                E3.length = 0;
            } B5 = $.extend(true, [], FD.results);
            E7.callback(FD);
            return;
        }
    });
    $("#search-div-t-t1-i1").on("change", function (E3) {
        if (undefined == E3.added) {
            return;
        } else {
            if ("select-all" == E3.added) {
                $("#search-div-t-b1").trigger("click");
            } else {
                B5 = [];
                B5.length = 0;
                B5.push(E3.added);
                $("#search-div-t-t1-i1").select2c("close");
                $("#search-div-t-b1").trigger("click");
            }
        }
    });
    $("#search-div-0 #s2id_autogen1").val("(e.g., BILD, BILD 3 or computer 3 )");
    $("#search-div-0 #s2id_autogen1").click(function () {
        $("#search-div-0 #s2id_autogen1").val("");
        $("#search-div-t-t1-i1").val("");
    });
    $("#search-div-t-t1-i1").on("select2-opening", function () {
        BR = [];
        BR.length = 0;
        BR = $.extend(true, [], Ba);
    });
    $("#advanced-search").click(EC);
    function P() {
        AX.length = 0;
        m.length = 0;
        BC = [];
        BC.length = 0;
        BX = undefined;
        Dh.length = 0;
        E.length = 0;
        AW.length = 0;
        BO.length = 0;
        D3.length = 0;
        Ew.jqGrid("clearGridData", true);
    }
    $("#search-div-t-t1-i1").val("");
    function EY() {
        Co = [];
        Co.length = 0;
        var E3 = "";
        if (undefined != B5 && B5.length > 0) {
            var E5 = [];
            E5.length = 0;
            var E4 = false;
            if (B5[0].id.match(/crse/)) {
                E4 = true;
            }
            if (E4) {
                $.each(B5, function (E6, E7) {
                    var E8 = E7.text.replace(/^\D+(\d.*)/, "$1").trim();
                    E5.push(E7.subjcode.trim() + ":" + BP(E8));
                });
            } else {
                $.each(B5, function (E6, E7) {
                    E5.push(E7.subjcode.trim());
                });
            }
            if (0 < E5.length) {
                E3 = E5.join(";");
            }
        }
        U("", E3, undefined, true, false);
    }
    function BB(E6) {
        var E4 = E6.toString().split(/[,;]+/);
        var E7 = [];
        for (var E5 = 0; E5 < E4.length; E5++) {
            if (E4[E5].match(/^\s*$/)) {
                continue;
            }
            if (E4[E5].toString().length < 6) {
                var E8 = E4[E5].toString();
                E4[E5] = E8.padStart(6, "0");
            }
            E7.push(E4[E5].trim());
            Co.push(E4[E5].trim());
        }
        var E3 = E7.join(":");
        P();
        $("#search-grid-result").show();
        $("#search-grid-toggle").text("Hide search result");
        A6(E3, W);
        return;
    }
    function CM(E3, E5) {
        var E4 = E3.replace(/^.*::(.*)::.*$/, "$1");
        var E6 = n[E4];
        return String(E6);
    }
    var Df = false;
    var Aq;
    function U(FF, FL, FM, E4, FO) {
        Aq = function () {
            U(FF, FL, FM, E4, FO);
        };
        Co = [];
        Co.length = 0;
        var FT = "";
        var E9 = "";
        var FB = "";
        var FA = "";
        var FJ = "";
        var FC = "";
        var FE = "";
        var FS = "";
        var FH = "";
        Df = false;
        var FD = Ew.getGridParam("colModel")[0];
        if (E4) {
            EG = true;
            FD.sorttype = CM;
            E9 = FL;
            if (E9 == "") {
                CJ("No results found, please verify your input and try another search.");
                return;
            }
        } else {
            EG = false;
            FD.sorttype = "text";
            FH = undefined;
            if (FO) {
                if (undefined != FM) {
                    BB(FM);
                    return;
                } else {
                    FT = FF;
                    E9 = FL;
                }
            } else {
                FH = $("#search-div-t-t3-i4").val().trim();
                if (undefined != FH && ! FH.toString().match(/^\s*$/)) {
                    BB(FH);
                    return;
                }
                if (undefined == FF) {
                    if ($("#search-div-t-t2-i1").select2("data").length > 0) {
                        var E5 = [];
                        E5.length = 0;
                        $.each($("#search-div-t-t2-i1").select2("data"), function (FU, FV) {
                            E5.push(FV.subjcode);
                        });
                        FT = E5.join(":");
                    }
                } else {
                    FT = FF;
                    $("#search-div-t-t2-i1").val("");
                }
                if (undefined == FL) {
                    var FK = $("#search-div-t-t2-i2").val().trim().toUpperCase();
                    var FG = FK.split(/[,;]+/);
                    var E6 = [];
                    for (var FN = 0; FN < FG.length; FN++) {
                        if (FG[FN].match(/^\s*$/)) {
                            continue;
                        }
                        var FQ = FG[FN].replace(/\d.*/, "").trim();
                        var E3 = FG[FN].match(/\d/) ? FG[FN].replace(/^\D+(\d.*)/, "$1").trim() : "";
                        if ("" != FQ && "" != E3) {
                            E6.push(FQ + ":" + BP(E3));
                        } else {
                            if ("" != FQ) {
                                E6.push(FQ);
                            } else {
                                if ("" != E3) {
                                    E6.push(BP(E3));
                                }
                            }
                        }
                    }
                    E9 = E6.join(";");
                } else {
                    E9 = BP(FL);
                } FC = $("#search-div-t-t3-i1").val();
                if (null != FC) {
                    FC = FC.trim().toUpperCase();
                }
                if ($("#search-div-t-t3-i1").select2("data").length > 0) {
                    var E5 = [];
                    E5.length = 0;
                    $.each($("#search-div-t-t3-i1").select2("data"), function (FU, FV) {
                        E5.push(FV.depcode);
                    });
                    FC = E5.join(":");
                }
                FE = $("#search-div-t-t3-i2").val().trim().toUpperCase();
                FS = $("#search-div-t-t3-i3").val().trim().toUpperCase();
                FB = "";
                FB += $("#search-div-t-t4-c01").is(":checked") | 0;
                FB += $("#search-div-t-t4-c02").is(":checked") | 0;
                FB += $("#search-div-t-t4-c03").is(":checked") | 0;
                FB += $("#search-div-t-t4-c04").is(":checked") | 0;
                FB += $("#search-div-t-t4-c05").is(":checked") | 0;
                FB += $("#search-div-t-t4-c06").is(":checked") | 0;
                FB += $("#search-div-t-t4-c07").is(":checked") | 0;
                FB += $("#search-div-t-t4-c08").is(":checked") | 0;
                FB += $("#search-div-t-t4-c09").is(":checked") | 0;
                FB += $("#search-div-t-t4-c10").is(":checked") | 0;
                FB += $("#search-div-t-t4-c11").is(":checked") | 0;
                FB += $("#search-div-t-t4-c12").is(":checked") | 0;
                if (FB.match(/^0+$/)) {
                    FB = "";
                }
                FA = "";
                FA += $("#search-div-t-t4-c13").is(":checked") | 0;
                FA += $("#search-div-t-t4-c14").is(":checked") | 0;
                FA += $("#search-div-t-t4-c15").is(":checked") | 0;
                FA += $("#search-div-t-t4-c16").is(":checked") | 0;
                FA += $("#search-div-t-t4-c17").is(":checked") | 0;
                FA += $("#search-div-t-t4-c18").is(":checked") | 0;
                FA += $("#search-div-t-t4-c19").is(":checked") | 0;
                if (FA.match(/^0+$/)) {
                    FA = "";
                }
                FJ = "";
                var FR = $("#search-div-t-t5 tbody tr td:nth-child(2) select.ui-timepicker-select").val();
                var E7 = $("#search-div-t-t5 tbody tr td:nth-child(4) select.ui-timepicker-select").val();
                Df = $("#search-div-t-t6-c01").is(":checked") ? true : false;
                if ("none" == FR) {
                    FR = "";
                }
                if ("none" == E7) {
                    E7 = "";
                }
                var FI = D8(FR);
                var E8 = D8(E7);
                if (! FI.match(/^\d{4}$/)) {
                    FI = "";
                }
                if (! E8.match(/^\d{4}$/)) {
                    endTIme = "";
                }
                if (!("" == FI && "" == E8)) {
                    FJ = FI + ":" + E8;
                }
                if ("" != FI && "" != E8 && FI >= E8) {
                    CJ("Start time must be before end time");
                    return;
                }
            }
        }
        if ("" == FB && "" == FA && "" == FJ && "" == FT && "" == E9 && "" == FC && "" == FE && "" == FS && ! Df && ! E4) {
            CJ("No results found, please verify your input and try another search.");
            return;
        }
        if ("" == FT && "" == E9 && "" == FA && "" == FJ && Df && ! E4) {
            $("#search-warning-msg").show();
        }
        P();
        Es = FE;
        k = FA;
        AP = FI;
        E1 = E8;
        Al = FS;
        if (Df && ! E4) {
            h(FT, E9, FC, FE, FS, FB, FA, FJ, false, false, "", function (FU) {
                h(FT, E9, FC, FE, FS, FB, FA, FJ, true, false, "", function (FY) {
                    for (var FW = 0; FW < FU.length; FW++) {
                        var FX = false;
                        for (var FV = 0; FV < FY.length; FV++) {
                            if (FU[FW].SUBJ_CODE == FY[FV].SUBJ_CODE && FU[FW].CRSE_CODE == FY[FV].CRSE_CODE) {
                                FX = true;
                                break;
                            }
                        }
                        if (! FX) {
                            FU[FW].NO_SEAT = true;
                        }
                    }
                    for (var FW = FU.length - 1; FW >= 0; FW--) {
                        if (FU[FW].NO_SEAT) {
                            FU.splice(FW, 1);
                        }
                    }
                    W(FU);
                });
            });
        } else {
            if (E4) {
                var FP = $("#s2id_autogen1").val();
                h(FT, E9, FC, FE, FS, FB, FA, FJ, false, true, FP, function (FY) {
                    var Fb = E9.split(";");
                    var FX = {};
                    var FW = [];
                    FW.length = 0;
                    for (var FZ = 0; FZ < FY.length; FZ++) {
                        var Fg = FY[FZ].SUBJ_CODE.trim();
                        if (undefined == FX[Fg]) {
                            FX[Fg] = [];
                            FX[Fg].length = 0;
                        }
                        FX[Fg].push(FY[FZ]);
                    }
                    var Fe = 900001;
                    n = {};
                    for (var FZ = 0; FZ < Fb.length; FZ++) {
                        var FU = Fb[FZ].split(":");
                        var Ff = FU[0].trim();
                        var Fd = undefined;
                        if (undefined != FU[1]) {
                            Fd = FU[1].trim();
                        }
                        for (j = 0; j < FX[Ff].length; j ++) {
                            var Fa = FX[Ff][j].CRSE_CODE;
                            if (undefined == Fd) {
                                var Fc = Ff + Fa.trim();
                                if (!(Fc in n)) {
                                    n[Fc] = ++ Fe;
                                }
                                FW.push(FX[Ff][j]);
                                continue;
                            }
                            var FV = new RegExp("^\\s*" + Fd + "\\s*$", "i");
                            if (Fa.match(FV)) {
                                var Fc = Ff + Fd;
                                if (!(Fc in n)) {
                                    n[Fc] = ++ Fe;
                                }
                                FW.push(FX[Ff][j]);
                            }
                        }
                    }
                    W(FW);
                });
            } else {
                n = undefined;
                h(FT, E9, FC, FE, FS, FB, FA, FJ, false, false, "", W);
            }
        }
    }
    function W(E4) {
        $("#search-warning-msg").hide();
        if (0 == E4.length) {
            CJ("No results found, please verify your input and try another search.");
            return;
        }
        P();
        $.each(E4, function (E8, FB) {
            var FC = FB.SUBJ_CODE.trim();
            var E9 = FB.CRSE_CODE.trim();
            var FD = FB.UNIT_FROM;
            var E6 = FB.UNIT_TO;
            var E5 = FB.UNIT_INC;
            if (-1 == $.inArray(FC, AW)) {
                AW.push(FC);
            }
            var E7 = "";
            if (FD == E6) {
                E7 = FD;
            } else {
                E7 = FD + "-" + E6;
            }
            if (1 == E7) {
                E7 = " (" + E7 + " unit)";
            } else {
                E7 = " (" + E7 + " units)";
            }
            var FA = FB.SUBJ_CODE + " " + FB.CRSE_CODE;
            if (true == FB.NO_SEAT) {
                FB.colsubj = "<!-- " + FA + " ::" + FC + E9 + '::--><table style="float:left" id="search-group-header-id"><tbody>' + ' <tr><td style="width:86px; text-indent:15px; text-align:left;"> ' + FA + "</td>" + ' <td style="width:750px; text-align:left; "> ' + FB.CRSE_TITLE.trim() + E7 + "</td>" + ' <td class="search-group-header-noseat">No Seats Available' + " </tr></tbody></table>";
            } else {
                FB.colsubj = "<!-- " + FA + " ::" + FC + E9 + '::--><table style="float:left" id="search-group-header-id"><tbody>' + ' <tr><td style="width:70px; text-align:left;"> ' + FA + "</td>" + ' <td style="width:800px; text-align:left; "> ' + FB.CRSE_TITLE.trim() + E7 + "</td>" + " <td></td>" + " </tr></tbody></table>";
            } FB.ROW_MARKER = 0;
            m.push(FB);
        });
        D6();
        if (0 == E4.length) {
            CJ("No results found, please verify your input and try another search.");
        } else {
            if (1 == E4.length) {
                AJ(E4.length + " course found");
            } else {
                AJ(E4.length + " courses found");
            }
        }
        var E3 = AW.join(":");
        El(E3, function (E5) {
            D3 = E5;
        });
        Ed(0, true, false);
    }
    $("#search-pager-dropdown").change(function () {
        var E3 = $("#search-pager-dropdown option:selected").val();
        Do = E3;
        D6();
        BC = [];
        BC.length = 0;
        E = [];
        E.length = 0;
        Ed(0, false, false);
    });
    function D6() {
        var E4 = Math.ceil(m.length / Do);
        var E5 = E4;
        if (E4 > 10) {
            E5 = 10;
        }
        $("#search-pager-dropdown").show();
        $("#search-pager-dropdown-header").show();
        $("#search-pager").empty();
        var E3 = Number(E5) * 24;
        $("#search-pager").width(100 + Number(E3));
        $("#search-pager").paginate({
            count: E4,
            start: 1,
            display: E5,
            border: true,
            border_color: "#fff",
            text_color: "#fff",
            background_color: "#0b4a67",
            border_hover_color: "#ccc",
            text_hover_color: "#000",
            background_hover_color: "#fff",
            images: false,
            mouse: "slide",
            onChange: function (E6) {
                Ed(E6 - 1, true, false);
            }
        });
    }
    function Ed(E4, E6, E8) {
        var E7 = E4 * Do;
        var E5 = Number(E7) + Number(Do);
        if (typeof BC[E4] == "undefined") {
            var E3 = [];
            E3.length = 0;
            E3 = $.extend(true, [], m);
            BC[E4] = E3.slice(E7, E5);
        }
        if (undefined != BX) {
            if (E6) {
                BC[BX] = $.extend(true, [], AX);
            }
        }
        BX = E4;
        AX = $.extend(true, [], BC[E4]);
        if (typeof E[E4] == "undefined") {
            E[E4] = [];
        }
        Dh = E[E4];
        BN();
        R(E8, Ew, AX);
        BF(AX);
        Ad();
        Ew.unbind("click").click(Bb);
    }
    function Bb(FD) {
        var E5 = Ew.jqGrid("getGridParam", "groupingView");
        var FC = E5.plusicon;
        var FF = E5.minusicon;
        var FE = $(FD.target);
        var E7 = FE.closest("tr.jqgroup");
        var E8 = null;
        var E6 = null;
        var E4 = null;
        var E3 = null;
        if (E7.length > 0) {
            E8 = E7.attr("id");
            var FB = $("#" + E8 + " td.search-group-header-noseat").text();
            if (undefined != FB && FB.match(/no\s+seat/i)) {
                return;
            }
            if (FD.target.nodeName.toLowerCase() !== "span" || (! FE.hasClass(FC) && ! FE.hasClass(FF))) {
                $(this).jqGrid("groupingToggle", E8);
            }
            var FA = $("#" + E8 + " #search-group-header-id tr td:first-child").text().trim();
            E6 = FA.split(/\s+/)[0].trim();
            E4 = FA.split(/\s+/)[1].trim();
            E3 = $("#" + E8 + " #search-group-header-id tr td:nth-child(2)").text().trim();
        }
        if (null == E8) {
            return;
        }
        if ($("#" + E8 + " td:first-child span").hasClass("ui-icon-circlesmall-plus")) {
            var E9 = $.inArray(E8, Dh);
            if (-1 !== E9) {
                Dh.splice(E9, 1);
            }
            return;
        }
        if (null != E6 && null != E4 && null != E3) {
            Bk(E8, E6, E4, E3);
        }
        return false;
    }
    function Bk(E7, E9, E4, E8) {
        crseCodeWellForm = BP(E4);
        var E6 = null;
        $.each(AX, function (FB, FD) {
            if (0 == FD.ROW_MARKER) {
                var FA = FD.CRSE_CODE.trim();
                var FC = FD.SUBJ_CODE.trim();
                if (E4 == FA && E9 == FC) {
                    E6 = FB;
                    return false;
                }
            }
        });
        if (null == E6) {
            $(".search-pbf-class").hide();
            Dh.push(E7);
            return;
        }
        var E5 = AX[E6];
        var E3 = "";
        if (BL(undefined, E9, E4, "EN")[0]) {
            E3 = "enExist";
        } else {
            if (BL(undefined, E9, E4, "WT")[0]) {
                E3 = "wtExist";
            }
        } D2(E9.trim(), E4, crseCodeWellForm, function (Fp) {
            if (Fp.length <= 0) {
                Ew.jqGrid("groupingToggle", E7);
                return;
            }
            var FX = AX.splice(E6, 1);
            var FY = [];
            FY.length = 0;
            var Ff = {};
            Ff["cate0X"] = [];
            Ff["cate0X"].length = 0;
            Ff["ASortKey"] = 1000;
            Ff["0SortKey"] = 99000;
            Ff["0SortKey"] = 99000;
            var FU = [];
            FU.length = 0;
            var FV = [];
            FV.length = 0;
            var FT = [];
            FT.length = 0;
            var FD = ("" != Es) ? true : false;
            var Fe = ("" != k) ? true : false;
            var FW = ("" != AP || "" != E1) ? true : false;
            var FZ = ("" != Al.trim());
            var Fl = "X";
            if (Fe) {
                if (0 == k.charAt(0)) {
                    Fl = Fl + "|1";
                }
                if (0 == k.charAt(1)) {
                    Fl = Fl + "|2";
                }
                if (0 == k.charAt(2)) {
                    Fl = Fl + "|3";
                }
                if (0 == k.charAt(3)) {
                    Fl = Fl + "|4";
                }
                if (0 == k.charAt(4)) {
                    Fl = Fl + "|5";
                }
                if (0 == k.charAt(5)) {
                    Fl = Fl + "|6";
                }
                if (0 == k.charAt(6)) {
                    Fl = Fl + "|7";
                }
            }
            var Fb = undefined;
            var Fj = "";
            var Fa = "";
            var FP = "";
            var FR = "";
            var Fq = {};
            $.each(Fp, function (F2, F3) {
                var Fy = F3.SECT_CODE.substr(0, 1);
                if (Fy.match(/^[A-Z]/)) {
                    if (-1 == $.inArray(Fy, FU)) {
                        FU.push(Fy);
                    }
                }
                F3.ORG_SECTION_NUMBER = F3.SECTION_NUMBER;
                F3.DAY_CODE_NUM = F3.DAY_CODE;
                var Fz = EM(F3.DAY_CODE);
                if (Fz == "") {
                    Fz = "TBA";
                }
                F3.DAY_CODE = Fz;
                var F0 = F3.BEGIN_HH_TIME;
                var F1 = F3.BEGIN_MM_TIME;
                var Ft = F3.END_HH_TIME;
                var Fu = F3.END_MM_TIME;
                var Fv = F0 + ":" + F1;
                var F4 = Ft + ":" + Fu;
                Fv = Cs(Fv);
                F4 = Cs(F4);
                var Fs = "";
                if (F0 == 0 && F1 == 0 && Ft == 0 && Fu == 0) {
                    Fs = "TBA";
                } else {
                    Fs = Fv + "-" + F4;
                } F3.coltime = Fs;
                var Fx = BL(F3.SECTION_NUMBER, undefined, undefined, "ALL");
                if (Fx[0]) {
                    switch (Fx[1]) {
                        case "PL": F3.BUTTON_ACTION = "DISABLE-SECTION-PL";
                            break;
                        case "EN": F3.BUTTON_ACTION = "DISABLE-SECTION-ENWT";
                            break;
                        case "WT": F3.BUTTON_ACTION = "DISABLE-SECTION-ENWT";
                            break;
                        default: F3.BUTTON_ACTION = "";
                    }
                } else {
                    F3.BUTTON_ACTION = "";
                }
                var Fw = F3.BLDG_CODE;
                if (Fw != "TBA") {
                    F3.BLDG_CODE = '<a target="_blank" class="nonewwin" href="http://act.ucsd.edu/maps/?isisCode=' + F3.BLDG_CODE + '">' + F3.BLDG_CODE + "</a>";
                    F3.ROOM_CODE = '<a target="_blank" class="nonewwin" href="http://act.ucsd.edu/maps/?isisCode=' + Fw + '">' + F3.ROOM_CODE.trim() + "</a>";
                }
                if (Co.length > 0) {
                    $.each(Co, function (F5, F6) {
                        if (F3.SECTION_NUMBER == F6) {
                            Fq[F3.SECT_CODE.substr(0, 1)] = true;
                        }
                    });
                }
                if (1 == Fp.length) {
                    FV.push(F3);
                    return false;
                }
                if (Fb != undefined) {
                    if (Fb.SECT_CODE == F3.SECT_CODE && Fb.FK_SPM_SPCL_MTG_CD == F3.FK_SPM_SPCL_MTG_CD && ! F3.FK_SPM_SPCL_MTG_CD.match(/MI|FI|FM|PB|RE|OT|MU/)) {
                        F3.DAY_CODE = Fj + "\n" + F3.DAY_CODE;
                        F3.coltime = Fa + "\n" + F3.coltime;
                        F3.BLDG_CODE = FP + "\n" + F3.BLDG_CODE;
                        F3.ROOM_CODE = FR + "\n" + F3.ROOM_CODE;
                    } else {
                        FV.push(Fb);
                    }
                }
                if ((F2 + 1) == Fp.length) {
                    FV.push(F3);
                }
                Fj = F3.DAY_CODE;
                Fa = F3.coltime;
                FP = F3.BLDG_CODE;
                FR = F3.ROOM_CODE;
                Fb = $.extend(true, {}, F3);
            });
            var Fn = 0;
            var FI = 0;
            var Fm = 0;
            var Fh = 0;
            var Fd = undefined;
            var FL = undefined;
            var FN = [];
            var FC = [];
            $.each(FV, function (Fx, Fz) {
                if (undefined != Fz.PRINT_FLAG && Fz.PRINT_FLAG.match(/N/i)) {
                    return;
                }
                if (BM) {
                    if (undefined == Fd || undefined == FL) {
                        if (undefined != Fz.SECTION_START_DATE) {
                            Fd = Fz.SECTION_START_DATE;
                        }
                        if (undefined != Fz.SECTION_END_DATE) {
                            FL = Fz.SECTION_END_DATE;
                        }
                    }
                }
                var F2 = Fz.SECT_CODE.trim();
                var F3 = F2.substr(0, 1);
                var Fu = F2.match(/00$|^0|^1/) ? true : false;
                var Fy = Fz.FK_SST_SCTN_STATCD == "AC";
                var Fv = Fz.FK_SST_SCTN_STATCD == "CA";
                if (undefined == F2) {
                    return;
                }
                if (Df && (Fy || Fv)) {
                    if (undefined == Fz.AVAIL_SEAT || Fz.AVAIL_SEAT < 1 || (undefined != Fz.STP_ENRLT_FLAG && Fz.STP_ENRLT_FLAG.match(/y/i))) {
                        return;
                    } else {
                        FC.push(F3 + "00");
                    }
                } else {
                    if (Df && Fu) {
                        if (FC.indexOf(F2) == -1) {
                            return;
                        }
                    }
                }
                if (Co.length > 0 && (-1 === $.inArray(Fz.SECTION_NUMBER.toString(), Co))) {
                    if (! Fq[F3]) {
                        return;
                    } else {
                        if (! Fu && "NC" != Fz.FK_SST_SCTN_STATCD) {
                            return;
                        }
                    }
                }
                if (FD) {
                    var Fw = (Fz.PERSON_FULL_NAME.split(";"))[0].toUpperCase();
                    if (-1 == Fw.indexOf(Es)) {
                        return;
                    }
                }
                if (Fe && (Fu)) {
                    if (Fz.DAY_CODE_NUM.match(Fl) && ! Fz.FK_SPM_SPCL_MTG_CD.match(/MI|FI|FM|PB|RE|OT|MU/)) {
                        FN.push(Fz.ORG_SECTION_NUMBER);
                        return;
                    } else {
                        if (FN.indexOf(Fz.ORG_SECTION_NUMBER) != -1) {
                            return;
                        }
                    }
                }
                if (FW && Fu) {
                    if (! Fz.FK_SPM_SPCL_MTG_CD.match(/MI|FI|FM|PB|RE|OT|MU/)) {
                        var Ft = Fz.BEGIN_HH_TIME + String("0" + Fz.BEGIN_MM_TIME).slice(-2);
                        var F1 = Fz.END_HH_TIME + String("0" + Fz.END_MM_TIME).slice(-2);
                        if ("000" != Ft && "" != AP && Number(Ft) < Number(AP)) {
                            FN.push(Fz.ORG_SECTION_NUMBER);
                            return;
                        }
                        if ("000" != F1 && "" != E1 && Number(E1) < Number(F1)) {
                            FN.push(Fz.ORG_SECTION_NUMBER);
                            return;
                        }
                    } else {
                        if (FN.indexOf(Fz.ORG_SECTION_NUMBER) != -1) {
                            return;
                        }
                    }
                }
                if (FZ) {
                    var F0 = E8.split("(");
                    var Fs = E8.replace("(" + F0[F0.length - 1], "");
                    Fs = Fs.trim();
                    if (Fs.toUpperCase().indexOf(Al.trim()) == -1) {
                        if (Fz.LONG_DESC.toUpperCase().indexOf(Al.trim()) == -1) {
                            return;
                        }
                    }
                }
                Fn++;
                Fz.ROW_MARKER = 1;
                Fz.colsubj = E5.colsubj;
                Fz.SUBJ_CODE = E9;
                Fz.CRSE_CODE = E4;
                Fz.SEARCH_TITLE = E8;
                FY.push(Fz.SECTION_NUMBER);
                Fz.ROW_SPAN = 1;
                Fz.ROW_COUP = 0;
                Fz.ROW_SPAN_INST = 1;
                Fz.COL_SPAN = 1;
                Fz.COL_SPAN_SC = 1;
                Fz.COL_SPAN_DAYS = 1;
                Fz.ROW_ATTR = {
                    "rowClass": "wr-search-group-data-row "
                };
                Fz.colaction = "";
                if ("AC" == Fz.FK_SST_SCTN_STATCD && ! Fz.FK_SPM_SPCL_MTG_CD.match(/MI|FI|FM|PB|RE|OT|MU/)) {
                    Fz.BOOK_LINK = '<a  target="_blank" href="https://ucsdbkst.ucsd.edu/wrtx/TextSearch?section=' + Fz.SECTION_NUMBER + "&term=" + Ca + "&subject=" + E9 + "&course=" + E4 + '"><img style="vertical-align:middle;" src="/webreg2/resources/images/book.gif" border="0" ' + 'alt="View book list" title="View book list"></a>';
                } else {
                    Fz.BOOK_LINK = "";
                }
                var Fw = Fz.PERSON_FULL_NAME.trim();
                if (Fw == "") {
                    Fw = "Staff";
                } else {
                    $.each(Fw.split(":"), function (F4, F6) {
                        var F5 = F6.split(";");
                        einstName = F5[0];
                        einstId = F5[1];
                        einstName = einstName.trim();
                        if (!einstName.match(/^\s*staff\s*$/i)) {
                            einstName = einstName + ' <a class="email-link-class" emailref="' + einstId + '" emailname="' + einstName + '" href="#none"><img  style="vertical-align:middle;" src="/webreg2/resources/images/email_12.png" border="0" ' + 'alt="Send email to ' + einstName + '" title="Send email to ' + einstName + '"></img></a>';
                        }
                        if (F4 == 0) {
                            Fw = einstName;
                        } else {
                            Fw = Fw + "\n" + einstName;
                        }
                    });
                } Fz.PERSON_FULL_NAME = Fw;
                if (Fz.AVAIL_SEAT < 0) {
                    Fz.AVAIL_SEAT = 0;
                }
                if (Fz.FK_SST_SCTN_STATCD == "AC") {
                    if (undefined == Ff["cateNumAC" + F3]) {
                        Ff["cateNumAC" + F3] = 0;
                    }
                    Ff["cateNumAC" + F3]++;
                }
                if (undefined != Fz.FK_SPM_SPCL_MTG_CD && Fz.FK_SPM_SPCL_MTG_CD.match(/FM|PB|RE|OT|MU/)) {
                    Fz.colaction = Ay(Fz.START_DATE);
                    Fz.AVAIL_SEAT = "";
                    Fz.COUNT_ON_WAITLIST = "";
                    Fz.SCTN_CPCTY_QTY = "";
                    if (undefined == Ff["catePBF" + F3]) {
                        Ff["catePBF" + F3] = [];
                    }
                    Ff["catePBF" + F3].push(Fz);
                    return;
                }
                if ("MI" == Fz.FK_SPM_SPCL_MTG_CD) {
                    Fz.colaction = Ay(Fz.START_DATE);
                    Fz.AVAIL_SEAT = "";
                    Fz.COUNT_ON_WAITLIST = "";
                    Fz.SCTN_CPCTY_QTY = "";
                    if (undefined == Ff["cateMI" + F3]) {
                        Ff["cateMI" + F3] = [];
                    }
                    Ff["cateMI" + F3].push(Fz);
                    return;
                }
                if ("FI" == Fz.FK_SPM_SPCL_MTG_CD) {
                    Fz.colaction = Ay(Fz.START_DATE);
                    Fz.AVAIL_SEAT = "";
                    Fz.COUNT_ON_WAITLIST = "";
                    Fz.SCTN_CPCTY_QTY = "";
                    Ff["cateFI" + F3] = Fz;
                    return;
                }
                if ("NC" == Fz.FK_SST_SCTN_STATCD) {
                    Fz.SECTION_NUMBER = "";
                    Fz.AVAIL_SEAT = "";
                    Fz.COUNT_ON_WAITLIST = "";
                    Fz.SCTN_CPCTY_QTY = "";
                } else {
                    if ("Y" == Fz.STP_ENRLT_FLAG.trim().toUpperCase()) {
                        Fz.AVAIL_SEAT = 0;
                    }
                }
                if (9999 == Fz.SCTN_CPCTY_QTY) {
                    Fz.SCTN_CPCTY_QTY = "No<br />Limit";
                    Fz.AVAIL_SEAT = "<b>";
                }
                if ("CA" == Fz.FK_SST_SCTN_STATCD) {
                    Fz.COL_SPAN_DAYS = 10;
                    Fz.DAY_CODE = "cancelled";
                }
                if (F3.match(/^\d$/)) {
                    if (-1 == $.inArray("0", FU)) {
                        FU.push("0");
                    }
                    Fm++;
                    if (undefined == Ff["cate0N"]) {
                        Ff["cate0N"] = [];
                    }
                    Ff["cate0N"].push(Fz);
                } else {
                    if (F2 == F3 + "00") {
                        FI++;
                        Ff["cate" + F3 + "0"] = Fz;
                    } else {
                        Fh++;
                        if (undefined == Ff["cate" + F3 + "X"]) {
                            Ff["cate" + F3 + "X"] = [];
                        }
                        Ff["cate" + F3 + "X"].push(Fz);
                    }
                }
            });
            if (0 == Fn || (0 == FI && 0 == Fn)) {
                Ew.jqGrid("groupingToggle", E7);
                return;
            }
            var FQ = {
                "SECTION_NUMBER": "Section ID",
                "SECT_CODE": "Section",
                "FK_CDI_INSTR_TYPE": "Meeting\nType",
                "DAY_CODE": "Days",
                "coltime": "Time",
                "BLDG_CODE": "Building",
                "ROOM_CODE": "Room",
                "AVAIL_SEAT": "Avail\nSeats",
                "SCTN_CPCTY_QTY": "Total\nSeats",
                "COUNT_ON_WAITLIST": "Waitlist\nCount",
                "BOOK_LINK": "Book",
                "PERSON_FULL_NAME": "Instructor",
                "colaction": "Action",
                "ROW_MARKER": 1,
                "colsubj": E5.colsubj,
                "SUBJ_CODE": E9,
                "CRSE_CODE": E4,
                "SORT_KEY": ++ Ff["ASortKey"],
                "ROW_SPAN": 1,
                "ROW_COUP": 0,
                "ROW_SPAN_INST": 1,
                "COL_SPAN": 1,
                "COL_SPAN_SC": 1,
                "COL_SPAN_DAYS": 1,
                "ROW_ATTR": {
                    "rowClass": "wr-search-group-member-header"
                }
            };
            FT.push(FQ);
            var FS = "";
            var Fg = E9 + "-" + E4;
            $.each(D3, function (Fs, Ft) {
                if (Ft.SUBJCRSE == Fg) {
                    FS = FS + " " + Ft.TEXT.trim();
                    FS = FS.replace(/\\/g, "<br>");
                }
            });
            if ("" != FS) {
                var FF = "&nbsp;&nbsp;&nbsp;&nbsp;<img style='vertical-align:middle;' src='/webreg2/resources/images/info.png'><span style='; line-height:100%; vertical-align: middle;'><b> Course Note:</b> ";
                var Fi = "</span>";
                var FE = FF + FS + Fi;
                var Fc = {
                    "SORT_KEY": ++ Ff["ASortKey"],
                    "SECTION_NUMBER": FE,
                    "ROW_MARKER": 1,
                    "colsubj": E5.colsubj,
                    "SUBJ_CODE": E9,
                    "CRSE_CODE": E4,
                    "COL_SPAN": 13,
                    "COL_SPAN_SC": 1,
                    "COL_SPAN_DAYS": 1,
                    "ROW_ATTR": {
                        "rowClass": "wr-search-group-crse-text"
                    },
                    "colaction": "",
                    "ROW_SPAN": 1,
                    "ROW_COUP": 0,
                    "ROW_SPAN_INST": 1
                };
                FT.push(Fc);
            }
            if (FY.length > 0) {
                var FB = FY.join(":");
                var Fr = {};
                CD(FB, function (Fs) {
                    $.each(Fs, function (Ft, Fu) {
                        if (Fu.SECTNUM in Fr) {
                            Fr[Fu.SECTNUM] = Fr[Fu.SECTNUM] + " " + Fu.TEXT.trim();
                        } else {
                            Fr[Fu.SECTNUM] = Fu.TEXT.trim();
                        }
                    });
                });
            }
            var FH = function (Fx, Fu, Ft) {
                var Fs = "";
                var Fw = "<img style='vertical-align:middle;' src='/webreg2/resources/images/info.png'><span style='; line-height:100%; vertical-align: middle;'> <b>Section " + Fx + " Note:</b> ";
                var Fv = "</span>";
                var Fs = Fw + Ft + Fv;
                var Fy = {
                    "SORT_KEY": Fu,
                    "SECTION_NUMBER": "",
                    "SECT_CODE": Fs,
                    "ROW_MARKER": 1,
                    "colsubj": E5.colsubj,
                    "SUBJ_CODE": E9,
                    "CRSE_CODE": E4,
                    "COL_SPAN": 1,
                    "COL_SPAN_SC": 12,
                    "COL_SPAN_DAYS": 1,
                    "ROW_ATTR": {
                        "rowClass": "wr-search-group-section-text"
                    },
                    "colaction": "",
                    "ROW_SPAN": 1,
                    "ROW_COUP": 0,
                    "ROW_SPAN_INST": 1
                };
                FT.push(Fy);
            };
            var Fo = {
                "SECTION_NUMBER": "Note: The following is an additional required meeting type for the above courses.",
                "ROW_MARKER": 1,
                "colsubj": E5.colsubj,
                "SUBJ_CODE": E9,
                "CRSE_CODE": E4,
                "COL_SPAN": 13,
                "COL_SPAN_SC": 1,
                "COL_SPAN_DAYS": 1,
                "ROW_ATTR": {
                    "rowClass": "wr-search-nc-header-row"
                },
                "colaction": "",
                "ROW_SPAN": 1,
                "ROW_COUP": 0,
                "ROW_SPAN_INST": 1
            };
            var FM = "";
            Dj(E9, E4, function (Fs) {
                if (Fs.length > 0) {
                    FM = '<span class="prereqs-bar prereqs-bar-crse-' + E9.trim() + E4.trim() + '">Prerequisites</span> | ';
                }
                var Ft = {
                    subjCode: E9,
                    crseCode: E4,
                    resData: Fs
                };
                $("#search-div-b-table").on("click", ".prereqs-bar-crse-" + E9.trim() + E4.trim(), Ft, A2);
            });
            var FO = "https://cape.ucsd.edu/responses/Results.aspx?courseNumber=" + E9 + "+" + E4;
            var FK = "";
            var FJ = "";
            Dk(E9, crseCodeWellForm, function (Fx) {
                if (Fx.length <= 0) {
                    return;
                }
                var Fs = undefined;
                var F2 = false;
                var Fu = [];
                var Fw = [];
                var Ft = "Department Approval Required";
                var Fy = "College";
                var F1 = "Major";
                var Fv = "Academic Level";
                var F0 = "Class Level";
                $.each(Fx, function (F3, F4) {
                    switch (F4.CRSE_REGIS_TYPE_CD) {
                        case "OT": F2 = true;
                            break;
                        case "MA":
                            if (Fu.indexOf(F1) == -1) {
                                Fu.push(F1);
                                Fw.push(F4.CRSE_REGIS_TYPE_CD);
                            }
                            break;
                        case "CO":
                            if (Fu.indexOf(Fy) == -1) {
                                Fu.push(Fy);
                                Fw.push(F4.CRSE_REGIS_TYPE_CD);
                            }
                            break;
                        case "CL":
                            if (Fu.indexOf(F0) == -1) {
                                Fu.push(F0);
                                Fw.push(F4.CRSE_REGIS_TYPE_CD);
                            }
                            break;
                        case "LV":
                            if (Fu.indexOf(Fv) == -1) {
                                Fu.push(Fv);
                                Fw.push(F4.CRSE_REGIS_TYPE_CD);
                            }
                            break;
                    }
                });
                switch (Fu.length) {
                    case 0:
                        break;
                    case 1: Fs = "Restricted by " + Fu[0];
                        break;
                    case 2: Fs = "Restricted by " + Fu[0] + " and " + Fu[1];
                        break;
                    case 3: Fs = "Restricted by " + Fu[0] + ", " + Fu[1] + " and " + Fu[2];
                        break;
                    case 4: Fs = "Restricted by " + Fu[0] + ", " + Fu[1] + ", " + Fu[2] + " and " + Fu[3];
                        break;
                }
                if (F2) {
                    FJ = "<span class='dept-approval-class'>Department Approval Required</span> | ";
                }
                if (Fs != undefined) {
                    FJ += '<span class="restrictions-bar restrictions-bar-crse-' + E9.trim() + crseCodeWellForm.trim() + '">' + Fs + " </span> | ";
                }
                var Fz = {
                    subjCode: E9,
                    crseCode: crseCodeWellForm,
                    resData: Fw
                };
                $("#search-div-b-table").on("click", ".restrictions-bar-crse-" + E9.trim() + crseCodeWellForm.trim(), Fz, B7);
            });
            Ds(E9, crseCodeWellForm, function (Fs) {
                if (undefined != Fs.CATALOG_DATA) {
                    FK = Fs.CATALOG_DATA.trim().toUpperCase();
                }
            });
            var Fk = "";
            if ("RESEARCH" == FK || "EXCLUDE" == FK) {
                Fk = "";
            } else {
                if ("CLPH" == FK) {
                    Fk = "http://pharmacy.ucsd.edu/prospective/curriculum.shtml";
                } else {
                    if ("EAP" == FK) {
                        Fk = "http://www.ucsd.edu/catalog/courses/EAP.html";
                    } else {
                        if ("DNP" == FK) {
                            Fk = "http://registrar.ucsd.edu/studentlink/cnd.html";
                        } else {
                            Fk = "http://www.ucsd.edu/catalog/courses/" + FK + ".html#" + E9.toLowerCase() + E4.toLowerCase();
                        }
                    }
                }
            }
            var FG = "";
            if (BM) {
                FG = " " + Ae + ": " + Ax(Fd) + " - " + Ax(FL);
            }
            $.each(FU, function (F3, GD) {
                var F5 = Ff["cateNumAC" + GD];
                var F1 = Ff["cate" + GD + "0"];
                if (undefined == Ff["cate" + GD + "X"]) {
                    Ff["cate" + GD + "X"] = [];
                }
                var F4 = Ff["cate" + GD + "X"];
                var F9 = Ff["cate0N"];
                var GB = Ff["cateMI" + GD];
                var GC = Ff["cateFI" + GD];
                var F2 = Ff["catePBF" + GD];
                if (GD.match(/[B-Z]/)) {
                    Ff[GD + "SortKey"] = (GD.charCodeAt(0) - 64) * 1000;
                } else {
                    if (GD == "0") {
                        Ff[GD + "SortKey"] = (91 - 64) * 1000;
                    }
                }
                var Fx = "http://courses.ucsd.edu/courseList.aspx?name=" + E9;
                if (undefined != F1) {
                    if (F1.ORG_SECTION_NUMBER.toString().match(/^\d+$/)) {
                        Fx = "http://courses.ucsd.edu/coursemain.aspx?section=" + F1.ORG_SECTION_NUMBER;
                    }
                } else {
                    if (undefined != F9 && undefined != F9[0]) {
                        if (F9[0].ORG_SECTION_NUMBER.toString().match(/^\d+$/)) {
                            Fx = "http://courses.ucsd.edu/coursemain.aspx?section=" + F9[0].ORG_SECTION_NUMBER;
                        }
                    }
                }
                var F6 = '<a target="_blank" href="' + Fk + '" >Catalog</a> | ';
                if ("" == Fk.trim()) {
                    F6 = "";
                }
                var Ft = '<table width="100%"><tr><td style="border-right-style: none" >' + FG + '<td><span style="float: right; margin: 0px;">' + FJ + F6 + FM + '<a target="_blank" href="' + Fx + '">Resources</a>  | ' + '<a target="_blank" href="' + FO + '">Evaluations</a> ' + "</span></td></tr></table>";
                var F7 = {
                    "SECTION_NUMBER": Ft,
                    "ROW_MARKER": 1,
                    "colsubj": E5.colsubj,
                    "SUBJ_CODE": E9,
                    "CRSE_CODE": E4,
                    "COL_SPAN": 13,
                    "COL_SPAN_SC": 1,
                    "COL_SPAN_DAYS": 1,
                    "ROW_ATTR": {
                        "rowClass": "wr-search-group-classlink-row"
                    },
                    "colaction": "",
                    "ROW_SPAN": 1,
                    "ROW_COUP": 0,
                    "ROW_SPAN_INST": 1
                };
                var Fy = $.extend(true, {}, F7);
                Fy.SORT_KEY = ++ Ff[GD + "SortKey"];
                if ("0" != GD) {
                    if (undefined != F1 && F1.FK_SST_SCTN_STATCD == "AC") {
                        FT.push(Fy);
                        F1.SECTION_HEAD = F1.SECTION_NUMBER.toString().match(/^\s*$/) ? F1.ORG_SECTION_NUMBER : F1.SECTION_NUMBER;
                        F1.SECTION_HEAD_CODE = F1.SECT_CODE;
                        F1.colaction = B8(F1.SECTION_HEAD, F1.AVAIL_SEAT, F1.STP_ENRLT_FLAG, F1.SUBJ_CODE, F1.CRSE_CODE, F1.BUTTON_ACTION, E3);
                        F1.SORT_KEY = ++ Ff[GD + "SortKey"];
                        F1.ROW_ATTR.rowClass = F1.ROW_ATTR.rowClass + " wr-search-ac-alone ";
                        FT.push(F1);
                        var GA = F1.SECTION_NUMBER;
                        if (GA in Fr) {
                            F1.ROW_ATTR.rowClass = F1.ROW_ATTR.rowClass + " wr-search-group-section-text-owner ";
                            FH(F1.SECT_CODE, ++ Ff[GD + "SortKey"], Fr[GA]);
                        }
                        if (F4.length > 0 && "CA" != F4[0].FK_SST_SCTN_STATCD) {
                            var Fu = $.extend(true, {}, Fo);
                            Fu.SORT_KEY = ++ Ff[GD + "SortKey"];
                            FT.push(Fu);
                        }
                        var Fv = 0;
                        $.each(F4, function (GE, GF) {
                            var GG = GF.ORG_SECTION_NUMBER;
                            GF.AVAIL_SEAT = "";
                            GF.SCTN_CPCTY_QTY = "";
                            GF.SECTION_NUMBER = "";
                            if (GE == F4.length - 1) {
                                GF.ROW_ATTR.rowClass = GF.ROW_ATTR.rowClass + " wr-search-nc-alone-last ";
                            } else {
                                if (F4[GE + 1].FK_SST_SCTN_STATCD) {
                                    GF.ROW_ATTR.rowClass = GF.ROW_ATTR.rowClass + " wr-search-nc-alone-before-cancel ";
                                } else {
                                    GF.ROW_ATTR.rowClass = GF.ROW_ATTR.rowClass + " wr-search-nc-alone ";
                                }
                            } GF.SORT_KEY = ++ Ff[GD + "SortKey"];
                            FT.push(GF);
                            if (GG in Fr) {
                                GF.ROW_ATTR.rowClass = GF.ROW_ATTR.rowClass + " wr-search-group-section-text-owner ";
                                FH(GF.SECT_CODE, ++ Ff[GD + "SortKey"], Fr[GG]);
                            }
                        });
                    } else {
                        if (undefined != F1 && F1.FK_SST_SCTN_STATCD != "AC") {
                            FT.push(Fy);
                            var F0 = true;
                            var Fw = true;
                            var F8 = ++ Ff[GD + "SortKey"];
                            var Fs = false;
                            $.each(F4, function (GF, GH) {
                                var GE = GH.FK_SST_SCTN_STATCD == "AC" ? true : false;
                                if (GE) {
                                    Fs = false;
                                    Fw = false;
                                    var GG = $.extend(true, {}, F1);
                                    GG.ROW_SPAN = 2;
                                    GG.ROW_COUP = 1;
                                    GH.ROW_COUP = 2;
                                    GG.SECTION_NUMBER = GH.SECTION_NUMBER;
                                    GG.SECTION_HEAD = GH.SECTION_NUMBER.toString().match(/^\s*$/) ? GH.ORG_SECTION_NUMBER : GH.SECTION_NUMBER;
                                    GG.SECTION_HEAD_CODE = GH.SECT_CODE;
                                    GG.colaction = B8(GH.ORG_SECTION_NUMBER, GH.AVAIL_SEAT, GH.STP_ENRLT_FLAG, GH.SUBJ_CODE, GH.CRSE_CODE, GH.BUTTON_ACTION, E3);
                                    GG.ROW_ATTR.rowClass = GG.ROW_ATTR.rowClass + " wr-search-batch-middle ";
                                    if (GG.PERSON_FULL_NAME == GH.PERSON_FULL_NAME) {
                                        GH.PERSON_FULL_NAME = "";
                                        GG.ROW_SPAN_INST = 2;
                                    }
                                    var GJ = GG.ORG_SECTION_NUMBER;
                                    if (GJ in Fr && F0) {
                                        F0 = false;
                                        GG.ROW_ATTR.rowClass = GG.ROW_ATTR.rowClass + " wr-search-group-section-text-owner ";
                                        FH(GG.SECT_CODE, ++ Ff[GD + "SortKey"], Fr[GJ]);
                                    }
                                    GG.SORT_KEY = ++ Ff[GD + "SortKey"];
                                    FT.push(GG);
                                    if ("CA" != GH.FK_SST_SCTN_STATCD) {
                                        GH.ROW_SPAN = 0;
                                    }
                                } else {
                                    if ("CA" != GH.FK_SST_SCTN_STATCD) {
                                        if (! Fs) {
                                            var GI = $.extend(true, {}, Fo);
                                            GI.SORT_KEY = ++ Ff[GD + "SortKey"];
                                            FT.push(GI);
                                            Fs = true;
                                        }
                                        if (GF == F4.length - 1) {
                                            GH.ROW_ATTR.rowClass = GH.ROW_ATTR.rowClass + " wr-search-nc-alone-last ";
                                        } else {
                                            GH.ROW_ATTR.rowClass = GH.ROW_ATTR.rowClass + " wr-search-nc-alone ";
                                        }
                                    } else {
                                        if (GH.BEFORE_DESC.trim() == "AC") {
                                            Fw = false;
                                            var GG = $.extend(true, {}, F1);
                                            GG.ROW_SPAN = 2;
                                            GG.ROW_COUP = 1;
                                            GH.ROW_COUP = 2;
                                            GG.SECTION_NUMBER = GH.SECTION_NUMBER;
                                            GG.SECTION_HEAD = GH.SECTION_NUMBER.toString().match(/^\s*$/) ? GH.ORG_SECTION_NUMBER : GH.SECTION_NUMBER;
                                            GG.SECTION_HEAD_CODE = GH.SECT_CODE;
                                            GG.COL_SPAN_DAYS = 10;
                                            GG.ROW_SPAN_DAYS = 2;
                                            GG.DAY_CODE = GH.DAY_CODE;
                                            GG.ROW_ATTR.rowClass = GG.ROW_ATTR.rowClass + " wr-search-batch-middle-cancelled ";
                                            GG.SORT_KEY = ++ Ff[GD + "SortKey"];
                                            FT.push(GG);
                                            GH.ROW_SPAN = 0;
                                        } else {
                                            GH.SECTION_NUMBER = "";
                                        }
                                        if (GF == F4.length - 1) {
                                            GH.ROW_ATTR.rowClass = GH.ROW_ATTR.rowClass + " wr-search-nc-alone-last ";
                                        } else {
                                            GH.ROW_ATTR.rowClass = GH.ROW_ATTR.rowClass + " wr-search-nc-alone ";
                                        }
                                    }
                                } GH.SORT_KEY = ++ Ff[GD + "SortKey"];
                                FT.push(GH);
                                var GJ = GH.ORG_SECTION_NUMBER;
                                if (GJ in Fr) {
                                    GH.ROW_ATTR.rowClass = GH.ROW_ATTR.rowClass + " wr-search-group-section-text-owner ";
                                    FH(GH.SECT_CODE, ++ Ff[GD + "SortKey"], Fr[GJ]);
                                }
                            });
                            if (Fw) {
                                if ("CA" != F1.FK_SST_SCTN_STATCD) {
                                    F1.ROW_ATTR.rowClass = F1.ROW_ATTR.rowClass + " wr-search-nc-alone ";
                                }
                                F1.SORT_KEY = F8;
                                FT.push(F1);
                            }
                        }
                    }
                } else {
                    FT.push(Fy);
                    $.each(F9, function (GE, GF) {
                        GF.SORT_KEY = ++ Ff[GD + "SortKey"];
                        GF.SECTION_HEAD = GF.SECTION_NUMBER.toString().match(/^\s*$/) ? GF.ORG_SECTION_NUMBER : GF.SECTION_NUMBER;
                        GF.SECTION_HEAD_CODE = GF.SECT_CODE;
                        if (GF.FK_SST_SCTN_STATCD == "NC") {
                            if (undefined != Ff["cateNum"] && GE == Ff["cateNum"].length - 1) {
                                GF.ROW_ATTR.rowClass = GF.ROW_ATTR.rowClass + " wr-search-nc-alone-last ";
                            } else {
                                GF.ROW_ATTR.rowClass = GF.ROW_ATTR.rowClass + " wr-search-nc-alone ";
                            }
                        } else {
                            if (GF.FK_SST_SCTN_STATCD == "AC") {
                                GF.colaction = B8(GF.SECTION_HEAD, GF.AVAIL_SEAT, GF.STP_ENRLT_FLAG, GF.SUBJ_CODE, GF.CRSE_CODE, GF.BUTTON_ACTION, E3);
                            }
                        } FT.push(GF);
                        var GG = GF.SECTION_NUMBER;
                        if (GG in Fr) {
                            GF.ROW_ATTR.rowClass = GF.ROW_ATTR.rowClass + " wr-search-group-section-text-owner ";
                            FH(GF.SECT_CODE, ++ Ff[GD + "SortKey"], Fr[GG]);
                        }
                    });
                }
                if (null != F2) {
                    var Fz = null;
                    $.each(F2, function (GE, GG) {
                        var GH = GG.SECTION_NUMBER + "-" + GG.FK_SPM_SPCL_MTG_CD;
                        if (0 == GE || 1 == F2.length || (null != Fz && undefined != Fz.FK_SPM_SPCL_MTG_CD && Fz.FK_SPM_SPCL_MTG_CD != GG.FK_SPM_SPCL_MTG_CD)) {
                            var GI = $.extend(true, {}, GG);
                            GI.SEARCH_PBF_ID = GH;
                            var GF = "<img class='search-pbf-header-class' id='search-pbf-id-" + GI.SEARCH_PBF_ID + "' alt='Expand: ' src='" + DP + "' " + " style=' width:8px; height:8px; margin-right: 2px; margin-top: 5px;' ></img> ";
                            GI.SECTION_NUMBER = "<div style='width:100%; text-align:left' class='search-outer-pbf-header-class' id='search-outer-pbf-id-" + GI.SEARCH_PBF_ID + "'>" + GF + CW(GG.FK_SPM_SPCL_MTG_CD) + "</div>";
                            GI.COL_SPAN = 13;
                            GI.SORT_KEY = ++ Ff[GD + "SortKey"];
                            FT.push(GI);
                        }
                        GG.SECTION_NUMBER = "";
                        GG.SECT_CODE = "";
                        GG.FK_CDI_INSTR_TYPE = GG.FK_SPM_SPCL_MTG_CD;
                        GG.SCTN_CPCTY_QTY = "";
                        GG.AVAIL_SEAT = "";
                        GG.COUNT_ON_WAITLIST = "";
                        GG.BOOK_LINK = "";
                        GG.PERSON_FULL_NAME = "";
                        GG.SORT_KEY = ++ Ff[GD + "SortKey"];
                        GG.ROW_ATTR.rowClass = GG.ROW_ATTR.rowClass + " search-pbf-class search-pbf-class-" + GH;
                        FT.push(GG);
                        Fz = GG;
                    });
                }
                if (null != GB) {
                    $.each(GB, function (GE, GF) {
                        GF.SECT_CODE = "";
                        GF.FK_CDI_INSTR_TYPE = "";
                        GF.PERSON_FULL_NAME = "";
                        GF.SECTION_NUMBER = '<span style="font-weight:bold;color:black">MIDTERM</span>';
                        GF.AVAIL_SEAT = "";
                        GF.SCTN_CPCTY_QTY = "";
                        GF.SORT_KEY = ++ Ff[GD + "SortKey"];
                        FT.push(GF);
                    });
                }
                if (null != GC) {
                    if (! CI) {
                        GC.ROOM_CODE = "TBA";
                        GC.BLDG_CODE = "TBA";
                    }
                    GC.SECT_CODE = "";
                    GC.FK_CDI_INSTR_TYPE = "";
                    GC.PERSON_FULL_NAME = "";
                    GC.SECTION_NUMBER = '<span style="font-weight:bold;color:black">FINAL</span>';
                    GC.AVAIL_SEAT = "";
                    GC.SCTN_CPCTY_QTY = "";
                    GC.SORT_KEY = ++ Ff[GD + "SortKey"];
                    FT.push(GC);
                }
            });
            $.each(FT, function (Fs, Ft) {
                if (undefined != Ft.SECTION_NUMBER && Ft.SECTION_NUMBER.toString().match(/^\s*\d{6}\s*$/) && (null != Ft.LONG_DESC) && (! Ft.LONG_DESC.match(/^\s*$/))) {
                    Ft.SECTION_NUMBER = Ft.SECTION_NUMBER + "\n" + Ft.LONG_DESC.trim();
                    Ft.ROW_ATTR.rowClass = Ft.ROW_ATTR.rowClass + " wr-search-subtitle ";
                }
            });
            var FA = AX.concat(FT);
            AX.length = 0;
            AX = FA;
            R(false, Ew, AX, E7);
            BF(AX);
            Ad();
            Ew.jqGrid("groupingToggle", E7);
            $(".search-pbf-class").hide();
        });
    }
    function A2(E8) {
        $("#dialog-prereqs").dialog("open");
        var E5 = E8.data;
        var FA = "";
        var E7 = "<div class='msg info'><h4>Course Prerequisites:</h4><ol><li><ul>";
        var E4 = "<div class='msg info'><h4>Test requirements can be satisfied with qualifying scores on any of the following exams:</h4><ul>";
        var E9 = false;
        var E3 = false;
        var E6 = "";
        $.each(E5.resData, function (FC, FD) {
            var FB;
            if (FD.TYPE == "TEST") {
                E4 += "<li>" + FD.TEST_TITLE + "</li>";
                E3 = true;
            } else {
                if (FD.TYPE == "COURSE") {
                    if (E6 != FD.PREREQ_SEQ_ID) {
                        if (E6 !== "") {
                            E7 += "</ul></li><hr /><li><ul>";
                        }
                        E6 = FD.PREREQ_SEQ_ID;
                    } else {
                        E7 += "<span class='prereq-or'>OR</span>";
                    } E7 += "<li>" + FD.SUBJECT_CODE + ": " + FD.COURSE_CODE + " - " + FD.CRSE_TITLE + "</li>";
                    E9 = true;
                }
            }
        });
        E7 += "</ul></li></ol></div>";
        E4 += "</ul></div>";
        FA += E9 ? E7 : "";
        FA += E3 ? E4 : "";
        EB(FA);
    }
    function B7(E5) {
        $("#dialog-restrictions").dialog("open");
        var E6 = "<div class='msg info'><h4>Course Restrictions</h4><br />";
        var E3 = {};
        var E4 = E5.data;
        $.each(E4.resData, function (E7, E8) {
            switch (E8) {
                case "MA": EL(E4.subjCode, E4.crseCode, function (FA) {
                        var FD = [];
                        var FC = "<h5>Open to majors:</h5><ul>";
                        var FB = "<h5>Not open to majors:</h5><ul>";
                        var FE = true;
                        var E9 = true;
                        $.each(FA, function (FF, FG) {
                            if (FD.indexOf(FG.NAME.trim()) !== -1) {
                                return;
                            }
                            if (FG.CRSE_REGIS_FLAG == "I") {
                                FC += "<li>" + FG.NAME.trim() + "</li>";
                                FE = false;
                            } else {
                                FB += "<li>" + FG.NAME.trim() + "</li>";
                                E9 = false;
                            } FD.push(FG.NAME.trim());
                        });
                        if (! FE) {
                            FC += "</ul>";
                            E6 += FC;
                        }
                        if (! E9) {
                            FB += "</ul>";
                            E6 += FB;
                        }
                    });
                    break;
                case "CO": Ai(E4.subjCode, E4.crseCode, function (FA) {
                        var FD = [];
                        var FC = "<h5>Open to colleges:</h5><ul>";
                        var FB = "<h5>Not open to colleges:</h5><ul>";
                        var FE = true;
                        var E9 = true;
                        $.each(FA, function (FF, FG) {
                            if (FD.indexOf(FG.NAME.trim()) !== -1) {
                                return;
                            }
                            if (FG.CRSE_REGIS_FLAG == "I") {
                                FC += "<li>" + FG.NAME.trim() + "</li>";
                                FE = false;
                            } else {
                                FB += "<li>" + FG.NAME.trim() + "</li>";
                                E9 = false;
                            } FD.push(FG.NAME.trim());
                        });
                        if (! FE) {
                            FC += "</ul>";
                            E6 += FC;
                        }
                        if (! E9) {
                            FB += "</ul>";
                            E6 += FB;
                        }
                    });
                    break;
                case "CL": D(E4.subjCode, E4.crseCode, function (FA) {
                        var FD = [];
                        var FC = "<h5>Open to class levels:</h5><ul>";
                        var FB = "<h5>Not open to class levels:</h5><ul>";
                        var FE = true;
                        var E9 = true;
                        $.each(FA, function (FF, FG) {
                            if (FD.indexOf(FG.NAME.trim()) !== -1) {
                                return;
                            }
                            if (FG.CRSE_REGIS_FLAG == "I") {
                                FC += "<li>" + FG.NAME.trim() + "</li>";
                                FE = false;
                            } else {
                                FB += "<li>" + FG.NAME.trim() + "</li>";
                                E9 = false;
                            } FD.push(FG.NAME.trim());
                        });
                        if (! FE) {
                            FC += "</ul>";
                            E6 += FC;
                        }
                        if (! E9) {
                            FB += "</ul>";
                            E6 += FB;
                        }
                    });
                    break;
                case "LV": Ez(E4.subjCode, E4.crseCode, function (FA) {
                        var FD = [];
                        var FC = "<h5>Open to academic levels:</h5><ul> ";
                        var FB = "<h5>Not open to academic levels:</h5><ul>";
                        var FE = true;
                        var E9 = true;
                        $.each(FA, function (FF, FG) {
                            if (FD.indexOf(FG.NAME.trim()) !== -1) {
                                return;
                            }
                            if (FG.CRSE_REGIS_FLAG == "I") {
                                FC += "<li>" + FG.NAME.trim() + "</li>";
                                FE = false;
                            } else {
                                FB += "<li>" + FG.NAME.trim() + "</li>";
                                E9 = false;
                            } FD.push(FG.NAME.trim());
                        });
                        if (! FE) {
                            FC += "</ul>";
                            E6 += FC;
                        }
                        if (! E9) {
                            FB += "</ul>";
                            E6 += FB;
                        }
                    });
                    break;
            }
        });
        EB(E6);
    }
    function BF(E3) {
        $.each(E3, function (E6, E8) {
            if (undefined != E8.SEARCH_PBF_ID) {
                $("#search-outer-pbf-id-" + E8.SEARCH_PBF_ID).click(function () {
                    var FB = $("#search-pbf-id-" + E8.SEARCH_PBF_ID).attr("src");
                    if (FB === EW) {
                        $("#search-pbf-id-" + E8.SEARCH_PBF_ID).attr("src", DP);
                        $(".search-pbf-class-" + E8.SEARCH_PBF_ID).hide();
                    } else {
                        $("#search-pbf-id-" + E8.SEARCH_PBF_ID).attr("src", EW);
                        $(".search-pbf-class-" + E8.SEARCH_PBF_ID).show();
                    }
                });
            }
            var E5 = E8.SECTION_HEAD;
            if (undefined == E5) {
                return;
            }
            var FA = E8.SECTION_HEAD_CODE;
            var E7 = E8.SUBJ_CODE;
            var E4 = E8.CRSE_CODE;
            var E9 = E8.SEARCH_TITLE;
            $("#search-enroll-id-" + E5).button().click(function () {
                var FB = $(this).closest("tr").attr("id");
                DH(E5, "enroll", E7, E4, undefined, E9, FB);
            });
            $("#search-wait-id-" + E5).button().click(function () {
                DH(E5, "waitlist", E7, E4, undefined, E9, undefined);
            });
            $("#search-plan-id-" + E5).button().click(function () {
                Aw(E5, FA, E7, E4, E9);
            });
        });
        $(".email-link-class").click(function () {
            var E6 = $(this).attr("emailref");
            var E5 = $(this).attr("emailname");
            var E4 = "none";
            if (E6.trim().match(/^[A-z]\d{8}$/)) {
                A1(E6, function (E7) {
                    E4 = E7.OFFICIAL_EMAIL;
                });
            } else {
                $("#dialog-msg-small").dialog("open");
                EB("No email address found for " + E5);
                return false;
            }
            if (undefined == E4) {
                $("#dialog-msg-small").dialog("open");
                EB("No email address found for " + E5);
                return false;
            }
            $(this).attr("href", "mailto:" + E4);
        });
    }
    function Ad() {
        if (! CU) {
            $(".search-wait-class").button().button("disable");
            $(".search-wait-class").attr("title", EU);
        }
        if (Bv) {
            $(".search-plan-class").attr("title", N);
            $(".search-plan-class").button().button("disable");
        }
        if (! AB) {
            $(".search-enroll-class").attr("title", DK);
            $(".search-enroll-class").button().button("disable");
        }
        if (Eh) {
            $(".search-enroll-class").attr("title", Ck);
            $(".search-enroll-class").button().button("disable");
        }
        $(".disableSBClass").button().button("disable");
        if (E2) {
            $(".search-plan-class").button().button("disable");
            $(".search-plan-class").attr("title", CS);
            $(".search-enroll-class").button().button("disable");
            $(".search-enroll-class").attr("title", CS);
        } else {
            if (Ey) {
                $(".search-plan-class").attr("title", CL);
                $(".search-plan-class").button().button("disable");
                $(".search-enroll-class").attr("title", CL);
                $(".search-enroll-class").button().button("disable");
            } else {
                if (C6) {
                    $(".disableSBEnWtClass").button().button("disable");
                    $(".disableSBEnWtClass").attr("title", As);
                    $(".disableSBEnClass").button().button("disable");
                    $(".disableSBEnClass").attr("title", Bq);
                    $(".disableSBWtClass").button().button("disable");
                    $(".disableSBWtClass").attr("title", Bz);
                }
                $(".disableSBSectionClass").button().button("disable");
                $(".disableSBSectionClass").attr("title", AU);
                $(".enableSBEnWtClassPreauth").button().button("enable");
                $(".enableSBEnWtClassPreauth").attr("title", Bf);
            }
        }
    }
    function B8(FB, E4, FA, E6, E5, E7, FG) {
        var E3 = Ac(FB, E4, FA, E6, E5);
        var E9 = " subjcrseallclass-" + E6.trim() + E5.trim();
        var E8 = " subjcrseplanclass-" + E6.trim() + E5.trim();
        var FE = " subjcrseenwtclass-" + E6.trim() + E5.trim();
        switch (E7) {
            case "DISABLE-ALL": E9 = E9 + " disableSBClass ";
                break;
            case "DISABLE-ENWT": FE = " disableSBEnWtClass ";
                break;
            case "DISABLE-SECTION-PL": E9 = E9 + " disableSBSectionClass ";
                break;
            case "DISABLE-SECTION-ENWT": E9 = E9 + " disableSBSectionClass ";
                break;
        }
        if ("enExist" == FG) {
            FE = FE + " disableSBEnClass ";
        } else {
            if ("wtExist" == FG) {
                if (! E3) {
                    FE = FE + " disableSBWtClass ";
                }
            }
        }
        if (! AV && ! AB) {
            var FD = false;
            $.each(Dz, function (FL, FN) {
                var FM = FN.SUBJ_CODE;
                var FI = FN.CRSE_CODE;
                var FO = FN.SECTION_NUMBER;
                var FK = FN.OVERRIDE_TYPE_1;
                var FJ = FN.OVERRIDE_TYPE_2;
                var FH = FN.OVERRIDE_TYPE_3;
                if (null == FM || null == FI || undefined == FM || undefined == FI) {
                    return;
                }
                if (FK != "LA" && FJ != "LA" && FH != "LA") {
                    return;
                }
                if (! E3) {
                    return;
                }
                if (FN.SUBJ_CODE.trim() == E6 && FN.CRSE_CODE.trim() == E5) {
                    if (undefined == FN.SECTION_NUMBER) {
                        FD = true;
                        return false;
                    } else {
                        if (FN.SECTION_NUMBER == FB) {
                            FD = true;
                            return false;
                        }
                    }
                }
            });
            if (FD) {
                FE = FE + " enableSBEnWtClassPreauth ";
            }
        }
        if (E3) {
            var FF = "<input " + " id=search-enroll-id-" + FB + " class=' wrbutton wrbuttons wrbuttonspew wrbuttonsr secondary search-enroll-class " + E9 + " " + FE + " ' " + " type='button' value='Enroll' />";
        } else {
            var FF = "<input " + " id=search-wait-id-" + FB + " class=' wrbutton wrbuttons wrbuttonspew wrbuttonsr secondary search-enroll-class search-wait-class " + E9 + " " + FE + " ' " + " type='button' value='Waitlist' />";
        }
        var FC = "<input " + " id=search-plan-id-" + FB + " class=' wrbutton wrbuttons wrbuttonspew secondary search-plan-class " + E9 + " " + E8 + " ' " + " type='button' value='Plan' />";
        return FC + FF;
    }
    function R(E8, E7, E3, E5) {
        var E6 = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        E7.jqGrid("clearGridData", true);
        E7.jqGrid("setGridParam", {
            datatype: "local",
            data: E3
        }).trigger("reloadGrid");
        var E4 = Ew.getGridParam("colModel")[0];
        if (EG) {
            E4.sorttype = CM;
        } else {
            E4.sorttype = "text";
        }
        if (E8) {
            Dh = [];
            Dh.length = 0;
        } else {
            $.each(Dh, function (E9, FA) {
                E7.jqGrid("groupingToggle", FA);
            });
        }
        if (undefined != E5) {
            Dh.push(E5);
        }
        $("#search-div-b-table tr.jqgroup").hover(function (E9) {
            $(E9.target).closest("tr.jqgroup").addClass("search-group-mouseover");
        }, function (E9) {
            $(E9.target).closest("tr.jqgroup").removeClass("search-group-mouseover");
        });
        $(".search-pbf-class").hide();
        window.scrollTo(0, E6);
    }
    function EZ(E3) {
        var E4 = E3.sectionHead;
    }
    function D1(E3) {
        var E4 = E3.sectionHead;
    }
    function EX(E6, E8, E3, FB) {
        var E5 = E3.COL_SPAN;
        var FD = " colspan=1";
        if (E5 > 0) {
            FD = ' colspan="' + E5 + '"';
        }
        var FC = E3.ROW_SPAN;
        var FA = " rowspan=1";
        if (0 == FC) {
            FA = ' style="display:none" ';
        } else {
            if (FC > 0) {
                FA = ' rowspan="' + FC + '"';
            }
        }
        if (E3.LONG_DESC != undefined && E3.LONG_DESC.trim() != "") {
            if (E8.toUpperCase().indexOf("styles".toUpperCase()) != -1) {
                var E9 = E8.toUpperCase().indexOf("styles".toUpperCase());
                var E7 = "è";
                E8 = E8.substr(0, E9 + 4) + E7 + E8.substr(E9 + 5);
            } else {
                if (E8.toUpperCase().indexOf("style".toUpperCase()) != -1 && ! E8.includes("span")) {
                    var E9 = E8.toUpperCase().indexOf("style".toUpperCase());
                    var E7 = "è";
                    E8 = E8.substr(0, E9 + 4) + E7 + E8.substr(E9 + 5);
                }
            } FA += ' title="' + E8 + '" ';
        }
        var E4 = FD + " " + FA;
        return E4;
    }
    function EP(E7, E5, E4, E3) {
        var E6 = E4.COL_SPAN_SC;
        if (undefined == E6 || "" == E6 || null == E6) {
            E6 = 1;
        }
        return ' colspan="' + E6 + '"';
    }
    function l(E8, E5, E4, E3) {
        var E6 = E4.COL_SPAN_DAYS;
        if (undefined == E6 || "" == E6 || null == E6) {
            E6 = 1;
        }
        var E7 = E4.ROW_SPAN_DAYS;
        if (undefined == E7 || "" == E7 || null == E7) {
            E7 = 1;
        }
        return ' colspan="' + E6 + '" rowspan="' + E7 + '"';
    }
    function Be(E7, E5, E4, E3) {
        var E6 = E4.ROW_SPAN;
        if (undefined == E6 || "" == E6 || null == E6) {
            E6 = 1;
        } else {
            if (0 == E6) {
                return ' style="display:none" ';
            }
        }
        return ' rowspan="' + E6 + '"';
    }
    function Eq(E7, E5, E4, E3) {
        var E6 = E4.ROW_SPAN_INST;
        if (undefined == E6 || "" == E6 || null == E6) {
            E6 = 1;
        }
        return ' rowspan="' + E6 + '" ';
    }
    function DB() {
        $("#search-grid-toggle").hide();
        $("#search-pager-dropdown").hide();
        $("#search-pager-dropdown-header").hide();
        $("#search-div-b-table").hide();
        $("#search-grid-result").hide();
        $("#search-div-b").hide();
    }
    function Dv() {
        $("#search-grid-toggle").show();
        $("#search-pager-dropdown").hide();
        $("#search-pager-dropdown-header").hide();
        $("#search-div-b-table").show();
        $("#search-grid-result").show();
        $("#search-div-b").show();
        $("#search-pager").empty();
        $("#search-pager").show();
        $("#search-grid-toggle").text("Hide search result");
        P();
    }
    function D5() {
        $("#search-div-box-1 input.search-div-binput-canoff").prop("disabled", true);
        $("#search-div-box-2 input").prop("disabled", true);
        $("#search-div-t-t2-i1").select2("disable");
        $("#search-div-t-t3-i1").select2("disable");
        $("#search-div-t-t5 select.ui-timepicker-select").prop("disabled", true);
        $(".search-not-section").addClass("search-right-side-hide");
    }
    function Cu() {
        $("#search-div-box-1 input.search-div-binput-canoff").prop("disabled", false);
        $("#search-div-box-2 input").prop("disabled", false);
        $("#search-div-t-t2-i1").select2("enable");
        $("#search-div-t-t3-i1").select2("enable");
        $("#search-div-t-t5 select.ui-timepicker-select").prop("disabled", false);
        $(".search-not-section").removeClass("search-right-side-hide");
    }
    function D9() {
        $("#search-div-t-t2-i1").select2("val", "");
        if (a) {
            return;
        }
        var E3 = undefined;
        $("#search-div-t-t2-i1").empty();
        $("#search-div-t-t2-i1").select2({
            multiple: true,
            containerCssClass: "wr-select-other wr-select-other-subj",
            dropdownCssClass: "wr-select-other-drop",
            placeholder: "Select one or more",
            allowClear: true,
            closeOnSelect: false,
            query: function (E9) {
                var E6 = E9.term;
                var E7 = {
                    results: []
                };
                var E5 = new RegExp(E6.trim(), "i");
                if ("" === E6) {
                    if (undefined != E3) {
                        E7.results = E3;
                    }
                } else {
                    var E8 = [];
                    E8.length = 0;
                    var FA = new RegExp("^\\s*" + E6.trim(), "i");
                    var E4 = new RegExp(E6.trim(), "i");
                    $.each(Ba, function (FB, FC) {
                        if (undefined != FC.subjcode && FC.subjcode.match(FA)) {
                            E7.results.push({id: FB, text: FC.text, subjcode: FC.subjcode});
                        } else {
                            if (undefined != FC.text && FC.text.match(E4)) {
                                E8.push({id: FB, text: FC.text, subjcode: FC.subjcode});
                            }
                        }
                    });
                    if (E8.length > 0) {
                        E7.results = E7.results.concat(E8);
                    }
                    E8 = [];
                    E8.length = 0;
                    E3 = $.extend(true, [], E7.results);
                } E9.callback(E7);
            }
        });
        $("#search-div-t-t2-i1").on("select2-opening", function () {
            a = true;
            E3 = Ba;
        });
    }
    function Cy() {
        $("#search-div-t-t3-i1").select2("val", "");
        if (AF) {
            return;
        }
        if (null == AH || (null != AH && 0 == AH.length)) {
            De(function (E4) {
                AH = E4;
            });
        }
        if (0 == Ab.length) {
            $.each(AH, function (E7, E8) {
                var E4 = E8.DEP_CODE;
                var E6 = E8.DEP_DESC;
                var E5 = E4 + " / " + E6;
                Ab.push({id: E7, text: E5, depcode: E4, depdesc: E6});
            });
        }
        var E3 = undefined;
        $("#search-div-t-t3-i1").empty();
        $("#search-div-t-t3-i1").select2({
            multiple: true,
            containerCssClass: "wr-select-other wr-select-other-dep",
            dropdownCssClass: "wr-select-other-drop",
            placeholder: "Select one or more",
            allowClear: true,
            closeOnSelect: false,
            query: function (E9) {
                var E6 = E9.term;
                var E7 = {
                    results: []
                };
                var E5 = new RegExp(E6.trim(), "i");
                if ("" === E6) {
                    if (undefined != E3) {
                        E7.results = E3;
                    }
                } else {
                    var E8 = [];
                    E8.length = 0;
                    var FA = new RegExp("^\\s*" + E6.trim(), "i");
                    var E4 = new RegExp(E6.trim(), "i");
                    $.each(Ab, function (FB, FC) {
                        if (undefined != FC.depcode && FC.depcode.match(FA)) {
                            E7.results.push({id: FB, text: FC.text, depcode: FC.depcode});
                        } else {
                            if (undefined != FC.text && FC.text.match(E4)) {
                                E8.push({id: FB, text: FC.text, depcode: FC.depcode});
                            }
                        }
                    });
                    if (E8.length > 0) {
                        E7.results = E7.results.concat(E8);
                    }
                    E8 = [];
                    E8.length = 0;
                    E3 = $.extend(true, [], E7.results);
                } E9.callback(E7);
            }
        });
        $("#search-div-t-t3-i1").on("select2-opening", function () {
            AF = true;
            E3 = Ab;
        });
    }
    function EC(E4, E3, E5) {
        if (undefined != E5) {
            BN();
            U(undefined, undefined, E5, false, true);
            return;
        } else {
            if (undefined != E4 && undefined != E3) {
                BN();
                U(E4, E3, undefined, false, true);
                return;
            }
        }
        if ($("#advanced-search").text().match(/hide/i)) {
            $("#advanced-search").text("Advanced search");
            $("#search-div-1").hide();
            $("#search-div-t-t1-i1-td").show();
            $("#search-div-t-t1-button-div").show();
            Cu();
            return;
        }
        $("#search-div-t-t1-i1-td").hide();
        $("#search-div-t-t1-button-div").hide();
        $("#search-div-1").show();
        $("#advanced-search").text("Hide advanced search");
        $("#search-div-t-t3-i4").val("");
        Cu();
        $("#search-div-t-t3-i4").on("keyup cut paste drop", function (E7) {
            var E6 = undefined;
            if ("paste" == E7.type || "cut" == E7.type || "drop" == E7.type) {
                setTimeout(function () {
                    E6 = $("#search-div-t-t3-i4").val();
                    if (E6) {
                        if (!$("#search-div-t-t2-i2").prop("disabled")) {
                            D5();
                        }
                    } else {
                        Cu();
                        return;
                    }
                }, 100);
            } else {
                E6 = $("#search-div-t-t3-i4").val();
                if (E6) {
                    if (!$("#search-div-t-t2-i2").prop("disabled")) {
                        D5();
                    }
                } else {
                    Cu();
                    return;
                }
            }
        });
        $("#search-div-t-t5-i1").timepicker(EF);
        $("#search-div-t-t5-i2").timepicker(EF);
        $("#search-div-t-t5 tbody tr td select.ui-timepicker-select").val("");
        D9();
        Cy();
        $("#search-div-t-t2-i1").select2("val", "");
        $("#search-div-t-t3-i1").select2("val", "");
        $("#search-div-t-b2").click(function () {
            Dv();
            BN();
            U();
        });
        $("#search-div-t-reset").click(function () {
            $("#search-div-t-t2-i1").select2("val", "");
            $("#search-div-t-t3-i1").select2("val", "");
            $(".search-div-binput").val("");
            $("#search-div-t-t5 tbody tr td select.ui-timepicker-select").val("");
            $(".search-div-bcheck").prop("checked", false);
            Cu();
            DB();
        });
        $(".search-div-binput").keypress(function (E6) {
            if (E6.which == 13 && $(this).val()) {
                E6.preventDefault();
                $("#search-div-t-b2").trigger("click");
                return false;
            }
        });
        $(".search-div-binput").focus(function () {
            $(this).select();
        });
    }
    function BN() {
        if (Ew[0].grid) {
            return;
        }
        $("#search-grid-toggle").show();
        $("#search-grid-toggle").click(function () {
            if ($("#search-grid-toggle").text().match(/hide/i)) {
                $("#search-grid-result").hide();
                $("#search-grid-toggle").text("Show search result");
            } else {
                $("#search-grid-result").show();
                $("#search-grid-toggle").text("Hide search result");
            }
        });
        Ew.jqGrid({
            data: AX,
            datatype: "local",
            hidegrid: true,
            autowidth: true,
            height: "100%",
            shrinkToFit: true,
            scrollOffset: 0,
            loadComplete: function () {
                $(".search-group-header-noseat").parent().children().css("cursor", "default");
                $(".search-group-header-noseat").closest("tr.jqgroup").find("td:first-child span").removeClass("ui-icon tree-wrap-ltr ui-icon-circlesmall-plus");
                $("#search-div-b-table tr.jqgrow.wr-search-group-data-row").hover(function () {
                    var E5 = $(this).attr("id");
                    var E3 = undefined;
                    var E4 = Ew.jqGrid("getCell", E5, 22);
                    if (1 == E4) {
                        E3 = Number(E5) + 1;
                    } else {
                        if (2 == E4) {
                            E3 = Number(E5) - 1;
                        }
                    }
                    if (undefined != E3) {
                        $("#search-div-b-table tbody tr.jqgrow#" + E3).addClass("ui-state-hover");
                    }
                }, function () {
                    var E5 = $(this).attr("id");
                    var E3 = undefined;
                    var E4 = Ew.jqGrid("getCell", E5, 22);
                    if (1 == E4) {
                        E3 = Number(E5) + 1;
                    } else {
                        if (2 == E4) {
                            E3 = Number(E5) - 1;
                        }
                    }
                    if (undefined != E3) {
                        $("#search-div-b-table tbody tr.jqgrow#" + E3).removeClass("ui-state-hover");
                    }
                });
            },
            gridview: true,
            loadonce: true,
            rowNum: 5000,
            cmTemplate: {
                title: false
            },
            beforeSelectRow: function (E3, E4) {
                return false;
            },
            onRightClickRow: function () {
                Ew.jqGrid("resetSelection");
                return false;
            },
            colNames: [
                "colsubj",
                "SUBJ_CODE",
                "CRSE_CODE",
                "Section ID",
                "Section",
                "Type",
                "Days",
                "Time",
                "Building",
                "Room",
                "Avail Seats",
                "Total Seats",
                "WT POS",
                "Book",
                "Instructor",
                "Action",
                "SortKey",
                "Span",
                "RowAttr",
                "RowCoup"
            ],
            colModel: [
                {
                    name: "colsubj",
                    sorttype: "text",
                    index: "colsubj",
                    align: "center",
                    editable: false,
                    sortable: false
                },
                {
                    name: "SUBJ_CODE",
                    hidden: true
                },
                {
                    name: "CRSE_CODE",
                    hidden: true
                },
                {
                    name: "SECTION_NUMBER",
                    fixed: true,
                    index: "sectnum",
                    width: 50,
                    align: "center",
                    editable: false,
                    sortable: false,
                    cellattr: EX
                }, {
                    name: "SECT_CODE",
                    fixed: true,
                    index: "sectcode",
                    width: 40,
                    align: "center",
                    editable: false,
                    sortable: false,
                    cellattr: EP
                }, {
                    name: "FK_CDI_INSTR_TYPE",
                    fixed: true,
                    index: "type",
                    width: 45,
                    align: "center",
                    editable: false,
                    sortable: false,
                    title: true,
                    cellattr: C9
                }, {
                    name: "DAY_CODE",
                    fixed: true,
                    index: "days",
                    width: 60,
                    align: "center",
                    editable: false,
                    sortable: false,
                    cellattr: l
                }, {
                    name: "coltime",
                    fixed: true,
                    index: "time",
                    width: 75,
                    align: "center",
                    editable: false,
                    sortable: false
                }, {
                    name: "BLDG_CODE",
                    fixed: true,
                    index: "bld",
                    width: 45,
                    align: "center",
                    editable: false,
                    sortable: false
                }, {
                    name: "ROOM_CODE",
                    fixed: true,
                    index: "rm",
                    width: 36,
                    align: "center",
                    editable: false,
                    sortable: false
                }, {
                    name: "AVAIL_SEAT",
                    fixed: true,
                    index: "aseat",
                    width: 30,
                    align: "center",
                    editable: false,
                    sortable: false
                }, {
                    name: "SCTN_CPCTY_QTY",
                    fixed: true,
                    index: "tseat",
                    width: 30,
                    align: "center",
                    editable: false,
                    sortable: false
                }, {
                    name: "COUNT_ON_WAITLIST",
                    fixed: true,
                    index: "cwt",
                    width: 40,
                    align: "center",
                    editable: false,
                    sortable: false
                }, {
                    name: "BOOK_LINK",
                    fixed: true,
                    index: "book",
                    width: 33,
                    align: "center",
                    editable: false,
                    sortable: false
                }, {
                    name: "PERSON_FULL_NAME",
                    fixed: true,
                    index: "inst",
                    width: 281,
                    align: "center",
                    editable: false,
                    sortable: false,
                    cellattr: Eq
                }, {
                    name: "colaction",
                    fixed: true,
                    index: "action",
                    width: 130,
                    align: "center",
                    editable: false,
                    sortable: false,
                    cellattr: Be
                }, {
                    name: "SORT_KEY",
                    hidden: true,
                    sorttype: "int"
                }, {
                    name: "ROW_SPAN",
                    hidden: true
                }, {
                    name: "ROW_ATTR",
                    hidden: true
                }, {
                    name: "ROW_COUP",
                    hidden: true
                }
            ],
            rowattr: function (E5) {
                var E4 = "";
                var E3 = E5.ROW_ATTR;
                if (undefined != E3) {
                    if (undefined != E5.ROW_ATTR.rowClass) {
                        E4 = {
                            "class": E5.ROW_ATTR.rowClass
                        };
                    }
                }
                return E4;
            },
            caption: "Search results and action",
            sortname: "SORT_KEY",
            sortorder: "asc",
            grouping: true,
            groupingView: {
                groupField: ["colsubj"],
                groupCollapse: true,
                groupColumnShow: [false]
            }
        });
        $("#jqgh_search-div-b-table_GRADE_OPTION").attr("title", "Grade Option");
    }
    $("#dialog-plan").dialog({
        autoOpen: false,
        maxWidth: 1050,
        position: {
            my: "center",
            at: "center",
            of: window
        },
        height: "auto",
        width: 1050,
        modal: true,
        closeOnEscape: false,
        buttons: {
            Cancel: {
                text: "Cancel",
                click: function () {
                    $(this).dialog("close");
                }
            },
            Confirm: {
                text: "Confirm",
                click: function () {
                    $(this).dialog("close");
                    var E9 = $("#diagplan-class-table-grade option:selected").val();
                    var E5 = $("#diagplan-class-table-unit option:selected").text();
                    if (undefined == E9 || E9.trim() == "") {
                        E9 = Dx($("#diagplan-class-table-grade-p").text());
                    }
                    if (undefined == E5 || E5.trim() == "") {
                        E5 = $("#diagplan-class-table-unit-p").text();
                    }
                    var E4 = $(this).dialog("option", "subjcrse");
                    var E8 = $(this).dialog("option", "subjcode");
                    var E3 = BP($(this).dialog("option", "crsecode"));
                    var E7 = $(this).dialog("option", "stitle");
                    var E6 = $(this).dialog("option", "sectionhead");
                    var FA = $(this).dialog("option", "sectcode");
                    E5 = Number(E5).toFixed(2);
                    Bc(ES, E8, E3, E6, FA, E9, E5, function (FF) {
                        var FH = "";
                        if ("SUCCESS" == FF.OPS) {
                            EQ();
                            s();
                            FH = "<div class='msg confirm'><h4>Request Successful</h4><span>Planned " + E4.trim() + " with " + Af(E9) + " grade option for " + E5 + " units, Section " + E6 + ".</span></div>";
                            FH += L(E6, true);
                            $("#search-plan-id-" + E6).button().button("disable");
                            $("#search-plan-id-" + E6).attr("title", "Already planned");
                            if (Ew[0].grid) {
                                if (undefined != BX) {
                                    BC[BX] = $.extend(true, [], AX);
                                    var FE = false;
                                    var FC = new RegExp(E6);
                                    $.each(BC, function (FI, FJ) {
                                        if (FE) {
                                            return false;
                                        }
                                        if (undefined == FJ || 0 == FJ.length) {
                                            return;
                                        }
                                        $.each(FJ, function (FK, FL) {
                                            if (undefined != FL.SECTION_NUMBER && FL.SECTION_NUMBER.toString().match(FC)) {
                                                if (undefined != FL.colaction && ! FL.colaction.match(/^\s*$/)) {
                                                    FL.colaction = FL.colaction.replace(/disableSBSectionClass/g, "");
                                                    FL.colaction = FL.colaction.replace(/wrbuttonspew/g, "wrbuttonspew disableSBSectionClass ");
                                                    FE = true;
                                                    return false;
                                                }
                                            }
                                        });
                                    });
                                    Ed(BX, false, false);
                                }
                            }
                        } else {
                            var FG = "";
                            if (undefined != FF.REASON || "null" != FF.REASON) {
                                FG = FF.REASON;
                            }
                            FH = "<div class='msg error'><h4>Request Unsuccessful</h4><span>Attempting to plan " + E4.trim() + ", Section " + E6 + ".  " + FG + "</span></div>";
                        }
                        var FD = $("#dialog-after-action").dialog("open");
                        var FB = O.slice(0);
                        FB.splice(1, 2);
                        FD.dialog("option", "buttons", FB);
                        EB(FH);
                    });
                    return;
                }
            }
        }
    });
    $("#dialog-confirm-plan-remove").dialog({
        autoOpen: false,
        maxWidth: 1050,
        position: {
            my: "center",
            at: "center",
            of: window
        },
        height: "auto",
        width: 1050,
        modal: true,
        closeOnEscape: false,
        buttons: {
            but1: {
                text: "Cancel",
                click: function () {
                    $(this).dialog("close");
                    return;
                }
            },
            but2: {
                text: "Remove",
                click: function () {
                    $(this).dialog("close");
                    var E5 = $(this).dialog("option", "sectionhead");
                    var E7 = $(this).dialog("option", "subjcode");
                    var E3 = BP($(this).dialog("option", "crsecode"));
                    var E6 = $(this).dialog("option", "stitle");
                    var E4 = E7.toString().trim();
                    var E8 = E3.toString().trim();
                    v(ES, E5, function (FD) {
                        var FF = "";
                        if ("SUCCESS" == FD.OPS) {
                            EQ();
                            s();
                            FF = "<div class='msg confirm'><h4>Request Successful</h4><span>Removed planned class " + E7.trim() + " " + E3.trim() + " " + E6.trim() + ", Section " + E5 + ".</span></div>";
                            if (Ew[0].grid) {
                                if (undefined != BX) {
                                    BC[BX] = $.extend(true, [], AX);
                                    var FC = false;
                                    var FA = new RegExp(E5);
                                    $.each(BC, function (FG, FH) {
                                        if (FC) {
                                            return false;
                                        }
                                        if (undefined == FH || 0 == FH.length) {
                                            return;
                                        }
                                        $.each(FH, function (FI, FJ) {
                                            if (undefined != FJ.SECTION_NUMBER && FJ.SECTION_NUMBER.toString().match(FA)) {
                                                if (undefined != FJ.colaction && ! FJ.colaction.match(/^\s*$/)) {
                                                    FJ.colaction = FJ.colaction.replace(/disableSBSectionClass/g, " ");
                                                    FC = true;
                                                    return false;
                                                }
                                            }
                                        });
                                    });
                                    Ed(BX, false, false);
                                }
                            }
                        } else {
                            var FE = "";
                            if (undefined != FD.REASON || "null" != FD.REASON) {
                                FE = FD.REASON;
                            }
                            FF = "<div class='msg error'><h4>Request Unsuccessful</h4><span>Attempting to remove Planned class - " + E7.trim() + " " + E3.trim() + " " + E6.trim() + ", Section " + E5 + ".  " + FE + "</span></div>";
                        }
                        var FB = $("#dialog-after-action").dialog("open");
                        var E9 = O.slice(0);
                        E9.splice(1, 2);
                        FB.dialog("option", "buttons", E9);
                        EB(FF);
                    });
                    return;
                }
            }
        }
    });
    $("#dialog-confirm-plan-add").dialog({
        autoOpen: false,
        maxWidth: 800,
        position: {
            my: "center",
            at: "center",
            of: window
        },
        height: "auto",
        width: 800,
        modal: true,
        closeOnEscape: false,
        buttons: {
            but1: {
                text: "Cancel",
                click: function () {
                    $(this).dialog("close");
                    return;
                }
            },
            but2: {
                text: "Confirm",
                click: function () {
                    $(this).dialog("close");
                    var FF = $(this).dialog("option", "sectionhead");
                    var E8 = $(this).dialog("option", "subjcode");
                    var E6 = BP($(this).dialog("option", "crsecode"));
                    var E4 = $(this).dialog("option", "stitle");
                    var FG = E8.toString().trim();
                    var FA = E6.toString().trim();
                    var FE = $(this).dialog("option", "sectcode");
                    var E9 = $(this).dialog("option", "gradeenable");
                    var E7 = $(this).dialog("option", "unitenable");
                    var FC = $(this).dialog("option", "unitfrom");
                    var E5 = $(this).dialog("option", "unitto");
                    var E3 = $(this).dialog("option", "unitinc");
                    var FD = $(this).dialog("option", "gradedefault");
                    var FB = $(this).dialog("option", "unitdefault");
                    Cv(FF, FE, E8, E6, E4, E9, E7, FD, FB, FC, E5, E3, undefined);
                    return;
                }
            }
        }
    });
    function Cv(FN, FR, FU, FC, E6, FT, E8, E3, E7, FA, FD, FO, FM) {
        var E5 = CZ;
        var FS = E6.toString().split("(")[0];
        E6 = FS;
        $("#diagplan-class-table-subj").empty();
        $("#diagplan-class-table-title").empty();
        $("#diagplan-class-table-grade-p").empty();
        $("#diagplan-class-table-unit-p").empty();
        $("#diagplan-class-table-code").empty();
        $("#diagplan-class-table-type").empty();
        $("#diagplan-class-table-days").empty();
        $("#diagplan-class-table-time").empty();
        $(".diagplan-class-table-no1234").remove();
        var E9 = BP(FC);
        var FQ = FU + " " + FC;
        var FI = $("#dialog-plan").dialog("open");
        FI.dialog("option", "sectionhead", FN);
        FI.dialog("option", "sectcode", FR);
        FI.dialog("option", "subjcrse", FQ);
        FI.dialog("option", "subjcode", FU);
        FI.dialog("option", "crsecode", FC);
        FI.dialog("option", "stitle", E6);
        $("#diagplan-class-table-subj").text(FQ);
        $("#diagplan-class-table-title").text(E6);
        var FF = 0;
        var FK = $(".wr-search-group-data-row").filter(function () {
            return $(this).children("td[aria-describedby='search-div-b-table_SECTION_NUMBER']").text().indexOf(FN) != -1;
        });
        var FE = "";
        if (DO) {
            FE = $("#" + FK[0].id).children("td[aria-describedby='search-div-b-table_SECTION_NUMBER']")[0].innerHTML.trim();
        } else {
            FE = $("#" + FK[0].id).children("td[aria-describedby='search-div-b-table_SECTION_NUMBER']")[0].textContent.trim();
        } FE = FE.replace(/^\d+/, "");
        if (FE.trim() != "") {
            FE = E6 + " - " + FE.trim();
            $("#diagplan-class-table-title").text(FE);
        }
        FK.sort(function (FW, FV) {
            return FW.id > FV.id;
        });
        var FL = [];
        $.each(FK, function (FW, FZ) {
            var FY = "";
            var Fb = "";
            var FV = "";
            var Fa = "";
            if (DO) {
                FY = $("#" + FZ.id).children("td[aria-describedby='search-div-b-table_SECT_CODE']")[0].innerHTML.trim();
                Fb = $("#" + FZ.id).children("td[aria-describedby='search-div-b-table_FK_CDI_INSTR_TYPE']")[0].innerHTML.trim();
                FV = $("#" + FZ.id).children("td[aria-describedby='search-div-b-table_DAY_CODE']")[0].innerHTML.trim();
                Fa = $("#" + FZ.id).children("td[aria-describedby='search-div-b-table_coltime']")[0].innerHTML.trim();
            } else {
                FY = $("#" + FZ.id).children("td[aria-describedby='search-div-b-table_SECT_CODE']")[0].textContent.trim();
                Fb = $("#" + FZ.id).children("td[aria-describedby='search-div-b-table_FK_CDI_INSTR_TYPE']")[0].textContent.trim();
                FV = $("#" + FZ.id).children("td[aria-describedby='search-div-b-table_DAY_CODE']")[0].textContent.trim();
                Fa = $("#" + FZ.id).children("td[aria-describedby='search-div-b-table_coltime']")[0].textContent.trim();
            }
            if (Fb != "") {
                if (FF == 0) {
                    $("#diagplan-class-table-code").text(FY);
                    $("#diagplan-class-table-type").text(Af(Fb));
                    $("#diagplan-class-table-days").text(FV);
                    $("#diagplan-class-table-time").text(Fa);
                } else {
                    var FX = $("#diagplan-class-table");
                    FX.append("<tr class='diagplan-class-table-no1234'>" + "<td class='diagclass-class-table-empty'></td>" + "<td class='diagclass-class-table-empty'></td>" + "<td class='diagclass-class-table-empty'></td>" + "<td class='diagclass-class-table-empty'></td>" + "<td>" + FY + "</td>" + "<td>" + Af(Fb) + "</td>" + "<td>" + FV + "</td>" + "<td>" + Fa + "</td>" + "</tr>");
                } FF++;
            }
        });
        var FG = $("#diagplan-class-table-grade-p");
        FG.empty();
        if (FT) {
            FG.append("<select class='diagxxx-class-table-td-select' id='diagplan-class-table-grade'></select>");
            var E4 = $("#diagplan-class-table-grade");
            E4.empty();
            if (E5 == "UN") {
                E4.append($("<option></option>").val("L").html("Letter"));
                E4.append($("<option></option>").val("P").html("Pass / No Pass"));
            } else {
                if (E5 == "GR") {
                    E4.append($("<option></option>").val("L").html("Letter"));
                    E4.append($("<option></option>").val("S").html("Satisfactory / Unsatisfactory"));
                } else {
                    if (E5 == "PH") {
                        CX(FU, FC, function (FV) {
                            if (FV.ACADEMIC_LEVEL == "GR") {
                                E4.append($("<option></option>").val("L").html("Letter"));
                            } else {
                                E4.append($("<option></option>").val("H").html("Honors Pass / Fail"));
                            } E4.append($("<option></option>").val("S").html("Satisfactory / Unsatisfactory"));
                        });
                    }
                }
            }
            if (undefined != E3) {
                E4.val(E3);
            }
        } else {
            if (undefined != E3) {
                FG.text(Af(E3));
            } else {
                if (E5 == "UN") {
                    FG.text("Pass / No Pass");
                } else {
                    if (E5 == "GR") {
                        FG.text("Satisfactory / Unsatisfactory");
                    } else {
                        if (E5 == "PH") {
                            FG.text("Satisfactory / Unsatisfactory");
                        }
                    }
                }
            }
        }
        var FJ = $("#diagplan-class-table-unit-p");
        FJ.empty();
        if (E8 && undefined != FA && undefined != FD && undefined != FO) {
            FJ.append("<select class='diagxxx-class-table-td-select' id='diagplan-class-table-unit' ></select>");
            var FP = $("#diagplan-class-table-unit");
            FP.empty();
            var FH = Er(FA, FD, FO, E7);
            $.each(FH.ob2, function (FV, FW) {
                FP.append($("<option></option>").val(FV).html(FW));
            });
            FP.val(FH.ob1);
        } else {
            FJ.text(E7);
        }
        var FB = "<b>Confirm class, and/or grading option or units to add this class to your plan</b><br><br />";
        if (undefined != FM && ! FM.toString().match(/^\s*$/)) {
            FB = FB + "<div class='msg alert'><h4>Alert: </h4>" + FM + "</div>";
        }
        FB += L(FN, true);
        EB(FB);
    }
    function L(E4, E7) {
        var E6 = "";
        var E5 = [];
        var E3 = [];
        if (E7) {
            o(E4, E5, E3);
        } else {
            Da(E4, E5, E3);
        } Dy(E5);
        Bg(E3);
        if (Cx.length > 0 || Bx.length > 0) {
            E6 = CT();
        }
        return E6;
    }
    function CT() {
        var E4 = (Cx.length + Bx == 1) ? DM : D0;
        var E3 = "<div class='msg alert'><h4>Warning: " + E4 + "</h4><ul>";
        $.each(Cx, function (E5, E6) {
            E3 += "<li>" + E6[0].SUBJ_CODE.trim() + " " + E6[0].CRSE_CODE.trim() + ((E6[0].FK_CDI_INSTR_TYPE == "MI") ? " Midterm" : "") + " and " + E6[1].SUBJ_CODE.trim() + " " + E6[1].CRSE_CODE.trim() + ((E6[1].FK_CDI_INSTR_TYPE == "MI") ? " Midterm" : "") + "</li>";
        });
        $.each(Bx, function (E5, E6) {
            E3 += "<li>" + E6[0].SUBJ_CODE.trim() + " " + E6[0].CRSE_CODE.trim() + " Final and " + E6[1].SUBJ_CODE.trim() + " " + E6[1].CRSE_CODE.trim() + " Final</li>";
        });
        E3 += "</ul>";
        E3 += "This section's time conflicts with another course on your schedule. Your add request has processed, but you must resolve this time conflict by dropping one of these courses. You are responsible for resolving time conflicts, which may also include conflicts in the midterm or final exam schedule.</div>";
        return E3;
    }
    function Cd(E6, E4) {
        var E3 = E4 || 0;
        var E5 = (E6.FK_SPM_SPCL_MTG_CD.match(/MI|FI/)) ? E6.FK_SPM_SPCL_MTG_CD : E6.FK_CDI_INSTR_TYPE;
        return {
            DAY_CODE: E6.DAY_CODE_NUM.charAt(E3),
            BEGIN_HH_TIME: E6.BEGIN_HH_TIME,
            BEGIN_MM_TIME: E6.BEGIN_MM_TIME,
            END_HH_TIME: E6.END_HH_TIME,
            END_MM_TIME: E6.END_MM_TIME,
            FK_CDI_INSTR_TYPE: E5,
            START_DATE: E6.START_DATE,
            END_DATE: E6.SECTION_END_DATE,
            SECTION_NUMBER: E6.ORG_SECTION_NUMBER,
            SUBJ_CODE: E6.SUBJ_CODE,
            CRSE_CODE: E6.CRSE_CODE
        };
    }
    function Da(E4, E6, E3) {
        var E5 = AR(V);
        $.each(E5, function (E7, E8) {
            if (E8.SECTION_HEAD == E4) {
                if (E8.PB_FRIEND) {
                    if (E8.FK_CDI_INSTR_TYPE == "MI") {
                        E6.push(E8);
                    } else {
                        if (E8.FK_CDI_INSTR_TYPE == "FI") {
                            E3.push(E8);
                        }
                    }
                } else {
                    E6.push(E8);
                }
            }
        });
    }
    function o(E4, E6, E3) {
        var E5 = AR(AX);
        var E7 = undefined;
        $.each(E5, function (E8, FA) {
            if (FA.ORG_SECTION_NUMBER == undefined) {
                return;
            }
            if (FA.FK_SPM_SPCL_MTG_CD != undefined && FA.FK_SPM_SPCL_MTG_CD.match(/FM|PB|RE|OT|MU/)) {
                return;
            }
            if (FA.ORG_SECTION_NUMBER == E4) {
                if (FA.FK_SPM_SPCL_MTG_CD != undefined && FA.FK_SPM_SPCL_MTG_CD.trim() == "FI") {
                    E3.push(Cd(FA));
                    return;
                }
                for (var E9 = 0; E9 < FA.DAY_CODE_NUM.length; E9++) {
                    E6.push(Cd(FA, E9));
                }
                return;
            } else {
                if (FA.SECTION_NUMBER != undefined && FA.SECTION_NUMBER == E4) {
                    E7 = FA.ORG_SECTION_NUMBER;
                    for (var E9 = 0; E9 < FA.DAY_CODE_NUM.length; E9++) {
                        E6.push(Cd(FA, E9));
                    }
                    return;
                }
            }
            if (E7 != undefined) {
                if (FA.ORG_SECTION_NUMBER == E7) {
                    if (FA.FK_SPM_SPCL_MTG_CD != undefined && FA.FK_SPM_SPCL_MTG_CD.trim() == "FI") {
                        E3.push(Cd(FA));
                        return;
                    } else {
                        if (FA.FK_SPM_SPCL_MTG_CD != undefined && FA.FK_SPM_SPCL_MTG_CD.trim() == "MI") {
                            E6.push(Cd(FA));
                            return;
                        }
                    }
                }
            }
        });
    }
    function Dy(E4) {
        Cx = [];
        Cx.length = 0;
        var E3 = AR(V);
        $.each(E4, function (E8, FB) {
            if (undefined == FB.FK_CDI_INSTR_TYPE || FB.FK_CDI_INSTR_TYPE.match(/FI|FM|PB|RE|OT|MU/)) {
                return;
            }
            var FA = String("0" + FB.BEGIN_HH_TIME).slice(-2) + String("0" + FB.BEGIN_MM_TIME).slice(-2);
            var E6 = String("0" + FB.END_HH_TIME).slice(-2) + String("0" + FB.END_MM_TIME).slice(-2);
            var E7 = FB.DAY_CODE;
            var E9 = FB.FK_CDI_INSTR_TYPE;
            var E5 = String(FB.START_DATE).replace(/\-/g, "");
            var FC = String(FB.END_DATE).replace(/\-/g, "");
            if (FA.toString().match(/^0+$/) || E5.toString().match(/TBA/i)) {
                return;
            }
            $.each(E3, function (FJ, FI) {
                if (undefined == FI.FK_CDI_INSTR_TYPE || FI.FK_CDI_INSTR_TYPE.match(/FI|FM|PB|RE|OT|MU/)) {
                    return;
                }
                var FH = String("0" + FI.BEGIN_HH_TIME).slice(-2) + String("0" + FI.BEGIN_MM_TIME).slice(-2);
                var FE = String("0" + FI.END_HH_TIME).slice(-2) + String("0" + FI.END_MM_TIME).slice(-2);
                var FG = FI.DAY_CODE;
                var FK = FI.FK_CDI_INSTR_TYPE;
                var FF = String(FI.START_DATE).replace(/\-/g, "");
                var FD = String(FI.END_DATE).replace(/\-/g, "");
                if (FH.toString().match(/^0+$/) || FF.toString().match(/TBA/i)) {
                    return;
                }
                if (FB.SECTION_NUMBER == FI.SECTION_NUMBER) {
                    return;
                }
                if (FI.PB_FRIEND && FK != "MI") {
                    return;
                }
                if ("MI" == E9 && "MI" == FK) {
                    if (E5 == FF) {
                        if (FA < FE && FH < E6) {
                            DL(FB, FI);
                            return;
                        }
                    }
                    return;
                }
                if ("MI" == E9 || "MI" == FK) {
                    if (E7 == FG && FA < FE && FH < E6) {
                        DL(FB, FI);
                        return;
                    }
                }
                if (E7 == FG && FA < FE && FH < E6 && E5 < FD && FF < FC) {
                    DL(FB, FI);
                    return;
                }
            });
        });
    }
    function DL(E4, E3) {
        var E5 = false;
        if (E4.FK_CDI_INSTR_TYPE == "MI" || E3.FK_CDI_INSTR_TYPE == "MI") {
            Cx.push([E4, E3]);
            return;
        }
        $.each(Cx, function (E6, E7) {
            if (E7[0].SUBJ_CODE == E4.SUBJ_CODE && E7[0].CRSE_CODE == E4.CRSE_CODE && E7[0].FK_CDI_INSTR_TYPE != "MI" && E7[1].SUBJ_CODE == E3.SUBJ_CODE && E7[1].CRSE_CODE == E3.CRSE_CODE && E7[1].FK_CDI_INSTR_TYPE != "MI") {
                E5 = true;
                return false;
            }
        });
        if (! E5) {
            Cx.push([E4, E3]);
        }
    }
    function Bg(E3) {
        Bx = [];
        Bx.length = 0;
        var E4 = AR(V);
        $.each(E3, function (E8, FA) {
            if (undefined == FA.FK_CDI_INSTR_TYPE || FA.FK_CDI_INSTR_TYPE != "FI") {
                return;
            }
            var E9 = String("0" + FA.BEGIN_HH_TIME).slice(-2) + String("0" + FA.BEGIN_MM_TIME).slice(-2);
            var E6 = String("0" + FA.END_HH_TIME).slice(-2) + String("0" + FA.END_MM_TIME).slice(-2);
            var E5 = FA.START_DATE;
            var E7 = FA.DAY_CODE;
            if (E9.toString().match(/^0+$/) || E5.toString().match(/TBA/i)) {
                return;
            }
            $.each(E4, function (FG, FF) {
                if (undefined == FF.FK_CDI_INSTR_TYPE || FF.FK_CDI_INSTR_TYPE != "FI") {
                    return;
                }
                var FE = String("0" + FF.BEGIN_HH_TIME).slice(-2) + String("0" + FF.BEGIN_MM_TIME).slice(-2);
                var FB = String("0" + FF.END_HH_TIME).slice(-2) + String("0" + FF.END_MM_TIME).slice(-2);
                var FC = FF.START_DATE;
                var FD = FF.DAY_CODE;
                var FH = FF.FK_CDI_INSTR_TYPE;
                if (FE.toString().match(/^0+$/) || FC.toString().match(/TBA/i)) {
                    return;
                }
                if (FA.SECTION_NUMBER == FF.SECTION_NUMBER) {
                    return;
                }
                if (E5 == FC && E9 < FB && FE < E6) {
                    Bx.push([FA, FF]);
                    return;
                }
            });
        });
    }
    function Aw(E6, E9, E8, E3, E7) {
        if (BL(E6, undefined, undefined, "ALL")[0]) {
            var FA = "<div class='msg error'><h4>Request Unsuccessful</h4><span>Attempting to plan " + E8.trim() + " " + E3.trim() + ", Section " + E6 + ".<br /><br />You already have this section in your list.</span></div>";
            var E5 = $("#dialog-after-action").dialog("open");
            var E4 = O.slice(0);
            E4.splice(1, 2);
            E5.dialog("option", "buttons", E4);
            E5.dialog("option", "actionevent", FA);
            EB(FA);
            return;
        }
        Dg(E6, E8, E3, function (FH) {
            var FF = false;
            var FG = false;
            var FK = undefined;
            var FD = undefined;
            var FC = undefined;
            var FL = undefined;
            var FJ = undefined;
            var FI = "";
            if ("YES" == FH.GRADE) {
                FF = true;
            }
            if ("YES" == FH.UNIT) {
                FG = true;
                FK = FH.UNIT_FROM;
                FD = FH.UNIT_TO;
                FC = FH.UNIT_INC;
            }
            FL = FH.GRADE_DEFAULT;
            FJ = FH.UNIT_DEFAULT;
            var FE = undefined;
            if ("SUCCESS" == FH.OPS) {
                if ("YES" == FH.WARNING) {
                    if (undefined != FH.REASON || "null" != FH.REASON) {
                        FE = FH.REASON;
                    }
                }
                Cv(E6, E9, E8, E3, E7, FF, FG, FL, FJ, FK, FD, FC, FE);
            } else {
                if (undefined != FH.REASON || "null" == FH.REASON) {
                    reason = FH.REASON;
                }
                if (undefined == FJ) {
                    FI = "<div class='msg error'><h4>Warning</h4><span>Attempting to plan " + E8.trim() + " " + E3.trim() + ", Section " + E6 + ".<br /><br />" + reason + "<br /><br />You cannot plan this class.</span></div>";
                    $("#dialog-msg").dialog("open");
                    EB(FI);
                } else {
                    FI = "<div class='msg alert'><h4>Warning</h4><span>Attempting to plan " + E8.trim() + " " + E3.trim() + ", Section " + E6 + ".<br /><br />" + reason + "</span></div><b>Do you still want to plan this class?</b>";
                    var FB = $("#dialog-confirm-plan-add").dialog("open");
                    FB.dialog("option", "sectionhead", E6);
                    FB.dialog("option", "sectcode", E9);
                    FB.dialog("option", "subjcode", E8);
                    FB.dialog("option", "crsecode", E3);
                    FB.dialog("option", "stitle", E7);
                    FB.dialog("option", "gradeenable", FF);
                    FB.dialog("option", "unitenable", FG);
                    FB.dialog("option", "unitfrom", FK);
                    FB.dialog("option", "unitto", FD);
                    FB.dialog("option", "unitinc", FC);
                    FB.dialog("option", "gradedefault", FL);
                    FB.dialog("option", "unitdefault", FJ);
                } EB(FI);
            }
        });
    }
    function Bs(E5) {
        var FG = E5.data.actionTip;
        var FH = E5.data.sectionHead;
        var FD = E5.data.gradeVal;
        var FI = E5.data.unitVal;
        var E8 = E5.data.isEnroll;
        var E6 = "";
        var E7 = [];
        var FA = $("#list-id-table");
        var E4 = FA.jqGrid("getDataIDs");
        for (var FC = 0; FC < E4.length; FC++) {
            var FB = E4[FC];
            rowData = FA.jqGrid("getRowData", FB);
            if (!rowData.colstatusorg.match(/plan/i)) {
                continue;
            }
            if (undefined != rowData.PB_FRIEND && "true" == rowData.PB_FRIEND) {
                continue;
            }
            if (rowData.SECTION_HEAD == FH) {
                E6 = CW(rowData.FK_CDI_INSTR_TYPE);
                if (undefined == E6 || E6.trim() == "") {
                    E6 = rowData.FK_CDI_INSTR_TYPE;
                }
                var E9 = {
                    key0: rowData.SUBJ_CODE,
                    key1: rowData.CRSE_CODE,
                    key2: rowData.CRSE_TITLE,
                    key3: rowData.colsubj,
                    key4: E6,
                    key5: rowData.DAY_CODE,
                    key6: rowData.coltime,
                    key7: Af(rowData.GRADE_OPTION),
                    key8: rowData.SECT_CREDIT_HRS,
                    key9: rowData.SECT_CODE
                };
                E7.push(E9);
            }
        }
        var E3 = $("#dialog-confirm-plan-remove").dialog("open");
        E3.dialog("option", "sectionhead", FH);
        E3.dialog("option", "subjcode", E7[0].key0);
        E3.dialog("option", "crsecode", E7[0].key1);
        E3.dialog("option", "stitle", E7[0].key2);
        E3.dialog("option", "gradeval", FD);
        E3.dialog("option", "unitval", FI);
        E3.dialog("option", "isenroll", E8);
        $("#diagplanrm-class-table-subj").empty();
        $("#diagplanrm-class-table-title").empty();
        $("#diagplanrm-class-table-grade-p").empty();
        $("#diagplanrm-class-table-unit-p").empty();
        $("#diagplanrm-class-table-code").empty();
        $("#diagplanrm-class-table-type").empty();
        $("#diagplanrm-class-table-days").empty();
        $("#diagplanrm-class-table-time").empty();
        $(".diagplanrm-class-table-no1234").remove();
        $("#diagplanrm-class-table-subj").text(E7[0].key3);
        var FF = E7[0].key2.replace("<br>", "");
        $("#diagplanrm-class-table-title").text(FF);
        $("#diagplanrm-class-table-grade-p").text(E7[0].key7);
        $("#diagplanrm-class-table-unit-p").text(E7[0].key8);
        $("#diagplanrm-class-table-code").text(E7[0].key9);
        $("#diagplanrm-class-table-type").text(E7[0].key4);
        $("#diagplanrm-class-table-days").text(E7[0].key5);
        $("#diagplanrm-class-table-time").text(E7[0].key6);
        var FE = $("#diagplanrm-class-table");
        $(".diagplanrm-class-table-extra-row").empty();
        $.each(E7.slice(1), function (FK, FL) {
            var FJ = '<tr class="diagplanrm-class-table-extra-row diagplanrm-class-table-no1234" >';
            FE.append(FJ + '<td class="diagclass-class-table-empty"></td>' + '<td class="diagclass-class-table-empty"></td>' + '<td class="diagclass-class-table-empty"></td>' + '<td class="diagclass-class-table-empty"></td>' + "<td>" + FL.key9 + "</td>" + "<td>" + FL.key4 + "</td>" + "<td>" + FL.key5 + "</td>" + "<td>" + FL.key6 + "</td>" + "</tr>");
        });
        EB(FG);
    }
    AT();
    function AT() {
        var E3 = false;
        if (Ca != undefined) {
            var E6 = Ca.match(/^S1|^S2|^S3|^SU/i) ? true : false;
        }
        Em({
            url: "/webreg2/svc/wradapter/secure/get-max-hour-pass",
            dataType: "json",
            type: "GET",
            async: false,
            data: {
                "termCode": Ca,
                "academicLevel": CZ
            },
            successF: function (E7) {
                if (E7 > 15) {
                    E3 = true;
                }
                return;
            }
        });
        $("#cal-grant-status").hide();
        if (CZ == "UN" && !E6 && E3) {
            var E4 = "20" + Ca.substring(2, 4);
            Em({
                url: "/webreg2/svc/wradapter/secure/get-cal-grant-flag",
                dataType: "text",
                type: "GET",
                async: false,
                data: {
                    "termCode": Ca
                },
                successF: function (E7) {
                    if (E7 == "" || E7 == null) {
                        console.log("record is not there " + E7);
                        E5();
                    }
                    return false;
                }
            });
            function E5() {
                Em({
                    url: "/webreg2/svc/wradapter/secure/get-cal-grant-message",
                    dataType: "json",
                    type: "GET",
                    async: false,
                    data: {
                        "alevel": CZ,
                        "termcode": Ca,
                        "termyear": E4
                    },
                    successF: function (E7) {
                        if (E7.length > 0) {
                            if (E7[0].CALGRANT !== undefined && E7[0].CALGRANT == "OK") {
                                $("#cal-grant-status").dialog({
                                    autoOpen: true,
                                    width: 590,
                                    height: 280,
                                    position: {
                                        my: "center",
                                        at: "center",
                                        of: window
                                    },
                                    modal: true,
                                    title: "Notice",
                                    closeOnEscape: false,
                                    open: function (E9, FA) {
                                        $(window).resize(function () {
                                            $("#cal-grant-status").dialog("option", "position", {
                                                my: "center",
                                                at: "center",
                                                of: window
                                            });
                                        });
                                        var E8 = false;
                                        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
                                            E8 = true;
                                        }
                                        if (! E8) {
                                            $("body").css("overflow", "hidden");
                                        }
                                        $("#checkBox").click(function () {
                                            if ($("#submit_button").is(":disabled")) {
                                                $("#submit_button").removeAttr("disabled");
                                                $("#submit_button").click(function () {
                                                    Bj();
                                                    $("#cal-grant-status").dialog("close");
                                                    $("body").css("overflow", "auto");
                                                });
                                            } else {
                                                $("#submit_button").attr("disabled", "disabled");
                                            }
                                        });
                                    }
                                });
                                return false;
                            } else {
                                $("#cal-grant-status").hide();
                                return false;
                            }
                        }
                    }
                });
            }
        }
    }
    function Bj() {
        Em({
            url: "/webreg2/svc/wradapter/secure/save-cal-grant-flag",
            dataType: "text",
            type: "POST",
            async: false,
            data: {
                "termCode": Ca
            },
            successF: function (E3) {
                if (E3 == "success") {
                    return false;
                }
                if (E3 == "fail") {
                    d();
                }
            },
            error: d
        });
    }
    function d() {
        DS("<div class='msg error'><h4>System Error</h4><span>Please try again and if error persists, come back at a later time and try</span></div>");
        return;
    }
    DD();
    Ec();
    $("#wr-main-content").css("display", "block");
    $("body").removeClass("wr-spinner-loading");
});
