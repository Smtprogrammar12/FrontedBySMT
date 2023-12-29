console.log('start from here!!!')

// let content = document.querySelector('#wrapper');

// content.addEventListener("click", function (event) {
//     //console.log(event.target.id);
//     console.log(event);
// })

// let links = document.querySelectorAll('a');
// // console.log(links);

// const thirdlinks = links[2];

// thirdlinks.addEventListener("click", function (event) {
//     event.preventDefault();
//     console.log("Acha lga stop karke");
// })


// create div

let myDiv = document.createElement('div');

function statuspara(event) {
    console.log('para ' + event.target.textContent);
}

myDiv.addEventListener('click', statuspara);

for (let i = 0; i <= 20; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'I am para ' + i;

    myDiv.appendChild(newElement);
}

document.body.appendChild(myDiv);