class sipUser{

    constructor(name,secret){
        this.name = name;
        this.secret = secret;
    }

    setName(name){
        this.name = name;
    }

    getName(){
        return name;
    }

    setSecret(secret){
        this.secret = secret;
    }

    getSecret(){
        return secret;
    }
}