define(["exports", "module", "react", "./utils/joinClasses", "./BootstrapMixin", "./utils/classSet", "./utils/cloneWithProps"], function (exports, module, _react, _utilsJoinClasses, _BootstrapMixin, _utilsClassSet, _utilsCloneWithProps) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var React = _interopRequire(_react);

  var joinClasses = _interopRequire(_utilsJoinClasses);

  var BootstrapMixin = _interopRequire(_BootstrapMixin);

  var classSet = _interopRequire(_utilsClassSet);

  var cloneWithProps = _interopRequire(_utilsCloneWithProps);

  var ListGroupItem = React.createClass({
    displayName: "ListGroupItem",

    mixins: [BootstrapMixin],

    propTypes: {
      bsStyle: React.PropTypes.oneOf(["danger", "info", "success", "warning"]),
      active: React.PropTypes.any,
      disabled: React.PropTypes.any,
      header: React.PropTypes.node,
      onClick: React.PropTypes.func,
      eventKey: React.PropTypes.any,
      href: React.PropTypes.string,
      target: React.PropTypes.string
    },

    getDefaultProps: function getDefaultProps() {
      return {
        bsClass: "list-group-item"
      };
    },

    render: function render() {
      var classes = this.getBsClassSet();

      classes.active = this.props.active;
      classes.disabled = this.props.disabled;

      if (this.props.href || this.props.target || this.props.onClick) {
        return this.renderAnchor(classes);
      } else {
        return this.renderSpan(classes);
      }
    },

    renderSpan: function renderSpan(classes) {
      return React.createElement(
        "span",
        _extends({}, this.props, { className: joinClasses(this.props.className, classSet(classes)) }),
        this.props.header ? this.renderStructuredContent() : this.props.children
      );
    },

    renderAnchor: function renderAnchor(classes) {
      return React.createElement(
        "a",
        _extends({}, this.props, {
          className: joinClasses(this.props.className, classSet(classes))
        }),
        this.props.header ? this.renderStructuredContent() : this.props.children
      );
    },

    renderStructuredContent: function renderStructuredContent() {
      var header = undefined;
      if (React.isValidElement(this.props.header)) {
        header = cloneWithProps(this.props.header, {
          className: "list-group-item-heading"
        });
      } else {
        header = React.createElement(
          "h4",
          { className: "list-group-item-heading" },
          this.props.header
        );
      }

      var content = React.createElement(
        "p",
        { className: "list-group-item-text" },
        this.props.children
      );

      return {
        header: header,
        content: content
      };
    }
  });

  module.exports = ListGroupItem;
});