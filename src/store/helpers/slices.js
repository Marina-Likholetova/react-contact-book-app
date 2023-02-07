export const setError = (state, action) => {
    state.error = action.payload;
    state.loading = false;
}

export const setLoading = (state) => {
    state.loading = true;
    state.error = null;
}