document.getElementById("start-ar").addEventListener("click", function() {
    // Show AR scene when the button is clicked
    document.getElementById("ar-view").style.display = "block";
    alert("Allow camera access to start AR");
});

// Change Furniture dynamically
function changeFurniture() {
    let selectedFurniture = document.getElementById("furniture").value;
    let room = document.getElementById("room");

    if (selectedFurniture === "sofa") {
        room.setAttribute("gltf-model", "./models/sofa.glb");
    } else if (selectedFurniture === "table") {
        room.setAttribute("gltf-model", "./models/table.glb");
    } else if (selectedFurniture === "chair") {
        room.setAttribute("gltf-model", "./models/chair.glb");
    }
}
