(function(){
    // var lists = [];
    // var listindex = 0;
    // var activeList;
    //

    angular.module('toDoApp')
        .service('taskListService',taskListService);
    
    function taskListService() {
        var self = this;
        self.listIndex = 0;
        self.addList = addList;
        self.lists = [];
        self.listCount = 0;
        self.activeList = self.listIndex;

        function addList(Title) {
            self.lists.push({
                index: self.listIndex,
                title: Title || "New List",
                taskList: [{
                    name: "New task",
                    done: false,
                    category: "",
                    highPriority: false
                },
                    {
                        name: "New task",
                        done: false,
                        category: "",
                        highPriority: false
                    },
                    {
                        name: "New task",
                        done: false,
                        category: "",
                        highPriority: false
                    }]
            });
            self.activeList = self.listIndex;
            self.listIndex++;
        }
        addList("That");
        addList("Other");
    }
}());

