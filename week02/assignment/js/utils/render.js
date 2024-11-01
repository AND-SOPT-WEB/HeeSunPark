// utils/render.js

// 체크박스 셀을 생성하는 함수
const createCheckbox = () => {
  const checkBoxTd = document.createElement('td');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBoxTd.appendChild(checkBox);
  return checkBoxTd;
};

// 기본 셀을 생성하는 함수
const createCell = (content) => {
  const td = document.createElement('td');
  td.textContent = content;
  return td;
};

// GitHub 링크 셀을 생성하는 함수
const createGithubCell = (githubUsername) => {
  const githubTd = document.createElement('td');
  const githubHref = document.createElement('a');
  githubHref.textContent = githubUsername;
  githubHref.href = `https://github.com/${githubUsername}`;
  githubHref.target = '_blank';
  githubTd.appendChild(githubHref);
  return githubTd;
};

// 테이블 행을 생성하는 함수
const createTableRow = (member) => {
  const tr = document.createElement('tr');
  tr.dataset.id = member.id; // 고유 id를 행에 저장

  // 행에 셀들을 추가
  tr.appendChild(createCheckbox());
  tr.appendChild(createCell(member.name));
  tr.appendChild(createCell(member.englishName));
  tr.appendChild(createGithubCell(member.github));
  tr.appendChild(createCell(member.gender));
  tr.appendChild(createCell(member.role));
  tr.appendChild(createCell(member.firstWeekGroup));
  tr.appendChild(createCell(member.secondWeekGroup));

  return tr;
};

// 테이블을 렌더링하는 함수
export const renderMembersTable = (membersData, tableBody) => {
  // 기존의 테이블 내용을 비웁니다.
  tableBody.replaceChildren();

  membersData.forEach((member) => {
    const tr = createTableRow(member);
    tableBody.appendChild(tr);
  });
};
