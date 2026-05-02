// union |
type UserRole = 'admin' | 'user';
const getDashBoard = (role: UserRole) => {
    if (role==='admin'){
        return 'Admin  DashBoard'
    }
    else if(role === 'user'){
        return 'User DashBoard'
    }
    else{
        return 'Guest DashBoard'
    }
}

getDashBoard('guest')
getDashBoard('admin')

type Employee = {
    id: number,
    name: string,
    phoneNo: number

}

type Manager = {
    designation: string,
    teamSize: number
}

type EmployeeManager = Employee & Manager

const Mr: EmployeeManager ={
    id: 34,
    name: 'saheb',
    phoneNo: 343434,
    designation: 'sfdsfsdfsdf',
    teamSize: 10
}