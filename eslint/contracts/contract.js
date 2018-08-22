'use strict';

var crypto = require('crypto.js');
var lodash = require('lodash.js');

var TestContract = function () {

    LocalContractStorage.defineMapProperty(this, "allocation");

    LocalContractStorage.defineMapProperty(this, "allocation");


    LocalContractStorage.defineProperties(this, {
        name: null,
        count: null
    });


    LocalContractStorage.defineMyProperties(this, {
        name: null,
        count: null
    });
    LocalContractStorage.defineMapMyProperty(this, "allocation");


    LocalContractStorage.defineMapProperty(this, {
        name: {

        },
        count: {

        }
    });
};

TestContract.prototype = {
    // init: function () {
    //
    // },
    // A for loop with a stop condition that can never be reached
    forRule: function () {
        // Fail
        for (var i = 0; i < 10; i--) {
        }

        for (var i = 10; i >= 0; i++) {
        }

        // Pass
        for (let i = 0; i < 10; i++) {
            console.log(i);
        }
    },
    // This rule enforces that a return statement is present in property getters.
    getterReturnRule: function () {
        // Fail
        p = {
            get name(){
                // no returns.
            }
        };

        Object.defineProperty(p, "age", {
            get: function (){
                // no returns.
            }
        });

        class P{
            get name(){
                // no returns.
            }
        }

        // Pass
        var p = {
            get name(){
                return "nicholas";
            }
        };

        Object.defineProperty(p, "age", {
            get: function (){
                return 17;
            }
        });
    },
    noSetTimeoutRule: function () {
        setTimeout(function () {

        }, 1000);
        setInterval(function () {

        }, 1000);
    },
    noWindowRule: function () {
        var name = window.name;
    },
    validBlockchainApiRule: function () {

        // Fail
        Blockchain.inValidMethod;
        Blockchain.block.nonce;

        // Pass
        Blockchain.block.coinbase;
        Blockchain.block.hash;
        Blockchain.block.height;
        Blockchain.transaction.from;
        Blockchain.transaction.to;
        Blockchain.transaction.value;
        Blockchain.transaction.nonce;
        Blockchain.transaction.hash;
    },
    validEventRule: function () {
        Event.trigger("transfer", {
            Transfer: {
                from: Blockchain.transaction.to,
                to: Blockchain.transaction.from,
                value: new BigNumber(1000000)
            }
        });
    }

};

// module.exports = TestContract;
