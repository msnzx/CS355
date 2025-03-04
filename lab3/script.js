const carousel = document.getElementById('carousel');

function userCard(user){
    const card = document.createElement('div');

    card.className = 'card';
    const img = document.createElement('img');
    img.src = user.picture.large;
    card.appendChild(img);

    const name = document.createElement('h3');
    name.innerText = `${user.name.title}${user.name.first}${user.name.last}`
    card.appendChild(name)

    const address = document.createElement('p');
    address.innerHTML = `${user.location.city},${user.location.country},${user.location.state}`
    card.appendChild(address);

    const email = document.createElement('h4');
    email.innerText = user.email;
    card.appendChild(email)

    const phone = document.createElement('h5');
    phone.innerText = user.phone;
    card.appendChild(phone);



    return card;
}

var currentUser = 0, nextCardTimer;
function nextCard(){
    clearTimeout(nextCardTimer);
    currentUser++;
    if (currentUser>=carousel.children.length)
        currentUser = 0;
    carousel.children[currentUser].scrollIntoView({
        block:'end', behavior: "smooth"
    });
    nextCardTimer=setTimeout(nextCard, 5000)

}
function addUser(user){
    let card = userCard(user);
    carousel.appendChild(card);
}
function main(){
    fetch(' https://randomuser.me/api/?results=5 ')
    .then(res => res.json())
    .then(data=>{
        carousel.innerHTML="";
        console.log(data);
        data.results.forEach(addUser)
    })
    nextCardTimer=setTimeout(nextCard, 5000)

}
carousel.addEventListener('click', nextCard)

main();