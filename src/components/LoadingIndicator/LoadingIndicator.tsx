import { FC } from 'react';
import clsx from 'clsx';
import { LoadingIndicatorWrapper, Spinner } from 'components/LoadingIndicator/loadingIndicator.style';

interface LoadingIndicatorProps {
  isLoading: boolean;
}

export const LoadingIndicator: FC<LoadingIndicatorProps> = ({ isLoading }) => {
  return (
    <LoadingIndicatorWrapper className={clsx({ active: isLoading })}>
      <Spinner className={clsx('loading-indicator__loader')}></Spinner>
    </LoadingIndicatorWrapper>
  );
};
