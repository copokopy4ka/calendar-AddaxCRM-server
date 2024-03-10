import { CalendarGrid } from 'components/CalendarGrid/CalendarGrid';
import { Header } from 'components/Header/Header';
import { useMonthDaysData } from 'shared/hooks/useMonthDaysData';
import { UserEventFormModal } from 'components/UserEventFormModal/UserEventFormModal';
import { EventLabelFormModal } from 'components/EventLabelForm/EventLabelFormModal/EventLabelFormModal';
import { useHandleUserEvent } from 'shared/hooks/useHandleUserEvent';
import { useHandleEventLabels } from 'shared/hooks/useHandleEventLabels';
import { UserEventsCalendarWrapper } from 'components/UserEventsCalendar/userEventsCalendar.style';

export const UserEventsCalendar = () => {
  const { daysList, selectedDay, handleDayClick, setDaysList, handleDownloadCalendarData, handleUploadCalendarData } =
    useMonthDaysData();
  const {
    selectedEvent,
    openEventFormModal,
    isOpenEventFormModal,
    closeEventFormModal,
    handleEventClick,
    handleSubmitEventForm,
    handleDeleteEvent,
    selectedLabels,
    setSelectedLabels,
    handleUpdateSelectedLabelsList,
    handleClearLabelsFilters,
    handleClearSearchInput,
    setSearchText,
    searchText,
    handleGetFilteredEvents,
  } = useHandleUserEvent();

  const {
    labelData,
    openLabelFormModal,
    isOpenLabelFormModal,
    closeLabelFormModal,
    handleLabelClick,
    handleSubmitLabelForm,
    selectedColor,
    handleSelectedColor,
  } = useHandleEventLabels();

  return (
    <UserEventsCalendarWrapper>
      <Header
        handleCreateEvent={openEventFormModal}
        handleCreateLabel={openLabelFormModal}
        selectedLabels={selectedLabels}
        handleEditLabelClick={handleLabelClick}
        handleUpdateSelectedLabelsList={handleUpdateSelectedLabelsList}
        handleClearLabelsFilters={handleClearLabelsFilters}
        handleClearSearchInput={handleClearSearchInput}
        searchText={searchText}
        setSearchText={setSearchText}
        handleGetFilteredEvents={handleGetFilteredEvents}
        handleDownloadCalendarData={handleDownloadCalendarData}
        handleUploadCalendarData={handleUploadCalendarData}
      />
      <CalendarGrid
        daysList={daysList}
        setDaysList={setDaysList}
        selectedDay={selectedDay}
        handleDayClick={handleDayClick}
        handleEventClick={handleEventClick}
      />
      {selectedDay && (
        <UserEventFormModal
          isOpen={isOpenEventFormModal}
          handleClose={closeEventFormModal}
          onSubmit={handleSubmitEventForm}
          userEventData={selectedEvent}
          handleDeleteEvent={handleDeleteEvent}
          selectedDay={selectedDay}
          setSelectedLabels={setSelectedLabels}
          selectedLabels={selectedLabels}
        />
      )}
      <EventLabelFormModal
        isOpen={isOpenLabelFormModal}
        handleClose={closeLabelFormModal}
        onSubmit={handleSubmitLabelForm}
        labelData={labelData}
        selectedColor={selectedColor}
        handleSelectedColor={handleSelectedColor}
      />
    </UserEventsCalendarWrapper>
  );
};
