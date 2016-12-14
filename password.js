class Password{
  //The first part of the class.
  constructor(pb,pv){
    this.publickey = pb; //string of any kind of symbol or character
    this.privatekey = pv; //secret string of numbers "xxxx-xxxx-xxxx"
  }

  //Instance functions below this comment.
  validPublicKey(){
    if(this.publickey.length>=8 && this.publickey.length<=25){
      return true;
    }
    else{
      return false;
    }
  }

  validPrivateKey(){

    }

  }

  //Static function below this comment.
  static makePrivateKey(){
    let key = [];
    let limit = 14;
    let group1="";
    let group2="";
    let group3="";
    for(c=0;c<4;c++){
      group1 += Math.floor(Math.random()*10);
      group2 += Math.floor(Math.random()*10);
      group3 += Math.floor(Math.random()*10);
    }

  }
}
