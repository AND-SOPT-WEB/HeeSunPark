// 모달창 js

export const createModal = () => {
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
        <button class="modal__btn">추가</button>
     </div>
  `;

  const modal = document.querySelector('.modal');
  modal.innerHTML = modalHTML;

  const closeModal = document.querySelector('#modal__header--close');
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  return modal;
};

export const displayModal = (modal) => {
  modal.style.display = 'flex';
};
