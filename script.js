const sub = document.getElementById("subm");
var cont = document.getElementById("let").innerText;
var q = 0;
var qnLog = [];
// var anLog = [2, 0, 1, 1, 3, 0, 3, 2, 0, 1, 3, 0, 2, 1, 1, 2, 2, 3, 1, 0];
var anLog = [
  1,
  1,
  1,
  1,
  0,
  3,
  0,
  0, //(Extremely Hard)
  0, //(Extremely Hard)
  0, //(Extremely Hard)
];

const endqns = 10;
// const correctAnswers = [0, 0, 0, 1, 2, 0, 1, 1, 2, 1];

var h = true;
var jv = true;

// http://jsonblob.com/1197622298986536960
var nam;
var clss;
var sec;
var dat;
var got;
var mark = 0;
sub.addEventListener("click", function () {
  nam = document.getElementById("nam_box").value;
  dpass = document.getElementById("pass").value;
  clss = document.getElementById("class").value;
  sec = document.getElementById("sec").value;
  document.getElementById("nam").innerText = nam;
  document.getElementById("clss").innerText = clss + " " + sec;
  if (clss != "" && sec != "" && nam != "" && dpass == passd) {
    document.getElementById("let").innerHTML = instruct;
    document.getElementById("proceed").addEventListener("click", function () {
      document.getElementById("let").innerHTML = "";
      askQn(i);
    });
  } else {
    alert("Check Credentials");
  }
});
const instruct = `
<div class="py-3 fw-bold d-flex flex-column">
  <h1 class="fw-bolder">Instructions</h1>
  <ul class="fs-4">
      <li>Make sure you have registered in your own name and class</li>
      <li>Select your answers properly as there will be negative marking , 4 marks awarded to correct answers and 1 mark deducted for wrong answers</li>
      <li>The total duration of the exam will be 30 minutes</li>
      <li>You will be disqualified if another window is opened on the device which will be automatically detected by the software</li>
    </ul> 
</div>
<div class="d-flex  flex-column justify-content-center">
  <button id='proceed' class="p-3 ">Proceed</button>

</div>
`;
var i = 0;
var qns = [
  {
    qn: "Explain the principle of least privilege in the context of cybersecurity.",
    options: [
      "Granting maximum access rights to all users",
      "Limiting access rights to the minimum necessary for tasks",
      "Allowing unlimited access to sensitive data",
      "Using the same password for all users",
    ],
  },
  {
    qn: "What is the role of a WAF (Web Application Firewall) in protecting web applications?",
    options: [
      "Preventing users from accessing web applications",
      "Filtering and monitoring HTTP traffic between a web application and the internet",
      "Encrypting data transmitted over the internet",
      "Scanning emails for malware",
    ],
  },
  {
    qn: "Define 'social engineering' in the context of cybersecurity and provide an example.",
    options: [
      "A technique for improving team collaboration",
      "A method of manipulating people into divulging confidential information",
      "A process for upgrading social media accounts",
      "A way to improve online etiquette",
    ],
  },
  {
    qn: "What is the purpose of a honeypot in cybersecurity?",
    options: [
      "Attracting bees to the network",
      "Detecting and analyzing cyber threats",
      "Storing sensitive information",
      "Enhancing network speed",
    ],
  },
  {
    qn: "Explain the concept of multi-factor authentication (MFA) and its advantages.",
    options: [
      "Using multiple authentication factors to complicate the login process",
      "Relying solely on username and password for authentication",
      "Increasing the risk of unauthorized access",
      "Allowing access with a single authentication factor",
    ],
  },
  {
    qn: "What is the significance of regularly updating software and systems in cybersecurity?",
    options: [
      "Increasing the risk of vulnerabilities",
      "Ensuring the latest features are available",
      "Reducing the need for antivirus software",
      "Addressing security vulnerabilities and improving protection",
    ],
  },
  {
    qn: "Define 'biometric authentication' and provide an example of a biometric factor.",
    options: [
      "Authenticating users based on their biological characteristics",
      "Using only usernames and passwords for authentication",
      "A method of securing network connections",
      "Scanning QR codes for authentication",
    ],
  },
  // Extremely Hard, Potentially Unanswerable Questions
  {
    qn: "In a hypothetical quantum computing environment, describe a cryptographic algorithm that is resistant to quantum attacks.",
    options: [
      "Symmetric Key Encryption",
      "Asymmetric Key Encryption",
      "Lattice-based Cryptography",
      "Hash-based Cryptography",
    ],
  },
  {
    qn: "Discuss the potential security implications of utilizing AI-driven autonomous cybersecurity systems.",
    options: [
      "Increased efficiency in threat detection",
      "Potential bias in decision-making",
      "Enhanced adaptability to evolving threats",
      "Privacy concerns in data processing",
    ],
  },
  {
    qn: "Imagine a scenario where an advanced extraterrestrial civilization attempts to hack human computer systems. How would you design a cybersecurity strategy to protect against such a threat?",
    options: [
      "Contemplate the challenges and possible countermeasures",
      "Potential bias in decision-making",
      "Enhanced adaptability to evolving threats",
      "Privacy concerns in data processing",
    ],
  },
];
expectedLevelShufflingPncOnly(qns, anLog);

