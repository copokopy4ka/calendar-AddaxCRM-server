import { FC, PropsWithChildren } from 'react';
import { useInitialConfigurations } from 'shared/hooks/useInitialConfigurations';
import { LoadingIndicator } from 'components/LoadingIndicator/LoadingIndicator';
import { MainLayoutContainer } from './mainLayout.style';
import 'react-toastify/dist/ReactToastify.css';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const isLoading = useInitialConfigurations();

  return (
    <>
      <MainLayoutContainer>{children}</MainLayoutContainer>
      <LoadingIndicator isLoading={isLoading} />
    </>
  );
};
