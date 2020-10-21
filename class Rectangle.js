
class Rectangle {
        constructor(height, width,){
            this.height = height;
            this.width = width;
        }
        calArea(){
            return this.height * this.width;
        }
        calCircum(){
            return 2 * this.height * this.width;
        }
        display(){

        }
}
let rectangle1= new Rectangle(300, 200);
let rectangle2 = new Rectangle(200, 200);
let rectangle3 = new Rectangle(100, 300)
