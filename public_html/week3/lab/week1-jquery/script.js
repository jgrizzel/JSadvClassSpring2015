/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



//var form = $('form');

//form.submit( checkForm);

$('form').submit(function( event ) {
                event.preventDefault();
                checkForm();
            });

function checkForm() {
    
    var fname = $('input[name="fname"');
    var lname = $('input[name="lname"');    
    var email = $('input[name="email"]');
    var phone = $('input[name="phone"');
    
    var fnameError = $('.fnameError');
    var lnameError = $('.lnameError');
    var emailError = $('.emailError');
    var phoneError = $('.phoneError');
   
    var isValid = true;
    
     if ( fname.val() === '' ) {
       fnameError.addClass('error');
       isValid = false;
    } else {
       fnameError.removeClass('error');
    }
     if ( lname.val() === '' ) {
       lnameError.addClass('error');
       isValid = false;
    } else {
       lnameError.removeClass('error');
    }    
    if ( email.val() === '' ) {
       emailError.addClass('error');
       isValid = false;
    } else {
       emailError.removeClass('error');
    }
    if ( phone.val() === '' ) {
       phoneError.addClass('error');
       isValid = false;
    } else {
       phoneError.removeClass('error');
    }
    
    
    if ( isValid === true ) {
        $('form').addClass('hide');
        var conf = $('#confirmation');
        
        var html = '<p>First Name: '+ fname.val() + '</p>';
            html += '<p> Last name: ' + lname.val() + '</p>';
            html += '<p> Email: ' + email.val() + '</p>';
            html += '<p> Phone: ' + phone.val() + '</p>';
        
        conf.html(html);
        
    }
    
}