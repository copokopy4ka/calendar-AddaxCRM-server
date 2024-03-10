import { Labels } from 'components/FiltersBlock/Labels/Labels';
import { UserEventLabel } from 'core/types/events-labels.type';
import { FC } from 'react';
import { SearchInput } from 'components/FiltersBlock/SearchInput/SearchInput';
import { ApplyButton, FiltersBlockWrapper } from 'components/FiltersBlock/filtersBlock.style';

interface FiltersBlockProps {
  selectedLabels: string[];
  handleUpdateSelectedLabelsList: (labelItem: UserEventLabel) => void;
  handleEditLabelClick: (labelItem: UserEventLabel) => void;
  handleClearLabelsFilters: () => void;
  handleClearSearchInput: () => void;
  handleGetFilteredEvents: () => void;
  searchText: string;
  setSearchText: (value: string) => void;
}

export const FiltersBlock: FC<FiltersBlockProps> = ({
  selectedLabels,
  handleEditLabelClick,
  handleUpdateSelectedLabelsList,
  handleClearLabelsFilters,
  handleGetFilteredEvents,
  handleClearSearchInput,
  setSearchText,
  searchText,
}) => {
  return (
    <FiltersBlockWrapper>
      <SearchInput
        handleClearSearchText={handleClearSearchInput}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Labels
        selectedLabels={selectedLabels}
        handleEditLabelClick={handleEditLabelClick}
        handleUpdateSelectedLabelsList={handleUpdateSelectedLabelsList}
        handleClearLabelsFilters={handleClearLabelsFilters}
      />
      <ApplyButton onClick={handleGetFilteredEvents}>Apply</ApplyButton>
    </FiltersBlockWrapper>
  );
};
