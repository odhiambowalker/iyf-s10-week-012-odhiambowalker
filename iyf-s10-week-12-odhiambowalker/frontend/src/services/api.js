const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return token ? { Authorization: `Bearer ${token}` } : {};
};

const request = async (endpoint, options = {}) => {
    const url = `${API_URL}${endpoint}`;
    
    const config = {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeaders(),
            ...options.headers
        }
    };
    
    const response = await fetch(url, config);
    
    if (response.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
        throw new Error('Session expired');
    }
    
    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data.message || 'Request failed');
    }
    
    return data;
};

export const authAPI = {
    register: (userData) => request('/auth/register', {
        method: 'POST',
        body: JSON.stringify(userData)
    }),
    login: (credentials) => request('/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials)
    }),
    getMe: () => request('/auth/me')
};

export const postsAPI = {
    getAll: () => request('/posts'),
    getById: (id) => request(`/posts/${id}`),
    create: (postData) => request('/posts', {
        method: 'POST',
        body: JSON.stringify(postData)
    })
};

export const commentsAPI = {
    getByPost: (postId) => request(`/posts/${postId}/comments`),
    create: (postId, commentData) => request(`/posts/${postId}/comments`, {
        method: 'POST',
        body: JSON.stringify(commentData)
    })
};