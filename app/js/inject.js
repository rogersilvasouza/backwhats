console.log('injetado');

var elems = document.getElementsByClassName('pane-list-user');

for (var i = 0; i < elems.length; i++) {
    elems[i].style.background = 'red';
}

var elems = document.getElementsByClassName('message-list');

var url = decodeURIComponent('https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/12670068_934420459968681_3746995988839703274_n.jpg?oh=39c25a41ba70479974155ddd46ee0f33&oe=5765AD9A&__gda__=1462229779_7f2f9354951fb7e4226ba8e11a328bbc');

for (var i = 0; i < elems.length; i++) {
    elems[i].style.background = "url('" + url + "')";
    elems[i].style.backgroundRepeat = 'no-repeat';
}

//https://scontent-gru2-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/1721_1103748099644466_2876796960082427461_n.jpg?oh=544e229c035e6482e3c11181a383185d&oe=57394A29
//https://scontent-gru2-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/1721_1103748099%…62876796960082427461_n.jpg?oh=544e229c035e6482e3c11181a383185d&oe=57394A29

console.log('alterado css');
