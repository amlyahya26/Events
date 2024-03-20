

document.addEventListener("DOMContentLoaded", function () {
    // Handle form submission
    document.getElementById("employeeForm").addEventListener("submit", function (e) {
        e.preventDefault(); 

        // Collect form values
        const employeeId = document.getElementById("id").value;
        const employeeName = document.getElementById("name").value;
        const extension = document.getElementById("ext").value;
        const email = document.getElementById("email").value;
        const department = document.getElementById("department").value;

        // Display values in console
        console.log("Employee ID:", employeeId);
        console.log("Employee Name:", employeeName);
        console.log("Extension:", extension);
        console.log("Email:", email);
        console.log("Department:", department);
    });
});
