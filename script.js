const sub = document.getElementById("subm");
var cont = document.getElementById("let").innerText;
var q = 0;
var qnLog = [];
var anLog = [
  0, 1, 2, 0, 1, 0, 1, 0, 2, 0, 1, 0, 0, 1, 0, 1, 2, 0, 0, 1, 0, 1, 0, 0, 1, 0,
  1, 0, 1, 0,
];

const endqns = 30;

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
    qn: "What does 'VPN' stand for?",
    options: [
      "Virtual Private Network",
      "Very Private Network",
      "Virtual Public Network",
      "Volatile Personal Network",
    ],
  },
  {
    qn: "Which of the following is a common method of authentication?",
    options: ["Biometrics", "Demographics", "Acoustics", "Chronometrics"],
  },
  {
    qn: "What is the purpose of a firewall in cybersecurity?",
    options: [
      "Monitor network traffic",
      "Block unauthorized access",
      "Encrypt data",
      "Create secure passwords",
    ],
  },
  {
    qn: "What is a phishing attack?",
    options: [
      "Fraudulent attempt to obtain sensitive information",
      "A type of malware",
      "A secure way of communication",
      "A network vulnerability",
    ],
  },
  {
    qn: "What is the primary function of antivirus software?",
    options: [
      "Detect and remove malicious software",
      "Optimize system performance",
      "Encrypt files",
      "Backup data",
    ],
  },
  {
    qn: "Which encryption algorithm is widely used for secure data transmission over the internet?",
    options: [
      "AES (Advanced Encryption Standard)",
      "DES (Data Encryption Standard)",
      "RSA (Rivest–Shamir–Adleman)",
      "SHA (Secure Hash Algorithm)",
    ],
  },
  {
    qn: "What is two-factor authentication (2FA)?",
    options: [
      "A security process in which the user provides two different authentication factors",
      "Using two passwords for the same account",
      "Having two separate user accounts",
      "A backup authentication method",
    ],
  },
  {
    qn: "What is a common method to protect sensitive information on a computer screen?",
    options: [
      "Privacy screen filters",
      "Increasing screen brightness",
      "Using public computers",
      "Disabling firewalls",
    ],
  },
  {
    qn: "What is the purpose of a CAPTCHA?",
    options: [
      "Distinguish between human and automated input",
      "Enhance screen resolution",
      "Prevent overheating",
      "Encrypt communication",
    ],
  },
  {
    qn: "What is a DDoS attack?",
    options: [
      "Distributed Denial of Service",
      "Data Download and Storage",
      "Direct Data Overwrite System",
      "Digital Display of Security",
    ],
  },
  {
    qn: "What is the term for a program that appears legitimate but is designed to carry out harmful activities?",
    options: ["Trojan horse", "Spyware", "Firewall", "Botnet"],
  },
  {
    qn: "What is the most secure way to connect to a Wi-Fi network?",
    options: [
      "WPA3 (Wi-Fi Protected Access 3)",
      "WEP (Wired Equivalent Privacy)",
      "Open network without a password",
      "MAC filtering",
    ],
  },
  {
    qn: "What is the purpose of a VPN tunnel?",
    options: [
      "Securely transmit data between two points",
      "Increase internet speed",
      "Encrypt email communication",
      "Create a virtual LAN",
    ],
  },
  {
    qn: "What is the term for software that is designed to block unauthorized access to a computer system?",
    options: ["Firewall", "Antivirus", "Malware", "Spyware"],
  },
  {
    qn: "What does the acronym 'HTTPS' stand for in a website URL?",
    options: [
      "Hypertext Transfer Protocol Secure",
      "Hypertext Transport Protocol Standard",
      "Hyperlink and Text Processing System",
      "Highly Trusted Secure Protocol",
    ],
  },
  {
    qn: "What is social engineering in the context of cybersecurity?",
    options: [
      "Manipulating individuals to divulge confidential information",
      "Improving social interactions online",
      "Creating social media accounts",
      "Enhancing teamwork in a cybersecurity team",
    ],
  },
  {
    qn: "What is the purpose of a password manager?",
    options: [
      "Securely store and manage passwords",
      "Generate random passwords",
      "Block incoming threats",
      "Monitor internet speed",
    ],
  },
  {
    qn: "What is the primary goal of ransomware?",
    options: [
      "Encrypt files and demand payment for their release",
      "Steal personal information",
      "Disrupt network communication",
      "Delete system files",
    ],
  },
  {
    qn: "What is the first line of defense against malware?",
    options: [
      "Antivirus software",
      "User awareness and education",
      "Firewall",
      "Regular system backups",
    ],
  },
  {
    qn: "What is a security vulnerability?",
    options: [
      "A weakness in a system that could be exploited",
      "A type of antivirus software",
      "A secure network connection",
      "A method of secure communication",
    ],
  },
  {
    qn: "What is the term for the practice of disguising a message to make it unreadable by unauthorized users?",
    options: ["Encryption", "Decryption", "Authentication", "Authorization"],
  },
  {
    qn: "What is a 'zero-day' vulnerability?",
    options: [
      "A previously unknown software vulnerability",
      "A software bug that occurs zero days after installation",
      "A vulnerability that lasts for zero days",
      "A vulnerability with a severity rating of zero",
    ],
  },
  {
    qn: "What does the term 'phreaking' refer to in the context of cybersecurity?",
    options: [
      "Manipulating or exploiting the phone network",
      "Unauthorized access to computer networks",
      "Phishing attacks on email accounts",
      "Securing phone conversations",
    ],
  },
  {
    qn: "What is the purpose of a security audit?",
    options: [
      "Evaluate and improve the security of a system",
      "Speed up internet connectivity",
      "Detect phishing emails",
      "Monitor website traffic",
    ],
  },
  {
    qn: "What is a 'Man-in-the-Middle' (MitM) attack?",
    options: [
      "An attack where an unauthorized entity intercepts and alters communication between two parties",
      "A type of firewall",
      "A method of secure data transmission",
      "A form of antivirus software",
    ],
  },
  {
    qn: "What is the primary purpose of penetration testing?",
    options: [
      "Identify vulnerabilities in a system",
      "Increase system speed",
      "Encrypt data transmission",
      "Detect phishing attempts",
    ],
  },
  {
    qn: "What is the term for a program that replicates itself and spreads to other computers?",
    options: ["Worm", "Trojan horse", "Spyware", "Adware"],
  },
  {
    qn: "What is the purpose of multi-factor authentication (MFA)?",
    options: [
      "Enhance security by requiring multiple forms of identification",
      "Simplify password management",
      "Increase internet speed",
      "Encrypt email communication",
    ],
  },
  {
    qn: "What does 'VPN' stand for?",
    options: [
      "Virtual Private Network",
      "Very Private Network",
      "Virtual Public Network",
      "Volatile Personal Network",
    ],
  },
  {
    qn: "Which of the following is a common method of authentication?",
    options: ["Biometrics", "Demographics", "Acoustics", "Chronometrics"],
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
<button class="qns">2</button>
<button class="qns">3</button>
<button class="qns">4</button>
<button class="qns">5</button>
<button class="qns">6</button>
<button class="qns">7</button>
<button class="qns">8</button>
<button class="qns">9</button>
<button class="qns">10</button>
<button class="qns">11</button>
<button class="qns">12</button>
<button class="qns">13</button>
<button class="qns">14</button>
<button class="qns">15</button>
<button class="qns">16</button>
<button class="qns">17</button>
<button class="qns">18</button>
<button class="qns">19</button>
<button class="qns">20</button>
<button class="qns">21</button>
<button class="qns">22</button>
<button class="qns">23</button>
<button class="qns">24</button>
<button class="qns">25</button>
<button class="qns">26</button>
<button class="qns">27</button>
<button class="qns">28</button>
<button class="qns">29</button>
<button class="qns">30</button>




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
  if (document.hidden && jv == true) {
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
function handleFocus() {
  console.log("Website is in focus");
}

function handleBlur() {
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
}

// Set up event listeners for focus and blur
window.addEventListener("blur", handleBlur);

// Initial check on page load
if (document.hasFocus()) {
  handleFocus();
} else {
  handleBlur();
}
const disq = function () {};
