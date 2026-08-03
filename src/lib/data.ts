import type { LucideIcon } from 'lucide-react';
import { Briefcase, Target, Phone, FileText, Layers, BotMessageSquare, Wand2, BrainCircuit, SlidersHorizontal, Sparkle, Database, Workflow, GitFork, Cog, Users, Rocket, ShieldCheck, BarChart3, Zap, MessageCircle, LayoutGrid, Shuffle, Search, Cpu, AudioWaveform, Mic2, Eye, PenTool, PieChart, CloudCog, Volume2, Shield, HeartPulse, Activity, GraduationCap, Network, Video } from 'lucide-react';

export interface NavLink {
  href: string;
  label: string;
  admin?: boolean;
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/ai-agents', label: 'AI Agents' },
  { href: '/cynemora', label: 'CyneMora' },
  { href: '/enterprise', label: 'Enterprise' },
  { href: '/services', label: 'Services' },
  { href: '/services/web-and-graphic-design', label: 'Web, Design & Marketing' },
  { href: '/about', label: 'About Us' },
  { href: '/partnerships', label: 'Partners' },
  { href: '/contact', label: 'Contact' },
  { href: '/admin', label: 'Admin', admin: true },
];

export interface Platform {
  id: string;
  name: string;
  description: string;
  href: string;
  Icon: LucideIcon;
  isPremium?: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string; // Short description for cards
  detailedDescription: string[]; // Array of 4 paragraphs for the dedicated service page
  Icon: LucideIcon;
  href: string; // Link to the dedicated service page
}

