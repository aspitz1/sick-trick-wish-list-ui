const getTricks = () => {
    return fetch('http://localhost:3001/api/v1/tricks');
}

const postTrick = (body) => {
    return fetch('http://localhost:3001/api/v1/tricks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
}

const deleteTrick = (id) => {
    return fetch('http://localhost:3001/api/v1/tricks/' + id, {
        method: 'DELETE'
    });
}

export { getTricks, postTrick, deleteTrick };