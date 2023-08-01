import { useEffect, useState } from "react";
import ButtonIcon from "../../assets/button-up.png";

const ScrollUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  return (
    <>
      {showButton ? (
        <button className="fixed bottom-0 right-0 z-50 cursor-pointer p-4 w-[84px] animate-pulse">
          <img
            src={ButtonIcon}
            onClick={handleScrollToTop}
            alt="button-to-top"
          />
        </button>
      ) : null}
    </>
  );
};

export default ScrollUpButton;
