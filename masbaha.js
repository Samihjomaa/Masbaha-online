function increment(){
var count = this.children[0].innerHTML;
   console.log(count++);
    this.children[0].innerHTML=count;
}