const askQn = function (i) {
  var w = 0;
  document.getElementById("let").innerHTML = ` <div class="row ">
    <div class="col-8">
        <h1 class="">Question ${i + 1} :</h1>
        <hr style="border-top: 3px solid black">
        <p class="fs-4">${qns[i].qn}</p>

       
       <ol class = 'control'>
       
        <li><input class='op' type="radio" name="y"><span> ${
          qns[i].options[0]
        }</span></li>
        <li><input type="radio" class='op' name="y"><span> ${
          qns[i].options[1]
        }</span></li><li><input type="radio" class='op' name="y"><span> ${
    qns[i].options[2]
  }</span></li><li><input type="radio" class='op' name="y"><span> ${
    qns[i].options[3]
  }</span></li>
       </ol>
    </div>
    <div class="col-4  pt-4">
        <button class="qns">1</button>
<button class="qns ">2</button>
<button class="qns">3</button>
<button class="qns">4</button>
<button class="qns">5</button>
<button class="qns">6</button>
<button class="qns">7</button>
<button class="qns">8</button>
<button class="qns">9</button>
<button class="qns">10</button>



    </div>

    <div class="px-3  justify-content-between d-flex gap-4 ">
    <buton id='next' class="  btn btn-success  p-3">Next Question</buton>
      <button onclick='endExam()' id='end' class="  btn btn-danger p-3">END EXAM AND SUBMIT</button></div>
</div>`;
  var elements = document.querySelectorAll(".op");
  var cursel = -1;
  document.getElementsByClassName("qns")[i].classList.add("ans");
  // Add click event listener to each element
  elements.forEach(function (element, e) {
    element.addEventListener("click", function () {
      cursel = e;
    });
  });
  // var qnsButtons = document.querySelectorAll(".qns");

  // // Add a click event listener to each button
  // qnsButtons.forEach(function (button) {
  //   button.addEventListener("click", function () {
  //     // Display the inner text of the clicked button using alert
  //     askQn(Number(button.innerText) - 1);
  //   });
  // });
  if (i < endqns) {
    i += 1;

    document.getElementById("next").addEventListener("click", function () {
      qnLog.push(cursel);
      if (i < endqns) {
        askQn(i);
      }
      if (i == endqns) {
        endExam();
      }
    });
  }
};
document.getElementsByTagName("html")[0].addEventListener("mouseleave", () => {
  const j = setInterval(() => {
    q += 1;
    console.log(q);
    if (q == 3 && jv == true) {
      document.getElementById("let").innerHTML = "";
      document.getElementsByClassName(
        "overlay"
      )[0].innerHTML = `<div class="position-absolute hid d-flex justify-content-center align-items-center flex-column overlay p-5">
        <h1 class=" fw-bold text-white">
            You are disqualified reload to start again or keep the window open till end of given time to keep the score, you may ask a cyber squad volunteer for help
        </h1>
        <img class="w-25"  src="https://ugokawaii.com/wp-content/uploads/2022/10/redcard.gif">
    </div>`;
      h = false;
      jv = false;
    }
  }, 1000);
  if (jv == true) {
    document.getElementsByClassName("hid")[0].classList.remove("hid");
    document
      .getElementsByTagName("html")[0]
      .addEventListener("mouseenter", () => {
        if (h == true) {
          document.getElementsByClassName("overlay")[0].classList.add("hid");
        }

        q = 0;
        clearInterval(j);
      });
  }
});
var passd;
setInterval(() => {
  const startTime = new Date("2024-01-27T15:54:00");
  const currentTime = new Date();
  const timeDifferenceInMinutes = (currentTime - startTime) / (1000 * 60);
  passd = timeDifferenceInMinutes <= 2 ? "tacobell" : "willywonka";
}, 10000);

