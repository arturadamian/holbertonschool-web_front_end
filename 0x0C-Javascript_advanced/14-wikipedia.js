let createElement = (data) => {
    var txt = document.createElement('p');
    txt.innerHTML = data;
    document.body.appendChild(txt);
}
let queryWikipedia = (callback) => {
    let xmlhttp = new XMLHttpRequest(),
        method = 'GET',
        url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';
  
    xmlhttp.open(method, url);
    xmlhttp.onload = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            data = JSON.parse(xmlhttp.response);
            console.log(data);
            callback(data.query.pages['21721040'].extract);
        };
    };
    xmlhttp.send();
}
queryWikipedia(createElement);