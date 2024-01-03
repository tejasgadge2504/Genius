// ***********************Hero Names *****************************

const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "JEE-Mains";
  }, 0);

  setTimeout(() => {
    text.textContent = "JEE-ADV";
  }, 4000);

  setTimeout(() => {
    text.textContent = "NEET";
  }, 8000);

  setTimeout(() => {
    text.textContent = "MHT-CET";
  }, 12000);

  setTimeout(() => {
    text.textContent = "BITS";
  }, 16000);

  setTimeout(() => {
    text.textContent = "VIEEE";
  }, 20000);

  setTimeout(() => {
    text.textContent = "CUET";
  }, 24000);

};


textLoad();
setInterval(textLoad, 28000);



// *****************Intersecting Numbers Code*****************

const workSection = document.querySelector(".numbers-work-section");
const workObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) return;

    // ***********************Numbers *****************************


    const counterNum = document.querySelectorAll(".countNum");

    const speed = 200;

    counterNum.forEach((curElem) => {
      const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);
        // console.log(targetNumber);
        const initialNumber = parseInt(curElem.innerHTML);
        // console.log(initialNumber);
        const incNum = Math.trunc(targetNumber / speed);
        // console.log(incNum);

        if (initialNumber < targetNumber) {
          curElem.innerHTML = initialNumber + incNum;

          setTimeout(updateNumber, 10);
        }
      };

      updateNumber();
    });

    observer.unobserve(workSection);

  },

  {
    root: null,
    threshold: 0,
  }
);

workObserver.observe(workSection);
