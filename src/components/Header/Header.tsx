import { ChangeEvent, FC } from 'react';
import { DatePicker } from 'components/DatePicker/DatePicker';
import { CreateEventButton } from 'components/CreateEventButton/CreateEventButton';
import { CreateLabelButton } from 'components/CreateLabelButton/CreateLabelButton';
import { FiltersBlock } from 'components/FiltersBlock/FiltersBlock';
import { UserEventLabel } from 'core/types/events-labels.type';
import { ActionButtons } from 'components/ActionButtons/ActionButtons';
import { CreateTaskAndLabelButtons, HeaderWrapper } from 'components/Header/header.style';

interface HeaderProps {
  handleCreateEvent: () => void;
  handleCreateLabel: () => void;
  selectedLabels: string[];
  handleUpdateSelectedLabelsList: (labelItem: UserEventLabel) => void;
  handleEditLabelClick: (labelItem: UserEventLabel) => void;
  handleClearLabelsFilters: () => void;
  handleClearSearchInput: () => void;
  handleGetFilteredEvents: () => void;
  setSearchText: (value: string) => void;
  searchText: string;
  handleDownloadCalendarData: () => void;
  handleUploadCalendarData: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Header: FC<HeaderProps> = ({
  handleCreateEvent,
  handleCreateLabel,
  selectedLabels,
  handleEditLabelClick,
  handleUpdateSelectedLabelsList,
  handleClearLabelsFilters,
  handleClearSearchInput,
  handleGetFilteredEvents,
  setSearchText,
  searchText,
  handleDownloadCalendarData,
  handleUploadCalendarData,
}) => {
  return (
    <HeaderWrapper>
      <CreateTaskAndLabelButtons>
        <CreateEventButton handleOpenForm={handleCreateEvent} />
        <CreateLabelButton handleOpenForm={handleCreateLabel} />
      </CreateTaskAndLabelButtons>
      <FiltersBlock
        selectedLabels={selectedLabels}
        handleEditLabelClick={handleEditLabelClick}
        handleUpdateSelectedLabelsList={handleUpdateSelectedLabelsList}
        handleClearLabelsFilters={handleClearLabelsFilters}
        handleClearSearchInput={handleClearSearchInput}
        handleGetFilteredEvents={handleGetFilteredEvents}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <ActionButtons
        handleUploadCalendarData={handleUploadCalendarData}
        handleDownloadCalendarData={handleDownloadCalendarData}
      />
      <DatePicker />
    </HeaderWrapper>
  );
};
