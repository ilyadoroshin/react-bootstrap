define(["exports", "module", "react", "./utils/cloneWithProps", "./utils/ValidComponentChildren"], function (exports, module, _react, _utilsCloneWithProps, _utilsValidComponentChildren) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var React = _interopRequire(_react);

  var cloneWithProps = _interopRequire(_utilsCloneWithProps);

  var ValidComponentChildren = _interopRequire(_utilsValidComponentChildren);

  var ListGroup = React.createClass({
    displayName: "ListGroup",

    propTypes: {
      onClick: React.PropTypes.func
    },

    render: function render() {
      return React.createElement(
        "div",
        { className: "list-group" },
        ValidComponentChildren.map(this.props.children, this.renderListItem)
      );
    },

    renderListItem: function renderListItem(child, index) {
      return cloneWithProps(child, {
        ref: child.ref,
        key: child.key ? child.key : index
      });
    }
  });

  module.exports = ListGroup;
});