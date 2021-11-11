export function interceptorRequest(request) {
    const isLoggedIn = localStorage.getItem("user");

    if (isLoggedIn) {
        request.headers.common.Authorization = `Bearer ${isLoggedIn.token}`;
    }

    return request;

}