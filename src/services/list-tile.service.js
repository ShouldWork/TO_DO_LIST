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
        self.editListTitle = editListTitle;
        self.lists = [];
        self.listCount = 0;
        self.activeList = 0;
        self.checkStorage = checkStorage;
        self.updateName = updateName;

        function addList(Title) {
            console.log(self.index);
            self.lists.push({
                index: self.listIndex,
                title: Title || "New List",
                taskList: []
            });
            //     taskList: [{
            //         name: "New task",
            //         done: false,
            //         category: "",
            //         highPriority: false
            //     },
            //         {
            //             name: "New task",
            //             done: false,
            //             category: "",
            //             highPriority: false
            //         },
            //         {
            //             name: "New task",
            //             done: false,
            //             category: "",
            //             highPriority: false
            //         }]
            // });
            // localStorage.storedLists = self.lists;
            self.activeList = self.listIndex;
            self.listIndex++;
        }
        function updateName(){
            var newTitle = $("#newTitle"),
                title = $("#listTitle"),
                done_button = $(".done_button"),
                edit_button = $(".edit_button");
            if (newTitle.val() !==""){

                console.log(self.lists[self.activeList] = {
                    title: newTitle.val(),
                    index: self.lists[self.activeList].index,
                    task: self.lists[self.activeList].taskList
                });

                self.listIndex++;
            }
            newTitle.val("");
            newTitle.hide();
            title.show();
            done_button.hide();
            edit_button.show();
        }
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
            console.log(localStorage.getItem('storedLists'));
            return localStorage.getItem('storedLists') !== null;
        }
    }
}());

