"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VanillaJSGrid = void 0;
var throttle_debounce_1 = require("throttle-debounce");
var js_fetch_api_1 = require("@giphy/js-fetch-api");
var js_components_1 = require("@giphy/js-components");
var getWidth = function () { return window.innerWidth; };
var gf = new js_fetch_api_1.GiphyFetch("adb9e73d-136a-4839-b6d0-21344296efa3");
var searchValue = "test";
// paginator
var fetchGifs = function (offset) { return gf.search(searchValue, { offset: offset, limit: 10 }); };
var VanillaJSGrid = /** @class */ (function () {
    function VanillaJSGrid(mountNode, serachQuery) {
        var _this = this;
        this.render = function () {
            var width = getWidth();
            _this.el = (0, js_components_1.renderGrid)({
                width: width,
                fetchGifs: fetchGifs,
                columns: width < 500 ? 2 : 3,
                gutter: 6,
                user: {}
            }, _this.mountNode);
        };
        searchValue = serachQuery;
        this.mountNode = mountNode;
        var resizeRender = (0, throttle_debounce_1.throttle)(500, function () { return _this.render(); });
        window.addEventListener("resize", resizeRender, false);
        this.render();
    }
    VanillaJSGrid.prototype.remove = function () {
        this.el.parentNode.removeChild(this.el);
    };
    return VanillaJSGrid;
}());
exports.VanillaJSGrid = VanillaJSGrid;
//# sourceMappingURL=grid.js.map