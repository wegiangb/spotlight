var DashboardController  = require('./controllers/dashboard');
var ErrorController      = require('./controllers/error');

var AvailabilityModule            = require('./modules/availability');
var BarChartWithNumberModule      = require('./modules/bar_chart_with_number');
var ColumnModule                  = require('./modules/column');
var ApplicationsModule            = require('./modules/applications');
var ComparisonModule              = require('./modules/comparison');
var CompletionRateModule          = require('./modules/completion_rate');
var CompletionTableModule         = require('./modules/completion-table');
var GroupedTimeseriesModule       = require('./modules/grouped_timeseries');
var JourneyModule                 = require('./modules/journey');
var KPIModule                     = require('./modules/kpi');
var ListModule                    = require('./modules/list');
var TimeseriesModule              = require('./modules/single-timeseries');
var TabModule                     = require('./modules/tab');
var TableModule                   = require('./modules/table');
var UserSatisfactionModule        = require('./modules/user_satisfaction');
var UserSatisfactionGraphModule   = require('./modules/user_satisfaction_graph');
var VisitorsRealtimeModule        = require('./modules/visitors-realtime');
var HeadlineFigureModule          = require('./modules/headline-figure');
var SectionModule                 = require('./modules/section');

module.exports = function () {
  return {
    dashboard: DashboardController,
    error: ErrorController,
    modules: {
      availability:           AvailabilityModule,
      bar_chart_with_number:  BarChartWithNumberModule,
      column:                 ColumnModule,
      applications:           ApplicationsModule,
      comparison:             ComparisonModule,
      completion_rate:        CompletionRateModule,
      completion_table:       CompletionTableModule,
      grouped_timeseries:     GroupedTimeseriesModule,
      journey:                JourneyModule,
      kpi:                    KPIModule,
      list:                   ListModule,
      single_timeseries:      TimeseriesModule,
      tab:                    TabModule,
      table:                  TableModule,
      user_satisfaction:      UserSatisfactionModule,
      user_satisfaction_graph: UserSatisfactionGraphModule,
      realtime:               VisitorsRealtimeModule,
      headline_figure:        HeadlineFigureModule,
      section:                SectionModule
    },
    browse: true
  };
};
