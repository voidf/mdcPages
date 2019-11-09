console.log('hello world');
import { MDCRipple } from '@material/ripple/index';
import {
    MDCFormField
} from '@material/form-field';
import {
    MDCCheckbox
} from '@material/checkbox';

//checkbox =
//new MDCCheckbox(document.querySelector('.mdc-checkbox'));
const foos = [].map.call(document.querySelectorAll('.mdc-checkbox'), function(el) {
    return new MDCCheckbox(el);
});
//console.log(foos);

var cbs = document.querySelectorAll('.mdc-checkbox input');
var curmet = -1;

for (var i = 0; i < cbs.length; i++) {
    var checkbox = cbs[i];

    checkbox.addEventListener('click', function() {
        if (curmet == -1) {
            for (var j = 0; j < foos.length; j++) {
                if (foos[j].checked) curmet = j;
                foos[j].disabled = !foos[j].checked;
            }
        } else {
            curmet = -1;
            for (var j = 0; j < foos.length; j++) {
                foos[j].disabled = false;
            }

        }
        //will return true or false
    });
}
const ax = require('axios');
document.querySelector('#hajime').addEventListener('click', execu);

function execu() {
    if (curmet != -1) {
        var metstr = cbs[curmet].parentElement.nextElementSibling.innerHTML;
        console.log(metstr);
        var lnk = document.querySelector('#dstlnk').value;
        if (metstr == "GET" || metstr == "DELETE" || metstr == "HEAD" || metstr == "OPTIONS") {
            axios({
                method: metstr.toLowerCase(),
                url: lnk,
                
            }).then(function(resp) {
                console.log(resp);
                //console.log(resp.data);
                var tempHds="";
                for(var k in resp.headers){
                    tempHds+=k+":"+resp.headers[k]+"\n";
                }
                document.querySelector('#respInfo').value=resp.status+" "+resp.statusText+"\n\n"+tempHds+"\n"+resp.data;
            }).catch(function(err) {
                console.log(err);
                document.querySelector('#respInfo').value=err;
            });
        } else {
            axios({
                method: metstr.toLowerCase(),
                url: lnk,
                headers: {
                    'Content-Type': 'text/plain;charset=UTF-8',
                },
                data: document.querySelector('#reqbody').value
            }).then(function(resp) {
                console.log(resp);
                var tempHds="";
                for(var k in resp.headers){
                    tempHds+=k+":"+resp.headers[k]+"\n";
                }
                document.querySelector('#respInfo').value=resp.status+" "+resp.statusText+"\n\n"+tempHds+"\n"+resp.data;
            }).catch(function(err) {
                console.log(err);
                document.querySelector('#respInfo').value=err;
            });
        }

    } else {
        console.log("No method selected");
    }

}