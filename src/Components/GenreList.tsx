import useGenres, {Genre} from "../hooks/useGenres";
import {Button, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../Services/image-url";


interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectGenre}: Props) => {
    const {data, isLoading, error} = useGenres();

    if (error)
        return null;

    if (isLoading)
        return <Spinner size='md' thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500'/>

    return (
        <List>
            {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                    <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} fontSize='lg' variant='link'
                            onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                </HStack>
            </ListItem>)}
        </List>
    );
};

export default GenreList;