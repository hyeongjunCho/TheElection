var absoluteLayout_01 = require("tns-core-modules/ui/layouts/absolute-layout").AbsoluteLayout;
Object.defineProperty(exports, "__esModule", { value: true });

const AbsoluteLayout = (function(_super) {
  __extends(AbsoluteLayout, _super);
  function AbsoluteLayout() {
    _super.call(this);
  }

  AbsoluteLayout.prototype.onLoaded = function() {
    _super.prototype.onLoaded.call(this);
    var _this = this;
    
    setTimeout(function() {
      _this.eachChildView(function(view) {
        if(view.customLeft) _this.setCustomLeft(view, view.customLeft);
        if(view.customTop) _this.setCustomTop(view, view.customTop);
      });
    }, 0);
  };

  AbsoluteLayout.prototype.setCustomLeft = function(view, value) {
    var isPercent = typeof value === "string" && value.indexOf("%") >= 0;
    var { width } = this.getActualSize();
    if(isPercent) absoluteLayout_01.setLeft(view, width * (parseFloat(value) / 100));
      else absoluteLayout_01.setLeft(view, value);
  };

  AbsoluteLayout.prototype.setCustomTop = function(view, value) {
    var isPercent = typeof value === "string" && value.indexOf("%") >= 0;
    var { height } = this.getActualSize();
    if(isPercent) absoluteLayout_01.setTop(view, height * (parseFloat(value) / 100));
      else absoluteLayout_01.setTop(view, value);
  };

  return AbsoluteLayout;
})(absoluteLayout_01);

// module.exports = absoluteLayoutModule;
exports.AbsoluteLayout = AbsoluteLayout;