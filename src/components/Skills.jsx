export default function Skills() {
  const skills = [
    "Azure Data Factory","Databricks","SQL","Python",
    "Power BI","Delta Lake","ETL","Data Lake"
  ];
  return (
    <section id="skills">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm shadow hover:bg-blue-200 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}