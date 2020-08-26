// countdown timer
import TimezZ from "timezz";

const timer = new TimezZ(".j-first-timer", {
  date: "Dec 02, 2013 00:00:00",
  text: {
    days: " days",
    hours: " hours",
    minutes: " minutes",
    seconds: " seconds"
  },
  canContinue: true,
  template: "<span>NUMBER</span><i>LETTER</i> "
});

const timer2 = new TimezZ(".j-second-timer", {
  date: "May 27, 1996",

  finished() {
    console.log("finished");
  }
});

const timer3 = new TimezZ(".j-third-timer", {
  date: "Jan 01, 2025",
  template: "<div>NUMBER<span>LETTER</span></div>",

  beforeDestroy() {
    console.log("destroyed");
  }
});

setTimeout(() => {
  timer3.destroy();
}, 10000);



//   include

(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    
    

})(jQuery);