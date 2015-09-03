import {submitSignIn, submitSignUp} from 'scripts/controllers/sign-in-up-events.js';
import data from 'scripts/controllers/data.js';

export function renderSignForm() {
    'use strict';
    var userIsSignedIn = data.users.signedIn(),
        $mainContent = $('#main-content');

    if (userIsSignedIn) {
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
