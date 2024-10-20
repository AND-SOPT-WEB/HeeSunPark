export const deleteRow = (
  deleteBtn,
  checkBoxes,
  membersData,
  renderMembersTable,
  membersTableBody
) => {
  deleteBtn.addEventListener('click', () => {
    const remainData = membersData.filter((member, index) => {
      const checkbox = checkBoxes[index];
      return !checkbox.checked; // 체크된 멤버는 제외
    });

    // 로컬 스토리지에 업데이트된 데이터 저장
    membersData = remainData;
    localStorage.setItem('membersData', JSON.stringify(membersData));

    renderMembersTable(membersData, membersTableBody);
  });
};
