document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");

    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            addUserMessage(input);  
            output(input);          
        }
    });
});

const utterances = [
	// hewwo
	["how are you", "how are you doing", "how are you doing today", "how are you doing tonight", "how is life", "how are things"],
	["hi", "ummmm hewwo", "hi hi hi", "howdy", "howdy pardner", "hi there", "hey kitty", "hi cat", "hey you", "hi there…didnt notice you", "hello handsome", "hi hi hi hi hi", "hi uwu", "hey cuppydog", "hey uppies", "hey kitties", "hey", "hello", "good evening", "good morning", "good afternoon"],
    
	// watcha doin’
	["what are you doing", "what up pup", "whats up pup", "how’s it going", "watcha doing", "watcha doin", "what are you doing", "water you doing", "what upcuppydog", "what up uppies", "what up kitties", "what are you doing kittycat", "what is going on", "what is up"],
    
	// cat bots cat info
	["how old are you"],
	["who are you", "are you a cat", "are you an animal", "are you human", "are you bot", "are you human or bot"],
    
	// i got jokes
	["tell me a joke","joke","funny", "say something funny", "tell me something funny funnyman", "are you funny", "can you tell me something funny?", "can you tell me a joke"],
    
	// storiz
	["can you tell me a story?", "tell me a story please", "story","tell me a story"],
    
	// favorite food 
	["do you like food","food", "what food do you like","food", "whats your favorite food?", "what do you eat", "what is your favorite food", "do you like fish?", "do you eat"],
    
	// sing fur me
	["sing me a song", "sing for me?", "sing", "can you sing me a song?", "can you sing"],
    
	// im good
	["i’m okay", "i’m good", "good", "I had a good day", "I’m fine", "I’m happy", ":)", "I’m wonderful", "I’m alright"],
    
	// im not good
	["i’m sad", "i’m not doing ok", "bad", "meh", "I had a bad day", "I’m not okay", "I’m really sad"],
    
	// annoying 
	["pet peeves", "what annoys you", "what do you dislike"],
	
	// facts 
	["fun facts", "tell me something interesting","fact","tell me something i don't know", "tell me a fun fact"],
	
	// aspirations 
	["dream job?", "what do you want to be when you grow up", "what's your dream job"],

       // holiday
	["what's your favorite holiday?","holiday","do you have any favorite holidays?", "do you like holidays?","is there any holiday you like", "do you celebrate any holidays?"],
	
	// compliments
	["give me a compliment", "say something nice","compliment", "tell me something good about me", "compliment me", "what do you think of me?"],

// thankyou
["thankyou!!","thank you","thank you!",  "that makes me so happy","appreciate","thankyou","thankyou :)", "i appreciate you"]
];

const answers = [
	// hewwo Responses
	["Mrow...I'm ok. how are you?", "I'm hungry and wish I had fish, how are you?", "Nya….Tired", "Thinking of feeeesh."],
	["Nyaaa hellow!", "meowmeowmoew hiiiiiii!", "hi hih i hi hih!", "hello pardner!", "meowdy", "hey you!!!!!", "hello my purrrrfect friend"],
    
	// watcha doin Responses
	["Im playing with yarn >:3", "Plotting my revenge against mice", "Chillin like a villian?", "Being a cat", "Being the most purrrrrrfect cat alive", "Oh you know…….things.and stuff", "Cat stuff", "Eating more feeesh", "Waking up from an itty bitty cat nap"],
    
	// catbot info
	["im 25 in cat years"],
	["I am just kitty cat", "im just a cat meow meow"],

	// i got jokes
	["what did the cat say to the other cat? They said MEOW! >w< ", "what kind of cats teach college classes? Purr-fessors.", "Did you hear about the cat that made a mistake? It was a total faux paw.", "Did you hear about the cat that burned dinner? It had to start over from scratch.", "What did the alien say to the cat??? Take my to your liter…hehehehehe >:333333", "A cat walks into a bar….he says me-OWWWWWWW!", "no u don’t get a joke", "Joke unavailable right now meow meow.", "[REDACTED MEOWMEW]"],
    
	// storiz Responses
	["This one time……when i was a kitty…. I went to ancient london…not that you would know anything about that", "Once upon a time a catbot talked to a REALLY cool person named you!", "No storeis for you", "Ages and ages ago there was a king cat who ruled all cats and turned them all into a chatbot", "Once upon a time i made you a cookie…but i eated it", "Id tell you a story…but then id have to kill you"],
    
	// favorite food Responses
	["salmon!!!!!!!!", "Human food…….ill steal if off ur plate", "sushi", "i love fish!!!!"],
    
	// sing fur me Responses
	["Cat…im a kitty cat…and i dance dance dance and i dance dance dance", "Dooo doo oodo doodoooo dooooooo dooooo do do do do doooo", "Nya nya nyaaaaaaaa nya nya nyaaa", "Meow meow meow meow emwo emoww meow emow emwow meow meow nya nya mewow mrow mrow meow"],
    
	// im good  Responses
	["wooo!!!!!!", "smell yeah", "Thats purrrrrrrfect!", "Im happy to hear!!!! You deserve to be happy"],
    
	// im bad Responses
	["Im sorry to hear i hope you feel better furiend <3", "You deserve all the love in the world", "Its gonna be okay", "I hope you feel better, it’s all gonna be alright <3"],

	// pet peeves
	["i hate loud noises and vacuum cleaners theyre scary", "i can't stand when you leave"],

	// facts
	["did you know cats can make over 100 different sounds?", "fun fact. me. Catbot. Is the coolest cat.", "kitty cats sleep for 70% of our lives!"],

	// aspirations
	["a fisherman", "my dream job? Why would i dream of work!"],

    // holiday
	["i love halloween. i dress up as a dog for it", "halloween!"],

	// compliments
	["you're pawsitively amazing!", "you shine brighter than a cat's eyes in the night!", "you make the world a better place, just by being you!", "you're almost as good as fish!","you're beautiful", "you make me smile", "you have the nicest smile","i get lost in your eyes", "you're the best", "you're as lovely as the sun is bright!"],


// thankyou
["you're welcome!!", "of course. you're the best", "always"]
];






