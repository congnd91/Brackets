/*
The MIT License (MIT)

Copyright (c) 2015 HTML5andBeyond.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

define(function (require, exports, module) {
	"use strict";

	var CommandManager = brackets.getModule("command/CommandManager"),
		EditorManager = brackets.getModule("editor/EditorManager"),
		Menus = brackets.getModule("command/Menus");

	// Fixes indentation problem while adding snippets
	function fixIndent(editor, spaces) {
		for (var i = 0; i < spaces; i++) {
			editor.document.replaceRange(' ', editor.getCursorPos());
		}
	}

	function handlejQueryDocReady() {
		var editor = EditorManager.getFocusedEditor();
		if (editor) {
			var spaces = editor.getColOffset(editor.getCursorPos());
			editor.document.replaceRange('jQuery(document).ready(function($){\n\n', editor.getCursorPos());
			fixIndent(editor, spaces);
			editor.document.replaceRange('});\n', editor.getCursorPos());
		}
	}

	function handleDocReady() {
		var editor = EditorManager.getFocusedEditor();
		if (editor) {
			var spaces = editor.getColOffset(editor.getCursorPos());
			editor.document.replaceRange('$(document).ready(function($){\n\n', editor.getCursorPos());
			fixIndent(editor, spaces);
			editor.document.replaceRange('});\n', editor.getCursorPos());
		}
	}

	function handleWinResize() {
		var editor = EditorManager.getFocusedEditor();
		if (editor) {
			var spaces = editor.getColOffset(editor.getCursorPos());
			editor.document.replaceRange('$(window).resize(function($){\n\n', editor.getCursorPos());
			fixIndent(editor, spaces);
			editor.document.replaceRange('});\n', editor.getCursorPos());
		}
	}

	function handleClickFunc() {
		var editor = EditorManager.getFocusedEditor();
		if (editor) {
			var spaces = editor.getColOffset(editor.getCursorPos());
			editor.document.replaceRange('$(/*selector*/).on("click", function(){\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('/*Function*/\n', editor.getCursorPos());
			fixIndent(editor, spaces);
			editor.document.replaceRange('});\n', editor.getCursorPos());
		}
	}

	function handleHoverFunc() {
		var editor = EditorManager.getFocusedEditor();
		if (editor) {
			var spaces = editor.getColOffset(editor.getCursorPos());
			editor.document.replaceRange('$(/*selector*/).hover(\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('function() {\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('/* Function One */\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('},\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('function() {\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('/*Function Two */\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('}\n', editor.getCursorPos());
			fixIndent(editor, spaces);
			editor.document.replaceRange(');\n', editor.getCursorPos());
		}
	}

	function handleEachArrFunc() {
		var editor = EditorManager.getFocusedEditor();
		if (editor) {
			var spaces = editor.getColOffset(editor.getCursorPos());
			editor.document.replaceRange('$.each(/* ARRAY */, function( index, value ) {\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('/* Function */\n', editor.getCursorPos());
			fixIndent(editor, spaces);
			editor.document.replaceRange('});\n', editor.getCursorPos());
		}
	}

	function handleEachFunc() {
		var editor = EditorManager.getFocusedEditor();
		if (editor) {
			var spaces = editor.getColOffset(editor.getCursorPos());
			editor.document.replaceRange('$(/*selector*/).each(function(){\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('/* Function */\n', editor.getCursorPos());
			fixIndent(editor, spaces);
			editor.document.replaceRange('});\n', editor.getCursorPos());
		}
	}

	function handlejsSelfFunc() {
		var editor = EditorManager.getFocusedEditor();
		if (editor) {
			var spaces = editor.getColOffset(editor.getCursorPos());
			editor.document.replaceRange('(function() {\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('/* Function */\n', editor.getCursorPos());
			fixIndent(editor, spaces);
			editor.document.replaceRange('})();\n', editor.getCursorPos());
		}
	}

	function handlejsClickId() {
		var editor = EditorManager.getFocusedEditor();
		if (editor) {
			var spaces = editor.getColOffset(editor.getCursorPos());
			editor.document.replaceRange('document.getElementById(/*ID*/).addEventListener("click", function(){\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('/* Function */\n', editor.getCursorPos());
			fixIndent(editor, spaces);
			editor.document.replaceRange('});\n', editor.getCursorPos());
		}
	}

	function handlejsClickClass() {
		var editor = EditorManager.getFocusedEditor();
		if (editor) {
			var spaces = editor.getColOffset(editor.getCursorPos());
			editor.document.replaceRange('[].forEach.call(document.getElementsByClassName(/*Class*/), function(element){\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('element.addEventListener("click", function(){\n', editor.getCursorPos());
			fixIndent(editor, spaces + 8);
			editor.document.replaceRange('/* Function */\n', editor.getCursorPos());
			fixIndent(editor, spaces + 4);
			editor.document.replaceRange('});\n});', editor.getCursorPos());
		}

	}

	function handlejsCSSText() {
		var editor = EditorManager.getFocusedEditor();
		if (editor) {
			var spaces = editor.getColOffset(editor.getCursorPos());
			editor.document.replaceRange('var styleString = "cssproperty: value; cssproperty: value;";\n', editor.getCursorPos());
			fixIndent(editor, spaces);
			editor.document.replaceRange('document.getElementById(/*ID*/).style.cssText = styleString;', editor.getCursorPos());
		}
	}

	var jQueryDocReadyID = "write.jQueryDocReady";
	var docReadyID = "write.docReady";
	var WinResizeID = "write.winResize";
	var clickFuncID = "write.clickFunc";
	var hoverFuncID = "write.hoverFunc";
	var eachArrFuncID = "write.eachArrFunc";
	var eachFuncID = "write.eachFunc";
	var jsSelfFuncID = "write.jsSelfFunc";
	var jsClickId = "write.jsClickId";
	var jsClickClass = "write.jsClickClass";
	var jsCSSText = "write.jsCSSText";

	CommandManager.register("noConflict Doc Ready", jQueryDocReadyID, handlejQueryDocReady);
	CommandManager.register("Doc Ready", docReadyID, handleDocReady);
	CommandManager.register("Window Resize", WinResizeID, handleWinResize);
	CommandManager.register("Click Function", clickFuncID, handleClickFunc);
	CommandManager.register("Hover Function", hoverFuncID, handleHoverFunc);
	CommandManager.register("Each Array Function", eachArrFuncID, handleEachArrFunc);
	CommandManager.register("Each Function", eachFuncID, handleEachFunc);
	CommandManager.register("JS Anon Func", jsSelfFuncID, handlejsSelfFunc);
	CommandManager.register("JS ID Click Function", jsClickId, handlejsClickId);
	CommandManager.register("JS Class Click Function", jsClickClass, handlejsClickClass);
	CommandManager.register("JS CSS Text (Multiple CSS Properties)", jsCSSText, handlejsCSSText);

	var menu = Menus.addMenu("quickJS", "quickJS.custom.menu");

	menu.addMenuItem(jQueryDocReadyID);
	menu.addMenuItem(docReadyID);
	menu.addMenuItem(WinResizeID);
	menu.addMenuItem(clickFuncID);
	menu.addMenuItem(hoverFuncID);
	menu.addMenuItem(eachArrFuncID);
	menu.addMenuItem(eachFuncID);
	menu.addMenuDivider();
	menu.addMenuItem(jsSelfFuncID);
	menu.addMenuItem(jsClickId);
	menu.addMenuItem(jsClickClass);
	menu.addMenuItem(jsCSSText);

});
