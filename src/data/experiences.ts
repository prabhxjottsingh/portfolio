import { Skill } from "./skills";

export const experiences = [
    {
        title: "Full Stack Developer",
        company: { name: "Ecozen", websiteUrl: "https://www.ecozensolutions.com/" },
        period: "Jul 2024 - Present",
        description: [
            "Built a provisioning system with real-time WebSocket updates for production pipelines, leveraging ReactFlow for task arrangement and automating resource creation using templates.",
            "Enhanced backend reliability by adding type safety checks with middleware, integrating 15+ APIs, and creating 30+ APIs for CRUD operations using ZOD and optimized MongoDB queries.",
            "Developed access control APIs for managing resource permissions and implemented a logging system to track changes across 10+ APIs for admin visibility.",
            "Implemented task dependency management, enforcing sequential task execution, preventing cyclic dependencies, and adding deadline tracking to monitor delayed resources.",
        ],
        skills: [
            {
                name: "React",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
            },
            {
                name: "NodeJs",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
            },
            {
                name: "MongoDB",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
            },
            {
                name: "Express",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
            },
            {
                name: "Javascript",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            },
            {
                name: "Tailwind",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"
            }

        ],
    },
    {
        title: "Full Stack Developer Intern",
        company: { name: "Clappia | No Code Platform", websiteUrl: "https://clappia.com" },
        period: "Dec 2023 - June 2024",
        description: [
            "Engineered backend integration of real-time web sockets, offering users live task progress updates and resource copyingvisibility.Utilized a modular approach, involving refactoring of a monolithic function into smaller, reusable multiple functions, thereby enhancing platform reliability, user engagement, and code maintainability.",
            "Significantly enhanced user experience by integrating MatBottomSheet and NgbModal for seamless data visualization, andimplementing JSON and XML editor fields using the CodeMirror library. This integration replaced the cumbersome input fields, enabling users to easily write and validate JSON and XML code. Additionally, these improvements were incorporated into the REST API node and getDataFromRESTAPI field, effectively reducing user input time and frustration.",
            "Enabled state machine rerun and stoppage for workflow control, created reusable components for multiple fields, and automated charts creation upon app creation through AWS Stream resource, enhancing application localization and providing insightful data visualization.",
            "Enhanced system efficiency by implementing CRUD operations, optimized database performance with local storage caching, effectively managed DynamoDB streams, developed and subscribed to AWS Lambda functions, and implemented rate limiting for email verification, ensuring optimal system performance and security."
        ],
        skills: [
            {
                name: "Angular",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg"
            },
            {
                name: "TypeScript",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            },
            {
                name: "AWS",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg"
            },
            {
                name: "NodeJs",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
            },
            {
                name: "DynamoDB",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg"
            },
            {
                name: "WebSocket",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/websocket/websocket-original.svg"
            },
        ],
    },
    {
        title: "Teaching Assistant",
        company: { name: "Ask Senior", websiteUrl: "https://asksenior.in" },
        period: "Mar 2023 - Oct 2023",
        description: [
            "Conducted Leetcode Contest Discussions",
            "Solved Data Structures and Algorithms related queries.",
        ],
        skills: [
            {
                name: "Algorithms",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/algorithms/algorithms-original.svg"
            },
            {
                name: "Data Structures",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/datastructures/datastructures-original.svg"
            },
            {
                name: "C++",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
            },
            {
                name: "Communication",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/communication/communication-original.svg"
            }
        ],
    },

];
