document.addEventListener("DOMContentLoaded", () => {
    let hunger = 50;
    let happiness = 50;
    let energy = 50;

    const hungerBar = document.getElementById("hunger");
    const happinessBar = document.getElementById("happiness");
    const energyBar = document.getElementById("energy");

    function updateBars() {
        hungerBar.value = hunger;
        happinessBar.value = happiness;
        energyBar.value = energy;
        updatePetState();
    }

    function updatePetState() {
        document.querySelectorAll(".pet").forEach(pet => pet.classList.remove("active"));

        if (hunger >= 80) {
            document.getElementById("pet-hungry").classList.add("active");
        } else if (happiness <= 20) {
            document.getElementById("pet-sad").classList.add("active");
        } else if (energy <= 20) {
            document.getElementById("pet-sleepy").classList.add("active");
        } else if (hunger <= 30 && happiness >= 70) {
            document.getElementById("pet-happy").classList.add("active");
        } else {
            document.getElementById("pet-idle").classList.add("active");
        }
    }

    document.getElementById("feed").addEventListener("click", () => {
        hunger = Math.max(0, hunger - 20);
        happiness = Math.min(100, happiness + 5);
        updateBars();
    });

    document.getElementById("play").addEventListener("click", () => {
        happiness = Math.min(100, happiness + 15);
        energy = Math.max(0, energy - 10);
        updateBars();
    });

    document.getElementById("sleep").addEventListener("click", () => {
        energy = Math.min(100, energy + 20);
        hunger = Math.min(100, hunger + 10);
        updateBars();
    });

    setInterval(() => {
        hunger = Math.min(100, hunger + 5);
        happiness = Math.max(0, happiness - 5);
        energy = Math.max(0, energy - 5);
        updateBars();
    }, 5000);
});
