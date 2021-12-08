function handleSubmit(event) {
    event.preventDefault()


    let formText = document.getElementById('url').value

    if(Client.urlValidate(formText)) {
    console.log(" Form Received Data.... ")

    postData('http://localhost:8081/api', {url: formText})

    .then(function(res) {
        
        document.getElementById("model").innerHTML = `Model is: ${res. model}`;
        document.getElementById("score_tag").innerHTML = `Score_tag is: ${res.score_tag}`;
        document.getElementById("agreement").innerHTML = `Agreement is: ${res.agreement}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity is: ${res.subjectivity}`;
        document.getElementById("confidence").innerHTML = `Confidence is: ${res.confidence}`;
        document.getElementById("irony").innerHTML = `Irony is: ${res.irony}`;
    })
    } else {
        alert(' Invalid URL, please try again!!!.');
    }
}

const postData = async (url = "", data = {}) => {
    console.log('Analyzing the Article --->:', data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log('Data received:', newData)
        return newData;
    } catch (error) {
        console.log('error!!!!!', error);
    }
};


export { handleSubmit }
