switch(prompt("Hello?")) {
    //beginning prompt, asks for user input
        case "hi":
            console.log("go away");
            //saying hi in the prompt entered returns "go away"
        case "hello":
            console.log("Why are you like this?");
            //saying hello in the prompt entered returns the above log
        case "...":
            console.log("fine, be like that then.");
            //saying "..." in the prompt entered returns the above log
            default:
            console.log("what?");
            //if you say something that isnt on the list, it returns "what?"
            //used as a failsafe in case they typed something not accounted for
    }
    