export const services: Service[] = [
  {
    id: 'agentic-ai-systems',
    name: 'Agentic AI',
    description: 'Empowering autonomous, goal-driven AI systems capable of reasoning, planning, and taking intelligent actions with minimal human input. Agentic AI enhances workflow automation, decision-making, and adaptive problem-solving across healthcare and enterprise environments.',
    detailedDescription: [
      "ChanceTEK's Agentic AI service delivers autonomous, goal-driven AI agents capable of complex reasoning, planning, and executing multi-step tasks across various digital systems. These agents are designed to operate with minimal human oversight, proactively working towards predefined objectives by interacting with their environment and making decisions.",
      "Our Agentic AI solutions are built using advanced AI frameworks that enable agents to perceive their environment, maintain a state, reason about actions, and learn from outcomes. They can be equipped with tools to interact with APIs, databases, web services, and other software, allowing them to perform a wide range of digital tasks. The architecture supports long-running tasks and complex workflow orchestration.",
      "Applications of Agentic AI are transformative, ranging from automating complex business processes like supply chain optimization or personalized marketing campaign management, to creating sophisticated digital workers that can perform data analysis, report generation, or even software testing. They are ideal for scenarios requiring adaptability, learning, and autonomous problem-solving.",
      "Deploying Agentic AI allows businesses to achieve unprecedented levels of automation and efficiency in complex operational areas. These agents can significantly reduce manual effort, accelerate task completion, and unlock new capabilities by handling tasks previously too complex for traditional automation. This leads to cost savings, improved accuracy, and the ability to scale operations rapidly."
    ],
    Icon: BrainCircuit,
    href: '/services/agentic-ai-systems'
  },
  {
    id: 'custom-ai-agent',
    name: 'Custom AI Agent',
    description: 'Design and deploy bespoke AI agents tailored to your specific business processes, workflows, and goals for maximum impact.',
    detailedDescription: [
      "Our Custom AI Agent service focuses on designing and building bespoke AI agents that are meticulously tailored to your unique business operations. Unlike off-the-shelf solutions, these agents are engineered from the ground up to integrate seamlessly into your existing workflows, understand your specific data, and execute tasks according to your precise business logic and objectives.",
      "We employ a collaborative approach, starting with a deep dive into your processes to identify key areas for automation and intelligence. Using state-of-the-art frameworks and models, we construct agents with custom skills, knowledge bases, and decision-making capabilities. This includes everything from defining the agent's personality and communication style to integrating it with your proprietary software and third-party APIs.",
      "Custom AI agents are perfect for specialized tasks that generic AI cannot handle. This includes automating niche industry workflows, performing proprietary data analysis, acting as an internal expert on your company's knowledge, or providing highly personalized customer service that reflects your brand's unique voice. If you have a process that is unique to your business, a custom agent can be built to manage it.",
      "The value of a Custom AI Agent lies in its perfect alignment with your business needs. This results in higher accuracy, greater efficiency, and a solution that grows with your company. By automating specialized tasks, you free up your team to focus on strategic initiatives, reduce operational costs, and create a significant competitive advantage through purpose-built intelligent automation."
    ],
    Icon: Wand2,
    href: '/services/custom-ai-agent'
  },
  {
    id: 'ai-powered-web-apps',
    name: 'AI-Powered Web Apps',
    description: 'Develop intelligent and responsive web applications with integrated AI features for a dynamic, personalized user experience.',
    detailedDescription: [
      "Our AI-Powered Web Apps service delivers modern, responsive web applications with cutting-edge AI functionalities built into their core. We go beyond standard web development by integrating intelligent features that create dynamic, personalized, and interactive experiences for your users, setting your digital presence apart from the competition.",
      "We build on a foundation of modern web technologies like Next.js and React, combined with powerful AI models for features like natural language search, recommendation engines, content generation, and data analysis. Our development process ensures that the AI is not just an add-on, but a seamless part of the user experience, all while maintaining high performance, security, and scalability.",
      "Use cases are incredibly broad. We can build e-commerce sites with AI-driven product recommendations, SaaS platforms with intelligent analytics dashboards, content websites that personalize the articles shown to users, or customer portals with integrated AI assistants to help users navigate and find information. Any web application can be enhanced with AI to be more engaging and useful.",
      "AI-Powered Web Apps provide a superior user experience, leading to higher engagement, better conversion rates, and increased customer loyalty. By making your web application smarter, you can offer personalized value that keeps users coming back. This service enables you to innovate on your core web offerings and deliver a truly next-generation digital product."
    ],
    Icon: Cpu,
    href: '/services/ai-powered-web-apps'
  },
  {
    id: 'rag-chatbots-service',
    name: 'RAG Chatbots & AI Assistants',
    description: 'AI chatbots and task-specific assistants that combine natural conversation with real-time data retrieval from trusted knowledge sources. RAG technology ensures responses are accurate, context-aware, and grounded in up-to-date information, ideal for clinical support, documentation, and patient engagement.',
    detailedDescription: [
      "ChanceTEK's RAG Chatbots and AI Assistants offer a powerful conversational AI solution that leverages Retrieval-Augmented Generation to provide highly relevant and accurate answers sourced directly from your organization's proprietary data. These agents engage users in natural, context-aware conversations, making information access intuitive and efficient.",
      "These systems are built upon a robust RAG framework, which connects large language models to your internal documents, databases, and knowledge bases. When a user asks a question, the chatbot retrieves pertinent information from your data and uses it to formulate a precise answer. This process ensures responses are factual, up-to-date, and specific to your business context, significantly outperforming generic chatbots.",
      "RAG Chatbots & AI Assistants are ideal for customer support, allowing customers to get instant answers to their queries 24/7. Internally, they can serve as employee assistants, helping staff quickly find information on company policies, procedures, or technical documentation. They can also be used for interactive product guides or onboarding new clients by answering their specific questions.",
      "The deployment of RAG Chatbots and task-specific assistants results in enhanced customer and employee satisfaction through quick and accurate information retrieval. It has reduced the workload on human support staff, allowing them to focus on more complex issues. Furthermore, by grounding responses in your own data, these chatbots provide a trustworthy and secure way to leverage AI for communication."
    ],
    Icon: BotMessageSquare,
    href: '/services/rag-chatbots-service'
  },
  {
    id: 'model-fine-tuning-service',
    name: 'Model Fine-Tuning',
    description: 'Customized AI model optimization that adapts foundation models to specific domains, datasets, and organizational needs. Fine-tuning improves accuracy, relevance, and compliance, ensuring the AI aligns with each healthcare provider’s standards and workflows.',
    detailedDescription: [
      "Our LLM Fine-Tuning service empowers businesses to create highly specialized AI models by adapting pre-trained large language models (LLMs) to their specific domain, data, and terminology. This process enhances the relevance, accuracy, and performance of LLMs for particular tasks, resulting in truly custom-tailored AI experiences.",
      "The fine-tuning process involves taking a foundational LLM and further training it on a curated dataset provided by your organization. This dataset could include internal documents, customer interactions, industry-specific jargon, or any text that reflects the nuances of your business. We employ various techniques, including supervised fine-tuning and instruction tuning, to align the model’s behavior with your desired outcomes while adhering to best practices for data privacy and security.",
      "LLM fine-tuning is beneficial for a wide range of applications, such as developing domain-specific chatbots that understand industry-specific language, creating custom content generators that match a company's tone and style, or building specialized data analysis tools that can interpret niche datasets. It's essential when off-the-shelf LLMs lack the required depth of knowledge or context for your use case.",
      "By fine-tuning an LLM with ChanceTEK, you gain a competitive advantage through AI solutions that are deeply integrated with your unique business context. This leads to more accurate outputs, improved user engagement, and AI that truly understands and reflects your brand. Fine-tuning can also lead to more efficient models for specific tasks, potentially reducing operational costs compared to using larger, more general models."
    ],
    Icon: SlidersHorizontal,
    href: '/services/model-fine-tuning-service'
  },
  {
    id: 'enterprise-software-by-genai',
    name: 'Enterprise Software Powered by Agentic AI',
    description: 'Scalable, intelligent platforms tailored for industry-specific needs.',
    detailedDescription: [
      "Our Enterprise Software Powered by Agentic AI service delivers scalable and intelligent platforms specifically tailored to meet diverse industry-specific needs. We build robust, cloud-native software solutions that embed cutting-edge Generative AI capabilities at their core, enabling businesses to leverage AI for enhanced productivity, data-driven insights, and innovative operational models. These platforms are designed for seamless integration and future adaptability.",
      "We develop these SaaS platforms using modern microservices architecture, ensuring modularity and scalability. Generative AI models (such as LLMs for text and NLP, or diffusion models for image/media) are deeply integrated via APIs, often fine-tuned for specific industry vocabularies and workflows. We prioritize security, data governance, and multi-tenancy, employing robust CI/CD pipelines for continuous improvement and deployment on leading cloud infrastructures.",
      "This service is ideal for enterprises seeking to build or modernize industry-specific software with embedded AI. Examples include AI-driven CRM platforms for sales and marketing, intelligent supply chain management systems, AI-enhanced financial modeling tools, or personalized e-learning platforms. Any sector requiring bespoke software that can benefit from generative AI's content creation, summarization, or predictive capabilities is a prime candidate.",
      "By investing in our Enterprise Software Powered by Agentic AI, businesses gain access to powerful, custom-built enterprise software that drives significant competitive advantages. Key benefits include accelerated innovation cycles, improved operational efficiency, enhanced user experiences through intelligent features, and the ability to unlock new revenue streams. Our tailored approach ensures the software directly addresses unique business challenges and delivers measurable ROI."
    ],
    Icon: LayoutGrid,
    href: '/services/enterprise-software-by-genai'
  },
  {
    id: 'computer-vision',
    name: 'Computer Vision Solutions',
    description: 'Unlock insights from images and videos with advanced AI-driven visual analysis.',
    detailedDescription: [
      "Our Computer Vision Solutions empower businesses to interpret and act on visual data from the real world. By leveraging sophisticated AI models, we enable automated analysis of images and videos, extracting valuable insights, identifying objects, and understanding complex scenes to drive operational efficiencies and create new opportunities.",
      "We employ a range of deep learning techniques, including Convolutional Neural Networks (CNNs) for image classification and object detection, Recurrent Neural Networks (RNNs) for video analysis, and Generative Adversarial Networks (GANs) for image enhancement or synthetic data generation. Our solutions can be deployed on edge devices or in the cloud, optimized for speed and accuracy based on specific requirements.",
      "Applications span across industries: retail (for inventory management and customer behavior analysis), manufacturing (for quality control and defect detection), healthcare (for medical image analysis), security (for surveillance and threat detection), and autonomous vehicles (for environmental perception). We tailor models for specific visual tasks like facial recognition, OCR, image segmentation, and activity recognition.",
      "Implementing our Computer Vision Solutions provides significant benefits such as enhanced automation of visual inspection tasks, improved accuracy in data collection, richer insights from visual sources, and new capabilities for interacting with the physical world. This leads to cost savings, increased productivity, better safety, and innovative products and services."
    ],
    Icon: Eye,
    href: '/services/computer-vision'
  },
  {
    id: 'executive-ai-assistant',
    name: 'Executive AI Assistant',
    description: 'A 24/7 assistant for emails, scheduling, tasks, and calls.',
    detailedDescription: [
      "Our Executive AI Assistant service provides a sophisticated, AI-powered virtual assistant designed to streamline the demanding schedules of busy professionals. It acts as a digital chief of staff, available 24/7 to manage communications, organize calendars, track tasks, and even initiate communications, freeing up valuable time for strategic thinking and leadership. This service integrates seamlessly with existing productivity tools to offer a truly intuitive support system.",
      "Technically, the Executive AI Assistant leverages advanced Natural Language Processing (NLP) for understanding requests and drafting communications, machine learning for predictive scheduling and task prioritization, and robust APIs for integration with email clients, calendar applications, and CRM systems. It employs secure, encrypted channels for all data handling, ensuring confidentiality and compliance. The assistant learns user preferences over time to provide increasingly personalized and efficient support.",
      "Ideal for C-suite executives, entrepreneurs, and managers, this AI assistant can handle diverse tasks such as filtering and responding to emails based on priority, scheduling complex multi-participant meetings across time zones, set reminders for critical deadlines, and preparing briefing notes for upcoming appointments. It can also be configured to manage personal appointments and travel arrangements, offering a holistic approach to executive support.",
      "By implementing our Executive AI Assistant, businesses can significantly enhance the productivity and focus of their key personnel. Benefits include reduced administrative burden, improved time management, more organized workflows, and the assurance that critical tasks are never missed. This ultimately translates to better decision-making, increased operational efficiency, and a stronger focus on core business objectives."
    ],
    Icon: Briefcase,
    href: '/services/executive-ai-assistant'
  },
  {
    id: 'ai-sdr-agents',
    name: 'AI SDR Agents',
    description: 'Automate sales development: qualify leads, nurture prospects, schedule meetings.',
    detailedDescription: [
      "ChanceTEK's AI Sales Development Representative (SDR) Agents automate and optimize the top-of-funnel sales activities. These intelligent agents are designed to identify and qualify leads, engage prospects through personalized outreach, nurture relationships over time, and seamlessly schedule meetings for your human sales team. This service aims to accelerate the sales cycle and increase the volume of qualified opportunities.",
      "Our AI SDR Agents utilize a combination of machine learning for lead scoring and prioritization, NLP for crafting and understanding communication across channels like email and LinkedIn, and automation engines for executing multi-touch outreach sequences. They integrate with your CRM to log activities, update contact information, and ensure a smooth handover of qualified leads to sales representatives. The system continuously learns from interaction data to refine its approach and improve conversion rates.",
      "This service is invaluable for sales teams looking to scale their outreach efforts without proportionally increasing headcount. Use cases include automated prospecting based on ideal customer profiles, personalized email follow-up campaigns, initial lead qualification via conversational AI, and booking discovery calls or product demos directly into sales reps' calendars. It's particularly effective for industries with long sales cycles or high-volume lead generation needs.",
      "The primary benefits of deploying AI SDR Agents include a significant increase in lead generation and qualification efficiency, reduced cost per lead, and a more focused human sales team that can concentrate on closing deals rather than prospecting. This leads to a more predictable sales pipeline, faster revenue growth, and improved overall sales team morale and productivity."
    ],
    Icon: Target,
    href: '/services/ai-sdr-agents'
  },
  {
    id: 'voice-ai-agents',
    name: 'Voice AI Agents',
    description: 'Advanced customer service with conversational voice agents for inbound/outbound calls.',
    detailedDescription: [
      "Our Voice AI Agents provide sophisticated, human-like conversational experiences for both inbound and outbound call scenarios. These agents are engineered to understand natural language, manage complex dialogues, and perform tasks traditionally handled by human call center agents. This service enhances customer service capabilities, improves operational efficiency, and offers scalable voice interaction solutions.",
      "These agents employ cutting-edge speech recognition to accurately transcribe spoken words, advanced NLP to comprehend intent and context, and lifelike text-to-speech (TTS) for natural-sounding responses. They can integrate with backend systems like CRMs and databases to fetch information or update records in real-time. The architecture allows for dynamic call-flow management and sentiment analysis to adapt conversations appropriately.",
      "Voice AI Agents are versatile and can be deployed for various applications, including 24/7 customer support, automated appointment scheduling and reminders, outbound telemarketing or survey calls, and handling frequently asked questions. They are particularly beneficial for industries like healthcare for patient intake, retail for order status inquiries, and finance for basic account services, ensuring consistent and efficient call handling.",
      "Implementing Voice AI Agents leads to substantial cost savings in call center operations, improved first-call resolution rates, and enhanced customer satisfaction due to reduced wait times and consistent service quality. Businesses gain the ability to scale their voice operations rapidly, handle peak call volumes effectively, and free up human agents for more complex or empathetic interactions, driving overall business value."
    ],
    Icon: Phone,
    href: '/services/voice-ai-agents'
  },
  {
    id: 'cag-agents',
    name: 'CAG Agents',
    description: 'Boost performance and reduce latency with AI agents accessing cached answers.',
    detailedDescription: [
      "Cache-Augmented Generation (CAG) Agents are designed to optimize the speed and efficiency of AI-driven information retrieval systems. This service enhances standard RAG or other generative AI models by intelligently caching frequently accessed information and previously generated responses. This significantly reduces latency for common queries and lowers computational costs.",
      "The technical approach involves implementing a smart caching layer that sits between the user query and the generative AI model. When a query is received, the CAG Agent first checks the cache for a relevant, up-to-date answer. If a valid cached response exists, it's served immediately. If not, the query proceeds to the full generation pipeline (e.g., RAG), and the new response is then considered for caching based on configurable policies like frequency, recency, and relevance.",
      "CAG Agents are particularly beneficial for applications with high query volumes and a significant number of repetitive questions. Common use cases include customer service chatbots handling FAQs, internal helpdesks providing quick answers to common IT or HR issues, and public-facing information portals where response time is critical for user satisfaction. They can also reduce API call costs to underlying LLMs.",
      "By integrating CAG Agents, businesses experience faster response times for their AI applications, leading to improved user experience and satisfaction. This approach also offers considerable cost savings by minimizing redundant computations and API calls to expensive generative models. The intelligent cache management ensures that users still receive accurate and relevant information while benefiting from enhanced performance."
    ],
    Icon: Layers,
    href: '/services/cag-agents'
  },
  {
    id: 'generative-ai',
    name: 'Generative AI',
    description: 'Powerful creative and productivity tools for content generation, ideation, code generation.',
    detailedDescription: [
      "ChanceTEK's Generative AI services unlock powerful creative and productivity capabilities for your business. We help you leverage state-of-the-art generative models to create original content, accelerate ideation, automate design processes, and even generate production-ready code. This service is about augmenting human creativity and efficiency with AI.",
      "We work with a variety of generative models, including those for text, image, audio, and code generation. Our technical approach involves understanding your specific needs, selecting the appropriate models (or fine-tuning them), and integrating them into your workflows. This can range from deploying pre-built tools to developing custom generative AI applications tailored to your requirements.",
      "The use cases for Generative AI are vast and rapidly expanding. Examples include automated marketing copy and blog post creation, generating unique images and designs for campaigns, creating synthetic data for training other AI models, drafting initial versions of software code, or even composing original music snippets. It's a transformative technology for creative industries, marketing, software development, and R&D.",
      "Integrating Generative AI tools provides significant benefits such as increased content output, reduced time for creative tasks, enhanced innovation through rapid prototyping of ideas, and the ability to personalize content at scale. This empowers your teams to focus on higher-level strategy and refinement, while AI handles much of the initial generation work, leading to faster turnarounds and novel solutions."
    ],
    Icon: Sparkle,
    href: '/services/generative-ai'
  },
  {
    id: 'ai-sql-agents',
    name: 'AI SQL Agents',
    description: 'Ask business questions in plain English, get real-time answers from your databases.',
    detailedDescription: [
      "Our AI SQL Agents bridge the gap between complex databases and non-technical users by enabling them to query data using natural language. This service allows business users to ask questions in plain English (or other supported languages) and receive real-time, accurate answers directly from your relational databases, without needing to write any SQL code.",
      "These agents employ advanced Natural Language Processing (NLP) to understand the user's intent and translate their questions into precise SQL queries. The agent then executes these queries against the connected database and presents the results in an easily understandable format, which could be a textual answer, a table, or even a chart. Secure database connections and data governance policies are strictly maintained.",
      "AI SQL Agents are invaluable for democratizing data access across an organization. Business analysts can quickly get answers for ad-hoc reporting, marketing teams can analyze campaign performance without IT intervention, and executives can query key performance indicators on the fly. This empowers users at all levels to make data-driven decisions more efficiently.",
      "The key benefits include significantly reduced reliance on data analysts or IT teams for basic data retrieval, faster access to business intelligence, and improved data literacy across the organization. By making database querying accessible to everyone, AI SQL Agents foster a more data-driven culture and accelerate the decision-making process, leading to better business outcomes."
    ],
    Icon: Database,
    href: '/services/ai-sql-agents'
  },
  {
    id: 'workflow-automation',
    name: 'Workflow Automation',
    description: 'Automate and orchestrate business processes to eliminate bottlenecks and boost productivity.',
    detailedDescription: [
      "ChanceTEK's Workflow Automation service focuses on identifying, designing, and implementing AI-driven solutions to automate and orchestrate complex business processes. We help organizations streamline their operations by eliminating manual bottlenecks, reducing errors, and enhancing overall team productivity and efficiency through intelligent automation.",
      "Our approach combines traditional Robotic Process Automation (RPA) techniques with AI capabilities like machine learning, natural language processing, and computer vision. This allows us to automate not only repetitive, rule-based tasks but also more complex processes that require decision-making or data interpretation. We integrate with your existing systems and applications to create seamless, end-to-end automated workflows.",
      "Workflow automation can be applied across various departments and functions, including finance (e.g., invoice processing, reconciliation), HR (e.g., employee onboarding, payroll), operations (e.g., supply chain management, inventory tracking), and IT (e.g., system monitoring, incident response). Any process that is repetitive, data-intensive, or prone to human error is a good candidate for automation.",
      "By automating workflows, businesses can achieve significant cost reductions, improve processing speed and accuracy, ensure better compliance, and free up employees to focus on more strategic, value-added activities. This leads to increased operational agility, enhanced employee satisfaction, and a stronger competitive position in the market."
    ],
    Icon: Workflow,
    href: '/services/workflow-automation'
  },
  {
    id: 'chatbots-and-conversational-ai',
    name: 'Chatbots & Conversational AI',
    description: 'Deploy intelligent chatbots for customer engagement, support, and lead qualification.',
    detailedDescription: [
      "Deploy intelligent chatbots and conversational AI solutions to revolutionize customer engagement. Our service focuses on creating natural, helpful, and scalable conversational experiences that automate support, qualify leads, and enhance user interaction across multiple channels, 24/7. Features include advanced Natural Language Processing (NLP), multi-channel support, continuous availability, and sentiment analysis to gauge user satisfaction.",
      "We build our conversational AI using state-of-the-art NLP and machine learning frameworks. The chatbots can be integrated with your website, mobile app, and messaging platforms like WhatsApp and Facebook Messenger. They connect securely to your backend systems to perform tasks, retrieve information, and provide personalized interactions. Sentiment analysis models help in understanding customer emotion and escalating conversations to human agents when necessary.",
      "Ideal for customer service automation, our chatbots can handle a high volume of inquiries, answer frequently asked questions, and guide users through processes. They are also powerful tools for marketing and sales, capable of engaging website visitors, qualifying leads based on predefined criteria, and scheduling appointments, thereby streamlining the top of your sales funnel.",
      "Implementing our chatbot solutions leads to significant cost savings in customer support operations and increased lead generation. It improves customer satisfaction by providing instant responses and 24/7 availability. Businesses also gain valuable insights from conversational data, helping to understand customer needs better and optimize services."
    ],
    Icon: BotMessageSquare,
    href: '/services/chatbots-and-conversational-ai'
  },
  {
    id: 'data-engineering',
    name: 'Data Engineering',
    description: 'Build robust data pipelines and infrastructure to maximize the potential of your data assets.',
    detailedDescription: [
      "Our Data Engineering service focuses on building and managing the foundational infrastructure required to collect, store, process, and analyze large volumes of data. We design and implement robust, scalable data pipelines that transform raw data into valuable, analytics-ready assets, empowering your organization to make data-driven decisions. Key components include ETL/ELT pipelines, data warehousing, stream processing, and data quality management.",
      "We utilize modern data stack technologies to create efficient and reliable data architectures. This includes cloud-based data warehouses like BigQuery, Redshift, or Snowflake, ETL tools for data transformation, and stream-processing frameworks like Kafka or Spark Streaming for real-time data ingestion. We emphasize data governance and implement rigorous data quality checks to ensure the accuracy and integrity of your data.",
      "This service is essential for any organization looking to leverage its data for business intelligence, machine learning, or advanced analytics. We build the data backbones for companies in finance, healthcare, retail, and more, enabling use cases like real-time dashboards, predictive modeling, customer segmentation, and personalized user experiences.",
      "With our Data Engineering expertise, you gain a reliable and scalable data infrastructure that serves as a single source of truth for your organization. This maximizes the potential of your data assets, accelerates the development of data products, and ensures that your business intelligence and data science teams have access to high-quality data when they need it."
    ],
    Icon: Database,
    href: '/services/data-engineering'
  },
  {
    id: 'devops-and-infrastructure',
    name: 'DevOps & Infrastructure',
    description: 'Streamline operations with continuous integration, delivery, and deployment solutions.',
    detailedDescription: [
      "Our DevOps & Infrastructure service helps organizations streamline their software development and IT operations through the principles of continuous integration, delivery, and deployment (CI/CD). We build automated pipelines and manage cloud infrastructure to accelerate development cycles, improve deployment frequency, and ensure the reliability and stability of your applications. Our expertise includes CI/CD pipelines, Infrastructure as Code (IaC), container orchestration, and comprehensive monitoring.",
      "We leverage industry-standard tools like Jenkins, GitHub Actions, Terraform, and Kubernetes to create robust DevOps environments. By implementing Infrastructure as Code, we make your infrastructure provisioning repeatable, scalable, and version-controlled. Containerization with Docker and orchestration with Kubernetes ensure that your applications are portable and can scale efficiently. We also set up extensive monitoring and logging to provide real-time visibility into system health.",
      "This service is crucial for any company developing and operating software in the cloud. We support startups and enterprises in building a culture of automation and collaboration between development and operations teams. This is applicable for web applications, backend services, mobile apps, and AI/ML systems, ensuring they are deployed and managed efficiently.",
      "Adopting our DevOps practices leads to faster time-to-market for new features, improved system reliability, and more efficient use of resources. It reduces the risk of manual deployment errors and provides a stable foundation for scalable growth. Ultimately, it allows your development teams to focus more on building value and less on managing infrastructure."
    ],
    Icon: GitFork,
    href: '/services/devops-and-infrastructure'
  },
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'End-to-end web and mobile application development with modern technologies.',
    detailedDescription: [
      "We provide end-to-end web and mobile application development services, utilizing modern technologies and best practices to build high-quality digital products. From initial concept to final deployment, we cover the entire development lifecycle, creating responsive, scalable, and user-friendly applications that meet your business objectives. Our services include full-stack development, responsive design, Progressive Web Apps (PWAs), and native or cross-platform mobile apps.",
      "Our technology stack includes modern frontend frameworks like React and Next.js, and robust backend technologies such as Node.js. We build scalable and maintainable applications, often leveraging serverless architectures or microservices. For mobile, we develop native apps for iOS and Android or use cross-platform frameworks to optimize for cost and speed.",
      "Our web development services are ideal for businesses of all sizes, from startups launching their first product to established enterprises needing to modernize their digital presence. We build e-commerce platforms, SaaS products, corporate websites, and complex business applications tailored to your specific requirements.",
      "Partnering with us for web development ensures you receive a high-performing, secure, and aesthetically pleasing application that provides an excellent user experience. We focus on writing clean, maintainable code and following agile development practices to deliver value quickly and adapt to changing requirements, ensuring your digital product is built for long-term success."
    ],
    Icon: Cpu,
    href: '/services/web-development'
  },
  {
    id: 'cloud-services',
    name: 'Cloud Services',
    description: 'Multi-cloud optimization and management across AWS, Azure, and Google Cloud.',
    detailedDescription: [
      "Our Cloud Services offer expert guidance and hands-on management for your cloud infrastructure across major platforms like AWS, Azure, and Google Cloud Platform. We help you design, implement, and optimize a multi-cloud strategy that aligns with your business goals, focusing on cost optimization, security, and performance. Our services include cloud migration, multi-cloud strategy development, cost management, and ensuring robust security and compliance.",
      "We employ a cloud-agnostic approach, using tools like Terraform for Infrastructure as Code to ensure portability and consistency across different cloud providers. Our team is certified in AWS, Azure, and GCP, enabling us to leverage the best services from each platform to meet your needs. We conduct thorough security audits and implement best practices to protect your cloud environment and ensure compliance with industry standards.",
      "Whether you are migrating to the cloud for the first time, looking to adopt a multi-cloud strategy to avoid vendor lock-in, or need to optimize your existing cloud spending, our services are designed to help. We work with businesses of all sizes to navigate the complexities of the cloud and build a secure, scalable, and cost-effective infrastructure.",
      "By leveraging our Cloud Services, you can reduce your operational overhead, lower your cloud bills through continuous cost optimization, and enhance your security posture. We provide the strategic advice and technical expertise needed to make the most of the cloud, allowing you to focus on innovation and your core business."
    ],
    Icon: CloudCog,
    href: '/services/cloud-services'
  },
  {
    id: 'graphic-design-and-branding',
    name: 'Graphic Design & Branding',
    description: 'Create compelling visual identities and user experiences that resonate with your audience.',
    detailedDescription: [
      "Our Graphic Design & Branding service helps you create a strong, memorable visual identity that connects with your target audience. We combine creative design with strategic thinking to develop compelling brands and user experiences. Our services cover brand identity development, UI/UX design for digital products, creation of visual assets for marketing, and motion graphics to bring your brand to life.",
      "We follow a collaborative design process, starting with understanding your brand values and audience. Our UI/UX designers use tools like Figma to create wireframes, prototypes, and high-fidelity designs that are both beautiful and user-friendly. For branding, we develop everything from logos and color palettes to comprehensive brand guidelines. Our motion graphics work adds a dynamic element to your digital presence.",
      "This service is perfect for new businesses needing to establish a brand identity, as well as existing companies looking to refresh their brand or improve the user experience of their digital products. We work with clients across all industries to ensure their visual communication is professional, consistent, and effective.",
      "A strong brand and user-centric design are crucial for standing out in a crowded market. Our design services help you build brand loyalty, improve user engagement and conversion rates, and create a lasting impression. We deliver visual assets that not only look great but also support your strategic business goals."
    ],
    Icon: PenTool,
    href: '/services/graphic-design-and-branding'
  },
  {
    id: 'it-management-and-consulting',
    name: 'IT Management & Consulting',
    description: 'End-to-end system monitoring, optimization, and strategic IT consulting for enterprise success.',
    detailedDescription: [
      "Our IT Management & Consulting service provides comprehensive oversight and strategic guidance for your enterprise IT systems. We offer end-to-end solutions, including system monitoring, performance optimization, security audits, and strategic planning, to ensure your IT infrastructure is reliable, secure, and aligned with your business objectives. We act as your strategic partner to help you navigate the complexities of modern IT.",
      "We utilize advanced monitoring tools to provide 24/7 visibility into your systems' health and performance. Our performance optimization services identify and address bottlenecks to improve efficiency. We conduct thorough security audits to identify vulnerabilities and ensure compliance with industry standards. Our strategic consulting helps you develop a long-term IT roadmap that supports business growth and innovation.",
      "This service is designed for enterprises that need to ensure the stability and security of their IT operations while also planning for the future. We provide both hands-on management and high-level strategic advice, making us a valuable partner for businesses that want to leverage technology as a competitive advantage.",
      "With our IT Management & Consulting services, you can achieve greater operational stability, enhance your security posture, and make more informed decisions about your technology investments. We help you reduce IT-related risks and costs while ensuring that your infrastructure is ready to support future growth and innovation."
    ],
    Icon: Users,
    href: '/services/it-management-and-consulting'
  },

  {
    id: 'data-science-and-analytics',
    name: 'Data Science & Analytics',
    description: 'Extract actionable insights from your data through advanced analytics and machine learning.',
    detailedDescription: [
      "Our Data Science & Analytics service helps you unlock the hidden value in your data. We use advanced statistical methods and machine learning techniques to extract actionable insights, build predictive models, and create intuitive business intelligence dashboards. We turn your data into a strategic asset that drives informed decision-making and business growth. Our expertise covers predictive analytics, statistical analysis, business intelligence, and data visualization.",
      "Our data scientists are proficient in programming languages like Python and R, and they use a wide range of machine learning libraries to build and validate predictive models. We work with your raw data to clean and prepare it for analysis, then apply the appropriate techniques to answer your key business questions. For business intelligence, we use tools like Tableau or Power BI to create interactive dashboards that make complex data easy to understand.",
      "This service is for any organization that wants to move from simple data reporting to advanced analytics. We help businesses forecast sales, predict customer churn, segment customers for targeted marketing, and optimize operations. We work with data from all parts of your business to provide a holistic view and uncover new opportunities.",
      "By leveraging our Data Science & Analytics service, you can move beyond reactive decision-making and start proactively shaping your business outcomes. Our insights help you understand your customers better, optimize your processes, and identify new revenue streams. We empower you to build a data-driven culture that fosters innovation and sustainable growth."
    ],
    Icon: PieChart,
    href: '/services/data-science-and-analytics'
  },
  {
    id: 'web-and-graphic-design',
    name: 'Web, Design & Marketing',
    description: 'Next-generation AI-powered web design, branding, graphic design, motion content, and digital experiences.',
    detailedDescription: [
      "We deliver next-generation AI-powered web design, branding, graphic design, motion content, digital experiences, AI-enhanced media production, and intelligent creative automation.",
      "Our human-centered, AI-native approach blends the human creative spirit with agentic AI systems like Google Flow, CyneMora, and AntiGravity. From generating brand explorations with Ideogram to full-stack AI web engineering with Replit and Cursor AI, we redefine what's possible.",
      "Whether you need enterprise websites, responsive Progressive Web Apps, or AI-generated motion graphics and cinematic media experiences using HeyGen and Runway, we construct immersive digital products that generate trust, increase conversions, and position you as future-ready.",
      "Built for modern enterprise SaaS companies, elite AI startups, and creators, our creative technology stack ensures you stay ahead of the curve with real-time creative collaboration, smart content pipelines, and adaptive intelligent interfaces."
    ],
    Icon: Sparkle,
    href: '/services/web-and-graphic-design'
  },
  {
    id: 'custom-ai-crm-platforms',
    name: 'Custom AI CRM Platforms',
    description: 'Transform customer relationship management with AI-driven insights, predictive analytics, and automated workflows tailored to your sales process.',
    detailedDescription: [
      "Our Custom AI CRM Platforms redefine how you manage customer relationships by embedding advanced artificial intelligence directly into your sales and service workflows. We build bespoke CRM solutions that go beyond simple contact management, offering predictive insights and intelligent automation.",
      "By leveraging machine learning algorithms, these platforms can analyze historical customer data to predict future buying behaviors, identify churn risks before they happen, and recommend the next best action for your sales representatives. This ensures your team is always focused on the highest-value opportunities.",
      "Furthermore, we integrate natural language processing to automate data entry from emails and call transcripts, significantly reducing administrative overhead. AI-driven sentiment analysis helps you gauge customer satisfaction in real-time, allowing for proactive service interventions.",
      "A custom AI CRM provides a significant competitive advantage by aligning perfectly with your unique business processes, unlike rigid off-the-shelf solutions. This tailored approach leads to higher user adoption, more accurate forecasting, and ultimately, stronger customer relationships and increased revenue."
    ],
    Icon: Users,
    href: '/services/custom-ai-crm-platforms'
  },
  {
    id: 'custom-ai-erp-platform',
    name: 'Custom AI ERP Platform',
    description: 'Intelligent Enterprise Resource Planning systems that optimize operations, forecast demand, and automate complex business processes.',
    detailedDescription: [
      "Our Custom AI ERP Platforms bring the power of artificial intelligence to the core of your enterprise resource planning. We develop comprehensive systems that intelligently manage and integrate your company’s financials, supply chain, operations, reporting, and manufacturing activities.",
      "These AI-enhanced platforms utilize predictive analytics to forecast demand more accurately, optimize inventory levels, and identify potential supply chain disruptions before they impact your business. Machine learning models continuously learn from your operational data to suggest efficiency improvements and cost-saving measures.",
      "We incorporate intelligent automation to handle routine tasks such as invoice processing, order fulfillment, and financial reconciliation. This not only reduces human error but also frees up your workforce to focus on strategic planning and exception handling.",
      "By choosing a custom AI ERP solution, you ensure that the system adapts to your specific operational nuances rather than forcing your business to adapt to the software. The result is a highly efficient, agile, and data-driven enterprise capable of responding swiftly to market changes."
    ],
    Icon: Layers,
    href: '/services/custom-ai-erp-platform'
  },
  {
    id: 'custom-productivity-tools',
    name: 'Custom Productivity Tools',
    description: 'Bespoke AI-powered applications designed to streamline your specific daily tasks, enhance collaboration, and boost overall team efficiency.',
    detailedDescription: [
      "Our Custom Productivity Tools are purpose-built applications designed to tackle the unique bottlenecks and inefficiencies within your organization’s daily workflows. We leverage AI to create smart, intuitive tools that seamlessly integrate into your existing environment and enhance how your team works.",
      "Whether it’s an intelligent document summarizer, a custom project management dashboard that predicts task delays, or an AI-assisted scheduling assistant, these tools are tailored to your specific operational needs. They utilize natural language processing to understand context and automate repetitive administrative duties.",
      "These tools are designed to facilitate better collaboration by breaking down information silos. AI can automatically categorize and route information to the right team members, generate meeting summaries with actionable items, and provide intelligent search capabilities across all your internal documents.",
      "Investing in custom productivity tools yields a high return by directly addressing the specific friction points that slow your team down. By providing your employees with AI-powered solutions that fit their exact workflow, you significantly increase overall output, reduce burnout, and foster a more innovative work environment."
    ],
    Icon: Zap,
    href: '/services/custom-productivity-tools'
  },
  {
    id: 'custom-ai-research-assistants',
    name: 'Custom AI Research Assistants',
    description: 'Accelerate your R&D and market analysis with intelligent agents that rapidly synthesize vast amounts of data into actionable insights.',
    detailedDescription: [
      "Our Custom AI Research Assistants are designed to supercharge your research, development, and market intelligence efforts. These highly specialized AI agents are capable of autonomously navigating vast repositories of information, synthesizing complex data, and delivering actionable insights in a fraction of the time it would take a human researcher.",
      "These assistants utilize advanced Natural Language Processing and web scraping technologies to monitor industry trends, analyze academic papers, track competitor activities, and compile comprehensive reports. They can be trained on your specific domain to understand technical jargon and identify nuanced patterns relevant to your strategic goals.",
      "Beyond simple data gathering, these AI agents can perform initial literature reviews, summarize lengthy documents, and highlight key findings. They can also assist in generating hypotheses and identifying knowledge gaps, acting as a tireless collaborative partner for your human research teams.",
      "Deploying a Custom AI Research Assistant dramatically accelerates innovation cycles and decision-making processes. By automating the time-consuming aspects of research, your organization can stay ahead of the curve, identify new opportunities faster, and allocate human expertise to high-level analysis and strategic implementation."
    ],
    Icon: Search,
    href: '/services/custom-ai-research-assistants'
  },
  {
    id: 'custom-ai-knowledge-platforms',
    name: 'Custom AI Knowledge Platforms',
    description: 'Centralize and activate your organizational knowledge with intelligent search, automated tagging, and conversational retrieval systems.',
    detailedDescription: [
      "Our Custom AI Knowledge Platforms transform static corporate wikis and document repositories into dynamic, intelligent hubs. We build systems that not only store your organizational knowledge but actively organize it, making it instantly accessible and actionable for your entire workforce.",
      "These platforms leverage sophisticated AI for automated document tagging, categorization, and entity extraction. This ensures that information is structured logically without requiring manual effort. More importantly, we integrate powerful conversational search capabilities (like RAG), allowing employees to ask natural language questions and receive precise answers synthesized from your internal data.",
      "The platform can proactively surface relevant information to users based on their current context or project, breaking down information silos and accelerating onboarding for new hires. It acts as a single, intelligent source of truth that continuously learns and updates as new information is added to the system.",
      "A custom AI Knowledge Platform is crucial for preserving institutional memory and boosting productivity. By drastically reducing the time employees spend searching for information, you enable them to execute tasks faster and make better-informed decisions, ultimately driving operational excellence across the organization."
    ],
    Icon: Database,
    href: '/services/custom-ai-knowledge-platforms'
  },
  {
    id: 'custom-human-resource-platform',
    name: 'Custom Human Resource Platform',
    description: 'Optimize talent acquisition, employee engagement, and HR administration with tailored, AI-enhanced human resource management solutions.',
    detailedDescription: [
      "Our Custom Human Resource Platforms modernize your HR operations by integrating artificial intelligence into every stage of the employee lifecycle. We develop bespoke solutions that streamline administrative burdens, enhance talent acquisition, and foster a more engaged and productive workforce.",
      "For recruitment, the platform utilizes AI to intelligently screen resumes, match candidates to job requirements, and even conduct initial conversational interviews via chatbots. This significantly speeds up the hiring process while helping to identify the best fit for your organization. Predictive analytics can also be used to anticipate hiring needs and identify potential flight risks among current employees.",
      "In terms of employee engagement, the platform can offer personalized learning and development pathways based on an employee’s skills and career goals. AI-driven sentiment analysis of internal communications can provide HR leaders with real-time insights into employee morale, allowing for proactive interventions to maintain a positive company culture.",
      "By moving away from generic HR software to a custom AI-driven platform, you ensure that your HR technology aligns perfectly with your specific company culture and strategic goals. This results in a more efficient HR department, higher quality hires, and a more supported, engaged employee base."
    ],
    Icon: Briefcase,
    href: '/services/custom-human-resource-platform'
  },
  {
    id: 'custom-ai-image-video-generators',
    name: 'Custom AI Image and Video Generators',
    description: 'Empower your creative and marketing teams with bespoke generative AI models trained on your brand guidelines and visual assets.',
    detailedDescription: [
      "Our Custom AI Image and Video Generators provide your organization with powerful, in-house creative capabilities tailored specifically to your brand. We build and fine-tune generative AI models using your proprietary visual assets, ensuring all generated content strictly adheres to your brand guidelines.",
      "These tools allow your marketing, design, and product teams to rapidly prototype concepts, generate personalized marketing materials at scale, and create unique visual assets without relying entirely on external agencies or stock libraries. The models can be trained to understand your specific product lines, brand colors, and required aesthetic styles.",
      "The platform includes intuitive user interfaces that allow non-technical staff to easily generate high-quality images and videos through simple text prompts or by modifying existing assets. We also ensure that the infrastructure is scalable and secure, protecting your proprietary training data and generated intellectual property.",
      "Investing in custom generative visual AI significantly accelerates your creative workflows and reduces content production costs. It enables you to launch campaigns faster, personalize visual content for different audience segments, and maintain absolute consistency and control over your brand’s visual identity across all channels."
    ],
    Icon: Wand2,
    href: '/services/custom-ai-image-video-generators'
  },
  {
    id: 'custom-medical-imaging-ai',
    name: 'Custom Medical Imaging & Radiology AI',
    description: 'Advanced AI solutions for analyzing medical images, detecting anomalies, and enhancing diagnostic accuracy in radiology and beyond.',
    detailedDescription: [
      "Our Custom Medical Imaging & Radiology AI solutions are designed to assist healthcare professionals by bringing cutting-edge computer vision and deep learning to diagnostic workflows. We develop bespoke AI models that analyze X-rays, MRIs, CT scans, and other medical imaging modalities with extraordinary precision.",
      "These systems can be trained to automatically detect subtle anomalies, highlight areas of concern, and prioritize urgent cases in a radiologist's queue. By providing a highly accurate 'second pair of eyes,' our AI tools help reduce diagnostic errors, mitigate physician fatigue, and significantly accelerate turnaround times for critical reports.",
      "We build our models to integrate seamlessly with existing PACS (Picture Archiving and Communication Systems) and EHR (Electronic Health Record) platforms, ensuring a smooth transition without disrupting established clinical workflows. Strict adherence to HIPAA and other healthcare data privacy regulations is foundational to our development process.",
      "Investing in custom medical imaging AI empowers your healthcare institution to deliver faster, more accurate diagnoses, ultimately leading to improved patient outcomes. It also optimizes resource allocation by allowing highly trained specialists to focus their time on the most complex cases."
    ],
    Icon: HeartPulse,
    href: '/services/custom-medical-imaging-ai'
  },
  {
    id: 'graphrag-knowledge-graphs-vector-search',
    name: 'GraphRAG, Knowledge Graphs & Vector Search',
    description: 'Advanced search and retrieval systems combining structural relationship mapping with dense vector similarity to deliver highly accurate, contextual, and hallucination-free AI reasoning.',
    detailedDescription: [
      "Our GraphRAG, Knowledge Graph & Vector Search service represents the state-of-the-art in intelligent information retrieval and context augmentation. We combine structural graph databases with high-dimensional vector search to build systems that understand not only textual similarity, but also the deep relational connections between entities in your enterprise data. This hybrid approach enables unprecedented reasoning capabilities for AI applications.",
      "We engineer these systems by constructing dynamic knowledge graphs that represent your business entities, concepts, and rules as nodes and edges. Simultaneously, we implement advanced vector databases to index unstructured text chunk embeddings. When a user queries the system, our hybrid retrieval pipeline fetches context from both structured relationship graphs and semantic vector spaces, merging them into a cohesive prompt for the language model.",
      "This technology is ideal for highly complex domains such as clinical research, corporate compliance, technical documentation, and product catalogs. Use cases include medical discovery engines mapping gene-drug-disease relationships, intelligent internal wikis resolving multi-layered corporate policy queries, and highly personalized recommendation systems that reason about user preference networks.",
      "By implementing a GraphRAG and Knowledge Graph architecture, organizations can eliminate AI hallucinations and ensure total compliance with corporate data constraints. You gain the ability to answer complex questions that require traversing multiple relational links, which is impossible with standard vector search alone. This results in trustworthy, high-performing AI systems."
    ],
    Icon: Network,
    href: '/services/graphrag-knowledge-graphs-vector-search'
  },
  {
    id: 'ai-video-image-generation-for-marketing',
    name: 'AI Video & Image Generation for Marketing',
    description: 'Generate premium, high-impact AI videos, animations, and product imagery tailored for digital marketing campaigns, social media, and advertising products.',
    detailedDescription: [
      "Our AI Video & Image Generation for Marketing service provides next-generation creative automation designed to elevate product advertising. We leverage cutting-edge AI diffusion and video generation models to produce premium, high-fidelity promotional media, cinematic animations, and hyper-realistic product photoshoots at a fraction of standard production timelines.",
      "We engineer these dynamic pipelines utilizing state-of-the-art frameworks (such as stable diffusion, video synthesis APIs, and spatial positioning models) to seamlessly insert your real-world products into stunning, customizable virtual backgrounds. The platform outputs studio-quality commercials and social-ready visual assets tailored to target audiences.",
      "This service is perfectly suited for advertising agencies, e-commerce brands, and digital marketers seeking to produce content at scale. Use cases include generating diverse product mockups in contextual lifestyle backgrounds, launching multivariate creative ad tests for social platforms, and producing cinematic product videos with dynamic camera movements.",
      "By implementing AI-driven visual generation, marketing campaigns benefit from rapid design experimentation and dramatically lower asset production costs. You gain the agility to scale content output, test variations in real-time, and ensure consistent brand messaging across all advertising products, translating directly to higher engagement and conversions."
    ],
    Icon: Video,
    href: '/services/ai-video-image-generation-for-marketing'
  },
  {
    id: 'ai-native-saas-apps-platforms',
    name: 'AI-Native SaaS Apps & Platforms',
    description: 'Architecting and building multi-tenant, cloud-native Software-as-a-Service (SaaS) platforms powered by embedded agentic AI systems for autonomous business execution.',
    detailedDescription: [
      "Our AI-Native SaaS Apps & Platforms service focuses on designing and developing next-generation multi-tenant software architectures with autonomous intelligence embedded directly in their foundation. We transition away from traditional, request-response applications to create proactive, decision-aware SaaS environments that dynamically execute tasks on behalf of users.",
      "We engineer these platforms using advanced microservices, secure multi-tenant database isolation, and state-of-the-art AI agent runtimes. By wrapping Large Language Models and specialized reasoning engines inside scalable API wrappers, we enable real-time collaborative workflows, automated operational decisions, and highly adaptive frontend interfaces.",
      "This service is tailored for technology startups and enterprise scale-ups seeking to build premium software solutions. Examples include autonomous accounting platforms, self-driving marketing suites, and intelligent CRM networks where background AI agents proactively handle leads, process data, and report findings.",
      "By deploying AI-native SaaS systems, businesses unlock rapid service scaling, zero manual transaction bottlenecks, and continuous product improvement. You gain a powerful, modern platform that adapts to changing business needs, drives user engagement through predictive features, and provides a significant competitive edge."
    ],
    Icon: CloudCog,
    href: '/services/ai-native-saas-apps-platforms'
  }
];

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatarUrl?: string; // Optional: URL to an avatar image
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-4',
    quote: "Working with this team has been a seamless and empowering experience. They took my vision seriously and developed a custom AI application with a RAG AI Assistant and Machine Learning Wizard that exceeded my expectations in both functionality and design. Their professionalism, responsiveness, and ability to translate complex ideas into a user-friendly platform truly set them apart. I’m excited to continue building with them.",
    name: 'Dr. Leona Saunders',
    title: 'Founder | CEO',
    company: 'tBrexa Bio Inc.',
  },
  {
    id: 'testimonial-1',
    quote: "ChanceTEK's AI solutions revolutionized our customer service. The RAG Chatbot provides instant, accurate answers, significantly improving satisfaction.",
    name: 'Robert Green',
    title: 'CEO',
    company: 'Innovatech Ltd.',
  },
  {
    id: 'testimonial-2',
    quote: 'The Executive AI Assistant has been a game-changer for my productivity. It handles my schedule and emails flawlessly, allowing me to focus on strategic growth.',
    name: 'John Smith',
    title: 'Founder',
    company: 'Startup Solutions Inc.',
  },
  {
    id: 'testimonial-3',
    quote: 'Automating our sales pipeline with AI SDR Agents from ChanceTEK has tripled our lead conversion rate. Highly recommended!',
    name: 'Alice Brown',
    title: 'VP of Sales',
    company: 'Future Sales Co.',
  },
];

