(function(){
    // var lists = [];
    // var listindex = 0;
    // var activeList;
    //

    angular.module('toDoApp')
        .service('taskListService',taskListService);
    
    function taskListService($q, $log, $sessionStorage, $localStorage) {
        var self = this;

        self.addList = addList;
        self.editListTitle = editListTitle;
        self.getLists = getLists;
        self.activeList = 0;
        self.updateName = updateName;
        self.addTask = addTask;
        self.editTask = editTask;
        self.finishTask = finishTask;
        self.flagTask = flagTask;
        self.clearAll = clearAll;
        self.deleteList = deleteList;
        self.deleteTask = deleteTask;
        self.checkList = checkList;
        self.star = star;
        self.deleteButton = deleteButton;
        self.taskIconList = [{title: "", doThis: self.finishTask, class: "icon_finish"},{title: "", doThis: self.editTask, class: "icon_edit"},{title: "", doThis: self.flagTask, class: "icon_flag"},{title: "", doThis: self.deleteTask, class: "icon_delete"}];
        self.buttonlist = [{title: "Lists",route: "list-tile", doThis: self.doNothing,class: "lists_button"},{title: "New List", route: "list-tile", doThis: self.addList, class: "add_button_small"}];
        self.selectTask = function(task){
            self.selectedTask = task;
        };
        function star(list,target){
            var el = target.path[0],
                favorite = self.lists[list].properties.favorite;
            event.stopPropagation();
            $(el).toggleClass("unstar").toggleClass("star");
            self.lists[list].properties.favorite = (favorite) ? false : true;
        }
        function checkList(list,target){
            var el = target.path[0],
                stage = self.lists[list].properties.staged;
            event.stopPropagation();
            $(el).toggleClass("uncheck_mark").toggleClass("check_mark");
            self.lists[list].properties.staged = (stage) ? false : true;
        }

        function getLists() {
            if ($localStorage.lists !== undefined) {
                self.lists = $localStorage.lists;
                self.listIndex = self.lists.length;
            } else {
                self.lists = [];
                self.listIndex = 0;
            }
        }

        function deleteButton(list,target){
            var el = target.path[0];
            event.stopPropagation();
            self.activeList = list;
            deleteList()
        }

        function finishTask(target,task){
            var target = target.path[2],
                checked = self.lists[self.activeList].taskList[task].checked;
            self.lists[self.activeList].taskList[task].checked = (!checked) ? true : false;
            $(target).parent().slideToggle();
        }
        function editTask(target,task){
            var target = target.path[2];
            self.lists[self.activeList].taskList[task].title = "New title";
            $(target).parent().slideToggle();
        }
        function flagTask(target,task){
            // var target = target.path[2];
            var important = self.lists[self.activeList].taskList[task].important;
            self.lists[self.activeList].taskList[task].important = (!important) ? true : false;
            $(target).parent().slideToggle();
            console.log("task: " + task + " target " + target.target.path);
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
            self.lists[self.activeList].properties.display = false;
            $sessionStorage.list = self.lists;
        }

        function deleteTask(target,task){
            var target = target.path[1];
            $(target).hide();
            self.lists[self.activeList].taskList[task].done = true;
            $sessionStorage.list = self.lists;
        }

        function addList() {
            console.log("This is adding a list");
            var newList = {
                properties: {
                    index: self.listIndex,
                    display: true,
                    staged: false,
                    totalTasks: 0,
                    favorite: false
                },
                title: "New List",
                taskList:[]
            };
            self.lists.push(newList);
            $localStorage.lists = self.lists;
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
                        properties: self.lists[activeList].properties,
                        title: newTitle.val(),
                        taskList: self.lists[self.activeList].taskList
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
                    var task = {
                        taskIndex: self.lists[self.activeList].properties.totalTasks,
                        title: $("#newTask").val(),
                        done: false,
                        checked: false,
                        important: false
                    };
                    $("#newTask").val("");
                    self.lists[self.activeList].taskList.push(task);
                    self.selectedTask = self.lists[self.activeList].properties.totalTasks++;
                }
            }
        }
        getLists();
    }
    function editListTitle(list){
        self.activeList = list;
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

