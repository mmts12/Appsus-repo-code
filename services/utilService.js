'use strict'

export const utilService = {
    makeId, getRandomIntInclusive, loremEpsom
}

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function loremEpsom() {
    var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et. Non sodales neque sodales ut etiam sit. Sapien  faucibus et molestie ac feugiat sed. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui.  Quis imperdiet massa tincidunt nunc pulvinar sapien. In ante metus dictum at tempor commodo ullamcorper a. Sit   amet venenatis urna cursus eget nunc scelerisque. Ullamcorper dignissim cras tincidunt lobortis feugiat. '
    return lorem;
}
