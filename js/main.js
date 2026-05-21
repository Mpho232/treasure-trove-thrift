document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const feedbackForm = document.getElementById('feedbackForm');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function (event) {
            if (!feedbackForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                alert('Thank you for reaching out to Treasure Trove Thrift Store! Your submission was successful.');
            }

            feedbackForm.classList.add('was-validated');
        }, false);
    }
});
