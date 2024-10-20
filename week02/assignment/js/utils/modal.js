export const createModal = (
  membersData,
  renderMembersTable,
  membersTableBody
) => {
  const modalHTML = `
    <div class="modal__container">
      <header class="modal__header">
          <h1>새 멤버 추가</h1>
          <i class="fa-solid fa-xmark" id="modal__header--close"></i>
        </header>
        <div class="modal__row">
          <label for="name" class="modal__label">이름</label>
          <input type="text" id="name" class="modal__input" />
        </div>
        <div class="modal__row">
          <label for="englishName" class="modal__label">영문 이름</label>
          <input type="text" id="englishName" class="modal__input" />
        </div>
        <div class="modal__row">
          <label for="github" class="modal__label">GitHub ID</label>
          <input type="text" id="github" class="modal__input" />
        </div>
        <div class="modal__row">
          <label for="gender" class="modal__label">성별</label>
          <select name="gender" class="modal__select">
            <option value="">성별 선택</option>
            <option value="male">남자</option>
            <option value="female">여자</option>
          </select>
        </div>
        <div class="modal__row">
          <label for="role" class="modal__label">역할</label>
          <select name="role" class="modal__select">
            <option value="">OB / YB</option>
            <option value="ob">OB</option>
            <option value="yb">YB</option>
          </select>
        </div>
        <div class="modal__row">
          <label for="firstWeekGroup" class="modal__label"
            >1주차 금잔디조</label
          >
          <input type="number" id="firstWeekGroup" class="modal__input" />
        </div>
        <div class="modal__row">
          <label for="secondWeekGroup" class="modal__label"
            >2주차 금잔디조</label
          >
          <input type="number" id="secondWeekGroup" class="modal__input" />
        </div>
        <button class="modal__addButton">추가</button>
     </div>
  `;

  const modal = document.querySelector('.modal');
  modal.innerHTML = modalHTML;

  const closeModal = document.querySelector('#modal__header--close');
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  const outModal = document.querySelector('.modal');

  // 모달 외부를 클릭할 때 모달 닫기
  outModal.addEventListener('click', (event) => {
    if (event.target === outModal) {
      outModal.style.display = 'none';
    }
  });

  let newMemberId = membersData.length;
  const addButton = document.querySelector('.modal__addButton');
  addButton.addEventListener('click', () => {
    const name = modal.querySelector('#name').value.trim();
    const englishName = modal.querySelector('#englishName').value.trim();
    const github = modal.querySelector('#github').value.trim();
    const gender = modal.querySelector('select[name=gender]').value;
    const role = modal.querySelector('select[name=role]').value.trim();
    const firstWeekGroup = modal.querySelector('#firstWeekGroup').value;
    const secondWeekGroup = modal.querySelector('#secondWeekGroup').value;

    // 유효성 검사
    if (
      !name ||
      !englishName ||
      !github ||
      !gender ||
      !role ||
      !firstWeekGroup ||
      !secondWeekGroup
    ) {
      alert('모든 값을 채워주세요.');
      return;
    }

    const newMember = {
      id: newMemberId + 1,
      name,
      englishName,
      github,
      gender,
      role,
      firstWeekGroup: Number(firstWeekGroup),
      secondWeekGroup: Number(secondWeekGroup),
    };

    // 멤버 추가
    membersData.push(newMember); // 새 멤버 추가
    localStorage.setItem('membersData', JSON.stringify(membersData)); // 로컬 스토리지 업데이트
    renderMembersTable(membersData, membersTableBody); // 테이블 다시 렌더링

    modal.style.display = 'none';
  });
  return modal;
};

export const displayModal = (modal) => {
  modal.style.display = 'flex';
};
