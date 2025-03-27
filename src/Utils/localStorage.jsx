
const Employees = [
    {
        "id": 1,
        "firstname": "Aarav",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Design Homepage",
                "description": "Create a responsive homepage layout.",
                "date": "2025-03-26",
                "category": "Design",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Fix Login Bug",
                "description": "Resolve the issue with user login validation.",
                "date": "2025-03-27",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Write API Documentation",
                "description": "Document API endpoints for the project.",
                "date": "2025-03-28",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstname": "Vihaan",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Develop User Dashboard",
                "description": "Create a dashboard with analytics and charts.",
                "date": "2025-03-29",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Optimize Database Queries",
                "description": "Improve query performance in the application.",
                "date": "2025-03-30",
                "category": "Database",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Write Unit Tests",
                "description": "Add unit tests for critical API endpoints.",
                "date": "2025-04-01",
                "category": "Testing",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 3,
        "firstname": "Ayaan",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Refactor Backend Code",
                "description": "Improve code structure and remove redundancies.",
                "date": "2025-04-02",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Conduct Security Audit",
                "description": "Review application security vulnerabilities.",
                "date": "2025-04-03",
                "category": "Security",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Update README File",
                "description": "Ensure project documentation is up to date.",
                "date": "2025-04-04",
                "category": "Documentation",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstname": "Reyansh",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Improve Page Load Speed",
                "description": "Optimize assets and scripts for better performance.",
                "date": "2025-04-05",
                "category": "Performance",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Fix CSS Bugs",
                "description": "Resolve layout issues on mobile devices.",
                "date": "2025-04-06",
                "category": "Design",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Implement Dark Mode",
                "description": "Add theme switching functionality.",
                "date": "2025-04-07",
                "category": "Frontend",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstname": "Kabir",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Integrate Payment Gateway",
                "description": "Add Stripe integration for online payments.",
                "date": "2025-04-08",
                "category": "Backend",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Set Up CI/CD Pipeline",
                "description": "Automate deployment process using GitHub Actions.",
                "date": "2025-04-09",
                "category": "DevOps",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Monitor Server Health",
                "description": "Set up monitoring tools for server logs.",
                "date": "2025-04-10",
                "category": "Infrastructure",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    }
];

const admin = [
    {
        "id": 1,
        "firstname": "Admin",
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(Employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return {employees, admin};
}