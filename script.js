// imports
import { openings, replies } from "/assets/modules/dialog.js";
import { randomItem } from "/assets/modules/random.js";

// html elements
const messageSpace = document.getElementById("messageSpace");

// functions
function main() {
    writeMessage("buyer", randomItem(openings)).then((userChoice) => {
        // writeMessage("buyer", replies[userChoice]);
        nextDialog(userChoice);
    });
}

function nextDialog(userChoice) {
    writeMessage("buyer", replies[userChoice]).then((nextUserChoice) => {
        nextDialog(nextUserChoice);
    });
}

function ohNo(message) {
    // handle errors
    console.error(message);
    alert(`oh no! ${message}`);
}

function writeMessage(sender, content) {
    // handle bad arguments
    if (sender === undefined) return ohNo("sender is undefined");
    if (content === undefined) return ohNo("content is undefined");
    if (content.text === undefined) return ohNo("content.text is undefined");

    // demo logic
    messageSpace.innerText = `${sender}: ${content.text}`;
    return new Promise((resolve) => {
        requestUserInput("choice", content).then((userChoice) => {
            resolve(userChoice);
        });
    });
}

function createMultipleChoice(options) {
    //
    // handle bad arguments
    if (options === undefined) return ohNo("no options given");

    if (!(typeof options === "object"))
        return ohNo(
            `expected options to be object but it was ${typeof options}`
        );

    if (Object.keys(options).length < 1)
        return ohNo(
            `expected at least 1 option, but got ${Object.keys(options).length}`
        );

    return new Promise((resolve) => {
        for (let o of options.userResponses) {
            const button = document.createElement("button");
            button.innerText = o.text;
            button.addEventListener("click", () => {
                resolve(o.state);
            });
            messageSpace.appendChild(button);
        }
    });
}

function requestUserInput(type, options = []) {
    switch (type) {
        case "choice":
            return new Promise((resolve) => {
                createMultipleChoice(options).then((userChoice) => {
                    resolve(userChoice);
                });
            });
        default:
            return ohNo(`unrecognised input type: ${type}`);
            break;
    }
}

// program
main();
