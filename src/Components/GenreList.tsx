import useGenres from "../hooks/useGenres";
import {HStack, Image, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../Services/image-url";

const GenreList = () => {
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
                    <Text fontSize='lg'>{genre.name}</Text>
                </HStack>
            </ListItem>)}
        </List>
    );
};

export default GenreList;