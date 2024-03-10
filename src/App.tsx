import { MainLayout } from 'layouts/MainLayout/MainLayout';
import { UserEventsCalendar } from 'components/UserEventsCalendar/UserEventsCalendar';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <MainLayout>
      <UserEventsCalendar />
      <ToastContainer />
    </MainLayout>
  );
};

export default App;
