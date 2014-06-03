var requirejs = require('requirejs');

var template = requirejs('tpl!common/templates/visualisations/completion_rate.html');
var View = requirejs('common/views/visualisations/completion_rate');

module.exports = View.extend({

  template: template,

  views: function () {
    var views = View.prototype.views.apply(this, arguments);
    delete views['.volumetrics-completion'];
    return views;
  },

  templateContext: function () {
    return {
      fallbackUrl: this.url ? (this.url + '.png') : null
    };
  }

});