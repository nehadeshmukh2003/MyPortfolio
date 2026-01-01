/* Typing effect */
const text = "Full-Stack Developer | Cloud Enthusiast | SIH Finalist";
let idx = 0;
function type() {
  document.querySelector(".typing").innerHTML = text.slice(0, ++idx);
  if (idx < text.length) setTimeout(type, 70);
}
window.onload = type;

/* Project detail modal */
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("projectTitle");
const modalDesc = document.getElementById("projectDesc");

// const projectDetails = {
//   disease: {
//     title: "Multiple Disease Prediction App",
//     desc: "Built using machine learning algorithms to predict diseases from symptoms. Features – ML models, Streamlit interface, real-time prediction, medical awareness."
//   },
//   ayurveda: {
//     title: "Vedvritti · Ayurveda E-Library",
//     desc: "Digital archive of Ayurveda books with search, PDF viewer and authentication. Goal is to preserve ancient medical knowledge for modern access."
//   },
//   toy: {
//     title: "Toy Rental System",
//     desc: "Full-stack rental platform built using Java, JSP, and MySQL. Includes subscription plans, login system, cart, and automated receipt generation."
//   }
// };

const projectDetails = {
  disease: {
    title: "Multiple Disease Prediction App",
    desc: `
An AI-powered healthcare web application designed to predict multiple diseases based on user-provided symptoms. 
This platform integrates advanced machine learning algorithms with a user-friendly Streamlit interface to provide 
real-time predictions for conditions like Diabetes, Heart Disease, and Parkinson’s. By offering instant medical insights, 
the app empowers users to take proactive steps toward their health, increasing awareness and accessibility to quality 
healthcare for everyone.
Features include intuitive symptom input, accurate ML-based predictions, and a clean, interactive UI that simplifies 
the process of early disease detection.`
  },

  ayurveda: {
    title: "Vedvritti · Ayurveda E-Library",
    desc: `
Vedvritti is a comprehensive digital library dedicated to preserving and promoting ancient Ayurveda literature. 
This platform provides students, researchers, and enthusiasts with easy online access to classical texts, search 
functionality, and organized categorization of books. With secure storage and download options, users can conveniently 
access authentic content anytime, anywhere.
The goal is to bridge the gap between ancient medical knowledge and modern technology, making Ayurveda 
accessible to a wider audience while ensuring that historical manuscripts are preserved digitally for future generations.`
  },

  toy: {
    title: "Toy Rental System",
    desc: `
A full-stack online platform designed to simplify toy rentals for parents and caregivers. Built using Java, JSP, 
Servlets, MySQL, HTML, CSS, and JavaScript, the system offers subscription-based rental plans, user authentication, 
role management, and a streamlined cart system. Users can browse available toys, subscribe for rental periods, and 
receive automated invoices or receipts for their transactions.
For administrators, the platform provides a powerful backend to manage users, monitor rental durations, and track 
inventory efficiently. This system not only reduces the cost of purchasing toys but also promotes a sustainable, 
shareable economy for children’s learning and entertainment resources.`
  }
};



document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-project");
    modalTitle.innerText = projectDetails[id].title;
    modalDesc.innerText = projectDetails[id].desc;
    modal.style.display = "flex";
  });
});

document.querySelector(".close").onclick = () => modal.style.display = "none";
window.onclick = e => { if(e.target===modal) modal.style.display="none"; }
