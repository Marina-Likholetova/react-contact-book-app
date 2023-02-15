export const setError = (state, action) => {
    state.error = action.payload;
    state.loading = false;
}

export const setLoading = (state) => {
    state.error = null;
    state.actionText = null;
    state.loading = true;
}

export const setState = (state, action) => {
    state.value = action.payload;
    state.loading = false;
}