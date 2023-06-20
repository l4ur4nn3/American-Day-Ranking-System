# Ranking System

This is a simple ranking system web application that allows users to enter their name and score, which are then displayed in a ranking list. The project is built using HTML, CSS, and JavaScript, and it utilizes the browser's localStorage to store the ranking data, ensuring persistence across page reloads.

## Features

- **Add Ranking**: Users can enter their name and score in the provided input fields and click the "Add Ranking" button to add their entry to the ranking list.
- **Validation**: The input fields are validated to ensure that both the name and score are filled in. An alert message is displayed if any of the fields are empty.
- **Ranking Display**: The ranking list is dynamically updated and displayed on the page, showing the name and score of each entry. The list is sorted in descending order based on the scores.
- **Delete Ranking**: Each ranking entry is accompanied by a "Supprimer" (Delete) button, allowing users to remove their entry from the ranking list. Deletion updates both the ranking list and the localStorage.
- **Top 3 Rankings**: A clone of the ranking list, displaying only the top 3 entries, is also shown on the page.
- **Data Persistence**: The ranking data is stored in the browser's localStorage, enabling the data to persist even if the page is reloaded or closed.
- **Clear All Data**: There is a "Supprimer tout" (Delete All) button available that clears all the ranking data from the localStorage and resets the ranking list.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/ranking-system.git`
2. Navigate to the project directory: `cd ranking-system`
3. Open the `index.html` file in your preferred web browser.

## Contributions

Contributions are welcome! If you have any suggestions or improvements for this project, feel free to submit a pull request. Please ensure that your changes align with the project's coding style and guidelines.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and use the code according to your needs.

## Acknowledgements

- The project utilizes [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) for data persistence.
- The ranking list is dynamically generated using JavaScript DOM manipulation.
- The project makes use of HTML, CSS, and JavaScript.

Feel free to customize the README according to your specific project details and add any additional sections or information as needed.
