export function interceptorRequest(request) {
    const isLoggedIn = JSON.parse(localStorage.getItem("user"));
    if (isLoggedIn) {
        request.headers.common.token = `Bearer ${isLoggedIn.token}`;
    }

    return request;

}