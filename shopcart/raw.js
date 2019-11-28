console.log('Loaded');

import {
    MDCFormField
} from '@material/form-field';
import {
    MDCCheckbox
} from '@material/checkbox';

import { MDCRipple } from '@material/ripple';

import { MDCSlider } from '@material/slider';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';


const sliders = document.querySelectorAll('.mdc-slider');
var sliderList = [];
for (let i = 0; i < sliders.length; i++) {
    const slider = new MDCSlider(sliders[i]);
    sliderList.push(slider);
    slider.listen('MDCSlider:change', () => calcPrice());
}





// const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
// const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
//     return new MDCRipple(el);
// });

var chks = [].map.call(document.querySelectorAll('.mdc-checkbox'), function(el) {
    return new MDCCheckbox(el);
});

//console.log(chks);
var cbs = document.querySelectorAll('.mdc-checkbox input');






cbs[0].addEventListener('click', function() {
    let CHKflag = 1;
    for (let i = 1; i < cbs.length - 1; i++) {
        if (!chks[i].checked) {
            CHKflag = 0;
            break;
        }
    }
    if (CHKflag) {
        for (let i = 1; i < cbs.length - 1; i++) {
            chks[i].checked = false;
        }
    } else {
        for (let i = 1; i < cbs.length - 1; i++) {
            chks[i].checked = true;
        }
    }
    calcPrice();
});

cbs[cbs.length - 1].addEventListener('click', function() {
    alert("只有红茶可以吗？");
    let addNode = document.querySelectorAll("tr")[1].cloneNode(true);
    addNode.querySelectorAll("td")[1].innerText = "红茶";
    addNode.querySelectorAll("td")[2].innerText = "114514";

    let tmpNode = document.querySelector("tbody").lastElementChild.cloneNode(true);
    document.querySelector("tbody").replaceChild(addNode, document.querySelector("tbody").lastElementChild);
    addNode.querySelector('.mdc-checkbox').addEventListener('click', function() {
        calcPrice();
    });
    document.querySelector("tbody").appendChild(tmpNode);


    const NS = new MDCSlider(addNode.querySelector(".mdc-slider"));
    NS.listen('MDCSlider:change', () => calcPrice());

    const tmpSlider = sliderList.pop();
    sliderList.push(NS);
    sliderList.push(tmpSlider);


    const tmpCB = chks.pop();
    chks.push(new MDCCheckbox(addNode.querySelector('.mdc-checkbox')));
    chks.push(tmpCB);
    chks[chks.length - 1].checked = false;

});


for (let i = 1; i < cbs.length - 1; i++) {
    const checkbox = cbs[i];

    checkbox.addEventListener('click', function() {
        calcPrice();
    });
}
var price = 0;

function calcPrice() {
    price = 0;
    const checkboxElements = document.querySelectorAll('.mdc-checkbox');
    var j = 0;
    for (j = 1; j < chks.length - 1; j++) {
        console.log(j, chks[j].checked);
        if (chks[j].checked) {
            price += parseFloat(checkboxElements[j].parentNode.nextElementSibling.nextElementSibling.innerText) * sliderList[j - 1].value;
            checkboxElements[j].parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText = parseFloat(checkboxElements[j].parentNode.nextElementSibling.nextElementSibling.innerText) * sliderList[j - 1].value;
            //console.log(checkboxElements[j].parentNode);
        } else {
            checkboxElements[j].parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText = 0;
        }
        //     if (chks[0].checked) price += 1 * sliderList[0].value;
        // if (chks[1].checked) price += 2 * sliderList[1].value;
        // if (chks[2].checked) price += 3 * sliderList[2].value;

    }
    checkboxElements[j].parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText = price;
    console.log(price);
}
document.querySelector(".mdc-button").addEventListener('click', function() {
    alert("付款总额：" + price.toString());
    window.location.href = "p.jpg"
});