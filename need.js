document.getElementById('toggleOptions').addEventListener('click', function() {
    const foodSection = document.getElementById('food');
    const medicalEmergencySection = document.getElementById('medicalEmergency');

    const isHidden = foodSection.style.display === 'none';

    foodSection.style.display = isHidden ? 'block' : 'none';
    medicalEmergencySection.style.display = isHidden ? 'block' : 'none';
});
