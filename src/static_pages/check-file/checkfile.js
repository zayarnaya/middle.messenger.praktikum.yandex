export function checkFile() {
let html=`
<form id="avatarform" name="avatarform" method="post" enctype="multipart/form-data">
    <input type="file" id="avatar" name="avatar" />
    <button type="submit" id="submitavatar">Отправить</button>
</form>
`;

document.querySelector(".messenger-wrapper").innerHTML = html;

document.querySelector("#avatarform").addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(this);
    let xhr = new XMLHttpRequest;
    let form = document.querySelector("#avatarform");
    //let data = new FormData(e.target);
    let input = document.querySelector("#avatar");
    let file = input.files[0];
    let forma = new FormData();
    forma.append('avatar', file);
    console.log(file, "FILE");
    console.log(forma.get("avatar"));
    xhr.open("PUT", "https://ya-praktikum.tech/api/v2/user/profile/avatar");
    xhr.setRequestHeader("Content-Type", "multipart/form-data");
    xhr.withCredentials = true;
    xhr.send(forma);
    xhr.upload.onload = function() {
        alert(`Данные успешно отправлены.`);
      };
    xhr.onload = function () {
            console.log(xhr.response);
          };
});
}
