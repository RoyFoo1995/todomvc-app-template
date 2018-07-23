let todoArray = [{ todo: "Buy a unicom", isCompleted: false }];
let todoList;
let newTodo;
let toggleAll;
function initView() {
	todoList = $(".todo-list");
	newTodo = $(".new-todo");
	toggleAll = $(".toggle-all");
	
	addNewTodoLitener();
	addToggleLitener();
	addToggleAllLitener();
	addMoveLitener();
};

function addNewTodoLitener() {
	newTodo.bind('keypress', (event) => {
		if (event.keyCode == "13") {
			addTodo();
		}
	});
}
function addToggleAllLitener() {
	toggleAll.click(() => {
		toggleOnOrOffAllTodo();
	});
}

function addMoveLitener() {
	$(".destroy").each((index, obj) => {
		$(obj).click(() => {
			let liParent = $($(obj).closest("li"));
			liParent.hide();
		});
	});
}

function addToggleLitener() {
	//TODO:
	// $(".toggle").click(() => {
	// 	let completedParent = $($(this).closest("li"));
	// 		if (completedParent.hasClass("completed")) {1
	// 			completedParent.removeClass("completed");
	// 		}else{
	// 			completedParent.addClass("completed");
	// 		}
	// });
	$(".toggle").each((index, obj) => {
		$(obj).click(() => {
			let completedParent = $($(obj).closest("li"));
			if (completedParent.hasClass("completed")) {
				completedParent.removeClass("completed");
			} else {
				completedParent.addClass("completed");
			}
		});
	})
}

//TODO:
function toggleOnOrOffAllTodo() {
	let completedParent = $($(".toggle").parent().parent("li"));
	if (completedParent.hasClass("completed")) {
		completedParent.removeClass("completed");
		$(".todo-list li").removeClass("completed");
	} else {
		completedParent.addClass("completed");
		$(".todo-list li").addClass("completed");
	}
}

function addTodo() {
	let li = $("<li></li>");
	let div = $("<div></div>");
	div.attr("class", "view");
	let input = $("<input></input>")
	input.attr("class", "toggle");
	input.attr("type", "checkbox")
	div.append(input);
	let label = $("<label></label>");
	label.html(newTodo.val());
	div.append(label);
	let button = $("<button></button>")
	button.attr("class", "destroy");
	div.append(button);
	let editInput = $("<input></input>");
	editInput.attr("value", "test");
	li.append(div);
	todoList.append(li);
};

$(document).ready(() => {
	initView();
});



