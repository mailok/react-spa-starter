import * as React from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';

type SearchInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
>;

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, disabled, onChange, value, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    
    React.useImperativeHandle(ref, () => inputRef.current!, []);
    
    const handleClear = () => {
      if (onChange) {
        const syntheticEvent = {
          target: { value: '' },
          currentTarget: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>;
        
        onChange(syntheticEvent);
      }
      
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };
    
    return (
      <div className={cn('relative rounded-md', className)}>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          disabled={disabled}
          className="text-muted-foreground absolute top-1/2 left-1 h-6 w-6 -translate-y-1/2 cursor-pointer rounded-md"
        >
          <Search size={18} />
        </Button>
        <input
          type="text"
          className="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent pl-9 pr-9 py-3 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50"
          ref={inputRef}
          disabled={disabled}
          value={value}
          onChange={onChange}
          {...props}
        />
        <Button
          type="button"
          size="icon"
          variant="ghost"
          disabled={disabled}
          onClick={handleClear}
          className="text-muted-foreground absolute top-1/2 right-1 h-6 w-6 -translate-y-1/2 cursor-pointer rounded-md"
        >
          <X size={18} />
        </Button>
      </div>
    );
  }
);
SearchInput.displayName = 'SearchInput';

export { SearchInput };
