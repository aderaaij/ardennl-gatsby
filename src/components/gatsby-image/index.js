/*eslint-disable*/
"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Handle legacy names for image queries.
var convertProps = function convertProps(props) {
  var convertedProps = (0, _extends3.default)({}, props);
  if (convertedProps.responsiveResolution) {
    convertedProps.resolutions = convertedProps.responsiveResolution;
    delete convertedProps.responsiveResolution;
  }
  if (convertedProps.responsiveSizes) {
    convertedProps.sizes = convertedProps.responsiveSizes;
    delete convertedProps.responsiveSizes;
  }

  return convertedProps;
};

// Cache if we've seen an image before so we don't both with
// lazy-loading & fading in on subsequent mounts.
var imageCache = {};
var inImageCache = function inImageCache(props) {
  var convertedProps = convertProps(props);
  // Find src
  var src = convertedProps.sizes ? convertedProps.sizes.src : convertedProps.resolutions.src;

  if (imageCache[src]) {
    return true;
  } else {
    imageCache[src] = true;
    return false;
  }
};

var io = void 0;
var listeners = [];

function getIO() {
  if (typeof io === "undefined" && typeof window !== "undefined" && window.IntersectionObserver) {
    io = new window.IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        listeners.forEach(function (l) {
          if (l[0] === entry.target) {
            // Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              io.unobserve(l[0]);
              l[1]();
            }
          }
        });
      });
    }, { rootMargin: "200px" });
  }

  return io;
}

var listenToIntersections = function listenToIntersections(el, cb) {
  getIO().observe(el);
  listeners.push([el, cb]);
};

var isWebpSupportedCache = null;
var isWebpSupported = function isWebpSupported() {
  if (isWebpSupportedCache !== null) {
    return isWebpSupportedCache;
  }

  var elem = typeof window !== "undefined" ? window.document.createElement("canvas") : {};
  if (elem.getContext && elem.getContext("2d")) {
    isWebpSupportedCache = elem.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  } else {
    isWebpSupportedCache = false;
  }

  return isWebpSupportedCache;
};

var Img = function Img(props) {
  var opacity = props.opacity,
      onLoad = props.onLoad,
      _props$transitionDela = props.transitionDelay,
      transitionDelay = _props$transitionDela === undefined ? "" : _props$transitionDela,
      otherProps = (0, _objectWithoutProperties3.default)(props, ["opacity", "onLoad", "transitionDelay"]);

  return _react2.default.createElement("img", (0, _extends3.default)({}, otherProps, {
    onLoad: onLoad,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      transition: "opacity 0.5s",
      transitionDelay: transitionDelay,
      opacity: opacity,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center"
    }
  }));
};

Img.propTypes = {
  opacity: _propTypes2.default.number,
  transitionDelay: _propTypes2.default.string,
  onLoad: _propTypes2.default.func
};

