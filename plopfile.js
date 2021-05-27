const generateComponent = require('./generate/react-component/react-component');

module.exports = function (plop) {
  plop.setGenerator('react-component', generateComponent);
};
