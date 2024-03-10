import { FC, MouseEvent, useCallback, useRef } from 'react';
import { LabelsModal } from './LabelsModal/LabelsModal';
import { useModal } from 'shared/hooks/useModal';
import { UserEventLabel } from 'core/types/events-labels.type';
import { useSelector } from 'react-redux';
import { selectorGetLabels } from 'store/labels-entity/selectors';
import { ReactComponent as ClearLabelsIcon } from 'assets/brush-icon.svg';
import {
  ClearLabelsButton,
  LabelsPickerWrapper,
  Placeholder,
  SelectedItem,
  SelectedItemsList,
} from 'components/FiltersBlock/Labels/labels.style';

interface LabelsProps {
  selectedLabels: string[];
  handleUpdateSelectedLabelsList: (labelItem: UserEventLabel) => void;
  handleEditLabelClick: (labelItem: UserEventLabel) => void;
  handleClearLabelsFilters: () => void;
}

export const Labels: FC<LabelsProps> = ({
  selectedLabels,
  handleEditLabelClick,
  handleUpdateSelectedLabelsList,
  handleClearLabelsFilters,
}) => {
  const allLabels = useSelector(selectorGetLabels);
  const { open, isOpen, close } = useModal();
  const labelsRef = useRef<HTMLDivElement>(null);

  const handleClearButtonClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      handleClearLabelsFilters();
    },
    [handleClearLabelsFilters]
  );

  return (
    <LabelsPickerWrapper ref={labelsRef}>
      <SelectedItemsList onClick={open}>
        {selectedLabels.length > 0 ? (
          selectedLabels.map((el) => (
            <SelectedItem key={el} style={{ background: allLabels.find((item) => el === item.id)?.color }} />
          ))
        ) : (
          <Placeholder>Click to select labels</Placeholder>
        )}
        <ClearLabelsButton onClick={handleClearButtonClick}>
          <ClearLabelsIcon />
        </ClearLabelsButton>
      </SelectedItemsList>
      {isOpen && (
        <LabelsModal
          selectedLabels={selectedLabels}
          handleConfirm={close}
          handleEditLabelClick={handleEditLabelClick}
          handleUpdateSelectedLabelsList={handleUpdateSelectedLabelsList}
          anchorEl={labelsRef.current}
          isOpen={isOpen}
          handleClose={close}
        />
      )}
    </LabelsPickerWrapper>
  );
};
