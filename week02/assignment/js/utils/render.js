// utils/render.js

export const renderMembersTable = (membersData, tableBody) => {
  // 기존의 테이블 내용을 비웁니다.
  tableBody.innerHTML = '';
  let i = 1;
  membersData.forEach((member) => {
    const tr = document.createElement('tr');
    tr.id = 'data';
    // 체크박스 추가
    const checkBoxTd = document.createElement('td');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBoxTd.appendChild(checkBox);
    tr.appendChild(checkBoxTd);

    // 각 멤버의 정보 추가
    const nameTd = document.createElement('td');
    nameTd.textContent = member.name;
    tr.appendChild(nameTd);

    const englishNameTd = document.createElement('td');
    englishNameTd.textContent = member.englishName;
    tr.appendChild(englishNameTd);

    const githubTd = document.createElement('td');
    githubTd.textContent = member.github;
    tr.appendChild(githubTd);

    tr.dataset.githubid = member.github;

    const genderTd = document.createElement('td');
    genderTd.textContent = member.gender;
    tr.appendChild(genderTd);

    const roleTd = document.createElement('td');
    roleTd.textContent = member.role;
    tr.appendChild(roleTd);

    const firstWeekGroupTd = document.createElement('td');
    firstWeekGroupTd.textContent = member.firstWeekGroup;
    tr.appendChild(firstWeekGroupTd);

    const secondWeekGroupTd = document.createElement('td');
    secondWeekGroupTd.textContent = member.secondWeekGroup;
    tr.appendChild(secondWeekGroupTd);

    tableBody.appendChild(tr);
  });
};
