import { createContext, ReactNode, useEffect, useState } from "react";
import { Api } from "../services/Api";

interface ProfileProviderProps {
    children: ReactNode;
}

type ProfileContextData = {
    amountRepositories: number;
    listRepositories: RepositoriesProps[];
    loadMoreRepositories: () => void;
};

type RepositoriesProps = {
    name: string;
    html_url: string;
    description: string | null;
    homepage: string | null;
};

export const ProfileContext = createContext({} as ProfileContextData);

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
    const [amountRepositories, setAmountRepositories] = useState(0);
    const [listRepositories, setListRepositories] = useState<
        RepositoriesProps[]
    >([]);
    const [listRepositoriesCurrentPage, setListRepositoriesCurrentPage] =
        useState(1);

    function loadMoreRepositories() {
        listRepositoriesCurrentPage >= 1 &&
            setListRepositoriesCurrentPage(listRepositoriesCurrentPage + 1);
    }

    useEffect(() => {
        async function getAllRepositories() {
            const userReq = await Api.get("users/brunorguerra");
            const amountRepos = await userReq.data.public_repos;
            setAmountRepositories(amountRepos);
            const reposReq = await Api.get("users/brunorguerra/repos");
            const listRepos = await reposReq.data.splice(
                0,
                5 * listRepositoriesCurrentPage
            );
            setListRepositories(listRepos);
        }
        getAllRepositories();
    }, [listRepositoriesCurrentPage]);

    return (
        <ProfileContext.Provider
            value={{
                amountRepositories,
                listRepositories,
                loadMoreRepositories,
            }}
        >
            {children}
        </ProfileContext.Provider>
    );
};
