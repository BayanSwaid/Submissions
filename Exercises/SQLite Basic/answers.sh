Basic Queries:
"SELECT name FROM students"
"SELECT * FROM students WHERE Age > 30"
"SELECT * FROM students WHERE Age = 30 AND Gender = 'F'"
"SELECT Points FROM students WHERE name='Alex'"
"INSERT INTO students VALUES (null,'Bayan', 22, 'F', 400)"
"UPDATE students SET Points = Points + 10 WHERE name='Basma'"
"UPDATE students SET Points = Points - 20 WHERE name = 'Alex'"


Creating Table:
"INSERT INTO graduates (name, Age, Gender, Points)
SELECT name, Age, Gender, Points FROM students WHERE name = 'Layal'"
"UPDATE graduates SET Graduation = '08/09/2018' WHERE name = 'Layal'"
"DELETE FROM students WHERE name='Layal'"


Joins:

"SELECT E.name as Employee, C.name as Company, C.Date from employees E JOIN companies C on E.Company = C.name"
"SELECT E.name FROM employees E JOIN companies C on C.name = E.Company WHERE C.Date < 2000"
"SELECT C.name FROM companies C JOIN employees E on Company = C.name WHERE Role = 'Graphic Designer'"

