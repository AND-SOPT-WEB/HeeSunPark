export const deleteRow = (
  deleteBtn,
  checkBoxes,
  membersData,
  renderMembersTable,
  membersTableBody,
  allCheck
) => {
  deleteBtn.addEventListener('click', () => {
    const remainData = membersData.filter((member, index) => {
      const checkbox = checkBoxes[index];
      return !checkbox.checked; // 체크된 멤버는 제외
    });

    // 로컬 스토리지에 업데이트된 데이터 저장
    membersData = remainData;
    localStorage.setItem('membersData', JSON.stringify(membersData));

    // 남은 데이터가 없으면 전체 체크박스 해제
    if (membersData.length === 0) {
      allCheck.checked = false;
    }

    renderMembersTable(membersData, membersTableBody);
  });
};
