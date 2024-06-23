import CourseCard2 from "../../components/courseCard/CourseCard2";
const courses = [
  {
    title: "Introduction to JavaScript",
    description:
      "Learn the basics of JavaScript, the most popular programming language for web development. This course covers variables, functions, and basic DOM manipulation to build interactive websites. Perfect for beginners looking to start their coding journey.",
    instructor: "John Doe",
    duration: "4 weeks",
    price: 99.99,
    imgURL: "https://picsum.photos/600/400",
  },
  {
    title: "Advanced Python Programming",
    description:
      "Deep dive into advanced concepts of Python programming including OOP, decorators, and generators. This course is designed for those who have basic knowledge of Python and want to explore more complex topics and applications.",
    instructor: "Jane Smith",
    duration: "6 weeks",
    price: 149.99,
    imgURL: "https://picsum.photos/600/400",
  },
  {
    title: "Web Development Bootcamp",
    description:
      "A comprehensive bootcamp covering HTML, CSS, JavaScript, and React. Build modern web applications from scratch, and learn essential skills for front-end and back-end development. Ideal for aspiring full-stack developers.",
    instructor: "Emily Johnson",
    duration: "12 weeks",
    price: 299.99,
    imgURL: "https://picsum.photos/600/400",
  },
  {
    title: "Data Science with R",
    description:
      "Learn data analysis, visualization, and statistical modeling using R programming language. This course covers essential techniques for manipulating data and creating visual representations. Suitable for those interested in data science and analytics.",
    instructor: "Michael Brown",
    duration: "8 weeks",
    price: 199.99,
    imgURL: "https://picsum.photos/600/400",
  },
  {
    title: "Machine Learning A-Z",
    description:
      "Master machine learning algorithms, neural networks, and deep learning with hands-on projects. This course is designed for those who want to gain a solid understanding of machine learning techniques and their practical applications.",
    instructor: "Chris Wilson",
    duration: "10 weeks",
    price: 249.99,
    imgURL: "https://picsum.photos/600/400",
  },
  {
    title: "React Native for Mobile Apps",
    description:
      "Build mobile applications using React Native, a popular framework for cross-platform development. Learn to create dynamic and responsive apps for both iOS and Android. Perfect for developers looking to expand their skill set.",
    instructor: "Sarah Lee",
    duration: "5 weeks",
    price: 129.99,
    imgURL: "https://picsum.photos/600/400",
  },
  {
    title: "Introduction to Cybersecurity",
    description:
      "Learn the basics of cybersecurity and how to protect systems and networks from cyber threats. This course covers essential security principles, threat detection, and preventive measures. Ideal for anyone interested in cybersecurity.",
    instructor: "James Miller",
    duration: "7 weeks",
    price: 179.99,
    imgURL: "https://picsum.photos/600/400",
  },
  {
    title: "Full Stack Web Development",
    description:
      "Master both front-end and back-end web development technologies. This course covers HTML, CSS, JavaScript, Node.js, and databases. Build complete web applications from scratch and become a proficient full-stack developer.",
    instructor: "Anna Garcia",
    duration: "10 weeks",
    price: 299.99,
    imgURL: "https://picsum.photos/600/400",
  },
  {
    title: "Intro to Cloud Computing",
    description:
      "Learn the fundamentals of cloud computing and gain hands-on experience with AWS and Azure. This course covers cloud infrastructure, services, and deployment models. Suitable for those looking to understand cloud technologies.",
    instructor: "David Martinez",
    duration: "6 weeks",
    price: 159.99,
    imgURL: "https://picsum.photos/600/400",
  },
  {
    title: "UX/UI Design Fundamentals",
    description:
      "Explore the principles of user experience and user interface design. Learn to create engaging and intuitive digital products. This course is ideal for those looking to enhance their design skills and create better user experiences.",
    instructor: "Laura Robinson",
    duration: "8 weeks",
    price: 189.99,
    imgURL: "https://picsum.photos/600/400",
  },
  {
    title: "DevOps Essentials",
    description:
      "Learn the essential practices of DevOps, including CI/CD, automation, and monitoring. This course covers tools and methodologies to improve collaboration and efficiency in software development. Perfect for developers and IT professionals.",
    instructor: "Robert Clark",
    duration: "5 weeks",
    price: 139.99,
    imgURL: "https://picsum.photos/600/400",
  },
  {
    title: "Introduction to Artificial Intelligence",
    description:
      "Get started with AI concepts and techniques, including machine learning and natural language processing. This course provides a foundational understanding of AI and its applications. Suitable for beginners and tech enthusiasts.",
    instructor: "Karen Lewis",
    duration: "9 weeks",
    price: 219.99,
    imgURL: "https://picsum.photos/600/400",
  },
];

export default function Courses2() {
  return (
    <div>
      {courses.map((course) => {
        return (
          <CourseCard2
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 bg-white"
              >
                <path
                  fillRule="evenodd"
                  d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            }
            title={course.title}
            desc={course.description}
            instructor={course.instructor}
            price={course.price}
            duration={course.duration}
            imgURL={course.imgURL}
            buy
          />
        );
      })}
    </div>
  );
}
