import { members } from './data.js';

// localStorage에서 값 가져오기
let membersData = JSON.parse(localStorage.getItem('membersData')) || [];

// 값이 없으면 초기 데이터를 사용
if (membersData.length === 0) {
  membersData = members;
  localStorage.setItem('membersData', JSON.stringify(membersData)); // 초기 데이터를 localStorage에 저장
}

const membersTableBody = document.querySelector('.members-table__body');

membersData.forEach((membersData) => {
  const tr = document.createElement('tr');

  // checkBox 추가
  const checkBoxTd = document.createElement('td');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBoxTd.appendChild(checkBox);
  tr.appendChild(checkBoxTd);

  // 각 멤버의 정보 추가
  const name = document.createElement('td');
  name.textContent = membersData.name;
  tr.appendChild(name);

  const englishName = document.createElement('td');
  englishName.textContent = membersData.englishName;
  tr.appendChild(englishName);

  const github = document.createElement('td');
  github.textContent = membersData.github;
  tr.appendChild(github);

  const gender = document.createElement('td');
  gender.textContent = membersData.gender;
  tr.appendChild(gender);

  const role = document.createElement('td');
  role.textContent = membersData.role;
  tr.appendChild(role);

  const firstWeekGroup = document.createElement('td');
  firstWeekGroup.textContent = membersData.firstWeekGroup;
  tr.appendChild(firstWeekGroup);

  const secondWeekGroup = document.createElement('td');
  secondWeekGroup.textContent = membersData.secondWeekGroup;
  tr.appendChild(secondWeekGroup);

  membersTableBody.appendChild(tr);
});
