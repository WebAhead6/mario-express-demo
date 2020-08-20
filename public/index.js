const likeButton = document.getElementById('likePost')
const likeErrorMessage = document.getElementById('likeError')

likeButton.addEventListener('click', () => {

    const postId = likeButton.value

    fetch('/like', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ postId: postId })
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                // refresh the page on success like
                location.reload()
                likeErrorMessage.textContent = ''
            } else {
                likeErrorMessage.textContent = 'Error: Could not like'
            }
        })
})