export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">Netflix Data Pipeline</h3>
          <p className="mt-2 text-gray-700 text-sm">
            Built end-to-end data pipeline on Azure using Databricks, Delta Lake, and
            Synapse Analytics to process and analyze Netflix data in Bronze-Silver-Gold layers.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">Real-Time Analytics Dashboard</h3>
          <p className="mt-2 text-gray-700 text-sm">
            Designed dashboards in Power BI & Superset integrating with Azure Data Lake
            for streaming data insights and business reporting.
          </p>
        </div>
      </div>
    </section>
  );
}