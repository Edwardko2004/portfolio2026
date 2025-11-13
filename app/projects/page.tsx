// app/projects/page.tsx

type Project = {
  title: string;
  type: string;
  description: string;
  image: string; // path to jpg/png in /public
  github: string;
};

const projects: Project[] = [
  {
    title: "Formula 1 Race",
    type: "Data pipeline",
    description:
      "Developed a real-world Formula 1 data pipeline on Azure Databricks using Spark Core and Delta Lake, integrating raw telemetry and race datasets into a structured data lakehouse. Designed and optimized ETL workflows with PySpark and Spark SQL to ingest, clean, and transform large-scale data for analytics. Automated data orchestration through Azure Data Factory pipelines and scheduled Databricks notebook triggers.",
    image:
      "https://media.gq-magazine.co.uk/photos/5e662a63b4e1880008727a40/16:9/w_2560%2Cc_limit/20200309-F1-Round-Up-01.jpg.",
    github: "https://github.com/Edwardko2004/formula1",
  },
  {
    title: "Movie Database",
    type: "SQL ingestion",
    description:
      "Designed and implemented a hybrid data architecture combining MongoDB for semi-structured JSON documents and MySQL for relational subsets to benchmark query cost and performance. Built Python (Pandas) ETL pipelines to ingest, validate, and transform raw movie data into curated analytic datasets. Delivered Jupyter notebooks and dashboards visualizing insights and documented trade-offs between schema-on-read (MongoDB) and schema-on-write (SQL) strategies for analytics workloads.",
    image:
      "https://www.wondermind.com/wp-content/uploads/2024/09/20-Feel-Good-Movies-People-Swear-By-For-Your-Next-Bad-Day.jpg?w=960",
    github: "https://github.com/Edwardko2004/MoviesDBS", // TODO: replace
  },
  {
    title: "Face Recognition Counter",
    type: "machine learning model",
    description:
      "Supported Partners in Education Roatan by wiring donation flows and designing analytics views to track donor behavior over time.",
    image:
      "https://user-images.githubusercontent.com/102630199/228613628-f60ee6ee-c4b4-42d7-8fa6-1590e29bb502.jpg",
    github: "https://github.com/your-username/pier-donations", // TODO: replace
  },
  {
    title: "ML Playground",
    type: "Machine Learning",
    description:
      "A sandbox of ML experiments: regression, classification, and clustering notebooks focused on interpretability and clean visualizations.",
    image:
      "https://datascientest.com/en/files/2021/01/Machine-learning-def-.png",
    github: "https://github.com/your-username/ml-playground", // TODO: replace
  },
  {
    title: "BU Spark Bytes Food Platform",
    type: "Food Review Platform",
    description:
      "Built an interactive food review website using React.js, TypeScript, and Supabase as a backend-as-a-service platform. Designed and normalized PostgreSQL schemas for restaurants, menus, and user reviews, with Node.js + npm workflows managing build and API logic. Implemented Supabase Auth for secure logins, real-time CRUD review updates, and responsive HTML / CSS layouts for modern UX. Integrated sentiment analysis and rating aggregation to surface top-rated dishes and dining trends.",
    image:
      "https://www.creativefabrica.com/wp-content/uploads/2020/02/11/Food-Logo-Graphics-1-70.jpg",
    github: "https://github.com/Edwardko2004/CS391-Project", // TODO: replace
  },
  {
    title: "Pricing Sheet Automation",
    type: "Data pipeline/automation",
    description:
      "Automated Excel pricing workflows for Chefler Foods using Python, openpyxl, and xlwings to generate dynamic helper sheets and YTD metrics.",
    image:
      "https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2024/04/an-excel-spreadsheet-in-the-background-with-the-excel-logo-in-front.jpg",
    github: "https://github.com/your-username/pricing-automation", // TODO: replace
  },
];

export default function ProjectsPage() {
  return (
    <section className="section">
      <h2 className="exp-title">Projects</h2>
      <p className="section-intro">
        A selection of engineering, analytics, and ML projects I&apos;ve worked
        on
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-card"
          >
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>

            <div className="project-overlay">
              <span className="project-type">{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="project-link">View on GitHub ↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
