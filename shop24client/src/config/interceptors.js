export function interceptorRequest(request) {
    const isLoggedIn = localStorage.getItem("token");

    if (isLoggedIn) {
        request.headers.common.Authorization = `Bearer ${isLoggedIn}`;
    }

    return request;

}