define(["exports", "module", "react", "./OverlayMixin", "./utils/cloneWithProps", "./utils/createChainedFunction"], function (exports, module, _react, _OverlayMixin, _utilsCloneWithProps, _utilsCreateChainedFunction) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var React = _interopRequire(_react);

  var OverlayMixin = _interopRequire(_OverlayMixin);

  var cloneWithProps = _interopRequire(_utilsCloneWithProps);

  var createChainedFunction = _interopRequire(_utilsCreateChainedFunction);

  var ModalTrigger = React.createClass({
    displayName: "ModalTrigger",

    mixins: [OverlayMixin],

    propTypes: {
      modal: React.PropTypes.node.isRequired
    },

    getInitialState: function getInitialState() {
      return {
        isOverlayShown: false
      };
    },

    show: function show() {
      this.setState({
        isOverlayShown: true
      });
    },

    hide: function hide() {
      this.setState({
        isOverlayShown: false
      });
    },

    toggle: function toggle() {
      this.setState({
        isOverlayShown: !this.state.isOverlayShown
      });
    },

    renderOverlay: function renderOverlay() {
      if (!this.state.isOverlayShown) {
        return React.createElement("span", null);
      }

      return cloneWithProps(this.props.modal, {
        onRequestHide: this.hide
      });
    },

    render: function render() {
      var child = React.Children.only(this.props.children);
      return cloneWithProps(child, {
        onClick: createChainedFunction(child.props.onClick, this.toggle)
      });
    }
  });

  module.exports = ModalTrigger;
});