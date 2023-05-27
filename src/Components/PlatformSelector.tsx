import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronBarDown} from "react-icons/all";
import usePlatforms from "../hooks/usePlatforms";


const PlatformSelector = () => {

    const {data, error} = usePlatforms();

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} colorScheme='blue' rightIcon={<BsChevronBarDown/>}>Platform</MenuButton>
            <MenuList>
                {data.map(platform => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;