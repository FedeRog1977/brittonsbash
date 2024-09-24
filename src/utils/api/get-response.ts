import { setSessionItem } from './set-session-item';

export const getResponse = async (
  url: string,
  method: string,
  callback?: () => void,
  groupKey?: string,
  groupObjects?: boolean
) => {
  await fetch(url, { method: method }).then((response) => {
    response
      .json()
      .then((data) => {
        Array.isArray(data)
          ? setSessionItem(`response-${groupKey}`, data)
          : groupObjects
            ? setSessionItem(`response-${groupKey}`, data)
            : Object.keys(data).filter((key) => {
                setSessionItem(`response-${key}`, data[key]);
                return null;
              });
      })
      .then(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        callback ? callback() : () => {};
      })
      .catch((error: Error) => {
        console.log(error);
      });
  });
};
