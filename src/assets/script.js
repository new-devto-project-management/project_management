document.addEventListener('DOMContentLoaded', function () {
  let modeSwitch = document.querySelector('.mode-switch');

  modeSwitch.addEventListener('click', function () {                     document.documentElement.classList.toggle('dark');
    modeSwitch.classList.toggle('active');
  });
  
  let listView = document.querySelector('.list-view');
  let gridView = document.querySelector('.grid-view');
  let projectsList = document.querySelector('.project-boxes');
  
  listView.addEventListener('click', function () {
    gridView.classList.remove('active');
    listView.classList.add('active');
    projectsList.classList.remove('jsGridView');
    projectsList.classList.add('jsListView');
  });
  
  gridView.addEventListener('click', function () {
    gridView.classList.add('active');
    listView.classList.remove('active');
    projectsList.classList.remove('jsListView');
    projectsList.classList.add('jsGridView');
  });
  
  document.querySelector('.messages-btn').addEventListener('click', function () {
    document.querySelector('.messages-section').classList.add('show');
  });
  
  document.querySelector('.messages-close').addEventListener('click', function() {
    document.querySelector('.messages-section').classList.remove('show');
  });
});




//  GANTT precess
angular.module("KendoDemo", ["kendo.directives"]);

function MyCtrl($scope) {
  let serviceRoot = "//demos.telerik.com/kendo-ui/service";
  let tasksDataSource = new kendo.data.GanttDataSource({
    batch: false,
    transport: {
      read: {
        url: serviceRoot + "/GanttTasks",
        dataType: "jsonp"
      },
      update: {
        url: serviceRoot + "/GanttTasks/Update",
        dataType: "jsonp"
      },
      destroy: {
        url: serviceRoot + "/GanttTasks/Destroy",
        dataType: "jsonp"
      },
      create: {
        url: serviceRoot + "/GanttTasks/Create",
        dataType: "jsonp"
      },
      parameterMap: function (options, operation) {
        if (operation !== "read") {
          return { models: kendo.stringify(options.models || [options]) };
        }
      }
    },
    schema: {
      model: {
        id: "id",
        fields: {
          id: { from: "ID", type: "number" },
          orderId: {
            from: "OrderID",
            type: "number",
            validation: { required: true }
          },
          parentId: {
            from: "ParentID",
            type: "number",
            defaultValue: null,
            validation: { required: true }
          },
          start: { from: "Start", type: "date" },
          end: { from: "End", type: "date" },
          title: { from: "Title", defaultValue: "", type: "string" },
          percentComplete: { from: "PercentComplete", type: "number" },
          summary: { from: "Summary", type: "boolean" },
          expanded: { from: "Expanded", type: "boolean", defaultValue: true }
        }
      }
    }
  });

  let dependenciesDataSource = new kendo.data.GanttDependencyDataSource({
    transport: {
      read: {
        url: serviceRoot + "/GanttDependencies",
        dataType: "jsonp"
      },
      update: {
        url: serviceRoot + "/GanttDependencies/Update",
        dataType: "jsonp"
      },
      destroy: {
        url: serviceRoot + "/GanttDependencies/Destroy",
        dataType: "jsonp"
      },
      create: {
        url: serviceRoot + "/GanttDependencies/Create",
        dataType: "jsonp"
      },
      parameterMap: function (options, operation) {
        if (operation !== "read" && options.models) {
          return { models: kendo.stringify(options.models) };
        }
      }
    },
    schema: {
      model: {
        id: "id",
        fields: {
          predecessorId: { from: "PredecessorID", type: "number" },
          successorId: { from: "SuccessorID", type: "number" },
          type: { from: "Type", type: "number" }
        }
      }
    }
  });

  $scope.ganttOptions = {
    dataSource: tasksDataSource,
    dependencies: dependenciesDataSource,
    views: ["day", { type: "week", selected: true }, "month"],
    columns: [
      { field: "id", title: "ID", width: 50 },
      { field: "title", title: "Title", editable: true },
      {
        field: "start",
        title: "Start Time",
        format: "{0:MM/dd/yyyy}",
        width: 100
      },
      { field: "end", title: "End Time", format: "{0:MM/dd/yyyy}", width: 100 }
    ],
    showWorkHours: false,
    showWorkDays: false
  };
}
