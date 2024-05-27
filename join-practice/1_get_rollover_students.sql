SELECT students.name AS student_name, 
cohorts.name AS cohort_name,
cohorts.start_date AS cohort_start_date, 
students.start_date AS student_start_date 
FROM students JOIN cohorts 
ON cohorts.id = cohort_id
WHERE students.start_date <> cohorts.start_date
ORDER BY cohort_start_date;


-- LHL answer, but doesnt contain the expected result colunm names:
-- SELECT students.name, cohorts.name, cohorts.start_date as cohort_start_date, students.start_date as student_start_date
-- FROM students
-- JOIN cohorts ON cohort_id = cohorts.id
-- WHERE cohorts.start_date != students.start_date
-- ORDER BY cohort_start_date;