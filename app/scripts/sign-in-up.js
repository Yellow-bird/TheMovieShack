import {submitSignIn, submitSignUp} from 'scripts/controllers/sign-in-up-events.js';

export function renderSignForm() {
    'use strict';
    var currentUser = Parse.User.current(),
        $mainContent = $('#main-content');

    if (currentUser !== null) {
        $mainContent.html('You are already signed in.');
        return;
    }

    $.ajax('./templates/sign-form.html', {
        success: function(partialHtml) {
            $mainContent.html(partialHtml);
            submitSignIn();
            submitSignUp();
        }
    });
}
