import { toast, ToastOptions } from 'react-toastify';

/**
 * Custom hook for displaying toast notifications.
 *
 * This hook abstracts the functionality of the toast notifications provided by 'react-toastify',
 * allowing for easy display of informational messages throughout the application with customizable options.
 *
 * @returns {Function} - A function `handleToast` that can be called to display a toast notification.
 *
 * Usage:
 * const handleToast = useToast();
 * handleToast('Your message here', { type: 'success' });
 *
 * @param {string} toastMessage - The message to be displayed in the toast.
 * @param {ToastOptions} [options] - Optional configuration options for the toast notification, such as type, autoClose duration, and position.
 *
 * The default options set the toast to appear at the top-right of the screen, auto-close after 5 seconds,
 * and allow user interactions like click to close, pause on hover, and drag to dismiss. The default theme
 * is 'colored', and the default notification type is 'info', but these can be overridden by specifying different options.
 */
export const useToast = (): Function => {
  const handleToast = (toastMessage: string, options?: ToastOptions) =>
    toast(toastMessage, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      type: 'info',
      ...options,
    });

  return handleToast;
};