const dataSend = function () {
  var mks = "";
  qnLog.forEach((e, i) => {
    if (anLog[i] == e) {
      mks = String(Number(mks) + 1);
    }
    console.log(anLog[i], e);
  });
  dat = { user: nam, grade: clss + sec, mrk: mks };
  get();

  setTimeout(() => {
    got.push(dat);
    out();
  }, 2000);
};
const dc = function () {
  if (dat in got) {
    console.log("yay");
  }
};
const get = function () {
  // Specify the URL of the API you want to fetch data from
  const url = "https://jsonblob.com/api/1201120578731106304";
  // Use the fetch API to make the request
  fetch(url)
    .then((response) => {
      // Check if the request was successful (status code 200-299)
      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.status);
      }
      // Parse the JSON response
      return response.json();
    })
    .then((data) => {
      // Do something with the data
      got = data;
    })
    .catch((error) => {
      // Handle errors here
      console.error("Fetch error:", error);
    });
};
const out = function (url = "https://jsonblob.com/api/1201120578731106304") {
  // Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Specify the URL of the API endpoint you want to update
  // Example URL, replace with your API endpoint

  // Data to be updated (replace with your actual data)

  // Convert the data to a JSON string
  var jsonData = JSON.stringify(got);

  // Set up the PUT request
  xhr.open("PUT", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  // Define a function to handle the response when it is received
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      // Check if the request is complete
      if (xhr.status == 200) {
        // Check if the request was successful
        // Parse the JSON response (if needed)
        var responseData = JSON.parse(xhr.responseText);
        console.log("Data updated successfully:", responseData);
        document.getElementById(
          "let"
        ).innerHTML = `<div class="d-flex  flex-column justify-content-center align-items-center"> <h1 class="display-3 fw-bold">Exam Submitting</h1>
        <h3>You May Now leave the page</h3>
        <div class=" fw-bold fs-1">Done</div>`;
      } else {
        // Handle errors here
      }
    }
  };

  // Send the PUT request with the JSON data
  xhr.send(jsonData);
};
const endExam = function () {
  jv = false;
  h = false;

  dataSend();
  document.getElementById(
    "let"
  ).innerHTML = `<div class="d-flex  flex-column justify-content-center align-items-center"> <h1 class="display-3 fw-bold">Exam Submitting</h1>
  <h3>Don't leave the page until confirmation arrives</h3>
  <div class=" fw-bold fs-1">Wait...</div>`;
  get();
};

const j = setInterval(() => {
  var endTime = new Date("2024-01-24T08:05:00");

  var currentTime = new Date();

  var timeDifference = endTime - currentTime;

  var secondsDifference = Math.floor(timeDifference / 1000);

  var minutes = Math.floor(secondsDifference / 60);
  var seconds = secondsDifference % 60;
  if (minutes > 0 || seconds > 0) {
    document.getElementById("time").innerText = minutes + ":" + seconds;
    if (minutes < 5) {
      document.getElementById("time").style.color = "red";
    }
  } else if (minutes == 0 && seconds == 0) {
    endExam();
    clearInterval(j);
  }
}, 1000);

//algorithm not upto level borderline errors there you please dont use it unless its an emergency
function expectedLevelShufflingPncOnly(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    throw new Error("Arrays must have the same length");
  }

  const permutation = Array.from(
    { length: arr1.length },
    (_, index) => index
  ).sort(() => Math.random() - 0.5);
  const shuffledArr1 = permutation.map((index) => arr1[index]);
  const shuffledArr2 = permutation.map((index) => arr2[index]);
  arr1.length = 0;
  arr2.length = 0;
  arr1.push(...shuffledArr1);
  arr2.push(...shuffledArr2);
}
function handleVisibilityChange() {
  if (document.hidden) {
    document.getElementById("let").innerHTML = "";
    document.getElementsByClassName(
      "overlay"
    )[0].innerHTML = `<div class="position-absolute hid d-flex justify-content-center align-items-center flex-column overlay p-5">
      <h1 class=" fw-bold text-white">
          You are disqualified reload to start again or keep the window open till end of given time to keep the score, you may ask a cyber squad volunteer for help
      </h1>
      <img class="w-25"  src="https://ugokawaii.com/wp-content/uploads/2022/10/redcard.gif">
  </div>`;
    h = false;
    jv = false;
    document.getElementsByClassName("hid")[0].classList.remove("hid");
  } else {
    console.log("Window is in focus");
  }
}
// Set up event listener for visibility change
document.addEventListener("visibilitychange", handleVisibilityChange);

// Initial check on page load
handleVisibilityChange();
