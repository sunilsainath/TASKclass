# Parent class
class Employee:

    def __init__(self, name, emp_id):
        self.name = name
        self.emp_id = emp_id

    def display(self):
        print("Name:", self.name)
        print("Employee ID:", self.emp_id)


# Child class
class Manager(Employee):

    def manage_team(self):
        print(self.name, "is managing the team")


# Creating object
m1 = Manager("Sunil", 101)

m1.display()
m1.manage_team()