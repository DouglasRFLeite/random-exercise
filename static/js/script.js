function capitalizeFirstLetterOfEachWord(string) {
    // Dividir a string em palavras usando espaço como delimitador
    const words = string.split(" ");

    // Capitalizar a primeira letra de cada palavra
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // Juntar as palavras novamente em uma string
    const capitalizedString = capitalizedWords.join(" ");

    return capitalizedString;
}

const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio?limit=10';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

try {
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // Choose image
            const randomExercise = Math.floor(Math.random() * 10)
            // Set exercise image
            document.getElementById('exercise-image').src = data[randomExercise].gifUrl;
            // Set other exercise information
            document.getElementById('exercise-name').innerText = capitalizeFirstLetterOfEachWord(data[randomExercise].name);
            document.getElementById('exercise-body-part').innerText = capitalizeFirstLetterOfEachWord(data[randomExercise].bodyPart);
            document.getElementById('exercise-equipment').innerText = capitalizeFirstLetterOfEachWord(data[randomExercise].equipment);
            document.getElementById('exercise-target').innerText = capitalizeFirstLetterOfEachWord(data[randomExercise].target);
            const badgeSection = document.getElementById('badge-list');
            data[randomExercise].secondaryMuscles.forEach(muscle => {
                const badge = document.createElement('span');
                badge.classList.add('badge', 'bg-danger-subtle', 'text-danger-emphasis')
                badge.innerText = capitalizeFirstLetterOfEachWord(muscle);;
                badgeSection.appendChild(badge);
            });
            const instructionsList = document.getElementById('exercise-instructions');
            data[randomExercise].instructions.forEach(instruction => {
                const instructionListItem = document.createElement('li');
                instructionListItem.innerText = instruction;
                instructionsList.appendChild(instructionListItem);
            });
        })
} catch (error) {
    console.error(error);
}