import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

interface StarsProps {
  children?: React.ReactNode;
}
export const Stars = ({ children }: StarsProps) => {
  const resetColor = "var(--starsResetColor)";
  const colorCycleMatrix = useMemo(
    () => [
      ["#8c97ad", "#eded82", "#333333", "#e6d3d3", "#a0b8a8"],
      ["#e6d3d3", "#333333", "#eded82", "#a0b8a8", "#8c97ad"],
      ["#a0b8a8", "#8c97ad", "#e6d3d3", "#eded82", "#333333"],
      ["#333333", "#e6d3d3", "#a0b8a8", "#8c97ad", "#eded82"],
      ["#eded82", "#a0b8a8", "#8c97ad", "#333333", "#e6d3d3"],
    ],
    [],
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [cycleIndex, setCycleIndex] = useState(0);

  const [aColor, setAColor] = useState(resetColor);
  const [bColor, setBColor] = useState(resetColor);
  const [cColor, setCColor] = useState(resetColor);
  const [dColor, setDColor] = useState(resetColor);
  const [eColor, setEColor] = useState(resetColor);

  useEffect(() => {
    if (isAnimating) {
      setTimeout(() => {
        setAColor(colorCycleMatrix[cycleIndex][0]);
        setBColor(colorCycleMatrix[cycleIndex][1]);
        setCColor(colorCycleMatrix[cycleIndex][2]);
        setDColor(colorCycleMatrix[cycleIndex][3]);
        setEColor(colorCycleMatrix[cycleIndex][4]);
        setCycleIndex(cycleIndex < 4 ? cycleIndex + 1 : 0);
      }, 120);
    } else {
      setAColor(resetColor);
      setBColor(resetColor);
      setCColor(resetColor);
      setDColor(resetColor);
      setEColor(resetColor);
    }
  }, [resetColor, isAnimating, cycleIndex, colorCycleMatrix]);

  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setIsAnimating(true);
    const handleComplete = (url: string) =>
      url === router.asPath && setIsAnimating(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      onMouseEnter={() => setIsAnimating(true)}
      onMouseLeave={() => setIsAnimating(false)}
    >
      <svg
        width="17"
        height="28"
        viewBox="0 0 17 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path
          d="M8.008 22.448C7.84667 21.4947 7.42133 20.468 6.732 19.368C6.04267 18.2533 5.06 17.2193 3.784 16.266C2.52267 15.3127 1.26133 14.704 0 14.44V13.516C1.24667 13.2227 2.442 12.68 3.586 11.888C4.74467 11.0813 5.71267 10.1133 6.49 8.984C7.282 7.82533 7.788 6.68133 8.008 5.552H8.932C9.064 6.28533 9.328 7.04067 9.724 7.818C10.12 8.58067 10.626 9.314 11.242 10.018C11.8727 10.7073 12.5767 11.3307 13.354 11.888C14.5127 12.7093 15.6933 13.252 16.896 13.516V14.44C16.0893 14.6013 15.2533 14.9313 14.388 15.43C13.5373 15.9287 12.7453 16.5227 12.012 17.212C11.2787 17.8867 10.6773 18.598 10.208 19.346C9.51867 20.446 9.09333 21.48 8.932 22.448H8.008Z"
          fill={aColor}
        />
      </svg>
      <div className="mx-3 text-center">{children}</div>
      <svg
        width="60"
        height="28"
        viewBox="0 0 60 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path
          d="M54.9893 16.1709L55.0753 12.5225L51.9581 14.4287L51.3799 13.4131L54.5987 11.6709L51.3799 9.92871L51.9581 8.91308L55.0753 10.8193L54.9893 7.1709H56.1612L56.0753 10.8193L59.1924 8.91308L59.7706 9.92871L56.5518 11.6709L59.7706 13.4131L59.1924 14.4287L56.0753 12.5225L56.1612 16.1709H54.9893Z"
          fill={bColor}
        />
        <path
          d="M34.5264 9.77246C34.0629 9.77246 33.6436 9.66829 33.2686 9.45996C32.8936 9.25163 32.5941 8.97038 32.3702 8.61621C32.1514 8.25684 32.0421 7.85579 32.0421 7.41308C32.0421 6.96517 32.1514 6.55892 32.3702 6.19434C32.5941 5.82454 32.8936 5.53027 33.2686 5.31152C33.6436 5.09277 34.0629 4.9834 34.5264 4.9834C34.9952 4.9834 35.4144 5.09277 35.7842 5.31152C36.1592 5.53027 36.4535 5.82454 36.6671 6.19434C36.8858 6.55892 36.9952 6.96517 36.9952 7.41308C36.9952 7.85579 36.8858 8.25684 36.6671 8.61621C36.4535 8.97038 36.1592 9.25163 35.7842 9.45996C35.4144 9.66829 34.9952 9.77246 34.5264 9.77246ZM34.5264 8.81934C34.9379 8.81934 35.279 8.67611 35.5499 8.38965C35.8207 8.10319 35.9561 7.77767 35.9561 7.41308C35.9561 7.03288 35.8207 6.69694 35.5499 6.40527C35.279 6.1084 34.9379 5.95996 34.5264 5.95996C34.115 5.95996 33.7738 6.1084 33.503 6.40527C33.2374 6.69694 33.1046 7.03288 33.1046 7.41308C33.1046 7.78288 33.24 8.111 33.5108 8.39746C33.7816 8.67871 34.1202 8.81934 34.5264 8.81934Z"
          fill={cColor}
        />
        <path
          d="M21.7968 23.0168C20.2715 23.0168 18.9148 22.7014 17.7268 22.0708C16.5535 21.4254 15.6295 20.5308 14.9548 19.3868C14.2948 18.2428 13.9648 16.9081 13.9648 15.3828C13.9648 14.2388 14.1555 13.2048 14.5368 12.2808C14.9182 11.3421 15.4535 10.5354 16.1428 9.86078C16.8468 9.18611 17.6755 8.66545 18.6288 8.29878C19.5968 7.93211 20.6528 7.74878 21.7968 7.74878C22.1928 7.74878 22.5815 7.77078 22.9628 7.81478C23.3442 7.85878 23.7108 7.93211 24.0628 8.03478V8.58478C22.7722 8.58478 21.6428 8.87811 20.6748 9.46478C19.7215 10.0514 18.9808 10.8581 18.4528 11.8848C17.9248 12.9114 17.6608 14.0774 17.6608 15.3828C17.6608 16.6881 17.9248 17.8541 18.4528 18.8808C18.9808 19.9074 19.7215 20.7141 20.6748 21.3008C21.6428 21.8874 22.7722 22.1808 24.0628 22.1808V22.7308C23.7108 22.8334 23.3442 22.9068 22.9628 22.9508C22.5815 22.9948 22.1928 23.0168 21.7968 23.0168ZM21.7748 22.4448C20.8215 22.1808 19.9708 21.7261 19.2228 21.0808C18.4895 20.4354 17.9175 19.6288 17.5068 18.6608C17.0962 17.6781 16.8908 16.5854 16.8908 15.3828C16.8908 14.1801 17.0962 13.0948 17.5068 12.1268C17.9175 11.1588 18.4895 10.3448 19.2228 9.68478C19.9708 9.02478 20.8215 8.57011 21.7748 8.32078C20.8508 8.32078 19.9635 8.48945 19.1128 8.82678C18.2622 9.14945 17.5068 9.61878 16.8468 10.2348C16.1868 10.8508 15.6662 11.5914 15.2848 12.4568C14.9035 13.3221 14.7128 14.2974 14.7128 15.3828C14.7128 16.4681 14.9035 17.4434 15.2848 18.3088C15.6662 19.1741 16.1868 19.9148 16.8468 20.5308C17.5068 21.1468 18.2622 21.6234 19.1128 21.9608C19.9635 22.2834 20.8508 22.4448 21.7748 22.4448Z"
          fill={dColor}
        />
        <path
          d="M0.968 17.671L1.65 15.603L0 14.481H2.046L2.772 12.281L3.498 14.481H5.544L3.894 15.603L4.576 17.671L2.772 16.373L0.968 17.671Z"
          fill={eColor}
        />
      </svg>
    </div>
  );
};
