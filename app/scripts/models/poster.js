export default (function () {
    'use strict';
    const MAX_WIDTH_IN_PX = 400,
        MIN_WIDTH_IN_PX = 180,
        MAX_HEIGHT_IN_PX = 620,
        MIN_HEIGHT_IN_PX = 280;

    var poster = {
        init: function(url, width, height) {
            var that = this,
                width = width || MIN_WIDTH_IN_PX,
                height = height || MIN_HEIGHT_IN_PX;

            that.url = url;
            that.width = width;
            that.height = height;
            return that;
        }
    };

    Object.defineProperty(poster, 'url', {
        get: function() {
            return this._url;
        },
        set: function(value) {
            var urlIsValid = checkIfValidImageUrl(value);

            if (!urlIsValid) {
                throw new Error('Invalid image url.');
            }

            this._url = value;
        }
    });

    Object.defineProperty(poster, 'width', {
        get: function() {
            return this._width;
        },
        set: function(value) {
            var widthIsInRange = value >= MIN_WIDTH_IN_PX && value <= MAX_WIDTH_IN_PX;

            if (!widthIsInRange) {
                value = MIN_WIDTH_IN_PX;
            }

            this._width = value;
        }
    });

    Object.defineProperty(poster, 'height', {
        get: function() {
            return this._height;
        },
        set: function(value) {
            var heightIsInRange = value >= MIN_HEIGHT_IN_PX && value <= MAX_HEIGHT_IN_PX;

            if (!heightIsInRange) {
                value = MIN_HEIGHT_IN_PX;
            }

            this._height = value;
        }
    });

    return poster;

    function checkIfValidImageUrl(url) {
        return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }
}());
