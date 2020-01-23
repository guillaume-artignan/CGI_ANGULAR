export default class Article{

    constructor(public titre:string, 
                public vote:number, 
                public url:string){

    }

    upVote(){
        this.vote++;
    }

    downVote(){
        this.vote--;
    }


}