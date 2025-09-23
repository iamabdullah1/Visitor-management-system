import userData from './data/userData.js';
import visitorData from './data/visitorData.js';
import zonesData from './data/zonesData.js';
import keysData from './data/keysData.js';
import passesData from './data/passesData.js';
import dashboardData from './data/dashboardData.js';

// Mock API service to simulate backend responses
const mockApi = {
  // Authentication
  login: async (credentials) => {
    // Mock login - accept any username/password for demo
    const user = userData.find(u => u.user_name === credentials.username);
    if (user) {
      return {
        id: user.id,
        username: user.user_name,
        user_type: user.user_type,
        image: user.image,
        token: {
          access: 'mock_access_token_' + user.id,
          refresh: 'mock_refresh_token_' + user.id,
        },
      };
    }
    throw new Error('Invalid credentials');
  },

  // Users
  getAllUsers: async () => {
    return userData;
  },

  createUser: async (userData) => {
    const newUser = {
      ...userData,
      id: Math.max(...userData.map(u => u.id)) + 1,
      createdOn: new Date().toISOString(),
      updatedOn: new Date().toISOString(),
    };
    userData.push(newUser);
    return newUser;
  },

  updateUser: async (id, userData) => {
    const index = userData.findIndex(u => u.id === id);
    if (index !== -1) {
      userData[index] = { ...userData[index], ...userData, updatedOn: new Date().toISOString() };
      return userData[index];
    }
    throw new Error('User not found');
  },

  deleteUser: async (id) => {
    const index = userData.findIndex(u => u.id === id);
    if (index !== -1) {
      userData.splice(index, 1);
      return { success: true };
    }
    throw new Error('User not found');
  },

  resetUserPassword: async (id) => {
    // Mock password reset
    return { success: true };
  },

  // Visitors
  getVisitors: async (params = {}) => {
    let filtered = [...visitorData];
    if (params.first_name__icontains) {
      filtered = filtered.filter(v => v.firstName.toLowerCase().includes(params.first_name__icontains.toLowerCase()));
    }
    if (params.last_name__icontains) {
      filtered = filtered.filter(v => v.lastName.toLowerCase().includes(params.last_name__icontains.toLowerCase()));
    }
    if (params.phone__icontains) {
      filtered = filtered.filter(v => v.phoneNumber.includes(params.phone__icontains));
    }
    if (params.gov_id_no__icontains) {
      filtered = filtered.filter(v => v.gov_id_no.includes(params.gov_id_no__icontains));
    }
    // Handle pagination
    const offset = params.offset || 0;
    const limit = params.limit || 10;
    const paginated = filtered.slice(offset, offset + limit);
    return {
      results: paginated,
      count: filtered.length
    };
  },

  createVisitor: async (visitorData) => {
    const newVisitor = {
      ...visitorData,
      id: Math.max(...visitorData.map(v => v.id)) + 1,
      createdOn: new Date().toISOString(),
      updatedOn: new Date().toISOString(),
    };
    visitorData.push(newVisitor);
    return newVisitor;
  },

  updateVisitor: async (id, visitorData) => {
    const index = visitorData.findIndex(v => v.id === id);
    if (index !== -1) {
      visitorData[index] = { ...visitorData[index], ...visitorData, updatedOn: new Date().toISOString() };
      return visitorData[index];
    }
    throw new Error('Visitor not found');
  },

  deleteVisitor: async (id) => {
    const index = visitorData.findIndex(v => v.id === id);
    if (index !== -1) {
      visitorData.splice(index, 1);
      return { success: true };
    }
    throw new Error('Visitor not found');
  },

  // Zones
  getZones: async () => {
    return zonesData;
  },

  createZone: async (zoneData) => {
    const newZone = {
      ...zoneData,
      id: Math.max(...zonesData.map(z => z.id)) + 1,
      created_on: new Date().toISOString(),
      updated_on: new Date().toISOString(),
    };
    zonesData.push(newZone);
    return newZone;
  },

  updateZone: async (id, zoneData) => {
    const index = zonesData.findIndex(z => z.id === id);
    if (index !== -1) {
      zonesData[index] = { ...zonesData[index], ...zoneData, updated_on: new Date().toISOString() };
      return zonesData[index];
    }
    throw new Error('Zone not found');
  },

  deleteZone: async (id) => {
    const index = zonesData.findIndex(z => z.id === id);
    if (index !== -1) {
      zonesData.splice(index, 1);
      return { success: true };
    }
    throw new Error('Zone not found');
  },

  // Keys
  getKeys: async () => {
    return keysData;
  },

  createKey: async (keyData) => {
    const newKey = {
      ...keyData,
      id: Math.max(...keysData.map(k => k.id)) + 1,
    };
    keysData.push(newKey);
    return newKey;
  },

  updateKey: async (id, keyData) => {
    const index = keysData.findIndex(k => k.id === id);
    if (index !== -1) {
      keysData[index] = { ...keysData[index], ...keyData };
      return keysData[index];
    }
    throw new Error('Key not found');
  },

  deleteKey: async (id) => {
    const index = keysData.findIndex(k => k.id === id);
    if (index !== -1) {
      keysData.splice(index, 1);
      return { success: true };
    }
    throw new Error('Key not found');
  },

  // Passes
  getPasses: async () => {
    return passesData;
  },

  createPass: async (passData) => {
    const newPass = {
      ...passData,
      id: Math.max(...passesData.map(p => p.id)) + 1,
      created_on: new Date().toISOString(),
      updated_on: new Date().toISOString(),
    };
    passesData.push(newPass);
    return newPass;
  },

  updatePass: async (id, passData) => {
    const index = passesData.findIndex(p => p.id === id);
    if (index !== -1) {
      passesData[index] = { ...passesData[index], ...passData, updated_on: new Date().toISOString() };
      return passesData[index];
    }
    throw new Error('Pass not found');
  },

  deletePass: async (id) => {
    const index = passesData.findIndex(p => p.id === id);
    if (index !== -1) {
      passesData.splice(index, 1);
      return { success: true };
    }
    throw new Error('Pass not found');
  },

  // Dashboard
  getPassTimeLeft: async () => {
    return dashboardData.passTimeLeft;
  },

  getTodayVisitorVisit: async () => {
    return dashboardData.todayVisitorVisit;
  },

  getWeeklyVisitorVisit: async () => {
    return dashboardData.weeklyVisitorVisit;
  },

  getVisitorInZones: async () => {
    return dashboardData.visitorInZones;
  },

  // Readers
  getReaders: async () => {
    return [
      {
        id: 1,
        adam_name: "ADAM-001",
        zone_name: "Reception",
        moxa_ip: "192.168.1.100",
        reader_type: "RFID",
        com_port: "COM1"
      },
      {
        id: 2,
        adam_name: "ADAM-002",
        zone_name: "Conference Room",
        moxa_ip: "192.168.1.101",
        reader_type: "Biometric",
        com_port: "COM2"
      }
    ];
  },

  // Adams
  getAdams: async () => {
    return [
      {
        id: 1,
        name: "ADAM-001",
        ip: "192.168.1.100",
        port: "502",
        address: "1"
      },
      {
        id: 2,
        name: "ADAM-002",
        ip: "192.168.1.101",
        port: "502",
        address: "2"
      }
    ];
  },

  // User Sessions
  getUserSessions: async (userId, startDate, endDate) => {
    return [
      {
        id: 1,
        user: {
          id: userId,
          username: "john_doe",
          first_name: "John",
          last_name: "Doe",
          user_type: "Employee",
          phone: "1234567890",
          employee_code: "EMP001",
          department: "IT"
        },
        login_time: "2024-01-15T09:00:00Z",
        logout_time: "2024-01-15T17:00:00Z"
      },
      {
        id: 2,
        user: {
          id: userId,
          username: "john_doe",
          first_name: "John",
          last_name: "Doe",
          user_type: "Employee",
          phone: "1234567890",
          employee_code: "EMP001",
          department: "IT"
        },
        login_time: "2024-01-16T09:30:00Z",
        logout_time: "2024-01-16T18:00:00Z"
      }
    ];
  },

  // Visitor Zone Tracking
  getVisitorZoneTracking: async (visitorId, zoneId, startDate, endDate) => {
    return [
      {
        id: 1,
        user: {
          id: 1,
          username: "john_doe",
          first_name: "John",
          last_name: "Doe",
          user_type: "Employee",
          phone: "1234567890",
          address: "123 Main St",
          employee_code: "EMP001",
          department: "IT"
        },
        login_time: "2024-01-15T10:00:00Z",
        logout_time: "2024-01-15T11:00:00Z"
      },
      {
        id: 2,
        user: {
          id: 2,
          username: "jane_smith",
          first_name: "Jane",
          last_name: "Smith",
          user_type: "Employee",
          phone: "0987654321",
          address: "456 Oak Ave",
          employee_code: "EMP002",
          department: "HR"
        },
        login_time: "2024-01-15T14:00:00Z",
        logout_time: "2024-01-15T15:30:00Z"
      }
    ];
  },

  // Key Assigned Report
  getKeyAssignedReport: async (keyId, startDate, endDate) => {
    return [
      {
        id: 1,
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAoACgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAOwD/2Q==",
        key: "RFID-KEY-001",
        visitor_name: "Alice Johnson",
        visitor_type: "Contractor",
        contact: "555-0123",
        visiting_purpose: "Maintenance Work",
        whom_to_visit: "IT Department",
        visiting_department: "IT",
        valid_until: "2024-01-20T17:00:00Z"
      },
      {
        id: 2,
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAoACgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAOwD/2Q==",
        key: "RFID-KEY-001",
        visitor_name: "Bob Wilson",
        visitor_type: "Delivery",
        contact: "555-0456",
        visiting_purpose: "Package Delivery",
        whom_to_visit: "Reception",
        visiting_department: "Admin",
        valid_until: "2024-01-18T12:00:00Z"
      }
    ];
  },

  // Reports
  getReportData: async (endpoint) => {
    // Mock report data based on endpoint
    switch (endpoint) {
      case 'users':
        return userData;
      case 'visitors':
        return visitorData;
      case 'zones':
        return zonesData;
      case 'keys':
        return keysData;
      default:
        return [];
    }
  },
};

export default mockApi;