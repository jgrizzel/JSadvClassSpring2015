var form = $('form');

form.submit(checkForm);

function checkForm(e) {
    e.preventDefault();

    var paragraphs = $('form, p');

    var data = {};
    var isValid = true;
    var html = "";


    for (var i = 0, l = paragraphs.length; i < l; i++) {
        var input = $(paragraphs[i]).children('input');
        var label = $(paragraphs[i]).children('label');
        data[input.attr('name')] = input.val();


        if (input.val() === '') {
            $(paragraphs[i]).addClass('error');
            isValid = false;
        } else {
            $(paragraphs[i]).removeClass('error');
        }

        html += '<p>' + label.text() + ': ' + input.val() + '</p>';
    }
    
    var passwordError = $('.passwordError');
    var passwordconfError = $('.passwordconfError');

    if (data["password"] !== data["passwordconf"])
    {
        passwordError.addClass('error');
        passwordconfError.addClass('error');
        isValid = false;
    }

    if (isValid === true)
    {
        form.addClass('hide');
        var conf = $('#confirmation');
        conf.html(html);

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