import CourseCard from './components/CourseCard';
import './index.css';

function App() {
  // 1. Array of Objects (The Data)
  const courses = [
    {
      id: 1,
      category: "Backend",
      icon: "☕",
      title: "Mastering Spring Boot 3 & REST APIs",
      instructor: "Ayush Kumar",
      rating: "4.9",
      price: "1,499"
    },
    {
      id: 2,
      category: "Security",
      icon: "🔒",
      title: "JWT Authentication & Spring Security",
      instructor: "Ayush Kumar",
      rating: "4.9",
      price: "1,299"
    },
    {
      id: 3,
      category: "Database",
      icon: "🐬",
      title: "MySQL Indexing & Performance Tuning",
      instructor: "Ayush Kumar",
      rating: "4.8",
      price: "999"
    },
    {
      id: 4,
      category: "Frontend",
      icon: "⚛️",
      title: "React Fundamentals: Components & Props",
      instructor: "Ayush Kumar",
      rating: "5.0",
      price: "1,199"
    }
  ];

  return (
    <div className="marketplace-container">
      <div className="marketplace-header">
        <h1>Explore Courses</h1>
        <p>Learn in-demand backend and frontend engineering skills</p>
      </div>

      {/* 2. Using .map() to generate a card for every object */}
      <div className="courses-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            category={course.category}
            icon={course.icon}
            title={course.title}
            instructor={course.instructor}
            rating={course.rating}
            price={course.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;