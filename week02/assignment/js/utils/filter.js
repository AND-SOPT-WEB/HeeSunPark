export const applyFilters = (initialData, filters) => {
  const {
    name,
    englishName,
    github,
    gender,
    role,
    firstWeekGroup,
    secondWeekGroup,
  } = filters;

  let filteredData = [...initialData]; // 초기 데이터로부터 필터링 시작

  if (name) {
    filteredData = filteredData.filter((member) => member.name.includes(name));
  }

  if (englishName) {
    filteredData = filteredData.filter((member) =>
      member.englishName.includes(englishName)
    );
  }

  if (github) {
    filteredData = filteredData.filter((member) =>
      member.github.includes(github)
    );
  }

  if (gender) {
    filteredData = filteredData.filter((member) => member.gender === gender);
  }

  if (role) {
    filteredData = filteredData.filter((member) => member.role === role);
  }

  if (firstWeekGroup) {
    filteredData = filteredData.filter(
      (member) => member.firstWeekGroup === Number(firstWeekGroup)
    );
  }

  if (secondWeekGroup) {
    filteredData = filteredData.filter(
      (member) => member.secondWeekGroup === Number(secondWeekGroup)
    );
  }

  initialData = filteredData;
  return filteredData, initialData; // 필터링된 데이터 반환
};

// 체크박스 선택, 해제 관련 함수
export const handleCheckBoxes = (allCheck, checkBoxes) => {
  const totalCheckBox = checkBoxes.length;

  // 전체 체크박스 클릭 이벤트 리스너
  allCheck.addEventListener('click', () => {
    const isAllChecked = allCheck.checked;
    checkBoxes.forEach((checkbox) => {
      checkbox.checked = isAllChecked;
    });
  });

  // 개별 체크박스 클릭 이벤트 리스너
  checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
      const checkedCount = Array.from(checkBoxes).filter(
        (c) => c.checked
      ).length;
      allCheck.checked = checkedCount === totalCheckBox;
    });
  });
};
