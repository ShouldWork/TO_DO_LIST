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

        function buttonDisplay(){
            $("#listTitle").on("mouseenter",function(){
                console.log("entered")
                $(".edit_button").show();
            })
            $("#title_container").on("mouseleave",function(){
                $(".edit_button").hide();
            })
        }
    }
})();