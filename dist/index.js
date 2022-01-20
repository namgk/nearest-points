"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
var distance = function (a, b) {
    var diffX = a.x - b.x;
    var diffY = a.y - b.y;
    return Math.sqrt(diffX * diffX + diffY * diffY);
};
exports.default = (function (point, points) {
    var minDistance = null;
    var nearestPoint = null;
    points.forEach(function (p) {
        var d = distance(p, point);
        if (minDistance === null || minDistance >= d) {
            minDistance = d;
            nearestPoint = p;
        }
    });
    return [nearestPoint, Math.round(minDistance * 100) / 100];
});
__exportStar(require("./types"), exports);
//# sourceMappingURL=index.js.map