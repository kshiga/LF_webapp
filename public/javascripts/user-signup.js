(function () {
  $( document ).ready(function(){
    var formValid = false;
    // via http://emailregex.com/
    // General Email Regex (RFC 5322 Official Standard
    var emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    var fields = ['name', 'email', 'password', 'confirm']

    var validators = {
      name: function(name){
        if(name.length > 15) {
          return "Username cannot be longer than 15 characters";
        } else if(name.length == 0) {
          return "Username is required";
        } else {
          return "";
        }
      },
      email: function(email){
        if(email.length == 0) return "Email is required";
        return emailRegex.test(email) ? "" : "Email is not valid";
      },
      password: function(password){
        return password.length == 0 ? "Password is required" : "";
      },
      confirm: function(confirm){
        return $('#password').val() != confirm ? "Passwords must match" : "";
      }
    };

    var showError = function(field) {
      var error = $(`#${field}`).data('error');
      $(`#${field}-error`).text(error);
    }

    var validateField = function(field, value){
      var error = validators[field](value);
      $(`#${field}`)
        .data('valid', error.length == 0)
        .data('error', error);
    }

    var validateForm = function(){
      var isValid = true;
      var disabled = "";
      fields.map(function(field){
        isValid = isValid && $(`#${field}`).data('valid');
      });

      disabled = isValid ? "" : "disabled";
      $('#submit').prop('disabled', disabled);

      return isValid;
    }

    validateForm();

    fields.map(function(field){
      $(`#${field}`).change(function(e){
        validateField(field, $(e.target).val());
        showError(field);
        validateForm();
      });
      $(`#${field}`).keyup(function(e){
        validateField(field, $(e.target).val());
        validateForm();
      })
    });
  });
}());
