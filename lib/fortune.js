var fortuneCookies = [
  'fortune 1',
  'fortune 2',
  'fortune 3',
  'fortune 4'
];

exports.getFortune = function () {
  var idx = Math.floor(Math.random() * fortuneCookies.length);
  return fortuneCookies[idx];
};
