String.prototype.camelCase=function(){
  const words = this.split(' ');
  const newWords = words.map( word => word.charAt(0).toUpperCase() + word.slice(1, (word.length)));
  return newWords.join('');
}