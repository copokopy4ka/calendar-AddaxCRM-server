import * as Yup from 'yup';

const daySchema = Yup.object().shape({
  title: Yup.string().required(),
  date: Yup.string().required(),
  labels: Yup.array().of(
    Yup.object().shape({
      color: Yup.string().required(),
      text: Yup.string().required(),
    })
  ),
});

export const calendarSchema = Yup.array().of(daySchema);
