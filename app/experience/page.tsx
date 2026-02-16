export default function ExperiencePage() {
  const experiences = [
    {
      title: "AI Software Engineer Intern",
      company: "GranteAide",
      description:
        "Built and productionized a RAG-based AI agent using FAISS vector search and embedding pipelines. Designed and shipped full-stack product features integrating backend APIs, GCP, and ML inference, improving user workflow efficiency and reducing manual grant review time.",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQEf48MqbWWtMw/company-logo_100_100/company-logo_100_100/0/1712014669738/diyversity_logo?e=1772668800&v=beta&t=PsBgUGqaZa7m1ahYb3d6kVB22P7ttMzRDiYy8D8rNLY", // example placeholder
    },
    {
      title: "Data Engineering/Analyst Intern",
      company: "Chefler Foods / Mike's Amazing Foods (2024)",
      description:
        "Automated 2,000 + pricing sheets with Python (openpyxl, xlwings), reducing manual work by 90% and standardizing pricing operations across product lines. Designed MySQL schemas and Power BI dashboards integrating 100K SKU data, improving margin targeting by 12 %. Engineered Excel-based KPI and cost analysis dashboards using advanced functions to support finance and operations decision-making.",
      logo: "https://cheflerfoods.com/wp-content/uploads/2020/07/mikes-amazing-tm.jpg", // example placeholder
    },
    {
      title: "Data Analytics Extern",
      company: "Beats by Dre (2024)",
      description:
        "Scraped and analyzed Amazon product reviews using Oxylabs API, Pandas, and TextBlob to uncover key sentiment insights about Beats speakers. Cleaned and tokenized 50K+ data points for a sentiment classification pipeline.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlaWnO_IyAQ7Hn2_Pa6PvwARyRvCD3_risSQ&s",
    },
    {
      title: "SAT Competition Math Tutor",
      company: "Veritas Learning Center (2022 - 2023)",
      description:
        "Provided one-on-one tutoring for SAT Math and AMC 8 preparation, developing personalized learning materials, quizzes, and practice tests. Audited student progress and maintained performance tracking spreadsheets in Excel to identify improvement areas and optimize study plans.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/SAT_logo_%282017%29.svg/2560px-SAT_logo_%282017%29.svg.png", // replace with real link if available
    },
    {
      title: "BU Virtual Assistant",
      company: "Boston University (2025)",
      description:
        "Audited and rebuilt course data for BU's Ultra platform using H5P and HTML source inspection, ensuring data accuracy and usability across 100+ courses; coordinated workflows in Asana and Teams to streamline content-engineering processes.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boston_University_seal.svg/1200px-Boston_University_seal.svg.png",
    },
    {
      title: "BU Media Assistant",
      company: "Boston University (2025)",
      description:
        "Managed BU's digital media catalog and supported production workflows across campus film facilities. Set up and hosted weekly screenings, maintained projection and A/V systems, and assisted students with camera equipment and media software. Streamlined equipment tracking and tech setup processes, enhancing operational efficiency and user experience for production teams.",
      logo: "https://www.shutterstock.com/image-vector/support-icon-can-be-used-600nw-1887496465.jpg",
    },
  ];

  return (
    <>
      {/* Experience Section */}
      <section className="section">
        <h2 className="exp-title">Experience</h2>
        <p className="section-intro">
          A few of the roles and projects that shaped my journey.
        </p>

        <div className="exp-grid">
          {experiences.map((exp, idx) => (
            <div key={idx} className="exp-card">
              <div className="exp-header">
                <div className="exp-logo">
                  <img src={exp.logo} alt={`${exp.company} logo`} />
                </div>
                <div>
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                </div>
              </div>
              <p className="details">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="section">
        <h2 className="exp-title">Education</h2>
        <div className="exp-grid">
          <div className="exp-card">
            <div className="exp-header">
              <div className="exp-logo">
                <img src="/icons/bu.png" alt="Boston University logo" />
              </div>
              <div>
                <h3>Bachelor of Arts in Computer Science</h3>
                <p className="company">Boston University (2022 – 2026)</p>
              </div>
            </div>
            <p className="details">
              Coursework includes Data Structures and Algorithms, Operating
              Systems, Database Management Systems, Software Engineering,
              Foundations of Data Science, AI Algorithms, Responsive Web Design,
              Qualitative Research Strategies in Global Health, Principles of
              Machine Learning
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