var Image = function (_React$Component) {
  (0, _inherits3.default)(Image, _React$Component);

  function Image(props) {
    (0, _classCallCheck3.default)(this, Image);

    // If this browser doesn't support the IntersectionObserver API
    // we default to start downloading the image right away.
    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    var isVisible = true;
    var imgLoaded = true;
    var IOSupported = false;

    // If this image has already been loaded before then we can assume it's
    // already in the browser cache so it's cheap to just show directly.
    var seenBefore = inImageCache(props);

    if (!seenBefore && typeof window !== "undefined" && window.IntersectionObserver) {
      isVisible = false;
      imgLoaded = false;
      IOSupported = true;
    }

    // Always don't render image while server rendering
    if (typeof window === "undefined") {
      isVisible = false;
      imgLoaded = false;
    }

    _this.state = {
      isVisible: isVisible,
      imgLoaded: imgLoaded,
      IOSupported: IOSupported
    };

    _this.handleRef = _this.handleRef.bind(_this);
    return _this;
  }

  Image.prototype.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.state.IOSupported && ref) {
      listenToIntersections(ref, function () {
        _this2.setState({ isVisible: true, imgLoaded: false });
      });
    }
  };

  Image.prototype.render = function render() {
    var _this3 = this;

    var _convertProps = convertProps(this.props),
        title = _convertProps.title,
        alt = _convertProps.alt,
        className = _convertProps.className,
        outerWrapperClassName = _convertProps.outerWrapperClassName,
        _convertProps$style = _convertProps.style,
        style = _convertProps$style === undefined ? {} : _convertProps$style,
        sizes = _convertProps.sizes,
        resolutions = _convertProps.resolutions,
        backgroundColor = _convertProps.backgroundColor;

    var bgColor = void 0;
    if (typeof backgroundColor === "boolean") {
      bgColor = "lightgray";
    } else {
      bgColor = backgroundColor;
    }

    if (sizes) {
      var image = sizes;

      // Use webp by default if browser supports it
      if (image.srcWebp && image.srcSetWebp && isWebpSupported()) {
        image.src = image.srcWebp;
        image.srcSet = image.srcSetWebp;
      }

      // The outer div is necessary to reset the z-index to 0.
      return _react2.default.createElement(
        "div",
        {
          className: (outerWrapperClassName ? outerWrapperClassName : "") + " gatsby-image-outer-wrapper",
          style: {
            zIndex: 0,
            // Let users set component to be absolutely positioned.
            position: style.position === "absolute" ? "initial" : "relative"
          }
        },
        _react2.default.createElement(
          "div",
          {
            className: (className ? className : "") + " gatsby-image-wrapper",
            style: (0, _extends3.default)({
              position: "relative",
              overflow: "hidden",
              zIndex: 1
            }, style),
            ref: this.handleRef
          },
          _react2.default.createElement("div", {
            style: {
              width: "100%",
              paddingBottom: 100 / image.aspectRatio + "%"
            }
          }),
          image.base64 && _react2.default.createElement(Img, {
            alt: alt,
            title: title,
            src: image.base64,
            opacity: !this.state.imgLoaded ? 1 : 0,
            transitionDelay: "0.25s"
          }),
          image.tracedSVG && _react2.default.createElement(Img, {
            alt: alt,
            title: title,
            src: image.tracedSVG,
            opacity: !this.state.imgLoaded ? 1 : 0,
            transitionDelay: "0.25s"
          }),
          bgColor && _react2.default.createElement("div", {
            title: title,
            style: {
              backgroundColor: bgColor,
              position: "absolute",
              top: 0,
              bottom: 0,
              opacity: !this.state.imgLoaded ? 1 : 0,
              transitionDelay: "0.35s",
              right: 0,
              left: 0
            }
          }),
          this.state.isVisible && _react2.default.createElement(Img, {
            alt: alt,
            title: title,
            srcSet: image.srcSet,
            src: image.src,
            sizes: image.sizes,
            opacity: this.state.imgLoaded || this.props.fadeIn === false ? 1 : 0,
            onLoad: function onLoad() {
              _this3.state.IOSupported && _this3.setState({ imgLoaded: true });
              _this3.props.onLoad && _this3.props.onLoad();
            }
          }),
          _react2.default.createElement("noscript", {},
            _react2.default.createElement(Img, {
              alt: alt,
              title: title,
              src: image.src,
              srcSet: image.srcSet,
              onLoad: function onLoad() {
                _this3.state.IOSupported && _this3.setState({ imgLoaded: true });
                _this3.props.onLoad && _this3.props.onLoad();
              }
            })
          ),   
        )
      );
    }

    if (resolutions) {
      var _image = resolutions;
      var divStyle = (0, _extends3.default)({
        position: "relative",
        overflow: "hidden",
        display: "inline-block",
        zIndex: 1,
        width: _image.width,
        height: _image.height
      }, style);

      if (style.display === "inherit") {
        delete divStyle.display;
      }

      // Use webp by default if browser supports it
      if (_image.srcWebp && _image.srcSetWebp && isWebpSupported()) {
        _image.src = _image.srcWebp;
        _image.srcSet = _image.srcSetWebp;
      }

      // The outer div is necessary to reset the z-index to 0.
      return _react2.default.createElement(
        "div",
        {
          className: (outerWrapperClassName ? outerWrapperClassName : "") + " gatsby-image-outer-wrapper",
          style: {
            zIndex: 0,
            // Let users set component to be absolutely positioned.
            position: style.position === "absolute" ? "initial" : "relative"
          }
        },
        _react2.default.createElement(
          "div",
          {
            className: (className ? className : "") + " gatsby-image-wrapper",
            style: divStyle,
            ref: this.handleRef
          },
          _image.base64 && _react2.default.createElement(Img, {
            alt: alt,
            title: title,
            src: _image.base64,
            opacity: !this.state.imgLoaded ? 1 : 0,
            transitionDelay: "0.35s"
          }),
          _image.tracedSVG && _react2.default.createElement(Img, {
            alt: alt,
            title: title,
            src: _image.tracedSVG,
            opacity: !this.state.imgLoaded ? 1 : 0,
            transitionDelay: "0.25s"
          }),
          bgColor && _react2.default.createElement("div", {
            title: title,
            style: {
              backgroundColor: bgColor,
              width: _image.width,
              opacity: !this.state.imgLoaded ? 1 : 0,
              transitionDelay: "0.25s",
              height: _image.height
            }
          }),
          _react2.default.createElement("noscript", {},
            _react2.default.createElement("img", {
              alt: alt,
              title: title,
              src: _image.src,
              srcSet: _image.srcSet,
            })
          ),
          this.state.isVisible && _react2.default.createElement(Img, {
            alt: alt,
            title: title,
            width: _image.width,
            height: _image.height,
            srcSet: _image.srcSet,
            src: _image.src,
            opacity: this.state.imgLoaded || this.props.fadeIn === false ? 1 : 0,
            onLoad: function onLoad() {
              _this3.setState({ imgLoaded: true });
              _this3.props.onLoad && _this3.props.onLoad();
            }
          })
        )
      );
    }

    return null;
  };

  return Image;
}(_react2.default.Component);

Image.defaultProps = {
  fadeIn: true,
  alt: ""
};

Image.propTypes = {
  responsiveResolution: _propTypes2.default.object,
  responsiveSizes: _propTypes2.default.object,
  resolutions: _propTypes2.default.object,
  sizes: _propTypes2.default.object,
  fadeIn: _propTypes2.default.bool,
  title: _propTypes2.default.string,
  alt: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]), // Support Glamor's css prop.
  outerWrapperClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  style: _propTypes2.default.object,
  position: _propTypes2.default.string,
  backgroundColor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
  onLoad: _propTypes2.default.func
};

exports.default = Image;