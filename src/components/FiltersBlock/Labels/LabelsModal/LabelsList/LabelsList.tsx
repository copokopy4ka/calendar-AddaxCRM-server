import { FC, MouseEvent, useCallback } from 'react';
import clsx from 'clsx';
import { selectorGetLabels } from 'store/labels-entity/selectors';
import { useSelector } from 'react-redux';
import { UserEventLabel } from 'core/types/events-labels.type';
import { ReactComponent as EditIcon } from 'assets/edit-icon.svg';
import {
  EditButton,
  FakeBackground,
  ItemColorBox,
  ItemNoLabelsText,
  ItemText,
  LabelsListItem,
  LabelsListWrapper,
} from 'components/FiltersBlock/Labels/LabelsModal/LabelsList/labelsList.style';

interface LabelsListProps {
  selectedLabels: string[];
  handleUpdateSelectedLabelsList: (labelItem: UserEventLabel) => void;
  handleEditLabelClick: (labelItem: UserEventLabel) => void;
}

export const LabelsList: FC<LabelsListProps> = ({
  selectedLabels,
  handleUpdateSelectedLabelsList,
  handleEditLabelClick,
}) => {
  const allLabels = useSelector(selectorGetLabels);

  const handleEditButton = useCallback(
    (e: MouseEvent<HTMLButtonElement>, item: UserEventLabel) => {
      e.stopPropagation();
      handleEditLabelClick(item);
    },
    [handleEditLabelClick]
  );

  return (
    <LabelsListWrapper>
      {allLabels.length > 0 ? (
        allLabels.map((item) => (
          <LabelsListItem
            key={item.id}
            className={clsx({ active: selectedLabels.includes(item.id) })}
            onClick={() => handleUpdateSelectedLabelsList(item)}
          >
            <ItemText>{item.text}</ItemText>
            <EditButton onClick={(e) => handleEditButton(e, item)}>
              <EditIcon />
            </EditButton>
            <ItemColorBox style={{ background: item.color }} />
            <FakeBackground className={clsx('fake-background')} style={{ background: item.color }} />
          </LabelsListItem>
        ))
      ) : (
        <ItemNoLabelsText>No created labels yet. To add label, You should create one first</ItemNoLabelsText>
      )}
    </LabelsListWrapper>
  );
};
