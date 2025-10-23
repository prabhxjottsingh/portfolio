import { Skill } from "./skills";

export const experiences = [
    {
        title: "Software Engineer",
        company: { name: "INDmoney", websiteUrl: "https://www.indmoney.com/" },
        period: "May 2025 - Present",
        description: [
            "Developed and optimized backend workflows for ERPNext integration by implementing mock API decorators, batch processing, and Redis caching—enhancing performance, debugging efficiency, and system reliability across development and pre-production setups.",
            "Engineered and maintained multiple data migration and synchronization DAGs to automate reconciliation with external systems (e.g., US Stocks team), ensuring data integrity, reducing manual intervention, and optimizing database load with efficient chunk-based operations.",
            "Enhanced large-scale financial data processing pipelines by re-architecting accrual and invoice calculation flows, introducing batching, logging, and fault-tolerant Celery task management to eliminate worker crashes and memory overflows.",
            "Built internal dashboards and monitoring tools for issue tracking and real-time visibility into transactional and posting errors, empowering business teams to resolve data inconsistencies without engineering dependency.",
            "Revolving around manageing the highload of data for accounts and financial products.",
        ],
        skills: [
            {
                name: "Python",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
            },
            {
                name: "Django",
                icon: "https://avatars.githubusercontent.com/u/27804?s=200&v=4"
            },
            {
                name: "Clickhouse",
                icon: "https://avatars.githubusercontent.com/u/54801242?s=200&v=4"
            },
            {
                name: "Docker",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
            },
            {
                name: "AWS",
                icon: "https://avatars.githubusercontent.com/u/2232217?s=200&v=4"
            },
            {
                name: "Kubernetes",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg"
            }

        ],
    },
    {
        title: "Full Stack Developer",
        company: { name: "Ecozen", websiteUrl: "https://www.ecozensolutions.com/" },
        period: "Jul 2024 - May 2025",
        description: [
            "Designed a hierarchical task management system with tree-structured visibility for devices, subsystems, and tasks, optimizing workflow automation using MongoDB and React Flow.",
            "Implemented MongoDB Aggregation Pipelines and caching mechanisms to enhance data retrieval performance, real-time updates, and analytics for task tracking and device provisioning",
            "Automated resource and task lifecycle management by integrating logging, bulkWrite operations across multiple MongoDB tables, and WebSockets for real-time synchronization.",
            "Utilized a DFS-based approach to validate task and subsystem flows, ensuring proper task completion while enforcing child resource dependencies, allowing execution only after parent resources are completed.",
            "Enhanced role-based access control by implementing Super Admin-controlled user permissions, ensuring secure and efficient access to product and task data.",
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
