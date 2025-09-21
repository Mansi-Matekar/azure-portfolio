import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="text-center">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
        Azure Data Engineer with hands-on experience in designing scalable
        pipelines, building BI dashboards, and delivering data solutions using
        Azure Data Factory, Databricks, and Delta Lake.
      </p>
    </section>
  );
}