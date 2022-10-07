import { RefObject, useRef } from "react";
import { useRouter } from "next/router";

import * as Popover from "@radix-ui/react-popover";

import { useTranslation } from "next-i18next";

import {
    ButtonOptionLang,
    ContainerOptionsLang,
    Content,
    Title,
    Close,
} from "./styles";
import { IoClose, IoLanguage } from "react-icons/io5";
import { usePageContext } from "../../../contexts/PageContext";

export const ButtonSwitchLang = () => {
    const { t } = useTranslation();
    const router = useRouter();

    const { isVisiblePopover, handleIsVisiblePopover } = usePageContext();

    const refLangPTBR = useRef(null);
    const refLangEN = useRef(null);

    const handleLocaleChange = (event: RefObject<HTMLButtonElement>) => {
        const value = String(event.current?.getAttribute("data-lang"));

        router.push(router.route, router.asPath, {
            locale: value,
        });
    };

    return (
        <Popover.Root
            open={isVisiblePopover}
            onOpenChange={handleIsVisiblePopover}
        >
            <Popover.Trigger>
                <IoLanguage fontSize={28} />
            </Popover.Trigger>

            <Popover.Portal>
                <Content align="end" style={{ zIndex: 9 }}>
                    <Popover.Arrow height={10} fill="#202024" />
                    <Title>
                        <span>{t("language")}</span>
                        <Close>
                            <IoClose fontSize={24} />
                        </Close>
                    </Title>

                    <ContainerOptionsLang>
                        <ButtonOptionLang
                            data-lang="pt-BR"
                            ref={refLangPTBR}
                            onClick={() => handleLocaleChange(refLangPTBR)}
                        >
                            {t("langPTBR")}
                        </ButtonOptionLang>

                        <ButtonOptionLang
                            data-lang="en"
                            ref={refLangEN}
                            onClick={() => handleLocaleChange(refLangEN)}
                        >
                            {t("langEN")}
                        </ButtonOptionLang>
                    </ContainerOptionsLang>
                </Content>
            </Popover.Portal>
        </Popover.Root>
    );
};
