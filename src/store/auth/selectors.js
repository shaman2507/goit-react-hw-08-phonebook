export const selectAuth = state => state.auth.token;
export const selectUser = state => state.auth.user.email;
export const selectLoading = state => state.auth.isLoading;
export const selectLogedIn = state => state.auth.isLoggedIn;

const authSelectors = {
    selectLogedIn,
    selectAuth,
    selectUser,
    selectLoading,
}

export default authSelectors;