define(["exports", "module", "react", "./utils/joinClasses", "./utils/classSet", "./BootstrapMixin"], function (exports, module, _react, _utilsJoinClasses, _utilsClassSet, _BootstrapMixin) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var React = _interopRequire(_react);

  var joinClasses = _interopRequire(_utilsJoinClasses);

  var classSet = _interopRequire(_utilsClassSet);

  var BootstrapMixin = _interopRequire(_BootstrapMixin);

  var ButtonGroup = React.createClass({
    displayName: "ButtonGroup",

    mixins: [BootstrapMixin],

    propTypes: {
      vertical: React.PropTypes.bool,
      justified: React.PropTypes.bool
    },

    getDefaultProps: function getDefaultProps() {
      return {
        bsClass: "button-group"
      };
    },

    render: function render() {
      var classes = this.getBsClassSet();
      classes["btn-group"] = !this.props.vertical;
      classes["btn-group-vertical"] = this.props.vertical;
      classes["btn-group-justified"] = this.props.justified;

      return React.createElement(
        "div",
        _extends({}, this.props, {
          className: joinClasses(this.props.className, classSet(classes)) }),
        this.props.children
      );
    }
  });

  module.exports = ButtonGroup;
});