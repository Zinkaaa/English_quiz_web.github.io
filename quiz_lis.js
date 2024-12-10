// Get the topic from local storage
const currentTopic = localStorage.getItem('selected-topic');  // You can replace this dynamically if necessary

// Update the page name based on the currentTopic
const pageNameElement = document.getElementById('page-name');
const pageNameElement2 = document.getElementById('page-name2');
if (currentTopic === "computers") {
    pageNameElement.innerText = "Computers";  
    pageNameElement2.innerText = "Computers"; // Display "Networking" for networking topic
} else if (currentTopic === "cyber-bullying") {
    pageNameElement.innerText = "Cyber Bullying";
    pageNameElement2.innerText = "Cyber Bullying";  // Display "Basic Computing" for computing topic
}
else if (currentTopic === "cyber-crime") {
    pageNameElement.innerText = "Cyber Crime";
    pageNameElement2.innerText = "Cyber Crime";  // Display "Basic Computing" for computing topic
}
else if (currentTopic === "internet") {
    pageNameElement.innerText = "Internet";
    pageNameElement2.innerText = "Internet";  // Display "Basic Computing" for computing topic
}
else if (currentTopic === "junk-mail") {
    pageNameElement.innerText = "Junk Mail";
    pageNameElement2.innerText = "Junk Mail";  // Display "Basic Computing" for computing topic
}
else if (currentTopic === "microsoft") {
    pageNameElement.innerText = "Microsoft";
    pageNameElement2.innerText = "Microsoft";  // Display "Basic Computing" for computing topic
}
else if (currentTopic === "robots") {
    pageNameElement.innerText = "Robots";
    pageNameElement2.innerText = "Robots";  // Display "Basic Computing" for computing topic
}
else if (currentTopic === "social-networking") {
    pageNameElement.innerText = "Social Networking";
    pageNameElement2.innerText = "Social Networking";  // Display "Basic Computing" for computing topic
}

// Set the audio file dynamically based on the selected topic
const audioElement = document.getElementById("audio-listening");

if (currentTopic === "computers") {
    audioElement.src = "audio/computers.mp3";
} else if (currentTopic === "cyber-bullying") {
    audioElement.src = "audio/cyber-bullying.mp3";
} else if (currentTopic === "cyber-crime") {
    audioElement.src = "audio/cyber_crime.mp3";
} else if (currentTopic === "internet") {
    audioElement.src = "audio/internet.mp3";
} else if (currentTopic === "junk-mail") {
    audioElement.src = "audio/junk_mail.mp3";
} else if (currentTopic === "microsoft") {
    audioElement.src = "audio/microsoft.mp3";
} else if (currentTopic === "robots") {
    audioElement.src = "audio/robots.mp3";
} else if (currentTopic === "social-networking") {
    audioElement.src = "audio/social_networking.mp3";
} else {
    audioElement.src = ""; // Default case if topic is not recognized
}

// Ensure the audio is loaded and playable
audioElement.load();


// Define the questions array globally
let questions = [];

