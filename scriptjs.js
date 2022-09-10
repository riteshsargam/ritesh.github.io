let userForm = document.getElementById("user-form");
const email1 = document.getElementById('email');
email1.addEventListener('input',()=>validate(email1));
function validate(element){
    if(element.validity.typeMismatch){
        element.setCustomValidity("this email not in perfect format...");
        element.reportValidity();
}
    else{
        element.setCustomValidity("");
}
}
const reciveEntries = ()=>{
    let entries1 = localStorage.getItem('entries');
    if (entries1){
        entries1 = JSON.parse(entries1);
    }
    else{
        entries1=[];
    }
    return entries1;
}
let local_entries = reciveEntries();
const diplay = () =>{
    const entries1 = reciveEntries();
    const tablerows= entries1.map((x)=>{
        const namecell = `<td>${x.name}</td>`;
        const emailcell = `<td>${x.email}</td>`;
        const passcell = `<td>${x.password}</td>`;
        const dobcell = `<td>${x.dob}</td>`;
        const termscell = `<td>${x.acceptedterms}</td>`;
        const row = `<tr>${namecell} ${emailcell} ${passcell} ${dobcell} ${termscell}`
        return row;
    }).join('\n')
    const table = `<table style="border:solid 4px">
    <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Password</th>
    <th>Dob</th>
    <th>Accepted terms?</th></tr>${tablerows}</table>`;
    let details = document.getElementById('entrytbale');
    details.innerHTML = table;
}
const saveUserform = (event)=>{
    event.preventDefault();
    const name = document.getElementById('name').value;    
    const email = document.getElementById('email').value;    
    const password = document.getElementById('password').value;    
    const acceptedterms = document.getElementById('acceptTerms').checked;
    const dob = document.getElementById('dob').value;
    const entry = {
        name,
        email,
        password,
        acceptedterms,
        dob
    }
    local_entries.push(entry);
    localStorage.setItem("entries", JSON.stringify(local_entries));
    diplay();

}


userForm.addEventListener("submit",saveUserform);
diplay();
Footer
© 2022 GitHub, Inc.