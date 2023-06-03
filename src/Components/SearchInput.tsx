import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/all";
import {useRef} from "react";


interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({onSearch}: Props) => {

    const ref = useRef<HTMLInputElement>(null);

    return (

        <form style={{width: '100%'}} onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) {
                console.log(ref.current.value);
                onSearch(ref.current.value);
            }

        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>}/>
                <Input ref={ref} borderRadius={20} placeholder='Search games...' variant='filled'/>
            </InputGroup>
        </form>

    );
}

export default SearchInput;