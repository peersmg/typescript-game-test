"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Game = function Game() {
  var _this$canvasCtx;

  _classCallCheck(this, Game);

  _defineProperty(this, "area", void 0);

  _defineProperty(this, "canvasCtx", void 0);

  this.area = document.createElement("CANVAS");
  document.body.insertBefore(this.area, null);
  this.canvasCtx = this.area.getContext("2d");
  this.area.style.position = 'absolute';
  this.area.style.left = "0px";
  this.area.style.top = "0px";
  this.area.style.padding = "0px";
  document.documentElement.style.overflow = 'hidden'; // firefox, chrome

  this.area.width = window.innerWidth;
  this.area.height = window.innerHeight;

  if (this.canvasCtx) {
    this.canvasCtx.fillStyle = 'red';
  }

  (_this$canvasCtx = this.canvasCtx) === null || _this$canvasCtx === void 0 ? void 0 : _this$canvasCtx.fillRect(0, 0, this.area.width, this.area.height);
};

var game = new Game();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lLnRzIl0sIm5hbWVzIjpbIkdhbWUiLCJhcmVhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImluc2VydEJlZm9yZSIsImNhbnZhc0N0eCIsImdldENvbnRleHQiLCJzdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsInBhZGRpbmciLCJkb2N1bWVudEVsZW1lbnQiLCJvdmVyZmxvdyIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJnYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsSSxHQUdGLGdCQUFjO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ1YsT0FBS0MsSUFBTCxHQUErQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQS9CO0FBQ0FELEVBQUFBLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxZQUFkLENBQTJCLEtBQUtKLElBQWhDLEVBQXNDLElBQXRDO0FBQ0EsT0FBS0ssU0FBTCxHQUFpQixLQUFLTCxJQUFMLENBQVVNLFVBQVYsQ0FBcUIsSUFBckIsQ0FBakI7QUFFQSxPQUFLTixJQUFMLENBQVVPLEtBQVYsQ0FBZ0JDLFFBQWhCLEdBQTJCLFVBQTNCO0FBQ0EsT0FBS1IsSUFBTCxDQUFVTyxLQUFWLENBQWdCRSxJQUFoQixHQUF1QixLQUF2QjtBQUNBLE9BQUtULElBQUwsQ0FBVU8sS0FBVixDQUFnQkcsR0FBaEIsR0FBc0IsS0FBdEI7QUFDQSxPQUFLVixJQUFMLENBQVVPLEtBQVYsQ0FBZ0JJLE9BQWhCLEdBQTBCLEtBQTFCO0FBRUFWLEVBQUFBLFFBQVEsQ0FBQ1csZUFBVCxDQUF5QkwsS0FBekIsQ0FBK0JNLFFBQS9CLEdBQTBDLFFBQTFDLENBVlUsQ0FVMkM7O0FBRXJELE9BQUtiLElBQUwsQ0FBVWMsS0FBVixHQUFrQkMsTUFBTSxDQUFDQyxVQUF6QjtBQUNBLE9BQUtoQixJQUFMLENBQVVpQixNQUFWLEdBQW1CRixNQUFNLENBQUNHLFdBQTFCOztBQUVBLE1BQUcsS0FBS2IsU0FBUixFQUFtQjtBQUNmLFNBQUtBLFNBQUwsQ0FBZWMsU0FBZixHQUEyQixLQUEzQjtBQUNIOztBQUNELDBCQUFLZCxTQUFMLG9FQUFnQmUsUUFBaEIsQ0FBeUIsQ0FBekIsRUFBMkIsQ0FBM0IsRUFBNkIsS0FBS3BCLElBQUwsQ0FBVWMsS0FBdkMsRUFBNkMsS0FBS2QsSUFBTCxDQUFVaUIsTUFBdkQ7QUFDSCxDOztBQUdMLElBQU1JLElBQUksR0FBRyxJQUFJdEIsSUFBSixFQUFiIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR2FtZSB7XHJcbiAgICBhcmVhOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIGNhbnZhc0N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYXJlYSA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQ0FOVkFTXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKHRoaXMuYXJlYSwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNDdHggPSB0aGlzLmFyZWEuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmFyZWEuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIHRoaXMuYXJlYS5zdHlsZS5sZWZ0ID0gXCIwcHhcIlxyXG4gICAgICAgIHRoaXMuYXJlYS5zdHlsZS50b3AgPSBcIjBweFwiXHJcbiAgICAgICAgdGhpcy5hcmVhLnN0eWxlLnBhZGRpbmcgPSBcIjBweFwiXHJcblxyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nOyAgLy8gZmlyZWZveCwgY2hyb21lXHJcblxyXG4gICAgICAgIHRoaXMuYXJlYS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuYXJlYS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuY2FudmFzQ3R4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzQ3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbnZhc0N0eD8uZmlsbFJlY3QoMCwwLHRoaXMuYXJlYS53aWR0aCx0aGlzLmFyZWEuaGVpZ2h0KTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7Il19