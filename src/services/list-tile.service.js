(function(){
    // var lists = [];
    // var listindex = 0;
    // var activeList;
    //

    angular.module('toDoApp')
        .service('taskListService',taskListService);
    
    function taskListService($q, $log, $sessionStorage, $localStorage) {
        var self = this;
        self.listIndex = 0;
        self.addList = addList;
        self.editListTitle = editListTitle;
        self.getLists = getLists;
        self.listCount = 0;
        self.activeList = 0;
        self.updateName = updateName;
        self.addTask = addTask;
        self.editTask = editTask;
        self.finishTask = finishTask;
        self.flagTask = flagTask;
        self.clearAll = clearAll;
        self.deleteList = deleteList;
        self.deleteTask = deleteTask;
        self.selectTask = function(task){
            console.log(task);
            self.selectedTask = task;
        };

        function getLists() {
            if ($localStorage.lists !== undefined) {
                console.log("Found in storage " + $localStorage.lists);
                self.lists = $localStorage.lists;
            } else {
                console.log("Didn't find any in storage");
                self.lists = [];
            }
        }

        function finishTask(target){
            var target = target.path[2],
                checked = self.lists[self.activeList].taskList[self.selectedTask].checked;
            $(target).find("span").toggleClass("task_done");
            $(target).find(".flex-center").removeClass("flex-center");
            if (!checked){
                self.lists[self.activeList].taskList[self.selectedTask].checked = true;
            } else {
                self.lists[self.activeList].taskList[self.selectedTask].checked = false;
            }
        }
        function editTask(target){
            self.lists[self.activeList].taskList[self.selectedTask].title = "New title";
            console.log("This though Edit");
        }
        function flagTask(target){

        }
        function clearAll(){
            for (var p = 0; p < self.lists.length; p++){
                for (var t = 0; t < self.lists[p].taskList.length; t++){
                    if (self.lists[p].taskList[t].checked){
                        self.lists[p].taskList[t].done = true;
                    }
                }
            }
        }

        function deleteList(){
            console.log(self.lists);
            console.log("Active list: " + self.activeList);
            self.lists.splice(self.activeList,1);
            console.log(self.lists);
            $sessionStorage.list = self.lists;
        }

        function deleteTask(target){
            console.log($(target));
            self.lists[self.activeList].taskList[self.selectedTask].done = true;
            $(target).find(".flex-center").removeClass("flex-center");
            $sessionStorage.list = self.lists;
        }

        function addList() {
            console.log("THis is adding a list");
            var newList = {
                index: self.listIndex,
                title: "New List",
                taskList:[],
                totalTasks: 0
            };
            self.lists.push(newList);
            console.log("New list");
            $localStorage.lists = self.lists;
            self.activeList = self.listIndex;
            self.listIndex++;
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
                        taskList: self.lists[self.activeList].taskList,
                        totalTasks: self.lists[self.activeList].totalTasks
                    };
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
                if ($("#newTask").val() !==""){
                    console.log("this though");
                    var task = {
                        taskIndex: self.lists[self.activeList].totalTasks,
                        title: $("#newTask").val(),
                        done: false,
                        checked: false,
                    };
                    $("#newTask").val("");
                    self.lists[self.activeList].taskList.push(task);
                    console.log(self.selectedTask = self.lists[self.activeList].totalTasks++);
                    console.log("adding");
                }
            }
        }
        getLists();
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
}());

