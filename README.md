# 🏢 Visitor Management System (VMS)

A comprehensive, role-based visitor management system built with React.js and modern web technologies. This system provides complete visitor tracking, user management, and security features for organizations of all sizes.

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Complex Concepts](#-complex-concepts)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Role-Based Access](#-role-based-access)
- [API Integration](#-api-integration)
- [Contributing](#-contributing)
- [Contact](#-contact)

## 🎯 Overview

The Visitor Management System (VMS) is a full-featured web application designed to streamline visitor management processes in organizations. It provides comprehensive tracking of visitors, manages user permissions through role-based access control, and offers detailed reporting and analytics.

### Key Highlights

- **Role-Based Access Control**: Three-tier user system (Admin, Receptionist, Security Guard)
- **Real-time Visitor Tracking**: Complete visitor lifecycle management
- **Comprehensive Reporting**: Advanced analytics and CSV export functionality
- **Modern UI/UX**: Responsive design with Material-UI and Tailwind CSS
- **Mock API Integration**: Fully functional with simulated backend
- **Security Features**: Image capture, signature verification, and access control

## 🛠 Tech Stack

### Frontend Framework
- **React.js 18.2.0** - Modern JavaScript library for building user interfaces
- **React Router DOM 6.22.3** - Declarative routing for React applications
- **React Context API** - State management for authentication and user data

### UI/UX Libraries
- **Material-UI (MUI) 5.15.12** - React components implementing Google's Material Design
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Headless UI 1.7.19** - Unstyled, accessible UI components
- **React Icons 5.0.1** - Popular icons for React projects

### State Management & Forms
- **Redux Toolkit 2.2.2** - State management library
- **Formik 2.4.5** - Form library for React
- **Yup 1.4.0** - JavaScript schema builder for validation

### Additional Libraries
- **Axios 1.6.8** - HTTP client for API requests
- **Chart.js 4.4.2** - Simple yet flexible JavaScript charting library
- **React Chart.js 2 5.2.0** - React wrapper for Chart.js
- **React Webcam 7.2.0** - Webcam component for React
- **React Notifications Component 4.0.1** - Notification system
- **React Select 5.8.0** - Flexible select input control
- **React Use WebSocket 4.8.1** - WebSocket hook for React

### Development Tools
- **React Scripts 5.0.1** - Configuration and scripts for Create React App
- **Testing Library** - Testing utilities for React components

## ✨ Features

### 🔐 Authentication & Authorization
- **Multi-Role Authentication**: Admin, Receptionist, and Security Guard roles
- **JWT Token Management**: Secure token-based authentication
- **Session Management**: Automatic session validation and renewal
- **Password Reset**: Secure password recovery system

### 👥 User Management
- **User Registration**: Multi-step user creation with validation
- **Profile Management**: Complete user profile with image and signature
- **Role Assignment**: Dynamic role-based access control
- **User Activity Tracking**: Comprehensive user activity logs

### 🏃 Visitor Management
- **Visitor Registration**: Complete visitor information capture
- **Real-time Tracking**: Live visitor status and location tracking
- **Check-in/Check-out**: Automated visitor lifecycle management
- **Visitor History**: Complete historical visitor data

### 🎫 Pass Management
- **Digital Passes**: Electronic visitor passes with QR codes
- **Pass Templates**: Customizable pass designs
- **Expiry Management**: Automatic pass expiration handling
- **Pass Analytics**: Detailed pass usage statistics

### 📊 Reporting & Analytics
- **Comprehensive Reports**: 4 main categories with multiple sub-types
- **Advanced Filtering**: Date range, user, visitor, and zone filtering
- **CSV Export**: Complete data export functionality
- **Visual Analytics**: Interactive charts and graphs

### ⚙️ System Configuration
- **Zone Management**: Physical location and zone configuration
- **Key Management**: Electronic key tracking and assignment
- **Reader Configuration**: RFID/NFC reader setup and management
- **Adam Device Management**: IoT device integration

### 🔒 Security Features
- **Image Capture**: Real-time photo capture for visitors
- **Signature Verification**: Digital signature capture and storage
- **Access Control**: Role-based feature access restrictions
- **Audit Logging**: Complete system activity tracking

## 🧠 Complex Concepts

### 1. Role-Based Access Control (RBAC)
The system implements a sophisticated three-tier RBAC system:

```javascript
// Role Hierarchy
Admin (Full Access) → Receptionist (Limited Access) → Security Guard (Minimal Access)

// Navigation Logic
const navItems = role === 'Admin' ? navItemsAdmin : navItemsReceptionist;
if (role === "Guard") return null; // Hide sidebar completely
```

### 2. Context API for State Management
Global state management using React Context for authentication:

```javascript
// UserContext provides global authentication state
const { isAuthenticated, user, logout } = useContext(UserContext);
```

### 3. Mock API Architecture
Comprehensive mock API system simulating real backend interactions:

```javascript
// Mock API structure
const mockApi = {
  login: async (credentials) => { /* simulate login */ },
  getVisitors: async () => { /* fetch visitor data */ },
  createUser: async (userData) => { /* create new user */ }
};
```

### 4. Multi-Step Form Validation
Complex form validation using Formik and Yup:

```javascript
// Multi-step validation with dynamic schemas
const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('First name is required'),
  user_type: Yup.string().required('User type is required'),
  // ... complex validation rules
});
```

### 5. Real-time Data Synchronization
WebSocket integration for real-time updates:

```javascript
// WebSocket hook for live data
const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
```

### 6. Advanced Reporting Engine
Dynamic report generation with filtering and export:

```javascript
// Report configuration
const reportTypes = {
  configuration: ['Reader', 'Adam', 'Zone', 'Key'],
  user: ['User Details', 'User Sessions'],
  visitor: ['Visiting Reports', 'Zone Tracking'],
  key: ['Key Assigned Reports']
};
```

## 🚀 Installation

### Prerequisites
- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Step-by-Step Setup

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd visitor-management-system-react
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_API_URL=http://localhost:8000/api
   REACT_APP_SOCKET_URL=ws://localhost:8000/ws
   REACT_APP_ENVIRONMENT=development
   ```

4. **Start the Development Server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Build for Production**
   ```bash
   npm run build
   # or
   yarn build
   ```

6. **Run Tests**
   ```bash
   npm test
   # or
   yarn test
   ```

## 📖 Usage

### Getting Started

1. **Access the Application**
   - Open your browser and navigate to `http://localhost:3000`
   - You'll be redirected to the login page

2. **Login with Different Roles**

   **Admin Access (Full Features):**
   ```javascript
   Username: admin
   Password: [any password]
   ```

   **Receptionist Access (Limited Features):**
   ```javascript
   Username: john
   Password: [any password]
   ```

   **Security Guard (Minimal Interface):**
   ```javascript
   Username: security1
   Password: [any password]
   ```

### Key Workflows

#### Visitor Management
1. Navigate to Visitors section
2. Click "Add New Visitor"
3. Fill in visitor details with image capture
4. Generate visitor pass
5. Track visitor movements

#### User Management (Admin Only)
1. Go to Users section
2. Add new users with role assignment
3. Manage user permissions
4. Reset user passwords

#### System Configuration (Admin Only)
1. Configure zones and locations
2. Set up RFID readers
3. Manage access keys
4. Configure Adam devices

#### Reporting
1. Access Reports section
2. Select report type and filters
3. Generate and export reports
4. Analyze visitor patterns

## 📁 Project Structure

```
visitor-management-system-react/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── sidebar/       # Navigation sidebar
│   │   ├── topbar/        # Top navigation bar
│   │   ├── notification/  # Notification system
│   │   └── camera/        # Camera components
│   ├── context/           # React Context providers
│   │   └── UserContext.jsx # Authentication context
│   ├── views/             # Page components
│   │   ├── auth/          # Authentication pages
│   │   ├── dashboard/     # Dashboard page
│   │   ├── visitor/       # Visitor management
│   │   ├── user/          # User management
│   │   ├── pass/          # Pass management
│   │   ├── report/        # Reporting system
│   │   ├── configure/     # System configuration
│   │   └── guard/         # Security guard interface
│   ├── utils/             # Utility functions
│   │   ├── data/          # Mock data files
│   │   ├── mockApi.js     # Mock API functions
│   │   ├── http/          # HTTP utilities
│   │   └── Constants.jsx  # Application constants
│   ├── assets/            # Images and static files
│   ├── App.js             # Main application component
│   └── index.js           # Application entry point
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

## 👤 Role-Based Access

### Admin Users
- **Full Access**: Complete system access
- **User Management**: Create, update, delete users
- **System Configuration**: Configure all system settings
- **Advanced Reporting**: Access to all reports and analytics

### Receptionist Users
- **Limited Access**: Core visitor management features
- **Visitor Operations**: Register and manage visitors
- **Pass Management**: Create and track visitor passes
- **Basic Reports**: Access to standard reports

### Security Guards
- **Minimal Interface**: Streamlined security operations
- **Access Control**: Monitor and control access points
- **Visitor Verification**: Verify visitor credentials
- **Emergency Response**: Quick access to security features

## 🔌 API Integration

The system includes a comprehensive mock API that simulates real backend interactions:

### Core API Endpoints

```javascript
// Authentication
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/reset-password

// User Management
GET /api/users
POST /api/users
PUT /api/users/:id
DELETE /api/users/:id

// Visitor Management
GET /api/visitors
POST /api/visitors
PUT /api/visitors/:id
DELETE /api/visitors/:id

// Pass Management
GET /api/passes
POST /api/passes
PUT /api/passes/:id

// Reporting
GET /api/reports/configuration
GET /api/reports/user-sessions
GET /api/reports/visitor-tracking
GET /api/reports/key-assigned

// System Configuration
GET /api/zones
POST /api/zones
GET /api/keys
POST /api/keys
GET /api/readers
POST /api/readers
```

## 🤝 Contributing

We welcome contributions to the Visitor Management System! Please follow these guidelines:

1. **Fork the Repository**
2. **Create a Feature Branch**: `git checkout -b feature/amazing-feature`
3. **Commit Your Changes**: `git commit -m 'Add amazing feature'`
4. **Push to the Branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow React best practices
- Use TypeScript for new components
- Write comprehensive tests
- Update documentation for new features
- Follow the existing code style

## 📞 Contact

**Developer**: Abdullah Akram
**Email**: iamabdullahakram1@gmail.com
**LinkedIn**: https://www.linkedin.com/in/abdullah-akram-a8b213318/
**GitHub**: https://github.com/iamabdullah1
**Portfolio**: abdullahakram.me

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Material-UI Team** for the excellent UI components
- **React Community** for the amazing ecosystem
- **Open Source Contributors** for various libraries and tools
- **Organization** for providing the requirements and feedback

---

**⭐ If you found this project helpful, please give it a star!**

*Built with ❤️ using React.js and modern web technologies*
