(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Batman.UtilityBelt = (function(_super) {
    var fixWidth, log, sortRouteMap;

    __extends(UtilityBelt, _super);

    UtilityBelt.name = 'UtilityBelt';

    function UtilityBelt(app) {
      this.app = app;
    }

    UtilityBelt.prototype.displayRoutes = function() {
      var maxActionLength, maxControllerLength, maxPatternLength, num, routeMap, routesArray, _i, _j, _ref, _ref1;
      routeMap = this.app.get('routes').routeMap.childrenByOrder;
      maxControllerLength = 0;
      maxActionLength = 0;
      maxPatternLength = 0;
      routesArray = [];
      for (num = _i = 0, _ref = routeMap.length - 1; _i <= _ref; num = _i += 1) {
        maxControllerLength = Math.max(routeMap[num].controller.length, maxControllerLength);
        maxActionLength = Math.max(routeMap[num].action.length, maxActionLength);
        maxPatternLength = Math.max(routeMap[num].pattern.length, maxPatternLength);
        routesArray.push(routeMap[num]);
      }
      log('Total number of routes: ' + routeMap.length);
      log(fixWidth('__Controller__', maxControllerLength) + fixWidth('__Action__', maxActionLength) + fixWidth('__Pattern__', maxPatternLength));
      routesArray.sort(sortRouteMap);
      for (num = _j = 0, _ref1 = routeMap.length - 1; _j <= _ref1; num = _j += 1) {
        log(fixWidth(routesArray[num].controller, maxControllerLength) + fixWidth(routesArray[num].action, maxActionLength) + fixWidth(routesArray[num].pattern, maxPatternLength));
      }
    };

    sortRouteMap = function(a, b) {
      if (a.controller < b.controller) {
        return -1;
      }
      if (a.controller > b.controller) {
        return 1;
      }
      if (a.controller === b.controller) {
        if (a.action < b.action) {
          return -1;
        }
        if (a.action > b.action) {
          return 1;
        }
      }
      return 0;
    };

    fixWidth = function(strang, width) {
      width = width + 12;
      return strang + new Array(width - strang.length).join(" ");
    };

    log = function(msg) {
      return typeof console !== "undefined" && console !== null ? console.log(msg) : void 0;
    };

    return UtilityBelt;

  })(Batman.Object);

}).call(this);
