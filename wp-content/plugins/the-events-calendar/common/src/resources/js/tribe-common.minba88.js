(String.prototype.className = function () {
  return ("string" != typeof this && !this instanceof String) ||
    "function" != typeof this.replace
    ? this
    : this.replace(".", "");
}),
  (String.prototype.varName = function () {
    return ("string" != typeof this && !this instanceof String) ||
      "function" != typeof this.replace
      ? this
      : this.replace("-", "_");
  });
var tribe = tribe || {};
