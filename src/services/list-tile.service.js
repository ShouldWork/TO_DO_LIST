(function(){
    // var lists = [];
    // var listindex = 0;
    // var activeList;
    //

    angular.module('toDoApp')
        .service('taskListService',taskListService);
    
    function taskListService($q, $log, $sessionStorage) {
        var self = this;
        self.listIndex = 0;
        self.addList = addList;
        self.editListTitle = editListTitle;
        self.lists = [];
        self.listCount = 0;
        self.activeList = 0;
        self.checkStorage = checkStorage;
        self.updateName = updateName;
        self.addTask = addTask;
        self.editTask = editTask;
        self.finishTask = finishTask;
        self.flagTask = flagTask;

        function finishTask(task){
            
        }

        function addList() {
            var newList = {
                index: self.listIndex,
                title: "New List",
                taskList:[]
            };
            self.lists.push(newList);
            console.log(self.lists);
            self.activeList = self.listIndex;
            self.listIndex++;
            console.log("adding " + newList + " to " + self.lists[self.activeList].title);
        }
        function updateName(keyEvent){
            if (keyEvent.which === 13) {
                var newTitle = $("#newTitle"),
                    title = $("#listTitle"),
                    done_button = $(".done_button"),
                    edit_button = $(".edit_button");
                if (newTitle.val() !== "") {

                    self.lists[self.activeList] = {
                        title: newTitle.val(),
                        index: self.lists[self.activeList].index,
                        taskList: self.lists[self.activeList].taskList
                    };;
                }
                newTitle.val("");
                newTitle.hide();
                title.show();
                done_button.hide();
                edit_button.show();
            }
        }
        function addTask(keyEvent){
            if (keyEvent.which === 13){
                var task = {
                    title: $("#newTask").val(),
                    done: false
                };
                $("#newTask").val("");
                self.lists[self.activeList].taskList.push(task);
            }
        }
        checkStorage();
    }
    function editListTitle(){
        var title = $("#listTitle"),
            edit_button = $(".edit_button"),
            done_button = $(".done_button"),
            newTitle = $("#newTitle");
        title.hide();
        edit_button.hide();
        newTitle.show();
        done_button.show();
        newTitle.focus();
    }

    function checkStorage(){
        {
            return localStorage.getItem('storedLists') !== null;
        }
    }
}());

