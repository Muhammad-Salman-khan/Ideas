import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../command";
type CommandProps = {
  Value: string;
  Open: boolean;
  ChangeValue: (e: boolean) => void;
  SetValue: (e: string) => void;
};

const CommandBox = ({ Value, Open, ChangeValue, SetValue }: CommandProps) => {
  return (
    <CommandDialog open={Open} onOpenChange={ChangeValue}>
      <CommandInput
        value={Value}
        onValueChange={SetValue}
        placeholder="Search Ideas"
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          <CommandItem
            onSelect={() => {
              ChangeValue(false);
            }}
          >
            <span>Hello</span>
            <span className="text-xs text-muted-foreground ml-auto">Hello</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default CommandBox;
