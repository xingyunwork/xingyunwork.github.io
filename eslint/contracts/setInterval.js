'use strict';

var SampleContract = function () {
};

SampleContract.prototype = {
    init: function (name, count, allocation) {

    },
    test: function () {

        alert(1);

        console.log(1);

        setInterval(function () {

        }, 1000);
    }
};

module.exports = SampleContract;