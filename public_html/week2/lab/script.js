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