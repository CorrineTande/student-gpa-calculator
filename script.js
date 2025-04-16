document.addEventListener('DOMContentLoaded', () => {
    const gpaForm = document.getElementById('gpaForm');
    const resultDiv = document.getElementById('result');
    const addCourseButton = document.getElementById('addCourse');

    addCourseButton.addEventListener('click', () => {
        const newRow = document.createElement('div');
        newRow.classList.add('course-row');
        newRow.innerHTML = `
            <input type="text" class="course-name" placeholder="Course Name" required>
            <select class="grade" required>
                <option value="">Select Grade</option>
                <option value="4">A</option>
                <option value="3">B</option>
                <option value="2">C</option>
                <option value="1">D</option>
                <option value="0">F</option>
            </select>
        `;
        gpaForm.insertBefore(newRow, addCourseButton);
    });

    gpaForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const grades = Array.from(document.querySelectorAll('.grade'));
        const totalPoints = grades.reduce((sum, select) => sum + parseFloat(select.value), 0);
        const validGrades = grades.filter(select => select.value !== "").length;

        if (validGrades > 0) {
            const gpa = (totalPoints / validGrades).toFixed(2);
            resultDiv.textContent = `Your GPA is: ${gpa}`;
        } else {
            resultDiv.textContent = 'Please enter valid grades.';
        }
    });
});
