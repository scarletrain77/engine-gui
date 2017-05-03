class Book extends engine.DisplayObjectContainer {
    private _bookName: string;
    private _bookId: string;
    private _bookAmount: number = 0;
    private _bookAuthor: string;
    bookTextField: engine.TextField;

    constructor(bookId?: string, bookName?: string, bookAuthor?: string) {
        super();
        if (!bookName) {
            this._bookName = "UNKNOWN";
        } else {
            this._bookName = bookName;
        }
        if (!bookAuthor) {
            this._bookAuthor = "UNKNOWN";
        } else {
            this._bookAuthor = bookName;
        }
        this._bookAmount++;
        if (!bookId) {
            this._bookId = this._bookAmount.toString();
        }else{
            this._bookId = bookId;
        }
        this.bookTextField = new engine.TextField();
        this.updateTextField();
        this.addChild(this.bookTextField);
    }

    updateTextField() {
        this.bookTextField.text = "id:" + this._bookId +
            "Name:" + this._bookName +
            "Author:" + this._bookAuthor;
    }

    get bookId() {
        return this._bookId;
    }

    set bookId(id: string){
        this.bookId = id;
    }

    set bookName(name: string) {
        this._bookName = name;
    }

    set bookAuthor(name: string) {
        this._bookAuthor = name;
    }

    get bookName() {
        return this._bookName;;
    }

    get bookAuthor() {
        return this._bookAuthor;
    }
}
class Button extends engine.DisplayObjectContainer {

}