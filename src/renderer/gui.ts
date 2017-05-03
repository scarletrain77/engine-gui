import * as fs from 'fs';
import * as path from 'path';
const Config = require('electron-config');
const config = new Config();

//由于自己的engine.d.ts无法运行……这里用的engine.d.ts是复制的孟彦宁同学的。

export let run = () => {
    var stage = new engine.DisplayObjectContainer();
    InitialStage(stage);
}

type bookInfo = { id: string, name: string, author: string };
let bookConfig: { books: bookInfo[] } = bookInfo;

function InitialStage(stage: engine.DisplayObjectContainer) {
    //let bookInfoPath = path.join("../../books.json");

    UpdateStage(stage);

    let buttonX = 100;
    let buttonY = 100;
    let addButton = new engine.Shape();
    addButton.drawRect(buttonX, buttonY, 100, 50);
    let subButton = new engine.Shape();
    subButton.drawRect(buttonX, buttonY + 100, 100, 50);
    let changeButton = new engine.Shape();
    changeButton.drawRect(buttonX, buttonY + 200, 100, 50);

    addButton.touchEnabled = true;
    subButton.touchEnabled = true;
    changeButton.touchEnabled = true;

    addButton.addEventListener(engine.TouchEvent.CLICK, () => {
        if(bookConfig.books.length != bookInfo.books.length){
            bookConfig.books.push(bookInfo.books.indexOf(bookInfo.books.length - 1));
        }
    });
    subButton.addEventListener(engine.TouchEvent.CLICK, () => {
        bookConfig.books.splice(bookConfig.books.length - 1);
    });
    changeButton.addEventListener(engine.TouchEvent.CLICK, () => {
        UpdateStage(stage);
    });

}

function UpdateStage(stage: engine.DisplayObjectContainer) {
    var textStage = new engine.DisplayObjectContainer();
    var booksTextField: engine.TextField[] = [];
    var booksArray: Book[] = [];
    bookConfig.books.forEach((config) => {
        booksArray.push(new Book(config.id, config.name, config.author));
    })
    booksArray.forEach((config) => {
        var bookTextField = new engine.TextField();
        bookTextField.text = config.bookInfo;
        booksTextField.push(bookTextField);

    });
    booksTextField.forEach((each) => {
        textStage.addChild(each);
    });
}


var bookInfo = {
    "books": [
        {
            "id": "001",
            "name": "aaa",
            "author": "111"
        },
        {
            "id": "002",
            "name": "bbb",
            "author": "222"
        }
    ]
}