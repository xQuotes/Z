let baseUrl = '';

if (location.hostname === 'localhost') {
    baseUrl = 'http://test.lqdzj.cn';
}

export default {
    login: `${baseUrl}/auth/api-auth/`,
    authTokenRefresh: `${baseUrl}/auth/auth-token-refresh/`
};