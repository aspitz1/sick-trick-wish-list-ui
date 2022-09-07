const getTricks = () => {
    return fetch('http://localhost:3001/api/v1/tricks');
}

const postTrick = (body) => {
    fetch('http://localhost:3001/api/v1/tricks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
}

export { getTricks, postTrick };