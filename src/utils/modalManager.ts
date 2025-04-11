let openModals = 0;

export const ModalManager = {
  increment() {
    openModals++;
    if (openModals === 1) {
      document.body.classList.add("overflow-hidden");
    }
  },
  decrement() {
    openModals = Math.max(0, openModals - 1);
    if (openModals === 0) {
      document.body.classList.remove("overflow-hidden");
    }
  },
  reset() {
    openModals = 0;
    document.body.classList.remove("overflow-hidden");
  },
};
