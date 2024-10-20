export const deleteRowAndReset = (
  deleteBtn,
  resetBtn,
  membersData,
  renderMembersTable,
  membersTableBody,
  allCheck,
  members
) => {
  // 삭제 버튼 기능
  deleteBtn.addEventListener('click', () => {
    let checkBoxes = membersTableBody.querySelectorAll('input[type=checkbox]'); // 체크박스 재조회

    // 체크된 행의 id를 가져옴
    const checkedMemberIds = Array.from(checkBoxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.closest('tr').dataset.id); // 체크된 행의 id 수집

    // 전체 데이터에서 해당 id를 제외한 나머지 멤버만 남김
    const remainData = membersData.filter(
      (member) => !checkedMemberIds.includes(member.id.toString()) // id로 필터링
    );

    // 로컬 스토리지에 업데이트된 데이터 저장
    localStorage.setItem('membersData', JSON.stringify(remainData));

    // 남은 데이터가 없으면 전체 체크박스 해제
    if (remainData.length === 0) {
      allCheck.checked = false;
    }

    renderMembersTable(remainData, membersTableBody);

    // 업데이트
    membersData = remainData;
  });

  // 초기화 기능
  resetBtn.addEventListener('click', () => {
    membersData = [...members]; // 초기 데이터로 복원
    localStorage.setItem('membersData', JSON.stringify(membersData));
    renderMembersTable(membersData, membersTableBody);
  });
};
