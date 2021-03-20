class Question{
    constructor(question, options, answer, id){
        this.question = question;
        this.options = options;
        this.answer =  answer;
        this.id = id;
    }
}

arrQuest = []

let q1 = new Question("What is the capital of India?",["New Delhi","Mumbai","Chennai","Agra"],"New Delhi",0);
let q2 = new Question("What is the capital of US?",["Washington, D.C.","New York","Detroit","Los Angeles"],"Washington, D.C.",1);
let q3 = new Question("What is the capital of Italy?",["Florence","Rome","Venice","Naples"],"Rome",2);
let q4 = new Question("What is the capital of England?",["Birmingham","Edinburgh","York","London"],"London",3);
let q5 = new Question("What is he name of the world's smallest country?",["Laos","Vatican City","Mali","Peru"],"Vatican City",4);

arrQuest.push(q1);
arrQuest.push(q2);
arrQuest.push(q3);
arrQuest.push(q4);
arrQuest.push(q5);

localStorage.setItem("questions",JSON.stringify(arrQuest));

