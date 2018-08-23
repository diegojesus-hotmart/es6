class Message {
  constructor(text = '', created = Date.now()) {
    this.text = text;
    this.created = created;
  }
  get created(){
    return this._created;
  }
  set created(created){
    this._created = created;
  }
  toString() {
    return `Message created at: ${this.created} - Text: ${this.text}`;
  }
}

class imageMessage extends Message {
  constructor(text = '', created = '',
              url = '', thumbnail = ''){
    super(text, created);
    this.url = url;
    this.thumbnail = thumbnail;
  }
  toString() {
    return `Photo${super.toString()}` + 
           `- URL: ${this.url}` + 
           `Thumbnail: ${this.thumbnail}`;
  }
}


var emptyMessage = new Message();
var textMessage = new Message('Yesterday message', Date.now() - 86400);
var photoMessage = new imageMessage();

console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(photoMessage));