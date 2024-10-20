import { members } from './utils/data.js';
import { renderMembersTable } from './utils/render.js';
import { createModal, displayModal } from './utils/modal.js';
import { applyFilters, handleCheckBoxes } from './utils/filter.js';
import { deleteRow } from './utils/delete.js';

// localStorage에서 값 가져오기
let membersData = JSON.parse(localStorage.getItem('membersData')) || [];

// 값이 없으면 초기 데이터를 사용
if (membersData.length === 0) {
  membersData = members;
  localStorage.setItem('membersData', JSON.stringify(membersData)); // 초기 데이터를 localStorage에 저장
}

// 초기 데이터 저장 (활용할 데이터)
let initialData = [...membersData];

// member table
const membersTableBody = document.querySelector('.members-table__body');
renderMembersTable(membersData, membersTableBody);

// 필터 초기화 기능
const resetBtn = document.querySelector('.filter-form__action--reset');
resetBtn.addEventListener('click', () => {
  membersData = members;
  localStorage.setItem('membersData', JSON.stringify(membersData));
  renderMembersTable(membersData, membersTableBody);
});

// 필터 검색 기능
const submitBtn = document.querySelector('.filter-form__action--submit');
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const filters = {
    name: document.getElementById('name').value.trim(),
    englishName: document.getElementById('englishName').value.trim(),
    github: document.getElementById('github').value.trim(),
    gender: document.querySelector('select[name=gender]').value,
    role: document
      .querySelector('select[name=role]')
      .value.trim()
      .toUpperCase(),
    firstWeekGroup: document.getElementById('firstWeekGroup').value,
    secondWeekGroup: document.getElementById('secondWeekGroup').value,
  };

  // applyFilters 함수를 호출, 필터링된 데이터 얻기
  const filteredData = applyFilters(initialData, filters);

  if (filteredData.length === 0) {
    alert('해당 조건에 맞는 멤버가 없습니다.');
  }

  renderMembersTable(filteredData, membersTableBody);
});

// 체크박스 및 삭제 기능
const deleteBtn = document.querySelector('.members__actions--delete');
const allCheck = document.querySelector('#select-all');
const checkBoxes = membersTableBody.querySelectorAll('input[type=checkbox]');

handleCheckBoxes(allCheck, checkBoxes); // 체크박스 함수 호출
deleteRow(
  deleteBtn,
  checkBoxes,
  membersData,
  renderMembersTable,
  membersTableBody
);

// 멤버 추가 함수 정의
const addMember = (newMember) => {
  membersData.push(newMember); // 새 멤버 추가
  localStorage.setItem('membersData', JSON.stringify(membersData)); // 로컬 스토리지 업데이트
  renderMembersTable(membersData, membersTableBody); // 테이블 다시 렌더링
};

// 모달 생성
const modal = createModal(addMember);

// '추가' 버튼 클릭 시 모달 열기
const addBtn = document.querySelector('.members__actions--add');
addBtn.addEventListener('click', () => {
  displayModal(modal);
});

const tableRows = membersTableBody.querySelectorAll('tr');
tableRows.forEach((row) => {
  row.addEventListener('click', () => {
    const githubId = row.dataset.githubid; // data-github 속성에서 GitHub ID 가져오기

    if (githubId) {
      // GitHub 주소로 이동
      window.open(`https://github.com/${githubId}`, '_blank'); // 새 탭에서 열기
    } else {
      alert('GitHub ID가 없습니다.');
    }
    console.log(row);
  });
});
