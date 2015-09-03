export default (function () {
    'use strict';
    const CONTENT_MIN_LENGTH = 10,
        CONTENT_MAX_LENGTH = 1200;

    var review = {
        init: function(content, movieId, authorId) {
            var that = this;
            that.content = content;
            that.movieId = movieId;
            that.authorId = authorId;
            return that;
        }
    };

    Object.defineProperty(review, 'content', {
        get: function() {
            return this._content;
        },
        set: function(value) {
            var isValidContent = checkIfValidContent(value);

            if (!isValidContent) {
                throw new Error(`Review must have length between ${CONTENT_MIN_LENGTH} and ${CONTENT_MAX_LENGTH} symbols.`);
            }

            this._content = value;
        }
    });

    return review;

    function checkIfValidContent(content) {
        var contentLen = content.length,
            contentLenIsInRange = contentLen >= CONTENT_MIN_LENGTH && contentLen <= CONTENT_MAX_LENGTH,
            contentTrimmed;

        if (!contentLenIsInRange) {
            return false;
        }

        contentTrimmed = content.trim();

        if (contentTrimmed === '') {
            return false;
        }

        return true;
    }
}());
