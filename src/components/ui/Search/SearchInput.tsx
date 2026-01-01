import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/input-group";
import { Kbd } from "@/components/kbd";
import { SearchIcon } from "lucide-react";
type SearchProps = {
  Value: string;
  ChangeValue: (e: boolean) => void;
  SetValue: (e: string) => void;
};

const SearchInput = ({ Value, ChangeValue, SetValue }: SearchProps) => {
  return (
    <div className="flex-1 w cursor-text" onClick={() => ChangeValue(true)}>
      <InputGroup className="">
        <InputGroupInput
          value={Value}
          onChange={(e) => SetValue(e.target.value)}
          placeholder="Search or press Ctrl+K..."
        />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default SearchInput;
