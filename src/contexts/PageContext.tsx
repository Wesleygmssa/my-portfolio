import {
    createContext,
    ReactNode,
    RefObject,
    useContext,
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
    scrollToPageTop: () => void;
    handleCopyEmailInput: () => void;
    handleIsVisiblePopover: () => void;
    aboutRef: RefObject<HTMLElement>;
    skillsRef: RefObject<HTMLElement>;
    portfolioRef: RefObject<HTMLElement>;
    contactRef: RefObject<HTMLElement>;
    emailRef: RefObject<HTMLParagraphElement>;
    isVisibleHeader: boolean;
    isVisiblePopover: boolean;

    isPageTop: boolean;
};

const PageContext = createContext({} as PageContextData);

export const PageProvider = ({ children }: PageProviderProps) => {
    const [isVisibleHeader, setIsVisibleHeader] = useState(true);
    const [isVisiblePopover, setIsVisiblePopover] = useState(false);
    const [isPageTop, setIsPageTop] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const aboutRef = useRef<HTMLElement>(null);
    const skillsRef = useRef<HTMLElement>(null);
    const portfolioRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);
    const emailRef = useRef<HTMLParagraphElement>(null);

    function scrollToSection(elementRef: RefObject<HTMLElement>) {
        const elementOffsetY = elementRef.current?.offsetTop;
        window.scrollTo({
            top: Number(elementOffsetY) - 120,
            left: 0,
            behavior: "smooth",
        });
    }

    function scrollToPageTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    function handleCopyEmailInput() {
        copy(String(emailRef.current?.innerText));
    }

    function handleIsVisiblePopover() {
        setIsVisiblePopover(!isVisiblePopover);
    }

    useEffect(() => {
        function toggleVisibleHeader() {
            let scrollTop =
                window.scrollY || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                setIsVisibleHeader(false);
                setIsVisiblePopover(false);
            } else {
                setIsVisibleHeader(true);
            }

            scrollTop == 0 ? setIsPageTop(true) : setIsPageTop(false);

            setLastScrollTop(scrollTop);
        }
        addEventListener("scroll", toggleVisibleHeader);

        return () => {
            removeEventListener("scroll", toggleVisibleHeader);
        };
    }, [lastScrollTop, setIsPageTop, setIsVisibleHeader]);

    return (
        <PageContext.Provider
            value={{
                scrollToSection,
                scrollToPageTop,
                handleCopyEmailInput,
                handleIsVisiblePopover,
                aboutRef,
                skillsRef,
                portfolioRef,
                contactRef,
                emailRef,
                isVisibleHeader,
                isVisiblePopover,
                isPageTop,
            }}
        >
            {children}
        </PageContext.Provider>
    );
};

export const usePageContext = () => {
    return useContext(PageContext);
};