export interface Partner {
  id: string;
  name: string;
  website: string;
  summary: string;
}

export const partners: Partner[] = [
  {
    id: 'tbrexa',
    name: 'tBrexa Bio Inc.',
    website: 'https://tbrexa.com',
    summary: 'tBrexa Bio Inc. is a biotechnology company at the forefront of AI and life sciences. Through its partnership with ChanceTEK, tBrexa helps advance intelligent clinical research, medical data analysis, and healthcare innovation using AI-powered tools.',
  },
  {
    id: 'streamliningpm',
    name: 'StreamliningPM',
    website: 'https://streamliningpm.com',
    summary: 'StreamliningPM is a product and project management consultancy. As a strategic partner of ChanceTEK, they support the integration of AI-enhanced workflows into business operations, driving smart research and decision-making across enterprise systems.',
  }
];


export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What industries does ChanceTEK serve?',
    answer: 'ChanceTEK provides AI solutions across a wide range of industries, including technology, finance, healthcare, retail, and manufacturing. Our solutions are adaptable to meet the unique needs of any business.',
  },
  {
    id: 'faq-2',
    question: 'How long does it take to implement an AI solution?',
    answer: 'The implementation timeline varies depending on the complexity and scope of the solution. A simple RAG chatbot might be deployed in a few weeks, while a custom Agentic AI system could take several months. We work closely with you to define a realistic timeline.',
  },
  {
    id: 'faq-3',
    question: 'What kind of data is needed for LLM fine-tuning?',
    answer: 'For LLM fine-tuning, we typically require a substantial dataset relevant to your specific domain. This can include internal documents, customer interactions, industry-specific texts, or any data that reflects the language and knowledge you want the AI to learn.',
  },
  {
    id: 'faq-4',
    question: 'How does ChanceTEK ensure data privacy and security?',
    answer: 'Data privacy and security are paramount at ChanceTEK. We adhere to strict data protection protocols, employ encryption, and ensure our solutions comply with relevant regulations. For RAG agents, your proprietary data remains within your control.',
  },
];

