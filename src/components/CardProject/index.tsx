import { CardProjectContainer } from "./styles";
import { BsArrowBarUp } from "react-icons/bs";
import { FcOpenedFolder } from "react-icons/fc";
import Link from "next/link";

type CardProjectProps = {
    title: string;
    description: string | null;
    website: string | null;
    repository: string;
    imageUrl: string;
};

export const CardProject = ({
    title,
    description,
    website,
    repository,
    imageUrl,
}: CardProjectProps) => {
    console.log(imageUrl);
    return (
        <CardProjectContainer>
            <div className="image">
                {imageUrl ? (
                    <img src={imageUrl} alt={title} />
                ) : (
                    <p>Imagem não encontrada</p>
                )}
            </div>
            <div className="overlay">
                <div className="description">
                    <div className="title">
                        <h4>{title}</h4>
                        <button>
                            <BsArrowBarUp size={30} />
                        </button>
                    </div>
                    <div className="infos">
                        <p>{description}</p>
                        <div className="links">
                            <Link href={website ?? repository}>
                                {website ? (
                                    <a className="link">Acessar site</a>
                                ) : (
                                    <a className="link">Acessar Repositório</a>
                                )}
                            </Link>
                            {website && (
                                <Link href={repository}>
                                    <a className="link-extra">
                                        <FcOpenedFolder size={25} />
                                    </a>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </CardProjectContainer>
    );
};
