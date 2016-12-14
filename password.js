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
    if(this.privatkey.charAt([4]&&[9] == "-")){

    }

  }






  //Static function below this comment.
}
