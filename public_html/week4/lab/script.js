var form = document.querySelector('form');

form.addEventListener('submit', checkForm);

var ck_text = /^[A-Za-z0-9 ]{3,20}$/;
var ck_phone =/^\(?([2-9]{1}[0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i 
var ck_username = /^[A-Za-z0-9_]{1,20}$/;
var ck_zip = /^[0-9]{5}(?:-[0-9]{4})?$/;
var ck_password =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;

function checkForm(e) {
    e.preventDefault();

    var paragraphs = document.querySelectorAll('form p');
    var data = {};
    var isValid = true;
    var html = "";

    for(var i = 0, l = paragraphs.length; i < l; i++)
    {
        var input = paragraphs[i].querySelector('input');
        var label = paragraphs[i].querySelector('label');
        
        data[input.name] = input.value;
        
        if(!ck_text.test(data["fname"]))
        {
            isValid =false;
        }
        if(!ck_text.test(data["lname"]))
        {
            isValid =false;
        }
        if(!ck_email.test(data["email"]))
        {
            isValid =false;
        }
        if(!ck_phone.test(data["phone"]))
        {
            isValid =false;
        }
        if(!ck_text.test(data["address1"]))
        {
            isValid =false;
        }
        if(!ck_text.test(data["address2"]))
        {
            isValid =false;
        }
        if(!ck_text.test(data["city"]))
        {
            isValid =false;
        }
        if(!ck_text.test(data["state"]))
        {
            isValid =false;
        }
        if(!ck_zip.test(data["zip"]))
        {
            isValid =false;
        }
        if(!ck_username.test(data["username"]))
        {
            isValid =false;
        }
        if(!ck_password.test(data["password"]))
        {
            isValid =false;
        }
        if(data["password"] !== data["passwordconf"])
        {
            passwordError.add('error');
            passwordconfError.add('error');
            isValid =false;
        }
        }
    /*if (!ck_text.test(fname))
        {
            isValid =false;
        }
        if (!ck_text.test(lname))
        {
            isValid =false;
        }
        if (!ck_email.test(email))
        {
            isValid =false;
        }
        if (!ck_phone.test(phone))
        {
            isValid =false;
        }
        if (!ck_text.test(address1))
        {
            isValid =false;
        }
        if (!ck_text.test(address2))
        {
            isValid =false;
        }
        if (!ck_text.test(city))
        {
            isValid =false;
        }
        if (!ck_text.test(state))
        {
            isValid =false;
        }
        if (!ck_zip.test(zip))
        {
            isValid =false;
        }
        if (!ck_username.test(username))
        {
            isValid =false;
        }
        if (!ck_password.test(password))
        {
            isValid =false;
        }
        if (password !== passwordconf)
        {
            isValid =false;
        }*/
        
        if (isValid == false) {
            paragraphs[i].classList.add('error');
            //isValid = false;
        } else {
            paragraphs[i].classList.remove('error');
        }
        
    if (isValid === true)
    {
        form.classList.add('hide');
        var conf = document.querySelector('#confirmation');
        conf.innerHTML = html;

        console.log(data);

    }
} 

 var geocoder;

            function initialize() {
              geocoder = new google.maps.Geocoder();
               document.querySelector('body > form > p.zipError > input[type="text"]').addEventListener('blur',codeAddress);

            }
            
            function codeAddress() {
                var address = document.querySelector('body > form > p.zipError > input[type="text"]').value;
                geocoder.geocode( { 'address': address}, function(results, status) {
                  if (status == google.maps.GeocoderStatus.OK) {
                      getAddress(results);
                  } else {
                     console.log('Geocode was not successful for the following reason: ' + status);
                  }
                });
              }

            google.maps.event.addDomListener(window, 'load', initialize);
            
            function getAddress(results)
            {
                var geoobj = results;
            
            var geoaddress = geoobj[0].address_components;
            var state;
            var city;
            
            for(var i =0, l=geoaddress.length; i<l; i++)
            {
                if(geoaddress[i].types.indexOf('administrative_area_level_1') > -1){
                    state = geoaddress[i].short_name;
                }
                if(geoaddress[i].types.indexOf('locality') > -1){
                    city = geoaddress[i].long_name;
                }
            }
            var stateText = document.querySelector('body > form > p.stateError > input[type="text"]');
            var cityText = document.querySelector('body > form > p.cityError > input[type="text"]');
            stateText.value = state;
            cityText.value = city;
            //console.log(state);
            //console.log(city);
        }