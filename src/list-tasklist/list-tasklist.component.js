(function() {
    angular.module("toDoApp")
        .component('tasklist', {
            
            templateUrl: "list-tasklist/list-tasklist.component.html",
            controller: tasklistController
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
        self.taskIconList = [{title: "Fin.", doThis: self.finishTask},{title: "Edit", dothis: self.editTask},{title: "Flag", doThis: self.flagTask];
        self.showOptions = showOptions;

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
            var icons = task.target.nextSibling.nextSibling;
            $(icons).toggleClass("flex-center");
        }
    }
})();