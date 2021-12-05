function handleSubmit(event) {
    event.preventDefault()


    let formText = document.getElementById('url').value

    if(Client.urlValidate(formText)) {
    console.log(" Form Received Data.... ")

    postData('http://localhost:8081/api', {url: formText})

    .then(function(res) {
        document.getElementById('polarity').innerHTML = 'Polarity: '+checPolarity(res.score_tag);
        document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
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

// API response output (https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/response)

const checPolarity = (score) => {
    let display;
    switch (score){
        case 'P+':
            display = 'strong positive';
            break;
        case 'P':
            display = 'positive';
            break;
        case 'NEW':
            display = 'neutral';
            break;
        case 'N':
            display = 'negative';
            break;
        case 'N+':
            display = 'strong negative';
            break;
        case 'NONE':
            display = 'no sentiment';
    }
    return display.toLowerCase();
}

export { handleSubmit }
export { checPolarity }