import barra from './barra.js';

document.body.prepend(barra);

const divContent = document.querySelector('.content');

function _cE(str){
    return document.createElement(str)
}


function createIndex() {
    let divPhotoInformation = _cE('div');
    let spam = _cE('spam');
    let para = _cE('p');
    let img = _cE('img');

    spam.innerText = 'Irure Lorem';
    para.innerText = 
        
        'Non cillum sunt pariatur in dolore enim officia reprehenderit ullamco anim cillum. '
        + 'Cupidatat reprehenderit consectetur enim non laboris enim id nisi. Qui laboris tempor '
        + 'aute ullamco ullamco.';

    img.className = 'photo';
    img.setAttribute('src', 'https://images.pexels.com/photos/262918/pexels-photo-262918.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')
    
    divPhotoInformation.append(img,spam, para);
    
    divContent.appendChild(divPhotoInformation);
}

createIndex();