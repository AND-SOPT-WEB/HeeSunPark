import { members } from './utils/data.js';
import { renderMembersTable } from './utils/render.js';

// localStorage에서 값 가져오기
let membersData = JSON.parse(localStorage.getItem('membersData')) || [];

// 값이 없으면 초기 데이터를 사용
if (membersData.length === 0) {
  membersData = members;
  localStorage.setItem('membersData', JSON.stringify(membersData)); // 초기 데이터를 localStorage에 저장
}

const membersTableBody = document.querySelector('.members-table__body');
renderMembersTable(membersData, membersTableBody);
// 필터 기능 구현
const submitBtn = document.querySelector('.filter-form__action--submit');
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let filteredData = [...membersData];
  const name = document.getElementById('name').value.trim();
  const englishName = document.getElementById('englishName').value.trim();
  const github = document.getElementById('github').value.trim();
  const gender = document.querySelector('select[name=gender]').value;
  const role = document
    .querySelector('select[name=role]')
    .value.trim()
    .toUpperCase();
  console.log(role);

  const firstWeekGroup = document.getElementById('firstWeekGroup').value;
  const secondWeekGroup = document.getElementById('secondWeekGroup').value;

  if (name) {
    filteredData = filteredData.filter((membersData) =>
      membersData.name.includes(name)
    );
  }

  if (englishName) {
    filteredData = filteredData.filter((membersData) =>
      membersData.englishName.includes(englishName)
    );
  }

  if (github) {
    filteredData = filteredData.filter((membersData) =>
      membersData.github.includes(github)
    );
  }

  if (gender) {
    filteredData = filteredData.filter(
      (membersData) => membersData.gender === gender
    );
  }

  if (role) {
    filteredData = filteredData.filter(
      (membersData) => membersData.role === role
    );
  }

  if (firstWeekGroup) {
    filteredData = filteredData.filter(
      (membersData) => membersData.firstWeekGroup === Number(firstWeekGroup)
    );
  }

  if (secondWeekGroup) {
    filteredData = filteredData.filter(
      (membersData) => membersData.secondWeekGroup === secondWeekGroup
    );
  }

  console.log(firstWeekGroup);

  renderMembersTable(filteredData, membersTableBody);
});