export interface Technology {
  id: string;
  name: string;
  Icon: LucideIcon;
}

export const technologies: Technology[] = [
  { id: '11elevenlabs', name: '11Elevenlabs', Icon: AudioWaveform },
  { id: 'airtable', name: 'Airtable', Icon: Database },
  { id: 'amazon-bedrock', name: 'Amazon Bedrock', Icon: Layers },
  { id: 'azure-ai-foundry', name: 'Azure AI Foundry', Icon: Cog },
  { id: 'chromadb', name: 'ChromaDB', Icon: Layers },
  { id: 'copilot-studio', name: 'Copilot Studio', Icon: Users },
  { id: 'crewai', name: 'CrewAI', Icon: Users },
  { id: 'deepseek', name: 'DeepSeek', Icon: Sparkle },
  { id: 'firebase-studio', name: 'Google Firebase Studio', Icon: Rocket },
  { id: 'flowiseai', name: 'Flowise AI', Icon: BarChart3 },
  { id: 'langchain', name: 'LangChain', Icon: Cog },
  { id: 'langflow', name: 'Langflow', Icon: LayoutGrid },
  { id: 'langgraph', name: 'LangGraph', Icon: GitFork },
  { id: 'langsmith', name: 'LangSmith', Icon: MessageCircle },
  { id: 'make', name: 'Make.com', Icon: Cog },
  { id: 'meta-llama', name: 'Meta LLaMA', Icon: BrainCircuit },
  { id: 'n8n', name: 'N8N', Icon: Workflow },
  { id: 'openai', name: 'OpenAI', Icon: BrainCircuit },
  { id: 'openai-agents-sdk', name: 'OpenAI Agents SDK', Icon: Cpu },
  { id: 'pinecone', name: 'Pinecone', Icon: Zap },
  { id: 'retell-ai', name: 'Retell AI', Icon: Mic2 },
  { id: 'serpapi', name: 'SerpAPI', Icon: Search },
  { id: 'serper', name: 'Serper', Icon: Search },
  { id: 'supabase', name: 'Supabase', Icon: ShieldCheck },
  { id: 'tavily', name: 'Tavily', Icon: Search },
  { id: 'twilio', name: 'Twilio', Icon: Phone },
  { id: 'vapi', name: 'VAPI', Icon: Phone },
  { id: 'windsurf', name: 'Windsurf', Icon: GitFork },
  { id: 'zapier', name: 'Zapier', Icon: Shuffle },
  { id: 'volume-2', name: 'Text to Speech', Icon: Volume2 },
].sort((a, b) => a.name.localeCompare(b.name));