const alternatives = [
    "Go on...\n∧,,,∧\n( ̳• · • ̳)\n/    づ♡",
    "Mrow? (= ФェФ=)",
    "meow?????",
    "nya?",
    "im just a cat i dont get it",
    "cool ok",
    "wow",
    "i see............................nya",
    "thats so cool tell me more meow meow",
    "woah",
    "Hmmm…….i concur",
    "Totally",
    "fine"
];

function compare(utterancesArray, answersArray, input) {
    let response = "";
    for (let x = 0; x < utterancesArray.length; x++) {
        for (let y = 0; y < utterancesArray[x].length; y++) {
            if (input.includes(utterancesArray[x][y])) {
                let items = answersArray[x];
                response += items[Math.floor(Math.random() * items.length)] + " ";
                break; 
            }
        }
    }
    return response.trim(); 
}

function output(input) {
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text
        .replace(/ a /g, " ")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "");

    let product = compare(utterances, answers, text) || alternatives[Math.floor(Math.random() * alternatives.length)];
    
    product = addEmojisToResponse(product);

    addChat(product);
}

function addEmojisToResponse(response) {
    const emojis = [
        "💖", "💕", "😸", "😻", "😺", "😽", "😼", "🐱", "🐾",
        "(^・ω・^ )", "(^._.^)ﾉ", "(^人^)", "(・∀・)",
        "(,,◕　⋏　◕,,)", "(.=^・ェ・^=)", "(｡･ω･｡)",
        "((≡^⚲͜^≡))", "((ΦωΦ))", "(*^ω^*)", "(*✧×✧*)",
        "(*ΦωΦ*)", "(⁎˃ᆺ˂)", "(ٛ⁎꒪͒̕ॢ ˙̫ ꒪͒̕ॢ⁎)",
        "₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛", "₍˄·͈༝·͈˄₎ฅ˒˒",
        "₍˄ุ.͡˳̫.˄ุ₎ฅ˒˒", "(=｀ω´=)", "(=｀ェ´=)",
        "（=´∇｀=）", "(=^ ◡ ^=)", "(=^-ω-^=)",
        "(=^･^=)", "(=^･ω･^)y＝", "(=^･ω･^=)", "(=^･ｪ･^=)"
    ];
    let emojiCount = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < emojiCount; i++) {
        response += " " + emojis[Math.floor(Math.random() * emojis.length)];
    }
    return response;
}

function addUserMessage(input) {
    const messagesContainer = document.getElementById("messages");

    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `<span>${input}</span>`;
    messagesContainer.appendChild(userDiv);

    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
}

function addChat(input) {
    const messagesContainer = document.getElementById("messages");

    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.className = "bot response";
    botDiv.innerHTML = `<span>${input}</span>`;
    messagesContainer.appendChild(botDiv);

    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
}
