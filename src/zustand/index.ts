import { create } from "zustand";

interface Props {
    currentStar : number,
    setCurrentStar : (number : number) => void;
}

const useStateNumber = create<Props>(set => ({
    currentStar : 0,
    setCurrentStar : (number : number) => set({currentStar : number })
}) )

export default useStateNumber;