export const companyInfo = {
  name: 'ChanceTEK',
  founded: 'May 2025',
  founders: 'Chancellor Minus',
  hqLabel: 'Headquarters',
  hqAddressLine1: '447 Broadway, Suite 1110',
  hqAddressLine2: 'New York, NY 10013',
  phone: '646 867 3318',
  email: 'info@ChanceTEK.com',
  slogan: 'Strategic Decisions Start Here.',
  subSlogan: 'Native AI. Agentic AI. AI-Enabled.',
  headline: 'Your AI & Media Solutions Partner for the Agentic Future',
  description: 'ChanceTEK is building the next generation of AI-native enterprise platforms—designed from the ground up to think, act, and evolve alongside your business.',
  mission: `Native AI. Agentic AI. AI-Enabled.
Strategic Decisions Start Here.

ChanceTEK is building the next generation of AI-native enterprise platforms—designed from the ground up to think, act, and evolve alongside your business.

We go beyond traditional software. Our systems are agentic, adaptive, and decision-aware—empowering organizations to operate with intelligence, speed, and autonomy at scale.

Intelligent Systems. Real Outcomes.

Through a unified ecosystem of custom AI agents, AI-native applications, and enterprise-grade AI SaaS platforms, ChanceTEK enables organizations to:

- Automate complex, multi-step workflows
- Augment high-stakes decision-making
- Reduce operational costs at scale
- Unlock exponential productivity

This is not AI as a feature.
This is AI as the operating layer of your business.

Built on Advanced AI Architecture

Our platforms integrate the full spectrum of modern AI capabilities:

- Large Reasoning Models (LRMs) for deep, step-by-step problem solving
- Large Language Models (LLMs) and Small Language Models (SLMs) for optimized performance across use cases
- Retrieval-Augmented Generation (RAG) for grounded, real-time intelligence
- Precision fine-tuning for domain-specific accuracy
- Multimodal Intelligence spanning text, image, and data
- Computer vision for real-world perception
- Intelligent workflow automation driven by agentic systems

Powered by advanced Context Engineering and next-generation Vibe Coding, our AI is not just responsive—it is context-aware, adaptive, and aligned to real business intent.

Scalable. Performant. Enterprise-Ready.

We leverage high-performance inference frameworks such as vLLM and Llama.cpp to deliver:

- Low-latency, high-throughput AI systems
- Seamless deployment across cloud, hybrid, and edge environments
- Cost-efficient scaling for enterprise workloads

Your AI runs where it performs best—without compromise.

A Hybrid AI Advantage

ChanceTEK combines proprietary AI architecture with the world’s most advanced models—blending frontier innovation with open flexibility.

Our hybrid approach enables:

- Model interoperability and optimization
- Secure, enterprise-grade deployments
- Highly specialized AI tailored to your domain

The result is precision, control, and performance at scale.

The Future of Enterprise is Agentic

We are entering a new era where software doesn’t just support decisions—it makes them, refines them, and acts on them.

ChanceTEK delivers AI-native business platforms that:

- Autonomously execute complex processes
- Collaborate with humans in real time
- Continuously learn and improve
- Redefine how organizations operate, compete, and grow

This is Native AI.
This is Agentic Enterprise.
This is ChanceTEK.`,
  copyright: `© ${new Date().getFullYear()} ChanceTEK. All rights reserved.`,
};

