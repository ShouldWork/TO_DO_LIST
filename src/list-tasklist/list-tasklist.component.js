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
        var other = "this";
        self.lists = taskListService.lists; 
        self.addList = taskListService.addList;
        self.listTitle = taskListService.title;
        self.activeList = taskListService.activeList;
        self.editListTitle = taskListService.editListTitle;
        self.updateName = taskListService.updateName;
        self.buttonDisplay = buttonDisplay();
        self.addTask = taskListService.addTask;
        self.flagTask = taskListService.flagTask;
        self.editTask = taskListService.editTask;
        self.finishTask = taskListService.finishTask;
        self.showOptions = showOptions;
        self.selectTask = taskListService.selectTask;
        self.clearAll = taskListService.clearAll;
        self.deleteList = taskListService.deleteList;
        self.deleteTask = taskListService.deleteTask;
        self.taskIconList = [{title: "Fin.", doThis: self.finishTask },{title: "Edit", doThis: self.editTask },{title: "Flag", doThis: self.flagTask },{title: "Delete", doThis: self.deleteTask}];
        function buttonDisplay(){
            var tc = $("#title_container");
            tc.on("click",function(){
                if ($("#newTitle").css("display") === "none"){
                    $(".edit_button").show();
                }
            });
            tc.on("mouseleave",function(){
                $(".edit_button").hide();
            });
        }
        function showOptions(task){
            var icons = task.target.nextSibling.nextSibling.nextSibling;
            $(icons).toggleClass("flex-center");
        }

    }
})();