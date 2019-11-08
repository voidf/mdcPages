import {
    MDCFormField
} from './node_modules/@material/form-field';
import {
    MDCCheckbox
} from './node_modules/@material/checkbox';
window.onload = function() {

    mdc.autoInit();
    mdc.ripple.MDCRipple.attachTo(document.querySelector('button')); //checkbox =
    new MDCCheckbox(document.querySelector('.mdc-checkbox'));
    const foos = [].map.call(document.querySelectorAll('.mdc-checkbox'), function(el) {
        return new MDCCheckbox(el);
    });
    const cbEl = document.querySelector('.mdc-checkbox');
    var checkbox = document.querySelector('.mdc-checkbox input');
    checkbox.addEventListener('click', () => {
        console.log(cbEl.checked); //will return true or false
    });
}