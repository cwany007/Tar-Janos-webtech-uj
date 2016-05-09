function BMW1() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			$("#mainContent").html(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET","bmw_1.html",true);
    xmlhttp.send();
}
function BMW2() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			$("#mainContent").html(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET","bmw_2.html",true);
    xmlhttp.send();
}
function BMW3() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            document.getElementById("mainContent").innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET","bmw_3.html",true);
    xmlhttp.send();
}
function BMW4() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            document.getElementById("mainContent").innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET","bmw_4.html",true);
    xmlhttp.send();
}
function BMW_index() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            document.getElementById("mainContent").innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET","bmw_index.html",true);
    xmlhttp.send();
}
