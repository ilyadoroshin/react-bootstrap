define(["exports", "module", "react", "./utils/CustomPropTypes"], function (exports, module, _react, _utilsCustomPropTypes) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var React = _interopRequire(_react);

  var CustomPropTypes = _interopRequire(_utilsCustomPropTypes);

  module.exports = {
    propTypes: {
      container: CustomPropTypes.mountable
    },

    getDefaultProps: function getDefaultProps() {
      return {
        container: {
          // Provide `getDOMNode` fn mocking a React component API. The `document.body`
          // reference needs to be contained within this function so that it is not accessed
          // in environments where it would not be defined, e.g. nodejs. Equally this is needed
          // before the body is defined where `document.body === null`, this ensures
          // `document.body` is only accessed after componentDidMount.
          getDOMNode: function getDOMNode() {
            return document.body;
          }
        }
      };
    },

    componentWillUnmount: function componentWillUnmount() {
      this._unrenderOverlay();
      if (this._overlayTarget) {
        this.getContainerDOMNode().removeChild(this._overlayTarget);
        this._overlayTarget = null;
      }
    },

    componentDidUpdate: function componentDidUpdate() {
      this._renderOverlay();
    },

    componentDidMount: function componentDidMount() {
      this._renderOverlay();
    },

    _mountOverlayTarget: function _mountOverlayTarget() {
      this._overlayTarget = document.createElement("div");
      this.getContainerDOMNode().appendChild(this._overlayTarget);
    },

    _renderOverlay: function _renderOverlay() {
      if (!this._overlayTarget) {
        this._mountOverlayTarget();
      }

      var overlay = this.renderOverlay();

      // Save reference to help testing
      if (overlay !== null) {
        this._overlayInstance = React.render(overlay, this._overlayTarget);
      } else {
        // Unrender if the component is null for transitions to null
        this._unrenderOverlay();
      }
    },

    _unrenderOverlay: function _unrenderOverlay() {
      React.unmountComponentAtNode(this._overlayTarget);
      this._overlayInstance = null;
    },

    getOverlayDOMNode: function getOverlayDOMNode() {
      if (!this.isMounted()) {
        throw new Error("getOverlayDOMNode(): A component must be mounted to have a DOM node.");
      }

      if (this._overlayInstance) {
        return this._overlayInstance.getDOMNode();
      }

      return null;
    },

    getContainerDOMNode: function getContainerDOMNode() {
      return this.props.container.getDOMNode ? this.props.container.getDOMNode() : this.props.container;
    }
  };
});