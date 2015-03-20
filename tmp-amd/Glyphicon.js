define(["exports", "module", "react", "./utils/joinClasses", "./utils/classSet", "./BootstrapMixin", "./constants"], function (exports, module, _react, _utilsJoinClasses, _utilsClassSet, _BootstrapMixin, _constants) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var React = _interopRequire(_react);

  var joinClasses = _interopRequire(_utilsJoinClasses);

  var classSet = _interopRequire(_utilsClassSet);

  var BootstrapMixin = _interopRequire(_BootstrapMixin);

  var constants = _interopRequire(_constants);

  var Glyphicon = React.createClass({
    displayName: "Glyphicon",

    mixins: [BootstrapMixin],

    propTypes: {
      glyph: React.PropTypes.oneOf(constants.GLYPHS).isRequired
    },

    getDefaultProps: function getDefaultProps() {
      return {
        bsClass: "glyphicon"
      };
    },

    render: function render() {
      var classes = this.getBsClassSet();

      classes["glyphicon-" + this.props.glyph] = true;

      return React.createElement(
        "span",
        _extends({}, this.props, { className: joinClasses(this.props.className, classSet(classes)) }),
        this.props.children
      );
    }
  });

  module.exports = Glyphicon;
});