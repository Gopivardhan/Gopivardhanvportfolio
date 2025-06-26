const navLinks = [
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Education", // experience in the orginal one 
    link: "#education", 
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#testimonials",
  },
  {
    name: "Research",
    link: "#research",
  },
  {
    name: "Certifications",
    link: "#certificates",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 9000, suffix: "+", label: "Linkdin Followers" },
  { value: 9, suffix: "+", label: "Repositories" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 2, suffix: "", label: "IEEE Research Papers" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Web development",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Code and Create",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Machine learning and AI",
    modelPath: "/models/VSCode.glb",
    scale: 2,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    review: "Pursuing my Master's in Computer Science at UCF has expanded my technical expertise, research mindset, and passion for innovation in AI and software development.",
    logoPath: "/images/UCF_logo.png",
    title: "Master's in Computer Science",
    date: "August 2024 - Present",
    responsibilities: [
      "GPA: 3.8/4.0",
      "Focused on areas like Generative AI, Software Development, and Blockchain.",
      "Working on cutting-edge projects involving LLMs, prompt engineering, and automation.",
    ],
  },
  {
    review: "My time at SRM laid the foundation for my career in computer science, combining strong theoretical knowledge with hands-on projects and interdisciplinary learning.",
    imgPath: "/images/srm-campus.png", // Use a campus-related image or a placeholder
    logoPath: "/images/srmlogo.png",  // Use SRM's official logo here
    title: "B.Tech in Computer Science and Engineering",
    date: "August 2020 - May 2024",
    responsibilities: [
      "GPA: 9.31/10.0",
      "Built core fundamentals in programming, algorithms, and emerging technologies.",
      "Led final-year project on Lung Cancer Detection using LLMs; published in IEEE conference.",
    ],
  },  
  // {
  //   review: "Adrian's work on Appwrite's mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
  //   imgPath: "/images/exp3.png",
  //   logoPath: "/images/logo3.png",
  //   title: "React Native Developer",
  //   date: "March 2019 - May 2020",
  //   responsibilities: [
  //     "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
  //     "Improved app performance and user experience through code optimization and testing.",
  //     "Coordinated with the product team to implement features based on feedback.",
  //   ],
  // },
  
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Lung Cancer Detection using LLM",
    mentions: "Transformers (Hugging Face), scikit-learn, Flask, Streamlit, AWS EC2/S3, LangChain, NLTK",
    imgPath: "/images/lung_cancer.png",
    description: "Developed a web-based system integrating predictive analytics and Large Language Models for early diagnosis and treatment of lung cancer, aiming to streamline healthcare workflows.",
    impact: "Improved diagnosis time by 30% compared to traditional methods and increased accessibility for clinicians and patients with 20% faster data processing and report generation."
  },

  {
    name: "Crypto Price Prediction using LSTM",
    mentions: "LSTM, Python, TensorFlow, Pandas, NumPy, Scikit-learn",
    imgPath: "/images/crypto_prediction.png",
    description: "Designed a cryptocurrency price prediction system using the LSTM algorithm to forecast market trends.",
    impact: "Achieved a Mean Absolute Error (MAE) of 3.2% and improved forecasting accuracy by 15% compared to traditional methods."
  },
  {
    name: "LLM-Agentic FHE Code Generation",
    mentions: "Mistral, Groq, OpenRouter, TenSEAL (CKKS), Python, Pytest, Google Colab, VS Code",
    imgPath: "/images/project_3.png",
    description: "Built an LLM-powered agent to generate accurate, compilable CKKS homomorphic encryption code, making FHE more accessible to non-experts.",
    methods: "Agentic Methods: Prompting, Decoding, Self-Improvement, RAG"
  },
  {
    name: "Agentic AI project in progress.....",
  },
  /* Template for adding new projects:
  {
    name: "Project Title",                    // Required: The name of your project
    mentions: "Tech1, Tech2, Tech3",         // Required: Technologies used, comma-separated
    imgPath: "/images/your_image.png",       // Required: Path to project image in public/images/
    description: "Project description",      // Required: Brief overview of the project
    impact: "Project impact/achievements",   // Optional: Key results or achievements
    methods: "Methods used"                  // Optional: Specific methods or approaches used
  },
  */
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: ""
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    url: ""
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: ""
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: ""
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

export const researchPapers = [
  {
    title: "Improved Lung Cancer Detection through Use of Large Language Systems with Graphical Attributes",
    authors: "Gopi Vardhan Vallabhaneni, Yelisetty Shanmukh Rahul, K. Shantha Kumari",
    conference: "Published in: 2024 IEEE International Conference on Computing, Power and Communication Technologies (IC2PCT)",
    date: "Date Added to IEEE Xplore: 08 April 2024",
    doi: "DOI: 10.1109/IC2PCT60090.2024.10486290",
    publisher: "Publisher: IEEE",
    location: "Conference Location: Greater Noida, India",
    imgPath: "/images/researchpaper1.png",
    abstract: "This research introduces a novel AI-driven system for early lung cancer detection by integrating deep learning and large language models (LLMs). The model combines medical images, patient symptoms, and doctor prescriptions to create a rich, multimodal dataset. Using convolutional neural networks (CNNs) for image analysis and LLMs for textual understanding, the system improves diagnostic accuracy by learning from diverse data sources. It not only classifies lung cancer cases but also extracts meaningful insights from medical text and images, aiding personalized treatment decisions. This approach represents a significant step toward precision medicine and enhances early detection capabilities in clinical settings."
  },
  {
    title: "Successful Integration of IoT and Blockchain Technologies Using Several Machine Learning Algorithms",
    authors: "C. Calarany, M Indumathy, P. Senthilraja, D. Suganya, V Gopi Vardhan, Yelisetty Shanmukh Rahul",
    conference: "Published in: 2024 IEEE International Conference on Computing, Power and Communication Technologies (IC2PCT)",
    date: "Date Added to IEEE Xplore: 08 April 2024",
    doi: "DOI: 10.1109/IC2PCT60090.2024.10486595",
    publisher: "Publisher: IEEE",
    location: "Conference Location: Greater Noida, India",
    imgPath: "/images/researchpaper2.png",
    abstract: "Internet of Things (IoT) produces massive amounts of data that need to be processed and saved securely. The strong features of Blockchain makes it as a best candidate for storing the data received from IoT sensors. However, there is a need of concern to take care of the challenges associated with both IoT and blockchain paradigms. Firstly, the enormous amount of data should be effortlessly handled by Blockchain network, without adding much complexity. Secondly, the heterogeneous nature of data that are received from various IoT sensors should be stored within the blockchain."}
];
