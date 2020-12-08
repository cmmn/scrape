export const constructor = function (): void {
  this.data = [];
};

constructor.prototype.add = function (record) {
  this.data.unshift(record);
};

constructor.prototype.remove = function () {
  this.data.pop();
};

constructor.prototype.first = function () {
  return this.data[0];
};

constructor.prototype.last = function () {
  return this.data[this.data.length - 1];
};

constructor.prototype.size = function () {
  return this.data.length;
};
