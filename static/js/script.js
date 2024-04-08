function capitalizeFirstLetterOfEachWord(string) {
  // Dividir a string em palavras usando espaço como delimitador
  const words = string.split(" ");

  // Capitalizar a primeira letra de cada palavra
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Juntar as palavras novamente em uma string
  const capitalizedString = capitalizedWords.join(" ");

  return capitalizedString;
}

const baseUrl = window.location.href +"/api/get_exercise_data";

const fetchExerciseData = () => {
  try {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data = data[0];
        document.getElementById("exercise-image").src =
          data.gifUrl;
        // Set other exercise information
        document.getElementById("exercise-name").innerText =
          capitalizeFirstLetterOfEachWord(data.name);
        document.getElementById("exercise-body-part").innerText =
          capitalizeFirstLetterOfEachWord(data.bodyPart);
        document.getElementById("exercise-equipment").innerText =
          capitalizeFirstLetterOfEachWord(data.equipment);
        document.getElementById("exercise-target").innerText =
          capitalizeFirstLetterOfEachWord(data.target);
        const badgeSection = document.getElementById("badge-list");
        data.secondaryMuscles.forEach((muscle) => {
          const badge = document.createElement("span");
          badge.classList.add(
            "badge",
            "bg-danger-subtle",
            "text-danger-emphasis"
          );
          badge.innerText = capitalizeFirstLetterOfEachWord(muscle);
          badgeSection.appendChild(badge);
        });
        const instructionsList = document.getElementById(
          "exercise-instructions"
        );
        data.instructions.forEach((instruction) => {
          const instructionListItem = document.createElement("li");
          instructionListItem.innerText = instruction;
          instructionsList.appendChild(instructionListItem);
          console.log(instruction);
        });
        
      });
  } catch (error) {
    console.error(error);
  }
};

fetchExerciseData();
