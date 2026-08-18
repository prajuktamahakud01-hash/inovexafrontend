import React from 'react'
import { motion } from 'framer-motion'
import { TechIcons } from './TechIcons.jsx'

const categories = [
  {
    title: 'FRONTEND',
    items: [
      { name: 'React', key: 'React' },
      { name: 'Next.js', key: 'Next.js' },
      { name: 'HTML5', key: 'HTML5' },
      { name: 'CSS3', key: 'CSS3' },
      { name: 'JavaScript', key: 'JavaScript' },
    ],
  },
  {
    title: 'BACKEND',
    items: [
      { name: 'Node.js', key: 'Node.js' },
      { name: 'Express', key: 'Express' },
      { name: 'Python', key: 'Python' },
      { name: 'PHP', key: 'PHP' },
      { name: 'Laravel', key: 'Laravel' },
    ],
  },
  {
    title: 'DATABASE',
    items: [
      { name: 'PostgreSQL', key: 'PostgreSQL' },
      { name: 'MySQL', key: 'MySQL' },
      { name: 'MongoDB', key: 'MongoDB' },
      { name: 'SQL Server', key: 'SQL Server' },
      { name: 'IBM DB2', key: 'IBM DB2' },
      { name: 'Snowflake', key: 'Snowflake' },
    ],
  },
  {
    title: 'DATA ENGINEERING',
    items: [
      { name: 'Apache Hop', key: 'Apache Hop' },
      { name: 'Apache Spark', key: 'Apache Spark' },
      { name: 'Airflow', key: 'Airflow' },
      { name: 'Kafka', key: 'Kafka' },
      { name: 'dbt', key: 'dbt' },
      { name: 'Databricks', key: 'Databricks' },
      { name: 'AWS Glue', key: 'AWS Glue' },
      { name: 'Azure Data Factory', key: 'Azure Data Factory' },
      { name: 'IICS', key: 'IICS' },
      { name: 'IBM Datastage', key: 'IBM Datastage' },
      { name: 'Talend', key: 'Talend' },
    ],
  },
  {
    title: 'ANALYTICS & BI',
    items: [
      { name: 'Power BI', key: 'Power BI' },
      { name: 'Tableau', key: 'Tableau' },
      { name: 'Looker', key: 'Looker' },
      { name: 'Apache Superset', key: 'Apache Superset' },
      { name: 'Panintelligence', key: 'Panintelligence' },
      { name: 'Data Warehousing', key: 'Data Warehousing' },
      { name: 'Data Visualization', key: 'Data Visualization' },
      { name: 'Advanced Analytics', key: 'Advanced Analytics' },
    ],
  },
  {
    title: 'CLOUD',
    items: [
      { name: 'AWS', key: 'AWS' },
      { name: 'Microsoft Azure', key: 'Microsoft Azure' },
      { name: 'Google Cloud', key: 'Google Cloud' },
    ],
  },
  {
    title: 'AI & ML',
    items: [
      { name: 'Python', key: 'Python' },
      { name: 'Machine Learning', key: 'Machine Learning' },
      { name: 'Generative AI', key: 'Generative AI' },
      { name: 'LLMs', key: 'LLMs' },
    ],
  },
  {
    title: 'MOBILE',
    items: [
      { name: 'Flutter', key: 'Flutter' },
      { name: 'React Native', key: 'React Native' },
      { name: 'Kotlin', key: 'Kotlin' },
      { name: 'Swift', key: 'Swift' },
    ],
  },
]

export default function TechnologyStack() {
  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-navy-950/40 overflow-hidden">
      {/* Background subtle decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-400/5 dark:bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-display font-extrabold text-sm shadow-md shadow-blue-500/25">
              T
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-mono">
              Technology that powers modern businesses
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display"
          >
            Powered by modern tools and proven platforms
          </motion.h2>

          {/* Curved underline indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 flex justify-center"
          >
            <div className="w-14 h-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
          </motion.div>
        </div>

        {/* 8-Card Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-navy-900/80 p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-blue-400/40 dark:hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start"
            >
              {/* Category Title */}
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400 mb-6 font-display">
                {category.title}
              </h3>

              {/* Technology Items Grid inside Card */}
              <div
                className={`grid gap-y-6 gap-x-2 sm:gap-x-3 items-start ${
                  category.items.length === 3 ? 'grid-cols-3 sm:grid-cols-4' : 'grid-cols-4'
                }`}
              >
                {category.items.map((tech) => {
                  const IconComponent = TechIcons[tech.key]
                  return (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center group cursor-pointer text-center"
                    >
                      {/* Icon Tile Box */}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-navy-800/80 border border-slate-200/80 dark:border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center p-2.5 sm:p-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:border-blue-300 dark:group-hover:border-blue-400/40">
                        {IconComponent ? (
                          <IconComponent />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 font-bold text-xs">
                            {tech.name[0]}
                          </div>
                        )}
                      </div>

                      {/* Tech Name Label */}
                      <span className="mt-2.5 text-[11px] sm:text-[12px] font-medium text-slate-600 dark:text-slate-300 text-center leading-tight transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {tech.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
