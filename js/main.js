$(function() {
    

    var sending = false;
    $('#contactform').on('submit', function(e) {
        var $form = $(this), $submit = $('input[type="submit"]', $form);

        e.preventDefault();

        if (sending) {
            return false;
        }

        $('.form-error', $form).remove();

        $('input, textarea', $form).prop('readonly', true);
        $submit.val('Wysyłam…');
        sending = true;

        $.post($form.attr('action'), $form.serialize(), function(data) {
            if (data === 'ok') {
                $form.slideUp('fast', function() {
                    $form.after('<span class="glyphicon glyphicon-ok" aria-hidden="true"></span><div class="form-success">Wiadomość została wysłana! Skontaktujemy się z Tobą szybko.</div>');
                });

                return true;
            }

            $form.prepend('<div class="form-error">Wystąpił błąd podczas wysyłania formularza. Upewnij się, że wypełniłeś poprawnie wszystkie pola.</div>');
            $('input, textarea', $form).prop('readonly', false);
            $submit.val('Wyślij wiadomość');
            sending = false;

            return false;
        }, 'text');
    });
});