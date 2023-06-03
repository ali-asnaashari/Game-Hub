import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronBarDown} from "react-icons/all";

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} colorScheme='blue' rightIcon={<BsChevronBarDown/>}>
                Order by: Relevance
            </MenuButton>
            <MenuList>
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>date added</MenuItem>
                <MenuItem>Release Date</MenuItem>
                <MenuItem>Popularity</MenuItem>
                <MenuItem>Average rating</MenuItem>
            </MenuList>
        </Menu>
    );
}


export default SortSelector;