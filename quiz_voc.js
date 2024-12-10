// Get the topic from local storage
const currentTopic = localStorage.getItem('selected-topic');  // You can replace this dynamically if necessary

// Update the page name based on the currentTopic
const pageNameElement = document.getElementById('page-name');
const pageNameElement2 = document.getElementById('page-name2');
if (currentTopic === "networking") {
    pageNameElement.innerText = "Networking";  
    pageNameElement2.innerText = "Networking"; // Display "Networking" for networking topic
} else if (currentTopic === "computing") {
    pageNameElement.innerText = "Basic Computing";
    pageNameElement2.innerText = "Basic Computing";  // Display "Basic Computing" for computing topic
} else if (currentTopic === "robotic") {
    pageNameElement.innerText = "Robotic";
    pageNameElement2.innerText = "Robotic";  // Display "Basic Computing" for computing topic
} else if (currentTopic === "programming") {
    pageNameElement.innerText = "Programming";
    pageNameElement2.innerText = "Programming";  // Display "Basic Computing" for computing topic
} else if (currentTopic === "database") {
    pageNameElement.innerText = "Database";
    pageNameElement2.innerText = "Database";  // Display "Basic Computing" for computing topic
}

// Define the questions array globally
let questions = [];

if (currentTopic === "computing") {
    questions = [
        {
            question: "The _____ is a piece of software that interfaces with your PC and allows you, via keyboard commands, to get any text information read to you in synthetic speech.",
            options: ["Screen reader", "Assistive technology", "Interactive whiteboard", "DVD recorder"],
            correctAnswer: "Screen reader",
        },
        {
            question: "The CPU will process data as instructed by the programs you're running. _____ includes functions like calculating, sorting, editing, drawing and searching.",
            options: ["Input", "Processing", "Storage", "Output"],
            correctAnswer: "Processing",
        },
        {
            question: "Interactive _____ are used in museums, information centres and Internet kiosks.",
            options: ["Displays", "Interfaces", "Terminals", "Systems"],
            correctAnswer: "Terminals",
        },
        {
            question: "This scanner has a resolution of 300 * 600 _____.",
            options: ["Pixels", "Pixels Per Inch (PPI)", "Lines", "Dots Per Inch (DPI)"],
            correctAnswer: "Dots Per Inch (DPI)",
        },
        {
            question: "Passengers with an electronic ticket will need a _____ of ticket confirmation or a boarding pass to be admitted to secured gate areas.",
            options: ["Printout", "Copy", "Receipt", "Screenshot"],
            correctAnswer: "Printout",
        },
        {
            question: "The company announced plans to expand its _____ (DLP) cinema technology, which has thrilled test audiences with its dazzling colours and pin-sharp images.",
            options: ["Digital Light Processing", "Digital Laser Projection", "Direct Light Projection", "Dynamic Light Processing"],
            correctAnswer: "Digital Light Processing",
        },
        {
            question: "The ______ inside your PC is made of aluminium alloy covered with a magnetic coating. This makes the disk itself a rigid plate, hence its name.",
            options: ["Solid-state drive", "Optical disk", "Flash drive", "Hard drive"],
            correctAnswer: "Hard drive",
        },
        {
            question: "Painting programs work by giving a colour to each pixel in an image, creating a _____. Unlike vector graphics, the image is a single layer, so once something is painted, it becomes part of the whole picture.",
            options: ["Bitmap", "Raster image", "Vector image", "Layered image"],
            correctAnswer: "Bitmap", // Fixed this option
        },
        {
            question: "_____ files are processed by sound software.",
            options: ["JPEG", "AVI", "MP3", "TXT"],
            correctAnswer: "MP3",
        },
        {
            question: "The _____ contains a row of icons that perform particular actions when clicked.",
            options: ["Taskbar", "Toolbar", "Desktop", "Window"],
            correctAnswer: "Toolbar",
        },
    ];
    
} else if (currentTopic === "networking") {
    questions = [
        {
            question: "The style of _____ networking permits each user to share resources such as printers.",
            options: ["Hybrid network", "Client server", "Peer to peer", "Cloud based"],
            correctAnswer: "Peer to peer",
        },
        {
            question: "The star is a topology for a computer network in which one computer occupies the central part and the remaining  _____ are linked solely to it.",
            options: ["Nodes", "Backbones", "Servers", "Clients"],
            correctAnswer: "Nodes",
        },
        {
            question: "At present Wi-Fi systems transmit data at much more than 100 times the rate of a dial-up modem, making it an ideal technology for linking computers to one another and to the Net in a _____",
            options: ["Wired network", "Wireless network", "Virtual local network", "Wide area network"],
            correctAnswer: "Wide area network",
        },
        {
            question: "All of the fibre-optic _____ of the United States, Canada and Latin America cross Panama.",
            options: ["Telephones", "Cables", "Lines", "Backbones"],
            correctAnswer: "Backbones",
        },
        {
            question: "A _____ joins multiple computers (or other network devices) together to form a single network segment, where all computers can communicate directly with each other.",
            options: ["Hub", "Switch", "Router", "Server"],
            correctAnswer: "Hub",
        },
        {
            question: "An _____ board may be inserted into a computer to give it added features.",
            options: ["Expansion", "Development", "Evolution", "Growth"],
            correctAnswer: "Expansion",
        },
        {
            question: "A ______ network consists of one piece of cable terminated at each end to which all devices are connected.",
            options: ["Star", "Bus", "Switched", "Ring"],
            correctAnswer: "Bus",
        },
        {
            question: "The modem _____ converts the digital signals stored in the computer into analogue signals that can be transmitted over telephone lines.",
            options: ["Router", "Cable", "Modem", "Web TV"],
            correctAnswer: "Modem",
        },
        {
            question: "_____ or junk email, is the name given to unwanted messages, mainly commercial advertising.",
            options: ["Spam", "Spammers", "Newsgroups", "Mailing list"],
            correctAnswer: "Spam",
        },
        {
            question: "The server looks for the document and sends it to the _____.",
            options: ["Web page", "Website", "Web server", "Web browser"],
            correctAnswer: "Web browser",
        },
    ];
} else if (currentTopic === "robotic") {
    questions = [
        {
            question: "Touch screens, remote control and computers are differebt types of _____.",
            options: ["Robotics", "Intelligent devices", "Interfaces", "Automations"],
            correctAnswer: "Interfaces",
        },
        {
            question: "Robots shine at installing chips in printed _____ because of a capability that robots have that people don't.",
            options: ["Circuit board", "Card", "Electronic component", "Assembly drawing"],
            correctAnswer: "Circuit board",
        },
        {
            question: "The boring and dangerous jobs are now assumed by _____",
            options: ["Manifactures", "Robots", "Programmers", "Scientiests"],
            correctAnswer: "Robots",
        },
        {
            question: "The _____ was able to perform tasks beyond human capability due to its advanced robotic enhancements.",
            options: ["Computer", "Network", "AI", "Cyborg"],
            correctAnswer: "Cyborg",
        },
        {
            question: "A _____ equipped with sensors and cameras can map an area autonomously.",
            options: ["Mobile robot", "Drone", "Automatic machine", "Flexible machine"],
            correctAnswer: "Mobile robot",
        },
        {
            question: "The _____ in the circuit stores electrical energy for later use.",
            options: ["Electric current", "Resistance", "Accumulator", "Thermocurrent"],
            correctAnswer: "Accumulator",
        },
        {
            question: "The _____ headset allows users to experience immersive environments in 3D.",
            options: ["Artificial intelligence", "Cyberspace", "Virtual reality", "Computer simulation"],
            correctAnswer: "Virtual reality",
        },
        {
            question: "_____ is a task suited to robots because they don't need to breathe.",
            options: ["Damping the fire", "Smoking", "Dancing", "Spray painting"],
            correctAnswer: "Spray painting",
        },
        {
            question: "What is the primary characteristic of robotic systems?",
            options: ["They require constant human intervention to function.", "They are designed to perform tasks autonomously or with minimal human input.", "They operate only in laboratory settings.", "They cannot perform repetitive tasks."],
            correctAnswer: "They are designed to perform tasks autonomously or with minimal human input.",
        },
        {
            question: "In manufacturing industries, robotic arms are often used for tasks such as welding, painting, and ____________.",
            options: ["Assembly", "Cleaning", "Filingr", "Gerdening"],
            correctAnswer: "Assembly",
        },
    ];
} else if (currentTopic === "programming") {
    questions = [
        {
            question: "In programming, a variable is used to store ____________ values.",
            options: ["Constants", "Function", "Dynamic", "Static"],
            correctAnswer: "Dynamic",
        },
        {
            question: "he process of finding and fixing errors in a program is called ____________.",
            options: ["Debugging", "Compiling", "Executing", "Analyzing"],
            correctAnswer: "Debugging",
        },
        {
            question: "A ____________ is a set of instructions that performs a specific task in a program.",
            options: ["Class", "Method", "Array", "Variable"],
            correctAnswer: "Method",
        },
        {
            question: " In object-oriented programming, a ____________ is a blueprint for creating objects.",
            options: ["Function", "Class", "Variable", "Loop"],
            correctAnswer: "Class",
        },
        {
            question: "The ____________ keyword is used to define a constant value in most programming languages.",
            options: ["Final", "Static", "Void", "Const"],
            correctAnswer: "Const",
        },
        {
            question: "A ____________ loop repeats a block of code while a condition is true.",
            options: ["For", "While", "Do while", "Foreach"],
            correctAnswer: "While",
        },
        {
            question: "A ____________ is a collection of related data items stored in a specific order.",
            options: ["Array", "List", "String", "Object"],
            correctAnswer: "Array",
        },
        {
            question: "The ____________ statement is used to stop the execution of a loop in programming.",
            options: ["return", "exit", "continue", "break"],
            correctAnswer: "break",
        },
        {
            question: "In object-oriented programming, the concept of ____________ allows a class to inherit methods and properties from another class, promoting code reusability and reducing redundancy.",
            options: ["Abstraction", "Encapsulation", "Inheritance", "Polymorphism"],
            correctAnswer: "Inheritance",
        },
        {
            question: "When debugging a program, developers often use ____________ to monitor the values of variables and the execution flow, helping them understand the behavior of the code during runtime.",
            options: ["Print statements", "Loops", "Assertions", "Breakpoints"],
            correctAnswer: "Breakpoints",
        },
    ];
} else if (currentTopic === "database") {
    questions = [
        {
            question: "A ____________ is a collection of related data that is organized in a structured way, typically stored in tables within a database system.",
            options: ["Column", "Table", "Row", "Query"],
            correctAnswer: "Table",
        },
        {
            question: "A ____________ is a set of rules that define the relationships and structure of data within a database, ensuring data integrity and reducing redundancy.",
            options: ["Schema", "Index", "Query", "Trigger"],
            correctAnswer: "Schema",
        },
        {
            question: "In database normalization, the process of ____________ is aimed at eliminating redundant data by breaking down larger tables into smaller, related ones.",
            options: ["Denormalization", "Indexing", "Normalization", "Aggregation"],
            correctAnswer: "Normalization",
        },
        {
            question: "In database normalization, the process of ____________ is aimed at eliminating redundant data by breaking down larger tables into smaller, related ones.",
            options: ["Hierarchical database", "Relational database", "Network database", "Document database"],
            correctAnswer: "Relational database",
        },
        {
            question: "A ____________ is a special type of stored procedure that automatically executes in response to a certain event or action in the database.",
            options: ["Trigger", "View", "Function", "Procedure"],
            correctAnswer: "Const",
        },
        {
            question: " ____________ is a type of database system that organizes and stores data as documents, often used in NoSQL databases.",
            options: ["Hierarchical database", "Relational database", "Network database", "Document database"],
            correctAnswer: "Document database",
        },
        {
            question: "A surgical____________ is a tool used for carrying out operations.",
            options: ["internal", "compressing", "instrument", "in-patch"],
            correctAnswer: "instrument",
        },
        {
            question: "Programs that run ____________ do not involve amy terminal or user interaction.",
            options: ["return", "exit", "continue", "break"],
            correctAnswer: "break",
        },
        {
            question: "The DBMS determines the amount and type of information that each user can access from a ____________.",
            options: ["Data", "Database", "Field", "Table"],
            correctAnswer: "Database",
        },
        {
            question: "Multi-user databases are managed by a piece of software called a ____________ (DBMS).",
            options: ["Database Management System", "Data Backup Management Software", "Digital Business Management System", "Data-Based Monitoring System"],
            correctAnswer: "Database Management System",
        },
    ];
}

let timeRemaining = 600;
let timerInterval;

function startQuiz() {
    const quizForm = document.getElementById("quiz-form");
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        // Dynamically generate question and options
        questionDiv.innerHTML = ` 
            <p>${index + 1}. ${q.question}</p>
            ${q.options
                .map(
                    (option) => `
                <input type="radio" id="q${index}-option${option}" name="q${index}" value="${option}">
                <label for="q${index}-option${option}">${option}</label><br>
            `
                )
                .join("")}
        `;
        quizForm.appendChild(questionDiv);
    });

    startTimer(); // Start the timer
}

// Function to start the countdown timer
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
        const selectedAnswer = formData.get(`q${index}`);
        if (selectedAnswer === q.correctAnswer) {
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
