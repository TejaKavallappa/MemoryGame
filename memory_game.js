export class MemoryGame {
  constructor(level) {
    this.level = level;
    this.userArray = [];
    this.blinkArray = []
  }

  generateSequence(){
    this.blinkArray = [];
    for(let i = 0; i < this.level; i++){
      let num = Math.floor(Math.random() * this.level);
      while (i > 0 && num == this.blinkArray[i-1]){
        num = Math.floor(Math.random() * this.level);
      }
      this.blinkArray.push(num);
    }

    return this.blinkArray;
  }

  updateUserarray(guess){
    if (this.blinkArray.length === 0){
      return;
    }
    this.userArray.push(guess);
    if (this.userArray.length === this.blinkArray.length)
    {
      let res =  this.compare(this.userArray);
      if (res){
        console.log("You win!");
      }
      this.userArray = [];
      return res;
    }
    return false;
  }

  compare(userArray){
    let len = userArray.length;
    for(let i = 0; i < this.level; i++){
      if (this.blinkArray[i] !== userArray[len - i - 1]){
        return false;
      }
    }
    return true;
  }

}
