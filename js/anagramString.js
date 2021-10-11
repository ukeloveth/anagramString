//alert("wahooo")
function checkAnagram(striAnagram){
    let newStr ="";
    for(let i=0;i<striAnagram.length;i++){
      let val = striAnagram[i];
      if(newStr.indexOf(val)===1){
      return true;
    }else if(newStr.indexOf(val)=== -1){
        return false;
    }

    }
}
let testString ="hackathon";
console.log(checkAnagram(testString))