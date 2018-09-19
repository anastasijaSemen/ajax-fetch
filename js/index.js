document.querySelector('.time-loaded').innerText 
 = (new Date()).toLocaleTimeString(); 
 
//  vanila js запит
document.querySelector('.html .get').addEventListener('click', getHtmlData);
function getHtmlData() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.html .container').innerHTML 
                = xhr.responseText;
        }
    }
    // мас рандом для того щоб обійти кеш
     xhr.open('GET', 'data.html?r='+Math.random(), true);
    xhr.send();
}

// відключити кеш
// до запиту дописати параметр що ігнорується на сервері

// fetch.працює схоже до аджаксу. простіший код

document.querySelector('.html .fetch').addEventListener('click', fetchHtmlData);
function fetchHtmlData() {
    fetch('data.html')
        .then( data => data.text() )
        .then( html => document.querySelector('.html .container').innerHTML = html )
}
// fetch повертає обіцянку

// завантаження даних через json



document.querySelector('.json .get').addEventListener('click', getJsonData);
function getJsonData() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const clientData = JSON.parse(xhr.responseText);
            document.querySelector('.json .container .name')
                .innerText = clientData.name;
            document.querySelector('.json .container .balance')
                .innerText = clientData.balance;
        }
    }
    xhr.open('GET', 'data.json?r='+Math.random(), true);
    xhr.send();
}
// fetch.працює схоже до аджаксу. простіший код

document.querySelector('.html .fetch').addEventListener('click', fetchHtmlData);
function fetchHtmlData() {
    fetch('data.html')
        .
}
