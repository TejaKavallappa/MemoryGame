export class MemoryGame {
  constructor(level) {
    this.level = level;
    this.tiles = 4;
    this.userArray = [];
    this.blinkArray = []
  }

  generateSequence(){
    this.blinkArray = [];
    for(let i = 0; i < this.level; i++){
      let num = Math.floor(Math.random() * this.tiles);
      while (i > 0 && num == this.blinkArray[i-1]){
        num = Math.floor(Math.random() * this.tiles);
      }
      this.blinkArray.push(num);
    }
    return this.blinkArray;
  }

  setGuess(guess){
    this.updateUserarray(guess);
    if (this.userArray.length === this.blinkArray.length && this.blinkArray.length !== 0)
    {
      return this.hasWon();
    }
    return -1;
  }

  hasWon(){
    let res =  this.compare(this.userArray);
    if (res){
      this.level += 1;
    }else {
      this.level = 1;
    }
    this.blinkArray = [];
    this.userArray = [];
    return res;
  }

  updateUserarray(guess){
    if (this.blinkArray.length === 0){
      return;
    }
    this.userArray.push(guess);
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