if (currentTopic === "computers") {
    questions = [
        {
            question: "It’s hard to believe ______________________ had computers a few years ago.",
            correctAnswer: "that no one",
        },
        {
            question: "I wonder how people lived. There must have been ______________________ paperwork.",
            correctAnswer: "a lot of",
        },
        {
            question: "I can’t imagine writing everything by hand. I ______________________ everything worked without computers.",
            correctAnswer: "also wonder how",
        },
        {
            question: "We need computers today for everything. Hospitals, airports, the police… nothing can work without computers. I’m ______________________ ten times busier than now if I didn’t have a computer.",
            correctAnswer: "sure I'd be",
        },
        {
            question: "Imagine having to find ______________________ paper and an envelope and then walking down the street to mail a letter!",
            correctAnswer: "a piece of",
        },
        {
            question: "I love my computer. It makes everything ______________________ so convenient.",
            correctAnswer: "everything in my life",
        },
        {
            question: "Sure ______________________ data. But that’s not often.",
            correctAnswer: "I lose some",
        },
        {
            question: "But that’s not often. Most ______________________ my computer is like my best friend.",
            correctAnswer: "of the time",
        }
    ];
    
} else if (currentTopic === "cyber-bullying") {
    questions = [
        {
            question: "The Internet can be ___________________ days, especially because of cyber-bullying.",
            correctAnswer: "scary place these",
        },
        {
            question: "It’s difficult to open a newspaper these days and ___________________ this.",
            correctAnswer: "not see a story about",
        },
        {
            question: "It’s a really ___________________ problem.",
            correctAnswer: "nasty and growing",
        },
        {
            question: "Cyber-bullies are real cowards. They hide behind their computer and scare people, ___________________ or threaten them.",
            correctAnswer: "send them hate mail",
        },
        {
            question: "Even worse is when they publish pictures of their victims online. I have a friend who had a really bad time ___________________ a cyber-bully.",
            correctAnswer: "at the hands of",
        },
        {
            question: "He or she spread lots of gossip and lies on the Internet. My friend’s reputation ___________________.",
            correctAnswer: "was badly damaged",
        },
        {
            question: "A really bad thing is how young cyber-bullying starts. Many schoolchildren physically ___________________ and then continue online.",
            correctAnswer: "bully others in class",
        },
        {
            question: "Their ___________________ anywhere.",
            correctAnswer: "victim isn't safe",
        }
    ];
} else if (currentTopic === "cyber-crime") {
    questions = [
        {
            question: "I don’t think people understand cyber-crime. It’s only ______________________ .",
            correctAnswer: "just started",
        },
        {
            question: "In the future, it’s going ______________________ problem.",
            correctAnswer: "to be a huge",
        },
        {
            question: "There have already been a few amazing examples. A few years ______________________ Internet in Latvia was attacked by another country.",
            correctAnswer: "ago the whole",
        },
        {
            question: "Cyberspace has ______________________ battleground.",
            correctAnswer: "become a new",
        },
        {
            question: "Countries ______________________ other.",
            correctAnswer: "spy on each",
        },
        {
            question: "If there’s a war, it’s possible one country could attack the other country’s Internet. This ______________________ communication, transport, etc would stop.",
            correctAnswer: "would mean all",
        },
        {
            question: "It would cause ______________________ to hospitals and other important buildings.",
            correctAnswer: "huge damage",
        },
        {
            question: "But cyber-crime is happening ______________________ people.",
            correctAnswer: "today to ordinary",
        },
        {
            question: "Have you ______________________ phishing? That’s with a ‘ph’ not ‘f’.",
            correctAnswer: "ever heard of",
        },
        {
            question: "You really need to be very careful about what information ______________________ .",
            correctAnswer: "you put online",
        }
    ];
} else if (currentTopic === "internet") {
    questions = [
        {
            question: "I think the Internet is the greatest _______________________.",
            correctAnswer: "invention ever",
        },
        {
            question: "Think how it has changed the world. So much information is out there. _______________________ changed my life.",
            correctAnswer: "It has totally",
        },
        {
            question: "I can chat with friends, download music, buy books and _______________________ I need for my homework.",
            correctAnswer: "get all the info",
        },
        {
            question: "It took days or _______________________ any of these things before the Internet.",
            correctAnswer: "weeks to do",
        },
        {
            question: "I spend hours every day online. I think I _______________________ too long",
            correctAnswer: "spend a little",
        },
        {
            question: "I’m sure _______________________ computer screen all day isn’t good for my eyes.",
            correctAnswer: "staring at a",
        },
        {
            question: "I think it’s also _______________________. I need to exercise a little more.",
            correctAnswer: "making me fat",
        },
        {
            question: "The only thing I don’t like about the Internet _______________________ be dangerous.",
            correctAnswer: "is that it can",
        },
        {
            question: "I don’t really _______________________ personal information online, especially on social networking sites like Facebook.",
            correctAnswer: "like putting my",
        }
    ];
} else if (currentTopic === "junk-mail") {
    questions = [
        {
            question: "I hate junk mail. I’m _______________________ of it filling up my InBox.",
            correctAnswer: "sick and tired",
        },
        {
            question: "I mean, who believes the stuff written in it? I love _______________________ start with “Dearest” and then tell you how their uncle died during some war and they need your help to transfer $18 million.",
            correctAnswer: "the ones that",
        },
        {
            question: "I wonder how many people fall for those. My spam _______________________ do a pretty good job at keeping junk mail away from my InBox.",
            correctAnswer: "mail filters",
        },
        {
            question: "But, I occasionally get a mail _______________________ me medicine.",
            correctAnswer: "trying to sell me",
        },
        {
            question: "The most dangerous kind of junk mail is called phishing. That’s when a criminal _______________________ to make it look like it’s sent from a bank.",
            correctAnswer: "fakes an e-mail",
        },
        {
            question: "It _______________________ the same as a bank’s mail.",
            correctAnswer: "looks exactly",
        },
        {
            question: "The mail asks you _______________________ password.",
            correctAnswer: "to reset your",
        },
        {
            question: "The criminal _______________________ your money.",
            correctAnswer: "then takes",
        }
    ];
} else if (currentTopic === "microsoft") {
    questions = [
        {
            question: "What __________________ without Microsoft? Impossible? Perhaps not impossible, but definitely difficult.",
            correctAnswer: "would life be like",
        },
        {
            question: "Microsoft seems __________________ of our lives today.",
            correctAnswer: "to be a big part",
        },
        {
            question: "__________________ Microsoft products every day.",
            correctAnswer: "Most of us use",
        },
        {
            question: "We need MS Word to create documents and Excel to make spreadsheets. At school __________________ PowerPoint presentations.",
            correctAnswer: "we have to make",
        },
        {
            question: "Perhaps the biggest thing we use Microsoft for is getting on the Internet. Most of the world’s computers use the Explorer __________________ to the Web.",
            correctAnswer: "browser to connect to the",
        },
        {
            question: "Millions of us use Hotmail to send e-mails. Millions more play games using Microsoft’s X-Box. In the future, __________________ a lot more Microsoft stuff that that helps us in our life.",
            correctAnswer: "there’ll probably be",
        },
        {
            question: "And to think, Microsoft didn’t __________________ decades ago.",
            correctAnswer: "even exist a few",
        }
    ];
} else if (currentTopic === "robots") {
    questions = [
        {
            question: "A long time ago, robots ____________________ fiction. Children loved looking at movies with robots.",
            correctAnswer: "belonged to science",
        },
        {
            question: "Today, robots are real, and ____________________.",
            correctAnswer: "they are helping us",
        },
        {
            question: "In the future, we will all have robots. They will vacuum the floor, wash the dishes, ____________________ our cars..",
            correctAnswer: "perhaps even drive",
        },
        {
            question: "I even think one day we’ll have robot friends. In Japan today, ____________________ making robots to help old people and to and to keep them company.",
            correctAnswer: "robot engineers are",
        },
        {
            question: "It’s still early days. I’d say we are another 20 to 30 years away from robots ____________________ in our lives.",
            correctAnswer: "being everywhere",
        },
        {
            question: "What will happen to us when the world is full of robots? There’ll be no jobs. McDonalds will be ____________________.",
            correctAnswer: "full of smiling robots",
        },
        {
            question: "Maybe one day we won’t be able to tell robots and humans apart. Maybe ____________________ world.",
            correctAnswer: "they’ll take over the",
        }
    ];
} else if (currentTopic === "social-networking") {
    questions = [
        {
            question: "What is ___________________ social networking? I don’t understand it.",
            correctAnswer: "the big deal with",
        },
        {
            question: "I know a ___________________. I spend a long time every day on computers.",
            correctAnswer: "lot about computers",
        },
        {
            question: "I also have a lot of friends. But I ___________________ of social networks.",
            correctAnswer: "don’t see the point",
        },
        {
            question: "I joined Facebook but couldn’t be bothered to make my profile. I can’t ___________________ of this site.",
            correctAnswer: "see a single use",
        },
        {
            question: "Most of what I’ve ___________________ so good.",
            correctAnswer: "heard about it isn’t",
        },
        {
            question: "Putting too much personal information on this site isn’t a wise idea. I’ve also experimented with Twitter, but again, I don’t ___________________ it has.",
            correctAnswer: "really see what use",
        },
        {
            question: "I suppose it’s good to tell the world what’s happening in countries that take ___________________.",
            correctAnswer: "away people’s freedom",
        },
        {
            question: "My idea of social networking is meeting ___________________ face and talking to them.",
            correctAnswer: "people face to",
        }
    ];
}

