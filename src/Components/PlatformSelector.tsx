import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronBarDown} from "react-icons/all";
import usePlatforms from "../hooks/usePlatforms";
import {Platform} from "../hooks/useGames";


interface Props {
    onSelectPlatform: (platform: Platform) => void,
    selectedPlatform: Platform | null,
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {

    const {data, error} = usePlatforms();

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} colorScheme='blue' rightIcon={<BsChevronBarDown/>}>
                {selectedPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {data.map(platform => <MenuItem key={platform.id}
                                                onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;