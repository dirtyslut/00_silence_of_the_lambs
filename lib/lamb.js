function Lamb() {
  this.voice = 'baaa';
  this.say = function(){
    return this.voice;
  };
  this.silence = function(){
    this.voice = null;
  };
  this.wool = function () {
    return "3 bags full";
  };
  this.hasWool = function(){
    return this.hasWool;
  };
  // say = function() {
  //   return "baaa";
  // }
}

module.exports = Lamb;
