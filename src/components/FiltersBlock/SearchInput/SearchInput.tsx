import { ChangeEvent, FC } from 'react';
import { ReactComponent as BrushIcon } from 'assets/brush-icon.svg';
import { ClearTextButton, Input, SearchInputWrapper } from 'components/FiltersBlock/SearchInput/searchInput.style';

interface SearchInputProps {
  searchText: string;
  setSearchText: (value: string) => void;
  handleClearSearchText: () => void;
}

export const SearchInput: FC<SearchInputProps> = ({ searchText, setSearchText, handleClearSearchText }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <SearchInputWrapper>
      <Input value={searchText} onChange={handleChange} placeholder='Search text' autoComplete='off' />
      <ClearTextButton onClick={handleClearSearchText} type='button'>
        <BrushIcon />
      </ClearTextButton>
    </SearchInputWrapper>
  );
};
