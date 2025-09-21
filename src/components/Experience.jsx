export default function Experience() {
  return (
    <section id="experience">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
        <h3 className="text-xl font-semibold">Azure Data Engineer</h3>
        <p className="text-sm text-gray-600">2022 – Present</p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
          <li>Designed & maintained ETL workflows for BI dashboards.</li>
          <li>Implemented validation & error-handling (reduced complaints by 80%).</li>
          <li>Built ingestion pipelines with Azure Data Factory & Databricks.</li>
          <li>Developed reusable dashboard templates in Power BI & Superset.</li>
        </ul>
      </div>
    </section>
  );
}