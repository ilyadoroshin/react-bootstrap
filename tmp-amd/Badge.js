define(["exports", "module", "react", "./utils/joinClasses", "./utils/ValidComponentChildren", "./utils/classSet"], function (exports, module, _react, _utilsJoinClasses, _utilsValidComponentChildren, _utilsClassSet) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var React = _interopRequire(_react);

  var joinClasses = _interopRequire(_utilsJoinClasses);

  var ValidComponentChildren = _interopRequire(_utilsValidComponentChildren);

  var classSet = _interopRequire(_utilsClassSet);

  var Badge = React.createClass({
    displayName: "Badge",

    propTypes: {
      pullRight: React.PropTypes.bool
    },

    hasContent: function hasContent() {
      return ValidComponentChildren.hasValidComponent(this.props.children) || typeof this.props.children === "string" || typeof this.props.children === "number";
    },

    render: function render() {
      var classes = {
        "pull-right": this.props.pullRight,
        badge: this.hasContent()
      };
      return React.createElement(
        "span",
        _extends({}, this.props, {
          className: joinClasses(this.props.className, classSet(classes)) }),
        this.props.children
      );
    }
  });

  module.exports = Badge;
});