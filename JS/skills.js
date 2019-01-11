var skill = ['HTML','CSS','JavaScript','ASP.NET','C#','Java'];
var input = document.getElementById('input');
var button = document.getElementById('button');

document.getElementById('skillList').innerHTML = skill.join('<br>') + '<br>';
button.onclick = function showList() {
	skill.unshift(input.value);
    skill.pop();
    document.getElementById('skillList').innerHTML = skill.join('<br>') + '<br>';
}
