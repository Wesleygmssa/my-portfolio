import {
    createContext,
    ReactNode,
    RefObject,
    useEffect,
    useRef,
    useState,
} from "react";
import copy from "copy-to-clipboard";

interface PageProviderProps {
    children: ReactNode;
}

type PageContextData = {
    scrollToSection: (elementRef: RefObject<HTMLElement>) => void;
    scrollPageTop: () => void;
    handleCopyEmailInput: () => void;
    aboutRef: RefObject<HTMLElement>;
    skillsRef: RefObject<HTMLElement>;
    portfolioRef: RefObject<HTMLElement>;
    contactRef: RefObject<HTMLElement>;
    inputEmailRef: RefObject<HTMLInputElement>;
    isVisibleHeader: boolean;
    handlePageTop: boolean;
};

export const PageContext = createContext({} as PageContextData);

export const PageProvider = ({ children }: PageProviderProps) => {
    const aboutRef = useRef<HTMLElement>(null);
    const skillsRef = useRef<HTMLElement>(null);
    const portfolioRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const [isVisibleHeader, setIsVisibleHeader] = useState(true);
    const [handlePageTop, setHandlePageTop] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    function scrollToSection(elementRef: RefObject<HTMLElement>) {
        const elementOffsetY = elementRef.current?.offsetTop;
        window.scrollTo({
            top: Number(elementOffsetY) - 120,
            left: 0,
            behavior: "smooth",
        });
    }

    function scrollPageTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    function handleCopyEmailInput() {
        copy(String(inputEmailRef.current?.value));
    }

    useEffect(
        function onFirstMount() {
            function toggleVisibleHeader() {
                let scrollTop =
                    window.scrollY || document.documentElement.scrollTop;

                scrollTop > lastScrollTop
                    ? setIsVisibleHeader(false)
                    : setIsVisibleHeader(true);

                scrollTop == 0
                    ? setHandlePageTop(true)
                    : setHandlePageTop(false);

                setLastScrollTop(scrollTop);
            }

            addEventListener("scroll", toggleVisibleHeader);

            return () => {
                removeEventListener("scroll", toggleVisibleHeader);
            };
        },
        [lastScrollTop]
    );

    return (
        <PageContext.Provider
            value={{
                scrollToSection,
                scrollPageTop,
                handleCopyEmailInput,
                aboutRef,
                skillsRef,
                portfolioRef,
                contactRef,
                inputEmailRef,
                isVisibleHeader,
                handlePageTop,
            }}
        >
            {children}
        </PageContext.Provider>
    );
};