export const tickerPartners = [
  "Condé Nast",
  "ADVANCE",
  "SIMON",
  "Braiva Capital",
  "Couristan",
  "tBrexa Bio Inc.",
  "Nama Harlem",
  "WNDR",
  "Alpharma Pharmaceuticals",
  "Novartis Pharmaceuticals",
  "Manhattan College",
  "Cayenne Pepper Productions",
];

export const featuredPlatforms: Platform[] = [
  {
    id: 'elitebooks',
    name: 'EliteBooks',
    description: "Accounting that runs itself.\n\nEliteBooks is an AI-powered financial operating system with autonomous agents handling invoicing, expenses, payroll, reporting, FinOps, and personal finances — all automated and clearly explained. Everything your business needs.\n\nFull QuickBooks-class accounting, supercharged with AI autonomy.",
    href: 'https://EliteBooks.us/',
    Icon: BarChart3,
  },
  {
    id: 'chancellorhr',
    name: 'ChancellorHR',
    description: "The Autonomous HR Workforce Operating System\n\nNine specialized AI agents working in concert to manage, optimize, and execute every HR operation — from hiring to retention — with minimal human intervention. Nine Agents. One HR Intelligence.\n\nEach agent specializes in an HR domain. Together, they form a unified workforce orchestration system.",
    href: 'https://chancellorhr.us/',
    Icon: Users,
  },
  {
    id: 'chancellor',
    name: 'Chancellor',
    description: "Chancellor — ChancellorOS ERP & CRM Platform\n\nA platform built for a new way of working.\n\nUnify your operations, automate your workflows, and scale with intelligence—all in one system.\n\nWhat would you like to manage with Chancellor Work OS?\n\nPowered by ChancellorOS",
    href: 'https://chancellor--ichancellor.us-east4.hosted.app/',
    Icon: LayoutGrid,
    isPremium: true,
  },
  {
    id: 'workspaceiq',
    name: 'WorkSpaceIQ',
    description: "Power your thinking with WorkSpaceIQ, our AI Research & Dictation Partner. Dictate, research, and create. Upload any source, ask anything, and listen to an AI podcast of your own content — all in one place.",
    href: 'https://WorkSpaceIQ.us',
    Icon: Sparkle,
  },
  {
    id: 'icareos-premium',
    name: 'iCareOS Premium',
    description: "Transform Healthcare with Intelligent AI. iCareOS Health revolutionizes medical documentation and workflow management.",
    href: 'https://icareos.us/',
    Icon: Sparkle,
  },
  {
    id: 'famio',
    name: 'Famio',
    description: "AI Powered Social Media Platform",
    href: 'https://famio.us/',
    Icon: Users,
  },
  {
    id: 'strideiq',
    name: 'StrideIQ',
    description: "StrideIQ is a fitness and wellness app designed to help you track your running, walking, biking, hiking, mediation, intermittent fasting and journaling—all in one place.",
    href: 'https://StrideIQ.fit/',
    Icon: Activity,
  },
  {
    id: 'modeliq',
    name: 'Model IQ',
    description: "AI-powered solutions for building, training, and deploying machine learning models at scale.",
    href: 'https://modelIQ.us',
    Icon: BrainCircuit,
  },
  {
    id: 'isydney',
    name: 'ISydney - The Study Companion',
    description: "The Official Intelligent Chatbot for Howard University Students. iSydney is your smart study companion, an AI-powered voice assistant built to support, guide, and empower students throughout their academic journey.",
    href: 'https://iSydney.us',
    Icon: GraduationCap,
  },
  {
    id: 'icareos',
    name: 'iCareOS',
    description: "iCareOS by ChanceTEK is an AI-native clinical operating system that automates documentation, analyzes medical images, orchestrates patient intake, optimizes billing, monitors clinical risk, and coordinates care through a network of agentic AI modules.",
    href: 'https://iCareOS.tech',
    Icon: HeartPulse,
  },
  {
    id: 'iskylar',
    name: 'iSkylar',
    description: "iSkylar is your AI Voice Therapist — calm, compassionate, and always ready to listen. Powered by Generative AI, she offers mindful guidance on self-care, emotional balance, and healthy living.",
    href: 'https://iSkylar.us',
    Icon: Mic2,
  },
];