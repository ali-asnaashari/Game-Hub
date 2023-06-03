import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../Services/image-url";


interface Props {
    game: Game,
}

const GameCard = ({game}: Props) => {

    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)}></Image>
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
                <Heading fontSize='1xl' paddingBottom={2}>{game.name}</Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;