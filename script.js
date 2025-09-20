// imports

// html elements
const messageSpace = document.getElementById("messageSpace");

// functions
function main() {
    writeMessage("anon", "is this still available?");
}

function ohNo(message) {
    // handle errors
    console.error(message);
    alert(`oh no! ${message}`);
}

function writeMessage(sender, content) {
    // demo logic
    messageSpace.innerText = `${sender}: ${content}`;
    requestUserInput("choice", ["yes", "no"]).then((res) => {
        alert(res);
    });
}

function createMultipleChoice(options) {
    //
    // handle bad arguments
    if (options === undefined) ohNo("no options given");

    if (!Array.isArray(options))
        ohNo(`expected options to be array but it was ${typeof options}`);

    if (options.length < 1) ohNo("not enough options given");

    return new Promise((resolve) => {
        for (let o of options) {
            const button = document.createElement("button");
            button.innerText = o;
            button.addEventListener("click", () => {
                resolve(button.innerText);
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
            ohNo(`unrecognised input type: ${type}`);
            break;
    }
}

// program
main();
