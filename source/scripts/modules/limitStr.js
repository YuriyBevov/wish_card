function limitStr( str, n ) {
    if ( str.length > n ) {
        return str.slice(0, n) + '...';
    } else {
        return str
    }
}

let titles = document.querySelectorAll('.product-card__content h3');

if(titles) {
    titles.forEach(title => {
        title.innerHTML = limitStr(title.innerHTML, 90);
    });
};