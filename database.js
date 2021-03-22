class Question{
    constructor(question, options, answer, id){
        this.question = question;
        this.options = options;
        this.answer =  answer;
        this.id = id;
    }
}

arrQuest = []

//Question bank generation
let q1 = new Question("What is the capital of India?",["New Delhi","Mumbai","Chennai","Agra"],"New Delhi",0);
let q2 = new Question("What is the capital of the US?",["Washington, D.C.","New York","Detroit","Los Angeles"],"Washington, D.C.",1);
let q3 = new Question("What is the capital of Italy?",["Florence","Rome","Venice","Naples"],"Rome",2);
let q4 = new Question("What is the capital of England?",["Birmingham","Edinburgh","York","London"],"London",3);
let q5 = new Question("What was the name of the US project to make the first atomic fission bomb?",["Manhattan Project","Project Grey","Project Ivy","Mark One System"],"Manhattan Project",4);
let q6 = new Question("What is he name of the world's smallest country?",["Laos","Vatican City","Mali","Peru"],"Vatican City",5);
let q7 = new Question("What is the name of Reddit's Mascot?",["Greppy","Snoo","Metro","Poggers"],"Snoo",6);
let q8 = new Question("What was the name of Rome's first Emperor?",["Julius Caesar","Augustus","Caligula","Nero"],"Augustus",7);
let q9 = new Question("Which country is the Bolshoi Theatre located in?",["Ukraine","Russia","Albania","Romania"],"Russia",8);
let q10 = new Question("Which is the most sold game in the world?",["Minecraft","Halo","Tetris","Counter-Strike"],"Tetris",9);
let q11 = new Question("Which country did Alexander the Great hail from?",["Macedonia","Greece","Rome","Scythia"],"Macedonia",10);
let q12 = new Question("What is the financial capital of India?",["Mumbai","Bangalore","Kolkata","Chandigarh"],"Mumbai",11);
let q13 = new Question("What is the name of the empire established by Cyrus the Great?",["Mesopotamian","Egypy","Mali","Achaemenid"],"Achaemenid",12);
let q14 = new Question("Who was the bassist of Queen?",["Flea","Deacon","Taylor","Bonamassa"],"Deacon",13);
let q15 = new Question("Which college is the best?",["BITS Goa","BITS Goa","BITS Goa","BITS Goa"],"BITS Goa",14);




//Pushing to array that holds all Question Objects
arrQuest.push(q1);
arrQuest.push(q2);
arrQuest.push(q3);
arrQuest.push(q4);
arrQuest.push(q5);
arrQuest.push(q6);
arrQuest.push(q7);
arrQuest.push(q8);
arrQuest.push(q9);
arrQuest.push(q10);
arrQuest.push(q11);
arrQuest.push(q12);
arrQuest.push(q13);
arrQuest.push(q14);
arrQuest.push(q15);

//Setting it into localStorage
localStorage.setItem("questions",JSON.stringify(arrQuest));