let timeRemaining = 600;
let timerInterval;

function startQuiz() {
    const quizForm = document.getElementById("quiz-form");
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        // Dynamically generate question with a styled text input
        questionDiv.innerHTML = ` 
            <p>${index + 1}. ${q.question}</p>
            <input type="text" id="q${index}" name="q${index}" class="answer-input" placeholder="Enter your answer">
        `;
        quizForm.appendChild(questionDiv);
    });

    startTimer(); // Start the timer
}


function startTimer() {
    timerInterval = setInterval(function () {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        document.getElementById('timer').innerText = `Time remaining: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        timeRemaining--;

        if (timeRemaining < 0) {
            clearInterval(timerInterval);
            submitQuiz(); // Auto-submit the quiz if the time runs out
        }
    }, 1000);
}

// Function to calculate the score and display it in a popup
function submitQuiz() {
    clearInterval(timerInterval); // Stop the timer
    const quizForm = document.getElementById('quiz-form');
    const formData = new FormData(quizForm);
    let score = 0;

    // Calculate the score
    questions.forEach((q, index) => {
        const userAnswer = formData.get(`q${index}`)?.trim().toLowerCase();
        const correctAnswer = q.correctAnswer.trim().toLowerCase();
        if (userAnswer === correctAnswer) {
            score++;
        }
    });

    // Display the score in the popup
    const popupMessage = document.getElementById('popup-message');
    popupMessage.innerText = `Your score is: ${score} out of ${questions.length}`;
    document.getElementById('popup-window').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup-window').style.display = 'none';
}

// Start the quiz when the page loads
window.onload = startQuiz;
