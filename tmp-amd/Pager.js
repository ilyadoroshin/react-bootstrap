define(["exports", "module", "react", "./utils/joinClasses", "./utils/cloneWithProps", "./utils/ValidComponentChildren", "./utils/createChainedFunction"], function (exports, module, _react, _utilsJoinClasses, _utilsCloneWithProps, _utilsValidComponentChildren, _utilsCreateChainedFunction) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var React = _interopRequire(_react);

  var joinClasses = _interopRequire(_utilsJoinClasses);

  var cloneWithProps = _interopRequire(_utilsCloneWithProps);

  var ValidComponentChildren = _interopRequire(_utilsValidComponentChildren);

  var createChainedFunction = _interopRequire(_utilsCreateChainedFunction);

  var Pager = React.createClass({
    displayName: "Pager",

    propTypes: {
      onSelect: React.PropTypes.func
    },

    render: function render() {
      return React.createElement(
        "ul",
        _extends({}, this.props, {
          className: joinClasses(this.props.className, "pager") }),
        ValidComponentChildren.map(this.props.children, this.renderPageItem)
      );
    },

    renderPageItem: function renderPageItem(child, index) {
      return cloneWithProps(child, {
        onSelect: createChainedFunction(child.props.onSelect, this.props.onSelect),
        ref: child.ref,
        key: child.key ? child.key : index
      });
    }
  });

  module.exports = Pager;
});