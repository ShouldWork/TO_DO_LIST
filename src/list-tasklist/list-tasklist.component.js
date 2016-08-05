(function() {
    angular.module("toDoApp")
        .component('tasklist', {
            
            templateUrl: "list-tasklist/list-tasklist.component.html",
            controller: tasklistController,
            bindings:{
                task: "<"
            }
        })
        .config(function($stateProvider){
            $stateProvider.state("tasklist",{
                template: "<tasklist></tasklist>",
                url: "/tasklist"
            })
        });
    
    function tasklistController(taskListService){
        var self = this;
        self.pageClass = 'tasklist';
        self.lists = taskListService.lists; 
        self.addList = taskListService.addList;
        self.listTitle = taskListService.title;
        self.activeList = taskListService.activeList;
        self.editListTitle = taskListService.editListTitle;
        self.updateName = taskListService.updateName;
        self.addTask = taskListService.addTask;
        self.flagTask = taskListService.flagTask;
        self.editTask = taskListService.editTask;
        self.finishTask = taskListService.finishTask;
        self.showOptions = showOptions;
        self.selectTask = taskListService.selectTask;
        self.clearAll = taskListService.clearAll;
        self.deleteList = taskListService.deleteList;
        self.deleteTask = taskListService.deleteTask;
        self.taskIconList = taskListService.taskIconList;
        self.closeTaskOptions = taskListService.closeTaskOptions;
        self.updateTaskName = taskListService.updateTaskName;
        function showOptions(task){
            var icons = task.path[1].children[1],
                isIcon = $(icons).hasClass("icon");
            if (!isIcon){
                if ($(icons).css("display") === "none") {
                    $(".iconContainer").slideUp(200);
                    $(icons).slideDown(200);
                } else {
                    $(icons).slideUp(200);
                }
            }
        }
    }
})();