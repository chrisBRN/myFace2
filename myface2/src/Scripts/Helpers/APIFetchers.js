
export async function fetchUserSingleInfo(param) {
    const response = await fetch('http://localhost:8080/api/users/' + param);
    return await response.json();
}

export async function fetchPosts(sendOrRec, userId) {   
    const response = await fetch('http://localhost:8080/api/posts?' + sendOrRec + '=' + userId);        
    return await response.json();;
}

export async function fetchSinglePageOfPosts(pageNumber) {
    const response = await fetch('http://localhost:8080/api/posts?page=' + pageNumber);
    return await response.json();
}