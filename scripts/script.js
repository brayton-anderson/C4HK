$(document).ready(function() {
    // navbar acitve
    // var btnContainer = document.getElementById("navbar ");
    // var btns = btnContainer.getElementsByClassName(".menu-nav");

    // for (var i = 0; i < btns.length; i++) {
    //     btns[i].addEventListener('click', function() {
    //         var current = document.getElementsByClassName("active");
    //         current[0].className = current[0].className.replace("active");
    //         this.className += "active";
    //     });
    // }

    var counter = 1;
    setInterval(function() {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 4) {
            counter = 1;
        }
    }, 5000);


    // number countup
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 5000;

    valueDisplays.forEach(valueDisplay => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-Val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function() {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
            }
        }, duration);
    });

    //   owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });



    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar-second .menu-nav').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar-second').addClass("sticky");
        } else {
            $('.navbar-second').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }

    });



    // slide up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    });


    // CREDIT CARD
    input_credit_card = function(input) {
        var format_and_pos = function(char, backspace) {
            var start = 0;
            var end = 0;
            var pos = 0;
            var separator = " ";
            var value = input.value;

            if (char !== false) {
                start = input.selectionStart;
                end = input.selectionEnd;

                if (backspace && start > 0) // handle backspace onkeydown
                {
                    start--;

                    if (value[start] == separator) { start--; }
                }
                // To be able to replace the selection if there is one
                value = value.substring(0, start) + char + value.substring(end);

                pos = start + char.length; // caret position
            }

            var d = 0; // digit count
            var dd = 0; // total
            var gi = 0; // group index
            var newV = "";
            var groups = /^\D*3[47]/.test(value) ? // check for American Express
                [4, 6, 5] : [4, 4, 4, 4];

            for (var i = 0; i < value.length; i++) {
                if (/\D/.test(value[i])) {
                    if (start > i) { pos--; }
                } else {
                    if (d === groups[gi]) {
                        newV += separator;
                        d = 0;
                        gi++;

                        if (start >= i) { pos++; }
                    }
                    newV += value[i];
                    d++;
                    dd++;
                }
                if (d === groups[gi] && groups.length === gi + 1) // max length
                { break; }
            }
            input.value = newV;

            if (char !== false) { input.setSelectionRange(pos, pos); }
        };

        input.addEventListener('keypress', function(e) {
            var code = e.charCode || e.keyCode || e.which;

            // Check for tab and arrow keys (needed in Firefox)
            if (code !== 9 && (code < 37 || code > 40) &&
                // and CTRL+C / CTRL+V
                !(e.ctrlKey && (code === 99 || code === 118))) {
                e.preventDefault();

                var char = String.fromCharCode(code);

                // if the character is non-digit
                // OR
                // if the value already contains 15/16 digits and there is no selection
                // -> return false (the character is not inserted)

                if (/\D/.test(char) || (this.selectionStart === this.selectionEnd &&
                        this.value.replace(/\D/g, '').length >=
                        (/^\D*3[47]/.test(this.value) ? 15 : 16))) // 15 digits if Amex
                {
                    return false;
                }
                format_and_pos(char);
            }
        });

        // backspace doesn't fire the keypress event
        input.addEventListener('keydown', function(e) {
            if (e.keyCode === 8 || e.keyCode === 46) // backspace or delete
            {
                e.preventDefault();
                format_and_pos('', this.selectionStart === this.selectionEnd);
            }
        });

        input.addEventListener('paste', function() {
            // A timeout is needed to get the new value pasted
            setTimeout(function() { format_and_pos(''); }, 50);
        });

        input.addEventListener('blur', function() {
            // reformat onblur just in case (optional)
            format_and_pos(this, false);
        });

        // append card number to virtual
        input.addEventListener('keyup', function() {
            document.getElementById('card-number').innerHTML = this.value;
        })
    };

    input_credit_card(document.getElementById('credit-card'));

    // append date name input
    document.getElementById('card-name').addEventListener('keyup', function() {
        document.querySelector('.name-holder').innerHTML = this.value;
    });
    document.getElementById('exp-month').addEventListener('keyup', function() {
        document.querySelector('.expiry-month').innerHTML = this.value;
    });
    document.getElementById('exp-year').addEventListener('keyup', function() {
        document.querySelector('.expiry-year').innerHTML = this.value;
    });
    document.getElementById('amount').addEventListener('keyup', function() {
        document.querySelector('.price').innerHTML = this.value;
    });
    document.getElementById('amount').addEventListener('keyup', function() {
        document.querySelector('.pay').innerHTML = this.value;
    });


    // date min and max value



});