var form = document.querySelector('form');

form.addEventListener('submit', checkForm);

function checkForm(e) {
    e.preventDefault();

    var paragraphs = document.querySelectorAll('form p');

    var data = {};
    var isValid = true;
    var html = "";


    for (var i = 0, l = paragraphs.length; i < l; i++) {
        var input = paragraphs[i].querySelector('input');
        var label = paragraphs[i].querySelector('label');
        data[input.name] = input.value;


        if (input.value === '') {
            paragraphs[i].classList.add('error');
            isValid = false;
        } else {
            paragraphs[i].classList.remove('error');
        }

        html += '<p>' + label.innerText + ':' + input.value + '</p>';
    }
    
    var passwordError = document.querySelector('.passwordError').classList;
    var passwordconfError = document.querySelector('.passwordconfError').classList;

    if (data["password"] !== data["passwordconf"])
    {
        passwordError.add('error');
        passwordconfError.add('error');
        isValid = false;
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